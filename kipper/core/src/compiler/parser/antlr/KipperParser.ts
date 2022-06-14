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
	public static readonly Whitespace = 65;
	public static readonly BlockComment = 66;
	public static readonly Newline = 67;
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
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__1) |
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
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket) |
								(1 << KipperParser.LeftBrace))) !==
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
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						this.state = 103;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
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
						}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__1) |
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
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket) |
								(1 << KipperParser.LeftBrace))) !==
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
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.DefFunc:
					_localctx = new ExternalFunctionDeclarationContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 107;
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
					_localctx = new ExternalBlockItemContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 108;
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
				this.state = 111;
				this.match(KipperParser.DefFunc);
				this.state = 112;
				this.declarator();
				this.state = 113;
				this.match(KipperParser.LeftParen);
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 114;
						this.parameterTypeList();
					}
				}

				this.state = 117;
				this.match(KipperParser.RightParen);
				this.state = 118;
				this.match(KipperParser.T__0);
				this.state = 119;
				this.typeSpecifier();
				this.state = 122;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.LeftBrace:
						{
							this.state = 120;
							this.compoundStatement();
						}
						break;
					case KipperParser.T__1:
						{
							this.state = 121;
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
				this.state = 124;
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
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftParen:
					_localctx = new TangledPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 126;
						this.match(KipperParser.LeftParen);
						this.state = 127;
						this.expression();
						this.state = 128;
						this.match(KipperParser.RightParen);
					}
					break;
				case KipperParser.True:
				case KipperParser.False:
					_localctx = new BoolPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 130;
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
						this.state = 131;
						this.match(KipperParser.Identifier);
					}
					break;
				case KipperParser.CharacterConstant:
					_localctx = new CharacterPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 132;
						this.match(KipperParser.CharacterConstant);
					}
					break;
				case KipperParser.StringLiteral:
					_localctx = new StringPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 133;
						this.match(KipperParser.StringLiteral);
					}
					break;
				case KipperParser.FStringLiteral:
					_localctx = new FStringPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 134;
						this.match(KipperParser.FStringLiteral);
					}
					break;
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
					_localctx = new NumberPrimaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 135;
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
						this.state = 136;
						this.match(KipperParser.LeftBracket);
						this.state = 137;
						this.constantExpression();
						this.state = 142;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Comma) {
							{
								{
									this.state = 138;
									this.match(KipperParser.Comma);
									this.state = 139;
									this.constantExpression();
								}
							}
							this.state = 144;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 145;
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
			this.state = 167;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
				case 1:
					_localctx = new PassOnPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 149;
						this.primaryExpression();
					}
					break;

				case 2:
					_localctx = new ArraySpecifierPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 150;
						this.primaryExpression();
						this.state = 152;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
								case 1:
									{
										{
											this.state = 151;
											this.arraySpecifier();
										}
									}
									break;
								default:
									throw new NoViableAltException(this);
							}
							this.state = 154;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;

				case 3:
					_localctx = new IncrementOrDecrementPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 156;
						this.primaryExpression();
						this.state = 157;
						this.incrementOrDecrementOperator();
					}
					break;

				case 4:
					_localctx = new FunctionCallPostfixExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 159;
						this.match(KipperParser.CallFunc);
						this.state = 160;
						this.primaryExpression();
						this.state = 161;
						this.match(KipperParser.LeftParen);
						this.state = 163;
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
								this.state = 162;
								this.argumentExpressionList();
							}
						}

						this.state = 165;
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
				this.state = 169;
				this.match(KipperParser.LeftBracket);
				this.state = 170;
				this.expression();
				this.state = 171;
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
				this.state = 173;
				this.assignmentExpression();
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 174;
							this.match(KipperParser.Comma);
							this.state = 175;
							this.assignmentExpression();
						}
					}
					this.state = 180;
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
			this.state = 188;
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
						this.state = 181;
						this.postfixExpression();
					}
					break;
				case KipperParser.PlusPlus:
				case KipperParser.MinusMinus:
					_localctx = new IncrementOrDecrementUnaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 182;
						this.incrementOrDecrementOperator();
						this.state = 183;
						this.postfixExpression();
					}
					break;
				case KipperParser.Plus:
				case KipperParser.Minus:
				case KipperParser.Not:
					_localctx = new OperatorModifiedUnaryExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 185;
						this.unaryOperator();
						this.state = 186;
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
				this.state = 190;
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
				this.state = 192;
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
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
				case 1:
					_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 194;
						this.unaryExpression();
					}
					break;

				case 2:
					_localctx = new ActualCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 195;
						this.unaryExpression();
						this.state = 196;
						this.match(KipperParser.As);
						this.state = 197;
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

					this.state = 202;
					this.castOrConvertExpression();
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 209;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
								this.state = 204;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 205;
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
								this.state = 206;
								this.castOrConvertExpression();
							}
						}
					}
					this.state = 211;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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

					this.state = 213;
					this.multiplicativeExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 220;
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
								_localctx = new ActualAdditiveExpressionContext(
									new AdditiveExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_additiveExpression);
								this.state = 215;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 216;
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
								this.state = 217;
								this.multiplicativeExpression(0);
							}
						}
					}
					this.state = 222;
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

					this.state = 224;
					this.additiveExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 231;
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
								_localctx = new ActualRelationalExpressionContext(
									new RelationalExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_relationalExpression);
								this.state = 226;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 227;
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
								this.state = 228;
								this.additiveExpression(0);
							}
						}
					}
					this.state = 233;
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

					this.state = 235;
					this.relationalExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 242;
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
								_localctx = new ActualEqualityExpressionContext(
									new EqualityExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_equalityExpression);
								this.state = 237;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 238;
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
								this.state = 239;
								this.relationalExpression(0);
							}
						}
					}
					this.state = 244;
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

					this.state = 246;
					this.equalityExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 253;
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
								_localctx = new ActualLogicalAndExpressionContext(
									new LogicalAndExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_logicalAndExpression);
								this.state = 248;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 249;
								this.match(KipperParser.AndAnd);
								this.state = 250;
								this.equalityExpression(0);
							}
						}
					}
					this.state = 255;
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

					this.state = 257;
					this.logicalAndExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 264;
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
								_localctx = new ActualLogicalOrExpressionContext(
									new LogicalOrExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_logicalOrExpression);
								this.state = 259;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 260;
								this.match(KipperParser.OrOr);
								this.state = 261;
								this.logicalAndExpression(0);
							}
						}
					}
					this.state = 266;
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
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, KipperParser.RULE_conditionalExpression);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
				case 1:
					_localctx = new PassOnConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 267;
						this.logicalOrExpression(0);
					}
					break;

				case 2:
					_localctx = new ActualConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 268;
						this.logicalOrExpression(0);
						this.state = 269;
						this.match(KipperParser.T__2);
						this.state = 270;
						this.conditionalExpression();
						this.state = 271;
						this.match(KipperParser.T__3);
						this.state = 272;
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
			this.state = 281;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
				case 1:
					_localctx = new PassOnAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 276;
						this.conditionalExpression();
					}
					break;

				case 2:
					_localctx = new ActualAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 277;
						this.primaryExpression();
						this.state = 278;
						this.assignmentOperator();
						this.state = 279;
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
				this.state = 283;
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
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 285;
				this.assignmentExpression();
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 286;
							this.match(KipperParser.Comma);
							this.state = 287;
							this.assignmentExpression();
						}
					}
					this.state = 292;
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
				this.state = 293;
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
				this.state = 295;
				this.storageTypeSpecifier();
				this.state = 296;
				this.initDeclarator();
				this.state = 297;
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
				this.state = 299;
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
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 301;
							this.declarationSpecifier();
						}
					}
					this.state = 304;
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
				this.state = 306;
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
				this.state = 308;
				this.declarator();
				this.state = 309;
				this.match(KipperParser.T__3);
				this.state = 310;
				this.typeSpecifier();
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Assign) {
					{
						this.state = 311;
						this.match(KipperParser.Assign);
						this.state = 312;
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
			this.state = 324;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
				case 1:
					_localctx = new SingleTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 315;
						this.match(KipperParser.Identifier);
					}
					break;

				case 2:
					_localctx = new GenericTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 316;
						this.match(KipperParser.Identifier);
						this.state = 317;
						this.match(KipperParser.Less);
						this.state = 318;
						this.match(KipperParser.Identifier);
						this.state = 319;
						this.match(KipperParser.Greater);
					}
					break;

				case 3:
					_localctx = new TypeofTypeSpecifierContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 320;
						this.match(KipperParser.Typeof);
						this.state = 321;
						this.match(KipperParser.LeftParen);
						this.state = 322;
						this.match(KipperParser.Identifier);
						this.state = 323;
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
				this.state = 326;
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
				this.state = 328;
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
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 330;
				this.parameterList();
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Comma) {
					{
						this.state = 331;
						this.match(KipperParser.Comma);
						this.state = 332;
						this.match(KipperParser.Spread);
						this.state = 333;
						this.match(KipperParser.Identifier);
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 336;
				this.parameterDeclaration();
				this.state = 341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 337;
								this.match(KipperParser.Comma);
								this.state = 338;
								this.parameterDeclaration();
							}
						}
					}
					this.state = 343;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 344;
				this.declarator();
				this.state = 345;
				this.match(KipperParser.T__3);
				this.state = 346;
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
				this.state = 348;
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
			this.state = 355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftBrace:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 350;
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
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 351;
						this.expressionStatement();
					}
					break;
				case KipperParser.Switch:
				case KipperParser.If:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 352;
						this.selectionStatement();
					}
					break;
				case KipperParser.Do:
				case KipperParser.While:
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 353;
						this.iterationStatement();
					}
					break;
				case KipperParser.Break:
				case KipperParser.Continue:
				case KipperParser.Return:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 354;
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
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 357;
				this.match(KipperParser.LeftBrace);
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__1) |
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
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket) |
								(1 << KipperParser.LeftBrace))) !==
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
						this.state = 358;
						this.blockItemList();
					}
				}

				this.state = 361;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 363;
							this.blockItem();
						}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.T__1) |
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
								(1 << KipperParser.LeftParen) |
								(1 << KipperParser.LeftBracket) |
								(1 << KipperParser.LeftBrace))) !==
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
		this.enterRule(_localctx, 78, KipperParser.RULE_blockItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 370;
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
						{
							this.state = 368;
							this.statement();
						}
						break;
					case KipperParser.Const:
					case KipperParser.Var:
						{
							this.state = 369;
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
		this.enterRule(_localctx, 80, KipperParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 373;
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
						this.state = 372;
						this.expression();
					}
				}

				this.state = 375;
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
			this.state = 399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.If:
					_localctx = new IfStatementContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 377;
						this.match(KipperParser.If);
						this.state = 378;
						this.match(KipperParser.LeftParen);
						this.state = 379;
						this.expression();
						this.state = 380;
						this.match(KipperParser.RightParen);
						this.state = 381;
						this.statement();
						this.state = 384;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
							case 1:
								{
									this.state = 382;
									this.match(KipperParser.Else);
									this.state = 383;
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
						this.state = 386;
						this.match(KipperParser.Switch);
						this.state = 387;
						this.match(KipperParser.LeftParen);
						this.state = 388;
						this.expression();
						this.state = 389;
						this.match(KipperParser.RightParen);
						this.state = 390;
						this.match(KipperParser.LeftBrace);
						this.state = 394;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Case || _la === KipperParser.Default) {
							{
								{
									this.state = 391;
									this.switchLabeledStatement();
								}
							}
							this.state = 396;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 397;
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
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Case:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 401;
						this.match(KipperParser.Case);
						this.state = 402;
						this.constantExpression();
						this.state = 403;
						this.match(KipperParser.T__3);
						this.state = 404;
						this.statement();
					}
					break;
				case KipperParser.Default:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 406;
						this.match(KipperParser.Default);
						this.state = 407;
						this.match(KipperParser.T__3);
						this.state = 408;
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
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 411;
						this.match(KipperParser.For);
						this.state = 412;
						this.match(KipperParser.LeftParen);
						this.state = 413;
						this.forCondition();
						this.state = 414;
						this.match(KipperParser.RightParen);
						this.state = 415;
						this.statement();
					}
					break;
				case KipperParser.While:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 417;
						this.match(KipperParser.While);
						this.state = 418;
						this.match(KipperParser.LeftParen);
						this.state = 419;
						this.expression();
						this.state = 420;
						this.match(KipperParser.RightParen);
						this.state = 421;
						this.statement();
					}
					break;
				case KipperParser.Do:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 423;
						this.match(KipperParser.Do);
						this.state = 424;
						this.statement();
						this.state = 425;
						this.match(KipperParser.While);
						this.state = 426;
						this.match(KipperParser.LeftParen);
						this.state = 427;
						this.expression();
						this.state = 428;
						this.match(KipperParser.RightParen);
						this.state = 429;
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
				this.state = 437;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.Const:
					case KipperParser.Var:
						{
							this.state = 433;
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
						{
							this.state = 435;
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
									this.state = 434;
									this.expression();
								}
							}
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 439;
				this.endOfLine();
				this.state = 441;
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
						this.state = 440;
						this.forExpression();
					}
				}

				this.state = 443;
				this.endOfLine();
				this.state = 445;
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
						this.state = 444;
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 447;
				this.storageTypeSpecifier();
				this.state = 448;
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
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 450;
				this.assignmentExpression();
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 451;
							this.match(KipperParser.Comma);
							this.state = 452;
							this.assignmentExpression();
						}
					}
					this.state = 457;
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
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 463;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.Break:
					case KipperParser.Continue:
						{
							this.state = 458;
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
							this.state = 459;
							this.match(KipperParser.Return);
							this.state = 461;
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
									this.state = 460;
									this.expression();
								}
							}
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 465;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u01D6\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		'\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x05\x02d\n\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x06\x03j\n\x03\r\x03\x0E\x03k\x03\x04" +
		"\x03\x04\x05\x04p\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05v\n\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05}\n\x05\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x8F\n\x07\f\x07\x0E\x07" +
		"\x92\v\x07\x03\x07\x03\x07\x05\x07\x96\n\x07\x03\b\x03\b\x03\b\x06\b\x9B" +
		"\n\b\r\b\x0E\b\x9C\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xA6" +
		"\n\b\x03\b\x03\b\x05\b\xAA\n\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x07\n\xB3\n\n\f\n\x0E\n\xB6\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x05\v\xBF\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\xCA\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\xD2\n\x0F\f\x0F\x0E\x0F\xD5\v\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x07\x10\xDD\n\x10\f\x10\x0E\x10\xE0\v\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xE8\n\x11\f\x11" +
		"\x0E\x11\xEB\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07" +
		"\x12\xF3\n\x12\f\x12\x0E\x12\xF6\v\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\xFE\n\x13\f\x13\x0E\x13\u0101\v\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0109\n\x14\f\x14\x0E\x14" +
		"\u010C\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u0115\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u011C" +
		"\n\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18\u0123\n\x18\f\x18" +
		"\x0E\x18\u0126\v\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1C\x06\x1C\u0131\n\x1C\r\x1C\x0E\x1C\u0132\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u013C\n\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		'\u0147\n\x1F\x03 \x03 \x03!\x03!\x03"\x03"\x03"\x03"\x05"\u0151\n' +
		'"\x03#\x03#\x03#\x07#\u0156\n#\f#\x0E#\u0159\v#\x03$\x03$\x03$\x03$\x03' +
		"%\x03%\x03&\x03&\x03&\x03&\x03&\x05&\u0166\n&\x03'\x03'\x05'\u016A" +
		"\n'\x03'\x03'\x03(\x06(\u016F\n(\r(\x0E(\u0170\x03)\x03)\x05)\u0175" +
		"\n)\x03*\x05*\u0178\n*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x05" +
		"+\u0183\n+\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u018B\n+\f+\x0E+\u018E\v" +
		"+\x03+\x03+\x05+\u0192\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05" +
		",\u019C\n,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u01B2\n-\x03.\x03.\x05" +
		".\u01B6\n.\x05.\u01B8\n.\x03.\x03.\x05.\u01BC\n.\x03.\x03.\x05.\u01C0" +
		"\n.\x03/\x03/\x03/\x030\x030\x030\x070\u01C8\n0\f0\x0E0\u01CB\v0\x031" +
		"\x031\x031\x051\u01D0\n1\x051\u01D2\n1\x031\x031\x031\x02\x02\b\x1C\x1E" +
		' "$&2\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02' +
		'\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02' +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02\x02\r\x03\x02\x19\x1A\x03\x02=>\x04\x02$$&&\x05\x02##%%--\x03\x02" +
		"'*\x04\x02##%%\x03\x027:\x03\x0256\x03\x02/4\x03\x02\x07\b\x03\x02\x0E" +
		"\x0F\x02\u01E0\x02c\x03\x02\x02\x02\x04i\x03\x02\x02\x02\x06o\x03\x02" +
		"\x02\x02\bq\x03\x02\x02\x02\n~\x03\x02\x02\x02\f\x95\x03\x02\x02\x02\x0E" +
		"\xA9\x03\x02\x02\x02\x10\xAB\x03\x02\x02\x02\x12\xAF\x03\x02\x02\x02\x14" +
		"\xBE\x03\x02\x02\x02\x16\xC0\x03\x02\x02\x02\x18\xC2\x03\x02\x02\x02\x1A" +
		"\xC9\x03\x02\x02\x02\x1C\xCB\x03\x02\x02\x02\x1E\xD6\x03\x02\x02\x02 " +
		'\xE1\x03\x02\x02\x02"\xEC\x03\x02\x02\x02$\xF7\x03\x02\x02\x02&\u0102' +
		"\x03\x02\x02\x02(\u0114\x03\x02\x02\x02*\u011B\x03\x02\x02\x02,\u011D" +
		"\x03\x02\x02\x02.\u011F\x03\x02\x02\x020\u0127\x03\x02\x02\x022\u0129" +
		"\x03\x02\x02\x024\u012D\x03\x02\x02\x026\u0130\x03\x02\x02\x028\u0134" +
		"\x03\x02\x02\x02:\u0136\x03\x02\x02\x02<\u0146\x03\x02\x02\x02>\u0148" +
		"\x03\x02\x02\x02@\u014A\x03\x02\x02\x02B\u014C\x03\x02\x02\x02D\u0152" +
		"\x03\x02\x02\x02F\u015A\x03\x02\x02\x02H\u015E\x03\x02\x02\x02J\u0165" +
		"\x03\x02\x02\x02L\u0167\x03\x02\x02\x02N\u016E\x03\x02\x02\x02P\u0174" +
		"\x03\x02\x02\x02R\u0177\x03\x02\x02\x02T\u0191\x03\x02\x02\x02V\u019B" +
		"\x03\x02\x02\x02X\u01B1\x03\x02\x02\x02Z\u01B7\x03\x02\x02\x02\\\u01C1" +
		"\x03\x02\x02\x02^\u01C4\x03\x02\x02\x02`\u01D1\x03\x02\x02\x02bd\x05\x04" +
		"\x03\x02cb\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\x07\x02" +
		"\x02\x03f\x03\x03\x02\x02\x02gj\x05\x06\x04\x02hj\x05\n\x06\x02ig\x03" +
		"\x02\x02\x02ih\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03" +
		"\x02\x02\x02l\x05\x03\x02\x02\x02mp\x05\b\x05\x02np\x05P)\x02om\x03\x02" +
		"\x02\x02on\x03\x02\x02\x02p\x07\x03\x02\x02\x02qr\x07\x16\x02\x02rs\x05" +
		'> \x02su\x07\x1D\x02\x02tv\x05B"\x02ut\x03\x02\x02\x02uv\x03\x02\x02' +
		"\x02vw\x03\x02\x02\x02wx\x07\x1E\x02\x02xy\x07\x03\x02\x02y|\x05<\x1F" +
		"\x02z}\x05L'\x02{}\x05\n\x06\x02|z\x03\x02\x02\x02|{\x03\x02\x02\x02" +
		"}\t\x03\x02\x02\x02~\x7F\x07\x04\x02\x02\x7F\v\x03\x02\x02\x02\x80\x81" +
		"\x07\x1D\x02\x02\x81\x82\x05.\x18\x02\x82\x83\x07\x1E\x02\x02\x83\x96" +
		"\x03\x02\x02\x02\x84\x96\t\x02\x02\x02\x85\x96\x07<\x02\x02\x86\x96\x07" +
		"@\x02\x02\x87\x96\x07B\x02\x02\x88\x96\x07A\x02\x02\x89\x96\t\x03\x02" +
		"\x02\x8A\x8B\x07\x1F\x02\x02\x8B\x90\x050\x19\x02\x8C\x8D\x07.\x02\x02" +
		"\x8D\x8F\x050\x19\x02\x8E\x8C\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02" +
		"\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02" +
		"\x92\x90\x03\x02\x02\x02\x93\x94\x07 \x02\x02\x94\x96\x03\x02\x02\x02" +
		"\x95\x80\x03\x02\x02\x02\x95\x84\x03\x02\x02\x02\x95\x85\x03\x02\x02\x02" +
		"\x95\x86\x03\x02\x02\x02\x95\x87\x03\x02\x02\x02\x95\x88\x03\x02\x02\x02" +
		"\x95\x89\x03\x02\x02\x02\x95\x8A\x03\x02\x02\x02\x96\r\x03\x02\x02\x02" +
		"\x97\xAA\x05\f\x07\x02\x98\x9A\x05\f\x07\x02\x99\x9B\x05\x10\t\x02\x9A" +
		"\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C" +
		"\x9D\x03\x02\x02\x02\x9D\xAA\x03\x02\x02\x02\x9E\x9F\x05\f\x07\x02\x9F" +
		"\xA0\x05\x16\f\x02\xA0\xAA\x03\x02\x02\x02\xA1\xA2\x07\x18\x02\x02\xA2" +
		"\xA3\x05\f\x07\x02\xA3\xA5\x07\x1D\x02\x02\xA4\xA6\x05\x12\n\x02\xA5\xA4" +
		"\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8" +
		"\x07\x1E\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\x97\x03\x02\x02\x02\xA9\x98" +
		"\x03\x02\x02\x02\xA9\x9E\x03\x02\x02\x02\xA9\xA1\x03\x02\x02\x02\xAA\x0F" +
		"\x03\x02\x02\x02\xAB\xAC\x07\x1F\x02\x02\xAC\xAD\x05.\x18\x02\xAD\xAE" +
		"\x07 \x02\x02\xAE\x11\x03\x02\x02\x02\xAF\xB4\x05*\x16\x02\xB0\xB1\x07" +
		".\x02\x02\xB1\xB3\x05*\x16\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB6\x03\x02" +
		"\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\x13\x03\x02" +
		"\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xBF\x05\x0E\b\x02\xB8\xB9\x05\x16" +
		"\f\x02\xB9\xBA\x05\x0E\b\x02\xBA\xBF\x03\x02\x02\x02\xBB\xBC\x05\x18\r" +
		"\x02\xBC\xBD\x05\x0E\b\x02\xBD\xBF\x03\x02\x02\x02\xBE\xB7\x03\x02\x02" +
		"\x02\xBE\xB8\x03\x02\x02\x02\xBE\xBB\x03\x02\x02\x02\xBF\x15\x03\x02\x02" +
		"\x02\xC0\xC1\t\x04\x02\x02\xC1\x17\x03\x02\x02\x02\xC2\xC3\t\x05\x02\x02" +
		"\xC3\x19\x03\x02\x02\x02\xC4\xCA\x05\x14\v\x02\xC5\xC6\x05\x14\v\x02\xC6" +
		"\xC7\x07\t\x02\x02\xC7\xC8\x05<\x1F\x02\xC8\xCA\x03\x02\x02\x02\xC9\xC4" +
		"\x03\x02\x02\x02\xC9\xC5\x03\x02\x02\x02\xCA\x1B\x03\x02\x02\x02\xCB\xCC" +
		"\b\x0F\x01\x02\xCC\xCD\x05\x1A\x0E\x02\xCD\xD3\x03\x02\x02\x02\xCE\xCF" +
		"\f\x03\x02\x02\xCF\xD0\t\x06\x02\x02\xD0\xD2\x05\x1A\x0E\x02\xD1\xCE\x03" +
		"\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03" +
		"\x02\x02\x02\xD4\x1D\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD7\b" +
		"\x10\x01\x02\xD7\xD8\x05\x1C\x0F\x02\xD8\xDE\x03\x02\x02\x02\xD9\xDA\f" +
		"\x03\x02\x02\xDA\xDB\t\x07\x02\x02\xDB\xDD\x05\x1C\x0F\x02\xDC\xD9\x03" +
		"\x02\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03" +
		"\x02\x02\x02\xDF\x1F\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE2\b" +
		"\x11\x01\x02\xE2\xE3\x05\x1E\x10\x02\xE3\xE9\x03\x02\x02\x02\xE4\xE5\f" +
		"\x03\x02\x02\xE5\xE6\t\b\x02\x02\xE6\xE8\x05\x1E\x10\x02\xE7\xE4\x03\x02" +
		"\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02" +
		"\x02\x02\xEA!\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEC\xED\b\x12\x01" +
		"\x02\xED\xEE\x05 \x11\x02\xEE\xF4\x03\x02\x02\x02\xEF\xF0\f\x03\x02\x02" +
		"\xF0\xF1\t\t\x02\x02\xF1\xF3\x05 \x11\x02\xF2\xEF\x03\x02\x02\x02\xF3" +
		"\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5" +
		"#\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8\b\x13\x01\x02\xF8\xF9" +
		'\x05"\x12\x02\xF9\xFF\x03\x02\x02\x02\xFA\xFB\f\x03\x02\x02\xFB\xFC\x07' +
		'+\x02\x02\xFC\xFE\x05"\x12\x02\xFD\xFA\x03\x02\x02\x02\xFE\u0101\x03' +
		"\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100%" +
		"\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0103\b\x14\x01\x02\u0103" +
		"\u0104\x05$\x13\x02\u0104\u010A\x03\x02\x02\x02\u0105\u0106\f\x03\x02" +
		"\x02\u0106\u0107\x07,\x02\x02\u0107\u0109\x05$\x13\x02\u0108\u0105\x03" +
		"\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A" +
		"\u010B\x03\x02\x02\x02\u010B'\x03\x02\x02\x02\u010C\u010A\x03\x02\x02" +
		"\x02\u010D\u0115\x05&\x14\x02\u010E\u010F\x05&\x14\x02\u010F\u0110\x07" +
		"\x05\x02\x02\u0110\u0111\x05(\x15\x02\u0111\u0112\x07\x06\x02\x02\u0112" +
		"\u0113\x05(\x15\x02\u0113\u0115\x03\x02\x02\x02\u0114\u010D\x03\x02\x02" +
		"\x02\u0114\u010E\x03\x02\x02\x02\u0115)\x03\x02\x02\x02\u0116\u011C\x05" +
		"(\x15\x02\u0117\u0118\x05\f\x07\x02\u0118\u0119\x05,\x17\x02\u0119\u011A" +
		"\x05*\x16\x02\u011A\u011C\x03\x02\x02\x02\u011B\u0116\x03\x02\x02\x02" +
		"\u011B\u0117\x03\x02\x02\x02\u011C+\x03\x02\x02\x02\u011D\u011E\t\n\x02" +
		"\x02\u011E-\x03\x02\x02\x02\u011F\u0124\x05*\x16\x02\u0120\u0121\x07." +
		"\x02\x02\u0121\u0123\x05*\x16\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0126" +
		"\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03\x02\x02\x02" +
		"\u0125/\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127\u0128\x05(\x15" +
		"\x02\u01281\x03\x02\x02\x02\u0129\u012A\x054\x1B\x02\u012A\u012B\x05:" +
		"\x1E\x02\u012B\u012C\x05\n\x06\x02\u012C3\x03\x02\x02\x02\u012D\u012E" +
		"\t\v\x02\x02\u012E5\x03\x02\x02\x02\u012F\u0131\x058\x1D\x02\u0130\u012F" +
		"\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02" +
		"\u0132\u0133\x03\x02\x02\x02\u01337\x03\x02\x02\x02\u0134\u0135\x05<\x1F" +
		"\x02\u01359\x03\x02\x02\x02\u0136\u0137\x05> \x02\u0137\u0138\x07\x06" +
		"\x02\x02\u0138\u013B\x05<\x1F\x02\u0139\u013A\x07/\x02\x02\u013A\u013C" +
		"\x05H%\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C" +
		";\x03\x02\x02\x02\u013D\u0147\x07<\x02\x02\u013E\u013F\x07<\x02\x02\u013F" +
		"\u0140\x077\x02\x02\u0140\u0141\x07<\x02\x02\u0141\u0147\x079\x02\x02" +
		"\u0142\u0143\x07\x1C\x02\x02\u0143\u0144\x07\x1D\x02\x02\u0144\u0145\x07" +
		"<\x02\x02\u0145\u0147\x07\x1E\x02\x02\u0146\u013D\x03\x02\x02\x02\u0146" +
		"\u013E\x03\x02\x02\x02\u0146\u0142\x03\x02\x02\x02\u0147=\x03\x02\x02" +
		"\x02\u0148\u0149\x05@!\x02\u0149?\x03\x02\x02\x02\u014A\u014B\x07<\x02" +
		"\x02\u014BA\x03\x02\x02\x02\u014C\u0150\x05D#\x02\u014D\u014E\x07.\x02" +
		"\x02\u014E\u014F\x07\n\x02\x02\u014F\u0151\x07<\x02\x02\u0150\u014D\x03" +
		"\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151C\x03\x02\x02\x02\u0152" +
		"\u0157\x05F$\x02\u0153\u0154\x07.\x02\x02\u0154\u0156\x05F$\x02\u0155" +
		"\u0153\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02" +
		"\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158E\x03\x02\x02\x02\u0159\u0157" +
		"\x03\x02\x02\x02\u015A\u015B\x05> \x02\u015B\u015C\x07\x06\x02\x02\u015C" +
		"\u015D\x056\x1C\x02\u015DG\x03\x02\x02\x02\u015E\u015F\x05*\x16\x02\u015F" +
		"I\x03\x02\x02\x02\u0160\u0166\x05L'\x02\u0161\u0166\x05R*\x02\u0162\u0166" +
		"\x05T+\x02\u0163\u0166\x05X-\x02\u0164\u0166\x05`1\x02\u0165\u0160\x03" +
		"\x02\x02\x02\u0165\u0161\x03\x02\x02\x02\u0165\u0162\x03\x02\x02\x02\u0165" +
		"\u0163\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02\u0166K\x03\x02\x02" +
		"\x02\u0167\u0169\x07!\x02\x02\u0168\u016A\x05N(\x02\u0169\u0168\x03\x02" +
		"\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B" +
		'\u016C\x07"\x02\x02\u016CM\x03\x02\x02\x02\u016D\u016F\x05P)\x02\u016E' +
		"\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u016E\x03\x02" +
		"\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171O\x03\x02\x02\x02\u0172\u0175" +
		"\x05J&\x02\u0173\u0175\x052\x1A\x02\u0174\u0172\x03\x02\x02\x02\u0174" +
		"\u0173\x03\x02\x02\x02\u0175Q\x03\x02\x02\x02\u0176\u0178\x05.\x18\x02" +
		"\u0177\u0176\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03" +
		"\x02\x02\x02\u0179\u017A\x05\n\x06\x02\u017AS\x03\x02\x02\x02\u017B\u017C" +
		"\x07\x12\x02\x02\u017C\u017D\x07\x1D\x02\x02\u017D\u017E\x05.\x18\x02" +
		"\u017E\u017F\x07\x1E\x02\x02\u017F\u0182\x05J&\x02\u0180\u0181\x07\x13" +
		"\x02\x02\u0181\u0183\x05J&\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183" +
		"\x03\x02\x02\x02\u0183\u0192\x03\x02\x02\x02\u0184\u0185\x07\v\x02\x02" +
		"\u0185\u0186\x07\x1D\x02\x02\u0186\u0187\x05.\x18\x02\u0187\u0188\x07" +
		"\x1E\x02\x02\u0188\u018C\x07!\x02\x02\u0189\u018B\x05V,\x02\u018A\u0189" +
		"\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02" +
		"\u018C\u018D\x03\x02\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C\x03" +
		'\x02\x02\x02\u018F\u0190\x07"\x02\x02\u0190\u0192\x03\x02\x02\x02\u0191' +
		"\u017B\x03\x02\x02\x02\u0191\u0184\x03\x02\x02\x02\u0192U\x03\x02\x02" +
		"\x02\u0193\u0194\x07\f\x02\x02\u0194\u0195\x050\x19\x02\u0195\u0196\x07" +
		"\x06\x02\x02\u0196\u0197\x05J&\x02\u0197\u019C\x03\x02\x02\x02\u0198\u0199" +
		"\x07\r\x02\x02\u0199\u019A\x07\x06\x02\x02\u019A\u019C\x05J&\x02\u019B" +
		"\u0193\x03\x02\x02\x02\u019B\u0198\x03\x02\x02\x02\u019CW\x03\x02\x02" +
		"\x02\u019D\u019E\x07\x14\x02\x02\u019E\u019F\x07\x1D\x02\x02\u019F\u01A0" +
		"\x05Z.\x02\u01A0\u01A1\x07\x1E\x02\x02\u01A1\u01A2\x05J&\x02\u01A2\u01B2" +
		"\x03\x02\x02\x02\u01A3\u01A4\x07\x11\x02\x02\u01A4\u01A5\x07\x1D\x02\x02" +
		"\u01A5\u01A6\x05.\x18\x02\u01A6\u01A7\x07\x1E\x02\x02\u01A7\u01A8\x05" +
		"J&\x02\u01A8\u01B2\x03\x02\x02\x02\u01A9\u01AA\x07\x10\x02\x02\u01AA\u01AB" +
		"\x05J&\x02\u01AB\u01AC\x07\x11\x02\x02\u01AC\u01AD\x07\x1D\x02\x02\u01AD" +
		"\u01AE\x05.\x18\x02\u01AE\u01AF\x07\x1E\x02\x02\u01AF\u01B0\x05\n\x06" +
		"\x02\u01B0\u01B2\x03\x02\x02\x02\u01B1\u019D\x03\x02\x02\x02\u01B1\u01A3" +
		"\x03\x02\x02\x02\u01B1\u01A9\x03\x02\x02\x02\u01B2Y\x03\x02\x02\x02\u01B3" +
		"\u01B8\x05\\/\x02\u01B4\u01B6\x05.\x18\x02\u01B5\u01B4\x03\x02\x02\x02" +
		"\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x03\x02\x02\x02\u01B7\u01B3\x03" +
		"\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9" +
		"\u01BB\x05\n\x06\x02\u01BA\u01BC\x05^0\x02\u01BB\u01BA\x03\x02\x02\x02" +
		"\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BF\x05" +
		"\n\x06\x02\u01BE\u01C0\x05^0\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0" +
		"\x03\x02\x02\x02\u01C0[\x03\x02\x02\x02\u01C1\u01C2\x054\x1B\x02\u01C2" +
		"\u01C3\x05:\x1E\x02\u01C3]\x03\x02\x02\x02\u01C4\u01C9\x05*\x16\x02\u01C5" +
		"\u01C6\x07.\x02\x02\u01C6\u01C8\x05*\x16\x02\u01C7\u01C5\x03\x02\x02\x02" +
		"\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03" +
		"\x02\x02\x02\u01CA_\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC" +
		"\u01D2\t\f\x02\x02\u01CD\u01CF\x07\x17\x02\x02\u01CE\u01D0\x05.\x18\x02" +
		"\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x03" +
		"\x02\x02\x02\u01D1\u01CC\x03\x02\x02\x02\u01D1\u01CD\x03\x02\x02\x02\u01D2" +
		"\u01D3\x03\x02\x02\x02\u01D3\u01D4\x05\n\x06\x02\u01D4a\x03\x02\x02\x02" +
		"/cikou|\x90\x95\x9C\xA5\xA9\xB4\xBE\xC9\xD3\xDE\xE9\xF4\xFF\u010A\u0114" +
		"\u011B\u0124\u0132\u013B\u0146\u0150\u0157\u0165\u0169\u0170\u0174\u0177" +
		"\u0182\u018C\u0191\u019B\u01B1\u01B5\u01B7\u01BB\u01BF\u01C9\u01CF\u01D1";
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
