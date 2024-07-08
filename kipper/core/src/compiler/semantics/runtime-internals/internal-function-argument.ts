import { KipperBuiltInTypeLiteral } from "../../const";
import type { ProcessedType } from "../types";

/**
 * Interface representation of an argument of a {@link InternalFunction}.
 * @since 0.10.0
 * @since 0.11.0 Became a class instead of an interface.
 */
export class InternalFunctionArgument {
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
	 * Unlike {@link BuiltInFunction}, this can also be an array of types, which means that the value type may be a union.
	 * @example
	 *  def func(x: num, y: str) -> void {}
	 *
	 *  // x is of type 'num'
	 *  // y is of type 'str'
	 */
	public readonly valueType: ProcessedType | Array<ProcessedType>;

	public constructor(identifier: string, valueType: ProcessedType | Array<ProcessedType>) {
		this.identifier = identifier;
		this.valueType = valueType;
	}
}
