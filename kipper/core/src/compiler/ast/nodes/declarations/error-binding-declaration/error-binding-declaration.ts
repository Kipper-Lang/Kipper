/**
 * Error binding declaration AST node, which is used within a {@link CatchClause} to bind the error to a variable.
 * @since 0.13.0
 */
import type { ErrorBindingDeclarationSemantics } from "./error-binding-declaration-semantics";
import type { ErrorBindingDeclarationTypeSemantics } from "./error-binding-declaration-type-semantics";
import type { CompilableNodeParent } from "../../../compilable-ast-node";
import type { LocalScope, ScopeVariableDeclaration } from "../../../../semantics";
import { BuiltInTypes } from "../../../../semantics";
import type { IdentifierTypeSpecifierExpression } from "../../expressions";
import { Declaration } from "../declaration";
import type { ErrorBindingDeclarationContext, ParameterDeclarationContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import { getParseTreeSource } from "../../../../../tools";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";
import type { CatchClause, CompoundStatement } from "../../statements";

/**
 * Error binding declaration AST node, which is used within a {@link CatchClause} to bind the error to a variable.
 * @since 0.13.0
 */
export class ErrorBindingDeclaration extends Declaration<
	ErrorBindingDeclarationSemantics,
	ErrorBindingDeclarationTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_parameterDeclaration;

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
	protected override readonly _antlrRuleCtx: ParameterDeclarationContext;

	constructor(antlrRuleCtx: ParameterDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected override _scopeDeclaration: ScopeVariableDeclaration | undefined;

	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.10.0
	 */
	public override get scopeDeclaration(): ScopeVariableDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected override set scopeDeclaration(declaration: ScopeVariableDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return ErrorBindingDeclaration.kind;
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
		return ErrorBindingDeclaration.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ErrorBindingDeclarationContext {
		return this._antlrRuleCtx;
	}

	public override getScopeDeclaration(): ScopeVariableDeclaration {
		/* istanbul ignore next: super function already being run/tested */
		return <ScopeVariableDeclaration>super.getScopeDeclaration();
	}

	/**
	 * Registers this parameter in the
	 * @since 0.13.0
	 */
	public async addParamToBodyScope(scopeToUse: LocalScope): Promise<void> {
		this.scopeDeclaration = scopeToUse.addErrorBinding(this);
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const parseTreeChildren = this.getAntlrRuleChildren();
		if (!parseTreeChildren || this.children === undefined) {
			throw new UnableToDetermineSemanticDataError();
		}

		const identifier = getParseTreeSource(this.tokenStream, parseTreeChildren[0]);
		const typeSpecifier = <IdentifierTypeSpecifierExpression | undefined>this.children[0];

		const parentCatchClause = this.parent as CatchClause;
		this.semanticData = {
			identifier,
			storageType: "const",
			valueTypeSpecifier: typeSpecifier,
			isDefined: true,
			scope: (parentCatchClause.children[1] as CompoundStatement).innerScope,
		};

		await this.addParamToBodyScope(this.semanticData.scope);
	}

	/**
	 * Preliminary registers the class declaration type to allow for internal self-referential type checking.
	 *
	 * This is part of the "Ahead of time" type evaluation, which is done before the main type checking.
	 * @since 0.12.0
	 */
	public async primaryPreliminaryTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.typeSemantics = {
			valueType: semanticData.valueTypeSpecifier?.getTypeSemanticData().storedType ?? BuiltInTypes.any,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// We need to ensure that the given type is a class
		const semanticData = this.getSemanticData();
		const valueTypeSpecifier = semanticData.valueTypeSpecifier;
		if (valueTypeSpecifier) {
			this.programCtx.typeCheck(valueTypeSpecifier).isValidErrorBindingArgument(valueTypeSpecifier);
		}
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.parameterDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.parameterDeclaration;
}
