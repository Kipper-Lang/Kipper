/**
 * Represents an interface declaration in the Kipper language, which may contain methods and fields declarations.
 * @since 0.11.0
 */
import type { InterfaceDeclarationSemantics } from "./interface-declaration-semantics";
import type { InterfaceDeclarationTypeSemantics } from "./interface-declaration-type-semantics";
import type { CompilableNodeParent } from "../../../../compilable-ast-node";
import type { ScopeTypeDeclaration } from "../../../../../semantics";
import { CustomType } from "../../../../../semantics";
import type { InterfaceDeclarationContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import type { InterfaceMemberDeclaration } from "./interface-member-declaration";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { TypeDeclaration } from "../type-declaration";

/**
 * Represents an interface declaration in the Kipper language, which may contain methods and fields declarations.
 * @since 0.11.0
 */
export class InterfaceDeclaration extends TypeDeclaration<
	InterfaceDeclarationSemantics,
	InterfaceDeclarationTypeSemantics
> {
	/**
	/**
	* The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_interfaceDeclaration;

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: InterfaceDeclarationContext;

	constructor(antlrRuleCtx: InterfaceDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected override _scopeDeclaration: ScopeTypeDeclaration | undefined;

	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.11.0
	 */
	public get scopeDeclaration(): ScopeTypeDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeTypeDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.11.0
	 */
	public override get kind() {
		return InterfaceDeclaration.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return InterfaceDeclaration.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): InterfaceDeclarationContext {
		return this._antlrRuleCtx;
	}

	public getScopeDeclaration(): ScopeTypeDeclaration {
		/* istanbul ignore next: super function already being run/tested */
		return <ScopeTypeDeclaration>super.getScopeDeclaration();
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const antlrChildren = this.antlrRuleCtx.children;
		if (!antlrChildren?.length) {
			throw new UnableToDetermineSemanticDataError();
		}
		const identifier = antlrChildren[1].text;

		this.semanticData = {
			identifier: identifier,
			members: [...this.children] as Array<InterfaceMemberDeclaration>,
		};
		this.scopeDeclaration = this.scope.addType(this);
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.11.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		this.typeSemantics = {
			type: CustomType.fromInterfaceDeclaration(this),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.11.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.interfaceDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.interfaceDeclaration;
}
