/**
 * A scope-node is an {@link CompilableASTNode} that supports being used as the parent of a {@link Scope}.
 *
 * This means that the node will have the field {@link innerScope} set to the scope that is created for it.
 * @since 0.10.0
 */
import type { Scope } from "../analysis";
import type { CompilableASTNode } from "./compilable-ast-node";
import type { SemanticData, TypeData } from "./ast-node";
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../target-presets";
import type { TranslatedCodeLine } from "../const";

/**
 * Scope-node interface, which represents an {@link CompilableASTNode} that supports being used as the parent of a
 * {@link Scope} (for example, this is used for compound statements and functions).
 *
 * This means that the node will have the field {@link innerScope} set to the scope that is created for it.
 * @since 0.10.0
 */
export interface ScopeNode<T extends Scope> extends CompilableASTNode<SemanticData, TypeData> {
	/**
	 * The inner scope that is created for this node.
	 *
	 * All declaration children of this {@link ScopeNode} will be added to this scope.
	 * @since 0.10.0
	 */
	innerScope: T;
	/**
	 * Semantically analyses the code inside this AST node.
	 * @throws KipperError if the code is not valid.
	 * @since 0.10.0
	 */
	primarySemanticAnalysis?(): Promise<void>;
	/**
	 * Type checks the code inside this AST node.
	 * @throws TypeError When a type mismatch or invalid usage is encountered.
	 * @since 0.10.0
	 */
	primarySemanticTypeChecking?(): Promise<void>;
	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.10.0
	 */
	checkForWarnings?(): Promise<void>;
	/**
	 * Semantic analyser function that is specific for the {@link KipperCompileTarget target}.
	 *
	 * This only should perform logical analysis and not interpret the code/modify
	 * the {@link semanticData} field.
	 * @since 0.10.0
	 */
	readonly targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any> | undefined;
	/**
	 * Code generator function that is specific for the {@link KipperCompileTarget target}.
	 * @since 0.10.0
	 */
	readonly targetCodeGenerator: TargetASTNodeCodeGenerator<any, TranslatedCodeLine | Array<TranslatedCodeLine>>;
}
