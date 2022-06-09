// Generated from ./Kipper.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
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
	public static readonly Const = 5;
	public static readonly Var = 6;
	public static readonly As = 7;
	public static readonly Spread = 8;
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
	public static readonly RULE_declarator = 30;
	public static readonly RULE_directDeclarator = 31;
	public static readonly RULE_parameterTypeList = 32;
	public static readonly RULE_parameterList = 33;
	public static readonly RULE_parameterDeclaration = 34;
	public static readonly RULE_initializer = 35;
	public static readonly RULE_statement = 36;
	public static readonly RULE_compoundStatement = 37;
	public static readonly RULE_blockItemList = 38;
	public static readonly RULE_blockItem = 39;
	public static readonly RULE_expressionStatement = 40;
	public static readonly RULE_selectionStatement = 41;
	public static readonly RULE_switchLabeledStatement = 42;
	public static readonly RULE_iterationStatement = 43;
	public static readonly RULE_forCondition = 44;
	public static readonly RULE_forDeclaration = 45;
	public static readonly RULE_forExpression = 46;
	public static readonly RULE_jumpStatement = 47;
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
		"'struct'",
		"'typeof'",
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
		"Struct",
		"Typeof",
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
		"CharacterConstant",
		"FStringLiteral",
		"StringLiteral",
		"WS",
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
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 2) & ~0x1f) === 0 &&
						((1 << (_la - 2)) &
							((1 << (KipperParser.T__1 - 2)) |
								(1 << (KipperParser.Const - 2)) |
								(1 << (KipperParser.Var - 2)) |
								(1 << (KipperParser.Switch - 2)) |
								(1 << (KipperParser.Break - 2)) |
								(1 << (KipperParser.Continue - 2)) |
								(1 << (KipperParser.Do - 2)) |
								(1 << (KipperParser.While - 2)) |
								(1 << (KipperParser.If - 2)) |
								(1 << (KipperParser.For - 2)) |
								(1 << (KipperParser.DefFunc - 2)) |
								(1 << (KipperParser.Return - 2)) |
								(1 << (KipperParser.CallFunc - 2)) |
								(1 << (KipperParser.True - 2)) |
								(1 << (KipperParser.False - 2)) |
								(1 << (KipperParser.LeftParen - 2)) |
								(1 << (KipperParser.LeftBracket - 2)) |
								(1 << (KipperParser.LeftBrace - 2)) |
								(1 << (KipperParser.Plus - 2)))) !==
							0) ||
					(((_la - 34) & ~0x1f) === 0 &&
						((1 << (_la - 34)) &
							((1 << (KipperParser.PlusPlus - 34)) |
								(1 << (KipperParser.Minus - 34)) |
								(1 << (KipperParser.MinusMinus - 34)) |
								(1 << (KipperParser.Not - 34)) |
								(1 << (KipperParser.Identifier - 34)) |
								(1 << (KipperParser.IntegerConstant - 34)) |
								(1 << (KipperParser.FloatingConstant - 34)) |
								(1 << (KipperParser.CharacterConstant - 34)) |
								(1 << (KipperParser.FStringLiteral - 34)) |
								(1 << (KipperParser.StringLiteral - 34)) |
								(1 << (KipperParser.WS - 34)))) !==
							0)
				) {
					{
						this.state = 96;
						this.translationUnit();
					}
				}

				this.state = 99;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						this.state = 108;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
							case 1:
								{
									this.state = 101;
									this.externalItem();
								}
								break;

							case 2:
								{
									this.state = 102;
									this.endOfLine();
								}
								break;

							case 3:
								{
									this.state = 104;
									this._errHandler.sync(this);
									_alt = 1;
									do {
										switch (_alt) {
											case 1:
												{
													{
														this.state = 103;
														this.match(KipperParser.WS);
													}
												}
												break;
											default:
												throw new NoViableAltException(this);
										}
										this.state = 106;
										this._errHandler.sync(this);
										_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
									} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
								}
								break;
						}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (
					(((_la - 2) & ~0x1f) === 0 &&
						((1 << (_la - 2)) &
							((1 << (KipperParser.T__1 - 2)) |
								(1 << (KipperParser.Const - 2)) |
								(1 << (KipperParser.Var - 2)) |
								(1 << (KipperParser.Switch - 2)) |
								(1 << (KipperParser.Break - 2)) |
								(1 << (KipperParser.Continue - 2)) |
								(1 << (KipperParser.Do - 2)) |
								(1 << (KipperParser.While - 2)) |
								(1 << (KipperParser.If - 2)) |
								(1 << (KipperParser.For - 2)) |
								(1 << (KipperParser.DefFunc - 2)) |
								(1 << (KipperParser.Return - 2)) |
								(1 << (KipperParser.CallFunc - 2)) |
								(1 << (KipperParser.True - 2)) |
								(1 << (KipperParser.False - 2)) |
								(1 << (KipperParser.LeftParen - 2)) |
								(1 << (KipperParser.LeftBracket - 2)) |
								(1 << (KipperParser.LeftBrace - 2)) |
								(1 << (KipperParser.Plus - 2)))) !==
							0) ||
					(((_la - 34) & ~0x1f) === 0 &&
						((1 << (_la - 34)) &
							((1 << (KipperParser.PlusPlus - 34)) |
								(1 << (KipperParser.Minus - 34)) |
								(1 << (KipperParser.MinusMinus - 34)) |
								(1 << (KipperParser.Not - 34)) |
								(1 << (KipperParser.Identifier - 34)) |
								(1 << (KipperParser.IntegerConstant - 34)) |
								(1 << (KipperParser.FloatingConstant - 34)) |
								(1 << (KipperParser.CharacterConstant - 34)) |
								(1 << (KipperParser.FStringLiteral - 34)) |
								(1 << (KipperParser.StringLiteral - 34)) |
								(1 << (KipperParser.WS - 34)))) !==
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
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.DefFunc:
					_localctx = new ExternalFunctionDeclarationContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 112;
						this.functionDeclaration();
					}
					break;
				case KipperParser.T__1:
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
				case KipperParser.CharacterConstant:
				case KipperParser.FStringLiteral:
				case KipperParser.StringLiteral:
				case KipperParser.WS:
					_localctx = new ExternalBlockItemContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 113;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 116;
				this.match(KipperParser.DefFunc);
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 117;
							this.match(KipperParser.WS);
						}
					}
					this.state = 122;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 123;
				this.declarator();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 124;
							this.match(KipperParser.WS);
						}
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 130;
				this.match(KipperParser.LeftParen);
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 131;
							this.match(KipperParser.WS);
						}
					}
					this.state = 136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 137;
						this.parameterTypeList();
						this.state = 141;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 138;
									this.match(KipperParser.WS);
								}
							}
							this.state = 143;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 146;
				this.match(KipperParser.RightParen);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 147;
							this.match(KipperParser.WS);
						}
					}
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 153;
				this.match(KipperParser.T__0);
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 154;
							this.match(KipperParser.WS);
						}
					}
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 160;
				this.typeSpecifier();
				this.state = 164;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 161;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 166;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				this.state = 169;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.LeftBrace:
						{
							this.state = 167;
							this.compoundStatement();
						}
						break;
					case KipperParser.T__1:
					case KipperParser.WS:
						{
							this.state = 168;
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 171;
							this.match(KipperParser.WS);
						}
					}
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 177;
				this.match(KipperParser.T__1);
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 178;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 183;
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
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftParen:
					_localctx = new TangledPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 184;
						this.match(KipperParser.LeftParen);
						this.state = 185;
						this.expression();
						this.state = 186;
						this.match(KipperParser.RightParen);
					}
					break;
				case KipperParser.True:
				case KipperParser.False:
					_localctx = new BoolPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 188;
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
						this.state = 189;
						this.match(KipperParser.Identifier);
					}
					break;
				case KipperParser.CharacterConstant:
					_localctx = new CharacterPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 190;
						this.match(KipperParser.CharacterConstant);
					}
					break;
				case KipperParser.StringLiteral:
					_localctx = new StringPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 191;
						this.match(KipperParser.StringLiteral);
					}
					break;
				case KipperParser.FStringLiteral:
					_localctx = new FStringPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 192;
						this.match(KipperParser.FStringLiteral);
					}
					break;
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
					_localctx = new NumberPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 193;
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
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 194;
						this.match(KipperParser.LeftBracket);
						this.state = 198;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 195;
									this.match(KipperParser.WS);
								}
							}
							this.state = 200;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 201;
						this.constantExpression();
						this.state = 205;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 202;
									this.match(KipperParser.WS);
								}
							}
							this.state = 207;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 224;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Comma) {
							{
								{
									this.state = 208;
									this.match(KipperParser.Comma);
									this.state = 212;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									while (_la === KipperParser.WS) {
										{
											{
												this.state = 209;
												this.match(KipperParser.WS);
											}
										}
										this.state = 214;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
									}
									this.state = 215;
									this.constantExpression();
									this.state = 219;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									while (_la === KipperParser.WS) {
										{
											{
												this.state = 216;
												this.match(KipperParser.WS);
											}
										}
										this.state = 221;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
									}
								}
							}
							this.state = 226;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 227;
						this.match(KipperParser.RightBracket);
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
			this.state = 273;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
				case 1:
					_localctx = new PassOnPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 231;
						this.primaryExpression();
					}
					break;

				case 2:
					_localctx = new ArraySpecifierPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 232;
						this.primaryExpression();
						this.state = 234;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
								case 1:
									{
										{
											this.state = 233;
											this.arraySpecifier();
										}
									}
									break;
								default:
									throw new NoViableAltException(this);
							}
							this.state = 236;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;

				case 3:
					_localctx = new IncrementOrDecrementPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 238;
						this.primaryExpression();
						this.state = 239;
						this.incrementOrDecrementOperator();
					}
					break;

				case 4:
					_localctx = new FunctionCallPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 241;
						this.match(KipperParser.CallFunc);
						this.state = 245;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 242;
									this.match(KipperParser.WS);
								}
							}
							this.state = 247;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 248;
						this.primaryExpression();
						this.state = 252;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 249;
									this.match(KipperParser.WS);
								}
							}
							this.state = 254;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 255;
						this.match(KipperParser.LeftParen);
						this.state = 259;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 256;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 261;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
						}
						this.state = 263;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							((_la & ~0x1f) === 0 &&
								((1 << _la) &
									((1 << KipperParser.CallFunc) |
										(1 << KipperParser.True) |
										(1 << KipperParser.False) |
										(1 << KipperParser.LeftParen) |
										(1 << KipperParser.LeftBracket))) !==
									0) ||
							(((_la - 33) & ~0x1f) === 0 &&
								((1 << (_la - 33)) &
									((1 << (KipperParser.Plus - 33)) |
										(1 << (KipperParser.PlusPlus - 33)) |
										(1 << (KipperParser.Minus - 33)) |
										(1 << (KipperParser.MinusMinus - 33)) |
										(1 << (KipperParser.Not - 33)) |
										(1 << (KipperParser.Identifier - 33)) |
										(1 << (KipperParser.IntegerConstant - 33)) |
										(1 << (KipperParser.FloatingConstant - 33)) |
										(1 << (KipperParser.CharacterConstant - 33)) |
										(1 << (KipperParser.FStringLiteral - 33)) |
										(1 << (KipperParser.StringLiteral - 33)))) !==
									0)
						) {
							{
								this.state = 262;
								this.argumentExpressionList();
							}
						}

						this.state = 268;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 265;
									this.match(KipperParser.WS);
								}
							}
							this.state = 270;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 271;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 275;
				this.match(KipperParser.LeftBracket);
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 276;
							this.match(KipperParser.WS);
						}
					}
					this.state = 281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 282;
				this.expression();
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 283;
							this.match(KipperParser.WS);
						}
					}
					this.state = 288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 289;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 291;
				this.assignmentExpression();
				this.state = 295;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 292;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 298;
							this.match(KipperParser.Comma);
							this.state = 302;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === KipperParser.WS) {
								{
									{
										this.state = 299;
										this.match(KipperParser.WS);
									}
								}
								this.state = 304;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 305;
							this.assignmentExpression();
							this.state = 309;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
										{
											this.state = 306;
											this.match(KipperParser.WS);
										}
									}
								}
								this.state = 311;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
							}
						}
					}
					this.state = 316;
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
		let _la: number;
		try {
			this.state = 336;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.CallFunc:
				case KipperParser.True:
				case KipperParser.False:
				case KipperParser.LeftParen:
				case KipperParser.LeftBracket:
				case KipperParser.Identifier:
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
				case KipperParser.CharacterConstant:
				case KipperParser.FStringLiteral:
				case KipperParser.StringLiteral:
					_localctx = new PassOnUnaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 317;
						this.postfixExpression();
					}
					break;
				case KipperParser.PlusPlus:
				case KipperParser.MinusMinus:
					_localctx = new IncrementOrDecrementUnaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 318;
						this.incrementOrDecrementOperator();
						this.state = 322;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 319;
									this.match(KipperParser.WS);
								}
							}
							this.state = 324;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 325;
						this.postfixExpression();
					}
					break;
				case KipperParser.Plus:
				case KipperParser.Minus:
				case KipperParser.Not:
					_localctx = new OperatorModifiedUnaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 327;
						this.unaryOperator();
						this.state = 331;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 328;
									this.match(KipperParser.WS);
								}
							}
							this.state = 333;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 334;
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
				this.state = 338;
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
				this.state = 340;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.Plus - 33)) | (1 << (KipperParser.Minus - 33)) | (1 << (KipperParser.Not - 33)))) !==
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
		let _la: number;
		try {
			this.state = 359;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
				case 1:
					_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 342;
						this.unaryExpression();
					}
					break;

				case 2:
					_localctx = new ActualCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 343;
						this.unaryExpression();
						this.state = 347;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 344;
									this.match(KipperParser.WS);
								}
							}
							this.state = 349;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 350;
						this.match(KipperParser.As);
						this.state = 354;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 351;
									this.match(KipperParser.WS);
								}
							}
							this.state = 356;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 357;
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

					this.state = 362;
					this.castOrConvertExpression();
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 387;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
								this.state = 364;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 368;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 365;
											this.match(KipperParser.WS);
										}
									}
									this.state = 370;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 371;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 37) & ~0x1f) === 0 &&
										((1 << (_la - 37)) &
											((1 << (KipperParser.Star - 37)) |
												(1 << (KipperParser.Div - 37)) |
												(1 << (KipperParser.Mod - 37)) |
												(1 << (KipperParser.PowerTo - 37)))) !==
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
								this.state = 375;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 372;
											this.match(KipperParser.WS);
										}
									}
									this.state = 377;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 378;
								this.castOrConvertExpression();
								this.state = 382;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
											{
												this.state = 379;
												this.match(KipperParser.WS);
											}
										}
									}
									this.state = 384;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
								}
							}
						}
					}
					this.state = 389;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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

					this.state = 391;
					this.multiplicativeExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 416;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
								this.state = 393;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 397;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 394;
											this.match(KipperParser.WS);
										}
									}
									this.state = 399;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 400;
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
								this.state = 404;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 401;
											this.match(KipperParser.WS);
										}
									}
									this.state = 406;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 407;
								this.multiplicativeExpression(0);
								this.state = 411;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
											{
												this.state = 408;
												this.match(KipperParser.WS);
											}
										}
									}
									this.state = 413;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
								}
							}
						}
					}
					this.state = 418;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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

					this.state = 420;
					this.additiveExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 445;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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
								this.state = 422;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 426;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 423;
											this.match(KipperParser.WS);
										}
									}
									this.state = 428;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 429;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 53) & ~0x1f) === 0 &&
										((1 << (_la - 53)) &
											((1 << (KipperParser.Less - 53)) |
												(1 << (KipperParser.LessEqual - 53)) |
												(1 << (KipperParser.Greater - 53)) |
												(1 << (KipperParser.GreaterEqual - 53)))) !==
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
								this.state = 433;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 430;
											this.match(KipperParser.WS);
										}
									}
									this.state = 435;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 436;
								this.additiveExpression(0);
								this.state = 440;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
											{
												this.state = 437;
												this.match(KipperParser.WS);
											}
										}
									}
									this.state = 442;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
								}
							}
						}
					}
					this.state = 447;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
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

					this.state = 449;
					this.relationalExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 474;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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
								this.state = 451;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 455;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 452;
											this.match(KipperParser.WS);
										}
									}
									this.state = 457;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 458;
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
								this.state = 462;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 459;
											this.match(KipperParser.WS);
										}
									}
									this.state = 464;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 465;
								this.relationalExpression(0);
								this.state = 469;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
											{
												this.state = 466;
												this.match(KipperParser.WS);
											}
										}
									}
									this.state = 471;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
								}
							}
						}
					}
					this.state = 476;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalAndExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 478;
					this.equalityExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 503;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
								this.state = 480;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 484;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 481;
											this.match(KipperParser.WS);
										}
									}
									this.state = 486;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 487;
								this.match(KipperParser.AndAnd);
								this.state = 491;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 488;
											this.match(KipperParser.WS);
										}
									}
									this.state = 493;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 494;
								this.equalityExpression(0);
								this.state = 498;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
											{
												this.state = 495;
												this.match(KipperParser.WS);
											}
										}
									}
									this.state = 500;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
								}
							}
						}
					}
					this.state = 505;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalOrExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 507;
					this.logicalAndExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 532;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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
								this.state = 509;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 513;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 510;
											this.match(KipperParser.WS);
										}
									}
									this.state = 515;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 516;
								this.match(KipperParser.OrOr);
								this.state = 520;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 517;
											this.match(KipperParser.WS);
										}
									}
									this.state = 522;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 523;
								this.logicalAndExpression(0);
								this.state = 527;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
											{
												this.state = 524;
												this.match(KipperParser.WS);
											}
										}
									}
									this.state = 529;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
								}
							}
						}
					}
					this.state = 534;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
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
		let _la: number;
		try {
			let _alt: number;
			this.state = 571;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
				case 1:
					_localctx = new PassOnConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 535;
						this.logicalOrExpression(0);
					}
					break;

				case 2:
					_localctx = new ActualConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 536;
						this.logicalOrExpression(0);
						this.state = 540;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 537;
									this.match(KipperParser.WS);
								}
							}
							this.state = 542;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 543;
						this.match(KipperParser.T__2);
						this.state = 547;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 544;
									this.match(KipperParser.WS);
								}
							}
							this.state = 549;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 550;
						this.conditionalExpression();
						this.state = 554;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 551;
									this.match(KipperParser.WS);
								}
							}
							this.state = 556;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 557;
						this.match(KipperParser.T__3);
						this.state = 561;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 558;
									this.match(KipperParser.WS);
								}
							}
							this.state = 563;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 564;
						this.conditionalExpression();
						this.state = 568;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 565;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 570;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
						}
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
		let _la: number;
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
				case 1:
					_localctx = new PassOnAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 573;
						this.conditionalExpression();
					}
					break;

				case 2:
					_localctx = new ActualAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 574;
						this.primaryExpression();
						this.state = 578;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 575;
									this.match(KipperParser.WS);
								}
							}
							this.state = 580;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 581;
						this.assignmentOperator();
						this.state = 585;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 582;
									this.match(KipperParser.WS);
								}
							}
							this.state = 587;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 588;
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
				this.state = 592;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 45) & ~0x1f) === 0 &&
						((1 << (_la - 45)) &
							((1 << (KipperParser.Assign - 45)) |
								(1 << (KipperParser.StarAssign - 45)) |
								(1 << (KipperParser.DivAssign - 45)) |
								(1 << (KipperParser.ModAssign - 45)) |
								(1 << (KipperParser.PlusAssign - 45)) |
								(1 << (KipperParser.MinusAssign - 45)))) !==
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 594;
				this.assignmentExpression();
				this.state = 598;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 595;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 600;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
				}
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 601;
							this.match(KipperParser.Comma);
							this.state = 605;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === KipperParser.WS) {
								{
									{
										this.state = 602;
										this.match(KipperParser.WS);
									}
								}
								this.state = 607;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 608;
							this.assignmentExpression();
							this.state = 612;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
										{
											this.state = 609;
											this.match(KipperParser.WS);
										}
									}
								}
								this.state = 614;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
							}
						}
					}
					this.state = 619;
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
				this.state = 620;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 622;
				this.storageTypeSpecifier();
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 623;
							this.match(KipperParser.WS);
						}
					}
					this.state = 628;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 629;
				this.initDeclarator();
				this.state = 630;
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
				this.state = 632;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 634;
							this.declarationSpecifier();
							this.state = 638;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
										{
											this.state = 635;
											this.match(KipperParser.WS);
										}
									}
								}
								this.state = 640;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
							}
						}
					}
					this.state = 643;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.Typeof || _la === KipperParser.Identifier);
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
				this.state = 645;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 647;
				this.declarator();
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 648;
							this.match(KipperParser.WS);
						}
					}
					this.state = 653;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 654;
				this.match(KipperParser.T__3);
				this.state = 658;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 655;
							this.match(KipperParser.WS);
						}
					}
					this.state = 660;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 661;
				this.typeSpecifier();
				this.state = 665;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 662;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 667;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				}
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Assign) {
					{
						this.state = 668;
						this.match(KipperParser.Assign);
						this.state = 672;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 669;
									this.match(KipperParser.WS);
								}
							}
							this.state = 674;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 675;
						this.initializer();
						this.state = 679;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 676;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 681;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
						}
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
		let _la: number;
		try {
			this.state = 729;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
				case 1:
					_localctx = new SingleTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 684;
						this.match(KipperParser.Identifier);
					}
					break;

				case 2:
					_localctx = new GenericTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 685;
						this.match(KipperParser.Identifier);
						this.state = 689;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 686;
									this.match(KipperParser.WS);
								}
							}
							this.state = 691;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 692;
						this.match(KipperParser.Less);
						this.state = 696;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 693;
									this.match(KipperParser.WS);
								}
							}
							this.state = 698;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 699;
						this.match(KipperParser.Identifier);
						this.state = 703;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 700;
									this.match(KipperParser.WS);
								}
							}
							this.state = 705;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 706;
						this.match(KipperParser.Greater);
					}
					break;

				case 3:
					_localctx = new TypeofTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 707;
						this.match(KipperParser.Typeof);
						this.state = 711;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 708;
									this.match(KipperParser.WS);
								}
							}
							this.state = 713;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 714;
						this.match(KipperParser.LeftParen);
						this.state = 718;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 715;
									this.match(KipperParser.WS);
								}
							}
							this.state = 720;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 721;
						this.match(KipperParser.Identifier);
						this.state = 725;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 722;
									this.match(KipperParser.WS);
								}
							}
							this.state = 727;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 728;
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 731;
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
		this.enterRule(_localctx, 62, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 733;
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
		this.enterRule(_localctx, 64, KipperParser.RULE_parameterTypeList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 735;
				this.parameterList();
				this.state = 739;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 736;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 741;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
				}
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Comma) {
					{
						this.state = 742;
						this.match(KipperParser.Comma);
						this.state = 746;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 743;
									this.match(KipperParser.WS);
								}
							}
							this.state = 748;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 749;
						this.match(KipperParser.Spread);
						this.state = 750;
						this.match(KipperParser.Identifier);
						this.state = 754;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 751;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 756;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
						}
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 759;
				this.parameterDeclaration();
				this.state = 763;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 760;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 765;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
				}
				this.state = 782;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 766;
								this.match(KipperParser.Comma);
								this.state = 770;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								while (_la === KipperParser.WS) {
									{
										{
											this.state = 767;
											this.match(KipperParser.WS);
										}
									}
									this.state = 772;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
								}
								this.state = 773;
								this.parameterDeclaration();
								this.state = 777;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
								while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
									if (_alt === 1) {
										{
											{
												this.state = 774;
												this.match(KipperParser.WS);
											}
										}
									}
									this.state = 779;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
								}
							}
						}
					}
					this.state = 784;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
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
		this.enterRule(_localctx, 68, KipperParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 785;
				this.declarator();
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 786;
							this.match(KipperParser.WS);
						}
					}
					this.state = 791;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 792;
				this.match(KipperParser.T__3);
				this.state = 796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 793;
							this.match(KipperParser.WS);
						}
					}
					this.state = 798;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 799;
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
		this.enterRule(_localctx, 70, KipperParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 801;
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
		this.enterRule(_localctx, 72, KipperParser.RULE_statement);
		try {
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftBrace:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 803;
						this.compoundStatement();
					}
					break;
				case KipperParser.T__1:
				case KipperParser.CallFunc:
				case KipperParser.True:
				case KipperParser.False:
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
				case KipperParser.CharacterConstant:
				case KipperParser.FStringLiteral:
				case KipperParser.StringLiteral:
				case KipperParser.WS:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 804;
						this.expressionStatement();
					}
					break;
				case KipperParser.Switch:
				case KipperParser.If:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 805;
						this.selectionStatement();
					}
					break;
				case KipperParser.Do:
				case KipperParser.While:
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 806;
						this.iterationStatement();
					}
					break;
				case KipperParser.Break:
				case KipperParser.Continue:
				case KipperParser.Return:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 807;
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
		this.enterRule(_localctx, 74, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 810;
				this.match(KipperParser.LeftBrace);
				this.state = 814;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 811;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 816;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
				}
				this.state = 818;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
					case 1:
						{
							this.state = 817;
							this.blockItemList();
						}
						break;
				}
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 820;
							this.match(KipperParser.WS);
						}
					}
					this.state = 825;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 826;
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
		this.enterRule(_localctx, 76, KipperParser.RULE_blockItemList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 829;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								{
									this.state = 828;
									this.blockItem();
								}
							}
							break;
						default:
							throw new NoViableAltException(this);
					}
					this.state = 831;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(_localctx, 78, KipperParser.RULE_blockItem);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 836;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 833;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 838;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				}
				this.state = 841;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.T__1:
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
					case KipperParser.CharacterConstant:
					case KipperParser.FStringLiteral:
					case KipperParser.StringLiteral:
					case KipperParser.WS:
						{
							this.state = 839;
							this.statement();
						}
						break;
					case KipperParser.Const:
					case KipperParser.Var:
						{
							this.state = 840;
							this.declaration();
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 846;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 843;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 848;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
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
		this.enterRule(_localctx, 80, KipperParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)) |
								(1 << (KipperParser.IntegerConstant - 33)) |
								(1 << (KipperParser.FloatingConstant - 33)) |
								(1 << (KipperParser.CharacterConstant - 33)) |
								(1 << (KipperParser.FStringLiteral - 33)) |
								(1 << (KipperParser.StringLiteral - 33)))) !==
							0)
				) {
					{
						this.state = 849;
						this.expression();
					}
				}

				this.state = 852;
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
		this.enterRule(_localctx, 82, KipperParser.RULE_selectionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 942;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.If:
					_localctx = new IfStatementContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 854;
						this.match(KipperParser.If);
						this.state = 858;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 855;
									this.match(KipperParser.WS);
								}
							}
							this.state = 860;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 861;
						this.match(KipperParser.LeftParen);
						this.state = 865;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 862;
									this.match(KipperParser.WS);
								}
							}
							this.state = 867;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 868;
						this.expression();
						this.state = 872;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 869;
									this.match(KipperParser.WS);
								}
							}
							this.state = 874;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 875;
						this.match(KipperParser.RightParen);
						this.state = 879;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 876;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 881;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
						}
						this.state = 882;
						this.statement();
						this.state = 886;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 883;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 888;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
						}
						this.state = 897;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 119, this._ctx)) {
							case 1:
								{
									this.state = 889;
									this.match(KipperParser.Else);
									this.state = 893;
									this._errHandler.sync(this);
									_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
									while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
										if (_alt === 1) {
											{
												{
													this.state = 890;
													this.match(KipperParser.WS);
												}
											}
										}
										this.state = 895;
										this._errHandler.sync(this);
										_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
									}
									this.state = 896;
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
						this.state = 899;
						this.match(KipperParser.Switch);
						this.state = 903;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 900;
									this.match(KipperParser.WS);
								}
							}
							this.state = 905;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 906;
						this.match(KipperParser.LeftParen);
						this.state = 910;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 907;
									this.match(KipperParser.WS);
								}
							}
							this.state = 912;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 913;
						this.expression();
						this.state = 917;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 914;
									this.match(KipperParser.WS);
								}
							}
							this.state = 919;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 920;
						this.match(KipperParser.RightParen);
						this.state = 924;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 921;
									this.match(KipperParser.WS);
								}
							}
							this.state = 926;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 927;
						this.match(KipperParser.LeftBrace);
						this.state = 937;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Case || _la === KipperParser.Default || _la === KipperParser.WS) {
							{
								{
									this.state = 931;
									this._errHandler.sync(this);
									_la = this._input.LA(1);
									while (_la === KipperParser.WS) {
										{
											{
												this.state = 928;
												this.match(KipperParser.WS);
											}
										}
										this.state = 933;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
									}
									this.state = 934;
									this.switchLabeledStatement();
								}
							}
							this.state = 939;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 940;
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
		this.enterRule(_localctx, 84, KipperParser.RULE_switchLabeledStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 982;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Case:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 944;
						this.match(KipperParser.Case);
						this.state = 948;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 945;
									this.match(KipperParser.WS);
								}
							}
							this.state = 950;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 951;
						this.constantExpression();
						this.state = 955;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 952;
									this.match(KipperParser.WS);
								}
							}
							this.state = 957;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 958;
						this.match(KipperParser.T__3);
						this.state = 962;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 959;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 964;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
						}
						this.state = 965;
						this.statement();
					}
					break;
				case KipperParser.Default:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 967;
						this.match(KipperParser.Default);
						this.state = 971;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 968;
									this.match(KipperParser.WS);
								}
							}
							this.state = 973;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 974;
						this.match(KipperParser.T__3);
						this.state = 978;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 975;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 980;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
						}
						this.state = 981;
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
		this.enterRule(_localctx, 86, KipperParser.RULE_iterationStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1070;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 984;
						this.match(KipperParser.For);
						this.state = 988;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 985;
									this.match(KipperParser.WS);
								}
							}
							this.state = 990;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 991;
						this.match(KipperParser.LeftParen);
						this.state = 992;
						this.forCondition();
						this.state = 993;
						this.match(KipperParser.RightParen);
						this.state = 997;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 994;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 999;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
						}
						this.state = 1000;
						this.statement();
					}
					break;
				case KipperParser.While:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 1002;
						this.match(KipperParser.While);
						this.state = 1006;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 1003;
									this.match(KipperParser.WS);
								}
							}
							this.state = 1008;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1009;
						this.match(KipperParser.LeftParen);
						this.state = 1013;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 1010;
									this.match(KipperParser.WS);
								}
							}
							this.state = 1015;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1016;
						this.expression();
						this.state = 1020;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 1017;
									this.match(KipperParser.WS);
								}
							}
							this.state = 1022;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1023;
						this.match(KipperParser.RightParen);
						this.state = 1027;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 1024;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 1029;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
						}
						this.state = 1030;
						this.statement();
					}
					break;
				case KipperParser.Do:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 1032;
						this.match(KipperParser.Do);
						this.state = 1036;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 1033;
										this.match(KipperParser.WS);
									}
								}
							}
							this.state = 1038;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
						}
						this.state = 1039;
						this.statement();
						this.state = 1043;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 1040;
									this.match(KipperParser.WS);
								}
							}
							this.state = 1045;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1046;
						this.match(KipperParser.While);
						this.state = 1050;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 1047;
									this.match(KipperParser.WS);
								}
							}
							this.state = 1052;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1053;
						this.match(KipperParser.LeftParen);
						this.state = 1057;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 1054;
									this.match(KipperParser.WS);
								}
							}
							this.state = 1059;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1060;
						this.expression();
						this.state = 1064;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
								{
									this.state = 1061;
									this.match(KipperParser.WS);
								}
							}
							this.state = 1066;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 1067;
						this.match(KipperParser.RightParen);
						this.state = 1068;
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
		this.enterRule(_localctx, 88, KipperParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1076;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.Const:
					case KipperParser.Var:
						{
							this.state = 1072;
							this.forDeclaration();
						}
						break;
					case KipperParser.T__1:
					case KipperParser.CallFunc:
					case KipperParser.True:
					case KipperParser.False:
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
					case KipperParser.CharacterConstant:
					case KipperParser.FStringLiteral:
					case KipperParser.StringLiteral:
					case KipperParser.WS:
						{
							this.state = 1074;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 << KipperParser.CallFunc) |
											(1 << KipperParser.True) |
											(1 << KipperParser.False) |
											(1 << KipperParser.LeftParen) |
											(1 << KipperParser.LeftBracket))) !==
										0) ||
								(((_la - 33) & ~0x1f) === 0 &&
									((1 << (_la - 33)) &
										((1 << (KipperParser.Plus - 33)) |
											(1 << (KipperParser.PlusPlus - 33)) |
											(1 << (KipperParser.Minus - 33)) |
											(1 << (KipperParser.MinusMinus - 33)) |
											(1 << (KipperParser.Not - 33)) |
											(1 << (KipperParser.Identifier - 33)) |
											(1 << (KipperParser.IntegerConstant - 33)) |
											(1 << (KipperParser.FloatingConstant - 33)) |
											(1 << (KipperParser.CharacterConstant - 33)) |
											(1 << (KipperParser.FStringLiteral - 33)) |
											(1 << (KipperParser.StringLiteral - 33)))) !==
										0)
							) {
								{
									this.state = 1073;
									this.expression();
								}
							}
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 1078;
				this.endOfLine();
				this.state = 1080;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)) |
								(1 << (KipperParser.IntegerConstant - 33)) |
								(1 << (KipperParser.FloatingConstant - 33)) |
								(1 << (KipperParser.CharacterConstant - 33)) |
								(1 << (KipperParser.FStringLiteral - 33)) |
								(1 << (KipperParser.StringLiteral - 33)))) !==
							0)
				) {
					{
						this.state = 1079;
						this.forExpression();
					}
				}

				this.state = 1082;
				this.endOfLine();
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)) |
								(1 << (KipperParser.IntegerConstant - 33)) |
								(1 << (KipperParser.FloatingConstant - 33)) |
								(1 << (KipperParser.CharacterConstant - 33)) |
								(1 << (KipperParser.FStringLiteral - 33)) |
								(1 << (KipperParser.StringLiteral - 33)))) !==
							0)
				) {
					{
						this.state = 1083;
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
		this.enterRule(_localctx, 90, KipperParser.RULE_forDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1086;
				this.storageTypeSpecifier();
				this.state = 1090;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
						{
							this.state = 1087;
							this.match(KipperParser.WS);
						}
					}
					this.state = 1092;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1093;
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
		this.enterRule(_localctx, 92, KipperParser.RULE_forExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1095;
				this.assignmentExpression();
				this.state = 1099;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 1096;
								this.match(KipperParser.WS);
							}
						}
					}
					this.state = 1101;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
				}
				this.state = 1118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 1102;
							this.match(KipperParser.Comma);
							this.state = 1106;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === KipperParser.WS) {
								{
									{
										this.state = 1103;
										this.match(KipperParser.WS);
									}
								}
								this.state = 1108;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							this.state = 1109;
							this.assignmentExpression();
							this.state = 1113;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
										{
											this.state = 1110;
											this.match(KipperParser.WS);
										}
									}
								}
								this.state = 1115;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
							}
						}
					}
					this.state = 1120;
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
		this.enterRule(_localctx, 94, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 1132;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.Break:
					case KipperParser.Continue:
						{
							this.state = 1121;
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
							this.state = 1122;
							this.match(KipperParser.Return);
							this.state = 1126;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
										{
											this.state = 1123;
											this.match(KipperParser.WS);
										}
									}
								}
								this.state = 1128;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 154, this._ctx);
							}
							this.state = 1130;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								((_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 << KipperParser.CallFunc) |
											(1 << KipperParser.True) |
											(1 << KipperParser.False) |
											(1 << KipperParser.LeftParen) |
											(1 << KipperParser.LeftBracket))) !==
										0) ||
								(((_la - 33) & ~0x1f) === 0 &&
									((1 << (_la - 33)) &
										((1 << (KipperParser.Plus - 33)) |
											(1 << (KipperParser.PlusPlus - 33)) |
											(1 << (KipperParser.Minus - 33)) |
											(1 << (KipperParser.MinusMinus - 33)) |
											(1 << (KipperParser.Not - 33)) |
											(1 << (KipperParser.Identifier - 33)) |
											(1 << (KipperParser.IntegerConstant - 33)) |
											(1 << (KipperParser.FloatingConstant - 33)) |
											(1 << (KipperParser.CharacterConstant - 33)) |
											(1 << (KipperParser.FStringLiteral - 33)) |
											(1 << (KipperParser.StringLiteral - 33)))) !==
										0)
							) {
								{
									this.state = 1129;
									this.expression();
								}
							}
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 1134;
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

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03F\u0473\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		'\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x05\x02d\n\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x06\x03k\n\x03\r\x03\x0E\x03" +
		"l\x06\x03o\n\x03\r\x03\x0E\x03p\x03\x04\x03\x04\x05\x04u\n\x04\x03\x05" +
		"\x03\x05\x07\x05y\n\x05\f\x05\x0E\x05|\v\x05\x03\x05\x03\x05\x07\x05\x80" +
		"\n\x05\f\x05\x0E\x05\x83\v\x05\x03\x05\x03\x05\x07\x05\x87\n\x05\f\x05" +
		"\x0E\x05\x8A\v\x05\x03\x05\x03\x05\x07\x05\x8E\n\x05\f\x05\x0E\x05\x91" +
		"\v\x05\x05\x05\x93\n\x05\x03\x05\x03\x05\x07\x05\x97\n\x05\f\x05\x0E\x05" +
		"\x9A\v\x05\x03\x05\x03\x05\x07\x05\x9E\n\x05\f\x05\x0E\x05\xA1\v\x05\x03" +
		"\x05\x03\x05\x07\x05\xA5\n\x05\f\x05\x0E\x05\xA8\v\x05\x03\x05\x03\x05" +
		"\x05\x05\xAC\n\x05\x03\x06\x07\x06\xAF\n\x06\f\x06\x0E\x06\xB2\v\x06\x03" +
		"\x06\x03\x06\x07\x06\xB6\n\x06\f\x06\x0E\x06\xB9\v\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07\xC7\n\x07\f\x07\x0E\x07\xCA\v\x07\x03\x07\x03\x07\x07" +
		"\x07\xCE\n\x07\f\x07\x0E\x07\xD1\v\x07\x03\x07\x03\x07\x07\x07\xD5\n\x07" +
		"\f\x07\x0E\x07\xD8\v\x07\x03\x07\x03\x07\x07\x07\xDC\n\x07\f\x07\x0E\x07" +
		"\xDF\v\x07\x07\x07\xE1\n\x07\f\x07\x0E\x07\xE4\v\x07\x03\x07\x03\x07\x05" +
		"\x07\xE8\n\x07\x03\b\x03\b\x03\b\x06\b\xED\n\b\r\b\x0E\b\xEE\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x07\b\xF6\n\b\f\b\x0E\b\xF9\v\b\x03\b\x03\b\x07\b" +
		"\xFD\n\b\f\b\x0E\b\u0100\v\b\x03\b\x03\b\x07\b\u0104\n\b\f\b\x0E\b\u0107" +
		"\v\b\x03\b\x05\b\u010A\n\b\x03\b\x07\b\u010D\n\b\f\b\x0E\b\u0110\v\b\x03" +
		"\b\x03\b\x05\b\u0114\n\b\x03\t\x03\t\x07\t\u0118\n\t\f\t\x0E\t\u011B\v" +
		"\t\x03\t\x03\t\x07\t\u011F\n\t\f\t\x0E\t\u0122\v\t\x03\t\x03\t\x03\n\x03" +
		"\n\x07\n\u0128\n\n\f\n\x0E\n\u012B\v\n\x03\n\x03\n\x07\n\u012F\n\n\f\n" +
		"\x0E\n\u0132\v\n\x03\n\x03\n\x07\n\u0136\n\n\f\n\x0E\n\u0139\v\n\x07\n" +
		"\u013B\n\n\f\n\x0E\n\u013E\v\n\x03\v\x03\v\x03\v\x07\v\u0143\n\v\f\v\x0E" +
		"\v\u0146\v\v\x03\v\x03\v\x03\v\x03\v\x07\v\u014C\n\v\f\v\x0E\v\u014F\v" +
		"\v\x03\v\x03\v\x05\v\u0153\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x07\x0E\u015C\n\x0E\f\x0E\x0E\x0E\u015F\v\x0E\x03\x0E\x03\x0E" +
		"\x07\x0E\u0163\n\x0E\f\x0E\x0E\x0E\u0166\v\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u016A\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0171\n\x0F" +
		"\f\x0F\x0E\x0F\u0174\v\x0F\x03\x0F\x03\x0F\x07\x0F\u0178\n\x0F\f\x0F\x0E" +
		"\x0F\u017B\v\x0F\x03\x0F\x03\x0F\x07\x0F\u017F\n\x0F\f\x0F\x0E\x0F\u0182" +
		"\v\x0F\x07\x0F\u0184\n\x0F\f\x0F\x0E\x0F\u0187\v\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x07\x10\u018E\n\x10\f\x10\x0E\x10\u0191\v\x10\x03" +
		"\x10\x03\x10\x07\x10\u0195\n\x10\f\x10\x0E\x10\u0198\v\x10\x03\x10\x03" +
		"\x10\x07\x10\u019C\n\x10\f\x10\x0E\x10\u019F\v\x10\x07\x10\u01A1\n\x10" +
		"\f\x10\x0E\x10\u01A4\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\u01AB\n\x11\f\x11\x0E\x11\u01AE\v\x11\x03\x11\x03\x11\x07\x11\u01B2" +
		"\n\x11\f\x11\x0E\x11\u01B5\v\x11\x03\x11\x03\x11\x07\x11\u01B9\n\x11\f" +
		"\x11\x0E\x11\u01BC\v\x11\x07\x11\u01BE\n\x11\f\x11\x0E\x11\u01C1\v\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u01C8\n\x12\f\x12\x0E" +
		"\x12\u01CB\v\x12\x03\x12\x03\x12\x07\x12\u01CF\n\x12\f\x12\x0E\x12\u01D2" +
		"\v\x12\x03\x12\x03\x12\x07\x12\u01D6\n\x12\f\x12\x0E\x12\u01D9\v\x12\x07" +
		"\x12\u01DB\n\x12\f\x12\x0E\x12\u01DE\v\x12\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x07\x13\u01E5\n\x13\f\x13\x0E\x13\u01E8\v\x13\x03\x13\x03" +
		"\x13\x07\x13\u01EC\n\x13\f\x13\x0E\x13\u01EF\v\x13\x03\x13\x03\x13\x07" +
		"\x13\u01F3\n\x13\f\x13\x0E\x13\u01F6\v\x13\x07\x13\u01F8\n\x13\f\x13\x0E" +
		"\x13\u01FB\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0202" +
		"\n\x14\f\x14\x0E\x14\u0205\v\x14\x03\x14\x03\x14\x07\x14\u0209\n\x14\f" +
		"\x14\x0E\x14\u020C\v\x14\x03\x14\x03\x14\x07\x14\u0210\n\x14\f\x14\x0E" +
		"\x14\u0213\v\x14\x07\x14\u0215\n\x14\f\x14\x0E\x14\u0218\v\x14\x03\x15" +
		"\x03\x15\x03\x15\x07\x15\u021D\n\x15\f\x15\x0E\x15\u0220\v\x15\x03\x15" +
		"\x03\x15\x07\x15\u0224\n\x15\f\x15\x0E\x15\u0227\v\x15\x03\x15\x03\x15" +
		"\x07\x15\u022B\n\x15\f\x15\x0E\x15\u022E\v\x15\x03\x15\x03\x15\x07\x15" +
		"\u0232\n\x15\f\x15\x0E\x15\u0235\v\x15\x03\x15\x03\x15\x07\x15\u0239\n" +
		"\x15\f\x15\x0E\x15\u023C\v\x15\x05\x15\u023E\n\x15\x03\x16\x03\x16\x03" +
		"\x16\x07\x16\u0243\n\x16\f\x16\x0E\x16\u0246\v\x16\x03\x16\x03\x16\x07" +
		"\x16\u024A\n\x16\f\x16\x0E\x16\u024D\v\x16\x03\x16\x03\x16\x05\x16\u0251" +
		"\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x07\x18\u0257\n\x18\f\x18\x0E\x18" +
		"\u025A\v\x18\x03\x18\x03\x18\x07\x18\u025E\n\x18\f\x18\x0E\x18\u0261\v" +
		"\x18\x03\x18\x03\x18\x07\x18\u0265\n\x18\f\x18\x0E\x18\u0268\v\x18\x07" +
		"\x18\u026A\n\x18\f\x18\x0E\x18\u026D\v\x18\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x07\x1A\u0273\n\x1A\f\x1A\x0E\x1A\u0276\v\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x07\x1C\u027F\n\x1C\f\x1C\x0E\x1C" +
		"\u0282\v\x1C\x06\x1C\u0284\n\x1C\r\x1C\x0E\x1C\u0285\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x07\x1E\u028C\n\x1E\f\x1E\x0E\x1E\u028F\v\x1E\x03\x1E\x03" +
		"\x1E\x07\x1E\u0293\n\x1E\f\x1E\x0E\x1E\u0296\v\x1E\x03\x1E\x03\x1E\x07" +
		"\x1E\u029A\n\x1E\f\x1E\x0E\x1E\u029D\v\x1E\x03\x1E\x03\x1E\x07\x1E\u02A1" +
		"\n\x1E\f\x1E\x0E\x1E\u02A4\v\x1E\x03\x1E\x03\x1E\x07\x1E\u02A8\n\x1E\f" +
		"\x1E\x0E\x1E\u02AB\v\x1E\x05\x1E\u02AD\n\x1E\x03\x1F\x03\x1F\x03\x1F\x07" +
		"\x1F\u02B2\n\x1F\f\x1F\x0E\x1F\u02B5\v\x1F\x03\x1F\x03\x1F\x07\x1F\u02B9" +
		"\n\x1F\f\x1F\x0E\x1F\u02BC\v\x1F\x03\x1F\x03\x1F\x07\x1F\u02C0\n\x1F\f" +
		"\x1F\x0E\x1F\u02C3\v\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u02C8\n\x1F\f" +
		"\x1F\x0E\x1F\u02CB\v\x1F\x03\x1F\x03\x1F\x07\x1F\u02CF\n\x1F\f\x1F\x0E" +
		"\x1F\u02D2\v\x1F\x03\x1F\x03\x1F\x07\x1F\u02D6\n\x1F\f\x1F\x0E\x1F\u02D9" +
		'\v\x1F\x03\x1F\x05\x1F\u02DC\n\x1F\x03 \x03 \x03!\x03!\x03"\x03"\x07' +
		'"\u02E4\n"\f"\x0E"\u02E7\v"\x03"\x03"\x07"\u02EB\n"\f"\x0E"' +
		'\u02EE\v"\x03"\x03"\x03"\x07"\u02F3\n"\f"\x0E"\u02F6\v"\x05"' +
		'\u02F8\n"\x03#\x03#\x07#\u02FC\n#\f#\x0E#\u02FF\v#\x03#\x03#\x07#\u0303' +
		"\n#\f#\x0E#\u0306\v#\x03#\x03#\x07#\u030A\n#\f#\x0E#\u030D\v#\x07#\u030F" +
		"\n#\f#\x0E#\u0312\v#\x03$\x03$\x07$\u0316\n$\f$\x0E$\u0319\v$\x03$\x03" +
		"$\x07$\u031D\n$\f$\x0E$\u0320\v$\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x03" +
		"&\x03&\x05&\u032B\n&\x03'\x03'\x07'\u032F\n'\f'\x0E'\u0332\v'\x03" +
		"'\x05'\u0335\n'\x03'\x07'\u0338\n'\f'\x0E'\u033B\v'\x03'\x03" +
		"'\x03(\x06(\u0340\n(\r(\x0E(\u0341\x03)\x07)\u0345\n)\f)\x0E)\u0348\v" +
		")\x03)\x03)\x05)\u034C\n)\x03)\x07)\u034F\n)\f)\x0E)\u0352\v)\x03*\x05" +
		"*\u0355\n*\x03*\x03*\x03+\x03+\x07+\u035B\n+\f+\x0E+\u035E\v+\x03+\x03" +
		"+\x07+\u0362\n+\f+\x0E+\u0365\v+\x03+\x03+\x07+\u0369\n+\f+\x0E+\u036C" +
		"\v+\x03+\x03+\x07+\u0370\n+\f+\x0E+\u0373\v+\x03+\x03+\x07+\u0377\n+\f" +
		"+\x0E+\u037A\v+\x03+\x03+\x07+\u037E\n+\f+\x0E+\u0381\v+\x03+\x05+\u0384" +
		"\n+\x03+\x03+\x07+\u0388\n+\f+\x0E+\u038B\v+\x03+\x03+\x07+\u038F\n+\f" +
		"+\x0E+\u0392\v+\x03+\x03+\x07+\u0396\n+\f+\x0E+\u0399\v+\x03+\x03+\x07" +
		"+\u039D\n+\f+\x0E+\u03A0\v+\x03+\x03+\x07+\u03A4\n+\f+\x0E+\u03A7\v+\x03" +
		"+\x07+\u03AA\n+\f+\x0E+\u03AD\v+\x03+\x03+\x05+\u03B1\n+\x03,\x03,\x07" +
		",\u03B5\n,\f,\x0E,\u03B8\v,\x03,\x03,\x07,\u03BC\n,\f,\x0E,\u03BF\v,\x03" +
		",\x03,\x07,\u03C3\n,\f,\x0E,\u03C6\v,\x03,\x03,\x03,\x03,\x07,\u03CC\n" +
		",\f,\x0E,\u03CF\v,\x03,\x03,\x07,\u03D3\n,\f,\x0E,\u03D6\v,\x03,\x05," +
		"\u03D9\n,\x03-\x03-\x07-\u03DD\n-\f-\x0E-\u03E0\v-\x03-\x03-\x03-\x03" +
		"-\x07-\u03E6\n-\f-\x0E-\u03E9\v-\x03-\x03-\x03-\x03-\x07-\u03EF\n-\f-" +
		"\x0E-\u03F2\v-\x03-\x03-\x07-\u03F6\n-\f-\x0E-\u03F9\v-\x03-\x03-\x07" +
		"-\u03FD\n-\f-\x0E-\u0400\v-\x03-\x03-\x07-\u0404\n-\f-\x0E-\u0407\v-\x03" +
		"-\x03-\x03-\x03-\x07-\u040D\n-\f-\x0E-\u0410\v-\x03-\x03-\x07-\u0414\n" +
		"-\f-\x0E-\u0417\v-\x03-\x03-\x07-\u041B\n-\f-\x0E-\u041E\v-\x03-\x03-" +
		"\x07-\u0422\n-\f-\x0E-\u0425\v-\x03-\x03-\x07-\u0429\n-\f-\x0E-\u042C" +
		"\v-\x03-\x03-\x03-\x05-\u0431\n-\x03.\x03.\x05.\u0435\n.\x05.\u0437\n" +
		".\x03.\x03.\x05.\u043B\n.\x03.\x03.\x05.\u043F\n.\x03/\x03/\x07/\u0443" +
		"\n/\f/\x0E/\u0446\v/\x03/\x03/\x030\x030\x070\u044C\n0\f0\x0E0\u044F\v" +
		"0\x030\x030\x070\u0453\n0\f0\x0E0\u0456\v0\x030\x030\x070\u045A\n0\f0" +
		"\x0E0\u045D\v0\x070\u045F\n0\f0\x0E0\u0462\v0\x031\x031\x031\x071\u0467" +
		"\n1\f1\x0E1\u046A\v1\x031\x051\u046D\n1\x051\u046F\n1\x031\x031\x031\x02" +
		'\x02\b\x1C\x1E "$&2\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02' +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		'"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02' +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02\x02\r\x03\x02\x19\x1A\x03\x02=>\x04\x02$$&&\x05" +
		"\x02##%%--\x03\x02'*\x04\x02##%%\x03\x027:\x03\x0256\x03\x02/4\x03\x02" +
		"\x07\b\x03\x02\x0E\x0F\x02\u04EE\x02c\x03\x02\x02\x02\x04n\x03\x02\x02" +
		"\x02\x06t\x03\x02\x02\x02\bv\x03\x02\x02\x02\n\xB0\x03\x02\x02\x02\f\xE7" +
		"\x03\x02\x02\x02\x0E\u0113\x03\x02\x02\x02\x10\u0115\x03\x02\x02\x02\x12" +
		"\u0125\x03\x02\x02\x02\x14\u0152\x03\x02\x02\x02\x16\u0154\x03\x02\x02" +
		"\x02\x18\u0156\x03\x02\x02\x02\x1A\u0169\x03\x02\x02\x02\x1C\u016B\x03" +
		'\x02\x02\x02\x1E\u0188\x03\x02\x02\x02 \u01A5\x03\x02\x02\x02"\u01C2' +
		"\x03\x02\x02\x02$\u01DF\x03\x02\x02\x02&\u01FC\x03\x02\x02\x02(\u023D" +
		"\x03\x02\x02\x02*\u0250\x03\x02\x02\x02,\u0252\x03\x02\x02\x02.\u0254" +
		"\x03\x02\x02\x020\u026E\x03\x02\x02\x022\u0270\x03\x02\x02\x024\u027A" +
		"\x03\x02\x02\x026\u0283\x03\x02\x02\x028\u0287\x03\x02\x02\x02:\u0289" +
		"\x03\x02\x02\x02<\u02DB\x03\x02\x02\x02>\u02DD\x03\x02\x02\x02@\u02DF" +
		"\x03\x02\x02\x02B\u02E1\x03\x02\x02\x02D\u02F9\x03\x02\x02\x02F\u0313" +
		"\x03\x02\x02\x02H\u0323\x03\x02\x02\x02J\u032A\x03\x02\x02\x02L\u032C" +
		"\x03\x02\x02\x02N\u033F\x03\x02\x02\x02P\u0346\x03\x02\x02\x02R\u0354" +
		"\x03\x02\x02\x02T\u03B0\x03\x02\x02\x02V\u03D8\x03\x02\x02\x02X\u0430" +
		"\x03\x02\x02\x02Z\u0436\x03\x02\x02\x02\\\u0440\x03\x02\x02\x02^\u0449" +
		"\x03\x02\x02\x02`\u046E\x03\x02\x02\x02bd\x05\x04\x03\x02cb\x03\x02\x02" +
		"\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\x07\x02\x02\x03f\x03\x03\x02" +
		"\x02\x02go\x05\x06\x04\x02ho\x05\n\x06\x02ik\x07C\x02\x02ji\x03\x02\x02" +
		"\x02kl\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02mo\x03\x02\x02" +
		"\x02ng\x03\x02\x02\x02nh\x03\x02\x02\x02nj\x03\x02\x02\x02op\x03\x02\x02" +
		"\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\x05\x03\x02\x02\x02ru\x05\b" +
		"\x05\x02su\x05P)\x02tr\x03\x02\x02\x02ts\x03\x02\x02\x02u\x07\x03\x02" +
		"\x02\x02vz\x07\x16\x02\x02wy\x07C\x02\x02xw\x03\x02\x02\x02y|\x03\x02" +
		"\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x03\x02\x02\x02|z\x03\x02" +
		"\x02\x02}\x81\x05> \x02~\x80\x07C\x02\x02\x7F~\x03\x02\x02\x02\x80\x83" +
		"\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x84" +
		"\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x88\x07\x1D\x02\x02\x85\x87" +
		"\x07C\x02\x02\x86\x85\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86" +
		"\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x92\x03\x02\x02\x02\x8A\x88" +
		'\x03\x02\x02\x02\x8B\x8F\x05B"\x02\x8C\x8E\x07C\x02\x02\x8D\x8C\x03\x02' +
		"\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02" +
		"\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x8B\x03\x02" +
		"\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x98\x07\x1E" +
		"\x02\x02\x95\x97\x07C\x02\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02" +
		"\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02" +
		"\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9F\x07\x03\x02\x02\x9C\x9E\x07C" +
		"\x02\x02\x9D\x9C\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02" +
		"\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\x9F\x03\x02" +
		"\x02\x02\xA2\xA6\x05<\x1F\x02\xA3\xA5\x07C\x02\x02\xA4\xA3\x03\x02\x02" +
		"\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02" +
		"\x02\xA7\xAB\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAC\x05L'\x02" +
		"\xAA\xAC\x05\n\x06\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAA\x03\x02\x02\x02" +
		"\xAC\t\x03\x02\x02\x02\xAD\xAF\x07C\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF" +
		"\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1" +
		"\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB7\x07\x04\x02\x02\xB4" +
		"\xB6\x07C\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7" +
		"\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\v\x03\x02\x02\x02\xB9" +
		"\xB7\x03\x02\x02\x02\xBA\xBB\x07\x1D\x02\x02\xBB\xBC\x05.\x18\x02\xBC" +
		"\xBD\x07\x1E\x02\x02\xBD\xE8\x03\x02\x02\x02\xBE\xE8\t\x02\x02\x02\xBF" +
		"\xE8\x07<\x02\x02\xC0\xE8\x07@\x02\x02\xC1\xE8\x07B\x02\x02\xC2\xE8\x07" +
		"A\x02\x02\xC3\xE8\t\x03\x02\x02\xC4\xC8\x07\x1F\x02\x02\xC5\xC7\x07C\x02" +
		"\x02\xC6\xC5\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02" +
		"\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02" +
		"\x02\xCB\xCF\x050\x19\x02\xCC\xCE\x07C\x02\x02\xCD\xCC\x03\x02\x02\x02" +
		"\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02" +
		"\xD0\xE2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD6\x07.\x02\x02" +
		"\xD3\xD5\x07C\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02" +
		"\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x03\x02\x02\x02" +
		"\xD8\xD6\x03\x02\x02\x02\xD9\xDD\x050\x19\x02\xDA\xDC\x07C\x02\x02\xDB" +
		"\xDA\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD" +
		"\xDE\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0" +
		"\xD2\x03\x02\x02\x02\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2" +
		"\xE3\x03\x02\x02\x02\xE3\xE5\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5" +
		"\xE6\x07 \x02\x02\xE6\xE8\x03\x02\x02\x02\xE7\xBA\x03\x02\x02\x02\xE7" +
		"\xBE\x03\x02\x02\x02\xE7\xBF\x03\x02\x02\x02\xE7\xC0\x03\x02\x02\x02\xE7" +
		"\xC1\x03\x02\x02\x02\xE7\xC2\x03\x02\x02\x02\xE7\xC3\x03\x02\x02\x02\xE7" +
		"\xC4\x03\x02\x02\x02\xE8\r\x03\x02\x02\x02\xE9\u0114\x05\f\x07\x02\xEA" +
		"\xEC\x05\f\x07\x02\xEB\xED\x05\x10\t\x02\xEC\xEB\x03\x02\x02\x02\xED\xEE" +
		"\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\u0114" +
		"\x03\x02\x02\x02\xF0\xF1\x05\f\x07\x02\xF1\xF2\x05\x16\f\x02\xF2\u0114" +
		"\x03\x02\x02\x02\xF3\xF7\x07\x18\x02\x02\xF4\xF6\x07C\x02\x02\xF5\xF4" +
		"\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF8" +
		"\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFE" +
		"\x05\f\x07\x02\xFB\xFD\x07C\x02\x02\xFC\xFB\x03\x02\x02\x02\xFD\u0100" +
		"\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0101" +
		"\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0105\x07\x1D\x02\x02" +
		"\u0102\u0104\x07C\x02\x02\u0103\u0102\x03\x02\x02\x02\u0104\u0107\x03" +
		"\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106" +
		"\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108\u010A\x05\x12" +
		"\n\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010E" +
		"\x03\x02\x02\x02\u010B\u010D\x07C\x02\x02\u010C\u010B\x03\x02\x02\x02" +
		"\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03" +
		"\x02\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111" +
		"\u0112\x07\x1E\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113\xE9\x03\x02\x02" +
		"\x02\u0113\xEA\x03\x02\x02\x02\u0113\xF0\x03\x02\x02\x02\u0113\xF3\x03" +
		"\x02\x02\x02\u0114\x0F\x03\x02\x02\x02\u0115\u0119\x07\x1F\x02\x02\u0116" +
		"\u0118\x07C\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\u011B\x03\x02\x02" +
		"\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011C" +
		"\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u0120\x05.\x18\x02" +
		"\u011D\u011F\x07C\x02\x02\u011E\u011D\x03\x02\x02\x02\u011F\u0122\x03" +
		"\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121" +
		"\u0123\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0124\x07 \x02" +
		"\x02\u0124\x11\x03\x02\x02\x02\u0125\u0129\x05*\x16\x02\u0126\u0128\x07" +
		"C\x02\x02\u0127\u0126\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129" +
		"\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u013C\x03\x02" +
		"\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u0130\x07.\x02\x02\u012D\u012F" +
		"\x07C\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02" +
		"\u0130\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03" +
		"\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0137\x05*\x16\x02\u0134" +
		"\u0136\x07C\x02\x02\u0135\u0134\x03\x02\x02\x02\u0136\u0139\x03\x02\x02" +
		"\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013B" +
		"\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A\u012C\x03\x02\x02\x02" +
		"\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03" +
		"\x02\x02\x02\u013D\x13\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F" +
		"\u0153\x05\x0E\b\x02\u0140\u0144\x05\x16\f\x02\u0141\u0143\x07C\x02\x02" +
		"\u0142\u0141\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03" +
		"\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146" +
		"\u0144\x03\x02\x02\x02\u0147\u0148\x05\x0E\b\x02\u0148\u0153\x03\x02\x02" +
		"\x02\u0149\u014D\x05\x18\r\x02\u014A\u014C\x07C\x02\x02\u014B\u014A\x03" +
		"\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D" +
		"\u014E\x03\x02\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u014D\x03\x02" +
		"\x02\x02\u0150\u0151\x05\x0E\b\x02\u0151\u0153\x03\x02\x02\x02\u0152\u013F" +
		"\x03\x02\x02\x02\u0152\u0140\x03\x02\x02\x02\u0152\u0149\x03\x02\x02\x02" +
		"\u0153\x15\x03\x02\x02\x02\u0154\u0155\t\x04\x02\x02\u0155\x17\x03\x02" +
		"\x02\x02\u0156\u0157\t\x05\x02\x02\u0157\x19\x03\x02\x02\x02\u0158\u016A" +
		"\x05\x14\v\x02\u0159\u015D\x05\x14\v\x02\u015A\u015C\x07C\x02\x02\u015B" +
		"\u015A\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02" +
		"\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02\u015F" +
		"\u015D\x03\x02\x02\x02\u0160\u0164\x07\t\x02\x02\u0161\u0163\x07C\x02" +
		"\x02\u0162\u0161\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162" +
		"\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02" +
		"\u0166\u0164\x03\x02\x02\x02\u0167\u0168\x05<\x1F\x02\u0168\u016A\x03" +
		"\x02\x02\x02\u0169\u0158\x03\x02\x02\x02\u0169\u0159\x03\x02\x02\x02\u016A" +
		"\x1B\x03\x02\x02\x02\u016B\u016C\b\x0F\x01\x02\u016C\u016D\x05\x1A\x0E" +
		"\x02\u016D\u0185\x03\x02\x02\x02\u016E\u0172\f\x03\x02\x02\u016F\u0171" +
		"\x07C\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02" +
		"\u0172\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x03" +
		"\x02\x02\x02\u0174\u0172\x03\x02\x02\x02\u0175\u0179\t\x06\x02\x02\u0176" +
		"\u0178\x07C\x02\x02\u0177\u0176\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179\u017A\x03" +
		"\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017C" +
		"\u0180\x05\x1A\x0E\x02\u017D\u017F\x07C\x02\x02\u017E\u017D\x03\x02\x02" +
		"\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u0181" +
		"\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02" +
		"\u0183\u016E\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185\u0183\x03" +
		"\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\x1D\x03\x02\x02\x02\u0187" +
		"\u0185\x03\x02\x02\x02\u0188\u0189\b\x10\x01\x02\u0189\u018A\x05\x1C\x0F" +
		"\x02\u018A\u01A2\x03\x02\x02\x02\u018B\u018F\f\x03\x02\x02\u018C\u018E" +
		"\x07C\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02" +
		"\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03" +
		"\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0196\t\x07\x02\x02\u0193" +
		"\u0195\x07C\x02\x02\u0194\u0193\x03\x02\x02\x02\u0195\u0198\x03\x02\x02" +
		"\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0199" +
		"\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019D\x05\x1C\x0F\x02" +
		"\u019A\u019C\x07C\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C\u019F\x03" +
		"\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E" +
		"\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u018B\x03\x02" +
		"\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2" +
		"\u01A3\x03\x02\x02\x02\u01A3\x1F\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02" +
		"\x02\u01A5\u01A6\b\x11\x01\x02\u01A6\u01A7\x05\x1E\x10\x02\u01A7\u01BF" +
		"\x03\x02\x02\x02\u01A8\u01AC\f\x03\x02\x02\u01A9\u01AB\x07C\x02\x02\u01AA" +
		"\u01A9\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02" +
		"\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AF\x03\x02\x02\x02\u01AE" +
		"\u01AC\x03\x02\x02\x02\u01AF\u01B3\t\b\x02\x02\u01B0\u01B2\x07C\x02\x02" +
		"\u01B1\u01B0\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03" +
		"\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5" +
		"\u01B3\x03\x02\x02\x02\u01B6\u01BA\x05\x1E\x10\x02\u01B7\u01B9\x07C\x02" +
		"\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02\u01BA\u01B8" +
		"\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BE\x03\x02\x02\x02" +
		"\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01A8\x03\x02\x02\x02\u01BE\u01C1\x03" +
		"\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0" +
		"!\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2\u01C3\b\x12\x01\x02" +
		"\u01C3\u01C4\x05 \x11\x02\u01C4\u01DC\x03\x02\x02\x02\u01C5\u01C9\f\x03" +
		"\x02\x02\u01C6\u01C8\x07C\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01CB" +
		"\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
		"\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01D0\t" +
		"\t\x02\x02\u01CD\u01CF\x07C\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF" +
		"\u01D2\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02" +
		"\x02\x02\u01D1\u01D3\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3" +
		"\u01D7\x05 \x11\x02\u01D4\u01D6\x07C\x02\x02\u01D5\u01D4\x03\x02\x02\x02" +
		"\u01D6\u01D9\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03" +
		"\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA" +
		"\u01C5\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02" +
		"\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD#\x03\x02\x02\x02\u01DE\u01DC" +
		'\x03\x02\x02\x02\u01DF\u01E0\b\x13\x01\x02\u01E0\u01E1\x05"\x12\x02\u01E1' +
		"\u01F9\x03\x02\x02\x02\u01E2\u01E6\f\x03\x02\x02\u01E3\u01E5\x07C\x02" +
		"\x02\u01E4\u01E3\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4" +
		"\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E9\x03\x02\x02\x02" +
		"\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01ED\x07+\x02\x02\u01EA\u01EC\x07" +
		"C\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02\x02\u01ED" +
		"\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0\x03\x02" +
		'\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0\u01F4\x05"\x12\x02\u01F1\u01F3' +
		"\x07C\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02" +
		"\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F8\x03" +
		"\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7\u01E2\x03\x02\x02\x02\u01F8" +
		"\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02" +
		"\x02\x02\u01FA%\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01FD" +
		"\b\x14\x01\x02\u01FD\u01FE\x05$\x13\x02\u01FE\u0216\x03\x02\x02\x02\u01FF" +
		"\u0203\f\x03\x02\x02\u0200\u0202\x07C\x02\x02\u0201\u0200\x03\x02\x02" +
		"\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204" +
		"\x03\x02\x02\x02\u0204\u0206\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02" +
		"\u0206\u020A\x07,\x02\x02\u0207\u0209\x07C\x02\x02\u0208\u0207\x03\x02" +
		"\x02\x02\u0209\u020C\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A" +
		"\u020B\x03\x02\x02\x02\u020B\u020D\x03\x02\x02\x02\u020C\u020A\x03\x02" +
		"\x02\x02\u020D\u0211\x05$\x13\x02\u020E\u0210\x07C\x02\x02\u020F\u020E" +
		"\x03\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02" +
		"\u0211\u0212\x03\x02\x02\x02\u0212\u0215\x03\x02\x02\x02\u0213\u0211\x03" +
		"\x02\x02\x02\u0214\u01FF\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217'\x03\x02\x02" +
		"\x02\u0218\u0216\x03\x02\x02\x02\u0219\u023E\x05&\x14\x02\u021A\u021E" +
		"\x05&\x14\x02\u021B\u021D\x07C\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D" +
		"\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02" +
		"\x02\x02\u021F\u0221\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221" +
		"\u0225\x07\x05\x02\x02\u0222\u0224\x07C\x02\x02\u0223\u0222\x03\x02\x02" +
		"\x02\u0224\u0227\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226" +
		"\x03\x02\x02\x02\u0226\u0228\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02" +
		"\u0228\u022C\x05(\x15\x02\u0229\u022B\x07C\x02\x02\u022A\u0229\x03\x02" +
		"\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C" +
		"\u022D\x03\x02\x02\x02\u022D\u022F\x03\x02\x02\x02\u022E\u022C\x03\x02" +
		"\x02\x02\u022F\u0233\x07\x06\x02\x02\u0230\u0232\x07C\x02\x02\u0231\u0230" +
		"\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02" +
		"\u0233\u0234\x03\x02\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235\u0233\x03" +
		"\x02\x02\x02\u0236\u023A\x05(\x15\x02\u0237\u0239\x07C\x02\x02\u0238\u0237" +
		"\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02" +
		"\u023A\u023B\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03" +
		"\x02\x02\x02\u023D\u0219\x03\x02\x02\x02\u023D\u021A\x03\x02\x02\x02\u023E" +
		")\x03\x02\x02\x02\u023F\u0251\x05(\x15\x02\u0240\u0244\x05\f\x07\x02\u0241" +
		"\u0243\x07C\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243\u0246\x03\x02\x02" +
		"\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0247" +
		"\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0247\u024B\x05,\x17\x02" +
		"\u0248\u024A\x07C\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A\u024D\x03" +
		"\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C" +
		"\u024E\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E\u024F\x05*\x16" +
		"\x02\u024F\u0251\x03\x02\x02\x02\u0250\u023F\x03\x02\x02\x02\u0250\u0240" +
		"\x03\x02\x02\x02\u0251+\x03\x02\x02\x02\u0252\u0253\t\n\x02\x02\u0253" +
		"-\x03\x02\x02\x02\u0254\u0258\x05*\x16\x02\u0255\u0257\x07C\x02\x02\u0256" +
		"\u0255\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u0256\x03\x02" +
		"\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u026B\x03\x02\x02\x02\u025A" +
		"\u0258\x03\x02\x02\x02\u025B\u025F\x07.\x02\x02\u025C\u025E\x07C\x02\x02" +
		"\u025D\u025C\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F\u025D\x03" +
		"\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0262\x03\x02\x02\x02\u0261" +
		"\u025F\x03\x02\x02\x02\u0262\u0266\x05*\x16\x02\u0263\u0265\x07C\x02\x02" +
		"\u0264\u0263\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264\x03" +
		"\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268" +
		"\u0266\x03\x02\x02\x02\u0269\u025B\x03\x02\x02\x02\u026A\u026D\x03\x02" +
		"\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C" +
		"/\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E\u026F\x05(\x15\x02" +
		"\u026F1\x03\x02\x02\x02\u0270\u0274\x054\x1B\x02\u0271\u0273\x07C\x02" +
		"\x02\u0272\u0271\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0272" +
		"\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0277\x03\x02\x02\x02" +
		"\u0276\u0274\x03\x02\x02\x02\u0277\u0278\x05:\x1E\x02\u0278\u0279\x05" +
		"\n\x06\x02\u02793\x03\x02\x02\x02\u027A\u027B\t\v\x02\x02\u027B5\x03\x02" +
		"\x02\x02\u027C\u0280\x058\x1D\x02\u027D\u027F\x07C\x02\x02\u027E\u027D" +
		"\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02" +
		"\u0280\u0281\x03\x02\x02\x02\u0281\u0284\x03\x02\x02\x02\u0282\u0280\x03" +
		"\x02\x02\x02\u0283\u027C\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285" +
		"\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u02867\x03\x02\x02" +
		"\x02\u0287\u0288\x05<\x1F\x02\u02889\x03\x02\x02\x02\u0289\u028D\x05>" +
		" \x02\u028A\u028C\x07C\x02\x02\u028B\u028A\x03\x02\x02\x02\u028C\u028F" +
		"\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02" +
		"\u028E\u0290\x03\x02\x02\x02\u028F\u028D\x03\x02\x02\x02\u0290\u0294\x07" +
		"\x06\x02\x02\u0291\u0293\x07C\x02\x02\u0292\u0291\x03\x02\x02\x02\u0293" +
		"\u0296\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03\x02" +
		"\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297" +
		"\u029B\x05<\x1F\x02\u0298\u029A\x07C\x02\x02\u0299\u0298\x03\x02\x02\x02" +
		"\u029A\u029D\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029B\u029C\x03" +
		"\x02\x02\x02\u029C\u02AC\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029E" +
		"\u02A2\x07/\x02\x02\u029F\u02A1\x07C\x02\x02\u02A0\u029F\x03\x02\x02\x02" +
		"\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03" +
		"\x02\x02\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5" +
		"\u02A9\x05H%\x02\u02A6\u02A8\x07C\x02\x02\u02A7\u02A6\x03\x02\x02\x02" +
		"\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03" +
		"\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AC" +
		"\u029E\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD;\x03\x02\x02" +
		"\x02\u02AE\u02DC\x07<\x02\x02\u02AF\u02B3\x07<\x02\x02\u02B0\u02B2\x07" +
		"C\x02\x02\u02B1\u02B0\x03\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3" +
		"\u02B1\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B6\x03\x02" +
		"\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B6\u02BA\x077\x02\x02\u02B7\u02B9" +
		"\x07C\x02\x02\u02B8\u02B7\x03\x02\x02\x02\u02B9\u02BC\x03\x02\x02\x02" +
		"\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BD\x03" +
		"\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BD\u02C1\x07<\x02\x02\u02BE" +
		"\u02C0\x07C\x02\x02\u02BF\u02BE\x03\x02\x02\x02\u02C0\u02C3\x03\x02\x02" +
		"\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C4" +
		"\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02DC\x079\x02\x02" +
		"\u02C5\u02C9\x07\x1C\x02\x02\u02C6\u02C8\x07C\x02\x02\u02C7\u02C6\x03" +
		"\x02\x02\x02\u02C8\u02CB\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02C9" +
		"\u02CA\x03\x02\x02\x02\u02CA\u02CC\x03\x02\x02\x02\u02CB\u02C9\x03\x02" +
		"\x02\x02\u02CC\u02D0\x07\x1D\x02\x02\u02CD\u02CF\x07C\x02\x02\u02CE\u02CD" +
		"\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02" +
		"\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D3\x03\x02\x02\x02\u02D2\u02D0\x03" +
		"\x02\x02\x02\u02D3\u02D7\x07<\x02\x02\u02D4\u02D6\x07C\x02\x02\u02D5\u02D4" +
		"\x03\x02\x02\x02\u02D6\u02D9\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02" +
		"\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DA\x03\x02\x02\x02\u02D9\u02D7\x03" +
		"\x02\x02\x02\u02DA\u02DC\x07\x1E\x02\x02\u02DB\u02AE\x03\x02\x02\x02\u02DB" +
		"\u02AF\x03\x02\x02\x02\u02DB\u02C5\x03\x02\x02\x02\u02DC=\x03\x02\x02" +
		"\x02\u02DD\u02DE\x05@!\x02\u02DE?\x03\x02\x02\x02\u02DF\u02E0\x07<\x02" +
		"\x02\u02E0A\x03\x02\x02\x02\u02E1\u02E5\x05D#\x02\u02E2\u02E4\x07C\x02" +
		"\x02\u02E3\u02E2\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5\u02E3" +
		"\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02F7\x03\x02\x02\x02" +
		"\u02E7\u02E5\x03\x02\x02\x02\u02E8\u02EC\x07.\x02\x02\u02E9\u02EB\x07" +
		"C\x02\x02\u02EA\u02E9\x03\x02\x02\x02\u02EB\u02EE\x03\x02\x02\x02\u02EC" +
		"\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03\x02" +
		"\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F0\x07\n\x02\x02\u02F0\u02F4" +
		"\x07<\x02\x02\u02F1\u02F3\x07C\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F3" +
		"\u02F6\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4\u02F5\x03\x02" +
		"\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F7" +
		"\u02E8\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8C\x03\x02\x02" +
		"\x02\u02F9\u02FD\x05F$\x02\u02FA\u02FC\x07C\x02\x02\u02FB\u02FA\x03\x02" +
		"\x02\x02\u02FC\u02FF\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FD" +
		"\u02FE\x03\x02\x02\x02\u02FE\u0310\x03\x02\x02\x02\u02FF\u02FD\x03\x02" +
		"\x02\x02\u0300\u0304\x07.\x02\x02\u0301\u0303\x07C\x02\x02\u0302\u0301" +
		"\x03\x02\x02\x02\u0303\u0306\x03\x02\x02\x02\u0304\u0302\x03\x02\x02\x02" +
		"\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x03\x02\x02\x02\u0306\u0304\x03" +
		"\x02\x02\x02\u0307\u030B\x05F$\x02\u0308\u030A\x07C\x02\x02\u0309\u0308" +
		"\x03\x02\x02\x02\u030A\u030D\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02" +
		"\u030B\u030C\x03\x02\x02\x02\u030C\u030F\x03\x02\x02\x02\u030D\u030B\x03" +
		"\x02\x02\x02\u030E\u0300\x03\x02\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310" +
		"\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311E\x03\x02\x02" +
		"\x02\u0312\u0310\x03\x02\x02\x02\u0313\u0317\x05> \x02\u0314\u0316\x07" +
		"C\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0319\x03\x02\x02\x02\u0317" +
		"\u0315\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u031A\x03\x02" +
		"\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\u031E\x07\x06\x02\x02\u031B" +
		"\u031D\x07C\x02\x02\u031C\u031B\x03\x02\x02\x02\u031D\u0320\x03\x02\x02" +
		"\x02\u031E\u031C\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0321" +
		"\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0321\u0322\x056\x1C\x02" +
		"\u0322G\x03\x02\x02\x02\u0323\u0324\x05*\x16\x02\u0324I\x03\x02\x02\x02" +
		"\u0325\u032B\x05L'\x02\u0326\u032B\x05R*\x02\u0327\u032B\x05T+\x02\u0328" +
		"\u032B\x05X-\x02\u0329\u032B\x05`1\x02\u032A\u0325\x03\x02\x02\x02\u032A" +
		"\u0326\x03\x02\x02\x02\u032A\u0327\x03\x02\x02\x02\u032A\u0328\x03\x02" +
		"\x02\x02\u032A\u0329\x03\x02\x02\x02\u032BK\x03\x02\x02\x02\u032C\u0330" +
		"\x07!\x02\x02\u032D\u032F\x07C\x02\x02\u032E\u032D\x03\x02\x02\x02\u032F" +
		"\u0332\x03\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02" +
		"\x02\x02\u0331\u0334\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0333" +
		"\u0335\x05N(\x02\u0334\u0333\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02" +
		"\u0335\u0339\x03\x02\x02\x02\u0336\u0338\x07C\x02\x02\u0337\u0336\x03" +
		"\x02\x02\x02\u0338\u033B\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u0339" +
		"\u033A\x03\x02\x02\x02\u033A\u033C\x03\x02\x02\x02\u033B\u0339\x03\x02" +
		'\x02\x02\u033C\u033D\x07"\x02\x02\u033DM\x03\x02\x02\x02\u033E\u0340' +
		"\x05P)\x02\u033F\u033E\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341" +
		"\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342O\x03\x02\x02" +
		"\x02\u0343\u0345\x07C\x02\x02\u0344\u0343\x03\x02\x02\x02\u0345\u0348" +
		"\x03\x02\x02\x02\u0346\u0344\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02" +
		"\u0347\u034B\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0349\u034C\x05" +
		"J&\x02\u034A\u034C\x052\x1A\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034A" +
		"\x03\x02\x02\x02\u034C\u0350\x03\x02\x02\x02\u034D\u034F\x07C\x02\x02" +
		"\u034E\u034D\x03\x02\x02\x02\u034F\u0352\x03\x02\x02\x02\u0350\u034E\x03" +
		"\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351Q\x03\x02\x02\x02\u0352" +
		"\u0350\x03\x02\x02\x02\u0353\u0355\x05.\x18\x02\u0354\u0353\x03\x02\x02" +
		"\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0357" +
		"\x05\n\x06\x02\u0357S\x03\x02\x02\x02\u0358\u035C\x07\x12\x02\x02\u0359" +
		"\u035B\x07C\x02\x02\u035A\u0359\x03\x02\x02\x02\u035B\u035E\x03\x02\x02" +
		"\x02\u035C\u035A\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035F" +
		"\x03\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035F\u0363\x07\x1D\x02\x02" +
		"\u0360\u0362\x07C\x02\x02\u0361\u0360\x03\x02\x02\x02\u0362\u0365\x03" +
		"\x02\x02\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364" +
		"\u0366\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0366\u036A\x05.\x18" +
		"\x02\u0367\u0369\x07C\x02\x02\u0368\u0367\x03\x02\x02\x02\u0369\u036C" +
		"\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02" +
		"\u036B\u036D\x03\x02\x02\x02\u036C\u036A\x03\x02\x02\x02\u036D\u0371\x07" +
		"\x1E\x02\x02\u036E\u0370\x07C\x02\x02\u036F\u036E\x03\x02\x02\x02\u0370" +
		"\u0373\x03\x02\x02\x02\u0371\u036F\x03\x02\x02\x02\u0371\u0372\x03\x02" +
		"\x02\x02\u0372\u0374\x03\x02\x02\x02\u0373\u0371\x03\x02\x02\x02\u0374" +
		"\u0378\x05J&\x02\u0375\u0377\x07C\x02\x02\u0376\u0375\x03\x02\x02\x02" +
		"\u0377\u037A\x03\x02\x02\x02\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03" +
		"\x02\x02\x02\u0379\u0383\x03\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037B" +
		"\u037F\x07\x13\x02\x02\u037C\u037E\x07C\x02\x02\u037D\u037C\x03\x02\x02" +
		"\x02\u037E\u0381\x03\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u0380" +
		"\x03\x02\x02\x02\u0380\u0382\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02" +
		"\u0382\u0384\x05J&\x02\u0383\u037B\x03\x02\x02\x02\u0383\u0384\x03\x02" +
		"\x02\x02\u0384\u03B1\x03\x02\x02\x02\u0385\u0389\x07\v\x02\x02\u0386\u0388" +
		"\x07C\x02\x02\u0387\u0386\x03\x02\x02\x02\u0388\u038B\x03\x02\x02\x02" +
		"\u0389\u0387\x03\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038C\x03" +
		"\x02\x02\x02\u038B\u0389\x03\x02\x02\x02\u038C\u0390\x07\x1D\x02\x02\u038D" +
		"\u038F\x07C\x02\x02\u038E\u038D\x03\x02\x02\x02\u038F\u0392\x03\x02\x02" +
		"\x02\u0390\u038E\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u0393" +
		"\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0393\u0397\x05.\x18\x02" +
		"\u0394\u0396\x07C\x02\x02\u0395\u0394\x03\x02\x02\x02\u0396\u0399\x03" +
		"\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398" +
		"\u039A\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02\u039A\u039E\x07\x1E" +
		"\x02\x02\u039B\u039D\x07C\x02\x02\u039C\u039B\x03\x02\x02\x02\u039D\u03A0" +
		"\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02" +
		"\u039F\u03A1\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u03AB\x07" +
		"!\x02\x02\u03A2\u03A4\x07C\x02\x02\u03A3\u03A2\x03\x02\x02\x02\u03A4\u03A7" +
		"\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02" +
		"\u03A6\u03A8\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A8\u03AA\x05" +
		"V,\x02\u03A9\u03A5\x03\x02\x02\x02\u03AA\u03AD\x03\x02\x02\x02\u03AB\u03A9" +
		"\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AE\x03\x02\x02\x02" +
		'\u03AD\u03AB\x03\x02\x02\x02\u03AE\u03AF\x07"\x02\x02\u03AF\u03B1\x03' +
		"\x02\x02\x02\u03B0\u0358\x03\x02\x02\x02\u03B0\u0385\x03\x02\x02\x02\u03B1" +
		"U\x03\x02\x02\x02\u03B2\u03B6\x07\f\x02\x02\u03B3\u03B5\x07C\x02\x02\u03B4" +
		"\u03B3\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B4\x03\x02" +
		"\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03B9\x03\x02\x02\x02\u03B8" +
		"\u03B6\x03\x02\x02\x02\u03B9\u03BD\x050\x19\x02\u03BA\u03BC\x07C\x02\x02" +
		"\u03BB\u03BA\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD\u03BB\x03" +
		"\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C0\x03\x02\x02\x02\u03BF" +
		"\u03BD\x03\x02\x02\x02\u03C0\u03C4\x07\x06\x02\x02\u03C1\u03C3\x07C\x02" +
		"\x02\u03C2\u03C1\x03\x02\x02\x02\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C2" +
		"\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C7\x03\x02\x02\x02" +
		"\u03C6\u03C4\x03\x02\x02\x02\u03C7\u03C8\x05J&\x02\u03C8\u03D9\x03\x02" +
		"\x02\x02\u03C9\u03CD\x07\r\x02\x02\u03CA\u03CC\x07C\x02\x02\u03CB\u03CA" +
		"\x03\x02\x02\x02\u03CC\u03CF\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02" +
		"\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03D0\x03\x02\x02\x02\u03CF\u03CD\x03" +
		"\x02\x02\x02\u03D0\u03D4\x07\x06\x02\x02\u03D1\u03D3\x07C\x02\x02\u03D2" +
		"\u03D1\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02\u03D4\u03D2\x03\x02" +
		"\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D7\x03\x02\x02\x02\u03D6" +
		"\u03D4\x03\x02\x02\x02\u03D7\u03D9\x05J&\x02\u03D8\u03B2\x03\x02\x02\x02" +
		"\u03D8\u03C9\x03\x02\x02\x02\u03D9W\x03\x02\x02\x02\u03DA\u03DE\x07\x14" +
		"\x02\x02\u03DB\u03DD\x07C\x02\x02\u03DC\u03DB\x03\x02\x02\x02\u03DD\u03E0" +
		"\x03\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02" +
		"\u03DF\u03E1\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E1\u03E2\x07" +
		"\x1D\x02\x02\u03E2\u03E3\x05Z.\x02\u03E3\u03E7\x07\x1E\x02\x02\u03E4\u03E6" +
		"\x07C\x02\x02\u03E5\u03E4\x03\x02\x02\x02\u03E6\u03E9\x03\x02\x02\x02" +
		"\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03EA\x03" +
		"\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03EA\u03EB\x05J&\x02\u03EB\u0431" +
		"\x03\x02\x02\x02\u03EC\u03F0\x07\x11\x02\x02\u03ED\u03EF\x07C\x02\x02" +
		"\u03EE\u03ED\x03\x02\x02\x02\u03EF\u03F2\x03\x02\x02\x02\u03F0\u03EE\x03" +
		"\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F3\x03\x02\x02\x02\u03F2" +
		"\u03F0\x03\x02\x02\x02\u03F3\u03F7\x07\x1D\x02\x02\u03F4\u03F6\x07C\x02" +
		"\x02\u03F5\u03F4\x03\x02\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5" +
		"\x03\x02\x02\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03FA\x03\x02\x02\x02" +
		"\u03F9\u03F7\x03\x02\x02\x02\u03FA\u03FE\x05.\x18\x02\u03FB\u03FD\x07" +
		"C\x02\x02\u03FC\u03FB\x03\x02\x02\x02\u03FD\u0400\x03\x02\x02\x02\u03FE" +
		"\u03FC\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02\u03FF\u0401\x03\x02" +
		"\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401\u0405\x07\x1E\x02\x02\u0402" +
		"\u0404\x07C\x02\x02\u0403\u0402\x03\x02\x02\x02\u0404\u0407\x03\x02\x02" +
		"\x02\u0405\u0403\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0408" +
		"\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0408\u0409\x05J&\x02\u0409" +
		"\u0431\x03\x02\x02\x02\u040A\u040E\x07\x10\x02\x02\u040B\u040D\x07C\x02" +
		"\x02\u040C\u040B\x03\x02\x02\x02\u040D\u0410\x03\x02\x02\x02\u040E\u040C" +
		"\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02\u040F\u0411\x03\x02\x02\x02" +
		"\u0410\u040E\x03\x02\x02\x02\u0411\u0415\x05J&\x02\u0412\u0414\x07C\x02" +
		"\x02\u0413\u0412\x03\x02\x02\x02\u0414\u0417\x03\x02\x02\x02\u0415\u0413" +
		"\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0418\x03\x02\x02\x02" +
		"\u0417\u0415\x03\x02\x02\x02\u0418\u041C\x07\x11\x02\x02\u0419\u041B\x07" +
		"C\x02\x02\u041A\u0419\x03\x02\x02\x02\u041B\u041E\x03\x02\x02\x02\u041C" +
		"\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u041F\x03\x02" +
		"\x02\x02\u041E\u041C\x03\x02\x02\x02\u041F\u0423\x07\x1D\x02\x02\u0420" +
		"\u0422\x07C\x02\x02\u0421\u0420\x03\x02\x02\x02\u0422\u0425\x03\x02\x02" +
		"\x02\u0423\u0421\x03\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u0426" +
		"\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0426\u042A\x05.\x18\x02" +
		"\u0427\u0429\x07C\x02\x02\u0428\u0427\x03\x02\x02\x02\u0429\u042C\x03" +
		"\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B" +
		"\u042D\x03\x02\x02\x02\u042C\u042A\x03\x02\x02\x02\u042D\u042E\x07\x1E" +
		"\x02\x02\u042E\u042F\x05\n\x06\x02\u042F\u0431\x03\x02\x02\x02\u0430\u03DA" +
		"\x03\x02\x02\x02\u0430\u03EC\x03\x02\x02\x02\u0430\u040A\x03\x02\x02\x02" +
		"\u0431Y\x03\x02\x02\x02\u0432\u0437\x05\\/\x02\u0433\u0435\x05.\x18\x02" +
		"\u0434\u0433\x03\x02\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0437\x03" +
		"\x02\x02\x02\u0436\u0432\x03\x02\x02\x02\u0436\u0434\x03\x02\x02\x02\u0437" +
		"\u0438\x03\x02\x02\x02\u0438\u043A\x05\n\x06\x02\u0439\u043B\x05^0\x02" +
		"\u043A\u0439\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043C\x03" +
		"\x02\x02\x02\u043C\u043E\x05\n\x06\x02\u043D\u043F\x05^0\x02\u043E\u043D" +
		"\x03\x02\x02\x02\u043E\u043F\x03\x02\x02\x02\u043F[\x03\x02\x02\x02\u0440" +
		"\u0444\x054\x1B\x02\u0441\u0443\x07C\x02\x02\u0442\u0441\x03\x02\x02\x02" +
		"\u0443\u0446\x03\x02\x02\x02\u0444\u0442\x03\x02\x02\x02\u0444\u0445\x03" +
		"\x02\x02\x02\u0445\u0447\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0447" +
		"\u0448\x05:\x1E\x02\u0448]";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u0449\u044D\x05*\x16\x02\u044A\u044C\x07C\x02\x02\u044B" +
		"\u044A\x03\x02\x02\x02\u044C\u044F\x03\x02\x02\x02\u044D\u044B\x03\x02" +
		"\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E\u0460\x03\x02\x02\x02\u044F" +
		"\u044D\x03\x02\x02\x02\u0450\u0454\x07.\x02\x02\u0451\u0453\x07C\x02\x02" +
		"\u0452\u0451\x03\x02\x02\x02\u0453\u0456\x03\x02\x02\x02\u0454\u0452\x03" +
		"\x02\x02\x02\u0454\u0455\x03\x02\x02\x02\u0455\u0457\x03\x02\x02\x02\u0456" +
		"\u0454\x03\x02\x02\x02\u0457\u045B\x05*\x16\x02\u0458\u045A\x07C\x02\x02" +
		"\u0459\u0458\x03\x02\x02\x02\u045A\u045D\x03\x02\x02\x02\u045B\u0459\x03" +
		"\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\u045F\x03\x02\x02\x02\u045D" +
		"\u045B\x03\x02\x02\x02\u045E\u0450\x03\x02\x02\x02\u045F\u0462\x03\x02" +
		"\x02\x02\u0460\u045E\x03\x02\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461" +
		"_\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02\u0463\u046F\t\f\x02\x02" +
		"\u0464\u0468\x07\x17\x02\x02\u0465\u0467\x07C\x02\x02\u0466\u0465\x03" +
		"\x02\x02\x02\u0467\u046A\x03\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0468" +
		"\u0469\x03\x02\x02\x02\u0469\u046C\x03\x02\x02\x02\u046A\u0468\x03\x02" +
		"\x02\x02\u046B\u046D\x05.\x18\x02\u046C\u046B\x03\x02\x02\x02\u046C\u046D" +
		"\x03\x02\x02\x02\u046D\u046F\x03\x02\x02\x02\u046E\u0463\x03\x02\x02\x02" +
		"\u046E\u0464\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470\u0471\x05" +
		"\n\x06\x02\u0471a\x03\x02\x02\x02\x9Fclnptz\x81\x88\x8F\x92\x98\x9F\xA6" +
		"\xAB\xB0\xB7\xC8\xCF\xD6\xDD\xE2\xE7\xEE\xF7\xFE\u0105\u0109\u010E\u0113" +
		"\u0119\u0120\u0129\u0130\u0137\u013C\u0144\u014D\u0152\u015D\u0164\u0169" +
		"\u0172\u0179\u0180\u0185\u018F\u0196\u019D\u01A2\u01AC\u01B3\u01BA\u01BF" +
		"\u01C9\u01D0\u01D7\u01DC\u01E6\u01ED\u01F4\u01F9\u0203\u020A\u0211\u0216" +
		"\u021E\u0225\u022C\u0233\u023A\u023D\u0244\u024B\u0250\u0258\u025F\u0266" +
		"\u026B\u0274\u0280\u0285\u028D\u0294\u029B\u02A2\u02A9\u02AC\u02B3\u02BA" +
		"\u02C1\u02C9\u02D0\u02D7\u02DB\u02E5\u02EC\u02F4\u02F7\u02FD\u0304\u030B" +
		"\u0310\u0317\u031E\u032A\u0330\u0334\u0339\u0341\u0346\u034B\u0350\u0354" +
		"\u035C\u0363\u036A\u0371\u0378\u037F\u0383\u0389\u0390\u0397\u039E\u03A5" +
		"\u03AB\u03B0\u03B6\u03BD\u03C4\u03CD\u03D4\u03D8\u03DE\u03E7\u03F0\u03F7" +
		"\u03FE\u0405\u040E\u0415\u041C\u0423\u042A\u0430\u0434\u0436\u043A\u043E" +
		"\u0444\u044D\u0454\u045B\u0460\u0468\u046C\u046E";
	public static readonly _serializedATN: string = Utils.join(
		[KipperParser._serializedATNSegment0, KipperParser._serializedATNSegment1, KipperParser._serializedATNSegment2],
		"",
	);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
	}
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
export class CharacterPrimaryExpressionContext extends PrimaryExpressionContext {
	public CharacterConstant(): TerminalNode {
		return this.getToken(KipperParser.CharacterConstant, 0);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterCharacterPrimaryExpression) {
			listener.enterCharacterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitCharacterPrimaryExpression) {
			listener.exitCharacterPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitCharacterPrimaryExpression) {
			return visitor.visitCharacterPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringPrimaryExpressionContext extends PrimaryExpressionContext {
	public StringLiteral(): TerminalNode {
		return this.getToken(KipperParser.StringLiteral, 0);
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
	public FStringLiteral(): TerminalNode {
		return this.getToken(KipperParser.FStringLiteral, 0);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public CallFunc(): TerminalNode {
		return this.getToken(KipperParser.CallFunc, 0);
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
export class SingleTypeSpecifierContext extends TypeSpecifierContext {
	public Identifier(): TerminalNode {
		return this.getToken(KipperParser.Identifier, 0);
	}
	constructor(ctx: TypeSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterSingleTypeSpecifier) {
			listener.enterSingleTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitSingleTypeSpecifier) {
			listener.exitSingleTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitSingleTypeSpecifier) {
			return visitor.visitSingleTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GenericTypeSpecifierContext extends TypeSpecifierContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Identifier);
		} else {
			return this.getToken(KipperParser.Identifier, i);
		}
	}
	public Less(): TerminalNode {
		return this.getToken(KipperParser.Less, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(KipperParser.Greater, 0);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public Identifier(): TerminalNode {
		return this.getToken(KipperParser.Identifier, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
	}
	public Comma(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Comma, 0);
	}
	public Spread(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Spread, 0);
	}
	public Identifier(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Identifier, 0);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
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
