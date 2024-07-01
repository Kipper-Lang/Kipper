import type { Expression } from "../../expression";
import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";
import type { ObjectProperty } from "./object-property";

/**
 * Semantics for AST Node {@link VariableDeclaration}.
 * @since 0.11.0
 */
export interface ObjectPrimaryExpressionSemantics extends PrimaryExpressionSemantics {
	/**
	 * The key-value pairs of the object.
	 * @since 0.11.0
	 */
	keyValuePairs: Array<ObjectProperty>;
}
