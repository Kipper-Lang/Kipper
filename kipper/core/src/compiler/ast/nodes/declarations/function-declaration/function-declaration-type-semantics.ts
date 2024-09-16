/**
 * Type semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.10.0
 */
import type { BuiltInTypeFunc } from "../../../../semantics";
import type { DeclarationTypeSemantics } from "../declaration-type-semantics";

/**
 * Type semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.10.0
 */
export interface FunctionDeclarationTypeSemantics extends DeclarationTypeSemantics {
	/**
	 * The type of the declaration. This is always some variation of {@link BuiltInTypeFunc i.e. `Func<P..., T>`}.
	 * @since 0.12.0
	 */
	valueType: BuiltInTypeFunc;
}
