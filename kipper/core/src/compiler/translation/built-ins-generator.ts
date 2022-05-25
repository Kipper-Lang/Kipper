/**
 * Generator for the Kipper built-ins that are specific for a target.
 * @since 0.8.0
 */
import { TranslatedCodeLine } from "../semantics";
import { BuiltInFunction } from "../runtime-built-ins";

/**
 * Generator for the Kipper built-ins that are specific for a target.
 *
 * This class must be specified when using a {@link KipperCompileTarget} and is used to generate the required built-in
 * functions that can be called during runtime in the target language.
 *
 * The functions in this class are automatically called by {@link KipperProgramContext.generateRequirements} when used
 * inside a {@link KipperProgramContext}, so there is no need to call it yourself.
 * @since 0.8.0
 */
export abstract class KipperTargetBuiltInGenerator {
	/**
	 * Print function which provides default IO output.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.8.0
	 */
	abstract print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;
}
