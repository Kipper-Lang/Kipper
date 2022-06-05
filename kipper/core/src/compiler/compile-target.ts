/**
 * Compilation translation class specifying how a Kipper parse tree shall be translated into a specific language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */

import type { KipperTargetBuiltInGenerator, KipperTargetCodeGenerator } from "./translation";
import type { KipperTargetSemanticAnalyser } from "./semantics";

/**
 * Represents a Kipper compilation translation defining how a Kipper parse tree shall
 * be translated into a specific language.
 * @since 0.5.0
 */
export class KipperCompileTarget {
	public readonly targetName: string;
	public readonly semanticAnalyser: KipperTargetSemanticAnalyser;
	public readonly codeGenerator: KipperTargetCodeGenerator;
	public readonly builtInGenerator: KipperTargetBuiltInGenerator;

	constructor(
		targetName: string,
		semanticAnalyser: KipperTargetSemanticAnalyser,
		codeGenerator: KipperTargetCodeGenerator,
		builtInGenerator: KipperTargetBuiltInGenerator,
	) {
		this.targetName = targetName;
		this.semanticAnalyser = semanticAnalyser;
		this.codeGenerator = codeGenerator;
		this.builtInGenerator = builtInGenerator;
	}
}
