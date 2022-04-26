/**
 * The primary statements that make up the Kipper language.
 *
 * Statements:
 * - Compound statement
 * - Selection statement
 * - Expression statement
 * - Iteration statement
 * - Jump statement (Only valid in functions or loops)
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { CompilableParseToken, eligibleParentToken } from "./parse-token";
import {
	CompoundStatementContext,
	ExpressionStatementContext,
	IterationStatementContext,
	JumpStatementContext,
	SelectionStatementContext,
} from "../parser";
import { KipperProgramContext } from "../program-ctx";
import { ScopeVariableDeclaration } from "../logic";
import { VariableDeclaration } from "./definitions";
import { Expression } from "./expressions";

/**
 * Every antlr4 statement ctx type
 */
export type antlrStatementCtxType =
	| CompoundStatementContext
	| SelectionStatementContext
	| ExpressionStatementContext
	| IterationStatementContext
	| JumpStatementContext;

/**
 * Fetches the handler for the specified {@link antlrStatementCtxType}.
 * @param antlrCtx The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 * @param scope The scope of the statement. This is necessary as the statements may need to access variables, and as
 * such need to have metadata available of their scope and environment.
 */
export function getStatementInstance(
	antlrCtx: antlrStatementCtxType,
	parent: eligibleParentToken,
	scope: KipperProgramContext | CompoundStatement,
): Statement {
	if (antlrCtx instanceof CompoundStatementContext) {
		return new CompoundStatement(antlrCtx, parent, scope);
	} else if (antlrCtx instanceof SelectionStatementContext) {
		return new SelectionStatement(antlrCtx, parent, scope);
	} else if (antlrCtx instanceof ExpressionStatementContext) {
		return new ExpressionStatement(antlrCtx, parent, scope);
	} else if (antlrCtx instanceof IterationStatementContext) {
		return new IterationStatement(antlrCtx, parent, scope);
	} else {
		// Can only be {@link JumpStatementContext}
		return new JumpStatement(antlrCtx, parent, scope);
	}
}

/**
 * Base Statement class, which represents a statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Statement extends CompilableParseToken {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: antlrStatementCtxType;

	protected constructor(
		antlrCtx: antlrStatementCtxType,
		parent: eligibleParentToken,
		// eslint-disable-next-line no-unused-vars
		private _scope: KipperProgramContext | CompoundStatement,
	) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrCtx(): antlrStatementCtxType {
		return this._antlrCtx;
	}

	/**
	 * The scope of this statement. This allows the statement to access variable and environmental metadata.
	 */
	public get scope(): KipperProgramContext | CompoundStatement {
		return this._scope;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	protected abstract translateCtxAndChildren(): Promise<Array<Array<string>>>;
}

/**
 * Compound statement class, which represents a compound statement containing other items in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 */
export class CompoundStatement extends Statement {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: CompoundStatementContext;

	protected readonly _children: Array<Statement>;

	private _localScope: Array<ScopeVariableDeclaration>;

	constructor(
		antlrCtx: CompoundStatementContext,
		parent: eligibleParentToken,
		scope: KipperProgramContext | CompoundStatement,
	) {
		super(antlrCtx, parent, scope);
		this._antlrCtx = antlrCtx;
		this._localScope = [];
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Statement> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrCtx(): CompoundStatementContext {
		return this._antlrCtx;
	}

	/**
	 * Returns the local variables that are exclusively accessible inside this compound statement.
	 */
	public get localScope(): Array<ScopeVariableDeclaration> {
		return this._localScope;
	}

	/**
	 * Adds a new local variable to this scope.
	 * @param token The {@link VariableDeclaration} token
	 */
	public addNewLocalVariable(token: VariableDeclaration) {
		this.programCtx.assert(token).variableIdentifierNotDefined(token.identifier, this);
		this._localScope = this._localScope.concat(new ScopeVariableDeclaration(token));
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	protected async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	protected async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		let childCode: Array<Array<string>> = [];
		for (let child of this.children) {
			childCode = [...childCode, ...(await child.compileCtx())];
		}
		return [["{"], ...childCode, ["}"]];
	}
}

/**
 * Selection statement class, which represents a selection statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class SelectionStatement extends Statement {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: SelectionStatementContext;

	protected readonly _children: Array<Statement>;

	constructor(
		antlrCtx: SelectionStatementContext,
		parent: eligibleParentToken,
		scope: KipperProgramContext | CompoundStatement,
	) {
		super(antlrCtx, parent, scope);
		this._antlrCtx = antlrCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Statement> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrCtx(): SelectionStatementContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	protected async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	protected async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [];
	}
}

/**
 * Expression statement class, which represents a statement made up of an expression in the Kipper language and is
 * compilable using {@link translateCtxAndChildren}.
 */
export class ExpressionStatement extends Statement {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ExpressionStatementContext;

	protected readonly _children: Array<Expression>;

	constructor(
		antlrCtx: ExpressionStatementContext,
		parent: eligibleParentToken,
		scope: KipperProgramContext | CompoundStatement,
	) {
		super(antlrCtx, parent, scope);
		this._antlrCtx = antlrCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrCtx(): ExpressionStatementContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	protected async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	protected async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		let childCode: Array<string> = [];
		for (let child of this.children) {
			childCode = [...childCode, ...(await child.compileCtx())];
		}
		return [[...childCode, ";"]];
	}
}

/**
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class IterationStatement extends Statement {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: IterationStatementContext;

	protected readonly _children: Array<Expression>;

	constructor(
		antlrCtx: IterationStatementContext,
		parent: eligibleParentToken,
		scope: KipperProgramContext | CompoundStatement,
	) {
		super(antlrCtx, parent, scope);
		this._antlrCtx = antlrCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrCtx(): IterationStatementContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	protected async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	protected async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [];
	}
}

/**
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class JumpStatement extends Statement {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: JumpStatementContext;

	protected readonly _children: Array<Expression>;

	constructor(
		antlrCtx: JumpStatementContext,
		parent: eligibleParentToken,
		scope: KipperProgramContext | CompoundStatement,
	) {
		super(antlrCtx, parent, scope);
		this._antlrCtx = antlrCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrCtx(): JumpStatementContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	protected async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	protected async translateCtxAndChildren(): Promise<Array<Array<string>>> {
		// TODO!
		return [];
	}
}
