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
	public static readonly PowerTo = 38;
	public static readonly AndAnd = 39;
	public static readonly OrOr = 40;
	public static readonly Not = 41;
	public static readonly Comma = 42;
	public static readonly Assign = 43;
	public static readonly StarAssign = 44;
	public static readonly DivAssign = 45;
	public static readonly ModAssign = 46;
	public static readonly PlusAssign = 47;
	public static readonly MinusAssign = 48;
	public static readonly Equal = 49;
	public static readonly NotEqual = 50;
	public static readonly Less = 51;
	public static readonly LessEqual = 52;
	public static readonly Greater = 53;
	public static readonly GreaterEqual = 54;
	public static readonly Dot = 55;
	public static readonly Identifier = 56;
	public static readonly Constant = 57;
	public static readonly DigitSequence = 58;
	public static readonly FStringLiteral = 59;
	public static readonly StringLiteral = 60;
	public static readonly WS = 61;
	public static readonly Whitespace = 62;
	public static readonly BlockComment = 63;
	public static readonly Newline = 64;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_translationUnit = 1;
	public static readonly RULE_externalItem = 2;
	public static readonly RULE_functionDefinition = 3;
	public static readonly RULE_endOfItem = 4;
	public static readonly RULE_primaryExpression = 5;
	public static readonly RULE_postfixExpression = 6;
	public static readonly RULE_argumentExpressionList = 7;
	public static readonly RULE_unaryExpression = 8;
	public static readonly RULE_unaryOperator = 9;
	public static readonly RULE_castOrConvertExpression = 10;
	public static readonly RULE_multiplicativeExpression = 11;
	public static readonly RULE_additiveExpression = 12;
	public static readonly RULE_relationalExpression = 13;
	public static readonly RULE_equalityExpression = 14;
	public static readonly RULE_logicalAndExpression = 15;
	public static readonly RULE_logicalOrExpression = 16;
	public static readonly RULE_conditionalExpression = 17;
	public static readonly RULE_assignmentExpression = 18;
	public static readonly RULE_assignmentOperator = 19;
	public static readonly RULE_expression = 20;
	public static readonly RULE_constantExpression = 21;
	public static readonly RULE_declaration = 22;
	public static readonly RULE_storageTypeSpecifier = 23;
	public static readonly RULE_declarationSpecifiers = 24;
	public static readonly RULE_declarationSpecifier = 25;
	public static readonly RULE_initDeclarator = 26;
	public static readonly RULE_typeSpecifier = 27;
	public static readonly RULE_declarator = 28;
	public static readonly RULE_directDeclarator = 29;
	public static readonly RULE_nestedParenthesesBlock = 30;
	public static readonly RULE_parameterTypeList = 31;
	public static readonly RULE_parameterList = 32;
	public static readonly RULE_parameterDeclaration = 33;
	public static readonly RULE_initializer = 34;
	public static readonly RULE_statement = 35;
	public static readonly RULE_compoundStatement = 36;
	public static readonly RULE_blockItemList = 37;
	public static readonly RULE_blockItem = 38;
	public static readonly RULE_expressionStatement = 39;
	public static readonly RULE_selectionStatement = 40;
	public static readonly RULE_labeledStatement = 41;
	public static readonly RULE_iterationStatement = 42;
	public static readonly RULE_forCondition = 43;
	public static readonly RULE_forDeclaration = 44;
	public static readonly RULE_forExpression = 45;
	public static readonly RULE_jumpStatement = 46;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "translationUnit", "externalItem", "functionDefinition", 
		"endOfItem", "primaryExpression", "postfixExpression", "argumentExpressionList", 
		"unaryExpression", "unaryOperator", "castOrConvertExpression", "multiplicativeExpression", 
		"additiveExpression", "relationalExpression", "equalityExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "declaration", 
		"storageTypeSpecifier", "declarationSpecifiers", "declarationSpecifier", 
		"initDeclarator", "typeSpecifier", "declarator", "directDeclarator", "nestedParenthesesBlock", 
		"parameterTypeList", "parameterList", "parameterDeclaration", "initializer", 
		"statement", "compoundStatement", "blockItemList", "blockItem", "expressionStatement", 
		"selectionStatement", "labeledStatement", "iterationStatement", "forCondition", 
		"forDeclaration", "forExpression", "jumpStatement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'->'", "';'", "'?'", "':'", "'...'", "'const'", "'var'", "'as'", 
		"'switch'", "'case'", "'default'", "'break'", "'continue'", "'do'", "'while'", 
		"'if'", "'else'", "'for'", "'enum'", "'def'", "'return'", "'call'", "'struct'", 
		"'typeof'", "'('", "')'", "'['", "']'", "'{'", "'}'", "'+'", "'++'", "'-'", 
		"'--'", "'*'", "'/'", "'%'", "'**'", "'&&'", "'||'", "'!'", "','", "'='", 
		"'*='", "'/='", "'%='", "'+='", "'-='", "'=='", "'!='", "'<'", "'<='", 
		"'>'", "'>='", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "Const", 
		"Var", "As", "Switch", "Case", "Default", "Break", "Continue", "Do", "While", 
		"If", "Else", "For", "Enum", "DefFunc", "Return", "CallFunc", "Struct", 
		"Typeof", "LeftParen", "RightParen", "LeftBracket", "RightBracket", "LeftBrace", 
		"RightBrace", "Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", 
		"Mod", "PowerTo", "AndAnd", "OrOr", "Not", "Comma", "Assign", "StarAssign", 
		"DivAssign", "ModAssign", "PlusAssign", "MinusAssign", "Equal", "NotEqual", 
		"Less", "LessEqual", "Greater", "GreaterEqual", "Dot", "Identifier", "Constant", 
		"DigitSequence", "FStringLiteral", "StringLiteral", "WS", "Whitespace", 
		"BlockComment", "Newline",
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
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, KipperParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__1) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.For) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0)) {
				{
				this.state = 94;
				this.translationUnit();
				}
			}

			this.state = 97;
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
		this.enterRule(_localctx, 2, KipperParser.RULE_translationUnit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 106;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 99;
					this.externalItem();
					}
					break;

				case 2:
					{
					this.state = 100;
					this.endOfItem();
					}
					break;

				case 3:
					{
					this.state = 102;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 101;
							this.match(KipperParser.WS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 104;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__1) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.For) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0));
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
		this.enterRule(_localctx, 4, KipperParser.RULE_externalItem);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.DefFunc:
				_localctx = new ExternalFunctionDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 110;
				this.functionDefinition();
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
			case KipperParser.LeftParen:
			case KipperParser.LeftBrace:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
			case KipperParser.WS:
			case KipperParser.Whitespace:
				_localctx = new ExternalBlockItemContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.blockItem();
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KipperParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(KipperParser.DefFunc);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 115;
				this.match(KipperParser.WS);
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 121;
			this.declarator();
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 122;
				this.match(KipperParser.WS);
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
			this.match(KipperParser.LeftParen);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Identifier) {
				{
				this.state = 129;
				this.parameterTypeList();
				}
			}

			this.state = 132;
			this.match(KipperParser.RightParen);
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 133;
				this.match(KipperParser.WS);
				}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 139;
			this.match(KipperParser.T__0);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 140;
				this.match(KipperParser.WS);
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 146;
			this.typeSpecifier();
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
		this.enterRule(_localctx, 8, KipperParser.RULE_endOfItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Whitespace) {
				{
				{
				this.state = 155;
				this.match(KipperParser.Whitespace);
				}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 161;
			this.match(KipperParser.T__1);
			this.state = 165;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 162;
					this.match(KipperParser.Whitespace);
					}
					}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KipperParser.RULE_primaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Identifier:
				_localctx = new IdentifierPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.match(KipperParser.Identifier);
				}
				break;
			case KipperParser.Constant:
				_localctx = new ConstantPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.match(KipperParser.Constant);
				}
				break;
			case KipperParser.StringLiteral:
				_localctx = new StringPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 170;
					this.match(KipperParser.StringLiteral);
					this.state = 174;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 171;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 176;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					}
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.StringLiteral);
				}
				break;
			case KipperParser.FStringLiteral:
				_localctx = new FStringPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 181;
					this.match(KipperParser.FStringLiteral);
					this.state = 185;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					}
					}
					}
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.FStringLiteral);
				}
				break;
			case KipperParser.LeftParen:
				_localctx = new TangledPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 192;
				this.match(KipperParser.LeftParen);
				this.state = 193;
				this.expression();
				this.state = 194;
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
		this.enterRule(_localctx, 12, KipperParser.RULE_postfixExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftParen:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
				_localctx = new ReferenceExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.primaryExpression();
				this.state = 220;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case KipperParser.LeftBracket:
					{
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 199;
						this.match(KipperParser.LeftBracket);
						this.state = 203;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 200;
							this.match(KipperParser.WS);
							}
							}
							this.state = 205;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 206;
						this.expression();
						this.state = 210;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 207;
							this.match(KipperParser.WS);
							}
							}
							this.state = 212;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 213;
						this.match(KipperParser.RightBracket);
						}
						}
						this.state = 217;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === KipperParser.LeftBracket);
					}
					break;
				case KipperParser.PlusPlus:
				case KipperParser.MinusMinus:
					{
					this.state = 219;
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
				case KipperParser.T__1:
				case KipperParser.T__2:
				case KipperParser.T__3:
				case KipperParser.As:
				case KipperParser.RightParen:
				case KipperParser.RightBracket:
				case KipperParser.Plus:
				case KipperParser.Minus:
				case KipperParser.Star:
				case KipperParser.Div:
				case KipperParser.Mod:
				case KipperParser.PowerTo:
				case KipperParser.AndAnd:
				case KipperParser.OrOr:
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
				case KipperParser.WS:
				case KipperParser.Whitespace:
					break;
				default:
					break;
				}
				}
				break;
			case KipperParser.CallFunc:
				_localctx = new FunctionCallExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.match(KipperParser.CallFunc);
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 223;
					this.match(KipperParser.WS);
					}
					}
					this.state = 228;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 229;
				this.primaryExpression();
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 230;
					this.match(KipperParser.WS);
					}
					}
					this.state = 235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 236;
				this.match(KipperParser.LeftParen);
				this.state = 240;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 237;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 242;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 243;
					this.argumentExpressionList();
					}
				}

				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 246;
					this.match(KipperParser.WS);
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 252;
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
		this.enterRule(_localctx, 14, KipperParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.assignmentExpression();
			this.state = 260;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 263;
				this.match(KipperParser.Comma);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 264;
					this.match(KipperParser.WS);
					}
					}
					this.state = 269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 270;
				this.assignmentExpression();
				this.state = 274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KipperParser.RULE_unaryExpression);
		let _la: number;
		try {
			this.state = 303;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				_localctx = new PassOnUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				this.postfixExpression();
				}
				break;

			case 2:
				_localctx = new IncrementOrDecrementUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 283;
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
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 284;
					this.match(KipperParser.WS);
					}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 290;
				this.postfixExpression();
				}
				break;

			case 3:
				_localctx = new OperatorModifiedUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.PlusPlus || _la === KipperParser.MinusMinus) {
					{
					this.state = 291;
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

				this.state = 294;
				this.unaryOperator();
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 295;
					this.match(KipperParser.WS);
					}
					}
					this.state = 300;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 301;
				this.castOrConvertExpression();
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
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KipperParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (KipperParser.Plus - 31)) | (1 << (KipperParser.Minus - 31)) | (1 << (KipperParser.Not - 31)))) !== 0))) {
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
		this.enterRule(_localctx, 20, KipperParser.RULE_castOrConvertExpression);
		let _la: number;
		try {
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.unaryExpression();
				}
				break;

			case 2:
				_localctx = new ActualCastOrConvertExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 308;
				this.unaryExpression();
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 309;
					this.match(KipperParser.WS);
					}
					}
					this.state = 314;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 315;
				this.match(KipperParser.As);
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 316;
					this.match(KipperParser.WS);
					}
					}
					this.state = 321;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 322;
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
		this.enterRule(_localctx, 22, KipperParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 353;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				_localctx = new PassOnMultiplicativeExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 326;
				this.castOrConvertExpression();
				}
				break;

			case 2:
				_localctx = new ActualMultiplicativeExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 327;
				this.castOrConvertExpression();
				this.state = 331;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 328;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 333;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				this.state = 350;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (KipperParser.Star - 35)) | (1 << (KipperParser.Div - 35)) | (1 << (KipperParser.Mod - 35)) | (1 << (KipperParser.PowerTo - 35)))) !== 0)) {
					{
					{
					this.state = 334;
					_la = this._input.LA(1);
					if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (KipperParser.Star - 35)) | (1 << (KipperParser.Div - 35)) | (1 << (KipperParser.Mod - 35)) | (1 << (KipperParser.PowerTo - 35)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 338;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 335;
						this.match(KipperParser.WS);
						}
						}
						this.state = 340;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 341;
					this.castOrConvertExpression();
					this.state = 345;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
					}
					}
					}
					this.state = 352;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, KipperParser.RULE_additiveExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 382;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				_localctx = new PassOnAdditiveExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 355;
				this.multiplicativeExpression();
				}
				break;

			case 2:
				_localctx = new ActualAdditiveExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 356;
				this.multiplicativeExpression();
				this.state = 360;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 357;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 362;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				}
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Plus || _la === KipperParser.Minus) {
					{
					{
					this.state = 363;
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
					this.state = 367;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 364;
						this.match(KipperParser.WS);
						}
						}
						this.state = 369;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 370;
					this.multiplicativeExpression();
					this.state = 374;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 371;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 376;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
					}
					}
					}
					this.state = 381;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, KipperParser.RULE_relationalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				_localctx = new PassOnRelationalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
				this.additiveExpression();
				}
				break;

			case 2:
				_localctx = new ActualRelationalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.additiveExpression();
				this.state = 389;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 386;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 391;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
				}
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (KipperParser.Less - 51)) | (1 << (KipperParser.LessEqual - 51)) | (1 << (KipperParser.Greater - 51)) | (1 << (KipperParser.GreaterEqual - 51)))) !== 0)) {
					{
					{
					this.state = 392;
					_la = this._input.LA(1);
					if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (KipperParser.Less - 51)) | (1 << (KipperParser.LessEqual - 51)) | (1 << (KipperParser.Greater - 51)) | (1 << (KipperParser.GreaterEqual - 51)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 393;
						this.match(KipperParser.WS);
						}
						}
						this.state = 398;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 399;
					this.additiveExpression();
					this.state = 403;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 400;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 405;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
					}
					}
					}
					this.state = 410;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public equalityExpression(): EqualityExpressionContext {
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, KipperParser.RULE_equalityExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				_localctx = new PassOnEqualityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 413;
				this.relationalExpression();
				}
				break;

			case 2:
				_localctx = new ActualEqualityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 414;
				this.relationalExpression();
				this.state = 418;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Equal || _la === KipperParser.NotEqual) {
					{
					{
					this.state = 421;
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
					this.state = 425;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 422;
						this.match(KipperParser.WS);
						}
						}
						this.state = 427;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 428;
					this.relationalExpression();
					this.state = 432;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 429;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 434;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
					}
					}
					}
					this.state = 439;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public logicalAndExpression(): LogicalAndExpressionContext {
		let _localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, KipperParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				_localctx = new PassOnLogicalAndExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.equalityExpression();
				}
				break;

			case 2:
				_localctx = new ActualLogicalAndExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.equalityExpression();
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 444;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 449;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.AndAnd) {
					{
					{
					this.state = 450;
					this.match(KipperParser.AndAnd);
					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 451;
						this.match(KipperParser.WS);
						}
						}
						this.state = 456;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 457;
					this.equalityExpression();
					this.state = 461;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 458;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 463;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
					}
					}
					}
					this.state = 468;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public logicalOrExpression(): LogicalOrExpressionContext {
		let _localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, KipperParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 498;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				_localctx = new PassOnLogicalOrExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.logicalAndExpression();
				}
				break;

			case 2:
				_localctx = new ActualLogicalOrExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
				this.logicalAndExpression();
				this.state = 476;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 473;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 478;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				}
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.OrOr) {
					{
					{
					this.state = 479;
					this.match(KipperParser.OrOr);
					this.state = 483;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 480;
						this.match(KipperParser.WS);
						}
						}
						this.state = 485;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 486;
					this.logicalAndExpression();
					this.state = 490;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 487;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 492;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
					}
					}
					}
					this.state = 497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, KipperParser.RULE_conditionalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 536;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				_localctx = new PassOnConditionalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this.logicalOrExpression();
				}
				break;

			case 2:
				_localctx = new ActualConditionalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.logicalOrExpression();
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 502;
					this.match(KipperParser.WS);
					}
					}
					this.state = 507;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 508;
				this.match(KipperParser.T__2);
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 509;
					this.match(KipperParser.WS);
					}
					}
					this.state = 514;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 515;
				this.expression();
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 516;
					this.match(KipperParser.WS);
					}
					}
					this.state = 521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 522;
				this.match(KipperParser.T__3);
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 523;
					this.match(KipperParser.WS);
					}
					}
					this.state = 528;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 529;
				this.conditionalExpression();
				this.state = 533;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 530;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 535;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				}
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
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, KipperParser.RULE_assignmentExpression);
		let _la: number;
		try {
			this.state = 555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				_localctx = new PassOnAssignmentExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 538;
				this.conditionalExpression();
				}
				break;

			case 2:
				_localctx = new ActualAssignmentExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 539;
				this.unaryExpression();
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 540;
					this.match(KipperParser.WS);
					}
					}
					this.state = 545;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 546;
				this.assignmentOperator();
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 547;
					this.match(KipperParser.WS);
					}
					}
					this.state = 552;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 553;
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
		this.enterRule(_localctx, 38, KipperParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			_la = this._input.LA(1);
			if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (KipperParser.Assign - 43)) | (1 << (KipperParser.StarAssign - 43)) | (1 << (KipperParser.DivAssign - 43)) | (1 << (KipperParser.ModAssign - 43)) | (1 << (KipperParser.PlusAssign - 43)) | (1 << (KipperParser.MinusAssign - 43)))) !== 0))) {
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
		this.enterRule(_localctx, 40, KipperParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this.assignmentExpression();
			this.state = 563;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 560;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 566;
				this.match(KipperParser.Comma);
				this.state = 570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 567;
					this.match(KipperParser.WS);
					}
					}
					this.state = 572;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 573;
				this.assignmentExpression();
				this.state = 577;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 574;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 579;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
				}
				}
				}
				this.state = 584;
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
		this.enterRule(_localctx, 42, KipperParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
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
		this.enterRule(_localctx, 44, KipperParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.storageTypeSpecifier();
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 588;
				this.match(KipperParser.WS);
				}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 594;
			this.initDeclarator();
			this.state = 595;
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
		this.enterRule(_localctx, 46, KipperParser.RULE_storageTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
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
		this.enterRule(_localctx, 48, KipperParser.RULE_declarationSpecifiers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 599;
				this.declarationSpecifier();
				this.state = 603;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 600;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 605;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				}
				}
				}
				this.state = 608;
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
		this.enterRule(_localctx, 50, KipperParser.RULE_declarationSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
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
		this.enterRule(_localctx, 52, KipperParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.declarator();
			this.state = 616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 613;
				this.match(KipperParser.WS);
				}
				}
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 619;
			this.match(KipperParser.T__3);
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 620;
				this.match(KipperParser.WS);
				}
				}
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 626;
			this.typeSpecifier();
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 627;
				this.match(KipperParser.WS);
				}
				}
				this.state = 632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Assign) {
				{
				this.state = 633;
				this.match(KipperParser.Assign);
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 634;
					this.match(KipperParser.WS);
					}
					}
					this.state = 639;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 640;
				this.initializer();
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 641;
					this.match(KipperParser.WS);
					}
					}
					this.state = 646;
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
		this.enterRule(_localctx, 54, KipperParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.state = 676;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				_localctx = new SingleItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 649;
				this.match(KipperParser.Identifier);
				}
				break;

			case 2:
				_localctx = new MultiItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 650;
				this.match(KipperParser.Identifier);
				this.state = 651;
				this.match(KipperParser.Less);
				this.state = 655;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 652;
					this.match(KipperParser.WS);
					}
					}
					this.state = 657;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 658;
				this.match(KipperParser.Identifier);
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
				this.match(KipperParser.Greater);
				}
				break;

			case 3:
				_localctx = new TypeofTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 666;
				this.match(KipperParser.Typeof);
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 667;
					this.match(KipperParser.WS);
					}
					}
					this.state = 672;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 673;
				this.match(KipperParser.LeftParen);
				this.state = 674;
				this.match(KipperParser.Identifier);
				this.state = 675;
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
		this.enterRule(_localctx, 56, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
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
		this.enterRule(_localctx, 58, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
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
		this.enterRule(_localctx, 60, KipperParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 699;
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
					case KipperParser.PowerTo:
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
					case KipperParser.FStringLiteral:
					case KipperParser.StringLiteral:
					case KipperParser.WS:
					case KipperParser.Whitespace:
					case KipperParser.BlockComment:
					case KipperParser.Newline:
						{
						this.state = 682;
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
						this.state = 683;
						this.match(KipperParser.LeftParen);
						this.state = 687;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 684;
								this.match(KipperParser.WS);
								}
								}
							}
							this.state = 689;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
						}
						this.state = 690;
						this.nestedParenthesesBlock();
						this.state = 694;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 691;
							this.match(KipperParser.WS);
							}
							}
							this.state = 696;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 697;
						this.match(KipperParser.RightParen);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
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
		this.enterRule(_localctx, 62, KipperParser.RULE_parameterTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.parameterList();
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 705;
				this.match(KipperParser.WS);
				}
				}
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Comma) {
				{
				this.state = 711;
				this.match(KipperParser.Comma);
				this.state = 715;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 712;
					this.match(KipperParser.WS);
					}
					}
					this.state = 717;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 718;
				this.match(KipperParser.T__4);
				this.state = 722;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 719;
					this.match(KipperParser.WS);
					}
					}
					this.state = 724;
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
		this.enterRule(_localctx, 64, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.parameterDeclaration();
			this.state = 731;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 728;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 733;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
			}
			this.state = 750;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 734;
					this.match(KipperParser.Comma);
					this.state = 738;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 735;
						this.match(KipperParser.WS);
						}
						}
						this.state = 740;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 741;
					this.parameterDeclaration();
					this.state = 745;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 742;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 747;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 105, this._ctx);
					}
					}
					}
				}
				this.state = 752;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
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
		this.enterRule(_localctx, 66, KipperParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.declarator();
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
			this.match(KipperParser.T__3);
			this.state = 764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 761;
				this.match(KipperParser.WS);
				}
				}
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 767;
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
		this.enterRule(_localctx, 68, KipperParser.RULE_initializer);
		let _la: number;
		try {
			this.state = 805;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 769;
				this.assignmentExpression();
				}
				break;
			case KipperParser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 770;
				this.match(KipperParser.LeftBracket);
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
				this.constantExpression();
				this.state = 781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 778;
					this.match(KipperParser.WS);
					}
					}
					this.state = 783;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
					{
					this.state = 784;
					this.match(KipperParser.Comma);
					this.state = 788;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 785;
						this.match(KipperParser.WS);
						}
						}
						this.state = 790;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 791;
					this.constantExpression();
					this.state = 795;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 792;
						this.match(KipperParser.WS);
						}
						}
						this.state = 797;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 802;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 803;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, KipperParser.RULE_statement);
		try {
			this.state = 812;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 807;
				this.compoundStatement();
				}
				break;
			case KipperParser.T__1:
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
			case KipperParser.Whitespace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 808;
				this.expressionStatement();
				}
				break;
			case KipperParser.Switch:
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 809;
				this.selectionStatement();
				}
				break;
			case KipperParser.Do:
			case KipperParser.While:
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 810;
				this.iterationStatement();
				}
				break;
			case KipperParser.Break:
			case KipperParser.Continue:
			case KipperParser.Return:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 811;
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
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 814;
			this.match(KipperParser.LeftBrace);
			this.state = 818;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 815;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 820;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			this.state = 822;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 821;
				this.blockItemList();
				}
				break;
			}
			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 824;
				this.match(KipperParser.WS);
				}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 830;
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
			this.state = 833;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 832;
					this.blockItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 835;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 837;
				this.match(KipperParser.WS);
				}
				}
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 845;
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
			case KipperParser.LeftParen:
			case KipperParser.LeftBrace:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
			case KipperParser.Whitespace:
				{
				this.state = 843;
				this.statement();
				}
				break;
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 844;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 850;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 847;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 852;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
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
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 853;
				this.expression();
				}
			}

			this.state = 856;
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
			this.state = 946;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 858;
				this.match(KipperParser.If);
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 859;
					this.match(KipperParser.WS);
					}
					}
					this.state = 864;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 865;
				this.match(KipperParser.LeftParen);
				this.state = 869;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 866;
					this.match(KipperParser.WS);
					}
					}
					this.state = 871;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 872;
				this.expression();
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
				this.match(KipperParser.RightParen);
				this.state = 883;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 880;
					this.match(KipperParser.WS);
					}
					}
					this.state = 885;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 886;
				this.statement();
				this.state = 890;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 887;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 892;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
				}
				this.state = 901;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
				case 1:
					{
					this.state = 893;
					this.match(KipperParser.Else);
					this.state = 897;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 894;
						this.match(KipperParser.WS);
						}
						}
						this.state = 899;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 900;
					this.statement();
					}
					break;
				}
				}
				break;
			case KipperParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 903;
				this.match(KipperParser.Switch);
				this.state = 907;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 904;
					this.match(KipperParser.WS);
					}
					}
					this.state = 909;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 910;
				this.match(KipperParser.LeftParen);
				this.state = 914;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 911;
					this.match(KipperParser.WS);
					}
					}
					this.state = 916;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 917;
				this.expression();
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
				this.match(KipperParser.RightParen);
				this.state = 928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 925;
					this.match(KipperParser.WS);
					}
					}
					this.state = 930;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 931;
				this.match(KipperParser.LeftBrace);
				this.state = 941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Case || _la === KipperParser.Default || _la === KipperParser.WS) {
					{
					{
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
					this.labeledStatement();
					}
					}
					this.state = 943;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 944;
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
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, KipperParser.RULE_labeledStatement);
		let _la: number;
		try {
			this.state = 986;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Case:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 948;
				this.match(KipperParser.Case);
				this.state = 952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 949;
					this.match(KipperParser.WS);
					}
					}
					this.state = 954;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 955;
				this.constantExpression();
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 956;
					this.match(KipperParser.WS);
					}
					}
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 962;
				this.match(KipperParser.T__3);
				this.state = 966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 963;
					this.match(KipperParser.WS);
					}
					}
					this.state = 968;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 969;
				this.statement();
				}
				break;
			case KipperParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 971;
				this.match(KipperParser.Default);
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 972;
					this.match(KipperParser.WS);
					}
					}
					this.state = 977;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 978;
				this.match(KipperParser.T__3);
				this.state = 982;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 979;
					this.match(KipperParser.WS);
					}
					}
					this.state = 984;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 985;
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
			this.state = 1074;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 988;
				this.match(KipperParser.For);
				this.state = 992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 989;
					this.match(KipperParser.WS);
					}
					}
					this.state = 994;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 995;
				this.match(KipperParser.LeftParen);
				this.state = 996;
				this.forCondition();
				this.state = 997;
				this.match(KipperParser.RightParen);
				this.state = 1001;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 998;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1003;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1004;
				this.statement();
				}
				break;
			case KipperParser.While:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1006;
				this.match(KipperParser.While);
				this.state = 1010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1007;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1012;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1013;
				this.match(KipperParser.LeftParen);
				this.state = 1017;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1014;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1019;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1020;
				this.expression();
				this.state = 1024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1021;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1026;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1027;
				this.match(KipperParser.RightParen);
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1028;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1033;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1034;
				this.statement();
				}
				break;
			case KipperParser.Do:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1036;
				this.match(KipperParser.Do);
				this.state = 1040;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1037;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1042;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1043;
				this.statement();
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1044;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1049;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1050;
				this.match(KipperParser.While);
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1051;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1056;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1057;
				this.match(KipperParser.LeftParen);
				this.state = 1061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1058;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1063;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1064;
				this.expression();
				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1065;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1070;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1071;
				this.match(KipperParser.RightParen);
				this.state = 1072;
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
		this.enterRule(_localctx, 86, KipperParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1080;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 1076;
				this.forDeclaration();
				}
				break;
			case KipperParser.T__1:
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Plus:
			case KipperParser.PlusPlus:
			case KipperParser.Minus:
			case KipperParser.MinusMinus:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
			case KipperParser.Whitespace:
				{
				this.state = 1078;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 1077;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1082;
			this.endOfItem();
			this.state = 1084;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 1083;
				this.forExpression();
				}
			}

			this.state = 1086;
			this.endOfItem();
			this.state = 1088;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 1087;
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
		this.enterRule(_localctx, 88, KipperParser.RULE_forDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this.storageTypeSpecifier();
			this.state = 1094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1091;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1097;
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
		this.enterRule(_localctx, 90, KipperParser.RULE_forExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1099;
			this.assignmentExpression();
			this.state = 1103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1100;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 1106;
				this.match(KipperParser.Comma);
				this.state = 1110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1107;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1113;
				this.assignmentExpression();
				this.state = 1117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1114;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1124;
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
		this.enterRule(_localctx, 92, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Break:
			case KipperParser.Continue:
				{
				this.state = 1125;
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
				this.state = 1126;
				this.match(KipperParser.Return);
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1127;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 1133;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1138;
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

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u0477\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x03\x02\x05\x02b\n\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x06\x03i\n\x03\r\x03\x0E\x03j\x06\x03" +
		"m\n\x03\r\x03\x0E\x03n\x03\x04\x03\x04\x05\x04s\n\x04\x03\x05\x03\x05" +
		"\x07\x05w\n\x05\f\x05\x0E\x05z\v\x05\x03\x05\x03\x05\x07\x05~\n\x05\f" +
		"\x05\x0E\x05\x81\v\x05\x03\x05\x03\x05\x05\x05\x85\n\x05\x03\x05\x03\x05" +
		"\x07\x05\x89\n\x05\f\x05\x0E\x05\x8C\v\x05\x03\x05\x03\x05\x07\x05\x90" +
		"\n\x05\f\x05\x0E\x05\x93\v\x05\x03\x05\x03\x05\x07\x05\x97\n\x05\f\x05" +
		"\x0E\x05\x9A\v\x05\x03\x05\x03\x05\x03\x06\x07\x06\x9F\n\x06\f\x06\x0E" +
		"\x06\xA2\v\x06\x03\x06\x03\x06\x07\x06\xA6\n\x06\f\x06\x0E\x06\xA9\v\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xAF\n\x07\f\x07\x0E\x07\xB2\v" +
		"\x07\x06\x07\xB4\n\x07\r\x07\x0E\x07\xB5\x03\x07\x03\x07\x07\x07\xBA\n" +
		"\x07\f\x07\x0E\x07\xBD\v\x07\x06\x07\xBF\n\x07\r\x07\x0E\x07\xC0\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07\xC7\n\x07\x03\b\x03\b\x03\b\x07\b\xCC" +
		"\n\b\f\b\x0E\b\xCF\v\b\x03\b\x03\b\x07\b\xD3\n\b\f\b\x0E\b\xD6\v\b\x03" +
		"\b\x03\b\x06\b\xDA\n\b\r\b\x0E\b\xDB\x03\b\x05\b\xDF\n\b\x03\b\x03\b\x07" +
		"\b\xE3\n\b\f\b\x0E\b\xE6\v\b\x03\b\x03\b\x07\b\xEA\n\b\f\b\x0E\b\xED\v" +
		"\b\x03\b\x03\b\x07\b\xF1\n\b\f\b\x0E\b\xF4\v\b\x03\b\x05\b\xF7\n\b\x03" +
		"\b\x07\b\xFA\n\b\f\b\x0E\b\xFD\v\b\x03\b\x03\b\x05\b\u0101\n\b\x03\t\x03" +
		"\t\x07\t\u0105\n\t\f\t\x0E\t\u0108\v\t\x03\t\x03\t\x07\t\u010C\n\t\f\t" +
		"\x0E\t\u010F\v\t\x03\t\x03\t\x07\t\u0113\n\t\f\t\x0E\t\u0116\v\t\x07\t" +
		"\u0118\n\t\f\t\x0E\t\u011B\v\t\x03\n\x03\n\x03\n\x07\n\u0120\n\n\f\n\x0E" +
		"\n\u0123\v\n\x03\n\x03\n\x05\n\u0127\n\n\x03\n\x03\n\x07\n\u012B\n\n\f" +
		"\n\x0E\n\u012E\v\n\x03\n\x03\n\x05\n\u0132\n\n\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x07\f\u0139\n\f\f\f\x0E\f\u013C\v\f\x03\f\x03\f\x07\f\u0140\n\f" +
		"\f\f\x0E\f\u0143\v\f\x03\f\x03\f\x05\f\u0147\n\f\x03\r\x03\r\x03\r\x07" +
		"\r\u014C\n\r\f\r\x0E\r\u014F\v\r\x03\r\x03\r\x07\r\u0153\n\r\f\r\x0E\r" +
		"\u0156\v\r\x03\r\x03\r\x07\r\u015A\n\r\f\r\x0E\r\u015D\v\r\x07\r\u015F" +
		"\n\r\f\r\x0E\r\u0162\v\r\x05\r\u0164\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\u0169\n\x0E\f\x0E\x0E\x0E\u016C\v\x0E\x03\x0E\x03\x0E\x07\x0E\u0170\n" +
		"\x0E\f\x0E\x0E\x0E\u0173\v\x0E\x03\x0E\x03\x0E\x07\x0E\u0177\n\x0E\f\x0E" +
		"\x0E\x0E\u017A\v\x0E\x07\x0E\u017C\n\x0E\f\x0E\x0E\x0E\u017F\v\x0E\x05" +
		"\x0E\u0181\n\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0186\n\x0F\f\x0F\x0E" +
		"\x0F\u0189\v\x0F\x03\x0F\x03\x0F\x07\x0F\u018D\n\x0F\f\x0F\x0E\x0F\u0190" +
		"\v\x0F\x03\x0F\x03\x0F\x07\x0F\u0194\n\x0F\f\x0F\x0E\x0F\u0197\v\x0F\x07" +
		"\x0F\u0199\n\x0F\f\x0F\x0E\x0F\u019C\v\x0F\x05\x0F\u019E\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x07\x10\u01A3\n\x10\f\x10\x0E\x10\u01A6\v\x10\x03\x10" +
		"\x03\x10\x07\x10\u01AA\n\x10\f\x10\x0E\x10\u01AD\v\x10\x03\x10\x03\x10" +
		"\x07\x10\u01B1\n\x10\f\x10\x0E\x10\u01B4\v\x10\x07\x10\u01B6\n\x10\f\x10" +
		"\x0E\x10\u01B9\v\x10\x05\x10\u01BB\n\x10\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\u01C0\n\x11\f\x11\x0E\x11\u01C3\v\x11\x03\x11\x03\x11\x07\x11\u01C7\n" +
		"\x11\f\x11\x0E\x11\u01CA\v\x11\x03\x11\x03\x11\x07\x11\u01CE\n\x11\f\x11" +
		"\x0E\x11\u01D1\v\x11\x07\x11\u01D3\n\x11\f\x11\x0E\x11\u01D6\v\x11\x05" +
		"\x11\u01D8\n\x11\x03\x12\x03\x12\x03\x12\x07\x12\u01DD\n\x12\f\x12\x0E" +
		"\x12\u01E0\v\x12\x03\x12\x03\x12\x07\x12\u01E4\n\x12\f\x12\x0E\x12\u01E7" +
		"\v\x12\x03\x12\x03\x12\x07\x12\u01EB\n\x12\f\x12\x0E\x12\u01EE\v\x12\x07" +
		"\x12\u01F0\n\x12\f\x12\x0E\x12\u01F3\v\x12\x05\x12\u01F5\n\x12\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\u01FA\n\x13\f\x13\x0E\x13\u01FD\v\x13\x03\x13" +
		"\x03\x13\x07\x13\u0201\n\x13\f\x13\x0E\x13\u0204\v\x13\x03\x13\x03\x13" +
		"\x07\x13\u0208\n\x13\f\x13\x0E\x13\u020B\v\x13\x03\x13\x03\x13\x07\x13" +
		"\u020F\n\x13\f\x13\x0E\x13\u0212\v\x13\x03\x13\x03\x13\x07\x13\u0216\n" +
		"\x13\f\x13\x0E\x13\u0219\v\x13\x05\x13\u021B\n\x13\x03\x14\x03\x14\x03" +
		"\x14\x07\x14\u0220\n\x14\f\x14\x0E\x14\u0223\v\x14\x03\x14\x03\x14\x07" +
		"\x14\u0227\n\x14\f\x14\x0E\x14\u022A\v\x14\x03\x14\x03\x14\x05\x14\u022E" +
		"\n\x14\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16\u0234\n\x16\f\x16\x0E\x16" +
		"\u0237\v\x16\x03\x16\x03\x16\x07\x16\u023B\n\x16\f\x16\x0E\x16\u023E\v" +
		"\x16\x03\x16\x03\x16\x07\x16\u0242\n\x16\f\x16\x0E\x16\u0245\v\x16\x07" +
		"\x16\u0247\n\x16\f\x16\x0E\x16\u024A\v\x16\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x07\x18\u0250\n\x18\f\x18\x0E\x18\u0253\v\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x07\x1A\u025C\n\x1A\f\x1A\x0E\x1A" +
		"\u025F\v\x1A\x06\x1A\u0261\n\x1A\r\x1A\x0E\x1A\u0262\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x07\x1C\u0269\n\x1C\f\x1C\x0E\x1C\u026C\v\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u0270\n\x1C\f\x1C\x0E\x1C\u0273\v\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\u0277\n\x1C\f\x1C\x0E\x1C\u027A\v\x1C\x03\x1C\x03\x1C\x07\x1C\u027E" +
		"\n\x1C\f\x1C\x0E\x1C\u0281\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0285\n\x1C\f" +
		"\x1C\x0E\x1C\u0288\v\x1C\x05\x1C\u028A\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x07\x1D\u0290\n\x1D\f\x1D\x0E\x1D\u0293\v\x1D\x03\x1D\x03\x1D\x07" +
		"\x1D\u0297\n\x1D\f\x1D\x0E\x1D\u029A\v\x1D\x03\x1D\x03\x1D\x03\x1D\x07" +
		"\x1D\u029F\n\x1D\f\x1D\x0E\x1D\u02A2\v\x1D\x03\x1D\x03\x1D\x03\x1D\x05" +
		"\x1D\u02A7\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u02B0" +
		"\n \f \x0E \u02B3\v \x03 \x03 \x07 \u02B7\n \f \x0E \u02BA\v \x03 \x03" +
		" \x07 \u02BE\n \f \x0E \u02C1\v \x03!\x03!\x07!\u02C5\n!\f!\x0E!\u02C8" +
		"\v!\x03!\x03!\x07!\u02CC\n!\f!\x0E!\u02CF\v!\x03!\x03!\x07!\u02D3\n!\f" +
		"!\x0E!\u02D6\v!\x05!\u02D8\n!\x03\"\x03\"\x07\"\u02DC\n\"\f\"\x0E\"\u02DF" +
		"\v\"\x03\"\x03\"\x07\"\u02E3\n\"\f\"\x0E\"\u02E6\v\"\x03\"\x03\"\x07\"" +
		"\u02EA\n\"\f\"\x0E\"\u02ED\v\"\x07\"\u02EF\n\"\f\"\x0E\"\u02F2\v\"\x03" +
		"#\x03#\x07#\u02F6\n#\f#\x0E#\u02F9\v#\x03#\x03#\x07#\u02FD\n#\f#\x0E#" +
		"\u0300\v#\x03#\x03#\x03$\x03$\x03$\x07$\u0307\n$\f$\x0E$\u030A\v$\x03" +
		"$\x03$\x07$\u030E\n$\f$\x0E$\u0311\v$\x03$\x03$\x07$\u0315\n$\f$\x0E$" +
		"\u0318\v$\x03$\x03$\x07$\u031C\n$\f$\x0E$\u031F\v$\x07$\u0321\n$\f$\x0E" +
		"$\u0324\v$\x03$\x03$\x05$\u0328\n$\x03%\x03%\x03%\x03%\x03%\x05%\u032F" +
		"\n%\x03&\x03&\x07&\u0333\n&\f&\x0E&\u0336\v&\x03&\x05&\u0339\n&\x03&\x07" +
		"&\u033C\n&\f&\x0E&\u033F\v&\x03&\x03&\x03\'\x06\'\u0344\n\'\r\'\x0E\'" +
		"\u0345\x03(\x07(\u0349\n(\f(\x0E(\u034C\v(\x03(\x03(\x05(\u0350\n(\x03" +
		"(\x07(\u0353\n(\f(\x0E(\u0356\v(\x03)\x05)\u0359\n)\x03)\x03)\x03*\x03" +
		"*\x07*\u035F\n*\f*\x0E*\u0362\v*\x03*\x03*\x07*\u0366\n*\f*\x0E*\u0369" +
		"\v*\x03*\x03*\x07*\u036D\n*\f*\x0E*\u0370\v*\x03*\x03*\x07*\u0374\n*\f" +
		"*\x0E*\u0377\v*\x03*\x03*\x07*\u037B\n*\f*\x0E*\u037E\v*\x03*\x03*\x07" +
		"*\u0382\n*\f*\x0E*\u0385\v*\x03*\x05*\u0388\n*\x03*\x03*\x07*\u038C\n" +
		"*\f*\x0E*\u038F\v*\x03*\x03*\x07*\u0393\n*\f*\x0E*\u0396\v*\x03*\x03*" +
		"\x07*\u039A\n*\f*\x0E*\u039D\v*\x03*\x03*\x07*\u03A1\n*\f*\x0E*\u03A4" +
		"\v*\x03*\x03*\x07*\u03A8\n*\f*\x0E*\u03AB\v*\x03*\x07*\u03AE\n*\f*\x0E" +
		"*\u03B1\v*\x03*\x03*\x05*\u03B5\n*\x03+\x03+\x07+\u03B9\n+\f+\x0E+\u03BC" +
		"\v+\x03+\x03+\x07+\u03C0\n+\f+\x0E+\u03C3\v+\x03+\x03+\x07+\u03C7\n+\f" +
		"+\x0E+\u03CA\v+\x03+\x03+\x03+\x03+\x07+\u03D0\n+\f+\x0E+\u03D3\v+\x03" +
		"+\x03+\x07+\u03D7\n+\f+\x0E+\u03DA\v+\x03+\x05+\u03DD\n+\x03,\x03,\x07" +
		",\u03E1\n,\f,\x0E,\u03E4\v,\x03,\x03,\x03,\x03,\x07,\u03EA\n,\f,\x0E," +
		"\u03ED\v,\x03,\x03,\x03,\x03,\x07,\u03F3\n,\f,\x0E,\u03F6\v,\x03,\x03" +
		",\x07,\u03FA\n,\f,\x0E,\u03FD\v,\x03,\x03,\x07,\u0401\n,\f,\x0E,\u0404" +
		"\v,\x03,\x03,\x07,\u0408\n,\f,\x0E,\u040B\v,\x03,\x03,\x03,\x03,\x07," +
		"\u0411\n,\f,\x0E,\u0414\v,\x03,\x03,\x07,\u0418\n,\f,\x0E,\u041B\v,\x03" +
		",\x03,\x07,\u041F\n,\f,\x0E,\u0422\v,\x03,\x03,\x07,\u0426\n,\f,\x0E," +
		"\u0429\v,\x03,\x03,\x07,\u042D\n,\f,\x0E,\u0430\v,\x03,\x03,\x03,\x05" +
		",\u0435\n,\x03-\x03-\x05-\u0439\n-\x05-\u043B\n-\x03-\x03-\x05-\u043F" +
		"\n-\x03-\x03-\x05-\u0443\n-\x03.\x03.\x07.\u0447\n.\f.\x0E.\u044A\v.\x03" +
		".\x03.\x03/\x03/\x07/\u0450\n/\f/\x0E/\u0453\v/\x03/\x03/\x07/\u0457\n" +
		"/\f/\x0E/\u045A\v/\x03/\x03/\x07/\u045E\n/\f/\x0E/\u0461\v/\x07/\u0463" +
		"\n/\f/\x0E/\u0466\v/\x030\x030\x030\x070\u046B\n0\f0\x0E0\u046E\v0\x03" +
		"0\x050\u0471\n0\x050\u0473\n0\x030\x030\x030\x02\x02\x021\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02\x02\f\x04\x02" +
		"\"\"$$\x05\x02!!##++\x03\x02%(\x04\x02!!##\x03\x0258\x03\x0234\x03\x02" +
		"-2\x03\x02\b\t\x03\x02\x1B\x1C\x03\x02\x0E\x0F\x02\u04FA\x02a\x03\x02" +
		"\x02\x02\x04l\x03\x02\x02\x02\x06r\x03\x02\x02\x02\bt\x03\x02\x02\x02" +
		"\n\xA0\x03\x02\x02\x02\f\xC6\x03\x02\x02\x02\x0E\u0100\x03\x02\x02\x02" +
		"\x10\u0102\x03\x02\x02\x02\x12\u0131\x03\x02\x02\x02\x14\u0133\x03\x02" +
		"\x02\x02\x16\u0146\x03\x02\x02\x02\x18\u0163\x03\x02\x02\x02\x1A\u0180" +
		"\x03\x02\x02\x02\x1C\u019D\x03\x02\x02\x02\x1E\u01BA\x03\x02\x02\x02 " +
		"\u01D7\x03\x02\x02\x02\"\u01F4\x03\x02\x02\x02$\u021A\x03\x02\x02\x02" +
		"&\u022D\x03\x02\x02\x02(\u022F\x03\x02\x02\x02*\u0231\x03\x02\x02\x02" +
		",\u024B\x03\x02\x02\x02.\u024D\x03\x02\x02\x020\u0257\x03\x02\x02\x02" +
		"2\u0260\x03\x02\x02\x024\u0264\x03\x02\x02\x026\u0266\x03\x02\x02\x02" +
		"8\u02A6\x03\x02\x02\x02:\u02A8\x03\x02\x02\x02<\u02AA\x03\x02\x02\x02" +
		">\u02BF\x03\x02\x02\x02@\u02C2\x03\x02\x02\x02B\u02D9\x03\x02\x02\x02" +
		"D\u02F3\x03\x02\x02\x02F\u0327\x03\x02\x02\x02H\u032E\x03\x02\x02\x02" +
		"J\u0330\x03\x02\x02\x02L\u0343\x03\x02\x02\x02N\u034A\x03\x02\x02\x02" +
		"P\u0358\x03\x02\x02\x02R\u03B4\x03\x02\x02\x02T\u03DC\x03\x02\x02\x02" +
		"V\u0434\x03\x02\x02\x02X\u043A\x03\x02\x02\x02Z\u0444\x03\x02\x02\x02" +
		"\\\u044D\x03\x02\x02\x02^\u0472\x03\x02\x02\x02`b\x05\x04\x03\x02a`\x03" +
		"\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x07\x02\x02\x03d\x03" +
		"\x03\x02\x02\x02em\x05\x06\x04\x02fm\x05\n\x06\x02gi\x07?\x02\x02hg\x03" +
		"\x02\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03" +
		"\x02\x02\x02le\x03\x02\x02\x02lf\x03\x02\x02\x02lh\x03\x02\x02\x02mn\x03" +
		"\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\x05\x03\x02\x02\x02" +
		"ps\x05\b\x05\x02qs\x05N(\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\x07" +
		"\x03\x02\x02\x02tx\x07\x16\x02\x02uw\x07?\x02\x02vu\x03\x02\x02\x02wz" +
		"\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y{\x03\x02\x02\x02" +
		"zx\x03\x02\x02\x02{\x7F\x05:\x1E\x02|~\x07?\x02\x02}|\x03\x02\x02\x02" +
		"~\x81\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80" +
		"\x82\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82\x84\x07\x1B\x02\x02\x83" +
		"\x85\x05@!\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86" +
		"\x03\x02\x02\x02\x86\x8A\x07\x1C\x02\x02\x87\x89\x07?\x02\x02\x88\x87" +
		"\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B" +
		"\x03\x02\x02\x02\x8B\x8D\x03\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8D\x91" +
		"\x07\x03\x02\x02\x8E\x90\x07?\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\x93" +
		"\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x94" +
		"\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x98\x058\x1D\x02\x95\x97" +
		"\x07?\x02\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96" +
		"\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A\x98" +
		"\x03\x02\x02\x02\x9B\x9C\x05J&\x02\x9C\t\x03\x02\x02\x02\x9D\x9F\x07@" +
		"\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02" +
		"\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03\x02" +
		"\x02\x02\xA3\xA7\x07\x04\x02\x02\xA4\xA6\x07@\x02\x02\xA5\xA4\x03\x02" +
		"\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02" +
		"\x02\x02\xA8\v\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xC7\x07:\x02" +
		"\x02\xAB\xC7\x07;\x02\x02\xAC\xB0\x07>\x02\x02\xAD\xAF\x07?\x02\x02\xAE" +
		"\xAD\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0" +
		"\xB1\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3" +
		"\xAC\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5" +
		"\xB6\x03\x02\x02\x02\xB6\xC7\x03\x02\x02\x02\xB7\xBB\x07=\x02\x02\xB8" +
		"\xBA\x07?\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB" +
		"\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD" +
		"\xBB\x03\x02\x02\x02\xBE\xB7\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0" +
		"\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC7\x03\x02\x02\x02\xC2" +
		"\xC3\x07\x1B\x02\x02\xC3\xC4\x05*\x16\x02\xC4\xC5\x07\x1C\x02\x02\xC5" +
		"\xC7\x03\x02\x02\x02\xC6\xAA\x03\x02\x02\x02\xC6\xAB\x03\x02\x02\x02\xC6" +
		"\xB3\x03\x02\x02\x02\xC6\xBE\x03\x02\x02\x02\xC6\xC2\x03\x02\x02\x02\xC7" +
		"\r\x03\x02\x02\x02\xC8\xDE\x05\f\x07\x02\xC9\xCD\x07\x1D\x02\x02\xCA\xCC" +
		"\x07?\x02\x02\xCB\xCA\x03\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB" +
		"\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xCD" +
		"\x03\x02\x02\x02\xD0\xD4\x05*\x16\x02\xD1\xD3\x07?\x02\x02\xD2\xD1\x03" +
		"\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03" +
		"\x02\x02\x02\xD5\xD7\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xD8\x07" +
		"\x1E\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9\xC9\x03\x02\x02\x02\xDA\xDB\x03" +
		"\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDF\x03" +
		"\x02\x02\x02\xDD\xDF\t\x02\x02\x02\xDE\xD9\x03\x02\x02\x02\xDE\xDD\x03" +
		"\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\u0101\x03\x02\x02\x02\xE0\xE4" +
		"\x07\x18\x02\x02\xE1\xE3\x07?\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE6" +
		"\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE7" +
		"\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEB\x05\f\x07\x02\xE8\xEA" +
		"\x07?\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9" +
		"\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xEB" +
		"\x03\x02\x02\x02\xEE\xF2\x07\x1B\x02\x02\xEF\xF1\x07?\x02\x02\xF0\xEF" +
		"\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3" +
		"\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF7" +
		"\x05\x10\t\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xFB" +
		"\x03\x02\x02\x02\xF8\xFA\x07?\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA\xFD" +
		"\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFE" +
		"\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\xFF\x07\x1C\x02\x02\xFF\u0101" +
		"\x03\x02\x02\x02\u0100\xC8\x03\x02\x02\x02\u0100\xE0\x03\x02\x02\x02\u0101" +
		"\x0F\x03\x02\x02\x02\u0102\u0106\x05&\x14\x02\u0103\u0105\x07?\x02\x02" +
		"\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03" +
		"\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0119\x03\x02\x02\x02\u0108" +
		"\u0106\x03\x02\x02\x02\u0109\u010D\x07,\x02\x02\u010A\u010C\x07?\x02\x02" +
		"\u010B\u010A\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03" +
		"\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0110\x03\x02\x02\x02\u010F" +
		"\u010D\x03\x02\x02\x02\u0110\u0114\x05&\x14\x02\u0111\u0113\x07?\x02\x02" +
		"\u0112\u0111\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112\x03" +
		"\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116" +
		"\u0114\x03\x02\x02\x02\u0117\u0109\x03\x02\x02\x02\u0118\u011B\x03\x02" +
		"\x02\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A" +
		"\x11\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011C\u0132\x05\x0E\b" +
		"\x02\u011D\u0121\t\x02\x02\x02\u011E\u0120\x07?\x02\x02\u011F\u011E\x03" +
		"\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121" +
		"\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0121\x03\x02" +
		"\x02\x02\u0124\u0132\x05\x0E\b\x02\u0125\u0127\t\x02\x02\x02\u0126\u0125" +
		"\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02" +
		"\u0128\u012C\x05\x14\v\x02\u0129\u012B\x07?\x02\x02\u012A\u0129\x03\x02" +
		"\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C" +
		"\u012D\x03\x02\x02\x02\u012D\u012F\x03\x02\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012F\u0130\x05\x16\f\x02\u0130\u0132\x03\x02\x02\x02\u0131\u011C" +
		"\x03\x02\x02\x02\u0131\u011D\x03\x02\x02\x02\u0131\u0126\x03\x02\x02\x02" +
		"\u0132\x13\x03\x02\x02\x02\u0133\u0134\t\x03\x02\x02\u0134\x15\x03\x02" +
		"\x02\x02\u0135\u0147\x05\x12\n\x02\u0136\u013A\x05\x12\n\x02\u0137\u0139" +
		"\x07?\x02\x02\u0138\u0137\x03\x02\x02\x02\u0139\u013C\x03\x02\x02\x02" +
		"\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03" +
		"\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D\u0141\x07\n\x02\x02\u013E" +
		"\u0140\x07?\x02\x02\u013F\u013E\x03\x02\x02\x02\u0140\u0143\x03\x02\x02" +
		"\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0144" +
		"\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0145\x058\x1D\x02" +
		"\u0145\u0147\x03\x02\x02\x02\u0146\u0135\x03\x02\x02\x02\u0146\u0136\x03" +
		"\x02\x02\x02\u0147\x17\x03\x02\x02\x02\u0148\u0164\x05\x16\f\x02\u0149" +
		"\u014D\x05\x16\f\x02\u014A\u014C\x07?\x02\x02\u014B\u014A\x03\x02\x02" +
		"\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E" +
		"\x03\x02\x02\x02\u014E\u0160\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02" +
		"\u0150\u0154\t\x04\x02\x02\u0151\u0153\x07?\x02\x02\u0152\u0151\x03\x02" +
		"\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154" +
		"\u0155\x03\x02\x02\x02\u0155\u0157\x03\x02\x02\x02\u0156\u0154\x03\x02" +
		"\x02\x02\u0157\u015B\x05\x16\f\x02\u0158\u015A\x07?\x02\x02\u0159\u0158" +
		"\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02" +
		"\u015B\u015C\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03" +
		"\x02\x02\x02\u015E\u0150\x03\x02\x02\x02\u015F\u0162\x03\x02\x02\x02\u0160" +
		"\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0164\x03\x02" +
		"\x02\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0148\x03\x02\x02\x02\u0163" +
		"\u0149\x03\x02\x02\x02\u0164\x19\x03\x02\x02\x02\u0165\u0181\x05\x18\r" +
		"\x02\u0166\u016A\x05\x18\r\x02\u0167\u0169\x07?\x02\x02\u0168\u0167\x03" +
		"\x02\x02\x02\u0169\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A" +
		"\u016B\x03\x02\x02\x02\u016B\u017D\x03\x02\x02\x02\u016C\u016A\x03\x02" +
		"\x02\x02\u016D\u0171\t\x05\x02\x02\u016E\u0170\x07?\x02\x02\u016F\u016E" +
		"\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02" +
		"\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u0171\x03" +
		"\x02\x02\x02\u0174\u0178\x05\x18\r\x02\u0175\u0177\x07?";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017C\x03\x02" +
		"\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B\u016D\x03\x02\x02\x02\u017C" +
		"\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02" +
		"\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180" +
		"\u0165\x03\x02\x02\x02\u0180\u0166\x03\x02\x02\x02\u0181\x1B\x03\x02\x02" +
		"\x02\u0182\u019E\x05\x1A\x0E\x02\u0183\u0187\x05\x1A\x0E\x02\u0184\u0186" +
		"\x07?\x02\x02\u0185\u0184\x03\x02\x02\x02\u0186\u0189\x03\x02\x02\x02" +
		"\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u019A\x03" +
		"\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018E\t\x06\x02\x02\u018B" +
		"\u018D\x07?\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D\u0190\x03\x02\x02" +
		"\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191" +
		"\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u0195\x05\x1A\x0E\x02" +
		"\u0192\u0194\x07?\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194\u0197\x03" +
		"\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198\u018A\x03\x02" +
		"\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A" +
		"\u019B\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02" +
		"\x02\x02\u019D\u0182\x03\x02\x02\x02\u019D\u0183\x03\x02\x02\x02\u019E" +
		"\x1D\x03\x02\x02\x02\u019F\u01BB\x05\x1C\x0F\x02\u01A0\u01A4\x05\x1C\x0F" +
		"\x02\u01A1\u01A3\x07?\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3\u01A6" +
		"\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02" +
		"\u01A5\u01B7\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01AB\t" +
		"\x07\x02\x02\u01A8\u01AA\x07?\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA" +
		"\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02" +
		"\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE" +
		"\u01B2\x05\x1C\x0F\x02\u01AF\u01B1\x07?\x02\x02\u01B0\u01AF\x03\x02\x02" +
		"\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2\u01B3" +
		"\x03\x02\x02\x02\u01B3\u01B6\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02" +
		"\u01B5\u01A7\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03" +
		"\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9" +
		"\u01B7\x03\x02\x02\x02\u01BA\u019F\x03\x02\x02\x02\u01BA\u01A0\x03\x02" +
		"\x02\x02\u01BB\x1F\x03\x02\x02\x02\u01BC\u01D8\x05\x1E\x10\x02\u01BD\u01C1" +
		"\x05\x1E\x10\x02\u01BE\u01C0\x07?\x02\x02\u01BF\u01BE\x03\x02\x02\x02" +
		"\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03" +
		"\x02\x02\x02\u01C2\u01D4\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4" +
		"\u01C8\x07)\x02\x02\u01C5\u01C7\x07?\x02\x02\u01C6\u01C5\x03\x02\x02\x02" +
		"\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8\u01C9\x03" +
		"\x02\x02\x02\u01C9\u01CB\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CB" +
		"\u01CF\x05\x1E\x10\x02\u01CC\u01CE\x07?\x02\x02\u01CD\u01CC\x03\x02\x02" +
		"\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF\u01D0" +
		"\x03\x02\x02\x02\u01D0\u01D3\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02" +
		"\u01D2\u01C4\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03" +
		"\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02\u01D6" +
		"\u01D4\x03\x02\x02\x02\u01D7\u01BC\x03\x02\x02\x02\u01D7\u01BD\x03\x02" +
		"\x02\x02\u01D8!\x03\x02\x02\x02\u01D9\u01F5\x05 \x11\x02\u01DA\u01DE\x05" +
		" \x11\x02\u01DB\u01DD\x07?\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD\u01E0" +
		"\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
		"\u01DF\u01F1\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E5\x07" +
		"*\x02\x02\u01E2\u01E4\x07?\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01E7" +
		"\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02" +
		"\u01E6\u01E8\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01EC\x05" +
		" \x11\x02\u01E9\u01EB\x07?\x02\x02\u01EA\u01E9\x03\x02\x02\x02\u01EB\u01EE" +
		"\x03\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02" +
		"\u01ED\u01F0\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01E1\x03" +
		"\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1" +
		"\u01F2\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03\x02" +
		"\x02\x02\u01F4\u01D9\x03\x02\x02\x02\u01F4\u01DA\x03\x02\x02\x02\u01F5" +
		"#\x03\x02\x02\x02\u01F6\u021B\x05\"\x12\x02\u01F7\u01FB\x05\"\x12\x02" +
		"\u01F8\u01FA\x07?\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA\u01FD\x03" +
		"\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC" +
		"\u01FE\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FE\u0202\x07\x05" +
		"\x02\x02\u01FF\u0201\x07?\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201\u0204" +
		"\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02" +
		"\u0203\u0205\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205\u0209\x05" +
		"*\x16\x02\u0206\u0208\x07?\x02\x02\u0207\u0206\x03\x02\x02\x02\u0208\u020B" +
		"\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
		"\u020A\u020C\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C\u0210\x07" +
		"\x06\x02\x02\u020D\u020F\x07?\x02\x02\u020E\u020D\x03\x02\x02\x02\u020F" +
		"\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02" +
		"\x02\x02\u0211\u0213\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213" +
		"\u0217\x05$\x13\x02\u0214\u0216\x07?\x02\x02\u0215\u0214\x03\x02\x02\x02" +
		"\u0216\u0219\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0217\u0218\x03" +
		"\x02\x02\x02\u0218\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u021A" +
		"\u01F6\x03\x02\x02\x02\u021A\u01F7\x03\x02\x02\x02\u021B%\x03\x02\x02" +
		"\x02\u021C\u022E\x05$\x13\x02\u021D\u0221\x05\x12\n\x02\u021E\u0220\x07" +
		"?\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221" +
		"\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0224\x03\x02" +
		"\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224\u0228\x05(\x15\x02\u0225\u0227" +
		"\x07?\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227\u022A\x03\x02\x02\x02" +
		"\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022B\x03" +
		"\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022C\x05&\x14\x02\u022C" +
		"\u022E\x03\x02\x02\x02\u022D\u021C\x03\x02\x02\x02\u022D\u021D\x03\x02" +
		"\x02\x02\u022E\'\x03\x02\x02\x02\u022F\u0230\t\b\x02\x02\u0230)\x03\x02" +
		"\x02\x02\u0231\u0235\x05&\x14\x02\u0232\u0234\x07?\x02\x02\u0233\u0232" +
		"\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\u0248\x03\x02\x02\x02\u0237\u0235\x03" +
		"\x02\x02\x02\u0238\u023C\x07,\x02\x02\u0239\u023B\x07?\x02\x02\u023A\u0239" +
		"\x03\x02\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02" +
		"\u023C\u023D\x03\x02\x02\x02\u023D\u023F\x03\x02\x02\x02\u023E\u023C\x03" +
		"\x02\x02\x02\u023F\u0243\x05&\x14\x02\u0240\u0242\x07?\x02\x02\u0241\u0240" +
		"\x03\x02\x02\x02\u0242\u0245\x03\x02\x02\x02\u0243\u0241\x03\x02\x02\x02" +
		"\u0243\u0244\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0243\x03" +
		"\x02\x02\x02\u0246\u0238\x03\x02\x02\x02\u0247\u024A\x03\x02\x02\x02\u0248" +
		"\u0246\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249+\x03\x02\x02" +
		"\x02\u024A\u0248\x03\x02\x02\x02\u024B\u024C\x05$\x13\x02\u024C-\x03\x02" +
		"\x02\x02\u024D\u0251\x050\x19\x02\u024E\u0250\x07?\x02\x02\u024F\u024E" +
		"\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02" +
		"\u0251\u0252\x03\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0251\x03" +
		"\x02\x02\x02\u0254\u0255\x056\x1C\x02\u0255\u0256\x05\n\x06\x02\u0256" +
		"/\x03\x02\x02\x02\u0257\u0258\t\t\x02\x02\u02581\x03\x02\x02\x02\u0259" +
		"\u025D\x054\x1B\x02\u025A\u025C\x07?\x02\x02\u025B\u025A\x03\x02\x02\x02" +
		"\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D\u025E\x03" +
		"\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u0260" +
		"\u0259\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0260\x03\x02" +
		"\x02\x02\u0262\u0263\x03\x02\x02\x02\u02633\x03\x02\x02\x02\u0264\u0265" +
		"\x058\x1D\x02\u02655\x03\x02\x02\x02\u0266\u026A\x05:\x1E\x02\u0267\u0269" +
		"\x07?\x02\x02\u0268\u0267\x03\x02\x02\x02\u0269\u026C\x03\x02\x02\x02" +
		"\u026A\u0268\x03\x02\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026D\x03" +
		"\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026D\u0271\x07\x06\x02\x02\u026E" +
		"\u0270\x07?\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0273\x03\x02\x02" +
		"\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274" +
		"\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0278\x058\x1D\x02" +
		"\u0275\u0277\x07?\x02\x02\u0276\u0275\x03\x02\x02\x02\u0277\u027A\x03" +
		"\x02\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02\u0279" +
		"\u0289\x03\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027B\u027F\x07-\x02" +
		"\x02\u027C\u027E\x07?\x02\x02\u027D\u027C\x03\x02\x02\x02\u027E\u0281" +
		"\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02" +
		"\u0280\u0282\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282\u0286\x05" +
		"F$\x02\u0283\u0285\x07?\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285\u0288" +
		"\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02" +
		"\u0287\u028A\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0289\u027B\x03" +
		"\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A7\x03\x02\x02\x02\u028B" +
		"\u02A7\x07:\x02\x02\u028C\u028D\x07:\x02\x02\u028D\u0291\x075\x02\x02" +
		"\u028E\u0290\x07?\x02\x02\u028F\u028E\x03\x02\x02\x02\u0290\u0293\x03" +
		"\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292" +
		"\u0294\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0298\x07:\x02" +
		"\x02\u0295\u0297\x07?\x02\x02\u0296\u0295\x03\x02\x02\x02\u0297\u029A" +
		"\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02" +
		"\u0299\u029B\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029B\u02A7\x07" +
		"7\x02\x02\u029C\u02A0\x07\x1A\x02\x02\u029D\u029F\x07?\x02\x02\u029E\u029D" +
		"\x03\x02\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02" +
		"\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A3\x03\x02\x02\x02\u02A2\u02A0\x03" +
		"\x02\x02\x02\u02A3\u02A4\x07\x1B\x02\x02\u02A4\u02A5\x07:\x02\x02\u02A5" +
		"\u02A7\x07\x1C\x02\x02\u02A6\u028B\x03\x02\x02\x02\u02A6\u028C\x03\x02" +
		"\x02\x02\u02A6\u029C\x03\x02\x02\x02\u02A79\x03\x02\x02\x02\u02A8\u02A9" +
		"\x05<\x1F\x02\u02A9;\x03\x02\x02\x02\u02AA\u02AB\x07:\x02\x02\u02AB=\x03" +
		"\x02\x02\x02\u02AC\u02BE\n\n\x02\x02\u02AD\u02B1\x07\x1B\x02\x02\u02AE" +
		"\u02B0\x07?\x02\x02\u02AF\u02AE\x03\x02\x02\x02\u02B0\u02B3\x03\x02\x02" +
		"\x02\u02B1\u02AF\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B4" +
		"\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B8\x05> \x02\u02B5" +
		"\u02B7\x07?\x02\x02\u02B6\u02B5\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02" +
		"\x02\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BB" +
		"\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB\u02BC\x07\x1C\x02\x02" +
		"\u02BC\u02BE\x03\x02\x02\x02\u02BD\u02AC\x03\x02\x02\x02\u02BD\u02AD\x03" +
		"\x02\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF" +
		"\u02C0\x03\x02\x02\x02\u02C0?\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02" +
		"\x02\u02C2\u02C6\x05B\"\x02\u02C3\u02C5\x07?\x02\x02\u02C4\u02C3\x03\x02" +
		"\x02\x02\u02C5\u02C8\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6" +
		"\u02C7\x03\x02\x02\x02\u02C7\u02D7\x03\x02\x02\x02\u02C8\u02C6\x03\x02" +
		"\x02\x02\u02C9\u02CD\x07,\x02\x02\u02CA\u02CC\x07?\x02\x02\u02CB\u02CA" +
		"\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02" +
		"\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x03\x02\x02\x02\u02CF\u02CD\x03" +
		"\x02\x02\x02\u02D0\u02D4\x07\x07\x02\x02\u02D1\u02D3\x07?\x02\x02\u02D2" +
		"\u02D1\x03\x02\x02\x02\u02D3\u02D6\x03\x02\x02\x02\u02D4\u02D2\x03\x02" +
		"\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D8\x03\x02\x02\x02\u02D6" +
		"\u02D4\x03\x02\x02\x02\u02D7\u02C9\x03\x02\x02\x02\u02D7\u02D8\x03\x02" +
		"\x02\x02\u02D8A\x03\x02\x02\x02\u02D9\u02DD\x05D#\x02\u02DA\u02DC\x07" +
		"?\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD" +
		"\u02DB\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02F0\x03\x02" +
		"\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02E0\u02E4\x07,\x02\x02\u02E1\u02E3" +
		"\x07?\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E3\u02E6\x03\x02\x02\x02" +
		"\u02E4\u02E2\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E7\x03" +
		"\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02EB\x05D#\x02\u02E8\u02EA" +
		"\x07?\x02\x02\u02E9\u02E8\x03\x02\x02\x02\u02EA\u02ED\x03\x02\x02\x02" +
		"\u02EB\u02E9\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EF\x03" +
		"\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02EE\u02E0\x03\x02\x02\x02\u02EF" +
		"\u02F2\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03\x02" +
		"\x02\x02\u02F1C\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F3\u02F7" +
		"\x05:\x1E\x02\u02F4\u02F6\x07?\x02\x02\u02F5\u02F4\x03\x02\x02\x02\u02F6" +
		"\u02F9\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03\x02" +
		"\x02\x02\u02F8\u02FA\x03\x02\x02\x02\u02F9\u02F7\x03\x02\x02\x02\u02FA" +
		"\u02FE\x07\x06\x02\x02\u02FB\u02FD\x07?\x02\x02\u02FC\u02FB\x03\x02\x02" +
		"\x02\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF" +
		"\x03\x02\x02\x02\u02FF\u0301\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02" +
		"\u0301\u0302\x052\x1A\x02\u0302E\x03\x02\x02\x02\u0303\u0328\x05&\x14" +
		"\x02\u0304\u0308\x07\x1D\x02\x02\u0305\u0307\x07?\x02\x02\u0306\u0305" +
		"\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02" +
		"\u0308\u0309\x03\x02\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A\u0308\x03" +
		"\x02\x02\x02\u030B\u030F\x05,\x17\x02\u030C\u030E\x07?\x02\x02\u030D\u030C" +
		"\x03\x02\x02\x02\u030E\u0311\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02" +
		"\u030F\u0310\x03\x02\x02\x02\u0310\u0322\x03\x02\x02\x02\u0311\u030F\x03" +
		"\x02\x02\x02\u0312\u0316\x07,\x02\x02\u0313\u0315\x07?\x02\x02\u0314\u0313" +
		"\x03\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02" +
		"\u0316\u0317\x03\x02\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318\u0316\x03" +
		"\x02\x02\x02\u0319\u031D\x05,\x17\x02\u031A\u031C\x07?\x02\x02\u031B\u031A" +
		"\x03\x02\x02\x02\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02" +
		"\u031D\u031E\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F\u031D\x03" +
		"\x02\x02\x02\u0320\u0312\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322" +
		"\u0320\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0325\x03\x02" +
		"\x02\x02\u0324\u0322\x03\x02\x02\x02\u0325\u0326\x07\x1E\x02\x02\u0326" +
		"\u0328\x03\x02\x02\x02\u0327\u0303\x03\x02\x02\x02\u0327\u0304\x03\x02" +
		"\x02\x02\u0328G\x03\x02\x02\x02\u0329\u032F\x05J&\x02\u032A\u032F\x05" +
		"P)\x02\u032B\u032F\x05R*\x02\u032C\u032F\x05V,\x02\u032D\u032F\x05^0\x02" +
		"\u032E\u0329\x03\x02\x02\x02\u032E\u032A\x03\x02\x02\x02\u032E\u032B\x03" +
		"\x02\x02\x02\u032E\u032C\x03\x02\x02\x02\u032E\u032D\x03\x02\x02\x02\u032F" +
		"I\x03\x02\x02\x02\u0330\u0334\x07\x1F\x02\x02\u0331\u0333\x07?\x02\x02" +
		"\u0332\u0331\x03\x02\x02\x02\u0333\u0336\x03\x02\x02\x02\u0334\u0332\x03" +
		"\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u0338\x03\x02\x02\x02\u0336" +
		"\u0334\x03\x02\x02\x02\u0337\u0339\x05L\'\x02\u0338\u0337\x03\x02\x02" +
		"\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033D\x03\x02\x02\x02\u033A\u033C" +
		"\x07?\x02\x02\u033B\u033A\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02" +
		"\u033D\u033B\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u0340\x03" +
		"\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u0340\u0341\x07 \x02\x02\u0341" +
		"K\x03\x02\x02\x02\u0342\u0344\x05N(\x02\u0343\u0342\x03\x02\x02\x02\u0344" +
		"\u0345\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345\u0346\x03\x02" +
		"\x02\x02\u0346M\x03\x02\x02\x02\u0347\u0349\x07?\x02\x02\u0348\u0347\x03" +
		"\x02\x02\x02\u0349\u034C\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034A" +
		"\u034B\x03\x02\x02\x02\u034B\u034F\x03\x02\x02\x02\u034C\u034A\x03\x02" +
		"\x02\x02\u034D\u0350\x05H%\x02\u034E\u0350\x05.\x18\x02\u034F\u034D\x03" +
		"\x02\x02\x02\u034F\u034E\x03\x02\x02\x02\u0350\u0354\x03\x02\x02\x02\u0351" +
		"\u0353\x07?\x02\x02\u0352\u0351\x03\x02\x02\x02\u0353\u0356\x03\x02\x02" +
		"\x02\u0354\u0352\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355O\x03" +
		"\x02\x02\x02\u0356\u0354\x03\x02\x02\x02\u0357\u0359\x05*\x16\x02\u0358" +
		"\u0357\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02" +
		"\x02\x02\u035A\u035B\x05\n\x06\x02\u035BQ\x03\x02\x02\x02\u035C\u0360" +
		"\x07\x12\x02\x02\u035D\u035F\x07?\x02\x02\u035E\u035D\x03\x02\x02\x02" +
		"\u035F\u0362\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03" +
		"\x02\x02\x02\u0361\u0363\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363" +
		"\u0367\x07\x1B\x02\x02\u0364\u0366\x07?\x02\x02\u0365\u0364\x03\x02\x02" +
		"\x02\u0366\u0369\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367\u0368" +
		"\x03\x02\x02\x02\u0368\u036A\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02" +
		"\u036A\u036E\x05*\x16\x02\u036B\u036D\x07?\x02\x02\u036C\u036B\x03\x02" +
		"\x02\x02\u036D\u0370\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036E" +
		"\u036F\x03\x02\x02\x02\u036F\u0371\x03\x02\x02\x02\u0370\u036E\x03\x02" +
		"\x02\x02\u0371\u0375\x07\x1C\x02\x02\u0372\u0374\x07?\x02\x02\u0373\u0372" +
		"\x03\x02\x02\x02\u0374\u0377\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02" +
		"\u0375\u0376\x03\x02\x02\x02\u0376\u0378\x03\x02\x02\x02\u0377\u0375\x03" +
		"\x02\x02\x02\u0378\u037C\x05H%\x02\u0379\u037B\x07?\x02\x02\u037A\u0379" +
		"\x03\x02\x02\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02" +
		"\u037C\u037D\x03\x02\x02\x02\u037D\u0387\x03\x02\x02\x02\u037E\u037C\x03" +
		"\x02\x02\x02\u037F\u0383\x07\x13\x02\x02\u0380\u0382\x07?\x02\x02\u0381" +
		"\u0380\x03\x02\x02\x02\u0382\u0385\x03\x02\x02\x02\u0383\u0381\x03\x02" +
		"\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0386\x03\x02\x02\x02\u0385" +
		"\u0383\x03\x02\x02\x02\u0386\u0388\x05H%\x02\u0387\u037F\x03\x02\x02\x02" +
		"\u0387\u0388\x03\x02\x02\x02\u0388\u03B5\x03\x02\x02\x02\u0389\u038D\x07" +
		"\v\x02\x02\u038A\u038C\x07?\x02\x02\u038B\u038A\x03\x02\x02\x02\u038C" +
		"\u038F\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02" +
		"\x02\x02\u038E\u0390\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02\u0390" +
		"\u0394\x07\x1B\x02\x02\u0391\u0393\x07?\x02\x02\u0392\u0391\x03\x02\x02" +
		"\x02\u0393\u0396\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0395" +
		"\x03\x02\x02\x02\u0395\u0397\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02" +
		"\u0397\u039B\x05*\x16\x02\u0398\u039A\x07?\x02\x02\u0399\u0398\x03\x02" +
		"\x02\x02\u039A\u039D\x03\x02\x02\x02\u039B\u0399\x03\x02\x02\x02\u039B" +
		"\u039C\x03\x02\x02\x02\u039C\u039E\x03\x02\x02\x02\u039D\u039B\x03\x02" +
		"\x02\x02\u039E\u03A2\x07\x1C\x02\x02\u039F\u03A1\x07?\x02\x02\u03A0\u039F" +
		"\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02" +
		"\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A5\x03\x02\x02\x02\u03A4\u03A2\x03" +
		"\x02\x02\x02\u03A5\u03AF\x07\x1F\x02\x02\u03A6\u03A8\x07?\x02\x02\u03A7" +
		"\u03A6\x03\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02" +
		"\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB" +
		"\u03A9\x03\x02\x02\x02\u03AC\u03AE\x05T+\x02\u03AD\u03A9\x03\x02\x02\x02" +
		"\u03AE\u03B1\x03\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03AF\u03B0\x03" +
		"\x02\x02\x02\u03B0\u03B2\x03\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B2" +
		"\u03B3\x07 \x02\x02\u03B3\u03B5\x03\x02\x02\x02\u03B4\u035C\x03\x02\x02" +
		"\x02\u03B4\u0389\x03\x02\x02\x02\u03B5S\x03\x02\x02\x02\u03B6\u03BA\x07" +
		"\f\x02\x02\u03B7\u03B9\x07?\x02\x02\u03B8\u03B7\x03\x02\x02\x02\u03B9" +
		"\u03BC\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BA\u03BB\x03\x02" +
		"\x02\x02\u03BB\u03BD\x03\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BD" +
		"\u03C1\x05,\x17\x02\u03BE\u03C0\x07?\x02\x02\u03BF\u03BE\x03\x02\x02\x02" +
		"\u03C0\u03C3\x03\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03" +
		"\x02\x02\x02\u03C2\u03C4\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C4" +
		"\u03C8\x07\x06\x02\x02\u03C5\u03C7\x07?\x02\x02\u03C6\u03C5\x03\x02\x02" +
		"\x02\u03C7\u03CA\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9" +
		"\x03\x02\x02\x02\u03C9\u03CB\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02" +
		"\u03CB\u03CC\x05H%\x02\u03CC\u03DD\x03\x02\x02\x02\u03CD\u03D1\x07\r\x02" +
		"\x02\u03CE\u03D0\x07?\x02\x02\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D3" +
		"\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02" +
		"\u03D2\u03D4\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D4\u03D8\x07" +
		"\x06\x02\x02\u03D5\u03D7\x07?\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D7" +
		"\u03DA\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9\x03\x02" +
		"\x02\x02\u03D9\u03DB\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB" +
		"\u03DD\x05H%\x02\u03DC\u03B6\x03\x02\x02\x02\u03DC\u03CD\x03\x02\x02\x02" +
		"\u03DDU\x03\x02\x02\x02\u03DE\u03E2\x07\x14\x02\x02\u03DF\u03E1\x07?\x02" +
		"\x02\u03E0\u03DF\x03\x02\x02\x02\u03E1\u03E4\x03\x02\x02\x02\u03E2\u03E0" +
		"\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E5\x03\x02\x02\x02" +
		"\u03E4\u03E2\x03\x02\x02\x02\u03E5\u03E6\x07\x1B\x02\x02\u03E6\u03E7\x05" +
		"X-\x02\u03E7\u03EB\x07\x1C\x02\x02\u03E8\u03EA\x07?\x02\x02\u03E9\u03E8" +
		"\x03\x02\x02\x02\u03EA\u03ED\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02" +
		"\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03EE\x03\x02\x02\x02\u03ED\u03EB\x03" +
		"\x02\x02\x02\u03EE\u03EF\x05H%\x02\u03EF\u0435\x03\x02\x02\x02\u03F0\u03F4" +
		"\x07\x11\x02\x02\u03F1\u03F3\x07?\x02\x02\u03F2\u03F1\x03\x02\x02\x02" +
		"\u03F3\u03F6\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4\u03F5\x03" +
		"\x02\x02\x02\u03F5\u03F7\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F7" +
		"\u03FB\x07\x1B\x02\x02\u03F8\u03FA\x07?\x02\x02\u03F9\u03F8\x03\x02\x02" +
		"\x02\u03FA\u03FD\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FC" +
		"\x03\x02\x02\x02\u03FC\u03FE\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02" +
		"\u03FE\u0402\x05*\x16\x02\u03FF\u0401\x07?\x02\x02\u0400\u03FF\x03\x02" +
		"\x02\x02\u0401\u0404\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402" +
		"\u0403\x03\x02\x02\x02\u0403\u0405\x03\x02\x02\x02\u0404\u0402\x03\x02" +
		"\x02\x02\u0405\u0409\x07\x1C\x02\x02\u0406\u0408\x07?\x02\x02\u0407\u0406" +
		"\x03\x02\x02\x02\u0408\u040B\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02" +
		"\u0409\u040A\x03\x02\x02\x02\u040A\u040C\x03\x02\x02\x02\u040B\u0409\x03" +
		"\x02\x02\x02\u040C\u040D\x05H%\x02\u040D\u0435\x03\x02\x02\x02\u040E\u0412" +
		"\x07\x10\x02\x02\u040F\u0411\x07?\x02\x02\u0410\u040F\x03\x02\x02\x02" +
		"\u0411\u0414\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412\u0413\x03" +
		"\x02\x02\x02\u0413\u0415\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0415" +
		"\u0419\x05H%\x02\u0416\u0418\x07?\x02\x02\u0417\u0416\x03\x02\x02\x02" +
		"\u0418\u041B\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02\u0419\u041A\x03" +
		"\x02\x02\x02\u041A\u041C\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041C" +
		"\u0420\x07\x11\x02\x02\u041D\u041F\x07?\x02\x02\u041E\u041D\x03\x02\x02" +
		"\x02\u041F\u0422\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421" +
		"\x03\x02\x02\x02\u0421\u0423\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02" +
		"\u0423\u0427\x07\x1B\x02\x02\u0424\u0426\x07?\x02\x02\u0425\u0424\x03" +
		"\x02\x02\x02\u0426\u0429\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427" +
		"\u0428\x03\x02\x02\x02\u0428\u042A\x03\x02\x02\x02\u0429\u0427\x03\x02" +
		"\x02\x02\u042A\u042E\x05*\x16\x02\u042B\u042D\x07?\x02\x02\u042C\u042B" +
		"\x03\x02\x02\x02\u042D\u0430\x03\x02\x02\x02\u042E\u042C\x03\x02\x02\x02" +
		"\u042E\u042F\x03\x02\x02\x02\u042F\u0431\x03\x02\x02\x02\u0430\u042E\x03" +
		"\x02\x02\x02\u0431\u0432\x07\x1C\x02\x02\u0432\u0433\x05\n\x06\x02\u0433" +
		"\u0435\x03\x02\x02\x02\u0434\u03DE\x03\x02\x02\x02\u0434\u03F0\x03\x02" +
		"\x02\x02\u0434\u040E\x03\x02\x02\x02\u0435W\x03\x02\x02\x02\u0436\u043B" +
		"\x05Z.\x02\u0437\u0439\x05*\x16\x02\u0438\u0437\x03\x02\x02\x02\u0438" +
		"\u0439\x03\x02\x02\x02\u0439\u043B\x03\x02\x02\x02\u043A\u0436\x03\x02" +
		"\x02\x02\u043A\u0438\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C" +
		"\u043E\x05\n\x06\x02\u043D\u043F\x05\\/\x02\u043E\u043D\x03\x02\x02\x02" +
		"\u043E\u043F\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0442\x05" +
		"\n\x06\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0441\u0443\x05\\/\x02\u0442\u0441\x03\x02\x02\x02\u0442\u0443\x03\x02" +
		"\x02\x02\u0443Y\x03\x02\x02\x02\u0444\u0448\x050\x19\x02\u0445\u0447\x07" +
		"?\x02\x02\u0446\u0445\x03\x02\x02\x02\u0447\u044A\x03\x02\x02\x02\u0448" +
		"\u0446\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044B\x03\x02" +
		"\x02\x02\u044A\u0448\x03\x02\x02\x02\u044B\u044C\x056\x1C\x02\u044C[\x03" +
		"\x02\x02\x02\u044D\u0451\x05&\x14\x02\u044E\u0450\x07?\x02\x02\u044F\u044E" +
		"\x03\x02\x02\x02\u0450\u0453\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02" +
		"\u0451\u0452\x03\x02\x02\x02\u0452\u0464\x03\x02\x02\x02\u0453\u0451\x03" +
		"\x02\x02\x02\u0454\u0458\x07,\x02\x02\u0455\u0457\x07?\x02\x02\u0456\u0455" +
		"\x03\x02\x02\x02\u0457\u045A\x03\x02\x02\x02\u0458\u0456\x03\x02\x02\x02" +
		"\u0458\u0459\x03\x02\x02\x02\u0459\u045B\x03\x02\x02\x02\u045A\u0458\x03" +
		"\x02\x02\x02\u045B\u045F\x05&\x14\x02\u045C\u045E\x07?\x02\x02\u045D\u045C" +
		"\x03\x02\x02\x02\u045E\u0461\x03\x02\x02\x02\u045F\u045D\x03\x02\x02\x02" +
		"\u045F\u0460\x03\x02\x02\x02\u0460\u0463\x03\x02\x02\x02\u0461\u045F\x03" +
		"\x02\x02\x02\u0462\u0454\x03\x02\x02\x02\u0463\u0466\x03\x02\x02\x02\u0464" +
		"\u0462\x03\x02\x02\x02\u0464\u0465\x03\x02\x02\x02\u0465]\x03\x02\x02" +
		"\x02\u0466\u0464\x03\x02\x02\x02\u0467\u0473\t\v\x02\x02\u0468\u046C\x07" +
		"\x17\x02\x02\u0469\u046B\x07?\x02\x02\u046A\u0469\x03\x02\x02\x02\u046B" +
		"\u046E\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D\x03\x02" +
		"\x02\x02\u046D\u0470\x03\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046F" +
		"\u0471\x05*\x16\x02\u0470\u046F\x03\x02\x02\x02\u0470\u0471\x03\x02\x02" +
		"\x02\u0471\u0473\x03\x02\x02\x02\u0472\u0467\x03\x02\x02\x02\u0472\u0468" +
		"\x03\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0475\x05\n\x06\x02" +
		"\u0475_\x03\x02\x02\x02\xAAajlnrx\x7F\x84\x8A\x91\x98\xA0\xA7\xB0\xB5" +
		"\xBB\xC0\xC6\xCD\xD4\xDB\xDE\xE4\xEB\xF2\xF6\xFB\u0100\u0106\u010D\u0114" +
		"\u0119\u0121\u0126\u012C\u0131\u013A\u0141\u0146\u014D\u0154\u015B\u0160" +
		"\u0163\u016A\u0171\u0178\u017D\u0180\u0187\u018E\u0195\u019A\u019D\u01A4" +
		"\u01AB\u01B2\u01B7\u01BA\u01C1\u01C8\u01CF\u01D4\u01D7\u01DE\u01E5\u01EC" +
		"\u01F1\u01F4\u01FB\u0202\u0209\u0210\u0217\u021A\u0221\u0228\u022D\u0235" +
		"\u023C\u0243\u0248\u0251\u025D\u0262\u026A\u0271\u0278\u027F\u0286\u0289" +
		"\u0291\u0298\u02A0\u02A6\u02B1\u02B8\u02BD\u02BF\u02C6\u02CD\u02D4\u02D7" +
		"\u02DD\u02E4\u02EB\u02F0\u02F7\u02FE\u0308\u030F\u0316\u031D\u0322\u0327" +
		"\u032E\u0334\u0338\u033D\u0345\u034A\u034F\u0354\u0358\u0360\u0367\u036E" +
		"\u0375\u037C\u0383\u0387\u038D\u0394\u039B\u03A2\u03A9\u03AF\u03B4\u03BA" +
		"\u03C1\u03C8\u03D1\u03D8\u03DC\u03E2\u03EB\u03F4\u03FB\u0402\u0409\u0412" +
		"\u0419\u0420\u0427\u042E\u0434\u0438\u043A\u043E\u0442\u0448\u0451\u0458" +
		"\u045F\u0464\u046C\u0470\u0472";
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


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifierPrimaryExpressionContext extends PrimaryExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(KipperParser.Identifier, 0); }
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
export class ConstantPrimaryExpressionContext extends PrimaryExpressionContext {
	public Constant(): TerminalNode { return this.getToken(KipperParser.Constant, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterConstantPrimaryExpression) {
			listener.enterConstantPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitConstantPrimaryExpression) {
			listener.exitConstantPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitConstantPrimaryExpression) {
			return visitor.visitConstantPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringPrimaryExpressionContext extends PrimaryExpressionContext {
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.StringLiteral);
		} else {
			return this.getToken(KipperParser.StringLiteral, i);
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
	public FStringLiteral(): TerminalNode[];
	public FStringLiteral(i: number): TerminalNode;
	public FStringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.FStringLiteral);
		} else {
			return this.getToken(KipperParser.FStringLiteral, i);
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
export class TangledPrimaryExpressionContext extends PrimaryExpressionContext {
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(KipperParser.RightParen, 0); }
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


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_postfixExpression; }
	public copyFrom(ctx: PostfixExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ReferenceExpressionContext extends PostfixExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.MinusMinus, 0); }
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
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.WS);
		} else {
			return this.getToken(KipperParser.WS, i);
		}
	}
	constructor(ctx: PostfixExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterReferenceExpression) {
			listener.enterReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitReferenceExpression) {
			listener.exitReferenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitReferenceExpression) {
			return visitor.visitReferenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends PostfixExpressionContext {
	public CallFunc(): TerminalNode { return this.getToken(KipperParser.CallFunc, 0); }
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
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
	public argumentExpressionList(): ArgumentExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentExpressionListContext);
	}
	constructor(ctx: PostfixExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_unaryExpression; }
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
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.MinusMinus, 0); }
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
	public castOrConvertExpression(): CastOrConvertExpressionContext {
		return this.getRuleContext(0, CastOrConvertExpressionContext);
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
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.MinusMinus, 0); }
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


