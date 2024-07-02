/**
 * Compilation translation class specifying how a translation target should be implemented.
 * @since 0.10.0
 */

import type { KipperTargetBuiltInGenerator, KipperTargetCodeGenerator } from "./translation";
import type { KipperTargetSemanticAnalyser } from "./semantic-analyser";
import type { TranslatedCodeLine } from "../const";

/**
 * Represents a Kipper compilation translation defining how a Kipper parse tree shall
 * be translated into a specific language.
 * @since 0.10.0
 */
export abstract class KipperCompileTarget {
	public readonly targetName: string;
	public readonly semanticAnalyser: KipperTargetSemanticAnalyser;
	public readonly codeGenerator: KipperTargetCodeGenerator;
	public readonly builtInGenerator: KipperTargetBuiltInGenerator;
	public readonly fileExtension: string;

	protected constructor(
		targetName: string,
		semanticAnalyser: KipperTargetSemanticAnalyser,
		codeGenerator: KipperTargetCodeGenerator,
		builtInGenerator: KipperTargetBuiltInGenerator,
		fileExtension: string,
	) {
		this.targetName = targetName;
		this.semanticAnalyser = semanticAnalyser;
		this.codeGenerator = codeGenerator;
		this.builtInGenerator = builtInGenerator;
		this.fileExtension = fileExtension;
	}

	/**
	 * Post-processing which can be used to modify the generated code after the translation of the AST is done.
	 * @param genCode The generated code from the parse tree.
	 * @returns The translated code in the target language, which has been modified to the desired form.
	 * @since 0.11.0
	 */
	public async postProcess(genCode: Array<TranslatedCodeLine>): Promise<Array<TranslatedCodeLine>> {
		return genCode;
	}
}
