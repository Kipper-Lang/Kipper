/**
 * Bitwise and expression AST node.
 * @since 0.11.0
 * @example
 * 1 & 1 // 1
 * 1 & 0 // 0
 * 0 & 1 // 0
 * 0 & 0 // 0
 */

import type { BitwiseAndExpressionSemantics } from "./bitwise-and-expression-semantics";
import type { BitwiseAndExpressionTypeSemantics } from "./bitwise-and-expression-type-semantics";
import { BitwiseExpression } from "../bitwise-expression";
import type { BitwiseAndExpressionContext } from "../../../../../parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../parser";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { Expression } from "../../expression";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { ProcessedType } from "../../../../../analysis";

/**
 * Bitwise and expression AST node.
 * @since 0.11.0
 * @example
 * 1 & 1 // 1
 * 1 & 0 // 0
 * 0 & 1 // 0
 * 0 & 0 // 0
 */
export class BitwiseAndExpression extends BitwiseExpression<
	BitwiseAndExpressionSemantics,
	BitwiseAndExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: BitwiseAndExpressionContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseAndExpression;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return BitwiseAndExpression.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	public override get ruleName() {
		return BitwiseAndExpression.ruleName;
	}

	constructor(antlrRuleCtx: BitwiseAndExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The primary semantic analysis for this AST node.
	 * @since 0.11.0
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const leftOp: Expression = this.children[0];
		const rightOp: Expression = this.children[1];

		if (!leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: "&",
		};
	}

	/**
	 * The primary semantic type checking for this AST node.
	 * @since 0.11.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.programCtx
			.typeCheck(this)
			.validBitwiseExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		this.typeSemantics = {
			evaluatedType: ProcessedType.fromCompilableType("num"),
		};
	}

	/**
	 * The primary code generation for this AST node.
	 * @since 0.11.0
	 */
	public checkForWarnings = undefined;

	/**
	 * The primary code generation for this AST node.
	 * @since 0.11.0
	 */
	public override get antlrRuleCtx(): BitwiseAndExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseAndExpression;

	readonly targetCodeGenerator = this.codeGenerator.bitwiseAndExpression;
}
