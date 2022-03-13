/**
 * The primary tokens that make up the language.
 *
 * Primary Tokens:
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
import { CompilableParseToken } from "./parse-token";

export class FunctionDefinition extends CompilableParseToken {
	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}

export class Declaration extends CompilableParseToken {
	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}

export class CompoundStatement extends CompilableParseToken {
	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}

export class SelectionStatement extends CompilableParseToken {
	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}

export class ExpressionStatement extends CompilableParseToken {
	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}

export class IterationStatement extends CompilableParseToken {
	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}

export class JumpStatement extends CompilableParseToken {
	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}
}
