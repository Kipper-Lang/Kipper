/**
 * Semantics for AST Node {@link MemberAccessExpression}.
 * @since 0.10.0
 */
import type { Expression } from "../expression";
import type { ExpressionSemantics } from "../expression-semantics";

/**
 * Semantics for AST Node {@link MemberAccessExpression}.
 * @since 0.10.0
 */
export interface MemberAccessExpressionSemantics extends ExpressionSemantics {
	/**
	 * The object or array that is accessed.
	 * @since 0.10.0
	 */
	objectLike: Expression;
	/**
	 * The member that is accessed. This can be in three different forms:
	 * - Dot Notation: object.member
	 * - Bracket Notation: object["member"]
	 * - Slice Notation: object[1:3]
	 * @since 0.10.0
	 */
	propertyIndexOrKeyOrSlice: string | Expression | { start?: Expression; end?: Expression };
	/**
	 * The type of the member access expression. Represented using strings.
	 * @since 0.10.0
	 */
	accessType: "dot" | "bracket" | "slice";
}
