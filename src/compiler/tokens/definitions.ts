/**
 * Declaration statements in the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { CompilableParseToken, eligibleParentToken } from "./parse-token";
import {
	DeclarationContext,
	DeclaratorContext,
	FunctionDefinitionContext,
	InitDeclaratorContext,
	InitializerContext,
	ParameterDeclarationContext,
	ParameterTypeListContext,
	SingleItemTypeSpecifierContext,
	StorageTypeSpecifierContext,
} from "../parser";
import { KipperStorageType, KipperType } from "../logic";
import { CompoundStatement } from "./statements";
import { KipperProgramContext } from "../program-ctx";
import { UnableToDetermineMetadataError } from "../../errors";

/**
 * Every antlr4 definition ctx type
 */
export type antlrDefinitionCtxType = FunctionDefinitionContext | ParameterDeclarationContext | DeclarationContext;

/**
 * Fetches the handler for the specified {@link antlrDefinitionCtxType}.
 * @param antlrContext The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 * @param scope The scope of the definition. (This is only used for {@link VariableDeclaration variables}.
 */
export function getDefinitionInstance(
	antlrContext: antlrDefinitionCtxType,
	parent: eligibleParentToken,
	scope: KipperProgramContext | CompoundStatement,
): Declaration {
	if (antlrContext instanceof FunctionDefinitionContext) {
		return new FunctionDefinition(antlrContext, parent);
	} else if (antlrContext instanceof ParameterDeclarationContext) {
		return new ParameterDeclaration(antlrContext, parent);
	} else {
		return new VariableDeclaration(antlrContext, parent, scope);
	}
}

/**
 * Base Declaration class that represents a value or function declaration or definition in Kipper and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Declaration extends CompilableParseToken {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: antlrDefinitionCtxType;

	protected abstract readonly _identifier: string;

	protected constructor(antlrContext: antlrDefinitionCtxType, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): antlrDefinitionCtxType {
		return this._antlrContext;
	}

	/**
	 * The identifier of the declaration.
	 */
	public abstract get identifier(): string;
}

/**
 * Declaration of a parameter inside a {@link FunctionDefinition}.
 * @since 0.1.2
 */
export class ParameterDeclaration extends Declaration {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: ParameterDeclarationContext;

	protected override readonly _identifier: string;

	constructor(antlrContext: ParameterDeclarationContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;

		// TODO! Fetch valid identifier
		this._identifier = "";
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): ParameterDeclarationContext {
		return this._antlrContext;
	}

