/**
 * Semantic type data definitions for all statement AST nodes.
 * @since 0.10.0
 */
import type { TypeData } from "../../ast";
import type { CheckedType } from "../../analysis";

/**
 * Type Semantics for a {@link ReturnStatement}.
 * @since 0.10.0
 */
export interface ReturnStatementTypeSemantics extends TypeData {
	/**
	 * The type of value returned by this return statement.
	 * @since 0.10.0
	 */
	returnType: CheckedType | undefined;
}
