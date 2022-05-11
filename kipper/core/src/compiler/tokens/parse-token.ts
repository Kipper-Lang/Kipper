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
import { KipperTargetSemanticAnalyser, TargetTokenSemanticAnalyser } from "../semantic-analyser";
import { KipperTargetCodeGenerator, TargetTokenCodeGenerator } from "../code-generator";
import { KipperCompileTarget } from "../target";
import { Declaration } from "./definitions";
import { Statement } from "./statements";
import { TranslatedCodeLine } from "../logic";

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

	protected constructor(antlrCtx: ParserRuleContext, parent: eligibleParentToken) {
		this._antlrCtx = antlrCtx;
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
	 * The compilation target for this specific token.
	 * @since 0.5.0
	 */
	public get target(): KipperCompileTarget {
		return this.programCtx.target;
	}

	/**
	 * The code generator, which will generate the code for this specific token
	 * into the {@link this.target target language}.
	 * @since 0.5.0
	 */
	public get codeGenerator(): KipperTargetCodeGenerator {
		return this.target.codeGenerator;
	}

	/**
	 * The target-specific semantic analyser, which will perform semantic analysis
	 * specific for the {@link this.target target language}.
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
	 * Ensures the semantic data of this item exists. This is always checked whenever a compilation is started.
	 * @protected
	 */
	public ensureSemanticDataExists(): Semantics {
		if (this.semanticData === undefined) {
			throw new UnableToDetermineMetadataError();
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
		await this.targetSemanticAnalysis(this);
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.5.0
	 * @abstract
	 */
	protected abstract primarySemanticAnalysis(): Promise<void>;

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
	 * {@link CompilableParseToken.targetSemanticAnalysis target specific analysis}.
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
	 * into the specific {@link this.programCtx.target target}.
	 * @since 0.5.0
	 * @protected
	 */
	protected async translate(): Promise<Array<TranslatedCodeLine>> {
		let genCode: Array<TranslatedCodeLine> = [];
		for (let child of this.children) {
			const code = await child.translateCtxAndChildren();
			genCode = genCode.concat(code);
		}
		return genCode;
	}

	/**
	 * Analysis the code and generates the typescript code for this item, and its children. This will log all warnings
	 * using {@link programCtx.logger} and throw errors if encountered.
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async compileCtx(): Promise<Array<TranslatedCodeLine>> {
		await this.semanticAnalysis();
		return await this.translate();
	}
}
