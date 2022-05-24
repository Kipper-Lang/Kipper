/**
 * Generator for the Kipper built-ins that are specific for a target.
 * @since 0.8.0
 */
import { TranslatedCodeLine } from "../semantics";
import { BuiltInFunction } from "../runtime-built-ins";
import { KipperInternalError } from "../../errors";

/**
 * Generator for the Kipper built-ins that are specific for a target.
 * @since 0.8.0
 */
export abstract class KipperTargetBuiltInGenerator {
	/**
	 * Returns the handler for the specified built-in identifier. The identifier **must** be defined in
	 * {@link kipperRuntimeBuiltIns}, otherwise there will not be an implementation provided and this function
	 * will throw an {@link KipperInternalError}.
	 *
	 * @param identifier
	 * @since 0.8.0
	 */
	getHandlerFunction(identifier: string): (funcSpec: BuiltInFunction) => Promise<Array<TranslatedCodeLine>> {
		switch (identifier) {
			case "print":
				return this.print;
			default:
				throw new KipperInternalError(`Unknown built-in function identifier '${identifier}'`);
		}
	}

	/**
	 * Print function which provides default IO output.
	 * @param funcSpec The specification for the function. This contains the overall metadata for the function that
	 * should be followed. This is auto-inserted by the code-generator in {@link KipperProgramContext}.
	 * @since 0.8.0
	 */
	abstract print(funcSpec: BuiltInFunction): Promise<Array<TranslatedCodeLine>>;
}
