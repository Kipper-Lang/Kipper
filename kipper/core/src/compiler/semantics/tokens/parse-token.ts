/**
 * Base Parse token classes for the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */

import { UnableToDetermineMetadataError, UndefinedSemanticsError } from "../../../errors";
import { determineScope, getParseRuleSource } from "../../../utils";
import type { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import type { KipperParser } from "../../parser";
import type { TokenStream } from "antlr4ts/TokenStream";
import type { KipperProgramContext } from "../../program-ctx";
import type { KipperTargetSemanticAnalyser, TargetTokenSemanticAnalyser } from "../target-semantic-analyser";
import type { KipperTargetCodeGenerator, TargetTokenCodeGenerator } from "../../translation";
import type { KipperCompileTarget } from "../../compile-target";
import type { Declaration } from "./definitions";
import type { Statement } from "./statements";
import type { KipperScope, TranslatedCodeLine } from "../const";
import type { ParseTree } from "antlr4ts/tree";

export type eligibleParentToken = CompilableParseToken<any> | RootFileParseToken;
export type eligibleChildToken = CompilableParseToken<any>;

/**
 * Defines the blueprint for {@link CompilableParseToken.semanticData semanticData} inside a {@link CompilableParseToken}.
 * @since 0.3.0
 */
export type SemanticData = Record<string, any>;

/**
 * Kipper Parse token, which is the core class all tokens will extend from.
 * @since 0.1.0
 */
export abstract class CompilableParseToken<Semantics extends SemanticData> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected readonly _antlrRuleCtx: ParserRuleContext;

	/**
	 * The private field '_children' that actually stores the variable data,
	 * which is returned inside the {@link this.children}.
	 * @private
	 */
	protected readonly _children: Array<eligibleChildToken>;

	/**
	 * The private field '_parent' that actually stores the variable data,
	 * which is returned inside the {@link this.parent}.
	 * @private
	 */
	protected readonly _parent: eligibleParentToken;

	protected _scope: KipperScope | undefined;

	protected _semanticData: Semantics | undefined;

	protected constructor(antlrCtx: ParserRuleContext, parent: eligibleParentToken) {
		this._antlrRuleCtx = antlrCtx;
		this._parent = parent;
		this._children = [];
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
	 * @since 0.6.0
	 */
	public get antlrRuleCtx(): ParserRuleContext {
		return this._antlrRuleCtx;
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
	 *
	 * Any left-over whitespaces will be removed using trim().
	 */
	public get sourceCode(): string {
		return getParseRuleSource(this.antlrRuleCtx).trim();
	}

	/**
	 * The parser that parsed the {@link antlrRuleCtx}
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
	 * The compilation translation for this specific token.
	 * @since 0.5.0
	 */
	public get target(): KipperCompileTarget {
		return this.programCtx.target;
	}

	/**
	 * The code generator, which will generate the code for this specific token
	 * into the {@link this.translation translation language}.
	 * @since 0.5.0
	 */
	public get codeGenerator(): KipperTargetCodeGenerator {
		return this.target.codeGenerator;
	}

	/**
	 * The {@link scope} of this token. Dynamically fetched using {@link determineScope}.
	 * @since 0.6.0
	 */
	public get scope(): KipperScope {
		// Uses caching to speed up accessing this field multiple times
		this._scope = this._scope ?? determineScope(this);
		return <KipperScope>this._scope;
	}

	/**
	 * The translation-specific semantic analyser, which will perform semantic analysis
	 * specific for the {@link this.translation translation language}.
	 * @since 0.5.0
	 */
	public get semanticAnalyser(): KipperTargetSemanticAnalyser {
		return this.target.semanticAnalyser;
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
	 * Ensures that the token children of this item exist.
	 * @since 0.6.0
	 */
	public ensureTokenChildrenExist(): ParseTree[] {
		if (this.antlrRuleCtx.children === undefined) {
			throw new UnableToDetermineMetadataError();
		}
		return this.antlrRuleCtx.children;
	}

	/**
	 * Ensures the semantic data of this item exists. This is always checked whenever a compilation is started.
	 */
	public ensureSemanticDataExists(): Semantics {
		if (this.semanticData === undefined) {
			throw new UndefinedSemanticsError();
		}
		return this.semanticData;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * If the return is of type {@link Array Array<string>} then each item
	 * is a single token of a line, where each item should be seperated by a
	 * whitespace.
	 */
	public async translateCtxAndChildren(): Promise<Array<string | Array<string>>> {
		return await this.targetCodeGenerator(this);
	}

	/**
	 * Semantically analyses the code inside this token. This function will
	 * recursively call itself on the {@link this.children} instances and
	 * analyse the simplest tokens first, working up as the tokens get more
	 * complex. This way the parent tokens can access the semantics of the
	 * children and properly process itself.
	 */
	public async semanticAnalysis(): Promise<void> {
		// Start with the children, and then work upwards as the structures get more complex
		for (let child of this.children) {
			await child.semanticAnalysis();
		}

		// Finally, check if the entire token is semantically valid
		await this.primarySemanticAnalysis();
		await this.semanticTypeChecking();
		await this.targetSemanticAnalysis(this);
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.5.0
	 * @abstract
	 */
	public abstract primarySemanticAnalysis(): Promise<void>;

	/**
	 * Performs type checking for this token and asserts that the types are valid.
	 * @since 0.7.0
	 * @throws TypeError When a type mismatch or invalid usage is encountered.
	 */
	public abstract semanticTypeChecking(): Promise<void>;

	/**
	 * Semantic analysis for the code inside the parse token that is specific
	 * for a {@link KipperCompileTarget}.
	 *
	 * This only should perform logical analysis and not interpret the code/modify
	 * the {@link semanticData} field.
	 * @since 0.5.0
	 * @abstract
	 */
	protected abstract targetSemanticAnalysis: TargetTokenSemanticAnalyser<any>;

	/**
	 * Code generator for the code inside the parse token that is specific
	 * for a {@link KipperCompileTarget}.
	 * @since 0.5.0
	 * @abstract
	 */
	protected abstract targetCodeGenerator: TargetTokenCodeGenerator<any, TranslatedCodeLine | Array<TranslatedCodeLine>>;
}

/**
 * Represents a token that contains all tokens of a file. This class can be seen as a direct file representation.
 */
export class RootFileParseToken {
	/**
	 * The private field '_parent' that actually stores the variable data,
	 * which is returned inside the {@link this.parent}.
	 * @private
	 */
	protected _programCtx: KipperProgramContext;

	/**
	 * The private field '_children' that actually stores the variable data,
	 * which is returned inside the {@link this.children}.
	 * @private
	 */
	protected readonly _children: Array<Declaration<any> | Statement<any>>;

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
	public get children(): Array<Declaration<any> | Statement<any>> {
		return this._children;
	}

	/**
	 * Adds new child to this class. Must be in proper order, so that it can be properly compiled.
	 * This will also automatically set the parent of the class to this instance.
	 * @example
	 *  let newExpression = new Expression(ctx, this.fileCtx);
	 *  oldExpression.addNewChild(newExpression);
	 */
	public addNewChild(newChild: Declaration<any> | Statement<any>): void {
		this._children.push(newChild);
	}

	/**
	 * Semantically analyses the children tokens of this
	 * {@link RootFileParseToken instance} and performs additional
	 * {@link CompilableParseToken.targetSemanticAnalysis translation specific analysis}.
	 * @since 0.5.0
	 */
	public async semanticAnalysis(): Promise<void> {
		// Run for every child the analysis
		for (let child of this.children) {
			await child.semanticAnalysis();
		}
	}

	/**
	 * Translates the children tokens of this {@link RootFileParseToken instance}
	 * into the specific {@link this.programCtx.translation translation}.
	 * @since 0.5.0
	 * @protected
	 */
	public async translate(): Promise<Array<TranslatedCodeLine>> {
		let genCode: Array<TranslatedCodeLine> = [];
		for (let child of this.children) {
			genCode.push(...(await child.translateCtxAndChildren()));
		}
		return genCode;
	}
}
