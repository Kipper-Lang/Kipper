/**
 * Declaration and definitions in the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import type { ParseTree } from "antlr4ts/tree";
import type { compilableNodeParent, SemanticData, TypeData } from "../../parser";
import {
	CompilableASTNode,
	CompoundStatementContext,
	DeclarationContext,
	DeclaratorContext,
	FunctionDeclarationContext,
	InitDeclaratorContext,
	ParameterDeclarationContext,
	StorageTypeSpecifierContext,
} from "../../parser";
import {
	FunctionScope,
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	ScopeParameterDeclaration,
	ScopeVariableDeclaration,
} from "../../symbol-table";
import type { Expression, IdentifierTypeSpecifierExpression } from "./expressions";
import type { KipperStorageType, TranslatedCodeLine } from "../const";
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../../target-presets";
import { UnableToDetermineSemanticDataError, UndefinedDeclarationCtxError } from "../../../errors";
import type {
	DeclarationSemantics,
	FunctionDeclarationSemantics,
	ParameterDeclarationSemantics,
	VariableDeclarationSemantics,
} from "../semantic-data";
import type {
	DeclarationTypeData,
	FunctionDeclarationTypeSemantics,
	ParameterDeclarationTypeSemantics,
	VariableDeclarationTypeSemantics,
} from "../type-data";
import { getParseTreeSource } from "../../../utils";
import { CompoundStatement, Statement } from "./statements";
import { UncheckedType } from "../type";

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
	public static create(antlrRuleCtx: antlrDefinitionCtxType, parent: compilableNodeParent): Declaration<any, any> {
		if (antlrRuleCtx instanceof FunctionDeclarationContext) {
			return new FunctionDeclaration(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ParameterDeclarationContext) {
			return new ParameterDeclaration(antlrRuleCtx, parent);
		}
		// Last remaining possible type {@link VariableDeclaration}
		return new VariableDeclaration(antlrRuleCtx, parent);
	}
}

/**
 * Base Declaration class that represents a value or function declaration or definition in Kipper.
 *
 * Any function or variable declaration in Kipper will be registered in a {@link Scope}, which will define the
 * visibility of the variable. The only exception is a {@link ParameterDeclaration}, which is bound to a function
 * and its local scope.
 * @since 0.1.0
 */
export abstract class Declaration<
	Semantics extends DeclarationSemantics,
	TypeData extends DeclarationTypeData,
> extends CompilableASTNode<Semantics, TypeData> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: antlrDefinitionCtxType;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected _scopeDeclaration: ScopeDeclaration | undefined;

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

	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.10.0
	 */
	public get scopeDeclaration(): ScopeDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	/**
	 * Returns the {@link scopeDeclaration scope declaration ctx} of this declaration and throws an error in case
	 * it is undefined.
	 * @throws UndefinedDeclarationCtx If {@link scopeDeclaration} is undefined.
	 * @since 0.10.0
	 */
	public getScopeDeclaration(): ScopeDeclaration {
		if (!this.scopeDeclaration) {
			throw new UndefinedDeclarationCtxError();
		}
		return this.scopeDeclaration;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 * @since 0.8.0
	 */
	public async translateCtxAndChildren(): Promise<Array<TranslatedCodeLine>> {
		return await this.targetCodeGenerator(this);
	}

	public abstract targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any>;
	public abstract targetCodeGenerator: TargetASTNodeCodeGenerator<any, Array<TranslatedCodeLine>>;
}

/**
 * Declaration of a parameter inside a {@link FunctionDeclaration}.
 * @since 0.1.2
 */
