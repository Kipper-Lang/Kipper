/**
 * Type semantics for a {@link ReturnStatement}.
 * @since 0.10.0
 */
import type { ProcessedType } from "../../../../semantics";
import type { StatementTypeSemantics } from "../statement-type-semantics";

/**
 * Type semantics for a {@link ReturnStatement}.
 * @since 0.10.0
 */
export interface ReturnStatementTypeSemantics extends StatementTypeSemantics {
	/**
	 * The type of value returned by this return statement.
	 * @since 0.10.0
	 */
	returnType: ProcessedType | undefined;
}
