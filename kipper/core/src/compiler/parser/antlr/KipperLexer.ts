// Generated from ./KipperLexer.g4 by ANTLR 4.9.0-SNAPSHOT

import KipperLexerBase from "./base/KipperLexerBase";

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

export class KipperLexer extends KipperLexerBase {
	public static readonly FStringExpStart = 1;
	public static readonly BlockComment = 2;
	public static readonly LineComment = 3;
	public static readonly Const = 4;
	public static readonly Var = 5;
	public static readonly As = 6;
	public static readonly Spread = 7;
	public static readonly Switch = 8;
	public static readonly Case = 9;
	public static readonly Default = 10;
	public static readonly Break = 11;
	public static readonly Continue = 12;
	public static readonly Do = 13;
	public static readonly While = 14;
	public static readonly If = 15;
	public static readonly Else = 16;
	public static readonly For = 17;
	public static readonly Enum = 18;
	public static readonly DefFunc = 19;
	public static readonly Return = 20;
	public static readonly CallFunc = 21;
	public static readonly RetIndicator = 22;
	public static readonly Class = 23;
	public static readonly Interface = 24;
	public static readonly True = 25;
	public static readonly False = 26;
	public static readonly Typeof = 27;
	public static readonly Void = 28;
	public static readonly Null = 29;
	public static readonly Undefined = 30;
	public static readonly Comma = 31;
	public static readonly SemiColon = 32;
	public static readonly QuestionMark = 33;
	public static readonly Colon = 34;
	public static readonly LeftParen = 35;
	public static readonly RightParen = 36;
	public static readonly LeftBracket = 37;
	public static readonly RightBracket = 38;
	public static readonly FStringExpEnd = 39;
	public static readonly LeftBrace = 40;
	public static readonly RightBrace = 41;
	public static readonly Plus = 42;
	public static readonly PlusPlus = 43;
	public static readonly Minus = 44;
	public static readonly MinusMinus = 45;
	public static readonly Star = 46;
	public static readonly Div = 47;
	public static readonly Mod = 48;
	public static readonly PowerTo = 49;
	public static readonly AndAnd = 50;
	public static readonly OrOr = 51;
	public static readonly Not = 52;
	public static readonly Assign = 53;
	public static readonly PlusAssign = 54;
	public static readonly MinusAssign = 55;
	public static readonly StarAssign = 56;
	public static readonly DivAssign = 57;
	public static readonly ModAssign = 58;
	public static readonly Equal = 59;
	public static readonly NotEqual = 60;
	public static readonly Less = 61;
	public static readonly LessEqual = 62;
	public static readonly Greater = 63;
	public static readonly GreaterEqual = 64;
	public static readonly BitwiseAnd = 65;
	public static readonly BitwiseOr = 66;
	public static readonly BitwiseXor = 67;
	public static readonly BitwiseNot = 68;
	public static readonly BitwiseZeroFillLeftShift = 69;
	public static readonly BitwiseSignedRightShift = 70;
	public static readonly BitwiseZeroFillRightShift = 71;
	public static readonly Dot = 72;
	public static readonly Identifier = 73;
	public static readonly IntegerConstant = 74;
	public static readonly SingleQuoteStringLiteral = 75;
	public static readonly DoubleQuoteStringLiteral = 76;
	public static readonly FloatingConstant = 77;
	public static readonly Whitespace = 78;
	public static readonly Newline = 79;
	public static readonly FStringSingleQuoteStart = 80;
	public static readonly FStringDoubleQuoteStart = 81;
	public static readonly FStringSingleQuoteEnd = 82;
	public static readonly FStringSingleQuoteAtom = 83;
	public static readonly FStringDoubleQuoteEnd = 84;
	public static readonly FStringDoubleQuoteAtom = 85;
	public static readonly COMMENT = 2;
	public static readonly SINGLE_QUOTE_FSTRING = 1;
	public static readonly DOUBLE_QUOTE_FSTRING = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENT"];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = ["DEFAULT_MODE", "SINGLE_QUOTE_FSTRING", "DOUBLE_QUOTE_FSTRING"];

