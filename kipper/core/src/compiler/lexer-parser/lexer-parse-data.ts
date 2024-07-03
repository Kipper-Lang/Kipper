import type { KipperFileStream } from "./file-stream";
import type { CompilationUnitContext, KipperLexer, KipperParser } from "./antlr/";
import type { CommonTokenStream } from "antlr4ts";

/**
 * Parse data for a {@link KipperProgramContext}.
 * @since 0.10.0
 */
export interface LexerParserData {
	/**
	 * The channels where the lexed content of the file are placed.
	 * @since 0.11.0
	 */
	channels: {
		/**
		 * Token stream which contains all tokens regardless of channel.
		 * @since 0.11.0
		 */
		ALL: CommonTokenStream;
		/**
		 * The default channel ID which all parser-relevant tokens are stored.
		 * @since 0.11.0
		 */
		DEFAULT_TOKEN_CHANNEL: CommonTokenStream;
		/**
		 * The hidden channel where all whitespaces and newlines are stored.
		 * @since 0.11.0
		 */
		HIDDEN: CommonTokenStream;
		/**
		 * The comment channels where all comments are stored.
		 * @since 0.11.0
		 */
		COMMENT: CommonTokenStream;
		/**
		 * The pragma channel where all pragma instructions are stored which modify the compiler behaviour.
		 * @since 0.11.0
		 */
		PRAGMA: CommonTokenStream;
	};
	/**
	 * The input file stream.
	 * @since 0.10.0
	 */
	fileStream: KipperFileStream;
	/**
	 * The parse tree i.e. root node for the parsed file.
	 * @since 0.10.0
	 */
	parseTree: CompilationUnitContext;
	/**
	 * The instance of the parser used to parse the lexed file content.
	 * @since 0.10.0
	 */
	parser: KipperParser;
	/**
	 * The instance of the lexer used to lex the raw file content.
	 * @since 0.10.0
	 */
	lexer: KipperLexer;
}