export class ParameterDeclaration extends Declaration<
	ParameterDeclarationSemantics,
	ParameterDeclarationTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ParameterDeclarationContext;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected _scopeDeclaration: ScopeParameterDeclaration | undefined;

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

	public override get scopeDeclaration(): ScopeParameterDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected override set scopeDeclaration(declaration: ScopeParameterDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	public override getScopeDeclaration(): ScopeParameterDeclaration {
		if (!this.scopeDeclaration) {
			throw new UndefinedDeclarationCtxError();
		}
		return this.scopeDeclaration;
	}

	/**
	 * Registers this parameter in the {@link semanticData.func.semanticData.innerScope scope} of the
	 * {@link this.semanticData.func parent function}.
	 *
	 * This will also populate the {@link scopeDeclaration} field, since only after the parameter is registered in the
	 * scope the {@link scopeDeclaration} is created.
	 * @param scopeToUse The scope to register the parameter in. Should match
	 * {@link this.semantic.func.innerScope the scope of the parent function}.
	 * @since 0.10.0
	 */
	public async addParamToFunctionScope(scopeToUse: FunctionScope): Promise<void> {
		this.scopeDeclaration = scopeToUse.addArgument(this);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const parseTreeChildren = this.getAntlrRuleChildren();

		// The type specifier of the parameter
		const typeSpecifier = <IdentifierTypeSpecifierExpression>this.children[0];

		this.semanticData = {
			identifier: getParseTreeSource(this.tokenStream, parseTreeChildren[0]),
			valueTypeSpecifier: typeSpecifier,
			valueType: typeSpecifier.getSemanticData().typeIdentifier,
			func: <FunctionDeclaration>this.parent,
		};

		// Register this parameter in the function scope
		if (this.semanticData.func.innerScope) {
			await this.addParamToFunctionScope(this.semanticData.func.innerScope);
		}

		// IMPORTANT! If 'innerScope' returns undefined, then the function has an error and the parameter should not be
		// registered in the scope. For now, we will ignore the error, since the function will throw an error anyway.
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Get the type that will be returned using the value type specifier
		const valueType = semanticData.valueTypeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			valueType: valueType,
		};
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ParameterDeclaration> =
		this.semanticAnalyser.parameterDeclaration;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ParameterDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.parameterDeclaration;
}

/**
 * Function definition class, which represents the definition of a function in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 * @since 0.1.2
 */
