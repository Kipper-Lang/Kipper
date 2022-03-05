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
	public static readonly RULE_initializerList = 35;
	public static readonly RULE_designation = 36;
	public static readonly RULE_designatorList = 37;
	public static readonly RULE_designator = 38;
	public static readonly RULE_statement = 39;
	public static readonly RULE_compoundStatement = 40;
	public static readonly RULE_blockItemList = 41;
	public static readonly RULE_blockItem = 42;
	public static readonly RULE_expressionStatement = 43;
	public static readonly RULE_selectionStatement = 44;
	public static readonly RULE_labeledStatement = 45;
	public static readonly RULE_iterationStatement = 46;
	public static readonly RULE_forCondition = 47;
	public static readonly RULE_forDeclaration = 48;
	public static readonly RULE_forExpression = 49;
	public static readonly RULE_jumpStatement = 50;
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
		"initializerList", "designation", "designatorList", "designator", "statement", 
		"compoundStatement", "blockItemList", "blockItem", "expressionStatement", 
		"selectionStatement", "labeledStatement", "iterationStatement", "forCondition", 
		"forDeclaration", "forExpression", "jumpStatement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'->'", "';'", "'?'", "':'", "'...'", "'const'", "'var'", "'as'", 
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
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, KipperParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__1) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.For) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0)) {
				{
				this.state = 102;
				this.translationUnit();
				}
			}

			this.state = 105;
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
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 114;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 107;
					this.externalItem();
					}
					break;

				case 2:
					{
					this.state = 108;
					this.endOfItem();
					}
					break;

				case 3:
					{
					this.state = 110;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 109;
							this.match(KipperParser.WS);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 112;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.T__1) | (1 << KipperParser.Const) | (1 << KipperParser.Var) | (1 << KipperParser.Switch) | (1 << KipperParser.Break) | (1 << KipperParser.Continue) | (1 << KipperParser.Do) | (1 << KipperParser.While) | (1 << KipperParser.If) | (1 << KipperParser.For) | (1 << KipperParser.DefFunc) | (1 << KipperParser.Return) | (1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.LeftBrace) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)) | (1 << (KipperParser.Whitespace - 32)))) !== 0));
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
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new ExternalFunctionDefinitionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this.functionDefinition();
				}
				break;

			case 2:
				_localctx = new ExternalDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.declaration();
				}
				break;

			case 3:
				_localctx = new ExternalBlockItemContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
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
		this.enterRule(_localctx, 6, KipperParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(KipperParser.DefFunc);
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
			this.declarator();
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
			this.state = 137;
			this.match(KipperParser.LeftParen);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Identifier) {
				{
				this.state = 138;
				this.parameterTypeList();
				}
			}

			this.state = 141;
			this.match(KipperParser.RightParen);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 142;
				this.match(KipperParser.WS);
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 148;
			this.match(KipperParser.T__0);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 149;
				this.match(KipperParser.WS);
				}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 155;
			this.typeSpecifier();
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 156;
				this.match(KipperParser.WS);
				}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 162;
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
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Whitespace) {
				{
				{
				this.state = 164;
				this.match(KipperParser.Whitespace);
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 170;
			this.match(KipperParser.T__1);
			this.state = 174;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 171;
					this.match(KipperParser.Whitespace);
					}
					}
				}
				this.state = 176;
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
			this.state = 188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.match(KipperParser.Identifier);
				}
				break;
			case KipperParser.Constant:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 178;
				this.match(KipperParser.Constant);
				}
				break;
			case KipperParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 179;
					this.match(KipperParser.StringLiteral);
					}
					}
					this.state = 182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === KipperParser.StringLiteral);
				}
				break;
			case KipperParser.LeftParen:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 184;
				this.match(KipperParser.LeftParen);
				this.state = 185;
				this.expression();
				this.state = 186;
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
			this.state = 251;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftParen:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.StringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 190;
				this.primaryExpression();
				this.state = 194;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 191;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 196;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (KipperParser.LeftBracket - 27)) | (1 << (KipperParser.PlusPlus - 27)) | (1 << (KipperParser.MinusMinus - 27)))) !== 0)) {
					{
					this.state = 214;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case KipperParser.LeftBracket:
						{
						this.state = 197;
						this.match(KipperParser.LeftBracket);
						this.state = 201;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 198;
								this.match(KipperParser.WS);
								}
								}
							}
							this.state = 203;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
						}
						this.state = 204;
						this.expression();
						this.state = 208;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 205;
							this.match(KipperParser.WS);
							}
							}
							this.state = 210;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 211;
						this.match(KipperParser.RightBracket);
						}
						break;
					case KipperParser.PlusPlus:
					case KipperParser.MinusMinus:
						{
						this.state = 213;
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
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case KipperParser.CallFunc:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.match(KipperParser.CallFunc);
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
				this.primaryExpression();
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
				this.state = 233;
				this.match(KipperParser.LeftParen);
				this.state = 237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 234;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 239;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
				}
				this.state = 241;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
				case 1:
					{
					this.state = 240;
					this.argumentExpressionList();
					}
					break;
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 243;
					this.match(KipperParser.WS);
					}
					}
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 249;
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
			this.state = 253;
			this.assignmentExpression();
			this.state = 257;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 254;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 260;
				this.match(KipperParser.Comma);
				this.state = 264;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 261;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 266;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				this.state = 267;
				this.assignmentExpression();
				this.state = 271;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				}
				}
				}
				this.state = 278;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.PlusPlus || _la === KipperParser.MinusMinus) {
				{
				{
				this.state = 279;
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
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 285;
				this.match(KipperParser.WS);
				}
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 301;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.CallFunc:
			case KipperParser.LeftParen:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.StringLiteral:
				{
				this.state = 291;
				this.postfixExpression();
				}
				break;
			case KipperParser.Plus:
			case KipperParser.Minus:
			case KipperParser.Star:
			case KipperParser.Not:
				{
				this.state = 292;
				this.unaryOperator();
				this.state = 296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 293;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 298;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
				}
				this.state = 299;
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
		this.enterRule(_localctx, 18, KipperParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 303;
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
		this.enterRule(_localctx, 20, KipperParser.RULE_castOrConvertExpression);
		let _la: number;
		try {
			this.state = 323;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 305;
				this.unaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				this.match(KipperParser.DigitSequence);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 307;
				this.unaryExpression();
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 308;
					this.match(KipperParser.WS);
					}
					}
					this.state = 313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 314;
				this.match(KipperParser.As);
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 315;
					this.match(KipperParser.WS);
					}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 321;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.castOrConvertExpression();
			this.state = 329;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 326;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 331;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (KipperParser.Star - 35)) | (1 << (KipperParser.Div - 35)) | (1 << (KipperParser.Mod - 35)))) !== 0)) {
				{
				{
				this.state = 332;
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
				this.state = 336;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 333;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 338;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
				}
				this.state = 339;
				this.castOrConvertExpression();
				this.state = 343;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 340;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 345;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
				}
				}
				}
				this.state = 350;
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
		this.enterRule(_localctx, 24, KipperParser.RULE_additiveExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.multiplicativeExpression();
			this.state = 355;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 352;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Plus || _la === KipperParser.Minus) {
				{
				{
				this.state = 358;
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
				this.state = 362;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 359;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 364;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
				}
				this.state = 365;
				this.multiplicativeExpression();
				this.state = 369;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 366;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 371;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				}
				}
				}
				this.state = 376;
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
		this.enterRule(_localctx, 26, KipperParser.RULE_relationalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.additiveExpression();
			this.state = 381;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 378;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 383;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			}
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (KipperParser.Less - 50)) | (1 << (KipperParser.LessEqual - 50)) | (1 << (KipperParser.Greater - 50)) | (1 << (KipperParser.GreaterEqual - 50)))) !== 0)) {
				{
				{
				this.state = 384;
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
				this.state = 388;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				}
				this.state = 391;
				this.additiveExpression();
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 392;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 397;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
				}
				}
				}
				this.state = 402;
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
		this.enterRule(_localctx, 28, KipperParser.RULE_equalityExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.relationalExpression();
			this.state = 407;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Equal || _la === KipperParser.NotEqual) {
				{
				{
				this.state = 410;
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
				this.state = 414;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 411;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 416;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
				}
				this.state = 417;
				this.relationalExpression();
				this.state = 421;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				}
				}
				}
				this.state = 428;
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
		this.enterRule(_localctx, 30, KipperParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.equalityExpression();
			this.state = 433;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 430;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.AndAnd) {
				{
				{
				this.state = 436;
				this.match(KipperParser.AndAnd);
				this.state = 440;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				this.state = 443;
				this.equalityExpression();
				this.state = 447;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				}
				}
				this.state = 454;
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
		this.enterRule(_localctx, 32, KipperParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.logicalAndExpression();
			this.state = 459;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 456;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			}
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.OrOr) {
				{
				{
				this.state = 462;
				this.match(KipperParser.OrOr);
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 463;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 468;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				}
				this.state = 469;
				this.logicalAndExpression();
				this.state = 473;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 470;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 475;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				}
				}
				this.state = 480;
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
		this.enterRule(_localctx, 34, KipperParser.RULE_conditionalExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.logicalOrExpression();
			this.state = 485;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 482;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 487;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.T__2) {
				{
				this.state = 488;
				this.match(KipperParser.T__2);
				this.state = 492;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 489;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 494;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
				}
				this.state = 495;
				this.expression();
				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 496;
					this.match(KipperParser.WS);
					}
					}
					this.state = 501;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 502;
				this.match(KipperParser.T__3);
				this.state = 506;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 503;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 508;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
				}
				this.state = 509;
				this.conditionalExpression();
				this.state = 513;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 510;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 515;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
		this.enterRule(_localctx, 36, KipperParser.RULE_assignmentExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 518;
				this.conditionalExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 519;
				this.unaryExpression();
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 520;
					this.match(KipperParser.WS);
					}
					}
					this.state = 525;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 526;
				this.assignmentOperator();
				this.state = 530;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 527;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 532;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				}
				this.state = 533;
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
			this.state = 537;
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
		this.enterRule(_localctx, 40, KipperParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.assignmentExpression();
			this.state = 543;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 540;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
			}
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 546;
				this.match(KipperParser.Comma);
				this.state = 550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 547;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 552;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
				}
				this.state = 553;
				this.assignmentExpression();
				this.state = 557;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 554;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 559;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				}
				}
				}
				this.state = 564;
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
			this.state = 565;
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
			this.state = 567;
			this.storageTypeSpecifier();
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 568;
				this.match(KipperParser.WS);
				}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 574;
			this.initDeclarator();
			this.state = 575;
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
			this.state = 577;
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
			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 579;
				this.declarationSpecifier();
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 580;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				}
				}
				}
				this.state = 588;
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
			this.state = 590;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.declarator();
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
			this.match(KipperParser.T__3);
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
			this.state = 606;
			this.typeSpecifier();
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 607;
				this.match(KipperParser.WS);
				}
				}
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Assign) {
				{
				this.state = 613;
				this.match(KipperParser.Assign);
				this.state = 617;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 614;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 619;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
				}
				this.state = 620;
				this.initializer();
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 621;
					this.match(KipperParser.WS);
					}
					}
					this.state = 626;
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
			this.state = 656;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				_localctx = new SingleItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 629;
				this.match(KipperParser.Identifier);
				}
				break;

			case 2:
				_localctx = new MultiItemTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 630;
				this.match(KipperParser.Identifier);
				this.state = 631;
				this.match(KipperParser.Less);
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 632;
					this.match(KipperParser.WS);
					}
					}
					this.state = 637;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 638;
				this.match(KipperParser.Identifier);
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 639;
					this.match(KipperParser.WS);
					}
					}
					this.state = 644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 645;
				this.match(KipperParser.Greater);
				}
				break;

			case 3:
				_localctx = new TypeofTypeSpecifierContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 646;
				this.match(KipperParser.Typeof);
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 647;
					this.match(KipperParser.WS);
					}
					}
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 653;
				this.match(KipperParser.LeftParen);
				this.state = 654;
				this.match(KipperParser.Identifier);
				this.state = 655;
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
			this.state = 658;
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
			this.state = 660;
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
			this.state = 681;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 679;
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
						this.state = 662;
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
						this.state = 663;
						this.match(KipperParser.LeftParen);
						this.state = 667;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 664;
								this.match(KipperParser.WS);
								}
								}
							}
							this.state = 669;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
						}
						this.state = 670;
						this.nestedParenthesesBlock();
						this.state = 674;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.WS) {
							{
							{
							this.state = 671;
							this.match(KipperParser.WS);
							}
							}
							this.state = 676;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 677;
						this.match(KipperParser.RightParen);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 683;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
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
			this.state = 684;
			this.parameterList();
			this.state = 688;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 685;
				this.match(KipperParser.WS);
				}
				}
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === KipperParser.Comma) {
				{
				this.state = 691;
				this.match(KipperParser.Comma);
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 692;
					this.match(KipperParser.WS);
					}
					}
					this.state = 697;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 698;
				this.match(KipperParser.T__4);
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
			this.state = 707;
			this.parameterDeclaration();
			this.state = 711;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 708;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 713;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			this.state = 730;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 714;
					this.match(KipperParser.Comma);
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
					this.parameterDeclaration();
					this.state = 725;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
					}
					}
					}
				}
				this.state = 732;
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
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, KipperParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this.declarator();
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
			this.match(KipperParser.T__3);
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
			let _alt: number;
			this.state = 776;
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
				this.state = 749;
				this.assignmentExpression();
				}
				break;
			case KipperParser.LeftBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 750;
				this.match(KipperParser.LeftBracket);
				this.state = 754;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
				}
				this.state = 758;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 757;
					this.initializerList();
					}
					break;
				}
				this.state = 763;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 103, this._ctx);
				}
				this.state = 767;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Comma) {
					{
					this.state = 766;
					this.match(KipperParser.Comma);
					}
				}

				this.state = 772;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 769;
					this.match(KipperParser.WS);
					}
					}
					this.state = 774;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 775;
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
		this.enterRule(_localctx, 70, KipperParser.RULE_initializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 778;
				this.designation();
				}
				break;
			}
			this.state = 784;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 781;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 786;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			}
			this.state = 787;
			this.initializer();
			this.state = 791;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 788;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 793;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 109, this._ctx);
			}
			this.state = 819;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 794;
					this.match(KipperParser.Comma);
					this.state = 798;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 795;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 800;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
					}
					this.state = 802;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
					case 1:
						{
						this.state = 801;
						this.designation();
						}
						break;
					}
					this.state = 807;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 804;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 809;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 112, this._ctx);
					}
					this.state = 810;
					this.initializer();
					this.state = 814;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
					}
					}
					}
				}
				this.state = 821;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
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
		this.enterRule(_localctx, 72, KipperParser.RULE_designation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this.designatorList();
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 823;
				this.match(KipperParser.WS);
				}
				}
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 829;
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
		this.enterRule(_localctx, 74, KipperParser.RULE_designatorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 831;
				this.designator();
				}
				}
				this.state = 834;
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
		this.enterRule(_localctx, 76, KipperParser.RULE_designator);
		let _la: number;
		try {
			let _alt: number;
			this.state = 860;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 836;
				this.match(KipperParser.LeftBracket);
				this.state = 840;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 837;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 842;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 117, this._ctx);
				}
				this.state = 843;
				this.constantExpression();
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
				this.state = 850;
				this.match(KipperParser.RightBracket);
				}
				break;
			case KipperParser.Dot:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 852;
				this.match(KipperParser.Dot);
				this.state = 856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 853;
					this.match(KipperParser.WS);
					}
					}
					this.state = 858;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 859;
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
		this.enterRule(_localctx, 78, KipperParser.RULE_statement);
		try {
			this.state = 867;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.LeftBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 862;
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
			case KipperParser.Star:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.DigitSequence:
			case KipperParser.StringLiteral:
			case KipperParser.WS:
			case KipperParser.Whitespace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 863;
				this.expressionStatement();
				}
				break;
			case KipperParser.Switch:
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 864;
				this.selectionStatement();
				}
				break;
			case KipperParser.Do:
			case KipperParser.While:
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 865;
				this.iterationStatement();
				}
				break;
			case KipperParser.Break:
			case KipperParser.Continue:
			case KipperParser.Return:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 866;
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
		this.enterRule(_localctx, 80, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.match(KipperParser.LeftBrace);
			this.state = 873;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 870;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 875;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			}
			this.state = 877;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 876;
				this.blockItemList();
				}
				break;
			}
			this.state = 882;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 879;
				this.match(KipperParser.WS);
				}
				}
				this.state = 884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 885;
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
		this.enterRule(_localctx, 82, KipperParser.RULE_blockItemList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 888;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 887;
					this.blockItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 890;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
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
		this.enterRule(_localctx, 84, KipperParser.RULE_blockItem);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 895;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 892;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 897;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 126, this._ctx);
			}
			this.state = 900;
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
			case KipperParser.Star:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.DigitSequence:
			case KipperParser.StringLiteral:
			case KipperParser.WS:
			case KipperParser.Whitespace:
				{
				this.state = 898;
				this.statement();
				}
				break;
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 899;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 905;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 902;
					this.match(KipperParser.WS);
					}
					}
				}
				this.state = 907;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
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
		this.enterRule(_localctx, 86, KipperParser.RULE_expressionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
				{
				this.state = 908;
				this.expression();
				}
			}

			this.state = 911;
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
		this.enterRule(_localctx, 88, KipperParser.RULE_selectionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1001;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 913;
				this.match(KipperParser.If);
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
				this.match(KipperParser.LeftParen);
				this.state = 924;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 921;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 926;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
				}
				this.state = 927;
				this.expression();
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
				this.match(KipperParser.RightParen);
				this.state = 938;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 935;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 940;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 133, this._ctx);
				}
				this.state = 941;
				this.statement();
				this.state = 945;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 942;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 947;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
				}
				this.state = 956;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
				case 1:
					{
					this.state = 948;
					this.match(KipperParser.Else);
					this.state = 952;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 949;
							this.match(KipperParser.WS);
							}
							}
						}
						this.state = 954;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
					}
					this.state = 955;
					this.statement();
					}
					break;
				}
				}
				break;
			case KipperParser.Switch:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 958;
				this.match(KipperParser.Switch);
				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 959;
					this.match(KipperParser.WS);
					}
					}
					this.state = 964;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 965;
				this.match(KipperParser.LeftParen);
				this.state = 969;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 966;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 971;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 138, this._ctx);
				}
				this.state = 972;
				this.expression();
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 973;
					this.match(KipperParser.WS);
					}
					}
					this.state = 978;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 979;
				this.match(KipperParser.RightParen);
				this.state = 983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 980;
					this.match(KipperParser.WS);
					}
					}
					this.state = 985;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 986;
				this.match(KipperParser.LeftBrace);
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Case || _la === KipperParser.Default || _la === KipperParser.WS) {
					{
					{
					this.state = 990;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === KipperParser.WS) {
						{
						{
						this.state = 987;
						this.match(KipperParser.WS);
						}
						}
						this.state = 992;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 993;
					this.labeledStatement();
					}
					}
					this.state = 998;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 999;
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
		this.enterRule(_localctx, 90, KipperParser.RULE_labeledStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1041;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Case:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1003;
				this.match(KipperParser.Case);
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
				}
				this.state = 1010;
				this.constantExpression();
				this.state = 1014;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1011;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1016;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1017;
				this.match(KipperParser.T__3);
				this.state = 1021;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1018;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1023;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				}
				this.state = 1024;
				this.statement();
				}
				break;
			case KipperParser.Default:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1026;
				this.match(KipperParser.Default);
				this.state = 1030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1027;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1032;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1033;
				this.match(KipperParser.T__3);
				this.state = 1037;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1034;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1039;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
				}
				this.state = 1040;
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
		this.enterRule(_localctx, 92, KipperParser.RULE_iterationStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.For:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1043;
				this.match(KipperParser.For);
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
				this.match(KipperParser.LeftParen);
				this.state = 1051;
				this.forCondition();
				this.state = 1052;
				this.match(KipperParser.RightParen);
				this.state = 1056;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1053;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1058;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 151, this._ctx);
				}
				this.state = 1059;
				this.statement();
				}
				break;
			case KipperParser.While:
				this.enterOuterAlt(_localctx, 2);
				{
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
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1069;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1074;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
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
				this.state = 1086;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1083;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1088;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
				}
				this.state = 1089;
				this.statement();
				}
				break;
			case KipperParser.Do:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1091;
				this.match(KipperParser.Do);
				this.state = 1095;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1092;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1097;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
				}
				this.state = 1098;
				this.statement();
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1099;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1105;
				this.match(KipperParser.While);
				this.state = 1109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1106;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1112;
				this.match(KipperParser.LeftParen);
				this.state = 1116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1113;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1118;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
				}
				this.state = 1119;
				this.expression();
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1120;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1125;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1126;
				this.match(KipperParser.RightParen);
				this.state = 1127;
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
		this.enterRule(_localctx, 94, KipperParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Const:
			case KipperParser.Var:
				{
				this.state = 1131;
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
			case KipperParser.Star:
			case KipperParser.Not:
			case KipperParser.Identifier:
			case KipperParser.Constant:
			case KipperParser.DigitSequence:
			case KipperParser.StringLiteral:
			case KipperParser.WS:
			case KipperParser.Whitespace:
				{
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
					{
					this.state = 1132;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1137;
			this.endOfItem();
			this.state = 1139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
				{
				this.state = 1138;
				this.forExpression();
				}
			}

			this.state = 1141;
			this.endOfItem();
			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
				{
				this.state = 1142;
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
		this.enterRule(_localctx, 96, KipperParser.RULE_forDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			this.storageTypeSpecifier();
			this.state = 1149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.WS) {
				{
				{
				this.state = 1146;
				this.match(KipperParser.WS);
				}
				}
				this.state = 1151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1152;
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
		this.enterRule(_localctx, 98, KipperParser.RULE_forExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1154;
			this.assignmentExpression();
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
			this.state = 1177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === KipperParser.Comma) {
				{
				{
				this.state = 1161;
				this.match(KipperParser.Comma);
				this.state = 1165;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1162;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1167;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 168, this._ctx);
				}
				this.state = 1168;
				this.assignmentExpression();
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.WS) {
					{
					{
					this.state = 1169;
					this.match(KipperParser.WS);
					}
					}
					this.state = 1174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 1179;
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
		this.enterRule(_localctx, 100, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KipperParser.Break:
			case KipperParser.Continue:
				{
				this.state = 1180;
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
				this.state = 1181;
				this.match(KipperParser.Return);
				this.state = 1185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1182;
						this.match(KipperParser.WS);
						}
						}
					}
					this.state = 1187;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 171, this._ctx);
				}
				this.state = 1189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KipperParser.CallFunc) | (1 << KipperParser.LeftParen) | (1 << KipperParser.Plus))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (KipperParser.PlusPlus - 32)) | (1 << (KipperParser.Minus - 32)) | (1 << (KipperParser.MinusMinus - 32)) | (1 << (KipperParser.Star - 32)) | (1 << (KipperParser.Not - 32)) | (1 << (KipperParser.Identifier - 32)) | (1 << (KipperParser.Constant - 32)) | (1 << (KipperParser.DigitSequence - 32)) | (1 << (KipperParser.StringLiteral - 32)) | (1 << (KipperParser.WS - 32)))) !== 0)) {
					{
					this.state = 1188;
					this.expression();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1193;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u04AE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x03\x02\x05\x02j\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x06" +
		"\x03q\n\x03\r\x03\x0E\x03r\x06\x03u\n\x03\r\x03\x0E\x03v\x03\x04\x03\x04" +
		"\x03\x04\x05\x04|\n\x04\x03\x05\x03\x05\x07\x05\x80\n\x05\f\x05\x0E\x05" +
		"\x83\v\x05\x03\x05\x03\x05\x07\x05\x87\n\x05\f\x05\x0E\x05\x8A\v\x05\x03" +
		"\x05\x03\x05\x05\x05\x8E\n\x05\x03\x05\x03\x05\x07\x05\x92\n\x05\f\x05" +
		"\x0E\x05\x95\v\x05\x03\x05\x03\x05\x07\x05\x99\n\x05\f\x05\x0E\x05\x9C" +
		"\v\x05\x03\x05\x03\x05\x07\x05\xA0\n\x05\f\x05\x0E\x05\xA3\v\x05\x03\x05" +
		"\x03\x05\x03\x06\x07\x06\xA8\n\x06\f\x06\x0E\x06\xAB\v\x06\x03\x06\x03" +
		"\x06\x07\x06\xAF\n\x06\f\x06\x0E\x06\xB2\v\x06\x03\x07\x03\x07\x03\x07" +
		"\x06\x07\xB7\n\x07\r\x07\x0E\x07\xB8\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\xBF\n\x07\x03\b\x03\b\x07\b\xC3\n\b\f\b\x0E\b\xC6\v\b\x03\b\x03\b" +
		"\x07\b\xCA\n\b\f\b\x0E\b\xCD\v\b\x03\b\x03\b\x07\b\xD1\n\b\f\b\x0E\b\xD4" +
		"\v\b\x03\b\x03\b\x03\b\x07\b\xD9\n\b\f\b\x0E\b\xDC\v\b\x03\b\x03\b\x07" +
		"\b\xE0\n\b\f\b\x0E\b\xE3\v\b\x03\b\x03\b\x07\b\xE7\n\b\f\b\x0E\b\xEA\v" +
		"\b\x03\b\x03\b\x07\b\xEE\n\b\f\b\x0E\b\xF1\v\b\x03\b\x05\b\xF4\n\b\x03" +
		"\b\x07\b\xF7\n\b\f\b\x0E\b\xFA\v\b\x03\b\x03\b\x05\b\xFE\n\b\x03\t\x03" +
		"\t\x07\t\u0102\n\t\f\t\x0E\t\u0105\v\t\x03\t\x03\t\x07\t\u0109\n\t\f\t" +
		"\x0E\t\u010C\v\t\x03\t\x03\t\x07\t\u0110\n\t\f\t\x0E\t\u0113\v\t\x07\t" +
		"\u0115\n\t\f\t\x0E\t\u0118\v\t\x03\n\x07\n\u011B\n\n\f\n\x0E\n\u011E\v" +
		"\n\x03\n\x07\n\u0121\n\n\f\n\x0E\n\u0124\v\n\x03\n\x03\n\x03\n\x07\n\u0129" +
		"\n\n\f\n\x0E\n\u012C\v\n\x03\n\x03\n\x05\n\u0130\n\n\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x03\f\x07\f\u0138\n\f\f\f\x0E\f\u013B\v\f\x03\f\x03\f\x07" +
		"\f\u013F\n\f\f\f\x0E\f\u0142\v\f\x03\f\x03\f\x05\f\u0146\n\f\x03\r\x03" +
		"\r\x07\r\u014A\n\r\f\r\x0E\r\u014D\v\r\x03\r\x03\r\x07\r\u0151\n\r\f\r" +
		"\x0E\r\u0154\v\r\x03\r\x03\r\x07\r\u0158\n\r\f\r\x0E\r\u015B\v\r\x07\r" +
		"\u015D\n\r\f\r\x0E\r\u0160\v\r\x03\x0E\x03\x0E\x07\x0E\u0164\n\x0E\f\x0E" +
		"\x0E\x0E\u0167\v\x0E\x03\x0E\x03\x0E\x07\x0E\u016B\n\x0E\f\x0E\x0E\x0E" +
		"\u016E\v\x0E\x03\x0E\x03\x0E\x07\x0E\u0172\n\x0E\f\x0E\x0E\x0E\u0175\v" +
		"\x0E\x07\x0E\u0177\n\x0E\f\x0E\x0E\x0E\u017A\v\x0E\x03\x0F\x03\x0F\x07" +
		"\x0F\u017E\n\x0F\f\x0F\x0E\x0F\u0181\v\x0F\x03\x0F\x03\x0F\x07\x0F\u0185" +
		"\n\x0F\f\x0F\x0E\x0F\u0188\v\x0F\x03\x0F\x03\x0F\x07\x0F\u018C\n\x0F\f" +
		"\x0F\x0E\x0F\u018F\v\x0F\x07\x0F\u0191\n\x0F\f\x0F\x0E\x0F\u0194\v\x0F" +
		"\x03\x10\x03\x10\x07\x10\u0198\n\x10\f\x10\x0E\x10\u019B\v\x10\x03\x10" +
		"\x03\x10\x07\x10\u019F\n\x10\f\x10\x0E\x10\u01A2\v\x10\x03\x10\x03\x10" +
		"\x07\x10\u01A6\n\x10\f\x10\x0E\x10\u01A9\v\x10\x07\x10\u01AB\n\x10\f\x10" +
		"\x0E\x10\u01AE\v\x10\x03\x11\x03\x11\x07\x11\u01B2\n\x11\f\x11\x0E\x11" +
		"\u01B5\v\x11\x03\x11\x03\x11\x07\x11\u01B9\n\x11\f\x11\x0E\x11\u01BC\v" +
		"\x11\x03\x11\x03\x11\x07\x11\u01C0\n\x11\f\x11\x0E\x11\u01C3\v\x11\x07" +
		"\x11\u01C5\n\x11\f\x11\x0E\x11\u01C8\v\x11\x03\x12\x03\x12\x07\x12\u01CC" +
		"\n\x12\f\x12\x0E\x12\u01CF\v\x12\x03\x12\x03\x12\x07\x12\u01D3\n\x12\f" +
		"\x12\x0E\x12\u01D6\v\x12\x03\x12\x03\x12\x07\x12\u01DA\n\x12\f\x12\x0E" +
		"\x12\u01DD\v\x12\x07\x12\u01DF\n\x12\f\x12\x0E\x12\u01E2\v\x12\x03\x13" +
		"\x03\x13\x07\x13\u01E6\n\x13\f\x13\x0E\x13\u01E9\v\x13\x03\x13\x03\x13" +
		"\x07\x13\u01ED\n\x13\f\x13\x0E\x13\u01F0\v\x13\x03\x13\x03\x13\x07\x13" +
		"\u01F4\n\x13\f\x13\x0E\x13\u01F7\v\x13\x03\x13\x03\x13\x07\x13\u01FB\n" +
		"\x13\f\x13\x0E\x13\u01FE\v\x13\x03\x13\x03\x13\x07\x13\u0202\n\x13\f\x13" +
		"\x0E\x13\u0205\v\x13\x05\x13\u0207\n\x13\x03\x14\x03\x14\x03\x14\x07\x14" +
		"\u020C\n\x14\f\x14\x0E\x14\u020F\v\x14\x03\x14\x03\x14\x07\x14\u0213\n" +
		"\x14\f\x14\x0E\x14\u0216\v\x14\x03\x14\x03\x14\x05\x14\u021A\n\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x07\x16\u0220\n\x16\f\x16\x0E\x16\u0223\v" +
		"\x16\x03\x16\x03\x16\x07\x16\u0227\n\x16\f\x16\x0E\x16\u022A\v\x16\x03" +
		"\x16\x03\x16\x07\x16\u022E\n\x16\f\x16\x0E\x16\u0231\v\x16\x07\x16\u0233" +
		"\n\x16\f\x16\x0E\x16\u0236\v\x16\x03\x17\x03\x17\x03\x18\x03\x18\x07\x18" +
		"\u023C\n\x18\f\x18\x0E\x18\u023F\v\x18\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x07\x1A\u0248\n\x1A\f\x1A\x0E\x1A\u024B\v\x1A" +
		"\x06\x1A\u024D\n\x1A\r\x1A\x0E\x1A\u024E\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x07\x1C\u0255\n\x1C\f\x1C\x0E\x1C\u0258\v\x1C\x03\x1C\x03\x1C\x07\x1C" +
		"\u025C\n\x1C\f\x1C\x0E\x1C\u025F\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0263\n" +
		"\x1C\f\x1C\x0E\x1C\u0266\v\x1C\x03\x1C\x03\x1C\x07\x1C\u026A\n\x1C\f\x1C" +
		"\x0E\x1C\u026D\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0271\n\x1C\f\x1C\x0E\x1C" +
		"\u0274\v\x1C\x05\x1C\u0276\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D" +
		"\u027C\n\x1D\f\x1D\x0E\x1D\u027F\v\x1D\x03\x1D\x03\x1D\x07\x1D\u0283\n" +
		"\x1D\f\x1D\x0E\x1D\u0286\v\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u028B\n" +
		"\x1D\f\x1D\x0E\x1D\u028E\v\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0293\n" +
		"\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x07 \u029C\n \f \x0E" +
		" \u029F\v \x03 \x03 \x07 \u02A3\n \f \x0E \u02A6\v \x03 \x03 \x07 \u02AA" +
		"\n \f \x0E \u02AD\v \x03!\x03!\x07!\u02B1\n!\f!\x0E!\u02B4\v!\x03!\x03" +
		"!\x07!\u02B8\n!\f!\x0E!\u02BB\v!\x03!\x03!\x07!\u02BF\n!\f!\x0E!\u02C2" +
		"\v!\x05!\u02C4\n!\x03\"\x03\"\x07\"\u02C8\n\"\f\"\x0E\"\u02CB\v\"\x03" +
		"\"\x03\"\x07\"\u02CF\n\"\f\"\x0E\"\u02D2\v\"\x03\"\x03\"\x07\"\u02D6\n" +
		"\"\f\"\x0E\"\u02D9\v\"\x07\"\u02DB\n\"\f\"\x0E\"\u02DE\v\"\x03#\x03#\x07" +
		"#\u02E2\n#\f#\x0E#\u02E5\v#\x03#\x03#\x07#\u02E9\n#\f#\x0E#\u02EC\v#\x03" +
		"#\x03#\x03$\x03$\x03$\x07$\u02F3\n$\f$\x0E$\u02F6\v$\x03$\x05$\u02F9\n" +
		"$\x03$\x07$\u02FC\n$\f$\x0E$\u02FF\v$\x03$\x05$\u0302\n$\x03$\x07$\u0305" +
		"\n$\f$\x0E$\u0308\v$\x03$\x05$\u030B\n$\x03%\x05%\u030E\n%\x03%\x07%\u0311" +
		"\n%\f%\x0E%\u0314\v%\x03%\x03%\x07%\u0318\n%\f%\x0E%\u031B\v%\x03%\x03" +
		"%\x07%\u031F\n%\f%\x0E%\u0322\v%\x03%\x05%\u0325\n%\x03%\x07%\u0328\n" +
		"%\f%\x0E%\u032B\v%\x03%\x03%\x07%\u032F\n%\f%\x0E%\u0332\v%\x07%\u0334" +
		"\n%\f%\x0E%\u0337\v%\x03&\x03&\x07&\u033B\n&\f&\x0E&\u033E\v&\x03&\x03" +
		"&\x03\'\x06\'\u0343\n\'\r\'\x0E\'\u0344\x03(\x03(\x07(\u0349\n(\f(\x0E" +
		"(\u034C\v(\x03(\x03(\x07(\u0350\n(\f(\x0E(\u0353\v(\x03(\x03(\x03(\x03" +
		"(\x07(\u0359\n(\f(\x0E(\u035C\v(\x03(\x05(\u035F\n(\x03)\x03)\x03)\x03" +
		")\x03)\x05)\u0366\n)\x03*\x03*\x07*\u036A\n*\f*\x0E*\u036D\v*\x03*\x05" +
		"*\u0370\n*\x03*\x07*\u0373\n*\f*\x0E*\u0376\v*\x03*\x03*\x03+\x06+\u037B" +
		"\n+\r+\x0E+\u037C\x03,\x07,\u0380\n,\f,\x0E,\u0383\v,\x03,\x03,\x05,\u0387" +
		"\n,\x03,\x07,\u038A\n,\f,\x0E,\u038D\v,\x03-\x05-\u0390\n-\x03-\x03-\x03" +
		".\x03.\x07.\u0396\n.\f.\x0E.\u0399\v.\x03.\x03.\x07.\u039D\n.\f.\x0E." +
		"\u03A0\v.\x03.\x03.\x07.\u03A4\n.\f.\x0E.\u03A7\v.\x03.\x03.\x07.\u03AB" +
		"\n.\f.\x0E.\u03AE\v.\x03.\x03.\x07.\u03B2\n.\f.\x0E.\u03B5\v.\x03.\x03" +
		".\x07.\u03B9\n.\f.\x0E.\u03BC\v.\x03.\x05.\u03BF\n.\x03.\x03.\x07.\u03C3" +
		"\n.\f.\x0E.\u03C6\v.\x03.\x03.\x07.\u03CA\n.\f.\x0E.\u03CD\v.\x03.\x03" +
		".\x07.\u03D1\n.\f.\x0E.\u03D4\v.\x03.\x03.\x07.\u03D8\n.\f.\x0E.\u03DB" +
		"\v.\x03.\x03.\x07.\u03DF\n.\f.\x0E.\u03E2\v.\x03.\x07.\u03E5\n.\f.\x0E" +
		".\u03E8\v.\x03.\x03.\x05.\u03EC\n.\x03/\x03/\x07/\u03F0\n/\f/\x0E/\u03F3" +
		"\v/\x03/\x03/\x07/\u03F7\n/\f/\x0E/\u03FA\v/\x03/\x03/\x07/\u03FE\n/\f" +
		"/\x0E/\u0401\v/\x03/\x03/\x03/\x03/\x07/\u0407\n/\f/\x0E/\u040A\v/\x03" +
		"/\x03/\x07/\u040E\n/\f/\x0E/\u0411\v/\x03/\x05/\u0414\n/\x030\x030\x07" +
		"0\u0418\n0\f0\x0E0\u041B\v0\x030\x030\x030\x030\x070\u0421\n0\f0\x0E0" +
		"\u0424\v0\x030\x030\x030\x030\x070\u042A\n0\f0\x0E0\u042D\v0\x030\x03" +
		"0\x070\u0431\n0\f0\x0E0\u0434\v0\x030\x030\x070\u0438\n0\f0\x0E0\u043B" +
		"\v0\x030\x030\x070\u043F\n0\f0\x0E0\u0442\v0\x030\x030\x030\x030\x070" +
		"\u0448\n0\f0\x0E0\u044B\v0\x030\x030\x070\u044F\n0\f0\x0E0\u0452\v0\x03" +
		"0\x030\x070\u0456\n0\f0\x0E0\u0459\v0\x030\x030\x070\u045D\n0\f0\x0E0" +
		"\u0460\v0\x030\x030\x070\u0464\n0\f0\x0E0\u0467\v0\x030\x030\x030\x05" +
		"0\u046C\n0\x031\x031\x051\u0470\n1\x051\u0472\n1\x031\x031\x051\u0476" +
		"\n1\x031\x031\x051\u047A\n1\x032\x032\x072\u047E\n2\f2\x0E2\u0481\v2\x03" +
		"2\x032\x033\x033\x073\u0487\n3\f3\x0E3\u048A\v3\x033\x033\x073\u048E\n" +
		"3\f3\x0E3\u0491\v3\x033\x033\x073\u0495\n3\f3\x0E3\u0498\v3\x073\u049A" +
		"\n3\f3\x0E3\u049D\v3\x034\x034\x034\x074\u04A2\n4\f4\x0E4\u04A5\v4\x03" +
		"4\x054\u04A8\n4\x054\u04AA\n4\x034\x034\x034\x02\x02\x025\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02\x02\f\x04\x02\"\"$$\x06\x02!!##%%**\x03\x02%\'\x04\x02!!##\x03\x02" +
		"47\x03\x0223\x03\x02,1\x03\x02\b\t\x03\x02\x1B\x1C\x03\x02\x0E\x0F\x02" +
		"\u0532\x02i\x03\x02\x02\x02\x04t\x03\x02\x02\x02\x06{\x03\x02\x02\x02" +
		"\b}\x03\x02\x02\x02\n\xA9\x03\x02\x02\x02\f\xBE\x03\x02\x02\x02\x0E\xFD" +
		"\x03\x02\x02\x02\x10\xFF\x03\x02\x02\x02\x12\u011C\x03\x02\x02\x02\x14" +
		"\u0131\x03\x02\x02\x02\x16\u0145\x03\x02\x02\x02\x18\u0147\x03\x02\x02" +
		"\x02\x1A\u0161\x03\x02\x02\x02\x1C\u017B\x03\x02\x02\x02\x1E\u0195\x03" +
		"\x02\x02\x02 \u01AF\x03\x02\x02\x02\"\u01C9\x03\x02\x02\x02$\u01E3\x03" +
		"\x02\x02\x02&\u0219\x03\x02\x02\x02(\u021B\x03\x02\x02\x02*\u021D\x03" +
		"\x02\x02\x02,\u0237\x03\x02\x02\x02.\u0239\x03\x02\x02\x020\u0243\x03" +
		"\x02\x02\x022\u024C\x03\x02\x02\x024\u0250\x03\x02\x02\x026\u0252\x03" +
		"\x02\x02\x028\u0292\x03\x02\x02\x02:\u0294\x03\x02\x02\x02<\u0296\x03" +
		"\x02\x02\x02>\u02AB\x03\x02\x02\x02@\u02AE\x03\x02\x02\x02B\u02C5\x03" +
		"\x02\x02\x02D\u02DF\x03\x02\x02\x02F\u030A\x03\x02\x02\x02H\u030D\x03" +
		"\x02\x02\x02J\u0338\x03\x02\x02\x02L\u0342\x03\x02\x02\x02N\u035E\x03" +
		"\x02\x02\x02P\u0365\x03\x02\x02\x02R\u0367\x03\x02\x02\x02T\u037A\x03" +
		"\x02\x02\x02V\u0381\x03\x02\x02\x02X\u038F\x03\x02\x02\x02Z\u03EB\x03" +
		"\x02\x02\x02\\\u0413\x03\x02\x02\x02^\u046B\x03\x02\x02\x02`\u0471\x03" +
		"\x02\x02\x02b\u047B\x03\x02\x02\x02d\u0484\x03\x02\x02\x02f\u04A9\x03" +
		"\x02\x02\x02hj\x05\x04\x03\x02ih\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x03" +
		"\x02\x02\x02kl\x07\x02\x02\x03l\x03\x03\x02\x02\x02mu\x05\x06\x04\x02" +
		"nu\x05\n\x06\x02oq\x07>\x02\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02rp" +
		"\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02tm\x03\x02\x02\x02" +
		"tn\x03\x02\x02\x02tp\x03\x02\x02\x02uv\x03\x02\x02\x02vt\x03\x02\x02\x02" +
		"vw\x03\x02\x02\x02w\x05\x03\x02\x02\x02x|\x05\b\x05\x02y|\x05.\x18\x02" +
		"z|\x05V,\x02{x\x03\x02\x02\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02|\x07" +
		"\x03\x02\x02\x02}\x81\x07\x16\x02\x02~\x80\x07>\x02\x02\x7F~\x03\x02\x02" +
		"\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02" +
		"\x02\x82\x84\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x88\x05:\x1E" +
		"\x02\x85\x87\x07>\x02\x02\x86\x85\x03\x02\x02\x02\x87\x8A\x03\x02\x02" +
		"\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8B\x03\x02\x02" +
		"\x02\x8A\x88\x03\x02\x02\x02\x8B\x8D\x07\x1B\x02\x02\x8C\x8E\x05@!\x02" +
		"\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02" +
		"\x8F\x93\x07\x1C\x02\x02\x90\x92\x07>\x02\x02\x91\x90\x03\x02\x02\x02" +
		"\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02" +
		"\x94\x96\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x9A\x07\x03\x02\x02" +
		"\x97\x99\x07>\x02\x02\x98\x97\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02" +
		"\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02" +
		"\x9C\x9A\x03\x02\x02\x02\x9D\xA1\x058\x1D\x02\x9E\xA0\x07>\x02\x02\x9F" +
		"\x9E\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1" +
		"\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4" +
		"\xA5\x05R*\x02\xA5\t\x03\x02\x02\x02\xA6\xA8\x07?\x02\x02\xA7\xA6\x03" +
		"\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03" +
		"\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xB0\x07" +
		"\x04\x02\x02\xAD\xAF\x07?\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB2\x03" +
		"\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\v\x03" +
		"\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xBF\x079\x02\x02\xB4\xBF\x07" +
		":\x02\x02\xB5\xB7\x07<\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02" +
		"\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBF\x03\x02" +
		"\x02\x02\xBA\xBB\x07\x1B\x02\x02\xBB\xBC\x05*\x16\x02\xBC\xBD\x07\x1C" +
		"\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xB3\x03\x02\x02\x02\xBE\xB4\x03\x02" +
		"\x02\x02\xBE\xB6\x03\x02\x02\x02\xBE\xBA\x03\x02\x02\x02\xBF\r\x03\x02" +
		"\x02\x02\xC0\xC4\x05\f\x07\x02\xC1\xC3\x07>\x02\x02\xC2\xC1\x03\x02\x02" +
		"\x02\xC3\xC6\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02" +
		"\x02\xC5\xDA\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCB\x07\x1D\x02" +
		"\x02\xC8\xCA\x07>\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA\xCD\x03\x02\x02" +
		"\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x03\x02\x02" +
		"\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD2\x05*\x16\x02\xCF\xD1\x07>\x02\x02" +
		"\xD0\xCF\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02" +
		"\xD2\xD3\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02" +
		"\xD5\xD6\x07\x1E\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD9\t\x02\x02\x02" +
		"\xD8\xC7\x03\x02\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02" +
		"\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xFE\x03\x02\x02\x02" +
		"\xDC\xDA\x03\x02\x02\x02\xDD\xE1\x07\x18\x02\x02\xDE\xE0\x07>\x02\x02" +
		"\xDF\xDE\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02" +
		"\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02" +
		"\xE4\xE8\x05\f\x07\x02\xE5\xE7\x07>\x02\x02\xE6\xE5\x03\x02\x02\x02\xE7" +
		"\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9" +
		"\xEB\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEF\x07\x1B\x02\x02\xEC" +
		"\xEE\x07>\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF" +
		"\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1" +
		"\xEF\x03\x02\x02\x02\xF2\xF4\x05\x10\t\x02\xF3\xF2\x03\x02\x02\x02\xF3" +
		"\xF4\x03\x02\x02\x02\xF4\xF8\x03\x02\x02\x02\xF5\xF7\x07>\x02\x02\xF6" +
		"\xF5\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8" +
		"\xF9\x03\x02\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB" +
		"\xFC\x07\x1C\x02\x02\xFC\xFE\x03\x02\x02\x02\xFD\xC0\x03\x02\x02\x02\xFD" +
		"\xDD\x03\x02\x02\x02\xFE\x0F\x03\x02\x02\x02\xFF\u0103\x05&\x14\x02\u0100" +
		"\u0102\x07>\x02\x02\u0101\u0100\x03\x02\x02\x02\u0102\u0105\x03\x02\x02" +
		"\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0116" +
		"\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u010A\x07+\x02\x02" +
		"\u0107\u0109\x07>\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03" +
		"\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B" +
		"\u010D\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u0111\x05&\x14" +
		"\x02\u010E\u0110\x07>\x02\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113" +
		"\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
		"\u0112\u0115\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0106\x03" +
		"\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116" +
		"\u0117\x03\x02\x02\x02\u0117\x11\x03\x02\x02\x02\u0118\u0116\x03\x02\x02" +
		"\x02\u0119\u011B\t\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B\u011E" +
		"\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02" +
		"\u011D\u0122\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0121\x07" +
		">\x02\x02\u0120\u011F\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122" +
		"\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u012F\x03\x02" +
		"\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0130\x05\x0E\b\x02\u0126\u012A" +
		"\x05\x14\v\x02\u0127\u0129\x07>\x02\x02\u0128\u0127\x03\x02\x02\x02\u0129" +
		"\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03\x02" +
		"\x02\x02\u012B\u012D\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
		"\u012E\x05\x16\f\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0125\x03\x02\x02" +
		"\x02\u012F\u0126\x03\x02\x02\x02\u0130\x13\x03\x02\x02\x02\u0131\u0132" +
		"\t\x03\x02\x02\u0132\x15\x03\x02\x02\x02\u0133\u0146\x05\x12\n\x02\u0134" +
		"\u0146\x07;\x02\x02\u0135\u0139\x05\x12\n\x02\u0136\u0138\x07>\x02\x02" +
		"\u0137\u0136\x03\x02\x02\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03" +
		"\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013C\x03\x02\x02\x02\u013B" +
		"\u0139\x03\x02\x02\x02\u013C\u0140\x07\n\x02\x02\u013D\u013F\x07>\x02" +
		"\x02\u013E\u013D\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E" +
		"\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02" +
		"\u0142\u0140\x03\x02\x02\x02\u0143\u0144\x058\x1D\x02\u0144\u0146\x03" +
		"\x02\x02\x02\u0145\u0133\x03\x02\x02\x02\u0145\u0134\x03\x02\x02\x02\u0145" +
		"\u0135\x03\x02\x02\x02\u0146\x17\x03\x02\x02\x02\u0147\u014B\x05\x16\f" +
		"\x02\u0148\u014A\x07>\x02\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D" +
		"\x03\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02" +
		"\u014C\u015E\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014E\u0152\t" +
		"\x04\x02\x02\u014F\u0151\x07>\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151" +
		"\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153\u0155\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155" +
		"\u0159\x05\x16\f\x02\u0156\u0158\x07>\x02\x02\u0157\u0156\x03\x02\x02" +
		"\x02\u0158\u015B\x03\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A" +
		"\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02" +
		"\u015C\u014E\x03\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03" +
		"\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\x19\x03\x02\x02\x02\u0160" +
		"\u015E\x03\x02\x02\x02\u0161\u0165\x05\x18\r\x02\u0162\u0164\x07>\x02" +
		"\x02\u0163\u0162\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163" +
		"\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0178\x03\x02\x02\x02" +
		"\u0167\u0165\x03\x02\x02\x02\u0168\u016C\t";
	private static readonly _serializedATNSegment1: string =
		"\x05\x02\x02\u0169\u016B\x07>\x02\x02\u016A\u0169\x03\x02\x02\x02\u016B" +
		"\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D\x03\x02" +
		"\x02\x02\u016D\u016F\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016F" +
		"\u0173\x05\x18\r\x02\u0170\u0172\x07>\x02\x02\u0171\u0170\x03\x02\x02" +
		"\x02\u0172\u0175\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0174" +
		"\x03\x02\x02\x02\u0174\u0177\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02" +
		"\u0176\u0168\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03" +
		"\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\x1B\x03\x02\x02\x02\u017A" +
		"\u0178\x03\x02\x02\x02\u017B\u017F\x05\x1A\x0E\x02\u017C\u017E\x07>\x02" +
		"\x02\u017D\u017C\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D" +
		"\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0192\x03\x02\x02\x02" +
		"\u0181\u017F\x03\x02\x02\x02\u0182\u0186\t\x06\x02\x02\u0183\u0185\x07" +
		">\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186" +
		"\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02" +
		"\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018D\x05\x1A\x0E\x02\u018A" +
		"\u018C\x07>\x02\x02\u018B\u018A\x03\x02\x02\x02\u018C\u018F\x03\x02\x02" +
		"\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0191" +
		"\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0182\x03\x02\x02\x02" +
		"\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03" +
		"\x02\x02\x02\u0193\x1D\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195" +
		"\u0199\x05\x1C\x0F\x02\u0196\u0198\x07>\x02\x02\u0197\u0196\x03\x02\x02" +
		"\x02\u0198\u019B\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u0199\u019A" +
		"\x03\x02\x02\x02\u019A\u01AC\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02" +
		"\u019C\u01A0\t\x07\x02\x02\u019D\u019F\x07>\x02\x02\u019E\u019D\x03\x02" +
		"\x02\x02\u019F\u01A2\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0" +
		"\u01A1\x03\x02\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u01A0\x03\x02" +
		"\x02\x02\u01A3\u01A7\x05\x1C\x0F\x02\u01A4\u01A6\x07>\x02\x02\u01A5\u01A4" +
		"\x03\x02\x02\x02\u01A6\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02" +
		"\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03" +
		"\x02\x02\x02\u01AA\u019C\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC" +
		"\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\x1F\x03\x02\x02" +
		"\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B3\x05\x1E\x10\x02\u01B0\u01B2" +
		"\x07>\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02" +
		"\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01C6\x03" +
		"\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01BA\x07(\x02\x02\u01B7" +
		"\u01B9\x07>\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02" +
		"\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD" +
		"\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01C1\x05\x1E\x10\x02" +
		"\u01BE\u01C0\x07>\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03" +
		"\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2" +
		"\u01C5\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C4\u01B6\x03\x02" +
		"\x02\x02\u01C5\u01C8\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6" +
		"\u01C7\x03\x02\x02\x02\u01C7!\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02" +
		"\x02\u01C9\u01CD\x05 \x11\x02\u01CA\u01CC\x07>\x02\x02\u01CB\u01CA\x03" +
		"\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD" +
		"\u01CE\x03\x02\x02\x02\u01CE\u01E0\x03\x02\x02\x02\u01CF\u01CD\x03\x02" +
		"\x02\x02\u01D0\u01D4\x07)\x02\x02\u01D1\u01D3\x07>\x02\x02\u01D2\u01D1" +
		"\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02" +
		"\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D7\x03\x02\x02\x02\u01D6\u01D4\x03" +
		"\x02\x02\x02\u01D7\u01DB\x05 \x11\x02\u01D8\u01DA\x07>\x02\x02\u01D9\u01D8" +
		"\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02" +
		"\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02\u01DD\u01DB\x03" +
		"\x02\x02\x02\u01DE\u01D0\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0" +
		"\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1#\x03\x02\x02" +
		"\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E7\x05\"\x12\x02\u01E4\u01E6" +
		"\x07>\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02" +
		"\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u0206\x03" +
		"\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01EE\x07\x05\x02\x02\u01EB" +
		"\u01ED\x07>\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01ED\u01F0\x03\x02\x02" +
		"\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F1" +
		"\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F5\x05*\x16\x02" +
		"\u01F2\u01F4\x07>\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F4\u01F7\x03" +
		"\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6" +
		"\u01F8\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8\u01FC\x07\x06" +
		"\x02\x02\u01F9\u01FB\x07>\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB\u01FE" +
		"\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
		"\u01FD\u01FF\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u0203\x05" +
		"$\x13\x02\u0200\u0202\x07>\x02\x02\u0201\u0200\x03\x02\x02\x02\u0202\u0205" +
		"\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02" +
		"\u0204\u0207\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206\u01EA\x03" +
		"\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207%\x03\x02\x02\x02\u0208" +
		"\u021A\x05$\x13\x02\u0209\u020D\x05\x12\n\x02\u020A\u020C\x07>\x02\x02" +
		"\u020B\u020A\x03\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03" +
		"\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0210\x03\x02\x02\x02\u020F" +
		"\u020D\x03\x02\x02\x02\u0210\u0214\x05(\x15\x02\u0211\u0213\x07>\x02\x02" +
		"\u0212\u0211\x03\x02\x02\x02\u0213\u0216\x03\x02\x02\x02\u0214\u0212\x03" +
		"\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216" +
		"\u0214\x03\x02\x02\x02\u0217\u0218\x05&\x14\x02\u0218\u021A\x03\x02\x02" +
		"\x02\u0219\u0208\x03\x02\x02\x02\u0219\u0209\x03\x02\x02\x02\u021A\'\x03" +
		"\x02\x02\x02\u021B\u021C\t\b\x02\x02\u021C)\x03\x02\x02\x02\u021D\u0221" +
		"\x05&\x14\x02\u021E\u0220\x07>\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220" +
		"\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02" +
		"\x02\x02\u0222\u0234\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224" +
		"\u0228\x07+\x02\x02\u0225\u0227\x07>\x02\x02\u0226\u0225\x03\x02\x02\x02" +
		"\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03" +
		"\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B" +
		"\u022F\x05&\x14\x02\u022C\u022E\x07>\x02\x02\u022D\u022C\x03\x02\x02\x02" +
		"\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03\x02\x02\x02\u022F\u0230\x03" +
		"\x02\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0232" +
		"\u0224\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02" +
		"\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235+\x03\x02\x02\x02\u0236\u0234" +
		"\x03\x02\x02\x02\u0237\u0238\x05$\x13\x02\u0238-\x03\x02\x02\x02\u0239" +
		"\u023D\x050\x19\x02\u023A\u023C\x07>\x02\x02\u023B\u023A\x03\x02\x02\x02" +
		"\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03" +
		"\x02\x02\x02\u023E\u0240\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240" +
		"\u0241\x056\x1C\x02\u0241\u0242\x05\n\x06\x02\u0242/\x03\x02\x02\x02\u0243" +
		"\u0244\t\t\x02\x02\u02441\x03\x02\x02\x02\u0245\u0249\x054\x1B\x02\u0246" +
		"\u0248\x07>\x02\x02\u0247\u0246\x03\x02\x02\x02\u0248\u024B\x03\x02\x02" +
		"\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024D" +
		"\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C\u0245\x03\x02\x02\x02" +
		"\u024D\u024E\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03" +
		"\x02\x02\x02\u024F3\x03\x02\x02\x02\u0250\u0251\x058\x1D\x02\u02515\x03" +
		"\x02\x02\x02\u0252\u0256\x05:\x1E\x02\u0253\u0255\x07>\x02\x02\u0254\u0253" +
		"\x03\x02\x02\x02\u0255\u0258\x03\x02\x02\x02\u0256\u0254\x03\x02\x02\x02" +
		"\u0256\u0257\x03\x02\x02\x02\u0257\u0259\x03\x02\x02\x02\u0258\u0256\x03" +
		"\x02\x02\x02\u0259\u025D\x07\x06\x02\x02\u025A\u025C\x07>\x02\x02\u025B" +
		"\u025A\x03\x02\x02\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025B\x03\x02" +
		"\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F" +
		"\u025D\x03\x02\x02\x02\u0260\u0264\x058\x1D\x02\u0261\u0263\x07>\x02\x02" +
		"\u0262\u0261\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03" +
		"\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0275\x03\x02\x02\x02\u0266" +
		"\u0264\x03\x02\x02\x02\u0267\u026B\x07,\x02\x02\u0268\u026A\x07>\x02\x02" +
		"\u0269\u0268\x03\x02\x02\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03" +
		"\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D" +
		"\u026B\x03\x02\x02\x02\u026E\u0272\x05F$\x02\u026F\u0271\x07>\x02\x02" +
		"\u0270\u026F\x03\x02\x02\x02\u0271\u0274\x03\x02\x02\x02\u0272\u0270\x03" +
		"\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274" +
		"\u0272\x03\x02\x02\x02\u0275\u0267\x03\x02\x02\x02\u0275\u0276\x03\x02" +
		"\x02\x02\u02767\x03\x02\x02\x02\u0277\u0293\x079\x02\x02\u0278\u0279\x07" +
		"9\x02\x02\u0279\u027D\x074\x02\x02\u027A\u027C\x07>\x02\x02\u027B\u027A" +
		"\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02" +
		"\u027D\u027E\x03\x02\x02\x02\u027E\u0280\x03\x02\x02\x02\u027F\u027D\x03" +
		"\x02\x02\x02\u0280\u0284\x079\x02\x02\u0281\u0283\x07>\x02\x02\u0282\u0281" +
		"\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02" +
		"\u0284\u0285\x03\x02\x02\x02\u0285\u0287\x03\x02\x02\x02\u0286\u0284\x03" +
		"\x02\x02\x02\u0287\u0293\x076\x02\x02\u0288\u028C\x07\x1A\x02\x02\u0289" +
		"\u028B\x07>\x02\x02\u028A\u0289\x03\x02\x02\x02\u028B\u028E\x03\x02\x02" +
		"\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D\u028F" +
		"\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0290\x07\x1B\x02\x02" +
		"\u0290\u0291\x079\x02\x02\u0291\u0293\x07\x1C\x02\x02\u0292\u0277\x03" +
		"\x02\x02\x02\u0292\u0278\x03\x02\x02\x02\u0292\u0288\x03\x02\x02\x02\u0293" +
		"9\x03\x02\x02\x02\u0294\u0295\x05<\x1F\x02\u0295;\x03\x02\x02\x02\u0296" +
		"\u0297\x079\x02\x02\u0297=\x03\x02\x02\x02\u0298\u02AA\n\n\x02\x02\u0299" +
		"\u029D\x07\x1B\x02\x02\u029A\u029C\x07>\x02\x02\u029B\u029A\x03\x02\x02" +
		"\x02\u029C\u029F\x03\x02\x02\x02\u029D\u029B\x03\x02\x02\x02\u029D\u029E" +
		"\x03\x02\x02\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02" +
		"\u02A0\u02A4\x05> \x02\u02A1\u02A3\x07>\x02\x02\u02A2\u02A1\x03\x02\x02" +
		"\x02\u02A3\u02A6\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5" +
		"\x03\x02\x02\x02\u02A5\u02A7\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02" +
		"\u02A7\u02A8\x07\x1C\x02\x02\u02A8\u02AA\x03\x02\x02\x02\u02A9\u0298\x03" +
		"\x02\x02\x02\u02A9\u0299\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB" +
		"\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC?\x03\x02\x02" +
		"\x02\u02AD\u02AB\x03\x02\x02\x02\u02AE\u02B2\x05B\"\x02\u02AF\u02B1\x07" +
		">\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B1\u02B4\x03\x02\x02\x02\u02B2" +
		"\u02B0\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02C3\x03\x02" +
		"\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B5\u02B9\x07+\x02\x02\u02B6\u02B8" +
		"\x07>\x02\x02\u02B7\u02B6\x03\x02\x02\x02\u02B8\u02BB\x03\x02\x02\x02" +
		"\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02BA\x03\x02\x02\x02\u02BA\u02BC\x03" +
		"\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BC\u02C0\x07\x07\x02\x02\u02BD" +
		"\u02BF\x07>\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BF\u02C2\x03\x02\x02" +
		"\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C4" +
		"\x03\x02\x02\x02\u02C2\u02C0\x03\x02\x02\x02\u02C3\u02B5\x03\x02\x02\x02" +
		"\u02C3\u02C4\x03\x02\x02\x02\u02C4A\x03\x02\x02\x02\u02C5\u02C9\x05D#" +
		"\x02\u02C6\u02C8\x07>\x02\x02\u02C7\u02C6\x03\x02\x02\x02\u02C8\u02CB" +
		"\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02" +
		"\u02CA\u02DC\x03\x02\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02D0\x07" +
		"+\x02\x02\u02CD\u02CF\x07>\x02\x02\u02CE\u02CD\x03\x02\x02\x02\u02CF\u02D2" +
		"\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02" +
		"\u02D1\u02D3\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D7\x05" +
		"D#\x02\u02D4\u02D6\x07>\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D6\u02D9" +
		"\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02" +
		"\u02D8\u02DB\x03\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02CC\x03" +
		"\x02\x02\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DC" +
		"\u02DD\x03\x02\x02\x02\u02DDC\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02" +
		"\x02\u02DF\u02E3\x05:\x1E\x02\u02E0\u02E2\x07>\x02\x02\u02E1\u02E0\x03" +
		"\x02\x02\x02\u02E2\u02E5\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E3" +
		"\u02E4\x03\x02\x02\x02\u02E4\u02E6\x03\x02\x02\x02\u02E5\u02E3\x03\x02" +
		"\x02\x02\u02E6\u02EA\x07\x06\x02\x02\u02E7\u02E9\x07>\x02\x02\u02E8\u02E7" +
		"\x03\x02\x02\x02\u02E9\u02EC\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02" +
		"\u02EA\u02EB\x03\x02\x02\x02\u02EB\u02ED\x03\x02\x02\x02\u02EC\u02EA\x03" +
		"\x02\x02\x02\u02ED\u02EE\x052\x1A\x02\u02EEE\x03\x02\x02\x02\u02EF\u030B" +
		"\x05&\x14\x02\u02F0\u02F4\x07\x1D\x02\x02\u02F1\u02F3\x07>\x02\x02\u02F2" +
		"\u02F1\x03\x02\x02\x02\u02F3\u02F6\x03\x02\x02\x02\u02F4\u02F2\x03\x02" +
		"\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6" +
		"\u02F4\x03\x02\x02\x02\u02F7\u02F9\x05H%\x02\u02F8\u02F7\x03\x02\x02\x02" +
		"\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FD\x03\x02\x02\x02\u02FA\u02FC\x07" +
		">\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FC\u02FF\x03\x02\x02\x02\u02FD" +
		"\u02FB\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u0301\x03\x02" +
		"\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u0300\u0302\x07+\x02\x02\u0301\u0300" +
		"\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0306\x03\x02\x02\x02" +
		"\u0303\u0305\x07>\x02\x02\u0304\u0303\x03\x02\x02\x02\u0305\u0308\x03" +
		"\x02\x02\x02\u0306\u0304\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307" +
		"\u0309\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0309\u030B\x07\x1E" +
		"\x02\x02\u030A\u02EF\x03\x02\x02\x02\u030A\u02F0\x03\x02\x02\x02\u030B" +
		"G\x03\x02\x02\x02\u030C\u030E\x05J&\x02\u030D\u030C\x03\x02\x02\x02\u030D" +
		"\u030E\x03\x02\x02\x02\u030E\u0312\x03\x02\x02\x02\u030F\u0311\x07>\x02" +
		"\x02\u0310\u030F\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310" +
		"\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0315\x03\x02\x02\x02" +
		"\u0314\u0312\x03\x02\x02\x02\u0315\u0319\x05F$\x02\u0316\u0318\x07>\x02" +
		"\x02\u0317\u0316\x03\x02\x02\x02\u0318\u031B\x03\x02\x02\x02\u0319\u0317" +
		"\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u0335\x03\x02\x02\x02" +
		"\u031B\u0319\x03\x02\x02\x02\u031C\u0320\x07+\x02\x02\u031D\u031F\x07" +
		">\x02\x02\u031E\u031D\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320" +
		"\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0324\x03\x02" +
		"\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323\u0325\x05J&\x02\u0324\u0323" +
		"\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0329\x03\x02\x02\x02" +
		"\u0326\u0328\x07>\x02\x02\u0327\u0326\x03\x02\x02\x02\u0328\u032B\x03" +
		"\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02\u032A" +
		"\u032C\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032C\u0330\x05F$\x02" +
		"\u032D\u032F\x07>\x02\x02\u032E\u032D\x03\x02\x02\x02\u032F\u0332\x03" +
		"\x02\x02\x02\u0330\u032E\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331" +
		"\u0334\x03\x02\x02\x02\u0332\u0330\x03\x02\x02\x02\u0333\u031C\x03\x02" +
		"\x02\x02\u0334\u0337\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0335" +
		"\u0336\x03\x02\x02\x02\u0336I\x03\x02\x02\x02\u0337\u0335\x03\x02\x02" +
		"\x02\u0338\u033C\x05L\'\x02\u0339\u033B\x07>\x02\x02\u033A\u0339\x03\x02" +
		"\x02\x02\u033B\u033E\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C" +
		"\u033D\x03\x02\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E\u033C\x03\x02" +
		"\x02\x02\u033F\u0340\x07,\x02\x02\u0340K\x03\x02\x02\x02\u0341\u0343\x05" +
		"N(\x02\u0342\u0341\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0342" +
		"\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345M\x03\x02\x02\x02\u0346" +
		"\u034A\x07\x1D\x02\x02\u0347\u0349\x07>\x02\x02\u0348\u0347\x03\x02\x02" +
		"\x02\u0349\u034C\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034A\u034B" +
		"\x03\x02\x02\x02\u034B\u034D\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02" +
		"\u034D\u0351\x05,\x17\x02\u034E\u0350\x07>\x02\x02\u034F\u034E\x03\x02" +
		"\x02\x02\u0350\u0353\x03\x02\x02\x02\u0351\u034F\x03\x02\x02\x02\u0351" +
		"\u0352\x03\x02\x02\x02\u0352\u0354\x03\x02\x02\x02\u0353\u0351\x03\x02" +
		"\x02\x02\u0354\u0355\x07\x1E\x02\x02\u0355\u035F\x03\x02\x02\x02\u0356" +
		"\u035A\x078\x02\x02\u0357\u0359\x07>\x02\x02\u0358\u0357\x03\x02\x02\x02" +
		"\u0359\u035C\x03\x02\x02\x02\u035A\u0358\x03\x02\x02\x02\u035A\u035B\x03" +
		"\x02\x02\x02\u035B\u035D\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035D" +
		"\u035F\x079\x02\x02\u035E\u0346\x03\x02\x02\x02\u035E\u0356\x03\x02\x02" +
		"\x02\u035FO\x03\x02\x02\x02\u0360\u0366\x05R*\x02\u0361\u0366\x05X-\x02" +
		"\u0362\u0366\x05Z.\x02\u0363\u0366\x05^0\x02\u0364\u0366\x05f4\x02\u0365" +
		"\u0360\x03\x02\x02\x02\u0365\u0361\x03\x02\x02\x02\u0365\u0362\x03\x02" +
		"\x02\x02\u0365\u0363\x03\x02\x02\x02\u0365\u0364\x03\x02\x02\x02\u0366" +
		"Q\x03\x02\x02\x02\u0367\u036B\x07\x1F\x02\x02\u0368\u036A\x07>\x02\x02" +
		"\u0369\u0368\x03\x02\x02\x02\u036A\u036D\x03\x02\x02\x02\u036B\u0369\x03" +
		"\x02\x02\x02\u036B\u036C\x03\x02\x02\x02\u036C\u036F\x03\x02\x02\x02\u036D" +
		"\u036B\x03\x02\x02\x02\u036E\u0370\x05T+\x02\u036F\u036E\x03\x02\x02\x02" +
		"\u036F\u0370\x03\x02\x02\x02\u0370\u0374\x03\x02\x02\x02\u0371\u0373\x07" +
		">\x02\x02\u0372\u0371\x03\x02\x02\x02\u0373\u0376\x03\x02\x02\x02\u0374" +
		"\u0372\x03\x02\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0377\x03\x02" +
		"\x02\x02\u0376\u0374\x03\x02\x02\x02\u0377\u0378\x07 \x02\x02\u0378S\x03" +
		"\x02\x02\x02\u0379\u037B\x05V,\x02\u037A\u0379\x03\x02\x02\x02\u037B\u037C" +
		"\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02" +
		"\u037DU\x03\x02\x02\x02\u037E\u0380\x07>\x02\x02\u037F\u037E\x03\x02\x02" +
		"\x02\u0380\u0383\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0382" +
		"\x03\x02\x02\x02\u0382\u0386\x03\x02\x02\x02\u0383\u0381\x03\x02\x02\x02" +
		"\u0384\u0387\x05P)\x02\u0385\u0387\x05.\x18\x02\u0386\u0384\x03\x02\x02" +
		"\x02\u0386\u0385\x03\x02\x02\x02\u0387\u038B\x03\x02\x02\x02\u0388\u038A" +
		"\x07>\x02\x02\u0389\u0388\x03\x02\x02\x02\u038A\u038D\x03\x02\x02\x02" +
		"\u038B\u0389\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038CW\x03\x02" +
		"\x02\x02\u038D\u038B\x03\x02\x02\x02\u038E\u0390\x05*\x16\x02\u038F\u038E" +
		"\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0391\x03\x02\x02\x02" +
		"\u0391\u0392\x05\n\x06\x02\u0392Y\x03\x02\x02\x02\u0393\u0397\x07\x12" +
		"\x02\x02\u0394\u0396\x07>\x02\x02\u0395\u0394\x03\x02\x02\x02\u0396\u0399" +
		"\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02" +
		"\u0398\u039A\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02\u039A\u039E\x07" +
		"\x1B\x02\x02\u039B\u039D\x07>\x02\x02\u039C\u039B\x03\x02\x02\x02\u039D" +
		"\u03A0\x03\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02" +
		"\x02\x02\u039F\u03A1\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A1" +
		"\u03A5\x05*\x16\x02\u03A2\u03A4\x07>\x02\x02\u03A3\u03A2\x03\x02\x02\x02" +
		"\u03A4\u03A7\x03\x02\x02\x02\u03A5\u03A3\x03\x02\x02\x02\u03A5\u03A6\x03" +
		"\x02\x02\x02\u03A6\u03A8\x03\x02\x02\x02\u03A7\u03A5\x03\x02\x02\x02\u03A8" +
		"\u03AC\x07\x1C\x02\x02\u03A9\u03AB\x07>\x02\x02\u03AA\u03A9\x03\x02\x02" +
		"\x02\u03AB\u03AE\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC\u03AD" +
		"\x03\x02\x02\x02\u03AD\u03AF\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02" +
		"\u03AF\u03B3\x05P)\x02\u03B0\u03B2\x07>\x02\x02\u03B1\u03B0\x03\x02\x02" +
		"\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03\x02\x02\x02\u03B3\u03B4" +
		"\x03\x02\x02\x02\u03B4\u03BE\x03\x02\x02\x02\u03B5\u03B3\x03\x02\x02\x02" +
		"\u03B6\u03BA\x07\x13\x02\x02\u03B7\u03B9\x07>\x02\x02\u03B8\u03B7\x03" +
		"\x02\x02\x02\u03B9\u03BC\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BA" +
		"\u03BB\x03\x02\x02\x02\u03BB\u03BD\x03\x02\x02\x02\u03BC\u03BA\x03\x02" +
		"\x02\x02\u03BD\u03BF\x05P)\x02\u03BE\u03B6\x03\x02\x02\x02\u03BE\u03BF" +
		"\x03\x02\x02\x02\u03BF\u03EC\x03\x02\x02\x02\u03C0\u03C4\x07\v\x02\x02" +
		"\u03C1\u03C3\x07>\x02\x02\u03C2\u03C1\x03\x02\x02\x02\u03C3\u03C6\x03" +
		"\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5" +
		"\u03C7\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C7\u03CB\x07\x1B" +
		"\x02\x02\u03C8\u03CA\x07>\x02\x02\u03C9\u03C8\x03\x02\x02\x02\u03CA\u03CD" +
		"\x03\x02\x02\x02\u03CB\u03C9\x03\x02\x02\x02\u03CB\u03CC\x03\x02\x02\x02" +
		"\u03CC\u03CE\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CE\u03D2\x05" +
		"*\x16\x02\u03CF\u03D1\x07>\x02\x02\u03D0\u03CF\x03\x02\x02\x02\u03D1\u03D4" +
		"\x03\x02\x02\x02\u03D2\u03D0\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02" +
		"\u03D3\u03D5\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D5\u03D9\x07" +
		"\x1C\x02\x02\u03D6\u03D8\x07>\x02\x02\u03D7\u03D6\x03\x02\x02\x02\u03D8" +
		"\u03DB\x03\x02\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03D9\u03DA\x03\x02" +
		"\x02\x02\u03DA\u03DC\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DC" +
		"\u03E6\x07\x1F\x02\x02\u03DD\u03DF\x07>\x02\x02\u03DE\u03DD\x03\x02\x02" +
		"\x02\u03DF\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03\x02\x02\x02\u03E0\u03E1" +
		"\x03\x02\x02\x02\u03E1\u03E3\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02" +
		"\u03E3\u03E5\x05\\/\x02\u03E4\u03E0\x03\x02\x02\x02\u03E5\u03E8\x03\x02" +
		"\x02\x02\u03E6\u03E4\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7" +
		"\u03E9\x03\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E9\u03EA\x07 \x02" +
		"\x02\u03EA\u03EC\x03\x02\x02\x02\u03EB\u0393\x03\x02\x02\x02\u03EB\u03C0" +
		"\x03\x02\x02\x02\u03EC[\x03\x02\x02\x02\u03ED\u03F1\x07\f\x02\x02\u03EE" +
		"\u03F0\x07>\x02\x02\u03EF\u03EE\x03\x02\x02\x02\u03F0\u03F3\x03\x02\x02" +
		"\x02\u03F1\u03EF\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F4" +
		"\x03\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F4\u03F8\x05,\x17\x02" +
		"\u03F5\u03F7\x07>\x02\x02\u03F6\u03F5\x03\x02\x02\x02\u03F7\u03FA\x03" +
		"\x02\x02\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9" +
		"\u03FB\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FB\u03FF\x07\x06" +
		"\x02\x02\u03FC\u03FE\x07>\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401" +
		"\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02" +
		"\u0400\u0402\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0403\x05" +
		"P)\x02\u0403\u0414\x03\x02\x02\x02\u0404\u0408\x07\r\x02\x02\u0405\u0407" +
		"\x07>\x02\x02\u0406\u0405\x03\x02\x02\x02\u0407\u040A\x03\x02\x02\x02" +
		"\u0408\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02\x02\x02\u0409\u040B\x03" +
		"\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040B\u040F\x07\x06\x02\x02\u040C" +
		"\u040E\x07>\x02\x02\u040D\u040C\x03\x02\x02\x02\u040E\u0411\x03\x02\x02" +
		"\x02\u040F\u040D\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0412" +
		"\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0412\u0414\x05P)\x02\u0413" +
		"\u03ED\x03\x02\x02\x02\u0413\u0404\x03\x02\x02\x02\u0414]\x03\x02\x02" +
		"\x02\u0415\u0419\x07\x14\x02\x02\u0416\u0418\x07>\x02\x02\u0417\u0416" +
		"\x03\x02\x02\x02\u0418\u041B\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02" +
		"\u0419\u041A\x03\x02\x02\x02\u041A\u041C\x03\x02\x02\x02\u041B\u0419\x03" +
		"\x02\x02\x02\u041C\u041D\x07\x1B\x02\x02\u041D\u041E\x05`1\x02\u041E\u0422" +
		"\x07\x1C\x02\x02\u041F\u0421\x07>\x02\x02\u0420\u041F\x03\x02\x02\x02" +
		"\u0421\u0424\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03" +
		"\x02\x02\x02\u0423\u0425\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425" +
		"\u0426\x05P)\x02\u0426\u046C\x03\x02\x02\x02\u0427\u042B\x07\x11\x02\x02" +
		"\u0428\u042A\x07>\x02\x02\u0429\u0428\x03\x02\x02\x02\u042A\u042D\x03" +
		"\x02\x02\x02\u042B\u0429\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C" +
		"\u042E\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02\u042E\u0432\x07\x1B" +
		"\x02\x02\u042F\u0431\x07>\x02\x02\u0430\u042F\x03\x02\x02\x02\u0431\u0434" +
		"\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02" +
		"\u0433\u0435\x03\x02\x02\x02\u0434\u0432\x03\x02\x02\x02\u0435\u0439\x05" +
		"*\x16";
	private static readonly _serializedATNSegment2: string =
		"\x02\u0436\u0438\x07>\x02\x02\u0437\u0436\x03\x02\x02\x02\u0438\u043B" +
		"\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02" +
		"\u043A\u043C\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C\u0440\x07" +
		"\x1C\x02\x02\u043D\u043F\x07>\x02\x02\u043E\u043D\x03\x02\x02\x02\u043F" +
		"\u0442\x03\x02\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440\u0441\x03\x02" +
		"\x02\x02\u0441\u0443\x03\x02\x02\x02\u0442\u0440\x03\x02\x02\x02\u0443" +
		"\u0444\x05P)\x02\u0444\u046C\x03\x02\x02\x02\u0445\u0449\x07\x10\x02\x02" +
		"\u0446\u0448\x07>\x02\x02\u0447\u0446\x03\x02\x02\x02\u0448\u044B\x03" +
		"\x02\x02\x02\u0449\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A" +
		"\u044C\x03\x02\x02\x02\u044B\u0449\x03\x02\x02\x02\u044C\u0450\x05P)\x02" +
		"\u044D\u044F\x07>\x02\x02\u044E\u044D\x03\x02\x02\x02\u044F\u0452\x03" +
		"\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451" +
		"\u0453\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0453\u0457\x07\x11" +
		"\x02\x02\u0454\u0456\x07>\x02\x02\u0455\u0454\x03\x02\x02\x02\u0456\u0459" +
		"\x03\x02\x02\x02\u0457\u0455\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02" +
		"\u0458\u045A\x03\x02\x02\x02\u0459\u0457\x03\x02\x02\x02\u045A\u045E\x07" +
		"\x1B\x02\x02\u045B\u045D\x07>\x02\x02\u045C\u045B\x03\x02\x02\x02\u045D" +
		"\u0460\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02\u045E\u045F\x03\x02" +
		"\x02\x02\u045F\u0461\x03\x02\x02\x02\u0460\u045E\x03\x02\x02\x02\u0461" +
		"\u0465\x05*\x16\x02\u0462\u0464\x07>\x02\x02\u0463\u0462\x03\x02\x02\x02" +
		"\u0464\u0467\x03\x02\x02\x02\u0465\u0463\x03\x02\x02\x02\u0465\u0466\x03" +
		"\x02\x02\x02\u0466\u0468\x03\x02\x02\x02\u0467\u0465\x03\x02\x02\x02\u0468" +
		"\u0469\x07\x1C\x02\x02\u0469\u046A\x05\n\x06\x02\u046A\u046C\x03\x02\x02" +
		"\x02\u046B\u0415\x03\x02\x02\x02\u046B\u0427\x03\x02\x02\x02\u046B\u0445" +
		"\x03\x02\x02\x02\u046C_\x03\x02\x02\x02\u046D\u0472\x05b2\x02\u046E\u0470" +
		"\x05*\x16\x02\u046F\u046E\x03\x02\x02\x02\u046F\u0470\x03\x02\x02\x02" +
		"\u0470\u0472\x03\x02\x02\x02\u0471\u046D\x03\x02\x02\x02\u0471\u046F\x03" +
		"\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0475\x05\n\x06\x02\u0474" +
		"\u0476\x05d3\x02\u0475\u0474\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02" +
		"\u0476\u0477\x03\x02\x02\x02\u0477\u0479\x05\n\x06\x02\u0478\u047A\x05" +
		"d3\x02\u0479\u0478\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047Aa" +
		"\x03\x02\x02\x02\u047B\u047F\x050\x19\x02\u047C\u047E\x07>\x02\x02\u047D" +
		"\u047C\x03\x02\x02\x02\u047E\u0481\x03\x02\x02\x02\u047F\u047D\x03\x02" +
		"\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480\u0482\x03\x02\x02\x02\u0481" +
		"\u047F\x03\x02\x02\x02\u0482\u0483\x056\x1C\x02\u0483c\x03\x02\x02\x02" +
		"\u0484\u0488\x05&\x14\x02\u0485\u0487\x07>\x02\x02\u0486\u0485\x03\x02" +
		"\x02\x02\u0487\u048A\x03\x02\x02\x02\u0488\u0486\x03\x02\x02\x02\u0488" +
		"\u0489\x03\x02\x02\x02\u0489\u049B\x03\x02\x02\x02\u048A\u0488\x03\x02" +
		"\x02\x02\u048B\u048F\x07+\x02\x02\u048C\u048E\x07>\x02\x02\u048D\u048C" +
		"\x03\x02\x02\x02\u048E\u0491\x03\x02\x02\x02\u048F\u048D\x03\x02\x02\x02" +
		"\u048F\u0490\x03\x02\x02\x02\u0490\u0492\x03\x02\x02\x02\u0491\u048F\x03" +
		"\x02\x02\x02\u0492\u0496\x05&\x14\x02\u0493\u0495\x07>\x02\x02\u0494\u0493" +
		"\x03\x02\x02\x02\u0495\u0498\x03\x02\x02\x02\u0496\u0494\x03\x02\x02\x02" +
		"\u0496\u0497\x03\x02\x02\x02\u0497\u049A\x03\x02\x02\x02\u0498\u0496\x03" +
		"\x02\x02\x02\u0499\u048B\x03\x02\x02\x02\u049A\u049D\x03\x02\x02\x02\u049B" +
		"\u0499\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049Ce\x03\x02\x02" +
		"\x02\u049D\u049B\x03\x02\x02\x02\u049E\u04AA\t\v\x02\x02\u049F\u04A3\x07" +
		"\x17\x02\x02\u04A0\u04A2\x07>\x02\x02\u04A1\u04A0\x03\x02\x02\x02\u04A2" +
		"\u04A5\x03\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A3\u04A4\x03\x02" +
		"\x02\x02\u04A4\u04A7\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A6" +
		"\u04A8\x05*\x16\x02\u04A7\u04A6\x03\x02\x02\x02\u04A7\u04A8\x03\x02\x02" +
		"\x02\u04A8\u04AA\x03\x02\x02\x02\u04A9\u049E\x03\x02\x02\x02\u04A9\u049F" +
		"\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02\u04AB\u04AC\x05\n\x06\x02" +
		"\u04ACg\x03\x02\x02\x02\xB0irtv{\x81\x88\x8D\x93\x9A\xA1\xA9\xB0\xB8\xBE" +
		"\xC4\xCB\xD2\xD8\xDA\xE1\xE8\xEF\xF3\xF8\xFD\u0103\u010A\u0111\u0116\u011C" +
		"\u0122\u012A\u012F\u0139\u0140\u0145\u014B\u0152\u0159\u015E\u0165\u016C" +
		"\u0173\u0178\u017F\u0186\u018D\u0192\u0199\u01A0\u01A7\u01AC\u01B3\u01BA" +
		"\u01C1\u01C6\u01CD\u01D4\u01DB\u01E0\u01E7\u01EE\u01F5\u01FC\u0203\u0206" +
		"\u020D\u0214\u0219\u0221\u0228\u022F\u0234\u023D\u0249\u024E\u0256\u025D" +
		"\u0264\u026B\u0272\u0275\u027D\u0284\u028C\u0292\u029D\u02A4\u02A9\u02AB" +
		"\u02B2\u02B9\u02C0\u02C3\u02C9\u02D0\u02D7\u02DC\u02E3\u02EA\u02F4\u02F8" +
		"\u02FD\u0301\u0306\u030A\u030D\u0312\u0319\u0320\u0324\u0329\u0330\u0335" +
		"\u033C\u0344\u034A\u0351\u035A\u035E\u0365\u036B\u036F\u0374\u037C\u0381" +
		"\u0386\u038B\u038F\u0397\u039E\u03A5\u03AC\u03B3\u03BA\u03BE\u03C4\u03CB" +
		"\u03D2\u03D9\u03E0\u03E6\u03EB\u03F1\u03F8\u03FF\u0408\u040F\u0413\u0419" +
		"\u0422\u042B\u0432\u0439\u0440\u0449\u0450\u0457\u045E\u0465\u046B\u046F" +
		"\u0471\u0475\u0479\u047F\u0488\u048F\u0496\u049B\u04A3\u04A7\u04A9";
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


