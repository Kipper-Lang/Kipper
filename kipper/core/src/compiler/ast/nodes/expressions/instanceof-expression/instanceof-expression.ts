import { Expression } from "../expression";
import type { InstanceofExpressionSemantics } from "./instanceof-expression-semantics";
import type { InstanceofExpressionTypeSemantics } from "./instanceof-expression-type-semantics";
import type { InstanceOfExpressionContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import type { IdentifierTypeSpecifierExpression } from "../type-specifier-expression";
import type { CustomType } from "../../../../semantics";
import { BuiltInTypes } from "../../../../semantics";

/**
 * Represents an instanceof expression in the AST.
 * @since 0.12.0
 */
export class InstanceOfExpression extends Expression<
	InstanceofExpressionSemantics,
	InstanceofExpressionTypeSemantics,
	Expression
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_instanceofExpression;
	/**
	 * The static rule name for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: InstanceOfExpressionContext;

	constructor(antlrRuleCtx: InstanceOfExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.12.0
	 */
	public override get kind() {
		return InstanceOfExpression.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.12.0
	 */
	public override get ruleName() {
		return InstanceOfExpression.ruleName;
	}

	public async primarySemanticAnalysis(): Promise<void> {
		const children = this.children;
		if (!children || children.length < 2) {
			throw new UnableToDetermineSemanticDataError();
		}

		const operand = children[0];
		const classTypeSpecifier = <IdentifierTypeSpecifierExpression>children[1];
		this.semanticData = {
			operand: operand,
			classTypeSpecifier: classTypeSpecifier,
		};
	}

	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const classType = semanticData.classTypeSpecifier.getTypeSemanticData().storedType;

		this.programCtx.typeCheck(this).validInstanceofClassType(classType);
		this.typeSemantics = {
			classType: <CustomType>classType,
			evaluatedType: BuiltInTypes.bool,
		};
	}

	public targetCodeGenerator = this.codeGenerator.instanceOfExpression;
	public targetSemanticAnalysis = this.semanticAnalyser.instanceOfExpression;

	public checkForWarnings = undefined; // TODO!
}
