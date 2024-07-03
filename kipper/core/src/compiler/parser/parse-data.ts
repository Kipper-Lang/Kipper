import type { KipperParseStream } from "./parse-stream";
import type { CompilationUnitContext, KipperParser } from "./antlr";
import type { KipperLexer } from "./antlr";

/**
 * Parse data for a {@link KipperProgramContext}.
 * @since 0.10.0
 */
export interface ParseData {
	parseStream: KipperParseStream;
	parseTree: CompilationUnitContext;
	parser: KipperParser;
	lexer: KipperLexer;
}
