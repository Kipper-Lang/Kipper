/**
 * Typeof type specifier expression, which represents a runtime typeof expression evaluating the type of a value.
 * @since 0.8.0
 */
import type { TypeofTypeSpecifierExpressionSemantics } from "./typeof-type-specifier-expression-semantics";
import type { TypeofTypeSpecifierExpressionTypeSemantics } from "./typeof-type-specifier-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import { TypeSpecifierExpression } from "../type-specifier-expression";
import type { TypeofTypeSpecifierExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { BuiltInTypes, RawType } from "../../../../../semantics";

/**
 * Typeof type specifier expression, which represents a runtime typeof expression evaluating the type of a value.
 * @since 0.8.0
 */
export class TypeofTypeSpecifierExpression extends TypeSpecifierExpression<
	TypeofTypeSpecifierExpressionSemantics,
	TypeofTypeSpecifierExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_typeofTypeSpecifierExpression;

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
	protected override readonly _antlrRuleCtx: TypeofTypeSpecifierExpressionContext;

	constructor(antlrRuleCtx: TypeofTypeSpecifierExpressionContext, parent: CompilableASTNode) {
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
		return TypeofTypeSpecifierExpression.kind;
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
		return TypeofTypeSpecifierExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): TypeofTypeSpecifierExpressionContext {
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
		const antlrChildren = this.antlrRuleCtx.children;
		if (!antlrChildren?.length) {
			throw new Error("Invalid typeof expression");
		}
		const identifier = antlrChildren[2].text;
		const ref = this.programCtx.semanticCheck(this).getExistingReference(identifier, this.scope);

		this.semanticData = {
			rawType: new RawType(identifier),
			ref: {
				refTarget: ref,
				srcExpr: this,
			},
		};
	}
	/**
	 * Preliminary registers the class declaration type to allow for internal self-referential type checking.
	 *
	 * This is part of the "Ahead of time" type evaluation, which is done before the main type checking.
	 * @since 0.12.0
	 */
	public async primaryPreliminaryTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const valueReference = semanticData.ref;

		this.typeSemantics = {
			evaluatedType: BuiltInTypes.type,
			storedType: valueReference.refTarget.type,
		};
	}
	public readonly primarySemanticTypeChecking: undefined;

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.typeofTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.typeofTypeSpecifierExpression;
}
