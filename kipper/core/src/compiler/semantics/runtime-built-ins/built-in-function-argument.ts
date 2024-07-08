import { KipperBuiltInTypeLiteral } from "../../const";
import type { ProcessedType } from "../types";
import { UniverseScope } from "../symbol-table";

/**
 * Interface representation of an argument of a {@link BuiltInFunction}.
 * @since 0.1.0
 * @since 0.11.0 Became a class instead of an interface.
 */
export class BuiltInFunctionArgument {
	/**
	 * The identifier of the argument inside the function
	 *
	 * This value does not affect the behaviour of the language, as named-arguments are not implemented in Kipper. This
	 * only serves the purpose of readability and allowing easier differentiation.
	 * @since 0.6.0
	 */
	public readonly identifier: string;

	/**
	 * The type of the argument inside the function
	 *
	 * @example
	 *  def func(x: num, y: str) -> void {}
	 *
	 *  // x is of type 'num'
	 *  // y is of type 'str'
	 */
	public readonly valueType: ProcessedType;

	public constructor(identifier: string, valueType: ProcessedType) {
		this.identifier = identifier;
		this.valueType = valueType;
	}
}
