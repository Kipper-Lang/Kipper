/**
 * Function declaration class, which represents the definition of a parameter inside a {@link FunctionDeclaration}.
 * @since 0.1.2
 */
import type { ParameterDeclarationSemantics } from "./parameter-declaration-semantics";
import type { ParameterDeclarationTypeSemantics } from "./parameter-declaration-type-semantics";
import type { CompilableNodeParent } from "../../../compilable-ast-node";
import type { FunctionScope, LambdaScope, ScopeParameterDeclaration } from "../../../../semantics";
import type { FunctionDeclaration } from "../function-declaration";
import type { IdentifierTypeSpecifierExpression, LambdaPrimaryExpression } from "../../expressions";
import { Declaration } from "../declaration";
import type { ParameterDeclarationContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";
import { getParseTreeSource } from "../../../../../tools";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";

/**
 * Function declaration class, which represents the definition of a parameter inside a {@link FunctionDeclaration}.
 * @since 0.1.2
 */
export class ParameterDeclaration extends Declaration<
	ParameterDeclarationSemantics,
	ParameterDeclarationTypeSemantics
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
	protected override _scopeDeclaration: ScopeParameterDeclaration | undefined;

	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.10.0
	 */
	public override get scopeDeclaration(): ScopeParameterDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected override set scopeDeclaration(declaration: ScopeParameterDeclaration | undefined) {
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
		return ParameterDeclaration.kind;
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
		return ParameterDeclaration.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ParameterDeclarationContext {
		return this._antlrRuleCtx;
	}

	public override getScopeDeclaration(): ScopeParameterDeclaration {
		/* istanbul ignore next: super function already being run/tested */
		return <ScopeParameterDeclaration>super.getScopeDeclaration();
	}

	/**
	 * Registers this parameter in the {@link semanticData.func.innerScope scope} of the
	 * {@link this.semanticData.func parent function}.
	 *
	 * This will also populate the {@link scopeDeclaration} field, since only after the parameter is registered in the
	 * scope the {@link scopeDeclaration} is created.
	 * @param scopeToUse The scope to register the parameter in. Should match
	 * {@link this.semantic.func.innerScope the scope of the parent function}.
	 * @since 0.10.0
	 */
	public async addParamToFunctionScope(scopeToUse: FunctionScope | LambdaScope): Promise<void> {
		this.scopeDeclaration = scopeToUse.addArgument(this);
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
		if (!parseTreeChildren || !this.children || this.children.length < 1) {
			throw new UnableToDetermineSemanticDataError();
		}

		const identifier = getParseTreeSource(this.tokenStream, parseTreeChildren[0]);
		const typeSpecifier = <IdentifierTypeSpecifierExpression>this.children[0];

		this.semanticData = {
			identifier: identifier,
			valueTypeSpecifier: typeSpecifier,
			valueType: typeSpecifier.getSemanticData().rawType,
			func: <FunctionDeclaration | LambdaPrimaryExpression>this.parent,
		};

		// Register this parameter in the function scope
		if (this.semanticData.func.innerScope) {
			await this.addParamToFunctionScope(this.semanticData.func.innerScope);
		}

		// IMPORTANT! If 'innerScope' returns undefined, then the function has an error and the parameter should not be
		// registered in the scope. For now, we will ignore the error, since the function will throw an error anyway.
	}

	/**
	 * Preliminary registers the class declaration type to allow for internal self-referential type checking.
	 *
	 * This is part of the "Ahead of time" type evaluation, which is done before the main type checking.
	 * @since 0.12.0
	 */
	public async primaryPreliminaryTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Get the type that will be returned using the value type specifier
		const valueType = semanticData.valueTypeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			valueType: valueType,
		};
	}

	public readonly primarySemanticTypeChecking: undefined;

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
