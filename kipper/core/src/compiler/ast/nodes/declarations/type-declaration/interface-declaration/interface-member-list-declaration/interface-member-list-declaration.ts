import type { TranslatedCodeLine } from "../../../../../../const";
import type { TargetASTNodeSemanticAnalyser, TargetASTNodeCodeGenerator } from "../../../../../../target-presets";
import type { InterfaceMemberListDeclarationSemantics } from "./interface-member-list-declaration-semantics";
import type { InterfaceMemberListDeclarationTypeSemantics } from "./interface-member-list-declaration-type-semantics";
import { Declaration } from "../../../declaration";
import type { ASTDeclarationKind, ASTDeclarationRuleName } from "../../../../../common";

export class InterfaceMemberListDeclaration extends Declaration
	<InterfaceMemberListDeclarationSemantics,
		InterfaceMemberListDeclarationTypeSemantics> {
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
    protected checkForWarnings?(): Promise<void> {
        throw new Error("Method not implemented.");
    }

	public targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any> | undefined;
	// @ts-ignore
	public targetCodeGenerator: TargetASTNodeCodeGenerator<any, TranslatedCodeLine[]>;
}
