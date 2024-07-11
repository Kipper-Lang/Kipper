/**
 * Semantics for AST Node {@link AssignmentExpression}.
 * @since 0.5.0
 */
import type { Reference } from "../../../../semantics";
import type { KipperAssignOperator } from "../../../../const";
import type { Expression } from "../expression";
import type { ExpressionSemantics } from "../expression-semantics";
import type { IdentifierPrimaryExpression } from "../primary-expression";

/**
 * Semantics for AST Node {@link AssignmentExpression}.
 * @since 0.5.0
 */
export interface AssignmentExpressionSemantics extends ExpressionSemantics {
	/**
	 * The identifier expression that is being assigned to.
	 * @since 0.7.0
	 */
	identifier: string;
	/**
	 * The identifier AST node context that the {@link AssignmentExpressionSemantics.identifier identifier} points to.
	 * @since 0.10.0
	 */
	identifierCtx: IdentifierPrimaryExpression;
	/**
	 * The reference that is being assigned to.
	 * @since 0.10.0
	 */
	assignTarget: Reference;
	/**
	 * The assigned value to this variable.
	 * @since 0.7.0
	 */
	value: Expression;
	/**
	 * The operator of the assignment expression.
	 * @since 0.10.0
	 */
	operator: KipperAssignOperator;
}
