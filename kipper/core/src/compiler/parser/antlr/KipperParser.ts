// Generated from ./KipperParser.g4 by ANTLR 4.9.0-SNAPSHOT

// Import the required class for the ctx super class, as well as the 'ParserASTMapSyntaxKind' type defining all
// possible syntax kind values.
import { KipperParserRuleContext, ParserASTMapSyntaxKind } from "..";

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

import { KipperParserListener } from "./KipperParserListener";
import { KipperParserVisitor } from "./KipperParserVisitor";

export class KipperParser extends Parser {
	public static readonly Const = 1;
	public static readonly Var = 2;
	public static readonly As = 3;
	public static readonly Spread = 4;
	public static readonly Switch = 5;
	public static readonly Case = 6;
	public static readonly Default = 7;
	public static readonly Break = 8;
	public static readonly Continue = 9;
	public static readonly Do = 10;
	public static readonly While = 11;
	public static readonly If = 12;
	public static readonly Else = 13;
	public static readonly For = 14;
	public static readonly Enum = 15;
	public static readonly DefFunc = 16;
	public static readonly Return = 17;
	public static readonly CallFunc = 18;
	public static readonly RetIndicator = 19;
	public static readonly True = 20;
	public static readonly False = 21;
	public static readonly Typeof = 22;
	public static readonly Void = 23;
	public static readonly Null = 24;
	public static readonly Undefined = 25;
	public static readonly Comma = 26;
	public static readonly SemiColon = 27;
	public static readonly QuestionMark = 28;
	public static readonly Colon = 29;
	public static readonly LeftParen = 30;
	public static readonly RightParen = 31;
	public static readonly LeftBracket = 32;
	public static readonly RightBracket = 33;
	public static readonly LeftBrace = 34;
	public static readonly RightBrace = 35;
	public static readonly Plus = 36;
	public static readonly PlusPlus = 37;
	public static readonly Minus = 38;
	public static readonly MinusMinus = 39;
	public static readonly Star = 40;
	public static readonly Div = 41;
	public static readonly Mod = 42;
	public static readonly PowerTo = 43;
	public static readonly AndAnd = 44;
	public static readonly OrOr = 45;
	public static readonly Not = 46;
	public static readonly Assign = 47;
	public static readonly PlusAssign = 48;
	public static readonly MinusAssign = 49;
	public static readonly StarAssign = 50;
	public static readonly DivAssign = 51;
	public static readonly ModAssign = 52;
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
	public static readonly RULE_declaration = 3;
	public static readonly RULE_variableDeclaration = 4;
	public static readonly RULE_functionDeclaration = 5;
	public static readonly RULE_declarator = 6;
	public static readonly RULE_directDeclarator = 7;
	public static readonly RULE_storageTypeSpecifier = 8;
	public static readonly RULE_initDeclarator = 9;
	public static readonly RULE_parameterList = 10;
	public static readonly RULE_parameterDeclaration = 11;
	public static readonly RULE_initializer = 12;
	public static readonly RULE_statement = 13;
	public static readonly RULE_compoundStatement = 14;
	public static readonly RULE_blockItemList = 15;
	public static readonly RULE_blockItem = 16;
	public static readonly RULE_expressionStatement = 17;
	public static readonly RULE_selectionStatement = 18;
	public static readonly RULE_ifStatement = 19;
	public static readonly RULE_switchStatement = 20;
	public static readonly RULE_switchLabeledStatement = 21;
	public static readonly RULE_iterationStatement = 22;
	public static readonly RULE_forLoopIterationStatement = 23;
	public static readonly RULE_whileLoopIterationStatement = 24;
	public static readonly RULE_doWhileLoopIterationStatement = 25;
	public static readonly RULE_forCondition = 26;
	public static readonly RULE_forDeclaration = 27;
	public static readonly RULE_forExpression = 28;
	public static readonly RULE_jumpStatement = 29;
	public static readonly RULE_returnStatement = 30;
	public static readonly RULE_primaryExpression = 31;
	public static readonly RULE_tangledPrimaryExpression = 32;
	public static readonly RULE_boolPrimaryExpression = 33;
	public static readonly RULE_identifierPrimaryExpression = 34;
	public static readonly RULE_identifier = 35;
	public static readonly RULE_stringPrimaryExpression = 36;
	public static readonly RULE_fStringPrimaryExpression = 37;
	public static readonly RULE_numberPrimaryExpression = 38;
	public static readonly RULE_arrayLiteralPrimaryExpression = 39;
	public static readonly RULE_voidOrNullOrUndefinedPrimaryExpression = 40;
	public static readonly RULE_computedPrimaryExpression = 41;
	public static readonly RULE_argumentExpressionList = 42;
	public static readonly RULE_dotNotation = 43;
	public static readonly RULE_bracketNotation = 44;
	public static readonly RULE_sliceNotation = 45;
	public static readonly RULE_postfixExpression = 46;
	public static readonly RULE_incrementOrDecrementPostfixExpression = 47;
	public static readonly RULE_unaryExpression = 48;
	public static readonly RULE_incrementOrDecrementUnaryExpression = 49;
	public static readonly RULE_operatorModifiedUnaryExpression = 50;
	public static readonly RULE_incrementOrDecrementOperator = 51;
	public static readonly RULE_unaryOperator = 52;
	public static readonly RULE_castOrConvertExpression = 53;
	public static readonly RULE_multiplicativeExpression = 54;
	public static readonly RULE_additiveExpression = 55;
	public static readonly RULE_relationalExpression = 56;
	public static readonly RULE_equalityExpression = 57;
	public static readonly RULE_logicalAndExpression = 58;
	public static readonly RULE_logicalOrExpression = 59;
	public static readonly RULE_conditionalExpression = 60;
	public static readonly RULE_assignmentExpression = 61;
	public static readonly RULE_assignmentOperator = 62;
	public static readonly RULE_expression = 63;
	public static readonly RULE_typeSpecifier = 64;
	public static readonly RULE_identifierTypeSpecifier = 65;
	public static readonly RULE_genericTypeSpecifier = 66;
	public static readonly RULE_typeofTypeSpecifier = 67;
	public static readonly RULE_typeSpecifierIdentifier = 68;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit",
		"translationUnit",
		"externalItem",
		"declaration",
		"variableDeclaration",
		"functionDeclaration",
		"declarator",
		"directDeclarator",
		"storageTypeSpecifier",
		"initDeclarator",
		"parameterList",
		"parameterDeclaration",
		"initializer",
		"statement",
		"compoundStatement",
		"blockItemList",
		"blockItem",
		"expressionStatement",
		"selectionStatement",
		"ifStatement",
		"switchStatement",
		"switchLabeledStatement",
		"iterationStatement",
		"forLoopIterationStatement",
		"whileLoopIterationStatement",
		"doWhileLoopIterationStatement",
		"forCondition",
		"forDeclaration",
		"forExpression",
		"jumpStatement",
		"returnStatement",
		"primaryExpression",
		"tangledPrimaryExpression",
		"boolPrimaryExpression",
		"identifierPrimaryExpression",
		"identifier",
		"stringPrimaryExpression",
		"fStringPrimaryExpression",
		"numberPrimaryExpression",
		"arrayLiteralPrimaryExpression",
		"voidOrNullOrUndefinedPrimaryExpression",
		"computedPrimaryExpression",
		"argumentExpressionList",
		"dotNotation",
		"bracketNotation",
		"sliceNotation",
		"postfixExpression",
		"incrementOrDecrementPostfixExpression",
		"unaryExpression",
		"incrementOrDecrementUnaryExpression",
		"operatorModifiedUnaryExpression",
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
		"typeSpecifier",
		"identifierTypeSpecifier",
		"genericTypeSpecifier",
		"typeofTypeSpecifier",
		"typeSpecifierIdentifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
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
		"'->'",
		"'true'",
		"'false'",
		"'typeof'",
		"'void'",
		"'null'",
		"'undefined'",
		"','",
		"';'",
		"'?'",
		"':'",
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
		"'='",
		"'+='",
		"'-='",
		"'*='",
		"'/='",
		"'%='",
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
		"RetIndicator",
		"True",
		"False",
		"Typeof",
		"Void",
		"Null",
		"Undefined",
		"Comma",
		"SemiColon",
		"QuestionMark",
		"Colon",
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
		"Assign",
		"PlusAssign",
		"MinusAssign",
		"StarAssign",
		"DivAssign",
		"ModAssign",
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
		return "KipperParser.g4";
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
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.Const) |
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
								(1 << KipperParser.Void) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.SemiColon) |
								(1 << KipperParser.LeftParen))) !==
							0) ||
					(((_la - 32) & ~0x1f) === 0 &&
						((1 << (_la - 32)) &
							((1 << (KipperParser.LeftBracket - 32)) |
								(1 << (KipperParser.LeftBrace - 32)) |
								(1 << (KipperParser.Plus - 32)) |
								(1 << (KipperParser.PlusPlus - 32)) |
								(1 << (KipperParser.Minus - 32)) |
								(1 << (KipperParser.MinusMinus - 32)) |
								(1 << (KipperParser.Not - 32)) |
								(1 << (KipperParser.Identifier - 32)) |
								(1 << (KipperParser.IntegerConstant - 32)) |
								(1 << (KipperParser.FloatingConstant - 32)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.SingleQuoteFStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)))) !==
							0)
				) {
					{
						this.state = 138;
						this.translationUnit();
					}
				}

				this.state = 141;
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
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						this.state = 145;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case KipperParser.Const:
							case KipperParser.Var:
							case KipperParser.Switch:
							case KipperParser.Break:
							case KipperParser.Continue:
							case KipperParser.Do:
							case KipperParser.While:
							case KipperParser.If:
							case KipperParser.For:
							case KipperParser.DefFunc:
							case KipperParser.Return:
							case KipperParser.CallFunc:
							case KipperParser.True:
							case KipperParser.False:
							case KipperParser.Void:
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
									this.state = 143;
									this.externalItem();
								}
								break;
							case KipperParser.SemiColon:
								{
									this.state = 144;
									this.match(KipperParser.SemiColon);
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.Const) |
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
								(1 << KipperParser.Void) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.SemiColon) |
								(1 << KipperParser.LeftParen))) !==
							0) ||
					(((_la - 32) & ~0x1f) === 0 &&
						((1 << (_la - 32)) &
							((1 << (KipperParser.LeftBracket - 32)) |
								(1 << (KipperParser.LeftBrace - 32)) |
								(1 << (KipperParser.Plus - 32)) |
								(1 << (KipperParser.PlusPlus - 32)) |
								(1 << (KipperParser.Minus - 32)) |
								(1 << (KipperParser.MinusMinus - 32)) |
								(1 << (KipperParser.Not - 32)) |
								(1 << (KipperParser.Identifier - 32)) |
								(1 << (KipperParser.IntegerConstant - 32)) |
								(1 << (KipperParser.FloatingConstant - 32)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.SingleQuoteFStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)))) !==
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
			_localctx = new ExternalBlockItemContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 149;
				this.blockItemList();
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
		this.enterRule(_localctx, 6, KipperParser.RULE_declaration);
		try {
			this.state = 153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Const:
				case KipperParser.Var:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 151;
						this.variableDeclaration();
					}
					break;
				case KipperParser.DefFunc:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 152;
						this.functionDeclaration();
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KipperParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 155;
				this.storageTypeSpecifier();
				this.state = 156;
				this.initDeclarator();
				this.state = 157;
				this.match(KipperParser.SemiColon);
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
		this.enterRule(_localctx, 10, KipperParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 159;
				this.match(KipperParser.DefFunc);
				this.state = 160;
				this.declarator();
				this.state = 161;
				this.match(KipperParser.LeftParen);
				this.state = 163;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 162;
						this.parameterList();
					}
				}

				this.state = 165;
				this.match(KipperParser.RightParen);
				this.state = 166;
				this.match(KipperParser.RetIndicator);
				this.state = 167;
				this.typeSpecifier();
				this.state = 170;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.LeftBrace:
						{
							this.state = 168;
							this.compoundStatement();
						}
						break;
					case KipperParser.SemiColon:
						{
							this.state = 169;
							this.match(KipperParser.SemiColon);
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 172;
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
		this.enterRule(_localctx, 14, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 174;
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
	public storageTypeSpecifier(): StorageTypeSpecifierContext {
		let _localctx: StorageTypeSpecifierContext = new StorageTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KipperParser.RULE_storageTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 176;
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
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KipperParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 178;
				this.declarator();
				this.state = 179;
				this.match(KipperParser.Colon);
				this.state = 180;
				this.typeSpecifier();
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Assign) {
					{
						this.state = 181;
						this.match(KipperParser.Assign);
						this.state = 182;
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 185;
				this.parameterDeclaration();
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 186;
							this.match(KipperParser.Comma);
							this.state = 187;
							this.parameterDeclaration();
						}
					}
					this.state = 192;
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
		this.enterRule(_localctx, 22, KipperParser.RULE_parameterDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 193;
				this.declarator();
				this.state = 194;
				this.match(KipperParser.Colon);
				this.state = 195;
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
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, KipperParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 197;
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
		this.enterRule(_localctx, 26, KipperParser.RULE_statement);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftBrace:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 199;
						this.compoundStatement();
					}
					break;
				case KipperParser.CallFunc:
				case KipperParser.True:
				case KipperParser.False:
				case KipperParser.Void:
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
						this.state = 200;
						this.expressionStatement();
					}
					break;
				case KipperParser.Switch:
				case KipperParser.If:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 201;
						this.selectionStatement();
					}
					break;
				case KipperParser.Do:
				case KipperParser.While:
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 202;
						this.iterationStatement();
					}
					break;
				case KipperParser.Break:
				case KipperParser.Continue:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 203;
						this.jumpStatement();
					}
					break;
				case KipperParser.Return:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 204;
						this.returnStatement();
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
		this.enterRule(_localctx, 28, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 207;
				this.match(KipperParser.LeftBrace);
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.Const) |
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
								(1 << KipperParser.Void) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined) |
								(1 << KipperParser.LeftParen))) !==
							0) ||
					(((_la - 32) & ~0x1f) === 0 &&
						((1 << (_la - 32)) &
							((1 << (KipperParser.LeftBracket - 32)) |
								(1 << (KipperParser.LeftBrace - 32)) |
								(1 << (KipperParser.Plus - 32)) |
								(1 << (KipperParser.PlusPlus - 32)) |
								(1 << (KipperParser.Minus - 32)) |
								(1 << (KipperParser.MinusMinus - 32)) |
								(1 << (KipperParser.Not - 32)) |
								(1 << (KipperParser.Identifier - 32)) |
								(1 << (KipperParser.IntegerConstant - 32)) |
								(1 << (KipperParser.FloatingConstant - 32)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.SingleQuoteFStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)))) !==
							0)
				) {
					{
						this.state = 208;
						this.blockItemList();
					}
				}

				this.state = 211;
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
		this.enterRule(_localctx, 30, KipperParser.RULE_blockItemList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 214;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								{
									this.state = 213;
									this.blockItem();
								}
							}
							break;
						default:
							throw new NoViableAltException(this);
					}
					this.state = 216;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
		this.enterRule(_localctx, 32, KipperParser.RULE_blockItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 220;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
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
					case KipperParser.Void:
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
							this.state = 218;
							this.statement();
						}
						break;
					case KipperParser.Const:
					case KipperParser.Var:
					case KipperParser.DefFunc:
						{
							this.state = 219;
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
		this.enterRule(_localctx, 34, KipperParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 222;
				this.expression();
				this.state = 223;
				this.match(KipperParser.SemiColon);
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
		this.enterRule(_localctx, 36, KipperParser.RULE_selectionStatement);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.If:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 225;
						this.ifStatement();
					}
					break;
				case KipperParser.Switch:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 226;
						this.switchStatement();
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, KipperParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 229;
				this.match(KipperParser.If);
				this.state = 230;
				this.match(KipperParser.LeftParen);
				this.state = 231;
				this.expression();
				this.state = 232;
				this.match(KipperParser.RightParen);
				this.state = 233;
				this.statement();
				this.state = 236;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
					case 1:
						{
							this.state = 234;
							this.match(KipperParser.Else);
							this.state = 235;
							this.statement();
						}
						break;
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
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, KipperParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 238;
				this.match(KipperParser.Switch);
				this.state = 239;
				this.match(KipperParser.LeftParen);
				this.state = 240;
				this.expression();
				this.state = 241;
				this.match(KipperParser.RightParen);
				this.state = 242;
				this.match(KipperParser.LeftBrace);
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Case || _la === KipperParser.Default) {
					{
						{
							this.state = 243;
							this.switchLabeledStatement();
						}
					}
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 249;
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
	public switchLabeledStatement(): SwitchLabeledStatementContext {
		let _localctx: SwitchLabeledStatementContext = new SwitchLabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, KipperParser.RULE_switchLabeledStatement);
		try {
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Case:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 251;
						this.match(KipperParser.Case);
						this.state = 252;
						this.expression();
						this.state = 253;
						this.match(KipperParser.Colon);
						this.state = 254;
						this.statement();
					}
					break;
				case KipperParser.Default:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 256;
						this.match(KipperParser.Default);
						this.state = 257;
						this.match(KipperParser.Colon);
						this.state = 258;
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
		this.enterRule(_localctx, 44, KipperParser.RULE_iterationStatement);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 261;
						this.forLoopIterationStatement();
					}
					break;
				case KipperParser.While:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 262;
						this.whileLoopIterationStatement();
					}
					break;
				case KipperParser.Do:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 263;
						this.doWhileLoopIterationStatement();
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
	public forLoopIterationStatement(): ForLoopIterationStatementContext {
		let _localctx: ForLoopIterationStatementContext = new ForLoopIterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, KipperParser.RULE_forLoopIterationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 266;
				this.match(KipperParser.For);
				this.state = 267;
				this.match(KipperParser.LeftParen);
				this.state = 268;
				this.forCondition();
				this.state = 269;
				this.match(KipperParser.RightParen);
				this.state = 270;
				this.statement();
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
	public whileLoopIterationStatement(): WhileLoopIterationStatementContext {
		let _localctx: WhileLoopIterationStatementContext = new WhileLoopIterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, KipperParser.RULE_whileLoopIterationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 272;
				this.match(KipperParser.While);
				this.state = 273;
				this.match(KipperParser.LeftParen);
				this.state = 274;
				this.expression();
				this.state = 275;
				this.match(KipperParser.RightParen);
				this.state = 276;
				this.statement();
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
	public doWhileLoopIterationStatement(): DoWhileLoopIterationStatementContext {
		let _localctx: DoWhileLoopIterationStatementContext = new DoWhileLoopIterationStatementContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 50, KipperParser.RULE_doWhileLoopIterationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 278;
				this.match(KipperParser.Do);
				this.state = 279;
				this.statement();
				this.state = 280;
				this.match(KipperParser.While);
				this.state = 281;
				this.match(KipperParser.LeftParen);
				this.state = 282;
				this.expression();
				this.state = 283;
				this.match(KipperParser.RightParen);
				this.state = 284;
				this.match(KipperParser.SemiColon);
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
		this.enterRule(_localctx, 52, KipperParser.RULE_forCondition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 290;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.Const:
					case KipperParser.Var:
						{
							this.state = 286;
							this.forDeclaration();
						}
						break;
					case KipperParser.CallFunc:
					case KipperParser.True:
					case KipperParser.False:
					case KipperParser.Void:
					case KipperParser.Null:
					case KipperParser.Undefined:
					case KipperParser.SemiColon:
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
							this.state = 288;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								(((_la - 18) & ~0x1f) === 0 &&
									((1 << (_la - 18)) &
										((1 << (KipperParser.CallFunc - 18)) |
											(1 << (KipperParser.True - 18)) |
											(1 << (KipperParser.False - 18)) |
											(1 << (KipperParser.Void - 18)) |
											(1 << (KipperParser.Null - 18)) |
											(1 << (KipperParser.Undefined - 18)) |
											(1 << (KipperParser.LeftParen - 18)) |
											(1 << (KipperParser.LeftBracket - 18)) |
											(1 << (KipperParser.Plus - 18)) |
											(1 << (KipperParser.PlusPlus - 18)) |
											(1 << (KipperParser.Minus - 18)) |
											(1 << (KipperParser.MinusMinus - 18)) |
											(1 << (KipperParser.Not - 18)))) !==
										0) ||
								(((_la - 60) & ~0x1f) === 0 &&
									((1 << (_la - 60)) &
										((1 << (KipperParser.Identifier - 60)) |
											(1 << (KipperParser.IntegerConstant - 60)) |
											(1 << (KipperParser.FloatingConstant - 60)) |
											(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
											(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
											(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
											(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
										0)
							) {
								{
									this.state = 287;
									this.expression();
								}
							}
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this.state = 292;
				this.match(KipperParser.SemiColon);
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 18) & ~0x1f) === 0 &&
						((1 << (_la - 18)) &
							((1 << (KipperParser.CallFunc - 18)) |
								(1 << (KipperParser.True - 18)) |
								(1 << (KipperParser.False - 18)) |
								(1 << (KipperParser.Void - 18)) |
								(1 << (KipperParser.Null - 18)) |
								(1 << (KipperParser.Undefined - 18)) |
								(1 << (KipperParser.LeftParen - 18)) |
								(1 << (KipperParser.LeftBracket - 18)) |
								(1 << (KipperParser.Plus - 18)) |
								(1 << (KipperParser.PlusPlus - 18)) |
								(1 << (KipperParser.Minus - 18)) |
								(1 << (KipperParser.MinusMinus - 18)) |
								(1 << (KipperParser.Not - 18)))) !==
							0) ||
					(((_la - 60) & ~0x1f) === 0 &&
						((1 << (_la - 60)) &
							((1 << (KipperParser.Identifier - 60)) |
								(1 << (KipperParser.IntegerConstant - 60)) |
								(1 << (KipperParser.FloatingConstant - 60)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
							0)
				) {
					{
						this.state = 293;
						this.forExpression();
					}
				}

				this.state = 296;
				this.match(KipperParser.SemiColon);
				this.state = 298;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 18) & ~0x1f) === 0 &&
						((1 << (_la - 18)) &
							((1 << (KipperParser.CallFunc - 18)) |
								(1 << (KipperParser.True - 18)) |
								(1 << (KipperParser.False - 18)) |
								(1 << (KipperParser.Void - 18)) |
								(1 << (KipperParser.Null - 18)) |
								(1 << (KipperParser.Undefined - 18)) |
								(1 << (KipperParser.LeftParen - 18)) |
								(1 << (KipperParser.LeftBracket - 18)) |
								(1 << (KipperParser.Plus - 18)) |
								(1 << (KipperParser.PlusPlus - 18)) |
								(1 << (KipperParser.Minus - 18)) |
								(1 << (KipperParser.MinusMinus - 18)) |
								(1 << (KipperParser.Not - 18)))) !==
							0) ||
					(((_la - 60) & ~0x1f) === 0 &&
						((1 << (_la - 60)) &
							((1 << (KipperParser.Identifier - 60)) |
								(1 << (KipperParser.IntegerConstant - 60)) |
								(1 << (KipperParser.FloatingConstant - 60)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
							0)
				) {
					{
						this.state = 297;
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
		this.enterRule(_localctx, 54, KipperParser.RULE_forDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 300;
				this.storageTypeSpecifier();
				this.state = 301;
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
		this.enterRule(_localctx, 56, KipperParser.RULE_forExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 303;
				this.assignmentExpression();
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 304;
							this.match(KipperParser.Comma);
							this.state = 305;
							this.assignmentExpression();
						}
					}
					this.state = 310;
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
		this.enterRule(_localctx, 58, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 311;
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
				this.state = 312;
				this.match(KipperParser.SemiColon);
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, KipperParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 314;
				this.match(KipperParser.Return);
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 18) & ~0x1f) === 0 &&
						((1 << (_la - 18)) &
							((1 << (KipperParser.CallFunc - 18)) |
								(1 << (KipperParser.True - 18)) |
								(1 << (KipperParser.False - 18)) |
								(1 << (KipperParser.Void - 18)) |
								(1 << (KipperParser.Null - 18)) |
								(1 << (KipperParser.Undefined - 18)) |
								(1 << (KipperParser.LeftParen - 18)) |
								(1 << (KipperParser.LeftBracket - 18)) |
								(1 << (KipperParser.Plus - 18)) |
								(1 << (KipperParser.PlusPlus - 18)) |
								(1 << (KipperParser.Minus - 18)) |
								(1 << (KipperParser.MinusMinus - 18)) |
								(1 << (KipperParser.Not - 18)))) !==
							0) ||
					(((_la - 60) & ~0x1f) === 0 &&
						((1 << (_la - 60)) &
							((1 << (KipperParser.Identifier - 60)) |
								(1 << (KipperParser.IntegerConstant - 60)) |
								(1 << (KipperParser.FloatingConstant - 60)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
							0)
				) {
					{
						this.state = 315;
						this.expression();
					}
				}

				this.state = 318;
				this.match(KipperParser.SemiColon);
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
		this.enterRule(_localctx, 62, KipperParser.RULE_primaryExpression);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftParen:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 320;
						this.tangledPrimaryExpression();
					}
					break;
				case KipperParser.True:
				case KipperParser.False:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 321;
						this.boolPrimaryExpression();
					}
					break;
				case KipperParser.Identifier:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 322;
						this.identifierPrimaryExpression();
					}
					break;
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 323;
						this.stringPrimaryExpression();
					}
					break;
				case KipperParser.SingleQuoteFStringLiteral:
				case KipperParser.DoubleQuoteFStringLiteral:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 324;
						this.fStringPrimaryExpression();
					}
					break;
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 325;
						this.numberPrimaryExpression();
					}
					break;
				case KipperParser.LeftBracket:
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 326;
						this.arrayLiteralPrimaryExpression();
					}
					break;
				case KipperParser.Void:
				case KipperParser.Null:
				case KipperParser.Undefined:
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 327;
						this.voidOrNullOrUndefinedPrimaryExpression();
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
	public tangledPrimaryExpression(): TangledPrimaryExpressionContext {
		let _localctx: TangledPrimaryExpressionContext = new TangledPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, KipperParser.RULE_tangledPrimaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 330;
				this.match(KipperParser.LeftParen);
				this.state = 331;
				this.expression();
				this.state = 332;
				this.match(KipperParser.RightParen);
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
	public boolPrimaryExpression(): BoolPrimaryExpressionContext {
		let _localctx: BoolPrimaryExpressionContext = new BoolPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, KipperParser.RULE_boolPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 334;
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
	public identifierPrimaryExpression(): IdentifierPrimaryExpressionContext {
		let _localctx: IdentifierPrimaryExpressionContext = new IdentifierPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, KipperParser.RULE_identifierPrimaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 336;
				this.identifier();
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, KipperParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 338;
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
	public stringPrimaryExpression(): StringPrimaryExpressionContext {
		let _localctx: StringPrimaryExpressionContext = new StringPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, KipperParser.RULE_stringPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 340;
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
	public fStringPrimaryExpression(): FStringPrimaryExpressionContext {
		let _localctx: FStringPrimaryExpressionContext = new FStringPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, KipperParser.RULE_fStringPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 342;
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
	public numberPrimaryExpression(): NumberPrimaryExpressionContext {
		let _localctx: NumberPrimaryExpressionContext = new NumberPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, KipperParser.RULE_numberPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 344;
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
	public arrayLiteralPrimaryExpression(): ArrayLiteralPrimaryExpressionContext {
		let _localctx: ArrayLiteralPrimaryExpressionContext = new ArrayLiteralPrimaryExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 78, KipperParser.RULE_arrayLiteralPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 346;
				this.match(KipperParser.LeftBracket);
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 18) & ~0x1f) === 0 &&
						((1 << (_la - 18)) &
							((1 << (KipperParser.CallFunc - 18)) |
								(1 << (KipperParser.True - 18)) |
								(1 << (KipperParser.False - 18)) |
								(1 << (KipperParser.Void - 18)) |
								(1 << (KipperParser.Null - 18)) |
								(1 << (KipperParser.Undefined - 18)) |
								(1 << (KipperParser.LeftParen - 18)) |
								(1 << (KipperParser.LeftBracket - 18)) |
								(1 << (KipperParser.Plus - 18)) |
								(1 << (KipperParser.PlusPlus - 18)) |
								(1 << (KipperParser.Minus - 18)) |
								(1 << (KipperParser.MinusMinus - 18)) |
								(1 << (KipperParser.Not - 18)))) !==
							0) ||
					(((_la - 60) & ~0x1f) === 0 &&
						((1 << (_la - 60)) &
							((1 << (KipperParser.Identifier - 60)) |
								(1 << (KipperParser.IntegerConstant - 60)) |
								(1 << (KipperParser.FloatingConstant - 60)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
							0)
				) {
					{
						this.state = 347;
						this.expression();
						this.state = 352;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Comma) {
							{
								{
									this.state = 348;
									this.match(KipperParser.Comma);
									this.state = 349;
									this.expression();
								}
							}
							this.state = 354;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 357;
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
	public voidOrNullOrUndefinedPrimaryExpression(): VoidOrNullOrUndefinedPrimaryExpressionContext {
		let _localctx: VoidOrNullOrUndefinedPrimaryExpressionContext = new VoidOrNullOrUndefinedPrimaryExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 80, KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 359;
				_la = this._input.LA(1);
				if (
					!(
						(_la & ~0x1f) === 0 &&
						((1 << _la) & ((1 << KipperParser.Void) | (1 << KipperParser.Null) | (1 << KipperParser.Undefined))) !== 0
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

	public computedPrimaryExpression(): ComputedPrimaryExpressionContext;
	public computedPrimaryExpression(_p: number): ComputedPrimaryExpressionContext;
	// @RuleVersion(0)
	public computedPrimaryExpression(_p?: number): ComputedPrimaryExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ComputedPrimaryExpressionContext = new ComputedPrimaryExpressionContext(this._ctx, _parentState);
		let _prevctx: ComputedPrimaryExpressionContext = _localctx;
		let _startState: number = 82;
		this.enterRecursionRule(_localctx, 82, KipperParser.RULE_computedPrimaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 372;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.True:
					case KipperParser.False:
					case KipperParser.Void:
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
						{
							_localctx = new PassOncomputedPrimaryExpressionContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;

							this.state = 362;
							this.primaryExpression();
						}
						break;
					case KipperParser.CallFunc:
						{
							_localctx = new ExplicitCallFunctionCallExpressionContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 363;
							this.match(KipperParser.CallFunc);
							this.state = 364;
							this.computedPrimaryExpression(0);
							this.state = 365;
							this.match(KipperParser.LeftParen);
							this.state = 367;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								(((_la - 18) & ~0x1f) === 0 &&
									((1 << (_la - 18)) &
										((1 << (KipperParser.CallFunc - 18)) |
											(1 << (KipperParser.True - 18)) |
											(1 << (KipperParser.False - 18)) |
											(1 << (KipperParser.Void - 18)) |
											(1 << (KipperParser.Null - 18)) |
											(1 << (KipperParser.Undefined - 18)) |
											(1 << (KipperParser.LeftParen - 18)) |
											(1 << (KipperParser.LeftBracket - 18)) |
											(1 << (KipperParser.Plus - 18)) |
											(1 << (KipperParser.PlusPlus - 18)) |
											(1 << (KipperParser.Minus - 18)) |
											(1 << (KipperParser.MinusMinus - 18)) |
											(1 << (KipperParser.Not - 18)))) !==
										0) ||
								(((_la - 60) & ~0x1f) === 0 &&
									((1 << (_la - 60)) &
										((1 << (KipperParser.Identifier - 60)) |
											(1 << (KipperParser.IntegerConstant - 60)) |
											(1 << (KipperParser.FloatingConstant - 60)) |
											(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
											(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
											(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
											(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
										0)
							) {
								{
									this.state = 366;
									this.argumentExpressionList();
								}
							}

							this.state = 369;
							this.match(KipperParser.RightParen);
							_localctx._labelASTKind = 70;
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							this.state = 393;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
								case 1:
									{
										_localctx = new FunctionCallExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 374;
										if (!this.precpred(this._ctx, 5)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
										}
										this.state = 375;
										this.match(KipperParser.LeftParen);
										this.state = 377;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (
											(((_la - 18) & ~0x1f) === 0 &&
												((1 << (_la - 18)) &
													((1 << (KipperParser.CallFunc - 18)) |
														(1 << (KipperParser.True - 18)) |
														(1 << (KipperParser.False - 18)) |
														(1 << (KipperParser.Void - 18)) |
														(1 << (KipperParser.Null - 18)) |
														(1 << (KipperParser.Undefined - 18)) |
														(1 << (KipperParser.LeftParen - 18)) |
														(1 << (KipperParser.LeftBracket - 18)) |
														(1 << (KipperParser.Plus - 18)) |
														(1 << (KipperParser.PlusPlus - 18)) |
														(1 << (KipperParser.Minus - 18)) |
														(1 << (KipperParser.MinusMinus - 18)) |
														(1 << (KipperParser.Not - 18)))) !==
													0) ||
											(((_la - 60) & ~0x1f) === 0 &&
												((1 << (_la - 60)) &
													((1 << (KipperParser.Identifier - 60)) |
														(1 << (KipperParser.IntegerConstant - 60)) |
														(1 << (KipperParser.FloatingConstant - 60)) |
														(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
														(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
														(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
														(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
													0)
										) {
											{
												this.state = 376;
												this.argumentExpressionList();
											}
										}

										this.state = 379;
										this.match(KipperParser.RightParen);
										_localctx._labelASTKind = 70;
									}
									break;

								case 2:
									{
										_localctx = new DotNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 381;
										if (!this.precpred(this._ctx, 3)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
										}
										this.state = 382;
										this.dotNotation();
										_localctx._labelASTKind = 69;
									}
									break;

								case 3:
									{
										_localctx = new BracketNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 385;
										if (!this.precpred(this._ctx, 2)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
										}
										this.state = 386;
										this.bracketNotation();
										_localctx._labelASTKind = 69;
									}
									break;

								case 4:
									{
										_localctx = new SliceNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 389;
										if (!this.precpred(this._ctx, 1)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
										}
										this.state = 390;
										this.sliceNotation();
										_localctx._labelASTKind = 69;
									}
									break;
							}
						}
					}
					this.state = 397;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	public argumentExpressionList(): ArgumentExpressionListContext {
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, KipperParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 398;
				this.assignmentExpression();
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 399;
							this.match(KipperParser.Comma);
							this.state = 400;
							this.assignmentExpression();
						}
					}
					this.state = 405;
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
	public dotNotation(): DotNotationContext {
		let _localctx: DotNotationContext = new DotNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, KipperParser.RULE_dotNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 406;
				this.match(KipperParser.Dot);
				this.state = 407;
				this.identifier();
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
	public bracketNotation(): BracketNotationContext {
		let _localctx: BracketNotationContext = new BracketNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, KipperParser.RULE_bracketNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 409;
				this.match(KipperParser.LeftBracket);
				this.state = 410;
				this.expression();
				this.state = 411;
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
	public sliceNotation(): SliceNotationContext {
		let _localctx: SliceNotationContext = new SliceNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, KipperParser.RULE_sliceNotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 413;
				this.match(KipperParser.LeftBracket);
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 18) & ~0x1f) === 0 &&
						((1 << (_la - 18)) &
							((1 << (KipperParser.CallFunc - 18)) |
								(1 << (KipperParser.True - 18)) |
								(1 << (KipperParser.False - 18)) |
								(1 << (KipperParser.Void - 18)) |
								(1 << (KipperParser.Null - 18)) |
								(1 << (KipperParser.Undefined - 18)) |
								(1 << (KipperParser.LeftParen - 18)) |
								(1 << (KipperParser.LeftBracket - 18)) |
								(1 << (KipperParser.Plus - 18)) |
								(1 << (KipperParser.PlusPlus - 18)) |
								(1 << (KipperParser.Minus - 18)) |
								(1 << (KipperParser.MinusMinus - 18)) |
								(1 << (KipperParser.Not - 18)))) !==
							0) ||
					(((_la - 60) & ~0x1f) === 0 &&
						((1 << (_la - 60)) &
							((1 << (KipperParser.Identifier - 60)) |
								(1 << (KipperParser.IntegerConstant - 60)) |
								(1 << (KipperParser.FloatingConstant - 60)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
							0)
				) {
					{
						this.state = 414;
						this.expression();
						_localctx.sliceStart = true;
					}
				}

				this.state = 419;
				this.match(KipperParser.Colon);
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 18) & ~0x1f) === 0 &&
						((1 << (_la - 18)) &
							((1 << (KipperParser.CallFunc - 18)) |
								(1 << (KipperParser.True - 18)) |
								(1 << (KipperParser.False - 18)) |
								(1 << (KipperParser.Void - 18)) |
								(1 << (KipperParser.Null - 18)) |
								(1 << (KipperParser.Undefined - 18)) |
								(1 << (KipperParser.LeftParen - 18)) |
								(1 << (KipperParser.LeftBracket - 18)) |
								(1 << (KipperParser.Plus - 18)) |
								(1 << (KipperParser.PlusPlus - 18)) |
								(1 << (KipperParser.Minus - 18)) |
								(1 << (KipperParser.MinusMinus - 18)) |
								(1 << (KipperParser.Not - 18)))) !==
							0) ||
					(((_la - 60) & ~0x1f) === 0 &&
						((1 << (_la - 60)) &
							((1 << (KipperParser.Identifier - 60)) |
								(1 << (KipperParser.IntegerConstant - 60)) |
								(1 << (KipperParser.FloatingConstant - 60)) |
								(1 << (KipperParser.SingleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteFStringLiteral - 60)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 60)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 60)))) !==
							0)
				) {
					{
						this.state = 420;
						this.expression();
						_localctx.sliceEnd = true;
					}
				}

				this.state = 425;
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
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, KipperParser.RULE_postfixExpression);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 427;
						this.computedPrimaryExpression(0);
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 428;
						this.incrementOrDecrementPostfixExpression();
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
	public incrementOrDecrementPostfixExpression(): IncrementOrDecrementPostfixExpressionContext {
		let _localctx: IncrementOrDecrementPostfixExpressionContext = new IncrementOrDecrementPostfixExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 94, KipperParser.RULE_incrementOrDecrementPostfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 431;
				this.computedPrimaryExpression(0);
				this.state = 432;
				this.incrementOrDecrementOperator();
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
		this.enterRule(_localctx, 96, KipperParser.RULE_unaryExpression);
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.CallFunc:
				case KipperParser.True:
				case KipperParser.False:
				case KipperParser.Void:
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
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 434;
						this.postfixExpression();
					}
					break;
				case KipperParser.PlusPlus:
				case KipperParser.MinusMinus:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 435;
						this.incrementOrDecrementUnaryExpression();
					}
					break;
				case KipperParser.Plus:
				case KipperParser.Minus:
				case KipperParser.Not:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 436;
						this.operatorModifiedUnaryExpression();
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
	public incrementOrDecrementUnaryExpression(): IncrementOrDecrementUnaryExpressionContext {
		let _localctx: IncrementOrDecrementUnaryExpressionContext = new IncrementOrDecrementUnaryExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 98, KipperParser.RULE_incrementOrDecrementUnaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 439;
				this.incrementOrDecrementOperator();
				this.state = 440;
				this.postfixExpression();
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
	public operatorModifiedUnaryExpression(): OperatorModifiedUnaryExpressionContext {
		let _localctx: OperatorModifiedUnaryExpressionContext = new OperatorModifiedUnaryExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 100, KipperParser.RULE_operatorModifiedUnaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 442;
				this.unaryOperator();
				this.state = 443;
				this.postfixExpression();
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
		this.enterRule(_localctx, 102, KipperParser.RULE_incrementOrDecrementOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 445;
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
		this.enterRule(_localctx, 104, KipperParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 447;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 36) & ~0x1f) === 0 &&
						((1 << (_la - 36)) &
							((1 << (KipperParser.Plus - 36)) | (1 << (KipperParser.Minus - 36)) | (1 << (KipperParser.Not - 36)))) !==
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
		this.enterRule(_localctx, 106, KipperParser.RULE_castOrConvertExpression);
		try {
			this.state = 454;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
				case 1:
					_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 449;
						this.unaryExpression();
					}
					break;

				case 2:
					_localctx = new ActualCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 450;
						this.unaryExpression();
						this.state = 451;
						this.match(KipperParser.As);
						this.state = 452;
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
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, KipperParser.RULE_multiplicativeExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnMultiplicativeExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 457;
					this.castOrConvertExpression();
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 464;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
								this.state = 459;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 460;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 40) & ~0x1f) === 0 &&
										((1 << (_la - 40)) &
											((1 << (KipperParser.Star - 40)) |
												(1 << (KipperParser.Div - 40)) |
												(1 << (KipperParser.Mod - 40)) |
												(1 << (KipperParser.PowerTo - 40)))) !==
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
								this.state = 461;
								this.castOrConvertExpression();
							}
						}
					}
					this.state = 466;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
		let _startState: number = 110;
		this.enterRecursionRule(_localctx, 110, KipperParser.RULE_additiveExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnAdditiveExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 468;
					this.multiplicativeExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 475;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
								this.state = 470;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 471;
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
								this.state = 472;
								this.multiplicativeExpression(0);
							}
						}
					}
					this.state = 477;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, KipperParser.RULE_relationalExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnRelationalExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 479;
					this.additiveExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 486;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
								this.state = 481;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 482;
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
								this.state = 483;
								this.additiveExpression(0);
							}
						}
					}
					this.state = 488;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
		let _startState: number = 114;
		this.enterRecursionRule(_localctx, 114, KipperParser.RULE_equalityExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnEqualityExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 490;
					this.relationalExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 497;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
								this.state = 492;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 493;
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
								this.state = 494;
								this.relationalExpression(0);
							}
						}
					}
					this.state = 499;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, KipperParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalAndExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 501;
					this.equalityExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 508;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
								this.state = 503;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 504;
								this.match(KipperParser.AndAnd);
								this.state = 505;
								this.equalityExpression(0);
							}
						}
					}
					this.state = 510;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
		let _startState: number = 118;
		this.enterRecursionRule(_localctx, 118, KipperParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalOrExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 512;
					this.logicalAndExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
								this.state = 514;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 515;
								this.match(KipperParser.OrOr);
								this.state = 516;
								this.logicalAndExpression(0);
							}
						}
					}
					this.state = 521;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
		this.enterRule(_localctx, 120, KipperParser.RULE_conditionalExpression);
		try {
			this.state = 529;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
				case 1:
					_localctx = new PassOnConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 522;
						this.logicalOrExpression(0);
					}
					break;

				case 2:
					_localctx = new ActualConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 523;
						this.logicalOrExpression(0);
						this.state = 524;
						this.match(KipperParser.QuestionMark);
						this.state = 525;
						this.conditionalExpression();
						this.state = 526;
						this.match(KipperParser.Colon);
						this.state = 527;
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
		this.enterRule(_localctx, 122, KipperParser.RULE_assignmentExpression);
		try {
			this.state = 536;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 44, this._ctx)) {
				case 1:
					_localctx = new PassOnAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 531;
						this.conditionalExpression();
					}
					break;

				case 2:
					_localctx = new ActualAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 532;
						this.computedPrimaryExpression(0);
						this.state = 533;
						this.assignmentOperator();
						this.state = 534;
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
		this.enterRule(_localctx, 124, KipperParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 538;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 47) & ~0x1f) === 0 &&
						((1 << (_la - 47)) &
							((1 << (KipperParser.Assign - 47)) |
								(1 << (KipperParser.PlusAssign - 47)) |
								(1 << (KipperParser.MinusAssign - 47)) |
								(1 << (KipperParser.StarAssign - 47)) |
								(1 << (KipperParser.DivAssign - 47)) |
								(1 << (KipperParser.ModAssign - 47)))) !==
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
		this.enterRule(_localctx, 126, KipperParser.RULE_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 540;
				this.assignmentExpression();
				this.state = 545;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 541;
								this.match(KipperParser.Comma);
								this.state = 542;
								this.assignmentExpression();
							}
						}
					}
					this.state = 547;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
		this.enterRule(_localctx, 128, KipperParser.RULE_typeSpecifier);
		try {
			this.state = 551;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 548;
						this.identifierTypeSpecifier();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 549;
						this.genericTypeSpecifier();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 550;
						this.typeofTypeSpecifier();
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
	public identifierTypeSpecifier(): IdentifierTypeSpecifierContext {
		let _localctx: IdentifierTypeSpecifierContext = new IdentifierTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, KipperParser.RULE_identifierTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 553;
				this.typeSpecifierIdentifier();
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
	public genericTypeSpecifier(): GenericTypeSpecifierContext {
		let _localctx: GenericTypeSpecifierContext = new GenericTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, KipperParser.RULE_genericTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 555;
				this.typeSpecifierIdentifier();
				this.state = 556;
				this.match(KipperParser.Less);
				this.state = 557;
				this.typeSpecifierIdentifier();
				this.state = 558;
				this.match(KipperParser.Greater);
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
	public typeofTypeSpecifier(): TypeofTypeSpecifierContext {
		let _localctx: TypeofTypeSpecifierContext = new TypeofTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, KipperParser.RULE_typeofTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 560;
				this.match(KipperParser.Typeof);
				this.state = 561;
				this.match(KipperParser.LeftParen);
				this.state = 562;
				this.typeSpecifierIdentifier();
				this.state = 563;
				this.match(KipperParser.RightParen);
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
		this.enterRule(_localctx, 136, KipperParser.RULE_typeSpecifierIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 565;
				_la = this._input.LA(1);
				if (
					!(
						((_la & ~0x1f) === 0 &&
							((1 << _la) & ((1 << KipperParser.Void) | (1 << KipperParser.Null) | (1 << KipperParser.Undefined))) !==
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 41:
				return this.computedPrimaryExpression_sempred(_localctx as ComputedPrimaryExpressionContext, predIndex);

			case 54:
				return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

			case 55:
				return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

			case 56:
				return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

			case 57:
				return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

			case 58:
				return this.logicalAndExpression_sempred(_localctx as LogicalAndExpressionContext, predIndex);

			case 59:
				return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex);
		}
		return true;
	}
	private computedPrimaryExpression_sempred(_localctx: ComputedPrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.precpred(this._ctx, 5);

			case 1:
				return this.precpred(this._ctx, 3);

			case 2:
				return this.precpred(this._ctx, 2);

			case 3:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 4:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 5:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 6:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 7:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(_localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 8:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalOrExpression_sempred(_localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 9:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03H\u023A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		'\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x03\x02\x05\x02\x8E\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x06\x03" +
		"\x94\n\x03\r\x03\x0E\x03\x95\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05\x9C" +
		"\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07\xA6\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xAD" +
		"\n\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\xBA\n\v\x03\f\x03\f\x03\f\x07\f\xBF\n\f\f\f\x0E\f\xC2\v\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\xD0\n\x0F\x03\x10\x03\x10\x05\x10\xD4\n\x10\x03\x10" +
		"\x03\x10\x03\x11\x06\x11\xD9\n\x11\r\x11\x0E\x11\xDA\x03\x12\x03\x12\x05" +
		"\x12\xDF\n\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\xE6\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xEF\n" +
		"\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\xF7\n\x16" +
		"\f\x16\x0E\x16\xFA\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0106\n\x17\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u010B\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u0123" +
		"\n\x1C\x05\x1C\u0125\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0129\n\x1C\x03\x1C" +
		"\x03\x1C\x05\x1C\u012D\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x07\x1E\u0135\n\x1E\f\x1E\x0E\x1E\u0138\v\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x05 \u013F\n \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		'!\x03!\x05!\u014B\n!\x03"\x03"\x03"\x03"\x03#\x03#\x03$\x03$\x03%' +
		"\x03%\x03&\x03&\x03'\x03'\x03(\x03(\x03)\x03)\x03)\x03)\x07)\u0161\n" +
		")\f)\x0E)\u0164\v)\x05)\u0166\n)\x03)\x03)\x03*\x03*\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x05+\u0172\n+\x03+\x03+\x03+\x05+\u0177\n+\x03+\x03+\x03+" +
		"\x05+\u017C\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x07+\u018C\n+\f+\x0E+\u018F\v+\x03,\x03,\x03,\x07,\u0194" +
		"\n,\f,\x0E,\u0197\v,\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03" +
		"/\x03/\x05/\u01A4\n/\x03/\x03/\x03/\x03/\x05/\u01AA\n/\x03/\x03/\x030" +
		"\x030\x050\u01B0\n0\x031\x031\x031\x032\x032\x032\x052\u01B8\n2\x033\x03" +
		"3\x033\x034\x034\x034\x035\x035\x036\x036\x037\x037\x037\x037\x037\x05" +
		"7\u01C9\n7\x038\x038\x038\x038\x038\x038\x078\u01D1\n8\f8\x0E8\u01D4\v" +
		"8\x039\x039\x039\x039\x039\x039\x079\u01DC\n9\f9\x0E9\u01DF\v9\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x07:\u01E7\n:\f:\x0E:\u01EA\v:\x03;\x03;\x03;\x03" +
		";\x03;\x03;\x07;\u01F2\n;\f;\x0E;\u01F5\v;\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x07<\u01FD\n<\f<\x0E<\u0200\v<\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u0208" +
		"\n=\f=\x0E=\u020B\v=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u0214\n>" +
		"\x03?\x03?\x03?\x03?\x03?\x05?\u021B\n?\x03@\x03@\x03A\x03A\x03A\x07A" +
		"\u0222\nA\fA\x0EA\u0225\vA\x03B\x03B\x03B\x05B\u022A\nB\x03C\x03C\x03" +
		"D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x02\x02" +
		"\tTnprtvxG\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		'\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&' +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x02\x11" +
		"\x03\x02\x03\x04\x03\x02\n\v\x03\x02\x16\x17\x03\x02DE\x03\x02BC\x03\x02" +
		"?@\x03\x02\x19\x1B\x04\x02''))\x05\x02&&((00\x03\x02*-\x04\x02&&((\x03" +
		"\x029<\x03\x0278\x03\x0216\x04\x02\x19\x1B>>\x02\u0232\x02\x8D\x03\x02" +
		"\x02\x02\x04\x93\x03\x02\x02\x02\x06\x97\x03\x02\x02\x02\b\x9B\x03\x02" +
		"\x02\x02\n\x9D\x03\x02\x02\x02\f\xA1\x03\x02\x02\x02\x0E\xAE\x03\x02\x02" +
		"\x02\x10\xB0\x03\x02\x02\x02\x12\xB2\x03\x02\x02\x02\x14\xB4\x03\x02\x02" +
		"\x02\x16\xBB\x03\x02\x02\x02\x18\xC3\x03\x02\x02\x02\x1A\xC7\x03\x02\x02" +
		"\x02\x1C\xCF\x03\x02\x02\x02\x1E\xD1\x03\x02\x02\x02 \xD8\x03\x02\x02" +
		'\x02"\xDE\x03\x02\x02\x02$\xE0\x03\x02\x02\x02&\xE5\x03\x02\x02\x02(' +
		"\xE7\x03\x02\x02\x02*\xF0\x03\x02\x02\x02,\u0105\x03\x02\x02\x02.\u010A" +
		"\x03\x02\x02\x020\u010C\x03\x02\x02\x022\u0112\x03\x02\x02\x024\u0118" +
		"\x03\x02\x02\x026\u0124\x03\x02\x02\x028\u012E\x03\x02\x02\x02:\u0131" +
		"\x03\x02\x02\x02<\u0139\x03\x02\x02\x02>\u013C\x03\x02\x02\x02@\u014A" +
		"\x03\x02\x02\x02B\u014C\x03\x02\x02\x02D\u0150\x03\x02\x02\x02F\u0152" +
		"\x03\x02\x02\x02H\u0154\x03\x02\x02\x02J\u0156\x03\x02\x02\x02L\u0158" +
		"\x03\x02\x02\x02N\u015A\x03\x02\x02\x02P\u015C\x03\x02\x02\x02R\u0169" +
		"\x03\x02\x02\x02T\u0176\x03\x02\x02\x02V\u0190\x03\x02\x02\x02X\u0198" +
		"\x03\x02\x02\x02Z\u019B\x03\x02\x02\x02\\\u019F\x03\x02\x02\x02^\u01AF" +
		"\x03\x02\x02\x02`\u01B1\x03\x02\x02\x02b\u01B7\x03\x02\x02\x02d\u01B9" +
		"\x03\x02\x02\x02f\u01BC\x03\x02\x02\x02h\u01BF\x03\x02\x02\x02j\u01C1" +
		"\x03\x02\x02\x02l\u01C8\x03\x02\x02\x02n\u01CA\x03\x02\x02\x02p\u01D5" +
		"\x03\x02\x02\x02r\u01E0\x03\x02\x02\x02t\u01EB\x03\x02\x02\x02v\u01F6" +
		"\x03\x02\x02\x02x\u0201\x03\x02\x02\x02z\u0213\x03\x02\x02\x02|\u021A" +
		"\x03\x02\x02\x02~\u021C\x03\x02\x02\x02\x80\u021E\x03\x02\x02\x02\x82" +
		"\u0229\x03\x02\x02\x02\x84\u022B\x03\x02\x02\x02\x86\u022D\x03\x02\x02" +
		"\x02\x88\u0232\x03\x02\x02\x02\x8A\u0237\x03\x02\x02\x02\x8C\x8E\x05\x04" +
		"\x03\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02" +
		"\x02\x02\x8F\x90\x07\x02\x02\x03\x90\x03\x03\x02\x02\x02\x91\x94\x05\x06" +
		"\x04\x02\x92\x94\x07\x1D\x02\x02\x93\x91\x03\x02\x02\x02\x93\x92\x03\x02" +
		"\x02\x02\x94\x95\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02" +
		"\x02\x02\x96\x05\x03\x02\x02\x02\x97\x98\x05 \x11\x02\x98\x07\x03\x02" +
		"\x02\x02\x99\x9C\x05\n\x06\x02\x9A\x9C\x05\f\x07\x02\x9B\x99\x03\x02\x02" +
		"\x02\x9B\x9A\x03\x02\x02\x02\x9C\t\x03\x02\x02\x02\x9D\x9E\x05\x12\n\x02" +
		"\x9E\x9F\x05\x14\v\x02\x9F\xA0\x07\x1D\x02\x02\xA0\v\x03\x02\x02\x02\xA1" +
		"\xA2\x07\x12\x02\x02\xA2\xA3\x05\x0E\b\x02\xA3\xA5\x07 \x02\x02\xA4\xA6" +
		"\x05\x16\f\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7" +
		"\x03\x02\x02\x02\xA7\xA8\x07!\x02\x02\xA8\xA9\x07\x15\x02\x02\xA9\xAC" +
		"\x05\x82B\x02\xAA\xAD\x05\x1E\x10\x02\xAB\xAD\x07\x1D\x02\x02\xAC\xAA" +
		"\x03\x02\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\r\x03\x02\x02\x02\xAE\xAF" +
		"\x05\x10\t\x02\xAF\x0F\x03\x02\x02\x02\xB0\xB1\x07>\x02\x02\xB1\x11\x03" +
		"\x02\x02\x02\xB2\xB3\t\x02\x02\x02\xB3\x13\x03\x02\x02\x02\xB4\xB5\x05" +
		"\x0E\b\x02\xB5\xB6\x07\x1F\x02\x02\xB6\xB9\x05\x82B\x02\xB7\xB8\x071\x02" +
		"\x02\xB8\xBA\x05\x1A\x0E\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02" +
		"\x02\xBA\x15\x03\x02\x02\x02\xBB\xC0\x05\x18\r\x02\xBC\xBD\x07\x1C\x02" +
		"\x02\xBD\xBF\x05\x18\r\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02\x02" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x17\x03\x02\x02" +
		"\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC4\x05\x0E\b\x02\xC4\xC5\x07\x1F\x02" +
		"\x02\xC5\xC6\x05\x82B\x02\xC6\x19\x03\x02\x02\x02\xC7\xC8\x05|?\x02\xC8" +
		"\x1B\x03\x02\x02\x02\xC9\xD0\x05\x1E\x10\x02\xCA\xD0\x05$\x13\x02\xCB" +
		"\xD0\x05&\x14\x02\xCC\xD0\x05.\x18\x02\xCD\xD0\x05<\x1F\x02\xCE\xD0\x05" +
		"> \x02\xCF\xC9\x03\x02\x02\x02\xCF\xCA\x03\x02\x02\x02\xCF\xCB\x03\x02" +
		"\x02\x02\xCF\xCC\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02" +
		"\x02\x02\xD0\x1D\x03\x02\x02\x02\xD1\xD3\x07$\x02\x02\xD2\xD4\x05 \x11" +
		"\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD5\x03\x02\x02" +
		'\x02\xD5\xD6\x07%\x02\x02\xD6\x1F\x03\x02\x02\x02\xD7\xD9\x05"\x12\x02' +
		"\xD8\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02" +
		"\xDA\xDB\x03\x02\x02\x02\xDB!\x03\x02\x02\x02\xDC\xDF\x05\x1C\x0F\x02" +
		"\xDD\xDF\x05\b\x05\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02" +
		"\xDF#\x03\x02\x02\x02\xE0\xE1\x05\x80A\x02\xE1\xE2\x07\x1D\x02\x02\xE2" +
		"%\x03\x02\x02\x02\xE3\xE6\x05(\x15\x02\xE4\xE6\x05*\x16\x02\xE5\xE3\x03" +
		"\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6'\x03\x02\x02\x02\xE7\xE8\x07" +
		"\x0E\x02\x02\xE8\xE9\x07 \x02\x02\xE9\xEA\x05\x80A\x02\xEA\xEB\x07!\x02" +
		"\x02\xEB\xEE\x05\x1C\x0F\x02\xEC\xED\x07\x0F\x02\x02\xED\xEF\x05\x1C\x0F" +
		"\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF)\x03\x02\x02" +
		"\x02\xF0\xF1\x07\x07\x02\x02\xF1\xF2\x07 \x02\x02\xF2\xF3\x05\x80A\x02" +
		"\xF3\xF4\x07!\x02\x02\xF4\xF8\x07$\x02\x02\xF5\xF7\x05,\x17\x02\xF6\xF5" +
		"\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9" +
		"\x03\x02\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC" +
		"\x07%\x02\x02\xFC+\x03\x02\x02\x02\xFD\xFE\x07\b\x02\x02\xFE\xFF\x05\x80" +
		"A\x02\xFF\u0100\x07\x1F\x02\x02\u0100\u0101\x05\x1C\x0F\x02\u0101\u0106" +
		"\x03\x02\x02\x02\u0102\u0103\x07\t\x02\x02\u0103\u0104\x07\x1F\x02\x02" +
		"\u0104\u0106\x05\x1C\x0F\x02\u0105\xFD\x03\x02\x02\x02\u0105\u0102\x03" +
		"\x02\x02\x02\u0106-\x03\x02\x02\x02\u0107\u010B\x050\x19\x02\u0108\u010B" +
		"\x052\x1A\x02\u0109\u010B\x054\x1B\x02\u010A\u0107\x03\x02\x02\x02\u010A" +
		"\u0108\x03\x02\x02\x02\u010A\u0109\x03\x02\x02\x02\u010B/\x03\x02\x02" +
		"\x02\u010C\u010D\x07\x10\x02\x02\u010D\u010E\x07 \x02\x02\u010E\u010F" +
		"\x056\x1C\x02\u010F\u0110\x07!\x02\x02\u0110\u0111\x05\x1C\x0F\x02\u0111" +
		"1\x03\x02\x02\x02\u0112\u0113\x07\r\x02\x02\u0113\u0114\x07 \x02\x02\u0114" +
		"\u0115\x05\x80A\x02\u0115\u0116\x07!\x02\x02\u0116\u0117\x05\x1C\x0F\x02" +
		"\u01173\x03\x02\x02\x02\u0118\u0119\x07\f\x02\x02\u0119\u011A\x05\x1C" +
		"\x0F\x02\u011A\u011B\x07\r\x02\x02\u011B\u011C\x07 \x02\x02\u011C\u011D" +
		"\x05\x80A\x02\u011D\u011E\x07!\x02\x02\u011E\u011F\x07\x1D\x02\x02\u011F" +
		"5\x03\x02\x02\x02\u0120\u0125\x058\x1D\x02\u0121\u0123\x05\x80A\x02\u0122" +
		"\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02" +
		"\x02\x02\u0124\u0120\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125" +
		"\u0126\x03\x02\x02\x02\u0126\u0128\x07\x1D\x02\x02\u0127\u0129\x05:\x1E" +
		"\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A" +
		"\x03\x02\x02\x02\u012A\u012C\x07\x1D\x02\x02\u012B\u012D\x05:\x1E\x02" +
		"\u012C\u012B\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D7\x03\x02" +
		"\x02\x02\u012E\u012F\x05\x12\n\x02\u012F\u0130\x05\x14\v\x02\u01309\x03" +
		"\x02\x02\x02\u0131\u0136\x05|?\x02\u0132\u0133\x07\x1C\x02\x02\u0133\u0135" +
		"\x05|?\x02\u0134\u0132\x03\x02\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136" +
		"\u0134\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137;\x03\x02\x02" +
		"\x02\u0138\u0136\x03\x02\x02\x02\u0139\u013A\t\x03\x02\x02\u013A\u013B" +
		"\x07\x1D\x02\x02\u013B=\x03\x02\x02\x02\u013C\u013E\x07\x13\x02\x02\u013D" +
		"\u013F\x05\x80A\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02\x02" +
		"\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x07\x1D\x02\x02\u0141?\x03" +
		'\x02\x02\x02\u0142\u014B\x05B"\x02\u0143\u014B\x05D#\x02\u0144\u014B' +
		"\x05F$\x02\u0145\u014B\x05J&\x02\u0146\u014B\x05L'\x02\u0147\u014B\x05" +
		"N(\x02\u0148\u014B\x05P)\x02\u0149\u014B\x05R*\x02\u014A\u0142\x03\x02" +
		"\x02\x02\u014A\u0143\x03\x02\x02\x02\u014A\u0144\x03\x02\x02\x02\u014A" +
		"\u0145\x03\x02\x02\x02\u014A\u0146\x03\x02\x02\x02\u014A\u0147\x03\x02" +
		"\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B" +
		"A\x03\x02\x02\x02\u014C\u014D\x07 \x02\x02\u014D\u014E\x05\x80A\x02\u014E" +
		"\u014F\x07!\x02\x02\u014FC\x03\x02\x02\x02\u0150\u0151\t\x04\x02\x02\u0151" +
		"E\x03\x02\x02\x02\u0152\u0153\x05H%\x02\u0153G\x03\x02\x02\x02\u0154\u0155" +
		"\x07>\x02\x02\u0155I\x03\x02\x02\x02\u0156\u0157\t\x05\x02\x02\u0157K" +
		"\x03\x02\x02\x02\u0158\u0159\t\x06\x02\x02\u0159M\x03\x02\x02\x02\u015A" +
		'\u015B\t\x07\x02\x02\u015BO\x03\x02\x02\x02\u015C\u0165\x07"\x02\x02' +
		"\u015D\u0162\x05\x80A\x02\u015E\u015F\x07\x1C\x02\x02\u015F\u0161\x05" +
		"\x80A\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162" +
		"\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0166\x03\x02" +
		"\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u015D\x03\x02\x02\x02\u0165" +
		"\u0166\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x07#\x02" +
		"\x02\u0168Q\x03\x02\x02\x02\u0169\u016A\t\b\x02\x02\u016AS\x03\x02\x02" +
		"\x02\u016B\u016C\b+\x01\x02\u016C\u0177\x05@!\x02\u016D\u016E\x07\x14" +
		"\x02\x02\u016E\u016F\x05T+\x02\u016F\u0171\x07 \x02\x02\u0170\u0172\x05" +
		"V,\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173" +
		"\x03\x02\x02\x02\u0173\u0174\x07!\x02\x02\u0174\u0175\b+\x01\x02\u0175" +
		"\u0177\x03\x02\x02\x02\u0176\u016B\x03\x02\x02\x02\u0176\u016D\x03\x02" +
		"\x02\x02\u0177\u018D\x03\x02\x02\x02\u0178\u0179\f\x07\x02\x02\u0179\u017B" +
		"\x07 \x02\x02\u017A\u017C\x05V,\x02\u017B\u017A\x03\x02\x02\x02\u017B" +
		"\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x07!\x02" +
		"\x02\u017E\u018C\b+\x01\x02\u017F\u0180\f\x05\x02\x02\u0180\u0181\x05" +
		"X-\x02\u0181\u0182\b+\x01\x02\u0182\u018C\x03\x02\x02\x02\u0183\u0184" +
		"\f\x04\x02\x02\u0184\u0185\x05Z.\x02\u0185\u0186\b+\x01\x02\u0186\u018C" +
		"\x03\x02\x02\x02\u0187\u0188\f\x03\x02\x02\u0188\u0189\x05\\/\x02\u0189" +
		"\u018A\b+\x01\x02\u018A\u018C\x03\x02\x02\x02\u018B\u0178\x03\x02\x02" +
		"\x02\u018B\u017F\x03\x02\x02\x02\u018B\u0183\x03\x02\x02\x02\u018B\u0187" +
		"\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02" +
		"\u018D\u018E\x03\x02\x02\x02\u018EU\x03\x02\x02\x02\u018F\u018D\x03\x02" +
		"\x02\x02\u0190\u0195\x05|?\x02\u0191\u0192\x07\x1C\x02\x02\u0192\u0194" +
		"\x05|?\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0197\x03\x02\x02\x02\u0195" +
		"\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196W\x03\x02\x02" +
		"\x02\u0197\u0195\x03\x02\x02\x02\u0198\u0199\x07=\x02\x02\u0199\u019A" +
		'\x05H%\x02\u019AY\x03\x02\x02\x02\u019B\u019C\x07"\x02\x02\u019C\u019D' +
		"\x05\x80A\x02\u019D\u019E\x07#\x02\x02\u019E[\x03\x02\x02\x02\u019F\u01A3" +
		'\x07"\x02\x02\u01A0\u01A1\x05\x80A\x02\u01A1\u01A2\b/\x01\x02\u01A2\u01A4' +
		"\x03\x02\x02\x02\u01A3\u01A0\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02" +
		"\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A9\x07\x1F\x02\x02\u01A6\u01A7\x05" +
		"\x80A\x02\u01A7\u01A8\b/\x01\x02\u01A8\u01AA\x03\x02\x02\x02\u01A9\u01A6" +
		"\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02" +
		"\u01AB\u01AC\x07#\x02\x02\u01AC]\x03\x02\x02\x02\u01AD\u01B0\x05T+\x02" +
		"\u01AE\u01B0\x05`1\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02" +
		"\x02\x02\u01B0_\x03\x02\x02\x02\u01B1\u01B2\x05T+\x02\u01B2\u01B3\x05" +
		"h5\x02\u01B3a\x03\x02\x02\x02\u01B4\u01B8\x05^0\x02\u01B5\u01B8\x05d3" +
		"\x02\u01B6\u01B8\x05f4\x02\u01B7\u01B4\x03\x02\x02\x02\u01B7\u01B5\x03" +
		"\x02\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B8c\x03\x02\x02\x02\u01B9" +
		"\u01BA\x05h5\x02\u01BA\u01BB\x05^0\x02\u01BBe\x03\x02\x02\x02\u01BC\u01BD" +
		"\x05j6\x02\u01BD\u01BE\x05^0\x02\u01BEg\x03\x02\x02\x02\u01BF\u01C0\t" +
		"\t\x02\x02\u01C0i\x03\x02\x02\x02\u01C1\u01C2\t\n\x02\x02\u01C2k\x03\x02" +
		"\x02\x02\u01C3\u01C9\x05b2\x02\u01C4\u01C5\x05b2\x02\u01C5\u01C6\x07\x05" +
		"\x02\x02\u01C6\u01C7\x05\x82B\x02\u01C7\u01C9\x03\x02\x02\x02\u01C8\u01C3" +
		"\x03\x02\x02\x02\u01C8\u01C4\x03\x02\x02\x02\u01C9m\x03\x02\x02\x02\u01CA" +
		"\u01CB\b8\x01\x02\u01CB\u01CC\x05l7\x02\u01CC\u01D2\x03\x02\x02\x02\u01CD" +
		"\u01CE\f\x03\x02\x02\u01CE\u01CF\t\v\x02\x02\u01CF\u01D1\x05l7\x02\u01D0" +
		"\u01CD\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02" +
		"\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3o\x03\x02\x02\x02\u01D4\u01D2" +
		"\x03\x02\x02\x02\u01D5\u01D6\b9\x01\x02\u01D6\u01D7\x05n8\x02\u01D7\u01DD" +
		"\x03\x02\x02\x02\u01D8\u01D9\f\x03\x02\x02\u01D9\u01DA\t\f\x02\x02\u01DA" +
		"\u01DC\x05n8\x02\u01DB\u01D8\x03\x02\x02\x02\u01DC\u01DF\x03\x02\x02\x02" +
		"\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DEq\x03\x02" +
		"\x02\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E1\b:\x01\x02\u01E1\u01E2" +
		"\x05p9\x02\u01E2\u01E8\x03\x02\x02\x02\u01E3\u01E4\f\x03\x02\x02\u01E4" +
		"\u01E5\t\r\x02\x02\u01E5\u01E7\x05p9\x02\u01E6\u01E3\x03\x02\x02\x02\u01E7" +
		"\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02" +
		"\x02\x02\u01E9s\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01EC" +
		"\b;\x01\x02\u01EC\u01ED\x05r:\x02\u01ED\u01F3\x03\x02\x02\x02\u01EE\u01EF" +
		"\f\x03\x02\x02\u01EF\u01F0\t\x0E\x02\x02\u01F0\u01F2\x05r:\x02\u01F1\u01EE" +
		"\x03\x02\x02\x02\u01F2\u01F5\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02" +
		"\u01F3\u01F4\x03\x02\x02\x02\u01F4u\x03\x02\x02\x02\u01F5\u01F3\x03\x02" +
		"\x02\x02\u01F6\u01F7\b<\x01\x02\u01F7\u01F8\x05t;\x02\u01F8\u01FE\x03" +
		"\x02\x02\x02\u01F9\u01FA\f\x03\x02\x02\u01FA\u01FB\x07.\x02\x02\u01FB" +
		"\u01FD\x05t;\x02\u01FC\u01F9\x03\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02" +
		"\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FFw\x03\x02" +
		"\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0201\u0202\b=\x01\x02\u0202\u0203" +
		"\x05v<\x02\u0203\u0209\x03\x02\x02\x02\u0204\u0205\f\x03\x02\x02\u0205" +
		"\u0206\x07/\x02\x02\u0206\u0208\x05v<\x02\u0207\u0204\x03\x02\x02\x02" +
		"\u0208\u020B\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A\x03" +
		"\x02\x02\x02\u020Ay\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020C" +
		"\u0214\x05x=\x02\u020D\u020E\x05x=\x02\u020E\u020F\x07\x1E\x02\x02\u020F" +
		"\u0210\x05z>\x02\u0210\u0211\x07\x1F\x02\x02\u0211\u0212\x05z>\x02\u0212" +
		"\u0214\x03\x02\x02\x02\u0213\u020C\x03\x02\x02\x02\u0213\u020D\x03\x02" +
		"\x02\x02\u0214{\x03\x02\x02\x02\u0215\u021B\x05z>\x02\u0216\u0217\x05" +
		"T+\x02\u0217\u0218\x05~@\x02\u0218\u0219\x05|?\x02\u0219\u021B\x03\x02" +
		"\x02\x02\u021A\u0215\x03\x02\x02\x02\u021A\u0216\x03\x02\x02\x02\u021B" +
		"}\x03\x02\x02\x02\u021C\u021D\t\x0F\x02\x02\u021D\x7F\x03\x02\x02\x02" +
		"\u021E\u0223\x05|?\x02\u021F\u0220\x07\x1C\x02\x02\u0220\u0222\x05|?\x02" +
		"\u0221\u021F\x03\x02\x02\x02\u0222\u0225\x03\x02\x02\x02\u0223\u0221\x03" +
		"\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\x81\x03\x02\x02\x02\u0225" +
		"\u0223\x03\x02\x02\x02\u0226\u022A\x05\x84C\x02\u0227\u022A\x05\x86D\x02" +
		"\u0228\u022A\x05\x88E\x02\u0229\u0226\x03\x02\x02\x02\u0229\u0227\x03" +
		"\x02\x02\x02\u0229\u0228\x03\x02\x02\x02\u022A\x83\x03\x02\x02\x02\u022B" +
		"\u022C\x05\x8AF\x02\u022C\x85\x03\x02\x02\x02\u022D\u022E\x05\x8AF\x02" +
		"\u022E\u022F\x079\x02\x02\u022F\u0230\x05\x8AF\x02\u0230\u0231\x07;\x02" +
		"\x02\u0231\x87\x03\x02\x02\x02\u0232\u0233\x07\x18\x02\x02\u0233\u0234" +
		"\x07 \x02\x02\u0234\u0235\x05\x8AF\x02\u0235\u0236\x07!\x02\x02\u0236" +
		"\x89\x03\x02\x02\x02\u0237\u0238\t\x10\x02\x02\u0238\x8B\x03\x02\x02\x02" +
		"1\x8D\x93\x95\x9B\xA5\xAC\xB9\xC0\xCF\xD3\xDA\xDE\xE5\xEE\xF8\u0105\u010A" +
		"\u0122\u0124\u0128\u012C\u0136\u013E\u014A\u0162\u0165\u0171\u0176\u017B" +
		"\u018B\u018D\u0195\u01A3\u01A9\u01AF\u01B7\u01C8\u01D2\u01DD\u01E8\u01F3" +
		"\u01FE\u0209\u0213\u021A\u0223\u0229";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KipperParser.__ATN) {
			KipperParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KipperParser._serializedATN));
		}

		return KipperParser.__ATN;
	}
}

export class CompilationUnitContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TranslationUnitContext extends KipperParserRuleContext {
	public externalItem(): ExternalItemContext[];
	public externalItem(i: number): ExternalItemContext;
	public externalItem(i?: number): ExternalItemContext | ExternalItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExternalItemContext);
		} else {
			return this.getRuleContext(i, ExternalItemContext);
		}
	}
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.SemiColon);
		} else {
			return this.getToken(KipperParser.SemiColon, i);
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterTranslationUnit) {
			listener.enterTranslationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitTranslationUnit) {
			listener.exitTranslationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitTranslationUnit) {
			return visitor.visitTranslationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExternalItemContext extends KipperParserRuleContext {
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
export class ExternalBlockItemContext extends ExternalItemContext {
	public blockItemList(): BlockItemListContext {
		return this.getRuleContext(0, BlockItemListContext);
	}
	constructor(ctx: ExternalItemContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterExternalBlockItem) {
			listener.enterExternalBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitExternalBlockItem) {
			listener.exitExternalBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitExternalBlockItem) {
			return visitor.visitExternalBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DeclarationContext extends KipperParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_declaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VariableDeclarationContext extends KipperParserRuleContext {
	public storageTypeSpecifier(): StorageTypeSpecifierContext {
		return this.getRuleContext(0, StorageTypeSpecifierContext);
	}
	public initDeclarator(): InitDeclaratorContext {
		return this.getRuleContext(0, InitDeclaratorContext);
	}
	public SemiColon(): TerminalNode {
		return this.getToken(KipperParser.SemiColon, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_variableDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FunctionDeclarationContext extends KipperParserRuleContext {
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
	public RetIndicator(): TerminalNode {
		return this.getToken(KipperParser.RetIndicator, 0);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public SemiColon(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.SemiColon, 0);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_functionDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DeclaratorContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DirectDeclaratorContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterDirectDeclarator) {
			listener.enterDirectDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitDirectDeclarator) {
			listener.exitDirectDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitDirectDeclarator) {
			return visitor.visitDirectDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StorageTypeSpecifierContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterStorageTypeSpecifier) {
			listener.enterStorageTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitStorageTypeSpecifier) {
			listener.exitStorageTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitStorageTypeSpecifier) {
			return visitor.visitStorageTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InitDeclaratorContext extends KipperParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterInitDeclarator) {
			listener.enterInitDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitInitDeclarator) {
			listener.exitInitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitInitDeclarator) {
			return visitor.visitInitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParameterListContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParameterDeclarationContext extends KipperParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_parameterDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InitializerContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterInitializer) {
			listener.enterInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitInitializer) {
			listener.exitInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitInitializer) {
			return visitor.visitInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StatementContext extends KipperParserRuleContext {
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
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_statement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CompoundStatementContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockItemListContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterBlockItemList) {
			listener.enterBlockItemList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitBlockItemList) {
			listener.exitBlockItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitBlockItemList) {
			return visitor.visitBlockItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BlockItemContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterBlockItem) {
			listener.enterBlockItem(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitBlockItem) {
			listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionStatementContext extends KipperParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SemiColon(): TerminalNode {
		return this.getToken(KipperParser.SemiColon, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_expressionStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SelectionStatementContext extends KipperParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_selectionStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterSelectionStatement) {
			listener.enterSelectionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitSelectionStatement) {
			listener.exitSelectionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitSelectionStatement) {
			return visitor.visitSelectionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IfStatementContext extends KipperParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_ifStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchStatementContext extends KipperParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_switchStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SwitchLabeledStatementContext extends KipperParserRuleContext {
	public Case(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Case, 0);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterSwitchLabeledStatement) {
			listener.enterSwitchLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitSwitchLabeledStatement) {
			listener.exitSwitchLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitSwitchLabeledStatement) {
			return visitor.visitSwitchLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IterationStatementContext extends KipperParserRuleContext {
	public forLoopIterationStatement(): ForLoopIterationStatementContext | undefined {
		return this.tryGetRuleContext(0, ForLoopIterationStatementContext);
	}
	public whileLoopIterationStatement(): WhileLoopIterationStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileLoopIterationStatementContext);
	}
	public doWhileLoopIterationStatement(): DoWhileLoopIterationStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileLoopIterationStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_iterationStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIterationStatement) {
			listener.enterIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIterationStatement) {
			listener.exitIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIterationStatement) {
			return visitor.visitIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForLoopIterationStatementContext extends KipperParserRuleContext {
	public For(): TerminalNode {
		return this.getToken(KipperParser.For, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public forCondition(): ForConditionContext {
		return this.getRuleContext(0, ForConditionContext);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_forLoopIterationStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterForLoopIterationStatement) {
			listener.enterForLoopIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitForLoopIterationStatement) {
			listener.exitForLoopIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitForLoopIterationStatement) {
			return visitor.visitForLoopIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class WhileLoopIterationStatementContext extends KipperParserRuleContext {
	public While(): TerminalNode {
		return this.getToken(KipperParser.While, 0);
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
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_whileLoopIterationStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterWhileLoopIterationStatement) {
			listener.enterWhileLoopIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitWhileLoopIterationStatement) {
			listener.exitWhileLoopIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitWhileLoopIterationStatement) {
			return visitor.visitWhileLoopIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DoWhileLoopIterationStatementContext extends KipperParserRuleContext {
	public Do(): TerminalNode {
		return this.getToken(KipperParser.Do, 0);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode {
		return this.getToken(KipperParser.While, 0);
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
	public SemiColon(): TerminalNode {
		return this.getToken(KipperParser.SemiColon, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_doWhileLoopIterationStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterDoWhileLoopIterationStatement) {
			listener.enterDoWhileLoopIterationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitDoWhileLoopIterationStatement) {
			listener.exitDoWhileLoopIterationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitDoWhileLoopIterationStatement) {
			return visitor.visitDoWhileLoopIterationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForConditionContext extends KipperParserRuleContext {
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(KipperParser.SemiColon);
		} else {
			return this.getToken(KipperParser.SemiColon, i);
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterForCondition) {
			listener.enterForCondition(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitForCondition) {
			listener.exitForCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitForCondition) {
			return visitor.visitForCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForDeclarationContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterForDeclaration) {
			listener.enterForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitForDeclaration) {
			listener.exitForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitForDeclaration) {
			return visitor.visitForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ForExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterForExpression) {
			listener.enterForExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitForExpression) {
			listener.exitForExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitForExpression) {
			return visitor.visitForExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class JumpStatementContext extends KipperParserRuleContext {
	public SemiColon(): TerminalNode {
		return this.getToken(KipperParser.SemiColon, 0);
	}
	public Continue(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Continue, 0);
	}
	public Break(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Break, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_jumpStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterJumpStatement) {
			listener.enterJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitJumpStatement) {
			listener.exitJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitJumpStatement) {
			return visitor.visitJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ReturnStatementContext extends KipperParserRuleContext {
	public Return(): TerminalNode {
		return this.getToken(KipperParser.Return, 0);
	}
	public SemiColon(): TerminalNode {
		return this.getToken(KipperParser.SemiColon, 0);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_returnStatement;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PrimaryExpressionContext extends KipperParserRuleContext {
	public tangledPrimaryExpression(): TangledPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, TangledPrimaryExpressionContext);
	}
	public boolPrimaryExpression(): BoolPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, BoolPrimaryExpressionContext);
	}
	public identifierPrimaryExpression(): IdentifierPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, IdentifierPrimaryExpressionContext);
	}
	public stringPrimaryExpression(): StringPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringPrimaryExpressionContext);
	}
	public fStringPrimaryExpression(): FStringPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, FStringPrimaryExpressionContext);
	}
	public numberPrimaryExpression(): NumberPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumberPrimaryExpressionContext);
	}
	public arrayLiteralPrimaryExpression(): ArrayLiteralPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralPrimaryExpressionContext);
	}
	public voidOrNullOrUndefinedPrimaryExpression(): VoidOrNullOrUndefinedPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, VoidOrNullOrUndefinedPrimaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_primaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TangledPrimaryExpressionContext extends KipperParserRuleContext {
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_tangledPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterTangledPrimaryExpression) {
			listener.enterTangledPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitTangledPrimaryExpression) {
			listener.exitTangledPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitTangledPrimaryExpression) {
			return visitor.visitTangledPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BoolPrimaryExpressionContext extends KipperParserRuleContext {
	public True(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.True, 0);
	}
	public False(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.False, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_boolPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterBoolPrimaryExpression) {
			listener.enterBoolPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitBoolPrimaryExpression) {
			listener.exitBoolPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitBoolPrimaryExpression) {
			return visitor.visitBoolPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IdentifierPrimaryExpressionContext extends KipperParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_identifierPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIdentifierPrimaryExpression) {
			listener.enterIdentifierPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIdentifierPrimaryExpression) {
			listener.exitIdentifierPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIdentifierPrimaryExpression) {
			return visitor.visitIdentifierPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IdentifierContext extends KipperParserRuleContext {
	public Identifier(): TerminalNode {
		return this.getToken(KipperParser.Identifier, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_identifier;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StringPrimaryExpressionContext extends KipperParserRuleContext {
	public SingleQuoteStringLiteral(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.SingleQuoteStringLiteral, 0);
	}
	public DoubleQuoteStringLiteral(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.DoubleQuoteStringLiteral, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_stringPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterStringPrimaryExpression) {
			listener.enterStringPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitStringPrimaryExpression) {
			listener.exitStringPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitStringPrimaryExpression) {
			return visitor.visitStringPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FStringPrimaryExpressionContext extends KipperParserRuleContext {
	public SingleQuoteFStringLiteral(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.SingleQuoteFStringLiteral, 0);
	}
	public DoubleQuoteFStringLiteral(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.DoubleQuoteFStringLiteral, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_fStringPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterFStringPrimaryExpression) {
			listener.enterFStringPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitFStringPrimaryExpression) {
			listener.exitFStringPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitFStringPrimaryExpression) {
			return visitor.visitFStringPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class NumberPrimaryExpressionContext extends KipperParserRuleContext {
	public IntegerConstant(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.IntegerConstant, 0);
	}
	public FloatingConstant(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FloatingConstant, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_numberPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterNumberPrimaryExpression) {
			listener.enterNumberPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitNumberPrimaryExpression) {
			listener.exitNumberPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitNumberPrimaryExpression) {
			return visitor.visitNumberPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArrayLiteralPrimaryExpressionContext extends KipperParserRuleContext {
	public LeftBracket(): TerminalNode {
		return this.getToken(KipperParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(KipperParser.RightBracket, 0);
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
		return KipperParser.RULE_arrayLiteralPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterArrayLiteralPrimaryExpression) {
			listener.enterArrayLiteralPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitArrayLiteralPrimaryExpression) {
			listener.exitArrayLiteralPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteralPrimaryExpression) {
			return visitor.visitArrayLiteralPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class VoidOrNullOrUndefinedPrimaryExpressionContext extends KipperParserRuleContext {
	public Void(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Void, 0);
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
		return KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterVoidOrNullOrUndefinedPrimaryExpression) {
			listener.enterVoidOrNullOrUndefinedPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitVoidOrNullOrUndefinedPrimaryExpression) {
			listener.exitVoidOrNullOrUndefinedPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitVoidOrNullOrUndefinedPrimaryExpression) {
			return visitor.visitVoidOrNullOrUndefinedPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ComputedPrimaryExpressionContext extends KipperParserRuleContext {
	public _labelASTKind: ParserASTMapSyntaxKind | undefined;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_computedPrimaryExpression;
	}
	public copyFrom(ctx: ComputedPrimaryExpressionContext): void {
		super.copyFrom(ctx);
		this._labelASTKind = ctx._labelASTKind;
	}
}
export class PassOncomputedPrimaryExpressionContext extends ComputedPrimaryExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ComputedPrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOncomputedPrimaryExpression) {
			listener.enterPassOncomputedPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOncomputedPrimaryExpression) {
			listener.exitPassOncomputedPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPassOncomputedPrimaryExpression) {
			return visitor.visitPassOncomputedPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ComputedPrimaryExpressionContext {
	public computedPrimaryExpression(): ComputedPrimaryExpressionContext {
		return this.getRuleContext(0, ComputedPrimaryExpressionContext);
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
	constructor(ctx: ComputedPrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExplicitCallFunctionCallExpressionContext extends ComputedPrimaryExpressionContext {
	public CallFunc(): TerminalNode {
		return this.getToken(KipperParser.CallFunc, 0);
	}
	public computedPrimaryExpression(): ComputedPrimaryExpressionContext {
		return this.getRuleContext(0, ComputedPrimaryExpressionContext);
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
	constructor(ctx: ComputedPrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterExplicitCallFunctionCallExpression) {
			listener.enterExplicitCallFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitExplicitCallFunctionCallExpression) {
			listener.exitExplicitCallFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitExplicitCallFunctionCallExpression) {
			return visitor.visitExplicitCallFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotNotationMemberAccessExpressionContext extends ComputedPrimaryExpressionContext {
	public computedPrimaryExpression(): ComputedPrimaryExpressionContext {
		return this.getRuleContext(0, ComputedPrimaryExpressionContext);
	}
	public dotNotation(): DotNotationContext {
		return this.getRuleContext(0, DotNotationContext);
	}
	constructor(ctx: ComputedPrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterDotNotationMemberAccessExpression) {
			listener.enterDotNotationMemberAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitDotNotationMemberAccessExpression) {
			listener.exitDotNotationMemberAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitDotNotationMemberAccessExpression) {
			return visitor.visitDotNotationMemberAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketNotationMemberAccessExpressionContext extends ComputedPrimaryExpressionContext {
	public computedPrimaryExpression(): ComputedPrimaryExpressionContext {
		return this.getRuleContext(0, ComputedPrimaryExpressionContext);
	}
	public bracketNotation(): BracketNotationContext {
		return this.getRuleContext(0, BracketNotationContext);
	}
	constructor(ctx: ComputedPrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterBracketNotationMemberAccessExpression) {
			listener.enterBracketNotationMemberAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitBracketNotationMemberAccessExpression) {
			listener.exitBracketNotationMemberAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitBracketNotationMemberAccessExpression) {
			return visitor.visitBracketNotationMemberAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SliceNotationMemberAccessExpressionContext extends ComputedPrimaryExpressionContext {
	public computedPrimaryExpression(): ComputedPrimaryExpressionContext {
		return this.getRuleContext(0, ComputedPrimaryExpressionContext);
	}
	public sliceNotation(): SliceNotationContext {
		return this.getRuleContext(0, SliceNotationContext);
	}
	constructor(ctx: ComputedPrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterSliceNotationMemberAccessExpression) {
			listener.enterSliceNotationMemberAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitSliceNotationMemberAccessExpression) {
			listener.exitSliceNotationMemberAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitSliceNotationMemberAccessExpression) {
			return visitor.visitSliceNotationMemberAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ArgumentExpressionListContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterArgumentExpressionList) {
			listener.enterArgumentExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitArgumentExpressionList) {
			listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class DotNotationContext extends KipperParserRuleContext {
	public Dot(): TerminalNode {
		return this.getToken(KipperParser.Dot, 0);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_dotNotation;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterDotNotation) {
			listener.enterDotNotation(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitDotNotation) {
			listener.exitDotNotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitDotNotation) {
			return visitor.visitDotNotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BracketNotationContext extends KipperParserRuleContext {
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
		return KipperParser.RULE_bracketNotation;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterBracketNotation) {
			listener.enterBracketNotation(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitBracketNotation) {
			listener.exitBracketNotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitBracketNotation) {
			return visitor.visitBracketNotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class SliceNotationContext extends KipperParserRuleContext {
	public sliceStart: boolean = false;
	public sliceEnd: boolean = false;
	public LeftBracket(): TerminalNode {
		return this.getToken(KipperParser.LeftBracket, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(KipperParser.RightBracket, 0);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_sliceNotation;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterSliceNotation) {
			listener.enterSliceNotation(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitSliceNotation) {
			listener.exitSliceNotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitSliceNotation) {
			return visitor.visitSliceNotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class PostfixExpressionContext extends KipperParserRuleContext {
	public computedPrimaryExpression(): ComputedPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, ComputedPrimaryExpressionContext);
	}
	public incrementOrDecrementPostfixExpression(): IncrementOrDecrementPostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, IncrementOrDecrementPostfixExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_postfixExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IncrementOrDecrementPostfixExpressionContext extends KipperParserRuleContext {
	public computedPrimaryExpression(): ComputedPrimaryExpressionContext {
		return this.getRuleContext(0, ComputedPrimaryExpressionContext);
	}
	public incrementOrDecrementOperator(): IncrementOrDecrementOperatorContext {
		return this.getRuleContext(0, IncrementOrDecrementOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_incrementOrDecrementPostfixExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIncrementOrDecrementPostfixExpression) {
			listener.enterIncrementOrDecrementPostfixExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIncrementOrDecrementPostfixExpression) {
			listener.exitIncrementOrDecrementPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIncrementOrDecrementPostfixExpression) {
			return visitor.visitIncrementOrDecrementPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryExpressionContext extends KipperParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public incrementOrDecrementUnaryExpression(): IncrementOrDecrementUnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, IncrementOrDecrementUnaryExpressionContext);
	}
	public operatorModifiedUnaryExpression(): OperatorModifiedUnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, OperatorModifiedUnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_unaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IncrementOrDecrementUnaryExpressionContext extends KipperParserRuleContext {
	public incrementOrDecrementOperator(): IncrementOrDecrementOperatorContext {
		return this.getRuleContext(0, IncrementOrDecrementOperatorContext);
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_incrementOrDecrementUnaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIncrementOrDecrementUnaryExpression) {
			listener.enterIncrementOrDecrementUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIncrementOrDecrementUnaryExpression) {
			listener.exitIncrementOrDecrementUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIncrementOrDecrementUnaryExpression) {
			return visitor.visitIncrementOrDecrementUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OperatorModifiedUnaryExpressionContext extends KipperParserRuleContext {
	public unaryOperator(): UnaryOperatorContext {
		return this.getRuleContext(0, UnaryOperatorContext);
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_operatorModifiedUnaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterOperatorModifiedUnaryExpression) {
			listener.enterOperatorModifiedUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitOperatorModifiedUnaryExpression) {
			listener.exitOperatorModifiedUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitOperatorModifiedUnaryExpression) {
			return visitor.visitOperatorModifiedUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IncrementOrDecrementOperatorContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIncrementOrDecrementOperator) {
			listener.enterIncrementOrDecrementOperator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIncrementOrDecrementOperator) {
			listener.exitIncrementOrDecrementOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIncrementOrDecrementOperator) {
			return visitor.visitIncrementOrDecrementOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class UnaryOperatorContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class CastOrConvertExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnCastOrConvertExpression) {
			listener.enterPassOnCastOrConvertExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnCastOrConvertExpression) {
			listener.exitPassOnCastOrConvertExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualCastOrConvertExpression) {
			listener.enterActualCastOrConvertExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualCastOrConvertExpression) {
			listener.exitActualCastOrConvertExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualCastOrConvertExpression) {
			return visitor.visitActualCastOrConvertExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MultiplicativeExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnMultiplicativeExpression) {
			listener.enterPassOnMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnMultiplicativeExpression) {
			listener.exitPassOnMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualMultiplicativeExpression) {
			listener.enterActualMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualMultiplicativeExpression) {
			listener.exitActualMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualMultiplicativeExpression) {
			return visitor.visitActualMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AdditiveExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnAdditiveExpression) {
			listener.enterPassOnAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnAdditiveExpression) {
			listener.exitPassOnAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualAdditiveExpression) {
			listener.enterActualAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualAdditiveExpression) {
			listener.exitActualAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualAdditiveExpression) {
			return visitor.visitActualAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class RelationalExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnRelationalExpression) {
			listener.enterPassOnRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnRelationalExpression) {
			listener.exitPassOnRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualRelationalExpression) {
			listener.enterActualRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualRelationalExpression) {
			listener.exitActualRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualRelationalExpression) {
			return visitor.visitActualRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class EqualityExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnEqualityExpression) {
			listener.enterPassOnEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnEqualityExpression) {
			listener.exitPassOnEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualEqualityExpression) {
			listener.enterActualEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualEqualityExpression) {
			listener.exitActualEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualEqualityExpression) {
			return visitor.visitActualEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LogicalAndExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnLogicalAndExpression) {
			listener.enterPassOnLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnLogicalAndExpression) {
			listener.exitPassOnLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualLogicalAndExpression) {
			listener.enterActualLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualLogicalAndExpression) {
			listener.exitActualLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualLogicalAndExpression) {
			return visitor.visitActualLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class LogicalOrExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnLogicalOrExpression) {
			listener.enterPassOnLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnLogicalOrExpression) {
			listener.exitPassOnLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualLogicalOrExpression) {
			listener.enterActualLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualLogicalOrExpression) {
			listener.exitActualLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualLogicalOrExpression) {
			return visitor.visitActualLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ConditionalExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnConditionalExpression) {
			listener.enterPassOnConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnConditionalExpression) {
			listener.exitPassOnConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
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
	public QuestionMark(): TerminalNode {
		return this.getToken(KipperParser.QuestionMark, 0);
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
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	constructor(ctx: ConditionalExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualConditionalExpression) {
			listener.enterActualConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualConditionalExpression) {
			listener.exitActualConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualConditionalExpression) {
			return visitor.visitActualConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssignmentExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnAssignmentExpression) {
			listener.enterPassOnAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnAssignmentExpression) {
			listener.exitPassOnAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPassOnAssignmentExpression) {
			return visitor.visitPassOnAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualAssignmentExpressionContext extends AssignmentExpressionContext {
	public computedPrimaryExpression(): ComputedPrimaryExpressionContext {
		return this.getRuleContext(0, ComputedPrimaryExpressionContext);
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualAssignmentExpression) {
			listener.enterActualAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualAssignmentExpression) {
			listener.exitActualAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualAssignmentExpression) {
			return visitor.visitActualAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class AssignmentOperatorContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExpressionContext extends KipperParserRuleContext {
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
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeSpecifierContext extends KipperParserRuleContext {
	public identifierTypeSpecifier(): IdentifierTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierTypeSpecifierContext);
	}
	public genericTypeSpecifier(): GenericTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, GenericTypeSpecifierContext);
	}
	public typeofTypeSpecifier(): TypeofTypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeofTypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_typeSpecifier;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IdentifierTypeSpecifierContext extends KipperParserRuleContext {
	public typeSpecifierIdentifier(): TypeSpecifierIdentifierContext {
		return this.getRuleContext(0, TypeSpecifierIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_identifierTypeSpecifier;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIdentifierTypeSpecifier) {
			listener.enterIdentifierTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIdentifierTypeSpecifier) {
			listener.exitIdentifierTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIdentifierTypeSpecifier) {
			return visitor.visitIdentifierTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GenericTypeSpecifierContext extends KipperParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_genericTypeSpecifier;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterGenericTypeSpecifier) {
			listener.enterGenericTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitGenericTypeSpecifier) {
			listener.exitGenericTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitGenericTypeSpecifier) {
			return visitor.visitGenericTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeofTypeSpecifierContext extends KipperParserRuleContext {
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_typeofTypeSpecifier;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterTypeofTypeSpecifier) {
			listener.enterTypeofTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitTypeofTypeSpecifier) {
			listener.exitTypeofTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitTypeofTypeSpecifier) {
			return visitor.visitTypeofTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeSpecifierIdentifierContext extends KipperParserRuleContext {
	public Identifier(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Identifier, 0);
	}
	public Null(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Null, 0);
	}
	public Undefined(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Undefined, 0);
	}
	public Void(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.Void, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_typeSpecifierIdentifier;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterTypeSpecifierIdentifier) {
			listener.enterTypeSpecifierIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitTypeSpecifierIdentifier) {
			listener.exitTypeSpecifierIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitTypeSpecifierIdentifier) {
			return visitor.visitTypeSpecifierIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
