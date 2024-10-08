/**
 * Semantics for AST Node {@link ClassDeclaration}.
 * @since 0.11.0
 */
import type { TypeDeclarationSemantics } from "../type-declaration-semantics";
import type { ClassConstructorDeclaration, ClassMemberDeclaration } from "./class-member-declaration";

/**
 * Semantics for AST Node {@link ClassDeclaration}.
 * @since 0.11.0
 */
export interface ClassDeclarationSemantics extends TypeDeclarationSemantics {
	/**
	 * The identifier of this class.
	 * @since 0.11.0
	 */
	identifier: string;
	/**
	 * The body of the class.
	 * @since 0.11.0
	 */
	classMembers: Array<ClassMemberDeclaration>;
	/**
	 * The class constructor.
	 * @since 0.11.0
	 */
	constructorDeclaration: ClassConstructorDeclaration | undefined;
}
