/**
 * Semantics for AST Node {@link AssignmentExpression}.
 * @since 0.5.0
 */
import type { KipperAssignOperator } from "../../../../const";
import type { Expression } from "../expression";
import type { ExpressionSemantics } from "../expression-semantics";
import type { IdentifierPrimaryExpression } from "../primary-expression";
import type { MemberAccessExpression } from "../member-access-expression";

/**
 * Semantics for AST Node {@link AssignmentExpression}.
 * @since 0.5.0
 */
export interface AssignmentExpressionSemantics extends ExpressionSemantics {
	/**
	 * The reference that is being assigned to.
	 * @since 0.12.0
	 */
	toAssign: IdentifierPrimaryExpression | MemberAccessExpression;
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
