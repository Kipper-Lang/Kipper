/**
 * Parse tokens for the kipper language. In comparison to the antlr4 generated parser tokens, these tokens will only
 * contain the major statements of Kipper, to simplify the compilation process and allow the listener to directly
 * translate items.
 *
 * These major statements are:
 * - Function definition
 * - Declaration
 * - Compound statement
 * - Selection statement
 * - Expression statement
 * - Iteration statement
 * - Jump statement (Only valid in functions or loops)
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */

import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { KipperParser } from "./parser";
import { Interval } from "antlr4ts/misc/Interval";
import { KipperProgramContext } from "./program-ctx";
import { ExpressionTypeAlreadySetError, ParentAlreadyExistsError } from "../errors";

/**
 * Basic Parse Token, which represents an Antlr4 Parse Token
 */
export abstract class ParseToken {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	private readonly _antlrContext: ParserRuleContext;

	/**
	 * The private '_parent' that actually stores the variable data,
	 * which is returned inside the getter 'parent'.
	 * @private
	 */
	private _parent: CompilableParseToken | undefined;

	constructor(antlrContext: ParserRuleContext) {
		this._antlrContext = antlrContext;
		this._parent = undefined;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this parse token.
	 */
	get antlrContext(): ParserRuleContext {
		return this._antlrContext;
	}

	/**
	 * Returns the {@link CompilableParseToken parent} that has this item as a child. If {@link parent} is none, then
	 * this item is a primary {@link CompilableParseToken}.
	 */
	get parent(): CompilableParseToken | undefined {
		return this._parent;
	}

	/**
	 * Sets the parent class of this item
	 */
	setParent(parent: CompilableParseToken) {
		if (this._parent === undefined) {
			this._parent = parent;
		} else {
			throw new ParentAlreadyExistsError();
		}
	}
}

/**
 * Kipper Parse token, which is the base class all tokens will extend from
 * @since 0.0.6
 */
export abstract class CompilableParseToken extends ParseToken {
	/**
	 * The private '_fileCtx' that actually stores the variable data,
	 * which is returned inside the getter 'fileCtx'.
	 * @private
	 */
	private readonly _fileCtx: KipperProgramContext;

	/**
	 * The private '_children' that actually stores the variable data,
	 * which is returned inside the getter 'children'.
	 * @private
	 */
	private readonly _children: Array<ParseToken | CompilableParseToken>;

	constructor(antlrContext: ParserRuleContext, fileCtx: KipperProgramContext) {
		super(antlrContext);
		this._fileCtx = fileCtx;
		this._children = [];
	}

	/**
	 * The kipper source code that was used to generate this {@link CompilableParseToken}.
	 */
	get sourceCode(): string {
		let inputStream = this.antlrContext.start.inputStream;
		let start = this.antlrContext.start.startIndex;

		// If {@link inputStream} is undefined, then we will try to fetch the text using {@link ParserRuleContext.text}
		if (inputStream === undefined) return this.antlrContext.text;

		// If {@link this.antlrContext.stop} is defined, then use {@link this.antlrContext.stop.stopIndex}, otherwise use
		// the last index of the "virtual" file/buffer, which is {@link inputStream.size} - 2 (Accounting for the
		// additional EOF at the end that we do not want, and the fact arrays start at 0)
		let end = this.antlrContext.stop !== undefined ? this.antlrContext.stop.stopIndex : inputStream.size - 2;
		return inputStream.getText(new Interval(start, end));
	}

	/**
	 * The parser that parsed the {@link antlrContext}
	 */
	get parser(): KipperParser {
		return this.fileCtx.parser;
	}

	/**
	 * The file context instance containing the metadata for the listener and this parse token.
	 */
	get fileCtx(): KipperProgramContext {
		return this._fileCtx;
	}

	/**
	 * The children of this parse token.
	 */
	get children(): Array<ParseToken | CompilableParseToken> {
		return this._children;
	}

	/**
	 * Adds new child to this class. Must be in proper order, so that it can be properly compiled.
	 * This will also automatically set the parent of the class to this instance.
	 * @example
	 *  let newExpression = new Expression(ctx, this.fileCtx);
	 *  oldExpression.addNewChild(newExpression);
	 */
	addNewChild(newChild: CompilableParseToken) {
		newChild.setParent(this);
		this._children.push(newChild);
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	abstract compileCtxAndChildren(): Array<string>;
}

export class Expression extends CompilableParseToken {
	compileCtxAndChildren(): Array<string> {
		return [];
	}
}

export class FunctionDefinition extends CompilableParseToken {
	compileCtxAndChildren(): Array<string> {
		return [];
	}
}

export class Declaration extends CompilableParseToken {
	compileCtxAndChildren(): Array<string> {
		return [];
	}
}

export class CompoundStatement extends CompilableParseToken {
	compileCtxAndChildren(): Array<string> {
		return [];
	}
}

export class SelectionStatement extends CompilableParseToken {
	compileCtxAndChildren(): Array<string> {
		return [];
	}
}

export class ExpressionStatement extends CompilableParseToken {
	compileCtxAndChildren(): Array<string> {
		return [];
	}
}

export class IterationStatement extends CompilableParseToken {
	compileCtxAndChildren(): Array<string> {
		return [];
	}
}

export class JumpStatement extends CompilableParseToken {
	compileCtxAndChildren(): Array<string> {
		return [];
	}
}
