/**
 * Semantics for AST Node {@link VoidOrNullOrUndefinedPrimaryExpression}.
 * @since 0.10.0
 */
import type { KipperNullType, KipperUndefinedType, KipperVoidType } from "../../../../../const";
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";

/**
 * Semantics for AST Node {@link VoidOrNullOrUndefinedPrimaryExpression}.
 * @since 0.10.0
 */
export interface VoidOrNullOrUndefinedPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * The constant identifier of this expression.
	 * @since 0.10.0
	 */
	constantIdentifier: KipperVoidType | KipperNullType | KipperUndefinedType;
}
