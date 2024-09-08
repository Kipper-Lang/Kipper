import type { BuiltInTypeFunc} from "../../../../../../../semantics";
import { ProcessedType } from "../../../../../../../semantics";
import type { ClassMemberDeclarationTypeSemantics } from "../class-member-declaration-type-semantics";

/**
 * Type semantics for AST Node {@link ClassConstructorDeclaration}.
 * @since 0.12.0
 */
export interface ClassConstructorDeclarationTypeSemantics extends ClassMemberDeclarationTypeSemantics {
	/**
	 * The processed type of this member property.
	 * @since 0.12.0
	 */
	valueType: BuiltInTypeFunc;
}
