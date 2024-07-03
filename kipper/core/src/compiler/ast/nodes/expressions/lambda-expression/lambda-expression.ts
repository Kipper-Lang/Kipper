/**
 * Lambda expression class, which represents a lambda expression in the AST.
 * @since 0.11.0
 * @example
 * ```kipper
 * let add = (a, b) => a + b;
 * ```
 */
import { Expression } from "../expression";
import type { LambdaExpressionSemantics } from "./lambda-expression-semantics";
import type { LambdaExpressionTypeSemantics } from "./lambda-expression-type-semantics";
import type { LambdaExpressionContext } from "../../../../parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import type { ScopeNode } from "../../../scope-node";
import { LambdaScope } from "../../../../analysis/symbol-table/lambda-scope";

export class LambdaExpression
	extends Expression<LambdaExpressionSemantics, LambdaExpressionTypeSemantics>
	implements ScopeNode<LambdaScope>
{
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

	public async primarySemanticAnalysis(): Promise<void> {}

	public async primarySemanticTypeChecking(): Promise<void> {}

	public checkForWarnings = undefined;

	readonly targetSemanticAnalysis = this.semanticAnalyser.lambdaExpression;
	readonly targetCodeGenerator = this.codeGenerator.lambdaExpression;
}
