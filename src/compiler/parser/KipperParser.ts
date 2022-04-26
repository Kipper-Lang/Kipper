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
	public static readonly IntegerConstant = 57;
	public static readonly FloatingConstant = 58;
	public static readonly DigitSequence = 59;
	public static readonly CharacterConstant = 60;
	public static readonly FStringLiteral = 61;
	public static readonly StringLiteral = 62;
	public static readonly WS = 63;
	public static readonly Whitespace = 64;
	public static readonly BlockComment = 65;
	public static readonly Newline = 66;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_translationUnit = 1;
	public static readonly RULE_externalItem = 2;
	public static readonly RULE_functionDeclaration = 3;
	public static readonly RULE_endOfLine = 4;
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
	public static readonly RULE_switchLabeledStatement = 44;
	public static readonly RULE_iterationStatement = 45;
	public static readonly RULE_forCondition = 46;
	public static readonly RULE_forDeclaration = 47;
	public static readonly RULE_forExpression = 48;
	public static readonly RULE_jumpStatement = 49;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "translationUnit", "externalItem", "functionDeclaration", 
		"endOfLine", "primaryExpression", "listConstant", "postfixExpression", 
		"arraySpecifier", "argumentExpressionList", "unaryExpression", "incrementOrDecrementOperator", 
		"unaryOperator", "castOrConvertExpression", "multiplicativeExpression", 
		"additiveExpression", "relationalExpression", "equalityExpression", "logicalAndExpression", 
		"logicalOrExpression", "conditionalExpression", "assignmentExpression", 
		"assignmentOperator", "expression", "constantExpression", "declaration", 
		"storageTypeSpecifier", "declarationSpecifiers", "declarationSpecifier", 
		"initDeclarator", "typeSpecifier", "declarator", "directDeclarator", "nestedParenthesesBlock", 
		"parameterTypeList", "parameterList", "parameterDeclaration", "initializer", 
		"statement", "compoundStatement", "blockItemList", "blockItem", "expressionStatement", 
		"selectionStatement", "switchLabeledStatement", "iterationStatement", 
		"forCondition", "forDeclaration", "forExpression", "jumpStatement",
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
		"Less", "LessEqual", "Greater", "GreaterEqual", "Dot", "Identifier", "IntegerConstant", 
		"FloatingConstant", "DigitSequence", "CharacterConstant", "FStringLiteral", 
		"StringLiteral", "WS", "Whitespace", "BlockComment", "Newline",
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
			if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (KipperParser.T__1 - 2)) | (1 << (KipperParser.Const - 2)) | (1 << (KipperParser.Var - 2)) | (1 << (KipperParser.Switch - 2)) | (1 << (KipperParser.Break - 2)) | (1 << (KipperParser.Continue - 2)) | (1 << (KipperParser.Do - 2)) | (1 << (KipperParser.While - 2)) | (1 << (KipperParser.If - 2)) | (1 << (KipperParser.For - 2)) | (1 << (KipperParser.DefFunc - 2)) | (1 << (KipperParser.Return - 2)) | (1 << (KipperParser.CallFunc - 2)) | (1 << (KipperParser.LeftParen - 2)) | (1 << (KipperParser.LeftBracket - 2)) | (1 << (KipperParser.LeftBrace - 2)) | (1 << (KipperParser.Plus - 2)) | (1 << (KipperParser.PlusPlus - 2)) | (1 << (KipperParser.Minus - 2)))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (KipperParser.MinusMinus - 34)) | (1 << (KipperParser.Not - 34)) | (1 << (KipperParser.Identifier - 34)) | (1 << (KipperParser.IntegerConstant - 34)) | (1 << (KipperParser.FloatingConstant - 34)) | (1 << (KipperParser.CharacterConstant - 34)) | (1 << (KipperParser.FStringLiteral - 34)) | (1 << (KipperParser.StringLiteral - 34)) | (1 << (KipperParser.WS - 34)) | (1 << (KipperParser.Whitespace - 34)))) !== 0)) {
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
					this.endOfLine();
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
			} while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (KipperParser.T__1 - 2)) | (1 << (KipperParser.Const - 2)) | (1 << (KipperParser.Var - 2)) | (1 << (KipperParser.Switch - 2)) | (1 << (KipperParser.Break - 2)) | (1 << (KipperParser.Continue - 2)) | (1 << (KipperParser.Do - 2)) | (1 << (KipperParser.While - 2)) | (1 << (KipperParser.If - 2)) | (1 << (KipperParser.For - 2)) | (1 << (KipperParser.DefFunc - 2)) | (1 << (KipperParser.Return - 2)) | (1 << (KipperParser.CallFunc - 2)) | (1 << (KipperParser.LeftParen - 2)) | (1 << (KipperParser.LeftBracket - 2)) | (1 << (KipperParser.LeftBrace - 2)) | (1 << (KipperParser.Plus - 2)) | (1 << (KipperParser.PlusPlus - 2)) | (1 << (KipperParser.Minus - 2)))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (KipperParser.MinusMinus - 34)) | (1 << (KipperParser.Not - 34)) | (1 << (KipperParser.Identifier - 34)) | (1 << (KipperParser.IntegerConstant - 34)) | (1 << (KipperParser.FloatingConstant - 34)) | (1 << (KipperParser.CharacterConstant - 34)) | (1 << (KipperParser.FStringLiteral - 34)) | (1 << (KipperParser.StringLiteral - 34)) | (1 << (KipperParser.WS - 34)) | (1 << (KipperParser.Whitespace - 34)))) !== 0));
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
				_localctx = new ExternalFunctionDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KipperParser.RULE_functionDeclaration);
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
			this.state = 161;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftBrace:
				{
				this.state = 159;
				this.compoundStatement();
				}
				break;
			case KipperParser.T__1:
			case KipperParser.Whitespace:
				{
				this.state = 160;
				this.endOfLine();
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
	public endOfLine(): EndOfLineContext {
		let _localctx: EndOfLineContext = new EndOfLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KipperParser.RULE_endOfLine);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Whitespace) {
				{
				{
				this.state = 163;
				this.match(KipperParser.Whitespace);
				}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 169;
			this.match(KipperParser.T__1);
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 170;
					this.match(KipperParser.Whitespace);
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Identifier:
				_localctx = new IdentifierPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 176;
				this.match(KipperParser.Identifier);
				}
				break;
			case KipperParser.StringLiteral:
				_localctx = new StringPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 177;
					this.match(KipperParser.StringLiteral);
					this.state = 181;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
					}
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.StringLiteral);
				}
				break;
			case KipperParser.FStringLiteral:
				_localctx = new FStringPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 188;
					this.match(KipperParser.FStringLiteral);
					this.state = 192;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					}
					}
					this.state = 197;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.FStringLiteral);
				}
				break;
			case KipperParser.LeftParen:
				_localctx = new TangledPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 199;
				this.match(KipperParser.LeftParen);
				this.state = 200;
				this.expression();
				this.state = 201;
				this.match(KipperParser.RightParen);
				}
				break;
			case KipperParser.IntegerConstant:
			case KipperParser.FloatingConstant:
				_localctx = new NumberPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 203;
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
			case KipperParser.CharacterConstant:
				_localctx = new CharacterPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 204;
				this.match(KipperParser.CharacterConstant);
				}
				break;
			case KipperParser.LeftBracket:
				_localctx = new ListPrimaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 205;
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
			this.state = 208;
			this.match(KipperParser.LeftBracket);
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
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 222;
				this.match(KipperParser.Comma);
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
				this.constantExpression();
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
				}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 241;
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
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				_localctx = new PassOnPostfixExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 243;
				this.primaryExpression();
				}
				break;

			case 2:
				_localctx = new ArraySpecifierPostfixExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 244;
				this.primaryExpression();
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 245;
					this.arraySpecifier();
					}
					}
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.LeftBracket);
				}
				break;

			case 3:
				_localctx = new IncrementOrDecrementPostfixExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 250;
				this.primaryExpression();
				this.state = 251;
				this.incrementOrDecrementOperator();
				}
				break;

			case 4:
				_localctx = new FunctionCallPostfixExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 253;
				this.match(KipperParser.CallFunc);
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 254;
					this.match(KipperParser.WS);
					}
					}
					this.state = 259;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 260;
				this.primaryExpression();
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 261;
					this.match(KipperParser.WS);
					}
					}
					this.state = 266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 267;
				this.match(KipperParser.LeftParen);
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 268;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.IntegerConstant - 32)) | (1 << (KipperParser.FloatingConstant - 32)) | (1 << (KipperParser.CharacterConstant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 274;
					this.argumentExpressionList();
					}
				}

				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 277;
					this.match(KipperParser.WS);
					}
					}
					this.state = 282;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 283;
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
	public arraySpecifier(): ArraySpecifierContext {
		let _localctx: ArraySpecifierContext = new ArraySpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KipperParser.RULE_arraySpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(KipperParser.LeftBracket);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 288;
				this.match(KipperParser.WS);
				}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 294;
			this.expression();
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
			this.state = 303;
			this.assignmentExpression();
			this.state = 307;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 304;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 309;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 310;
				this.match(KipperParser.Comma);
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 311;
					this.match(KipperParser.WS);
					}
					}
					this.state = 316;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 317;
				this.assignmentExpression();
				this.state = 321;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 318;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 323;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				}
				}
				this.state = 328;
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
			this.state = 348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.CallFunc:
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
				this.state = 329;
				this.postfixExpression();
				}
				break;
			case KipperParser.PlusPlus:
			case KipperParser.MinusMinus:
				_localctx = new IncrementOrDecrementUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 330;
				this.incrementOrDecrementOperator();
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 331;
					this.match(KipperParser.WS);
					}
					}
					this.state = 336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 337;
				this.postfixExpression();
				}
				break;
			case KipperParser.Plus:
			case KipperParser.Minus:
			case KipperParser.Not:
				_localctx = new OperatorModifiedUnaryExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 339;
				this.unaryOperator();
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 340;
					this.match(KipperParser.WS);
					}
					}
					this.state = 345;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 346;
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
			this.state = 350;
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
			this.state = 352;
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
			this.state = 371;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.unaryExpression();
				}
				break;

			case 2:
				_localctx = new ActualCastOrConvertExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.unaryExpression();
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 356;
					this.match(KipperParser.WS);
					}
					}
					this.state = 361;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 362;
				this.match(KipperParser.As);
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 363;
					this.match(KipperParser.WS);
					}
					}
					this.state = 368;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 369;
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
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				_localctx = new PassOnMultiplicativeExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.castOrConvertExpression();
				}
				break;

			case 2:
				_localctx = new ActualMultiplicativeExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.castOrConvertExpression();
				this.state = 378;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (KipperParser.Star - 35)) | (1 << (KipperParser.Div - 35)) | (1 << (KipperParser.Mod - 35)) | (1 << (KipperParser.PowerTo - 35)))) !== 0)) {
					{
					{
					this.state = 381;
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
					this.state = 385;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 382;
						this.match(KipperParser.WS);
						}
						}
						this.state = 387;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 388;
					this.castOrConvertExpression();
					this.state = 392;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 389;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 394;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
					}
					}
					}
					this.state = 399;
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
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				_localctx = new PassOnAdditiveExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.multiplicativeExpression();
				}
				break;

			case 2:
				_localctx = new ActualAdditiveExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 403;
				this.multiplicativeExpression();
				this.state = 407;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 404;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 409;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				}
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Plus || _la === KipperParser.Minus) {
					{
					{
					this.state = 410;
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
					this.state = 414;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 411;
						this.match(KipperParser.WS);
						}
						}
						this.state = 416;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 417;
					this.multiplicativeExpression();
					this.state = 421;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 418;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 423;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
					}
					}
					}
					this.state = 428;
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
			this.state = 458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				_localctx = new PassOnRelationalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 431;
				this.additiveExpression();
				}
				break;

			case 2:
				_localctx = new ActualRelationalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 432;
				this.additiveExpression();
				this.state = 436;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 433;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 438;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
				}
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (KipperParser.Less - 51)) | (1 << (KipperParser.LessEqual - 51)) | (1 << (KipperParser.Greater - 51)) | (1 << (KipperParser.GreaterEqual - 51)))) !== 0)) {
					{
					{
					this.state = 439;
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
					this.state = 443;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 440;
						this.match(KipperParser.WS);
						}
						}
						this.state = 445;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 446;
					this.additiveExpression();
					this.state = 450;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 447;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 452;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					}
					}
					}
					this.state = 457;
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
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				_localctx = new PassOnEqualityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 460;
				this.relationalExpression();
				}
				break;

			case 2:
				_localctx = new ActualEqualityExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 461;
				this.relationalExpression();
				this.state = 465;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 462;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 467;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				}
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Equal || _la === KipperParser.NotEqual) {
					{
					{
					this.state = 468;
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
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 469;
						this.match(KipperParser.WS);
						}
						}
						this.state = 474;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 475;
					this.relationalExpression();
					this.state = 479;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 476;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 481;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
					}
					}
					}
					this.state = 486;
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
			this.state = 516;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				_localctx = new PassOnLogicalAndExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.equalityExpression();
				}
				break;

			case 2:
				_localctx = new ActualLogicalAndExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.equalityExpression();
				this.state = 494;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 491;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 496;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.AndAnd) {
					{
					{
					this.state = 497;
					this.match(KipperParser.AndAnd);
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
					this.equalityExpression();
					this.state = 508;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
					}
					}
					}
					this.state = 515;
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
			this.state = 545;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				_localctx = new PassOnLogicalOrExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 518;
				this.logicalAndExpression();
				}
				break;

			case 2:
				_localctx = new ActualLogicalOrExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 519;
				this.logicalAndExpression();
				this.state = 523;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 520;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 525;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				}
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.OrOr) {
					{
					{
					this.state = 526;
					this.match(KipperParser.OrOr);
					this.state = 530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 527;
						this.match(KipperParser.WS);
						}
						}
						this.state = 532;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 533;
					this.logicalAndExpression();
					this.state = 537;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 534;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 539;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
					}
					}
					}
					this.state = 544;
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
			this.state = 583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				_localctx = new PassOnConditionalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 547;
				this.logicalOrExpression();
				}
				break;

			case 2:
				_localctx = new ActualConditionalExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 548;
				this.logicalOrExpression();
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 549;
					this.match(KipperParser.WS);
					}
					}
					this.state = 554;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 555;
				this.match(KipperParser.T__2);
				this.state = 559;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 556;
					this.match(KipperParser.WS);
					}
					}
					this.state = 561;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 562;
				this.expression();
				this.state = 566;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 563;
					this.match(KipperParser.WS);
					}
					}
					this.state = 568;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 569;
				this.match(KipperParser.T__3);
				this.state = 573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 570;
					this.match(KipperParser.WS);
					}
					}
					this.state = 575;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 576;
				this.conditionalExpression();
				this.state = 580;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 577;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 582;
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
			this.state = 602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				_localctx = new PassOnAssignmentExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 585;
				this.conditionalExpression();
				}
				break;

			case 2:
				_localctx = new ActualAssignmentExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 586;
				this.unaryExpression();
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 587;
					this.match(KipperParser.WS);
					}
					}
					this.state = 592;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 593;
				this.assignmentOperator();
				this.state = 597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 594;
					this.match(KipperParser.WS);
					}
					}
					this.state = 599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 600;
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
			this.state = 604;
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
			this.state = 606;
			this.assignmentExpression();
			this.state = 610;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 607;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 612;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
			}
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 613;
				this.match(KipperParser.Comma);
				this.state = 617;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 614;
					this.match(KipperParser.WS);
					}
					}
					this.state = 619;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 620;
				this.assignmentExpression();
				this.state = 624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 621;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 626;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				}
				}
				}
				this.state = 631;
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
			this.state = 632;
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
			this.state = 634;
			this.storageTypeSpecifier();
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
			this.initDeclarator();
			this.state = 642;
			this.endOfLine();
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
			this.state = 644;
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
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 646;
				this.declarationSpecifier();
				this.state = 650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				}
				}
				this.state = 655;
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
			this.state = 657;
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
			this.state = 659;
			this.declarator();
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 660;
				this.match(KipperParser.WS);
				}
				}
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 666;
			this.match(KipperParser.T__3);
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
			this.typeSpecifier();
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 674;
				this.match(KipperParser.WS);
				}
				}
				this.state = 679;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Assign) {
				{
				this.state = 680;
				this.match(KipperParser.Assign);
				this.state = 684;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 681;
					this.match(KipperParser.WS);
					}
					}
					this.state = 686;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 687;
				this.initializer();
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 688;
					this.match(KipperParser.WS);
					}
					}
					this.state = 693;
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
			this.state = 723;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				_localctx = new SingleItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 696;
				this.match(KipperParser.Identifier);
				}
				break;

			case 2:
				_localctx = new MultiItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 697;
				this.match(KipperParser.Identifier);
				this.state = 698;
				this.match(KipperParser.Less);
				this.state = 702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 699;
					this.match(KipperParser.WS);
					}
					}
					this.state = 704;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 705;
				this.match(KipperParser.Identifier);
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 706;
					this.match(KipperParser.WS);
					}
					}
					this.state = 711;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 712;
				this.match(KipperParser.Greater);
				}
				break;

			case 3:
				_localctx = new TypeofTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 713;
				this.match(KipperParser.Typeof);
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 714;
					this.match(KipperParser.WS);
					}
					}
					this.state = 719;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 720;
				this.match(KipperParser.LeftParen);
				this.state = 721;
				this.match(KipperParser.Identifier);
				this.state = 722;
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
			this.state = 725;
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
			this.state = 727;
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
			this.state = 748;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 746;
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
					case KipperParser.IntegerConstant:
					case KipperParser.FloatingConstant:
					case KipperParser.DigitSequence:
					case KipperParser.CharacterConstant:
					case KipperParser.FStringLiteral:
					case KipperParser.StringLiteral:
					case KipperParser.WS:
					case KipperParser.Whitespace:
					case KipperParser.BlockComment:
					case KipperParser.Newline:
						{
						this.state = 729;
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
						this.state = 730;
						this.match(KipperParser.LeftParen);
						this.state = 734;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 731;
								this.match(KipperParser.WS);
								}
								}
							}
							this.state = 736;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
						}
						this.state = 737;
						this.nestedParenthesesBlock();
						this.state = 741;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 738;
							this.match(KipperParser.WS);
							}
							}
							this.state = 743;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 744;
						this.match(KipperParser.RightParen);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 750;
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
			this.state = 751;
			this.parameterList();
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 752;
				this.match(KipperParser.WS);
				}
				}
				this.state = 757;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Comma) {
				{
				this.state = 758;
				this.match(KipperParser.Comma);
				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 759;
					this.match(KipperParser.WS);
					}
					}
					this.state = 764;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 765;
				this.match(KipperParser.T__4);
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 766;
					this.match(KipperParser.WS);
					}
					}
					this.state = 771;
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
			this.state = 774;
			this.parameterDeclaration();
			this.state = 778;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 775;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 780;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			}
			this.state = 797;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 781;
					this.match(KipperParser.Comma);
					this.state = 785;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 782;
						this.match(KipperParser.WS);
						}
						}
						this.state = 787;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 788;
					this.parameterDeclaration();
					this.state = 792;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
					}
					}
					}
				}
				this.state = 799;
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
			this.state = 800;
			this.declarator();
			this.state = 804;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 801;
				this.match(KipperParser.WS);
				}
				}
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 807;
			this.match(KipperParser.T__3);
			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 808;
				this.match(KipperParser.WS);
				}
				}
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 814;
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
			this.state = 816;
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
			this.state = 823;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 818;
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
			case KipperParser.IntegerConstant:
			case KipperParser.FloatingConstant:
			case KipperParser.CharacterConstant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
			case KipperParser.Whitespace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 819;
				this.expressionStatement();
				}
				break;
			case KipperParser.Switch:
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 820;
				this.selectionStatement();
				}
				break;
			case KipperParser.Do:
			case KipperParser.While:
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 821;
				this.iterationStatement();
				}
				break;
			case KipperParser.Break:
			case KipperParser.Continue:
			case KipperParser.Return:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 822;
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
			this.state = 825;
			this.match(KipperParser.LeftBrace);
			this.state = 829;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 826;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 831;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			}
			this.state = 833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
			case 1:
				{
				this.state = 832;
				this.blockItemList();
				}
				break;
			}
			this.state = 838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 835;
				this.match(KipperParser.WS);
				}
				}
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 841;
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
			this.state = 844;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 843;
					this.blockItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 846;
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
			this.state = 851;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 848;
				this.match(KipperParser.WS);
				}
				}
				this.state = 853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 856;
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
			case KipperParser.IntegerConstant:
			case KipperParser.FloatingConstant:
			case KipperParser.CharacterConstant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
			case KipperParser.Whitespace:
				{
				this.state = 854;
				this.statement();
				}
				break;
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 855;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 861;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 858;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 863;
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
			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.IntegerConstant - 32)) | (1 << (KipperParser.FloatingConstant - 32)) | (1 << (KipperParser.CharacterConstant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 864;
				this.expression();
				}
			}

			this.state = 867;
			this.endOfLine();
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
			this.state = 957;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.If:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 869;
				this.match(KipperParser.If);
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
				this.match(KipperParser.LeftParen);
				this.state = 880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 877;
					this.match(KipperParser.WS);
					}
					}
					this.state = 882;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 883;
				this.expression();
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 884;
					this.match(KipperParser.WS);
					}
					}
					this.state = 889;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 890;
				this.match(KipperParser.RightParen);
				this.state = 894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 891;
					this.match(KipperParser.WS);
					}
					}
					this.state = 896;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 897;
				this.statement();
				this.state = 901;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 898;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 903;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
				}
				this.state = 912;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
				case 1:
					{
					this.state = 904;
					this.match(KipperParser.Else);
					this.state = 908;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 905;
						this.match(KipperParser.WS);
						}
						}
						this.state = 910;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 911;
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
				this.state = 914;
				this.match(KipperParser.Switch);
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
				this.match(KipperParser.LeftParen);
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 922;
					this.match(KipperParser.WS);
					}
					}
					this.state = 927;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 928;
				this.expression();
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 929;
					this.match(KipperParser.WS);
					}
					}
					this.state = 934;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 935;
				this.match(KipperParser.RightParen);
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 936;
					this.match(KipperParser.WS);
					}
					}
					this.state = 941;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 942;
				this.match(KipperParser.LeftBrace);
				this.state = 952;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Case || _la === KipperParser.Default || _la === KipperParser.WS) {
					{
					{
					this.state = 946;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 943;
						this.match(KipperParser.WS);
						}
						}
						this.state = 948;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 949;
					this.switchLabeledStatement();
					}
					}
					this.state = 954;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 955;
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
	public switchLabeledStatement(): SwitchLabeledStatementContext {
		let _localctx: SwitchLabeledStatementContext = new SwitchLabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, KipperParser.RULE_switchLabeledStatement);
		let _la: number;
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Case:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 959;
				this.match(KipperParser.Case);
				this.state = 963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 960;
					this.match(KipperParser.WS);
					}
					}
					this.state = 965;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 966;
				this.constantExpression();
				this.state = 970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 967;
					this.match(KipperParser.WS);
					}
					}
					this.state = 972;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 973;
				this.match(KipperParser.T__3);
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 974;
					this.match(KipperParser.WS);
					}
					}
					this.state = 979;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 980;
				this.statement();
				}
				break;
			case KipperParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 982;
				this.match(KipperParser.Default);
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 983;
					this.match(KipperParser.WS);
					}
					}
					this.state = 988;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 989;
				this.match(KipperParser.T__3);
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 990;
					this.match(KipperParser.WS);
					}
					}
					this.state = 995;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 996;
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
			this.state = 1085;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 999;
				this.match(KipperParser.For);
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1000;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1005;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1006;
				this.match(KipperParser.LeftParen);
				this.state = 1007;
				this.forCondition();
				this.state = 1008;
				this.match(KipperParser.RightParen);
				this.state = 1012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1009;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1014;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1015;
				this.statement();
				}
				break;
			case KipperParser.While:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1017;
				this.match(KipperParser.While);
				this.state = 1021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1018;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1023;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1024;
				this.match(KipperParser.LeftParen);
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1025;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1030;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1031;
				this.expression();
				this.state = 1035;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1032;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1037;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1038;
				this.match(KipperParser.RightParen);
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
				this.statement();
				}
				break;
			case KipperParser.Do:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1047;
				this.match(KipperParser.Do);
				this.state = 1051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1048;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1053;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1054;
				this.statement();
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1055;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1060;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1061;
				this.match(KipperParser.While);
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1062;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1067;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1068;
				this.match(KipperParser.LeftParen);
				this.state = 1072;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1069;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1074;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1075;
				this.expression();
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1076;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1081;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1082;
				this.match(KipperParser.RightParen);
				this.state = 1083;
				this.endOfLine();
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
			this.state = 1091;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 1087;
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
			case KipperParser.IntegerConstant:
			case KipperParser.FloatingConstant:
			case KipperParser.CharacterConstant:
			case KipperParser.FStringLiteral:
			case KipperParser.StringLiteral:
			case KipperParser.Whitespace:
				{
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.IntegerConstant - 32)) | (1 << (KipperParser.FloatingConstant - 32)) | (1 << (KipperParser.CharacterConstant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 1088;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1093;
			this.endOfLine();
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.IntegerConstant - 32)) | (1 << (KipperParser.FloatingConstant - 32)) | (1 << (KipperParser.CharacterConstant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 1094;
				this.forExpression();
				}
			}

			this.state = 1097;
			this.endOfLine();
			this.state = 1099;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.IntegerConstant - 32)) | (1 << (KipperParser.FloatingConstant - 32)) | (1 << (KipperParser.CharacterConstant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
				{
				this.state = 1098;
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
			this.state = 1101;
			this.storageTypeSpecifier();
			this.state = 1105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1102;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1108;
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
			this.state = 1110;
			this.assignmentExpression();
			this.state = 1114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1111;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 1117;
				this.match(KipperParser.Comma);
				this.state = 1121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1118;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1123;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1124;
				this.assignmentExpression();
				this.state = 1128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1125;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1130;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1135;
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
			this.state = 1147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Break:
			case KipperParser.Continue:
				{
				this.state = 1136;
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
				this.state = 1137;
				this.match(KipperParser.Return);
				this.state = 1141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1138;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBracket) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.IntegerConstant - 32)) | (1 << (KipperParser.FloatingConstant - 32)) | (1 << (KipperParser.CharacterConstant - 32)) | (1 << (KipperParser.FStringLiteral - 32)) | (1 << (KipperParser.StringLiteral - 32)))) !== 0)) {
					{
					this.state = 1144;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1149;
			this.endOfLine();
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03D\u0482\x04\x02" +
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
		"\x05\x07\x05\x9D\n\x05\f\x05\x0E\x05\xA0\v\x05\x03\x05\x03\x05\x05\x05" +
		"\xA4\n\x05\x03\x06\x07\x06\xA7\n\x06\f\x06\x0E\x06\xAA\v\x06\x03\x06\x03" +
		"\x06\x07\x06\xAE\n\x06\f\x06\x0E\x06\xB1\v\x06\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\xB6\n\x07\f\x07\x0E\x07\xB9\v\x07\x06\x07\xBB\n\x07\r\x07\x0E" +
		"\x07\xBC\x03\x07\x03\x07\x07\x07\xC1\n\x07\f\x07\x0E\x07\xC4\v\x07\x06" +
		"\x07\xC6\n\x07\r\x07\x0E\x07\xC7\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\xD1\n\x07\x03\b\x03\b\x07\b\xD5\n\b\f\b\x0E\b" +
		"\xD8\v\b\x03\b\x03\b\x07\b\xDC\n\b\f\b\x0E\b\xDF\v\b\x03\b\x03\b\x07\b" +
		"\xE3\n\b\f\b\x0E\b\xE6\v\b\x03\b\x03\b\x07\b\xEA\n\b\f\b\x0E\b\xED\v\b" +
		"\x07\b\xEF\n\b\f\b\x0E\b\xF2\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x06\t\xF9" +
		"\n\t\r\t\x0E\t\xFA\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0102\n\t\f\t\x0E" +
		"\t\u0105\v\t\x03\t\x03\t\x07\t\u0109\n\t\f\t\x0E\t\u010C\v\t\x03\t\x03" +
		"\t\x07\t\u0110\n\t\f\t\x0E\t\u0113\v\t\x03\t\x05\t\u0116\n\t\x03\t\x07" +
		"\t\u0119\n\t\f\t\x0E\t\u011C\v\t\x03\t\x03\t\x05\t\u0120\n\t\x03\n\x03" +
		"\n\x07\n\u0124\n\n\f\n\x0E\n\u0127\v\n\x03\n\x03\n\x07\n\u012B\n\n\f\n" +
		"\x0E\n\u012E\v\n\x03\n\x03\n\x03\v\x03\v\x07\v\u0134\n\v\f\v\x0E\v\u0137" +
		"\v\v\x03\v\x03\v\x07\v\u013B\n\v\f\v\x0E\v\u013E\v\v\x03\v\x03\v\x07\v" +
		"\u0142\n\v\f\v\x0E\v\u0145\v\v\x07\v\u0147\n\v\f\v\x0E\v\u014A\v\v\x03" +
		"\f\x03\f\x03\f\x07\f\u014F\n\f\f\f\x0E\f\u0152\v\f\x03\f\x03\f\x03\f\x03" +
		"\f\x07\f\u0158\n\f\f\f\x0E\f\u015B\v\f\x03\f\x03\f\x05\f\u015F\n\f\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0168\n\x0F\f" +
		"\x0F\x0E\x0F\u016B\v\x0F\x03\x0F\x03\x0F\x07\x0F\u016F\n\x0F\f\x0F\x0E" +
		"\x0F\u0172\v\x0F\x03\x0F\x03\x0F\x05\x0F\u0176\n\x0F\x03\x10\x03\x10\x03" +
		"\x10\x07\x10\u017B\n\x10\f\x10\x0E\x10\u017E\v\x10\x03\x10\x03\x10\x07" +
		"\x10\u0182\n\x10\f\x10\x0E\x10\u0185\v\x10\x03\x10\x03\x10\x07\x10\u0189" +
		"\n\x10\f\x10\x0E\x10\u018C\v\x10\x07\x10\u018E\n\x10\f\x10\x0E\x10\u0191" +
		"\v\x10\x05\x10\u0193\n\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0198\n\x11" +
		"\f\x11\x0E\x11\u019B\v\x11\x03\x11\x03\x11\x07\x11\u019F\n\x11\f\x11\x0E" +
		"\x11\u01A2\v\x11\x03\x11\x03\x11\x07\x11\u01A6\n\x11\f\x11\x0E\x11\u01A9" +
		"\v\x11\x07\x11\u01AB\n\x11\f\x11\x0E\x11\u01AE\v\x11\x05\x11\u01B0\n\x11" +
		"\x03\x12\x03\x12\x03\x12\x07\x12\u01B5\n\x12\f\x12\x0E\x12\u01B8\v\x12" +
		"\x03\x12\x03\x12\x07\x12\u01BC\n\x12\f\x12\x0E\x12\u01BF\v\x12\x03\x12" +
		"\x03\x12\x07\x12\u01C3\n\x12\f\x12\x0E\x12\u01C6\v\x12\x07\x12\u01C8\n" +
		"\x12\f\x12\x0E\x12\u01CB\v\x12\x05\x12\u01CD\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x07\x13\u01D2\n\x13\f\x13\x0E\x13\u01D5\v\x13\x03\x13\x03\x13\x07" +
		"\x13\u01D9\n\x13\f\x13\x0E\x13\u01DC\v\x13\x03\x13\x03\x13\x07\x13\u01E0" +
		"\n\x13\f\x13\x0E\x13\u01E3\v\x13\x07\x13\u01E5\n\x13\f\x13\x0E\x13\u01E8" +
		"\v\x13\x05\x13\u01EA\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\u01EF\n\x14" +
		"\f\x14\x0E\x14\u01F2\v\x14\x03\x14\x03\x14\x07\x14\u01F6\n\x14\f\x14\x0E" +
		"\x14\u01F9\v\x14\x03\x14\x03\x14\x07\x14\u01FD\n\x14\f\x14\x0E\x14\u0200" +
		"\v\x14\x07\x14\u0202\n\x14\f\x14\x0E\x14\u0205\v\x14\x05\x14\u0207\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\u020C\n\x15\f\x15\x0E\x15\u020F\v\x15" +
		"\x03\x15\x03\x15\x07\x15\u0213\n\x15\f\x15\x0E\x15\u0216\v\x15\x03\x15" +
		"\x03\x15\x07\x15\u021A\n\x15\f\x15\x0E\x15\u021D\v\x15\x07\x15\u021F\n" +
		"\x15\f\x15\x0E\x15\u0222\v\x15\x05\x15\u0224\n\x15\x03\x16\x03\x16\x03" +
		"\x16\x07\x16\u0229\n\x16\f\x16\x0E\x16\u022C\v\x16\x03\x16\x03\x16\x07" +
		"\x16\u0230\n\x16\f\x16\x0E\x16\u0233\v\x16\x03\x16\x03\x16\x07\x16\u0237" +
		"\n\x16\f\x16\x0E\x16\u023A\v\x16\x03\x16\x03\x16\x07\x16\u023E\n\x16\f" +
		"\x16\x0E\x16\u0241\v\x16\x03\x16\x03\x16\x07\x16\u0245\n\x16\f\x16\x0E" +
		"\x16\u0248\v\x16\x05\x16\u024A\n\x16\x03\x17\x03\x17\x03\x17\x07\x17\u024F" +
		"\n\x17\f\x17\x0E\x17\u0252\v\x17\x03\x17\x03\x17\x07\x17\u0256\n\x17\f" +
		"\x17\x0E\x17\u0259\v\x17\x03\x17\x03\x17\x05\x17\u025D\n\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x07\x19\u0263\n\x19\f\x19\x0E\x19\u0266\v\x19\x03" +
		"\x19\x03\x19\x07\x19\u026A\n\x19\f\x19\x0E\x19\u026D\v\x19\x03\x19\x03" +
		"\x19\x07\x19\u0271\n\x19\f\x19\x0E\x19\u0274\v\x19\x07\x19\u0276\n\x19" +
		"\f\x19\x0E\x19\u0279\v\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x07\x1B\u027F" +
		"\n\x1B\f\x1B\x0E\x1B\u0282\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x07\x1D\u028B\n\x1D\f\x1D\x0E\x1D\u028E\v\x1D\x06\x1D" +
		"\u0290\n\x1D\r\x1D\x0E\x1D\u0291\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x07\x1F" +
		"\u0298\n\x1F\f\x1F\x0E\x1F\u029B\v\x1F\x03\x1F\x03\x1F\x07\x1F\u029F\n" +
		"\x1F\f\x1F\x0E\x1F\u02A2\v\x1F\x03\x1F\x03\x1F\x07\x1F\u02A6\n\x1F\f\x1F" +
		"\x0E\x1F\u02A9\v\x1F\x03\x1F\x03\x1F\x07\x1F\u02AD\n\x1F\f\x1F\x0E\x1F" +
		"\u02B0\v\x1F\x03\x1F\x03\x1F\x07\x1F\u02B4\n\x1F\f\x1F\x0E\x1F\u02B7\v" +
		"\x1F\x05\x1F\u02B9\n\x1F\x03 \x03 \x03 \x03 \x07 \u02BF\n \f \x0E \u02C2" +
		"\v \x03 \x03 \x07 \u02C6\n \f \x0E \u02C9\v \x03 \x03 \x03 \x07 \u02CE" +
		"\n \f \x0E \u02D1\v \x03 \x03 \x03 \x05 \u02D6\n \x03!\x03!\x03\"\x03" +
		"\"\x03#\x03#\x03#\x07#\u02DF\n#\f#\x0E#\u02E2\v#\x03#\x03#\x07#\u02E6" +
		"\n#\f#\x0E#\u02E9\v#\x03#\x03#\x07#\u02ED\n#\f#\x0E#\u02F0\v#\x03$\x03" +
		"$\x07$\u02F4\n$\f$\x0E$\u02F7\v$\x03$\x03$\x07$\u02FB\n$\f$\x0E$\u02FE" +
		"\v$\x03$\x03$\x07$\u0302\n$\f$\x0E$\u0305\v$\x05$\u0307\n$\x03%\x03%\x07" +
		"%\u030B\n%\f%\x0E%\u030E\v%\x03%\x03%\x07%\u0312\n%\f%\x0E%\u0315\v%\x03" +
		"%\x03%\x07%\u0319\n%\f%\x0E%\u031C\v%\x07%\u031E\n%\f%\x0E%\u0321\v%\x03" +
		"&\x03&\x07&\u0325\n&\f&\x0E&\u0328\v&\x03&\x03&\x07&\u032C\n&\f&\x0E&" +
		"\u032F\v&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x05(\u033A\n" +
		"(\x03)\x03)\x07)\u033E\n)\f)\x0E)\u0341\v)\x03)\x05)\u0344\n)\x03)\x07" +
		")\u0347\n)\f)\x0E)\u034A\v)\x03)\x03)\x03*\x06*\u034F\n*\r*\x0E*\u0350" +
		"\x03+\x07+\u0354\n+\f+\x0E+\u0357\v+\x03+\x03+\x05+\u035B\n+\x03+\x07" +
		"+\u035E\n+\f+\x0E+\u0361\v+\x03,\x05,\u0364\n,\x03,\x03,\x03-\x03-\x07" +
		"-\u036A\n-\f-\x0E-\u036D\v-\x03-\x03-\x07-\u0371\n-\f-\x0E-\u0374\v-\x03" +
		"-\x03-\x07-\u0378\n-\f-\x0E-\u037B\v-\x03-\x03-\x07-\u037F\n-\f-\x0E-" +
		"\u0382\v-\x03-\x03-\x07-\u0386\n-\f-\x0E-\u0389\v-\x03-\x03-\x07-\u038D" +
		"\n-\f-\x0E-\u0390\v-\x03-\x05-\u0393\n-\x03-\x03-\x07-\u0397\n-\f-\x0E" +
		"-\u039A\v-\x03-\x03-\x07-\u039E\n-\f-\x0E-\u03A1\v-\x03-\x03-\x07-\u03A5" +
		"\n-\f-\x0E-\u03A8\v-\x03-\x03-\x07-\u03AC\n-\f-\x0E-\u03AF\v-\x03-\x03" +
		"-\x07-\u03B3\n-\f-\x0E-\u03B6\v-\x03-\x07-\u03B9\n-\f-\x0E-\u03BC\v-\x03" +
		"-\x03-\x05-\u03C0\n-\x03.\x03.\x07.\u03C4\n.\f.\x0E.\u03C7\v.\x03.\x03" +
		".\x07.\u03CB\n.\f.\x0E.\u03CE\v.\x03.\x03.\x07.\u03D2\n.\f.\x0E.\u03D5" +
		"\v.\x03.\x03.\x03.\x03.\x07.\u03DB\n.\f.\x0E.\u03DE\v.\x03.\x03.\x07." +
		"\u03E2\n.\f.\x0E.\u03E5\v.\x03.\x05.\u03E8\n.\x03/\x03/\x07/\u03EC\n/" +
		"\f/\x0E/\u03EF\v/\x03/\x03/\x03/\x03/\x07/\u03F5\n/\f/\x0E/\u03F8\v/\x03" +
		"/\x03/\x03/\x03/\x07/\u03FE\n/\f/\x0E/\u0401\v/\x03/\x03/\x07/\u0405\n" +
		"/\f/\x0E/\u0408\v/\x03/\x03/\x07/\u040C\n/\f/\x0E/\u040F\v/\x03/\x03/" +
		"\x07/\u0413\n/\f/\x0E/\u0416\v/\x03/\x03/\x03/\x03/\x07/\u041C\n/\f/\x0E" +
		"/\u041F\v/\x03/\x03/\x07/\u0423\n/\f/\x0E/\u0426\v/\x03/\x03/\x07/\u042A" +
		"\n/\f/\x0E/\u042D\v/\x03/\x03/\x07/\u0431\n/\f/\x0E/\u0434\v/\x03/\x03" +
		"/\x07/\u0438\n/\f/\x0E/\u043B\v/\x03/\x03/\x03/\x05/\u0440\n/\x030\x03" +
		"0\x050\u0444\n0\x050\u0446\n0\x030\x030\x050\u044A\n0\x030\x030\x050\u044E" +
		"\n0\x031\x031\x071\u0452\n1\f1\x0E1\u0455\v1\x031\x031\x032\x032\x072" +
		"\u045B\n2\f2\x0E2\u045E\v2\x032\x032\x072\u0462\n2\f2\x0E2\u0465\v2\x03" +
		"2\x032\x072\u0469\n2\f2\x0E2\u046C\v2\x072\u046E\n2\f2\x0E2\u0471\v2\x03" +
		"3\x033\x033\x073\u0476\n3\f3\x0E3\u0479\v3\x033\x053\u047C\n3\x053\u047E" +
		"\n3\x033\x033\x033\x02\x02\x024\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02\x02\r\x03\x02;<\x04\x02\"\"" +
		"$$\x05\x02!!##++\x03\x02%(\x04\x02!!##\x03\x0258\x03\x0234\x03\x02-2\x03" +
		"\x02\b\t\x03\x02\x1B\x1C\x03\x02\x0E\x0F\x02\u0503\x02g\x03\x02\x02\x02" +
		"\x04r\x03\x02\x02\x02\x06x\x03\x02\x02\x02\bz\x03\x02\x02\x02\n\xA8\x03" +
		"\x02\x02\x02\f\xD0\x03\x02\x02\x02\x0E\xD2\x03\x02\x02\x02\x10\u011F\x03" +
		"\x02\x02\x02\x12\u0121\x03\x02\x02\x02\x14\u0131\x03\x02\x02\x02\x16\u015E" +
		"\x03\x02\x02\x02\x18\u0160\x03\x02\x02\x02\x1A\u0162\x03\x02\x02\x02\x1C" +
		"\u0175\x03\x02\x02\x02\x1E\u0192\x03\x02\x02\x02 \u01AF\x03\x02\x02\x02" +
		"\"\u01CC\x03\x02\x02\x02$\u01E9\x03\x02\x02\x02&\u0206\x03\x02\x02\x02" +
		"(\u0223\x03\x02\x02\x02*\u0249\x03\x02\x02\x02,\u025C\x03\x02\x02\x02" +
		".\u025E\x03\x02\x02\x020\u0260\x03\x02\x02\x022\u027A\x03\x02\x02\x02" +
		"4\u027C\x03\x02\x02\x026\u0286\x03\x02\x02\x028\u028F\x03\x02\x02\x02" +
		":\u0293\x03\x02\x02\x02<\u0295\x03\x02\x02\x02>\u02D5\x03\x02\x02\x02" +
		"@\u02D7\x03\x02\x02\x02B\u02D9\x03\x02\x02\x02D\u02EE\x03\x02\x02\x02" +
		"F\u02F1\x03\x02\x02\x02H\u0308\x03\x02\x02\x02J\u0322\x03\x02\x02\x02" +
		"L\u0332\x03\x02\x02\x02N\u0339\x03\x02\x02\x02P\u033B\x03\x02\x02\x02" +
		"R\u034E\x03\x02\x02\x02T\u0355\x03\x02\x02\x02V\u0363\x03\x02\x02\x02" +
		"X\u03BF\x03\x02\x02\x02Z\u03E7\x03\x02\x02\x02\\\u043F\x03\x02\x02\x02" +
		"^\u0445\x03\x02\x02\x02`\u044F\x03\x02\x02\x02b\u0458\x03\x02\x02\x02" +
		"d\u047D\x03\x02\x02\x02fh\x05\x04\x03\x02gf\x03\x02\x02\x02gh\x03\x02" +
		"\x02\x02hi\x03\x02\x02\x02ij\x07\x02\x02\x03j\x03\x03\x02\x02\x02ks\x05" +
		"\x06\x04\x02ls\x05\n\x06\x02mo\x07A\x02\x02nm\x03\x02\x02\x02op\x03\x02" +
		"\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rk\x03\x02" +
		"\x02\x02rl\x03\x02\x02\x02rn\x03\x02\x02\x02st\x03\x02\x02\x02tr\x03\x02" +
		"\x02\x02tu\x03\x02\x02\x02u\x05\x03\x02\x02\x02vy\x05\b\x05\x02wy\x05" +
		"T+\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02y\x07\x03\x02\x02\x02z~\x07" +
		"\x16\x02\x02{}\x07A\x02\x02|{\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03" +
		"\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02\x80~\x03\x02" +
		"\x02\x02\x81\x85\x05@!\x02\x82\x84\x07A\x02\x02\x83\x82\x03\x02\x02\x02" +
		"\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02" +
		"\x86\x88\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x8A\x07\x1B\x02\x02" +
		"\x89\x8B\x05F$\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B" +
		"\x8C\x03\x02\x02\x02\x8C\x90\x07\x1C\x02\x02\x8D\x8F\x07A\x02\x02\x8E" +
		"\x8D\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90" +
		"\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93" +
		"\x97\x07\x03\x02\x02\x94\x96\x07A\x02\x02\x95\x94\x03\x02\x02\x02\x96" +
		"\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98" +
		"\x9A\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9E\x05> \x02\x9B\x9D" +
		"\x07A\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C" +
		"\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA3\x03\x02\x02\x02\xA0\x9E" +
		"\x03\x02\x02\x02\xA1\xA4\x05P)\x02\xA2\xA4\x05\n\x06\x02\xA3\xA1\x03\x02" +
		"\x02\x02\xA3\xA2\x03\x02\x02\x02\xA4\t\x03\x02\x02\x02\xA5\xA7\x07B\x02" +
		"\x02\xA6\xA5\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02" +
		"\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xA8\x03\x02\x02" +
		"\x02\xAB\xAF\x07\x04\x02\x02\xAC\xAE\x07B\x02\x02\xAD\xAC\x03\x02\x02" +
		"\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02" +
		"\x02\xB0\v\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xD1\x07:\x02\x02" +
		"\xB3\xB7\x07@\x02\x02\xB4\xB6\x07A\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6" +
		"\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8" +
		"\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xB3\x03\x02\x02\x02\xBB" +
		"\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD" +
		"\xD1\x03\x02\x02\x02\xBE\xC2\x07?\x02\x02\xBF\xC1\x07A\x02\x02\xC0\xBF" +
		"\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3" +
		"\x03\x02\x02\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xBE" +
		"\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8" +
		"\x03\x02\x02\x02\xC8\xD1\x03\x02\x02\x02\xC9\xCA\x07\x1B\x02\x02\xCA\xCB" +
		"\x050\x19\x02\xCB\xCC\x07\x1C\x02\x02\xCC\xD1\x03\x02\x02\x02\xCD\xD1" +
		"\t\x02\x02\x02\xCE\xD1\x07>\x02\x02\xCF\xD1\x05\x0E\b\x02\xD0\xB2\x03" +
		"\x02\x02\x02\xD0\xBA\x03\x02\x02\x02\xD0\xC5\x03\x02\x02\x02\xD0\xC9\x03" +
		"\x02\x02\x02\xD0\xCD\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xCF\x03" +
		"\x02\x02\x02\xD1\r\x03\x02\x02\x02\xD2\xD6\x07\x1D\x02\x02\xD3\xD5\x07" +
		"A\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02\xD6\xD4\x03" +
		"\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD9\x03\x02\x02\x02\xD8\xD6\x03" +
		"\x02\x02\x02\xD9\xDD\x052\x1A\x02\xDA\xDC\x07A\x02\x02\xDB\xDA\x03\x02" +
		"\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02" +
		"\x02\x02\xDE\xF0\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE4\x07," +
		"\x02\x02\xE1\xE3\x07A\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE6\x03\x02" +
		"\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE7\x03\x02" +
		"\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEB\x052\x1A\x02\xE8\xEA\x07A\x02" +
		"\x02\xE9\xE8\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9\x03\x02\x02" +
		"\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02" +
		"\x02\xEE\xE0\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02" +
		"\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xF0\x03\x02\x02" +
		"\x02\xF3\xF4\x07\x1E\x02\x02\xF4\x0F\x03\x02\x02\x02\xF5\u0120\x05\f\x07" +
		"\x02\xF6\xF8\x05\f\x07\x02\xF7\xF9\x05\x12\n\x02\xF8\xF7\x03\x02\x02\x02" +
		"\xF9\xFA\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02" +
		"\xFB\u0120\x03\x02\x02\x02\xFC\xFD\x05\f\x07\x02\xFD\xFE\x05\x18\r\x02" +
		"\xFE\u0120\x03\x02\x02\x02\xFF\u0103\x07\x18\x02\x02\u0100\u0102\x07A" +
		"\x02\x02\u0101\u0100\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02" +
		"\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u010A\x05\f\x07\x02\u0107\u0109" +
		"\x07A\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02" +
		"\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03" +
		"\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u0111\x07\x1B\x02\x02\u010E" +
		"\u0110\x07A\x02\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113\x03\x02\x02" +
		"\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0115" +
		"\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0116\x05\x14\v\x02" +
		"\u0115\u0114\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u011A\x03" +
		"\x02\x02\x02\u0117\u0119\x07A\x02\x02\u0118\u0117\x03\x02\x02\x02\u0119" +
		"\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02" +
		"\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D" +
		"\u011E\x07\x1C\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\xF5\x03\x02\x02" +
		"\x02\u011F\xF6\x03\x02\x02\x02\u011F\xFC\x03\x02\x02\x02\u011F\xFF\x03" +
		"\x02\x02\x02\u0120\x11\x03\x02\x02\x02\u0121\u0125\x07\x1D\x02\x02\u0122" +
		"\u0124\x07A\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02\x02" +
		"\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0128" +
		"\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u012C\x050\x19\x02" +
		"\u0129\u012B\x07A\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B\u012E\x03" +
		"\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D" +
		"\u012F\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0130\x07\x1E" +
		"\x02\x02\u0130\x13\x03\x02\x02\x02\u0131\u0135\x05,\x17\x02\u0132\u0134" +
		"\x07A\x02\x02\u0133\u0132\x03\x02\x02\x02\u0134\u0137\x03\x02\x02\x02" +
		"\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0148\x03" +
		"\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138\u013C\x07,\x02\x02\u0139" +
		"\u013B\x07A\x02\x02\u013A\u0139\x03\x02\x02\x02\u013B\u013E\x03\x02\x02" +
		"\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013F" +
		"\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F\u0143\x05,\x17\x02" +
		"\u0140\u0142\x07A\x02\x02\u0141\u0140\x03\x02\x02\x02\u0142\u0145\x03" +
		"\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144" +
		"\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0138\x03\x02" +
		"\x02\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148" +
		"\u0149\x03\x02\x02\x02\u0149\x15\x03\x02\x02\x02\u014A\u0148\x03\x02\x02" +
		"\x02\u014B\u015F\x05\x10\t\x02\u014C\u0150\x05\x18\r\x02\u014D\u014F\x07" +
		"A\x02\x02\u014E\u014D\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150" +
		"\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x03\x02" +
		"\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0154\x05\x10\t\x02\u0154\u015F" +
		"\x03\x02\x02\x02\u0155\u0159\x05\x1A\x0E\x02\u0156\u0158\x07A\x02\x02" +
		"\u0157\u0156\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03" +
		"\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015C\x03\x02\x02\x02\u015B" +
		"\u0159\x03\x02\x02\x02\u015C\u015D\x05\x10\t\x02\u015D\u015F\x03\x02\x02" +
		"\x02\u015E\u014B\x03\x02\x02\x02\u015E\u014C\x03\x02\x02\x02\u015E\u0155" +
		"\x03\x02\x02\x02\u015F\x17\x03\x02\x02\x02\u0160\u0161\t\x03\x02\x02\u0161" +
		"\x19\x03\x02\x02\x02\u0162\u0163\t\x04\x02\x02\u0163\x1B\x03\x02\x02\x02" +
		"\u0164\u0176\x05\x16\f\x02\u0165\u0169\x05\x16\f\x02\u0166\u0168\x07A" +
		"\x02\x02\u0167\u0166\x03\x02\x02\x02\u0168\u016B\x03\x02\x02\x02\u0169" +
		"\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02" +
		"\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u0170\x07\n\x02\x02\u016D\u016F" +
		"\x07A\x02\x02\u016E\u016D\x03\x02\x02\x02\u016F\u0172\x03\x02\x02\x02" +
		"\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x03" +
		"\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\u0174\x05> \x02\u0174\u0176" +
		"\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0175\u0164\x03\x02\x02\x02\u0175\u0165\x03\x02\x02\x02\u0176" +
		"\x1D\x03\x02\x02\x02\u0177\u0193\x05\x1C\x0F\x02\u0178\u017C\x05\x1C\x0F" +
		"\x02\u0179\u017B\x07A\x02\x02\u017A\u0179\x03\x02\x02\x02\u017B\u017E" +
		"\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02" +
		"\u017D\u018F\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0183\t" +
		"\x05\x02\x02\u0180\u0182\x07A\x02\x02\u0181\u0180\x03\x02\x02\x02\u0182" +
		"\u0185\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0186" +
		"\u018A\x05\x1C\x0F\x02\u0187\u0189\x07A\x02\x02\u0188\u0187\x03\x02\x02" +
		"\x02\u0189\u018C\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B" +
		"\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02" +
		"\u018D\u017F\x03\x02\x02\x02\u018E\u0191\x03\x02\x02\x02\u018F\u018D\x03" +
		"\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191" +
		"\u018F\x03\x02\x02\x02\u0192\u0177\x03\x02\x02\x02\u0192\u0178\x03\x02" +
		"\x02\x02\u0193\x1F\x03\x02\x02\x02\u0194\u01B0\x05\x1E\x10\x02\u0195\u0199" +
		"\x05\x1E\x10\x02\u0196\u0198\x07A\x02\x02\u0197\u0196\x03\x02\x02\x02" +
		"\u0198\u019B\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A\x03" +
		"\x02\x02\x02\u019A\u01AC\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C" +
		"\u01A0\t\x06\x02\x02\u019D\u019F\x07A\x02\x02\u019E\u019D\x03\x02\x02" +
		"\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1" +
		"\x03\x02\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02" +
		"\u01A3\u01A7\x05\x1E\x10\x02\u01A4\u01A6\x07A\x02\x02\u01A5\u01A4\x03" +
		"\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7" +
		"\u01A8\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02" +
		"\x02\x02\u01AA\u019C\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC" +
		"\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01B0\x03\x02" +
		"\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u0194\x03\x02\x02\x02\u01AF" +
		"\u0195\x03\x02\x02\x02\u01B0!\x03\x02\x02\x02\u01B1\u01CD\x05 \x11\x02" +
		"\u01B2\u01B6\x05 \x11\x02\u01B3\u01B5\x07A\x02\x02\u01B4\u01B3\x03\x02" +
		"\x02\x02\u01B5\u01B8\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6" +
		"\u01B7\x03\x02\x02\x02\u01B7\u01C9\x03\x02\x02\x02\u01B8\u01B6\x03\x02" +
		"\x02\x02\u01B9\u01BD\t\x07\x02\x02\u01BA\u01BC\x07A\x02\x02\u01BB\u01BA" +
		"\x03\x02\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02" +
		"\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01BD\x03" +
		"\x02\x02\x02\u01C0\u01C4\x05 \x11\x02\u01C1\u01C3\x07A\x02\x02\u01C2\u01C1" +
		"\x03\x02\x02\x02\u01C3\u01C6\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02" +
		"\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02\u01C6\u01C4\x03" +
		"\x02\x02\x02\u01C7\u01B9\x03\x02\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9" +
		"\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CD\x03\x02" +
		"\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01B1\x03\x02\x02\x02\u01CC" +
		"\u01B2\x03\x02\x02\x02\u01CD#\x03\x02\x02\x02\u01CE\u01EA\x05\"\x12\x02" +
		"\u01CF\u01D3\x05\"\x12\x02\u01D0\u01D2\x07A\x02\x02\u01D1\u01D0\x03\x02" +
		"\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3" +
		"\u01D4\x03\x02\x02\x02\u01D4\u01E6\x03\x02\x02\x02\u01D5\u01D3\x03\x02" +
		"\x02\x02\u01D6\u01DA\t\b\x02\x02\u01D7\u01D9\x07A\x02\x02\u01D8\u01D7" +
		"\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02" +
		"\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD\x03\x02\x02\x02\u01DC\u01DA\x03" +
		"\x02\x02\x02\u01DD\u01E1\x05\"\x12\x02\u01DE\u01E0\x07A\x02\x02\u01DF" +
		"\u01DE\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF\x03\x02" +
		"\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3" +
		"\u01E1\x03\x02\x02\x02\u01E4\u01D6\x03\x02\x02\x02\u01E5\u01E8\x03\x02" +
		"\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7" +
		"\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E9\u01CE\x03\x02" +
		"\x02\x02\u01E9\u01CF\x03\x02\x02\x02\u01EA%\x03\x02\x02\x02\u01EB\u0207" +
		"\x05$\x13\x02\u01EC\u01F0\x05$\x13\x02\u01ED\u01EF\x07A\x02\x02\u01EE" +
		"\u01ED\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03\x02" +
		"\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u0203\x03\x02\x02\x02\u01F2" +
		"\u01F0\x03\x02\x02\x02\u01F3\u01F7\x07)\x02\x02\u01F4\u01F6\x07A\x02\x02" +
		"\u01F5\u01F4\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03" +
		"\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9" +
		"\u01F7\x03\x02\x02\x02\u01FA\u01FE\x05$\x13\x02\u01FB\u01FD\x07A\x02\x02" +
		"\u01FC\u01FB\x03\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02\u01FE\u01FC\x03" +
		"\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02\x02\u0200" +
		"\u01FE\x03\x02\x02\x02\u0201\u01F3\x03\x02\x02\x02\u0202\u0205\x03\x02" +
		"\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204" +
		"\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u01EB\x03\x02" +
		"\x02\x02\u0206\u01EC\x03\x02\x02\x02\u0207\'\x03\x02\x02\x02\u0208\u0224" +
		"\x05&\x14\x02\u0209\u020D\x05&\x14\x02\u020A\u020C\x07A\x02\x02\u020B" +
		"\u020A\x03\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02" +
		"\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0220\x03\x02\x02\x02\u020F" +
		"\u020D\x03\x02\x02\x02\u0210\u0214\x07*\x02\x02\u0211\u0213\x07A\x02\x02" +
		"\u0212\u0211\x03\x02\x02\x02\u0213\u0216\x03\x02\x02\x02\u0214\u0212\x03" +
		"\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0217\u021B\x05&\x14\x02\u0218\u021A\x07A\x02\x02" +
		"\u0219\u0218\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B\u0219\x03" +
		"\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021F\x03\x02\x02\x02\u021D" +
		"\u021B\x03\x02\x02\x02\u021E\u0210\x03\x02\x02\x02\u021F\u0222\x03\x02" +
		"\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221" +
		"\u0224\x03\x02\x02\x02\u0222\u0220\x03\x02\x02\x02\u0223\u0208\x03\x02" +
		"\x02\x02\u0223\u0209\x03\x02\x02\x02\u0224)\x03\x02\x02\x02\u0225\u024A" +
		"\x05(\x15\x02\u0226\u022A\x05(\x15\x02\u0227\u0229\x07A\x02\x02\u0228" +
		"\u0227\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02" +
		"\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022D\x03\x02\x02\x02\u022C" +
		"\u022A\x03\x02\x02\x02\u022D\u0231\x07\x05\x02\x02\u022E\u0230\x07A\x02" +
		"\x02\u022F\u022E\x03\x02\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u022F" +
		"\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0234\x03\x02\x02\x02" +
		"\u0233\u0231\x03\x02\x02\x02\u0234\u0238\x050\x19\x02\u0235\u0237\x07" +
		"A\x02\x02\u0236\u0235\x03\x02\x02\x02\u0237\u023A\x03\x02\x02\x02\u0238" +
		"\u0236\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023B\x03\x02" +
		"\x02\x02\u023A\u0238\x03\x02\x02\x02\u023B\u023F\x07\x06\x02\x02\u023C" +
		"\u023E\x07A\x02\x02\u023D\u023C\x03\x02\x02\x02\u023E\u0241\x03\x02\x02" +
		"\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0242" +
		"\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0242\u0246\x05*\x16\x02" +
		"\u0243\u0245\x07A\x02\x02\u0244\u0243\x03\x02\x02\x02\u0245\u0248\x03" +
		"\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247" +
		"\u024A\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0249\u0225\x03\x02" +
		"\x02\x02\u0249\u0226\x03\x02\x02\x02\u024A+\x03\x02\x02\x02\u024B\u025D" +
		"\x05*\x16\x02\u024C\u0250\x05\x16\f\x02\u024D\u024F\x07A\x02\x02\u024E" +
		"\u024D\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02\u0250\u024E\x03\x02" +
		"\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0253\x03\x02\x02\x02\u0252" +
		"\u0250\x03\x02\x02\x02\u0253\u0257\x05.\x18\x02\u0254\u0256\x07A\x02\x02" +
		"\u0255\u0254\x03\x02\x02\x02\u0256\u0259\x03\x02\x02\x02\u0257\u0255\x03" +
		"\x02\x02\x02\u0257\u0258\x03\x02\x02\x02\u0258\u025A\x03\x02\x02\x02\u0259" +
		"\u0257\x03\x02\x02\x02\u025A\u025B\x05,\x17\x02\u025B\u025D\x03\x02\x02" +
		"\x02\u025C\u024B\x03\x02\x02\x02\u025C\u024C\x03\x02\x02\x02\u025D-\x03" +
		"\x02\x02\x02\u025E\u025F\t\t\x02\x02\u025F/\x03\x02\x02\x02\u0260\u0264" +
		"\x05,\x17\x02\u0261\u0263\x07A\x02\x02\u0262\u0261\x03\x02\x02\x02\u0263" +
		"\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02" +
		"\x02\x02\u0265\u0277\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0267" +
		"\u026B\x07,\x02\x02\u0268\u026A\x07A\x02\x02\u0269\u0268\x03\x02\x02\x02" +
		"\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C\x03" +
		"\x02\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026E" +
		"\u0272\x05,\x17\x02\u026F\u0271\x07A\x02\x02\u0270\u026F\x03\x02\x02\x02" +
		"\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03" +
		"\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275" +
		"\u0267\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277\u0275\x03\x02" +
		"\x02\x02\u0277\u0278\x03\x02\x02\x02\u02781\x03\x02\x02\x02\u0279\u0277" +
		"\x03\x02\x02\x02\u027A\u027B\x05*\x16\x02\u027B3\x03\x02\x02\x02\u027C" +
		"\u0280\x056\x1C\x02\u027D\u027F\x07A\x02\x02\u027E\u027D\x03\x02\x02\x02" +
		"\u027F\u0282\x03\x02\x02\x02\u0280\u027E\x03\x02\x02\x02\u0280\u0281\x03" +
		"\x02\x02\x02\u0281\u0283\x03\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0283" +
		"\u0284\x05<\x1F\x02\u0284\u0285\x05\n\x06\x02\u02855\x03\x02\x02\x02\u0286" +
		"\u0287\t\n\x02\x02\u02877\x03\x02\x02\x02\u0288\u028C\x05:\x1E\x02\u0289" +
		"\u028B\x07A\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02" +
		"\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u0290" +
		"\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0288\x03\x02\x02\x02" +
		"\u0290\u0291\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03" +
		"\x02\x02\x02\u02929\x03\x02\x02\x02\u0293\u0294\x05> \x02\u0294;\x03\x02" +
		"\x02\x02\u0295\u0299\x05@!\x02\u0296\u0298\x07A\x02\x02\u0297\u0296\x03" +
		"\x02\x02\x02\u0298\u029B\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299" +
		"\u029A\x03\x02\x02\x02\u029A\u029C\x03\x02\x02\x02\u029B\u0299\x03\x02" +
		"\x02\x02\u029C\u02A0\x07\x06\x02\x02\u029D\u029F\x07A\x02\x02\u029E\u029D" +
		"\x03\x02\x02\x02\u029F\u02A2\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02" +
		"\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A3\x03\x02\x02\x02\u02A2\u02A0\x03" +
		"\x02\x02\x02\u02A3\u02A7\x05> \x02\u02A4\u02A6\x07A\x02\x02\u02A5\u02A4" +
		"\x03\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02" +
		"\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02B8\x03\x02\x02\x02\u02A9\u02A7\x03" +
		"\x02\x02\x02\u02AA\u02AE\x07-\x02\x02\u02AB\u02AD\x07A\x02\x02\u02AC\u02AB" +
		"\x03\x02\x02\x02\u02AD\u02B0\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02\x02" +
		"\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B1\x03\x02\x02\x02\u02B0\u02AE\x03" +
		"\x02\x02\x02\u02B1\u02B5\x05L\'\x02\u02B2\u02B4\x07A\x02\x02\u02B3\u02B2" +
		"\x03\x02\x02\x02\u02B4\u02B7\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02" +
		"\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B9\x03\x02\x02\x02\u02B7\u02B5\x03" +
		"\x02\x02\x02\u02B8\u02AA\x03\x02\x02\x02\u02B8\u02B9\x03\x02\x02\x02\u02B9" +
		"=\x03\x02\x02\x02\u02BA\u02D6\x07:\x02\x02\u02BB\u02BC\x07:\x02\x02\u02BC" +
		"\u02C0\x075\x02\x02\u02BD\u02BF\x07A\x02\x02\u02BE\u02BD\x03\x02\x02\x02" +
		"\u02BF\u02C2\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03" +
		"\x02\x02\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3" +
		"\u02C7\x07:\x02\x02\u02C4\u02C6\x07A\x02\x02\u02C5\u02C4\x03\x02\x02\x02" +
		"\u02C6\u02C9\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8\x03" +
		"\x02\x02\x02\u02C8\u02CA\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA" +
		"\u02D6\x077\x02\x02\u02CB\u02CF\x07\x1A\x02\x02\u02CC\u02CE\x07A\x02\x02" +
		"\u02CD\u02CC\x03\x02\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF\u02CD\x03" +
		"\x02\x02\x02\u02CF\u02D0\x03\x02\x02\x02\u02D0\u02D2\x03\x02\x02\x02\u02D1" +
		"\u02CF\x03\x02\x02\x02\u02D2\u02D3\x07\x1B\x02\x02\u02D3\u02D4\x07:\x02" +
		"\x02\u02D4\u02D6\x07\x1C\x02\x02\u02D5\u02BA\x03\x02\x02\x02\u02D5\u02BB" +
		"\x03\x02\x02\x02\u02D5\u02CB\x03\x02\x02\x02\u02D6?\x03\x02\x02\x02\u02D7" +
		"\u02D8\x05B\"\x02\u02D8A\x03\x02\x02\x02\u02D9\u02DA\x07:\x02\x02\u02DA" +
		"C\x03\x02\x02\x02\u02DB\u02ED\n\v\x02\x02\u02DC\u02E0\x07\x1B\x02\x02" +
		"\u02DD\u02DF\x07A\x02\x02\u02DE\u02DD\x03\x02\x02\x02\u02DF\u02E2\x03" +
		"\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1" +
		"\u02E3\x03\x02\x02\x02\u02E2\u02E0\x03\x02\x02\x02\u02E3\u02E7\x05D#\x02" +
		"\u02E4\u02E6\x07A\x02\x02\u02E5\u02E4\x03\x02\x02\x02\u02E6\u02E9\x03" +
		"\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8" +
		"\u02EA\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02EA\u02EB\x07\x1C" +
		"\x02\x02\u02EB\u02ED\x03\x02\x02\x02\u02EC\u02DB\x03\x02\x02\x02\u02EC" +
		"\u02DC\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02" +
		"\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EFE\x03\x02\x02\x02\u02F0\u02EE" +
		"\x03\x02\x02\x02\u02F1\u02F5\x05H%\x02\u02F2\u02F4\x07A\x02\x02\u02F3" +
		"\u02F2\x03\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02\u02F5\u02F3\x03\x02" +
		"\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u0306\x03\x02\x02\x02\u02F7" +
		"\u02F5\x03\x02\x02\x02\u02F8\u02FC\x07,\x02\x02\u02F9\u02FB\x07A\x02\x02" +
		"\u02FA\u02F9\x03\x02\x02\x02\u02FB\u02FE\x03\x02\x02\x02\u02FC\u02FA\x03" +
		"\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FF\x03\x02\x02\x02\u02FE" +
		"\u02FC\x03\x02\x02\x02\u02FF\u0303\x07\x07\x02\x02\u0300\u0302\x07A\x02" +
		"\x02\u0301\u0300\x03\x02\x02\x02\u0302\u0305\x03\x02\x02\x02\u0303\u0301" +
		"\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0307\x03\x02\x02\x02" +
		"\u0305\u0303\x03\x02\x02\x02\u0306\u02F8\x03\x02\x02\x02\u0306\u0307\x03" +
		"\x02\x02\x02\u0307G\x03\x02\x02\x02\u0308\u030C\x05J&\x02\u0309\u030B" +
		"\x07A\x02\x02\u030A\u0309\x03\x02\x02\x02\u030B\u030E\x03\x02\x02\x02" +
		"\u030C\u030A\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u031F\x03" +
		"\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030F\u0313\x07,\x02\x02\u0310" +
		"\u0312\x07A\x02\x02\u0311\u0310\x03\x02\x02\x02\u0312\u0315\x03\x02\x02" +
		"\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\u0316" +
		"\x03\x02\x02\x02\u0315\u0313\x03\x02\x02\x02\u0316\u031A\x05J&\x02\u0317" +
		"\u0319\x07A\x02\x02\u0318\u0317\x03\x02\x02\x02\u0319\u031C\x03\x02\x02" +
		"\x02\u031A\u0318\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031E" +
		"\x03\x02\x02\x02\u031C\u031A\x03\x02\x02\x02\u031D\u030F\x03\x02\x02\x02" +
		"\u031E\u0321\x03\x02\x02\x02\u031F\u031D\x03\x02\x02\x02\u031F\u0320\x03" +
		"\x02\x02\x02\u0320I\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0322" +
		"\u0326\x05@!\x02\u0323\u0325\x07A\x02\x02\u0324\u0323\x03\x02\x02\x02" +
		"\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0326\u0327\x03" +
		"\x02\x02\x02\u0327\u0329\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0329" +
		"\u032D\x07\x06\x02\x02\u032A\u032C\x07A\x02\x02\u032B\u032A\x03\x02\x02" +
		"\x02\u032C\u032F\x03\x02\x02\x02\u032D\u032B\x03\x02\x02\x02\u032D\u032E" +
		"\x03\x02\x02\x02\u032E\u0330\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02" +
		"\u0330\u0331\x058\x1D\x02\u0331K\x03\x02\x02\x02\u0332\u0333\x05,\x17" +
		"\x02\u0333M\x03\x02\x02\x02\u0334\u033A\x05P)\x02\u0335\u033A\x05V,\x02" +
		"\u0336\u033A\x05X-\x02\u0337\u033A\x05\\/\x02\u0338\u033A\x05d3\x02\u0339" +
		"\u0334\x03\x02\x02\x02\u0339\u0335\x03\x02\x02\x02\u0339\u0336\x03\x02" +
		"\x02\x02\u0339\u0337\x03\x02\x02\x02\u0339\u0338\x03\x02\x02\x02\u033A" +
		"O\x03\x02\x02\x02\u033B\u033F\x07\x1F\x02\x02\u033C\u033E\x07A\x02\x02" +
		"\u033D\u033C\x03\x02\x02\x02\u033E\u0341\x03\x02\x02\x02\u033F\u033D\x03" +
		"\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0343\x03\x02\x02\x02\u0341" +
		"\u033F\x03\x02\x02\x02\u0342\u0344\x05R*\x02\u0343\u0342\x03\x02\x02\x02" +
		"\u0343\u0344\x03\x02\x02\x02\u0344\u0348\x03\x02\x02\x02\u0345\u0347\x07" +
		"A\x02\x02\u0346\u0345\x03\x02\x02\x02\u0347\u034A\x03\x02\x02\x02\u0348" +
		"\u0346\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034B\x03\x02" +
		"\x02\x02\u034A\u0348\x03\x02\x02\x02\u034B\u034C\x07 \x02\x02\u034CQ\x03" +
		"\x02\x02\x02\u034D\u034F\x05T+\x02\u034E\u034D\x03\x02\x02\x02\u034F\u0350" +
		"\x03\x02\x02\x02\u0350\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02" +
		"\u0351S\x03\x02\x02\x02\u0352\u0354\x07A\x02\x02\u0353\u0352\x03\x02\x02" +
		"\x02\u0354\u0357\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0355\u0356" +
		"\x03\x02\x02\x02\u0356\u035A\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02" +
		"\u0358\u035B\x05N(\x02\u0359\u035B\x054\x1B\x02\u035A\u0358\x03\x02\x02" +
		"\x02\u035A\u0359\x03\x02\x02\x02\u035B\u035F\x03\x02\x02\x02\u035C\u035E" +
		"\x07A\x02\x02\u035D\u035C\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02" +
		"\u035F\u035D\x03\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360U\x03\x02" +
		"\x02\x02\u0361\u035F\x03\x02\x02\x02\u0362\u0364\x050\x19\x02\u0363\u0362" +
		"\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02" +
		"\u0365\u0366\x05\n\x06\x02\u0366W\x03\x02\x02\x02\u0367\u036B\x07\x12" +
		"\x02\x02\u0368\u036A\x07A\x02\x02\u0369\u0368\x03\x02\x02\x02\u036A\u036D" +
		"\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036B\u036C\x03\x02\x02\x02" +
		"\u036C\u036E\x03\x02\x02\x02\u036D\u036B\x03\x02\x02\x02\u036E\u0372\x07" +
		"\x1B\x02\x02\u036F\u0371\x07A\x02\x02\u0370\u036F\x03\x02\x02\x02\u0371" +
		"\u0374\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0372\u0373\x03\x02" +
		"\x02\x02\u0373\u0375\x03\x02\x02\x02\u0374\u0372\x03\x02\x02\x02\u0375" +
		"\u0379\x050\x19\x02\u0376\u0378\x07A\x02\x02\u0377\u0376\x03\x02\x02\x02" +
		"\u0378\u037B\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03" +
		"\x02\x02\x02\u037A\u037C\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C" +
		"\u0380\x07\x1C\x02\x02\u037D\u037F\x07A\x02\x02\u037E\u037D\x03\x02\x02" +
		"\x02\u037F\u0382\x03\x02\x02\x02\u0380\u037E\x03\x02\x02\x02\u0380\u0381" +
		"\x03\x02\x02\x02\u0381\u0383\x03\x02\x02\x02\u0382\u0380\x03\x02\x02\x02" +
		"\u0383\u0387\x05N(\x02\u0384\u0386\x07A\x02\x02\u0385\u0384\x03\x02\x02" +
		"\x02\u0386\u0389\x03\x02\x02\x02\u0387\u0385\x03\x02\x02\x02\u0387\u0388" +
		"\x03\x02\x02\x02\u0388\u0392\x03\x02\x02\x02\u0389\u0387\x03\x02\x02\x02" +
		"\u038A\u038E\x07\x13\x02\x02\u038B\u038D\x07A\x02\x02\u038C\u038B\x03" +
		"\x02\x02\x02\u038D\u0390\x03\x02\x02\x02\u038E\u038C\x03\x02\x02\x02\u038E" +
		"\u038F\x03\x02\x02\x02\u038F\u0391\x03\x02\x02\x02\u0390\u038E\x03\x02" +
		"\x02\x02\u0391\u0393\x05N(\x02\u0392\u038A\x03\x02\x02\x02\u0392\u0393" +
		"\x03\x02\x02\x02\u0393\u03C0\x03\x02\x02\x02\u0394\u0398\x07\v\x02\x02" +
		"\u0395\u0397\x07A\x02\x02\u0396\u0395\x03\x02\x02\x02\u0397\u039A\x03" +
		"\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399" +
		"\u039B\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039B\u039F\x07\x1B" +
		"\x02\x02\u039C\u039E\x07A\x02\x02\u039D\u039C\x03\x02\x02\x02\u039E\u03A1" +
		"\x03\x02\x02\x02\u039F\u039D\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02" +
		"\u03A0\u03A2\x03\x02\x02\x02\u03A1\u039F\x03\x02\x02\x02\u03A2\u03A6\x05" +
		"0\x19\x02\u03A3\u03A5\x07A\x02\x02\u03A4\u03A3\x03\x02\x02\x02\u03A5\u03A8" +
		"\x03\x02\x02\x02\u03A6\u03A4\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02" +
		"\u03A7\u03A9\x03\x02\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A9\u03AD\x07" +
		"\x1C\x02\x02\u03AA\u03AC\x07A\x02\x02\u03AB\u03AA\x03\x02\x02\x02\u03AC" +
		"\u03AF\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AD\u03AE\x03\x02" +
		"\x02\x02\u03AE\u03B0\x03\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03B0" +
		"\u03BA\x07\x1F\x02\x02\u03B1\u03B3\x07A\x02\x02\u03B2\u03B1\x03\x02\x02" +
		"\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4\u03B5" +
		"\x03\x02\x02\x02\u03B5\u03B7\x03\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02" +
		"\u03B7\u03B9\x05Z.\x02\u03B8\u03B4\x03\x02\x02\x02\u03B9\u03BC\x03\x02" +
		"\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB" +
		"\u03BD\x03\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BD\u03BE\x07 \x02" +
		"\x02\u03BE\u03C0\x03\x02\x02\x02\u03BF\u0367\x03\x02\x02\x02\u03BF\u0394" +
		"\x03\x02\x02\x02\u03C0Y\x03\x02\x02\x02\u03C1\u03C5\x07\f\x02\x02\u03C2" +
		"\u03C4\x07A\x02\x02\u03C3\u03C2\x03\x02\x02\x02\u03C4\u03C7\x03\x02\x02" +
		"\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6\u03C8" +
		"\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C8\u03CC\x052\x1A\x02" +
		"\u03C9\u03CB\x07A\x02\x02\u03CA\u03C9\x03\x02\x02\x02\u03CB\u03CE\x03" +
		"\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD" +
		"\u03CF\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CF\u03D3\x07\x06" +
		"\x02\x02\u03D0\u03D2\x07A\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2\u03D5" +
		"\x03\x02\x02\x02\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02" +
		"\u03D4\u03D6\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D6\u03D7\x05" +
		"N(\x02\u03D7\u03E8\x03\x02\x02\x02\u03D8\u03DC\x07\r\x02\x02\u03D9\u03DB" +
		"\x07A\x02\x02\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02" +
		"\u03DC\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03" +
		"\x02\x02\x02\u03DE\u03DC\x03\x02\x02\x02\u03DF\u03E3\x07\x06\x02\x02\u03E0" +
		"\u03E2\x07A\x02\x02\u03E1\u03E0\x03\x02\x02\x02\u03E2\u03E5\x03\x02\x02" +
		"\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E6" +
		"\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E6\u03E8\x05N(\x02\u03E7" +
		"\u03C1\x03\x02\x02\x02\u03E7\u03D8\x03\x02\x02\x02\u03E8[\x03\x02\x02" +
		"\x02\u03E9\u03ED\x07\x14\x02\x02\u03EA\u03EC\x07A\x02\x02\u03EB\u03EA" +
		"\x03\x02\x02\x02\u03EC\u03EF\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02" +
		"\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F0\x03\x02\x02\x02\u03EF\u03ED\x03" +
		"\x02\x02\x02\u03F0\u03F1\x07\x1B\x02\x02\u03F1\u03F2\x05^0\x02\u03F2\u03F6" +
		"\x07\x1C\x02\x02\u03F3\u03F5\x07A\x02\x02\u03F4\u03F3\x03\x02\x02\x02" +
		"\u03F5\u03F8\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02\x02\u03F6\u03F7\x03" +
		"\x02\x02\x02\u03F7\u03F9\x03\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F9" +
		"\u03FA\x05N(\x02\u03FA\u0440\x03\x02\x02\x02\u03FB\u03FF\x07\x11\x02\x02" +
		"\u03FC\u03FE\x07A\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03" +
		"\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400" +
		"\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0406\x07\x1B" +
		"\x02\x02\u0403\u0405\x07A\x02\x02\u0404\u0403\x03\x02\x02\x02\u0405\u0408" +
		"\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02" +
		"\u0407\u0409\x03\x02\x02\x02\u0408\u0406\x03\x02\x02\x02\u0409\u040D\x05" +
		"0\x19\x02\u040A\u040C\x07A\x02\x02\u040B\u040A\x03\x02\x02\x02\u040C\u040F" +
		"\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02" +
		"\u040E\u0410\x03\x02\x02\x02\u040F\u040D\x03\x02\x02\x02\u0410\u0414\x07" +
		"\x1C\x02\x02\u0411\u0413\x07A\x02\x02\u0412\u0411\x03\x02\x02\x02\u0413" +
		"\u0416\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02" +
		"\x02\x02\u0415\u0417\x03\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417" +
		"\u0418\x05N(\x02\u0418\u0440\x03\x02\x02\x02\u0419\u041D\x07\x10\x02\x02" +
		"\u041A\u041C\x07A\x02\x02\u041B\u041A\x03\x02\x02\x02\u041C\u041F\x03" +
		"\x02\x02\x02\u041D\u041B\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E" +
		"\u0420\x03\x02\x02\x02\u041F\u041D\x03\x02\x02\x02\u0420\u0424\x05N(\x02" +
		"\u0421\u0423\x07A\x02\x02\u0422\u0421\x03\x02\x02\x02\u0423\u0426\x03" +
		"\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425" +
		"\u0427\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0427\u042B\x07\x11" +
		"\x02\x02\u0428\u042A\x07A\x02\x02\u0429\u0428\x03\x02\x02\x02\u042A\u042D" +
		"\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02" +
		"\u042C\u042E\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02\u042E\u0432\x07" +
		"\x1B\x02\x02\u042F\u0431\x07A\x02\x02\u0430\u042F\x03\x02\x02\x02\u0431" +
		"\u0434\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0432\u0433\x03\x02" +
		"\x02\x02\u0433\u0435\x03\x02\x02\x02\u0434\u0432\x03\x02\x02\x02\u0435" +
		"\u0439\x050\x19\x02\u0436\u0438\x07A\x02\x02\u0437\u0436\x03\x02\x02\x02" +
		"\u0438\u043B\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03" +
		"\x02\x02\x02\u043A\u043C\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C" +
		"\u043D\x07\x1C\x02\x02\u043D\u043E\x05\n\x06\x02\u043E\u0440\x03\x02\x02" +
		"\x02\u043F\u03E9\x03\x02\x02\x02\u043F\u03FB\x03\x02\x02\x02\u043F\u0419" +
		"\x03\x02\x02\x02\u0440]\x03\x02\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0441\u0446\x05`1\x02\u0442\u0444\x050\x19\x02\u0443\u0442\x03\x02\x02" +
		"\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0446\x03\x02\x02\x02\u0445\u0441" +
		"\x03\x02\x02\x02\u0445\u0443\x03\x02\x02\x02\u0446\u0447\x03\x02\x02\x02" +
		"\u0447\u0449\x05\n\x06\x02\u0448\u044A\x05b2\x02\u0449\u0448\x03\x02\x02" +
		"\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044B\x03\x02\x02\x02\u044B\u044D" +
		"\x05\n\x06\x02\u044C\u044E\x05b2\x02\u044D\u044C\x03\x02\x02\x02\u044D" +
		"\u044E\x03\x02\x02\x02\u044E_\x03\x02\x02\x02\u044F\u0453\x056\x1C\x02" +
		"\u0450\u0452\x07A\x02\x02\u0451\u0450\x03\x02\x02\x02\u0452\u0455\x03" +
		"\x02\x02\x02\u0453\u0451\x03\x02\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454" +
		"\u0456\x03\x02\x02\x02\u0455\u0453\x03\x02\x02\x02\u0456\u0457\x05<\x1F" +
		"\x02\u0457a\x03\x02\x02\x02\u0458\u045C\x05,\x17\x02\u0459\u045B\x07A" +
		"\x02\x02\u045A\u0459\x03\x02\x02\x02\u045B\u045E\x03\x02\x02\x02\u045C" +
		"\u045A\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u046F\x03\x02" +
		"\x02\x02\u045E\u045C\x03\x02\x02\x02\u045F\u0463\x07,\x02\x02\u0460\u0462" +
		"\x07A\x02\x02\u0461\u0460\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02" +
		"\u0463\u0461\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\u0466\x03" +
		"\x02\x02\x02\u0465\u0463\x03\x02\x02\x02\u0466\u046A\x05,\x17\x02\u0467" +
		"\u0469\x07A\x02\x02\u0468\u0467\x03\x02\x02\x02\u0469\u046C\x03\x02\x02" +
		"\x02\u046A\u0468\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02\u046B\u046E" +
		"\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046D\u045F\x03\x02\x02\x02" +
		"\u046E\u0471\x03\x02\x02\x02\u046F\u046D\x03\x02\x02\x02\u046F\u0470\x03" +
		"\x02\x02\x02\u0470c\x03\x02\x02\x02\u0471\u046F\x03\x02\x02\x02\u0472" +
		"\u047E\t\f\x02\x02\u0473\u0477\x07\x17\x02\x02\u0474\u0476\x07A\x02\x02" +
		"\u0475\u0474\x03\x02\x02\x02\u0476\u0479\x03\x02\x02\x02\u0477\u0475\x03" +
		"\x02\x02\x02\u0477\u0478\x03\x02\x02\x02\u0478\u047B\x03\x02\x02\x02\u0479" +
		"\u0477\x03\x02\x02\x02\u047A\u047C\x050\x19\x02\u047B\u047A\x03\x02\x02" +
		"\x02\u047B\u047C\x03\x02\x02\x02\u047C\u047E\x03\x02\x02\x02\u047D\u0472" +
		"\x03\x02\x02\x02\u047D\u0473\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02" +
		"\u047F\u0480\x05\n\x06\x02\u0480e\x03\x02\x02\x02\xA8gprtx~\x85\x8A\x90" +
		"\x97\x9E\xA3\xA8\xAF\xB7\xBC\xC2\xC7\xD0\xD6\xDD\xE4\xEB\xF0\xFA\u0103" +
		"\u010A\u0111\u0115\u011A\u011F\u0125\u012C\u0135\u013C\u0143\u0148\u0150" +
		"\u0159\u015E\u0169\u0170\u0175\u017C\u0183\u018A\u018F\u0192\u0199\u01A0" +
		"\u01A7\u01AC\u01AF\u01B6\u01BD\u01C4\u01C9\u01CC\u01D3\u01DA\u01E1\u01E6" +
		"\u01E9\u01F0\u01F7\u01FE\u0203\u0206\u020D\u0214\u021B\u0220\u0223\u022A" +
		"\u0231\u0238\u023F\u0246\u0249\u0250\u0257\u025C\u0264\u026B\u0272\u0277" +
		"\u0280\u028C\u0291\u0299\u02A0\u02A7\u02AE\u02B5\u02B8\u02C0\u02C7\u02CF" +
		"\u02D5\u02E0\u02E7\u02EC\u02EE\u02F5\u02FC\u0303\u0306\u030C\u0313\u031A" +
		"\u031F\u0326\u032D\u0339\u033F\u0343\u0348\u0350\u0355\u035A\u035F\u0363" +
		"\u036B\u0372\u0379\u0380\u0387\u038E\u0392\u0398\u039F\u03A6\u03AD\u03B4" +
		"\u03BA\u03BF\u03C5\u03CC\u03D3\u03DC\u03E3\u03E7\u03ED\u03F6\u03FF\u0406" +
		"\u040D\u0414\u041D\u0424\u042B\u0432\u0439\u043F\u0443\u0445\u0449\u044D" +
		"\u0453\u045C\u0463\u046A\u046F\u0477\u047B\u047D";
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
	public DefFunc(): TerminalNode { return this.getToken(KipperParser.DefFunc, 0); }
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
	public RightParen(): TerminalNode { return this.getToken(KipperParser.RightParen, 0); }
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
	public get ruleIndex(): number { return KipperParser.RULE_functionDeclaration; }
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
	public get ruleIndex(): number { return KipperParser.RULE_endOfLine; }
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
export class NumberPrimaryExpressionContext extends PrimaryExpressionContext {
	public IntegerConstant(): TerminalNode | undefined { return this.tryGetToken(KipperParser.IntegerConstant, 0); }
	public FloatingConstant(): TerminalNode | undefined { return this.tryGetToken(KipperParser.FloatingConstant, 0); }
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
export class CharacterPrimaryExpressionContext extends PrimaryExpressionContext {
	public CharacterConstant(): TerminalNode { return this.getToken(KipperParser.CharacterConstant, 0); }
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
export class ListPrimaryExpressionContext extends PrimaryExpressionContext {
	public listConstant(): ListConstantContext {
		return this.getRuleContext(0, ListConstantContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return KipperParser.RULE_selectionStatement; }
	public copyFrom(ctx: SelectionStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class IfStatementContext extends SelectionStatementContext {
	public If(): TerminalNode { return this.getToken(KipperParser.If, 0); }
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
	public Switch(): TerminalNode { return this.getToken(KipperParser.Switch, 0); }
	public LeftParen(): TerminalNode { return this.getToken(KipperParser.LeftParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode { return this.getToken(KipperParser.RightParen, 0); }
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
	public get ruleIndex(): number { return KipperParser.RULE_switchLabeledStatement; }
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
	public endOfLine(): EndOfLineContext | undefined {
		return this.tryGetRuleContext(0, EndOfLineContext);
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
	public endOfLine(): EndOfLineContext {
		return this.getRuleContext(0, EndOfLineContext);
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


