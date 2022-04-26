import { Interval } from "antlr4ts/misc/Interval";
import { ParserRuleContext } from "antlr4ts";

export namespace Utils {
	/**
	 * Returns the token source for the passed {@link antlrCtx} instance.
	 * @param antlrCtx The token antlr4 context.
	 */
	export function getTokenSource(antlrCtx: ParserRuleContext): string {
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
}
