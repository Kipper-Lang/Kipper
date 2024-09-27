import type { BuiltInTypeFunc } from "../../../../../../../semantics";
import type { TypeDeclarationPropertyTypeSemantics } from "../../../type-declaration-property-type-semantics";

/**
 * Type semantics for AST Node {@link InterfaceMethodDeclaration}.
 * @since 0.12.0
 */
export interface InterfaceMethodDeclarationTypeSemantics extends TypeDeclarationPropertyTypeSemantics {
	/**
	 * The processed type of this member property. This is always {@link BuiltInTypeFunc a function}.
	 * @since 0.12.0
	 */
	valueType: BuiltInTypeFunc;
}
