import type { ASTExpressionKind, ASTExpressionRuleName } from "../../../common";
import { Expression } from "../expression";
import type { NewInstantiationExpressionSemantics } from "./new-instantiation-expression-semantics";
import type { NewInstantiationExpressionTypeSemantics } from "./new-instantiation-expression-type-semantics";
import type { NewInstantiationExpressionContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";

export class NewInstantiationExpression extends Expression<
	NewInstantiationExpressionSemantics,
	NewInstantiationExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_newInstantiationExpression;

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
	protected override readonly _antlrRuleCtx: NewInstantiationExpressionContext;

	public get kind(): ASTExpressionKind {
		return NewInstantiationExpression.kind;
	}
	public get ruleName(): ASTExpressionRuleName {
		return NewInstantiationExpression.ruleName;
	}
	public async primarySemanticAnalysis?(): Promise<void> {
		const children = this.children;

		const classIdentifier = <IdentifierTypeSpecifierExpression>children[0];
		const args = <Array<Expression>>children.slice(1);

		if (!classIdentifier || !args) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			class: classIdentifier,
			args: args,
		};
	}

	public async primarySemanticTypeChecking?(): Promise<void> {
		const typeSepcifier = this.semanticData!.class.getTypeSemanticData().storedType;

		this.typeSemantics = {
			evaluatedType: typeSepcifier,
		};
	}

	constructor(antlrRuleCtx: NewInstantiationExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	public checkForWarnings = undefined;
	public targetCodeGenerator = this.codeGenerator.newInstantiationExpression;
	targetSemanticAnalysis = this.semanticAnalyser.newInstantiationExpression;
}
