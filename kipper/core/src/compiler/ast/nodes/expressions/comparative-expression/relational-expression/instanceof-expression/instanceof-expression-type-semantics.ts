import type { ExpressionTypeSemantics } from "../../../expression-type-semantics";
import type { CustomType } from "../../../../../../semantics";

export interface InstanceofExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type that the left-hand side of the instanceof expression is being checked against.
	 * @since 0.1.0
	 */
	toBeChecked: CustomType;

	/**
	 * The type that the right-hand side of the instanceof expression is being checked against.
	 */

	toBeCheckedAgainst: CustomType;
}
