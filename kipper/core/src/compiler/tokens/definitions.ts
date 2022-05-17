/**
 * Declaration statements in the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { CompilableParseToken, eligibleParentToken, SemanticData } from "./parse-token";
import {
	CompoundStatementContext,
	DeclarationContext,
	DeclaratorContext,
	FunctionDeclarationContext,
	InitDeclaratorContext,
	InitializerContext,
	ParameterDeclarationContext,
	ParameterTypeListContext,
	SingleItemTypeSpecifierContext,
	StorageTypeSpecifierContext,
} from "../parser";
import { KipperReturnType, KipperScope, KipperStorageType, KipperType, TranslatedCodeLine } from "../logic";
import { KipperProgramContext } from "../program-ctx";
import { UnableToDetermineMetadataError } from "../../errors";
import { determineScope } from "../../utils";
import { TargetTokenCodeGenerator } from "../code-generator";
import { TargetTokenSemanticAnalyser } from "../semantic-analyser";
import { Expression } from "./expressions";
import { ParseTree } from "antlr4ts/tree";

/**
 * Every antlr4 definition ctx type
 */
export type antlrDefinitionCtxType = FunctionDeclarationContext | ParameterDeclarationContext | DeclarationContext;

/**
 * Fetches the handler for the specified {@link antlrDefinitionCtxType}.
 * @param antlrCtx The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 */
export function getDefinitionInstance(antlrCtx: antlrDefinitionCtxType, parent: eligibleParentToken): Declaration<any> {
	if (antlrCtx instanceof FunctionDeclarationContext) {
		return new FunctionDeclaration(antlrCtx, parent);
	} else if (antlrCtx instanceof ParameterDeclarationContext) {
		return new ParameterDeclaration(antlrCtx, parent);
	} else {
		return new VariableDeclaration(antlrCtx, parent);
	}
}

/**
 * Semantics for {@link FunctionDeclaration}.
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
 * Any declarations in Kipper will be registered in a {@link KipperScope} or be associated with another parent
 * declaration, like {@link ParameterDeclaration parameter declarations} in
 * {@link FunctionDeclaration function declarations}.
 * @since 0.1.0
 */
export abstract class Declaration<Semantics extends DeclarationSemantics> extends CompilableParseToken<Semantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: antlrDefinitionCtxType;

	protected constructor(antlrCtx: antlrDefinitionCtxType, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;

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

	public abstract targetCodeGenerator: TargetTokenCodeGenerator<any, Array<TranslatedCodeLine>>;
}

/**
 * Semantics for {@link ParameterDeclaration}.
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
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ParameterDeclarationContext;

	constructor(antlrCtx: ParameterDeclarationContext, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ParameterDeclarationContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<ParameterDeclaration> =
		this.semanticAnalyser.parameterDeclaration;
	targetCodeGenerator: TargetTokenCodeGenerator<ParameterDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.parameterDeclaration;
}

/**
 * Semantics for {@link FunctionDeclaration}.
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
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FunctionDeclarationContext;

	constructor(antlrCtx: FunctionDeclarationContext, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FunctionDeclarationContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const children = this.ensureTokenChildrenExist();

		// Fetch context instances
		let declaratorCtx = <DeclaratorContext | undefined>children.find((val) => val instanceof DeclaratorContext);
		let paramListCtx = <ParameterTypeListContext | undefined>(
			children.find((val) => val instanceof ParameterTypeListContext)
		);
		let returnTypeCtx = <SingleItemTypeSpecifierContext | undefined>(
			children.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// Throw an error if children are incomplete
		if (!declaratorCtx || !returnTypeCtx) {
			throw new UnableToDetermineMetadataError();
		}

		const type: KipperType = <KipperType>this.tokenStream.getText(returnTypeCtx.sourceInterval);
		this.programCtx.assert(this).validReturnType(type);

		// Fetching the metadata from the antlr4 context
		this.semanticData = {
			isDefined: children.find((val) => val instanceof CompoundStatementContext) !== undefined,
			identifier: this.tokenStream.getText(declaratorCtx.sourceInterval),
			returnType: <KipperReturnType>type,
			args: paramListCtx ? [] : [], // TODO! Implement arg fetching
		};

		// Assert that the variable type exists
		this.programCtx.assert(this).typeExists(this.semanticData.returnType);

		// Add function definition to the global scope
		this.programCtx.addNewGlobalScopeEntry(this);
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<FunctionDeclaration> = this.semanticAnalyser.functionDeclaration;
	targetCodeGenerator: TargetTokenCodeGenerator<FunctionDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.functionDeclaration;
}

/**
 * Semantics for {@link VariableDeclaration}.
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
	scope: KipperScope;
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
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: DeclarationContext;

	protected override _children: Array<Expression<any>>;

	constructor(antlrCtx: DeclarationContext, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const children: Array<ParseTree> = this.ensureTokenChildrenExist();

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
		const typeSpecifier = <SingleItemTypeSpecifierContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// There will always be only one child, which is the expression assigned.
		// If this child is missing, then this declaration does not contain a definition.
		const assignValue: Expression<any> | undefined = this.children[0];

		// Throw an error if children are incomplete
		if (!storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineMetadataError();
		}

		this.semanticData = {
			isDefined: Boolean(assignValue),
			identifier: this.tokenStream.getText(declaratorCtx.sourceInterval),
			storageType: <KipperStorageType>this.tokenStream.getText(storageTypeCtx.sourceInterval),
			valueType: <KipperType>this.tokenStream.getText(typeSpecifier.sourceInterval),
			scope: determineScope(this), // Determine the scope of this variable.
			value: assignValue,
		};

		// Assert that the variable type exists
		this.programCtx.assert(this).typeExists(this.semanticData.valueType);

		// Load variable into global scope, if the assigned scope is of type {@link KipperProgramContext}
		if (this.semanticData.scope instanceof KipperProgramContext) {
			this.semanticData.scope.addNewGlobalScopeEntry(this);
		} else {
			this.semanticData.scope.addNewLocalVariable(this);
		}
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<VariableDeclaration> = this.semanticAnalyser.variableDeclaration;
	targetCodeGenerator: TargetTokenCodeGenerator<VariableDeclaration, Array<TranslatedCodeLine>> =
		this.codeGenerator.variableDeclaration;
}
