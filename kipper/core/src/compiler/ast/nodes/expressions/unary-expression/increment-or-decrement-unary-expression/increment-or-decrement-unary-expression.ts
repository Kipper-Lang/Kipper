/**
 * Increment or decrement expression class, which represents a left-side -- or ++ expression modifying a numeric value.
 * @since 0.1.0
 * @example
 * ++49; // 49 will be incremented by 1
 * --11; // 11 will be decremented by 1
 */
import type { IncrementOrDecrementUnaryExpressionSemantics } from "./increment-or-decrement-unary-expression-semantics";
import type { IncrementOrDecrementUnaryTypeSemantics } from "./increment-or-decrement-unary-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { Expression } from "../../expression";
import type { KipperPostfixOperator } from "../../../../../const";
import { UnaryExpression } from "../unary-expression";
import type { IncrementOrDecrementUnaryExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { BuiltInTypes } from "../../../../../semantics";

/**
 * Increment or decrement expression class, which represents a left-side -- or ++ expression modifying a numeric value.
 * @since 0.1.0
 * @example
 * ++49; // 49 will be incremented by 1
 * --11; // 11 will be decremented by 1
 */
export class IncrementOrDecrementUnaryExpression extends UnaryExpression<
	IncrementOrDecrementUnaryExpressionSemantics,
	IncrementOrDecrementUnaryTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_incrementOrDecrementUnaryExpression;

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
	protected override readonly _antlrRuleCtx: IncrementOrDecrementUnaryExpressionContext;

	constructor(antlrRuleCtx: IncrementOrDecrementUnaryExpressionContext, parent: CompilableASTNode) {
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
		return IncrementOrDecrementUnaryExpression.kind;
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
		return IncrementOrDecrementUnaryExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IncrementOrDecrementUnaryExpressionContext {
		return this._antlrRuleCtx;
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
		const operator = <KipperPostfixOperator>this.sourceCode.slice(0, 2); // Before the expression

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
			evaluatedType: BuiltInTypes.num,
		};

		// Ensure that this expression is valid (e.g. the operand is a number)
		this.programCtx.typeCheck(this).validUnaryExpression(this);
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.incrementOrDecrementUnaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.incrementOrDecrementUnaryExpression;
}
