/**
 * Identifier expression, which represents an identifier referencing a variable, function or built-in identifier.
 *
 * This is only represents a reference and not a declaration/definition.
 * @since 0.1.0
 */
import type { IdentifierPrimaryExpressionSemantics } from "../../../semantic-data";
import type { IdentifierPrimaryExpressionTypeSemantics } from "../../../type-data";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import { Expression } from "../expression";
import { IdentifierPrimaryExpressionContext, ParserASTMapping } from "../../../../parser";
import { CheckedType, ScopeDeclaration } from "../../../../analysis";
import { AssignmentExpression } from "../assignment-expression";

/**
 * Identifier expression, which represents an identifier referencing a variable, function or built-in identifier.
 *
 * This is only represents a reference and not a declaration/definition.
 * @since 0.1.0
 */
export class IdentifierPrimaryExpression extends Expression<
	IdentifierPrimaryExpressionSemantics,
	IdentifierPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IdentifierPrimaryExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link ParserASTMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = ParserASTMapping.RULE_identifierPrimaryExpression;

	constructor(antlrRuleCtx: IdentifierPrimaryExpressionContext, parent: CompilableASTNode) {
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
		const identifier = this.sourceCode;

		// Make sure the referenced variable even exists!
		const ref = this.programCtx
			.semanticCheck(this)
			.getExistingReference(identifier, "innerScope" in this.scopeCtx ? this.scopeCtx : undefined);

		// Once we have the identifier and ensured a reference exists, we are done with the primary semantic analysis.
		this.semanticData = {
			identifier: identifier,
			ref: {
				refTarget: ref,
				srcExpr: this,
			},
		};

		if (!(ref instanceof ScopeDeclaration)) {
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

		let type: CheckedType;
		if (refTarget instanceof ScopeDeclaration) {
			type = refTarget.type;
		} else {
			// Built-in function -> type is 'func'
			type = CheckedType.fromCompilableType("valueType" in refTarget ? refTarget.valueType : "func");
		}

		this.typeSemantics = {
			evaluatedType: type,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IdentifierPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.identifierPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.identifierPrimaryExpression;
}
