import type { ConstantExpressionSemantics } from "../constant-expression-semantics";
import type { Expression } from "../../../expression";

/**
 * Semantics for AST Node {@link VariableDeclaration}.
 * @since 0.3.0
 */
export interface ObjectPrimaryExpressionSemantics extends ConstantExpressionSemantics {
	value: Array<{
		/**
		 * The identifier of the field inside the object.
		 */
		identifier: string;
		/**
		 * The value of the field inside the object.
		 */
		value: Expression;
	}>;
}
