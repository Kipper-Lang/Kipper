/**
 * Base Parse token classes for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */

import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { KipperParser } from "../parser";
import { TokenStream } from "antlr4ts/TokenStream";
import type { KipperProgramContext } from "../program-ctx";
import { UnableToDetermineMetadataError } from "../../errors";
import { getTokenSource } from "../../utils";

export type eligibleParentToken = CompilableParseToken<any> | RootFileParseToken;
export type eligibleChildToken = CompilableParseToken<any>;

/**
 * Defines the blueprint for {@link CompilableParseToken.semanticData semanticData} inside a {@link CompilableParseToken}.
 * @since 0.3.0
 */
export type SemanticData = Record<string, any>;

/**
 * Kipper Parse token, which is the base class all tokens will extend from.
 * @since 0.1.0
 */
export abstract class CompilableParseToken<Semantics extends SemanticData> {
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
	protected readonly _parent: eligibleParentToken;

	protected _semanticData: Semantics | undefined;

	constructor(antlrCtx: ParserRuleContext, parent: eligibleParentToken) {
		this._antlrCtx = antlrCtx;
		this._parent = parent;
		this._children = [];

		// Adding to the parent this instance
		parent.addNewChild(this);
	}

	/**
	 * Returns the semantic data of this token.
	 */
	public get semanticData(): Semantics | undefined {
		return this._semanticData;
	}

	/**
	 * Sets the semantic data of this item.
	 * @param value The semantic data that should be written onto this item.
	 * @protected
	 */
	protected set semanticData(value: Semantics | undefined) {
		this._semanticData = value;
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
		return getTokenSource(this.antlrCtx);
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
	 * Adds new child ctx item to this expression. The child item should be in the order that they appeared in the
	 * {@link this.antlrCtx} parse tree.
	 *
	 * This will also automatically set the parent of {@link newChild} to this instance.
	 * @example
	 *  let newExpression = new Expression(ctx, fileCtx);
	 *  oldExpression.addNewChild(newExpression);
	 */
	public addNewChild(newChild: eligibleChildToken) {
		this._children.push(newChild);
	}

	/**
	 * Ensures the semantic data of this item exists. This is always checked whenever a compilation is started.
	 * @protected
	 */
	protected ensureSemanticDataExists(): Semantics {
		if (this.semanticData === undefined) {
			throw new UnableToDetermineMetadataError();
		}
		return this.semanticData;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public abstract semanticAnalysis(): Promise<void>;

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public abstract translateCtxAndChildren(): Promise<Array<any>>;
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
	protected readonly _children: Array<eligibleChildToken>;

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
		// Semantically analyse the code and properly register the logical content
		const runAnalysis = async (ctx: eligibleChildToken) => {
			// Start with the children, and then work upwards as the structures get more complex
			for (let child of ctx.children) {
				await runAnalysis(child);
			}

			// Finally, check if the entire token is semantically valid
			await ctx.semanticAnalysis();
		};

		// Run for every child the analysis
		for (let child of this.children) {
			await runAnalysis(child);
		}

		// Compile the code
		let genCode: Array<Array<string>> = [];
		for (let child of this.children) {
			genCode = genCode.concat(await child.translateCtxAndChildren());
		}
		return genCode;
	}
}
