/**
 * Definition statements in the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { CompilableParseToken, eligibleParentToken } from "./parse-token";
import { DeclarationContext, FunctionDefinitionContext } from "../parser";
import { KipperStorageType } from "../logic";

/**
 * Every antlr4 definition ctx type
 */
export type antlrDefinitionCtxType = FunctionDefinitionContext | DeclarationContext;

/**
 * Fetches the handler for the specified {@link antlrDefinitionCtxType}.
 * @param antlrContext The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 */
export function getDefinitionInstance(antlrContext: antlrDefinitionCtxType, parent: eligibleParentToken): Definition {
	if (antlrContext instanceof FunctionDefinitionContext) {
		return new FunctionDefinition(antlrContext, parent);
	} else {
		return new Declaration(antlrContext, parent);
	}
}

/**
 * Base Definition class that represents a value or function definition in Kipper and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Definition extends CompilableParseToken {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: antlrDefinitionCtxType;

	protected readonly _storageType: KipperStorageType | undefined;

	protected constructor(antlrContext: antlrDefinitionCtxType, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;

		// TODO! Implement proper assignment
		this._storageType = undefined;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrDefinitionCtxType {
		return this._antlrContext;
	}
}

/**
 * Function definition class, which represents the definition of a function in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 */
export class FunctionDefinition extends Definition {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: FunctionDefinitionContext;

	constructor(antlrContext: FunctionDefinitionContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): FunctionDefinitionContext {
		return this._antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}

/**
 * Variable declaration class, which represents the declaration and or definition of a variable in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 */
export class Declaration extends Definition {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: DeclarationContext;

	constructor(antlrContext: DeclarationContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): DeclarationContext {
		return this._antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}
