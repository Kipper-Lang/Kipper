import type { TypeDeclarationSemantics } from "../../type-declaration-semantics";

export interface InterfaceMemberListDeclarationSemantics extends TypeDeclarationSemantics {
	identifier: string;

	//some array that holds Members
}
