/**
 * Built-In Function implementation, which will convert a built-in function call to a proper TypeScript code snippet.
 * This means it will insert code rather than actually call it, to reduce overhead, and remove any dependencies when
 * running Kipper itself.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */

import { KipperType } from "./types";

/**
 * Interface representation of an argument of a {@link BuiltInFunction}.
 * @since 0.1.0
 */
export interface BuiltInFunctionArgument {
	/**
	 * The identifier of the argument inside the function
	 *
	 * This value does not affect the behaviour of the language, as named-arguments are not implemented in Kipper. This
	 * only serves the purpose of readability and allowing easier differentiation.
	 */
	name: string;
	/**
	 * The type of the argument inside the function
	 *
	 * @example
	 *  def func(x: num, y: str) -> void {}
	 *
	 *  // x is of type 'num'
	 *  // y is of type 'str'
	 */
	type: KipperType;
}

/**
 * Interface representation of a {@link BuiltInFunction}, which is available inside a Kipper program using the specified
 * metadata.
 * @since 0.1.0
 */
export interface BuiltInFunction {
	/**
	 * The identifier of the global function that should be available inside the program.
	 *
	 * The identifier may only contain default numbers and alphabet characters!
	 * @example
	 *  call print(); // 'print' is the global function identifier
	 */
	identifier: string;
	/**
	 * The args that are accepted inside this function. These are represented using {@link BuiltInFunctionArgument}.
	 *
	 * The index in the array also represent the argument position inside the function. Meaning the first item in the
	 * array maps to the first argument inside the function.
	 */
	args: Array<BuiltInFunctionArgument>;
	/**
	 * The TypeScript code that will be inserted at the beginning of the Kipper program. This should contain the
	 * implementation for the function identifier, prefixed by `'_kipperGlobal_'`.
	 *
	 * @example
	 *  // Example of a string that may be passed
	 *  const yourFunction: Function = {
	 *    identifier: "print",
	 *    args: [{
	 *      type: "str" as KipperType
	 *    }],
	 *    handler: `function _kipperGlobal_print(arg1: string): void {
	 *      console.log(arg1);
	 *      return;
	 *    }
	 *    `
	 *  };
	 */
	handler: string;
	/**
	 * The expected return of the function. If the return type is "void", then the function will not return anything.
	 */
	returnType: KipperType;
}

/**
 * The code for the global print function that works inside the Web-Browser
 * @since 0.1.0
 */
export const builtInWebPrintFunction: BuiltInFunction = {
	identifier: "print",
	args: [
		{
			name: "printText",
			type: "str",
		},
	],
	handler: `function _kipperGlobal_print(printText: string): void { console.log(printText); }`,
	returnType: "void",
};
