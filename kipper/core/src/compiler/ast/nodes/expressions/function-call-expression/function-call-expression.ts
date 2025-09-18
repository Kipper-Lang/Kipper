/**
 * Function call class, which represents a function call expression in the Kipper language.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 * // or
 * print("Hello world!")
 */
import type { FunctionCallExpressionSemantics } from "./function-call-expression-semantics";
import type { FunctionCallExpressionTypeSemantics } from "./function-call-expression-type-semantics";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import type { IdentifierPrimaryExpressionSemantics } from "../primary-expression";
import { Expression } from "../expression";
import type { FunctionCallExpressionContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import type {
	BuiltInTypeFunc,
	ScopeFunctionDeclaration,
	ScopeParameterDeclaration,
	ScopeVariableDeclaration,
} from "../../../../semantics";
import { ScopeDeclaration } from "../../../../semantics";
import type { KipperReferenceable } from "../../../../const";

/**
 * Function call class, which represents a function call expression in the Kipper language.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 * // or
 * print("Hello world!")
 */
export class FunctionCallExpression extends Expression<
	FunctionCallExpressionSemantics,
	FunctionCallExpressionTypeSemantics,
	Expression
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_functionCallExpression;
	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FunctionCallExpressionContext;

	constructor(antlrRuleCtx: FunctionCallExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return FunctionCallExpression.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return FunctionCallExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FunctionCallExpressionContext {
		return this._antlrRuleCtx;
	}

	public hasSideEffects(): boolean {
		return true; // This expression has side effects as it calls a function
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the identifier of the function that is called
		const toCall = this.children[0];
		const toCallSemantics = toCall?.getSemanticData();

		// Ensure that the identifier is present
		if (!toCallSemantics) {
			throw new UnableToDetermineSemanticDataError();
		}

		let identifier: string | undefined = undefined;
		let ref: KipperReferenceable | undefined = undefined;
		if ("ref" in toCallSemantics && "identifier" in toCallSemantics) {
			identifier = (<IdentifierPrimaryExpressionSemantics>toCallSemantics).identifier;
			ref = (<IdentifierPrimaryExpressionSemantics>toCallSemantics).ref;
		}

		// Every item from index 1 to the end is an argument (First child is the identifier).
		// Tries to fetch the function. If it fails throw a {@link UnknownFunctionIdentifier} error.
		const args: Array<Expression> = this.children.length > 1 ? this.children.slice(1, this.children.length) : [];

		this.semanticData = {
			identifier: identifier,
			target: ref ?? toCall,
			args: args,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure that the reference is a callable function
		this.programCtx.typeCheck(this).refTargetCallable(semanticData.target);

		// Ensure valid arguments are passed
		this.programCtx.typeCheck(this).validFunctionCallArguments(semanticData.target, semanticData.args);
		const calledExp = <ScopeFunctionDeclaration | ScopeParameterDeclaration | ScopeVariableDeclaration | Expression>(
			semanticData.target
		);

		// The evaluated type is always equal to the return of the function
		const funcType = <BuiltInTypeFunc>(
			(calledExp instanceof ScopeDeclaration ? calledExp.type : calledExp.getTypeSemanticData().evaluatedType)
		);
		this.typeSemantics = {
			evaluatedType: funcType.returnType,
			funcOrExp: calledExp,
			funcType: funcType,
		};
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.functionCallExpression;
	readonly targetCodeGenerator = this.codeGenerator.functionCallExpression;
}
