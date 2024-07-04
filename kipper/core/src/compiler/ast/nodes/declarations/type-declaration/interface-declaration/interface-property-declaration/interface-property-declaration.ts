import type { TranslatedCodeLine } from "../../../../../../const";
import type { TargetASTNodeSemanticAnalyser, TargetASTNodeCodeGenerator } from "../../../../../../target-presets";
import type { ASTDeclarationKind, ASTDeclarationRuleName } from "../../../../../common";
import { Declaration } from "../../../declaration";
import type { InterfacePropertyDeclarationTypeSemantics } from "./interface-property-declaration-type-semantics";
import type { InterfaceMemberSemantics } from "./interface-property-declaration-semantics";

export class InterfacePropertyDeclaration extends Declaration<
	InterfaceMemberSemantics,
	InterfacePropertyDeclarationTypeSemantics
> {
	public get kind(): ASTDeclarationKind {
		throw new Error("Method not implemented.");
	}
	public get ruleName(): ASTDeclarationRuleName {
		throw new Error("Method not implemented.");
	}
	protected primarySemanticAnalysis?(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	protected primarySemanticTypeChecking?(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	protected checkForWarnings = undefined;

	public targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any> | undefined;
	//@ts-ignore
	public targetCodeGenerator: TargetASTNodeCodeGenerator<any, TranslatedCodeLine[]>;
}
