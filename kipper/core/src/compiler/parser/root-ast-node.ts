/**
 * The root parse AST node of a file which contains all AST nodes of a file. This class is used to represent a file in
 * form of a single root node.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import { KipperProgramContext } from "../program-ctx";
import { Declaration } from "../semantics";
import { Statement } from "../semantics";
import { TranslatedCodeLine } from "../semantics";
import { NoSemantics, ParserASTNode } from "./ast-node";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";

/**
 * The root parse AST node of a file which contains all AST nodes of a file. This class is used to represent a file in
 * form of a single root node.
 * @since 0.8.0
 */
export class RootASTNode extends ParserASTNode<NoSemantics> {
	protected _programCtx: KipperProgramContext;

	protected readonly _children: Array<Declaration<any> | Statement<any>>;

	constructor(programCtx: KipperProgramContext, antlrCtx: ParserRuleContext) {
		super(antlrCtx, undefined);
		this._programCtx = programCtx;
		this._children = [];
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
	public get children(): Array<Declaration<any> | Statement<any>> {
		return this._children;
	}

	/**
	 * Adds new child at the end of the tree.
	 * @since 0.8.0
	 */
	public addNewChild(newChild: Declaration<any> | Statement<any>): void {
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
			await child.semanticAnalysis();
		}
	}

	/**
	 * Translates the children tokens of this {@link RootASTNode instance} into the specific
	 * {@link this.programCtx.target target language}.
	 * @since 0.8.0
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
