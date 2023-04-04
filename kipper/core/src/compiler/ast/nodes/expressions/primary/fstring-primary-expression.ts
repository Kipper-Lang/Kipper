/**
 * F-String class, which represents an f-string expression in the Kipper language.
 * @since 0.1.0
 */
import type { FStringPrimaryExpressionSemantics } from "../../../semantic-data";
import type { FStringPrimaryExpressionTypeSemantics } from "../../../type-data";
import { Expression } from "../expression";
import { FStringPrimaryExpressionContext, ParserASTMapping } from "../../../../parser";
import { CompilableASTNode } from "../../../compilable-ast-node";
import { CheckedType } from "../../../../analysis";
import { KipperNotImplementedError } from "../../../../../errors";

/**
 * F-String class, which represents an f-string expression in the Kipper language. F-Strings are a way to automatically
 * format strings and insert expressions into them using expression blocks that are stringified.
 * @since 0.1.0
 */
export class FStringPrimaryExpression extends Expression<
	FStringPrimaryExpressionSemantics,
	FStringPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FStringPrimaryExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link ParserASTMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = ParserASTMapping.RULE_fStringPrimaryExpression;

	constructor(antlrRuleCtx: FStringPrimaryExpressionContext, parent: CompilableASTNode) {
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
		const stringParts: Array<string | Expression> = [];
		// TODO!

		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("F-String Expressions have not been implemented yet."));
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
		// This will always be of type 'str'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("str"),
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
	public override get antlrRuleCtx(): FStringPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.fStringPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.fStringPrimaryExpression;
}
