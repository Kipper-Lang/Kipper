import type { InternalFunction } from "./internal-function";
import { BuiltInTypes } from "../symbol-table";

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
				valueType: BuiltInTypes.num,
			},
		],
		returnType: BuiltInTypes.str,
	},
	boolToStr: {
		identifier: "boolToStr",
		params: [
			{
				identifier: "value",
				valueType: BuiltInTypes.bool,
			},
		],
		returnType: BuiltInTypes.str,
	},
	voidToStr: {
		identifier: "voidToStr",
		params: [
			{
				identifier: "value",
				valueType: BuiltInTypes.void,
			},
		],
		returnType: BuiltInTypes.str,
	},
	nullToStr: {
		identifier: "nullToStr",
		params: [
			{
				identifier: "value",
				valueType: BuiltInTypes.null,
			},
		],
		returnType: BuiltInTypes.str,
	},
	undefinedToStr: {
		identifier: "undefinedToStr",
		params: [
			{
				identifier: "value",
				valueType: BuiltInTypes.undefined,
			},
		],
		returnType: BuiltInTypes.str,
	},
	strToNum: {
		identifier: "strToNum",
		params: [
			{
				identifier: "value",
				valueType: BuiltInTypes.str,
			},
		],
		returnType: BuiltInTypes.num,
	},
	boolToNum: {
		identifier: "boolToNum",
		params: [
			{
				identifier: "value",
				valueType: BuiltInTypes.bool,
			},
		],
		returnType: BuiltInTypes.num,
	},
	slice: {
		identifier: "slice",
		params: [
			{
				identifier: "objLike",
				valueType: BuiltInTypes.str, // TODO: Implement this for all objLike types (At the moment only strings are supported)
			},
			{
				identifier: "start",
				valueType: [BuiltInTypes.num, BuiltInTypes.undefined], // Optional
			},
			{
				identifier: "end",
				valueType: [BuiltInTypes.num, BuiltInTypes.undefined], // Optional
			},
		],
		returnType: BuiltInTypes.str, // TODO: Implement this for all objLike types (At the moment only strings are supported)
	},
	index: {
		identifier: "index",
		params: [
			{
				identifier: "arrayLike",
				valueType: BuiltInTypes.str, // TODO: Implement this for all arrayLike types (At the moment only strings are supported)
			},
			{
				identifier: "indexOrKey",
				valueType: BuiltInTypes.num,
			},
		],
		returnType: BuiltInTypes.str, // TODO: Implement this for all arrayLike types (At the moment only strings are supported)
	},
	repeatString: {
		identifier: "repeatString",
		params: [
			{
				identifier: "toRepeat",
				valueType: BuiltInTypes.str,
			},
			{
				identifier: "times",
				valueType: BuiltInTypes.num,
			},
		],
		returnType: BuiltInTypes.str,
	},
} satisfies Record<string, InternalFunction>;
