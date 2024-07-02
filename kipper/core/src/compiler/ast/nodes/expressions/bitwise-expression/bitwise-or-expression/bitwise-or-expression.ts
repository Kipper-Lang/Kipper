/**
 * Bitwise OR expression AST node.
 * Represents the bitwise OR operation between two expressions.
 * @since 0.11.0
 * @example
 * 1 | 1 // 1
 * 1 | 0 // 1
 * 0 | 1 // 1
 * 0 | 0 // 0
 */

import { BitwiseExpression } from "../bitwise-expression";
import type { BitwiseOrExpressionContext } from "../../../../../parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../parser";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { Expression } from "../../expression";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { CheckedType } from "../../../../../analysis";
import type { BitwiseOrExpressionSemantics } from "./bitwise-or-expression-semantics";
import type { BitwiseOrExpressionTypeSemantics } from "./bitwise-or-expression-type-semantics";

/**
 * Bitwise OR expression AST node.
 * Represents the bitwise OR operation between two expressions.
 * @since 0.11.0
 * @example
 * 1 | 1 // 1
 * 1 | 0 // 1
 * 0 | 1 // 1
 * 0 | 0 // 0
 */
export class BitwiseOrExpression extends BitwiseExpression<
	BitwiseOrExpressionSemantics,
	BitwiseOrExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: BitwiseOrExpressionContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseOrExpression;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return BitwiseOrExpression.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * Returns the name of the rule for this AST node. This represents the specific type of the {@link antlrRuleCtx} that
	 * this AST node wraps.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return BitwiseOrExpression.ruleName;
	}

	constructor(antlrRuleCtx: BitwiseOrExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for Kipper's bitwise OR expression.
	 * This will log all warnings using {@link programCtx.logger}.
	 *
	 * @since 0.11.0
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the expressions on the left and right side of the bitwise OR operator.
		const leftOp: Expression = this.children[0];
		const rightOp: Expression = this.children[1];

		// Ensure that both expressions are present.
		if (!leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: "|",
		};
	}

	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.programCtx
			.typeCheck(this)
			.validBitwiseExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("num"),
		};
	}

	public checkForWarnings = undefined;

	public override get antlrRuleCtx(): BitwiseOrExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseOrExpression;

	readonly targetCodeGenerator = this.codeGenerator.bitwiseOrExpression;
}
