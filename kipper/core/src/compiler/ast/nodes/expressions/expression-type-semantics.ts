/**
 * Type semantics for an expression class that must be evaluated during Type Checking.
 * @since 0.10.0
 */
import type { CheckedType } from "../../../analysis";
import type { TypeData } from "../../ast-node";

/**
 * Type semantics for an expression class that must be evaluated during Type Checking.
 * @since 0.10.0
 */
export interface ExpressionTypeSemantics extends TypeData {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 *
	 * This will always evaluate to "type", as a type specifier will always be a type.
	 * @since 0.10.0
	 */
	evaluatedType: CheckedType;
}
