/**
 * Semantics for AST Node {@link TypeSpecifierExpression}.
 */
import type { ExpressionSemantics } from "../expression-semantics";
import type { RawType } from "../../../../semantics";

/**
 * Semantics for AST Node {@link TypeSpecifierExpression}.
 */
export interface TypeSpecifierExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type specified by this expression, which per default is an unchecked type as the type is not yet known and
	 * therefore may be invalid/undefined.
	 * @since 0.12.0
	 */
	rawType: RawType;
}
