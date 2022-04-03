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
	SingleItemTypeSpecifierContext,
	StorageTypeSpecifierContext,
} from "../parser";
import { KipperStorageType, KipperType, kipperTypes } from "../logic";
import { CompoundStatement } from "./statements";
import { KipperProgramContext } from "../program-ctx";
import { UnableToDetermineMetadataError, UnknownTypeError } from "../../errors";
import { TokenStream } from "antlr4ts/TokenStream";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParseTree } from "antlr4ts/tree";

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
	public get identifier(): string {
		return this._identifier;
	}
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

	protected readonly _returnType: KipperStorageType | undefined;

	protected readonly _args: Array<ParameterDeclaration>;

	constructor(antlrContext: FunctionDefinitionContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;

		// TODO! Fetch valid identifier
		this._identifier = "";

		// TODO! Properly implement registration of argument types
		this._args = [];

		// TODO! Implement returnType implementation
		this._returnType = undefined;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): FunctionDefinitionContext {
		return this._antlrContext;
	}

	/**
	 * The return type of this function.
	 */
	public get returnType(): KipperStorageType | undefined {
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
		const metadata = VariableDeclaration.getMetadata(antlrContext, this.programCtx.tokenStream);
		this._isDefined = metadata.isDefined;
		this._identifier = metadata.identifier;
		this._storageType = metadata.storageType;
		this._valueType = metadata.valueType;
		this._scope = scope;

		// If the type does not exist in Kipper -> raise error
		if (kipperTypes.find((val) => val === this._valueType) === undefined) throw new UnknownTypeError(this._valueType);

		// Load variable into global scope, if the assigned scope is of type {@link KipperProgramContext}
		if (this.scope instanceof KipperProgramContext) {
			this.scope.addNewGlobalScopeEntry(this);
		} else {
			this.scope.addNewLocalVariable(this);
		}
	}

	private static getMetadata(
		antlrContext: DeclarationContext,
		src: TokenStream,
	): { isDefined: boolean; identifier: string; storageType: KipperStorageType; valueType: KipperType } {
		let storageTypeCtx = <StorageTypeSpecifierContext | undefined>(
			antlrContext.children?.find((val) => val instanceof StorageTypeSpecifierContext)
		);
		let initDeclaratorCtx = <InitDeclaratorContext | undefined>(
			antlrContext.children?.find((val) => val instanceof InitDeclaratorContext)
		);
		let declaratorCtx = <DeclaratorContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof DeclaratorContext)
		);
		let typeSpecifier = <SingleItemTypeSpecifierContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// Throw an error if no children or not enough children are present - This should never happen
		if (!antlrContext.children || !storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineMetadataError(
				`Failed to determine metadata for 'VariableDeclaration' (${antlrContext.sourceInterval}). Missing data.`,
			);
		}

		return {
			isDefined: initDeclaratorCtx?.children?.find((val) => val instanceof InitializerContext) !== undefined,
			identifier: src.getText(declaratorCtx.sourceInterval),
			storageType: <KipperStorageType>src.getText(storageTypeCtx.sourceInterval),
			valueType: <KipperType>src.getText(typeSpecifier.sourceInterval),
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): DeclarationContext {
		return this._antlrContext;
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
