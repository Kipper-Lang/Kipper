/**
 * Semantic type data definitions for all statement AST nodes.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import type { TypeData } from "../../parser";
import type { CheckedType } from "../type";

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
