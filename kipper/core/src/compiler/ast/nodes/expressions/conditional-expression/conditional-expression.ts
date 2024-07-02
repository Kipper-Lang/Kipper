/**
 * Conditional expression, which evaluates a condition and evaluates the left expression if it is true, or the right
 * expression if it is false.
 * @since 0.1.0
 * @example
 * true ? 3 : 4; // 3
 * false ? 3 : 4; // 4
 */
import type { ConditionalExpressionSemantics } from "./conditional-expression-semantics";
import type { ConditionalExpressionTypeSemantics } from "./conditional-expression-type-semantics";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import { Expression } from "../expression";
import type { ConditionalExpressionContext } from "../../../../parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../parser";
import { KipperNotImplementedError } from "../../../../../errors";
import * as console from "node:console";

/**
 * Conditional expression, which evaluates a condition and evaluates the left expression if it is true, or the right
 * expression if it is false.
 * @since 0.1.0
 * @example
 * true ? 3 : 4; // 3
 * false ? 3 : 4; // 4
 */
export class ConditionalExpression extends Expression<
	ConditionalExpressionSemantics,
	ConditionalExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ConditionalExpressionContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_conditionalExpression;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return ConditionalExpression.kind;
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
		return ConditionalExpression.ruleName;
	}

	constructor(antlrRuleCtx: ConditionalExpressionContext, parent: CompilableASTNode) {
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
		const condition = this.children[0];
		const trueBranch = this.children[1];
		const falseBranch = this.children[2];

		this.semanticData = {
			condition: condition,
			trueBranch: trueBranch,
			falseBranch: falseBranch,
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
		this.programCtx.typeCheck(this).validConditionalExpression(semanticData.trueBranch, semanticData.falseBranch);

		this.typeSemantics = {
			evaluatedType: semanticData.trueBranch.getTypeSemanticData().evaluatedType,
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
	public override get antlrRuleCtx(): ConditionalExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.conditionalExpression;
	readonly targetCodeGenerator = this.codeGenerator.conditionalExpression;
}