	/**
	 * The identifier of the parameter.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
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
export class FunctionDefinition extends Declaration {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: FunctionDefinitionContext;

	protected override readonly _identifier: string;

	protected readonly _returnType: KipperType | undefined;

	protected readonly _args: Array<ParameterDeclaration>;

	constructor(antlrContext: FunctionDefinitionContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;

		// Fetching the metadata from the antlr4 context
		const metadata = this.getMetadata();
		this._identifier = metadata.identifier;
		this._returnType = metadata.returnType;
		this._args = metadata.args;

		// Add function definition to the global scope
		this.programCtx.addNewGlobalScopeEntry(this);
	}

	/**
	 * Fetch the metadata for the function definition.
	 * @private
	 */
	private getMetadata(): { identifier: string; args: Array<ParameterDeclaration>; returnType: KipperType } {
		// Fetch context instances
		let declaratorCtx = <DeclaratorContext | undefined>(
			this.antlrContext.children?.find((val) => val instanceof DeclaratorContext)
		);
		let paramListCtx = <ParameterTypeListContext | undefined>(
			this.antlrContext.children?.find((val) => val instanceof ParameterTypeListContext)
		);
		let returnTypeCtx = <SingleItemTypeSpecifierContext | undefined>(
			this.antlrContext.children?.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// Throw an error if no children or not enough children are present - This should never happen
		if (!this.antlrContext.children || !declaratorCtx || !returnTypeCtx) {
			throw new UnableToDetermineMetadataError();
		}

		return {
			identifier: this.tokenStream.getText(declaratorCtx.sourceInterval),
			returnType: this.programCtx.verifyType(this.tokenStream.getText(returnTypeCtx.sourceInterval)),
			args: paramListCtx ? [] : [] // TODO! Implement arg fetching
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): FunctionDefinitionContext {
		return this._antlrContext;
	}

	/**
	 * The identifier of the function definition.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * The return type of this function.
	 */
	public get returnType(): KipperType | undefined {
		return this._returnType;
	}

	/**
	 * The {@link ParameterDeclaration parameter/arguments} of this function definition.
	 */
	public get args(): Array<ParameterDeclaration> | undefined {
		return this._args;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}

/**
 * Variable declaration class, which represents the declaration and or definition of a variable in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 *
 * In case that {@link scope} is of type {@link KipperProgramContext}, then the scope is defined as global
 * (accessible for the entire program).
 */
export class VariableDeclaration extends Declaration {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: DeclarationContext;

	protected override readonly _identifier: string;

	protected readonly _storageType: KipperStorageType;

	protected readonly _valueType: KipperType;

	protected _isDefined: boolean;

	protected _scope: KipperProgramContext | CompoundStatement;

	constructor(
		antlrContext: DeclarationContext,
		parent: eligibleParentToken,
		scope: KipperProgramContext | CompoundStatement,
	) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;

		// Fetching the metadata from the antlr4 context
		const metadata = this.getMetadata();
		this._isDefined = metadata.isDefined;
		this._identifier = metadata.identifier;
		this._storageType = metadata.storageType;
		this._valueType = metadata.valueType;
		this._scope = scope;

		// Load variable into global scope, if the assigned scope is of type {@link KipperProgramContext}
		if (this.scope instanceof KipperProgramContext) {
			this.scope.addNewGlobalScopeEntry(this);
		} else {
			this.scope.addNewLocalVariable(this);
		}
	}

	private getMetadata(): {
		isDefined: boolean;
		identifier: string;
		storageType: KipperStorageType;
		valueType: KipperType;
	} {
		let storageTypeCtx = <StorageTypeSpecifierContext | undefined>(
			this.antlrContext.children?.find((val) => val instanceof StorageTypeSpecifierContext)
		);
		let initDeclaratorCtx = <InitDeclaratorContext | undefined>(
			this.antlrContext.children?.find((val) => val instanceof InitDeclaratorContext)
		);
		let declaratorCtx = <DeclaratorContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof DeclaratorContext)
		);
		let typeSpecifier = <SingleItemTypeSpecifierContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// Throw an error if no children or not enough children are present - This should never happen
		if (!this.antlrContext.children || !storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineMetadataError();
		}

		return {
			isDefined: initDeclaratorCtx?.children?.find((val) => val instanceof InitializerContext) !== undefined,
			identifier: this.tokenStream.getText(declaratorCtx.sourceInterval),
			storageType: <KipperStorageType>this.tokenStream.getText(storageTypeCtx.sourceInterval),
			valueType: this.programCtx.verifyType(this.tokenStream.getText(typeSpecifier.sourceInterval)),
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): DeclarationContext {
		return this._antlrContext;
	}

	/**
	 * The identifier of the variable declaration.
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * Returns the storage type of this variable.
	 */
	public get storageType(): KipperStorageType {
		return this._storageType;
	}

	/**
	 * Returns the scope where this variable is registered in.
	 */
	public get scope(): KipperProgramContext | CompoundStatement {
		return this._scope;
	}

	/**
	 * Returns the value type of this variable.
	 */
	public get valueType(): KipperType {
		return this._valueType;
	}

	/**
	 * Returns whether the variable declaration is defined and has a value set.
	 */
	public get isDefined(): boolean {
		return this._isDefined;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}
