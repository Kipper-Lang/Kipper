/**
 * Operator modified expressions, which are used to modify the value of an expression based on an
 * {@link KipperUnaryOperator unary operator.}
 * @since 0.1.0
 * @example
 * -41 // -41
 * +59 // 59
 */
import type { OperatorModifiedUnaryExpressionSemantics } from "../../../semantic-data";
import type { OperatorModifiedUnaryTypeSemantics } from "../../../type-data";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import type { Expression } from "../expression";
import { UnaryExpression } from "./unary-expression";
import { OperatorModifiedUnaryExpressionContext, ParserASTMapping, UnaryOperatorContext } from "../../../../parser";
import { KipperNegateOperator, KipperSignOperator, kipperUnaryModifierOperators } from "../../../../const";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import { CheckedType } from "../../../../analysis";

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
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: OperatorModifiedUnaryExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link ParserASTMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = ParserASTMapping.RULE_operatorModifiedUnaryExpression;

	constructor(antlrRuleCtx: OperatorModifiedUnaryExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
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
		const unaryOperator = <KipperNegateOperator | KipperSignOperator | undefined>children.find((token) => {
			return (
				token instanceof UnaryOperatorContext &&
				kipperUnaryModifierOperators.find((op) => op === token.text) !== undefined
			);
		})?.text;

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
			evaluatedType: CheckedType.fromCompilableType(semanticData.operator === "!" ? "bool" : "num"),
		};

		// Ensure the operator is compatible with the type of the operand
		this.programCtx.typeCheck(this).validUnaryExpression(this);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): OperatorModifiedUnaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.operatorModifiedUnaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.operatorModifiedUnaryExpression;
}
