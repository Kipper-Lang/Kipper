/**
 * Semantics for AST Node {@link JumpStatement}.
 * @since 0.10.0
 */
import type { SemanticData } from "../../../ast-node";
import type { JmpStatementType } from "../../../../const";
import type { IterationStatement } from "../iteration-statement";

/**
 * Semantics for AST Node {@link JumpStatement}.
 * @since 0.10.0
 */
export interface JumpStatementSemantics extends SemanticData {
	/**
	 * The type of the {@link JumpStatement jump statement}.
	 * @since 0.10.0
	 */
	jmpType: JmpStatementType;
	/**
	 * The parent statement of the {@link JumpStatement jump statement}.
	 * @since 0.10.0
	 */
	parent: IterationStatement;
}
