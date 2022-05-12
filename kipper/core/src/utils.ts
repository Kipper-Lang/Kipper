import { Interval } from "antlr4ts/misc/Interval";
import { ParserRuleContext, Token } from "antlr4ts";
import {
	CompilableParseToken,
	CompoundStatement,
	eligibleParentToken,
	KipperProgramContext,
	RootFileParseToken,
} from "./compiler";

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
 * @param start The start token
 * @param stop The stop token
 * @since 0.6.0
 */
export function getTokenIntervalSource(start: Token, stop: Token): string {
  let inputStream = start.inputStream ?? stop.inputStream;
  if (inputStream === undefined) {
    throw new Error("Input stream is undefined. Unable to fetch data");
  }

  return inputStream.getText(
    new Interval(start.startIndex, stop.stopIndex)
  );
}

/**
 * Get the source code for a single token.
 * @param token The token to get the source code from.
 * @since 0.6.0
 */
export function getTokenSource(token: Token) {
  let inputStream = token.inputStream;
  if (inputStream === undefined) {
    throw new Error("Input stream is undefined. Unable to fetch data");
  }

  return inputStream.getText(
    new Interval(token.startIndex, token.stopIndex)
  );
}

/**
 * Determine the scope of the token.
 * @param ctx The token ctx.
 * @since 0.4.0
 */
export function determineScope(ctx: CompilableParseToken<any>): KipperProgramContext | CompoundStatement {
	// Determine type by going up the parent structure, until a compound statement is hit or the root file parse
	// token, which represents the entire programCtx.
	let parent: eligibleParentToken = ctx.parent;
	while (!(parent instanceof RootFileParseToken) && !(parent instanceof CompoundStatement)) {
		parent = parent.parent;
	}

	if (parent instanceof RootFileParseToken) {
		return ctx.programCtx;
	}
	return parent;
}

/**
 * Returns {@link num} unchanged if its positive, otherwise if its negative it will return 0.
 * @since 0.4.0
 */
export function getNaturalOrZero(num: number): number {
	return num < 0 ? 0 : num;
}
