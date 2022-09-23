/**
 * Declaration and definitions in the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import type { compilableNodeParent, SemanticData, TypeData } from "../../parser";
import {
	CompilableASTNode,
	CompoundStatementContext,
	DeclarationContext,
	DeclaratorContext,
	FunctionDeclarationContext,
	InitDeclaratorContext,
	ParameterDeclarationContext,
``	StorageTypeSpecifierContext,
} from "../../parser";
import type { ParseTree } from "antlr4ts/tree";
import type { ScopeVariableDeclaration } from "../../scope-declaration";
import type { Expression, IdentifierTypeSpecifierExpression } from "./expressions";
import type { KipperStorageType, KipperType, TranslatedCodeLine } from "../const";
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../../target-presets";
import { UnableToDetermineSemanticDataError } from "../../../errors";
import {
	DeclarationSemantics,
	FunctionDeclarationSemantics,
	ParameterDeclarationSemantics,
	VariableDeclarationSemantics,
} from "../semantic-data";
import {
	DeclarationTypeData,
	FunctionDeclarationTypeSemantics,
	ParameterDeclarationTypeSemantics,
	VariableDeclarationTypeSemantics,
} from "../type-data";
import { getParseTreeSource } from "../../../utils";
import { CompoundStatement, Statement } from "./statements";
import { FunctionScope } from "../../function-scope";

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
		} else {
			return new VariableDeclaration(antlrRuleCtx, parent);
		}
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

	constructor(antlrRuleCtx: ParameterDeclarationContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
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
		const parseTreeChildren = this.getAntlrRuleChildren();

		this.semanticData = {
			identifier: getParseTreeSource(this.tokenStream, parseTreeChildren[0]),
			valueType: this.children[0].sourceCode,
			func: <FunctionDeclaration>this.parent,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.programCtx.typeCheck(this).typeExists(semanticData.valueType);

		this.typeSemantics = {
			valueType: <KipperType>semanticData.valueType,
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

	constructor(antlrRuleCtx: FunctionDeclarationContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
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
				// Once the return type has been reached, stop, as the last two items will be the return type and function body
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
		const type: string = retTypeSpecifier.getSemanticData().typeIdentifier;

		this.semanticData = {
			isDefined: parseTreeChildren.find((val) => val instanceof CompoundStatementContext) !== undefined,
			identifier: identifier,
			returnType: type,
			params: params,
			functionBody: <CompoundStatement>body, // Will always syntactically be a compound statement
			innerScope: <FunctionScope>(<CompoundStatement>body).localScope, // Should always be a 'FunctionScope'
		};

		// Add function definition to the current scope
		await this.scope.addFunction(this);

		// Add the function parameters to the function scope
		for (let param of params) {
			this.semanticData.innerScope.addArgument(param);
		}
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure the return type is valid
		this.programCtx.typeCheck(this).typeExists(semanticData.returnType);

		// Set the return type data
		this.typeSemantics = {
			returnType: <KipperType>semanticData.returnType,
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

	protected override _children: Array<Expression<any, any>>;

	constructor(antlrRuleCtx: DeclarationContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
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
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): DeclarationContext {
		return this._antlrRuleCtx;
	}

	public get children(): Array<Expression<any, any>> {
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
		const assignValue: Expression<any, any> | undefined = this.children[1];

		// Throw an error if children are incomplete
		if (!storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineSemanticDataError();
		}

		const identifier = this.tokenStream.getText(declaratorCtx.sourceInterval);
		const isDefined = Boolean(assignValue);
		const storageType = <KipperStorageType>this.tokenStream.getText(storageTypeCtx.sourceInterval);
		const valueType: string = typeSpecifier.getSemanticData().typeIdentifier;

		this.semanticData = {
			isDefined: isDefined,
			identifier: identifier,
			storageType: storageType,
			valueType: valueType,
			scope: this.scope,
			value: assignValue,
		};

		// If the storage type is 'const' ensure that the variable has a value set.
		this.programCtx.semanticCheck(this).validVariableDeclaration(this);

		// Add scope variable entry
		await this.scope.addVariable(this);
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Check whether the type of the variable even exists
		this.programCtx.typeCheck(this).typeExists(semanticData.valueType);

		// Set the type of this variable declaration
		this.typeSemantics = {
			valueType: <KipperType>semanticData.valueType,
		};

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
