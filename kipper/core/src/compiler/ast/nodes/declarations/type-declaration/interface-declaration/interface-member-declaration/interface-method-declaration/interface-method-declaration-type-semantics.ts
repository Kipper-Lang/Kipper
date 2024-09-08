import type { TypeDeclarationTypeSemantics } from "../../../type-declaration-type-semantics";
import type { BuiltInTypeFunc} from "../../../../../../../semantics";
import { ProcessedType } from "../../../../../../../semantics";

/**
 *
 * @since 0.12.0
 */
export interface InterfaceMethodDeclarationTypeSemantics extends TypeDeclarationTypeSemantics {
	/**
	 * The processed type of this member property.
	 * @since 0.12.0
	 */
	valueType: BuiltInTypeFunc;
}
