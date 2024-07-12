/**
 * Bitwise XOR expression AST node.
 * @since 0.11.0
 * @example
 * 1 ^ 1 // 0
 * 1 ^ 0 // 1
 * 0 ^ 1 // 1
 * 0 ^ 0 // 0
 */
import { BitwiseExpression } from "../bitwise-expression";
import type { BitwiseXorExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { Expression } from "../../expression";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { BuiltInTypes } from "../../../../../semantics";
import type { BitwiseXorExpressionSemantics } from "./bitwise-xor-expression-semantics";
import type { BitwiseXorExpressionTypeSemantics } from "./bitwise-xor-expression-type-semantics";

/**
 * Bitwise XOR expression AST node.
 * @since 0.11.0
 * @example
 * 1 ^ 1 // 0
 * 1 ^ 0 // 1
 * 0 ^ 1 // 1
 * 0 ^ 0 // 0
 */
export class BitwiseXorExpression extends BitwiseExpression<
	BitwiseXorExpressionSemantics,
	BitwiseXorExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseXorExpression;
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
	protected override readonly _antlrRuleCtx: BitwiseXorExpressionContext;

	constructor(antlrRuleCtx: BitwiseXorExpressionContext, parent: CompilableASTNode) {
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
		return BitwiseXorExpression.kind;
	}

	/**
	 * Returns the name of the rule for this AST node. This represents the specific type of the {@link antlrRuleCtx} that ths AST Node wraps.
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return BitwiseXorExpression.ruleName;
	}

	/**
	 * The code generation for this AST node.
	 * @since 0.11.0
	 */
	public override get antlrRuleCtx(): BitwiseXorExpressionContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Primary semantic analysis for this AST node. This will log all warnings using the {@link programCtx.logger} method.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the left and right operands
		const leftOp: Expression = this.children[0];
		const rightOp: Expression = this.children[1];

		// Ensure that the children are fully present and not undefined
		if (!leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: "^",
		};
	}

	/**
	 * Primary semantic type checking for this AST node. This will log all warnings using the {@link programCtx.logger} method.
	 * This will throw errors if encountered.
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

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseXorExpression;
	readonly targetCodeGenerator = this.codeGenerator.bitwiseXorExpression;
}
