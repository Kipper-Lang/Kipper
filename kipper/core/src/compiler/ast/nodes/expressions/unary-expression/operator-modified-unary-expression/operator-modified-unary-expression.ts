/**
 * Operator modified expressions, which are used to modify the value of an expression based on an
 * {@link KipperUnaryOperator unary operator.}
 * @since 0.1.0
 * @example
 * -41 // -41
 * +59 // 59
 */
import type { OperatorModifiedUnaryExpressionSemantics } from "./operator-modified-unary-expression-semantics";
import type { OperatorModifiedUnaryTypeSemantics } from "./operator-modified-unary-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { Expression } from "../../expression";
import type { KipperBitwiseNotOperator, KipperNegateOperator, KipperSignOperator } from "../../../../../const";
import { kipperUnaryModifierOperators } from "../../../../../const";
import { UnaryExpression } from "../unary-expression";
import type { OperatorModifiedUnaryExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping, UnaryOperatorContext } from "../../../../../lexer-parser";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { BuiltInTypes } from "../../../../../semantics";

/**
 * Operator modified expressions, which are used to modify the value of an expression based on an
 * {@link KipperUnaryOperator unary operator.}
 * @since 0.1.0
 * @example
 * -41 // -41
 * +59 // 59
 */
export class OperatorModifiedUnaryExpression extends UnaryExpression<
	OperatorModifiedUnaryExpressionSemantics,
	OperatorModifiedUnaryTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_operatorModifiedUnaryExpression;

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
	protected override readonly _antlrRuleCtx: OperatorModifiedUnaryExpressionContext;

	constructor(antlrRuleCtx: OperatorModifiedUnaryExpressionContext, parent: CompilableASTNode) {
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
		return OperatorModifiedUnaryExpression.kind;
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
		return OperatorModifiedUnaryExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): OperatorModifiedUnaryExpressionContext {
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
		// Get the raw antlr4 parse-tree children, which should store the operator
		const children = this.getAntlrRuleChildren();

		// Get the operator
		const unaryOperator = <KipperNegateOperator | KipperSignOperator | KipperBitwiseNotOperator | undefined>(
			children.find((token) => {
				return (
					token instanceof UnaryOperatorContext &&
					kipperUnaryModifierOperators.find((op) => op === token.text) !== undefined
				);
			})?.text
		);

		// Get the expression of this unary expression
		const exp: Expression = this.children[0];

		// Ensure that the children are fully present and not undefined
		if (!exp || !unaryOperator) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			operator: unaryOperator,
			operand: exp,
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

		this.typeSemantics = {
			evaluatedType: semanticData.operator === "!" ? BuiltInTypes.bool : BuiltInTypes.num,
		};

		// Ensure the operator is compatible with the type of the operand
		this.programCtx.typeCheck(this).validUnaryExpression(this);
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.operatorModifiedUnaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.operatorModifiedUnaryExpression;
}
