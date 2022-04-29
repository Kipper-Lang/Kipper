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
import { KipperStorageType, KipperType } from "../logic";
import { CompoundStatement } from "./statements";
import { KipperProgramContext } from "../program-ctx";
import { UnableToDetermineMetadataError } from "../../errors";
import { Utils } from "../../utils";

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
 * Base Declaration class that represents a value or function declaration or definition in Kipper and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Declaration<Semantics extends { identifier: string }> extends CompilableParseToken<Semantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: antlrDefinitionCtxType;

	protected constructor(antlrCtx: antlrDefinitionCtxType, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): antlrDefinitionCtxType {
		return this._antlrCtx;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public abstract translateCtxAndChildren(): Promise<Array<Array<string>>>;
}

/**
 * Declaration of a parameter inside a {@link FunctionDeclaration}.
 * @since 0.1.2
 */
export class ParameterDeclaration extends Declaration<{ identifier: string; type: KipperType }> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ParameterDeclarationContext;

	constructor(antlrCtx: ParameterDeclarationContext, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ParameterDeclarationContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		this.semanticData = {
			identifier: "", // TODO! Fetch valid identifier
			type: "void",
		};
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [[]];
	}
}

/**
 * Semantics for {@link FunctionDeclaration}.
 * @since 0.3.0
 */
export interface FunctionDeclarationSemantics {
	identifier: string;
	isDefined: boolean;
	returnType: KipperType;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: FunctionDeclarationContext;

	constructor(antlrCtx: FunctionDeclarationContext, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): FunctionDeclarationContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// Fetch context instances
		let declaratorCtx = <DeclaratorContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof DeclaratorContext)
		);
		let paramListCtx = <ParameterTypeListContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof ParameterTypeListContext)
		);
		let returnTypeCtx = <SingleItemTypeSpecifierContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// Throw an error if no children or not enough children are present - This should never happen
		if (!this.antlrCtx.children || !declaratorCtx || !returnTypeCtx) {
			throw new UnableToDetermineMetadataError();
		}

		// Fetching the metadata from the antlr4 context
		this.semanticData = {
			isDefined: this.antlrCtx.children?.find((val) => val instanceof CompoundStatementContext) !== undefined,
			identifier: this.tokenStream.getText(declaratorCtx.sourceInterval),
			returnType: <KipperType>this.tokenStream.getText(returnTypeCtx.sourceInterval),
			args: paramListCtx ? [] : [], // TODO! Implement arg fetching
		};

		// Assert that the variable type exists
		this.programCtx.assert(this).assertTypeExists(this.semanticData.returnType);

		// Add function definition to the global scope
		this.programCtx.addNewGlobalScopeEntry(this);
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [[]];
	}
}

/**
 * Semantics for {@link VariableDeclaration}.
 * @since 0.3.0
 */
export interface VariableDeclarationSemantics extends SemanticData {
	identifier: string;
	storageType: KipperStorageType;
	valueType: KipperType;
	isDefined: boolean;
	scope: KipperProgramContext | CompoundStatement;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: DeclarationContext;

	constructor(antlrCtx: DeclarationContext, parent: eligibleParentToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): DeclarationContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// Determine the ctx instances
		let storageTypeCtx = <StorageTypeSpecifierContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof StorageTypeSpecifierContext)
		);
		let initDeclaratorCtx = <InitDeclaratorContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof InitDeclaratorContext)
		);
		let declaratorCtx = <DeclaratorContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof DeclaratorContext)
		);
		let typeSpecifier = <SingleItemTypeSpecifierContext | undefined>(
			initDeclaratorCtx?.children?.find((val) => val instanceof SingleItemTypeSpecifierContext)
		);

		// Throw an error if no children or not enough children are present - This should never happen
		if (!this.antlrCtx.children || !storageTypeCtx || !initDeclaratorCtx || !declaratorCtx || !typeSpecifier) {
			throw new UnableToDetermineMetadataError();
		}

		this.semanticData = {
			isDefined: initDeclaratorCtx?.children?.find((val) => val instanceof InitializerContext) !== undefined,
			identifier: this.tokenStream.getText(declaratorCtx.sourceInterval),
			storageType: <KipperStorageType>this.tokenStream.getText(storageTypeCtx.sourceInterval),
			valueType: <KipperType>this.tokenStream.getText(typeSpecifier.sourceInterval),
			scope: Utils.determineScope(this),
		};

		// Assert that the variable type exists
		this.programCtx.assert(this).assertTypeExists(this.semanticData.valueType);

		// Load variable into global scope, if the assigned scope is of type {@link KipperProgramContext}
		if (this.semanticData.scope instanceof KipperProgramContext) {
			this.semanticData.scope.addNewGlobalScopeEntry(this);
		} else {
			this.semanticData.scope.addNewLocalVariable(this);
		}
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [[]];
	}
}
