/**
 * Utility functions for the Kipper core package.
 * @since 0.9.0
 */
import { Interval } from "antlr4ts/misc/Interval";
import type { ParserRuleContext, Token } from "antlr4ts";
import type { ParseTree } from "antlr4ts/tree";
import type { CharStream } from "antlr4ts/CharStream";

/**
 * Returns the token source for the passed {@link antlrCtx} instance.
 * @param antlrCtx The token antlr4 context.
 * @since 0.4.0
 */
export function getParseRuleSource(antlrCtx: ParserRuleContext): string {
	let inputStream = antlrCtx.start.inputStream;
	let start = antlrCtx.start.startIndex;

	// If {@link inputStream} is undefined, then we will try to fetch the text using {@link ParserRuleContext.text}
	if (inputStream === undefined) {
		return antlrCtx.text;
	}

	// If {@link this.antlrCtx.stop} is defined, then use {@link this.antlrCtx.stop.stopIndex}, otherwise use
	// the last index of the "virtual" file/buffer, which is {@link inputStream.size} - 2 (Accounting for the
	// additional EOF at the end that we do not want, and the fact arrays start at 0)
	let end = antlrCtx.stop !== undefined ? antlrCtx.stop.stopIndex : inputStream.size - 2;
	return inputStream.getText(new Interval(start, end));
}

/**
 * Get the source code for two tokens (interval between these two tokens).
 * @param inputStream The input stream to fetch from.
 * @param start The start token
 * @param stop The stop token
 * @since 0.6.0
 */
export function getTokenIntervalSource(inputStream: CharStream, start: Token, stop: Token): string {
	return inputStream.getText(new Interval(start.startIndex, stop.stopIndex));
}

/**
 * Get the source code for a single token.
 * @param inputStream The input stream to fetch from.
 * @param token The token to get the source code from.
 * @since 0.6.0
 */
export function getTokenSource(inputStream: CharStream, token: Token) {
	return inputStream.getText(new Interval(token.startIndex, token.stopIndex));
}

/**
 * Get the source code for a parse tree.
 * @param inputStream The input stream to fetch from.
 * @param parseTree The parse tree.
 * @since 0.6.0
 */
export function getParseTreeSource(inputStream: CharStream, parseTree: ParseTree) {
	return inputStream.getText(parseTree.sourceInterval);
}

/**
 * Returns {@link num} unchanged if its positive, otherwise if its negative it will return 0.
 * @since 0.4.0
 */
export function getNaturalOrZero(num: number): number {
	return num < 0 ? 0 : num;
}

/**
 * Apply title-case formatting on the specific string e.g. the first character of a word/char sequence must always be
 * uppercase.
 * @param str The string to modify.
 * @since 0.8.0
 */
export function titleCase(str: string): string {
	return str.replace(/\b\S/g, (t) => t.toUpperCase());
}

/**
 * Generates for the specific types the corresponding conversion function identifier that should be implemented by the
 * {@link KipperTargetBuiltInGenerator}.
 * @param originalType The original type.
 * @param destType The type to convert to.
 * @since 0.8.0
 */
export function getConversionFunctionIdentifier(originalType: string, destType: string): string {
	return `${originalType}To${titleCase(destType)}`;
}
