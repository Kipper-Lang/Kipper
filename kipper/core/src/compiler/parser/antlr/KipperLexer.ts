// Generated from ./Kipper.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class KipperLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly Const = 6;
	public static readonly Var = 7;
	public static readonly As = 8;
	public static readonly Switch = 9;
	public static readonly Case = 10;
	public static readonly Default = 11;
	public static readonly Break = 12;
	public static readonly Continue = 13;
	public static readonly Do = 14;
	public static readonly While = 15;
	public static readonly If = 16;
	public static readonly Else = 17;
	public static readonly For = 18;
	public static readonly Enum = 19;
	public static readonly DefFunc = 20;
	public static readonly Return = 21;
	public static readonly CallFunc = 22;
	public static readonly True = 23;
	public static readonly False = 24;
	public static readonly Struct = 25;
	public static readonly Typeof = 26;
	public static readonly LeftParen = 27;
	public static readonly RightParen = 28;
	public static readonly LeftBracket = 29;
	public static readonly RightBracket = 30;
	public static readonly LeftBrace = 31;
	public static readonly RightBrace = 32;
	public static readonly Plus = 33;
	public static readonly PlusPlus = 34;
	public static readonly Minus = 35;
	public static readonly MinusMinus = 36;
	public static readonly Star = 37;
	public static readonly Div = 38;
	public static readonly Mod = 39;
	public static readonly PowerTo = 40;
	public static readonly AndAnd = 41;
	public static readonly OrOr = 42;
	public static readonly Not = 43;
	public static readonly Comma = 44;
	public static readonly Assign = 45;
	public static readonly StarAssign = 46;
	public static readonly DivAssign = 47;
	public static readonly ModAssign = 48;
	public static readonly PlusAssign = 49;
	public static readonly MinusAssign = 50;
	public static readonly Equal = 51;
	public static readonly NotEqual = 52;
	public static readonly Less = 53;
	public static readonly LessEqual = 54;
	public static readonly Greater = 55;
	public static readonly GreaterEqual = 56;
	public static readonly Dot = 57;
	public static readonly Identifier = 58;
	public static readonly IntegerConstant = 59;
	public static readonly FloatingConstant = 60;
	public static readonly DigitSequence = 61;
	public static readonly CharacterConstant = 62;
	public static readonly FStringLiteral = 63;
	public static readonly StringLiteral = 64;
	public static readonly WS = 65;
	public static readonly Whitespace = 66;
	public static readonly BlockComment = 67;
	public static readonly Newline = 68;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "Const", "Var", "As", "Switch", 
		"Case", "Default", "Break", "Continue", "Do", "While", "If", "Else", "For", 
		"Enum", "DefFunc", "Return", "CallFunc", "True", "False", "Struct", "Typeof", 
		"LeftParen", "RightParen", "LeftBracket", "RightBracket", "LeftBrace", 
		"RightBrace", "Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", 
		"Mod", "PowerTo", "AndAnd", "OrOr", "Not", "Comma", "Assign", "StarAssign", 
		"DivAssign", "ModAssign", "PlusAssign", "MinusAssign", "Equal", "NotEqual", 
		"Less", "LessEqual", "Greater", "GreaterEqual", "Dot", "Identifier", "ExtensionTaskBlock", 
		"IdentifierNondigit", "Nondigit", "Digit", "UniversalCharacterName", "HexQuad", 
		"IntegerConstant", "BinaryConstant", "DecimalConstant", "OctalConstant", 
		"HexadecimalConstant", "HexadecimalPrefix", "NonzeroDigit", "OctalDigit", 
		"HexadecimalDigit", "IntegerSuffix", "UnsignedSuffix", "LongSuffix", "LongLongSuffix", 
		"FloatingConstant", "DecimalFloatingConstant", "HexadecimalFloatingConstant", 
		"FractionalConstant", "ExponentPart", "Sign", "DigitSequence", "HexadecimalFractionalConstant", 
		"BinaryExponentPart", "HexadecimalDigitSequence", "FloatingSuffix", "CharacterConstant", 
		"CCharSequence", "CChar", "EscapeSequence", "SimpleEscapeSequence", "OctalEscapeSequence", 
		"HexadecimalEscapeSequence", "FStringLiteral", "StringLiteral", "SCharSequence", 
		"SChar", "WS", "Whitespace", "BlockComment", "Newline",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'->'", "';'", "'?'", "':'", "'...'", "'const'", "'var'", "'as'", 
		"'switch'", "'case'", "'default'", "'break'", "'continue'", "'do'", "'while'", 
		"'if'", "'else'", "'for'", "'enum'", "'def'", "'return'", "'call'", "'true'", 
		"'false'", "'struct'", "'typeof'", "'('", "')'", "'['", "']'", "'{'", 
		"'}'", "'+'", "'++'", "'-'", "'--'", "'*'", "'/'", "'%'", "'**'", "'&&'", 
		"'||'", "'!'", "','", "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'=='", 
		"'!='", "'<'", "'<='", "'>'", "'>='", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "Const", 
		"Var", "As", "Switch", "Case", "Default", "Break", "Continue", "Do", "While", 
		"If", "Else", "For", "Enum", "DefFunc", "Return", "CallFunc", "True", 
		"False", "Struct", "Typeof", "LeftParen", "RightParen", "LeftBracket", 
		"RightBracket", "LeftBrace", "RightBrace", "Plus", "PlusPlus", "Minus", 
		"MinusMinus", "Star", "Div", "Mod", "PowerTo", "AndAnd", "OrOr", "Not", 
		"Comma", "Assign", "StarAssign", "DivAssign", "ModAssign", "PlusAssign", 
		"MinusAssign", "Equal", "NotEqual", "Less", "LessEqual", "Greater", "GreaterEqual", 
		"Dot", "Identifier", "IntegerConstant", "FloatingConstant", "DigitSequence", 
		"CharacterConstant", "FStringLiteral", "StringLiteral", "WS", "Whitespace", 
		"BlockComment", "Newline",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KipperLexer._LITERAL_NAMES, KipperLexer._SYMBOLIC_NAMES, []);

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
	public get grammarFileName(): string { return "Kipper.g4"; }

	// @Override
	public get ruleNames(): string[] { return KipperLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return KipperLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return KipperLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return KipperLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02F\u02BD\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03$\x03" +
		"$\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03*\x03" +
		"*\x03*\x03+\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x03" +
		"0\x030\x030\x031\x031\x031\x032\x032\x032\x033\x033\x033\x034\x034\x03" +
		"4\x035\x035\x035\x036\x036\x037\x037\x037\x038\x038\x039\x039\x039\x03" +
		":\x03:\x03;\x03;\x03;\x07;\u01A1\n;\f;\x0E;\u01A4\v;\x03<\x03<\x07<\u01A8" +
		"\n<\f<\x0E<\u01AB\v<\x03<\x03<\x03=\x03=\x05=\u01B1\n=\x03>\x03>\x03?" +
		"\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u01C1\n@" +
		"\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x05B\u01CA\nB\x03B\x03B\x05B\u01CE" +
		"\nB\x03B\x03B\x05B\u01D2\nB\x03B\x05B\u01D5\nB\x03C\x03C\x03C\x06C\u01DA" +
		"\nC\rC\x0EC\u01DB\x03D\x03D\x07D\u01E0\nD\fD\x0ED\u01E3\vD\x03E\x03E\x07" +
		"E\u01E7\nE\fE\x0EE\u01EA\vE\x03F\x03F\x06F\u01EE\nF\rF\x0EF\u01EF\x03" +
		"G\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x05K\u01FD\nK\x03" +
		"K\x03K\x03K\x03K\x03K\x05K\u0204\nK\x03K\x03K\x05K\u0208\nK\x05K\u020A" +
		"\nK\x03L\x03L\x03M\x03M\x03N\x03N\x03N\x03N\x05N\u0214\nN\x03O\x03O\x05" +
		"O\u0218\nO\x03P\x03P\x05P\u021C\nP\x03P\x05P\u021F\nP\x03P\x03P\x03P\x05" +
		"P\u0224\nP\x05P\u0226\nP\x03Q\x03Q\x03Q\x05Q\u022B\nQ\x03Q\x03Q\x05Q\u022F" +
		"\nQ\x03R\x05R\u0232\nR\x03R\x03R\x03R\x03R\x03R\x05R\u0239\nR\x03S\x03" +
		"S\x05S\u023D\nS\x03S\x03S\x03T\x03T\x03U\x06U\u0244\nU\rU\x0EU\u0245\x03" +
		"V\x05V\u0249\nV\x03V\x03V\x03V\x03V\x03V\x05V\u0250\nV\x03W\x03W\x05W" +
		"\u0254\nW\x03W\x03W\x03X\x06X\u0259\nX\rX\x0EX\u025A\x03Y\x03Y\x03Z\x03" +
		"Z\x03Z\x03Z\x03[\x06[\u0264\n[\r[\x0E[\u0265\x03\\\x03\\\x05\\\u026A\n" +
		"\\\x03]\x03]\x03]\x03]\x05]\u0270\n]\x03^\x03^\x03^\x03_\x03_\x03_\x05" +
		"_\u0278\n_\x03_\x05_\u027B\n_\x03`\x03`\x03`\x03`\x06`\u0281\n`\r`\x0E" +
		"`\u0282\x03a\x03a\x03a\x05a\u0288\na\x03a\x03a\x03b\x03b\x05b\u028E\n" +
		"b\x03b\x03b\x03c\x06c\u0293\nc\rc\x0Ec\u0294\x03d\x03d\x03d\x03d\x03d" +
		"\x03d\x03d\x05d\u029E\nd\x03e\x03e\x03f\x06f\u02A3\nf\rf\x0Ef\u02A4\x03" +
		"g\x03g\x03g\x03g\x07g\u02AB\ng\fg\x0Eg\u02AE\vg\x03g\x03g\x03g\x03g\x03" +
		"g\x03h\x03h\x05h\u02B7\nh\x03h\x05h\u02BA\nh\x03h\x03h\x03\u02AC\x02\x02" +
		"i\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
		"\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
		"\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16" +
		"+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E" +
		";\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02" +
		")Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x02" +
		"5i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02\x02y\x02\x02{\x02\x02" +
		"}\x02\x02\x7F\x02\x02\x81\x02\x02\x83\x02=\x85\x02\x02\x87\x02\x02\x89" +
		"\x02\x02\x8B\x02\x02\x8D\x02\x02\x8F\x02\x02\x91\x02\x02\x93\x02\x02\x95" +
		"\x02\x02\x97\x02\x02\x99\x02\x02\x9B\x02\x02\x9D\x02>\x9F\x02\x02\xA1" +
		"\x02\x02\xA3\x02\x02\xA5\x02\x02\xA7\x02\x02\xA9\x02?\xAB\x02\x02\xAD" +
		"\x02\x02\xAF\x02\x02\xB1\x02\x02\xB3\x02@\xB5\x02\x02\xB7\x02\x02\xB9" +
		"\x02\x02\xBB\x02\x02\xBD\x02\x02\xBF\x02\x02\xC1\x02A\xC3\x02B\xC5\x02" +
		"\x02\xC7\x02\x02\xC9\x02C\xCB\x02D\xCD\x02E\xCF\x02F\x03\x02\x15\x03\x02" +
		"\x02\x00\x05\x02C\\aac|\x03\x022;\x04\x02DDdd\x03\x0223\x04\x02ZZzz\x03" +
		"\x023;\x03\x0229\x05\x022;CHch\x04\x02WWww\x04\x02NNnn\x04\x02GGgg\x04" +
		"\x02--//\x04\x02RRrr\x06\x02HHNNhhnn\x06\x02\f\f\x0F\x0F))^^\f\x02$$)" +
		")AA^^cdhhppttvvxx\x06\x02\f\f\x0F\x0F$$^^\x04\x02\v\v\"\"\x02\u02D0\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02" +
		"\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02" +
		"\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03" +
		"\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02" +
		"\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02" +
		"C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02" +
		"\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02" +
		"\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03" +
		"\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02" +
		"\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02" +
		"e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02" +
		"\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02" +
		"\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02" +
		"\x9D\x03\x02\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xB3\x03\x02\x02\x02\x02" +
		"\xC1\x03\x02\x02\x02\x02\xC3\x03\x02\x02\x02\x02\xC9\x03\x02\x02\x02\x02" +
		"\xCB\x03\x02\x02\x02\x02\xCD\x03\x02\x02\x02\x02\xCF\x03\x02\x02\x02\x03" +
		"\xD1\x03\x02\x02\x02\x05\xD4\x03\x02\x02\x02\x07\xD6\x03\x02\x02\x02\t" +
		"\xD8\x03\x02\x02\x02\v\xDA\x03\x02\x02\x02\r\xDE\x03\x02\x02\x02\x0F\xE4" +
		"\x03\x02\x02\x02\x11\xE8\x03\x02\x02\x02\x13\xEB\x03\x02\x02\x02\x15\xF2" +
		"\x03\x02\x02\x02\x17\xF7\x03\x02\x02\x02\x19\xFF\x03\x02\x02\x02\x1B\u0105" +
		"\x03\x02\x02\x02\x1D\u010E\x03\x02\x02\x02\x1F\u0111\x03\x02\x02\x02!" +
		"\u0117\x03\x02\x02\x02#\u011A\x03\x02\x02\x02%\u011F\x03\x02\x02\x02\'" +
		"\u0123\x03\x02\x02\x02)\u0128\x03\x02\x02\x02+\u012C\x03\x02\x02\x02-" +
		"\u0133\x03\x02\x02\x02/\u0138\x03\x02\x02\x021\u013D\x03\x02\x02\x023" +
		"\u0143\x03\x02\x02\x025\u014A\x03\x02\x02\x027\u0151\x03\x02\x02\x029" +
		"\u0153\x03\x02\x02\x02;\u0155\x03\x02\x02\x02=\u0157\x03\x02\x02\x02?" +
		"\u0159\x03\x02\x02\x02A\u015B\x03\x02\x02\x02C\u015D\x03\x02\x02\x02E" +
		"\u015F\x03\x02\x02\x02G\u0162\x03\x02\x02\x02I\u0164\x03\x02\x02\x02K" +
		"\u0167\x03\x02\x02\x02M\u0169\x03\x02\x02\x02O\u016B\x03\x02\x02\x02Q" +
		"\u016D\x03\x02\x02\x02S\u0170\x03\x02\x02\x02U\u0173\x03\x02\x02\x02W" +
		"\u0176\x03\x02\x02\x02Y\u0178\x03\x02\x02\x02[\u017A\x03\x02\x02\x02]" +
		"\u017C\x03\x02\x02\x02_\u017F\x03\x02\x02\x02a\u0182\x03\x02\x02\x02c" +
		"\u0185\x03\x02\x02\x02e\u0188\x03\x02\x02\x02g\u018B\x03\x02\x02\x02i" +
		"\u018E\x03\x02\x02\x02k\u0191\x03\x02\x02\x02m\u0193\x03\x02\x02\x02o" +
		"\u0196\x03\x02\x02\x02q\u0198\x03\x02\x02\x02s\u019B\x03\x02\x02\x02u" +
		"\u019D\x03\x02\x02\x02w\u01A5\x03\x02\x02\x02y\u01B0\x03\x02\x02\x02{" +
		"\u01B2\x03\x02\x02\x02}\u01B4\x03\x02\x02\x02\x7F\u01C0\x03\x02\x02\x02" +
		"\x81\u01C2\x03\x02\x02\x02\x83\u01D4\x03\x02\x02\x02\x85\u01D6\x03\x02" +
		"\x02\x02\x87\u01DD\x03\x02\x02\x02\x89\u01E4\x03\x02\x02\x02\x8B\u01EB" +
		"\x03\x02\x02\x02\x8D\u01F1\x03\x02\x02\x02\x8F\u01F4\x03\x02\x02\x02\x91" +
		"\u01F6\x03\x02\x02\x02\x93\u01F8\x03\x02\x02\x02\x95\u0209\x03\x02\x02" +
		"\x02\x97\u020B\x03\x02\x02\x02\x99\u020D\x03\x02\x02\x02\x9B\u0213\x03" +
		"\x02\x02\x02\x9D\u0217\x03\x02\x02\x02\x9F\u0225\x03\x02\x02\x02\xA1\u0227" +
		"\x03\x02\x02\x02\xA3\u0238\x03\x02\x02\x02\xA5\u023A\x03\x02\x02\x02\xA7" +
		"\u0240\x03\x02\x02\x02\xA9\u0243\x03\x02\x02\x02\xAB\u024F\x03\x02\x02" +
		"\x02\xAD\u0251\x03\x02\x02\x02\xAF\u0258\x03\x02\x02\x02\xB1\u025C\x03" +
		"\x02\x02\x02\xB3\u025E\x03\x02\x02\x02\xB5\u0263\x03\x02\x02\x02\xB7\u0269" +
		"\x03\x02\x02\x02\xB9\u026F\x03\x02\x02\x02\xBB\u0271\x03\x02\x02\x02\xBD" +
		"\u0274\x03\x02\x02\x02\xBF\u027C\x03\x02\x02\x02\xC1\u0284\x03\x02\x02" +
		"\x02\xC3\u028B\x03\x02\x02\x02\xC5\u0292\x03\x02\x02\x02\xC7\u029D\x03" +
		"\x02\x02\x02\xC9\u029F\x03\x02\x02\x02\xCB\u02A2\x03\x02\x02\x02\xCD\u02A6" +
		"\x03\x02\x02\x02\xCF\u02B9\x03\x02\x02\x02\xD1\xD2\x07/\x02\x02\xD2\xD3" +
		"\x07@\x02\x02\xD3\x04\x03\x02\x02\x02\xD4\xD5\x07=\x02\x02\xD5\x06\x03" +
		"\x02\x02\x02\xD6\xD7\x07A\x02\x02\xD7\b\x03\x02\x02\x02\xD8\xD9\x07<\x02" +
		"\x02\xD9\n\x03\x02\x02\x02\xDA\xDB\x070\x02\x02\xDB\xDC\x070\x02\x02\xDC" +
		"\xDD\x070\x02\x02\xDD\f\x03\x02\x02\x02\xDE\xDF\x07e\x02\x02\xDF\xE0\x07" +
		"q\x02\x02\xE0\xE1\x07p\x02\x02\xE1\xE2\x07u\x02\x02\xE2\xE3\x07v\x02\x02" +
		"\xE3\x0E\x03\x02\x02\x02\xE4\xE5\x07x\x02\x02\xE5\xE6\x07c\x02\x02\xE6" +
		"\xE7\x07t\x02\x02\xE7\x10\x03\x02\x02\x02\xE8\xE9\x07c\x02\x02\xE9\xEA" +
		"\x07u\x02\x02\xEA\x12\x03\x02\x02\x02\xEB\xEC\x07u\x02\x02\xEC\xED\x07" +
		"y\x02\x02\xED\xEE\x07k\x02\x02\xEE\xEF\x07v\x02\x02\xEF\xF0\x07e\x02\x02" +
		"\xF0\xF1\x07j\x02\x02\xF1\x14\x03\x02\x02\x02\xF2\xF3\x07e\x02\x02\xF3" +
		"\xF4\x07c\x02\x02\xF4\xF5\x07u\x02\x02\xF5\xF6\x07g\x02\x02\xF6\x16\x03" +
		"\x02\x02\x02\xF7\xF8\x07f\x02\x02\xF8\xF9\x07g\x02\x02\xF9\xFA\x07h\x02" +
		"\x02\xFA\xFB\x07c\x02\x02\xFB\xFC\x07w\x02\x02\xFC\xFD\x07n\x02\x02\xFD" +
		"\xFE\x07v\x02\x02\xFE\x18\x03\x02\x02\x02\xFF\u0100\x07d\x02\x02\u0100" +
		"\u0101\x07t\x02\x02\u0101\u0102\x07g\x02\x02\u0102\u0103\x07c\x02\x02" +
		"\u0103\u0104\x07m\x02\x02\u0104\x1A\x03\x02\x02\x02\u0105\u0106\x07e\x02" +
		"\x02\u0106\u0107\x07q\x02\x02\u0107\u0108\x07p\x02\x02\u0108\u0109\x07" +
		"v\x02\x02\u0109\u010A\x07k\x02\x02\u010A\u010B\x07p\x02\x02\u010B\u010C" +
		"\x07w\x02\x02\u010C\u010D\x07g\x02\x02\u010D\x1C\x03\x02\x02\x02\u010E" +
		"\u010F\x07f\x02\x02\u010F\u0110\x07q\x02\x02\u0110\x1E\x03\x02\x02\x02" +
		"\u0111\u0112\x07y\x02\x02\u0112\u0113\x07j\x02\x02\u0113\u0114\x07k\x02" +
		"\x02\u0114\u0115\x07n\x02\x02\u0115\u0116\x07g\x02\x02\u0116 \x03\x02" +
		"\x02\x02\u0117\u0118\x07k\x02\x02\u0118\u0119\x07h\x02\x02\u0119\"\x03" +
		"\x02\x02\x02\u011A\u011B\x07g\x02\x02\u011B\u011C\x07n\x02\x02\u011C\u011D" +
		"\x07u\x02\x02\u011D\u011E\x07g\x02\x02\u011E$\x03\x02\x02\x02\u011F\u0120" +
		"\x07h\x02\x02\u0120\u0121\x07q\x02\x02\u0121\u0122\x07t\x02\x02\u0122" +
		"&\x03\x02\x02\x02\u0123\u0124\x07g\x02\x02\u0124\u0125\x07p\x02\x02\u0125" +
		"\u0126\x07w\x02\x02\u0126\u0127\x07o\x02\x02\u0127(\x03\x02\x02\x02\u0128" +
		"\u0129\x07f\x02\x02\u0129\u012A\x07g\x02\x02\u012A\u012B\x07h\x02\x02" +
		"\u012B*\x03\x02\x02\x02\u012C\u012D\x07t\x02\x02\u012D\u012E\x07g\x02" +
		"\x02\u012E\u012F\x07v\x02\x02\u012F\u0130\x07w\x02\x02\u0130\u0131\x07" +
		"t\x02\x02\u0131\u0132\x07p\x02\x02\u0132,\x03\x02\x02\x02\u0133\u0134" +
		"\x07e\x02\x02\u0134\u0135\x07c\x02\x02\u0135\u0136\x07n\x02\x02\u0136" +
		"\u0137\x07n\x02\x02\u0137.\x03\x02\x02\x02\u0138\u0139\x07v\x02\x02\u0139" +
		"\u013A\x07t\x02\x02\u013A\u013B\x07w\x02\x02\u013B\u013C\x07g\x02\x02" +
		"\u013C0\x03\x02\x02\x02\u013D\u013E\x07h\x02\x02\u013E\u013F\x07c\x02" +
		"\x02\u013F\u0140\x07n\x02\x02\u0140\u0141\x07u\x02\x02\u0141\u0142\x07" +
		"g\x02\x02\u01422\x03\x02\x02\x02\u0143\u0144\x07u\x02\x02\u0144\u0145" +
		"\x07v\x02\x02\u0145\u0146\x07t\x02\x02\u0146\u0147\x07w\x02\x02\u0147" +
		"\u0148\x07e\x02\x02\u0148\u0149\x07v\x02\x02\u01494\x03\x02\x02\x02\u014A" +
		"\u014B\x07v\x02\x02\u014B\u014C\x07{\x02\x02\u014C\u014D\x07r\x02\x02" +
		"\u014D\u014E\x07g\x02\x02\u014E\u014F\x07q\x02\x02\u014F\u0150\x07h\x02" +
		"\x02\u01506\x03\x02\x02\x02\u0151\u0152\x07*\x02\x02\u01528\x03\x02\x02" +
		"\x02\u0153\u0154\x07+\x02\x02\u0154:\x03\x02\x02\x02\u0155\u0156\x07]" +
		"\x02\x02\u0156<\x03\x02\x02\x02\u0157\u0158\x07_\x02\x02\u0158>\x03\x02" +
		"\x02\x02\u0159\u015A\x07}\x02\x02\u015A@\x03\x02\x02\x02\u015B\u015C\x07" +
		"\x7F\x02\x02\u015CB\x03\x02\x02\x02\u015D\u015E\x07-\x02\x02\u015ED\x03" +
		"\x02\x02\x02\u015F\u0160\x07-\x02\x02\u0160\u0161\x07-\x02\x02\u0161F" +
		"\x03\x02\x02\x02\u0162\u0163\x07/\x02\x02\u0163H\x03\x02\x02\x02\u0164" +
		"\u0165\x07/\x02\x02\u0165\u0166\x07/\x02\x02\u0166J\x03\x02\x02\x02\u0167" +
		"\u0168\x07,\x02\x02\u0168L\x03\x02\x02\x02\u0169\u016A\x071\x02\x02\u016A" +
		"N\x03\x02\x02\x02\u016B\u016C\x07\'\x02\x02\u016CP\x03\x02\x02\x02\u016D" +
		"\u016E\x07,\x02\x02\u016E\u016F\x07,\x02\x02\u016FR\x03\x02\x02\x02\u0170" +
		"\u0171\x07(\x02\x02\u0171\u0172\x07(\x02\x02\u0172T\x03\x02\x02\x02\u0173" +
		"\u0174\x07~\x02\x02\u0174\u0175\x07~\x02\x02\u0175V\x03\x02\x02\x02\u0176" +
		"\u0177\x07#\x02\x02\u0177X\x03\x02\x02\x02\u0178\u0179\x07.\x02\x02\u0179" +
		"Z\x03\x02\x02\x02\u017A\u017B\x07?\x02\x02\u017B\\\x03\x02\x02\x02\u017C" +
		"\u017D\x07,\x02\x02\u017D\u017E\x07?\x02\x02\u017E^\x03\x02\x02\x02\u017F" +
		"\u0180\x071\x02\x02\u0180\u0181\x07?\x02\x02\u0181`\x03\x02\x02\x02\u0182" +
		"\u0183\x07\'\x02\x02\u0183\u0184\x07?\x02\x02\u0184b\x03\x02\x02\x02\u0185" +
		"\u0186\x07-\x02\x02\u0186\u0187\x07?\x02\x02\u0187d\x03\x02\x02\x02\u0188" +
		"\u0189\x07/\x02\x02\u0189\u018A\x07?\x02\x02\u018Af\x03\x02\x02\x02\u018B" +
		"\u018C\x07?\x02\x02\u018C\u018D\x07?\x02\x02\u018Dh\x03\x02\x02\x02\u018E" +
		"\u018F\x07#\x02\x02\u018F\u0190\x07?\x02\x02\u0190j\x03\x02\x02\x02\u0191" +
		"\u0192\x07>\x02\x02\u0192l\x03\x02\x02\x02\u0193\u0194\x07>\x02\x02\u0194" +
		"\u0195\x07?\x02\x02\u0195n\x03\x02\x02\x02\u0196\u0197\x07@\x02\x02\u0197" +
		"p\x03\x02\x02\x02\u0198\u0199\x07@\x02\x02\u0199\u019A\x07?\x02\x02\u019A" +
		"r\x03\x02\x02\x02\u019B\u019C\x070\x02\x02\u019Ct\x03\x02\x02\x02\u019D" +
		"\u01A2\x05y=\x02\u019E\u01A1\x05y=\x02\u019F\u01A1\x05}?\x02\u01A0\u019E" +
		"\x03\x02\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02" +
		"\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3v\x03\x02" +
		"\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5\u01A9\x07}\x02\x02\u01A6\u01A8" +
		"\t\x02\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02" +
		"\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC\x03" +
		"\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01AD\x07\x7F\x02\x02\u01AD" +
		"x\x03\x02\x02\x02\u01AE\u01B1\x05{>\x02\u01AF\u01B1\x05\x7F@\x02\u01B0" +
		"\u01AE\x03\x02\x02\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1z\x03\x02\x02" +
		"\x02\u01B2\u01B3\t\x03\x02\x02\u01B3|\x03\x02\x02\x02\u01B4\u01B5\t\x04" +
		"\x02\x02\u01B5~\x03\x02\x02\x02\u01B6\u01B7\x07^\x02\x02\u01B7\u01B8\x07" +
		"w\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01C1\x05\x81A\x02\u01BA\u01BB" +
		"\x07^\x02\x02\u01BB\u01BC\x07W\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD" +
		"\u01BE\x05\x81A\x02\u01BE\u01BF\x05\x81A\x02\u01BF\u01C1\x03\x02\x02\x02" +
		"\u01C0\u01B6\x03\x02\x02\x02\u01C0\u01BA\x03\x02\x02\x02\u01C1\x80\x03" +
		"\x02\x02\x02\u01C2\u01C3\x05\x93J\x02\u01C3\u01C4\x05\x93J\x02\u01C4\u01C5" +
		"\x05\x93J\x02\u01C5\u01C6\x05\x93J\x02\u01C6\x82\x03\x02\x02\x02\u01C7" +
		"\u01C9\x05\x87D\x02\u01C8\u01CA\x05\x95K\x02\u01C9\u01C8\x03\x02\x02\x02" +
		"\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01D5\x03\x02\x02\x02\u01CB\u01CD\x05" +
		"\x89E\x02\u01CC\u01CE\x05\x95K\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE" +
		"\x03\x02\x02\x02\u01CE\u01D5\x03\x02\x02\x02\u01CF\u01D1\x05\x8BF\x02" +
		"\u01D0\u01D2\x05\x95K\x02\u01D1\u01D0\x03\x02\x02\x02\u01D1\u01D2\x03" +
		"\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D5\x05\x85C\x02\u01D4" +
		"\u01C7\x03\x02\x02\x02\u01D4\u01CB\x03\x02\x02\x02\u01D4\u01CF\x03\x02" +
		"\x02\x02\u01D4\u01D3\x03\x02\x02\x02\u01D5\x84\x03\x02\x02\x02\u01D6\u01D7" +
		"\x072\x02\x02\u01D7\u01D9\t\x05\x02\x02\u01D8\u01DA\t\x06\x02\x02\u01D9" +
		"\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01D9\x03\x02" +
		"\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\x86\x03\x02\x02\x02\u01DD\u01E1" +
		"\x05\x8FH\x02\u01DE\u01E0\x05}?\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0" +
		"\u01E3\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02" +
		"\x02\x02\u01E2\x88\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01E8" +
		"\x072\x02\x02\u01E5\u01E7\x05\x91I\x02\u01E6\u01E5\x03\x02\x02\x02\u01E7" +
		"\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02" +
		"\x02\x02\u01E9\x8A\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01ED" +
		"\x05\x8DG\x02\u01EC\u01EE\x05\x93J\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE" +
		"\u01EF\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02" +
		"\x02\x02\u01F0\x8C\x03\x02\x02\x02\u01F1\u01F2\x072\x02\x02\u01F2\u01F3" +
		"\t\x07\x02\x02\u01F3\x8E\x03\x02\x02\x02\u01F4\u01F5\t\b\x02\x02\u01F5" +
		"\x90\x03\x02\x02\x02\u01F6\u01F7\t\t\x02\x02\u01F7\x92\x03\x02\x02\x02" +
		"\u01F8\u01F9\t\n\x02\x02\u01F9\x94\x03\x02\x02\x02\u01FA\u01FC\x05\x97" +
		"L\x02\u01FB\u01FD\x05\x99M\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD" +
		"\x03\x02\x02\x02\u01FD\u020A\x03\x02\x02\x02\u01FE\u01FF\x05\x97L\x02" +
		"\u01FF\u0200\x05\x9BN\x02\u0200\u020A\x03\x02\x02\x02\u0201\u0203\x05" +
		"\x99M\x02\u0202\u0204\x05\x97L\x02\u0203\u0202\x03\x02\x02\x02\u0203\u0204" +
		"\x03\x02\x02\x02\u0204\u020A\x03\x02\x02\x02\u0205\u0207\x05\x9BN\x02" +
		"\u0206\u0208\x05\x97L\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03" +
		"\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u01FA\x03\x02\x02\x02\u0209" +
		"\u01FE\x03\x02\x02\x02\u0209\u0201\x03\x02\x02\x02\u0209\u0205\x03\x02" +
		"\x02\x02\u020A\x96\x03\x02\x02\x02\u020B\u020C\t\v\x02\x02\u020C\x98\x03" +
		"\x02\x02\x02\u020D\u020E\t\f\x02\x02\u020E\x9A\x03\x02\x02\x02\u020F\u0210" +
		"\x07n\x02\x02\u0210\u0214\x07n\x02\x02\u0211\u0212\x07N";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0212\u0214\x07N\x02\x02\u0213\u020F\x03\x02\x02\x02\u0213\u0211" +
		"\x03\x02\x02\x02\u0214\x9C\x03\x02\x02\x02\u0215\u0218\x05\x9FP\x02\u0216" +
		"\u0218\x05\xA1Q\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0216\x03\x02\x02" +
		"\x02\u0218\x9E\x03\x02\x02\x02\u0219\u021B\x05\xA3R\x02\u021A\u021C\x05" +
		"\xA5S\x02\u021B\u021A\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C" +
		"\u021E\x03\x02\x02\x02\u021D\u021F\x05\xB1Y\x02\u021E\u021D\x03\x02\x02" +
		"\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0226\x03\x02\x02\x02\u0220\u0221" +
		"\x05\xA9U\x02\u0221\u0223\x05\xA5S\x02\u0222\u0224\x05\xB1Y\x02\u0223" +
		"\u0222\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0226\x03\x02" +
		"\x02\x02\u0225\u0219\x03\x02\x02\x02\u0225\u0220\x03\x02\x02\x02\u0226" +
		"\xA0\x03\x02\x02\x02\u0227\u022A\x05\x8DG\x02\u0228\u022B\x05\xABV\x02" +
		"\u0229\u022B\x05\xAFX\x02\u022A\u0228\x03\x02\x02\x02\u022A\u0229\x03" +
		"\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x05\xADW\x02\u022D" +
		"\u022F\x05\xB1Y\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02" +
		"\x02\u022F\xA2\x03\x02\x02\x02\u0230\u0232\x05\xA9U\x02\u0231\u0230\x03" +
		"\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233" +
		"\u0234\x070\x02\x02\u0234\u0239\x05\xA9U\x02\u0235\u0236\x05\xA9U\x02" +
		"\u0236\u0237\x070\x02\x02\u0237\u0239\x03\x02\x02\x02\u0238\u0231\x03" +
		"\x02\x02\x02\u0238\u0235\x03\x02\x02\x02\u0239\xA4\x03\x02\x02\x02\u023A" +
		"\u023C\t\r\x02\x02\u023B\u023D\x05\xA7T\x02\u023C\u023B\x03\x02\x02\x02" +
		"\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x05" +
		"\xA9U\x02\u023F\xA6\x03\x02\x02\x02\u0240\u0241\t\x0E\x02\x02\u0241\xA8" +
		"\x03\x02\x02\x02\u0242\u0244\x05}?\x02\u0243\u0242\x03\x02\x02\x02\u0244" +
		"\u0245\x03\x02\x02\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0246\x03\x02" +
		"\x02\x02\u0246\xAA\x03\x02\x02\x02\u0247\u0249\x05\xAFX\x02\u0248\u0247" +
		"\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02" +
		"\u024A\u024B\x070\x02\x02\u024B\u0250\x05\xAFX\x02\u024C\u024D\x05\xAF" +
		"X\x02\u024D\u024E\x070\x02\x02\u024E\u0250\x03\x02\x02\x02\u024F\u0248" +
		"\x03\x02\x02\x02\u024F\u024C\x03\x02\x02\x02\u0250\xAC\x03\x02\x02\x02" +
		"\u0251\u0253\t\x0F\x02\x02\u0252\u0254\x05\xA7T\x02\u0253\u0252\x03\x02" +
		"\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255" +
		"\u0256\x05\xA9U\x02\u0256\xAE\x03\x02\x02\x02\u0257\u0259\x05\x93J\x02" +
		"\u0258\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u0258\x03" +
		"\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\xB0\x03\x02\x02\x02\u025C" +
		"\u025D\t\x10\x02\x02\u025D\xB2\x03\x02\x02\x02\u025E\u025F\x07)\x02\x02" +
		"\u025F\u0260\x05\xB7\\\x02\u0260\u0261\x07)\x02\x02\u0261\xB4\x03\x02" +
		"\x02\x02\u0262\u0264\x05\xB7\\\x02\u0263\u0262\x03\x02\x02\x02\u0264\u0265" +
		"\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02" +
		"\u0266\xB6\x03\x02\x02\x02\u0267\u026A\n\x11\x02\x02\u0268\u026A\x05\xB9" +
		"]\x02\u0269\u0267\x03\x02\x02\x02\u0269\u0268\x03\x02\x02\x02\u026A\xB8" +
		"\x03\x02\x02\x02\u026B\u0270\x05\xBB^\x02\u026C\u0270\x05\xBD_\x02\u026D" +
		"\u0270\x05\xBF`\x02\u026E\u0270\x05\x7F@\x02\u026F\u026B\x03\x02\x02\x02" +
		"\u026F\u026C\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u026F\u026E\x03" +
		"\x02\x02\x02\u0270\xBA\x03\x02\x02\x02\u0271\u0272\x07^\x02\x02\u0272" +
		"\u0273\t\x12\x02\x02\u0273\xBC\x03\x02\x02\x02\u0274\u0275\x07^\x02\x02" +
		"\u0275\u0277\x05\x91I\x02\u0276\u0278\x05\x91I\x02\u0277\u0276\x03\x02" +
		"\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x03\x02\x02\x02\u0279" +
		"\u027B\x05\x91I\x02\u027A\u0279\x03\x02\x02\x02\u027A\u027B\x03\x02\x02" +
		"\x02\u027B\xBE\x03\x02\x02\x02\u027C\u027D\x07^\x02\x02\u027D\u027E\x07" +
		"z\x02\x02\u027E\u0280\x03\x02\x02\x02\u027F\u0281\x05\x93J\x02\u0280\u027F" +
		"\x03\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02" +
		"\u0282\u0283\x03\x02\x02\x02\u0283\xC0\x03\x02\x02\x02\u0284\u0285\x07" +
		"h\x02\x02\u0285\u0287\x07$\x02\x02\u0286\u0288\x05\xC5c\x02\u0287\u0286" +
		"\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02" +
		"\u0289\u028A\x07$\x02\x02\u028A\xC2\x03\x02\x02\x02\u028B\u028D\x07$\x02" +
		"\x02\u028C\u028E\x05\xC5c\x02\u028D\u028C\x03\x02\x02\x02\u028D\u028E" +
		"\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x07$\x02\x02" +
		"\u0290\xC4\x03\x02\x02\x02\u0291\u0293\x05\xC7d\x02\u0292\u0291\x03\x02" +
		"\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294" +
		"\u0295\x03\x02\x02\x02\u0295\xC6\x03\x02\x02\x02\u0296\u029E\n\x13\x02" +
		"\x02\u0297\u029E\x05\xB9]\x02\u0298\u0299\x07^\x02\x02\u0299\u029E\x07" +
		"\f\x02\x02\u029A\u029B\x07^\x02\x02\u029B\u029C\x07\x0F\x02\x02\u029C" +
		"\u029E\x07\f\x02\x02\u029D\u0296\x03\x02\x02\x02\u029D\u0297\x03\x02\x02" +
		"\x02\u029D\u0298\x03\x02\x02\x02\u029D\u029A\x03\x02\x02\x02\u029E\xC8" +
		"\x03\x02\x02\x02\u029F\u02A0\x05\xCBf\x02\u02A0\xCA\x03\x02\x02\x02\u02A1" +
		"\u02A3\t\x14\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3\u02A4\x03\x02\x02" +
		"\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5\xCC" +
		"\x03\x02\x02\x02\u02A6\u02A7\x071\x02\x02\u02A7\u02A8\x07,\x02\x02\u02A8" +
		"\u02AC\x03\x02\x02\x02\u02A9\u02AB\v\x02\x02\x02\u02AA\u02A9\x03\x02\x02" +
		"\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AC\u02AA" +
		"\x03\x02\x02\x02\u02AD\u02AF\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02" +
		"\u02AF\u02B0\x07,\x02\x02\u02B0\u02B1\x071\x02\x02\u02B1\u02B2\x03\x02" +
		"\x02\x02\u02B2\u02B3\bg\x02\x02\u02B3\xCE\x03\x02\x02\x02\u02B4\u02B6" +
		"\x07\x0F\x02\x02\u02B5\u02B7\x07\f\x02\x02\u02B6\u02B5\x03\x02\x02\x02" +
		"\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02\u02B8\u02BA\x07" +
		"\f\x02\x02\u02B9\u02B4\x03\x02\x02\x02\u02B9\u02B8\x03\x02\x02\x02\u02BA" +
		"\u02BB\x03\x02\x02\x02\u02BB\u02BC\bh\x02\x02\u02BC\xD0\x03\x02\x02\x02" +
		"2\x02\u01A0\u01A2\u01A9\u01B0\u01C0\u01C9\u01CD\u01D1\u01D4\u01DB\u01E1" +
		"\u01E8\u01EF\u01FC\u0203\u0207\u0209\u0213\u0217\u021B\u021E\u0223\u0225" +
		"\u022A\u022E\u0231\u0238\u023C\u0245\u0248\u024F\u0253\u025A\u0265\u0269" +
		"\u026F\u0277\u027A\u0282\u0287\u028D\u0294\u029D\u02A4\u02AC\u02B6\u02B9" +
		"\x03\b\x02\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			KipperLexer._serializedATNSegment0,
			KipperLexer._serializedATNSegment1,
		],
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

