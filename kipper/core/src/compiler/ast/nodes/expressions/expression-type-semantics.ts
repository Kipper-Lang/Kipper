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
	 *
	 * To avoid confusion with the commonly used {@link TypeSpecifierExpressionTypeSemantics.storedType}, please note that
	 * this property usually evaluates to simply `type` in cases where both properties are present, as it is the type that
	 * is evaluated by the expression but not the actual type that is stored.
	 *
	 * Accordingly:
	 * - `1 + 1` would have an `evaluatedType` of `number` but no `storedType`, as it is not a meta type reference.
	 * - `num` would have an `evaluatedType` of `type` and a `storedType` of `number`, as it is a meta type reference.
	 * @since 0.10.0
	 */
	evaluatedType: ProcessedType;
}
