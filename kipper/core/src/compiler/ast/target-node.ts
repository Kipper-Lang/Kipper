/**
 * A node that can be semantically analysed for a specific {@link KipperCompileTarget target language}.
 * @since 0.10.0
 */
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../target-presets";
import type { TranslatedCodeLine } from "../const";

/**
 * A node that can be semantically analysed for a specific {@link KipperCompileTarget target language}.
 * @since 0.10.0
 */
export interface TargetAnalysableNode {
	/**
	 * Semantic analyser function that is specific for the {@link KipperCompileTarget target}. This only should
	 * perform logical analysis and not interpret the code/modify the {@link semanticData} field.
	 *
	 * If this is {@link undefined} then it means there is no target specific semantic analysis that needs to be done.
	 * @since 0.8.0
	 */
	readonly targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any> | undefined;
}

/**
 * A node that can be compiled into a {@link KipperCompileTarget target language}.
 * @since 0.10.0
 */
export interface TargetCompilableNode {
	/**
	 * Code generator function that is specific for the {@link KipperCompileTarget target language}.
	 * @since 0.8.0
	 */
	readonly targetCodeGenerator: TargetASTNodeCodeGenerator<any, TranslatedCodeLine | Array<TranslatedCodeLine>>;
}
