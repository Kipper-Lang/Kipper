/**
 * Type semantics for AST Node {@link NewInstantiationExpressionTypeSemantics}.
 * @since 0.12.0
 */
import type { ExpressionTypeSemantics } from "../expression-type-semantics";
import {ClassConstructorDeclaration} from "../../declarations";

/**
 * Type semantics for AST Node {@link NewInstantiationExpressionTypeSemantics}.
 * @since 0.12.0
 */
export interface NewInstantiationExpressionTypeSemantics extends ExpressionTypeSemantics {
	/**
	 * The constructor that is being invoked by this instantiation.
	 * @since 0.13.0
	 */
	constructor: ClassConstructorDeclaration | undefined,
}
