import type { TargetASTNodeSemanticAnalyser } from "../../../../../../target-presets";
import { Expression } from "../../../expression";
import type { InstanceofExpressionSemantics } from "./instanceof-expression-semantics";
import type { InstanceofExpressionTypeSemantics } from "./instanceof-expression-type-semantics";
import type { InstanceOfExpressionContext } from "../../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../../lexer-parser";
import type { CompilableASTNode } from "../../../../../compilable-ast-node";

export class InstanceofExpression extends Expression<InstanceofExpressionSemantics, InstanceofExpressionTypeSemantics> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_instanceofExpression;
	/**
	 * The static rule name for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: InstanceOfExpressionContext;

	constructor(antlrRuleCtx: InstanceOfExpressionContext, parent: CompilableASTNode) {
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
		return InstanceofExpression.kind;
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
		return InstanceofExpression.ruleName;
	}

	public async primarySemanticAnalysis(): Promise<void> {
		console.log("InstanceofExpression primarySemanticAnalysis");
		throw new Error("Method not implemented.");
	}

	public async primarySemanticTypeChecking(): Promise<void> {
		throw new Error("Method not implemented.");
	}

	public targetCodeGenerator = this.codeGenerator.instanceofExpression;
	targetSemanticAnalysis = this.semanticAnalyser.instanceofExpression;

	public checkForWarnings = undefined; // TODO!
}
