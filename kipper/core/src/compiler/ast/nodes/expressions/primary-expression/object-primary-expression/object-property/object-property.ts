import type { ObjectPropertySemantics } from "./object-property-semantics";
import type { ObjectPropertyTypeSemantics } from "./object-property-type-semantics";
import type { ObjectPropertyContext } from "../../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../../lexer-parser";
import { PrimaryExpression } from "../../primary-expression";
import type { CompilableASTNode } from "../../../../../compilable-ast-node";
import type { StringPrimaryExpression } from "../../string-primary-expression";

/**
 * Object property, which represents a property inside an {@link ObjectPrimaryExpression object}. This is a key-value
 * pair, where the key is a string or identifier and the value is any expression.
 * @since 0.11.0
 */
export class ObjectProperty extends PrimaryExpression<ObjectPropertySemantics, ObjectPropertyTypeSemantics> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_objectProperty;

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
	protected override readonly _antlrRuleCtx: ObjectPropertyContext;

	constructor(antlrRuleCtx: ObjectPropertyContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get kind() {
		return ObjectProperty.kind;
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
		return ObjectProperty.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ObjectPropertyContext {
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
		let id;
		let expression;

		if(this.children.length < 2) {
			id = this.antlrRuleCtx.children![0].text;
			expression = this.children[0];
		} else {
			id = (<StringPrimaryExpression> this.children[0]).getSemanticData().value;
			expression = this.children[1];
		}

		this.semanticData = {
			identifier: id,
			expressoDepresso: expression
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.11.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		const expression = semanticData.expressoDepresso;
		expression
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.objectProperty;
	readonly targetCodeGenerator = this.codeGenerator.objectProperty;
}
