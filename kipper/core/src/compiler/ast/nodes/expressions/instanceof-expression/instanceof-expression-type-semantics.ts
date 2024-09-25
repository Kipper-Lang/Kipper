import type { ExpressionTypeSemantics } from "../expression-type-semantics";
import type { CustomType } from "../../../../semantics";

/**
 * The type semantics for an instanceof expression.
 * @since 0.12.0
 */
export interface InstanceofExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The type that the right-hand side of the instanceof expression is being checked against.
	 * @since 0.12.0
	 */
	classType: CustomType;
}
