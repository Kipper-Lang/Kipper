import { KipperLexer } from "./antlr";

/**
 * The default channel ID which all parser-relevant tokens are stored.
 * @since 0.11.0
 */
export const DEFAULT_TOKEN_CHANNEL = 0;

/**
 * The hidden channel where all whitespaces and newlines are stored.
 * @since 0.11.0
 */
export const HIDDEN  = 1;

/**
 * The comment channels where all comments are stored.
 * @since 0.11.0
 */
export const COMMENT = KipperLexer.COMMENT;

/**
 * The pragma channel where all pragma instructions are stored which modify the compiler behaviour.
 * @since 0.11.0
 */
export const PRAGMA = KipperLexer.PRAGMA;
