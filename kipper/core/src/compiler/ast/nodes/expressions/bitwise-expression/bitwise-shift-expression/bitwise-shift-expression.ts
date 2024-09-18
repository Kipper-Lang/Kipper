/**
 * Bitwise shift expression node.
 * @since 0.11.0
 * @example
 * 1 << 1 // 2
 * 1 >> 1 // 0
 * 1 >>> 1 // 0
 * 2 << 1 // 4
 * 2 >> 1 // 1
 * 2 >>> 1 // 1
 */
import {BitwiseExpression} from "../bitwise-expression";
import type {BitwiseOrExpressionContext, BitwiseShiftExpressionContext} from "../../../../../lexer-parser";
import {BitwiseShiftOperatorsContext, KindParseRuleMapping, ParseRuleKindMapping} from "../../../../../lexer-parser";
import type {CompilableASTNode} from "../../../../compilable-ast-node";
import type {Expression} from "../../expression";
import {UnableToDetermineSemanticDataError} from "../../../../../../errors";
import {BuiltInTypes} from "../../../../../semantics";
import type {BitwiseShiftExpressionSemantics} from "./bitwise-shift-expression-semantics";
import type {BitwiseShiftExpressionTypeSemantics} from "./bitwise-shift-expression-type-semantics";
import type {KipperBitwiseShiftOperator} from "../../../../../const";
import {kipperBitwiseShiftOperators} from "../../../../../const";

/**
 * Bitwise shift expression node.
 * @since 0.11.0
 * @example
 * 1 << 1 // 2
 * 1 >> 1 // 0
 * 1 >>> 1 // 0
 * 2 << 1 // 4
 * 2 >> 1 // 1
 * 2 >>> 1 // 1
 */
export class BitwiseShiftExpression extends BitwiseExpression<
	BitwiseShiftExpressionSemantics,
	BitwiseShiftExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseShiftExpression;
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
	protected override readonly _antlrRuleCtx: BitwiseShiftExpressionContext;

	constructor(antlrRuleCtx: BitwiseShiftExpressionContext, parent: CompilableASTNode) {
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
		return BitwiseShiftExpression.kind;
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
		return BitwiseShiftExpression.ruleName;
	}

	/**
	 * The antlr rule context for this AST node.
	 * @since 0.11.0
	 */
	public override get antlrRuleCtx(): BitwiseOrExpressionContext {
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
		const antlrRuleChildren = this.getAntlrRuleChildren();

		// Get the left and right operands
		const leftOp: Expression = this.children[0];
		const rightOp: Expression = this.children[1];

		const operator = <KipperBitwiseShiftOperator | undefined>antlrRuleChildren.find((token) => {
			return (
				token instanceof BitwiseShiftOperatorsContext &&
				kipperBitwiseShiftOperators.find((op) => op === token.text) !== undefined
			);
		})?.text;

		// Ensure that the children are fully present and not undefined
		if (!operator || !leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: operator,
		};
	}

	/**
	 * Performs the primary semantic type checking for this AST node. This will log all warnings using the
	 * {@link programCtx.logger} method and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.11.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.programCtx
			.typeCheck(this)
			.validBitwiseExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		this.typeSemantics = {
			evaluatedType: BuiltInTypes.num,
		};
	}

	public checkForWarnings = undefined;

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseShiftExpression;
	readonly targetCodeGenerator = this.codeGenerator.bitwiseShiftExpression;
}
