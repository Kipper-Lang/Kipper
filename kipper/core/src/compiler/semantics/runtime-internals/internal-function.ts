import type { InternalFunctionArgument } from "./internal-function-argument";
import { KipperBuiltInTypeLiteral } from "../../const";
import {BuiltInTypeFunc, ProcessedType} from "../types";

/**
 * Interface representation of a {@link InternalFunction}, which is used to provide functionality for Kipper specific
 * keywords, internal logic and other implementation related handling that must be present for a program to work.
 * @since 0.8.0
 * @since 0.11.0 Became a class instead of an interface.
 */
export class InternalFunction {
	/**
	 * The identifier of the internal function.
	 *
	 * The identifier may only contain default numbers and alphabet characters!
	 * @example
	 *  "4" as num; // 'strAsNum' is the internal function used to perform this expression
	 * @since 0.8.0
	 */
	public readonly identifier: string;

	/**
	 * The args that are accepted inside this function. These are represented using {@link InternalFunctionArgument}.
	 *
	 * The index in the array also represents the argument position inside the function. Meaning the first item in the
	 * array maps to the first argument inside the function.
	 * @since 0.8.0
	 */
	public readonly params: Array<InternalFunctionArgument>;

	/**
	 * The expected return of the function. If the return type is {@link KipperVoidType void}, then the function will not
	 * return anything.
	 *
	 * Unlike {@link BuiltInFunction}, this can also be an array of types, which means that the function return may be a
	 * union.
	 * @since 0.8.0
	 */
	public readonly returnType: ProcessedType;

	public constructor(identifier: string, params: Array<InternalFunctionArgument>, returnType: ProcessedType) {
		this.identifier = identifier;
		this.params = params;
		this.returnType = returnType;
	}
}
