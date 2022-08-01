/**
 * The root node of an abstract syntax tree, which contains all AST nodes of a file.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import { KipperProgramContext } from "../program-ctx";
import { Declaration, KipperTargetSemanticAnalyser, Statement, TranslatedCodeLine } from "../semantics";
import { NoSemantics, NoTypeSemantics, ParserASTNode } from "./ast-node";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { KipperTargetCodeGenerator, TargetSetUpCodeGenerator, TargetWrapUpCodeGenerator } from "../translation";
import { KipperCompileTarget } from "../compile-target";
import { KipperError, UndefinedSemanticsError } from "../../errors";
import { EvaluatedCompileConfig } from "../compiler";

/**
 * The root node of an abstract syntax tree, which contains all AST nodes of a file.
 * @since 0.8.0
 */
export class RootASTNode extends ParserASTNode<NoSemantics, NoTypeSemantics> {
	protected _programCtx: KipperProgramContext;

	protected readonly _parent: undefined;

	protected readonly _children: Array<Declaration<any, any> | Statement<any, any>>;

	constructor(programCtx: KipperProgramContext, antlrCtx: ParserRuleContext) {
		super(antlrCtx, undefined);
		this._programCtx = programCtx;
		this._children = [];
		this._parent = undefined;
	}

	/**
	 * The parent of this root node. This will always return undefined, as there will never be a parent for a root AST
	 * node.
	 * @since 0.8.0
	 */
	public get parent(): undefined {
		return this._parent;
	}

	/**
	 * The program context of this root node, which stores the metadata for the Kipper program.
	 * @since 0.8.0
	 */
	public get programCtx(): KipperProgramContext {
		return this._programCtx;
	}

	/**
	 * The children of this AST root node.
	 * @since 0.8.0
	 */
	public get children(): Array<Declaration<any, any> | Statement<any, any>> {
		return this._children;
	}

	/**
	 * The compilation translation for this specific token.
	 * @since 0.10.0
	 */
	public get target(): KipperCompileTarget {
		return this.programCtx.target;
	}

	/**
	 * The compilation config for this program.
	 * @private
	 * @since 0.10.0
	 */
	public get compileConfig(): EvaluatedCompileConfig {
		return this.programCtx.compileConfig;
	}

	/**
	 * The code generator, which will generate the code for this specific token into the
	 * {@link this.target target language}.
	 * @since 0.10.0
	 */
	public get codeGenerator(): KipperTargetCodeGenerator {
		return this.target.codeGenerator;
	}

	/**
	 * The translation-specific semantic analyser, which will perform semantic analysis specific for the
	 * {@link this.target target language}.
	 * @since 0.10.0
	 */
	public get semanticAnalyser(): KipperTargetSemanticAnalyser {
		return this.target.semanticAnalyser;
	}

	/**
	 * Adds new child at the end of the tree.
	 * @since 0.8.0
	 */
	public addNewChild(newChild: Declaration<any, any> | Statement<any, any>): void {
		this._children.push(newChild);
	}

	/**
	 * Semantically analyses the children tokens of this
	 * {@link RootASTNode instance} and performs additional
	 * {@link CompilableASTNode.targetSemanticAnalysis translation specific analysis}.
	 * @since 0.8.0
	 */
	public async semanticAnalysis(): Promise<void> {
		// Run for every child the analysis
		for (let child of this.children) {
			try {
				await child.semanticAnalysis();
			} catch (e) {
				// If it's a compile error, add it to the list of errors
				if (e instanceof KipperError && !this.compileConfig.abortOnFirstError) {
					this.programCtx.addError(e);
				} else if (!(e instanceof UndefinedSemanticsError)) {
					// If it's not a 'KipperError' or 'UndefinedSemanticsError', throw it as the compiler can not handle it
					throw e;
				}
			}
		}
	}

	/**
	 * Translates the children tokens of this {@link RootASTNode instance} into the specific
	 * {@link this.programCtx.target target language}.
	 * @since 0.8.0
	 * @protected
	 */
	public async translate(): Promise<Array<TranslatedCodeLine>> {
		// SetUp and WrapUp functions
		const targetSetUp: TargetSetUpCodeGenerator = this.codeGenerator.setUp;
		const targetWrapUp: TargetWrapUpCodeGenerator = this.codeGenerator.wrapUp;

		// Add set up code, and then append all children
		let genCode: Array<TranslatedCodeLine> = [
			...(await targetSetUp(this.programCtx)),
			...(await this.programCtx.generateRequirements()),
		];
		for (let child of this.children) {
			genCode.push(...(await child.translateCtxAndChildren()));
		}

		// Add wrap up code
		genCode.push(...(await targetWrapUp(this.programCtx)));

		// Finished code for this Kipper file
		return genCode;
	}
}
