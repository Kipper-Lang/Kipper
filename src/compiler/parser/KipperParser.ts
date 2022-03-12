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
	public static readonly RULE_listConstant = 6;
	public static readonly RULE_postfixExpression = 7;
	public static readonly RULE_arraySpecifier = 8;
	public static readonly RULE_argumentExpressionList = 9;
	public static readonly RULE_unaryExpression = 10;
	public static readonly RULE_incrementOrDecrementOperator = 11;
	public static readonly RULE_unaryOperator = 12;
	public static readonly RULE_castOrConvertExpression = 13;
	public static readonly RULE_multiplicativeExpression = 14;
	public static readonly RULE_additiveExpression = 15;
	public static readonly RULE_relationalExpression = 16;
	public static readonly RULE_equalityExpression = 17;
	public static readonly RULE_logicalAndExpression = 18;
	public static readonly RULE_logicalOrExpression = 19;
	public static readonly RULE_conditionalExpression = 20;
	public static readonly RULE_assignmentExpression = 21;
	public static readonly RULE_assignmentOperator = 22;
	public static readonly RULE_expression = 23;
	public static readonly RULE_constantExpression = 24;
	public static readonly RULE_declaration = 25;
	public static readonly RULE_storageTypeSpecifier = 26;
	public static readonly RULE_declarationSpecifiers = 27;
	public static readonly RULE_declarationSpecifier = 28;
	public static readonly RULE_initDeclarator = 29;
	public static readonly RULE_typeSpecifier = 30;
	public static readonly RULE_declarator = 31;
	public static readonly RULE_directDeclarator = 32;
	public static readonly RULE_nestedParenthesesBlock = 33;
	public static readonly RULE_parameterTypeList = 34;
	public static readonly RULE_parameterList = 35;
	public static readonly RULE_parameterDeclaration = 36;
	public static readonly RULE_initializer = 37;
	public static readonly RULE_statement = 38;
	public static readonly RULE_compoundStatement = 39;
	public static readonly RULE_blockItemList = 40;
	public static readonly RULE_blockItem = 41;
	public static readonly RULE_expressionStatement = 42;
	public static readonly RULE_selectionStatement = 43;
	public static readonly RULE_labeledStatement = 44;
	public static readonly RULE_iterationStatement = 45;
	public static readonly RULE_forCondition = 46;
	public static readonly RULE_forDeclaration = 47;
	public static readonly RULE_forExpression = 48;
	public static readonly RULE_jumpStatement = 49;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "translationUnit", "externalItem", "functionDefinition", 
		"endOfItem", "primaryExpression", "listConstant", "postfixExpression", 
		"arraySpecifier", "argumentExpressionList", "unaryExpression", "incrementOrDecrementOperator", 
		"unaryOperator", "castOrConvertExpression", "multiplicativeExpression", 
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
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__1) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.For) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0)) {
				{
				this.state = 100;
				this.translationUnit();
				}
			}

			this.state = 103;
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
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 112;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 105;
					this.externalItem();
					}
					break;

				case 2:
					{
					this.state = 106;
					this.endOfItem();
					}
					break;

				case 3:
					{
					this.state = 108;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 107;
							this.match(KipperParser.WS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 110;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__1) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.For) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0));
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
			this.state = 118;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.DefFunc:
				_localctx = new ExternalFunctionDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
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
			case KipperParser.LeftBracket:
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
				this.state = 117;
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
			this.state = 120;
			this.match(KipperParser.DefFunc);
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 121;
				this.match(KipperParser.WS);
				}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 127;
			this.declarator();
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 128;
				this.match(KipperParser.WS);
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 134;
			this.match(KipperParser.LeftParen);
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Identifier) {
				{
				this.state = 135;
				this.parameterTypeList();
				}
			}

			this.state = 138;
			this.match(KipperParser.RightParen);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 139;
				this.match(KipperParser.WS);
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 145;
			this.match(KipperParser.T__0);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 146;
				this.match(KipperParser.WS);
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
			this.typeSpecifier();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 153;
				this.match(KipperParser.WS);
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 159;
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
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Whitespace) {
				{
				{
				this.state = 161;
				this.match(KipperParser.Whitespace);
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 167;
			this.match(KipperParser.T__1);
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 168;
					this.match(KipperParser.Whitespace);
					}
					}
				}
				this.state = 173;
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
			this.state = 203;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Identifier:
				_localctx = new IdentifierPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 174;
				this.match(KipperParser.Identifier);
				}
				break;
			case KipperParser.Constant:
				_localctx = new ConstantPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 175;
				this.match(KipperParser.Constant);
				}
				break;
			case KipperParser.StringLiteral:
				_localctx = new StringPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 176;
					this.match(KipperParser.StringLiteral);
					this.state = 180;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 177;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 182;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
					}
					}
					}
					this.state = 185;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.StringLiteral);
				}
				break;
			case KipperParser.FStringLiteral:
				_localctx = new FStringPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 187;
					this.match(KipperParser.FStringLiteral);
					this.state = 191;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 188;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 193;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					}
					}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.FStringLiteral);
				}
				break;
			case KipperParser.LeftParen:
				_localctx = new TangledPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 198;
				this.match(KipperParser.LeftParen);
				this.state = 199;
				this.expression();
				this.state = 200;
				this.match(KipperParser.RightParen);
				}
				break;
			case KipperParser.LeftBracket:
				_localctx = new ListConstantPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 202;
				this.listConstant();
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
	public listConstant(): ListConstantContext {
		let _localctx: ListConstantContext = new ListConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KipperParser.RULE_listConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(KipperParser.LeftBracket);
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
			this.state = 212;
			this.constantExpression();
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 213;
				this.match(KipperParser.WS);
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 219;
				this.match(KipperParser.Comma);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 220;
					this.match(KipperParser.WS);
					}
					}
					this.state = 225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 226;
				this.constantExpression();
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 227;
					this.match(KipperParser.WS);
					}
					}
					this.state = 232;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 238;
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
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, KipperParser.RULE_postfixExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 281;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftParen:
			case KipperParser.LeftBracket:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
				_localctx = new ReferenceExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.primaryExpression();
				this.state = 247;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case KipperParser.LeftBracket:
					{
					this.state = 242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 241;
						this.arraySpecifier();
						}
						}
						this.state = 244;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === KipperParser.LeftBracket);
					}
					break;
				case KipperParser.PlusPlus:
				case KipperParser.MinusMinus:
					{
					this.state = 246;
					this.incrementOrDecrementOperator();
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
				this.state = 249;
				this.match(KipperParser.CallFunc);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 250;
					this.match(KipperParser.WS);
					}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 256;
				this.primaryExpression();
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 257;
					this.match(KipperParser.WS);
					}
					}
					this.state = 262;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 263;
				this.match(KipperParser.LeftParen);
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
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 270;
					this.argumentExpressionList();
					}
				}

				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 273;
					this.match(KipperParser.WS);
					}
					}
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 279;
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
	public arraySpecifier(): ArraySpecifierContext {
		let _localctx: ArraySpecifierContext = new ArraySpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KipperParser.RULE_arraySpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(KipperParser.LeftBracket);
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
			this.expression();
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 291;
				this.match(KipperParser.WS);
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 297;
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
	public argumentExpressionList(): ArgumentExpressionListContext {
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KipperParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.assignmentExpression();
			this.state = 303;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 300;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 306;
				this.match(KipperParser.Comma);
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 307;
					this.match(KipperParser.WS);
					}
					}
					this.state = 312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 313;
				this.assignmentExpression();
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 314;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 319;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				}
				}
				this.state = 324;
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
		this.enterRule(_localctx, 20, KipperParser.RULE_unaryExpression);
		let _la: number;
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.LeftBracket:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
				_localctx = new PassOnUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 325;
				this.postfixExpression();
				}
				break;
			case KipperParser.PlusPlus:
			case KipperParser.MinusMinus:
				_localctx = new IncrementOrDecrementUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 326;
				this.incrementOrDecrementOperator();
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 327;
					this.match(KipperParser.WS);
					}
					}
					this.state = 332;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 333;
				this.postfixExpression();
				}
				break;
			case KipperParser.Plus:
			case KipperParser.Minus:
			case KipperParser.Not:
				_localctx = new OperatorModifiedUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 335;
				this.unaryOperator();
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 336;
					this.match(KipperParser.WS);
					}
					}
					this.state = 341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 342;
				this.postfixExpression();
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
	public incrementOrDecrementOperator(): IncrementOrDecrementOperatorContext {
		let _localctx: IncrementOrDecrementOperatorContext = new IncrementOrDecrementOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, KipperParser.RULE_incrementOrDecrementOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
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
		this.enterRule(_localctx, 24, KipperParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
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
		this.enterRule(_localctx, 26, KipperParser.RULE_castOrConvertExpression);
		let _la: number;
		try {
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 350;
				this.unaryExpression();
				}
				break;

			case 2:
				_localctx = new ActualCastOrConvertExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 351;
				this.unaryExpression();
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 352;
					this.match(KipperParser.WS);
					}
					}
					this.state = 357;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 358;
				this.match(KipperParser.As);
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 359;
					this.match(KipperParser.WS);
					}
					}
					this.state = 364;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 365;
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
		this.enterRule(_localctx, 28, KipperParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 396;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				_localctx = new PassOnMultiplicativeExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 369;
				this.castOrConvertExpression();
				}
				break;

			case 2:
				_localctx = new ActualMultiplicativeExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 370;
				this.castOrConvertExpression();
				this.state = 374;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (KipperParser.Star - 35)) | (1 << (KipperParser.Div - 35)) | (1 << (KipperParser.Mod - 35)) | (1 << (KipperParser.PowerTo - 35)))) !== 0)) {
					{
					{
					this.state = 377;
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
					this.state = 381;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 378;
						this.match(KipperParser.WS);
						}
						}
						this.state = 383;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 384;
					this.castOrConvertExpression();
					this.state = 388;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 385;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 390;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					}
					}
					}
					this.state = 395;
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
		this.enterRule(_localctx, 30, KipperParser.RULE_additiveExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				_localctx = new PassOnAdditiveExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 398;
				this.multiplicativeExpression();
				}
				break;

			case 2:
				_localctx = new ActualAdditiveExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this.multiplicativeExpression();
				this.state = 403;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Plus || _la === KipperParser.Minus) {
					{
					{
					this.state = 406;
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
					this.state = 410;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 407;
						this.match(KipperParser.WS);
						}
						}
						this.state = 412;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 413;
					this.multiplicativeExpression();
					this.state = 417;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					}
					}
					}
					this.state = 424;
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
		this.enterRule(_localctx, 32, KipperParser.RULE_relationalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 454;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				_localctx = new PassOnRelationalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.additiveExpression();
				}
				break;

			case 2:
				_localctx = new ActualRelationalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.additiveExpression();
				this.state = 432;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				}
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (KipperParser.Less - 51)) | (1 << (KipperParser.LessEqual - 51)) | (1 << (KipperParser.Greater - 51)) | (1 << (KipperParser.GreaterEqual - 51)))) !== 0)) {
					{
					{
					this.state = 435;
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
					this.state = 439;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 436;
						this.match(KipperParser.WS);
						}
						}
						this.state = 441;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 442;
					this.additiveExpression();
					this.state = 446;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 443;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 448;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					}
					}
					}
					this.state = 453;
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
		this.enterRule(_localctx, 34, KipperParser.RULE_equalityExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 483;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				_localctx = new PassOnEqualityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 456;
				this.relationalExpression();
				}
				break;

			case 2:
				_localctx = new ActualEqualityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 457;
				this.relationalExpression();
				this.state = 461;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				}
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Equal || _la === KipperParser.NotEqual) {
					{
					{
					this.state = 464;
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
					this.state = 468;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 465;
						this.match(KipperParser.WS);
						}
						}
						this.state = 470;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 471;
					this.relationalExpression();
					this.state = 475;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
					}
					}
					}
					this.state = 482;
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
		this.enterRule(_localctx, 36, KipperParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				_localctx = new PassOnLogicalAndExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this.equalityExpression();
				}
				break;

			case 2:
				_localctx = new ActualLogicalAndExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
				this.equalityExpression();
				this.state = 490;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.AndAnd) {
					{
					{
					this.state = 493;
					this.match(KipperParser.AndAnd);
					this.state = 497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 494;
						this.match(KipperParser.WS);
						}
						}
						this.state = 499;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 500;
					this.equalityExpression();
					this.state = 504;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 501;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 506;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					}
					}
					}
					this.state = 511;
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
		this.enterRule(_localctx, 38, KipperParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				_localctx = new PassOnLogicalOrExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 514;
				this.logicalAndExpression();
				}
				break;

			case 2:
				_localctx = new ActualLogicalOrExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 515;
				this.logicalAndExpression();
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 516;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 521;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				}
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.OrOr) {
					{
					{
					this.state = 522;
					this.match(KipperParser.OrOr);
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
					this.logicalAndExpression();
					this.state = 533;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
					}
					}
					}
					this.state = 540;
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
		this.enterRule(_localctx, 40, KipperParser.RULE_conditionalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				_localctx = new PassOnConditionalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.logicalOrExpression();
				}
				break;

			case 2:
				_localctx = new ActualConditionalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				this.logicalOrExpression();
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 545;
					this.match(KipperParser.WS);
					}
					}
					this.state = 550;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 551;
				this.match(KipperParser.T__2);
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 552;
					this.match(KipperParser.WS);
					}
					}
					this.state = 557;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 558;
				this.expression();
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 559;
					this.match(KipperParser.WS);
					}
					}
					this.state = 564;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 565;
				this.match(KipperParser.T__3);
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 566;
					this.match(KipperParser.WS);
					}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 572;
				this.conditionalExpression();
				this.state = 576;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 573;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
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
		this.enterRule(_localctx, 42, KipperParser.RULE_assignmentExpression);
		let _la: number;
		try {
			this.state = 598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				_localctx = new PassOnAssignmentExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 581;
				this.conditionalExpression();
				}
				break;

			case 2:
				_localctx = new ActualAssignmentExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 582;
				this.unaryExpression();
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 583;
					this.match(KipperParser.WS);
					}
					}
					this.state = 588;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 589;
				this.assignmentOperator();
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 590;
					this.match(KipperParser.WS);
					}
					}
					this.state = 595;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 596;
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
		this.enterRule(_localctx, 44, KipperParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
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
		this.enterRule(_localctx, 46, KipperParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.assignmentExpression();
			this.state = 606;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 603;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 609;
				this.match(KipperParser.Comma);
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
				this.state = 616;
				this.assignmentExpression();
				this.state = 620;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 617;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 622;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				}
				}
				}
				this.state = 627;
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
		this.enterRule(_localctx, 48, KipperParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
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
		this.enterRule(_localctx, 50, KipperParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.storageTypeSpecifier();
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 631;
				this.match(KipperParser.WS);
				}
				}
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 637;
			this.initDeclarator();
			this.state = 638;
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
		this.enterRule(_localctx, 52, KipperParser.RULE_storageTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
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
		this.enterRule(_localctx, 54, KipperParser.RULE_declarationSpecifiers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 642;
				this.declarationSpecifier();
				this.state = 646;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 643;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 648;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				}
				}
				this.state = 651;
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
		this.enterRule(_localctx, 56, KipperParser.RULE_declarationSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
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
		this.enterRule(_localctx, 58, KipperParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this.declarator();
			this.state = 659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 656;
				this.match(KipperParser.WS);
				}
				}
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 662;
			this.match(KipperParser.T__3);
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 663;
				this.match(KipperParser.WS);
				}
				}
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 669;
			this.typeSpecifier();
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
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Assign) {
				{
				this.state = 676;
				this.match(KipperParser.Assign);
				this.state = 680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 677;
					this.match(KipperParser.WS);
					}
					}
					this.state = 682;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 683;
				this.initializer();
				this.state = 687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 684;
					this.match(KipperParser.WS);
					}
					}
					this.state = 689;
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
		this.enterRule(_localctx, 60, KipperParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.state = 719;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				_localctx = new SingleItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 692;
				this.match(KipperParser.Identifier);
				}
				break;

			case 2:
				_localctx = new MultiItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 693;
				this.match(KipperParser.Identifier);
				this.state = 694;
				this.match(KipperParser.Less);
				this.state = 698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 695;
					this.match(KipperParser.WS);
					}
					}
					this.state = 700;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 701;
				this.match(KipperParser.Identifier);
				this.state = 705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 702;
					this.match(KipperParser.WS);
					}
					}
					this.state = 707;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 708;
				this.match(KipperParser.Greater);
				}
				break;

			case 3:
				_localctx = new TypeofTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 709;
				this.match(KipperParser.Typeof);
				this.state = 713;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 710;
					this.match(KipperParser.WS);
					}
					}
					this.state = 715;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 716;
				this.match(KipperParser.LeftParen);
				this.state = 717;
				this.match(KipperParser.Identifier);
				this.state = 718;
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
		this.enterRule(_localctx, 62, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
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
		this.enterRule(_localctx, 64, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
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
		this.enterRule(_localctx, 66, KipperParser.RULE_nestedParenthesesBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 742;
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
						this.state = 725;
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
						this.state = 726;
						this.match(KipperParser.LeftParen);
						this.state = 730;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 727;
								this.match(KipperParser.WS);
								}
								}
							}
							this.state = 732;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
						}
						this.state = 733;
						this.nestedParenthesesBlock();
						this.state = 737;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 734;
							this.match(KipperParser.WS);
							}
							}
							this.state = 739;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 740;
						this.match(KipperParser.RightParen);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 746;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
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
		this.enterRule(_localctx, 68, KipperParser.RULE_parameterTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.parameterList();
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 748;
				this.match(KipperParser.WS);
				}
				}
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Comma) {
				{
				this.state = 754;
				this.match(KipperParser.Comma);
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 755;
					this.match(KipperParser.WS);
					}
					}
					this.state = 760;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 761;
				this.match(KipperParser.T__4);
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
		this.enterRule(_localctx, 70, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			this.parameterDeclaration();
			this.state = 774;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 771;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 776;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			}
			this.state = 793;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 777;
					this.match(KipperParser.Comma);
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
					this.state = 784;
					this.parameterDeclaration();
					this.state = 788;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 785;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 790;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					}
					}
					}
				}
				this.state = 795;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
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
		this.enterRule(_localctx, 72, KipperParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.declarator();
			this.state = 800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 797;
				this.match(KipperParser.WS);
				}
				}
				this.state = 802;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 803;
			this.match(KipperParser.T__3);
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 804;
				this.match(KipperParser.WS);
				}
				}
				this.state = 809;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 810;
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
		this.enterRule(_localctx, 74, KipperParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.assignmentExpression();
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
		this.enterRule(_localctx, 76, KipperParser.RULE_statement);
		try {
			this.state = 819;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 814;
				this.compoundStatement();
				}
				break;
			case KipperParser.T__1:
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.LeftBracket:
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
				this.state = 815;
				this.expressionStatement();
				}
				break;
			case KipperParser.Switch:
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 816;
				this.selectionStatement();
				}
				break;
			case KipperParser.Do:
			case KipperParser.While:
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 817;
				this.iterationStatement();
				}
				break;
			case KipperParser.Break:
			case KipperParser.Continue:
			case KipperParser.Return:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 818;
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
		this.enterRule(_localctx, 78, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this.match(KipperParser.LeftBrace);
			this.state = 825;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 822;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 827;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 829;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 828;
				this.blockItemList();
				}
				break;
			}
			this.state = 834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 831;
				this.match(KipperParser.WS);
				}
				}
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 837;
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
		this.enterRule(_localctx, 80, KipperParser.RULE_blockItemList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 839;
					this.blockItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 842;
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
		this.enterRule(_localctx, 82, KipperParser.RULE_blockItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 844;
				this.match(KipperParser.WS);
				}
				}
				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 852;
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
			case KipperParser.LeftBracket:
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
				this.state = 850;
				this.statement();
				}
				break;
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 851;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 857;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 854;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 859;
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
		this.enterRule(_localctx, 84, KipperParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 860;
				this.expression();
				}
			}

			this.state = 863;
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
		this.enterRule(_localctx, 86, KipperParser.RULE_selectionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 953;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 865;
				this.match(KipperParser.If);
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
				this.match(KipperParser.LeftParen);
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
				this.expression();
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
				this.match(KipperParser.RightParen);
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
				this.statement();
				this.state = 897;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				}
				this.state = 908;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 900;
					this.match(KipperParser.Else);
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
					this.statement();
					}
					break;
				}
				}
				break;
			case KipperParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 910;
				this.match(KipperParser.Switch);
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
				this.match(KipperParser.LeftParen);
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
				this.expression();
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
				this.match(KipperParser.RightParen);
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
				this.match(KipperParser.LeftBrace);
				this.state = 948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Case || _la === KipperParser.Default || _la === KipperParser.WS) {
					{
					{
					this.state = 942;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 939;
						this.match(KipperParser.WS);
						}
						}
						this.state = 944;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 945;
					this.labeledStatement();
					}
					}
					this.state = 950;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 951;
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
		this.enterRule(_localctx, 88, KipperParser.RULE_labeledStatement);
		let _la: number;
		try {
			this.state = 993;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Case:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 955;
				this.match(KipperParser.Case);
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
				this.constantExpression();
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
				this.match(KipperParser.T__3);
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
				this.statement();
				}
				break;
			case KipperParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 978;
				this.match(KipperParser.Default);
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
				this.match(KipperParser.T__3);
				this.state = 989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 986;
					this.match(KipperParser.WS);
					}
					}
					this.state = 991;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 992;
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
		this.enterRule(_localctx, 90, KipperParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 1081;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 995;
				this.match(KipperParser.For);
				this.state = 999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 996;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1001;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1002;
				this.match(KipperParser.LeftParen);
				this.state = 1003;
				this.forCondition();
				this.state = 1004;
				this.match(KipperParser.RightParen);
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
				this.statement();
				}
				break;
			case KipperParser.While:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1013;
				this.match(KipperParser.While);
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
				this.match(KipperParser.LeftParen);
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
				this.expression();
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
				this.match(KipperParser.RightParen);
				this.state = 1038;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1035;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1040;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1041;
				this.statement();
				}
				break;
			case KipperParser.Do:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1043;
				this.match(KipperParser.Do);
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
				this.statement();
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
				this.match(KipperParser.While);
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
				this.match(KipperParser.LeftParen);
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
				this.expression();
				this.state = 1075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1072;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1077;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1078;
				this.match(KipperParser.RightParen);
				this.state = 1079;
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
		this.enterRule(_localctx, 92, KipperParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1087;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 1083;
				this.forDeclaration();
				}
				break;
			case KipperParser.T__1:
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.LeftBracket:
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
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 1084;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1089;
			this.endOfItem();
			this.state = 1091;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 1090;
				this.forExpression();
				}
			}

			this.state = 1093;
			this.endOfItem();
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 1094;
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
		this.enterRule(_localctx, 94, KipperParser.RULE_forDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1097;
			this.storageTypeSpecifier();
			this.state = 1101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1098;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1104;
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
		this.enterRule(_localctx, 96, KipperParser.RULE_forExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this.assignmentExpression();
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
			this.state = 1129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 1113;
				this.match(KipperParser.Comma);
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
				this.state = 1120;
				this.assignmentExpression();
				this.state = 1124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1121;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1131;
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
		this.enterRule(_localctx, 98, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Break:
			case KipperParser.Continue:
				{
				this.state = 1132;
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
				this.state = 1133;
				this.match(KipperParser.Return);
				this.state = 1137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1134;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 1140;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1145;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\u047E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x03\x02" +
		"\x05\x02h\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x06\x03o\n\x03" +
		"\r\x03\x0E\x03p\x06\x03s\n\x03\r\x03\x0E\x03t\x03\x04\x03\x04\x05\x04" +
		"y\n\x04\x03\x05\x03\x05\x07\x05}\n\x05\f\x05\x0E\x05\x80\v\x05\x03\x05" +
		"\x03\x05\x07\x05\x84\n\x05\f\x05\x0E\x05\x87\v\x05\x03\x05\x03\x05\x05" +
		"\x05\x8B\n\x05\x03\x05\x03\x05\x07\x05\x8F\n\x05\f\x05\x0E\x05\x92\v\x05" +
		"\x03\x05\x03\x05\x07\x05\x96\n\x05\f\x05\x0E\x05\x99\v\x05\x03\x05\x03" +
		"\x05\x07\x05\x9D\n\x05\f\x05\x0E\x05\xA0\v\x05\x03\x05\x03\x05\x03\x06" +
		"\x07\x06\xA5\n\x06\f\x06\x0E\x06\xA8\v\x06\x03\x06\x03\x06\x07\x06\xAC" +
		"\n\x06\f\x06\x0E\x06\xAF\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
		"\xB5\n\x07\f\x07\x0E\x07\xB8\v\x07\x06\x07\xBA\n\x07\r\x07\x0E\x07\xBB" +
		"\x03\x07\x03\x07\x07\x07\xC0\n\x07\f\x07\x0E\x07\xC3\v\x07\x06\x07\xC5" +
		"\n\x07\r\x07\x0E\x07\xC6\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\xCE\n\x07\x03\b\x03\b\x07\b\xD2\n\b\f\b\x0E\b\xD5\v\b\x03\b\x03\b\x07" +
		"\b\xD9\n\b\f\b\x0E\b\xDC\v\b\x03\b\x03\b\x07\b\xE0\n\b\f\b\x0E\b\xE3\v" +
		"\b\x03\b\x03\b\x07\b\xE7\n\b\f\b\x0E\b\xEA\v\b\x07\b\xEC\n\b\f\b\x0E\b" +
		"\xEF\v\b\x03\b\x03\b\x03\t\x03\t\x06\t\xF5\n\t\r\t\x0E\t\xF6\x03\t\x05" +
		"\t\xFA\n\t\x03\t\x03\t\x07\t\xFE\n\t\f\t\x0E\t\u0101\v\t\x03\t\x03\t\x07" +
		"\t\u0105\n\t\f\t\x0E\t\u0108\v\t\x03\t\x03\t\x07\t\u010C\n\t\f\t\x0E\t" +
		"\u010F\v\t\x03\t\x05\t\u0112\n\t\x03\t\x07\t\u0115\n\t\f\t\x0E\t\u0118" +
		"\v\t\x03\t\x03\t\x05\t\u011C\n\t\x03\n\x03\n\x07\n\u0120\n\n\f\n\x0E\n" +
		"\u0123\v\n\x03\n\x03\n\x07\n\u0127\n\n\f\n\x0E\n\u012A\v\n\x03\n\x03\n" +
		"\x03\v\x03\v\x07\v\u0130\n\v\f\v\x0E\v\u0133\v\v\x03\v\x03\v\x07\v\u0137" +
		"\n\v\f\v\x0E\v\u013A\v\v\x03\v\x03\v\x07\v\u013E\n\v\f\v\x0E\v\u0141\v" +
		"\v\x07\v\u0143\n\v\f\v\x0E\v\u0146\v\v\x03\f\x03\f\x03\f\x07\f\u014B\n" +
		"\f\f\f\x0E\f\u014E\v\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0154\n\f\f\f\x0E" +
		"\f\u0157\v\f\x03\f\x03\f\x05\f\u015B\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\u0164\n\x0F\f\x0F\x0E\x0F\u0167\v\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\u016B\n\x0F\f\x0F\x0E\x0F\u016E\v\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0172\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0177\n\x10\f" +
		"\x10\x0E\x10\u017A\v\x10\x03\x10\x03\x10\x07\x10\u017E\n\x10\f\x10\x0E" +
		"\x10\u0181\v\x10\x03\x10\x03\x10\x07\x10\u0185\n\x10\f\x10\x0E\x10\u0188" +
		"\v\x10\x07\x10\u018A\n\x10\f\x10\x0E\x10\u018D\v\x10\x05\x10\u018F\n\x10" +
		"\x03\x11\x03\x11\x03\x11\x07\x11\u0194\n\x11\f\x11\x0E\x11\u0197\v\x11" +
		"\x03\x11\x03\x11\x07\x11\u019B\n\x11\f\x11\x0E\x11\u019E\v\x11\x03\x11" +
		"\x03\x11\x07\x11\u01A2\n\x11\f\x11\x0E\x11\u01A5\v\x11\x07\x11\u01A7\n" +
		"\x11\f\x11\x0E\x11\u01AA\v\x11\x05\x11\u01AC\n\x11\x03\x12\x03\x12\x03" +
		"\x12\x07\x12\u01B1\n\x12\f\x12\x0E\x12\u01B4\v\x12\x03\x12\x03\x12\x07" +
		"\x12\u01B8\n\x12\f\x12\x0E\x12\u01BB\v\x12\x03\x12\x03\x12\x07\x12\u01BF" +
		"\n\x12\f\x12\x0E\x12\u01C2\v\x12\x07\x12\u01C4\n\x12\f\x12\x0E\x12\u01C7" +
		"\v\x12\x05\x12\u01C9\n\x12\x03\x13\x03\x13\x03\x13\x07\x13\u01CE\n\x13" +
		"\f\x13\x0E\x13\u01D1\v\x13\x03\x13\x03\x13\x07\x13\u01D5\n\x13\f\x13\x0E" +
		"\x13\u01D8\v\x13\x03\x13\x03\x13\x07\x13\u01DC\n\x13\f\x13\x0E\x13\u01DF" +
		"\v\x13\x07\x13\u01E1\n\x13\f\x13\x0E\x13\u01E4\v\x13\x05\x13\u01E6\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u01EB\n\x14\f\x14\x0E\x14\u01EE\v\x14" +
		"\x03\x14\x03\x14\x07\x14\u01F2\n\x14\f\x14\x0E\x14\u01F5\v\x14\x03\x14" +
		"\x03\x14\x07\x14\u01F9\n\x14\f\x14\x0E\x14\u01FC\v\x14\x07\x14\u01FE\n" +
		"\x14\f\x14\x0E\x14\u0201\v\x14\x05\x14\u0203\n\x14\x03\x15\x03\x15\x03" +
		"\x15\x07\x15\u0208\n\x15\f\x15\x0E\x15\u020B\v\x15\x03\x15\x03\x15\x07" +
		"\x15\u020F\n\x15\f\x15\x0E\x15\u0212\v\x15\x03\x15\x03\x15\x07\x15\u0216" +
		"\n\x15\f\x15\x0E\x15\u0219\v\x15\x07\x15\u021B\n\x15\f\x15\x0E\x15\u021E" +
		"\v\x15\x05\x15\u0220\n\x15\x03\x16\x03\x16\x03\x16\x07\x16\u0225\n\x16" +
		"\f\x16\x0E\x16\u0228\v\x16\x03\x16\x03\x16\x07\x16\u022C\n\x16\f\x16\x0E" +
		"\x16\u022F\v\x16\x03\x16\x03\x16\x07\x16\u0233\n\x16\f\x16\x0E\x16\u0236" +
		"\v\x16\x03\x16\x03\x16\x07\x16\u023A\n\x16\f\x16\x0E\x16\u023D\v\x16\x03" +
		"\x16\x03\x16\x07\x16\u0241\n\x16\f\x16\x0E\x16\u0244\v\x16\x05\x16\u0246" +
		"\n\x16\x03\x17\x03\x17\x03\x17\x07\x17\u024B\n\x17\f\x17\x0E\x17\u024E" +
		"\v\x17\x03\x17\x03\x17\x07\x17\u0252\n\x17\f\x17\x0E\x17\u0255\v\x17\x03" +
		"\x17\x03\x17\x05\x17\u0259\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x07\x19" +
		"\u025F\n\x19\f\x19\x0E\x19\u0262\v\x19\x03\x19\x03\x19\x07\x19\u0266\n" +
		"\x19\f\x19\x0E\x19\u0269\v\x19\x03\x19\x03\x19\x07\x19\u026D\n\x19\f\x19" +
		"\x0E\x19\u0270\v\x19\x07\x19\u0272\n\x19\f\x19\x0E\x19\u0275\v\x19\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x07\x1B\u027B\n\x1B\f\x1B\x0E\x1B\u027E\v" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x07\x1D\u0287" +
		"\n\x1D\f\x1D\x0E\x1D\u028A\v\x1D\x06\x1D\u028C\n\x1D\r\x1D\x0E\x1D\u028D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x07\x1F\u0294\n\x1F\f\x1F\x0E\x1F\u0297" +
		"\v\x1F\x03\x1F\x03\x1F\x07\x1F\u029B\n\x1F\f\x1F\x0E\x1F\u029E\v\x1F\x03" +
		"\x1F\x03\x1F\x07\x1F\u02A2\n\x1F\f\x1F\x0E\x1F\u02A5\v\x1F\x03\x1F\x03" +
		"\x1F\x07\x1F\u02A9\n\x1F\f\x1F\x0E\x1F\u02AC\v\x1F\x03\x1F\x03\x1F\x07" +
		"\x1F\u02B0\n\x1F\f\x1F\x0E\x1F\u02B3\v\x1F\x05\x1F\u02B5\n\x1F\x03 \x03" +
		" \x03 \x03 \x07 \u02BB\n \f \x0E \u02BE\v \x03 \x03 \x07 \u02C2\n \f " +
		"\x0E \u02C5\v \x03 \x03 \x03 \x07 \u02CA\n \f \x0E \u02CD\v \x03 \x03" +
		" \x03 \x05 \u02D2\n \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x07#\u02DB\n" +
		"#\f#\x0E#\u02DE\v#\x03#\x03#\x07#\u02E2\n#\f#\x0E#\u02E5\v#\x03#\x03#" +
		"\x07#\u02E9\n#\f#\x0E#\u02EC\v#\x03$\x03$\x07$\u02F0\n$\f$\x0E$\u02F3" +
		"\v$\x03$\x03$\x07$\u02F7\n$\f$\x0E$\u02FA\v$\x03$\x03$\x07$\u02FE\n$\f" +
		"$\x0E$\u0301\v$\x05$\u0303\n$\x03%\x03%\x07%\u0307\n%\f%\x0E%\u030A\v" +
		"%\x03%\x03%\x07%\u030E\n%\f%\x0E%\u0311\v%\x03%\x03%\x07%\u0315\n%\f%" +
		"\x0E%\u0318\v%\x07%\u031A\n%\f%\x0E%\u031D\v%\x03&\x03&\x07&\u0321\n&" +
		"\f&\x0E&\u0324\v&\x03&\x03&\x07&\u0328\n&\f&\x0E&\u032B\v&\x03&\x03&\x03" +
		"\'\x03\'\x03(\x03(\x03(\x03(\x03(\x05(\u0336\n(\x03)\x03)\x07)\u033A\n" +
		")\f)\x0E)\u033D\v)\x03)\x05)\u0340\n)\x03)\x07)\u0343\n)\f)\x0E)\u0346" +
		"\v)\x03)\x03)\x03*\x06*\u034B\n*\r*\x0E*\u034C\x03+\x07+\u0350\n+\f+\x0E" +
		"+\u0353\v+\x03+\x03+\x05+\u0357\n+\x03+\x07+\u035A\n+\f+\x0E+\u035D\v" +
		"+\x03,\x05,\u0360\n,\x03,\x03,\x03-\x03-\x07-\u0366\n-\f-\x0E-\u0369\v" +
		"-\x03-\x03-\x07-\u036D\n-\f-\x0E-\u0370\v-\x03-\x03-\x07-\u0374\n-\f-" +
		"\x0E-\u0377\v-\x03-\x03-\x07-\u037B\n-\f-\x0E-\u037E\v-\x03-\x03-\x07" +
		"-\u0382\n-\f-\x0E-\u0385\v-\x03-\x03-\x07-\u0389\n-\f-\x0E-\u038C\v-\x03" +
		"-\x05-\u038F\n-\x03-\x03-\x07-\u0393\n-\f-\x0E-\u0396\v-\x03-\x03-\x07" +
		"-\u039A\n-\f-\x0E-\u039D\v-\x03-\x03-\x07-\u03A1\n-\f-\x0E-\u03A4\v-\x03" +
		"-\x03-\x07-\u03A8\n-\f-\x0E-\u03AB\v-\x03-\x03-\x07-\u03AF\n-\f-\x0E-" +
		"\u03B2\v-\x03-\x07-\u03B5\n-\f-\x0E-\u03B8\v-\x03-\x03-\x05-\u03BC\n-" +
		"\x03.\x03.\x07.\u03C0\n.\f.\x0E.\u03C3\v.\x03.\x03.\x07.\u03C7\n.\f.\x0E" +
		".\u03CA\v.\x03.\x03.\x07.\u03CE\n.\f.\x0E.\u03D1\v.\x03.\x03.\x03.\x03" +
		".\x07.\u03D7\n.\f.\x0E.\u03DA\v.\x03.\x03.\x07.\u03DE\n.\f.\x0E.\u03E1" +
		"\v.\x03.\x05.\u03E4\n.\x03/\x03/\x07/\u03E8\n/\f/\x0E/\u03EB\v/\x03/\x03" +
		"/\x03/\x03/\x07/\u03F1\n/\f/\x0E/\u03F4\v/\x03/\x03/\x03/\x03/\x07/\u03FA" +
		"\n/\f/\x0E/\u03FD\v/\x03/\x03/\x07/\u0401\n/\f/\x0E/\u0404\v/\x03/\x03" +
		"/\x07/\u0408\n/\f/\x0E/\u040B\v/\x03/\x03/\x07/\u040F\n/\f/\x0E/\u0412" +
		"\v/\x03/\x03/\x03/\x03/\x07/\u0418\n/\f/\x0E/\u041B\v/\x03/\x03/\x07/" +
		"\u041F\n/\f/\x0E/\u0422\v/\x03/\x03/\x07/\u0426\n/\f/\x0E/\u0429\v/\x03" +
		"/\x03/\x07/\u042D\n/\f/\x0E/\u0430\v/\x03/\x03/\x07/\u0434\n/\f/\x0E/" +
		"\u0437\v/\x03/\x03/\x03/\x05/\u043C\n/\x030\x030\x050\u0440\n0\x050\u0442" +
		"\n0\x030\x030\x050\u0446\n0\x030\x030\x050\u044A\n0\x031\x031\x071\u044E" +
		"\n1\f1\x0E1\u0451\v1\x031\x031\x032\x032\x072\u0457\n2\f2\x0E2\u045A\v" +
		"2\x032\x032\x072\u045E\n2\f2\x0E2\u0461\v2\x032\x032\x072\u0465\n2\f2" +
		"\x0E2\u0468\v2\x072\u046A\n2\f2\x0E2\u046D\v2\x033\x033\x033\x073\u0472" +
		"\n3\f3\x0E3\u0475\v3\x033\x053\u0478\n3\x053\u047A\n3\x033\x033\x033\x02" +
		"\x02\x024\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02\x02\f\x04\x02\"\"$$\x05\x02!!##++\x03\x02%(\x04\x02" +
		"!!##\x03\x0258\x03\x0234\x03\x02-2\x03\x02\b\t\x03\x02\x1B\x1C\x03\x02" +
		"\x0E\x0F\x02\u04FD\x02g\x03\x02\x02\x02\x04r\x03\x02\x02\x02\x06x\x03" +
		"\x02\x02\x02\bz\x03\x02\x02\x02\n\xA6\x03\x02\x02\x02\f\xCD\x03\x02\x02" +
		"\x02\x0E\xCF\x03\x02\x02\x02\x10\u011B\x03\x02\x02\x02\x12\u011D\x03\x02" +
		"\x02\x02\x14\u012D\x03\x02\x02\x02\x16\u015A\x03\x02\x02\x02\x18\u015C" +
		"\x03\x02\x02\x02\x1A\u015E\x03\x02\x02\x02\x1C\u0171\x03\x02\x02\x02\x1E" +
		"\u018E\x03\x02\x02\x02 \u01AB\x03\x02\x02\x02\"\u01C8\x03\x02\x02\x02" +
		"$\u01E5\x03\x02\x02\x02&\u0202\x03\x02\x02\x02(\u021F\x03\x02\x02\x02" +
		"*\u0245\x03\x02\x02\x02,\u0258\x03\x02\x02\x02.\u025A\x03\x02\x02\x02" +
		"0\u025C\x03\x02\x02\x022\u0276\x03\x02\x02\x024\u0278\x03\x02\x02\x02" +
		"6\u0282\x03\x02\x02\x028\u028B\x03\x02\x02\x02:\u028F\x03\x02\x02\x02" +
		"<\u0291\x03\x02\x02\x02>\u02D1\x03\x02\x02\x02@\u02D3\x03\x02\x02\x02" +
		"B\u02D5\x03\x02\x02\x02D\u02EA\x03\x02\x02\x02F\u02ED\x03\x02\x02\x02" +
		"H\u0304\x03\x02\x02\x02J\u031E\x03\x02\x02\x02L\u032E\x03\x02\x02\x02" +
		"N\u0335\x03\x02\x02\x02P\u0337\x03\x02\x02\x02R\u034A\x03\x02\x02\x02" +
		"T\u0351\x03\x02\x02\x02V\u035F\x03\x02\x02\x02X\u03BB\x03\x02\x02\x02" +
		"Z\u03E3\x03\x02\x02\x02\\\u043B\x03\x02\x02\x02^\u0441\x03\x02\x02\x02" +
		"`\u044B\x03\x02\x02\x02b\u0454\x03\x02\x02\x02d\u0479\x03\x02\x02\x02" +
		"fh\x05\x04\x03\x02gf\x03\x02\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02" +
		"ij\x07\x02\x02\x03j\x03\x03\x02\x02\x02ks\x05\x06\x04\x02ls\x05\n\x06" +
		"\x02mo\x07?\x02\x02nm\x03\x02\x02\x02op\x03\x02\x02\x02pn\x03\x02\x02" +
		"\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rk\x03\x02\x02\x02rl\x03\x02\x02" +
		"\x02rn\x03\x02\x02\x02st\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02" +
		"\x02u\x05\x03\x02\x02\x02vy\x05\b\x05\x02wy\x05T+\x02xv\x03\x02\x02\x02" +
		"xw\x03\x02\x02\x02y\x07\x03\x02\x02\x02z~\x07\x16\x02\x02{}\x07?\x02\x02" +
		"|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02" +
		"\x02\x02\x7F\x81\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x85\x05@!\x02" +
		"\x82\x84\x07?\x02\x02\x83\x82\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02" +
		"\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x88\x03\x02\x02\x02" +
		"\x87\x85\x03\x02\x02\x02\x88\x8A\x07\x1B\x02\x02\x89\x8B\x05F$\x02\x8A" +
		"\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C" +
		"\x90\x07\x1C\x02\x02\x8D\x8F\x07?\x02\x02\x8E\x8D\x03\x02\x02\x02\x8F" +
		"\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
		"\x93\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x97\x07\x03\x02\x02\x94" +
		"\x96\x07?\x02\x02\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97" +
		"\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99" +
		"\x97\x03\x02\x02\x02\x9A\x9E\x05> \x02\x9B\x9D\x07?\x02\x02\x9C\x9B\x03" +
		"\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03" +
		"\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA2\x05" +
		"P)\x02\xA2\t\x03\x02\x02\x02\xA3\xA5\x07@\x02\x02\xA4\xA3\x03\x02\x02" +
		"\x02\xA5\xA8\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02" +
		"\x02\xA7\xA9\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAD\x07\x04\x02" +
		"\x02\xAA\xAC\x07@\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAF\x03\x02\x02" +
		"\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\v\x03\x02\x02" +
		"\x02\xAF\xAD\x03\x02\x02\x02\xB0\xCE\x07:\x02\x02\xB1\xCE\x07;\x02\x02" +
		"\xB2\xB6\x07>\x02\x02\xB3\xB5\x07?\x02\x02\xB4\xB3\x03\x02\x02\x02\xB5" +
		"\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7" +
		"\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9\xB2\x03\x02\x02\x02\xBA" +
		"\xBB\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC" +
		"\xCE\x03\x02\x02\x02\xBD\xC1\x07=\x02\x02\xBE\xC0\x07?\x02\x02\xBF\xBE" +
		"\x03\x02\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2" +
		"\x03\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xBD" +
		"\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7" +
		"\x03\x02\x02\x02\xC7\xCE\x03\x02\x02\x02\xC8\xC9\x07\x1B\x02\x02\xC9\xCA" +
		"\x050\x19\x02\xCA\xCB\x07\x1C\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCE" +
		"\x05\x0E\b\x02\xCD\xB0\x03\x02\x02\x02\xCD\xB1\x03\x02\x02\x02\xCD\xB9" +
		"\x03\x02\x02\x02\xCD\xC4\x03\x02\x02\x02\xCD\xC8\x03\x02\x02\x02\xCD\xCC" +
		"\x03\x02\x02\x02\xCE\r\x03\x02\x02\x02\xCF\xD3\x07\x1D\x02\x02\xD0\xD2" +
		"\x07?\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1" +
		"\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD3" +
		"\x03\x02\x02\x02\xD6\xDA\x052\x1A\x02\xD7\xD9\x07?\x02\x02\xD8\xD7\x03" +
		"\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03" +
		"\x02\x02\x02\xDB\xED\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xE1\x07" +
		",\x02\x02\xDE\xE0\x07?\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\xE3\x03\x02" +
		"\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x03\x02" +
		"\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE8\x052\x1A\x02\xE5\xE7\x07?\x02" +
		"\x02\xE6\xE5\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02" +
		"\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02" +
		"\x02\xEB\xDD\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02" +
		"\x02\xED\xEE\x03\x02\x02\x02\xEE\xF0\x03\x02\x02\x02\xEF\xED\x03\x02\x02" +
		"\x02\xF0\xF1\x07\x1E\x02\x02\xF1\x0F\x03\x02\x02\x02\xF2\xF9\x05\f\x07" +
		"\x02\xF3\xF5\x05\x12\n\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02" +
		"\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xFA\x03\x02\x02" +
		"\x02\xF8\xFA\x05\x18\r\x02\xF9\xF4\x03\x02\x02\x02\xF9\xF8\x03\x02\x02" +
		"\x02\xF9\xFA\x03\x02\x02\x02\xFA\u011C\x03\x02\x02\x02\xFB\xFF\x07\x18" +
		"\x02\x02\xFC\xFE\x07?\x02\x02\xFD\xFC\x03\x02\x02\x02\xFE\u0101\x03\x02" +
		"\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102" +
		"\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0106\x05\f\x07\x02\u0103" +
		"\u0105\x07?\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03\x02\x02" +
		"\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0109" +
		"\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010D\x07\x1B\x02\x02" +
		"\u010A\u010C\x07?\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010F\x03" +
		"\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0112\x05\x14" +
		"\v\x02\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0116" +
		"\x03\x02\x02\x02\u0113\u0115\x07?\x02\x02\u0114\u0113\x03\x02\x02\x02" +
		"\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03" +
		"\x02\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119" +
		"\u011A\x07\x1C\x02\x02\u011A\u011C\x03\x02\x02\x02\u011B\xF2\x03\x02\x02" +
		"\x02\u011B\xFB\x03\x02\x02\x02\u011C\x11\x03\x02\x02\x02\u011D\u0121\x07" +
		"\x1D\x02\x02\u011E\u0120\x07?\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
		"\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
		"\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124" +
		"\u0128\x050\x19\x02\u0125\u0127\x07?\x02\x02\u0126\u0125\x03\x02\x02\x02" +
		"\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"\u012C\x07\x1E\x02\x02\u012C\x13\x03\x02\x02\x02\u012D\u0131\x05,\x17" +
		"\x02\u012E\u0130\x07?\x02\x02\u012F\u012E\x03\x02\x02\x02\u0130\u0133" +
		"\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02" +
		"\u0132\u0144\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0138\x07" +
		",\x02\x02\u0135\u0137\x07?\x02\x02\u0136\u0135\x03\x02\x02\x02\u0137\u013A" +
		"\x03\x02\x02\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02" +
		"\u0139\u013B\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013B\u013F\x05" +
		",\x17\x02\u013C\u013E\x07?\x02\x02\u013D\u013C\x03\x02\x02\x02\u013E\u0141" +
		"\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02" +
		"\u0140\u0143\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0134\x03" +
		"\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145\x15\x03\x02\x02\x02\u0146\u0144\x03\x02\x02" +
		"\x02\u0147\u015B\x05\x10\t\x02\u0148\u014C\x05\x18\r\x02\u0149\u014B\x07" +
		"?\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C" +
		"\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u014F\x03\x02" +
		"\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0150\x05\x10\t\x02\u0150\u015B" +
		"\x03\x02\x02\x02\u0151\u0155\x05\x1A\x0E\x02\u0152\u0154\x07?\x02\x02" +
		"\u0153\u0152\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03" +
		"\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0158\x03\x02\x02\x02\u0157" +
		"\u0155\x03\x02\x02\x02\u0158\u0159\x05\x10\t\x02\u0159\u015B\x03\x02\x02" +
		"\x02\u015A\u0147\x03\x02\x02\x02\u015A\u0148\x03\x02\x02\x02\u015A\u0151" +
		"\x03\x02\x02\x02\u015B\x17\x03\x02\x02\x02\u015C\u015D\t\x02\x02\x02\u015D" +
		"\x19\x03\x02\x02\x02\u015E\u015F\t\x03\x02\x02\u015F\x1B\x03\x02\x02\x02" +
		"\u0160\u0172\x05\x16\f\x02\u0161\u0165\x05\x16\f\x02\u0162\u0164\x07?" +
		"\x02\x02\u0163\u0162\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165" +
		"\u0163\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03\x02" +
		"\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u016C\x07\n\x02\x02\u0169\u016B" +
		"\x07?\x02\x02\u016A\u0169\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02" +
		"\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016F\x03" +
		"\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0170\x05> \x02\u0170\u0172" +
		"\x03\x02\x02\x02\u0171\u0160\x03\x02\x02\x02\u0171\u0161\x03\x02\x02\x02" +
		"\u0172\x1D\x03\x02\x02\x02\u0173\u018F\x05\x1C\x0F\x02\u0174\u0178\x05" +
		"\x1C\x0F\x02\u0175\u0177\x07?\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177" +
		"\u017A\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
		"\u018B\x03\x02\x02\x02\u017A\u0178\x03\x02\x02\x02\u017B\u017F\t\x04\x02" +
		"\x02\u017C\u017E\x07?\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E\u0181" +
		"\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02" +
		"\u0180\u0182\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182\u0186\x05" +
		"\x1C\x0F\x02\u0183\u0185\x07?\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185" +
		"\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02" +
		"\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189" +
		"\u017B\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02" +
		"\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D" +
		"\u018B\x03\x02\x02\x02\u018E\u0173\x03\x02\x02\x02\u018E\u0174\x03\x02" +
		"\x02\x02\u018F\x1F\x03\x02\x02\x02\u0190\u01AC\x05\x1E\x10\x02\u0191\u0195" +
		"\x05\x1E\x10\x02\u0192\u0194\x07?\x02\x02\u0193\u0192\x03\x02\x02\x02" +
		"\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03" +
		"\x02\x02\x02\u0196\u01A8\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0198" +
		"\u019C\t\x05\x02\x02\u0199\u019B\x07?\x02\x02\u019A\u0199\x03\x02\x02" +
		"\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019D" +
		"\x03\x02\x02\x02\u019D\u019F\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02" +
		"\u019F\u01A3\x05\x1E\x10\x02\u01A0\u01A2\x07?\x02\x02\u01A1\u01A0\x03" +
		"\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3" +
		"\u01A4\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02" +
		"\x02\x02\u01A6\u0198\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8" +
		"\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AC\x03\x02" +
		"\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u0190\x03\x02\x02\x02\u01AB" +
		"\u0191\x03\x02\x02\x02\u01AC!\x03\x02\x02\x02\u01AD\u01C9\x05 \x11\x02" +
		"\u01AE\u01B2\x05 \x11\x02\u01AF\u01B1\x07?\x02\x02\u01B0\u01AF\x03\x02" +
		"\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01C5\x03\x02\x02\x02\u01B4\u01B2\x03\x02" +
		"\x02\x02\u01B5\u01B9\t\x06\x02\x02\u01B6\u01B8\x07?\x02\x02\u01B7\u01B6" +
		"\x03\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9\u01B7\x03\x02\x02\x02" +
		"\u01B9\u01BA\x03\x02\x02\x02\u01BA\u01BC\x03\x02\x02\x02\u01BB\u01B9\x03" +
		"\x02\x02\x02\u01BC\u01C0\x05 \x11\x02\u01BD\u01BF\x07?\x02\x02\u01BE\u01BD" +
		"\x03\x02\x02\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02" +
		"\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03" +
		"\x02\x02\x02\u01C3\u01B5\x03\x02\x02\x02\u01C4\u01C7\x03\x02\x02\x02\u01C5" +
		"\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C9\x03\x02" +
		"\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C8\u01AD\x03\x02\x02\x02\u01C8" +
		"\u01AE\x03\x02\x02\x02\u01C9#\x03\x02\x02\x02\u01CA\u01E6\x05\"\x12\x02" +
		"\u01CB\u01CF\x05\"\x12\x02\u01CC\u01CE\x07?\x02\x02\u01CD\u01CC\x03\x02" +
		"\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01E2\x03\x02\x02\x02\u01D1\u01CF\x03\x02" +
		"\x02\x02\u01D2\u01D6\t\x07\x02\x02\u01D3\u01D5\x07?\x02\x02\u01D4\u01D3" +
		"\x03\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02" +
		"\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D6\x03" +
		"\x02\x02\x02\u01D9\u01DD\x05\"\x12\x02\u01DA\u01DC\x07?\x02\x02\u01DB" +
		"\u01DA\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03\x02" +
		"\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF" +
		"\u01DD\x03\x02\x02\x02\u01E0\u01D2\x03\x02\x02\x02\u01E1\u01E4\x03\x02" +
		"\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3" +
		"\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01CA\x03\x02" +
		"\x02\x02\u01E5\u01CB\x03\x02\x02\x02\u01E6%\x03\x02\x02\x02\u01E7\u0203" +
		"\x05$\x13\x02\u01E8\u01EC\x05$\x13\x02\u01E9\u01EB\x07?\x02\x02\u01EA" +
		"\u01E9\x03\x02\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC\u01EA\x03\x02" +
		"\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01FF\x03\x02\x02\x02\u01EE" +
		"\u01EC\x03\x02\x02\x02\u01EF\u01F3\x07)\x02\x02\u01F0\u01F2\x07?\x02\x02" +
		"\u01F1\u01F0\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03" +
		"\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F6\x03\x02\x02\x02\u01F5" +
		"\u01F3\x03\x02\x02\x02\u01F6\u01FA\x05$\x13\x02\u01F7\u01F9\x07?\x02\x02" +
		"\u01F8\u01F7\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03" +
		"\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FE\x03\x02\x02\x02\u01FC" +
		"\u01FA\x03\x02\x02\x02\u01FD\u01EF\x03\x02\x02\x02\u01FE\u0201\x03\x02" +
		"\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200" +
		"\u0203\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0202\u01E7\x03\x02" +
		"\x02\x02\u0202\u01E8\x03\x02\x02\x02\u0203\'\x03\x02\x02\x02\u0204\u0220" +
		"\x05&\x14\x02\u0205\u0209\x05&\x14\x02\u0206\u0208\x07?\x02\x02\u0207" +
		"\u0206\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02" +
		"\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A\u021C\x03\x02\x02\x02\u020B" +
		"\u0209\x03\x02\x02\x02\u020C\u0210\x07*\x02\x02\u020D\u020F\x07?\x02\x02" +
		"\u020E\u020D\x03\x02\x02\x02\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03" +
		"\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x03\x02\x02\x02\u0212" +
		"\u0210\x03\x02\x02\x02\u0213\u0217\x05&\x14\x02\u0214\u0216\x07?\x02\x02" +
		"\u0215\u0214\x03\x02\x02\x02\u0216\u0219\x03\x02\x02\x02\u0217\u0215\x03" +
		"\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02\u0219" +
		"\u0217\x03\x02\x02\x02\u021A\u020C\x03\x02\x02\x02\u021B\u021E\x03\x02" +
		"\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021D" +
		"\u0220\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F\u0204\x03\x02" +
		"\x02\x02\u021F\u0205\x03\x02\x02\x02\u0220)\x03\x02\x02\x02\u0221\u0246" +
		"\x05(\x15\x02\u0222\u0226\x05(\x15\x02\u0223\u0225\x07?\x02\x02\u0224" +
		"\u0223\x03\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02" +
		"\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0229\x03\x02\x02\x02\u0228" +
		"\u0226\x03\x02\x02\x02\u0229\u022D\x07\x05\x02\x02\u022A\u022C\x07?\x02" +
		"\x02\u022B\u022A\x03\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D\u022B" +
		"\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u0230\x03\x02\x02\x02" +
		"\u022F\u022D\x03\x02\x02\x02\u0230\u0234\x050\x19\x02\u0231\u0233\x07" +
		"?\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234" +
		"\u0232\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0237\x03\x02" +
		"\x02\x02\u0236\u0234\x03\x02\x02\x02\u0237\u023B\x07\x06\x02\x02\u0238" +
		"\u023A\x07?\x02\x02\u0239\u0238\x03\x02\x02\x02\u023A\u023D\x03\x02\x02" +
		"\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023E" +
		"\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E\u0242\x05*\x16\x02" +
		"\u023F\u0241\x07?\x02\x02\u0240\u023F\x03\x02\x02\x02\u0241\u0244\x03" +
		"\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243" +
		"\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0221\x03\x02" +
		"\x02\x02\u0245\u0222\x03\x02\x02\x02\u0246+\x03\x02\x02\x02\u0247\u0259" +
		"\x05*\x16\x02\u0248\u024C\x05\x16\f\x02\u0249\u024B\x07?\x02\x02\u024A" +
		"\u0249\x03\x02\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02" +
		"\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024F\x03\x02\x02\x02\u024E" +
		"\u024C\x03\x02\x02\x02\u024F\u0253\x05.\x18\x02\u0250\u0252\x07?\x02\x02" +
		"\u0251\u0250\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03" +
		"\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0256\x03\x02\x02\x02\u0255" +
		"\u0253\x03\x02\x02\x02\u0256\u0257\x05,\x17\x02\u0257\u0259\x03\x02\x02" +
		"\x02\u0258\u0247\x03\x02\x02\x02\u0258\u0248\x03\x02\x02\x02\u0259-\x03" +
		"\x02\x02\x02\u025A\u025B\t\b\x02\x02\u025B/\x03\x02\x02\x02\u025C\u0260" +
		"\x05,\x17\x02\u025D\u025F\x07?\x02\x02\u025E\u025D\x03\x02\x02\x02\u025F" +
		"\u0262\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02" +
		"\x02\x02\u0261\u0273\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263" +
		"\u0267\x07,\x02\x02\u0264\u0266\x07?\x02\x02\u0265\u0264\x03\x02\x02\x02" +
		"\u0266\u0269\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0267\u0268\x03" +
		"\x02\x02\x02\u0268\u026A\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A" +
		"\u026E\x05,\x17\x02\u026B\u026D\x07?\x02\x02\u026C\u026B\x03\x02\x02\x02" +
		"\u026D\u0270\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03" +
		"\x02\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271" +
		"\u0263\x03\x02\x02\x02\u0272\u0275\x03\x02\x02\x02\u0273\u0271\x03\x02" +
		"\x02\x02\u0273\u0274\x03\x02\x02\x02\u02741\x03\x02\x02\x02\u0275\u0273" +
		"\x03\x02\x02\x02\u0276\u0277\x05*\x16\x02\u02773\x03\x02\x02\x02\u0278" +
		"\u027C\x056\x1C\x02\u0279\u027B\x07?\x02\x02\u027A\u0279\x03\x02\x02\x02" +
		"\u027B\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03" +
		"\x02\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027F" +
		"\u0280\x05<\x1F\x02\u0280\u0281\x05\n\x06\x02\u02815\x03\x02\x02\x02\u0282" +
		"\u0283\t\t\x02\x02\u02837\x03\x02\x02\x02\u0284\u0288\x05:\x1E\x02\u0285" +
		"\u0287\x07?\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287\u028A\x03\x02\x02" +
		"\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028C" +
		"\x03\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028B\u0284\x03\x02\x02\x02" +
		"\u028C\u028D\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03" +
		"\x02\x02\x02\u028E9\x03\x02\x02\x02\u028F\u0290\x05> \x02\u0290;\x03\x02" +
		"\x02\x02\u0291\u0295\x05@!\x02\u0292\u0294\x07?\x02\x02\u0293\u0292\x03" +
		"\x02\x02\x02\u0294\u0297\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02\u0295" +
		"\u0296\x03\x02\x02\x02\u0296\u0298\x03\x02\x02\x02\u0297\u0295\x03\x02" +
		"\x02\x02\u0298\u029C\x07\x06\x02\x02\u0299\u029B\x07?\x02\x02\u029A\u0299" +
		"\x03\x02\x02\x02\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02" +
		"\u029C\u029D\x03\x02\x02\x02\u029D\u029F\x03\x02\x02\x02\u029E\u029C\x03" +
		"\x02\x02\x02\u029F\u02A3\x05> \x02\u02A0\u02A2\x07?\x02\x02\u02A1\u02A0" +
		"\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02" +
		"\u02A3\u02A4\x03\x02\x02\x02\u02A4\u02B4\x03\x02\x02\x02\u02A5\u02A3\x03" +
		"\x02\x02\x02\u02A6\u02AA\x07-\x02\x02\u02A7\u02A9\x07?\x02\x02\u02A8\u02A7" +
		"\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02" +
		"\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u02AA\x03" +
		"\x02\x02\x02\u02AD\u02B1\x05L\'\x02\u02AE\u02B0\x07?\x02\x02\u02AF\u02AE" +
		"\x03\x02\x02\x02\u02B0\u02B3\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02" +
		"\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3\u02B1\x03" +
		"\x02\x02\x02\u02B4\u02A6\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
		"=\x03\x02\x02\x02\u02B6\u02D2\x07:\x02\x02\u02B7\u02B8\x07:\x02\x02\u02B8" +
		"\u02BC\x075\x02\x02\u02B9\u02BB\x07?\x02\x02\u02BA\u02B9\x03\x02\x02\x02" +
		"\u02BB\u02BE\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BD\x03" +
		"\x02\x02\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02BC\x03\x02\x02\x02\u02BF" +
		"\u02C3\x07:\x02\x02\u02C0\u02C2\x07?\x02\x02\u02C1\u02C0\x03\x02\x02\x02" +
		"\u02C2\u02C5\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03" +
		"\x02\x02\x02\u02C4\u02C6\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6" +
		"\u02D2\x077\x02\x02\u02C7\u02CB\x07\x1A\x02\x02\u02C8\u02CA\x07?\x02\x02" +
		"\u02C9\u02C8\x03\x02\x02\x02\u02CA\u02CD\x03\x02\x02\x02\u02CB\u02C9\x03" +
		"\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CE\x03\x02\x02\x02\u02CD" +
		"\u02CB\x03\x02\x02\x02\u02CE\u02CF\x07\x1B\x02\x02\u02CF\u02D0\x07:\x02" +
		"\x02\u02D0\u02D2\x07\x1C\x02\x02\u02D1\u02B6\x03\x02\x02\x02\u02D1\u02B7" +
		"\x03\x02\x02\x02\u02D1\u02C7\x03\x02\x02\x02\u02D2?\x03\x02\x02\x02\u02D3" +
		"\u02D4\x05B\"\x02\u02D4A\x03\x02\x02\x02\u02D5\u02D6\x07:\x02\x02\u02D6" +
		"C\x03\x02\x02\x02\u02D7\u02E9\n\n\x02\x02\u02D8\u02DC\x07\x1B\x02\x02" +
		"\u02D9\u02DB\x07?\x02\x02\u02DA\u02D9\x03\x02\x02\x02\u02DB\u02DE\x03" +
		"\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD" +
		"\u02DF\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E3\x05D#\x02" +
		"\u02E0\u02E2\x07?\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E5\x03" +
		"\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4" +
		"\u02E6\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E6\u02E7\x07\x1C" +
		"\x02\x02\u02E7\u02E9\x03\x02\x02\x02\u02E8\u02D7\x03\x02\x02\x02\u02E8" +
		"\u02D8\x03\x02\x02\x02\u02E9\u02EC\x03\x02\x02\x02\u02EA\u02E8\x03\x02" +
		"\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EBE\x03\x02\x02\x02\u02EC\u02EA" +
		"\x03\x02\x02\x02\u02ED\u02F1\x05H%\x02\u02EE\u02F0\x07?\x02\x02\u02EF" +
		"\u02EE\x03\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02" +
		"\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u0302\x03\x02\x02\x02\u02F3" +
		"\u02F1\x03\x02\x02\x02\u02F4\u02F8\x07,\x02\x02\u02F5\u02F7\x07?\x02\x02" +
		"\u02F6\u02F5\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02\u02F8\u02F6\x03" +
		"\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA" +
		"\u02F8\x03\x02\x02\x02\u02FB\u02FF\x07\x07\x02\x02\u02FC\u02FE\x07?\x02" +
		"\x02\u02FD\u02FC\x03\x02\x02\x02\u02FE\u0301\x03\x02\x02\x02\u02FF\u02FD" +
		"\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0303\x03\x02\x02\x02" +
		"\u0301\u02FF\x03\x02\x02\x02\u0302\u02F4\x03\x02\x02\x02\u0302\u0303\x03" +
		"\x02\x02\x02\u0303G\x03\x02\x02\x02\u0304\u0308\x05J&\x02\u0305\u0307" +
		"\x07?\x02\x02\u0306\u0305\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02" +
		"\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u031B\x03" +
		"\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B\u030F\x07,\x02\x02\u030C" +
		"\u030E\x07?\x02\x02\u030D\u030C\x03\x02\x02\x02\u030E\u0311\x03\x02\x02" +
		"\x02\u030F\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02\u0310\u0312" +
		"\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0316\x05J&\x02\u0313" +
		"\u0315\x07?\x02\x02\u0314\u0313\x03\x02\x02\x02\u0315\u0318\x03\x02\x02" +
		"\x02\u0316\u0314\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u031A" +
		"\x03\x02\x02\x02\u0318\u0316\x03\x02\x02\x02\u0319\u030B\x03\x02\x02\x02" +
		"\u031A\u031D\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031B\u031C\x03" +
		"\x02\x02\x02\u031CI\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E" +
		"\u0322\x05@!\x02\u031F\u0321\x07?\x02\x02\u0320\u031F\x03\x02\x02\x02" +
		"\u0321\u0324\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0322\u0323\x03" +
		"\x02\x02\x02\u0323\u0325\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0325" +
		"\u0329\x07\x06\x02\x02\u0326\u0328\x07?\x02\x02\u0327\u0326\x03\x02\x02" +
		"\x02\u0328\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A" +
		"\x03\x02\x02\x02\u032A\u032C\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02" +
		"\u032C\u032D\x058\x1D\x02\u032DK\x03\x02\x02\x02\u032E\u032F\x05,\x17" +
		"\x02\u032FM\x03\x02\x02\x02\u0330\u0336\x05P)\x02\u0331\u0336\x05V,\x02" +
		"\u0332\u0336\x05X-\x02\u0333\u0336\x05\\/\x02\u0334\u0336\x05d3\x02\u0335" +
		"\u0330\x03\x02\x02\x02\u0335\u0331\x03\x02\x02\x02\u0335\u0332\x03\x02" +
		"\x02\x02\u0335\u0333\x03\x02\x02\x02\u0335\u0334\x03\x02\x02\x02\u0336" +
		"O\x03\x02\x02\x02\u0337\u033B\x07\x1F\x02\x02\u0338\u033A\x07?\x02\x02" +
		"\u0339\u0338\x03\x02\x02\x02\u033A\u033D\x03\x02\x02\x02\u033B\u0339\x03" +
		"\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033F\x03\x02\x02\x02\u033D" +
		"\u033B\x03\x02\x02\x02\u033E\u0340\x05R*\x02\u033F\u033E\x03\x02\x02\x02" +
		"\u033F\u0340\x03\x02\x02\x02\u0340\u0344\x03\x02\x02\x02\u0341\u0343\x07" +
		"?\x02\x02\u0342\u0341\x03\x02\x02\x02\u0343\u0346\x03\x02\x02\x02\u0344" +
		"\u0342\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0347\x03\x02" +
		"\x02\x02\u0346\u0344\x03\x02\x02\x02\u0347\u0348\x07 \x02\x02\u0348Q\x03" +
		"\x02\x02\x02\u0349\u034B\x05T+\x02\u034A\u0349\x03\x02\x02\x02\u034B\u034C" +
		"\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02" +
		"\u034DS\x03\x02\x02\x02\u034E\u0350\x07?\x02\x02\u034F\u034E\x03\x02\x02" +
		"\x02\u0350\u0353\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351\u0352" +
		"\x03\x02\x02\x02\u0352\u0356\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02" +
		"\u0354\u0357\x05N(\x02\u0355\u0357\x054\x1B\x02\u0356\u0354\x03\x02\x02" +
		"\x02\u0356\u0355\x03\x02\x02\x02\u0357\u035B\x03\x02\x02\x02\u0358\u035A" +
		"\x07?\x02\x02\u0359\u0358\x03\x02\x02\x02\u035A\u035D\x03\x02\x02\x02" +
		"\u035B\u0359\x03\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035CU\x03\x02" +
		"\x02\x02\u035D\u035B\x03\x02\x02\x02\u035E\u0360\x050\x19\x02\u035F\u035E" +
		"\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02" +
		"\u0361\u0362\x05\n\x06\x02\u0362W\x03\x02\x02\x02\u0363\u0367\x07\x12" +
		"\x02\x02\u0364\u0366\x07?\x02\x02\u0365\u0364\x03\x02\x02\x02\u0366\u0369" +
		"\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367\u0368\x03\x02\x02\x02" +
		"\u0368\u036A\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u036A\u036E\x07" +
		"\x1B\x02\x02\u036B\u036D\x07?\x02\x02\u036C\u036B\x03\x02\x02\x02\u036D" +
		"\u0370\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036E\u036F\x03\x02" +
		"\x02\x02\u036F\u0371\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0371" +
		"\u0375\x050\x19\x02\u0372\u0374\x07?\x02\x02\u0373\u0372\x03\x02\x02\x02" +
		"\u0374\u0377\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0375\u0376\x03" +
		"\x02\x02\x02\u0376\u0378\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0378" +
		"\u037C\x07\x1C\x02\x02\u0379\u037B\x07?\x02\x02\u037A\u0379\x03\x02\x02" +
		"\x02\u037B\u037E\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037D" +
		"\x03\x02\x02\x02\u037D\u037F\x03\x02\x02\x02\u037E\u037C\x03\x02\x02\x02" +
		"\u037F\u0383\x05N(\x02\u0380\u0382\x07?\x02\x02\u0381\u0380\x03\x02\x02" +
		"\x02\u0382\u0385\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0384" +
		"\x03\x02\x02\x02\u0384\u038E\x03\x02\x02\x02\u0385\u0383\x03\x02\x02\x02" +
		"\u0386\u038A\x07\x13\x02\x02\u0387\u0389\x07?\x02\x02\u0388\u0387\x03" +
		"\x02\x02\x02\u0389\u038C\x03\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A" +
		"\u038B\x03\x02\x02\x02\u038B\u038D\x03\x02\x02\x02\u038C\u038A\x03\x02" +
		"\x02\x02\u038D\u038F\x05N(\x02\u038E\u0386\x03\x02\x02\x02\u038E\u038F" +
		"\x03\x02\x02\x02\u038F\u03BC\x03\x02\x02\x02\u0390\u0394\x07\v\x02\x02" +
		"\u0391\u0393\x07?\x02\x02\u0392\u0391\x03\x02\x02\x02\u0393\u0396\x03" +
		"\x02\x02\x02\u0394\u0392\x03\x02\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395" +
		"\u0397\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0397\u039B\x07\x1B" +
		"\x02\x02\u0398\u039A\x07?\x02\x02\u0399\u0398\x03\x02\x02\x02\u039A\u039D" +
		"\x03\x02\x02\x02\u039B\u0399\x03\x02\x02\x02\u039B\u039C\x03\x02\x02\x02" +
		"\u039C\u039E\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02\u039E\u03A2\x05" +
		"0\x19\x02\u039F\u03A1\x07?\x02\x02\u03A0\u039F\x03\x02\x02\x02\u03A1\u03A4" +
		"\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02" +
		"\u03A3\u03A5\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03A9\x07" +
		"\x1C\x02\x02\u03A6\u03A8\x07?\x02\x02\u03A7\u03A6\x03\x02\x02\x02\u03A8" +
		"\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02" +
		"\x02\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02\u03AC" +
		"\u03B6\x07\x1F\x02\x02\u03AD\u03AF\x07?\x02\x02\u03AE\u03AD\x03\x02\x02" +
		"\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B0\u03B1" +
		"\x03\x02\x02\x02\u03B1\u03B3\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02" +
		"\u03B3\u03B5\x05Z.\x02\u03B4\u03B0\x03\x02\x02\x02\u03B5\u03B8\x03\x02" +
		"\x02\x02\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7" +
		"\u03B9\x03\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B9\u03BA\x07 \x02" +
		"\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u0363\x03\x02\x02\x02\u03BB\u0390" +
		"\x03\x02\x02\x02\u03BCY\x03\x02\x02\x02\u03BD\u03C1\x07\f\x02\x02\u03BE" +
		"\u03C0\x07?\x02\x02\u03BF\u03BE\x03\x02\x02\x02\u03C0\u03C3\x03\x02\x02" +
		"\x02\u03C1\u03BF\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C4" +
		"\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C4\u03C8\x052\x1A\x02" +
		"\u03C5\u03C7\x07?\x02\x02\u03C6\u03C5\x03\x02\x02\x02\u03C7\u03CA\x03" +
		"\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9" +
		"\u03CB\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CB\u03CF\x07\x06" +
		"\x02\x02\u03CC\u03CE\x07?\x02\x02\u03CD\u03CC\x03\x02\x02\x02\u03CE\u03D1" +
		"\x03\x02\x02\x02\u03CF\u03CD\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02" +
		"\u03D0\u03D2\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D2\u03D3\x05" +
		"N(\x02\u03D3\u03E4\x03\x02\x02\x02\u03D4\u03D8\x07\r\x02\x02\u03D5\u03D7" +
		"\x07?\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D7\u03DA\x03\x02\x02\x02" +
		"\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DB\x03" +
		"\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB\u03DF\x07\x06\x02\x02\u03DC" +
		"\u03DE\x07?\x02\x02\u03DD\u03DC\x03\x02\x02\x02\u03DE\u03E1\x03\x02\x02" +
		"\x02\u03DF\u03DD\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03E2" +
		"\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2\u03E4\x05N(\x02\u03E3" +
		"\u03BD\x03\x02\x02\x02\u03E3\u03D4\x03\x02\x02\x02\u03E4[\x03\x02\x02" +
		"\x02\u03E5\u03E9\x07\x14\x02\x02\u03E6\u03E8\x07?\x02\x02\u03E7\u03E6" +
		"\x03\x02\x02\x02\u03E8\u03EB\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02" +
		"\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EC\x03\x02\x02\x02\u03EB\u03E9\x03" +
		"\x02\x02\x02\u03EC\u03ED\x07\x1B\x02\x02\u03ED\u03EE\x05^0\x02\u03EE\u03F2" +
		"\x07\x1C\x02\x02\u03EF\u03F1\x07?\x02\x02\u03F0\u03EF\x03\x02\x02\x02" +
		"\u03F1\u03F4\x03\x02\x02\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F3\x03" +
		"\x02\x02\x02\u03F3\u03F5\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F5" +
		"\u03F6\x05N(\x02\u03F6\u043C\x03\x02\x02\x02\u03F7\u03FB\x07\x11\x02\x02" +
		"\u03F8\u03FA\x07?\x02\x02\u03F9\u03F8\x03\x02\x02\x02\u03FA\u03FD\x03" +
		"\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02\u03FC" +
		"\u03FE\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FE\u0402\x07\x1B" +
		"\x02\x02\u03FF\u0401\x07?\x02\x02\u0400\u03FF\x03\x02\x02\x02\u0401\u0404" +
		"\x03\x02\x02\x02\u0402\u0400\x03\x02\x02\x02\u0402\u0403\x03\x02\x02\x02" +
		"\u0403\u0405\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0405\u0409\x05" +
		"0\x19\x02\u0406\u0408\x07?\x02\x02\u0407\u0406\x03\x02\x02\x02\u0408\u040B" +
		"\x03\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02" +
		"\u040A\u040C\x03\x02\x02\x02\u040B\u0409\x03\x02\x02\x02\u040C\u0410\x07" +
		"\x1C\x02\x02\u040D\u040F\x07?\x02\x02\u040E\u040D\x03\x02\x02\x02\u040F" +
		"\u0412\x03\x02\x02\x02\u0410\u040E\x03\x02\x02\x02\u0410\u0411\x03\x02" +
		"\x02\x02\u0411\u0413\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0413" +
		"\u0414\x05N(\x02\u0414\u043C\x03\x02\x02\x02\u0415\u0419\x07\x10\x02\x02" +
		"\u0416\u0418\x07?\x02\x02\u0417\u0416\x03\x02\x02\x02\u0418\u041B\x03" +
		"\x02\x02\x02\u0419\u0417\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A" +
		"\u041C\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041C\u0420\x05N(\x02" +
		"\u041D\u041F\x07?\x02\x02\u041E\u041D\x03\x02\x02\x02\u041F\u0422\x03" +
		"\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421" +
		"\u0423\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0423\u0427\x07\x11" +
		"\x02\x02\u0424\u0426\x07?\x02\x02\u0425\u0424\x03\x02\x02\x02\u0426\u0429" +
		"\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02" +
		"\u0428\u042A\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u042A\u042E\x07" +
		"\x1B\x02\x02\u042B\u042D\x07?\x02\x02\u042C\u042B\x03\x02\x02\x02\u042D" +
		"\u0430\x03\x02\x02\x02\u042E\u042C\x03\x02\x02\x02\u042E\u042F\x03\x02" +
		"\x02\x02\u042F\u0431\x03\x02\x02\x02\u0430\u042E\x03\x02\x02\x02\u0431" +
		"\u0435\x050\x19\x02\u0432\u0434\x07?\x02\x02\u0433\u0432\x03\x02\x02\x02" +
		"\u0434\u0437\x03\x02\x02\x02\u0435\u0433\x03\x02\x02\x02\u0435\u0436\x03" +
		"\x02\x02\x02\u0436\u0438\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0438" +
		"\u0439\x07\x1C\x02\x02\u0439\u043A\x05\n\x06\x02\u043A\u043C\x03\x02\x02" +
		"\x02\u043B\u03E5\x03\x02\x02\x02\u043B\u03F7\x03\x02\x02\x02\u043B\u0415" +
		"\x03\x02\x02\x02\u043C]\x03\x02\x02\x02\u043D\u0442\x05`1\x02\u043E\u0440" +
		"\x050\x19\x02\u043F\u043E\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02" +
		"\u0440\u0442\x03\x02\x02\x02\u0441\u043D\x03\x02\x02\x02\u0441\u043F\x03" +
		"\x02\x02\x02\u0442\u0443\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0443\u0445\x05\n\x06\x02\u0444\u0446\x05b2\x02\u0445\u0444\x03\x02\x02" +
		"\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02\u0447\u0449" +
		"\x05\n\x06\x02\u0448\u044A\x05b2\x02\u0449\u0448\x03\x02\x02\x02\u0449" +
		"\u044A\x03\x02\x02\x02\u044A_\x03\x02\x02\x02\u044B\u044F\x056\x1C\x02" +
		"\u044C\u044E\x07?\x02\x02\u044D\u044C\x03\x02\x02\x02\u044E\u0451\x03" +
		"\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450" +
		"\u0452\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0452\u0453\x05<\x1F" +
		"\x02\u0453a\x03\x02\x02\x02\u0454\u0458\x05,\x17\x02\u0455\u0457\x07?" +
		"\x02\x02\u0456\u0455\x03\x02\x02\x02\u0457\u045A\x03\x02\x02\x02\u0458" +
		"\u0456\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u046B\x03\x02" +
		"\x02\x02\u045A\u0458\x03\x02\x02\x02\u045B\u045F\x07,\x02\x02\u045C\u045E" +
		"\x07?\x02\x02\u045D\u045C\x03\x02\x02\x02\u045E\u0461\x03\x02\x02\x02" +
		"\u045F\u045D\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\u0462\x03" +
		"\x02\x02\x02\u0461\u045F\x03\x02\x02\x02\u0462\u0466\x05,\x17\x02\u0463" +
		"\u0465\x07?\x02\x02\u0464\u0463\x03\x02\x02\x02\u0465\u0468\x03\x02\x02" +
		"\x02\u0466\u0464\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467\u046A" +
		"\x03\x02\x02\x02\u0468\u0466\x03\x02\x02\x02\u0469\u045B\x03\x02\x02\x02" +
		"\u046A\u046D\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046B\u046C\x03" +
		"\x02\x02\x02\u046Cc\x03\x02\x02\x02\u046D\u046B\x03\x02\x02\x02\u046E" +
		"\u047A\t\v\x02\x02\u046F\u0473\x07\x17\x02\x02\u0470\u0472\x07?\x02\x02" +
		"\u0471\u0470\x03\x02\x02\x02\u0472\u0475\x03\x02\x02\x02\u0473\u0471\x03" +
		"\x02\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0477\x03\x02\x02\x02\u0475" +
		"\u0473\x03\x02\x02\x02\u0476\u0478\x050\x19\x02\u0477\u0476\x03\x02\x02" +
		"\x02\u0477\u0478\x03\x02\x02\x02\u0478\u047A\x03\x02\x02\x02\u0479\u046E" +
		"\x03\x02\x02\x02\u0479\u046F\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02" +
		"\u047B\u047C\x05\n\x06\x02\u047Ce\x03\x02\x02\x02\xA8gprtx~\x85\x8A\x90" +
		"\x97\x9E\xA6\xAD\xB6\xBB\xC1\xC6\xCD\xD3\xDA\xE1\xE8\xED\xF6\xF9\xFF\u0106" +
		"\u010D\u0111\u0116\u011B\u0121\u0128\u0131\u0138\u013F\u0144\u014C\u0155" +
		"\u015A\u0165\u016C\u0171\u0178\u017F\u0186\u018B\u018E\u0195\u019C\u01A3" +
		"\u01A8\u01AB\u01B2\u01B9\u01C0\u01C5\u01C8\u01CF\u01D6\u01DD\u01E2\u01E5" +
		"\u01EC\u01F3\u01FA\u01FF\u0202\u0209\u0210\u0217\u021C\u021F\u0226\u022D" +
		"\u0234\u023B\u0242\u0245\u024C\u0253\u0258\u0260\u0267\u026E\u0273\u027C" +
		"\u0288\u028D\u0295\u029C\u02A3\u02AA\u02B1\u02B4\u02BC\u02C3\u02CB\u02D1" +
		"\u02DC\u02E3\u02E8\u02EA\u02F1\u02F8\u02FF\u0302\u0308\u030F\u0316\u031B" +
		"\u0322\u0329\u0335\u033B\u033F\u0344\u034C\u0351\u0356\u035B\u035F\u0367" +
		"\u036E\u0375\u037C\u0383\u038A\u038E\u0394\u039B\u03A2\u03A9\u03B0\u03B6" +
		"\u03BB\u03C1\u03C8\u03CF\u03D8\u03DF\u03E3\u03E9\u03F2\u03FB\u0402\u0409" +
		"\u0410\u0419\u0420\u0427\u042E\u0435\u043B\u043F\u0441\u0445\u0449\u044F" +
		"\u0458\u045F\u0466\u046B\u0473\u0477\u0479";
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
export class ListConstantPrimaryExpressionContext extends PrimaryExpressionContext {
	public listConstant(): ListConstantContext {
		return this.getRuleContext(0, ListConstantContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterListConstantPrimaryExpression) {
			listener.enterListConstantPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitListConstantPrimaryExpression) {
			listener.exitListConstantPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitListConstantPrimaryExpression) {
			return visitor.visitListConstantPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListConstantContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(KipperParser.LeftBracket, 0); }
	public constantExpression(): ConstantExpressionContext[];
	public constantExpression(i: number): ConstantExpressionContext;
	public constantExpression(i?: number): ConstantExpressionContext | ConstantExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantExpressionContext);
		} else {
			return this.getRuleContext(i, ConstantExpressionContext);
		}
	}
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
	public get ruleIndex(): number { return KipperParser.RULE_listConstant; }
	// @Override
	public enterRule(listener: KipperListener): void {
		if (listener.enterListConstant) {
			listener.enterListConstant(this);
		}
	}
	// @Override
	public exitRule(listener: KipperListener): void {
		if (listener.exitListConstant) {
			listener.exitListConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperVisitor<Result>): Result {
		if (visitor.visitListConstant) {
			return visitor.visitListConstant(this);
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
	public incrementOrDecrementOperator(): IncrementOrDecrementOperatorContext | undefined {
		return this.tryGetRuleContext(0, IncrementOrDecrementOperatorContext);
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


export class ArraySpecifierContext extends ParserRuleContext {
	public LeftBracket(): TerminalNode { return this.getToken(KipperParser.LeftBracket, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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
	public PlusPlus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.PlusPlus, 0); }
	public MinusMinus(): TerminalNode | undefined { return this.tryGetToken(KipperParser.MinusMinus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_incrementOrDecrementOperator; }
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
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
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


