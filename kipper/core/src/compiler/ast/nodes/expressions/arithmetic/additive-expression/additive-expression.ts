/**
 * Additive expression, which can be used add together or concatenate two expressions.
 *
 * Subtraction is also considered to be an additive operation.
 * @since 0.1.0
 * @example
 * 4 + 4 // 8
 * 9 - 3 // 6
 */
import type { AdditiveExpressionSemantics } from "./additive-expression-semantics";
import type { AdditiveExpressionTypeSemantics } from "./additive-expression-type-semantics";
import type { Expression } from "../../expression";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { AdditiveExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { KipperAdditiveOperator } from "../../../../../const";
import { kipperAdditiveOperators } from "../../../../../const";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { ArithmeticExpression } from "../arithmetic-expression";

/**
 * Additive expression, which can be used add together or concatenate two expressions.
 *
 * Subtraction is also considered to be an additive operation.
 * @since 0.1.0
 * @example
 * 4 + 4 // 8
 * 9 - 3 // 6
 */
export class AdditiveExpression extends ArithmeticExpression<
	AdditiveExpressionSemantics,
	AdditiveExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_additiveExpression;
	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];
	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!
	readonly targetSemanticAnalysis = this.semanticAnalyser.additiveExpression;
	readonly targetCodeGenerator = this.codeGenerator.additiveExpression;
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: AdditiveExpressionContext;

	constructor(antlrRuleCtx: AdditiveExpressionContext, parent: CompilableASTNode) {
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
		return AdditiveExpression.kind;
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
		return AdditiveExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): AdditiveExpressionContext {
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

		const operator = <KipperAdditiveOperator | undefined>children.find((token) => {
			return token instanceof TerminalNode && kipperAdditiveOperators.find((op) => op === token.text) !== undefined;
		})?.text;

		// Get the expressions of this additive expression
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

		this.typeSemantics = {
			// Simply use the left operand's type, since the type of the right operand is irrelevant (since they are always
			// the same anyway - otherwise there would have already been an error)
			evaluatedType: semanticData.leftOp.getTypeSemanticData().evaluatedType,
		};
	}
}
