// Generated from Kipper.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly Struct = 23;
	public static readonly Typeof = 24;
	public static readonly LeftParen = 25;
	public static readonly RightParen = 26;
	public static readonly LeftBracket = 27;
	public static readonly RightBracket = 28;
	public static readonly LeftBrace = 29;
	public static readonly RightBrace = 30;
	public static readonly Plus = 31;
	public static readonly PlusPlus = 32;
	public static readonly Minus = 33;
	public static readonly MinusMinus = 34;
	public static readonly Star = 35;
	public static readonly Div = 36;
	public static readonly Mod = 37;
	public static readonly AndAnd = 38;
	public static readonly OrOr = 39;
	public static readonly Not = 40;
	public static readonly Comma = 41;
	public static readonly Assign = 42;
	public static readonly StarAssign = 43;
	public static readonly DivAssign = 44;
	public static readonly ModAssign = 45;
	public static readonly PlusAssign = 46;
	public static readonly MinusAssign = 47;
	public static readonly Equal = 48;
	public static readonly NotEqual = 49;
	public static readonly Less = 50;
	public static readonly LessEqual = 51;
	public static readonly Greater = 52;
	public static readonly GreaterEqual = 53;
	public static readonly Dot = 54;
	public static readonly Identifier = 55;
	public static readonly Constant = 56;
	public static readonly DigitSequence = 57;
	public static readonly StringLiteral = 58;
	public static readonly Directive = 59;
	public static readonly WS = 60;
	public static readonly Whitespace = 61;
	public static readonly BlockComment = 62;
	public static readonly Newline = 63;
	public static readonly RULE_primaryExpression = 0;
	public static readonly RULE_postfixExpression = 1;
	public static readonly RULE_argumentExpressionList = 2;
	public static readonly RULE_unaryExpression = 3;
	public static readonly RULE_unaryOperator = 4;
	public static readonly RULE_castOrConvertExpression = 5;
	public static readonly RULE_multiplicativeExpression = 6;
	public static readonly RULE_additiveExpression = 7;
	public static readonly RULE_relationalExpression = 8;
	public static readonly RULE_equalityExpression = 9;
	public static readonly RULE_logicalAndExpression = 10;
	public static readonly RULE_logicalOrExpression = 11;
	public static readonly RULE_conditionalExpression = 12;
	public static readonly RULE_assignmentExpression = 13;
	public static readonly RULE_assignmentOperator = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_constantExpression = 16;
	public static readonly RULE_declaration = 17;
	public static readonly RULE_storageTypeSpecifier = 18;
	public static readonly RULE_declarationSpecifiers = 19;
	public static readonly RULE_declarationSpecifier = 20;
	public static readonly RULE_initDeclarator = 21;
	public static readonly RULE_typeSpecifier = 22;
	public static readonly RULE_declarator = 23;
	public static readonly RULE_directDeclarator = 24;
	public static readonly RULE_nestedParenthesesBlock = 25;
	public static readonly RULE_parameterTypeList = 26;
	public static readonly RULE_parameterList = 27;
	public static readonly RULE_parameterDeclaration = 28;
	public static readonly RULE_initializer = 29;
	public static readonly RULE_initializerList = 30;
	public static readonly RULE_designation = 31;
	public static readonly RULE_designatorList = 32;
	public static readonly RULE_designator = 33;
	public static readonly RULE_statement = 34;
	public static readonly RULE_labeledStatement = 35;
	public static readonly RULE_compoundStatement = 36;
	public static readonly RULE_blockItemList = 37;
	public static readonly RULE_blockItem = 38;
	public static readonly RULE_expressionStatement = 39;
	public static readonly RULE_selectionStatement = 40;
	public static readonly RULE_iterationStatement = 41;
	public static readonly RULE_forCondition = 42;
	public static readonly RULE_forDeclaration = 43;
	public static readonly RULE_forExpression = 44;
	public static readonly RULE_jumpStatement = 45;
	public static readonly RULE_compilationUnit = 46;
	public static readonly RULE_translationUnit = 47;
	public static readonly RULE_externalItem = 48;
	public static readonly RULE_functionDefinition = 49;
	public static readonly RULE_endOfItem = 50;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"primaryExpression", "postfixExpression", "argumentExpressionList", "unaryExpression", 
		"unaryOperator", "castOrConvertExpression", "multiplicativeExpression", 
		"additiveExpression", "relationalExpression", "equalityExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "declaration", 
		"storageTypeSpecifier", "declarationSpecifiers", "declarationSpecifier", 
		"initDeclarator", "typeSpecifier", "declarator", "directDeclarator", "nestedParenthesesBlock", 
		"parameterTypeList", "parameterList", "parameterDeclaration", "initializer", 
		"initializerList", "designation", "designatorList", "designator", "statement", 
		"labeledStatement", "compoundStatement", "blockItemList", "blockItem", 
		"expressionStatement", "selectionStatement", "iterationStatement", "forCondition", 
		"forDeclaration", "forExpression", "jumpStatement", "compilationUnit", 
		"translationUnit", "externalItem", "functionDefinition", "endOfItem",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'?'", "':'", "'...'", "'->'", "';'", "'const'", "'var'", "'as'", 
		"'switch'", "'case'", "'default'", "'break'", "'continue'", "'do'", "'while'", 
		"'if'", "'else'", "'for'", "'enum'", "'def'", "'return'", "'call'", "'struct'", 
		"'typeof'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'+'", "'++'", "'-'", 
		"'--'", "'*'", "'/'", "'%'", "'&&'", "'||'", "'!'", "','", "'='", "'*='", 
		"'/='", "'%='", "'+='", "'-='", "'=='", "'!='", "'<'", "'<='", "'>'", 
		"'>='", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "Const", 
		"Var", "As", "Switch", "Case", "Default", "Break", "Continue", "Do", "While", 
		"If", "Else", "For", "Enum", "DefFunc", "Return", "CallFunc", "Struct", 
		"Typeof", "LeftParen", "RightParen", "LeftBracket", "RightBracket", "LeftBrace", 
		"RightBrace", "Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", 
		"Mod", "AndAnd", "OrOr", "Not", "Comma", "Assign", "StarAssign", "DivAssign", 
		"ModAssign", "PlusAssign", "MinusAssign", "Equal", "NotEqual", "Less", 
		"LessEqual", "Greater", "GreaterEqual", "Dot", "Identifier", "Constant", 
		"DigitSequence", "StringLiteral", "Directive", "WS", "Whitespace", "BlockComment", 
		"Newline",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KipperParser._LITERAL_NAMES, KipperParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return KipperParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Kipper.g4"; }

	// @Override
	public get ruleNames(): string[] { return KipperParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return KipperParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(KipperParser._ATN, this);
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, KipperParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.match(KipperParser.Identifier);
				}
				break;
			case KipperParser.Constant:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this.match(KipperParser.Constant);
				}
				break;
			case KipperParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 104;
					this.match(KipperParser.StringLiteral);
					}
					}
					this.state = 107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.StringLiteral);
				}
				break;
			case KipperParser.LeftParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 109;
				this.match(KipperParser.LeftParen);
				this.state = 110;
				this.expression();
				this.state = 111;
				this.match(KipperParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, KipperParser.RULE_postfixExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 176;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftParen:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 115;
				this.primaryExpression();
				this.state = 119;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 116;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 121;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (KipperParser.LeftBracket - 27)) | (1 << (KipperParser.PlusPlus - 27)) | (1 << (KipperParser.MinusMinus - 27)))) !== 0)) {
					{
					this.state = 139;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case KipperParser.LeftBracket:
						{
						this.state = 122;
						this.match(KipperParser.LeftBracket);
						this.state = 126;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 123;
								this.match(KipperParser.WS);
								}
								}
							}
							this.state = 128;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
						}
						this.state = 129;
						this.expression();
						this.state = 133;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 130;
							this.match(KipperParser.WS);
							}
							}
							this.state = 135;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 136;
						this.match(KipperParser.RightBracket);
						}
						break;
					case KipperParser.PlusPlus:
					case KipperParser.MinusMinus:
						{
						this.state = 138;
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
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case KipperParser.CallFunc:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.match(KipperParser.CallFunc);
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 145;
					this.match(KipperParser.WS);
					}
					}
					this.state = 150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 151;
				this.primaryExpression();
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 152;
					this.match(KipperParser.WS);
					}
					}
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 158;
				this.match(KipperParser.LeftParen);
				this.state = 162;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 159;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 164;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				}
				this.state = 166;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 165;
					this.argumentExpressionList();
					}
					break;
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 168;
					this.match(KipperParser.WS);
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 174;
				this.match(KipperParser.RightParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentExpressionList(): ArgumentExpressionListContext {
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KipperParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.assignmentExpression();
			this.state = 182;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 179;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 185;
				this.match(KipperParser.Comma);
				this.state = 189;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 186;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 191;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 192;
				this.assignmentExpression();
				this.state = 196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 193;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 198;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KipperParser.RULE_unaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.PlusPlus || _la === KipperParser.MinusMinus) {
				{
				{
				this.state = 204;
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
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 210;
				this.match(KipperParser.WS);
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.StringLiteral:
				{
				this.state = 216;
				this.postfixExpression();
				}
				break;
			case KipperParser.Plus:
			case KipperParser.Minus:
			case KipperParser.Star:
			case KipperParser.Not:
				{
				this.state = 217;
				this.unaryOperator();
				this.state = 221;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 218;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 223;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				}
				this.state = 224;
				this.castOrConvertExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KipperParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (KipperParser.Plus - 31)) | (1 << (KipperParser.Minus - 31)) | (1 << (KipperParser.Star - 31)) | (1 << (KipperParser.Not - 31)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castOrConvertExpression(): CastOrConvertExpressionContext {
		let _localctx: CastOrConvertExpressionContext = new CastOrConvertExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KipperParser.RULE_castOrConvertExpression);
		let _la: number;
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.match(KipperParser.DigitSequence);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 232;
				this.unaryExpression();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 233;
					this.match(KipperParser.WS);
					}
					}
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 239;
				this.match(KipperParser.As);
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 240;
					this.match(KipperParser.WS);
					}
					}
					this.state = 245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 246;
				this.typeSpecifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KipperParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.castOrConvertExpression();
			this.state = 254;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 251;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (KipperParser.Star - 35)) | (1 << (KipperParser.Div - 35)) | (1 << (KipperParser.Mod - 35)))) !== 0)) {
				{
				{
				this.state = 257;
				_la = this._input.LA(1);
				if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (KipperParser.Star - 35)) | (1 << (KipperParser.Div - 35)) | (1 << (KipperParser.Mod - 35)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 258;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 263;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 264;
				this.castOrConvertExpression();
				this.state = 268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 265;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 270;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
				}
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, KipperParser.RULE_additiveExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.multiplicativeExpression();
			this.state = 280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 277;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Plus || _la === KipperParser.Minus) {
				{
				{
				this.state = 283;
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
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 284;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
				}
				this.state = 290;
				this.multiplicativeExpression();
				this.state = 294;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 291;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				}
				}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KipperParser.RULE_relationalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.additiveExpression();
			this.state = 306;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 303;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (KipperParser.Less - 50)) | (1 << (KipperParser.LessEqual - 50)) | (1 << (KipperParser.Greater - 50)) | (1 << (KipperParser.GreaterEqual - 50)))) !== 0)) {
				{
				{
				this.state = 309;
				_la = this._input.LA(1);
				if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (KipperParser.Less - 50)) | (1 << (KipperParser.LessEqual - 50)) | (1 << (KipperParser.Greater - 50)) | (1 << (KipperParser.GreaterEqual - 50)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 310;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
				}
				this.state = 316;
				this.additiveExpression();
				this.state = 320;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 317;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 322;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
				}
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KipperParser.RULE_equalityExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.relationalExpression();
			this.state = 332;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 329;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Equal || _la === KipperParser.NotEqual) {
				{
				{
				this.state = 335;
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
				this.state = 339;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 336;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 341;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
				}
				this.state = 342;
				this.relationalExpression();
				this.state = 346;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 343;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 348;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				}
				}
				}
				this.state = 353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, KipperParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.equalityExpression();
			this.state = 358;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 355;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 360;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.AndAnd) {
				{
				{
				this.state = 361;
				this.match(KipperParser.AndAnd);
				this.state = 365;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 362;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 367;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				}
				this.state = 368;
				this.equalityExpression();
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 369;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 374;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, KipperParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.logicalAndExpression();
			this.state = 384;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 381;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.OrOr) {
				{
				{
				this.state = 387;
				this.match(KipperParser.OrOr);
				this.state = 391;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 388;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 393;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				}
				this.state = 394;
				this.logicalAndExpression();
				this.state = 398;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 395;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 400;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				}
				}
				}
				this.state = 405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, KipperParser.RULE_conditionalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.logicalOrExpression();
			this.state = 410;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 407;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.T__0) {
				{
				this.state = 413;
				this.match(KipperParser.T__0);
				this.state = 417;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 414;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 419;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				this.state = 420;
				this.expression();
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 421;
					this.match(KipperParser.WS);
					}
					}
					this.state = 426;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 427;
				this.match(KipperParser.T__1);
				this.state = 431;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 428;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 433;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				this.state = 434;
				this.conditionalExpression();
				this.state = 438;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 435;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 440;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, KipperParser.RULE_assignmentExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 443;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 444;
				this.unaryExpression();
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 445;
					this.match(KipperParser.WS);
					}
					}
					this.state = 450;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 451;
				this.assignmentOperator();
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 452;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 457;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 458;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, KipperParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			_la = this._input.LA(1);
			if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (KipperParser.Assign - 42)) | (1 << (KipperParser.StarAssign - 42)) | (1 << (KipperParser.DivAssign - 42)) | (1 << (KipperParser.ModAssign - 42)) | (1 << (KipperParser.PlusAssign - 42)) | (1 << (KipperParser.MinusAssign - 42)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, KipperParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.assignmentExpression();
			this.state = 468;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 465;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 471;
				this.match(KipperParser.Comma);
				this.state = 475;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 472;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 477;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				}
				this.state = 478;
				this.assignmentExpression();
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 479;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 484;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, KipperParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.conditionalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, KipperParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.storageTypeSpecifier();
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 493;
				this.match(KipperParser.WS);
				}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 499;
			this.initDeclarator();
			this.state = 500;
			this.endOfItem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageTypeSpecifier(): StorageTypeSpecifierContext {
		let _localctx: StorageTypeSpecifierContext = new StorageTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, KipperParser.RULE_storageTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		let _localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, KipperParser.RULE_declarationSpecifiers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 504;
				this.declarationSpecifier();
				this.state = 508;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 505;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 510;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				}
				}
				}
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KipperParser.Typeof || _la === KipperParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifier(): DeclarationSpecifierContext {
		let _localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, KipperParser.RULE_declarationSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.typeSpecifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, KipperParser.RULE_initDeclarator);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.declarator();
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 518;
				this.match(KipperParser.WS);
				}
				}
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 524;
			this.match(KipperParser.T__1);
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 525;
				this.match(KipperParser.WS);
				}
				}
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 531;
			this.typeSpecifier();
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 532;
				this.match(KipperParser.WS);
				}
				}
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Assign) {
				{
				this.state = 538;
				this.match(KipperParser.Assign);
				this.state = 542;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 539;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 544;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
				}
				this.state = 545;
				this.initializer();
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 546;
					this.match(KipperParser.WS);
					}
					}
					this.state = 551;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, KipperParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.state = 581;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				_localctx = new SingleItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 554;
				this.match(KipperParser.Identifier);
				}
				break;

			case 2:
				_localctx = new MultiItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 555;
				this.match(KipperParser.Identifier);
				this.state = 556;
				this.match(KipperParser.Less);
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 557;
					this.match(KipperParser.WS);
					}
					}
					this.state = 562;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 563;
				this.match(KipperParser.Identifier);
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 564;
					this.match(KipperParser.WS);
					}
					}
					this.state = 569;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 570;
				this.match(KipperParser.Greater);
				}
				break;

			case 3:
				_localctx = new TypeofTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 571;
				this.match(KipperParser.Typeof);
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 572;
					this.match(KipperParser.WS);
					}
					}
					this.state = 577;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 578;
				this.match(KipperParser.LeftParen);
				this.state = 579;
				this.match(KipperParser.Identifier);
				this.state = 580;
				this.match(KipperParser.RightParen);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this.directDeclarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directDeclarator(): DirectDeclaratorContext {
		let _localctx: DirectDeclaratorContext = new DirectDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(KipperParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nestedParenthesesBlock(): NestedParenthesesBlockContext {
		let _localctx: NestedParenthesesBlockContext = new NestedParenthesesBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, KipperParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 604;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case KipperParser.T__0:
					case KipperParser.T__1:
					case KipperParser.T__2:
					case KipperParser.T__3:
					case KipperParser.T__4:
					case KipperParser.Const:
					case KipperParser.Var:
					case KipperParser.As:
					case KipperParser.Switch:
					case KipperParser.Case:
					case KipperParser.Default:
					case KipperParser.Break:
					case KipperParser.Continue:
					case KipperParser.Do:
					case KipperParser.While:
					case KipperParser.If:
					case KipperParser.Else:
					case KipperParser.For:
					case KipperParser.Enum:
					case KipperParser.DefFunc:
					case KipperParser.Return:
					case KipperParser.CallFunc:
					case KipperParser.Struct:
					case KipperParser.Typeof:
					case KipperParser.LeftBracket:
					case KipperParser.RightBracket:
					case KipperParser.LeftBrace:
					case KipperParser.RightBrace:
					case KipperParser.Plus:
					case KipperParser.PlusPlus:
					case KipperParser.Minus:
					case KipperParser.MinusMinus:
					case KipperParser.Star:
					case KipperParser.Div:
					case KipperParser.Mod:
					case KipperParser.AndAnd:
					case KipperParser.OrOr:
					case KipperParser.Not:
					case KipperParser.Comma:
					case KipperParser.Assign:
					case KipperParser.StarAssign:
					case KipperParser.DivAssign:
					case KipperParser.ModAssign:
					case KipperParser.PlusAssign:
					case KipperParser.MinusAssign:
					case KipperParser.Equal:
					case KipperParser.NotEqual:
					case KipperParser.Less:
					case KipperParser.LessEqual:
					case KipperParser.Greater:
					case KipperParser.GreaterEqual:
					case KipperParser.Dot:
					case KipperParser.Identifier:
					case KipperParser.Constant:
					case KipperParser.DigitSequence:
					case KipperParser.StringLiteral:
					case KipperParser.Directive:
					case KipperParser.WS:
					case KipperParser.Whitespace:
					case KipperParser.BlockComment:
					case KipperParser.Newline:
						{
						this.state = 587;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === KipperParser.LeftParen || _la === KipperParser.RightParen)) {
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
					case KipperParser.LeftParen:
						{
						this.state = 588;
						this.match(KipperParser.LeftParen);
						this.state = 592;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 589;
								this.match(KipperParser.WS);
								}
								}
							}
							this.state = 594;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
						}
						this.state = 595;
						this.nestedParenthesesBlock();
						this.state = 599;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 596;
							this.match(KipperParser.WS);
							}
							}
							this.state = 601;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 602;
						this.match(KipperParser.RightParen);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterTypeList(): ParameterTypeListContext {
		let _localctx: ParameterTypeListContext = new ParameterTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, KipperParser.RULE_parameterTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.parameterList();
			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 610;
				this.match(KipperParser.WS);
				}
				}
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Comma) {
				{
				this.state = 616;
				this.match(KipperParser.Comma);
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 617;
					this.match(KipperParser.WS);
					}
					}
					this.state = 622;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 623;
				this.match(KipperParser.T__2);
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 624;
					this.match(KipperParser.WS);
					}
					}
					this.state = 629;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.parameterDeclaration();
			this.state = 636;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 633;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 655;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 639;
					this.match(KipperParser.Comma);
					this.state = 643;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 640;
						this.match(KipperParser.WS);
						}
						}
						this.state = 645;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 646;
					this.parameterDeclaration();
					this.state = 650;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 647;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 652;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
					}
					}
					}
				}
				this.state = 657;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, KipperParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.declarator();
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 659;
				this.match(KipperParser.WS);
				}
				}
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 665;
			this.declarationSpecifiers();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, KipperParser.RULE_initializer);
		let _la: number;
		try {
			let _alt: number;
			this.state = 694;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Star:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.DigitSequence:
			case KipperParser.StringLiteral:
			case KipperParser.WS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.assignmentExpression();
				}
				break;
			case KipperParser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 668;
				this.match(KipperParser.LeftBracket);
				this.state = 672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 669;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 674;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				this.state = 676;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 675;
					this.initializerList();
					}
					break;
				}
				this.state = 681;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 678;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 683;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				}
				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Comma) {
					{
					this.state = 684;
					this.match(KipperParser.Comma);
					}
				}

				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 687;
					this.match(KipperParser.WS);
					}
					}
					this.state = 692;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 693;
				this.match(KipperParser.RightBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerList(): InitializerListContext {
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, KipperParser.RULE_initializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				this.state = 696;
				this.designation();
				}
				break;
			}
			this.state = 702;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 699;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 704;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 705;
			this.initializer();
			this.state = 709;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 706;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 711;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			this.state = 737;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 712;
					this.match(KipperParser.Comma);
					this.state = 716;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 713;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 718;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
					}
					this.state = 720;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
					case 1:
						{
						this.state = 719;
						this.designation();
						}
						break;
					}
					this.state = 725;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 722;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 727;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
					}
					this.state = 728;
					this.initializer();
					this.state = 732;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 729;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 734;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
					}
					}
					}
				}
				this.state = 739;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designation(): DesignationContext {
		let _localctx: DesignationContext = new DesignationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, KipperParser.RULE_designation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			this.designatorList();
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 741;
				this.match(KipperParser.WS);
				}
				}
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 747;
			this.match(KipperParser.Assign);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designatorList(): DesignatorListContext {
		let _localctx: DesignatorListContext = new DesignatorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, KipperParser.RULE_designatorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 749;
				this.designator();
				}
				}
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KipperParser.LeftBracket || _la === KipperParser.Dot);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public designator(): DesignatorContext {
		let _localctx: DesignatorContext = new DesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, KipperParser.RULE_designator);
		let _la: number;
		try {
			let _alt: number;
			this.state = 778;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 754;
				this.match(KipperParser.LeftBracket);
				this.state = 758;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 755;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 760;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				}
				this.state = 761;
				this.constantExpression();
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 762;
					this.match(KipperParser.WS);
					}
					}
					this.state = 767;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 768;
				this.match(KipperParser.RightBracket);
				}
				break;
			case KipperParser.Dot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 770;
				this.match(KipperParser.Dot);
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 771;
					this.match(KipperParser.WS);
					}
					}
					this.state = 776;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 777;
				this.match(KipperParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, KipperParser.RULE_statement);
		try {
			this.state = 786;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Case:
			case KipperParser.Default:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 780;
				this.labeledStatement();
				}
				break;
			case KipperParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 781;
				this.compoundStatement();
				}
				break;
			case KipperParser.T__4:
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Star:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.DigitSequence:
			case KipperParser.StringLiteral:
			case KipperParser.WS:
			case KipperParser.Whitespace:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 782;
				this.expressionStatement();
				}
				break;
			case KipperParser.Switch:
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 783;
				this.selectionStatement();
				}
				break;
			case KipperParser.Do:
			case KipperParser.While:
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 784;
				this.iterationStatement();
				}
				break;
			case KipperParser.Break:
			case KipperParser.Continue:
			case KipperParser.Return:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 785;
				this.jumpStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, KipperParser.RULE_labeledStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 826;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Case:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 788;
				this.match(KipperParser.Case);
				this.state = 792;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 789;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 794;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
				}
				this.state = 795;
				this.constantExpression();
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 796;
					this.match(KipperParser.WS);
					}
					}
					this.state = 801;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 802;
				this.match(KipperParser.T__1);
				this.state = 806;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 803;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 808;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
				}
				this.state = 809;
				this.statement();
				}
				break;
			case KipperParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 811;
				this.match(KipperParser.Default);
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 812;
					this.match(KipperParser.WS);
					}
					}
					this.state = 817;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 818;
				this.match(KipperParser.T__1);
				this.state = 822;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 819;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 824;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
				}
				this.state = 825;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.match(KipperParser.LeftBrace);
			this.state = 832;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 829;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 834;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 836;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 835;
				this.blockItemList();
				}
				break;
			}
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 838;
				this.match(KipperParser.WS);
				}
				}
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 844;
			this.match(KipperParser.RightBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItemList(): BlockItemListContext {
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, KipperParser.RULE_blockItemList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 846;
					this.blockItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 849;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let _localctx: BlockItemContext = new BlockItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, KipperParser.RULE_blockItem);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 851;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 856;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 118, this._ctx);
			}
			this.state = 859;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.T__4:
			case KipperParser.Switch:
			case KipperParser.Case:
			case KipperParser.Default:
			case KipperParser.Break:
			case KipperParser.Continue:
			case KipperParser.Do:
			case KipperParser.While:
			case KipperParser.If:
			case KipperParser.For:
			case KipperParser.Return:
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.LeftBrace:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Star:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.DigitSequence:
			case KipperParser.StringLiteral:
			case KipperParser.WS:
			case KipperParser.Whitespace:
				{
				this.state = 857;
				this.statement();
				}
				break;
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 858;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 864;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 861;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 866;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, KipperParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
				{
				this.state = 867;
				this.expression();
				}
			}

			this.state = 870;
			this.endOfItem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionStatement(): SelectionStatementContext {
		let _localctx: SelectionStatementContext = new SelectionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, KipperParser.RULE_selectionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 947;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 872;
				this.match(KipperParser.If);
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 873;
					this.match(KipperParser.WS);
					}
					}
					this.state = 878;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 879;
				this.match(KipperParser.LeftParen);
				this.state = 883;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 880;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 885;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
				}
				this.state = 886;
				this.expression();
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 887;
					this.match(KipperParser.WS);
					}
					}
					this.state = 892;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 893;
				this.match(KipperParser.RightParen);
				this.state = 897;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 894;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 899;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				}
				this.state = 900;
				this.statement();
				this.state = 904;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 901;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 906;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				}
				this.state = 915;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 907;
					this.match(KipperParser.Else);
					this.state = 911;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 908;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 913;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
					}
					this.state = 914;
					this.statement();
					}
					break;
				}
				}
				break;
			case KipperParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this.match(KipperParser.Switch);
				this.state = 921;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 918;
					this.match(KipperParser.WS);
					}
					}
					this.state = 923;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 924;
				this.match(KipperParser.LeftParen);
				this.state = 928;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 925;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 930;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
				}
				this.state = 931;
				this.expression();
				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 932;
					this.match(KipperParser.WS);
					}
					}
					this.state = 937;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 938;
				this.match(KipperParser.RightParen);
				this.state = 942;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 939;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 944;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
				}
				this.state = 945;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, KipperParser.RULE_iterationStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1035;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 949;
				this.match(KipperParser.For);
				this.state = 953;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 950;
					this.match(KipperParser.WS);
					}
					}
					this.state = 955;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 956;
				this.match(KipperParser.LeftParen);
				this.state = 957;
				this.forCondition();
				this.state = 958;
				this.match(KipperParser.RightParen);
				this.state = 962;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
				}
				this.state = 965;
				this.statement();
				}
				break;
			case KipperParser.While:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 967;
				this.match(KipperParser.While);
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
				this.match(KipperParser.LeftParen);
				this.state = 978;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
				}
				this.state = 981;
				this.expression();
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 982;
					this.match(KipperParser.WS);
					}
					}
					this.state = 987;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 988;
				this.match(KipperParser.RightParen);
				this.state = 992;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 989;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 994;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
				}
				this.state = 995;
				this.statement();
				}
				break;
			case KipperParser.Do:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 997;
				this.match(KipperParser.Do);
				this.state = 1001;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 998;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1003;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				}
				this.state = 1004;
				this.statement();
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1005;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1011;
				this.match(KipperParser.While);
				this.state = 1015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1012;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1017;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1018;
				this.match(KipperParser.LeftParen);
				this.state = 1022;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1019;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1024;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
				}
				this.state = 1025;
				this.expression();
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1026;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1031;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1032;
				this.match(KipperParser.RightParen);
				this.state = 1033;
				this.endOfItem();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forCondition(): ForConditionContext {
		let _localctx: ForConditionContext = new ForConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, KipperParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1041;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 1037;
				this.forDeclaration();
				}
				break;
			case KipperParser.T__4:
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Star:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.DigitSequence:
			case KipperParser.StringLiteral:
			case KipperParser.WS:
			case KipperParser.Whitespace:
				{
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
					{
					this.state = 1038;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1043;
			this.endOfItem();
			this.state = 1045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
				{
				this.state = 1044;
				this.forExpression();
				}
			}

			this.state = 1047;
			this.endOfItem();
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
				{
				this.state = 1048;
				this.forExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forDeclaration(): ForDeclarationContext {
		let _localctx: ForDeclarationContext = new ForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, KipperParser.RULE_forDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this.storageTypeSpecifier();
			this.state = 1055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1052;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1058;
			this.initDeclarator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, KipperParser.RULE_forExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1060;
			this.assignmentExpression();
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
			this.state = 1083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 1067;
				this.match(KipperParser.Comma);
				this.state = 1071;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1068;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1073;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
				}
				this.state = 1074;
				this.assignmentExpression();
				this.state = 1078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1075;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1080;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1097;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Break:
			case KipperParser.Continue:
				{
				this.state = 1086;
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
				this.state = 1087;
				this.match(KipperParser.Return);
				this.state = 1091;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1088;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1093;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
				}
				this.state = 1095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
					{
					this.state = 1094;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1099;
			this.endOfItem();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, KipperParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__4) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Case) | (1 << KipperParser.Default) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.For) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0)) {
				{
				this.state = 1101;
				this.translationUnit();
				}
			}

			this.state = 1104;
			this.match(KipperParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public translationUnit(): TranslationUnitContext {
		let _localctx: TranslationUnitContext = new TranslationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, KipperParser.RULE_translationUnit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1113;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
				case 1:
					{
					this.state = 1106;
					this.externalItem();
					}
					break;

				case 2:
					{
					this.state = 1107;
					this.endOfItem();
					}
					break;

				case 3:
					{
					this.state = 1109;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 1108;
							this.match(KipperParser.WS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1111;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				this.state = 1115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__4) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Case) | (1 << KipperParser.Default) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.For) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externalItem(): ExternalItemContext {
		let _localctx: ExternalItemContext = new ExternalItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, KipperParser.RULE_externalItem);
		try {
			this.state = 1120;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				_localctx = new ExternalFunctionDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1117;
				this.functionDefinition();
				}
				break;

			case 2:
				_localctx = new ExternalDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1118;
				this.declaration();
				}
				break;

			case 3:
				_localctx = new ExternalBlockItemContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1119;
				this.blockItem();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, KipperParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1122;
			this.match(KipperParser.DefFunc);
			this.state = 1126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1123;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1129;
			this.declarator();
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1130;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1136;
			this.match(KipperParser.LeftParen);
			this.state = 1138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Identifier) {
				{
				this.state = 1137;
				this.parameterTypeList();
				}
			}

			this.state = 1140;
			this.match(KipperParser.RightParen);
			this.state = 1144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1141;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1147;
			this.match(KipperParser.T__3);
			this.state = 1151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1148;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1154;
			this.typeSpecifier();
			this.state = 1158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1155;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1161;
			this.compoundStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endOfItem(): EndOfItemContext {
		let _localctx: EndOfItemContext = new EndOfItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, KipperParser.RULE_endOfItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Whitespace) {
				{
				{
				this.state = 1163;
				this.match(KipperParser.Whitespace);
				}
				}
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1169;
			this.match(KipperParser.T__4);
			this.state = 1173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1170;
					this.match(KipperParser.Whitespace);
					}
					}
				}
				this.state = 1175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u049B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x03\x02\x03\x02\x03\x02\x06\x02l\n\x02\r\x02\x0E\x02m\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x05\x02t\n\x02\x03\x03\x03\x03\x07\x03x\n\x03\f\x03" +
		"\x0E\x03{\v\x03\x03\x03\x03\x03\x07\x03\x7F\n\x03\f\x03\x0E\x03\x82\v" +
		"\x03\x03\x03\x03\x03\x07\x03\x86\n\x03\f\x03\x0E\x03\x89\v\x03\x03\x03" +
		"\x03\x03\x03\x03\x07\x03\x8E\n\x03\f\x03\x0E\x03\x91\v\x03\x03\x03\x03" +
		"\x03\x07\x03\x95\n\x03\f\x03\x0E\x03\x98\v\x03\x03\x03\x03\x03\x07\x03" +
		"\x9C\n\x03\f\x03\x0E\x03\x9F\v\x03\x03\x03\x03\x03\x07\x03\xA3\n\x03\f" +
		"\x03\x0E\x03\xA6\v\x03\x03\x03\x05\x03\xA9\n\x03\x03\x03\x07\x03\xAC\n" +
		"\x03\f\x03\x0E\x03\xAF\v\x03\x03\x03\x03\x03\x05\x03\xB3\n\x03\x03\x04" +
		"\x03\x04\x07\x04\xB7\n\x04\f\x04\x0E\x04\xBA\v\x04\x03\x04\x03\x04\x07" +
		"\x04\xBE\n\x04\f\x04\x0E\x04\xC1\v\x04\x03\x04\x03\x04\x07\x04\xC5\n\x04" +
		"\f\x04\x0E\x04\xC8\v\x04\x07\x04\xCA\n\x04\f\x04\x0E\x04\xCD\v\x04\x03" +
		"\x05\x07\x05\xD0\n\x05\f\x05\x0E\x05\xD3\v\x05\x03\x05\x07\x05\xD6\n\x05" +
		"\f\x05\x0E\x05\xD9\v\x05\x03\x05\x03\x05\x03\x05\x07\x05\xDE\n\x05\f\x05" +
		"\x0E\x05\xE1\v\x05\x03\x05\x03\x05\x05\x05\xE5\n\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x07\x07\xED\n\x07\f\x07\x0E\x07\xF0\v\x07" +
		"\x03\x07\x03\x07\x07\x07\xF4\n\x07\f\x07\x0E\x07\xF7\v\x07\x03\x07\x03" +
		"\x07\x05\x07\xFB\n\x07\x03\b\x03\b\x07\b\xFF\n\b\f\b\x0E\b\u0102\v\b\x03" +
		"\b\x03\b\x07\b\u0106\n\b\f\b\x0E\b\u0109\v\b\x03\b\x03\b\x07\b\u010D\n" +
		"\b\f\b\x0E\b\u0110\v\b\x07\b\u0112\n\b\f\b\x0E\b\u0115\v\b\x03\t\x03\t" +
		"\x07\t\u0119\n\t\f\t\x0E\t\u011C\v\t\x03\t\x03\t\x07\t\u0120\n\t\f\t\x0E" +
		"\t\u0123\v\t\x03\t\x03\t\x07\t\u0127\n\t\f\t\x0E\t\u012A\v\t\x07\t\u012C" +
		"\n\t\f\t\x0E\t\u012F\v\t\x03\n\x03\n\x07\n\u0133\n\n\f\n\x0E\n\u0136\v" +
		"\n\x03\n\x03\n\x07\n\u013A\n\n\f\n\x0E\n\u013D\v\n\x03\n\x03\n\x07\n\u0141" +
		"\n\n\f\n\x0E\n\u0144\v\n\x07\n\u0146\n\n\f\n\x0E\n\u0149\v\n\x03\v\x03" +
		"\v\x07\v\u014D\n\v\f\v\x0E\v\u0150\v\v\x03\v\x03\v\x07\v\u0154\n\v\f\v" +
		"\x0E\v\u0157\v\v\x03\v\x03\v\x07\v\u015B\n\v\f\v\x0E\v\u015E\v\v\x07\v" +
		"\u0160\n\v\f\v\x0E\v\u0163\v\v\x03\f\x03\f\x07\f\u0167\n\f\f\f\x0E\f\u016A" +
		"\v\f\x03\f\x03\f\x07\f\u016E\n\f\f\f\x0E\f\u0171\v\f\x03\f\x03\f\x07\f" +
		"\u0175\n\f\f\f\x0E\f\u0178\v\f\x07\f\u017A\n\f\f\f\x0E\f\u017D\v\f\x03" +
		"\r\x03\r\x07\r\u0181\n\r\f\r\x0E\r\u0184\v\r\x03\r\x03\r\x07\r\u0188\n" +
		"\r\f\r\x0E\r\u018B\v\r\x03\r\x03\r\x07\r\u018F\n\r\f\r\x0E\r\u0192\v\r" +
		"\x07\r\u0194\n\r\f\r\x0E\r\u0197\v\r\x03\x0E\x03\x0E\x07\x0E\u019B\n\x0E" +
		"\f\x0E\x0E\x0E\u019E\v\x0E\x03\x0E\x03\x0E\x07\x0E\u01A2\n\x0E\f\x0E\x0E" +
		"\x0E\u01A5\v\x0E\x03\x0E\x03\x0E\x07\x0E\u01A9\n\x0E\f\x0E\x0E\x0E\u01AC" +
		"\v\x0E\x03\x0E\x03\x0E\x07\x0E\u01B0\n\x0E\f\x0E\x0E\x0E\u01B3\v\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u01B7\n\x0E\f\x0E\x0E\x0E\u01BA\v\x0E\x05\x0E\u01BC" +
		"\n\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01C1\n\x0F\f\x0F\x0E\x0F\u01C4" +
		"\v\x0F\x03\x0F\x03\x0F\x07\x0F\u01C8\n\x0F\f\x0F\x0E\x0F\u01CB\v\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\u01CF\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x07\x11" +
		"\u01D5\n\x11\f\x11\x0E\x11\u01D8\v\x11\x03\x11\x03\x11\x07\x11\u01DC\n" +
		"\x11\f\x11\x0E\x11\u01DF\v\x11\x03\x11\x03\x11\x07\x11\u01E3\n\x11\f\x11" +
		"\x0E\x11\u01E6\v\x11\x07\x11\u01E8\n\x11\f\x11\x0E\x11\u01EB\v\x11\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x07\x13\u01F1\n\x13\f\x13\x0E\x13\u01F4\v" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u01FD" +
		"\n\x15\f\x15\x0E\x15\u0200\v\x15\x06\x15\u0202\n\x15\r\x15\x0E\x15\u0203" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x07\x17\u020A\n\x17\f\x17\x0E\x17\u020D" +
		"\v\x17\x03\x17\x03\x17\x07\x17\u0211\n\x17\f\x17\x0E\x17\u0214\v\x17\x03" +
		"\x17\x03\x17\x07\x17\u0218\n\x17\f\x17\x0E\x17\u021B\v\x17\x03\x17\x03" +
		"\x17\x07\x17\u021F\n\x17\f\x17\x0E\x17\u0222\v\x17\x03\x17\x03\x17\x07" +
		"\x17\u0226\n\x17\f\x17\x0E\x17\u0229\v\x17\x05\x17\u022B\n\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\u0231\n\x18\f\x18\x0E\x18\u0234\v\x18" +
		"\x03\x18\x03\x18\x07\x18\u0238\n\x18\f\x18\x0E\x18\u023B\v\x18\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\u0240\n\x18\f\x18\x0E\x18\u0243\v\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u0248\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x07\x1B\u0251\n\x1B\f\x1B\x0E\x1B\u0254\v\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u0258\n\x1B\f\x1B\x0E\x1B\u025B\v\x1B\x03\x1B\x03" +
		"\x1B\x07\x1B\u025F\n\x1B\f\x1B\x0E\x1B\u0262\v\x1B\x03\x1C\x03\x1C\x07" +
		"\x1C\u0266\n\x1C\f\x1C\x0E\x1C\u0269\v\x1C\x03\x1C\x03\x1C\x07\x1C\u026D" +
		"\n\x1C\f\x1C\x0E\x1C\u0270\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0274\n\x1C\f" +
		"\x1C\x0E\x1C\u0277\v\x1C\x05\x1C\u0279\n\x1C\x03\x1D\x03\x1D\x07\x1D\u027D" +
		"\n\x1D\f\x1D\x0E\x1D\u0280\v\x1D\x03\x1D\x03\x1D\x07\x1D\u0284\n\x1D\f" +
		"\x1D\x0E\x1D\u0287\v\x1D\x03\x1D\x03\x1D\x07\x1D\u028B\n\x1D\f\x1D\x0E" +
		"\x1D\u028E\v\x1D\x07\x1D\u0290\n\x1D\f\x1D\x0E\x1D\u0293\v\x1D\x03\x1E" +
		"\x03\x1E\x07\x1E\u0297\n\x1E\f\x1E\x0E\x1E\u029A\v\x1E\x03\x1E\x03\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u02A1\n\x1F\f\x1F\x0E\x1F\u02A4\v\x1F" +
		"\x03\x1F\x05\x1F\u02A7\n\x1F\x03\x1F\x07\x1F\u02AA\n\x1F\f\x1F\x0E\x1F" +
		"\u02AD\v\x1F\x03\x1F\x05\x1F\u02B0\n\x1F\x03\x1F\x07\x1F\u02B3\n\x1F\f" +
		"\x1F\x0E\x1F\u02B6\v\x1F\x03\x1F\x05\x1F\u02B9\n\x1F\x03 \x05 \u02BC\n" +
		" \x03 \x07 \u02BF\n \f \x0E \u02C2\v \x03 \x03 \x07 \u02C6\n \f \x0E " +
		"\u02C9\v \x03 \x03 \x07 \u02CD\n \f \x0E \u02D0\v \x03 \x05 \u02D3\n " +
		"\x03 \x07 \u02D6\n \f \x0E \u02D9\v \x03 \x03 \x07 \u02DD\n \f \x0E \u02E0" +
		"\v \x07 \u02E2\n \f \x0E \u02E5\v \x03!\x03!\x07!\u02E9\n!\f!\x0E!\u02EC" +
		"\v!\x03!\x03!\x03\"\x06\"\u02F1\n\"\r\"\x0E\"\u02F2\x03#\x03#\x07#\u02F7" +
		"\n#\f#\x0E#\u02FA\v#\x03#\x03#\x07#\u02FE\n#\f#\x0E#\u0301\v#\x03#\x03" +
		"#\x03#\x03#\x07#\u0307\n#\f#\x0E#\u030A\v#\x03#\x05#\u030D\n#\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x05$\u0315\n$\x03%\x03%\x07%\u0319\n%\f%\x0E%\u031C" +
		"\v%\x03%\x03%\x07%\u0320\n%\f%\x0E%\u0323\v%\x03%\x03%\x07%\u0327\n%\f" +
		"%\x0E%\u032A\v%\x03%\x03%\x03%\x03%\x07%\u0330\n%\f%\x0E%\u0333\v%\x03" +
		"%\x03%\x07%\u0337\n%\f%\x0E%\u033A\v%\x03%\x05%\u033D\n%\x03&\x03&\x07" +
		"&\u0341\n&\f&\x0E&\u0344\v&\x03&\x05&\u0347\n&\x03&\x07&\u034A\n&\f&\x0E" +
		"&\u034D\v&\x03&\x03&\x03\'\x06\'\u0352\n\'\r\'\x0E\'\u0353\x03(\x07(\u0357" +
		"\n(\f(\x0E(\u035A\v(\x03(\x03(\x05(\u035E\n(\x03(\x07(\u0361\n(\f(\x0E" +
		"(\u0364\v(\x03)\x05)\u0367\n)\x03)\x03)\x03*\x03*\x07*\u036D\n*\f*\x0E" +
		"*\u0370\v*\x03*\x03*\x07*\u0374\n*\f*\x0E*\u0377\v*\x03*\x03*\x07*\u037B" +
		"\n*\f*\x0E*\u037E\v*\x03*\x03*\x07*\u0382\n*\f*\x0E*\u0385\v*\x03*\x03" +
		"*\x07*\u0389\n*\f*\x0E*\u038C\v*\x03*\x03*\x07*\u0390\n*\f*\x0E*\u0393" +
		"\v*\x03*\x05*\u0396\n*\x03*\x03*\x07*\u039A\n*\f*\x0E*\u039D\v*\x03*\x03" +
		"*\x07*\u03A1\n*\f*\x0E*\u03A4\v*\x03*\x03*\x07*\u03A8\n*\f*\x0E*\u03AB" +
		"\v*\x03*\x03*\x07*\u03AF\n*\f*\x0E*\u03B2\v*\x03*\x03*\x05*\u03B6\n*\x03" +
		"+\x03+\x07+\u03BA\n+\f+\x0E+\u03BD\v+\x03+\x03+\x03+\x03+\x07+\u03C3\n" +
		"+\f+\x0E+\u03C6\v+\x03+\x03+\x03+\x03+\x07+\u03CC\n+\f+\x0E+\u03CF\v+" +
		"\x03+\x03+\x07+\u03D3\n+\f+\x0E+\u03D6\v+\x03+\x03+\x07+\u03DA\n+\f+\x0E" +
		"+\u03DD\v+\x03+\x03+\x07+\u03E1\n+\f+\x0E+\u03E4\v+\x03+\x03+\x03+\x03" +
		"+\x07+\u03EA\n+\f+\x0E+\u03ED\v+\x03+\x03+\x07+\u03F1\n+\f+\x0E+\u03F4" +
		"\v+\x03+\x03+\x07+\u03F8\n+\f+\x0E+\u03FB\v+\x03+\x03+\x07+\u03FF\n+\f" +
		"+\x0E+\u0402\v+\x03+\x03+\x07+\u0406\n+\f+\x0E+\u0409\v+\x03+\x03+\x03" +
		"+\x05+\u040E\n+\x03,\x03,\x05,\u0412\n,\x05,\u0414\n,\x03,\x03,\x05,\u0418" +
		"\n,\x03,\x03,\x05,\u041C\n,\x03-\x03-\x07-\u0420\n-\f-\x0E-\u0423\v-\x03" +
		"-\x03-\x03.\x03.\x07.\u0429\n.\f.\x0E.\u042C\v.\x03.\x03.\x07.\u0430\n" +
		".\f.\x0E.\u0433\v.\x03.\x03.\x07.\u0437\n.\f.\x0E.\u043A\v.\x07.\u043C" +
		"\n.\f.\x0E.\u043F\v.\x03/\x03/\x03/\x07/\u0444\n/\f/\x0E/\u0447\v/\x03" +
		"/\x05/\u044A\n/\x05/\u044C\n/\x03/\x03/\x030\x050\u0451\n0\x030\x030\x03" +
		"1\x031\x031\x061\u0458\n1\r1\x0E1\u0459\x061\u045C\n1\r1\x0E1\u045D\x03" +
		"2\x032\x032\x052\u0463\n2\x033\x033\x073\u0467\n3\f3\x0E3\u046A\v3\x03" +
		"3\x033\x073\u046E\n3\f3\x0E3\u0471\v3\x033\x033\x053\u0475\n3\x033\x03" +
		"3\x073\u0479\n3\f3\x0E3\u047C\v3\x033\x033\x073\u0480\n3\f3\x0E3\u0483" +
		"\v3\x033\x033\x073\u0487\n3\f3\x0E3\u048A\v3\x033\x033\x034\x074\u048F" +
		"\n4\f4\x0E4\u0492\v4\x034\x034\x074\u0496\n4\f4\x0E4\u0499\v4\x034\x02" +
		"\x02\x025\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02\x02\f\x04\x02\"\"$$\x06\x02!!##%%**\x03\x02" +
		"%\'\x04\x02!!##\x03\x0247\x03\x0223\x03\x02,1\x03\x02\b\t\x03\x02\x1B" +
		"\x1C\x03\x02\x0E\x0F\x02\u051D\x02s\x03\x02\x02\x02\x04\xB2\x03\x02\x02" +
		"\x02\x06\xB4\x03\x02\x02\x02\b\xD1\x03\x02\x02\x02\n\xE6\x03\x02\x02\x02" +
		"\f\xFA\x03\x02\x02\x02\x0E\xFC\x03\x02\x02\x02\x10\u0116\x03\x02\x02\x02" +
		"\x12\u0130\x03\x02\x02\x02\x14\u014A\x03\x02\x02\x02\x16\u0164\x03\x02" +
		"\x02\x02\x18\u017E\x03\x02\x02\x02\x1A\u0198\x03\x02\x02\x02\x1C\u01CE" +
		"\x03\x02\x02\x02\x1E\u01D0\x03\x02\x02\x02 \u01D2\x03\x02\x02\x02\"\u01EC" +
		"\x03\x02\x02\x02$\u01EE\x03\x02\x02\x02&\u01F8\x03\x02\x02\x02(\u0201" +
		"\x03\x02\x02\x02*\u0205\x03\x02\x02\x02,\u0207\x03\x02\x02\x02.\u0247" +
		"\x03\x02\x02\x020\u0249\x03\x02\x02\x022\u024B\x03\x02\x02\x024\u0260" +
		"\x03\x02\x02\x026\u0263\x03\x02\x02\x028\u027A\x03\x02\x02\x02:\u0294" +
		"\x03\x02\x02\x02<\u02B8\x03\x02\x02\x02>\u02BB\x03\x02\x02\x02@\u02E6" +
		"\x03\x02\x02\x02B\u02F0\x03\x02\x02\x02D\u030C\x03\x02\x02\x02F\u0314" +
		"\x03\x02\x02\x02H\u033C\x03\x02\x02\x02J\u033E\x03\x02\x02\x02L\u0351" +
		"\x03\x02\x02\x02N\u0358\x03\x02\x02\x02P\u0366\x03\x02\x02\x02R\u03B5" +
		"\x03\x02\x02\x02T\u040D\x03\x02\x02\x02V\u0413\x03\x02\x02\x02X\u041D" +
		"\x03\x02\x02\x02Z\u0426\x03\x02\x02\x02\\\u044B\x03\x02\x02\x02^\u0450" +
		"\x03\x02\x02\x02`\u045B\x03\x02\x02\x02b\u0462\x03\x02\x02\x02d\u0464" +
		"\x03\x02\x02\x02f\u0490\x03\x02\x02\x02ht\x079\x02\x02it\x07:\x02\x02" +
		"jl\x07<\x02\x02kj\x03\x02\x02\x02lm\x03\x02\x02\x02mk\x03\x02\x02\x02" +
		"mn\x03\x02\x02\x02nt\x03\x02\x02\x02op\x07\x1B\x02\x02pq\x05 \x11\x02" +
		"qr\x07\x1C\x02\x02rt\x03\x02\x02\x02sh\x03\x02\x02\x02si\x03\x02\x02\x02" +
		"sk\x03\x02\x02\x02so\x03\x02\x02\x02t\x03\x03\x02\x02\x02uy\x05\x02\x02" +
		"\x02vx\x07>\x02\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02" +
		"\x02yz\x03\x02\x02\x02z\x8F\x03\x02\x02\x02{y\x03\x02\x02\x02|\x80\x07" +
		"\x1D\x02\x02}\x7F\x07>\x02\x02~}\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02" +
		"\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83\x03\x02\x02\x02" +
		"\x82\x80\x03\x02\x02\x02\x83\x87\x05 \x11\x02\x84\x86\x07>\x02\x02\x85" +
		"\x84\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87" +
		"\x88\x03\x02\x02\x02\x88\x8A\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A" +
		"\x8B\x07\x1E\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8E\t\x02\x02\x02\x8D" +
		"|\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F" +
		"\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\xB3\x03\x02\x02\x02\x91" +
		"\x8F\x03\x02\x02\x02\x92\x96\x07\x18\x02\x02\x93\x95\x07>\x02\x02\x94" +
		"\x93\x03\x02\x02\x02\x95\x98\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96" +
		"\x97\x03\x02\x02\x02\x97\x99\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x99" +
		"\x9D\x05\x02\x02\x02\x9A\x9C\x07>\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C" +
		"\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E" +
		"\xA0\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA4\x07\x1B\x02\x02\xA1" +
		"\xA3\x07>\x02\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4" +
		"\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6" +
		"\xA4\x03\x02\x02\x02\xA7\xA9\x05\x06\x04\x02\xA8\xA7\x03\x02\x02\x02\xA8" +
		"\xA9\x03\x02\x02\x02\xA9\xAD\x03\x02\x02\x02\xAA\xAC\x07>\x02\x02\xAB" +
		"\xAA\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD" +
		"\xAE\x03\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0" +
		"\xB1\x07\x1C\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2u\x03\x02\x02\x02\xB2" +
		"\x92\x03\x02\x02\x02\xB3\x05\x03\x02\x02\x02\xB4\xB8\x05\x1C\x0F\x02\xB5" +
		"\xB7\x07>\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8" +
		"\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xCB\x03\x02\x02\x02\xBA" +
		"\xB8\x03\x02\x02\x02\xBB\xBF\x07+\x02\x02\xBC\xBE\x07>\x02\x02\xBD\xBC" +
		"\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0" +
		"\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC6" +
		"\x05\x1C\x0F\x02\xC3\xC5\x07>\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8" +
		"\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xCA" +
		"\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xBB\x03\x02\x02\x02\xCA\xCD" +
		"\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\x07" +
		"\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD0\t\x02\x02\x02\xCF\xCE" +
		"\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2" +
		"\x03\x02\x02\x02\xD2\xD7\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD6" +
		"\x07>\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5" +
		"\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xE4\x03\x02\x02\x02\xD9\xD7" +
		"\x03\x02\x02\x02\xDA\xE5\x05\x04\x03\x02\xDB\xDF\x05\n\x06\x02\xDC\xDE" +
		"\x07>\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD" +
		"\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDF" +
		"\x03\x02\x02\x02\xE2\xE3\x05\f\x07\x02\xE3\xE5\x03\x02\x02\x02\xE4\xDA" +
		"\x03\x02\x02\x02\xE4\xDB\x03\x02\x02\x02\xE5\t\x03\x02\x02\x02\xE6\xE7" +
		"\t\x03\x02\x02\xE7\v\x03\x02\x02\x02\xE8\xFB\x05\b\x05\x02\xE9\xFB\x07" +
		";\x02\x02\xEA\xEE\x05\b\x05\x02\xEB\xED\x07>\x02\x02\xEC\xEB\x03\x02\x02" +
		"\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02" +
		"\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF5\x07\n\x02" +
		"\x02\xF2\xF4\x07>\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4\xF7\x03\x02\x02" +
		"\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x03\x02\x02" +
		"\x02\xF7\xF5\x03\x02\x02\x02\xF8\xF9\x05.\x18\x02\xF9\xFB\x03\x02\x02" +
		"\x02\xFA\xE8\x03\x02\x02\x02\xFA\xE9\x03\x02\x02\x02\xFA\xEA\x03\x02\x02" +
		"\x02\xFB\r\x03\x02\x02\x02\xFC\u0100\x05\f\x07\x02\xFD\xFF\x07>\x02\x02" +
		"\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02" +
		"\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0113\x03\x02\x02\x02\u0102\u0100" +
		"\x03\x02\x02\x02\u0103\u0107\t\x04\x02\x02\u0104\u0106\x07>\x02\x02\u0105" +
		"\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02" +
		"\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010A\x03\x02\x02\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u010A\u010E\x05\f\x07\x02\u010B\u010D\x07>\x02" +
		"\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C" +
		"\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02" +
		"\u0110\u010E\x03\x02\x02\x02\u0111\u0103\x03\x02\x02\x02\u0112\u0115\x03" +
		"\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114" +
		"\x0F\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0116\u011A\x05\x0E\b" +
		"\x02\u0117\u0119\x07>\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119\u011C" +
		"\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02" +
		"\u011B\u012D\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0121\t" +
		"\x05\x02\x02\u011E\u0120\x07>\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
		"\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
		"\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124" +
		"\u0128\x05\x0E\b\x02\u0125\u0127\x07>\x02\x02\u0126\u0125\x03\x02\x02" +
		"\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129" +
		"\x03\x02\x02\x02\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02" +
		"\u012B\u011D\x03\x02\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012B\x03" +
		"\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\x11\x03\x02\x02\x02\u012F" +
		"\u012D\x03\x02\x02\x02\u0130\u0134\x05\x10\t\x02\u0131\u0133\x07>\x02" +
		"\x02\u0132\u0131\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132" +
		"\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0147\x03\x02\x02\x02" +
		"\u0136\u0134\x03\x02\x02\x02\u0137\u013B\t\x06\x02\x02\u0138\u013A\x07" +
		">\x02\x02\u0139\u0138\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B" +
		"\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02" +
		"\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u0142\x05\x10\t\x02\u013F\u0141" +
		"\x07>\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02" +
		"\u0142\u0140\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0146\x03" +
		"\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0137\x03\x02\x02\x02\u0146" +
		"\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\x13\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014E" +
		"\x05\x12\n\x02\u014B\u014D\x07>\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D" +
		"\u0150\x03\x02\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02" +
		"\x02\x02\u014F\u0161\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0155\t\x07\x02\x02\u0152\u0154\x07>\x02\x02\u0153\u0152\x03\x02\x02" +
		"\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156" +
		"\x03\x02\x02\x02\u0156\u0158\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02" +
		"\u0158\u015C\x05\x12\n\x02\u0159\u015B\x07>\x02\x02\u015A\u0159\x03\x02" +
		"\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C" +
		"\u015D\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02" +
		"\x02\x02\u015F\u0151\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161" +
		"\u015F\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02\u0162\x15\x03\x02\x02" +
		"\x02\u0163\u0161\x03\x02\x02\x02\u0164\u0168\x05\x14\v\x02\u0165\u0167" +
		"\x07>\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02" +
		"\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u017B\x03" +
		"\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016F\x07(\x02\x02\u016C" +
		"\u016E\x07>\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E\u0171\x03\x02\x02" +
		"\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0172" +
		"\x03\x02\x02\x02\u0171\u016F\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0172\u0176\x05\x14\v\x02\u0173\u0175\x07>\x02\x02\u0174\u0173\x03" +
		"\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176" +
		"\u0177\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03\x02" +
		"\x02\x02\u0179\u016B\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B" +
		"\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\x17\x03\x02\x02" +
		"\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0182\x05\x16\f\x02\u017F\u0181" +
		"\x07>\x02\x02\u0180\u017F\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02" +
		"\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0195\x03" +
		"\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0189\x07)\x02\x02\u0186" +
		"\u0188\x07>\x02\x02\u0187\u0186\x03\x02\x02\x02\u0188\u018B\x03\x02\x02" +
		"\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C" +
		"\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C\u0190\x05\x16\f\x02" +
		"\u018D\u018F\x07>\x02\x02\u018E\u018D\x03\x02\x02\x02\u018F\u0192\x03" +
		"\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191" +
		"\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0185\x03\x02" +
		"\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195" +
		"\u0196\x03\x02\x02\x02\u0196\x19\x03\x02\x02\x02\u0197\u0195\x03\x02\x02" +
		"\x02\u0198\u019C\x05\x18\r\x02\u0199\u019B\x07>\x02\x02\u019A\u0199\x03" +
		"\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C" +
		"\u019D\x03\x02\x02\x02\u019D\u01BB\x03\x02\x02\x02\u019E\u019C\x03\x02" +
		"\x02\x02\u019F\u01A3\x07\x03\x02\x02\u01A0\u01A2\x07>\x02\x02\u01A1\u01A0" +
		"\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02" +
		"\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5\u01A3\x03" +
		"\x02\x02\x02\u01A6\u01AA\x05 \x11\x02\u01A7\u01A9\x07>\x02\x02\u01A8\u01A7" +
		"\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02" +
		"\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01AD\x03\x02\x02\x02\u01AC\u01AA\x03" +
		"\x02\x02\x02\u01AD\u01B1\x07\x04\x02\x02\u01AE\u01B0\x07>\x02\x02\u01AF" +
		"\u01AE\x03\x02\x02\x02\u01B0\u01B3\x03\x02\x02\x02\u01B1\u01AF\x03\x02" +
		"\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B4\x03\x02\x02\x02\u01B3" +
		"\u01B1\x03\x02\x02\x02\u01B4\u01B8\x05\x1A\x0E\x02\u01B5\u01B7\x07>\x02" +
		"\x02\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8\u01B6" +
		"\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02\x02" +
		"\u01BA\u01B8\x03\x02\x02\x02\u01BB\u019F\x03\x02\x02\x02\u01BB\u01BC\x03" +
		"\x02\x02\x02\u01BC\x1B\x03\x02\x02\x02\u01BD\u01CF\x05\x1A\x0E\x02\u01BE" +
		"\u01C2\x05\b\x05\x02\u01BF\u01C1\x07>\x02\x02\u01C0\u01BF\x03\x02\x02" +
		"\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3" +
		"\x03\x02\x02\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02" +
		"\u01C5\u01C9\x05\x1E\x10\x02\u01C6\u01C8\x07>\x02\x02\u01C7\u01C6\x03" +
		"\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9" +
		"\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03\x02\x02\x02\u01CB\u01C9\x03\x02" +
		"\x02\x02\u01CC\u01CD\x05\x1C\x0F\x02\u01CD\u01CF\x03\x02\x02\x02\u01CE" +
		"\u01BD\x03\x02\x02\x02\u01CE\u01BE\x03\x02\x02\x02\u01CF\x1D\x03\x02\x02" +
		"\x02\u01D0\u01D1\t\b\x02\x02\u01D1\x1F\x03\x02\x02\x02\u01D2\u01D6\x05" +
		"\x1C\x0F\x02\u01D3\u01D5\x07>\x02\x02\u01D4\u01D3\x03\x02\x02\x02\u01D5" +
		"\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02" +
		"\x02\x02\u01D7\u01E9\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9" +
		"\u01DD\x07+\x02\x02\u01DA\u01DC\x07>\x02\x02\u01DB\u01DA\x03\x02\x02\x02" +
		"\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03" +
		"\x02\x02\x02\u01DE\u01E0\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0" +
		"\u01E4\x05\x1C\x0F\x02\u01E1\u01E3\x07>\x02\x02\u01E2\u01E1\x03\x02\x02" +
		"\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5" +
		"\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02" +
		"\u01E7\u01D9\x03\x02\x02\x02\u01E8\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03" +
		"\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA!\x03\x02\x02\x02\u01EB" +
		"\u01E9\x03\x02\x02\x02\u01EC\u01ED\x05\x1A\x0E\x02\u01ED#\x03\x02\x02" +
		"\x02\u01EE\u01F2\x05&\x14\x02\u01EF\u01F1\x07>\x02\x02\u01F0\u01EF\x03" +
		"\x02\x02\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2" +
		"\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4\u01F2\x03\x02" +
		"\x02\x02\u01F5\u01F6\x05,\x17\x02\u01F6\u01F7\x05f4\x02\u01F7%\x03\x02" +
		"\x02\x02\u01F8\u01F9\t\t\x02\x02\u01F9\'\x03\x02\x02\x02\u01FA\u01FE\x05" +
		"*\x16\x02\u01FB\u01FD\x07>\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD\u0200" +
		"\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02" +
		"\u01FF\u0202\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0201\u01FA\x03" +
		"\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203" +
		"\u0204\x03\x02\x02\x02\u0204)\x03\x02\x02\x02\u0205\u0206\x05.\x18\x02" +
		"\u0206+\x03\x02\x02\x02\u0207\u020B\x050\x19\x02\u0208\u020A\x07>\x02" +
		"\x02\u0209\u0208\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209" +
		"\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020E\x03\x02\x02\x02" +
		"\u020D\u020B\x03\x02\x02\x02\u020E\u0212\x07\x04\x02\x02\u020F\u0211\x07" +
		">\x02\x02\u0210\u020F\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212" +
		"\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0215\x03\x02" +
		"\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0219\x05.\x18\x02\u0216\u0218" +
		"\x07>\x02\x02\u0217\u0216\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02" +
		"\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u022A\x03" +
		"\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u0220\x07,\x02\x02\u021D" +
		"\u021F\x07>\x02\x02\u021E\u021D\x03\x02\x02\x02\u021F\u0222\x03\x02\x02" +
		"\x02\u0220\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0223" +
		"\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0227\x05<\x1F\x02" +
		"\u0224\u0226\x07>\x02\x02\u0225\u0224\x03\x02\x02\x02\u0226\u0229\x03" +
		"\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228" +
		"\u022B\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u022A\u021C\x03\x02" +
		"\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B-\x03\x02\x02\x02\u022C\u0248" +
		"\x079\x02\x02\u022D\u022E\x079\x02\x02\u022E\u0232\x074\x02\x02\u022F" +
		"\u0231\x07>\x02\x02\u0230\u022F\x03\x02\x02\x02\u0231\u0234\x03\x02\x02" +
		"\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u0235" +
		"\x03\x02\x02\x02\u0234\u0232\x03\x02\x02\x02\u0235\u0239\x079\x02\x02" +
		"\u0236\u0238\x07>\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238\u023B\x03" +
		"\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A" +
		"\u023C\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023C\u0248\x076\x02" +
		"\x02\u023D\u0241\x07\x1A\x02\x02\u023E\u0240\x07>\x02\x02\u023F\u023E" +
		"\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02" +
		"\u0241\u0242\x03\x02\x02\x02\u0242\u0244\x03\x02\x02\x02\u0243\u0241\x03" +
		"\x02\x02\x02\u0244\u0245\x07\x1B\x02\x02\u0245\u0246\x079\x02\x02\u0246" +
		"\u0248\x07\x1C\x02\x02\u0247\u022C\x03\x02\x02\x02\u0247\u022D\x03\x02" +
		"\x02\x02\u0247\u023D\x03\x02\x02\x02\u0248/\x03\x02\x02\x02\u0249\u024A" +
		"\x052\x1A\x02\u024A1\x03\x02\x02\x02\u024B\u024C\x079\x02\x02\u024C3\x03" +
		"\x02\x02\x02\u024D\u025F\n\n\x02\x02\u024E\u0252\x07\x1B\x02\x02\u024F" +
		"\u0251\x07>\x02\x02\u0250\u024F\x03\x02\x02\x02\u0251\u0254\x03\x02\x02" +
		"\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0255" +
		"\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255\u0259\x054\x1B\x02" +
		"\u0256\u0258\x07>\x02\x02\u0257\u0256\x03\x02\x02\x02\u0258\u025B\x03" +
		"\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A" +
		"\u025C\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025D\x07\x1C" +
		"\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E\u024D\x03\x02\x02\x02\u025E" +
		"\u024E\x03\x02\x02\x02\u025F\u0262\x03\x02\x02\x02\u0260\u025E\x03\x02" +
		"\x02\x02\u0260\u0261\x03\x02\x02\x02\u02615\x03\x02\x02\x02\u0262\u0260" +
		"\x03\x02\x02\x02\u0263\u0267\x058\x1D\x02\u0264\u0266\x07>\x02\x02\u0265" +
		"\u0264\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02\u0267\u0265\x03\x02" +
		"\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0278\x03\x02\x02\x02\u0269" +
		"\u0267\x03\x02\x02\x02\u026A\u026E\x07+\x02\x02\u026B\u026D\x07>\x02\x02" +
		"\u026C\u026B\x03\x02\x02\x02\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03" +
		"\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0271\x03\x02\x02\x02\u0270" +
		"\u026E\x03\x02\x02\x02\u0271\u0275\x07\x05\x02\x02\u0272\u0274\x07>\x02" +
		"\x02\u0273\u0272\x03\x02\x02\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273" +
		"\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02" +
		"\u0277\u0275\x03\x02\x02\x02\u0278\u026A\x03\x02\x02\x02\u0278\u0279\x03" +
		"\x02\x02\x02\u02797\x03\x02\x02\x02\u027A\u027E\x05:\x1E\x02\u027B\u027D" +
		"\x07>\x02\x02\u027C\u027B\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02" +
		"\u027E\u027C\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0291\x03" +
		"\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0281\u0285\x07+\x02\x02\u0282" +
		"\u0284\x07>\x02\x02\u0283\u0282\x03\x02\x02\x02\u0284\u0287\x03\x02\x02" +
		"\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0288" +
		"\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0288\u028C\x05:\x1E\x02" +
		"\u0289\u028B\x07>\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03" +
		"\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D" +
		"\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0281\x03\x02" +
		"\x02\x02\u0290\u0293\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291" +
		"\u0292\x03\x02\x02\x02\u02929\x03\x02\x02\x02\u0293\u0291\x03\x02\x02" +
		"\x02\u0294\u0298\x050\x19\x02\u0295\u0297\x07>\x02\x02\u0296\u0295\x03" +
		"\x02\x02\x02\u0297\u029A\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0298" +
		"\u0299\x03\x02\x02\x02\u0299\u029B\x03\x02\x02\x02\u029A\u0298\x03\x02" +
		"\x02\x02\u029B\u029C\x05(\x15\x02\u029C;\x03\x02\x02\x02\u029D\u02B9\x05" +
		"\x1C\x0F\x02\u029E\u02A2\x07\x1D\x02\x02\u029F\u02A1\x07>\x02\x02\u02A0" +
		"\u029F\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02" +
		"\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A6\x03\x02\x02\x02\u02A4" +
		"\u02A2\x03\x02\x02\x02\u02A5\u02A7\x05> \x02\u02A6\u02A5\x03\x02\x02\x02" +
		"\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02AB\x03\x02\x02\x02\u02A8\u02AA\x07" +
		">\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB" +
		"\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AF\x03\x02" +
		"\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AE\u02B0\x07+\x02\x02\u02AF\u02AE" +
		"\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B4\x03\x02\x02\x02" +
		"\u02B1\u02B3\x07>\x02\x02\u02B2\u02B1\x03\x02\x02\x02\u02B3\u02B6\x03" +
		"\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
		"\u02B7\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02B9\x07\x1E" +
		"\x02\x02\u02B8\u029D\x03\x02\x02\x02\u02B8\u029E\x03\x02\x02\x02\u02B9" +
		"=\x03\x02\x02\x02\u02BA\u02BC\x05@!\x02\u02BB\u02BA\x03\x02\x02\x02\u02BB" +
		"\u02BC\x03\x02\x02\x02\u02BC\u02C0\x03\x02\x02\x02\u02BD\u02BF\x07>\x02" +
		"\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02BE" +
		"\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C3\x03\x02\x02\x02" +
		"\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02C7\x05<\x1F\x02\u02C4\u02C6\x07" +
		">\x02\x02\u02C5\u02C4\x03\x02\x02\x02\u02C6\u02C9\x03\x02\x02\x02\u02C7" +
		"\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02E3\x03\x02" +
		"\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA\u02CE\x07+\x02\x02\u02CB\u02CD" +
		"\x07>\x02\x02\u02CC\u02CB\x03\x02\x02\x02\u02CD\u02D0\x03\x02\x02\x02" +
		"\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D2\x03" +
		"\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1\u02D3\x05@!\x02\u02D2\u02D1" +
		"\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D7\x03\x02\x02\x02" +
		"\u02D4\u02D6\x07>\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D6\u02D9\x03" +
		"\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8" +
		"\u02DA\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02DE\x05<\x1F" +
		"\x02\u02DB\u02DD\x07>\x02\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD\u02E0" +
		"\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02" +
		"\u02DF\u02E2\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02CA\x03" +
		"\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3" +
		"\u02E4\x03\x02\x02\x02\u02E4?\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02" +
		"\x02\u02E6\u02EA\x05B\"\x02\u02E7\u02E9\x07>\x02\x02\u02E8\u02E7\x03\x02" +
		"\x02\x02\u02E9\u02EC\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA" +
		"\u02EB\x03\x02\x02\x02\u02EB\u02ED\x03\x02\x02\x02\u02EC\u02EA\x03\x02" +
		"\x02\x02\u02ED\u02EE\x07,\x02\x02\u02EEA\x03\x02\x02\x02\u02EF\u02F1\x05" +
		"D#\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F0" +
		"\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3C\x03\x02\x02\x02\u02F4" +
		"\u02F8\x07\x1D\x02\x02\u02F5\u02F7\x07>\x02\x02\u02F6\u02F5\x03\x02\x02" +
		"\x02\u02F7\u02FA\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F8\u02F9" +
		"\x03\x02\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02" +
		"\u02FB\u02FF\x05\"\x12\x02\u02FC\u02FE\x07>\x02\x02\u02FD\u02FC\x03\x02" +
		"\x02\x02\u02FE\u0301\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF" +
		"\u0300\x03\x02\x02\x02\u0300\u0302\x03\x02\x02\x02\u0301\u02FF\x03\x02" +
		"\x02\x02\u0302\u0303\x07\x1E\x02\x02\u0303\u030D\x03\x02\x02\x02\u0304" +
		"\u0308\x078\x02\x02\u0305\u0307\x07>\x02\x02\u0306\u0305\x03\x02\x02\x02" +
		"\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03" +
		"\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B" +
		"\u030D\x079\x02\x02\u030C\u02F4\x03\x02\x02\x02\u030C\u0304\x03\x02\x02" +
		"\x02\u030DE\x03\x02\x02\x02\u030E\u0315\x05H%\x02\u030F\u0315\x05J&\x02" +
		"\u0310\u0315\x05P)\x02\u0311\u0315\x05R*\x02\u0312\u0315\x05T+\x02\u0313" +
		"\u0315\x05\\/\x02\u0314\u030E\x03\x02\x02\x02\u0314\u030F\x03\x02\x02" +
		"\x02\u0314\u0310\x03\x02\x02\x02\u0314\u0311\x03\x02\x02\x02\u0314\u0312" +
		"\x03\x02\x02\x02\u0314\u0313\x03\x02\x02\x02\u0315G\x03\x02\x02\x02\u0316" +
		"\u031A\x07\f\x02\x02\u0317\u0319\x07>\x02\x02\u0318\u0317\x03\x02\x02" +
		"\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02\x02\x02\u031A\u031B" +
		"\x03\x02\x02\x02\u031B\u031D\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02" +
		"\u031D\u0321\x05\"\x12\x02\u031E\u0320\x07>\x02\x02\u031F\u031E\x03\x02" +
		"\x02\x02\u0320\u0323\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0321" +
		"\u0322\x03\x02\x02\x02\u0322\u0324\x03\x02\x02\x02\u0323\u0321\x03\x02" +
		"\x02\x02\u0324\u0328\x07\x04\x02\x02\u0325\u0327\x07>\x02\x02\u0326\u0325" +
		"\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02" +
		"\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x03\x02\x02\x02\u032A\u0328\x03" +
		"\x02\x02\x02\u032B\u032C\x05F$\x02\u032C\u033D\x03\x02\x02\x02\u032D\u0331" +
		"\x07\r\x02\x02\u032E\u0330\x07>\x02\x02\u032F\u032E\x03\x02\x02\x02\u0330" +
		"\u0333\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02" +
		"\x02\x02\u0332\u0334\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334" +
		"\u0338\x07\x04\x02\x02\u0335\u0337\x07>\x02\x02\u0336\u0335\x03\x02\x02" +
		"\x02\u0337\u033A\x03\x02\x02\x02\u0338\u0336\x03\x02\x02\x02\u0338\u0339" +
		"\x03\x02\x02\x02\u0339\u033B\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02" +
		"\u033B\u033D\x05F$\x02\u033C\u0316\x03\x02\x02\x02\u033C\u032D\x03\x02" +
		"\x02\x02\u033DI\x03\x02\x02\x02\u033E\u0342\x07\x1F\x02\x02\u033F\u0341" +
		"\x07>\x02\x02\u0340\u033F\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02" +
		"\u0342\u0340\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0346\x03" +
		"\x02\x02\x02\u0344\u0342\x03\x02\x02\x02\u0345\u0347\x05L\'\x02\u0346" +
		"\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u034B\x03\x02" +
		"\x02\x02\u0348\u034A\x07>\x02\x02\u0349\u0348\x03\x02\x02\x02\u034A\u034D" +
		"\x03\x02\x02\x02\u034B\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02" +
		"\u034C\u034E\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034E\u034F\x07" +
		" \x02\x02\u034FK\x03\x02\x02\x02\u0350\u0352\x05N(\x02\u0351\u0350\x03" +
		"\x02\x02\x02\u0352\u0353\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353" +
		"\u0354\x03\x02\x02\x02\u0354M\x03\x02\x02\x02\u0355\u0357\x07>\x02\x02" +
		"\u0356\u0355\x03\x02\x02\x02\u0357\u035A\x03\x02\x02\x02\u0358\u0356\x03" +
		"\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035D\x03\x02\x02\x02\u035A" +
		"\u0358\x03\x02\x02\x02\u035B\u035E\x05F$\x02\u035C\u035E\x05$\x13\x02" +
		"\u035D\u035B\x03\x02\x02\x02\u035D\u035C\x03\x02\x02\x02\u035E\u0362\x03" +
		"\x02\x02\x02\u035F\u0361\x07>\x02\x02\u0360\u035F\x03\x02\x02\x02\u0361" +
		"\u0364\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0362\u0363\x03\x02" +
		"\x02\x02\u0363O\x03\x02\x02\x02\u0364\u0362\x03\x02\x02\x02\u0365\u0367" +
		"\x05 \x11\x02\u0366\u0365\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02" +
		"\u0367\u0368\x03\x02\x02\x02\u0368\u0369\x05f4\x02\u0369Q\x03\x02\x02" +
		"\x02\u036A\u036E\x07\x12\x02\x02\u036B\u036D\x07>\x02\x02\u036C\u036B" +
		"\x03\x02\x02\x02\u036D\u0370\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02" +
		"\u036E\u036F\x03\x02\x02\x02\u036F\u0371\x03\x02\x02\x02\u0370\u036E\x03" +
		"\x02\x02\x02\u0371\u0375\x07\x1B\x02\x02\u0372\u0374\x07>\x02\x02\u0373" +
		"\u0372\x03\x02\x02\x02\u0374\u0377\x03\x02\x02\x02\u0375\u0373\x03\x02" +
		"\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0378\x03\x02\x02\x02\u0377" +
		"\u0375\x03\x02\x02\x02\u0378\u037C\x05 \x11\x02\u0379\u037B\x07>\x02\x02" +
		"\u037A\u0379\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037A\x03" +
		"\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D\u037F\x03\x02\x02\x02\u037E" +
		"\u037C\x03\x02\x02\x02\u037F\u0383\x07\x1C\x02\x02\u0380\u0382\x07>\x02" +
		"\x02\u0381\u0380\x03\x02\x02\x02\u0382\u0385\x03\x02\x02\x02\u0383\u0381" +
		"\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0386\x03\x02\x02\x02" +
		"\u0385\u0383\x03\x02\x02\x02\u0386\u038A\x05F$\x02\u0387\u0389\x07>\x02" +
		"\x02\u0388\u0387\x03\x02\x02\x02\u0389\u038C\x03\x02\x02\x02\u038A\u0388" +
		"\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u0395\x03\x02\x02\x02" +
		"\u038C\u038A\x03\x02\x02\x02\u038D\u0391\x07\x13\x02\x02\u038E\u0390\x07" +
		">\x02\x02\u038F\u038E\x03\x02\x02\x02\u0390\u0393\x03\x02\x02\x02\u0391" +
		"\u038F\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0394\x03\x02" +
		"\x02\x02\u0393\u0391\x03\x02\x02\x02\u0394\u0396\x05F$\x02\u0395\u038D" +
		"\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u03B6\x03\x02\x02\x02" +
		"\u0397\u039B\x07\v\x02\x02\u0398\u039A\x07>\x02\x02\u0399\u0398\x03\x02" +
		"\x02\x02\u039A\u039D\x03\x02\x02\x02\u039B\u0399\x03\x02\x02\x02\u039B" +
		"\u039C\x03\x02\x02\x02\u039C\u039E\x03\x02\x02\x02\u039D\u039B\x03\x02" +
		"\x02\x02\u039E\u03A2\x07\x1B\x02\x02\u039F\u03A1\x07>\x02\x02\u03A0\u039F" +
		"\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02" +
		"\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A5\x03\x02\x02\x02\u03A4\u03A2\x03" +
		"\x02\x02\x02\u03A5\u03A9\x05 \x11\x02\u03A6\u03A8\x07>\x02\x02\u03A7\u03A6" +
		"\x03\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02" +
		"\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB\u03A9\x03" +
		"\x02\x02\x02\u03AC\u03B0\x07\x1C\x02\x02\u03AD\u03AF\x07>\x02\x02\u03AE" +
		"\u03AD\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0\u03AE\x03\x02" +
		"\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B3\x03\x02\x02\x02\u03B2" +
		"\u03B0\x03\x02\x02\x02\u03B3\u03B4\x05F$\x02\u03B4\u03B6\x03\x02\x02\x02" +
		"\u03B5\u036A\x03\x02\x02\x02\u03B5\u0397\x03\x02\x02\x02\u03B6S\x03\x02" +
		"\x02\x02\u03B7\u03BB\x07\x14\x02\x02\u03B8\u03BA\x07>\x02\x02\u03B9\u03B8" +
		"\x03\x02\x02\x02\u03BA\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02" +
		"\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x03\x02\x02\x02\u03BD\u03BB\x03" +
		"\x02\x02\x02\u03BE\u03BF\x07\x1B\x02\x02\u03BF\u03C0\x05V,\x02\u03C0\u03C4" +
		"\x07\x1C\x02\x02\u03C1\u03C3\x07>\x02\x02\u03C2\u03C1\x03\x02\x02\x02" +
		"\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03" +
		"\x02\x02\x02\u03C5\u03C7\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C7" +
		"\u03C8\x05F$\x02\u03C8\u040E\x03\x02\x02\x02\u03C9\u03CD\x07\x11\x02\x02" +
		"\u03CA\u03CC\x07>\x02\x02\u03CB\u03CA\x03\x02\x02\x02\u03CC\u03CF\x03" +
		"\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE" +
		"\u03D0\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03D0\u03D4\x07\x1B" +
		"\x02\x02\u03D1\u03D3\x07>\x02\x02\u03D2\u03D1\x03\x02\x02\x02\u03D3\u03D6" +
		"\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02" +
		"\u03D5\u03D7\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03DB\x05" +
		" \x11\x02\u03D8\u03DA\x07>\x02\x02\u03D9\u03D8\x03\x02\x02\x02\u03DA\u03DD" +
		"\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02" +
		"\u03DC\u03DE\x03\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02\u03DE\u03E2\x07" +
		"\x1C\x02\x02\u03DF\u03E1\x07>\x02\x02\u03E0\u03DF\x03\x02\x02\x02\u03E1" +
		"\u03E4\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E3\x03\x02" +
		"\x02\x02\u03E3\u03E5\x03\x02\x02\x02\u03E4\u03E2\x03\x02\x02\x02\u03E5" +
		"\u03E6\x05F$\x02\u03E6\u040E\x03\x02\x02\x02\u03E7\u03EB\x07\x10\x02\x02" +
		"\u03E8\u03EA\x07>\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA\u03ED\x03" +
		"\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EB\u03EC\x03\x02\x02\x02\u03EC" +
		"\u03EE\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03F2\x05F$\x02" +
		"\u03EF\u03F1\x07>\x02\x02\u03F0\u03EF\x03\x02\x02\x02\u03F1\u03F4\x03" +
		"\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3" +
		"\u03F5\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5\u03F9\x07\x11" +
		"\x02\x02\u03F6\u03F8\x07>\x02\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8\u03FB" +
		"\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02" +
		"\u03FA\u03FC\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FC\u0400\x07" +
		"\x1B\x02\x02\u03FD\u03FF\x07>\x02\x02\u03FE\u03FD\x03\x02\x02\x02\u03FF" +
		"\u0402\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0400\u0401\x03\x02" +
		"\x02\x02\u0401\u0403\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0403" +
		"\u0407\x05 \x11\x02\u0404\u0406\x07>\x02\x02\u0405\u0404\x03\x02\x02\x02" +
		"\u0406\u0409\x03\x02\x02\x02\u0407\u0405\x03\x02\x02\x02\u0407\u0408\x03" +
		"\x02\x02\x02\u0408\u040A\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u040A" +
		"\u040B\x07\x1C\x02\x02\u040B\u040C\x05f4\x02\u040C\u040E\x03\x02\x02\x02" +
		"\u040D\u03B7\x03\x02\x02\x02\u040D\u03C9\x03\x02\x02\x02\u040D\u03E7\x03" +
		"\x02\x02\x02\u040EU\x03\x02\x02\x02\u040F\u0414\x05X-\x02\u0410\u0412" +
		"\x05 \x11\x02\u0411\u0410\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02" +
		"\u0412\u0414\x03\x02\x02\x02\u0413\u040F\x03\x02\x02\x02\u0413\u0411\x03" +
		"\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0417\x05f4\x02\u0416\u0418" +
		"\x05Z.\x02\u0417\u0416\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418" +
		"\u0419\x03\x02\x02\x02\u0419\u041B\x05f4\x02\u041A\u041C\x05Z.\x02\u041B" +
		"\u041A\x03\x02\x02\x02\u041B\u041C\x03\x02\x02\x02\u041CW\x03\x02\x02" +
		"\x02\u041D\u0421\x05&\x14\x02\u041E\u0420\x07>\x02\x02\u041F\u041E\x03" +
		"\x02\x02\x02\u0420\u0423\x03\x02\x02\x02\u0421\u041F\x03\x02\x02\x02\u0421" +
		"\u0422\x03\x02\x02\x02\u0422\u0424\x03\x02\x02\x02\u0423\u0421\x03\x02" +
		"\x02\x02\u0424\u0425\x05,\x17\x02\u0425Y\x03\x02\x02\x02\u0426\u042A\x05" +
		"\x1C\x0F\x02\u0427\u0429\x07>\x02\x02\u0428\u0427\x03\x02\x02\x02\u0429" +
		"\u042C\x03\x02\x02\x02\u042A\u0428\x03\x02\x02\x02\u042A\u042B\x03\x02" +
		"\x02\x02\u042B\u043D\x03\x02\x02\x02\u042C\u042A\x03\x02\x02\x02\u042D" +
		"\u0431\x07+\x02\x02\u042E\u0430\x07>\x02\x02\u042F\u042E\x03\x02\x02\x02" +
		"\u0430\u0433\x03\x02\x02\x02\u0431\u042F\x03\x02\x02\x02\u0431\u0432\x03" +
		"\x02\x02\x02\u0432\u0434\x03\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0434" +
		"\u0438\x05\x1C\x0F\x02\u0435\u0437\x07>\x02\x02\u0436\u0435\x03\x02\x02" +
		"\x02\u0437\u043A\x03\x02\x02\x02\u0438\u0436\x03\x02\x02\x02\u0438\u0439" +
		"\x03\x02\x02\x02\u0439\u043C\x03\x02\x02\x02\u043A\u0438\x03\x02\x02\x02" +
		"\u043B\u042D\x03\x02\x02\x02\u043C\u043F\x03\x02\x02\x02\u043D";
	private static readonly _serializedATNSegment2: string =
		"\u043B\x03\x02\x02\x02\u043D\u043E\x03\x02\x02\x02\u043E[\x03\x02\x02" +
		"\x02\u043F\u043D\x03\x02\x02\x02\u0440\u044C\t\v\x02\x02\u0441\u0445\x07" +
		"\x17\x02\x02\u0442\u0444\x07>\x02\x02\u0443\u0442\x03\x02\x02\x02\u0444" +
		"\u0447\x03\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0445\u0446\x03\x02" +
		"\x02\x02\u0446\u0449\x03\x02\x02\x02\u0447\u0445\x03\x02\x02\x02\u0448" +
		"\u044A\x05 \x11\x02\u0449\u0448\x03\x02\x02\x02\u0449\u044A\x03\x02\x02" +
		"\x02\u044A\u044C\x03\x02\x02\x02\u044B\u0440\x03\x02\x02\x02\u044B\u0441" +
		"\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u044E\x05f4\x02\u044E" +
		"]\x03\x02\x02\x02\u044F\u0451\x05`1\x02\u0450\u044F\x03\x02\x02\x02\u0450" +
		"\u0451\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452\u0453\x07\x02" +
		"\x02\x03\u0453_\x03\x02\x02\x02\u0454\u045C\x05b2\x02\u0455\u045C\x05" +
		"f4\x02\u0456\u0458\x07>\x02\x02\u0457\u0456\x03\x02\x02\x02\u0458\u0459" +
		"\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02" +
		"\u045A\u045C\x03\x02\x02\x02\u045B\u0454\x03\x02\x02\x02\u045B\u0455\x03" +
		"\x02\x02\x02\u045B\u0457\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D" +
		"\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045Ea\x03\x02\x02" +
		"\x02\u045F\u0463\x05d3\x02\u0460\u0463\x05$\x13\x02\u0461\u0463\x05N(" +
		"\x02\u0462\u045F\x03\x02\x02\x02\u0462\u0460\x03\x02\x02\x02\u0462\u0461" +
		"\x03\x02\x02\x02\u0463c\x03\x02\x02\x02\u0464\u0468\x07\x16\x02\x02\u0465" +
		"\u0467\x07>\x02\x02\u0466\u0465\x03\x02\x02\x02\u0467\u046A\x03\x02\x02" +
		"\x02\u0468\u0466\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\u046B" +
		"\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046B\u046F\x050\x19\x02" +
		"\u046C\u046E\x07>\x02\x02\u046D\u046C\x03\x02\x02\x02\u046E\u0471\x03" +
		"\x02\x02\x02\u046F\u046D\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470" +
		"\u0472\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0472\u0474\x07\x1B" +
		"\x02\x02\u0473\u0475\x056\x1C\x02\u0474\u0473\x03\x02\x02\x02\u0474\u0475" +
		"\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u047A\x07\x1C\x02\x02" +
		"\u0477\u0479\x07>\x02\x02\u0478\u0477\x03\x02\x02\x02\u0479\u047C\x03" +
		"\x02\x02\x02\u047A\u0478\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B" +
		"\u047D\x03\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047D\u0481\x07\x06" +
		"\x02\x02\u047E\u0480\x07>\x02\x02\u047F\u047E\x03\x02\x02\x02\u0480\u0483" +
		"\x03\x02\x02\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02" +
		"\u0482\u0484\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0484\u0488\x05" +
		".\x18\x02\u0485\u0487\x07>\x02\x02\u0486\u0485\x03\x02\x02\x02\u0487\u048A" +
		"\x03\x02\x02\x02\u0488\u0486\x03\x02\x02\x02\u0488\u0489\x03\x02\x02\x02" +
		"\u0489\u048B\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048B\u048C\x05" +
		"J&\x02\u048Ce\x03\x02\x02\x02\u048D\u048F\x07?\x02\x02\u048E\u048D\x03" +
		"\x02\x02\x02\u048F\u0492\x03\x02\x02\x02\u0490\u048E\x03\x02\x02\x02\u0490" +
		"\u0491\x03\x02\x02\x02\u0491\u0493\x03\x02\x02\x02\u0492\u0490\x03\x02" +
		"\x02\x02\u0493\u0497\x07\x07\x02\x02\u0494\u0496\x07?\x02\x02\u0495\u0494" +
		"\x03\x02\x02\x02\u0496\u0499\x03\x02\x02\x02\u0497\u0495\x03\x02\x02\x02" +
		"\u0497\u0498\x03\x02\x02\x02\u0498g\x03\x02\x02\x02\u0499\u0497\x03\x02" +
		"\x02\x02\xADmsy\x80\x87\x8D\x8F\x96\x9D\xA4\xA8\xAD\xB2\xB8\xBF\xC6\xCB" +
		"\xD1\xD7\xDF\xE4\xEE\xF5\xFA\u0100\u0107\u010E\u0113\u011A\u0121\u0128" +
		"\u012D\u0134\u013B\u0142\u0147\u014E\u0155\u015C\u0161\u0168\u016F\u0176" +
		"\u017B\u0182\u0189\u0190\u0195\u019C\u01A3\u01AA\u01B1\u01B8\u01BB\u01C2" +
		"\u01C9\u01CE\u01D6\u01DD\u01E4\u01E9\u01F2\u01FE\u0203\u020B\u0212\u0219" +
		"\u0220\u0227\u022A\u0232\u0239\u0241\u0247\u0252\u0259\u025E\u0260\u0267" +
		"\u026E\u0275\u0278\u027E\u0285\u028C\u0291\u0298\u02A2\u02A6\u02AB\u02AF" +
		"\u02B4\u02B8\u02BB\u02C0\u02C7\u02CE\u02D2\u02D7\u02DE\u02E3\u02EA\u02F2" +
		"\u02F8\u02FF\u0308\u030C\u0314\u031A\u0321\u0328\u0331\u0338\u033C\u0342" +
		"\u0346\u034B\u0353\u0358\u035D\u0362\u0366\u036E\u0375\u037C\u0383\u038A" +
		"\u0391\u0395\u039B\u03A2\u03A9\u03B0\u03B5\u03BB\u03C4\u03CD\u03D4\u03DB" +
		"\u03E2\u03EB\u03F2\u03F9\u0400\u0407\u040D\u0411\u0413\u0417\u041B\u0421" +
		"\u042A\u0431\u0438\u043D\u0445\u0449\u044B\u0450\u0459\u045B\u045D\u0462" +
		"\u0468\u046F\u0474\u047A\u0481\u0488\u0490\u0497";
	public static readonly _serializedATN: string = Utils.join(
		[
			KipperParser._serializedATNSegment0,
			KipperParser._serializedATNSegment1,
			KipperParser._serializedATNSegment2,
		],
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

export class PrimaryExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Identifier, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Constant, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.StringLiteral);
		} else {
			return this.getToken(KipperParser.StringLiteral, i);
		}
	}
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(KipperParser.LeftParen, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(KipperParser.RightParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
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
	public LeftBracket(): TerminalNode[];
	public LeftBracket(i: number): TerminalNode;
	public LeftBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.LeftBracket);
		} else {
			return this.getToken(KipperParser.LeftBracket, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RightBracket(): TerminalNode[];
	public RightBracket(i: number): TerminalNode;
	public RightBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.RightBracket);
		} else {
			return this.getToken(KipperParser.RightBracket, i);
		}
	}
	public PlusPlus(): TerminalNode[];
	public PlusPlus(i: number): TerminalNode;
	public PlusPlus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.PlusPlus);
		} else {
			return this.getToken(KipperParser.PlusPlus, i);
		}
	}
	public MinusMinus(): TerminalNode[];
	public MinusMinus(i: number): TerminalNode;
	public MinusMinus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.MinusMinus);
		} else {
			return this.getToken(KipperParser.MinusMinus, i);
		}
	}
	public CallFunc(): TerminalNode | undefined { return this.tryGetToken(KipperParser.CallFunc, 0); }
	public LeftParen(): TerminalNode | undefined { return this.tryGetToken(KipperParser.LeftParen, 0); }
	public RightParen(): TerminalNode | undefined { return this.tryGetToken(KipperParser.RightParen, 0); }
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_postfixExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
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
	public get ruleIndex(): number { return KipperParser.RULE_argumentExpressionList; }
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
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	public castOrConvertExpression(): CastOrConvertExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastOrConvertExpressionContext);
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
	public PlusPlus(): TerminalNode[];
	public PlusPlus(i: number): TerminalNode;
	public PlusPlus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.PlusPlus);
		} else {
			return this.getToken(KipperParser.PlusPlus, i);
		}
	}
	public MinusMinus(): TerminalNode[];
	public MinusMinus(i: number): TerminalNode;
	public MinusMinus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.MinusMinus);
		} else {
			return this.getToken(KipperParser.MinusMinus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_unaryExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	public Star(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Star, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Minus, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_unaryOperator; }
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
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(KipperParser.DigitSequence, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(KipperParser.As, 0); }
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
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
	public get ruleIndex(): number { return KipperParser.RULE_castOrConvertExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterCastOrConvertExpression) {
			listener.enterCastOrConvertExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitCastOrConvertExpression) {
			listener.exitCastOrConvertExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitCastOrConvertExpression) {
			return visitor.visitCastOrConvertExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public castOrConvertExpression(): CastOrConvertExpressionContext[];
	public castOrConvertExpression(i: number): CastOrConvertExpressionContext;
	public castOrConvertExpression(i?: number): CastOrConvertExpressionContext | CastOrConvertExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CastOrConvertExpressionContext);
		} else {
			return this.getRuleContext(i, CastOrConvertExpressionContext);
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
	public Star(): TerminalNode[];
	public Star(i: number): TerminalNode;
	public Star(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Star);
		} else {
			return this.getToken(KipperParser.Star, i);
		}
	}
	public Div(): TerminalNode[];
	public Div(i: number): TerminalNode;
	public Div(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Div);
		} else {
			return this.getToken(KipperParser.Div, i);
		}
	}
	public Mod(): TerminalNode[];
	public Mod(i: number): TerminalNode;
	public Mod(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Mod);
		} else {
			return this.getToken(KipperParser.Mod, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
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
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Plus);
		} else {
			return this.getToken(KipperParser.Plus, i);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Minus);
		} else {
			return this.getToken(KipperParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext[];
	public additiveExpression(i: number): AdditiveExpressionContext;
	public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveExpressionContext);
		} else {
			return this.getRuleContext(i, AdditiveExpressionContext);
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
	public Less(): TerminalNode[];
	public Less(i: number): TerminalNode;
	public Less(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Less);
		} else {
			return this.getToken(KipperParser.Less, i);
		}
	}
	public Greater(): TerminalNode[];
	public Greater(i: number): TerminalNode;
	public Greater(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Greater);
		} else {
			return this.getToken(KipperParser.Greater, i);
		}
	}
	public LessEqual(): TerminalNode[];
	public LessEqual(i: number): TerminalNode;
	public LessEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.LessEqual);
		} else {
			return this.getToken(KipperParser.LessEqual, i);
		}
	}
	public GreaterEqual(): TerminalNode[];
	public GreaterEqual(i: number): TerminalNode;
	public GreaterEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.GreaterEqual);
		} else {
			return this.getToken(KipperParser.GreaterEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
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
	public Equal(): TerminalNode[];
	public Equal(i: number): TerminalNode;
	public Equal(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Equal);
		} else {
			return this.getToken(KipperParser.Equal, i);
		}
	}
	public NotEqual(): TerminalNode[];
	public NotEqual(i: number): TerminalNode;
	public NotEqual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.NotEqual);
		} else {
			return this.getToken(KipperParser.NotEqual, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_equalityExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext[];
	public equalityExpression(i: number): EqualityExpressionContext;
	public equalityExpression(i?: number): EqualityExpressionContext | EqualityExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityExpressionContext);
		} else {
			return this.getRuleContext(i, EqualityExpressionContext);
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
	public AndAnd(): TerminalNode[];
	public AndAnd(i: number): TerminalNode;
	public AndAnd(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.AndAnd);
		} else {
			return this.getToken(KipperParser.AndAnd, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_logicalAndExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	public logicalAndExpression(): LogicalAndExpressionContext[];
	public logicalAndExpression(i: number): LogicalAndExpressionContext;
	public logicalAndExpression(i?: number): LogicalAndExpressionContext | LogicalAndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalAndExpressionContext);
		} else {
			return this.getRuleContext(i, LogicalAndExpressionContext);
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
	public OrOr(): TerminalNode[];
	public OrOr(i: number): TerminalNode;
	public OrOr(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.OrOr);
		} else {
			return this.getToken(KipperParser.OrOr, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_logicalOrExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getRuleContext(0, LogicalOrExpressionContext);
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
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public assignmentOperator(): AssignmentOperatorContext | undefined {
		return this.tryGetRuleContext(0, AssignmentOperatorContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
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
	public get ruleIndex(): number { return KipperParser.RULE_assignmentExpression; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Assign, 0); }
	public StarAssign(): TerminalNode | undefined { return this.tryGetToken(KipperParser.StarAssign, 0); }
	public DivAssign(): TerminalNode | undefined { return this.tryGetToken(KipperParser.DivAssign, 0); }
	public ModAssign(): TerminalNode | undefined { return this.tryGetToken(KipperParser.ModAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(KipperParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(KipperParser.MinusAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_assignmentOperator; }
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
	public get ruleIndex(): number { return KipperParser.RULE_expression; }
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
	public get ruleIndex(): number { return KipperParser.RULE_constantExpression; }
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
	public endOfItem(): EndOfItemContext {
		return this.getRuleContext(0, EndOfItemContext);
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
	public get ruleIndex(): number { return KipperParser.RULE_declaration; }
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
	public Var(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Var, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Const, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_storageTypeSpecifier; }
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
	public get ruleIndex(): number { return KipperParser.RULE_declarationSpecifiers; }
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
	public get ruleIndex(): number { return KipperParser.RULE_declarationSpecifier; }
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
	public Assign(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Assign, 0); }
	public initializer(): InitializerContext | undefined {
		return this.tryGetRuleContext(0, InitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_initDeclarator; }
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
	public get ruleIndex(): number { return KipperParser.RULE_typeSpecifier; }
	public copyFrom(ctx: TypeSpecifierContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleItemTypeSpecifierContext extends TypeSpecifierContext {
	public Identifier(): TerminalNode { return this.getToken(KipperParser.Identifier, 0); }
	constructor(ctx: TypeSpecifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterSingleItemTypeSpecifier) {
			listener.enterSingleItemTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitSingleItemTypeSpecifier) {
			listener.exitSingleItemTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitSingleItemTypeSpecifier) {
			return visitor.visitSingleItemTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiItemTypeSpecifierContext extends TypeSpecifierContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Identifier);
		} else {
			return this.getToken(KipperParser.Identifier, i);
		}
	}
	public Less(): TerminalNode { return this.getToken(KipperParser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(KipperParser.Greater, 0); }
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
		if (listener.enterMultiItemTypeSpecifier) {
			listener.enterMultiItemTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitMultiItemTypeSpecifier) {
			listener.exitMultiItemTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitMultiItemTypeSpecifier) {
			return visitor.visitMultiItemTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofTypeSpecifierContext extends TypeSpecifierContext {
	public Typeof(): TerminalNode { return this.getToken(KipperParser.Typeof, 0); }
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
	public Identifier(): TerminalNode { return this.getToken(KipperParser.Identifier, 0); }
	public RightParen(): TerminalNode { return this.getToken(KipperParser.RightParen, 0); }
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
	public get ruleIndex(): number { return KipperParser.RULE_declarator; }
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
	public Identifier(): TerminalNode { return this.getToken(KipperParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_directDeclarator; }
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


export class NestedParenthesesBlockContext extends ParserRuleContext {
	public LeftParen(): TerminalNode[];
	public LeftParen(i: number): TerminalNode;
	public LeftParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.LeftParen);
		} else {
			return this.getToken(KipperParser.LeftParen, i);
		}
	}
	public nestedParenthesesBlock(): NestedParenthesesBlockContext[];
	public nestedParenthesesBlock(i: number): NestedParenthesesBlockContext;
	public nestedParenthesesBlock(i?: number): NestedParenthesesBlockContext | NestedParenthesesBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NestedParenthesesBlockContext);
		} else {
			return this.getRuleContext(i, NestedParenthesesBlockContext);
		}
	}
	public RightParen(): TerminalNode[];
	public RightParen(i: number): TerminalNode;
	public RightParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.RightParen);
		} else {
			return this.getToken(KipperParser.RightParen, i);
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
	public get ruleIndex(): number { return KipperParser.RULE_nestedParenthesesBlock; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterNestedParenthesesBlock) {
			listener.enterNestedParenthesesBlock(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitNestedParenthesesBlock) {
			listener.exitNestedParenthesesBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitNestedParenthesesBlock) {
			return visitor.visitNestedParenthesesBlock(this);
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
	public Comma(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_parameterTypeList; }
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
	public get ruleIndex(): number { return KipperParser.RULE_parameterList; }
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
	public get ruleIndex(): number { return KipperParser.RULE_parameterDeclaration; }
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
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(KipperParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(KipperParser.RightBracket, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
	}
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_initializer; }
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


export class InitializerListContext extends ParserRuleContext {
	public initializer(): InitializerContext[];
	public initializer(i: number): InitializerContext;
	public initializer(i?: number): InitializerContext | InitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializerContext);
		} else {
			return this.getRuleContext(i, InitializerContext);
		}
	}
	public designation(): DesignationContext[];
	public designation(i: number): DesignationContext;
	public designation(i?: number): DesignationContext | DesignationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DesignationContext);
		} else {
			return this.getRuleContext(i, DesignationContext);
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
	public get ruleIndex(): number { return KipperParser.RULE_initializerList; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterInitializerList) {
			listener.enterInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitInitializerList) {
			listener.exitInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitInitializerList) {
			return visitor.visitInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignationContext extends ParserRuleContext {
	public designatorList(): DesignatorListContext {
		return this.getRuleContext(0, DesignatorListContext);
	}
	public Assign(): TerminalNode { return this.getToken(KipperParser.Assign, 0); }
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
	public get ruleIndex(): number { return KipperParser.RULE_designation; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterDesignation) {
			listener.enterDesignation(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitDesignation) {
			listener.exitDesignation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitDesignation) {
			return visitor.visitDesignation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorListContext extends ParserRuleContext {
	public designator(): DesignatorContext[];
	public designator(i: number): DesignatorContext;
	public designator(i?: number): DesignatorContext | DesignatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DesignatorContext);
		} else {
			return this.getRuleContext(i, DesignatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_designatorList; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterDesignatorList) {
			listener.enterDesignatorList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitDesignatorList) {
			listener.exitDesignatorList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitDesignatorList) {
			return visitor.visitDesignatorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DesignatorContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode | undefined { return this.tryGetToken(KipperParser.LeftBracket, 0); }
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public RightBracket(): TerminalNode | undefined { return this.tryGetToken(KipperParser.RightBracket, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Dot, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_designator; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterDesignator) {
			listener.enterDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitDesignator) {
			listener.exitDesignator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitDesignator) {
			return visitor.visitDesignator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
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
	public get ruleIndex(): number { return KipperParser.RULE_statement; }
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


export class LabeledStatementContext extends ParserRuleContext {
	public Case(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Case, 0); }
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
	public Default(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Default, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public LeftBrace(): TerminalNode { return this.getToken(KipperParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode { return this.getToken(KipperParser.RightBrace, 0); }
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
	public get ruleIndex(): number { return KipperParser.RULE_compoundStatement; }
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
	public get ruleIndex(): number { return KipperParser.RULE_blockItemList; }
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
	public get ruleIndex(): number { return KipperParser.RULE_blockItem; }
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
	public endOfItem(): EndOfItemContext {
		return this.getRuleContext(0, EndOfItemContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_expressionStatement; }
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
	public If(): TerminalNode | undefined { return this.tryGetToken(KipperParser.If, 0); }
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(KipperParser.RightParen, 0); }
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
	public Else(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Else, 0); }
	public Switch(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Switch, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_selectionStatement; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	public For(): TerminalNode | undefined { return this.tryGetToken(KipperParser.For, 0); }
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
	public forCondition(): ForConditionContext | undefined {
		return this.tryGetRuleContext(0, ForConditionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(KipperParser.RightParen, 0); }
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
	public While(): TerminalNode | undefined { return this.tryGetToken(KipperParser.While, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Do(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Do, 0); }
	public endOfItem(): EndOfItemContext | undefined {
		return this.tryGetRuleContext(0, EndOfItemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_iterationStatement; }
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
	public endOfItem(): EndOfItemContext[];
	public endOfItem(i: number): EndOfItemContext;
	public endOfItem(i?: number): EndOfItemContext | EndOfItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfItemContext);
		} else {
			return this.getRuleContext(i, EndOfItemContext);
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
	public get ruleIndex(): number { return KipperParser.RULE_forCondition; }
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
	public get ruleIndex(): number { return KipperParser.RULE_forDeclaration; }
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
	public get ruleIndex(): number { return KipperParser.RULE_forExpression; }
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
	public endOfItem(): EndOfItemContext {
		return this.getRuleContext(0, EndOfItemContext);
	}
	public Return(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Return, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Continue, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(KipperParser.Break, 0); }
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
	public get ruleIndex(): number { return KipperParser.RULE_jumpStatement; }
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


export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(KipperParser.EOF, 0); }
	public translationUnit(): TranslationUnitContext | undefined {
		return this.tryGetRuleContext(0, TranslationUnitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_compilationUnit; }
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
	public endOfItem(): EndOfItemContext[];
	public endOfItem(i: number): EndOfItemContext;
	public endOfItem(i?: number): EndOfItemContext | EndOfItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndOfItemContext);
		} else {
			return this.getRuleContext(i, EndOfItemContext);
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
	public get ruleIndex(): number { return KipperParser.RULE_translationUnit; }
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
	public get ruleIndex(): number { return KipperParser.RULE_externalItem; }
	public copyFrom(ctx: ExternalItemContext): void {
		super.copyFrom(ctx);
	}
}
export class ExternalFunctionDefinitionContext extends ExternalItemContext {
	public functionDefinition(): FunctionDefinitionContext {
		return this.getRuleContext(0, FunctionDefinitionContext);
	}
	constructor(ctx: ExternalItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterExternalFunctionDefinition) {
			listener.enterExternalFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitExternalFunctionDefinition) {
			listener.exitExternalFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitExternalFunctionDefinition) {
			return visitor.visitExternalFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExternalDeclarationContext extends ExternalItemContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: ExternalItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterExternalDeclaration) {
			listener.enterExternalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitExternalDeclaration) {
			listener.exitExternalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitExternalDeclaration) {
			return visitor.visitExternalDeclaration(this);
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


export class FunctionDefinitionContext extends ParserRuleContext {
	public DefFunc(): TerminalNode { return this.getToken(KipperParser.DefFunc, 0); }
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(KipperParser.RightParen, 0); }
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
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
	public get ruleIndex(): number { return KipperParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndOfItemContext extends ParserRuleContext {
	public Whitespace(): TerminalNode[];
	public Whitespace(i: number): TerminalNode;
	public Whitespace(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.Whitespace);
		} else {
			return this.getToken(KipperParser.Whitespace, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_endOfItem; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterEndOfItem) {
			listener.enterEndOfItem(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitEndOfItem) {
			listener.exitEndOfItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitEndOfItem) {
			return visitor.visitEndOfItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


