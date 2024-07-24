/**
 * Lambda expression class, which represents a lambda expression in the AST.
 * @since 0.11.0
 * @example
 * var add: num = (a: num, b: num) => a + b;
 */
import { Expression } from "../../expression";
import type { LambdaPrimaryExpressionSemantics } from "./lambda-primary-expression-semantics";
import type { LambdaPrimaryExpressionTypeSemantics } from "./lambda-primary-expression-type-semantics";
import type { LambdaPrimaryExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { ScopeNode } from "../../../../scope-node";
import type { Statement } from "../../../statements";
import { CompoundStatement } from "../../../statements";
import type { IdentifierTypeSpecifierExpression } from "../../type-specifier-expression";
import { ParameterDeclaration } from "../../../declarations";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import {BuiltInTypeFunc, BuiltInTypes, LambdaScope} from "../../../../../semantics";

/**
 * Lambda expression class, which represents a lambda expression in the AST.
 * @since 0.11.0
 * @example
 * var add: num = (a: num, b: num) -> a + b;
 */
export class LambdaPrimaryExpression
	extends Expression<
		LambdaPrimaryExpressionSemantics,
		LambdaPrimaryExpressionTypeSemantics,
		Expression | ParameterDeclaration | CompoundStatement
	>
	implements ScopeNode<LambdaScope>
{
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_lambdaPrimaryExpression;

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
	protected override readonly _antlrRuleCtx: LambdaPrimaryExpressionContext;

	/**
	 * The inner scope of this lambda expression.
	 */
	private readonly _innerScope: LambdaScope;

	constructor(antlrRuleCtx: LambdaPrimaryExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._innerScope = new LambdaScope(this);
	}

	/**
	 * Gets the inner scope of this function, where also the {@link semanticData.params arguments} should be registered.
	 * @since 0.10.0
	 */
	public get innerScope(): LambdaScope {
		return this._innerScope;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_lambdaPrimaryExpression}.
	 * @since 0.11.0
	 */
	public override get kind() {
		return LambdaPrimaryExpression.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return LambdaPrimaryExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): LambdaPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.11.0
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		let body: Statement | undefined;
		let retTypeSpecifier: IdentifierTypeSpecifierExpression | undefined;
		let params: Array<ParameterDeclaration> = [];

		// Create shallow copy of the children
		let children = [...this.children];

		// Evaluate the primary semantic data for the function
		while (children.length > 0) {
			let child = children.shift();

			if (child instanceof ParameterDeclaration) {
				params.push(child);
			} else {
				// Once the return type has been reached, stop, as the last two items should be the return type and func body
				retTypeSpecifier = <IdentifierTypeSpecifierExpression>child;
				body = <any>children.pop();
				break;
			}
		}

		if (!retTypeSpecifier) {
			throw new UnableToDetermineSemanticDataError();
		}

		const retType = retTypeSpecifier.getSemanticData().rawType;
		this.programCtx.semanticCheck(this).validFunctionBody(body);
		this.semanticData = {
			returnType: retType,
			returnTypeSpecifier: retTypeSpecifier,
			params: params,
			functionBody: <CompoundStatement | Expression>body, // Will always syntactically be a compound statement
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.11.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const paramTypes = semanticData.params.map((param) => param.getTypeSemanticData().valueType);
		const returnType = semanticData.returnTypeSpecifier.getTypeSemanticData().storedType;

		this.typeSemantics = {
			evaluatedType: BuiltInTypes.Func.changeGenericTypeArguments([
				{
					identifier: "T",
					type: semanticData.params.map((param) => param.getTypeSemanticData().storedType),
				},
				{
					identifier: "R",
					type: returnType,
				},
			]),
			type: new BuiltInTypeFunc(paramTypes, returnType),
		};

		// Ensure that all code paths return a value
		if (semanticData.functionBody instanceof CompoundStatement) {
			this.programCtx.typeCheck(this).validReturnCodePathsInFunctionBody(this);
		}
	}

	public checkForWarnings = undefined;

	readonly targetSemanticAnalysis = this.semanticAnalyser.lambdaPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.lambdaPrimaryExpression;
}
