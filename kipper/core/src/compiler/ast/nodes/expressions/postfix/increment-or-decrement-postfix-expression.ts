import type { IncrementOrDecrementPostfixExpressionSemantics } from "../../../semantic-data";
/**
 * Increment or Decrement expression, which represents a right-side -- or ++ expression modifying a numeric value.
 * @since 0.1.0
 * @example
 * 49++; // 49 will be incremented by 1
 * 11--; // 11 will be decremented by 1
 */
import type { IncrementOrDecrementPostfixExpressionTypeSemantics } from "../../../type-data";
import type { KipperIncrementOrDecrementOperator } from "../../../../const";
import { Expression } from "../expression";
import { IncrementOrDecrementPostfixExpressionContext, ParserASTMapping } from "../../../../parser";
import { CompilableASTNode } from "../../../compilable-ast-node";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import { CheckedType } from "../../../../analysis";

/**
 * Increment or Decrement expression, which represents a right-side -- or ++ expression modifying a numeric value.
 * @since 0.1.0
 * @example
 * 49++; // 49 will be incremented by 1
 * 11--; // 11 will be decremented by 1
 */
export class IncrementOrDecrementPostfixExpression extends Expression<
	IncrementOrDecrementPostfixExpressionSemantics,
	IncrementOrDecrementPostfixExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IncrementOrDecrementPostfixExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link ParserASTMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = ParserASTMapping.RULE_incrementOrDecrementPostfixExpression;

	constructor(antlrRuleCtx: IncrementOrDecrementPostfixExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	public hasSideEffects(): boolean {
		return true; // This expression has side effects as it modifies the value of the operand
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const exp: Expression = this.children[0];
		const operator = <KipperIncrementOrDecrementOperator>this.sourceCode.slice(-2); // After the expression

		// Ensure that the child expression is present
		if (!exp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			operand: exp,
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
		this.typeSemantics = {
			// This will always be a number
			evaluatedType: CheckedType.fromKipperType("num"),
		};

		// Ensure that this expression is valid (e.g. the operand is a number)
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
	public override get antlrRuleCtx(): IncrementOrDecrementPostfixExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.incrementOrDecrementPostfixExpression;
	readonly targetCodeGenerator = this.codeGenerator.incrementOrDecrementPostfixExpression;
}
