/**
 * Generic type specifier expression, which represents a generic type specifier.
 * @example
 * list<num> // List type with number as generic type
 * @since 0.8.0
 */
import type { GenericTypeSpecifierExpressionSemantics } from "./generic-type-specifier-expression-semantics";
import type { GenericTypeSpecifierExpressionTypeSemantics } from "./generic-type-specifier-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import { TypeSpecifierExpression } from "../type-specifier-expression";
import type { GenericTypeSpecifierExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { KipperNotImplementedError, UnableToDetermineSemanticDataError } from "../../../../../../errors";
import type { GenericType } from "../../../../../semantics";
import { BuiltInTypes, RawType } from "../../../../../semantics";

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
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_genericTypeSpecifierExpression;

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
	protected override readonly _antlrRuleCtx: GenericTypeSpecifierExpressionContext;

	constructor(antlrRuleCtx: GenericTypeSpecifierExpressionContext, parent: CompilableASTNode) {
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
		return GenericTypeSpecifierExpression.kind;
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
		return GenericTypeSpecifierExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): GenericTypeSpecifierExpressionContext {
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
			throw new UnableToDetermineSemanticDataError();
		}
		const identifier = antlrChildren[0].text;
		const genericArguments = <Array<TypeSpecifierExpression>>this.children.slice();

		this.semanticData = {
			rawType: new RawType(identifier),
			genericArguments: genericArguments,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const valueType = this.programCtx.typeCheck(this).getCheckedType(semanticData.rawType, this.scope);
		const genericArguments = semanticData.genericArguments.map((arg) => arg.getTypeSemanticData().storedType);

		// Ensure the type is even generic and that there are the correct number of generic arguments
		this.programCtx.typeCheck(this).ensureValidGenericType(valueType, genericArguments);

		this.typeSemantics = {
			evaluatedType: BuiltInTypes.type,
			storedType: (<GenericType>valueType).changeGenericTypeArguments(genericArguments),
		};
		console.log(this.typeSemantics);
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.genericTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.genericTypeSpecifierExpression;
}
