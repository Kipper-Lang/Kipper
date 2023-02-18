/**
 * Generator for the Kipper built-ins that are specific for a target.
 * @since 0.10.0
 */
import type { TranslatedCodeLine } from "../../const";
import type { BuiltInFunction } from "../../runtime-built-ins";
import { InternalFunction } from "../../runtime-built-ins";

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
	 * @since 0.10.0
	 */
	public abstract numToStr(func: InternalFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'str' to 'num' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract strToNum(func: InternalFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'bool' to 'str' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract boolToStr(func: InternalFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'bool' to 'num' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract boolToNum(func: InternalFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Slice function which provides the ability to slice an iterable object-like type.
	 *
	 * This function is used to slice types, such as a string or array, into a new object-like or primitive type. This is
	 * used to get a substring from a string, or a sub-array from an array.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 */
	public abstract slice(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Index function which provides the ability to index an iterable object-like type.
	 *
	 * This is used to get a specific index from an iterable object-like type, such as a string or array. Though unlike
	 * in JavaScript this will assert that the index is within the bounds of the iterable object-like type. Otherwise,
	 * an error will be thrown.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 */
	public abstract index(funcSpec: InternalFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Print function which provides default IO console output functionality.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Len function which provides the ability to get the length of an iterable array-like type.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract len(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;
}
