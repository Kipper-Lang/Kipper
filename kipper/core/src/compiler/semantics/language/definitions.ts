/**
 * Declaration and definitions in the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import type { compilableNodeParent, SemanticData } from "../../parser";
import {
	CompilableASTNode,
	CompoundStatementContext,
	DeclarationContext,
	DeclaratorContext,
	FunctionDeclarationContext,
	InitDeclaratorContext,
	ParameterDeclarationContext,
	ParameterTypeListContext,
	StorageTypeSpecifierContext
} from "../../parser";
import type { ParseTree } from "antlr4ts/tree";
import type { ScopeVariableDeclaration } from "../../scope-declaration";
import type { Expression, IdentifierTypeSpecifierExpression } from "./expressions";
import type { KipperReturnType, KipperStorageType, KipperType, TranslatedCodeLine } from "../const";
import type { TargetASTNodeCodeGenerator } from "../../translation";
import type { TargetASTNodeSemanticAnalyser } from "../target-semantic-analyser";
import { UnableToDetermineMetadataError } from "../../../errors";
import { Scope } from "../../scope";

/**
 * Every antlr4 definition ctx type
 */
export type antlrDefinitionCtxType = FunctionDeclarationContext | ParameterDeclarationContext | DeclarationContext;

/**
 * Factory class which generates definition class instances using {@link DefinitionASTNodeFactory.create DefinitionASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class DefinitionASTNodeFactory {
	/**
	 * Fetches the AST node and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The file context class that will be assigned to the instance.
	 * @since 0.9.0
	 */
	public static create(antlrRuleCtx: antlrDefinitionCtxType, parent: compilableNodeParent): Declaration<any> {
		if (antlrRuleCtx instanceof FunctionDeclarationContext) {
			return new FunctionDeclaration(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ParameterDeclarationContext) {
			return new ParameterDeclaration(antlrRuleCtx, parent);
		} else {
			return new VariableDeclaration(antlrRuleCtx, parent);
		}
	}
}

/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.5.0
 */
export interface DeclarationSemantics {
	/**
	 * The identifier of the declaration.
	 * @since 0.5.0
	 */
	identifier: string;
}

/**
 * Base Declaration class that represents a value or function declaration or definition in Kipper.
 *
 * Any function or variable declaration in Kipper will be registered in a {@link Scope}, which will define the
 * visibility of the variable. The only exception is a {@link ParameterDeclaration}, which is bound to a function
 * and its local scope.
 * @since 0.1.0
 */
export abstract class Declaration<Semantics extends DeclarationSemantics> extends CompilableASTNode<Semantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: antlrDefinitionCtxType;

	protected constructor(antlrRuleCtx: antlrDefinitionCtxType, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): antlrDefinitionCtxType {
		return this._antlrRuleCtx;
	}

	public async translateCtxAndChildren(): Promise<Array<TranslatedCodeLine>> {
		return await this.targetCodeGenerator(this);
	}

	public abstract targetCodeGenerator: TargetASTNodeCodeGenerator<any, Array<TranslatedCodeLine>>;
}

/**
 * Semantics for AST Node {@link ParameterDeclaration}.
 * @since 0.5.0
 */
export interface ParameterDeclarationSemantics extends DeclarationSemantics {
	/**
	 * The identifier of the declaration.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The {@link KipperType variable type} of the declaration.
	 * @since 0.5.0
	 */
	type: KipperType;
}

/**
 * Declaration of a parameter inside a {@link FunctionDeclaration}.
 * @since 0.1.2
 */
export class ParameterDeclaration extends Declaration<ParameterDeclarationSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ParameterDeclarationContext;

	constructor(antlrRuleCtx: ParameterDeclarationContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ParameterDeclarationContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ParameterDeclaration> =
		this.semanticAnalyser.parameterDeclaration;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ParameterDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.parameterDeclaration;
}

/**
 * Semantics for AST Node {@link FunctionDeclaration}.
 * @since 0.3.0
 */
export interface FunctionDeclarationSemantics {
	/**
	 * The identifier of the function.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The {@link KipperType return type} of the function.
	 * @since 0.5.0
	 */
	returnType: KipperReturnType;
	/**
	 * Returns true if this declaration defines the function body for the function.
	 * @since 0.5.0
	 */
	isDefined: boolean;
	/**
	 * The {@link ParameterDeclaration arguments} for the function.
	 */
	args: Array<ParameterDeclaration>;
}

/**
 * Function definition class, which represents the definition of a function in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 *
 * Functions will always be global and unlike {@link VariableDeclaration variables} therefore have no scope.
 *
 * @todo Implement support for arguments using {@link ParameterDeclaration}.
 * @since 0.1.2
 */
