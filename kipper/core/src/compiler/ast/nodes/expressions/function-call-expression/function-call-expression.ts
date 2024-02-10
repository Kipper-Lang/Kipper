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
import type { KipperReferenceableFunction } from "../../../../const";
import type { IdentifierPrimaryExpressionSemantics } from "../primary-expression";
import { Expression } from "../expression";
import { FunctionCallExpressionContext, KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import { CheckedType } from "../../../../analysis";

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
	FunctionCallExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FunctionCallExpressionContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_functionCallExpression;

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
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

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

	constructor(antlrRuleCtx: FunctionCallExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	public hasSideEffects(): boolean {
		return true; // This expression has side effects as it calls a function
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FunctionCallExpressionContext {
		return this._antlrRuleCtx;
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
		const identifierSemantics = <IdentifierPrimaryExpressionSemantics>this.children[0].getSemanticData();

		// Ensure that the identifier is present
		if (!identifierSemantics || !identifierSemantics.ref) {
			throw new UnableToDetermineSemanticDataError();
		}

		// Every item from index 1 to the end is an argument (First child is the identifier).
		// Tries to fetch the function. If it fails throw a {@link UnknownFunctionIdentifier} error.
		const args: Array<Expression> = this.children.length > 1 ? this.children.slice(1, this.children.length) : [];

		this.semanticData = {
			identifier: identifierSemantics.identifier,
			args: args,
			callTarget: identifierSemantics.ref,
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
		this.programCtx.typeCheck(this).refTargetCallable(semanticData.callTarget.refTarget);
		const calledFunc = <KipperReferenceableFunction>semanticData.callTarget.refTarget;

		// Ensure valid arguments are passed
		this.programCtx.typeCheck(this).validFunctionCallArguments(calledFunc, semanticData.args);

		// Get the type that the function call will evaluate to
		let evaluatedType: CheckedType;
		if (calledFunc.returnType instanceof CheckedType) {
			evaluatedType = calledFunc.returnType;
		} else {
			evaluatedType = CheckedType.fromCompilableType(calledFunc.returnType);
		}

		// The evaluated type is always equal to the return of the function
		this.typeSemantics = {
			evaluatedType: evaluatedType,
			func: calledFunc,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.functionCallExpression;
	readonly targetCodeGenerator = this.codeGenerator.functionCallExpression;
}
