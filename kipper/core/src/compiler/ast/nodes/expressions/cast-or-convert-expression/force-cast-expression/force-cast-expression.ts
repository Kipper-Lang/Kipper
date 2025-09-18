/**
 * Force cast expressions, which cast a type to another type with just-in-time type checking i.e. type checking during
 * its actual invocation. It will throw an error if the cast is not possible at runtime.
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
 *  a: num;
 *  b: str;
 * }
 *
 * const x: X = { a: 4 };
 * const y: Y = x force as Y; // -> OK (Runtime: TypeError: Property 'b' is missing in type 'X' but required in type 'Y')
 * const z: Z = x force as Z; // -> OK (Runtime: TypeError: Property 'b' is missing in type 'X' but required in type 'Z')
 *
 * const y2: Y = { a: "4", b: 4 };
 * const x2: X = y2 force as X; // -> OK
 * const z2: Z = y2 force as Z; // -> OK (Runtime: TypeError: Type 'str' is not assignable to type 'num')
 *
 * const z3: Z = { a: 4, b: "4" };
 * const x3: X = z3 force as X; // -> OK
 * const y3: Y = z3 force as Y; // -> OK (Runtime: TypeError: Type 'num' is not assignable to type 'str')
 */
import type { ForceCastExpressionSemantics } from "./force-cast-expression-semantics";
import type { ForceCastExpressionTypeSemantics } from "./force-cast-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { IdentifierTypeSpecifierExpression } from "../../type-specifier-expression";
import type { Expression } from "../../expression";
import type { ForceCastExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { RawType } from "../../../../../semantics";
import { kipperInternalBuiltInFunctions } from "../../../../../semantics";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { CastOrConvertExpression } from "../cast-or-convert-expression";

/**
 * Force cast expressions, which cast a type to another type with just-in-time type checking i.e. type checking during
 * its actual invocation. It will throw an error if the cast is not possible at runtime.
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
 *  a: num;
 *  b: str;
 * }
 *
 * const x: X = { a: 4 };
 * const y: Y = x force as Y; // -> OK (Runtime: TypeError: Property 'b' is missing in type 'X' but required in type 'Y')
 * const z: Z = x force as Z; // -> OK (Runtime: TypeError: Property 'b' is missing in type 'X' but required in type 'Z')
 *
 * const y2: Y = { a: "4", b: 4 };
 * const x2: X = y2 force as X; // -> OK
 * const z2: Z = y2 force as Z; // -> OK (Runtime: TypeError: Type 'str' is not assignable to type 'num')
 *
 * const z3: Z = { a: 4, b: "4" };
 * const x3: X = z3 force as X; // -> OK
 * const y3: Y = z3 force as Y; // -> OK (Runtime: TypeError: Type 'num' is not assignable to type 'str')
 */
export class ForceCastExpression extends CastOrConvertExpression<
	ForceCastExpressionSemantics,
	ForceCastExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_forceCastExpression;

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
	protected override readonly _antlrRuleCtx: ForceCastExpressionContext;

	constructor(antlrRuleCtx: ForceCastExpressionContext, parent: CompilableASTNode) {
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
		return ForceCastExpression.kind;
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
		return ForceCastExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ForceCastExpressionContext {
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
		this.programCtx.addInternalReference(this, kipperInternalBuiltInFunctions["forceCastAs"]);
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.forceCastExpression;
	readonly targetCodeGenerator = this.codeGenerator.forceCastExpression;
}