export class FunctionDeclaration extends Declaration<FunctionDeclarationSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FunctionDeclarationContext;

	constructor(antlrRuleCtx: FunctionDeclarationContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FunctionDeclarationContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const children = this.getAntlrRuleChildren();

		// Fetch context instances
		let declaratorCtx = <DeclaratorContext | undefined>children.find((val) => val instanceof DeclaratorContext);
		let paramListCtx = <ParameterTypeListContext | undefined>(
			children.find((val) => val instanceof ParameterTypeListContext)
		);

		// The type of this declaration, which should always be present, since the parser requires it during the parsing
		// step.
		const typeSpecifier: IdentifierTypeSpecifierExpression = <IdentifierTypeSpecifierExpression>this.children[0];

		// Ensure that the children are fully present and not undefined
		if (!declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineMetadataError();
		}

		const identifier = this.tokenStream.getText(declaratorCtx.sourceInterval);
		const type: KipperType = typeSpecifier.getSemanticData().type;

		// Fetching the metadata from the antlr4 context
		this.semanticData = {
			isDefined: children.find((val) => val instanceof CompoundStatementContext) !== undefined,
			identifier: identifier,
			returnType: <KipperReturnType>type,
			args: paramListCtx ? [] : [], // TODO! Implement arg fetching
		};

		// Add function definition to the global scope
		await this.scope.addFunction(this);
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.programCtx.typeCheck(this).typeExists(semanticData.returnType);
		this.programCtx.typeCheck(this).validReturnType(semanticData.returnType);
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<FunctionDeclaration> =
		this.semanticAnalyser.functionDeclaration;
	targetCodeGenerator: TargetASTNodeCodeGenerator<FunctionDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.functionDeclaration;
}

/**
 * Semantics for AST Node {@link VariableDeclaration}.
 * @since 0.3.0
 */
export interface VariableDeclarationSemantics extends SemanticData {
	/**
	 * The identifier of this variable.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The storage type option for this variable.
	 * @since 0.5.0
	 */
	storageType: KipperStorageType;
	/**
	 * The type of the value.
	 * @since 0.5.0
	 */
	valueType: KipperType;
	/**
	 * If this is true then the variable has a defined value.
	 * @since 0.5.0
	 */
	isDefined: boolean;
	/**
	 * The scope of this variable.
	 * @since 0.5.0
	 */
	scope: Scope;
	/**
	 * The assigned value to this variable. If {@link isDefined} is false, then this value is undefined.
	 * @since 0.7.0
	 */
	value: Expression<any> | undefined;
}

/**
 * Variable declaration class, which represents the declaration and or definition of a variable in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 *
 * In case that {@link scope} is of type {@link KipperProgramContext}, then the scope is defined as global
 * (accessible for the entire program).
 */
export class VariableDeclaration extends Declaration<VariableDeclarationSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: DeclarationContext;

	protected override _children: Array<Expression<any>>;

	constructor(antlrRuleCtx: DeclarationContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): DeclarationContext {
		return this._antlrRuleCtx;
	}

	public get children(): Array<Expression<any>> {
		return this._children;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
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
		const assignValue: Expression<any> | undefined = this.children[1];

		// Throw an error if children are incomplete
		if (!storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineMetadataError();
		}

		const identifier = this.tokenStream.getText(declaratorCtx.sourceInterval);
		const isDefined = Boolean(assignValue);
		const storageType = <KipperStorageType>this.tokenStream.getText(storageTypeCtx.sourceInterval);
		const valueType = typeSpecifier.getSemanticData().type;

		this.semanticData = {
			isDefined: isDefined,
			identifier: identifier,
			storageType: storageType,
			valueType: valueType,
			scope: this.scope,
			value: assignValue,
		};

		// If the storage type is 'const' ensure that the variable has a value set.
		this.programCtx.semanticCheck(this).validDeclaration(this);

		// Add scope variable entry
		await this.scope.addVariable(this);
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Check whether the type of the variable even exists
		this.programCtx.typeCheck(this).typeExists(semanticData.valueType);

		// If the variable is defined, check whether the assignment is valid
		if (semanticData.value) {
			const scopeEntry = <ScopeVariableDeclaration>semanticData.scope.getVariable(semanticData.identifier);
			this.programCtx.typeCheck(this).validVariableDefinition(scopeEntry, semanticData.value);
		}
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<VariableDeclaration> =
		this.semanticAnalyser.variableDeclaration;
	targetCodeGenerator: TargetASTNodeCodeGenerator<VariableDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.variableDeclaration;
}
