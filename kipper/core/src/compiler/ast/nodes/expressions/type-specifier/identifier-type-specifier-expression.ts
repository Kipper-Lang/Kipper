/**
 * Type specifier expression, which represents a simple identifier type specifier.
 * @example
 * num // Number type
 * str // String type
 * char // Character type
 * bool // Boolean type
 * @since 0.8.0
 */
import type { IdentifierTypeSpecifierExpressionSemantics } from "../../../semantic-data";
import type { IdentifierTypeSpecifierExpressionTypeSemantics } from "../../../type-data";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import { TypeSpecifierExpression } from "./type-specifier-expression";
import { IdentifierTypeSpecifierContext, ParserASTMapping } from "../../../../parser";
import { CheckedType, UncheckedType } from "../../../../analysis";

/**
 * Type specifier expression, which represents a simple identifier type specifier.
 * @example
 * num // Number type
 * str // String type
 * char // Character type
 * bool // Boolean type
 * @since 0.8.0
 */
export class IdentifierTypeSpecifierExpression extends TypeSpecifierExpression<
	IdentifierTypeSpecifierExpressionSemantics,
	IdentifierTypeSpecifierExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IdentifierTypeSpecifierContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link ParserASTMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = ParserASTMapping.RULE_identifierTypeSpecifier;

	constructor(antlrRuleCtx: IdentifierTypeSpecifierContext, parent: CompilableASTNode) {
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
			typeIdentifier: new UncheckedType(this.sourceCode),
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Create a checked type instance (this function handles error recovery and invalid types)
		const valueType = this.programCtx.typeCheck(this).getCheckedType(semanticData.typeIdentifier);
		this.typeSemantics = {
			// A type specifier will always evaluate to be of type 'type'
			evaluatedType: CheckedType.fromCompilableType("type"),
			storedType: valueType,
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
	public override get antlrRuleCtx(): IdentifierTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.identifierTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.identifierTypeSpecifierExpression;
}
