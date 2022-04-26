/**
 * Base Parse token classes for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */

import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { KipperParser } from "../parser";
import { TokenStream } from "antlr4ts/TokenStream";
import { Utils } from "../../utils";
import type { KipperProgramContext } from "../program-ctx";

export type eligibleParentToken = CompilableParseToken | RootFileParseToken;
export type eligibleChildToken = CompilableParseToken;

/**
 * Kipper Parse token, which is the base class all tokens will extend from.
 * @since 0.1.0
 */
export abstract class CompilableParseToken {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected readonly _antlrCtx: ParserRuleContext;

	/**
	 * The private '_children' that actually stores the variable data,
	 * which is returned inside the {@link this.children}.
	 * @private
	 */
	protected readonly _children: Array<eligibleChildToken>;

	/**
	 * The private '_parent' that actually stores the variable data,
	 * which is returned inside the {@link this.parent}.
	 * @private
	 */
	protected _parent: eligibleParentToken;

	constructor(antlrCtx: ParserRuleContext, parent: eligibleParentToken) {
		this._antlrCtx = antlrCtx;
		this._parent = parent;
		this._children = [];

		// Adding to the parent this instance
		parent.addNewChild(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this parse token.
	 */
	public get antlrCtx(): ParserRuleContext {
		return this._antlrCtx;
	}

	/**
	 * Returns the {@link CompilableParseToken parent} that has this item as a child. If {@link parent} is none, then
	 * this item is a primary {@link CompilableParseToken}.
	 *
	 * In this case this is a top-level token, then the return type will be {@link KipperProgramContext}, which contains
	 * the metadata for the entire program.
	 */
	public get parent(): eligibleParentToken {
		return this._parent;
	}

	/**
	 * The Kipper source code that was used to generate this {@link CompilableParseToken}.
	 */
	public get sourceCode(): string {
		return Utils.getTokenSource(this.antlrCtx);
	}

	/**
	 * The parser that parsed the {@link antlrCtx}
	 */
	public get parser(): KipperParser {
		return this.programCtx.parser;
	}

	/**
	 * The file context instance containing the metadata for the listener and this parse token.
	 */
	public get programCtx(): KipperProgramContext {
		return this.parent.programCtx;
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<eligibleChildToken> {
		return this._children;
	}

	/**
	 * Returns the token stream source for this token.
	 * @since 0.2.0
	 */
	public get tokenStream(): TokenStream {
		return this.programCtx.tokenStream;
	}

	/**
	 * Adds new child to this class. Must be in proper order, so that it can be properly compiled.
	 * This will also automatically set the parent of the class to this instance.
	 * @example
	 *  let newExpression = new Expression(ctx, this.fileCtx);
	 *  oldExpression.addNewChild(newExpression);
	 */
	public addNewChild(newChild: eligibleChildToken) {
		this._children.push(newChild);
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	protected abstract semanticAnalysis(): Promise<void>;

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	protected abstract translateCtxAndChildren(): Promise<Array<any>>;

	/**
	 * {@link this.semanticAnalysis Analyses} the context instance and {@link this.compileCtx translates}
	 * the code into TypeScript.
	 * @since 0.2.0
	 */
	public async compileCtx(): Promise<Array<any>> {
		await this.semanticAnalysis();
		return await this.translateCtxAndChildren();
	}
}

export class RootFileParseToken {
	/**
	 * The private '_parent' that actually stores the variable data,
	 * which is returned inside the {@link this.parent}.
	 * @private
	 */
	protected _programCtx: KipperProgramContext;

	/**
	 * The private '_children' that actually stores the variable data,
	 * which is returned inside the {@link this.children}.
	 * @private
	 */
	protected readonly _children: Array<CompilableParseToken>;

	constructor(programCtx: KipperProgramContext) {
		this._programCtx = programCtx;
		this._children = [];
	}

	/**
	 * The program context of this root token / "virtual" file
	 */
	public get programCtx(): KipperProgramContext {
		return this._programCtx;
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<eligibleChildToken> {
		return this._children;
	}

	/**
	 * Adds new child to this class. Must be in proper order, so that it can be properly compiled.
	 * This will also automatically set the parent of the class to this instance.
	 * @example
	 *  let newExpression = new Expression(ctx, this.fileCtx);
	 *  oldExpression.addNewChild(newExpression);
	 */
	public addNewChild(newChild: eligibleChildToken): void {
		this._children.push(newChild);
	}

	/**
	 * Analysis the code and generates the typescript code for this item, and its children. This will log all warnings
	 * using {@link programCtx.logger} and throw errors if encountered.
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async compileCtx(): Promise<Array<Array<string>>> {
		let genCode: Array<Array<string>> = [];
		for (let child of this.children) {
			genCode = genCode.concat(await child.compileCtx());
		}
		return genCode;
	}
}
