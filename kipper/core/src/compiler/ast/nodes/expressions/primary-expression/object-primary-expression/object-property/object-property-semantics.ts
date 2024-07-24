import type { PrimaryExpressionSemantics } from "../../primary-expression-semantics";
import type { Expression } from "../../../expression";

/**
 * Semantics for AST Node {@link ObjectPrimaryExpression}.
 * @since 0.11.0
 */
export interface ObjectPropertySemantics extends PrimaryExpressionSemantics {
	/**
	 * The identifier of the property.
	 * @since 0.11.0
	 */
	identifier: string;
	/**
	 * The expression being assigned to the property.
	 * @since 0.12.0
	 */
	value: Expression;
}
