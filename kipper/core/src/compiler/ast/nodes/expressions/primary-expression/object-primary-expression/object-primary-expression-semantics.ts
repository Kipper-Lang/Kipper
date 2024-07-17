import type { PrimaryExpressionSemantics } from "../primary-expression-semantics";
import type { ObjectProperty } from "./object-property";
import { StringPrimaryExpression } from "../string-primary-expression";
import type { KipperStorageType } from "../../../../../const";
import type { IdentifierTypeSpecifierExpression } from "../../type-specifier-expression";

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
