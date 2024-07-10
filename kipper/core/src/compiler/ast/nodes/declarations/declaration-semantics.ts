/**
 * Semantics for a {@link Declaration}.
 * @since 0.5.0
 */
import type { SemanticData } from "../../ast-node";

/**
 * Semantics for a {@link Declaration}.
 * @since 0.5.0
 */
export interface DeclarationSemantics extends SemanticData {
	/**
	 * The identifier of the declaration.
	 * @since 0.5.0
	 */
	identifier: string;
}
