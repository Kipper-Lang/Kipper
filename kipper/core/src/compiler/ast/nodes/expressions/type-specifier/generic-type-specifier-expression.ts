import type { GenericTypeSpecifierExpressionSemantics } from "../../../semantic-data";
/**
 * Generic type specifier expression, which represents a generic type specifier.
 * @example
 * list<num> // List type with number as generic type
 * @since 0.8.0
 */
import type { GenericTypeSpecifierExpressionTypeSemantics } from "../../../type-data";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import { TypeSpecifierExpression } from "./type-specifier-expression";
import { GenericTypeSpecifierContext, ParserASTMapping } from "../../../../parser";
import { KipperNotImplementedError } from "../../../../../errors";

/**
 * Generic type specifier expression, which represents a generic type specifier.
 * @example
 * list<num> // List type with number as generic type
 * @since 0.8.0
 */
export class GenericTypeSpecifierExpression extends TypeSpecifierExpression<
	GenericTypeSpecifierExpressionSemantics,
	GenericTypeSpecifierExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: GenericTypeSpecifierContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link ParserASTMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = ParserASTMapping.RULE_genericTypeSpecifier;

	constructor(antlrRuleCtx: GenericTypeSpecifierContext, parent: CompilableASTNode) {
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
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Generic Type Expressions have not been implemented yet."));
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Generic Type Expressions have not been implemented yet."));
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
	public override get antlrRuleCtx(): GenericTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.genericTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.genericTypeSpecifierExpression;
}
