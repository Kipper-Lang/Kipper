/**
 * Compilation translation class specifying how a Kipper parse tree shall be translated into a specific language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */

import { KipperTargetCodeGenerator } from "./translation";
import { KipperTargetSemanticAnalyser } from "./semantics";

/**
 * Represents a Kipper compilation translation defining how a Kipper parse tree shall
 * be translated into a specific language.
 * @since 0.5.0
 */
export class KipperCompileTarget {
	public readonly targetName: string;
	public readonly semanticAnalyser: KipperTargetSemanticAnalyser;
	public readonly codeGenerator: KipperTargetCodeGenerator;

	constructor(
		targetName: string,
		semanticAnalyser: KipperTargetSemanticAnalyser,
		codeGenerator: KipperTargetCodeGenerator,
	) {
		this.targetName = targetName;
		this.semanticAnalyser = semanticAnalyser;
		this.codeGenerator = codeGenerator;
	}
}
