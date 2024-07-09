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
import type { MultiplicativeExpressionSemantics } from "./multiplicative-expression-semantics";
import type { MultiplicativeTypeSemantics } from "./multiplicative-expression-type-semantics";
import type { Expression } from "../../expression";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { MultiplicativeExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { KipperMultiplicativeOperator } from "../../../../../const";
import { kipperMultiplicativeOperators } from "../../../../../const";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { ArithmeticExpression } from "../arithmetic-expression";
import { BuiltInTypes, kipperInternalBuiltInFunctions } from "../../../../../semantics";

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
	 * which is returned inside the {@link antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: MultiplicativeExpressionContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_multiplicativeExpression;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return MultiplicativeExpression.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return MultiplicativeExpression.ruleName;
	}

	constructor(antlrRuleCtx: MultiplicativeExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link hasFailed} is true, as that indicates that the semantic analysis of
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
	 * This will not run in case that {@link hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Assert that the arithmetic expression is valid
		this.programCtx
			.typeCheck(this)
			.validArithmeticExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		// A multiplicative will always have the type of the first operant. This is also the case for string multiplication
		this.typeSemantics = {
			evaluatedType: semanticData.leftOp.getTypeSemanticData().evaluatedType,
		};

		if (
			semanticData.leftOp.getTypeSemanticData().evaluatedType === BuiltInTypes.str &&
			semanticData.rightOp.getTypeSemanticData().evaluatedType === BuiltInTypes.num
		) {
			this.programCtx.addInternalReference(this, kipperInternalBuiltInFunctions["repeatString"]);
		}
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
