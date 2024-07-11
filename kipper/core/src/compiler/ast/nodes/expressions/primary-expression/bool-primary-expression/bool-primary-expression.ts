/**
 * Boolean constant expression representing the built-in constants {@link true} and {@link false}.
 * @since 0.8.0
 */
import type { BoolPrimaryExpressionSemantics } from "./bool-primary-expression-semantics";
import type { BoolPrimaryExpressionTypeSemantics } from "./bool-primary-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { KipperBoolTypeConstants } from "../../../../../const";
import type { BoolPrimaryExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { BuiltInTypes } from "../../../../../semantics";
import { PrimaryExpression } from "../primary-expression";

/**
 * Boolean constant expression representing the built-in constants {@link true} and {@link false}.
 * @since 0.8.0
 */
export class BoolPrimaryExpression extends PrimaryExpression<
	BoolPrimaryExpressionSemantics,
	BoolPrimaryExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_boolPrimaryExpression;
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
	readonly targetSemanticAnalysis = this.semanticAnalyser.boolPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.boolPrimaryExpression;
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: BoolPrimaryExpressionContext;

	constructor(antlrRuleCtx: BoolPrimaryExpressionContext, parent: CompilableASTNode) {
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
		return BoolPrimaryExpression.kind;
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
		return BoolPrimaryExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): BoolPrimaryExpressionContext {
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
		this.semanticData = {
			value: <KipperBoolTypeConstants>this.sourceCode,
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
		// This will always be of type 'bool'
		this.typeSemantics = {
			evaluatedType: BuiltInTypes.bool,
		};
	}
}
