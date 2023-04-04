import type { VoidOrNullOrUndefinedPrimaryExpressionSemantics } from "../../../../semantic-data";
import type { VoidOrNullOrUndefinedPrimaryExpressionTypeSemantics } from "../../../../type-data";
/**
 * Constant expression, representing the void, null or undefined keyword.
 * @since 0.10.0
 */
import type { KipperNullType, KipperUndefinedType, KipperVoidType } from "../../../../../const";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import { ParserASTMapping, VoidOrNullOrUndefinedPrimaryExpressionContext } from "../../../../../parser";
import { CheckedType } from "../../../../../analysis";
import { ConstantExpression } from "./constant-expression";

/**
 * Constant expression, representing the void, null or undefined keyword.
 * @since 0.10.0
 */
export class VoidOrNullOrUndefinedPrimaryExpression extends ConstantExpression<
	VoidOrNullOrUndefinedPrimaryExpressionSemantics,
	VoidOrNullOrUndefinedPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: VoidOrNullOrUndefinedPrimaryExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link ParserASTMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = ParserASTMapping.RULE_voidOrNullOrUndefinedPrimaryExpression;

	constructor(antlrRuleCtx: VoidOrNullOrUndefinedPrimaryExpressionContext, parent: CompilableASTNode) {
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
		this.semanticData = {
			// Syntactically there can only be 'void', 'null' or 'undefined' stored in this expression
			constantIdentifier: <KipperVoidType | KipperNullType | KipperUndefinedType>this.sourceCode,
			value: this.sourceCode, // The value of this expression is equal to the constant identifier in string form
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.10.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// The evaluated type of this expression will always be equal to the constant identifier that this expression
		// contains e.g. either 'void', 'null' or 'undefined'.
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType(semanticData.constantIdentifier),
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
	public override get antlrRuleCtx(): VoidOrNullOrUndefinedPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.voidOrNullOrUndefinedPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.voidOrNullOrUndefinedPrimaryExpression;
}