export class FunctionDeclaration extends Declaration<FunctionDeclarationSemantics, FunctionDeclarationTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FunctionDeclarationContext;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected _scopeDeclaration: ScopeFunctionDeclaration | undefined;

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

	public get scopeDeclaration(): ScopeFunctionDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeFunctionDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	public getScopeDeclaration(): ScopeFunctionDeclaration {
		if (!this.scopeDeclaration) {
			throw new UndefinedDeclarationCtxError();
		}
		return this.scopeDeclaration;
	}

	/**
	 * Gets the inner scope of this function, where also the {@link semanticData.params arguments} should be stored.
	 * @returns The inner scope of this function, or undefined if the function is invalid and the scope can't be
	 * determined.
	 * @since 0.10.0
	 */
	public get innerScope(): FunctionScope | undefined {
		const body = this.children[this.children.length - 1];
		try {
			// Check whether the function body is valid, and if it is not, return undefined
			// IMPORTANT! If an error occurs, we will ignore it, since the function will throw an error anyway during
			// semantic analysis.
			this.programCtx.semanticCheck(this).validFunctionBody(body);
		} catch {
			return undefined;
		}

		// The semantic check should ensure that the body is a 'CompoundStatement' and the inner scope is a function scope.
		return <FunctionScope>(<CompoundStatement>body).localScope;
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const parseTreeChildren = this.getAntlrRuleChildren();

		// Fetch context instances
		let declaratorCtx = <DeclaratorContext | undefined>(
			parseTreeChildren.find((val) => val instanceof DeclaratorContext)
		);

		let body: Statement<SemanticData, TypeData> | undefined;
		let retTypeSpecifier: IdentifierTypeSpecifierExpression | undefined;
		let params: Array<ParameterDeclaration> = [];

		// Create shallow copy of the children
		let children = [...this.children];

		// Evaluate the primary semantic data for the function
		while (children.length > 0) {
			let child = children.shift();

			if (child instanceof ParameterDeclaration) {
				params.push(child);
			} else {
				// Once the return type has been reached, stop, as the last two items should be the return type and func body
				retTypeSpecifier = <IdentifierTypeSpecifierExpression>child;
				body = <any>children.pop();
				break;
			}
		}

		// Ensure that the children are fully present and not undefined
		// Also make sure the scope has the required argument field for the function (is of type 'FunctionScope')
		if (!declaratorCtx || !retTypeSpecifier) {
			throw new UnableToDetermineSemanticDataError();
		}

		// Check the function body and ensure it exists/and is valid
		this.programCtx.semanticCheck(this).validFunctionBody(body);
		const innerScope = <FunctionScope>this.innerScope;

		const identifier = this.tokenStream.getText(declaratorCtx.sourceInterval);
		const type: UncheckedType = retTypeSpecifier.getSemanticData().typeIdentifier;

		this.semanticData = {
			isDefined: parseTreeChildren.find((val) => val instanceof CompoundStatementContext) !== undefined,
			identifier: identifier,
			returnTypeSpecifier: retTypeSpecifier,
			returnType: type,
			params: params,
			functionBody: <CompoundStatement>body, // Will always syntactically be a compound statement
			innerScope: innerScope, // Should always be a 'FunctionScope', since it will check itself again if the body is valid
		};

		// Ensure that all code paths return a value
		this.programCtx.semanticCheck(this).validReturnCodePathsInFunctionBody(this);

		// Add function definition to the current scope
		this.scopeDeclaration = this.scope.addFunction(this);
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Get the type that will be returned using the return type specifier
		const returnType = semanticData.returnTypeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			returnType: returnType,
		};
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<FunctionDeclaration> =
		this.semanticAnalyser.functionDeclaration;
	targetCodeGenerator: TargetASTNodeCodeGenerator<FunctionDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.functionDeclaration;
}

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
	protected override readonly _antlrRuleCtx: DeclarationContext;

	/**
	 * The private field '_children' that actually stores the variable data,
	 * which is returned inside the {@link this.children}.
	 * @private
	 */
	protected override _children: Array<Expression<any, any>>;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected _scopeDeclaration: ScopeVariableDeclaration | undefined;

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

	public override get children(): Array<Expression<any, any>> {
		return this._children;
	}

	public get scopeDeclaration(): ScopeVariableDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeVariableDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	public getScopeDeclaration(): ScopeVariableDeclaration {
		if (!this.scopeDeclaration) {
			throw new UndefinedDeclarationCtxError();
		}
		return this.scopeDeclaration;
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
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
		const assignValue: Expression<any, any> | undefined = this.children[1];

		// Throw an error if children are incomplete
		if (!storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineSemanticDataError();
		}

		// Semantic data of the variable declaration
		const identifier = this.tokenStream.getText(declaratorCtx.sourceInterval);
		const isDefined = Boolean(assignValue);
		const storageType = <KipperStorageType>this.tokenStream.getText(storageTypeCtx.sourceInterval);
		const valueType: UncheckedType = typeSpecifier.getSemanticData().typeIdentifier;

		this.semanticData = {
			isDefined: isDefined,
			identifier: identifier,
			storageType: storageType,
			valueType: valueType,
			valueTypeSpecifier: typeSpecifier,
			scope: this.scope,
			value: assignValue,
		};

		// If the storage type is 'const' ensure that the variable has a value set.
		this.programCtx.semanticCheck(this).validVariableDeclaration(this);

		// Add scope variable entry
		this.scopeDeclaration = this.scope.addVariable(this);
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Get the type that will be returned using the value type specifier
		const valueType = semanticData.valueTypeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			valueType: valueType,
		};

		// If the variable is defined, check whether the assignment is valid
		if (semanticData.value) {
			this.programCtx.typeCheck(this).validVariableDefinition(this.getScopeDeclaration(), semanticData.value);
		}
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<VariableDeclaration> =
		this.semanticAnalyser.variableDeclaration;
	targetCodeGenerator: TargetASTNodeCodeGenerator<VariableDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.variableDeclaration;
}
