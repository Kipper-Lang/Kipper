/**
 * An Abstract Syntax Tree (AST) node, which wraps an {@link ParserRuleContext Antlr4 parse rule context} and
 * simplifies its content down to a simplified representation, which can be used for semantic analysis and
 * code translation.
 * @since 0.8.0
 */

import type { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import type { ParseTree } from "antlr4ts/tree";
import { getParseRuleSource } from "../../utils";
import { UnableToDetermineSemanticDataError, UndefinedSemanticsError } from "../../errors";

/**
 * Semantics type which defines the blueprint for {@link CompilableASTNode.semanticData semanticData} inside a
 * {@link CompilableASTNode}.
 * @since 0.3.0
 */
export type SemanticData = Record<string, any>;

/**
 * Type semantics for an expression class that must be evaluated during Type Checking.
 * @since 0.10.0
 */
export type TypeData = Record<string, any>;

/**
 * Empty semantics interface for hinting an AST node has *no* semantics.
 * @since 0.8.0
 */
export interface NoSemantics {}

/**
 * Empty type data interface for hinting an AST node has *no* type data.
 * @since 0.10.0
 */
export interface NoTypeSemantics {}

/**
 * An Abstract Syntax Tree (AST) node, which wraps an {@link ParserRuleContext Antlr4 parse rule context} and
 * simplifies its content down to a simplified representation, which can be used for semantic analysis and
 * code translation.
 * @since 0.8.0
 */
export abstract class ParserASTNode<Semantics extends SemanticData, TypeSemantics extends TypeData> {
	protected readonly _antlrRuleCtx: ParserRuleContext;
	protected readonly _children: Array<ParserASTNode<any, any>>;
	protected readonly _parent: ParserASTNode<any, any> | undefined;
	protected _semanticData: Semantics | undefined;
	protected _typeSemantics: TypeSemantics | undefined;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public abstract readonly kind: number;

	protected constructor(antlrCtx: ParserRuleContext, parent: ParserASTNode<any, any> | undefined) {
		this._antlrRuleCtx = antlrCtx;
		this._children = [];
		this._parent = parent;
		this._semanticData = undefined;
	}

	/**
	 * Returns the semantic data of this AST node.
	 * @since 0.8.0
	 */
	public get semanticData(): Semantics | undefined {
		return this._semanticData;
	}

	/**
	 * Sets the semantic data of this AST node.
	 * @param value The semantic data that should be written onto this AST node.
	 * @since 0.8.0
	 */
	protected set semanticData(value: Semantics | undefined) {
		this._semanticData = value;
	}

	/**
	 * Returns the type data of this AST node.
	 * @since 0.10.0
	 */
	public get typeSemantics(): TypeSemantics | undefined {
		return this._typeSemantics;
	}

	/**
	 * Sets the type data of this AST node.
	 * @param value The semantic data that should be written onto this AST node.
	 * @since 0.10.0
	 */
	protected set typeSemantics(value: TypeSemantics | undefined) {
		this._typeSemantics = value;
	}

	/**
	 * The antlr rule context containing the antlr4 metadata for this AST node.
	 * @since 0.8.0
	 */
	public get antlrRuleCtx(): ParserRuleContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Returns the {@link CompilableASTNode parent} that has this node as a child. If {@link parent} is undefined, then
	 * this item is a root node.
	 * @since 0.8.0
	 */
	public get parent(): ParserASTNode<any, any> | undefined {
		return this._parent;
	}

	/**
	 * The Kipper source code that was used to generate this {@link CompilableASTNode}.
	 *
	 * Any left-over whitespaces will be removed using trim().
	 * @since 0.8.0
	 */
	public get sourceCode(): string {
		return getParseRuleSource(this.antlrRuleCtx);
	}

	/**
	 * The children of this AST node.
	 * @since 0.8.0
	 */
	public get children(): Array<ParserASTNode<any, any>> {
		return this._children;
	}

	/**
	 * Adds new child ctx item to this AST node. The child item should be in the order that they appeared in the
	 * {@link this.antlrCtx} parse tree.
	 *
	 * This will also automatically set the parent of {@link newChild} to this instance.
	 * @since 0.8.0
	 */
	public addNewChild(newChild: ParserASTNode<any, any>): void {
		this._children.push(newChild);
	}

	/**
	 * Returns the children of the {@link antlrRuleCtx} and throws an error in case they are undefined.
	 * @throws {UnableToDetermineSemanticDataError} If {@link antlrRuleCtx.children} is undefined.
	 * @since 0.8.0
	 */
	public getAntlrRuleChildren(): Array<ParseTree> {
		if (this.antlrRuleCtx.children === undefined) {
			throw new UnableToDetermineSemanticDataError();
		}
		return this.antlrRuleCtx.children;
	}

	/**
	 * Returns the semantic data of this AST node and throws an error in case it is undefined.
	 * @throws {UndefinedSemanticsError} If {@link semanticData} is undefined.
	 * @since 0.8.0
	 */
	public getSemanticData(): Semantics {
		if (this.semanticData === undefined) {
			throw new UndefinedSemanticsError();
		}
		return this.semanticData;
	}

	/**
	 * Returns the type semantic data of this AST node and throws an error in case it is undefined.
	 * @throws UndefinedSemanticsError If {@link semanticData} is undefined.
	 * @since 0.10.0
	 */
	public getTypeSemanticData(): TypeSemantics {
		if (this.typeSemantics === undefined) {
			throw new UndefinedSemanticsError();
		}
		return this.typeSemantics;
	}
}
