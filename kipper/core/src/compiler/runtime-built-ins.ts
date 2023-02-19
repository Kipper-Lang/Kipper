/**
 * Built-Ins file, which provides the blueprints for the Kipper built-in functions and variables.
 * @since 0.1.0
 */
import type { KipperCompilableType } from "./const";

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
	 * @since 0.6.0
	 */
	identifier: string;
	/**
	 * The type of the argument inside the function
	 *
	 * @example
	 *  def func(x: num, y: str) -> void {}
	 *
	 *  // x is of type 'num'
	 *  // y is of type 'str'
	 */
	valueType: KipperCompilableType;
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
	 * The index in the array also represents the argument position inside the function. Meaning the first item in the
	 * array maps to the first argument inside the function.
	 */
	params: Array<BuiltInFunctionArgument>;
	/**
	 * The expected return of the function. If the return type is {@link KipperVoidType void}, then the function will not
	 * return anything.
	 */
	returnType: KipperCompilableType;
}

/**
 * Interface representation of an argument of a {@link InternalFunction}.
 * @since 0.10.0
 */
export interface InternalFunctionArgument {
	/**
	 * The identifier of the argument inside the function
	 *
	 * This value does not affect the behaviour of the language, as named-arguments are not implemented in Kipper. This
	 * only serves the purpose of readability and allowing easier differentiation.
	 * @since 0.6.0
	 */
	identifier: string;
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
	valueType: KipperCompilableType | Array<KipperCompilableType>;
}

/**
 * Interface representation of a {@link InternalFunction}, which is used to provide functionality for Kipper specific
 * keywords, internal logic and other implementation related handling that must be present for a program to work.
 * @since 0.8.0
 */
export interface InternalFunction {
	/**
	 * The identifier of the internal function.
	 *
	 * The identifier may only contain default numbers and alphabet characters!
	 * @example
	 *  "4" as num; // 'strAsNum' is the internal function used to perform this expression
	 * @since 0.8.0
	 */
	identifier: string;
	/**
	 * The args that are accepted inside this function. These are represented using {@link InternalFunctionArgument}.
	 *
	 * The index in the array also represents the argument position inside the function. Meaning the first item in the
	 * array maps to the first argument inside the function.
	 * @since 0.8.0
	 */
	params: Array<InternalFunctionArgument>;
	/**
	 * The expected return of the function. If the return type is {@link KipperVoidType void}, then the function will not
	 * return anything.
	 *
	 * Unlike {@link BuiltInFunction}, this can also be an array of types, which means that the function return may be a
	 * union.
	 * @since 0.8.0
	 */
	returnType: KipperCompilableType;
}

/**
 * Interface representation of a {@link BuiltInVariable}, which is available inside a Kipper program using the specified
 * metadata.
 * @since 0.10.0
 */
export interface BuiltInVariable {
	/**
	 * The identifier of the global variable that should be available inside the program.
	 * @since 0.10.0
	 */
	identifier: string;
	/**
	 * The type of the variable.
	 * @since 0.10.0
	 */
	valueType: KipperCompilableType;
}

/**
 * Contains all the built-in functions in Kipper that are available per default in every program.
 *
 * This contains *every* builtin that also must be implemented by every target in the {@link KipperTargetBuiltInGenerator}.
 * @since 0.7.0
 */
export const kipperRuntimeBuiltInFunctions: Record<string, BuiltInFunction> = {
	print: {
		identifier: "print",
		params: [
			{
				identifier: "msg",
				valueType: "str",
			},
		],
		returnType: "void",
	},
	len: {
		identifier: "len",
		params: [
			{
				identifier: "arrayLike",
				valueType: "str", // TODO: Implement this for all arrayLike types (At the moment only strings are supported)
			},
		],
		returnType: "num",
	},
};

/**
 * Contains all the internal built-in functions, which are used by Kipper to provide internal functionality. These
 * internal built-ins are commonly used to provide the functionality for keywords and other internal logic.
 *
 * This contains *every* builtin that also must be implemented by every target in the {@link KipperTargetBuiltInGenerator}.
 * @since 0.8.0
 */
export const kipperInternalBuiltInFunctions: Record<string, InternalFunction> = {
	numToStr: {
		identifier: "numToStr",
		params: [
			{
				identifier: "value",
				valueType: "num",
			},
		],
		returnType: "str",
	},
	strToNum: {
		identifier: "strToNum",
		params: [
			{
				identifier: "value",
				valueType: "str",
			},
		],
		returnType: "num",
	},
	boolToStr: {
		identifier: "boolToStr",
		params: [
			{
				identifier: "value",
				valueType: "bool",
			},
		],
		returnType: "str",
	},
	boolToNum: {
		identifier: "boolToNum",
		params: [
			{
				identifier: "value",
				valueType: "bool",
			},
		],
		returnType: "num",
	},
	slice: {
		identifier: "slice",
		params: [
			{
				identifier: "objLike",
				valueType: "str", // TODO: Implement this for all objLike types (At the moment only strings are supported)
			},
			{
				identifier: "start",
				valueType: ["num", "undefined"], // Optional
			},
			{
				identifier: "end",
				valueType: ["num", "undefined"], // Optional
			},
		],
		returnType: "str", // TODO: Implement this for all objLike types (At the moment only strings are supported)
	},
	index: {
		identifier: "index",
		params: [
			{
				identifier: "arrayLike",
				valueType: "str", // TODO: Implement this for all arrayLike types (At the moment only strings are supported)
			},
			{
				identifier: "indexOrKey",
				valueType: "num",
			},
		],
		returnType: "str", // TODO: Implement this for all arrayLike types (At the moment only strings are supported)
	},
};

/**
 * Contains all the built-in variables in Kipper that are available per default in every program.
 * @since 0.10.0
 */
export const kipperRuntimeBuiltInVariables: Record<string, BuiltInVariable> = {
	__name__: {
		identifier: "__name__",
		valueType: "str",
	},
};
