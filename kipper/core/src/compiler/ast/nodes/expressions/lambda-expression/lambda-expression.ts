/**
 * Lambda expression class, which represents a lambda expression in the AST.
 * @since 0.11.0
 * @example
 * let add = (a, b) => a + b;
 */
import { Expression } from "../expression";
import type { LambdaExpressionSemantics } from "./lambda-expression-semantics";
import type { LambdaExpressionTypeSemantics } from "./lambda-expression-type-semantics";
import type { LambdaExpressionContext } from "../../../../parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import type { ScopeNode } from "../../../scope-node";
import { LambdaScope } from "../../../../analysis/symbol-table/lambda-scope";
import type { Statement } from "../../statements";
import { CompoundStatement } from "../../statements";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import { ParameterDeclaration } from "../../declarations";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import { CheckedType } from "../../../../analysis";

/**
 * Lambda expression class, which represents a lambda expression in the AST.
 * @since 0.11.0
 * @example
 * let add = (a, b) => a + b;
 */
export class LambdaExpression
	extends Expression<
		LambdaExpressionSemantics,
		LambdaExpressionTypeSemantics,
		Expression | ParameterDeclaration | CompoundStatement
	>
	implements ScopeNode<LambdaScope> {
	/**
	 * The inner scope of this lambda expression.
	 */
	private readonly _innerScope: LambdaScope;

	/**
	 * Gets the inner scope of this function, where also the {@link semanticData.params arguments} should be registered.
	 * @since 0.10.0
	 */
	public get innerScope(): LambdaScope {
		return this._innerScope;
	}

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: LambdaExpressionContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_lambdaExpression;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_lambdaExpression}.
	 * @since 0.11.0
	 */
	public override get kind() {
		return LambdaExpression.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return LambdaExpression.ruleName;
	}

	constructor(antlrRuleCtx: LambdaExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._innerScope = new LambdaScope(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): LambdaExpressionContext {
		return this._antlrRuleCtx;
	}

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

		this.programCtx.semanticCheck(this).validFunctionBody(body);
		this.semanticData = {
			returnTypeSpecifier: retTypeSpecifier,
			params: params,
			functionBody: <CompoundStatement>body, // Will always syntactically be a compound statement
		};
	}

	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Get the type that will be returned using the return type specifier
		const returnType = semanticData.returnTypeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("func"),
			returnType: returnType,
		};

		// Ensure that all code paths return a value
		if (semanticData.functionBody instanceof CompoundStatement) {
			this.programCtx.typeCheck(this).validReturnCodePathsInFunctionBody(this);
		}
	}

	public checkForWarnings = undefined;

	readonly targetSemanticAnalysis = this.semanticAnalyser.lambdaExpression;
	readonly targetCodeGenerator = this.codeGenerator.lambdaExpression;
}
