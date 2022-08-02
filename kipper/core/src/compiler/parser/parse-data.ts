import { KipperParseStream } from "./parse-stream";
import { CompilationUnitContext, KipperParser } from "./antlr/KipperParser";
import { KipperLexer } from "./antlr/KipperLexer";

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
