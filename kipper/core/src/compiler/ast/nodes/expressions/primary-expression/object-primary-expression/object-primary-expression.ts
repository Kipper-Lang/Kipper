/**
 * Object literal constant, which represents an object that was defined in the source code.
 * @since 0.11.0
 */
import type { ObjectPrimaryExpressionSemantics } from "./object-primary-expression-semantics";
import type { ObjectPrimaryExpressionTypeSemantics } from "./object-primary-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { ObjectPrimaryExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { PrimaryExpression } from "../primary-expression";
import { CustomType } from "../../../../../semantics";
import type { ObjectProperty } from "./object-property";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import type { ParseTree } from "antlr4ts/tree";

/**
 * Object literal constant, which represents an object that was defined in the source code.
 * @since 0.11.0
 */
export class ObjectPrimaryExpression extends PrimaryExpression<
	ObjectPrimaryExpressionSemantics,
	ObjectPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ObjectPrimaryExpressionContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_objectPrimaryExpression;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get kind() {
		return ObjectPrimaryExpression.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return ObjectPrimaryExpression.ruleName;
	}

	constructor(antlrRuleCtx: ObjectPrimaryExpressionContext, parent: CompilableASTNode) {
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
		const children: Array<ParseTree> = this.getAntlrRuleChildren();
		if (!children) {
			throw new UnableToDetermineSemanticDataError();
		}

		const keyValuePairs = <ObjectProperty[]>this.children;

		this.semanticData = {
			keyValuePairs: keyValuePairs,
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
		this.typeSemantics = {
			evaluatedType: CustomType.fromObjectLiteral(this),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.11.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ObjectPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.objectPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.objectPrimaryExpression;
}
