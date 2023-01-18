/**
 * AST Node Declaration/Definition classes of the Kipper language.
 * @since 0.1.0
 */
import type { ParseTree } from "antlr4ts/tree";
import type { CompilableNodeParent, SemanticData, TypeData } from "..";
import { CompilableASTNode } from "..";
import {
	CompoundStatementContext,
	DeclaratorContext,
	FunctionDeclarationContext,
	InitDeclaratorContext,
	KipperParser,
	ParameterDeclarationContext,
	StorageTypeSpecifierContext,
	VariableDeclarationContext,
} from "../../parser";
import {
	FunctionScope,
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	ScopeParameterDeclaration,
	ScopeVariableDeclaration,
	UncheckedType,
} from "../../analysis";
import type { Expression, IdentifierTypeSpecifierExpression } from "./expressions";
import type { KipperStorageType, TranslatedCodeLine } from "../../const";
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../../target-presets";
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
import { UnableToDetermineSemanticDataError, UndefinedDeclarationCtxError } from "../../../errors";
import { getParseTreeSource } from "../../../utils";
import { CompoundStatement, Statement } from "./statements";
import { ScopeNode } from "../scope-node";

/**
 * Union type of all usable definition/declaration sub-rule context classes implemented by the {@link KipperParser}
 * for a {@link Declaration}.
 */
export type ParserDeclarationContextType =
	| FunctionDeclarationContext
	| ParameterDeclarationContext
	| VariableDeclarationContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values that have a constructable {@link Declaration} AST node.
 *
 * Note that not all KipperParser rule contexts have a corresponding AST node type. For example, the
 * {@link KipperParser.declaration} rule context has no corresponding AST node type because it is a union of all
 * possible declaration types.
 * @since 0.10.0
 */
export type ParserDeclarationKind =
	| typeof KipperParser.RULE_functionDeclaration
	| typeof KipperParser.RULE_parameterDeclaration
	| typeof KipperParser.RULE_variableDeclaration;

/**
 * Declaration class that represents any declaration for a value or function declaration or definition in the Kipper
 * language.
 *
 * Any function, variable or parameter declaration in Kipper will be registered in a {@link Scope}, which will
 * define the visibility of the variable. The only exception is a {@link ParameterDeclaration}, which is bound to a
 * function and its local scope.
 * @since 0.1.0
 */
export abstract class Declaration<
	Semantics extends DeclarationSemantics = DeclarationSemantics,
	TypeData extends DeclarationTypeData = DeclarationTypeData,
> extends CompilableASTNode<Semantics, TypeData> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ParserDeclarationContextType;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected _scopeDeclaration: ScopeDeclaration | undefined;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public abstract readonly kind: ParserDeclarationKind;

	protected constructor(antlrRuleCtx: ParserDeclarationContextType, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ParserDeclarationContextType {
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

	public abstract targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any> | undefined;
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
	protected override _scopeDeclaration: ScopeParameterDeclaration | undefined;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_parameterDeclaration;

	constructor(antlrRuleCtx: ParameterDeclarationContext, parent: CompilableNodeParent) {
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

	public override getScopeDeclaration(): ScopeParameterDeclaration {
		if (!this.scopeDeclaration) {
			throw new UndefinedDeclarationCtxError();
		}
		return this.scopeDeclaration;
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
	public async addParamToFunctionScope(scopeToUse: FunctionScope): Promise<void> {
		this.scopeDeclaration = scopeToUse.addArgument(this);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

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

	readonly targetSemanticAnalysis = this.semanticAnalyser.parameterDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.parameterDeclaration;
}

/**
 * Function definition class, which represents the definition of a function in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 * @since 0.1.2
 */
export class FunctionDeclaration
	extends Declaration<FunctionDeclarationSemantics, FunctionDeclarationTypeSemantics>
	implements ScopeNode<FunctionScope>
{
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
	protected override _scopeDeclaration: ScopeFunctionDeclaration | undefined;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_functionDeclaration;

	private readonly _innerScope: FunctionScope;

	constructor(antlrRuleCtx: FunctionDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._innerScope = new FunctionScope(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FunctionDeclarationContext {
		return this._antlrRuleCtx;
	}

	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.10.0
	 */
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
	 * Gets the inner scope of this function, where also the {@link semanticData.params arguments} should be registered.
	 * @since 0.10.0
	 */
	public get innerScope(): FunctionScope {
		return this._innerScope;
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

		const identifier = this.tokenStream.getText(declaratorCtx.sourceInterval);
		const type: UncheckedType = retTypeSpecifier.getSemanticData().typeIdentifier;

		this.semanticData = {
			isDefined: parseTreeChildren.find((val) => val instanceof CompoundStatementContext) !== undefined,
			identifier: identifier,
			returnTypeSpecifier: retTypeSpecifier,
			returnType: type,
			params: params,
			functionBody: <CompoundStatement>body, // Will always syntactically be a compound statement
		};

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

		// Ensure that all code paths return a value
		this.programCtx.typeCheck(this).validReturnCodePathsInFunctionBody(this);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.functionDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.functionDeclaration;
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
	protected override readonly _antlrRuleCtx: VariableDeclarationContext;

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
	protected override _scopeDeclaration: ScopeVariableDeclaration | undefined;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_variableDeclaration;

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

	public override get children(): Array<Expression<any, any>> {
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
	public checkForWarnings = undefined; // TODO!

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

	readonly targetSemanticAnalysis = this.semanticAnalyser.variableDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.variableDeclaration;
}
