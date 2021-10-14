// Generated from ./src/grammar/Kipper.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly Struct = 22;
	public static readonly Typeof = 23;
	public static readonly LeftParen = 24;
	public static readonly RightParen = 25;
	public static readonly LeftBracket = 26;
	public static readonly RightBracket = 27;
	public static readonly LeftBrace = 28;
	public static readonly RightBrace = 29;
	public static readonly Plus = 30;
	public static readonly PlusPlus = 31;
	public static readonly Minus = 32;
	public static readonly MinusMinus = 33;
	public static readonly Star = 34;
	public static readonly Div = 35;
	public static readonly Mod = 36;
	public static readonly AndAnd = 37;
	public static readonly OrOr = 38;
	public static readonly Not = 39;
	public static readonly Comma = 40;
	public static readonly Assign = 41;
	public static readonly StarAssign = 42;
	public static readonly DivAssign = 43;
	public static readonly ModAssign = 44;
	public static readonly PlusAssign = 45;
	public static readonly MinusAssign = 46;
	public static readonly Equal = 47;
	public static readonly NotEqual = 48;
	public static readonly Less = 49;
	public static readonly LessEqual = 50;
	public static readonly Greater = 51;
	public static readonly GreaterEqual = 52;
	public static readonly Dot = 53;
	public static readonly Identifier = 54;
	public static readonly Constant = 55;
	public static readonly DigitSequence = 56;
	public static readonly StringLiteral = 57;
	public static readonly Directive = 58;
	public static readonly WS = 59;
	public static readonly Whitespace = 60;
	public static readonly BlockComment = 61;
	public static readonly Newline = 62;
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
	public static readonly RULE_arraySpecifier = 22;
	public static readonly RULE_typeSpecifier = 23;
	public static readonly RULE_declarator = 24;
	public static readonly RULE_directDeclarator = 25;
	public static readonly RULE_nestedParenthesesBlock = 26;
	public static readonly RULE_parameterTypeList = 27;
	public static readonly RULE_parameterList = 28;
	public static readonly RULE_parameterDeclaration = 29;
	public static readonly RULE_initializer = 30;
	public static readonly RULE_initializerList = 31;
	public static readonly RULE_designation = 32;
	public static readonly RULE_designatorList = 33;
	public static readonly RULE_designator = 34;
	public static readonly RULE_statement = 35;
	public static readonly RULE_labeledStatement = 36;
	public static readonly RULE_compoundStatement = 37;
	public static readonly RULE_blockItemList = 38;
	public static readonly RULE_blockItem = 39;
	public static readonly RULE_expressionStatement = 40;
	public static readonly RULE_selectionStatement = 41;
	public static readonly RULE_iterationStatement = 42;
	public static readonly RULE_jumpStatement = 43;
	public static readonly RULE_compilationUnit = 44;
	public static readonly RULE_translationUnit = 45;
	public static readonly RULE_externalItem = 46;
	public static readonly RULE_functionDefinition = 47;
	public static readonly RULE_endOfItem = 48;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"primaryExpression", "postfixExpression", "argumentExpressionList", "unaryExpression", 
		"unaryOperator", "castOrConvertExpression", "multiplicativeExpression", 
		"additiveExpression", "relationalExpression", "equalityExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "declaration", 
		"storageTypeSpecifier", "declarationSpecifiers", "declarationSpecifier", 
		"initDeclarator", "arraySpecifier", "typeSpecifier", "declarator", "directDeclarator", 
		"nestedParenthesesBlock", "parameterTypeList", "parameterList", "parameterDeclaration", 
		"initializer", "initializerList", "designation", "designatorList", "designator", 
		"statement", "labeledStatement", "compoundStatement", "blockItemList", 
		"blockItem", "expressionStatement", "selectionStatement", "iterationStatement", 
		"jumpStatement", "compilationUnit", "translationUnit", "externalItem", 
		"functionDefinition", "endOfItem",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'?'", "':'", "'...'", "'->'", "';'", "'const'", "'var'", "'switch'", 
		"'case'", "'default'", "'break'", "'continue'", "'do'", "'while'", "'if'", 
		"'else'", "'for'", "'enum'", "'def'", "'return'", "'call'", "'struct'", 
		"'typeof'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'+'", "'++'", "'-'", 
		"'--'", "'*'", "'/'", "'%'", "'&&'", "'||'", "'!'", "','", "'='", "'*='", 
		"'/='", "'%='", "'+='", "'-='", "'=='", "'!='", "'<'", "'<='", "'>'", 
		"'>='", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "Const", 
		"Var", "Switch", "Case", "Default", "Break", "Continue", "Do", "While", 
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
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 98;
				this.match(KipperParser.Identifier);
				}
				break;
			case KipperParser.Constant:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 99;
				this.match(KipperParser.Constant);
				}
				break;
			case KipperParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 100;
					this.match(KipperParser.StringLiteral);
					}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.StringLiteral);
				}
				break;
			case KipperParser.LeftParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 105;
				this.match(KipperParser.LeftParen);
				this.state = 106;
				this.expression();
				this.state = 107;
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
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftParen:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this.primaryExpression();
				this.state = 115;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 112;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 117;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (KipperParser.LeftBracket - 26)) | (1 << (KipperParser.PlusPlus - 26)) | (1 << (KipperParser.MinusMinus - 26)))) !== 0)) {
					{
					this.state = 135;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case KipperParser.LeftBracket:
						{
						this.state = 118;
						this.match(KipperParser.LeftBracket);
						this.state = 122;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 119;
								this.match(KipperParser.WS);
								}
								}
							}
							this.state = 124;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
						}
						this.state = 125;
						this.expression();
						this.state = 129;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 126;
							this.match(KipperParser.WS);
							}
							}
							this.state = 131;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 132;
						this.match(KipperParser.RightBracket);
						}
						break;
					case KipperParser.PlusPlus:
					case KipperParser.MinusMinus:
						{
						this.state = 134;
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
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case KipperParser.CallFunc:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this.match(KipperParser.CallFunc);
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 141;
					this.match(KipperParser.WS);
					}
					}
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 147;
				this.primaryExpression();
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 148;
					this.match(KipperParser.WS);
					}
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 154;
				this.match(KipperParser.LeftParen);
				this.state = 158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 155;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 160;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				}
				this.state = 162;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 161;
					this.argumentExpressionList();
					}
					break;
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 164;
					this.match(KipperParser.WS);
					}
					}
					this.state = 169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 170;
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
			this.state = 174;
			this.assignmentExpression();
			this.state = 178;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 175;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 181;
				this.match(KipperParser.Comma);
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 182;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 187;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 188;
				this.assignmentExpression();
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 189;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				}
				}
				this.state = 199;
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
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.PlusPlus || _la === KipperParser.MinusMinus) {
				{
				{
				this.state = 200;
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
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 206;
				this.match(KipperParser.WS);
				}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.StringLiteral:
				{
				this.state = 212;
				this.postfixExpression();
				}
				break;
			case KipperParser.Plus:
			case KipperParser.Minus:
			case KipperParser.Star:
			case KipperParser.Not:
				{
				this.state = 213;
				this.unaryOperator();
				this.state = 217;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 214;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				}
				this.state = 220;
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
			this.state = 224;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (KipperParser.Plus - 30)) | (1 << (KipperParser.Minus - 30)) | (1 << (KipperParser.Star - 30)) | (1 << (KipperParser.Not - 30)))) !== 0))) {
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
		try {
			this.state = 228;
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
			case KipperParser.StringLiteral:
			case KipperParser.WS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.unaryExpression();
				}
				break;
			case KipperParser.DigitSequence:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				this.match(KipperParser.DigitSequence);
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
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KipperParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.castOrConvertExpression();
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 231;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (KipperParser.Star - 34)) | (1 << (KipperParser.Div - 34)) | (1 << (KipperParser.Mod - 34)))) !== 0)) {
				{
				{
				this.state = 237;
				_la = this._input.LA(1);
				if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (KipperParser.Star - 34)) | (1 << (KipperParser.Div - 34)) | (1 << (KipperParser.Mod - 34)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 241;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 238;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 243;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
				}
				this.state = 244;
				this.castOrConvertExpression();
				this.state = 248;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 245;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 250;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				}
				}
				}
				this.state = 255;
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
			this.state = 256;
			this.multiplicativeExpression();
			this.state = 260;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 257;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Plus || _la === KipperParser.Minus) {
				{
				{
				this.state = 263;
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
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 264;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 269;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 270;
				this.multiplicativeExpression();
				this.state = 274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 271;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 276;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				}
				}
				}
				this.state = 281;
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
			this.state = 282;
			this.additiveExpression();
			this.state = 286;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 283;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (KipperParser.Less - 49)) | (1 << (KipperParser.LessEqual - 49)) | (1 << (KipperParser.Greater - 49)) | (1 << (KipperParser.GreaterEqual - 49)))) !== 0)) {
				{
				{
				this.state = 289;
				_la = this._input.LA(1);
				if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (KipperParser.Less - 49)) | (1 << (KipperParser.LessEqual - 49)) | (1 << (KipperParser.Greater - 49)) | (1 << (KipperParser.GreaterEqual - 49)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 293;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 290;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 295;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 296;
				this.additiveExpression();
				this.state = 300;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 297;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 302;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				}
				}
				}
				this.state = 307;
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
			this.state = 308;
			this.relationalExpression();
			this.state = 312;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 309;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Equal || _la === KipperParser.NotEqual) {
				{
				{
				this.state = 315;
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
				this.state = 319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 316;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 321;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				this.state = 322;
				this.relationalExpression();
				this.state = 326;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 323;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 328;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				}
				}
				}
				this.state = 333;
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
			this.state = 334;
			this.equalityExpression();
			this.state = 338;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 335;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.AndAnd) {
				{
				{
				this.state = 341;
				this.match(KipperParser.AndAnd);
				this.state = 345;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 342;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 347;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 348;
				this.equalityExpression();
				this.state = 352;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 349;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 354;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
				}
				}
				}
				this.state = 359;
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
			this.state = 360;
			this.logicalAndExpression();
			this.state = 364;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 361;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.OrOr) {
				{
				{
				this.state = 367;
				this.match(KipperParser.OrOr);
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 368;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 373;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 374;
				this.logicalAndExpression();
				this.state = 378;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 375;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 380;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				}
				}
				}
				this.state = 385;
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
			this.state = 386;
			this.logicalOrExpression();
			this.state = 390;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 387;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.T__0) {
				{
				this.state = 393;
				this.match(KipperParser.T__0);
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 394;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 399;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				this.state = 400;
				this.expression();
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
				this.match(KipperParser.T__1);
				this.state = 411;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				this.state = 414;
				this.conditionalExpression();
				this.state = 418;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 415;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 420;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
			this.state = 440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.unaryExpression();
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 425;
					this.match(KipperParser.WS);
					}
					}
					this.state = 430;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 431;
				this.assignmentOperator();
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 432;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 437;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				}
				this.state = 438;
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
			this.state = 442;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (KipperParser.Assign - 41)) | (1 << (KipperParser.StarAssign - 41)) | (1 << (KipperParser.DivAssign - 41)) | (1 << (KipperParser.ModAssign - 41)) | (1 << (KipperParser.PlusAssign - 41)) | (1 << (KipperParser.MinusAssign - 41)))) !== 0))) {
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
			this.state = 444;
			this.assignmentExpression();
			this.state = 448;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 445;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 451;
				this.match(KipperParser.Comma);
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				}
				this.state = 458;
				this.assignmentExpression();
				this.state = 462;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 459;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 464;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				}
				}
				this.state = 469;
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
			this.state = 470;
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
			this.state = 472;
			this.storageTypeSpecifier();
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 473;
				this.match(KipperParser.WS);
				}
				}
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 479;
			this.initDeclarator();
			this.state = 480;
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
			this.state = 482;
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
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 484;
				this.declarationSpecifier();
				this.state = 488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 485;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 490;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				}
				}
				}
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === KipperParser.Identifier);
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
			this.state = 495;
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
			this.state = 497;
			this.declarator();
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 498;
				this.match(KipperParser.WS);
				}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 504;
			this.match(KipperParser.T__1);
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 505;
				this.match(KipperParser.WS);
				}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 511;
			this.typeSpecifier();
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 512;
				this.match(KipperParser.WS);
				}
				}
				this.state = 517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Assign) {
				{
				this.state = 518;
				this.match(KipperParser.Assign);
				this.state = 522;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 519;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 524;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				}
				this.state = 525;
				this.initializer();
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 526;
					this.match(KipperParser.WS);
					}
					}
					this.state = 531;
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
	public arraySpecifier(): ArraySpecifierContext {
		let _localctx: ArraySpecifierContext = new ArraySpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, KipperParser.RULE_arraySpecifier);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(KipperParser.LeftBracket);
			this.state = 538;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 535;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
			}
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 541;
				this.assignmentExpression();
				}
				break;
			}
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
			this.match(KipperParser.RightBracket);
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
		this.enterRule(_localctx, 46, KipperParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(KipperParser.Identifier);
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.LeftBracket) {
				{
				{
				this.state = 553;
				this.arraySpecifier();
				}
				}
				this.state = 558;
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
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
		this.enterRule(_localctx, 50, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
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
		this.enterRule(_localctx, 52, KipperParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 580;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case KipperParser.T__0:
					case KipperParser.T__1:
					case KipperParser.T__2:
					case KipperParser.T__3:
					case KipperParser.T__4:
					case KipperParser.Const:
					case KipperParser.Var:
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
						this.state = 563;
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
						this.state = 564;
						this.match(KipperParser.LeftParen);
						this.state = 568;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
							_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
						}
						this.state = 571;
						this.nestedParenthesesBlock();
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
						this.match(KipperParser.RightParen);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 584;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
		this.enterRule(_localctx, 54, KipperParser.RULE_parameterTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.parameterList();
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 586;
				this.match(KipperParser.WS);
				}
				}
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Comma) {
				{
				this.state = 592;
				this.match(KipperParser.Comma);
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 593;
					this.match(KipperParser.WS);
					}
					}
					this.state = 598;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 599;
				this.match(KipperParser.T__2);
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 600;
					this.match(KipperParser.WS);
					}
					}
					this.state = 605;
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
		this.enterRule(_localctx, 56, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this.parameterDeclaration();
			this.state = 612;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
			}
			this.state = 631;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 615;
					this.match(KipperParser.Comma);
					this.state = 619;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 616;
						this.match(KipperParser.WS);
						}
						}
						this.state = 621;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 622;
					this.parameterDeclaration();
					this.state = 626;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 623;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 628;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
					}
					}
					}
				}
				this.state = 633;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
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
		this.enterRule(_localctx, 58, KipperParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.declarator();
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 635;
				this.match(KipperParser.WS);
				}
				}
				this.state = 640;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 641;
			this.match(KipperParser.T__1);
			this.state = 645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 642;
				this.match(KipperParser.WS);
				}
				}
				this.state = 647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 648;
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
		this.enterRule(_localctx, 60, KipperParser.RULE_initializer);
		let _la: number;
		try {
			let _alt: number;
			this.state = 677;
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
				this.state = 650;
				this.assignmentExpression();
				}
				break;
			case KipperParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 651;
				this.match(KipperParser.LeftBrace);
				this.state = 655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 652;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 657;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				}
				this.state = 659;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
				case 1:
					{
					this.state = 658;
					this.initializerList();
					}
					break;
				}
				this.state = 664;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 661;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 666;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
				}
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Comma) {
					{
					this.state = 667;
					this.match(KipperParser.Comma);
					}
				}

				this.state = 673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 670;
					this.match(KipperParser.WS);
					}
					}
					this.state = 675;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 676;
				this.match(KipperParser.RightBrace);
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
		this.enterRule(_localctx, 62, KipperParser.RULE_initializerList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.LeftBracket || _la === KipperParser.Dot) {
				{
				this.state = 679;
				this.designation();
				}
			}

			this.state = 685;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 682;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 687;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			this.state = 688;
			this.initializer();
			this.state = 692;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 689;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 720;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 695;
					this.match(KipperParser.Comma);
					this.state = 699;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 696;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 701;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
					}
					this.state = 703;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === KipperParser.LeftBracket || _la === KipperParser.Dot) {
						{
						this.state = 702;
						this.designation();
						}
					}

					this.state = 708;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 705;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 710;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
					}
					this.state = 711;
					this.initializer();
					this.state = 715;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 712;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 717;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
					}
					}
					}
				}
				this.state = 722;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
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
		this.enterRule(_localctx, 64, KipperParser.RULE_designation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.designatorList();
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 724;
				this.match(KipperParser.WS);
				}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 730;
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
		this.enterRule(_localctx, 66, KipperParser.RULE_designatorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 732;
				this.designator();
				}
				}
				this.state = 735;
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
		this.enterRule(_localctx, 68, KipperParser.RULE_designator);
		let _la: number;
		try {
			let _alt: number;
			this.state = 761;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 737;
				this.match(KipperParser.LeftBracket);
				this.state = 741;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 738;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 743;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				}
				this.state = 744;
				this.constantExpression();
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 745;
					this.match(KipperParser.WS);
					}
					}
					this.state = 750;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 751;
				this.match(KipperParser.RightBracket);
				}
				break;
			case KipperParser.Dot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 753;
				this.match(KipperParser.Dot);
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 754;
					this.match(KipperParser.WS);
					}
					}
					this.state = 759;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 760;
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
		this.enterRule(_localctx, 70, KipperParser.RULE_statement);
		try {
			this.state = 769;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Case:
			case KipperParser.Default:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.labeledStatement();
				}
				break;
			case KipperParser.LeftBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
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
				this.state = 765;
				this.expressionStatement();
				}
				break;
			case KipperParser.Switch:
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 766;
				this.selectionStatement();
				}
				break;
			case KipperParser.Do:
			case KipperParser.While:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 767;
				this.iterationStatement();
				}
				break;
			case KipperParser.Break:
			case KipperParser.Continue:
			case KipperParser.Return:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 768;
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
		this.enterRule(_localctx, 72, KipperParser.RULE_labeledStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Case:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 771;
				this.match(KipperParser.Case);
				this.state = 775;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 772;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 777;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
				}
				this.state = 778;
				this.constantExpression();
				this.state = 782;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 779;
					this.match(KipperParser.WS);
					}
					}
					this.state = 784;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 785;
				this.match(KipperParser.T__1);
				this.state = 789;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 786;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 791;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
				}
				this.state = 792;
				this.statement();
				}
				break;
			case KipperParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 794;
				this.match(KipperParser.Default);
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 795;
					this.match(KipperParser.WS);
					}
					}
					this.state = 800;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 801;
				this.match(KipperParser.T__1);
				this.state = 805;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 802;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 807;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
				}
				this.state = 808;
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
		this.enterRule(_localctx, 74, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(KipperParser.LeftBrace);
			this.state = 815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 812;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			}
			this.state = 819;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 818;
				this.blockItemList();
				}
				break;
			}
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 821;
				this.match(KipperParser.WS);
				}
				}
				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 827;
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
		this.enterRule(_localctx, 76, KipperParser.RULE_blockItemList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 829;
					this.blockItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 832;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
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
		this.enterRule(_localctx, 78, KipperParser.RULE_blockItem);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 837;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 834;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 839;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
			}
			this.state = 842;
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
				this.state = 840;
				this.statement();
				}
				break;
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 841;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 847;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 844;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 849;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
		this.enterRule(_localctx, 80, KipperParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus) | (1 << KipperParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
				{
				this.state = 850;
				this.expression();
				}
			}

			this.state = 853;
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
		this.enterRule(_localctx, 82, KipperParser.RULE_selectionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 930;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 855;
				this.match(KipperParser.If);
				this.state = 859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 856;
					this.match(KipperParser.WS);
					}
					}
					this.state = 861;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 862;
				this.match(KipperParser.LeftParen);
				this.state = 866;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 863;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 868;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
				}
				this.state = 869;
				this.expression();
				this.state = 873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 870;
					this.match(KipperParser.WS);
					}
					}
					this.state = 875;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 876;
				this.match(KipperParser.RightParen);
				this.state = 880;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 877;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 882;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 124, this._ctx);
				}
				this.state = 883;
				this.statement();
				this.state = 887;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 884;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 889;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
				}
				this.state = 898;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 890;
					this.match(KipperParser.Else);
					this.state = 894;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 891;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 896;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
					}
					this.state = 897;
					this.statement();
					}
					break;
				}
				}
				break;
			case KipperParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 900;
				this.match(KipperParser.Switch);
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 901;
					this.match(KipperParser.WS);
					}
					}
					this.state = 906;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 907;
				this.match(KipperParser.LeftParen);
				this.state = 911;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
				}
				this.state = 914;
				this.expression();
				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 915;
					this.match(KipperParser.WS);
					}
					}
					this.state = 920;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 921;
				this.match(KipperParser.RightParen);
				this.state = 925;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 922;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 927;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
				}
				this.state = 928;
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
		this.enterRule(_localctx, 84, KipperParser.RULE_iterationStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1000;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.While:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 932;
				this.match(KipperParser.While);
				this.state = 936;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 933;
					this.match(KipperParser.WS);
					}
					}
					this.state = 938;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 939;
				this.match(KipperParser.LeftParen);
				this.state = 943;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 940;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 945;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				}
				this.state = 946;
				this.expression();
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 947;
					this.match(KipperParser.WS);
					}
					}
					this.state = 952;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 953;
				this.match(KipperParser.RightParen);
				this.state = 957;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 954;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 959;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
				}
				this.state = 960;
				this.statement();
				}
				break;
			case KipperParser.Do:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 962;
				this.match(KipperParser.Do);
				this.state = 966;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 963;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 968;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
				}
				this.state = 969;
				this.statement();
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 970;
					this.match(KipperParser.WS);
					}
					}
					this.state = 975;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 976;
				this.match(KipperParser.While);
				this.state = 980;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 977;
					this.match(KipperParser.WS);
					}
					}
					this.state = 982;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 983;
				this.match(KipperParser.LeftParen);
				this.state = 987;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 984;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 989;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
				}
				this.state = 990;
				this.expression();
				this.state = 994;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 991;
					this.match(KipperParser.WS);
					}
					}
					this.state = 996;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 997;
				this.match(KipperParser.RightParen);
				this.state = 998;
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
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1013;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Break:
			case KipperParser.Continue:
				{
				this.state = 1002;
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
				this.state = 1003;
				this.match(KipperParser.Return);
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1004;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1009;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 143, this._ctx);
				}
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus) | (1 << KipperParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
					{
					this.state = 1010;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1015;
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
		this.enterRule(_localctx, 88, KipperParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__4) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Case) | (1 << KipperParser.Default) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus) | (1 << KipperParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0)) {
				{
				this.state = 1017;
				this.translationUnit();
				}
			}

			this.state = 1020;
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
		this.enterRule(_localctx, 90, KipperParser.RULE_translationUnit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 1029;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1022;
					this.externalItem();
					}
					break;

				case 2:
					{
					this.state = 1023;
					this.endOfItem();
					}
					break;

				case 3:
					{
					this.state = 1025;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 1024;
							this.match(KipperParser.WS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 1027;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__4) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Case) | (1 << KipperParser.Default) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus) | (1 << KipperParser.PlusPlus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0));
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
		this.enterRule(_localctx, 92, KipperParser.RULE_externalItem);
		try {
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				_localctx = new ExternalFunctionDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1033;
				this.functionDefinition();
				}
				break;

			case 2:
				_localctx = new ExternalDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1034;
				this.declaration();
				}
				break;

			case 3:
				_localctx = new ExternalBlockItemContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1035;
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
		this.enterRule(_localctx, 94, KipperParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1038;
			this.match(KipperParser.DefFunc);
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1039;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1045;
			this.declarator();
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1046;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1052;
			this.match(KipperParser.LeftParen);
			this.state = 1054;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Identifier) {
				{
				this.state = 1053;
				this.parameterTypeList();
				}
			}

			this.state = 1056;
			this.match(KipperParser.RightParen);
			this.state = 1060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1057;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1063;
			this.match(KipperParser.T__3);
			this.state = 1067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1064;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1070;
			this.typeSpecifier();
			this.state = 1074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1071;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1076;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1077;
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
		this.enterRule(_localctx, 96, KipperParser.RULE_endOfItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Whitespace) {
				{
				{
				this.state = 1079;
				this.match(KipperParser.Whitespace);
				}
				}
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1085;
			this.match(KipperParser.T__4);
			this.state = 1089;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1086;
					this.match(KipperParser.Whitespace);
					}
					}
				}
				this.state = 1091;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03@\u0447\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x03\x02" +
		"\x03\x02\x06\x02h\n\x02\r\x02\x0E\x02i\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x05\x02p\n\x02\x03\x03\x03\x03\x07\x03t\n\x03\f\x03\x0E\x03w\v\x03\x03" +
		"\x03\x03\x03\x07\x03{\n\x03\f\x03\x0E\x03~\v\x03\x03\x03\x03\x03\x07\x03" +
		"\x82\n\x03\f\x03\x0E\x03\x85\v\x03\x03\x03\x03\x03\x03\x03\x07\x03\x8A" +
		"\n\x03\f\x03\x0E\x03\x8D\v\x03\x03\x03\x03\x03\x07\x03\x91\n\x03\f\x03" +
		"\x0E\x03\x94\v\x03\x03\x03\x03\x03\x07\x03\x98\n\x03\f\x03\x0E\x03\x9B" +
		"\v\x03\x03\x03\x03\x03\x07\x03\x9F\n\x03\f\x03\x0E\x03\xA2\v\x03\x03\x03" +
		"\x05\x03\xA5\n\x03\x03\x03\x07\x03\xA8\n\x03\f\x03\x0E\x03\xAB\v\x03\x03" +
		"\x03\x03\x03\x05\x03\xAF\n\x03\x03\x04\x03\x04\x07\x04\xB3\n\x04\f\x04" +
		"\x0E\x04\xB6\v\x04\x03\x04\x03\x04\x07\x04\xBA\n\x04\f\x04\x0E\x04\xBD" +
		"\v\x04\x03\x04\x03\x04\x07\x04\xC1\n\x04\f\x04\x0E\x04\xC4\v\x04\x07\x04" +
		"\xC6\n\x04\f\x04\x0E\x04\xC9\v\x04\x03\x05\x07\x05\xCC\n\x05\f\x05\x0E" +
		"\x05\xCF\v\x05\x03\x05\x07\x05\xD2\n\x05\f\x05\x0E\x05\xD5\v\x05\x03\x05" +
		"\x03\x05\x03\x05\x07\x05\xDA\n\x05\f\x05\x0E\x05\xDD\v\x05\x03\x05\x03" +
		"\x05\x05\x05\xE1\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07\xE7\n\x07" +
		"\x03\b\x03\b\x07\b\xEB\n\b\f\b\x0E\b\xEE\v\b\x03\b\x03\b\x07\b\xF2\n\b" +
		"\f\b\x0E\b\xF5\v\b\x03\b\x03\b\x07\b\xF9\n\b\f\b\x0E\b\xFC\v\b\x07\b\xFE" +
		"\n\b\f\b\x0E\b\u0101\v\b\x03\t\x03\t\x07\t\u0105\n\t\f\t\x0E\t\u0108\v" +
		"\t\x03\t\x03\t\x07\t\u010C\n\t\f\t\x0E\t\u010F\v\t\x03\t\x03\t\x07\t\u0113" +
		"\n\t\f\t\x0E\t\u0116\v\t\x07\t\u0118\n\t\f\t\x0E\t\u011B\v\t\x03\n\x03" +
		"\n\x07\n\u011F\n\n\f\n\x0E\n\u0122\v\n\x03\n\x03\n\x07\n\u0126\n\n\f\n" +
		"\x0E\n\u0129\v\n\x03\n\x03\n\x07\n\u012D\n\n\f\n\x0E\n\u0130\v\n\x07\n" +
		"\u0132\n\n\f\n\x0E\n\u0135\v\n\x03\v\x03\v\x07\v\u0139\n\v\f\v\x0E\v\u013C" +
		"\v\v\x03\v\x03\v\x07\v\u0140\n\v\f\v\x0E\v\u0143\v\v\x03\v\x03\v\x07\v" +
		"\u0147\n\v\f\v\x0E\v\u014A\v\v\x07\v\u014C\n\v\f\v\x0E\v\u014F\v\v\x03" +
		"\f\x03\f\x07\f\u0153\n\f\f\f\x0E\f\u0156\v\f\x03\f\x03\f\x07\f\u015A\n" +
		"\f\f\f\x0E\f\u015D\v\f\x03\f\x03\f\x07\f\u0161\n\f\f\f\x0E\f\u0164\v\f" +
		"\x07\f\u0166\n\f\f\f\x0E\f\u0169\v\f\x03\r\x03\r\x07\r\u016D\n\r\f\r\x0E" +
		"\r\u0170\v\r\x03\r\x03\r\x07\r\u0174\n\r\f\r\x0E\r\u0177\v\r\x03\r\x03" +
		"\r\x07\r\u017B\n\r\f\r\x0E\r\u017E\v\r\x07\r\u0180\n\r\f\r\x0E\r\u0183" +
		"\v\r\x03\x0E\x03\x0E\x07\x0E\u0187\n\x0E\f\x0E\x0E\x0E\u018A\v\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\u018E\n\x0E\f\x0E\x0E\x0E\u0191\v\x0E\x03\x0E\x03" +
		"\x0E\x07\x0E\u0195\n\x0E\f\x0E\x0E\x0E\u0198\v\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\u019C\n\x0E\f\x0E\x0E\x0E\u019F\v\x0E\x03\x0E\x03\x0E\x07\x0E\u01A3" +
		"\n\x0E\f\x0E\x0E\x0E\u01A6\v\x0E\x05\x0E\u01A8\n\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x07\x0F\u01AD\n\x0F\f\x0F\x0E\x0F\u01B0\v\x0F\x03\x0F\x03\x0F\x07" +
		"\x0F\u01B4\n\x0F\f\x0F\x0E\x0F\u01B7\v\x0F\x03\x0F\x03\x0F\x05\x0F\u01BB" +
		"\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x07\x11\u01C1\n\x11\f\x11\x0E\x11" +
		"\u01C4\v\x11\x03\x11\x03\x11\x07\x11\u01C8\n\x11\f\x11\x0E\x11\u01CB\v" +
		"\x11\x03\x11\x03\x11\x07\x11\u01CF\n\x11\f\x11\x0E\x11\u01D2\v\x11\x07" +
		"\x11\u01D4\n\x11\f\x11\x0E\x11\u01D7\v\x11\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x07\x13\u01DD\n\x13\f\x13\x0E\x13\u01E0\v\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u01E9\n\x15\f\x15\x0E\x15" +
		"\u01EC\v\x15\x06\x15\u01EE\n\x15\r\x15\x0E\x15\u01EF\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x07\x17\u01F6\n\x17\f\x17\x0E\x17\u01F9\v\x17\x03\x17\x03" +
		"\x17\x07\x17\u01FD\n\x17\f\x17\x0E\x17\u0200\v\x17\x03\x17\x03\x17\x07" +
		"\x17\u0204\n\x17\f\x17\x0E\x17\u0207\v\x17\x03\x17\x03\x17\x07\x17\u020B" +
		"\n\x17\f\x17\x0E\x17\u020E\v\x17\x03\x17\x03\x17\x07\x17\u0212\n\x17\f" +
		"\x17\x0E\x17\u0215\v\x17\x05\x17\u0217\n\x17\x03\x18\x03\x18\x07\x18\u021B" +
		"\n\x18\f\x18\x0E\x18\u021E\v\x18\x03\x18\x05\x18\u0221\n\x18\x03\x18\x07" +
		"\x18\u0224\n\x18\f\x18\x0E\x18\u0227\v\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x07\x19\u022D\n\x19\f\x19\x0E\x19\u0230\v\x19\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0239\n\x1C\f\x1C\x0E\x1C" +
		"\u023C\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0240\n\x1C\f\x1C\x0E\x1C\u0243\v" +
		"\x1C\x03\x1C\x03\x1C\x07\x1C\u0247\n\x1C\f\x1C\x0E\x1C\u024A\v\x1C\x03" +
		"\x1D\x03\x1D\x07\x1D\u024E\n\x1D\f\x1D\x0E\x1D\u0251\v\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u0255\n\x1D\f\x1D\x0E\x1D\u0258\v\x1D\x03\x1D\x03\x1D\x07" +
		"\x1D\u025C\n\x1D\f\x1D\x0E\x1D\u025F\v\x1D\x05\x1D\u0261\n\x1D\x03\x1E" +
		"\x03\x1E\x07\x1E\u0265\n\x1E\f\x1E\x0E\x1E\u0268\v\x1E\x03\x1E\x03\x1E" +
		"\x07\x1E\u026C\n\x1E\f\x1E\x0E\x1E\u026F\v\x1E\x03\x1E\x03\x1E\x07\x1E" +
		"\u0273\n\x1E\f\x1E\x0E\x1E\u0276\v\x1E\x07\x1E\u0278\n\x1E\f\x1E\x0E\x1E" +
		"\u027B\v\x1E\x03\x1F\x03\x1F\x07\x1F\u027F\n\x1F\f\x1F\x0E\x1F\u0282\v" +
		"\x1F\x03\x1F\x03\x1F\x07\x1F\u0286\n\x1F\f\x1F\x0E\x1F\u0289\v\x1F\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03 \x07 \u0290\n \f \x0E \u0293\v \x03 \x05 \u0296" +
		"\n \x03 \x07 \u0299\n \f \x0E \u029C\v \x03 \x05 \u029F\n \x03 \x07 \u02A2" +
		"\n \f \x0E \u02A5\v \x03 \x05 \u02A8\n \x03!\x05!\u02AB\n!\x03!\x07!\u02AE" +
		"\n!\f!\x0E!\u02B1\v!\x03!\x03!\x07!\u02B5\n!\f!\x0E!\u02B8\v!\x03!\x03" +
		"!\x07!\u02BC\n!\f!\x0E!\u02BF\v!\x03!\x05!\u02C2\n!\x03!\x07!\u02C5\n" +
		"!\f!\x0E!\u02C8\v!\x03!\x03!\x07!\u02CC\n!\f!\x0E!\u02CF\v!\x07!\u02D1" +
		"\n!\f!\x0E!\u02D4\v!\x03\"\x03\"\x07\"\u02D8\n\"\f\"\x0E\"\u02DB\v\"\x03" +
		"\"\x03\"\x03#\x06#\u02E0\n#\r#\x0E#\u02E1\x03$\x03$\x07$\u02E6\n$\f$\x0E" +
		"$\u02E9\v$\x03$\x03$\x07$\u02ED\n$\f$\x0E$\u02F0\v$\x03$\x03$\x03$\x03" +
		"$\x07$\u02F6\n$\f$\x0E$\u02F9\v$\x03$\x05$\u02FC\n$\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x05%\u0304\n%\x03&\x03&\x07&\u0308\n&\f&\x0E&\u030B\v&\x03" +
		"&\x03&\x07&\u030F\n&\f&\x0E&\u0312\v&\x03&\x03&\x07&\u0316\n&\f&\x0E&" +
		"\u0319\v&\x03&\x03&\x03&\x03&\x07&\u031F\n&\f&\x0E&\u0322\v&\x03&\x03" +
		"&\x07&\u0326\n&\f&\x0E&\u0329\v&\x03&\x05&\u032C\n&\x03\'\x03\'\x07\'" +
		"\u0330\n\'\f\'\x0E\'\u0333\v\'\x03\'\x05\'\u0336\n\'\x03\'\x07\'\u0339" +
		"\n\'\f\'\x0E\'\u033C\v\'\x03\'\x03\'\x03(\x06(\u0341\n(\r(\x0E(\u0342" +
		"\x03)\x07)\u0346\n)\f)\x0E)\u0349\v)\x03)\x03)\x05)\u034D\n)\x03)\x07" +
		")\u0350\n)\f)\x0E)\u0353\v)\x03*\x05*\u0356\n*\x03*\x03*\x03+\x03+\x07" +
		"+\u035C\n+\f+\x0E+\u035F\v+\x03+\x03+\x07+\u0363\n+\f+\x0E+\u0366\v+\x03" +
		"+\x03+\x07+\u036A\n+\f+\x0E+\u036D\v+\x03+\x03+\x07+\u0371\n+\f+\x0E+" +
		"\u0374\v+\x03+\x03+\x07+\u0378\n+\f+\x0E+\u037B\v+\x03+\x03+\x07+\u037F" +
		"\n+\f+\x0E+\u0382\v+\x03+\x05+\u0385\n+\x03+\x03+\x07+\u0389\n+\f+\x0E" +
		"+\u038C\v+\x03+\x03+\x07+\u0390\n+\f+\x0E+\u0393\v+\x03+\x03+\x07+\u0397" +
		"\n+\f+\x0E+\u039A\v+\x03+\x03+\x07+\u039E\n+\f+\x0E+\u03A1\v+\x03+\x03" +
		"+\x05+\u03A5\n+\x03,\x03,\x07,\u03A9\n,\f,\x0E,\u03AC\v,\x03,\x03,\x07" +
		",\u03B0\n,\f,\x0E,\u03B3\v,\x03,\x03,\x07,\u03B7\n,\f,\x0E,\u03BA\v,\x03" +
		",\x03,\x07,\u03BE\n,\f,\x0E,\u03C1\v,\x03,\x03,\x03,\x03,\x07,\u03C7\n" +
		",\f,\x0E,\u03CA\v,\x03,\x03,\x07,\u03CE\n,\f,\x0E,\u03D1\v,\x03,\x03," +
		"\x07,\u03D5\n,\f,\x0E,\u03D8\v,\x03,\x03,\x07,\u03DC\n,\f,\x0E,\u03DF" +
		"\v,\x03,\x03,\x07,\u03E3\n,\f,\x0E,\u03E6\v,\x03,\x03,\x03,\x05,\u03EB" +
		"\n,\x03-\x03-\x03-\x07-\u03F0\n-\f-\x0E-\u03F3\v-\x03-\x05-\u03F6\n-\x05" +
		"-\u03F8\n-\x03-\x03-\x03.\x05.\u03FD\n.\x03.\x03.\x03/\x03/\x03/\x06/" +
		"\u0404\n/\r/\x0E/\u0405\x06/\u0408\n/\r/\x0E/\u0409\x030\x030\x030\x05" +
		"0\u040F\n0\x031\x031\x071\u0413\n1\f1\x0E1\u0416\v1\x031\x031\x071\u041A" +
		"\n1\f1\x0E1\u041D\v1\x031\x031\x051\u0421\n1\x031\x031\x071\u0425\n1\f" +
		"1\x0E1\u0428\v1\x031\x031\x071\u042C\n1\f1\x0E1\u042F\v1\x031\x031\x07" +
		"1\u0433\n1\f1\x0E1\u0436\v1\x031\x031\x032\x072\u043B\n2\f2\x0E2\u043E" +
		"\v2\x032\x032\x072\u0442\n2\f2\x0E2\u0445\v2\x032\x02\x02\x023\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02\x02" +
		"\f\x04\x02!!##\x06\x02  \"\"$$))\x03\x02$&\x04\x02  \"\"\x03\x0236\x03" +
		"\x0212\x03\x02+0\x03\x02\b\t\x03\x02\x1A\x1B\x03\x02\r\x0E\x02\u04BC\x02" +
		"o\x03\x02\x02\x02\x04\xAE\x03\x02\x02\x02\x06\xB0\x03\x02\x02\x02\b\xCD" +
		"\x03\x02\x02\x02\n\xE2\x03\x02\x02\x02\f\xE6\x03\x02\x02\x02\x0E\xE8\x03" +
		"\x02\x02\x02\x10\u0102\x03\x02\x02\x02\x12\u011C\x03\x02\x02\x02\x14\u0136" +
		"\x03\x02\x02\x02\x16\u0150\x03\x02\x02\x02\x18\u016A\x03\x02\x02\x02\x1A" +
		"\u0184\x03\x02\x02\x02\x1C\u01BA\x03\x02\x02\x02\x1E\u01BC\x03\x02\x02" +
		"\x02 \u01BE\x03\x02\x02\x02\"\u01D8\x03\x02\x02\x02$\u01DA\x03\x02\x02" +
		"\x02&\u01E4\x03\x02\x02\x02(\u01ED\x03\x02\x02\x02*\u01F1\x03\x02\x02" +
		"\x02,\u01F3\x03\x02\x02\x02.\u0218\x03\x02\x02\x020\u022A\x03\x02\x02" +
		"\x022\u0231\x03\x02\x02\x024\u0233\x03\x02\x02\x026\u0248\x03\x02\x02" +
		"\x028\u024B\x03\x02\x02\x02:\u0262\x03\x02\x02\x02<\u027C\x03\x02\x02" +
		"\x02>\u02A7\x03\x02\x02\x02@\u02AA\x03\x02\x02\x02B\u02D5\x03\x02\x02" +
		"\x02D\u02DF\x03\x02\x02\x02F\u02FB\x03\x02\x02\x02H\u0303\x03\x02\x02" +
		"\x02J\u032B\x03\x02\x02\x02L\u032D\x03\x02\x02\x02N\u0340\x03\x02\x02" +
		"\x02P\u0347\x03\x02\x02\x02R\u0355\x03\x02\x02\x02T\u03A4\x03\x02\x02" +
		"\x02V\u03EA\x03\x02\x02\x02X\u03F7\x03\x02\x02\x02Z\u03FC\x03\x02\x02" +
		"\x02\\\u0407\x03\x02\x02\x02^\u040E\x03\x02\x02\x02`\u0410\x03\x02\x02" +
		"\x02b\u043C\x03\x02\x02\x02dp\x078\x02\x02ep\x079\x02\x02fh\x07;\x02\x02" +
		"gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02" +
		"jp\x03\x02\x02\x02kl\x07\x1A\x02\x02lm\x05 \x11\x02mn\x07\x1B\x02\x02" +
		"np\x03\x02\x02\x02od\x03\x02\x02\x02oe\x03\x02\x02\x02og\x03\x02\x02\x02" +
		"ok\x03\x02\x02\x02p\x03\x03\x02\x02\x02qu\x05\x02\x02\x02rt\x07=\x02\x02" +
		"sr\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02" +
		"v\x8B\x03\x02\x02\x02wu\x03\x02\x02\x02x|\x07\x1C\x02\x02y{\x07=\x02\x02" +
		"zy\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02" +
		"}\x7F\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x83\x05 \x11\x02\x80\x82\x07" +
		"=\x02\x02\x81\x80\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85\x83\x03" +
		"\x02\x02\x02\x86\x87\x07\x1D\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x8A\t" +
		"\x02\x02\x02\x89x\x03\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x8D\x03" +
		"\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\xAF\x03" +
		"\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x92\x07\x17\x02\x02\x8F\x91\x07" +
		"=\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03" +
		"\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02\x02\x02\x94\x92\x03" +
		"\x02\x02\x02\x95\x99\x05\x02\x02\x02\x96\x98\x07=\x02\x02\x97\x96\x03" +
		"\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03" +
		"\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\xA0\x07" +
		"\x1A\x02\x02\x9D\x9F\x07=\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03" +
		"\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA4\x03" +
		"\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA5\x05\x06\x04\x02\xA4\xA3\x03" +
		"\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\xA9\x03\x02\x02\x02\xA6\xA8\x07" +
		"=\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03" +
		"\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA9\x03" +
		"\x02\x02\x02\xAC\xAD\x07\x1B\x02\x02\xAD\xAF\x03\x02\x02\x02\xAEq\x03" +
		"\x02\x02\x02\xAE\x8E\x03\x02\x02\x02\xAF\x05\x03\x02\x02\x02\xB0\xB4\x05" +
		"\x1C\x0F\x02\xB1\xB3\x07=\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03" +
		"\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xC7\x03" +
		"\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xBB\x07*\x02\x02\xB8\xBA\x07" +
		"=\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03" +
		"\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03" +
		"\x02\x02\x02\xBE\xC2\x05\x1C\x0F\x02\xBF\xC1\x07=\x02\x02\xC0\xBF\x03" +
		"\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03" +
		"\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xB7\x03" +
		"\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03" +
		"\x02\x02\x02\xC8\x07\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCC\t" +
		"\x02\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03" +
		"\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD3\x03\x02\x02\x02\xCF\xCD\x03" +
		"\x02\x02\x02\xD0\xD2\x07=\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD5\x03" +
		"\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xE0\x03" +
		"\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xE1\x05\x04\x03\x02\xD7\xDB\x05" +
		"\n\x06\x02\xD8\xDA\x07=\x02\x02\xD9\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02" +
		"\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02" +
		"\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xDF\x05\f\x07\x02\xDF\xE1\x03\x02" +
		"\x02\x02\xE0\xD6\x03\x02\x02\x02\xE0\xD7\x03\x02\x02\x02\xE1\t\x03\x02" +
		"\x02\x02\xE2\xE3\t\x03\x02\x02\xE3\v\x03\x02\x02\x02\xE4\xE7\x05\b\x05" +
		"\x02\xE5\xE7\x07:\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE5\x03\x02\x02" +
		"\x02\xE7\r\x03\x02\x02\x02\xE8\xEC\x05\f\x07\x02\xE9\xEB\x07=\x02\x02" +
		"\xEA\xE9\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02" +
		"\xEC\xED\x03\x02\x02\x02\xED\xFF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02" +
		"\xEF\xF3\t\x04\x02\x02\xF0\xF2\x07=\x02\x02\xF1\xF0\x03\x02\x02\x02\xF2" +
		"\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4" +
		"\xF6\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xFA\x05\f\x07\x02\xF7" +
		"\xF9\x07=\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA" +
		"\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC" +
		"\xFA\x03\x02\x02\x02\xFD\xEF\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02" +
		"\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\x0F\x03\x02\x02" +
		"\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0106\x05\x0E\b\x02\u0103\u0105\x07" +
		"=\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106" +
		"\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0119\x03\x02" +
		"\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010D\t\x05\x02\x02\u010A\u010C" +
		"\x07=\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02" +
		"\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0110\x03" +
		"\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0114\x05\x0E\b\x02\u0111" +
		"\u0113\x07=\x02\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0116\x03\x02\x02" +
		"\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0118" +
		"\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\u0109\x03\x02\x02\x02" +
		"\u0118\u011B\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03" +
		"\x02\x02\x02\u011A\x11\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C" +
		"\u0120\x05\x10\t\x02\u011D\u011F\x07=\x02\x02\u011E\u011D\x03\x02\x02" +
		"\x02\u011F\u0122\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121" +
		"\x03\x02\x02\x02\u0121\u0133\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02" +
		"\u0123\u0127\t\x06\x02\x02\u0124\u0126\x07=\x02\x02\u0125\u0124\x03\x02" +
		"\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127" +
		"\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u0127\x03\x02" +
		"\x02\x02\u012A\u012E\x05\x10\t\x02\u012B\u012D\x07=\x02\x02\u012C\u012B" +
		"\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02" +
		"\u012E\u012F\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130\u012E\x03" +
		"\x02\x02\x02\u0131\u0123\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\x13\x03\x02\x02" +
		"\x02\u0135\u0133\x03\x02\x02\x02\u0136\u013A\x05\x12\n\x02\u0137\u0139" +
		"\x07=\x02\x02\u0138\u0137\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02" +
		"\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u014D\x03" +
		"\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u0141\t\x07\x02\x02\u013E" +
		"\u0140\x07=\x02\x02\u013F\u013E\x03\x02\x02\x02\u0140\u0143\x03\x02\x02" +
		"\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0144" +
		"\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0148\x05\x12\n\x02" +
		"\u0145\u0147\x07=\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147\u014A\x03" +
		"\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149" +
		"\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B\u013D\x03\x02" +
		"\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D" +
		"\u014E\x03\x02\x02\x02\u014E\x15\x03\x02\x02\x02\u014F\u014D\x03\x02\x02" +
		"\x02\u0150\u0154\x05\x14\v\x02\u0151\u0153\x07=\x02\x02\u0152\u0151\x03" +
		"\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154" +
		"\u0155\x03\x02\x02\x02\u0155\u0167\x03\x02\x02\x02\u0156\u0154\x03\x02" +
		"\x02\x02\u0157\u015B\x07\'\x02\x02\u0158\u015A\x07=\x02\x02\u0159\u0158" +
		"\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02" +
		"\u015B\u015C\x03\x02\x02\x02\u015C\u015E\x03\x02\x02\x02\u015D\u015B\x03" +
		"\x02\x02\x02\u015E\u0162\x05\x14\v\x02\u015F\u0161\x07=\x02\x02\u0160" +
		"\u015F\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02" +
		"\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164" +
		"\u0162\x03\x02\x02\x02\u0165\u0157\x03\x02\x02\x02\u0166\u0169\x03\x02" +
		"\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
		"\x17\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016E\x05\x16\f" +
		"\x02\u016B\u016D\x07=\x02\x02\u016C\u016B\x03\x02\x02\x02\u016D\u0170" +
		"\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02" +
		"\u016F\u0181\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0175\x07" +
		"(\x02\x02\u0172\u0174\x07=\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0177" +
		"\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02" +
		"\u0176\u0178\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u017C\x05" +
		"\x16\f\x02\u0179\u017B\x07=\x02\x02\u017A\u0179\x03\x02\x02\x02\u017B" +
		"\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02" +
		"\x02\x02\u017D\u0180\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F" +
		"\u0171\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02" +
		"\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\x19\x03\x02\x02\x02\u0183\u0181" +
		"\x03\x02\x02\x02\u0184\u0188\x05\x18\r\x02\u0185\u0187\x07=\x02\x02\u0186" +
		"\u0185\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02" +
		"\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u01A7\x03\x02\x02\x02\u018A" +
		"\u0188\x03\x02\x02\x02\u018B\u018F\x07\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u018C\u018E\x07=\x02\x02\u018D\u018C\x03\x02\x02\x02\u018E\u0191" +
		"\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02" +
		"\u0190\u0192\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0192\u0196\x05" +
		" \x11\x02\u0193\u0195\x07=\x02\x02\u0194\u0193\x03\x02\x02\x02\u0195\u0198" +
		"\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02" +
		"\u0197\u0199\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019D\x07" +
		"\x04\x02\x02\u019A\u019C\x07=\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C" +
		"\u019F\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02" +
		"\x02\x02\u019E\u01A0\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0" +
		"\u01A4\x05\x1A\x0E\x02\u01A1\u01A3\x07=\x02\x02\u01A2\u01A1\x03\x02\x02" +
		"\x02\u01A3\u01A6\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5" +
		"\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02" +
		"\u01A7\u018B\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\x1B\x03" +
		"\x02\x02\x02\u01A9\u01BB\x05\x1A\x0E\x02\u01AA\u01AE\x05\b\x05\x02\u01AB" +
		"\u01AD\x07=\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02" +
		"\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B1" +
		"\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B5\x05\x1E\x10\x02" +
		"\u01B2\u01B4\x07=\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B7\x03" +
		"\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6" +
		"\u01B8\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B8\u01B9\x05\x1C" +
		"\x0F\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01A9\x03\x02\x02\x02\u01BA" +
		"\u01AA\x03\x02\x02\x02\u01BB\x1D\x03\x02\x02\x02\u01BC\u01BD\t\b\x02\x02" +
		"\u01BD\x1F\x03\x02\x02\x02\u01BE\u01C2\x05\x1C\x0F\x02\u01BF\u01C1\x07" +
		"=\x02\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2" +
		"\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01D5\x03\x02" +
		"\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C9\x07*\x02\x02\u01C6\u01C8" +
		"\x07=\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02" +
		"\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CC\x03" +
		"\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01D0\x05\x1C\x0F\x02\u01CD" +
		"\u01CF\x07=\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02" +
		"\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D4" +
		"\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01C5\x03\x02\x02\x02" +
		"\u01D4\u01D7\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03" +
		"\x02\x02\x02\u01D6!\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D8" +
		"\u01D9\x05\x1A\x0E\x02\u01D9#\x03\x02\x02\x02\u01DA\u01DE\x05&\x14\x02" +
		"\u01DB\u01DD\x07=\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD\u01E0\x03" +
		"\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
		"\u01E1\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E2\x05,\x17" +
		"\x02\u01E2\u01E3\x05b2\x02\u01E3%\x03\x02\x02\x02\u01E4\u01E5\t\t\x02" +
		"\x02\u01E5\'\x03\x02\x02\x02\u01E6\u01EA\x05*\x16\x02\u01E7\u01E9\x07" +
		"=\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E9\u01EC\x03\x02\x02\x02\u01EA" +
		"\u01E8\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EE\x03\x02" +
		"\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01E6\x03\x02\x02\x02\u01EE" +
		"\u01EF\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02" +
		"\x02\x02\u01F0)\x03\x02\x02\x02\u01F1\u01F2\x050\x19\x02\u01F2+\x03\x02" +
		"\x02\x02\u01F3\u01F7\x052\x1A\x02\u01F4\u01F6\x07=\x02\x02\u01F5\u01F4" +
		"\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02" +
		"\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F7\x03" +
		"\x02\x02\x02\u01FA\u01FE\x07\x04\x02\x02\u01FB\u01FD\x07=\x02\x02\u01FC" +
		"\u01FB\x03\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02\u01FE\u01FC\x03\x02" +
		"\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0201\x03\x02\x02\x02\u0200" +
		"\u01FE\x03\x02\x02\x02\u0201\u0205\x050\x19\x02\u0202\u0204\x07=\x02\x02" +
		"\u0203\u0202\x03\x02\x02\x02\u0204\u0207\x03\x02\x02\x02\u0205\u0203\x03" +
		"\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0216\x03\x02\x02\x02\u0207" +
		"\u0205\x03\x02\x02\x02\u0208\u020C\x07+\x02\x02\u0209\u020B\x07=\x02\x02" +
		"\u020A\u0209\x03\x02\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020A\x03" +
		"\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020F\x03\x02\x02\x02\u020E" +
		"\u020C\x03\x02\x02\x02\u020F\u0213\x05> \x02\u0210\u0212\x07=\x02\x02" +
		"\u0211\u0210\x03\x02\x02\x02\u0212\u0215\x03\x02\x02\x02\u0213\u0211\x03" +
		"\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0217\x03\x02\x02\x02\u0215" +
		"\u0213\x03\x02\x02\x02\u0216\u0208\x03\x02\x02\x02\u0216\u0217\x03\x02" +
		"\x02\x02\u0217-\x03\x02\x02\x02\u0218\u021C\x07\x1C\x02\x02\u0219\u021B" +
		"\x07=\x02\x02\u021A\u0219\x03\x02\x02\x02\u021B\u021E\x03\x02\x02\x02" +
		"\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D\u0220\x03" +
		"\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F\u0221\x05\x1C\x0F\x02\u0220" +
		"\u021F\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0225\x03\x02" +
		"\x02\x02\u0222\u0224\x07=\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224\u0227" +
		"\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02" +
		"\u0226\u0228\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u0229\x07" +
		"\x1D\x02\x02\u0229/\x03\x02\x02\x02\u022A\u022E\x078\x02\x02\u022B\u022D" +
		"\x05.\x18\x02\u022C\u022B\x03\x02\x02\x02\u022D\u0230\x03\x02\x02\x02" +
		"\u022E\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F1\x03\x02" +
		"\x02\x02\u0230\u022E\x03\x02\x02\x02\u0231\u0232\x054\x1B\x02\u02323\x03" +
		"\x02\x02\x02\u0233\u0234\x078\x02\x02\u02345\x03\x02\x02\x02\u0235\u0247" +
		"\n\n\x02\x02\u0236\u023A\x07\x1A\x02\x02\u0237\u0239\x07=\x02\x02\u0238" +
		"\u0237\x03\x02\x02\x02\u0239\u023C\x03\x02\x02\x02\u023A\u0238\x03\x02" +
		"\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023D\x03\x02\x02\x02\u023C" +
		"\u023A\x03\x02\x02\x02\u023D\u0241\x056\x1C\x02\u023E\u0240\x07=\x02\x02" +
		"\u023F\u023E\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u023F\x03" +
		"\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0244\x03\x02\x02\x02\u0243" +
		"\u0241\x03\x02\x02\x02\u0244\u0245\x07\x1B\x02\x02\u0245\u0247\x03\x02" +
		"\x02\x02\u0246\u0235\x03\x02\x02\x02\u0246\u0236\x03\x02\x02\x02\u0247" +
		"\u024A\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0248\u0249\x03\x02" +
		"\x02\x02\u02497\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024B\u024F" +
		"\x05:\x1E\x02\u024C\u024E\x07=\x02\x02\u024D\u024C\x03\x02\x02\x02\u024E" +
		"\u0251\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u024F\u0250\x03\x02" +
		"\x02\x02\u0250\u0260\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252" +
		"\u0256\x07*\x02\x02\u0253\u0255\x07=\x02\x02\u0254\u0253\x03\x02\x02\x02" +
		"\u0255\u0258\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0257\x03" +
		"\x02\x02\x02\u0257\u0259\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0259" +
		"\u025D\x07\x05\x02\x02\u025A\u025C\x07=\x02\x02\u025B\u025A\x03\x02\x02" +
		"\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D\u025E" +
		"\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02" +
		"\u0260\u0252\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u02619\x03\x02" +
		"\x02\x02\u0262\u0266\x05<\x1F\x02\u0263\u0265\x07=\x02\x02\u0264\u0263" +
		"\x03\x02\x02\x02\u0265\u0268\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02" +
		"\u0266\u0267\x03\x02\x02\x02\u0267\u0279\x03\x02\x02\x02\u0268\u0266\x03" +
		"\x02\x02\x02\u0269\u026D\x07*\x02\x02\u026A\u026C\x07=\x02\x02\u026B\u026A" +
		"\x03\x02\x02\x02\u026C\u026F\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02" +
		"\u026D\u026E\x03\x02\x02\x02\u026E\u0270\x03\x02\x02\x02\u026F\u026D\x03" +
		"\x02\x02\x02\u0270\u0274\x05<\x1F\x02\u0271\u0273\x07=\x02\x02\u0272\u0271" +
		"\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02" +
		"\u0274\u0275\x03\x02\x02\x02\u0275\u0278\x03\x02\x02\x02\u0276\u0274\x03" +
		"\x02\x02\x02\u0277\u0269\x03\x02\x02\x02\u0278\u027B\x03\x02\x02\x02\u0279" +
		"\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A;\x03\x02\x02" +
		"\x02\u027B\u0279\x03\x02\x02\x02\u027C\u0280\x052\x1A\x02\u027D\u027F" +
		"\x07=\x02\x02\u027E\u027D\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02" +
		"\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0283\x03" +
		"\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283\u0287\x07\x04\x02\x02\u0284" +
		"\u0286\x07=\x02\x02\u0285\u0284\x03\x02\x02\x02\u0286\u0289\x03\x02\x02" +
		"\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u028A" +
		"\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u028A\u028B\x05(\x15\x02" +
		"\u028B=\x03\x02\x02\x02\u028C\u02A8\x05\x1C\x0F\x02\u028D\u0291\x07\x1E" +
		"\x02\x02\u028E\u0290\x07=\x02\x02\u028F\u028E\x03\x02\x02\x02\u0290\u0293" +
		"\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02" +
		"\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0296\x05" +
		"@!\x02\u0295\u0294\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u029A" +
		"\x03\x02\x02\x02\u0297\u0299\x07=\x02\x02\u0298\u0297\x03\x02\x02\x02" +
		"\u0299\u029C\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029A\u029B\x03" +
		"\x02\x02\x02\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D" +
		"\u029F\x07*\x02\x02\u029E\u029D\x03\x02\x02\x02\u029E\u029F\x03\x02\x02" +
		"\x02\u029F\u02A3\x03\x02\x02\x02\u02A0\u02A2\x07=\x02\x02\u02A1\u02A0" +
		"\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02" +
		"\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02A6\x03\x02\x02\x02\u02A5\u02A3\x03" +
		"\x02\x02\x02\u02A6\u02A8\x07\x1F\x02\x02\u02A7\u028C\x03\x02\x02\x02\u02A7" +
		"\u028D\x03\x02\x02\x02\u02A8?\x03\x02\x02\x02\u02A9\u02AB\x05B\"\x02\u02AA" +
		"\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AF\x03\x02" +
		"\x02\x02\u02AC\u02AE\x07=\x02\x02\u02AD\u02AC\x03\x02\x02\x02\u02AE\u02B1" +
		"\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02" +
		"\u02B0\u02B2\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02B6\x05" +
		"> \x02\u02B3\u02B5\x07=\x02\x02\u02B4\u02B3\x03\x02\x02\x02\u02B5\u02B8" +
		"\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02" +
		"\u02B7\u02D2\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B9\u02BD\x07" +
		"*\x02\x02\u02BA\u02BC\x07=\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC\u02BF" +
		"\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02" +
		"\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C2\x05" +
		"B\"\x02\u02C1\u02C0\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2" +
		"\u02C6\x03\x02\x02\x02\u02C3\u02C5\x07=\x02\x02\u02C4\u02C3\x03\x02\x02" +
		"\x02\u02C5\u02C8\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C7" +
		"\x03\x02\x02\x02\u02C7\u02C9\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02" +
		"\u02C9\u02CD\x05> \x02\u02CA\u02CC\x07=\x02\x02\u02CB\u02CA\x03\x02\x02" +
		"\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE" +
		"\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02" +
		"\u02D0\u02B9\x03\x02\x02\x02\u02D1\u02D4\x03\x02\x02\x02\u02D2\u02D0\x03" +
		"\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3A\x03\x02\x02\x02\u02D4" +
		"\u02D2\x03\x02\x02\x02\u02D5\u02D9\x05D#\x02\u02D6\u02D8\x07=\x02\x02" +
		"\u02D7\u02D6\x03\x02\x02\x02\u02D8\u02DB\x03\x02\x02\x02\u02D9\u02D7\x03" +
		"\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA\u02DC\x03\x02\x02\x02\u02DB" +
		"\u02D9\x03\x02\x02\x02\u02DC\u02DD\x07+\x02\x02\u02DDC\x03\x02\x02\x02" +
		"\u02DE\u02E0\x05F$\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0\u02E1\x03\x02" +
		"\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2" +
		"E\x03\x02\x02\x02\u02E3\u02E7\x07\x1C\x02\x02\u02E4\u02E6\x07=\x02\x02" +
		"\u02E5\u02E4\x03\x02\x02\x02\u02E6\u02E9\x03\x02\x02\x02\u02E7\u02E5\x03" +
		"\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\u02EA\x03\x02\x02\x02\u02E9" +
		"\u02E7\x03\x02\x02\x02\u02EA\u02EE\x05\"\x12\x02\u02EB\u02ED\x07=\x02" +
		"\x02\u02EC\u02EB\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC" +
		"\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1\x03\x02\x02\x02" +
		"\u02F0\u02EE\x03\x02\x02\x02\u02F1\u02F2\x07\x1D\x02\x02\u02F2\u02FC\x03" +
		"\x02\x02\x02\u02F3\u02F7\x077\x02\x02\u02F4\u02F6\x07=\x02\x02\u02F5\u02F4" +
		"\x03\x02\x02\x02\u02F6\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02" +
		"\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02FA\x03\x02\x02\x02\u02F9\u02F7\x03" +
		"\x02\x02\x02\u02FA\u02FC\x078\x02\x02\u02FB\u02E3\x03\x02\x02\x02\u02FB" +
		"\u02F3\x03\x02\x02\x02\u02FCG\x03\x02\x02\x02\u02FD\u0304\x05J&\x02\u02FE" +
		"\u0304\x05L\'\x02\u02FF\u0304\x05R*\x02\u0300\u0304\x05T+\x02\u0301\u0304" +
		"\x05V,\x02\u0302\u0304\x05X-\x02\u0303\u02FD\x03\x02\x02\x02\u0303\u02FE" +
		"\x03\x02\x02\x02\u0303\u02FF\x03\x02\x02\x02\u0303\u0300\x03\x02\x02\x02" +
		"\u0303\u0301\x03\x02\x02\x02\u0303\u0302\x03\x02\x02\x02\u0304I\x03\x02" +
		"\x02\x02\u0305\u0309\x07\v\x02\x02\u0306\u0308\x07=\x02\x02\u0307\u0306" +
		"\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02" +
		"\u0309\u030A\x03\x02\x02\x02\u030A\u030C\x03\x02\x02\x02\u030B\u0309\x03" +
		"\x02\x02\x02\u030C\u0310\x05\"\x12\x02\u030D\u030F\x07=\x02\x02\u030E" +
		"\u030D\x03\x02\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E\x03\x02" +
		"\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311\u0313\x03\x02\x02\x02\u0312" +
		"\u0310\x03\x02\x02\x02\u0313\u0317\x07\x04\x02\x02\u0314\u0316\x07=\x02" +
		"\x02\u0315\u0314\x03\x02\x02\x02\u0316\u0319\x03\x02\x02\x02\u0317\u0315" +
		"\x03\x02\x02\x02\u0317\u0318\x03\x02\x02\x02\u0318\u031A\x03\x02\x02\x02" +
		"\u0319\u0317\x03\x02\x02\x02\u031A\u031B\x05H%\x02\u031B\u032C\x03\x02" +
		"\x02\x02\u031C\u0320\x07\f\x02\x02\u031D\u031F\x07=\x02\x02\u031E\u031D" +
		"\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02" +
		"\u0320\u0321\x03\x02\x02\x02\u0321\u0323\x03\x02\x02\x02\u0322\u0320\x03" +
		"\x02\x02\x02\u0323\u0327\x07\x04\x02\x02\u0324\u0326\x07=\x02\x02\u0325" +
		"\u0324\x03\x02\x02\x02\u0326\u0329\x03\x02\x02\x02\u0327\u0325\x03\x02" +
		"\x02\x02\u0327\u0328\x03\x02\x02\x02\u0328\u032A\x03\x02\x02\x02\u0329" +
		"\u0327\x03\x02\x02\x02\u032A\u032C\x05H%\x02\u032B\u0305\x03\x02\x02\x02" +
		"\u032B\u031C\x03\x02\x02\x02\u032CK\x03\x02\x02\x02\u032D\u0331\x07\x1E" +
		"\x02\x02\u032E\u0330\x07=\x02\x02\u032F\u032E\x03\x02\x02\x02\u0330\u0333" +
		"\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02" +
		"\u0332\u0335\x03\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0336\x05" +
		"N(\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u033A" +
		"\x03\x02\x02\x02\u0337\u0339\x07=\x02\x02\u0338\u0337\x03\x02\x02\x02" +
		"\u0339\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033A\u033B\x03" +
		"\x02\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033D" +
		"\u033E\x07\x1F\x02\x02\u033EM\x03\x02\x02\x02\u033F\u0341\x05P)\x02\u0340" +
		"\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0340\x03\x02" +
		"\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343O\x03\x02\x02\x02\u0344\u0346" +
		"\x07=\x02\x02\u0345\u0344\x03\x02\x02\x02\u0346\u0349\x03\x02\x02\x02" +
		"\u0347\u0345\x03\x02\x02\x02\u0347\u0348\x03\x02\x02\x02\u0348\u034C\x03" +
		"\x02\x02\x02\u0349\u0347\x03\x02\x02\x02\u034A\u034D\x05H%\x02\u034B\u034D" +
		"\x05$\x13\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034B\x03\x02\x02\x02" +
		"\u034D\u0351\x03\x02\x02\x02\u034E\u0350\x07=\x02\x02\u034F\u034E\x03" +
		"\x02\x02\x02\u0350\u0353\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351" +
		"\u0352\x03\x02\x02\x02\u0352Q\x03\x02\x02\x02\u0353\u0351\x03\x02\x02" +
		"\x02\u0354\u0356\x05 \x11\x02\u0355\u0354\x03\x02\x02\x02\u0355\u0356" +
		"\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0358\x05b2\x02\u0358" +
		"S\x03\x02\x02\x02\u0359\u035D\x07\x11\x02\x02\u035A\u035C\x07=\x02\x02" +
		"\u035B\u035A\x03\x02\x02\x02\u035C\u035F\x03\x02\x02\x02\u035D\u035B\x03" +
		"\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0360\x03\x02\x02\x02\u035F" +
		"\u035D\x03\x02\x02\x02\u0360\u0364\x07\x1A\x02\x02\u0361\u0363\x07=\x02" +
		"\x02\u0362\u0361\x03\x02\x02\x02\u0363\u0366\x03\x02\x02\x02\u0364\u0362" +
		"\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0367\x03\x02\x02\x02" +
		"\u0366\u0364\x03\x02\x02\x02\u0367\u036B\x05 \x11\x02\u0368\u036A\x07" +
		"=\x02\x02\u0369\u0368\x03\x02\x02\x02\u036A\u036D\x03\x02\x02\x02\u036B" +
		"\u0369\x03\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036E\x03\x02" +
		"\x02\x02\u036D\u036B\x03\x02\x02\x02\u036E\u0372\x07\x1B\x02\x02\u036F" +
		"\u0371\x07=\x02\x02\u0370\u036F\x03\x02\x02\x02\u0371\u0374\x03\x02\x02" +
		"\x02\u0372\u0370\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0375" +
		"\x03\x02\x02\x02\u0374\u0372\x03\x02\x02\x02\u0375\u0379\x05H%\x02\u0376" +
		"\u0378\x07=\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037B\x03\x02\x02" +
		"\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u0384" +
		"\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C\u0380\x07\x12\x02\x02" +
		"\u037D\u037F\x07=\x02\x02\u037E\u037D\x03\x02\x02\x02\u037F\u0382\x03" +
		"\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381" +
		"\u0383\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0383\u0385\x05H%\x02" +
		"\u0384\u037C\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u03A5\x03" +
		"\x02\x02\x02\u0386\u038A\x07\n\x02\x02\u0387\u0389\x07=\x02\x02\u0388" +
		"\u0387\x03\x02\x02\x02\u0389\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02" +
		"\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C" +
		"\u038A\x03\x02\x02\x02\u038D\u0391\x07\x1A\x02\x02\u038E\u0390\x07=\x02" +
		"\x02\u038F\u038E\x03\x02\x02\x02\u0390\u0393\x03\x02\x02\x02\u0391\u038F" +
		"\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0394\x03\x02\x02\x02" +
		"\u0393\u0391\x03\x02\x02\x02\u0394\u0398\x05 \x11\x02\u0395\u0397\x07" +
		"=\x02\x02\u0396\u0395\x03\x02\x02\x02\u0397\u039A\x03\x02\x02\x02\u0398" +
		"\u0396\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039B\x03\x02" +
		"\x02\x02\u039A\u0398\x03\x02\x02\x02\u039B\u039F\x07\x1B\x02\x02\u039C" +
		"\u039E\x07=\x02\x02\u039D\u039C\x03\x02\x02\x02\u039E\u03A1\x03\x02\x02" +
		"\x02\u039F\u039D\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A2" +
		"\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A2\u03A3\x05H%\x02\u03A3" +
		"\u03A5\x03\x02\x02\x02\u03A4\u0359\x03\x02\x02\x02\u03A4\u0386\x03\x02" +
		"\x02\x02\u03A5U\x03\x02\x02\x02\u03A6\u03AA\x07\x10\x02\x02\u03A7\u03A9" +
		"\x07=\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02" +
		"\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AD\x03" +
		"\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD\u03B1\x07\x1A\x02\x02\u03AE" +
		"\u03B0\x07=\x02\x02\u03AF\u03AE\x03\x02\x02\x02\u03B0\u03B3\x03\x02\x02" +
		"\x02\u03B1\u03AF\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B4" +
		"\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B4\u03B8\x05 \x11\x02" +
		"\u03B5\u03B7\x07=\x02\x02\u03B6\u03B5\x03\x02\x02\x02\u03B7\u03BA\x03" +
		"\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9" +
		"\u03BB\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BB\u03BF\x07\x1B" +
		"\x02\x02\u03BC\u03BE\x07=\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BE\u03C1" +
		"\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02" +
		"\u03C0\u03C2\x03\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03C3\x05" +
		"H%\x02\u03C3\u03EB\x03\x02\x02\x02\u03C4\u03C8\x07\x0F\x02\x02\u03C5\u03C7" +
		"\x07=\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u03CA\x03\x02\x02\x02" +
		"\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CB\x03" +
		"\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CB\u03CF\x05H%\x02\u03CC\u03CE" +
		"\x07=\x02\x02\u03CD\u03CC\x03\x02\x02\x02\u03CE\u03D1\x03\x02\x02\x02" +
		"\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03D2\x03" +
		"\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03D6\x07\x10\x02\x02\u03D3" +
		"\u03D5\x07=\x02\x02\u03D4\u03D3\x03\x02\x02\x02\u03D5\u03D8\x03\x02\x02" +
		"\x02\u03D6\u03D4\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D9" +
		"\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D9\u03DD\x07\x1A\x02\x02" +
		"\u03DA\u03DC\x07=\x02\x02\u03DB\u03DA\x03\x02\x02\x02\u03DC\u03DF\x03" +
		"\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE" +
		"\u03E0\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03E0\u03E4\x05 \x11" +
		"\x02\u03E1\u03E3\x07=\x02\x02\u03E2\u03E1\x03\x02\x02\x02\u03E3\u03E6" +
		"\x03\x02\x02\x02\u03E4\u03E2\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02" +
		"\u03E5\u03E7\x03\x02\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E7\u03E8\x07" +
		"\x1B\x02\x02\u03E8\u03E9\x05b2\x02\u03E9\u03EB\x03\x02\x02\x02\u03EA\u03A6" +
		"\x03\x02\x02\x02\u03EA\u03C4\x03\x02\x02\x02\u03EBW\x03\x02\x02\x02\u03EC" +
		"\u03F8\t\v\x02\x02\u03ED\u03F1\x07\x16\x02\x02\u03EE\u03F0\x07=\x02\x02" +
		"\u03EF\u03EE\x03\x02\x02\x02\u03F0\u03F3\x03\x02\x02\x02\u03F1\u03EF\x03" +
		"\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F5\x03\x02\x02\x02\u03F3" +
		"\u03F1\x03\x02\x02\x02\u03F4\u03F6\x05 \x11\x02\u03F5\u03F4\x03\x02\x02" +
		"\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03F8\x03\x02\x02\x02\u03F7\u03EC" +
		"\x03\x02\x02\x02\u03F7\u03ED\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02" +
		"\u03F9\u03FA\x05b2\x02\u03FAY\x03\x02\x02\x02\u03FB\u03FD\x05\\/\x02\u03FC" +
		"\u03FB\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u03FE\x03\x02" +
		"\x02\x02\u03FE\u03FF\x07\x02\x02\x03\u03FF[\x03\x02\x02\x02\u0400\u0408" +
		"\x05^0\x02\u0401\u0408\x05b2\x02\u0402\u0404\x07=\x02\x02\u0403\u0402" +
		"\x03\x02\x02\x02\u0404\u0405\x03\x02\x02\x02\u0405\u0403\x03\x02\x02\x02" +
		"\u0405\u0406\x03\x02\x02\x02\u0406\u0408\x03\x02\x02\x02\u0407\u0400\x03" +
		"\x02\x02\x02\u0407\u0401\x03\x02\x02\x02\u0407\u0403\x03\x02\x02\x02\u0408" +
		"\u0409\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02" +
		"\x02\x02\u040A]\x03\x02\x02\x02\u040B\u040F\x05`1\x02\u040C\u040F\x05" +
		"$\x13\x02\u040D\u040F\x05P)\x02\u040E\u040B\x03\x02\x02\x02\u040E\u040C" +
		"\x03\x02\x02\x02\u040E\u040D\x03\x02\x02\x02\u040F_\x03\x02\x02\x02\u0410" +
		"\u0414\x07\x15\x02\x02\u0411\u0413\x07=\x02\x02\u0412\u0411\x03\x02\x02" +
		"\x02\u0413\u0416\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0414\u0415" +
		"\x03\x02\x02\x02\u0415\u0417\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02" +
		"\u0417\u041B\x052\x1A\x02\u0418\u041A\x07=\x02\x02\u0419\u0418\x03\x02" +
		"\x02\x02\u041A\u041D\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041B" +
		"\u041C\x03\x02\x02\x02\u041C\u041E\x03\x02\x02\x02\u041D\u041B\x03\x02" +
		"\x02\x02\u041E\u0420\x07\x1A\x02\x02\u041F\u0421\x058\x1D\x02\u0420\u041F" +
		"\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0422\x03\x02\x02\x02" +
		"\u0422\u0426\x07\x1B\x02\x02\u0423\u0425\x07=\x02\x02\u0424\u0423\x03" +
		"\x02\x02\x02\u0425\u0428\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0426" +
		"\u0427\x03\x02\x02\x02\u0427\u0429\x03\x02\x02\x02\u0428\u0426\x03\x02" +
		"\x02\x02\u0429\u042D\x07\x06\x02\x02\u042A\u042C\x07=\x02\x02\u042B\u042A" +
		"\x03\x02\x02\x02\u042C\u042F\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02" +
		"\u042D\u042E\x03\x02\x02\x02\u042E\u0430\x03\x02\x02\x02\u042F\u042D\x03" +
		"\x02\x02\x02\u0430\u0434\x050\x19\x02\u0431\u0433\x07=\x02\x02\u0432\u0431" +
		"\x03\x02\x02\x02\u0433\u0436\x03\x02\x02\x02\u0434\u0432\x03\x02\x02\x02" +
		"\u0434\u0435\x03\x02\x02\x02\u0435\u0437\x03\x02\x02\x02\u0436\u0434\x03" +
		"\x02\x02\x02\u0437\u0438\x05L\'\x02\u0438a\x03\x02\x02\x02\u0439\u043B" +
		"\x07>\x02\x02\u043A\u0439\x03\x02\x02\x02\u043B\u043E\x03\x02\x02\x02" +
		"\u043C\u043A\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043F\x03" +
		"\x02\x02\x02\u043E\u043C\x03\x02\x02\x02\u043F\u0443\x07\x07\x02\x02\u0440" +
		"\u0442\x07>\x02\x02\u0441\u0440\x03\x02\x02\x02\u0442\u0445\x03\x02\x02" +
		"\x02\u0443\u0441\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444c\x03" +
		"\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\xA1iou|\x83\x89\x8B\x92\x99\xA0" +
		"\xA4\xA9\xAE\xB4\xBB\xC2\xC7\xCD\xD3\xDB\xE0\xE6\xEC\xF3\xFA\xFF\u0106" +
		"\u010D\u0114\u0119\u0120\u0127\u012E\u0133\u013A\u0141\u0148\u014D\u0154" +
		"\u015B\u0162\u0167\u016E\u0175\u017C\u0181\u0188\u018F\u0196\u019D\u01A4" +
		"\u01A7\u01AE\u01B5\u01BA\u01C2\u01C9\u01D0\u01D5\u01DE\u01EA\u01EF\u01F7" +
		"\u01FE\u0205\u020C\u0213\u0216\u021C\u0220\u0225\u022E\u023A\u0241\u0246" +
		"\u0248\u024F\u0256\u025D\u0260\u0266\u026D\u0274\u0279\u0280\u0287\u0291" +
		"\u0295\u029A\u029E\u02A3\u02A7\u02AA\u02AF\u02B6\u02BD\u02C1\u02C6\u02CD" +
		"\u02D2\u02D9\u02E1";
	private static readonly _serializedATNSegment2: string =
		"\u02E7\u02EE\u02F7\u02FB\u0303\u0309\u0310\u0317\u0320\u0327\u032B\u0331" +
		"\u0335\u033A\u0342\u0347\u034C\u0351\u0355\u035D\u0364\u036B\u0372\u0379" +
		"\u0380\u0384\u038A\u0391\u0398\u039F\u03A4\u03AA\u03B1\u03B8\u03BF\u03C8" +
		"\u03CF\u03D6\u03DD\u03E4\u03EA\u03F1\u03F5\u03F7\u03FC\u0405\u0407\u0409" +
		"\u040E\u0414\u041B\u0420\u0426\u042D\u0434\u043C\u0443";
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


export class ArraySpecifierContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(KipperParser.LeftBracket, 0); }
	public RightBracket(): TerminalNode { return this.getToken(KipperParser.RightBracket, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_arraySpecifier; }
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


export class TypeSpecifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(KipperParser.Identifier, 0); }
	public arraySpecifier(): ArraySpecifierContext[];
	public arraySpecifier(i: number): ArraySpecifierContext;
	public arraySpecifier(i?: number): ArraySpecifierContext | ArraySpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArraySpecifierContext);
		} else {
			return this.getRuleContext(i, ArraySpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
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
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(KipperParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(KipperParser.RightBrace, 0); }
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
	public While(): TerminalNode { return this.getToken(KipperParser.While, 0); }
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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


