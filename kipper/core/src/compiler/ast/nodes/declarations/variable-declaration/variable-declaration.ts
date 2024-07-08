/**
 * Variable declaration class, which represents the declaration and or definition of a variable in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 *
 * In case that {@link scope} is of type {@link KipperProgramContext}, then the scope is defined as global
 * (accessible for the entire program).
 */
import type { VariableDeclarationSemantics } from "./variable-declaration-semantics";
import type { VariableDeclarationTypeSemantics } from "./variable-declaration-type-semantics";
import type { CompilableNodeParent } from "../../../compilable-ast-node";
import type { RawType, ScopeVariableDeclaration } from "../../../../semantics";
import type { Expression, IdentifierTypeSpecifierExpression } from "../../expressions";
import type { ParseTree } from "antlr4ts/tree";
import type { KipperStorageType } from "../../../../const";
import { Declaration } from "../declaration";
import type { VariableDeclarationContext } from "../../../../lexer-parser";
import {
	DeclaratorContext,
	InitDeclaratorContext,
	KindParseRuleMapping,
	ParseRuleKindMapping,
	StorageTypeSpecifierContext,
} from "../../../../lexer-parser";
import { UnableToDetermineSemanticDataError } from "../../../../../errors";

/**
 * Variable declaration class, which represents the declaration and or definition of a variable in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 *
 * In case that {@link scope} is of type {@link KipperProgramContext}, then the scope is defined as global
 * (accessible for the entire program).
 */
export class VariableDeclaration extends Declaration<VariableDeclarationSemantics, VariableDeclarationTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: VariableDeclarationContext;

	/**
	 * The private field '_children' that actually stores the variable data,
	 * which is returned inside the {@link this.children}.
	 * @private
	 */
	protected override _children: Array<Expression>;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected override _scopeDeclaration: ScopeVariableDeclaration | undefined;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_variableDeclaration;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return VariableDeclaration.kind;
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
		return VariableDeclaration.ruleName;
	}

	constructor(antlrRuleCtx: VariableDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): VariableDeclarationContext {
		return this._antlrRuleCtx;
	}

	public override get children(): Array<Expression> {
		return this._children;
	}

	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.10.0
	 */
	public get scopeDeclaration(): ScopeVariableDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeVariableDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	public getScopeDeclaration(): ScopeVariableDeclaration {
		return <ScopeVariableDeclaration>super.getScopeDeclaration();
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const children: Array<ParseTree> = this.getAntlrRuleChildren();

		// Determine the ctx instances
		const storageTypeCtx = <StorageTypeSpecifierContext | undefined>(
			children.find((val) => val instanceof StorageTypeSpecifierContext)
		);
		const initDeclaratorCtx = <InitDeclaratorContext | undefined>(
			children.find((val) => val instanceof InitDeclaratorContext)
		);
		const declaratorCtx = <DeclaratorContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof DeclaratorContext)
		);

		// The type of this declaration, which should always be present, since the parser requires it during the parsing
		// step.
		const typeSpecifier: IdentifierTypeSpecifierExpression = <IdentifierTypeSpecifierExpression>this.children[0];

		// There will always be only one child, which is the expression assigned.
		// If this child is missing, then this declaration does not contain a definition.
		const assignValue: Expression | undefined = this.children[1];

		// Throw an error if children are incomplete
		if (!storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineSemanticDataError();
		}

		// Semantic data of the variable declaration
		const identifier = this.tokenStream.getText(declaratorCtx.sourceInterval);
		const isDefined = Boolean(assignValue);
		const storageType = <KipperStorageType>this.tokenStream.getText(storageTypeCtx.sourceInterval);
		const valueType: RawType = typeSpecifier.getSemanticData().typeIdentifier;

		this.semanticData = {
			isDefined: isDefined,
			identifier: identifier,
			storageType: storageType,
			valueType: valueType,
			valueTypeSpecifier: typeSpecifier,
			scope: this.scope,
			value: assignValue,
		};

		// Add scope variable entry
		this.scopeDeclaration = this.scope.addVariable(this);

		// If the storage type is 'const' ensure that the variable has a value set.
		this.programCtx.semanticCheck(this).validVariableDeclaration(this);
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
		const semanticData = this.getSemanticData();

		// Get the type that will be returned using the value type specifier
		semanticData.valueTypeSpecifier.ensureTypeSemanticallyValid(); // Ensure the type specifier didn't fail
		const valueType = semanticData.valueTypeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			valueType: valueType,
		};

		// If the variable is defined, check whether the assignment is valid
		if (semanticData.value) {
			semanticData.value.ensureTypeSemanticallyValid(); // Ensure the assignment didn't fail
			this.ensureScopeDeclarationAvailableIfNeeded(); // Ensure the scope declaration is available
			this.programCtx.typeCheck(this).validVariableDefinition(this.getScopeDeclaration(), semanticData.value);
		}
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.variableDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.variableDeclaration;
}
