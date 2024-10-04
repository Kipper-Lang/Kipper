/**
 * Semantics for AST Node {@link TypeofExpression}.
 * @since 0.12.0
 */
import type {Expression} from "../../expression";
import type {PostfixExpressionSemantics} from "../postfix-expression-semantics";

/**
 * Semantics for AST Node {@link TypeofExpression}.
 * @since 0.12.0
 */
export interface TypeofExpressionSemantics extends PostfixExpressionSemantics {
	/**
	 * The operand that is modified by the operator.
	 * @since 0.12.0
	 */
	operand: Expression;
}
