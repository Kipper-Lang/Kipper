/**
 * Type semantics for an expression class that must be evaluated during Type Checking.
 * @since 0.10.0
 */
import type { ProcessedType } from "../../../semantics";
import type { TypeData } from "../../ast-node";

/**
 * Type semantics for an expression class that must be evaluated during Type Checking.
 * @since 0.10.0
 */
export interface ExpressionTypeSemantics extends TypeData {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the evaluated type of
	 * expressions that do not explicitly show their type.
	 * @since 0.10.0
	 */
	evaluatedType: ProcessedType;
}
