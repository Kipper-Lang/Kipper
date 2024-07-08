import type { ProcessedType } from "../types";
import type { BuiltInFunctionArgument } from "./built-in-function-argument";

/**
 * Interface representation of a {@link BuiltInFunction}, which is available inside a Kipper program using the specified
 * metadata.
 * @since 0.1.0
 * @since 0.11.0 Became a class instead of an interface.
 */
export class BuiltInFunction {
	/**
	 * The identifier of the global function that should be available inside the program.
	 *
	 * The identifier may only contain default numbers and alphabet characters!
	 * @example
	 *  print(); // 'print' is the global function identifier
	 */
	public readonly identifier: string;

	/**
	 * The args that are accepted inside this function. These are represented using {@link BuiltInFunctionArgument}.
	 *
	 * The index in the array also represents the argument position inside the function. Meaning the first item in the
	 * array maps to the first argument inside the function.
	 */
	public readonly params: Array<BuiltInFunctionArgument>;

	/**
	 * The expected return of the function. If the return type is {@link KipperVoidType void}, then the function will not
	 * return anything.
	 */
	public readonly returnType: ProcessedType;

	public constructor(identifier: string, params: Array<BuiltInFunctionArgument>, returnType: ProcessedType) {
		this.identifier = identifier;
		this.params = params;
		this.returnType = returnType;
	}
}
