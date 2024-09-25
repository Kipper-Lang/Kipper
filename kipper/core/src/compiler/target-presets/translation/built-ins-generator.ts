/**
 * Generator for the Kipper built-ins that are specific for a target.
 * @since 0.10.0
 */
import type { TranslatedCodeLine } from "../../const";
import type { BuiltInFunction, BuiltInVariable, InternalFunction } from "../../semantics";
import type { KipperProgramContext } from "../../program-ctx";

/**
 * Generator for the Kipper built-ins that are specific for a target.
 *
 * This class must be specified when using a {@link KipperCompileTarget} and is used to generate the required built-in
 * functions that can be called during runtime in the target language.
 *
 * The functions in this class are automatically called by {@link KipperProgramContext.generateRequirements} when used
 * inside a {@link KipperProgramContext}, so there is no need to call it yourself.
 * @since 0.10.0
 */
export abstract class KipperTargetBuiltInGenerator {
	/**
	 * Conversion function which provides 'num' to 'str' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.10.0
	 */
	abstract numToStr(func: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'bool' to 'str' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.10.0
	 */
	abstract boolToStr(func: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'str' to 'str' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.11.0
	 */
	abstract voidToStr(func: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'null' to 'str' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.11.0
	 */
	abstract nullToStr(func: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'undefined' to 'str' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.11.0
	 */
	abstract undefinedToStr(func: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'str' to 'num' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.10.0
	 */
	abstract strToNum(func: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'bool' to 'num' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.10.0
	 */
	abstract boolToNum(func: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Slice function which provides the ability to slice an iterable object-like type.
	 *
	 * This function is used to slice types, such as a string or array, into a new object-like or primitive type. This is
	 * used to get a substring from a string, or a sub-array from an array.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 */
	abstract slice(funcSpec: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Index function which provides the ability to index an iterable object-like type.
	 *
	 * This is used to get a specific index from an iterable object-like type, such as a string or array. Though unlike
	 * in JavaScript this will assert that the index is within the bounds of the iterable object-like type. Otherwise,
	 * an error will be thrown.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 */
	abstract index(funcSpec: InternalFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Repeat string function which provides the ability to repeat a string a given number of times.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.10.0
	 */
	abstract repeatString(
		funcSpec: InternalFunction,
		programCtx: KipperProgramContext,
	): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Print function which provides default IO console output functionality.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.10.0
	 */
	abstract print(funcSpec: BuiltInFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Len function which provides the ability to get the length of an iterable array-like type.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.10.0
	 */
	abstract len(funcSpec: BuiltInFunction, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Built-in variable '__name__' that provides the name of the current file being run.
	 * @param varSpec The specification for the variable. This contains the overall metadata for the variable that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.10.0
	 */
	abstract __name__(varSpec: BuiltInVariable, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Built-in variable 'NaN' that provides the NaN value.
	 * @param varSpec The specification for the variable. This contains the overall metadata for the variable that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @param programCtx The program context of the environment that is being compiled.
	 * @since 0.12.0
	 */
	abstract NaN(varSpec: BuiltInVariable, programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>>;
}
