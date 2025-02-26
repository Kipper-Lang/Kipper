/**
 * Nullable type specifier expression, which represents a type which can be null or undefined. This is unique to Kipper
 * and allows the simple union of type `T` and `null` or `undefined`.
 * @since 0.13.0
 */
import type { NullableTypeSpecifierExpressionSemantics } from "./nullable-type-specifier-expression-semantics";
import type { NullableTypeSpecifierExpressionTypeSemantics } from "./nullable-type-specifier-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import { TypeSpecifierExpression } from "../type-specifier-expression";
import type { NullableTypeSpecifierExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { BuiltInTypeNull, BuiltInTypeUndefined } from "../../../../../semantics";
import { BuiltInTypes, type ProcessedType, UnionType } from "../../../../../semantics";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import type { KipperNullableOperators } from "../../../../../const";
import { kipperNullableNullOperator } from "../../../../../const";

/**
 * Nullable type specifier expression, which represents a type which can be null or undefined. This is unique to Kipper
 * and allows the simple union of type `T` and `null` or `undefined`.
 * @since 0.13.0
 */
export class NullableTypeSpecifierExpression extends TypeSpecifierExpression<
	NullableTypeSpecifierExpressionSemantics,
	NullableTypeSpecifierExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_nullableTypeSpecifierExpression;

	/**
	 * The static rule name for this AST Node.
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: NullableTypeSpecifierExpressionContext;

	constructor(antlrRuleCtx: NullableTypeSpecifierExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 */
	public override get kind() {
		return NullableTypeSpecifierExpression.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 */
	public override get ruleName() {
		return NullableTypeSpecifierExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): NullableTypeSpecifierExpressionContext {
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
		const antlrRuleChildren = this.getAntlrRuleChildren();
		if (!antlrRuleChildren.length) {
			throw new UnableToDetermineSemanticDataError();
		}
		const operator = antlrRuleChildren[antlrRuleChildren.length - 1].text;
		const childType = <NullableTypeSpecifierExpressionSemantics["innerTypeSpecifier"]>this.children[0];

		this.semanticData = {
			rawType: childType.getSemanticData().rawType,
			innerTypeSpecifier: childType,
			operator: <KipperNullableOperators>operator,
		};
	}

	/**
	 * Preliminary registers the class declaration type to allow for internal self-referential type checking.
	 *
	 * This is part of the "Ahead of time" type evaluation, which is done before the main type checking.
	 */
	public async primaryPreliminaryTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const typeRef = <ProcessedType | BuiltInTypeNull | BuiltInTypeUndefined>(
			semanticData.innerTypeSpecifier.getTypeSemanticData().storedType
		);

		let resultType:
			| UnionType<[BuiltInTypeNull, ProcessedType] | [BuiltInTypeUndefined, ProcessedType]>
			| BuiltInTypeNull
			| BuiltInTypeUndefined;
		if (typeRef === BuiltInTypes.null || typeRef === BuiltInTypes.undefined) {
			resultType = <BuiltInTypeNull | BuiltInTypeUndefined>typeRef;
		} else if (semanticData.operator === kipperNullableNullOperator) {
			resultType = new UnionType<[BuiltInTypeNull, ProcessedType]>([BuiltInTypes.null, typeRef]);
		} else {
			resultType = new UnionType<[BuiltInTypeUndefined, ProcessedType]>([BuiltInTypes.undefined, typeRef]);
		}

		this.typeSemantics = {
			evaluatedType: BuiltInTypes.type,
			storedType: resultType,
		};
	}
	public readonly primarySemanticTypeChecking: undefined;

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.nullableTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.nullableTypeSpecifierExpression;
}
