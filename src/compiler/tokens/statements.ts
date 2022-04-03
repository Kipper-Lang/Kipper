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
 * @param antlrContext The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 */
export function getStatementInstance(antlrContext: antlrStatementCtxType, parent: eligibleParentToken): Statement {
	if (antlrContext instanceof CompoundStatementContext) {
		return new CompoundStatement(antlrContext, parent);
	} else if (antlrContext instanceof SelectionStatementContext) {
		return new SelectionStatement(antlrContext, parent);
	} else if (antlrContext instanceof ExpressionStatementContext) {
		return new ExpressionStatement(antlrContext, parent);
	} else if (antlrContext instanceof IterationStatementContext) {
		return new IterationStatement(antlrContext, parent);
	} else {
		// Can only be {@link JumpStatementContext}
		return new JumpStatement(antlrContext, parent);
	}
}

/**
 * Base Statement class, which represents a statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Statement extends CompilableParseToken {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: antlrStatementCtxType;

	protected constructor(antlrContext: antlrStatementCtxType, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): antlrStatementCtxType {
		return this._antlrContext;
	}
}

/**
 * Compound statement class, which represents a compound statement containing other items in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 */
export class CompoundStatement extends Statement {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: CompoundStatementContext;

	constructor(antlrContext: CompoundStatementContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): CompoundStatementContext {
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
 * Selection statement class, which represents a selection statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class SelectionStatement extends Statement {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: SelectionStatementContext;

	constructor(antlrContext: SelectionStatementContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): SelectionStatementContext {
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
 * Expression statement class, which represents a statement made up of an expression in the Kipper language and is
 * compilable using {@link translateCtxAndChildren}.
 */
export class ExpressionStatement extends Statement {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: ExpressionStatementContext;

	constructor(antlrContext: ExpressionStatementContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): ExpressionStatementContext {
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
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class IterationStatement extends Statement {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: IterationStatementContext;

	constructor(antlrContext: IterationStatementContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): IterationStatementContext {
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
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class JumpStatement extends Statement {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: JumpStatementContext;

	constructor(antlrContext: JumpStatementContext, parent: eligibleParentToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): JumpStatementContext {
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
