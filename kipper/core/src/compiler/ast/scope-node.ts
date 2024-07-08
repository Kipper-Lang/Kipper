/**
 * A scope-node is an {@link CompilableASTNode} that supports being used as the parent of a {@link Scope}.
 *
 * This means that the node will have the field {@link innerScope} set to the scope that is created for it.
 * @since 0.10.0
 */
import type { Scope } from "../semantics";
import type { CompilableASTNode } from "./compilable-ast-node";
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../target-presets";
import type { TranslatedCodeLine } from "../const";
import {ParserASTNode, SemanticData, TypeData} from "./ast-node";

/**
 * Scope-node interface, which represents an {@link ParserASTNode} that supports being used as the parent of a
 * {@link Scope} (for example, this is used for compound statements and functions).
 *
 * This means that the node will have the field {@link innerScope} set to the scope that is created for it.
 * @since 0.10.0
 */
export interface ScopeNode<T extends Scope> extends ParserASTNode<SemanticData, TypeData> {
	/**
	 * The inner scope that is created for this node.
	 *
	 * All declaration children of this {@link ScopeNode} will be added to this scope.
	 * @since 0.10.0
	 */
	innerScope: T;
}
