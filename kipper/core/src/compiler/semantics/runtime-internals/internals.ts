import type { InternalFunction } from "./internal-function";
import { BuiltInTypes } from "../symbol-table";
import { InternalFunctionArgument } from "./internal-function-argument";
import { UnionType } from "../types/base/union-type";
import type { BuiltInTypeArray, BuiltInTypeNum, BuiltInTypeStr, BuiltInTypeUndefined } from "../types";

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
		params: [new InternalFunctionArgument("value", BuiltInTypes.num)],
		returnType: BuiltInTypes.str,
	},
	boolToStr: {
		identifier: "boolToStr",
		params: [new InternalFunctionArgument("value", BuiltInTypes.bool)],
		returnType: BuiltInTypes.str,
	},
	voidToStr: {
		identifier: "voidToStr",
		params: [new InternalFunctionArgument("value", BuiltInTypes.void)],
		returnType: BuiltInTypes.str,
	},
	nullToStr: {
		identifier: "nullToStr",
		params: [new InternalFunctionArgument("value", BuiltInTypes.null)],
		returnType: BuiltInTypes.str,
	},
	undefinedToStr: {
		identifier: "undefinedToStr",
		params: [new InternalFunctionArgument("value", BuiltInTypes.undefined)],
		returnType: BuiltInTypes.str,
	},
	strToNum: {
		identifier: "strToNum",
		params: [new InternalFunctionArgument("value", BuiltInTypes.str)],
		returnType: BuiltInTypes.num,
	},
	boolToNum: {
		identifier: "boolToNum",
		params: [new InternalFunctionArgument("value", BuiltInTypes.bool)],
		returnType: BuiltInTypes.num,
	},
	slice: {
		identifier: "slice",
		params: [
			new InternalFunctionArgument(
				"objLike",
				new UnionType<[BuiltInTypeStr, BuiltInTypeArray]>([BuiltInTypes.str, BuiltInTypes.Array]),
			),
			new InternalFunctionArgument(
				"start",
				new UnionType<[BuiltInTypeNum, BuiltInTypeUndefined]>([BuiltInTypes.num, BuiltInTypes.undefined]),
			),
			new InternalFunctionArgument(
				"end",
				new UnionType<[BuiltInTypeNum, BuiltInTypeUndefined]>([BuiltInTypes.num, BuiltInTypes.undefined]),
			),
		],
		returnType: new UnionType<[BuiltInTypeStr, BuiltInTypeArray]>([BuiltInTypes.str, BuiltInTypes.Array]),
	},
	index: {
		identifier: "index",
		params: [
			new InternalFunctionArgument(
				"arrayLike",
				new UnionType<[BuiltInTypeStr, BuiltInTypeArray]>([BuiltInTypes.str, BuiltInTypes.Array]),
			),
			new InternalFunctionArgument("indexOrKey", BuiltInTypes.num),
		],
		returnType: new UnionType<[BuiltInTypeStr, BuiltInTypeArray]>([BuiltInTypes.str, BuiltInTypes.Array]),
	},
	repeatString: {
		identifier: "repeatString",
		params: [
			new InternalFunctionArgument("toRepeat", BuiltInTypes.str),
			new InternalFunctionArgument("times", BuiltInTypes.num),
		],
		returnType: BuiltInTypes.str,
	},
	tryCastAs: {
		identifier: "tryCastAs",
		params: [
			new InternalFunctionArgument("value", BuiltInTypes.any),
			new InternalFunctionArgument("type", BuiltInTypes.type),
		],
		returnType: BuiltInTypes.any,
	},
	forceCastAs: {
		identifier: "forceCastAs",
		params: [
			new InternalFunctionArgument("value", BuiltInTypes.any),
			new InternalFunctionArgument("type", BuiltInTypes.type),
		],
		returnType: BuiltInTypes.any,
	},
} satisfies Record<string, InternalFunction>;
