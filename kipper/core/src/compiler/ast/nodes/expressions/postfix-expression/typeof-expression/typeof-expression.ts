/**
 * Typeof expression, which returns the runtime type of a value.
 * @since 0.12.0
 * @example
 * typeof(49); // "__kipper.builtIn.num"
 * typeof("Hello, World!"); // "__kipper.builtIn.str"
 */
import type { Expression } from "../../expression";
import { PostfixExpression } from "../postfix-expression";
import type { TypeofExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { BuiltInTypes } from "../../../../../semantics";
import type { TypeofExpressionSemantics } from "./typeof-expression-semantics";
import type { TypeofExpressionTypeSemantics } from "./typeof-expression-type-semantics";
import type { KipperPostfixOperator } from "../../../../../const";

/**
 * Typeof expression, which returns the runtime type of a value.
 * @since 0.12.0
 * @example
 * typeof(49); // "__kipper.builtIn.num"
 * typeof("Hello, World!"); // "__kipper.builtIn.str"
 */
export class TypeofExpression extends PostfixExpression<
	TypeofExpressionSemantics,
	TypeofExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_typeofExpression;

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
	protected override readonly _antlrRuleCtx: TypeofExpressionContext;

	constructor(antlrRuleCtx: TypeofExpressionContext, parent: CompilableASTNode) {
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
		return TypeofExpression.kind;
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
		return TypeofExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): TypeofExpressionContext {
		return this._antlrRuleCtx;
	}

	public hasSideEffects(): boolean {
		return true; // This expression has side effects as it modifies the value of the operand
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const exp: Expression = this.children[0];

		// Ensure that the child expression is present
		if (!exp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			operand: exp,
			operator: "typeof" as KipperPostfixOperator,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.12.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		this.typeSemantics = {
			// This will always be a number
			evaluatedType: BuiltInTypes.type,
		};

		// Ensure that this expression is valid (e.g. the operand is a number)
		this.programCtx.typeCheck(this).validTypeofExpression(this);
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.typeofExpression;
	readonly targetCodeGenerator = this.codeGenerator.typeofExpression;
}
