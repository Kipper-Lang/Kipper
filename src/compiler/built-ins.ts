/**
 * Built-In Function implementation, which will convert a built-in function call to a proper TypeScript code snippet.
 * This means it will insert code rather than actually call it, to reduce overhead, and remove any dependencies when
 * running kipper itself.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */

// TODO! Finish implementation of global functions and allow them to be passed to a compilation to make them available
//  inside the programs global scope

/**
 * All built-in types inside kipper that are allowed to be used.
 */
export type KipperType = "void" | "num" | "str" | "char" | "bool" | "list";

/**
 * Interface representation of an argument of a {@link GlobalFunction}.
 */
export interface GlobalFunctionArgument {
  /**
   * The name of the argument inside the function
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
  type: string;
}

/**
 * Interface representation of a {@link GlobalFunction}, which is available inside a kipper program using the specified
 * metadata.
 */
export interface GlobalFunction {
  /**
   * The name of the global function that should be available inside the program.
   *
   * The identifier may only contain default numbers and alphabet characters!
   * @example
   *  call print(); // 'print' is the global function identifier
   */
  name: string;
  /**
   * The args that are accepted inside this function. These are represented using {@link GlobalFunctionArgument}.
   *
   * The index in the array also represent the argument position inside the function. Meaning the first item in the
   * array maps to the first argument inside the function.
   */
  args: Array<GlobalFunctionArgument>;
  /**
   * The TypeScript code that will be inserted at the beginning of the kipper program. This should contain the
   * implementation for the function name, prefixed by `'_kipperGlobal_'`.
   *
   * @example
   *  // Example of a string that may be passed
   *  const yourFunction: GlobalFunction = {
   *    name: "print",
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
