import type { ASTExpressionKind, ASTExpressionRuleName } from "../../../common";
import { Expression } from "../expression";
import type { NewInstantiationExpressionSemantics } from "./new-instantiation-expression-semantics";
import type { NewInstantiationExpressionTypeSemantics } from "./new-instantiation-expression-type-semantics";
import type { NewInstantiationExpressionContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import type { CustomType } from "../../../../semantics";

/**
 * New instantiation expressions, which are used to create a new instance of a class.
 * @since 0.12.0
 */
export class NewInstantiationExpression extends Expression<
	NewInstantiationExpressionSemantics,
	NewInstantiationExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_newInstantiationExpression;

	/**
	 * The static rule name for this AST Node.
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

	constructor(antlrRuleCtx: NewInstantiationExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	public async primarySemanticAnalysis(): Promise<void> {
		const classIdentifier = <IdentifierTypeSpecifierExpression>this.children[0];
		const args = <Array<Expression>>this.children.slice(1);

		if (!classIdentifier || !args) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			classRef: classIdentifier,
			args: args,
		};
	}

	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const typeSpecifier = <CustomType>semanticData.classRef.getTypeSemanticData().storedType;

		this.typeSemantics = {
			evaluatedType: typeSpecifier,
			constructor: typeSpecifier.clsConstructor,
		};
	}

	public checkForWarnings = undefined;
	public targetCodeGenerator = this.codeGenerator.newInstantiationExpression;
	public targetSemanticAnalysis = this.semanticAnalyser.newInstantiationExpression;
}