export class UnaryOperatorContext extends ParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_castOrConvertExpression; }
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
	public As(): TerminalNode { return this.getToken(KipperParser.As, 0); }
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
	public get ruleIndex(): number { return KipperParser.RULE_multiplicativeExpression; }
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
	public PowerTo(): TerminalNode[];
	public PowerTo(i: number): TerminalNode;
	public PowerTo(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.PowerTo);
		} else {
			return this.getToken(KipperParser.PowerTo, i);
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
	public get ruleIndex(): number { return KipperParser.RULE_additiveExpression; }
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
	public get ruleIndex(): number { return KipperParser.RULE_relationalExpression; }
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
	public get ruleIndex(): number { return KipperParser.RULE_equalityExpression; }
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
	public get ruleIndex(): number { return KipperParser.RULE_logicalAndExpression; }
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
	public get ruleIndex(): number { return KipperParser.RULE_logicalOrExpression; }
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
	public get ruleIndex(): number { return KipperParser.RULE_conditionalExpression; }
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getRuleContext(0, ConditionalExpressionContext);
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
	public get ruleIndex(): number { return KipperParser.RULE_assignmentExpression; }
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
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
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
	public constantExpression(): ConstantExpressionContext[];
	public constantExpression(i: number): ConstantExpressionContext;
	public constantExpression(i?: number): ConstantExpressionContext | ConstantExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantExpressionContext);
		} else {
			return this.getRuleContext(i, ConstantExpressionContext);
		}
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
	public LeftBrace(): TerminalNode | undefined { return this.tryGetToken(KipperParser.LeftBrace, 0); }
	public RightBrace(): TerminalNode | undefined { return this.tryGetToken(KipperParser.RightBrace, 0); }
	public labeledStatement(): LabeledStatementContext[];
	public labeledStatement(i: number): LabeledStatementContext;
	public labeledStatement(i?: number): LabeledStatementContext | LabeledStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabeledStatementContext);
		} else {
			return this.getRuleContext(i, LabeledStatementContext);
		}
	}
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


