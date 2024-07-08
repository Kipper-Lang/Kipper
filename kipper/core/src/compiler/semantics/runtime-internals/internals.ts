import type { InternalFunction } from "./internal-function";

/**
 * Contains all the internal built-in functions, which are used by Kipper to provide internal functionality. These
 * internal built-ins are commonly used to provide the functionality for keywords and other internal logic.
 *
 * This contains *every* builtin that also must be implemented by every target in the {@link KipperTargetBuiltInGenerator}.
 * @since 0.8.0
 */
export const kipperInternalBuiltInFunctions = {
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
	voidToStr: {
		identifier: "voidToStr",
		params: [
			{
				identifier: "value",
				valueType: "void",
			},
		],
		returnType: "str",
	},
	nullToStr: {
		identifier: "nullToStr",
		params: [
			{
				identifier: "value",
				valueType: "null",
			},
		],
		returnType: "str",
	},
	undefinedToStr: {
		identifier: "undefinedToStr",
		params: [
			{
				identifier: "value",
				valueType: "undefined",
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
	repeatString: {
		identifier: "repeatString",
		params: [
			{
				identifier: "toRepeat",
				valueType: "str",
			},
			{
				identifier: "times",
				valueType: "num",
			},
		],
		returnType: "str",
	},
} satisfies Record<string, InternalFunction>;
