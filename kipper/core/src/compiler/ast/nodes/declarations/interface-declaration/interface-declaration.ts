/**
 * Represents an interface declaration in the Kipper language, which may contain methods and fields declarations.
 * @since 0.11.0
 */
import type {InterfaceDeclarationSemantics} from "./interface-declaration-semantics";
import type {InterfaceDeclarationTypeSemantics} from "./interface-declaration-type-semantics";
import type {CompilableNodeParent} from "../../../compilable-ast-node";
import {ScopeTypeDeclaration} from "../../../../analysis";
import {
	InterfaceDeclarationContext,
	KindParseRuleMapping,
	ParseRuleKindMapping
} from "../../../../parser";
import {Declaration} from "../declaration";
import {KipperNotImplementedError} from "../../../../../errors";

/**
 * Represents an interface declaration in the Kipper language, which may contain methods and fields declarations.
 * @since 0.11.0
 */
export class InterfaceDeclaration extends Declaration<InterfaceDeclarationSemantics, InterfaceDeclarationTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: InterfaceDeclarationContext;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected override _scopeDeclaration: ScopeTypeDeclaration | undefined;

	/**
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_interfaceDeclaration;

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
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

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

	constructor(antlrRuleCtx: InterfaceDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): InterfaceDeclarationContext {
		return this._antlrRuleCtx;
	}

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
		this
			.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Interface declarations are not yet implemented."));
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
		this
			.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Interface declarations are not yet implemented."));
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
