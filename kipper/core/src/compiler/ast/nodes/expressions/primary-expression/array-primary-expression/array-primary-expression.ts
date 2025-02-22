/**
 * List constant expression, which represents a list constant that was defined in the source code.
 * @since 0.1.0
 */
import type { ArrayPrimaryExpressionSemantics } from "./array-primary-expression-semantics";
import type { ArrayPrimaryExpressionTypeSemantics } from "./array-primary-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { ArrayPrimaryExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { ProcessedType } from "../../../../../semantics";
import { BuiltInTypes } from "../../../../../semantics";
import { PrimaryExpression } from "../primary-expression";
import { BuiltInTypeArray } from "../../../../../semantics/types/built-in";
import { BuiltInTypeEmptyArray } from "../../../../../semantics/types/extra/empty-array";

/**
 * List constant expression, which represents a list constant that was defined in the source code.
 * @since 0.1.0
 */
export class ArrayPrimaryExpression extends PrimaryExpression<
	ArrayPrimaryExpressionSemantics,
	ArrayPrimaryExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_arrayPrimaryExpression;

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
	protected override readonly _antlrRuleCtx: ArrayPrimaryExpressionContext;

	constructor(antlrRuleCtx: ArrayPrimaryExpressionContext, parent: CompilableASTNode) {
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
		return ArrayPrimaryExpression.kind;
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
		return ArrayPrimaryExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ArrayPrimaryExpressionContext {
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
		this.semanticData = {
			value: this.children,
			empty: this.children.length === 0,
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
		this.programCtx.typeCheck(this).validArrayExpression(this);

		let valueType: ProcessedType = BuiltInTypes.any;
		let evaluatedType: BuiltInTypeArray = new BuiltInTypeEmptyArray();
		if (!semanticData.empty) {
			valueType = this.children[0].getTypeSemanticData().evaluatedType;
			evaluatedType = new BuiltInTypeArray(valueType);
		}

		this.typeSemantics = {
			evaluatedType,
			valueType,
		};
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.arrayPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.arrayPrimaryExpression;
}
