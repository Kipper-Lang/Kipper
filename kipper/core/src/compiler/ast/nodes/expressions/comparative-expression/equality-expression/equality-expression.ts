/**
 * Equality expression, which can be used to compare two expressions for equality.
 * @since 0.1.0
 * @example
 * 4 == 4 // true
 * 9 == 3 // false
 * 32 != 9 // true
 * 59 != 59 // false
 */
import type { EqualityExpressionSemantics } from "./equality-expression-semantics";
import type { EqualityExpressionTypeSemantics } from "./equality-expression-type-semantics";
import type { Expression } from "../../expression";
import { ComparativeExpression } from "../comparative-expression";
import { BuiltInTypes } from "../../../../../semantics";
import type { EqualityExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import type { KipperEqualityOperator } from "../../../../../const";
import { kipperEqualityOperators } from "../../../../../const";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import type { CompilableASTNode } from "../../../../compilable-ast-node";

/**
 * Equality expression, which can be used to compare two expressions for equality.
 * @since 0.1.0
 * @example
 * 4 == 4 // true
 * 9 == 3 // false
 * 32 != 9 // true
 * 59 != 59 // false
 */
export class EqualityExpression extends ComparativeExpression<
	EqualityExpressionSemantics,
	EqualityExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_equalityExpression;
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
	readonly targetSemanticAnalysis = this.semanticAnalyser.equalityExpression;
	readonly targetCodeGenerator = this.codeGenerator.equalityExpression;
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: EqualityExpressionContext;

	constructor(antlrRuleCtx: EqualityExpressionContext, parent: CompilableASTNode) {
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
		return EqualityExpression.kind;
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
		return EqualityExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): EqualityExpressionContext {
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

		// Get the expressions of this relational expression
		const leftOp: Expression = this.children[0];
		const rightOp: Expression = this.children[1];
		const operator = <KipperEqualityOperator | undefined>children.find((token) => {
			return token instanceof TerminalNode && kipperEqualityOperators.find((op) => op === token.text) !== undefined;
		})?.text;

		// Ensure that the children are fully present and not undefined
		if (!leftOp || !rightOp || !operator) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp, // First expression
			rightOp: rightOp, // Second expression
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
		// Equality expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: BuiltInTypes.bool,
		};
	}
}
