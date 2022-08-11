/**
 * Generator for the Kipper built-ins that are specific for a target.
 * @since 0.10.0
 */
import type { TranslatedCodeLine } from "../../semantics";
import type { BuiltInFunction } from "../../runtime-built-ins";

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
	public abstract numToStr(func: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'str' to 'num' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract strToNum(func: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'bool' to 'str' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract boolToStr(func: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Conversion function which provides 'bool' to 'num' type conversion functionality.
	 * @param func The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract boolToNum(func: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;

	/**
	 * Print function which provides default IO console output functionality.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.10.0
	 */
	public abstract print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;
}
