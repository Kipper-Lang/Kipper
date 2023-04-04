/**
 * Multiplicative expression, which can be used to perform multiplicative operations on two expressions.
 *
 * Divisions, multiplications, and modulus are also considered to be multiplicative operations.
 * @since 0.1.0
 * @example
 * 16 * 6 // 96
 * 12 / 5 // 2.4
 * 96 % 15 // 6
 * 2 ** 8 // 256
 */
import type { MultiplicativeExpressionSemantics } from "../../../semantic-data";
import type { MultiplicativeTypeSemantics } from "../../../type-data";
import type { Expression } from "../expression";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import { MultiplicativeExpressionContext, ParserASTMapping } from "../../../../parser";
import { KipperMultiplicativeOperator, kipperMultiplicativeOperators } from "../../../../const";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import { CheckedType } from "../../../../analysis";
import { ArithmeticExpression } from "./arithmetic-expression";

/**
 * Multiplicative expression, which can be used to perform multiplicative operations on two expressions.
 *
 * Divisions, multiplications, and modulus are also considered to be multiplicative operations.
 * @since 0.1.0
 * @example
 * 16 * 6 // 96
 * 12 / 5 // 2.4
 * 96 % 15 // 6
 * 2 ** 8 // 256
 */
export class MultiplicativeExpression extends ArithmeticExpression<
	MultiplicativeExpressionSemantics,
	MultiplicativeTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: MultiplicativeExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link ParserASTMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = ParserASTMapping.RULE_multiplicativeExpression;

	constructor(antlrRuleCtx: MultiplicativeExpressionContext, parent: CompilableASTNode) {
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
		const operator = <KipperMultiplicativeOperator | undefined>children.find((token) => {
			return (
				token instanceof TerminalNode && kipperMultiplicativeOperators.find((op) => op === token.text) !== undefined
			);
		})?.text;

		// Get the expressions of this multiplicative expression
		const leftOp: Expression = this.children[0];
		const rightOp: Expression = this.children[1];

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Assert that the arithmetic expression is valid
		this.programCtx
			.typeCheck(this)
			.validArithmeticExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		// A multiplicative expression will always be of type 'num'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("num"),
		};
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
	public override get antlrRuleCtx(): MultiplicativeExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.multiplicativeExpression;
	readonly targetCodeGenerator = this.codeGenerator.multiplicativeExpression;
}
