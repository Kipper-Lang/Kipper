/**
 * Try cast expressions, which cast a value to T | null, where T is the type specified by the type specifier. If the cast
 * is not possible, it will return null otherwise it will return the casted value as T.
 * @since 0.13.0
 * @example
 * interface X {
 * 	 a: num;
 * }
 * interface Y {
 * 	 a: str;
 * 	 b: num;
 * }
 * interface Z {
 *   a: num;
 *   b: str;
 * }
 *
 * const x: X = { a: 4 };
 * const y: Y = x try as Y; // -> null
 * const z: Z = x try as Z; // -> null
 *
 * const y2: Y = { a: "4", b: 4 };
 * const x2: X = y2 try as X; // -> { a: 4 }
 * const z2: Z = y2 try as Z; // -> null
 *
 * const z3: Z = { a: 4, b: "4" };
 * const x3: X = z3 try as X; // -> { a: 4 }
 * const y3: Y = z3 try as Y; // -> null
 */
import type { TryCastExpressionSemantics } from "./try-cast-expression-semantics";
import type { TryCastExpressionTypeSemantics } from "./try-cast-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { IdentifierTypeSpecifierExpression } from "../../type-specifier-expression";
import type { Expression } from "../../expression";
import type { CastOrConvertExpressionContext, TryCastExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { BuiltInTypeNull, ProcessedType, RawType } from "../../../../../semantics";
import { type BuiltInTypeArray, BuiltInTypes, type BuiltInTypeStr, UnionType } from "../../../../../semantics";
import { kipperInternalBuiltInFunctions } from "../../../../../semantics";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { CastOrConvertExpression } from "../cast-or-convert-expression";

/**
 * Try cast expressions, which cast a value to T | null, where T is the type specified by the type specifier. If the cast
 * is not possible, it will return null otherwise it will return the casted value as T.
 * @since 0.13.0
 * @example
 * interface X {
 * 	 a: num;
 * }
 * interface Y {
 * 	 a: str;
 * 	 b: num;
 * }
 * interface Z {
 *   a: num;
 *   b: str;
 * }
 *
 * const x: X = { a: 4 };
 * const y: Y = x try as Y; // -> null
 * const z: Z = x try as Z; // -> null
 *
 * const y2: Y = { a: "4", b: 4 };
 * const x2: X = y2 try as X; // -> { a: 4 }
 * const z2: Z = y2 try as Z; // -> null
 *
 * const z3: Z = { a: 4, b: "4" };
 * const x3: X = z3 try as X; // -> { a: 4 }
 * const y3: Y = z3 try as Y; // -> null
 */
export class TryCastExpression extends CastOrConvertExpression<
	TryCastExpressionSemantics,
	TryCastExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_tryCastExpression;

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
	protected override readonly _antlrRuleCtx: TryCastExpressionContext;

	constructor(antlrRuleCtx: TryCastExpressionContext, parent: CompilableASTNode) {
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
		return TryCastExpression.kind;
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
		return TryCastExpression.ruleName;
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
			evaluatedType: new UnionType<[BuiltInTypeNull, ProcessedType]>([BuiltInTypes.null, evalType]),
			castType: evalType,
		};
		this.programCtx.addInternalReference(this, kipperInternalBuiltInFunctions["tryCastAs"]);
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.tryCastExpression;
	readonly targetCodeGenerator = this.codeGenerator.tryCastExpression;
}
