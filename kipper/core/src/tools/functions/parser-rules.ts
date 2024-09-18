/**
 * Utility functions for working with {@link KipperParserRuleContext antlr4 contexts} (also known as parse rules).
 * @since 0.11.0
 */
import type {KipperParserRuleContext} from "../../compiler";
import {Interval} from "antlr4ts/misc/Interval";
import type {CharStream} from "antlr4ts/CharStream";
import type {Token} from "antlr4ts";
import type {ParseTree} from "antlr4ts/tree";

/**
 * Returns the token source for the passed {@link antlrCtx} instance.
 * @param antlrCtx The token antlr4 context.
 * @since 0.4.0
 */
export function getParseRuleSource(antlrCtx: KipperParserRuleContext): string {
	let inputStream = antlrCtx.start.inputStream;
	let start = antlrCtx.start.startIndex;

	// If {@link inputStream} is undefined, then we will try to fetch the text using {@link KipperParserRuleContext.text}
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
