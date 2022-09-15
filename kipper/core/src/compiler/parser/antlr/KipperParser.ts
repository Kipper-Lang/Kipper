// Generated from ./Kipper.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { KipperListener } from "./KipperListener";
import { KipperVisitor } from "./KipperVisitor";

export class KipperParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly Const = 6;
	public static readonly Var = 7;
	public static readonly As = 8;
	public static readonly Spread = 9;
	public static readonly Switch = 10;
	public static readonly Case = 11;
	public static readonly Default = 12;
	public static readonly Break = 13;
	public static readonly Continue = 14;
	public static readonly Do = 15;
	public static readonly While = 16;
	public static readonly If = 17;
	public static readonly Else = 18;
	public static readonly For = 19;
	public static readonly Enum = 20;
	public static readonly DefFunc = 21;
	public static readonly Return = 22;
	public static readonly CallFunc = 23;
	public static readonly True = 24;
	public static readonly False = 25;
	public static readonly Typeof = 26;
	public static readonly Null = 27;
	public static readonly Undefined = 28;
	public static readonly LeftParen = 29;
	public static readonly RightParen = 30;
	public static readonly LeftBracket = 31;
	public static readonly RightBracket = 32;
	public static readonly LeftBrace = 33;
	public static readonly RightBrace = 34;
	public static readonly Plus = 35;
	public static readonly PlusPlus = 36;
	public static readonly Minus = 37;
	public static readonly MinusMinus = 38;
	public static readonly Star = 39;
	public static readonly Div = 40;
	public static readonly Mod = 41;
	public static readonly PowerTo = 42;
	public static readonly AndAnd = 43;
	public static readonly OrOr = 44;
	public static readonly Not = 45;
	public static readonly Comma = 46;
	public static readonly Assign = 47;
	public static readonly StarAssign = 48;
	public static readonly DivAssign = 49;
	public static readonly ModAssign = 50;
	public static readonly PlusAssign = 51;
	public static readonly MinusAssign = 52;
	public static readonly Equal = 53;
	public static readonly NotEqual = 54;
	public static readonly Less = 55;
	public static readonly LessEqual = 56;
	public static readonly Greater = 57;
	public static readonly GreaterEqual = 58;
	public static readonly Dot = 59;
	public static readonly Identifier = 60;
	public static readonly IntegerConstant = 61;
	public static readonly FloatingConstant = 62;
	public static readonly DigitSequence = 63;
	public static readonly SingleQuoteFStringLiteral = 64;
	public static readonly DoubleQuoteFStringLiteral = 65;
	public static readonly SingleQuoteStringLiteral = 66;
	public static readonly DoubleQuoteStringLiteral = 67;
	public static readonly Whitespace = 68;
	public static readonly BlockComment = 69;
	public static readonly Newline = 70;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_translationUnit = 1;
	public static readonly RULE_externalItem = 2;
	public static readonly RULE_functionDeclaration = 3;
	public static readonly RULE_endOfLine = 4;
	public static readonly RULE_primaryExpression = 5;
	public static readonly RULE_postfixExpression = 6;
	public static readonly RULE_arraySpecifier = 7;
	public static readonly RULE_argumentExpressionList = 8;
	public static readonly RULE_unaryExpression = 9;
	public static readonly RULE_incrementOrDecrementOperator = 10;
	public static readonly RULE_unaryOperator = 11;
	public static readonly RULE_castOrConvertExpression = 12;
	public static readonly RULE_multiplicativeExpression = 13;
	public static readonly RULE_additiveExpression = 14;
	public static readonly RULE_relationalExpression = 15;
	public static readonly RULE_equalityExpression = 16;
	public static readonly RULE_logicalAndExpression = 17;
	public static readonly RULE_logicalOrExpression = 18;
	public static readonly RULE_conditionalExpression = 19;
	public static readonly RULE_assignmentExpression = 20;
	public static readonly RULE_assignmentOperator = 21;
	public static readonly RULE_expression = 22;
	public static readonly RULE_constantExpression = 23;
	public static readonly RULE_declaration = 24;
	public static readonly RULE_storageTypeSpecifier = 25;
	public static readonly RULE_declarationSpecifiers = 26;
	public static readonly RULE_declarationSpecifier = 27;
	public static readonly RULE_initDeclarator = 28;
	public static readonly RULE_typeSpecifier = 29;
	public static readonly RULE_typeSpecifierIdentifier = 30;
	public static readonly RULE_declarator = 31;
	public static readonly RULE_directDeclarator = 32;
	public static readonly RULE_parameterTypeList = 33;
	public static readonly RULE_parameterList = 34;
	public static readonly RULE_parameterDeclaration = 35;
	public static readonly RULE_initializer = 36;
	public static readonly RULE_statement = 37;
	public static readonly RULE_compoundStatement = 38;
	public static readonly RULE_blockItemList = 39;
	public static readonly RULE_blockItem = 40;
	public static readonly RULE_expressionStatement = 41;
	public static readonly RULE_selectionStatement = 42;
	public static readonly RULE_switchLabeledStatement = 43;
	public static readonly RULE_iterationStatement = 44;
	public static readonly RULE_forCondition = 45;
	public static readonly RULE_forDeclaration = 46;
	public static readonly RULE_forExpression = 47;
	public static readonly RULE_jumpStatement = 48;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit",
		"translationUnit",
		"externalItem",
		"functionDeclaration",
		"endOfLine",
		"primaryExpression",
		"postfixExpression",
		"arraySpecifier",
		"argumentExpressionList",
		"unaryExpression",
		"incrementOrDecrementOperator",
		"unaryOperator",
		"castOrConvertExpression",
		"multiplicativeExpression",
		"additiveExpression",
		"relationalExpression",
		"equalityExpression",
		"logicalAndExpression",
		"logicalOrExpression",
		"conditionalExpression",
		"assignmentExpression",
		"assignmentOperator",
		"expression",
		"constantExpression",
		"declaration",
		"storageTypeSpecifier",
		"declarationSpecifiers",
		"declarationSpecifier",
		"initDeclarator",
		"typeSpecifier",
		"typeSpecifierIdentifier",
		"declarator",
		"directDeclarator",
		"parameterTypeList",
		"parameterList",
		"parameterDeclaration",
		"initializer",
		"statement",
		"compoundStatement",
		"blockItemList",
		"blockItem",
		"expressionStatement",
		"selectionStatement",
		"switchLabeledStatement",
		"iterationStatement",
		"forCondition",
		"forDeclaration",
		"forExpression",
		"jumpStatement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		"'->'",
		"';'",
		"'void'",
		"'?'",
		"':'",
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
		"'true'",
		"'false'",
		"'typeof'",
		"'null'",
		"'undefined'",
		"'('",
		"')'",
		"'['",
		"']'",
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
		"','",
		"'='",
		"'*='",
		"'/='",
		"'%='",
		"'+='",
		"'-='",
		"'=='",
		"'!='",
		"'<'",
		"'<='",
		"'>'",
		"'>='",
		"'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
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
		"True",
		"False",
		"Typeof",
		"Null",
		"Undefined",
		"LeftParen",
		"RightParen",
		"LeftBracket",
		"RightBracket",
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
		"Comma",
		"Assign",
		"StarAssign",
		"DivAssign",
		"ModAssign",
		"PlusAssign",
		"MinusAssign",
		"Equal",
		"NotEqual",
		"Less",
		"LessEqual",
		"Greater",
		"GreaterEqual",
		"Dot",
		"Identifier",
		"IntegerConstant",
		"FloatingConstant",
		"DigitSequence",
		"SingleQuoteFStringLiteral",
		"DoubleQuoteFStringLiteral",
		"SingleQuoteStringLiteral",
		"DoubleQuoteStringLiteral",
		"Whitespace",
		"BlockComment",
		"Newline",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
		KipperParser._LITERAL_NAMES,
		KipperParser._SYMBOLIC_NAMES,
		[],
	);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KipperParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string {
		return "Kipper.g4";
	}

	// @Override
	public get ruleNames(): string[] {
		return KipperParser.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return KipperParser._serializedATN;
	}

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(KipperParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, KipperParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__1) |
								(1 << KipperParser.T__2) |
								(1 << KipperParser.Const) |
								(1 << KipperParser.Var) |
								(1 << KipperParser.Switch) |
								(1 << KipperParser.Break) |
								(1 << KipperParser.Continue) |
								(1 << KipperParser.Do) |
								(1 << KipperParser.While) |
								(1 << KipperParser.If) |
								(1 << KipperParser.For) |
								(1 << KipperParser.DefFunc) |
								(1 << KipperParser.Return) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.LeftBrace - 33)) |
								(1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)) |
								(1 << (KipperParser.IntegerConstant - 33)) |
								(1 << (KipperParser.FloatingConstant - 33)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 33)))) !==
							0) ||
					(((_la - 65) & ~0x1f) === 0 &&
						((1 << (_la - 65)) &
							((1 << (KipperParser.DoubleQuoteFStringLiteral - 65)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 65)))) !==
							0)
				) {
					{
						this.state = 98;
						this.translationUnit();
					}
				}

				this.state = 101;
				this.match(KipperParser.EOF);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public translationUnit(): TranslationUnitContext {
		let _localctx: TranslationUnitContext = new TranslationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, KipperParser.RULE_translationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						this.state = 105;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
							case 1:
								{
									this.state = 103;
									this.externalItem();
								}
								break;

							case 2:
								{
									this.state = 104;
									this.endOfLine();
								}
								break;
						}
					}
					this.state = 107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__1) |
								(1 << KipperParser.T__2) |
								(1 << KipperParser.Const) |
								(1 << KipperParser.Var) |
								(1 << KipperParser.Switch) |
								(1 << KipperParser.Break) |
								(1 << KipperParser.Continue) |
								(1 << KipperParser.Do) |
								(1 << KipperParser.While) |
								(1 << KipperParser.If) |
								(1 << KipperParser.For) |
								(1 << KipperParser.DefFunc) |
								(1 << KipperParser.Return) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.LeftBrace - 33)) |
								(1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)) |
								(1 << (KipperParser.IntegerConstant - 33)) |
								(1 << (KipperParser.FloatingConstant - 33)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 33)))) !==
							0) ||
					(((_la - 65) & ~0x1f) === 0 &&
						((1 << (_la - 65)) &
							((1 << (KipperParser.DoubleQuoteFStringLiteral - 65)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 65)))) !==
							0)
				);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalItem(): ExternalItemContext {
		let _localctx: ExternalItemContext = new ExternalItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KipperParser.RULE_externalItem);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.DefFunc:
					_localctx = new ExternalFunctionDeclarationContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 109;
						this.functionDeclaration();
					}
					break;
				case KipperParser.T__1:
				case KipperParser.T__2:
				case KipperParser.Const:
				case KipperParser.Var:
				case KipperParser.Switch:
				case KipperParser.Break:
				case KipperParser.Continue:
				case KipperParser.Do:
				case KipperParser.While:
				case KipperParser.If:
				case KipperParser.For:
				case KipperParser.Return:
				case KipperParser.CallFunc:
				case KipperParser.True:
				case KipperParser.False:
				case KipperParser.Null:
				case KipperParser.Undefined:
				case KipperParser.LeftParen:
				case KipperParser.LeftBracket:
				case KipperParser.LeftBrace:
				case KipperParser.Plus:
				case KipperParser.PlusPlus:
				case KipperParser.Minus:
				case KipperParser.MinusMinus:
				case KipperParser.Not:
				case KipperParser.Identifier:
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
				case KipperParser.SingleQuoteFStringLiteral:
				case KipperParser.DoubleQuoteFStringLiteral:
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
					_localctx = new ExternalBlockItemContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 110;
						this.blockItem();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KipperParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 113;
				this.match(KipperParser.DefFunc);
				this.state = 114;
				this.declarator();
				this.state = 115;
				this.match(KipperParser.LeftParen);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 116;
						this.parameterTypeList();
					}
				}

				this.state = 119;
				this.match(KipperParser.RightParen);
				this.state = 120;
				this.match(KipperParser.T__0);
				this.state = 121;
				this.typeSpecifier();
				this.state = 124;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.LeftBrace:
						{
							this.state = 122;
							this.compoundStatement();
						}
						break;
					case KipperParser.T__1:
						{
							this.state = 123;
							this.endOfLine();
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endOfLine(): EndOfLineContext {
		let _localctx: EndOfLineContext = new EndOfLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KipperParser.RULE_endOfLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 126;
				this.match(KipperParser.T__1);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KipperParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftParen:
					_localctx = new TangledPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 128;
						this.match(KipperParser.LeftParen);
						this.state = 129;
						this.assignmentExpression();
						this.state = 130;
						this.match(KipperParser.RightParen);
					}
					break;
				case KipperParser.True:
				case KipperParser.False:
					_localctx = new BoolPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 132;
						_la = this._input.LA(1);
						if (!(_la === KipperParser.True || _la === KipperParser.False)) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				case KipperParser.Identifier:
					_localctx = new IdentifierPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 133;
						this.match(KipperParser.Identifier);
					}
					break;
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
					_localctx = new StringPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 134;
						_la = this._input.LA(1);
						if (!(_la === KipperParser.SingleQuoteStringLiteral || _la === KipperParser.DoubleQuoteStringLiteral)) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				case KipperParser.SingleQuoteFStringLiteral:
				case KipperParser.DoubleQuoteFStringLiteral:
					_localctx = new FStringPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 135;
						_la = this._input.LA(1);
						if (!(_la === KipperParser.SingleQuoteFStringLiteral || _la === KipperParser.DoubleQuoteFStringLiteral)) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
					_localctx = new NumberPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 136;
						_la = this._input.LA(1);
						if (!(_la === KipperParser.IntegerConstant || _la === KipperParser.FloatingConstant)) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				case KipperParser.LeftBracket:
					_localctx = new ListPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 137;
						this.match(KipperParser.LeftBracket);
						this.state = 138;
						this.constantExpression();
						this.state = 143;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Comma) {
							{
								{
									this.state = 139;
									this.match(KipperParser.Comma);
									this.state = 140;
									this.constantExpression();
								}
							}
							this.state = 145;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 146;
						this.match(KipperParser.RightBracket);
					}
					break;
				case KipperParser.T__2:
				case KipperParser.Null:
				case KipperParser.Undefined:
					_localctx = new VoidOrNullOrUndefinedPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 148;
						_la = this._input.LA(1);
						if (
							!(
								(_la & ~0x1f) === 0 &&
								((1 << _la) & ((1 << KipperParser.T__2) | (1 << KipperParser.Null) | (1 << KipperParser.Undefined))) !==
									0
							)
						) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KipperParser.RULE_postfixExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 171;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
				case 1:
					_localctx = new PassOnPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 151;
						this.primaryExpression();
					}
					break;

				case 2:
					_localctx = new ArraySpecifierPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 152;
						this.primaryExpression();
						this.state = 154;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
								case 1:
									{
										{
											this.state = 153;
											this.arraySpecifier();
										}
									}
									break;
								default:
									throw new NoViableAltException(this);
							}
							this.state = 156;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;

				case 3:
					_localctx = new IncrementOrDecrementPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 158;
						this.primaryExpression();
						this.state = 159;
						this.incrementOrDecrementOperator();
					}
					break;

				case 4:
					_localctx = new FunctionCallPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 162;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === KipperParser.CallFunc) {
							{
								this.state = 161;
								this.match(KipperParser.CallFunc);
							}
						}

						this.state = 164;
						this.primaryExpression();
						this.state = 165;
						this.match(KipperParser.LeftParen);
						this.state = 167;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							((_la & ~0x1f) === 0 &&
								((1 << _la) &
									((1 << KipperParser.T__2) |
										(1 << KipperParser.CallFunc) |
										(1 << KipperParser.True) |
										(1 << KipperParser.False) |
										(1 << KipperParser.Null) |
										(1 << KipperParser.Undefined) |
										(1 << KipperParser.LeftParen) |
										(1 << KipperParser.LeftBracket))) !==
									0) ||
							(((_la - 35) & ~0x1f) === 0 &&
								((1 << (_la - 35)) &
									((1 << (KipperParser.Plus - 35)) |
										(1 << (KipperParser.PlusPlus - 35)) |
										(1 << (KipperParser.Minus - 35)) |
										(1 << (KipperParser.MinusMinus - 35)) |
										(1 << (KipperParser.Not - 35)) |
										(1 << (KipperParser.Identifier - 35)) |
										(1 << (KipperParser.IntegerConstant - 35)) |
										(1 << (KipperParser.FloatingConstant - 35)) |
										(1 << (KipperParser.SingleQuoteFStringLiteral - 35)) |
										(1 << (KipperParser.DoubleQuoteFStringLiteral - 35)) |
										(1 << (KipperParser.SingleQuoteStringLiteral - 35)))) !==
									0) ||
							_la === KipperParser.DoubleQuoteStringLiteral
						) {
							{
								this.state = 166;
								this.argumentExpressionList();
							}
						}

						this.state = 169;
						this.match(KipperParser.RightParen);
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arraySpecifier(): ArraySpecifierContext {
		let _localctx: ArraySpecifierContext = new ArraySpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, KipperParser.RULE_arraySpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 173;
				this.match(KipperParser.LeftBracket);
				this.state = 174;
				this.expression();
				this.state = 175;
				this.match(KipperParser.RightBracket);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentExpressionList(): ArgumentExpressionListContext {
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KipperParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 177;
				this.assignmentExpression();
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 178;
							this.match(KipperParser.Comma);
							this.state = 179;
							this.assignmentExpression();
						}
					}
					this.state = 184;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KipperParser.RULE_unaryExpression);
		try {
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.T__2:
				case KipperParser.CallFunc:
				case KipperParser.True:
				case KipperParser.False:
				case KipperParser.Null:
				case KipperParser.Undefined:
				case KipperParser.LeftParen:
				case KipperParser.LeftBracket:
				case KipperParser.Identifier:
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
				case KipperParser.SingleQuoteFStringLiteral:
				case KipperParser.DoubleQuoteFStringLiteral:
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
					_localctx = new PassOnUnaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 185;
						this.postfixExpression();
					}
					break;
				case KipperParser.PlusPlus:
				case KipperParser.MinusMinus:
					_localctx = new IncrementOrDecrementUnaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 186;
						this.incrementOrDecrementOperator();
						this.state = 187;
						this.postfixExpression();
					}
					break;
				case KipperParser.Plus:
				case KipperParser.Minus:
				case KipperParser.Not:
					_localctx = new OperatorModifiedUnaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 189;
						this.unaryOperator();
						this.state = 190;
						this.postfixExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incrementOrDecrementOperator(): IncrementOrDecrementOperatorContext {
		let _localctx: IncrementOrDecrementOperatorContext = new IncrementOrDecrementOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, KipperParser.RULE_incrementOrDecrementOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 194;
				_la = this._input.LA(1);
				if (!(_la === KipperParser.PlusPlus || _la === KipperParser.MinusMinus)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, KipperParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 196;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 35) & ~0x1f) === 0 &&
						((1 << (_la - 35)) &
							((1 << (KipperParser.Plus - 35)) | (1 << (KipperParser.Minus - 35)) | (1 << (KipperParser.Not - 35)))) !==
							0
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castOrConvertExpression(): CastOrConvertExpressionContext {
		let _localctx: CastOrConvertExpressionContext = new CastOrConvertExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, KipperParser.RULE_castOrConvertExpression);
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
				case 1:
					_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 198;
						this.unaryExpression();
					}
					break;

				case 2:
					_localctx = new ActualCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 199;
						this.unaryExpression();
						this.state = 200;
						this.match(KipperParser.As);
						this.state = 201;
						this.typeSpecifier();
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	// @RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, KipperParser.RULE_multiplicativeExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnMultiplicativeExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 206;
					this.castOrConvertExpression();
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 213;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualMultiplicativeExpressionContext(
									new MultiplicativeExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_multiplicativeExpression);
								this.state = 208;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 209;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 39) & ~0x1f) === 0 &&
										((1 << (_la - 39)) &
											((1 << (KipperParser.Star - 39)) |
												(1 << (KipperParser.Div - 39)) |
												(1 << (KipperParser.Mod - 39)) |
												(1 << (KipperParser.PowerTo - 39)))) !==
											0
									)
								) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
								this.state = 210;
								this.castOrConvertExpression();
							}
						}
					}
					this.state = 215;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	// @RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, KipperParser.RULE_additiveExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnAdditiveExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 217;
					this.multiplicativeExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 224;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualAdditiveExpressionContext(
									new AdditiveExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_additiveExpression);
								this.state = 219;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 220;
								_la = this._input.LA(1);
								if (!(_la === KipperParser.Plus || _la === KipperParser.Minus)) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
								this.state = 221;
								this.multiplicativeExpression(0);
							}
						}
					}
					this.state = 226;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	// @RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, KipperParser.RULE_relationalExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnRelationalExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 228;
					this.additiveExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 235;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualRelationalExpressionContext(
									new RelationalExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_relationalExpression);
								this.state = 230;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 231;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 55) & ~0x1f) === 0 &&
										((1 << (_la - 55)) &
											((1 << (KipperParser.Less - 55)) |
												(1 << (KipperParser.LessEqual - 55)) |
												(1 << (KipperParser.Greater - 55)) |
												(1 << (KipperParser.GreaterEqual - 55)))) !==
											0
									)
								) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
								this.state = 232;
								this.additiveExpression(0);
							}
						}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	// @RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, KipperParser.RULE_equalityExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnEqualityExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 239;
					this.relationalExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualEqualityExpressionContext(
									new EqualityExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_equalityExpression);
								this.state = 241;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 242;
								_la = this._input.LA(1);
								if (!(_la === KipperParser.Equal || _la === KipperParser.NotEqual)) {
									this._errHandler.recoverInline(this);
								} else {
									if (this._input.LA(1) === Token.EOF) {
										this.matchedEOF = true;
									}

									this._errHandler.reportMatch(this);
									this.consume();
								}
								this.state = 243;
								this.relationalExpression(0);
							}
						}
					}
					this.state = 248;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalAndExpression(): LogicalAndExpressionContext;
	public logicalAndExpression(_p: number): LogicalAndExpressionContext;
	// @RuleVersion(0)
	public logicalAndExpression(_p?: number): LogicalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalAndExpressionContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, KipperParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalAndExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 250;
					this.equalityExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualLogicalAndExpressionContext(
									new LogicalAndExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_logicalAndExpression);
								this.state = 252;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 253;
								this.match(KipperParser.AndAnd);
								this.state = 254;
								this.equalityExpression(0);
							}
						}
					}
					this.state = 259;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public logicalOrExpression(): LogicalOrExpressionContext;
	public logicalOrExpression(_p: number): LogicalOrExpressionContext;
	// @RuleVersion(0)
	public logicalOrExpression(_p?: number): LogicalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: LogicalOrExpressionContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, KipperParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalOrExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 261;
					this.logicalAndExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualLogicalOrExpressionContext(
									new LogicalOrExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_logicalOrExpression);
								this.state = 263;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 264;
								this.match(KipperParser.OrOr);
								this.state = 265;
								this.logicalAndExpression(0);
							}
						}
					}
					this.state = 270;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, KipperParser.RULE_conditionalExpression);
		try {
			this.state = 278;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
				case 1:
					_localctx = new PassOnConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 271;
						this.logicalOrExpression(0);
					}
					break;

				case 2:
					_localctx = new ActualConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 272;
						this.logicalOrExpression(0);
						this.state = 273;
						this.match(KipperParser.T__3);
						this.state = 274;
						this.conditionalExpression();
						this.state = 275;
						this.match(KipperParser.T__4);
						this.state = 276;
						this.conditionalExpression();
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, KipperParser.RULE_assignmentExpression);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
				case 1:
					_localctx = new PassOnAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 280;
						this.conditionalExpression();
					}
					break;

				case 2:
					_localctx = new ActualAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 281;
						this.primaryExpression();
						this.state = 282;
						this.assignmentOperator();
						this.state = 283;
						this.assignmentExpression();
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, KipperParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 287;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 47) & ~0x1f) === 0 &&
						((1 << (_la - 47)) &
							((1 << (KipperParser.Assign - 47)) |
								(1 << (KipperParser.StarAssign - 47)) |
								(1 << (KipperParser.DivAssign - 47)) |
								(1 << (KipperParser.ModAssign - 47)) |
								(1 << (KipperParser.PlusAssign - 47)) |
								(1 << (KipperParser.MinusAssign - 47)))) !==
							0
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, KipperParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 289;
				this.assignmentExpression();
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 290;
							this.match(KipperParser.Comma);
							this.state = 291;
							this.assignmentExpression();
						}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, KipperParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 297;
				this.conditionalExpression();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, KipperParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 299;
				this.storageTypeSpecifier();
				this.state = 300;
				this.initDeclarator();
				this.state = 301;
				this.endOfLine();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageTypeSpecifier(): StorageTypeSpecifierContext {
		let _localctx: StorageTypeSpecifierContext = new StorageTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, KipperParser.RULE_storageTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 303;
				_la = this._input.LA(1);
				if (!(_la === KipperParser.Const || _la === KipperParser.Var)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		let _localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, KipperParser.RULE_declarationSpecifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 305;
							this.declarationSpecifier();
						}
					}
					this.state = 308;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__2) |
								(1 << KipperParser.Typeof) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined))) !==
							0) ||
					_la === KipperParser.Identifier
				);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifier(): DeclarationSpecifierContext {
		let _localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, KipperParser.RULE_declarationSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 310;
				this.typeSpecifier();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, KipperParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 312;
				this.declarator();
				this.state = 313;
				this.match(KipperParser.T__4);
				this.state = 314;
				this.typeSpecifier();
				this.state = 317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Assign) {
					{
						this.state = 315;
						this.match(KipperParser.Assign);
						this.state = 316;
						this.initializer();
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, KipperParser.RULE_typeSpecifier);
		try {
			this.state = 330;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
				case 1:
					_localctx = new IdentifierTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 319;
						this.typeSpecifierIdentifier();
					}
					break;

				case 2:
					_localctx = new GenericTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 320;
						this.typeSpecifierIdentifier();
						this.state = 321;
						this.match(KipperParser.Less);
						this.state = 322;
						this.typeSpecifierIdentifier();
						this.state = 323;
						this.match(KipperParser.Greater);
					}
					break;

				case 3:
					_localctx = new TypeofTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 325;
						this.match(KipperParser.Typeof);
						this.state = 326;
						this.match(KipperParser.LeftParen);
						this.state = 327;
						this.typeSpecifierIdentifier();
						this.state = 328;
						this.match(KipperParser.RightParen);
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifierIdentifier(): TypeSpecifierIdentifierContext {
		let _localctx: TypeSpecifierIdentifierContext = new TypeSpecifierIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, KipperParser.RULE_typeSpecifierIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 332;
				_la = this._input.LA(1);
				if (
					!(
						((_la & ~0x1f) === 0 &&
							((1 << _la) & ((1 << KipperParser.T__2) | (1 << KipperParser.Null) | (1 << KipperParser.Undefined))) !==
								0) ||
						_la === KipperParser.Identifier
					)
				) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 334;
				this.directDeclarator();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directDeclarator(): DirectDeclaratorContext {
		let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 336;
				this.match(KipperParser.Identifier);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterTypeList(): ParameterTypeListContext {
		let _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, KipperParser.RULE_parameterTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 338;
				this.parameterList();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 340;
				this.parameterDeclaration();
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 341;
							this.match(KipperParser.Comma);
							this.state = 342;
							this.parameterDeclaration();
						}
					}
					this.state = 347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, KipperParser.RULE_parameterDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 348;
				this.declarator();
				this.state = 349;
				this.match(KipperParser.T__4);
				this.state = 350;
				this.declarationSpecifiers();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, KipperParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 352;
				this.assignmentExpression();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, KipperParser.RULE_statement);
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftBrace:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 354;
						this.compoundStatement();
					}
					break;
				case KipperParser.T__1:
				case KipperParser.T__2:
				case KipperParser.CallFunc:
				case KipperParser.True:
				case KipperParser.False:
				case KipperParser.Null:
				case KipperParser.Undefined:
				case KipperParser.LeftParen:
				case KipperParser.LeftBracket:
				case KipperParser.Plus:
				case KipperParser.PlusPlus:
				case KipperParser.Minus:
				case KipperParser.MinusMinus:
				case KipperParser.Not:
				case KipperParser.Identifier:
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
				case KipperParser.SingleQuoteFStringLiteral:
				case KipperParser.DoubleQuoteFStringLiteral:
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 355;
						this.expressionStatement();
					}
					break;
				case KipperParser.Switch:
				case KipperParser.If:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 356;
						this.selectionStatement();
					}
					break;
				case KipperParser.Do:
				case KipperParser.While:
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 357;
						this.iterationStatement();
					}
					break;
				case KipperParser.Break:
				case KipperParser.Continue:
				case KipperParser.Return:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 358;
						this.jumpStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 361;
				this.match(KipperParser.LeftBrace);
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__1) |
								(1 << KipperParser.T__2) |
								(1 << KipperParser.Const) |
								(1 << KipperParser.Var) |
								(1 << KipperParser.Switch) |
								(1 << KipperParser.Break) |
								(1 << KipperParser.Continue) |
								(1 << KipperParser.Do) |
								(1 << KipperParser.While) |
								(1 << KipperParser.If) |
								(1 << KipperParser.For) |
								(1 << KipperParser.Return) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.LeftBrace - 33)) |
								(1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)) |
								(1 << (KipperParser.IntegerConstant - 33)) |
								(1 << (KipperParser.FloatingConstant - 33)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 33)))) !==
							0) ||
					(((_la - 65) & ~0x1f) === 0 &&
						((1 << (_la - 65)) &
							((1 << (KipperParser.DoubleQuoteFStringLiteral - 65)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 65)))) !==
							0)
				) {
					{
						this.state = 362;
						this.blockItemList();
					}
				}

				this.state = 365;
				this.match(KipperParser.RightBrace);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItemList(): BlockItemListContext {
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, KipperParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 367;
							this.blockItem();
						}
					}
					this.state = 370;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__1) |
								(1 << KipperParser.T__2) |
								(1 << KipperParser.Const) |
								(1 << KipperParser.Var) |
								(1 << KipperParser.Switch) |
								(1 << KipperParser.Break) |
								(1 << KipperParser.Continue) |
								(1 << KipperParser.Do) |
								(1 << KipperParser.While) |
								(1 << KipperParser.If) |
								(1 << KipperParser.For) |
								(1 << KipperParser.Return) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.LeftBrace - 33)) |
								(1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)) |
								(1 << (KipperParser.IntegerConstant - 33)) |
								(1 << (KipperParser.FloatingConstant - 33)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 33)))) !==
							0) ||
					(((_la - 65) & ~0x1f) === 0 &&
						((1 << (_la - 65)) &
							((1 << (KipperParser.DoubleQuoteFStringLiteral - 65)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 65)))) !==
							0)
				);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, KipperParser.RULE_blockItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 374;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.T__1:
					case KipperParser.T__2:
					case KipperParser.Switch:
					case KipperParser.Break:
					case KipperParser.Continue:
					case KipperParser.Do:
					case KipperParser.While:
					case KipperParser.If:
					case KipperParser.For:
					case KipperParser.Return:
					case KipperParser.CallFunc:
					case KipperParser.True:
					case KipperParser.False:
					case KipperParser.Null:
					case KipperParser.Undefined:
					case KipperParser.LeftParen:
					case KipperParser.LeftBracket:
					case KipperParser.LeftBrace:
					case KipperParser.Plus:
					case KipperParser.PlusPlus:
					case KipperParser.Minus:
					case KipperParser.MinusMinus:
					case KipperParser.Not:
					case KipperParser.Identifier:
					case KipperParser.IntegerConstant:
					case KipperParser.FloatingConstant:
					case KipperParser.SingleQuoteFStringLiteral:
					case KipperParser.DoubleQuoteFStringLiteral:
					case KipperParser.SingleQuoteStringLiteral:
					case KipperParser.DoubleQuoteStringLiteral:
						{
							this.state = 372;
							this.statement();
						}
						break;
					case KipperParser.Const:
					case KipperParser.Var:
						{
							this.state = 373;
							this.declaration();
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, KipperParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__2) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 35) & ~0x1f) === 0 &&
						((1 << (_la - 35)) &
							((1 << (KipperParser.Plus - 35)) |
								(1 << (KipperParser.PlusPlus - 35)) |
								(1 << (KipperParser.Minus - 35)) |
								(1 << (KipperParser.MinusMinus - 35)) |
								(1 << (KipperParser.Not - 35)) |
								(1 << (KipperParser.Identifier - 35)) |
								(1 << (KipperParser.IntegerConstant - 35)) |
								(1 << (KipperParser.FloatingConstant - 35)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 35)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 35)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 35)))) !==
							0) ||
					_la === KipperParser.DoubleQuoteStringLiteral
				) {
					{
						this.state = 376;
						this.expression();
					}
				}

				this.state = 379;
				this.endOfLine();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, KipperParser.RULE_selectionStatement);
		let _la: number;
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.If:
					_localctx = new IfStatementContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 381;
						this.match(KipperParser.If);
						this.state = 382;
						this.match(KipperParser.LeftParen);
						this.state = 383;
						this.expression();
						this.state = 384;
						this.match(KipperParser.RightParen);
						this.state = 385;
						this.statement();
						this.state = 388;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
							case 1:
								{
									this.state = 386;
									this.match(KipperParser.Else);
									this.state = 387;
									this.statement();
								}
								break;
						}
					}
					break;
				case KipperParser.Switch:
					_localctx = new SwitchStatementContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 390;
						this.match(KipperParser.Switch);
						this.state = 391;
						this.match(KipperParser.LeftParen);
						this.state = 392;
						this.expression();
						this.state = 393;
						this.match(KipperParser.RightParen);
						this.state = 394;
						this.match(KipperParser.LeftBrace);
						this.state = 398;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Case || _la === KipperParser.Default) {
							{
								{
									this.state = 395;
									this.switchLabeledStatement();
								}
							}
							this.state = 400;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 401;
						this.match(KipperParser.RightBrace);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabeledStatement(): SwitchLabeledStatementContext {
		let _localctx: SwitchLabeledStatementContext = new SwitchLabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, KipperParser.RULE_switchLabeledStatement);
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Case:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 405;
						this.match(KipperParser.Case);
						this.state = 406;
						this.constantExpression();
						this.state = 407;
						this.match(KipperParser.T__4);
						this.state = 408;
						this.statement();
					}
					break;
				case KipperParser.Default:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 410;
						this.match(KipperParser.Default);
						this.state = 411;
						this.match(KipperParser.T__4);
						this.state = 412;
						this.statement();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, KipperParser.RULE_iterationStatement);
		try {
			this.state = 435;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 415;
						this.match(KipperParser.For);
						this.state = 416;
						this.match(KipperParser.LeftParen);
						this.state = 417;
						this.forCondition();
						this.state = 418;
						this.match(KipperParser.RightParen);
						this.state = 419;
						this.statement();
					}
					break;
				case KipperParser.While:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 421;
						this.match(KipperParser.While);
						this.state = 422;
						this.match(KipperParser.LeftParen);
						this.state = 423;
						this.expression();
						this.state = 424;
						this.match(KipperParser.RightParen);
						this.state = 425;
						this.statement();
					}
					break;
				case KipperParser.Do:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 427;
						this.match(KipperParser.Do);
						this.state = 428;
						this.statement();
						this.state = 429;
						this.match(KipperParser.While);
						this.state = 430;
						this.match(KipperParser.LeftParen);
						this.state = 431;
						this.expression();
						this.state = 432;
						this.match(KipperParser.RightParen);
						this.state = 433;
						this.endOfLine();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forCondition(): ForConditionContext {
		let _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, KipperParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 441;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.Const:
					case KipperParser.Var:
						{
							this.state = 437;
							this.forDeclaration();
						}
						break;
					case KipperParser.T__1:
					case KipperParser.T__2:
					case KipperParser.CallFunc:
					case KipperParser.True:
					case KipperParser.False:
					case KipperParser.Null:
					case KipperParser.Undefined:
					case KipperParser.LeftParen:
					case KipperParser.LeftBracket:
					case KipperParser.Plus:
					case KipperParser.PlusPlus:
					case KipperParser.Minus:
					case KipperParser.MinusMinus:
					case KipperParser.Not:
					case KipperParser.Identifier:
					case KipperParser.IntegerConstant:
					case KipperParser.FloatingConstant:
					case KipperParser.SingleQuoteFStringLiteral:
					case KipperParser.DoubleQuoteFStringLiteral:
					case KipperParser.SingleQuoteStringLiteral:
					case KipperParser.DoubleQuoteStringLiteral:
						{
							this.state = 439;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 << KipperParser.T__2) |
											(1 << KipperParser.CallFunc) |
											(1 << KipperParser.True) |
											(1 << KipperParser.False) |
											(1 << KipperParser.Null) |
											(1 << KipperParser.Undefined) |
											(1 << KipperParser.LeftParen) |
											(1 << KipperParser.LeftBracket))) !==
										0) ||
								(((_la - 35) & ~0x1f) === 0 &&
									((1 << (_la - 35)) &
										((1 << (KipperParser.Plus - 35)) |
											(1 << (KipperParser.PlusPlus - 35)) |
											(1 << (KipperParser.Minus - 35)) |
											(1 << (KipperParser.MinusMinus - 35)) |
											(1 << (KipperParser.Not - 35)) |
											(1 << (KipperParser.Identifier - 35)) |
											(1 << (KipperParser.IntegerConstant - 35)) |
											(1 << (KipperParser.FloatingConstant - 35)) |
											(1 << (KipperParser.SingleQuoteFStringLiteral - 35)) |
											(1 << (KipperParser.DoubleQuoteFStringLiteral - 35)) |
											(1 << (KipperParser.SingleQuoteStringLiteral - 35)))) !==
										0) ||
								_la === KipperParser.DoubleQuoteStringLiteral
							) {
								{
									this.state = 438;
									this.expression();
								}
							}
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 443;
				this.endOfLine();
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__2) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 35) & ~0x1f) === 0 &&
						((1 << (_la - 35)) &
							((1 << (KipperParser.Plus - 35)) |
								(1 << (KipperParser.PlusPlus - 35)) |
								(1 << (KipperParser.Minus - 35)) |
								(1 << (KipperParser.MinusMinus - 35)) |
								(1 << (KipperParser.Not - 35)) |
								(1 << (KipperParser.Identifier - 35)) |
								(1 << (KipperParser.IntegerConstant - 35)) |
								(1 << (KipperParser.FloatingConstant - 35)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 35)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 35)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 35)))) !==
							0) ||
					_la === KipperParser.DoubleQuoteStringLiteral
				) {
					{
						this.state = 444;
						this.forExpression();
					}
				}

				this.state = 447;
				this.endOfLine();
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__2) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 35) & ~0x1f) === 0 &&
						((1 << (_la - 35)) &
							((1 << (KipperParser.Plus - 35)) |
								(1 << (KipperParser.PlusPlus - 35)) |
								(1 << (KipperParser.Minus - 35)) |
								(1 << (KipperParser.MinusMinus - 35)) |
								(1 << (KipperParser.Not - 35)) |
								(1 << (KipperParser.Identifier - 35)) |
								(1 << (KipperParser.IntegerConstant - 35)) |
								(1 << (KipperParser.FloatingConstant - 35)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 35)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 35)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 35)))) !==
							0) ||
					_la === KipperParser.DoubleQuoteStringLiteral
				) {
					{
						this.state = 448;
						this.forExpression();
					}
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forDeclaration(): ForDeclarationContext {
		let _localctx: ForDeclarationContext = new ForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, KipperParser.RULE_forDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 451;
				this.storageTypeSpecifier();
				this.state = 452;
				this.initDeclarator();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, KipperParser.RULE_forExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 454;
				this.assignmentExpression();
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 455;
							this.match(KipperParser.Comma);
							this.state = 456;
							this.assignmentExpression();
						}
					}
					this.state = 461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 467;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.Break:
					case KipperParser.Continue:
						{
							this.state = 462;
							_la = this._input.LA(1);
							if (!(_la === KipperParser.Break || _la === KipperParser.Continue)) {
								this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
						}
						break;
					case KipperParser.Return:
						{
							this.state = 463;
							this.match(KipperParser.Return);
							this.state = 465;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 << KipperParser.T__2) |
											(1 << KipperParser.CallFunc) |
											(1 << KipperParser.True) |
											(1 << KipperParser.False) |
											(1 << KipperParser.Null) |
											(1 << KipperParser.Undefined) |
											(1 << KipperParser.LeftParen) |
											(1 << KipperParser.LeftBracket))) !==
										0) ||
								(((_la - 35) & ~0x1f) === 0 &&
									((1 << (_la - 35)) &
										((1 << (KipperParser.Plus - 35)) |
											(1 << (KipperParser.PlusPlus - 35)) |
											(1 << (KipperParser.Minus - 35)) |
											(1 << (KipperParser.MinusMinus - 35)) |
											(1 << (KipperParser.Not - 35)) |
											(1 << (KipperParser.Identifier - 35)) |
											(1 << (KipperParser.IntegerConstant - 35)) |
											(1 << (KipperParser.FloatingConstant - 35)) |
											(1 << (KipperParser.SingleQuoteFStringLiteral - 35)) |
											(1 << (KipperParser.DoubleQuoteFStringLiteral - 35)) |
											(1 << (KipperParser.SingleQuoteStringLiteral - 35)))) !==
										0) ||
								_la === KipperParser.DoubleQuoteStringLiteral
							) {
								{
									this.state = 464;
									this.expression();
								}
							}
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 469;
				this.endOfLine();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 13:
				return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

			case 14:
				return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

			case 15:
				return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

			case 16:
				return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

			case 17:
				return this.logicalAndExpression_sempred(_localctx as LogicalAndExpressionContext, predIndex);

			case 18:
				return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 1:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 2:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 3:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(_localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 4:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalOrExpression_sempred(_localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 5:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03H\u01DA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		'\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x05\x02" +
		"f\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x06\x03l\n\x03\r\x03\x0E\x03m" +
		"\x03\x04\x03\x04\x05\x04r\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"x\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x7F\n\x05\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x90\n\x07\f\x07\x0E" +
		"\x07\x93\v\x07\x03\x07\x03\x07\x03\x07\x05\x07\x98\n\x07\x03\b\x03\b\x03" +
		"\b\x06\b\x9D\n\b\r\b\x0E\b\x9E\x03\b\x03\b\x03\b\x03\b\x05\b\xA5\n\b\x03" +
		"\b\x03\b\x03\b\x05\b\xAA\n\b\x03\b\x03\b\x05\b\xAE\n\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x07\n\xB7\n\n\f\n\x0E\n\xBA\v\n\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xC3\n\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xCE\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xD6\n\x0F\f\x0F\x0E\x0F\xD9\v" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xE1\n\x10" +
		"\f\x10\x0E\x10\xE4\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x07\x11\xEC\n\x11\f\x11\x0E\x11\xEF\v\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x07\x12\xF7\n\x12\f\x12\x0E\x12\xFA\v\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0102\n\x13\f\x13\x0E" +
		"\x13\u0105\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u010D\n\x14\f\x14\x0E\x14\u0110\v\x14\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x05\x15\u0119\n\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u0120\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u0127\n\x18\f\x18\x0E\x18\u012A\v\x18\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x06\x1C\u0135\n\x1C\r" +
		"\x1C\x0E\x1C\u0136\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0140\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u014D\n\x1F\x03 \x03" +
		' \x03!\x03!\x03"\x03"\x03#\x03#\x03$\x03$\x03$\x07$\u015A\n$\f$\x0E' +
		"$\u015D\v$\x03%\x03%\x03%\x03%\x03&\x03&\x03'\x03'\x03'\x03'\x03'" +
		"\x05'\u016A\n'\x03(\x03(\x05(\u016E\n(\x03(\x03(\x03)\x06)\u0173\n)" +
		"\r)\x0E)\u0174\x03*\x03*\x05*\u0179\n*\x03+\x05+\u017C\n+\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0187\n,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x07,\u018F\n,\f,\x0E,\u0192\v,\x03,\x03,\x05,\u0196\n,\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u01A0\n-\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x05.\u01B6\n.\x03/\x03/\x05/\u01BA\n/\x05/\u01BC\n/\x03/\x03/\x05" +
		"/\u01C0\n/\x03/\x03/\x05/\u01C4\n/\x030\x030\x030\x031\x031\x031\x071" +
		"\u01CC\n1\f1\x0E1\u01CF\v1\x032\x032\x032\x052\u01D4\n2\x052\u01D6\n2" +
		'\x032\x032\x032\x02\x02\b\x1C\x1E "$&3\x02\x02\x04\x02\x06\x02\b\x02' +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		'\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026' +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02\x02\x11\x03\x02\x1A\x1B" +
		"\x03\x02DE\x03\x02BC\x03\x02?@\x04\x02\x05\x05\x1D\x1E\x04\x02&&((\x05" +
		"\x02%%''//\x03\x02),\x04\x02%%''\x03\x029<\x03\x0278\x03\x0216\x03" +
		"\x02\b\t\x05\x02\x05\x05\x1D\x1E>>\x03\x02\x0F\x10\x02\u01E3\x02e\x03" +
		"\x02\x02\x02\x04k\x03\x02\x02\x02\x06q\x03\x02\x02\x02\bs\x03\x02\x02" +
		"\x02\n\x80\x03\x02\x02\x02\f\x97\x03\x02\x02\x02\x0E\xAD\x03\x02\x02\x02" +
		"\x10\xAF\x03\x02\x02\x02\x12\xB3\x03\x02\x02\x02\x14\xC2\x03\x02\x02\x02" +
		"\x16\xC4\x03\x02\x02\x02\x18\xC6\x03\x02\x02\x02\x1A\xCD\x03\x02\x02\x02" +
		"\x1C\xCF\x03\x02\x02\x02\x1E\xDA\x03\x02\x02\x02 \xE5\x03\x02\x02\x02" +
		'"\xF0\x03\x02\x02\x02$\xFB\x03\x02\x02\x02&\u0106\x03\x02\x02\x02(\u0118' +
		"\x03\x02\x02\x02*\u011F\x03\x02\x02\x02,\u0121\x03\x02\x02\x02.\u0123" +
		"\x03\x02\x02\x020\u012B\x03\x02\x02\x022\u012D\x03\x02\x02\x024\u0131" +
		"\x03\x02\x02\x026\u0134\x03\x02\x02\x028\u0138\x03\x02\x02\x02:\u013A" +
		"\x03\x02\x02\x02<\u014C\x03\x02\x02\x02>\u014E\x03\x02\x02\x02@\u0150" +
		"\x03\x02\x02\x02B\u0152\x03\x02\x02\x02D\u0154\x03\x02\x02\x02F\u0156" +
		"\x03\x02\x02\x02H\u015E\x03\x02\x02\x02J\u0162\x03\x02\x02\x02L\u0169" +
		"\x03\x02\x02\x02N\u016B\x03\x02\x02\x02P\u0172\x03\x02\x02\x02R\u0178" +
		"\x03\x02\x02\x02T\u017B\x03\x02\x02\x02V\u0195\x03\x02\x02\x02X\u019F" +
		"\x03\x02\x02\x02Z\u01B5\x03\x02\x02\x02\\\u01BB\x03\x02\x02\x02^\u01C5" +
		"\x03\x02\x02\x02`\u01C8\x03\x02\x02\x02b\u01D5\x03\x02\x02\x02df\x05\x04" +
		"\x03\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fg\x03\x02\x02\x02gh\x07\x02" +
		"\x02\x03h\x03\x03\x02\x02\x02il\x05\x06\x04\x02jl\x05\n\x06\x02ki\x03" +
		"\x02\x02\x02kj\x03\x02\x02\x02lm\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03" +
		"\x02\x02\x02n\x05\x03\x02\x02\x02or\x05\b\x05\x02pr\x05R*\x02qo\x03\x02" +
		"\x02\x02qp\x03\x02\x02\x02r\x07\x03\x02\x02\x02st\x07\x17\x02\x02tu\x05" +
		"@!\x02uw\x07\x1F\x02\x02vx\x05D#\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02yz\x07 \x02\x02z{\x07\x03\x02\x02{~\x05<\x1F\x02|\x7F" +
		"\x05N(\x02}\x7F\x05\n\x06\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F" +
		"\t\x03\x02\x02\x02\x80\x81\x07\x04\x02\x02\x81\v\x03\x02\x02\x02\x82\x83" +
		"\x07\x1F\x02\x02\x83\x84\x05*\x16\x02\x84\x85\x07 \x02\x02\x85\x98\x03" +
		"\x02\x02\x02\x86\x98\t\x02\x02\x02\x87\x98\x07>\x02\x02\x88\x98\t\x03" +
		"\x02\x02\x89\x98\t\x04\x02\x02\x8A\x98\t\x05\x02\x02\x8B\x8C\x07!\x02" +
		"\x02\x8C\x91\x050\x19\x02\x8D\x8E\x070\x02\x02\x8E\x90\x050\x19\x02\x8F" +
		"\x8D\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91" +
		"\x92\x03\x02\x02\x02\x92\x94\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94" +
		'\x95\x07"\x02\x02\x95\x98\x03\x02\x02\x02\x96\x98\t\x06\x02\x02\x97\x82' +
		"\x03\x02\x02\x02\x97\x86\x03\x02\x02\x02\x97\x87\x03\x02\x02\x02\x97\x88" +
		"\x03\x02\x02\x02\x97\x89\x03\x02\x02\x02\x97\x8A\x03\x02\x02\x02\x97\x8B" +
		"\x03\x02\x02\x02\x97\x96\x03\x02\x02\x02\x98\r\x03\x02\x02\x02\x99\xAE" +
		"\x05\f\x07\x02\x9A\x9C\x05\f\x07\x02\x9B\x9D\x05\x10\t\x02\x9C\x9B\x03" +
		"\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03" +
		"\x02\x02\x02\x9F\xAE\x03\x02\x02\x02\xA0\xA1\x05\f\x07\x02\xA1\xA2\x05" +
		"\x16\f\x02\xA2\xAE\x03\x02\x02\x02\xA3\xA5\x07\x19\x02\x02\xA4\xA3\x03" +
		"\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x05" +
		"\f\x07\x02\xA7\xA9\x07\x1F\x02\x02\xA8\xAA\x05\x12\n\x02\xA9\xA8\x03\x02" +
		"\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x07 " +
		"\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\x99\x03\x02\x02\x02\xAD\x9A\x03\x02" +
		"\x02\x02\xAD\xA0\x03\x02\x02\x02\xAD\xA4\x03\x02\x02\x02\xAE\x0F\x03\x02" +
		'\x02\x02\xAF\xB0\x07!\x02\x02\xB0\xB1\x05.\x18\x02\xB1\xB2\x07"\x02\x02' +
		"\xB2\x11\x03\x02\x02\x02\xB3\xB8\x05*\x16\x02\xB4\xB5\x070\x02\x02\xB5" +
		"\xB7\x05*\x16\x02\xB6\xB4\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8" +
		"\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x13\x03\x02\x02\x02\xBA" +
		"\xB8\x03\x02\x02\x02\xBB\xC3\x05\x0E\b\x02\xBC\xBD\x05\x16\f\x02\xBD\xBE" +
		"\x05\x0E\b\x02\xBE\xC3\x03\x02\x02\x02\xBF\xC0\x05\x18\r\x02\xC0\xC1\x05" +
		"\x0E\b\x02\xC1\xC3\x03\x02\x02\x02\xC2\xBB\x03\x02\x02\x02\xC2\xBC\x03" +
		"\x02\x02\x02\xC2\xBF\x03\x02\x02\x02\xC3\x15\x03\x02\x02\x02\xC4\xC5\t" +
		"\x07\x02\x02\xC5\x17\x03\x02\x02\x02\xC6\xC7\t\b\x02\x02\xC7\x19\x03\x02" +
		"\x02\x02\xC8\xCE\x05\x14\v\x02\xC9\xCA\x05\x14\v\x02\xCA\xCB\x07\n\x02" +
		"\x02\xCB\xCC\x05<\x1F\x02\xCC\xCE\x03\x02\x02\x02\xCD\xC8\x03\x02\x02" +
		"\x02\xCD\xC9\x03\x02\x02\x02\xCE\x1B\x03\x02\x02\x02\xCF\xD0\b\x0F\x01" +
		"\x02\xD0\xD1\x05\x1A\x0E\x02\xD1\xD7\x03\x02\x02\x02\xD2\xD3\f\x03\x02" +
		"\x02\xD3\xD4\t\t\x02\x02\xD4\xD6\x05\x1A\x0E\x02\xD5\xD2\x03\x02\x02\x02" +
		"\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02" +
		"\xD8\x1D\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB\b\x10\x01\x02" +
		"\xDB\xDC\x05\x1C\x0F\x02\xDC\xE2\x03\x02\x02\x02\xDD\xDE\f\x03\x02\x02" +
		"\xDE\xDF\t\n\x02\x02\xDF\xE1\x05\x1C\x0F\x02\xE0\xDD\x03\x02\x02\x02\xE1" +
		"\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3" +
		"\x1F\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE6\b\x11\x01\x02\xE6" +
		"\xE7\x05\x1E\x10\x02\xE7\xED\x03\x02\x02\x02\xE8\xE9\f\x03\x02\x02\xE9" +
		"\xEA\t\v\x02\x02\xEA\xEC\x05\x1E\x10\x02\xEB\xE8\x03\x02\x02\x02\xEC\xEF" +
		"\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE!" +
		"\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF1\b\x12\x01\x02\xF1\xF2" +
		"\x05 \x11\x02\xF2\xF8\x03\x02\x02\x02\xF3\xF4\f\x03\x02\x02\xF4\xF5\t" +
		"\f\x02\x02\xF5\xF7\x05 \x11\x02\xF6\xF3\x03\x02\x02\x02\xF7\xFA\x03\x02" +
		"\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9#\x03\x02" +
		'\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\b\x13\x01\x02\xFC\xFD\x05"\x12' +
		"\x02\xFD\u0103\x03\x02\x02\x02\xFE\xFF\f\x03\x02\x02\xFF\u0100\x07-\x02" +
		'\x02\u0100\u0102\x05"\x12\x02\u0101\xFE\x03\x02\x02\x02\u0102\u0105\x03' +
		"\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104" +
		"%\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0107\b\x14\x01\x02" +
		"\u0107\u0108\x05$\x13\x02\u0108\u010E\x03\x02\x02\x02\u0109\u010A\f\x03" +
		"\x02\x02\u010A\u010B\x07.\x02\x02\u010B\u010D\x05$\x13\x02\u010C\u0109" +
		"\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02" +
		"\u010E\u010F\x03\x02\x02\x02\u010F'\x03\x02\x02\x02\u0110\u010E\x03\x02" +
		"\x02\x02\u0111\u0119\x05&\x14\x02\u0112\u0113\x05&\x14\x02\u0113\u0114" +
		"\x07\x06\x02\x02\u0114\u0115\x05(\x15\x02\u0115\u0116\x07\x07\x02\x02" +
		"\u0116\u0117\x05(\x15\x02\u0117\u0119\x03\x02\x02\x02\u0118\u0111\x03" +
		"\x02\x02\x02\u0118\u0112\x03\x02\x02\x02\u0119)\x03\x02\x02\x02\u011A" +
		"\u0120\x05(\x15\x02\u011B\u011C\x05\f\x07\x02\u011C\u011D\x05,\x17\x02" +
		"\u011D\u011E\x05*\x16\x02\u011E\u0120\x03\x02\x02\x02\u011F\u011A\x03" +
		"\x02\x02\x02\u011F\u011B\x03\x02\x02\x02\u0120+\x03\x02\x02\x02\u0121" +
		"\u0122\t\r\x02\x02\u0122-\x03\x02\x02\x02\u0123\u0128\x05*\x16\x02\u0124" +
		"\u0125\x070\x02\x02\u0125\u0127\x05*\x16\x02\u0126\u0124\x03\x02\x02\x02" +
		"\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129/\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"\u012C\x05(\x15\x02\u012C1\x03\x02\x02\x02\u012D\u012E\x054\x1B\x02\u012E" +
		"\u012F\x05:\x1E\x02\u012F\u0130\x05\n\x06\x02\u01303\x03\x02\x02\x02\u0131" +
		"\u0132\t\x0E\x02\x02\u01325\x03\x02\x02\x02\u0133\u0135\x058\x1D\x02\u0134" +
		"\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0134\x03\x02" +
		"\x02\x02\u0136\u0137\x03\x02\x02\x02\u01377\x03\x02\x02\x02\u0138\u0139" +
		"\x05<\x1F\x02\u01399\x03\x02\x02\x02\u013A\u013B\x05@!\x02\u013B\u013C" +
		"\x07\x07\x02\x02\u013C\u013F\x05<\x1F\x02\u013D\u013E\x071\x02\x02\u013E" +
		"\u0140\x05J&\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02" +
		"\u0140;\x03\x02\x02\x02\u0141\u014D\x05> \x02\u0142\u0143\x05> \x02\u0143" +
		"\u0144\x079\x02\x02\u0144\u0145\x05> \x02\u0145\u0146\x07;\x02\x02\u0146" +
		"\u014D\x03\x02\x02\x02\u0147\u0148\x07\x1C\x02\x02\u0148\u0149\x07\x1F" +
		"\x02\x02\u0149\u014A\x05> \x02\u014A\u014B\x07 \x02\x02\u014B\u014D\x03" +
		"\x02\x02\x02\u014C\u0141\x03\x02\x02\x02\u014C\u0142\x03\x02\x02\x02\u014C" +
		"\u0147\x03\x02\x02\x02\u014D=\x03\x02\x02\x02\u014E\u014F\t\x0F\x02\x02" +
		'\u014F?\x03\x02\x02\x02\u0150\u0151\x05B"\x02\u0151A\x03\x02\x02\x02' +
		"\u0152\u0153\x07>\x02\x02\u0153C\x03\x02\x02\x02\u0154\u0155\x05F$\x02" +
		"\u0155E\x03\x02\x02\x02\u0156\u015B\x05H%\x02\u0157\u0158\x070\x02\x02" +
		"\u0158\u015A\x05H%\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015D\x03\x02" +
		"\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C" +
		"G\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E\u015F\x05@!\x02\u015F" +
		"\u0160\x07\x07\x02\x02\u0160\u0161\x056\x1C\x02\u0161I\x03\x02\x02\x02" +
		"\u0162\u0163\x05*\x16\x02\u0163K\x03\x02\x02\x02\u0164\u016A\x05N(\x02" +
		"\u0165\u016A\x05T+\x02\u0166\u016A\x05V,\x02\u0167\u016A\x05Z.\x02\u0168" +
		"\u016A\x05b2\x02\u0169\u0164\x03\x02\x02\x02\u0169\u0165\x03\x02\x02\x02" +
		"\u0169\u0166\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u0168\x03" +
		"\x02\x02\x02\u016AM\x03\x02\x02\x02\u016B\u016D\x07#\x02\x02\u016C\u016E" +
		"\x05P)\x02\u016D\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E" +
		"\u016F\x03\x02\x02\x02\u016F\u0170\x07$\x02\x02\u0170O\x03\x02\x02\x02" +
		"\u0171\u0173\x05R*\x02\u0172\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02" +
		"\x02\x02\u0174\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175" +
		"Q\x03\x02\x02\x02\u0176\u0179\x05L'\x02\u0177\u0179\x052\x1A\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179S\x03\x02\x02" +
		"\x02\u017A\u017C\x05.\x18\x02\u017B\u017A\x03\x02\x02\x02\u017B\u017C" +
		"\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x05\n\x06\x02" +
		"\u017EU\x03\x02\x02\x02\u017F\u0180\x07\x13\x02\x02\u0180\u0181\x07\x1F" +
		"\x02\x02\u0181\u0182\x05.\x18\x02\u0182\u0183\x07 \x02\x02\u0183\u0186" +
		"\x05L'\x02\u0184\u0185\x07\x14\x02\x02\u0185\u0187\x05L'\x02\u0186\u0184" +
		"\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0196\x03\x02\x02\x02" +
		"\u0188\u0189\x07\f\x02\x02\u0189\u018A\x07\x1F\x02\x02\u018A\u018B\x05" +
		".\x18\x02\u018B\u018C\x07 \x02\x02\u018C\u0190\x07#\x02\x02\u018D\u018F" +
		"\x05X-\x02\u018E\u018D\x03\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190" +
		"\u018E\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02" +
		"\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0194\x07$\x02\x02\u0194\u0196" +
		"\x03\x02\x02\x02\u0195\u017F\x03\x02\x02\x02\u0195\u0188\x03\x02\x02\x02" +
		"\u0196W\x03\x02\x02\x02\u0197\u0198\x07\r\x02\x02\u0198\u0199\x050\x19" +
		"\x02\u0199\u019A\x07\x07\x02\x02\u019A\u019B\x05L'\x02\u019B\u01A0\x03" +
		"\x02\x02\x02\u019C\u019D\x07\x0E\x02\x02\u019D\u019E\x07\x07\x02\x02\u019E" +
		"\u01A0\x05L'\x02\u019F\u0197\x03\x02\x02\x02\u019F\u019C\x03\x02\x02" +
		"\x02\u01A0Y\x03\x02\x02\x02\u01A1\u01A2\x07\x15\x02\x02\u01A2\u01A3\x07" +
		"\x1F\x02\x02\u01A3\u01A4\x05\\/\x02\u01A4\u01A5\x07 \x02\x02\u01A5\u01A6" +
		"\x05L'\x02\u01A6\u01B6\x03\x02\x02\x02\u01A7\u01A8\x07\x12\x02\x02\u01A8" +
		"\u01A9\x07\x1F\x02\x02\u01A9\u01AA\x05.\x18\x02\u01AA\u01AB\x07 \x02\x02" +
		"\u01AB\u01AC\x05L'\x02\u01AC\u01B6\x03\x02\x02\x02\u01AD\u01AE\x07\x11" +
		"\x02\x02\u01AE\u01AF\x05L'\x02\u01AF\u01B0\x07\x12\x02\x02\u01B0\u01B1" +
		"\x07\x1F\x02\x02\u01B1\u01B2\x05.\x18\x02\u01B2\u01B3\x07 \x02\x02\u01B3" +
		"\u01B4\x05\n\x06\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01A1\x03\x02\x02" +
		"\x02\u01B5\u01A7\x03\x02\x02\x02\u01B5\u01AD\x03\x02\x02\x02\u01B6[\x03" +
		"\x02\x02\x02\u01B7\u01BC\x05^0\x02\u01B8\u01BA\x05.\x18\x02\u01B9\u01B8" +
		"\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BC\x03\x02\x02\x02" +
		"\u01BB\u01B7\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BD\u01BF\x05\n\x06\x02\u01BE\u01C0\x05`1\x02\u01BF\u01BE" +
		"\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02" +
		"\u01C1\u01C3\x05\n\x06\x02\u01C2\u01C4\x05`1\x02\u01C3\u01C2\x03\x02\x02" +
		"\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4]\x03\x02\x02\x02\u01C5\u01C6\x05" +
		"4\x1B\x02\u01C6\u01C7\x05:\x1E\x02\u01C7_\x03\x02\x02\x02\u01C8\u01CD" +
		"\x05*\x16\x02\u01C9\u01CA\x070\x02\x02\u01CA\u01CC\x05*\x16\x02\u01CB" +
		"\u01C9\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02" +
		"\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CEa\x03\x02\x02\x02\u01CF\u01CD" +
		"\x03\x02\x02\x02\u01D0\u01D6\t\x10\x02\x02\u01D1\u01D3\x07\x18\x02\x02" +
		"\u01D2\u01D4\x05.\x18\x02\u01D3\u01D2\x03\x02\x02\x02\u01D3\u01D4\x03" +
		"\x02\x02\x02\u01D4\u01D6\x03\x02\x02\x02\u01D5\u01D0\x03\x02\x02\x02\u01D5" +
		"\u01D1\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x05\n\x06" +
		"\x02\u01D8c\x03\x02\x02\x02/ekmqw~\x91\x97\x9E\xA4\xA9\xAD\xB8\xC2\xCD" +
		"\xD7\xE2\xED\xF8\u0103\u010E\u0118\u011F\u0128\u0136\u013F\u014C\u015B" +
		"\u0169\u016D\u0174\u0178\u017B\u0186\u0190\u0195\u019F\u01B5\u01B9\u01BB" +
		"\u01BF\u01C3\u01CD\u01D3\u01D5";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KipperParser.__ATN) {
			KipperParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KipperParser._serializedATN));
		}

		return KipperParser.__ATN;
	}
}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode {
		return this.getToken(KipperParser.EOF, 0);
	}
	public translationUnit(): TranslationUnitContext | undefined {
		return this.tryGetRuleContext(0, TranslationUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_compilationUnit;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TranslationUnitContext extends ParserRuleContext {
	public externalItem(): ExternalItemContext[];
	public externalItem(i: number): ExternalItemContext;
	public externalItem(i?: number): ExternalItemContext | ExternalItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExternalItemContext);
		} else {
			return this.getRuleContext(i, ExternalItemContext);
		}
	}
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_translationUnit;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterTranslationUnit) {
			listener.enterTranslationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitTranslationUnit) {
			listener.exitTranslationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitTranslationUnit) {
			return visitor.visitTranslationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExternalItemContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_externalItem;
	}
	public copyFrom(ctx: ExternalItemContext): void {
		super.copyFrom(ctx);
	}
}
export class ExternalFunctionDeclarationContext extends ExternalItemContext {
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getRuleContext(0, FunctionDeclarationContext);
	}
	constructor(ctx: ExternalItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterExternalFunctionDeclaration) {
			listener.enterExternalFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitExternalFunctionDeclaration) {
			listener.exitExternalFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitExternalFunctionDeclaration) {
			return visitor.visitExternalFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExternalBlockItemContext extends ExternalItemContext {
	public blockItem(): BlockItemContext {
		return this.getRuleContext(0, BlockItemContext);
	}
	constructor(ctx: ExternalItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterExternalBlockItem) {
			listener.enterExternalBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitExternalBlockItem) {
			listener.exitExternalBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitExternalBlockItem) {
			return visitor.visitExternalBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FunctionDeclarationContext extends ParserRuleContext {
	public DefFunc(): TerminalNode {
		return this.getToken(KipperParser.DefFunc, 0);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public endOfLine(): EndOfLineContext | undefined {
		return this.tryGetRuleContext(0, EndOfLineContext);
	}
	public parameterTypeList(): ParameterTypeListContext | undefined {
		return this.tryGetRuleContext(0, ParameterTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_functionDeclaration;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EndOfLineContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_endOfLine;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterEndOfLine) {
			listener.enterEndOfLine(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitEndOfLine) {
			listener.exitEndOfLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitEndOfLine) {
			return visitor.visitEndOfLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_primaryExpression;
	}
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TangledPrimaryExpressionContext extends PrimaryExpressionContext {
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterTangledPrimaryExpression) {
			listener.enterTangledPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitTangledPrimaryExpression) {
			listener.exitTangledPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitTangledPrimaryExpression) {
			return visitor.visitTangledPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolPrimaryExpressionContext extends PrimaryExpressionContext {
	public True(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.True, 0);
	}
	public False(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.False, 0);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterBoolPrimaryExpression) {
			listener.enterBoolPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitBoolPrimaryExpression) {
			listener.exitBoolPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitBoolPrimaryExpression) {
			return visitor.visitBoolPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierPrimaryExpressionContext extends PrimaryExpressionContext {
	public Identifier(): TerminalNode {
		return this.getToken(KipperParser.Identifier, 0);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterIdentifierPrimaryExpression) {
			listener.enterIdentifierPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitIdentifierPrimaryExpression) {
			listener.exitIdentifierPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitIdentifierPrimaryExpression) {
			return visitor.visitIdentifierPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringPrimaryExpressionContext extends PrimaryExpressionContext {
	public SingleQuoteStringLiteral(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.SingleQuoteStringLiteral, 0);
	}
	public DoubleQuoteStringLiteral(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.DoubleQuoteStringLiteral, 0);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterStringPrimaryExpression) {
			listener.enterStringPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitStringPrimaryExpression) {
			listener.exitStringPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitStringPrimaryExpression) {
			return visitor.visitStringPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FStringPrimaryExpressionContext extends PrimaryExpressionContext {
	public SingleQuoteFStringLiteral(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.SingleQuoteFStringLiteral, 0);
	}
	public DoubleQuoteFStringLiteral(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.DoubleQuoteFStringLiteral, 0);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterFStringPrimaryExpression) {
			listener.enterFStringPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitFStringPrimaryExpression) {
			listener.exitFStringPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitFStringPrimaryExpression) {
			return visitor.visitFStringPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberPrimaryExpressionContext extends PrimaryExpressionContext {
	public IntegerConstant(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.IntegerConstant, 0);
	}
	public FloatingConstant(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FloatingConstant, 0);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterNumberPrimaryExpression) {
			listener.enterNumberPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitNumberPrimaryExpression) {
			listener.exitNumberPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitNumberPrimaryExpression) {
			return visitor.visitNumberPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListPrimaryExpressionContext extends PrimaryExpressionContext {
	public LeftBracket(): TerminalNode {
		return this.getToken(KipperParser.LeftBracket, 0);
	}
	public constantExpression(): ConstantExpressionContext[];
	public constantExpression(i: number): ConstantExpressionContext;
	public constantExpression(i?: number): ConstantExpressionContext | ConstantExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantExpressionContext);
		} else {
			return this.getRuleContext(i, ConstantExpressionContext);
		}
	}
	public RightBracket(): TerminalNode {
		return this.getToken(KipperParser.RightBracket, 0);
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Comma);
		} else {
			return this.getToken(KipperParser.Comma, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterListPrimaryExpression) {
			listener.enterListPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitListPrimaryExpression) {
			listener.exitListPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitListPrimaryExpression) {
			return visitor.visitListPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VoidOrNullOrUndefinedPrimaryExpressionContext extends PrimaryExpressionContext {
	public Null(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Null, 0);
	}
	public Undefined(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Undefined, 0);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterVoidOrNullOrUndefinedPrimaryExpression) {
			listener.enterVoidOrNullOrUndefinedPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitVoidOrNullOrUndefinedPrimaryExpression) {
			listener.exitVoidOrNullOrUndefinedPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitVoidOrNullOrUndefinedPrimaryExpression) {
			return visitor.visitVoidOrNullOrUndefinedPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_postfixExpression;
	}
	public copyFrom(ctx: PostfixExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnPostfixExpressionContext extends PostfixExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: PostfixExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnPostfixExpression) {
			listener.enterPassOnPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnPostfixExpression) {
			listener.exitPassOnPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnPostfixExpression) {
			return visitor.visitPassOnPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArraySpecifierPostfixExpressionContext extends PostfixExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public arraySpecifier(): ArraySpecifierContext[];
	public arraySpecifier(i: number): ArraySpecifierContext;
	public arraySpecifier(i?: number): ArraySpecifierContext | ArraySpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArraySpecifierContext);
		} else {
			return this.getRuleContext(i, ArraySpecifierContext);
		}
	}
	constructor(ctx: PostfixExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterArraySpecifierPostfixExpression) {
			listener.enterArraySpecifierPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitArraySpecifierPostfixExpression) {
			listener.exitArraySpecifierPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitArraySpecifierPostfixExpression) {
			return visitor.visitArraySpecifierPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncrementOrDecrementPostfixExpressionContext extends PostfixExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public incrementOrDecrementOperator(): IncrementOrDecrementOperatorContext {
		return this.getRuleContext(0, IncrementOrDecrementOperatorContext);
	}
	constructor(ctx: PostfixExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterIncrementOrDecrementPostfixExpression) {
			listener.enterIncrementOrDecrementPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitIncrementOrDecrementPostfixExpression) {
			listener.exitIncrementOrDecrementPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitIncrementOrDecrementPostfixExpression) {
			return visitor.visitIncrementOrDecrementPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallPostfixExpressionContext extends PostfixExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public CallFunc(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.CallFunc, 0);
	}
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	constructor(ctx: PostfixExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterFunctionCallPostfixExpression) {
			listener.enterFunctionCallPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitFunctionCallPostfixExpression) {
			listener.exitFunctionCallPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitFunctionCallPostfixExpression) {
			return visitor.visitFunctionCallPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArraySpecifierContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode {
		return this.getToken(KipperParser.LeftBracket, 0);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(KipperParser.RightBracket, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_arraySpecifier;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterArraySpecifier) {
			listener.enterArraySpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitArraySpecifier) {
			listener.exitArraySpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitArraySpecifier) {
			return visitor.visitArraySpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArgumentExpressionListContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Comma);
		} else {
			return this.getToken(KipperParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_argumentExpressionList;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterArgumentExpressionList) {
			listener.enterArgumentExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitArgumentExpressionList) {
			listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_unaryExpression;
	}
	public copyFrom(ctx: UnaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnUnaryExpressionContext extends UnaryExpressionContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(ctx: UnaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnUnaryExpression) {
			listener.enterPassOnUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnUnaryExpression) {
			listener.exitPassOnUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnUnaryExpression) {
			return visitor.visitPassOnUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncrementOrDecrementUnaryExpressionContext extends UnaryExpressionContext {
	public incrementOrDecrementOperator(): IncrementOrDecrementOperatorContext {
		return this.getRuleContext(0, IncrementOrDecrementOperatorContext);
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(ctx: UnaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterIncrementOrDecrementUnaryExpression) {
			listener.enterIncrementOrDecrementUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitIncrementOrDecrementUnaryExpression) {
			listener.exitIncrementOrDecrementUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitIncrementOrDecrementUnaryExpression) {
			return visitor.visitIncrementOrDecrementUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OperatorModifiedUnaryExpressionContext extends UnaryExpressionContext {
	public unaryOperator(): UnaryOperatorContext {
		return this.getRuleContext(0, UnaryOperatorContext);
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(ctx: UnaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterOperatorModifiedUnaryExpression) {
			listener.enterOperatorModifiedUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitOperatorModifiedUnaryExpression) {
			listener.exitOperatorModifiedUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitOperatorModifiedUnaryExpression) {
			return visitor.visitOperatorModifiedUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IncrementOrDecrementOperatorContext extends ParserRuleContext {
	public PlusPlus(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.PlusPlus, 0);
	}
	public MinusMinus(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.MinusMinus, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_incrementOrDecrementOperator;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterIncrementOrDecrementOperator) {
			listener.enterIncrementOrDecrementOperator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitIncrementOrDecrementOperator) {
			listener.exitIncrementOrDecrementOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitIncrementOrDecrementOperator) {
			return visitor.visitIncrementOrDecrementOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryOperatorContext extends ParserRuleContext {
	public Plus(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Plus, 0);
	}
	public Minus(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Minus, 0);
	}
	public Not(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Not, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_unaryOperator;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CastOrConvertExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_castOrConvertExpression;
	}
	public copyFrom(ctx: CastOrConvertExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnCastOrConvertExpressionContext extends CastOrConvertExpressionContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(ctx: CastOrConvertExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnCastOrConvertExpression) {
			listener.enterPassOnCastOrConvertExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnCastOrConvertExpression) {
			listener.exitPassOnCastOrConvertExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnCastOrConvertExpression) {
			return visitor.visitPassOnCastOrConvertExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualCastOrConvertExpressionContext extends CastOrConvertExpressionContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	public As(): TerminalNode {
		return this.getToken(KipperParser.As, 0);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(ctx: CastOrConvertExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualCastOrConvertExpression) {
			listener.enterActualCastOrConvertExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualCastOrConvertExpression) {
			listener.exitActualCastOrConvertExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualCastOrConvertExpression) {
			return visitor.visitActualCastOrConvertExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_multiplicativeExpression;
	}
	public copyFrom(ctx: MultiplicativeExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnMultiplicativeExpressionContext extends MultiplicativeExpressionContext {
	public castOrConvertExpression(): CastOrConvertExpressionContext {
		return this.getRuleContext(0, CastOrConvertExpressionContext);
	}
	constructor(ctx: MultiplicativeExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnMultiplicativeExpression) {
			listener.enterPassOnMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnMultiplicativeExpression) {
			listener.exitPassOnMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnMultiplicativeExpression) {
			return visitor.visitPassOnMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualMultiplicativeExpressionContext extends MultiplicativeExpressionContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public castOrConvertExpression(): CastOrConvertExpressionContext {
		return this.getRuleContext(0, CastOrConvertExpressionContext);
	}
	public Star(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Star, 0);
	}
	public Div(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Div, 0);
	}
	public Mod(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Mod, 0);
	}
	public PowerTo(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.PowerTo, 0);
	}
	constructor(ctx: MultiplicativeExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualMultiplicativeExpression) {
			listener.enterActualMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualMultiplicativeExpression) {
			listener.exitActualMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualMultiplicativeExpression) {
			return visitor.visitActualMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_additiveExpression;
	}
	public copyFrom(ctx: AdditiveExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnAdditiveExpressionContext extends AdditiveExpressionContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	constructor(ctx: AdditiveExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnAdditiveExpression) {
			listener.enterPassOnAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnAdditiveExpression) {
			listener.exitPassOnAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnAdditiveExpression) {
			return visitor.visitPassOnAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualAdditiveExpressionContext extends AdditiveExpressionContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public Plus(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Plus, 0);
	}
	public Minus(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Minus, 0);
	}
	constructor(ctx: AdditiveExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualAdditiveExpression) {
			listener.enterActualAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualAdditiveExpression) {
			listener.exitActualAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualAdditiveExpression) {
			return visitor.visitActualAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_relationalExpression;
	}
	public copyFrom(ctx: RelationalExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnRelationalExpressionContext extends RelationalExpressionContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	constructor(ctx: RelationalExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnRelationalExpression) {
			listener.enterPassOnRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnRelationalExpression) {
			listener.exitPassOnRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnRelationalExpression) {
			return visitor.visitPassOnRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualRelationalExpressionContext extends RelationalExpressionContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public Less(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Less, 0);
	}
	public Greater(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Greater, 0);
	}
	public LessEqual(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.LessEqual, 0);
	}
	public GreaterEqual(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.GreaterEqual, 0);
	}
	constructor(ctx: RelationalExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualRelationalExpression) {
			listener.enterActualRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualRelationalExpression) {
			listener.exitActualRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualRelationalExpression) {
			return visitor.visitActualRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_equalityExpression;
	}
	public copyFrom(ctx: EqualityExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnEqualityExpressionContext extends EqualityExpressionContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	constructor(ctx: EqualityExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnEqualityExpression) {
			listener.enterPassOnEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnEqualityExpression) {
			listener.exitPassOnEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnEqualityExpression) {
			return visitor.visitPassOnEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualEqualityExpressionContext extends EqualityExpressionContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public Equal(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Equal, 0);
	}
	public NotEqual(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.NotEqual, 0);
	}
	constructor(ctx: EqualityExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualEqualityExpression) {
			listener.enterActualEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualEqualityExpression) {
			listener.exitActualEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualEqualityExpression) {
			return visitor.visitActualEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LogicalAndExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_logicalAndExpression;
	}
	public copyFrom(ctx: LogicalAndExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnLogicalAndExpressionContext extends LogicalAndExpressionContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	constructor(ctx: LogicalAndExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnLogicalAndExpression) {
			listener.enterPassOnLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnLogicalAndExpression) {
			listener.exitPassOnLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnLogicalAndExpression) {
			return visitor.visitPassOnLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualLogicalAndExpressionContext extends LogicalAndExpressionContext {
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getRuleContext(0, LogicalAndExpressionContext);
	}
	public AndAnd(): TerminalNode {
		return this.getToken(KipperParser.AndAnd, 0);
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	constructor(ctx: LogicalAndExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualLogicalAndExpression) {
			listener.enterActualLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualLogicalAndExpression) {
			listener.exitActualLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualLogicalAndExpression) {
			return visitor.visitActualLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LogicalOrExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_logicalOrExpression;
	}
	public copyFrom(ctx: LogicalOrExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnLogicalOrExpressionContext extends LogicalOrExpressionContext {
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getRuleContext(0, LogicalAndExpressionContext);
	}
	constructor(ctx: LogicalOrExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnLogicalOrExpression) {
			listener.enterPassOnLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnLogicalOrExpression) {
			listener.exitPassOnLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnLogicalOrExpression) {
			return visitor.visitPassOnLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualLogicalOrExpressionContext extends LogicalOrExpressionContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public OrOr(): TerminalNode {
		return this.getToken(KipperParser.OrOr, 0);
	}
	public logicalAndExpression(): LogicalAndExpressionContext {
		return this.getRuleContext(0, LogicalAndExpressionContext);
	}
	constructor(ctx: LogicalOrExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualLogicalOrExpression) {
			listener.enterActualLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualLogicalOrExpression) {
			listener.exitActualLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualLogicalOrExpression) {
			return visitor.visitActualLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionalExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_conditionalExpression;
	}
	public copyFrom(ctx: ConditionalExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnConditionalExpressionContext extends ConditionalExpressionContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	constructor(ctx: ConditionalExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnConditionalExpression) {
			listener.enterPassOnConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnConditionalExpression) {
			listener.exitPassOnConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnConditionalExpression) {
			return visitor.visitPassOnConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualConditionalExpressionContext extends ConditionalExpressionContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	constructor(ctx: ConditionalExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualConditionalExpression) {
			listener.enterActualConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualConditionalExpression) {
			listener.exitActualConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualConditionalExpression) {
			return visitor.visitActualConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_assignmentExpression;
	}
	public copyFrom(ctx: AssignmentExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnAssignmentExpressionContext extends AssignmentExpressionContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(ctx: AssignmentExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPassOnAssignmentExpression) {
			listener.enterPassOnAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPassOnAssignmentExpression) {
			listener.exitPassOnAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPassOnAssignmentExpression) {
			return visitor.visitPassOnAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualAssignmentExpressionContext extends AssignmentExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	constructor(ctx: AssignmentExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterActualAssignmentExpression) {
			listener.enterActualAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitActualAssignmentExpression) {
			listener.exitActualAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitActualAssignmentExpression) {
			return visitor.visitActualAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Assign, 0);
	}
	public StarAssign(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.StarAssign, 0);
	}
	public DivAssign(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.DivAssign, 0);
	}
	public ModAssign(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.ModAssign, 0);
	}
	public PlusAssign(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.PlusAssign, 0);
	}
	public MinusAssign(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.MinusAssign, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_assignmentOperator;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Comma);
		} else {
			return this.getToken(KipperParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_expression;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConstantExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_constantExpression;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DeclarationContext extends ParserRuleContext {
	public storageTypeSpecifier(): StorageTypeSpecifierContext {
		return this.getRuleContext(0, StorageTypeSpecifierContext);
	}
	public initDeclarator(): InitDeclaratorContext {
		return this.getRuleContext(0, InitDeclaratorContext);
	}
	public endOfLine(): EndOfLineContext {
		return this.getRuleContext(0, EndOfLineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_declaration;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StorageTypeSpecifierContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Var, 0);
	}
	public Const(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Const, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_storageTypeSpecifier;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterStorageTypeSpecifier) {
			listener.enterStorageTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitStorageTypeSpecifier) {
			listener.exitStorageTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitStorageTypeSpecifier) {
			return visitor.visitStorageTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DeclarationSpecifiersContext extends ParserRuleContext {
	public declarationSpecifier(): DeclarationSpecifierContext[];
	public declarationSpecifier(i: number): DeclarationSpecifierContext;
	public declarationSpecifier(i?: number): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclarationSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_declarationSpecifiers;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterDeclarationSpecifiers) {
			listener.enterDeclarationSpecifiers(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitDeclarationSpecifiers) {
			listener.exitDeclarationSpecifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifiers) {
			return visitor.visitDeclarationSpecifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DeclarationSpecifierContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_declarationSpecifier;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterDeclarationSpecifier) {
			listener.enterDeclarationSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitDeclarationSpecifier) {
			listener.exitDeclarationSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifier) {
			return visitor.visitDeclarationSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InitDeclaratorContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public Assign(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Assign, 0);
	}
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_initDeclarator;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeSpecifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_typeSpecifier;
	}
	public copyFrom(ctx: TypeSpecifierContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifierTypeSpecifierContext extends TypeSpecifierContext {
	public typeSpecifierIdentifier(): TypeSpecifierIdentifierContext {
		return this.getRuleContext(0, TypeSpecifierIdentifierContext);
	}
	constructor(ctx: TypeSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterIdentifierTypeSpecifier) {
			listener.enterIdentifierTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitIdentifierTypeSpecifier) {
			listener.exitIdentifierTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitIdentifierTypeSpecifier) {
			return visitor.visitIdentifierTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericTypeSpecifierContext extends TypeSpecifierContext {
	public typeSpecifierIdentifier(): TypeSpecifierIdentifierContext[];
	public typeSpecifierIdentifier(i: number): TypeSpecifierIdentifierContext;
	public typeSpecifierIdentifier(i?: number): TypeSpecifierIdentifierContext | TypeSpecifierIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierIdentifierContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierIdentifierContext);
		}
	}
	public Less(): TerminalNode {
		return this.getToken(KipperParser.Less, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(KipperParser.Greater, 0);
	}
	constructor(ctx: TypeSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterGenericTypeSpecifier) {
			listener.enterGenericTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitGenericTypeSpecifier) {
			listener.exitGenericTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitGenericTypeSpecifier) {
			return visitor.visitGenericTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofTypeSpecifierContext extends TypeSpecifierContext {
	public Typeof(): TerminalNode {
		return this.getToken(KipperParser.Typeof, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public typeSpecifierIdentifier(): TypeSpecifierIdentifierContext {
		return this.getRuleContext(0, TypeSpecifierIdentifierContext);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	constructor(ctx: TypeSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterTypeofTypeSpecifier) {
			listener.enterTypeofTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitTypeofTypeSpecifier) {
			listener.exitTypeofTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitTypeofTypeSpecifier) {
			return visitor.visitTypeofTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeSpecifierIdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Identifier, 0);
	}
	public Null(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Null, 0);
	}
	public Undefined(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Undefined, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_typeSpecifierIdentifier;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterTypeSpecifierIdentifier) {
			listener.enterTypeSpecifierIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitTypeSpecifierIdentifier) {
			listener.exitTypeSpecifierIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitTypeSpecifierIdentifier) {
			return visitor.visitTypeSpecifierIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DeclaratorContext extends ParserRuleContext {
	public directDeclarator(): DirectDeclaratorContext {
		return this.getRuleContext(0, DirectDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_declarator;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DirectDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode {
		return this.getToken(KipperParser.Identifier, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_directDeclarator;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterDirectDeclarator) {
			listener.enterDirectDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitDirectDeclarator) {
			listener.exitDirectDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitDirectDeclarator) {
			return visitor.visitDirectDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParameterTypeListContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_parameterTypeList;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterParameterTypeList) {
			listener.enterParameterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitParameterTypeList) {
			listener.exitParameterTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitParameterTypeList) {
			return visitor.visitParameterTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParameterListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext[];
	public parameterDeclaration(i: number): ParameterDeclarationContext;
	public parameterDeclaration(i?: number): ParameterDeclarationContext | ParameterDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Comma);
		} else {
			return this.getToken(KipperParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_parameterList;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParameterDeclarationContext extends ParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_parameterDeclaration;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InitializerContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_initializer;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StatementContext extends ParserRuleContext {
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public selectionStatement(): SelectionStatementContext | undefined {
		return this.tryGetRuleContext(0, SelectionStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public jumpStatement(): JumpStatementContext | undefined {
		return this.tryGetRuleContext(0, JumpStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_statement;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode {
		return this.getToken(KipperParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(KipperParser.RightBrace, 0);
	}
	public blockItemList(): BlockItemListContext | undefined {
		return this.tryGetRuleContext(0, BlockItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_compoundStatement;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockItemListContext extends ParserRuleContext {
	public blockItem(): BlockItemContext[];
	public blockItem(i: number): BlockItemContext;
	public blockItem(i?: number): BlockItemContext | BlockItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockItemContext);
		} else {
			return this.getRuleContext(i, BlockItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_blockItemList;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterBlockItemList) {
			listener.enterBlockItemList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitBlockItemList) {
			listener.exitBlockItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitBlockItemList) {
			return visitor.visitBlockItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockItemContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_blockItem;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterBlockItem) {
			listener.enterBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitBlockItem) {
			listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionStatementContext extends ParserRuleContext {
	public endOfLine(): EndOfLineContext {
		return this.getRuleContext(0, EndOfLineContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_expressionStatement;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SelectionStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_selectionStatement;
	}
	public copyFrom(ctx: SelectionStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class IfStatementContext extends SelectionStatementContext {
	public If(): TerminalNode {
		return this.getToken(KipperParser.If, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Else, 0);
	}
	constructor(ctx: SelectionStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SwitchStatementContext extends SelectionStatementContext {
	public Switch(): TerminalNode {
		return this.getToken(KipperParser.Switch, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(KipperParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(KipperParser.RightBrace, 0);
	}
	public switchLabeledStatement(): SwitchLabeledStatementContext[];
	public switchLabeledStatement(i: number): SwitchLabeledStatementContext;
	public switchLabeledStatement(i?: number): SwitchLabeledStatementContext | SwitchLabeledStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabeledStatementContext);
		} else {
			return this.getRuleContext(i, SwitchLabeledStatementContext);
		}
	}
	constructor(ctx: SelectionStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchLabeledStatementContext extends ParserRuleContext {
	public Case(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Case, 0);
	}
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public Default(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Default, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_switchLabeledStatement;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterSwitchLabeledStatement) {
			listener.enterSwitchLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitSwitchLabeledStatement) {
			listener.exitSwitchLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitSwitchLabeledStatement) {
			return visitor.visitSwitchLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IterationStatementContext extends ParserRuleContext {
	public For(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.For, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public forCondition(): ForConditionContext | undefined {
		return this.tryGetRuleContext(0, ForConditionContext);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.While, 0);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Do(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Do, 0);
	}
	public endOfLine(): EndOfLineContext | undefined {
		return this.tryGetRuleContext(0, EndOfLineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_iterationStatement;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForConditionContext extends ParserRuleContext {
	public endOfLine(): EndOfLineContext[];
	public endOfLine(i: number): EndOfLineContext;
	public endOfLine(i?: number): EndOfLineContext | EndOfLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfLineContext);
		} else {
			return this.getRuleContext(i, EndOfLineContext);
		}
	}
	public forDeclaration(): ForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ForDeclarationContext);
	}
	public forExpression(): ForExpressionContext[];
	public forExpression(i: number): ForExpressionContext;
	public forExpression(i?: number): ForExpressionContext | ForExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForExpressionContext);
		} else {
			return this.getRuleContext(i, ForExpressionContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_forCondition;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterForCondition) {
			listener.enterForCondition(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitForCondition) {
			listener.exitForCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitForCondition) {
			return visitor.visitForCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForDeclarationContext extends ParserRuleContext {
	public storageTypeSpecifier(): StorageTypeSpecifierContext {
		return this.getRuleContext(0, StorageTypeSpecifierContext);
	}
	public initDeclarator(): InitDeclaratorContext {
		return this.getRuleContext(0, InitDeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_forDeclaration;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterForDeclaration) {
			listener.enterForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitForDeclaration) {
			listener.exitForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitForDeclaration) {
			return visitor.visitForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForExpressionContext extends ParserRuleContext {
	public assignmentExpression(): AssignmentExpressionContext[];
	public assignmentExpression(i: number): AssignmentExpressionContext;
	public assignmentExpression(i?: number): AssignmentExpressionContext | AssignmentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentExpressionContext);
		} else {
			return this.getRuleContext(i, AssignmentExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Comma);
		} else {
			return this.getToken(KipperParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_forExpression;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterForExpression) {
			listener.enterForExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitForExpression) {
			listener.exitForExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitForExpression) {
			return visitor.visitForExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class JumpStatementContext extends ParserRuleContext {
	public endOfLine(): EndOfLineContext {
		return this.getRuleContext(0, EndOfLineContext);
	}
	public Return(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Return, 0);
	}
	public Continue(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Continue, 0);
	}
	public Break(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Break, 0);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_jumpStatement;
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterJumpStatement) {
			listener.enterJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitJumpStatement) {
			listener.exitJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitJumpStatement) {
			return visitor.visitJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
