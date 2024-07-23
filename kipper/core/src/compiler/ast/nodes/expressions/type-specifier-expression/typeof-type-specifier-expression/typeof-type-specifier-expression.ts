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
import { KipperNotImplementedError } from "../../../../../../errors";

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
		const objectToValidate = this.children[0];

		this.programCtx.semanticCheck(this);

		this.semanticData = {
			object: objectToValidate,
			rawType: objectToValidate.getTypeSemanticData().evaluatedType,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.programCtx.semanticCheck(this);

		this.typeSemantics = {
			storedType: semanticData.object.getTypeSemanticData().evaluatedType,
			evaluatedType: semanticData.object.getTypeSemanticData().evaluatedType,
		};
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.typeofTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.typeofTypeSpecifierExpression;
}
