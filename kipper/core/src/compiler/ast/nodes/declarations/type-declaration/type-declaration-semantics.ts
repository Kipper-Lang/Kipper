import type { SemanticData } from "../../../ast-node";
import {ProcessedType} from "../../../../analysis";

/**
 * Semantics for a {@link TypeDeclaration}.
 * @since 0.11.0
 */
export interface TypeDeclarationSemantics extends SemanticData {
	/**
	 * The identifier of the type declaration.
	 * @since 0.11.0
	 */
	identifier: string;
}
