/**
 * Convert expressions, which are used to convert a value to a different type.
 *
 * For now only conversions are supported, but this will be extended to conversions and casts in the future.
 * @since 0.1.0
 * @example
 * "4" as num // 4
 * 39 as str // "39"
 */
import type { CastOrConvertExpressionSemantics } from "./cast-or-convert-expression-semantics";
import type { CastOrConvertExpressionTypeSemantics } from "./cast-or-convert-expression-type-semantics";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import { Expression } from "../expression";
import type { CastOrConvertExpressionContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import type { RawType } from "../../../../semantics";
import { kipperInternalBuiltInFunctions } from "../../../../semantics";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import { getConversionFunctionIdentifier } from "../../../../../tools";

/**
 * Convert expressions, which are used to convert a value to a different type.
 *
 * For now only conversions are supported, but this will be extended to conversions and casts in the future.
 * @since 0.1.0
 * @example
 * "4" as num // 4
 * 39 as str // "39"
 */
export class CastOrConvertExpression extends Expression<
	CastOrConvertExpressionSemantics,
	CastOrConvertExpressionTypeSemantics,
	Expression
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_castOrConvertExpression;
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
	protected override readonly _antlrRuleCtx: CastOrConvertExpressionContext;

	constructor(antlrRuleCtx: CastOrConvertExpressionContext, parent: CompilableASTNode) {
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
		return CastOrConvertExpression.kind;
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
		return CastOrConvertExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): CastOrConvertExpressionContext {
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
		// The first child will always be the expression that will be converted
		const exp: Expression = this.children[0];

		// Get the type using the type specifier
		const typeSpecifier = <IdentifierTypeSpecifierExpression>this.children[1];
		const type: RawType = typeSpecifier.getSemanticData().rawType;

		// Ensure that the children are fully present and not undefined
		if (!exp || !type) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			castTypeSpecifier: typeSpecifier,
			castType: type,
			exp: exp,
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

		// Get the type specified by the type specifier
		const evalType = semanticData.castTypeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			// The evaluated type of the expression is equal to the cast type
			evaluatedType: evalType,
			castType: evalType,
		};

		// Ensure the conversion is valid
		this.programCtx.typeCheck(this).validConversion(semanticData.exp, evalType);

		// Add internal reference to the program ctx for the conversion function, so it will be generated in the output code
		const internalIdentifier = getConversionFunctionIdentifier(
			semanticData.exp.getTypeSemanticData().evaluatedType.identifier,
			semanticData.castType.identifier,
		);
		if (internalIdentifier in kipperInternalBuiltInFunctions) {
			this.programCtx.addInternalReference(
				this,
				kipperInternalBuiltInFunctions[internalIdentifier as keyof typeof kipperInternalBuiltInFunctions],
			);
		}
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.castOrConvertExpression;
	readonly targetCodeGenerator = this.codeGenerator.castOrConvertExpression;
}
