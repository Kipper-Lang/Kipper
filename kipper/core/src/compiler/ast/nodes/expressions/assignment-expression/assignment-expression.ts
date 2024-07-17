/**
 * Assignment expression, which assigns an expression to a variable. This class only represents assigning a value to
 * an existing variable, but not creating a new one.
 *
 * This expression will evaluate to the value that was assigned to the identifier.
 * @since 0.1.0
 * @example
 * x = 4
 * x += 5
 * x -= 12
 * x *= 2
 * x /= 5
 * x %= 55
 */
import type { CompilableASTNode } from "../../../compilable-ast-node";
import type { AssignmentExpressionSemantics } from "./assignment-expression-semantics";
import type { AssignmentExpressionTypeSemantics } from "./assignment-expression-type-semantics";
import type { AssignmentExpressionContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, KipperParserRuleContext, ParseRuleKindMapping } from "../../../../lexer-parser";
import { Expression } from "../expression";
import type { IdentifierPrimaryExpression } from "../primary-expression";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import type { KipperAssignOperator } from "../../../../const";
import { kipperArithmeticAssignOperators } from "../../../../const";
import { getParseRuleSource } from "../../../../../tools";
import { ScopeVariableDeclaration } from "../../../../semantics";

/**
 * Assignment expression, which assigns an expression to a variable. This class only represents assigning a value to
 * an existing variable, but not creating a new one.
 *
 * This expression will evaluate to the value that was assigned to the identifier.
 * @since 0.1.0
 * @example
 * x = 4
 * x += 5
 * x -= 12
 * x *= 2
 * x /= 5
 * x %= 55
 */
export class AssignmentExpression extends Expression<
	AssignmentExpressionSemantics,
	AssignmentExpressionTypeSemantics,
	Expression
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_assignmentExpression;

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
	protected override readonly _antlrRuleCtx: AssignmentExpressionContext;

	constructor(antlrRuleCtx: AssignmentExpressionContext, parent: CompilableASTNode) {
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
		return AssignmentExpression.kind;
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
		return AssignmentExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): AssignmentExpressionContext {
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
		const antlrRuleChildren = this.getAntlrRuleChildren();

		// There will always be only two children, which are the identifier and expression assigned.
		const identifier: IdentifierPrimaryExpression = (() => {
			const exp = this.children[0];

			// Ensure that the left-hand side of the expression is an identifier
			this.programCtx.semanticCheck(this).validAssignment(exp);

			return <IdentifierPrimaryExpression>exp;
		})();
		const assignValue: Expression = this.children[1];

		// Throw an error if the children are incomplete or the operator can not be determined (antlrRuleChildren[1])
		if (!assignValue || !(antlrRuleChildren[1] instanceof KipperParserRuleContext)) {
			throw new UnableToDetermineSemanticDataError();
		}

		const operator = <KipperAssignOperator>getParseRuleSource(<KipperParserRuleContext>antlrRuleChildren[1]);
		const identifierSemantics = identifier.getSemanticData();

		// Semantics of the assignment
		this.semanticData = {
			value: assignValue,
			identifierCtx: identifier,
			identifier: identifierSemantics.identifier,
			assignTarget: identifierSemantics.ref,
			operator: operator,
		};

		// Ensure that the reference is defined and has a usable value if it's used with an arithmetic operator
		if (kipperArithmeticAssignOperators.find((o) => o === operator)) {
			this.programCtx.semanticCheck(identifier).refTargetDefined(identifierSemantics.ref.refTarget);
		}

		// If the reference was a variable, indicate that the value was updated, since it's being assigned to
		if (identifierSemantics.ref.refTarget instanceof ScopeVariableDeclaration) {
			identifierSemantics.ref.refTarget.notifyOfUpdate();
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

		// The evaluated type of an assignment expression is always the evaluated type assigned to the variable
		this.typeSemantics = {
			evaluatedType: semanticData.value.getTypeSemanticData().evaluatedType,
		};

		// Ensure the assignment is valid and the types match up
		this.programCtx.typeCheck(this).validAssignment(this);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.assignmentExpression;
	readonly targetCodeGenerator = this.codeGenerator.assignmentExpression;
}