	public static readonly ruleNames: string[] = [
		"BlockComment",
		"LineComment",
		"Const",
		"Var",
		"As",
		"Spread",
		"Switch",
		"Case",
		"Default",
		"Break",
		"Continue",
		"Do",
		"While",
		"If",
		"Else",
		"For",
		"Enum",
		"DefFunc",
		"Return",
		"CallFunc",
		"RetIndicator",
		"Class",
		"Interface",
		"True",
		"False",
		"Typeof",
		"Void",
		"Null",
		"Undefined",
		"Comma",
		"SemiColon",
		"QuestionMark",
		"Colon",
		"LeftParen",
		"RightParen",
		"LeftBracket",
		"RightBracket",
		"FStringExpEnd",
		"LeftBrace",
		"RightBrace",
		"Plus",
		"PlusPlus",
		"Minus",
		"MinusMinus",
		"Star",
		"Div",
		"Mod",
		"PowerTo",
		"AndAnd",
		"OrOr",
		"Not",
		"Assign",
		"PlusAssign",
		"MinusAssign",
		"StarAssign",
		"DivAssign",
		"ModAssign",
		"Equal",
		"NotEqual",
		"Less",
		"LessEqual",
		"Greater",
		"GreaterEqual",
		"BitwiseAnd",
		"BitwiseOr",
		"BitwiseXor",
		"BitwiseNot",
		"BitwiseZeroFillLeftShift",
		"BitwiseSignedRightShift",
		"BitwiseZeroFillRightShift",
		"Dot",
		"Identifier",
		"IntegerConstant",
		"SingleQuoteStringLiteral",
		"DoubleQuoteStringLiteral",
		"FloatingConstant",
		"Whitespace",
		"Newline",
		"FStringSingleQuoteStart",
		"FStringDoubleQuoteStart",
		"FStringSingleQuoteExpStart",
		"FStringSingleQuoteEnd",
		"FStringSingleQuoteAtom",
		"FStringDoubleQuoteExpStart",
		"FStringDoubleQuoteEnd",
		"FStringDoubleQuoteAtom",
		"IdentifierNondigit",
		"Nondigit",
		"Digit",
		"DecimalConstant",
		"BinaryConstant",
		"OctalConstant",
		"HexadecimalConstant",
		"NonzeroDigit",
		"BinaryDigit",
		"OctalDigit",
		"HexadecimalDigit",
		"DecimalFloatingConstant",
		"FractionalConstant",
		"ExponentPart",
		"DigitSequence",
		"Sign",
		"CCharSequence",
		"CChar",
		"EscapeSequence",
		"SimpleEscapeSequence",
		"OctalEscapeSequence",
		"HexadecimalEscapeSequence",
		"SingleQuoteFStringSCharSequence",
		"SingleQuoteFStringSChar",
		"DoubleQuoteFStringSCharSequence",
		"DoubleQuoteFStringSChar",
		"SingleQuoteSCharSequence",
		"SingleQuoteSChar",
		"DoubleQuoteSCharSequence",
		"DoubleQuoteSChar",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		"'const'",
		"'var'",
		"'as'",
		"'...'",
		"'switch'",
		"'case'",
		"'default'",
		"'break'",
		"'continue'",
		"'do'",
		"'while'",
		"'if'",
		"'else'",
		"'for'",
		"'enum'",
		"'def'",
		"'return'",
		"'call'",
		"'->'",
		"'class'",
		"'interface'",
		"'true'",
		"'false'",
		"'typeof'",
		"'void'",
		"'null'",
		"'undefined'",
		"','",
		"';'",
		"'?'",
		"':'",
		"'('",
		"')'",
		"'['",
		"']'",
		undefined,
		"'{'",
		"'}'",
		"'+'",
		"'++'",
		"'-'",
		"'--'",
		"'*'",
		"'/'",
		"'%'",
		"'**'",
		"'&&'",
		"'||'",
		"'!'",
		"'='",
		"'+='",
		"'-='",
		"'*='",
		"'/='",
		"'%='",
		"'=='",
		"'!='",
		"'<'",
		"'<='",
		"'>'",
		"'>='",
		"'&'",
		"'|'",
		"'^'",
		"'~'",
		"'<<'",
		"'>>'",
		"'>>>'",
		"'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		"FStringExpStart",
		"BlockComment",
		"LineComment",
		"Const",
		"Var",
		"As",
		"Spread",
		"Switch",
		"Case",
		"Default",
		"Break",
		"Continue",
		"Do",
		"While",
		"If",
		"Else",
		"For",
		"Enum",
		"DefFunc",
		"Return",
		"CallFunc",
		"RetIndicator",
		"Class",
		"Interface",
		"True",
		"False",
		"Typeof",
		"Void",
		"Null",
		"Undefined",
		"Comma",
		"SemiColon",
		"QuestionMark",
		"Colon",
		"LeftParen",
		"RightParen",
		"LeftBracket",
		"RightBracket",
		"FStringExpEnd",
		"LeftBrace",
		"RightBrace",
		"Plus",
		"PlusPlus",
		"Minus",
		"MinusMinus",
		"Star",
		"Div",
		"Mod",
		"PowerTo",
		"AndAnd",
		"OrOr",
		"Not",
		"Assign",
		"PlusAssign",
		"MinusAssign",
		"StarAssign",
		"DivAssign",
		"ModAssign",
		"Equal",
		"NotEqual",
		"Less",
		"LessEqual",
		"Greater",
		"GreaterEqual",
		"BitwiseAnd",
		"BitwiseOr",
		"BitwiseXor",
		"BitwiseNot",
		"BitwiseZeroFillLeftShift",
		"BitwiseSignedRightShift",
		"BitwiseZeroFillRightShift",
		"Dot",
		"Identifier",
		"IntegerConstant",
		"SingleQuoteStringLiteral",
		"DoubleQuoteStringLiteral",
		"FloatingConstant",
		"Whitespace",
		"Newline",
		"FStringSingleQuoteStart",
		"FStringDoubleQuoteStart",
		"FStringSingleQuoteEnd",
		"FStringSingleQuoteAtom",
		"FStringDoubleQuoteEnd",
		"FStringDoubleQuoteAtom",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
		KipperLexer._LITERAL_NAMES,
		KipperLexer._SYMBOLIC_NAMES,
		[],
	);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KipperLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(KipperLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string {
		return "KipperLexer.g4";
	}

	// @Override
	public get ruleNames(): string[] {
		return KipperLexer.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return KipperLexer._serializedATN;
	}

	// @Override
	public get channelNames(): string[] {
		return KipperLexer.channelNames;
	}

	// @Override
	public get modeNames(): string[] {
		return KipperLexer.modeNames;
	}

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
			case 78:
				this.FStringSingleQuoteStart_action(_localctx, actionIndex);
				break;

			case 79:
				this.FStringDoubleQuoteStart_action(_localctx, actionIndex);
				break;

			case 81:
				this.FStringSingleQuoteEnd_action(_localctx, actionIndex);
				break;

			case 84:
				this.FStringDoubleQuoteEnd_action(_localctx, actionIndex);
				break;
		}
	}
	private FStringSingleQuoteStart_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 0:
				this.incrementFStringDepth();
				break;
		}
	}
	private FStringDoubleQuoteStart_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 1:
				this.incrementFStringDepth();
				break;
		}
	}
	private FStringSingleQuoteEnd_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 2:
				this.decrementFStringDepth();
				break;
		}
	}
	private FStringDoubleQuoteEnd_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
			case 3:
				this.decrementFStringDepth();
				break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 37:
				return this.FStringExpEnd_sempred(_localctx, predIndex);

			case 80:
				return this.FStringSingleQuoteExpStart_sempred(_localctx, predIndex);

			case 83:
				return this.FStringDoubleQuoteExpStart_sempred(_localctx, predIndex);
		}
		return true;
	}
	private FStringExpEnd_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.insideFString();
		}
		return true;
	}
	private FStringSingleQuoteExpStart_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 1:
				return this.insideFString();
		}
		return true;
	}
	private FStringDoubleQuoteExpStart_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
			case 2:
				return this.insideFString();
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02W\u02E2\b\x01" +
		"\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04" +
		"\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f" +
		"\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11" +
		"\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16" +
		"\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B" +
		"\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!" +
		"\t!\x04\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t" +
		")\x04*\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x04" +
		"2\t2\x043\t3\x044\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04" +
		";\t;\x04<\t<\x04=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04" +
		"D\tD\x04E\tE\x04F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04" +
		"M\tM\x04N\tN\x04O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04" +
		"V\tV\x04W\tW\x04X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t" +
		"^\x04_\t_\x04`\t`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04" +
		"g\tg\x04h\th\x04i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04" +
		"p\tp\x04q\tq\x04r\tr\x04s\ts\x04t\tt\x04u\tu\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x07\x02\xF2\n\x02\f\x02\x0E\x02\xF5\v\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\u0100\n\x03\f" +
		"\x03\x0E\x03\u0103\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		'\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03"\x03"\x03' +
		"#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03'\x03'\x03'\x03'\x03'\x03" +
		"(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03+\x03,\x03,\x03-\x03-\x03-\x03" +
		".\x03.\x03/\x03/\x030\x030\x031\x031\x031\x032\x032\x032\x033\x033\x03" +
		"3\x034\x034\x035\x035\x036\x036\x036\x037\x037\x037\x038\x038\x038\x03" +
		"9\x039\x039\x03:\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03" +
		">\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03B\x03B\x03C\x03C\x03" +
		"D\x03D\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03H\x03H\x03" +
		"I\x03I\x03I\x07I\u020A\nI\fI\x0EI\u020D\vI\x03J\x03J\x03J\x03J\x05J\u0213" +
		"\nJ\x03K\x03K\x05K\u0217\nK\x03K\x03K\x03L\x03L\x05L\u021D\nL\x03L\x03" +
		"L\x03M\x03M\x03N\x06N\u0224\nN\rN\x0EN\u0225\x03N\x03N\x03O\x03O\x03O" +
		"\x03O\x03P\x03P\x03P\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03" +
		"Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03T\x03" +
		"T\x03U\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03W\x03W\x03" +
		"X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x06[\u025D\n[\r[\x0E[\u025E\x03\\\x03" +
		"\\\x03\\\x06\\\u0264\n\\\r\\\x0E\\\u0265\x03]\x03]\x03]\x06]\u026B\n]" +
		"\r]\x0E]\u026C\x03^\x03^\x03^\x06^\u0272\n^\r^\x0E^\u0273\x03_\x03_\x03" +
		"`\x03`\x03a\x03a\x03b\x03b\x03c\x03c\x05c\u0280\nc\x03c\x03c\x03c\x05" +
		"c\u0285\nc\x03d\x05d\u0288\nd\x03d\x03d\x03d\x03d\x03d\x05d\u028F\nd\x03" +
		"e\x03e\x05e\u0293\ne\x03e\x03e\x03f\x06f\u0298\nf\rf\x0Ef\u0299\x03g\x03" +
		"g\x03h\x06h\u029F\nh\rh\x0Eh\u02A0\x03i\x03i\x05i\u02A5\ni\x03j\x03j\x03" +
		"j\x05j\u02AA\nj\x03k\x03k\x03k\x03l\x03l\x03l\x05l\u02B2\nl\x03l\x05l" +
		"\u02B5\nl\x03m\x03m\x03m\x03m\x06m\u02BB\nm\rm\x0Em\u02BC\x03n\x06n\u02C0" +
		"\nn\rn\x0En\u02C1\x03o\x03o\x05o\u02C6\no\x03p\x06p\u02C9\np\rp\x0Ep\u02CA" +
		"\x03q\x03q\x05q\u02CF\nq\x03r\x06r\u02D2\nr\rr\x0Er\u02D3\x03s\x03s\x05" +
		"s\u02D8\ns\x03t\x06t\u02DB\nt\rt\x0Et\u02DC\x03u\x03u\x05u\u02E1\nu\x03" +
		"\xF3\x02\x02v\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
		"\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
		"\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14'\x02\x15)\x02\x16" +
		"+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E" +
		";\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02'M\x02(O\x02" +
		")Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x02" +
		"5i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F" +
		"\x02A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F" +
		"\x02I\x91\x02J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F" +
		"\x02Q\xA1\x02R\xA3\x02S\xA5\x02\x02\xA7\x02T\xA9\x02U\xAB\x02\x02\xAD" +
		"\x02V\xAF\x02W\xB1\x02\x02\xB3\x02\x02\xB5\x02\x02\xB7\x02\x02\xB9\x02" +
		"\x02\xBB\x02\x02\xBD\x02\x02\xBF\x02\x02\xC1\x02\x02\xC3\x02\x02\xC5\x02" +
		"\x02\xC7\x02\x02\xC9\x02\x02\xCB\x02\x02\xCD\x02\x02\xCF\x02\x02\xD1\x02" +
		"\x02\xD3\x02\x02\xD5\x02\x02\xD7\x02\x02\xD9\x02\x02\xDB\x02\x02\xDD\x02" +
		"\x02\xDF\x02\x02\xE1\x02\x02\xE3\x02\x02\xE5\x02\x02\xE7\x02\x02\xE9\x02" +
		"\x02\xEB\x02\x02\x05\x02\x03\x04\x14\x05\x02\f\f\x0F\x0F\u202A\u202B\x06" +
		'\x02\v\v\r\x0E""\xA2\xA2\x05\x02C\\aac|\x03\x022;\x04\x02DDdd\x04\x02' +
		"QQqq\x04\x02ZZzz\x03\x023;\x03\x0223\x03\x0229\x05\x022;CHch\x04\x02G" +
		"Ggg\x04\x02--//\x06\x02\f\f\x0F\x0F))^^\x0E\x02$$))AA^^cdhhppttvvxx}}" +
		"\x7F\x7F\b\x02\f\f\x0F\x0F))^^}}\x7F\x7F\b\x02\f\f\x0F\x0F$$^^}}\x7F\x7F" +
		"\x06\x02\f\f\x0F\x0F$$^^\x02\u02E4\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
		"\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03" +
		"\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02" +
		"\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02" +
		"O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02" +
		"\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02" +
		"\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03" +
		"\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02" +
		"\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02" +
		"q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02" +
		"\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02" +
		"\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02" +
		"\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02" +
		"\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02" +
		"\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02" +
		"\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02\x02\x9B\x03\x02\x02\x02" +
		"\x02\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02" +
		"\x02\xA3\x03\x02\x02\x02\x03\xA5\x03\x02\x02\x02\x03\xA7\x03\x02\x02\x02" +
		"\x03\xA9\x03\x02\x02\x02\x04\xAB\x03\x02\x02\x02\x04\xAD\x03\x02\x02\x02" +
		"\x04\xAF\x03\x02\x02\x02\x05\xED\x03\x02\x02\x02\x07\xFB\x03\x02\x02\x02" +
		"\t\u0106\x03\x02\x02\x02\v\u010C\x03\x02\x02\x02\r\u0110\x03\x02\x02\x02" +
		"\x0F\u0113\x03\x02\x02\x02\x11\u0117\x03\x02\x02\x02\x13\u011E\x03\x02" +
		"\x02\x02\x15\u0123\x03\x02\x02\x02\x17\u012B\x03\x02\x02\x02\x19\u0131" +
		"\x03\x02\x02\x02\x1B\u013A\x03\x02\x02\x02\x1D\u013D\x03\x02\x02\x02\x1F" +
		"\u0143\x03\x02\x02\x02!\u0146\x03\x02\x02\x02#\u014B\x03\x02\x02\x02%" +
		"\u014F\x03\x02\x02\x02'\u0154\x03\x02\x02\x02)\u0158\x03\x02\x02\x02" +
		"+\u015F\x03\x02\x02\x02-\u0164\x03\x02\x02\x02/\u0167\x03\x02\x02\x02" +
		"1\u016D\x03\x02\x02\x023\u0177\x03\x02\x02\x025\u017C\x03\x02\x02\x02" +
		"7\u0182\x03\x02\x02\x029\u0189\x03\x02\x02\x02;\u018E\x03\x02\x02\x02" +
		"=\u0193\x03\x02\x02\x02?\u019D\x03\x02\x02\x02A\u019F\x03\x02\x02\x02" +
		"C\u01A1\x03\x02\x02\x02E\u01A3\x03\x02\x02\x02G\u01A5\x03\x02\x02\x02" +
		"I\u01A7\x03\x02\x02\x02K\u01A9\x03\x02\x02\x02M\u01AB\x03\x02\x02\x02" +
		"O\u01AD\x03\x02\x02\x02Q\u01B2\x03\x02\x02\x02S\u01B4\x03\x02\x02\x02" +
		"U\u01B6\x03\x02\x02\x02W\u01B8\x03\x02\x02\x02Y\u01BB\x03\x02\x02\x02" +
		"[\u01BD\x03\x02\x02\x02]\u01C0\x03\x02\x02\x02_\u01C2\x03\x02\x02\x02" +
		"a\u01C4\x03\x02\x02\x02c\u01C6\x03\x02\x02\x02e\u01C9\x03\x02\x02\x02" +
		"g\u01CC\x03\x02\x02\x02i\u01CF\x03\x02\x02\x02k\u01D1\x03\x02\x02\x02" +
		"m\u01D3\x03\x02\x02\x02o\u01D6\x03\x02\x02\x02q\u01D9\x03\x02\x02\x02" +
		"s\u01DC\x03\x02\x02\x02u\u01DF\x03\x02\x02\x02w\u01E2\x03\x02\x02\x02" +
		"y\u01E5\x03\x02\x02\x02{\u01E8\x03\x02\x02\x02}\u01EA\x03\x02\x02\x02" +
		"\x7F\u01ED\x03\x02\x02\x02\x81\u01EF\x03\x02\x02\x02\x83\u01F2\x03\x02" +
		"\x02\x02\x85\u01F4\x03\x02\x02\x02\x87\u01F6\x03\x02\x02\x02\x89\u01F8" +
		"\x03\x02\x02\x02\x8B\u01FA\x03\x02\x02\x02\x8D\u01FD\x03\x02\x02\x02\x8F" +
		"\u0200\x03\x02\x02\x02\x91\u0204\x03\x02\x02\x02\x93\u0206\x03\x02\x02" +
		"\x02\x95\u0212\x03\x02\x02\x02\x97\u0214\x03\x02\x02\x02\x99\u021A\x03" +
		"\x02\x02\x02\x9B\u0220\x03\x02\x02\x02\x9D\u0223\x03\x02\x02\x02\x9F\u0229" +
		"\x03\x02\x02\x02\xA1\u022D\x03\x02\x02\x02\xA3\u0234\x03\x02\x02\x02\xA5" +
		"\u023B\x03\x02\x02\x02\xA7\u0241\x03\x02\x02\x02\xA9\u0246\x03\x02\x02" +
		"\x02\xAB\u0248\x03\x02\x02\x02\xAD\u024E\x03\x02\x02\x02\xAF\u0253\x03" +
		"\x02\x02\x02\xB1\u0255\x03\x02\x02\x02\xB3\u0257\x03\x02\x02\x02\xB5\u0259" +
		"\x03\x02\x02\x02\xB7\u025C\x03\x02\x02\x02\xB9\u0260\x03\x02\x02\x02\xBB" +
		"\u0267\x03\x02\x02\x02\xBD\u026E\x03\x02\x02\x02\xBF\u0275\x03\x02\x02" +
		"\x02\xC1\u0277\x03\x02\x02\x02\xC3\u0279\x03\x02\x02\x02\xC5\u027B\x03" +
		"\x02\x02\x02\xC7\u0284\x03\x02\x02\x02\xC9\u028E\x03\x02\x02\x02\xCB\u0290" +
		"\x03\x02\x02\x02\xCD\u0297\x03\x02\x02\x02\xCF\u029B\x03\x02\x02\x02\xD1" +
		"\u029E\x03\x02\x02\x02\xD3\u02A4\x03\x02\x02\x02\xD5\u02A9\x03\x02\x02" +
		"\x02\xD7\u02AB\x03\x02\x02\x02\xD9\u02AE\x03\x02\x02\x02\xDB\u02B6\x03" +
		"\x02\x02\x02\xDD\u02BF\x03\x02\x02\x02\xDF\u02C5\x03\x02\x02\x02\xE1\u02C8" +
		"\x03\x02\x02\x02\xE3\u02CE\x03\x02\x02\x02\xE5\u02D1\x03\x02\x02\x02\xE7" +
		"\u02D7\x03\x02\x02\x02\xE9\u02DA\x03\x02\x02\x02\xEB\u02E0\x03\x02\x02" +
		"\x02\xED\xEE\x071\x02\x02\xEE\xEF\x07,\x02\x02\xEF\xF3\x03\x02\x02\x02" +
		"\xF0\xF2\v\x02\x02\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02" +
		"\xF3\xF4\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02" +
		"\xF5\xF3\x03\x02\x02\x02\xF6\xF7\x07,\x02\x02\xF7\xF8\x071\x02\x02\xF8" +
		"\xF9\x03\x02\x02\x02\xF9\xFA\b\x02\x02\x02\xFA\x06\x03\x02\x02\x02\xFB" +
		"\xFC\x071\x02\x02\xFC\xFD\x071\x02\x02\xFD\u0101\x03\x02\x02\x02\xFE\u0100" +
		"\n\x02\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101" +
		"\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104\x03\x02\x02" +
		"\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0105\b\x03\x02\x02\u0105\b\x03" +
		"\x02\x02\x02\u0106\u0107\x07e\x02\x02\u0107\u0108\x07q\x02\x02\u0108\u0109" +
		"\x07p\x02\x02\u0109\u010A\x07u\x02\x02\u010A\u010B\x07v\x02\x02\u010B" +
		"\n\x03\x02\x02\x02\u010C\u010D\x07x\x02\x02\u010D\u010E\x07c\x02\x02\u010E" +
		"\u010F\x07t\x02\x02\u010F\f\x03\x02\x02\x02\u0110\u0111\x07c\x02\x02\u0111" +
		"\u0112\x07u\x02\x02\u0112\x0E\x03\x02\x02\x02\u0113\u0114\x070\x02\x02" +
		"\u0114\u0115\x070\x02\x02\u0115\u0116\x070\x02\x02\u0116\x10\x03\x02\x02" +
		"\x02\u0117\u0118\x07u\x02\x02\u0118\u0119\x07y\x02\x02\u0119\u011A\x07" +
		"k\x02\x02\u011A\u011B\x07v\x02\x02\u011B\u011C\x07e\x02\x02\u011C\u011D" +
		"\x07j\x02\x02\u011D\x12\x03\x02\x02\x02\u011E\u011F\x07e\x02\x02\u011F" +
		"\u0120\x07c\x02\x02\u0120\u0121\x07u\x02\x02\u0121\u0122\x07g\x02\x02" +
		"\u0122\x14\x03\x02\x02\x02\u0123\u0124\x07f\x02\x02\u0124\u0125\x07g\x02" +
		"\x02\u0125\u0126\x07h\x02\x02\u0126\u0127\x07c\x02\x02\u0127\u0128\x07" +
		"w\x02\x02\u0128\u0129\x07n\x02\x02\u0129\u012A\x07v\x02\x02\u012A\x16" +
		"\x03\x02\x02\x02\u012B\u012C\x07d\x02\x02\u012C\u012D\x07t\x02\x02\u012D" +
		"\u012E\x07g\x02\x02\u012E\u012F\x07c\x02\x02\u012F\u0130\x07m\x02\x02" +
		"\u0130\x18\x03\x02\x02\x02\u0131\u0132\x07e\x02\x02\u0132\u0133\x07q\x02" +
		"\x02\u0133\u0134\x07p\x02\x02\u0134\u0135\x07v\x02\x02\u0135\u0136\x07" +
		"k\x02\x02\u0136\u0137\x07p\x02\x02\u0137\u0138\x07w\x02\x02\u0138\u0139" +
		"\x07g\x02\x02\u0139\x1A\x03\x02\x02\x02\u013A\u013B\x07f\x02\x02\u013B" +
		"\u013C\x07q\x02\x02\u013C\x1C\x03\x02\x02\x02\u013D\u013E\x07y\x02\x02" +
		"\u013E\u013F\x07j\x02\x02\u013F\u0140\x07k\x02\x02\u0140\u0141\x07n\x02" +
		"\x02\u0141\u0142\x07g\x02\x02\u0142\x1E\x03\x02\x02\x02\u0143\u0144\x07" +
		"k\x02\x02\u0144\u0145\x07h\x02\x02\u0145 \x03\x02\x02\x02\u0146\u0147" +
		"\x07g\x02\x02\u0147\u0148\x07n\x02\x02\u0148\u0149\x07u\x02\x02\u0149" +
		'\u014A\x07g\x02\x02\u014A"\x03\x02\x02\x02\u014B\u014C\x07h\x02\x02\u014C' +
		"\u014D\x07q\x02\x02\u014D\u014E\x07t\x02\x02\u014E$\x03\x02\x02\x02\u014F" +
		"\u0150\x07g\x02\x02\u0150\u0151\x07p\x02\x02\u0151\u0152\x07w\x02\x02" +
		"\u0152\u0153\x07o\x02\x02\u0153&\x03\x02\x02\x02\u0154\u0155\x07f\x02" +
		"\x02\u0155\u0156\x07g\x02\x02\u0156\u0157\x07h\x02\x02\u0157(\x03\x02" +
		"\x02\x02\u0158\u0159\x07t\x02\x02\u0159\u015A\x07g\x02\x02\u015A\u015B" +
		"\x07v\x02\x02\u015B\u015C\x07w\x02\x02\u015C\u015D\x07t\x02\x02\u015D" +
		"\u015E\x07p\x02\x02\u015E*\x03\x02\x02\x02\u015F\u0160\x07e\x02\x02\u0160" +
		"\u0161\x07c\x02\x02\u0161\u0162\x07n\x02\x02\u0162\u0163\x07n\x02\x02" +
		"\u0163,\x03\x02\x02\x02\u0164\u0165\x07/\x02\x02\u0165\u0166\x07@\x02" +
		"\x02\u0166.\x03\x02\x02\x02\u0167\u0168\x07e\x02\x02\u0168\u0169\x07n" +
		"\x02\x02\u0169\u016A\x07c\x02\x02\u016A\u016B\x07u\x02\x02\u016B\u016C" +
		"\x07u\x02\x02\u016C0\x03\x02\x02\x02\u016D\u016E\x07k\x02\x02\u016E\u016F" +
		"\x07p\x02\x02\u016F\u0170\x07v\x02\x02\u0170\u0171\x07g\x02\x02\u0171" +
		"\u0172\x07t\x02\x02\u0172\u0173\x07h\x02\x02\u0173\u0174\x07c\x02\x02" +
		"\u0174\u0175\x07e\x02\x02\u0175\u0176\x07g\x02\x02\u01762\x03\x02\x02" +
		"\x02\u0177\u0178\x07v\x02\x02\u0178\u0179\x07t\x02\x02\u0179\u017A\x07" +
		"w\x02\x02\u017A\u017B\x07g\x02\x02\u017B4\x03\x02\x02\x02\u017C\u017D" +
		"\x07h\x02\x02\u017D\u017E\x07c\x02\x02\u017E\u017F\x07n\x02\x02\u017F" +
		"\u0180\x07u\x02\x02\u0180\u0181\x07g\x02\x02\u01816\x03\x02\x02\x02\u0182" +
		"\u0183\x07v\x02\x02\u0183\u0184\x07{\x02\x02\u0184\u0185\x07r\x02\x02" +
		"\u0185\u0186\x07g\x02\x02\u0186\u0187\x07q\x02\x02\u0187\u0188\x07h\x02" +
		"\x02\u01888\x03\x02\x02\x02\u0189\u018A\x07x\x02\x02\u018A\u018B\x07q" +
		"\x02\x02\u018B\u018C\x07k\x02\x02\u018C\u018D\x07f\x02\x02\u018D:\x03" +
		"\x02\x02\x02\u018E\u018F\x07p\x02\x02\u018F\u0190\x07w\x02\x02\u0190\u0191" +
		"\x07n\x02\x02\u0191\u0192\x07n\x02\x02\u0192<\x03\x02\x02\x02\u0193\u0194" +
		"\x07w\x02\x02\u0194\u0195\x07p\x02\x02\u0195\u0196\x07f\x02\x02\u0196" +
		"\u0197\x07g\x02\x02\u0197\u0198\x07h\x02\x02\u0198\u0199\x07k\x02\x02" +
		"\u0199\u019A\x07p\x02\x02\u019A\u019B\x07g\x02\x02\u019B\u019C\x07f\x02" +
		"\x02\u019C>\x03\x02\x02\x02\u019D\u019E\x07.\x02\x02\u019E@\x03\x02\x02" +
		"\x02\u019F\u01A0\x07=\x02\x02\u01A0B\x03\x02\x02\x02\u01A1\u01A2\x07A" +
		"\x02\x02\u01A2D\x03\x02\x02\x02\u01A3\u01A4\x07<\x02\x02\u01A4F\x03\x02" +
		"\x02\x02\u01A5\u01A6\x07*\x02\x02\u01A6H\x03\x02\x02\x02\u01A7\u01A8\x07" +
		"+\x02\x02\u01A8J\x03\x02\x02\x02\u01A9\u01AA\x07]\x02\x02\u01AAL\x03\x02" +
		"\x02\x02\u01AB\u01AC\x07_\x02\x02\u01ACN\x03\x02\x02\x02\u01AD\u01AE\x06" +
		"'\x02\x02\u01AE\u01AF\x07\x7F\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0" +
		"\u01B1\b'\x03\x02\u01B1P\x03\x02\x02\x02\u01B2\u01B3\x07}\x02\x02\u01B3" +
		"R\x03\x02\x02\x02\u01B4\u01B5\x07\x7F\x02\x02\u01B5T\x03\x02\x02\x02\u01B6" +
		"\u01B7\x07-\x02\x02\u01B7V\x03\x02\x02\x02\u01B8\u01B9\x07-\x02\x02\u01B9" +
		"\u01BA\x07-\x02\x02\u01BAX\x03\x02\x02\x02\u01BB\u01BC\x07/\x02\x02\u01BC" +
		"Z\x03\x02\x02\x02\u01BD\u01BE\x07/\x02\x02\u01BE\u01BF\x07/\x02\x02\u01BF" +
		"\\\x03\x02\x02\x02\u01C0\u01C1\x07,\x02\x02\u01C1^\x03\x02\x02\x02\u01C2" +
		"\u01C3\x071\x02\x02\u01C3`\x03\x02\x02\x02\u01C4\u01C5\x07'\x02\x02\u01C5" +
		"b\x03\x02\x02\x02\u01C6\u01C7\x07,\x02\x02\u01C7\u01C8\x07,\x02\x02\u01C8" +
		"d\x03\x02\x02\x02\u01C9\u01CA\x07(\x02\x02\u01CA\u01CB\x07(\x02\x02\u01CB" +
		"f\x03\x02\x02\x02\u01CC\u01CD\x07~\x02\x02\u01CD\u01CE\x07~\x02\x02\u01CE" +
		"h\x03\x02\x02\x02\u01CF\u01D0\x07#\x02\x02\u01D0j\x03\x02\x02\x02\u01D1" +
		"\u01D2\x07?\x02\x02\u01D2l\x03\x02\x02\x02\u01D3\u01D4\x07-\x02\x02\u01D4" +
		"\u01D5\x07?\x02\x02\u01D5n\x03\x02\x02\x02\u01D6\u01D7\x07/\x02\x02\u01D7" +
		"\u01D8\x07?\x02\x02\u01D8p\x03\x02\x02\x02\u01D9\u01DA\x07,\x02\x02\u01DA" +
		"\u01DB\x07?\x02\x02\u01DBr\x03\x02\x02\x02\u01DC\u01DD\x071\x02\x02\u01DD" +
		"\u01DE\x07?\x02\x02\u01DEt\x03\x02\x02\x02\u01DF\u01E0\x07'\x02\x02\u01E0" +
		"\u01E1\x07?\x02\x02\u01E1v\x03\x02\x02\x02\u01E2\u01E3\x07?\x02\x02\u01E3" +
		"\u01E4\x07?\x02\x02\u01E4x\x03\x02\x02\x02\u01E5\u01E6\x07#\x02\x02\u01E6" +
		"\u01E7\x07?\x02\x02\u01E7z\x03\x02\x02\x02\u01E8\u01E9\x07>\x02\x02\u01E9" +
		"|\x03\x02\x02\x02\u01EA\u01EB\x07>\x02\x02\u01EB\u01EC\x07?\x02\x02\u01EC" +
		"~\x03\x02\x02\x02\u01ED\u01EE\x07@\x02\x02\u01EE\x80\x03\x02\x02\x02\u01EF" +
		"\u01F0\x07@\x02\x02\u01F0\u01F1\x07?\x02\x02\u01F1\x82\x03\x02\x02\x02" +
		"\u01F2\u01F3\x07(\x02\x02\u01F3\x84\x03\x02\x02\x02\u01F4\u01F5\x07~\x02" +
		"\x02\u01F5\x86\x03\x02\x02\x02\u01F6\u01F7\x07`\x02\x02\u01F7\x88\x03" +
		"\x02\x02\x02\u01F8\u01F9\x07\x80\x02\x02\u01F9\x8A\x03\x02\x02\x02\u01FA" +
		"\u01FB\x07>\x02\x02\u01FB\u01FC\x07>\x02\x02\u01FC\x8C\x03\x02\x02\x02" +
		"\u01FD\u01FE\x07@\x02\x02\u01FE\u01FF\x07@\x02\x02\u01FF\x8E\x03\x02\x02" +
		"\x02\u0200\u0201\x07@\x02\x02\u0201\u0202\x07@\x02\x02\u0202\u0203\x07" +
		"@\x02\x02\u0203\x90\x03\x02\x02\x02\u0204\u0205\x070\x02\x02\u0205\x92" +
		"\x03\x02\x02\x02\u0206\u020B\x05\xB1X\x02\u0207\u020A\x05\xB1X\x02\u0208" +
		"\u020A\x05\xB5Z\x02\u0209\u0207\x03\x02\x02\x02\u0209\u0208\x03\x02\x02" +
		"\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B\u020C" +
		"\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u020C\x94\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u0213" +
		"\x05\xB7[\x02\u020F\u0213\x05\xBB]\x02\u0210\u0213\x05\xBD^\x02\u0211" +
		"\u0213\x05\xB9\\\x02\u0212\u020E\x03\x02\x02\x02\u0212\u020F\x03\x02\x02" +
		"\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0211\x03\x02\x02\x02\u0213\x96" +
		"\x03\x02\x02\x02\u0214\u0216\x07)\x02\x02\u0215\u0217\x05\xE5r\x02\u0216" +
		"\u0215\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02" +
		"\x02\x02\u0218\u0219\x07)\x02\x02\u0219\x98\x03\x02\x02\x02\u021A\u021C" +
		"\x07$\x02\x02\u021B\u021D\x05\xE9t\x02\u021C\u021B\x03\x02\x02\x02\u021C" +
		"\u021D\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u021F\x07$\x02" +
		"\x02\u021F\x9A\x03\x02\x02\x02\u0220\u0221\x05\xC7c\x02\u0221\x9C\x03" +
		"\x02\x02\x02\u0222\u0224\t\x03\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224" +
		"\u0225\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02" +
		"\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0228\bN\x04\x02\u0228\x9E" +
		"\x03\x02\x02\x02\u0229\u022A\t\x02\x02\x02\u022A\u022B\x03\x02\x02\x02" +
		"\u022B\u022C\bO\x04\x02\u022C\xA0\x03\x02\x02\x02\u022D\u022E\x07h\x02" +
		"\x02\u022E\u022F\x07)\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0231" +
		"\bP\x05\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\bP\x06\x02\u0233\xA2" +
		"\x03\x02\x02\x02\u0234\u0235\x07h\x02\x02\u0235\u0236\x07$\x02\x02\u0236" +
		"\u0237\x03\x02\x02\x02\u0237\u0238\bQ\x07\x02\u0238\u0239\x03\x02\x02" +
		"\x02\u0239\u023A\bQ\b\x02\u023A\xA4\x03\x02\x02\x02\u023B\u023C\x06R\x03" +
		"\x02\u023C\u023D\x07}\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F" +
		"\bR\t\x02\u023F\u0240\bR\n\x02\u0240\xA6\x03\x02\x02\x02\u0241\u0242\x07" +
		")\x02\x02\u0242\u0243\bS\v\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245" +
		"\bS\x03\x02\u0245\xA8\x03\x02\x02\x02\u0246\u0247\x05\xDDn\x02\u0247\xAA" +
		"\x03\x02\x02\x02\u0248\u0249\x06U\x04\x02\u0249\u024A\x07}\x02\x02\u024A" +
		"\u024B\x03\x02\x02\x02\u024B\u024C\bU\t\x02\u024C\u024D\bU\n\x02\u024D" +
		"\xAC\x03\x02\x02\x02\u024E\u024F\x07$\x02\x02\u024F\u0250\bV\f\x02\u0250" +
		"\u0251\x03\x02\x02\x02\u0251\u0252\bV\x03\x02\u0252\xAE\x03\x02\x02\x02" +
		"\u0253\u0254\x05\xE1p\x02\u0254\xB0\x03\x02\x02\x02\u0255\u0256\x05\xB3" +
		"Y\x02\u0256\xB2\x03\x02\x02\x02\u0257\u0258\t\x04\x02\x02\u0258\xB4\x03" +
		"\x02\x02\x02\u0259\u025A\t\x05\x02\x02\u025A\xB6\x03\x02\x02\x02\u025B" +
		"\u025D\x05\xB5Z\x02\u025C\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02" +
		"\x02\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\xB8" +
		"\x03\x02\x02\x02\u0260\u0261\x072\x02\x02\u0261\u0263\t\x06\x02\x02\u0262" +
		"\u0264\x05\xC1`\x02\u0263\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02" +
		"\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\xBA" +
		"\x03\x02\x02\x02\u0267\u0268\x072\x02\x02\u0268\u026A\t\x07\x02\x02\u0269" +
		"\u026B\x05\xC3a\x02\u026A\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02" +
		"\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\xBC" +
		"\x03\x02\x02\x02\u026E\u026F\x072\x02\x02\u026F\u0271\t\b\x02\x02\u0270" +
		"\u0272\x05\xC5b\x02\u0271\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02" +
		"\x02\u0273\u0271\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\xBE" +
		"\x03\x02\x02\x02\u0275\u0276\t\t\x02\x02\u0276\xC0\x03\x02\x02\x02\u0277" +
		"\u0278\t\n\x02\x02\u0278\xC2\x03\x02\x02\x02\u0279\u027A\t\v\x02\x02\u027A" +
		"\xC4\x03\x02\x02\x02\u027B\u027C\t\f\x02\x02\u027C\xC6\x03\x02\x02\x02" +
		"\u027D\u027F\x05\xC9d\x02\u027E\u0280\x05\xCBe\x02\u027F\u027E\x03\x02" +
		"\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0285\x03\x02\x02\x02\u0281" +
		"\u0282\x05\xCDf\x02\u0282\u0283\x05\xCBe\x02\u0283\u0285\x03\x02\x02\x02" +
		"\u0284\u027D\x03\x02\x02\x02\u0284\u0281\x03\x02\x02\x02\u0285\xC8\x03" +
		"\x02\x02\x02\u0286\u0288\x05\xCDf\x02\u0287\u0286\x03\x02\x02\x02\u0287" +
		"\u0288\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x070\x02" +
		"\x02\u028A\u028F\x05\xCDf\x02\u028B\u028C\x05\xCDf\x02\u028C\u028D\x07" +
		"0\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E\u0287\x03\x02\x02\x02\u028E" +
		"\u028B\x03\x02\x02\x02\u028F\xCA\x03\x02\x02\x02\u0290\u0292\t\r\x02\x02" +
		"\u0291\u0293\x05\xCFg\x02\u0292\u0291\x03\x02\x02\x02\u0292\u0293\x03" +
		"\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0295\x05\xCDf\x02\u0295" +
		"\xCC\x03\x02\x02\x02\u0296\u0298\x05\xB5Z\x02\u0297\u0296\x03\x02\x02" +
		"\x02\u0298\u0299\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299\u029A" +
		"\x03\x02\x02\x02\u029A\xCE\x03\x02\x02\x02\u029B\u029C\t\x0E\x02\x02\u029C" +
		"\xD0\x03\x02\x02\x02\u029D\u029F\x05\xD3i\x02\u029E\u029D\x03\x02\x02" +
		"\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1" +
		"\x03\x02\x02\x02\u02A1\xD2\x03\x02\x02\x02\u02A2\u02A5\n\x0F\x02\x02\u02A3" +
		"\u02A5\x05\xD5j\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A3\x03\x02\x02" +
		"\x02\u02A5\xD4\x03\x02\x02\x02\u02A6\u02AA\x05\xD7k\x02\u02A7\u02AA\x05" +
		"\xD9l\x02\u02A8\u02AA\x05\xDBm\x02\u02A9\u02A6\x03\x02\x02\x02\u02A9\u02A7" +
		"\x03\x02\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02AA\xD6\x03\x02\x02\x02" +
		"\u02AB\u02AC\x07^\x02\x02\u02AC\u02AD\t\x10\x02\x02\u02AD\xD8\x03\x02" +
		"\x02\x02\u02AE\u02AF\x07^\x02\x02\u02AF\u02B1\x05\xC3a\x02\u02B0\u02B2" +
		"\x05\xC3a\x02\u02B1\u02B0\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02" +
		"\u02B2\u02B4\x03\x02\x02\x02\u02B3\u02B5\x05\xC3a\x02\u02B4\u02B3\x03" +
		"\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\xDA\x03\x02\x02\x02\u02B6" +
		"\u02B7\x07^\x02\x02\u02B7\u02B8\x07z\x02\x02\u02B8\u02BA\x03\x02\x02\x02" +
		"\u02B9\u02BB\x05\xC5b\x02\u02BA\u02B9\x03\x02\x02\x02\u02BB\u02BC\x03" +
		"\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD" +
		"\xDC\x03\x02\x02\x02\u02BE\u02C0\x05\xDFo\x02\u02BF\u02BE\x03\x02\x02" +
		"\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2" +
		"\x03\x02\x02\x02\u02C2\xDE\x03\x02\x02\x02\u02C3\u02C6\n\x11\x02\x02\u02C4" +
		"\u02C6\x05\xD5j\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C4\x03\x02\x02" +
		"\x02\u02C6\xE0\x03\x02\x02\x02\u02C7\u02C9\x05\xE3q\x02\u02C8\u02C7\x03" +
		"\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02C8\x03\x02\x02\x02\u02CA" +
		"\u02CB\x03\x02\x02\x02\u02CB\xE2\x03\x02\x02\x02\u02CC\u02CF\n\x12\x02" +
		"\x02\u02CD\u02CF\x05\xD5j\x02\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CD" +
		"\x03\x02\x02\x02\u02CF\xE4\x03\x02\x02\x02\u02D0\u02D2\x05\xE7s\x02\u02D1" +
		"\u02D0\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D1\x03\x02" +
		"\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4\xE6\x03\x02\x02\x02\u02D5\u02D8" +
		"\n\x0F\x02\x02\u02D6\u02D8\x05\xD5j\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7" +
		"\u02D6\x03\x02\x02\x02\u02D8\xE8\x03\x02\x02\x02\u02D9\u02DB\x05\xEBu" +
		"\x02\u02DA\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DA" +
		"\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\xEA\x03\x02\x02\x02" +
		"\u02DE\u02E1\n\x13\x02\x02\u02DF\u02E1\x05\xD5j\x02\u02E0\u02DE\x03\x02" +
		"\x02\x02\u02E0\u02DF\x03\x02\x02\x02\u02E1\xEC\x03\x02\x02\x02%\x02\x03" +
		"\x04\xF3\u0101\u0209\u020B\u0212\u0216\u021C\u0225\u025E\u0265\u026C\u0273" +
		"\u027F\u0284\u0287\u028E\u0292\u0299\u02A0\u02A4\u02A9\u02B1\u02B4\u02BC" +
		"\u02C1\u02C5\u02CA\u02CE\u02D3\u02D7\u02DC\u02E0\r\x02\x04\x02\x06\x02" +
		"\x02\x02\x03\x02\x03P\x02\x07\x03\x02\x03Q\x03\x07\x04\x02\t\x03\x02\x07" +
		"\x02\x02\x03S\x04\x03V\x05";
	public static readonly _serializedATN: string = Utils.join(
		[KipperLexer._serializedATNSegment0, KipperLexer._serializedATNSegment1],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KipperLexer.__ATN) {
			KipperLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KipperLexer._serializedATN));
		}

		return KipperLexer.__ATN;
	}
}
