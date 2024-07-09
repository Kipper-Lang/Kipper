/**
 * Identifier expression, which represents an identifier referencing a variable, function or built-in identifier.
 *
 * This is only represents a reference and not a declaration/definition.
 * @since 0.1.0
 */
import type { IdentifierPrimaryExpressionSemantics } from "./identifier-primary-expression-semantics";
import type { IdentifierPrimaryExpressionTypeSemantics } from "./identifier-primary-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import type { IdentifierPrimaryExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { ScopeFunctionDeclaration, ScopeVariableDeclaration } from "../../../../../semantics";
import { AssignmentExpression } from "../../assignment-expression/assignment-expression";
import { PrimaryExpression } from "../primary-expression";

/**
 * Identifier expression, which represents an identifier referencing a variable, function or built-in identifier.
 *
 * This is only represents a reference and not a declaration/definition.
 * @since 0.1.0
 */
export class IdentifierPrimaryExpression extends PrimaryExpression<
	IdentifierPrimaryExpressionSemantics,
	IdentifierPrimaryExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_identifierPrimaryExpression;
	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];
	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!
	readonly targetSemanticAnalysis = this.semanticAnalyser.identifierPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.identifierPrimaryExpression;
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IdentifierPrimaryExpressionContext;

	constructor(antlrRuleCtx: IdentifierPrimaryExpressionContext, parent: CompilableASTNode) {
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
		return IdentifierPrimaryExpression.kind;
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
		return IdentifierPrimaryExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IdentifierPrimaryExpressionContext {
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
		const identifier = this.sourceCode;

		// Make sure the referenced variable even exists!
		const ref = this.programCtx.semanticCheck(this).getExistingReference(identifier, this.scope);

		// Once we have the identifier and ensured a reference exists, we are done with the primary semantic analysis.
		this.semanticData = {
			identifier: identifier,
			ref: {
				refTarget: ref,
				srcExpr: this,
			},
		};

		if (ref.isBuiltIn && (ref instanceof ScopeVariableDeclaration || ref instanceof ScopeFunctionDeclaration)) {
			this.programCtx.addBuiltInReference(this, ref);
		} else {
			// If the reference is not used inside an assignment expression, ensure that the reference is defined
			// (This is due to the fact that assignments to undefined variables must always be valid, unless it's a
			// modifier assignment operator)
			if (!(this.parent instanceof AssignmentExpression)) {
				this.programCtx.semanticCheck(this).refTargetDefined(ref);
			}
		}
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
		const refTarget = semanticData.ref.refTarget;

		this.typeSemantics = {
			evaluatedType: refTarget.type,
		};
	}
}
