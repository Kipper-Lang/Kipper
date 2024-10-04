/**
 * Matches expression, which checks if a value matches a pattern.
 *
 * This expression will evaluate to a boolean value, indicating if the value matches the pattern.
 * @since 0.12.0
 * @example
 * 5 matches int
 * "3" matches str
 * true matches bool
 */
import type {CompilableASTNode} from "../../../compilable-ast-node";
import type {MatchesExpressionContext} from "../../../../lexer-parser";
import {KindParseRuleMapping, ParseRuleKindMapping} from "../../../../lexer-parser";
import {Expression} from "../expression";
import type {MatchesExpressionSemantics} from "./matches-expression-semantics";
import type {MatchesExpressionTypeSemantics} from "./matches-expression-type-semantics";
import type {IdentifierTypeSpecifierExpression} from "../type-specifier-expression";
import {UnableToDetermineSemanticDataError} from "../../../../../errors";
import {BuiltInTypes} from "../../../../semantics";

/**
 * Matches expression, which checks if a value matches a pattern.
 *
 * This expression will evaluate to a boolean value, indicating if the value matches the pattern.
 * @since 0.12.0
 * @example
 * 5 matches int
 * "3" matches str
 * true matches bool
 */
export class MatchesExpression extends Expression<
	MatchesExpressionSemantics,
	MatchesExpressionTypeSemantics,
	Expression
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_matchesExpression;

	/**
	 * The static rule name for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: MatchesExpressionContext;

	constructor(antlrRuleCtx: MatchesExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.12.0
	 */
	public override get kind() {
		return MatchesExpression.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.12.0
	 */
	public override get ruleName() {
		return MatchesExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): MatchesExpressionContext {
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
		const value: Expression = this.children[0];
		const pattern = <IdentifierTypeSpecifierExpression>this.children[1];

		if (!value || !pattern) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			expression: value,
			pattern: pattern,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.12.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const patternType = semanticData.pattern.getTypeSemanticData().storedType;
		this.programCtx.typeCheck(this).validMatchesInterfaceType(patternType);
		this.typeSemantics = {
			evaluatedType: BuiltInTypes.bool,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.12.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.matchesExpression;
	readonly targetCodeGenerator = this.codeGenerator.matchesExpression;
}
