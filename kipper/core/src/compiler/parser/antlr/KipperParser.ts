// Generated from ./KipperParser.g4 by ANTLR 4.9.0-SNAPSHOT

// Import the required class for the ctx super class, as well as the 'ASTKind' type defining all possible syntax
// kind values.
import { KipperParserRuleContext, ParserASTMapping, ASTKind } from "..";

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
	public static readonly FStringExpStart = 1;
	public static readonly BlockComment = 2;
	public static readonly LineComment = 3;
	public static readonly Const = 4;
	public static readonly Var = 5;
	public static readonly As = 6;
	public static readonly Spread = 7;
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
	public static readonly RetIndicator = 22;
	public static readonly True = 23;
	public static readonly False = 24;
	public static readonly Typeof = 25;
	public static readonly Void = 26;
	public static readonly Null = 27;
	public static readonly Undefined = 28;
	public static readonly Comma = 29;
	public static readonly SemiColon = 30;
	public static readonly QuestionMark = 31;
	public static readonly Colon = 32;
	public static readonly LeftParen = 33;
	public static readonly RightParen = 34;
	public static readonly LeftBracket = 35;
	public static readonly RightBracket = 36;
	public static readonly FStringExpEnd = 37;
	public static readonly LeftBrace = 38;
	public static readonly RightBrace = 39;
	public static readonly Plus = 40;
	public static readonly PlusPlus = 41;
	public static readonly Minus = 42;
	public static readonly MinusMinus = 43;
	public static readonly Star = 44;
	public static readonly Div = 45;
	public static readonly Mod = 46;
	public static readonly PowerTo = 47;
	public static readonly AndAnd = 48;
	public static readonly OrOr = 49;
	public static readonly Not = 50;
	public static readonly Assign = 51;
	public static readonly PlusAssign = 52;
	public static readonly MinusAssign = 53;
	public static readonly StarAssign = 54;
	public static readonly DivAssign = 55;
	public static readonly ModAssign = 56;
	public static readonly Equal = 57;
	public static readonly NotEqual = 58;
	public static readonly Less = 59;
	public static readonly LessEqual = 60;
	public static readonly Greater = 61;
	public static readonly GreaterEqual = 62;
	public static readonly Dot = 63;
	public static readonly Identifier = 64;
	public static readonly IntegerConstant = 65;
	public static readonly SingleQuoteStringLiteral = 66;
	public static readonly DoubleQuoteStringLiteral = 67;
	public static readonly FloatingConstant = 68;
	public static readonly Whitespace = 69;
	public static readonly Newline = 70;
	public static readonly FStringSingleQuoteStart = 71;
	public static readonly FStringDoubleQuoteStart = 72;
	public static readonly FStringSingleQuoteEnd = 73;
	public static readonly FStringSingleQuoteAtom = 74;
	public static readonly FStringDoubleQuoteEnd = 75;
	public static readonly FStringDoubleQuoteAtom = 76;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_translationUnit = 1;
	public static readonly RULE_externalItem = 2;
	public static readonly RULE_blockItemList = 3;
	public static readonly RULE_blockItem = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_variableDeclaration = 7;
	public static readonly RULE_storageTypeSpecifier = 8;
	public static readonly RULE_declarator = 9;
	public static readonly RULE_directDeclarator = 10;
	public static readonly RULE_initDeclarator = 11;
	public static readonly RULE_parameterList = 12;
	public static readonly RULE_parameterDeclaration = 13;
	public static readonly RULE_initializer = 14;
	public static readonly RULE_statement = 15;
	public static readonly RULE_compoundStatement = 16;
	public static readonly RULE_expressionStatement = 17;
	public static readonly RULE_selectionStatement = 18;
	public static readonly RULE_ifStatement = 19;
	public static readonly RULE_switchStatement = 20;
	public static readonly RULE_switchLabeledStatement = 21;
	public static readonly RULE_iterationStatement = 22;
	public static readonly RULE_forLoopIterationStatement = 23;
	public static readonly RULE_whileLoopIterationStatement = 24;
	public static readonly RULE_doWhileLoopIterationStatement = 25;
	public static readonly RULE_jumpStatement = 26;
	public static readonly RULE_returnStatement = 27;
	public static readonly RULE_primaryExpression = 28;
	public static readonly RULE_tangledPrimaryExpression = 29;
	public static readonly RULE_boolPrimaryExpression = 30;
	public static readonly RULE_identifierPrimaryExpression = 31;
	public static readonly RULE_identifier = 32;
	public static readonly RULE_stringPrimaryExpression = 33;
	public static readonly RULE_fStringPrimaryExpression = 34;
	public static readonly RULE_fStringSingleQuoteAtom = 35;
	public static readonly RULE_fStringDoubleQuoteAtom = 36;
	public static readonly RULE_numberPrimaryExpression = 37;
	public static readonly RULE_arrayLiteralPrimaryExpression = 38;
	public static readonly RULE_voidOrNullOrUndefinedPrimaryExpression = 39;
	public static readonly RULE_computedPrimaryExpression = 40;
	public static readonly RULE_argumentExpressionList = 41;
	public static readonly RULE_dotNotation = 42;
	public static readonly RULE_bracketNotation = 43;
	public static readonly RULE_sliceNotation = 44;
	public static readonly RULE_postfixExpression = 45;
	public static readonly RULE_incrementOrDecrementPostfixExpression = 46;
	public static readonly RULE_unaryExpression = 47;
	public static readonly RULE_incrementOrDecrementUnaryExpression = 48;
	public static readonly RULE_operatorModifiedUnaryExpression = 49;
	public static readonly RULE_incrementOrDecrementOperator = 50;
	public static readonly RULE_unaryOperator = 51;
	public static readonly RULE_castOrConvertExpression = 52;
	public static readonly RULE_multiplicativeExpression = 53;
	public static readonly RULE_additiveExpression = 54;
	public static readonly RULE_relationalExpression = 55;
	public static readonly RULE_equalityExpression = 56;
	public static readonly RULE_logicalAndExpression = 57;
	public static readonly RULE_logicalOrExpression = 58;
	public static readonly RULE_conditionalExpression = 59;
	public static readonly RULE_assignmentExpression = 60;
	public static readonly RULE_assignmentOperator = 61;
	public static readonly RULE_expression = 62;
	public static readonly RULE_typeSpecifier = 63;
	public static readonly RULE_identifierTypeSpecifier = 64;
	public static readonly RULE_genericTypeSpecifier = 65;
	public static readonly RULE_typeofTypeSpecifier = 66;
	public static readonly RULE_typeSpecifierIdentifier = 67;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit",
		"translationUnit",
		"externalItem",
		"blockItemList",
		"blockItem",
		"declaration",
		"functionDeclaration",
		"variableDeclaration",
		"storageTypeSpecifier",
		"declarator",
		"directDeclarator",
		"initDeclarator",
		"parameterList",
		"parameterDeclaration",
		"initializer",
		"statement",
		"compoundStatement",
		"expressionStatement",
		"selectionStatement",
		"ifStatement",
		"switchStatement",
		"switchLabeledStatement",
		"iterationStatement",
		"forLoopIterationStatement",
		"whileLoopIterationStatement",
		"doWhileLoopIterationStatement",
		"jumpStatement",
		"returnStatement",
		"primaryExpression",
		"tangledPrimaryExpression",
		"boolPrimaryExpression",
		"identifierPrimaryExpression",
		"identifier",
		"stringPrimaryExpression",
		"fStringPrimaryExpression",
		"fStringSingleQuoteAtom",
		"fStringDoubleQuoteAtom",
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
		undefined,
		undefined,
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
		undefined,
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
		"FStringExpStart",
		"BlockComment",
		"LineComment",
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
		"FStringExpEnd",
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
		"SingleQuoteStringLiteral",
		"DoubleQuoteStringLiteral",
		"FloatingConstant",
		"Whitespace",
		"Newline",
		"FStringSingleQuoteStart",
		"FStringDoubleQuoteStart",
		"FStringSingleQuoteEnd",
		"FStringSingleQuoteAtom",
		"FStringDoubleQuoteEnd",
		"FStringDoubleQuoteAtom",
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
				this.state = 137;
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
								(1 << KipperParser.SemiColon))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.LeftParen - 33)) |
								(1 << (KipperParser.LeftBracket - 33)) |
								(1 << (KipperParser.LeftBrace - 33)) |
								(1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)))) !==
							0) ||
					(((_la - 65) & ~0x1f) === 0 &&
						((1 << (_la - 65)) &
							((1 << (KipperParser.IntegerConstant - 65)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.FloatingConstant - 65)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 65)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 65)))) !==
							0)
				) {
					{
						this.state = 136;
						this.translationUnit();
					}
				}

				this.state = 139;
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
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
						{
							this.state = 141;
							this.externalItem();
						}
					}
					this.state = 144;
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
								(1 << KipperParser.SemiColon))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.LeftParen - 33)) |
								(1 << (KipperParser.LeftBracket - 33)) |
								(1 << (KipperParser.LeftBrace - 33)) |
								(1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)))) !==
							0) ||
					(((_la - 65) & ~0x1f) === 0 &&
						((1 << (_la - 65)) &
							((1 << (KipperParser.IntegerConstant - 65)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.FloatingConstant - 65)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 65)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 65)))) !==
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
				this.state = 146;
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
	public blockItemList(): BlockItemListContext {
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KipperParser.RULE_blockItemList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 149;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								{
									this.state = 148;
									this.blockItem();
								}
							}
							break;
						default:
							throw new NoViableAltException(this);
					}
					this.state = 151;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
		this.enterRule(_localctx, 8, KipperParser.RULE_blockItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 156;
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
					case KipperParser.SingleQuoteStringLiteral:
					case KipperParser.DoubleQuoteStringLiteral:
					case KipperParser.FloatingConstant:
					case KipperParser.FStringSingleQuoteStart:
					case KipperParser.FStringDoubleQuoteStart:
						{
							this.state = 153;
							this.statement();
						}
						break;
					case KipperParser.Const:
					case KipperParser.Var:
					case KipperParser.DefFunc:
						{
							this.state = 154;
							this.declaration();
						}
						break;
					case KipperParser.SemiColon:
						{
							this.state = 155;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KipperParser.RULE_declaration);
		try {
			this.state = 165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Const:
				case KipperParser.Var:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 158;
						this.variableDeclaration();
						this.state = 159;
						this.match(KipperParser.SemiColon);
					}
					break;
				case KipperParser.DefFunc:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 161;
						this.functionDeclaration();
						this.state = 163;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
							case 1:
								{
									this.state = 162;
									this.match(KipperParser.SemiColon);
								}
								break;
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KipperParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 167;
				this.match(KipperParser.DefFunc);
				this.state = 168;
				this.declarator();
				this.state = 169;
				this.match(KipperParser.LeftParen);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 170;
						this.parameterList();
					}
				}

				this.state = 173;
				this.match(KipperParser.RightParen);
				this.state = 174;
				this.match(KipperParser.RetIndicator);
				this.state = 175;
				this.typeSpecifier();
				this.state = 177;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
					case 1:
						{
							this.state = 176;
							this.compoundStatement();
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, KipperParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 179;
				this.storageTypeSpecifier();
				this.state = 180;
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
	public storageTypeSpecifier(): StorageTypeSpecifierContext {
		let _localctx: StorageTypeSpecifierContext = new StorageTypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KipperParser.RULE_storageTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 182;
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 184;
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
		this.enterRule(_localctx, 20, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 186;
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
	public initDeclarator(): InitDeclaratorContext {
		let _localctx: InitDeclaratorContext = new InitDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, KipperParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 188;
				this.declarator();
				this.state = 189;
				this.match(KipperParser.Colon);
				this.state = 190;
				this.typeSpecifier();
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Assign) {
					{
						this.state = 191;
						this.match(KipperParser.Assign);
						this.state = 192;
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
		this.enterRule(_localctx, 24, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 195;
				this.parameterDeclaration();
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 196;
							this.match(KipperParser.Comma);
							this.state = 197;
							this.parameterDeclaration();
						}
					}
					this.state = 202;
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
		this.enterRule(_localctx, 26, KipperParser.RULE_parameterDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 203;
				this.declarator();
				this.state = 204;
				this.match(KipperParser.Colon);
				this.state = 205;
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
		this.enterRule(_localctx, 28, KipperParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 207;
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
		this.enterRule(_localctx, 30, KipperParser.RULE_statement);
		try {
			this.state = 215;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftBrace:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 209;
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
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
				case KipperParser.FloatingConstant:
				case KipperParser.FStringSingleQuoteStart:
				case KipperParser.FStringDoubleQuoteStart:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 210;
						this.expressionStatement();
					}
					break;
				case KipperParser.Switch:
				case KipperParser.If:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 211;
						this.selectionStatement();
					}
					break;
				case KipperParser.Do:
				case KipperParser.While:
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 212;
						this.iterationStatement();
					}
					break;
				case KipperParser.Break:
				case KipperParser.Continue:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 213;
						this.jumpStatement();
					}
					break;
				case KipperParser.Return:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 214;
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
		this.enterRule(_localctx, 32, KipperParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 217;
				this.match(KipperParser.LeftBrace);
				this.state = 219;
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
								(1 << KipperParser.SemiColon))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.LeftParen - 33)) |
								(1 << (KipperParser.LeftBracket - 33)) |
								(1 << (KipperParser.LeftBrace - 33)) |
								(1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)))) !==
							0) ||
					(((_la - 65) & ~0x1f) === 0 &&
						((1 << (_la - 65)) &
							((1 << (KipperParser.IntegerConstant - 65)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.FloatingConstant - 65)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 65)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 65)))) !==
							0)
				) {
					{
						this.state = 218;
						this.blockItemList();
					}
				}

				this.state = 221;
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, KipperParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 223;
				this.expression();
				this.state = 224;
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
			this.state = 228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.If:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 226;
						this.ifStatement();
					}
					break;
				case KipperParser.Switch:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 227;
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
				this.state = 230;
				this.match(KipperParser.If);
				this.state = 231;
				this.match(KipperParser.LeftParen);
				this.state = 232;
				this.expression();
				this.state = 233;
				this.match(KipperParser.RightParen);
				this.state = 234;
				this.statement();
				this.state = 237;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
					case 1:
						{
							this.state = 235;
							this.match(KipperParser.Else);
							this.state = 236;
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
				this.state = 239;
				this.match(KipperParser.Switch);
				this.state = 240;
				this.match(KipperParser.LeftParen);
				this.state = 241;
				this.expression();
				this.state = 242;
				this.match(KipperParser.RightParen);
				this.state = 243;
				this.match(KipperParser.LeftBrace);
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Case || _la === KipperParser.Default) {
					{
						{
							this.state = 244;
							this.switchLabeledStatement();
						}
					}
					this.state = 249;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 250;
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
			this.state = 260;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Case:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 252;
						this.match(KipperParser.Case);
						this.state = 253;
						this.expression();
						this.state = 254;
						this.match(KipperParser.Colon);
						this.state = 255;
						this.statement();
					}
					break;
				case KipperParser.Default:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 257;
						this.match(KipperParser.Default);
						this.state = 258;
						this.match(KipperParser.Colon);
						this.state = 259;
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
			this.state = 265;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 262;
						this.forLoopIterationStatement();
					}
					break;
				case KipperParser.While:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 263;
						this.whileLoopIterationStatement();
					}
					break;
				case KipperParser.Do:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 264;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 267;
				this.match(KipperParser.For);
				this.state = 268;
				this.match(KipperParser.LeftParen);
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.Const) |
								(1 << KipperParser.Var) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False) |
								(1 << KipperParser.Void) |
								(1 << KipperParser.Null) |
								(1 << KipperParser.Undefined))) !==
							0) ||
					(((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.LeftParen - 33)) |
								(1 << (KipperParser.LeftBracket - 33)) |
								(1 << (KipperParser.Plus - 33)) |
								(1 << (KipperParser.PlusPlus - 33)) |
								(1 << (KipperParser.Minus - 33)) |
								(1 << (KipperParser.MinusMinus - 33)) |
								(1 << (KipperParser.Not - 33)) |
								(1 << (KipperParser.Identifier - 33)))) !==
							0) ||
					(((_la - 65) & ~0x1f) === 0 &&
						((1 << (_la - 65)) &
							((1 << (KipperParser.IntegerConstant - 65)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 65)) |
								(1 << (KipperParser.FloatingConstant - 65)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 65)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 65)))) !==
							0)
				) {
					{
						this.state = 271;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case KipperParser.Const:
							case KipperParser.Var:
								{
									this.state = 269;
									this.variableDeclaration();
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
							case KipperParser.SingleQuoteStringLiteral:
							case KipperParser.DoubleQuoteStringLiteral:
							case KipperParser.FloatingConstant:
							case KipperParser.FStringSingleQuoteStart:
							case KipperParser.FStringDoubleQuoteStart:
								{
									this.state = 270;
									this.expression();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
						_localctx._forDeclaration = true;
					}
				}

				this.state = 277;
				this.match(KipperParser.SemiColon);
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 21) & ~0x1f) === 0 &&
						((1 << (_la - 21)) &
							((1 << (KipperParser.CallFunc - 21)) |
								(1 << (KipperParser.True - 21)) |
								(1 << (KipperParser.False - 21)) |
								(1 << (KipperParser.Void - 21)) |
								(1 << (KipperParser.Null - 21)) |
								(1 << (KipperParser.Undefined - 21)) |
								(1 << (KipperParser.LeftParen - 21)) |
								(1 << (KipperParser.LeftBracket - 21)) |
								(1 << (KipperParser.Plus - 21)) |
								(1 << (KipperParser.PlusPlus - 21)) |
								(1 << (KipperParser.Minus - 21)) |
								(1 << (KipperParser.MinusMinus - 21)) |
								(1 << (KipperParser.Not - 21)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.Identifier - 64)) |
								(1 << (KipperParser.IntegerConstant - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.FloatingConstant - 64)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
							0)
				) {
					{
						this.state = 278;
						this.expression();
						_localctx._forCondition = true;
					}
				}

				this.state = 283;
				this.match(KipperParser.SemiColon);
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 21) & ~0x1f) === 0 &&
						((1 << (_la - 21)) &
							((1 << (KipperParser.CallFunc - 21)) |
								(1 << (KipperParser.True - 21)) |
								(1 << (KipperParser.False - 21)) |
								(1 << (KipperParser.Void - 21)) |
								(1 << (KipperParser.Null - 21)) |
								(1 << (KipperParser.Undefined - 21)) |
								(1 << (KipperParser.LeftParen - 21)) |
								(1 << (KipperParser.LeftBracket - 21)) |
								(1 << (KipperParser.Plus - 21)) |
								(1 << (KipperParser.PlusPlus - 21)) |
								(1 << (KipperParser.Minus - 21)) |
								(1 << (KipperParser.MinusMinus - 21)) |
								(1 << (KipperParser.Not - 21)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.Identifier - 64)) |
								(1 << (KipperParser.IntegerConstant - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.FloatingConstant - 64)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
							0)
				) {
					{
						this.state = 284;
						this.expression();
						_localctx._forIterationExp = true;
					}
				}

				this.state = 289;
				this.match(KipperParser.RightParen);
				this.state = 290;
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
				this.state = 292;
				this.match(KipperParser.While);
				this.state = 293;
				this.match(KipperParser.LeftParen);
				this.state = 294;
				this.expression();
				this.state = 295;
				this.match(KipperParser.RightParen);
				this.state = 296;
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
				this.state = 298;
				this.match(KipperParser.Do);
				this.state = 299;
				this.statement();
				this.state = 300;
				this.match(KipperParser.While);
				this.state = 301;
				this.match(KipperParser.LeftParen);
				this.state = 302;
				this.expression();
				this.state = 303;
				this.match(KipperParser.RightParen);
				this.state = 304;
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
	public jumpStatement(): JumpStatementContext {
		let _localctx: JumpStatementContext = new JumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 306;
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
				this.state = 307;
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
		this.enterRule(_localctx, 54, KipperParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 309;
				this.match(KipperParser.Return);
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 21) & ~0x1f) === 0 &&
						((1 << (_la - 21)) &
							((1 << (KipperParser.CallFunc - 21)) |
								(1 << (KipperParser.True - 21)) |
								(1 << (KipperParser.False - 21)) |
								(1 << (KipperParser.Void - 21)) |
								(1 << (KipperParser.Null - 21)) |
								(1 << (KipperParser.Undefined - 21)) |
								(1 << (KipperParser.LeftParen - 21)) |
								(1 << (KipperParser.LeftBracket - 21)) |
								(1 << (KipperParser.Plus - 21)) |
								(1 << (KipperParser.PlusPlus - 21)) |
								(1 << (KipperParser.Minus - 21)) |
								(1 << (KipperParser.MinusMinus - 21)) |
								(1 << (KipperParser.Not - 21)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.Identifier - 64)) |
								(1 << (KipperParser.IntegerConstant - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.FloatingConstant - 64)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
							0)
				) {
					{
						this.state = 310;
						this.expression();
					}
				}

				this.state = 313;
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
		this.enterRule(_localctx, 56, KipperParser.RULE_primaryExpression);
		try {
			this.state = 323;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.LeftParen:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 315;
						this.tangledPrimaryExpression();
					}
					break;
				case KipperParser.True:
				case KipperParser.False:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 316;
						this.boolPrimaryExpression();
					}
					break;
				case KipperParser.Identifier:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 317;
						this.identifierPrimaryExpression();
					}
					break;
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 318;
						this.stringPrimaryExpression();
					}
					break;
				case KipperParser.FStringSingleQuoteStart:
				case KipperParser.FStringDoubleQuoteStart:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 319;
						this.fStringPrimaryExpression();
					}
					break;
				case KipperParser.IntegerConstant:
				case KipperParser.FloatingConstant:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 320;
						this.numberPrimaryExpression();
					}
					break;
				case KipperParser.LeftBracket:
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 321;
						this.arrayLiteralPrimaryExpression();
					}
					break;
				case KipperParser.Void:
				case KipperParser.Null:
				case KipperParser.Undefined:
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 322;
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
		this.enterRule(_localctx, 58, KipperParser.RULE_tangledPrimaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 325;
				this.match(KipperParser.LeftParen);
				this.state = 326;
				this.expression();
				this.state = 327;
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
		this.enterRule(_localctx, 60, KipperParser.RULE_boolPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 329;
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
		this.enterRule(_localctx, 62, KipperParser.RULE_identifierPrimaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 331;
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
		this.enterRule(_localctx, 64, KipperParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 333;
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
		this.enterRule(_localctx, 66, KipperParser.RULE_stringPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 335;
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
		this.enterRule(_localctx, 68, KipperParser.RULE_fStringPrimaryExpression);
		let _la: number;
		try {
			this.state = 353;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.FStringSingleQuoteStart:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 337;
						this.match(KipperParser.FStringSingleQuoteStart);
						this.state = 341;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.FStringExpStart || _la === KipperParser.FStringSingleQuoteAtom) {
							{
								{
									this.state = 338;
									this.fStringSingleQuoteAtom();
								}
							}
							this.state = 343;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 344;
						this.match(KipperParser.FStringSingleQuoteEnd);
					}
					break;
				case KipperParser.FStringDoubleQuoteStart:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 345;
						this.match(KipperParser.FStringDoubleQuoteStart);
						this.state = 349;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.FStringExpStart || _la === KipperParser.FStringDoubleQuoteAtom) {
							{
								{
									this.state = 346;
									this.fStringDoubleQuoteAtom();
								}
							}
							this.state = 351;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 352;
						this.match(KipperParser.FStringDoubleQuoteEnd);
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
	public fStringSingleQuoteAtom(): FStringSingleQuoteAtomContext {
		let _localctx: FStringSingleQuoteAtomContext = new FStringSingleQuoteAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, KipperParser.RULE_fStringSingleQuoteAtom);
		let _la: number;
		try {
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.FStringSingleQuoteAtom:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 355;
						this.match(KipperParser.FStringSingleQuoteAtom);
					}
					break;
				case KipperParser.FStringExpStart:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 356;
						this.match(KipperParser.FStringExpStart);
						this.state = 358;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							(((_la - 21) & ~0x1f) === 0 &&
								((1 << (_la - 21)) &
									((1 << (KipperParser.CallFunc - 21)) |
										(1 << (KipperParser.True - 21)) |
										(1 << (KipperParser.False - 21)) |
										(1 << (KipperParser.Void - 21)) |
										(1 << (KipperParser.Null - 21)) |
										(1 << (KipperParser.Undefined - 21)) |
										(1 << (KipperParser.LeftParen - 21)) |
										(1 << (KipperParser.LeftBracket - 21)) |
										(1 << (KipperParser.Plus - 21)) |
										(1 << (KipperParser.PlusPlus - 21)) |
										(1 << (KipperParser.Minus - 21)) |
										(1 << (KipperParser.MinusMinus - 21)) |
										(1 << (KipperParser.Not - 21)))) !==
									0) ||
							(((_la - 64) & ~0x1f) === 0 &&
								((1 << (_la - 64)) &
									((1 << (KipperParser.Identifier - 64)) |
										(1 << (KipperParser.IntegerConstant - 64)) |
										(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
										(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
										(1 << (KipperParser.FloatingConstant - 64)) |
										(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
										(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
									0)
						) {
							{
								this.state = 357;
								this.expression();
							}
						}

						this.state = 360;
						this.match(KipperParser.FStringExpEnd);
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
	public fStringDoubleQuoteAtom(): FStringDoubleQuoteAtomContext {
		let _localctx: FStringDoubleQuoteAtomContext = new FStringDoubleQuoteAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, KipperParser.RULE_fStringDoubleQuoteAtom);
		let _la: number;
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.FStringDoubleQuoteAtom:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 363;
						this.match(KipperParser.FStringDoubleQuoteAtom);
					}
					break;
				case KipperParser.FStringExpStart:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 364;
						this.match(KipperParser.FStringExpStart);
						this.state = 366;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							(((_la - 21) & ~0x1f) === 0 &&
								((1 << (_la - 21)) &
									((1 << (KipperParser.CallFunc - 21)) |
										(1 << (KipperParser.True - 21)) |
										(1 << (KipperParser.False - 21)) |
										(1 << (KipperParser.Void - 21)) |
										(1 << (KipperParser.Null - 21)) |
										(1 << (KipperParser.Undefined - 21)) |
										(1 << (KipperParser.LeftParen - 21)) |
										(1 << (KipperParser.LeftBracket - 21)) |
										(1 << (KipperParser.Plus - 21)) |
										(1 << (KipperParser.PlusPlus - 21)) |
										(1 << (KipperParser.Minus - 21)) |
										(1 << (KipperParser.MinusMinus - 21)) |
										(1 << (KipperParser.Not - 21)))) !==
									0) ||
							(((_la - 64) & ~0x1f) === 0 &&
								((1 << (_la - 64)) &
									((1 << (KipperParser.Identifier - 64)) |
										(1 << (KipperParser.IntegerConstant - 64)) |
										(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
										(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
										(1 << (KipperParser.FloatingConstant - 64)) |
										(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
										(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
									0)
						) {
							{
								this.state = 365;
								this.expression();
							}
						}

						this.state = 368;
						this.match(KipperParser.FStringExpEnd);
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
	public numberPrimaryExpression(): NumberPrimaryExpressionContext {
		let _localctx: NumberPrimaryExpressionContext = new NumberPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, KipperParser.RULE_numberPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 371;
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
		this.enterRule(_localctx, 76, KipperParser.RULE_arrayLiteralPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 373;
				this.match(KipperParser.LeftBracket);
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 21) & ~0x1f) === 0 &&
						((1 << (_la - 21)) &
							((1 << (KipperParser.CallFunc - 21)) |
								(1 << (KipperParser.True - 21)) |
								(1 << (KipperParser.False - 21)) |
								(1 << (KipperParser.Void - 21)) |
								(1 << (KipperParser.Null - 21)) |
								(1 << (KipperParser.Undefined - 21)) |
								(1 << (KipperParser.LeftParen - 21)) |
								(1 << (KipperParser.LeftBracket - 21)) |
								(1 << (KipperParser.Plus - 21)) |
								(1 << (KipperParser.PlusPlus - 21)) |
								(1 << (KipperParser.Minus - 21)) |
								(1 << (KipperParser.MinusMinus - 21)) |
								(1 << (KipperParser.Not - 21)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.Identifier - 64)) |
								(1 << (KipperParser.IntegerConstant - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.FloatingConstant - 64)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
							0)
				) {
					{
						this.state = 374;
						this.expression();
						this.state = 379;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Comma) {
							{
								{
									this.state = 375;
									this.match(KipperParser.Comma);
									this.state = 376;
									this.expression();
								}
							}
							this.state = 381;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 384;
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
		this.enterRule(_localctx, 78, KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 386;
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
		let _startState: number = 80;
		this.enterRecursionRule(_localctx, 80, KipperParser.RULE_computedPrimaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 399;
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
					case KipperParser.SingleQuoteStringLiteral:
					case KipperParser.DoubleQuoteStringLiteral:
					case KipperParser.FloatingConstant:
					case KipperParser.FStringSingleQuoteStart:
					case KipperParser.FStringDoubleQuoteStart:
						{
							_localctx = new PassOncomputedPrimaryExpressionContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;

							this.state = 389;
							this.primaryExpression();
						}
						break;
					case KipperParser.CallFunc:
						{
							_localctx = new ExplicitCallFunctionCallExpressionContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 390;
							this.match(KipperParser.CallFunc);
							this.state = 391;
							this.computedPrimaryExpression(0);
							this.state = 392;
							this.match(KipperParser.LeftParen);
							this.state = 394;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								(((_la - 21) & ~0x1f) === 0 &&
									((1 << (_la - 21)) &
										((1 << (KipperParser.CallFunc - 21)) |
											(1 << (KipperParser.True - 21)) |
											(1 << (KipperParser.False - 21)) |
											(1 << (KipperParser.Void - 21)) |
											(1 << (KipperParser.Null - 21)) |
											(1 << (KipperParser.Undefined - 21)) |
											(1 << (KipperParser.LeftParen - 21)) |
											(1 << (KipperParser.LeftBracket - 21)) |
											(1 << (KipperParser.Plus - 21)) |
											(1 << (KipperParser.PlusPlus - 21)) |
											(1 << (KipperParser.Minus - 21)) |
											(1 << (KipperParser.MinusMinus - 21)) |
											(1 << (KipperParser.Not - 21)))) !==
										0) ||
								(((_la - 64) & ~0x1f) === 0 &&
									((1 << (_la - 64)) &
										((1 << (KipperParser.Identifier - 64)) |
											(1 << (KipperParser.IntegerConstant - 64)) |
											(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
											(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
											(1 << (KipperParser.FloatingConstant - 64)) |
											(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
											(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
										0)
							) {
								{
									this.state = 393;
									this.argumentExpressionList();
								}
							}

							this.state = 396;
							this.match(KipperParser.RightParen);
							_localctx._labelASTKind = ParserASTMapping.RULE_functionCallExpression;
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 422;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							this.state = 420;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
								case 1:
									{
										_localctx = new FunctionCallExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 401;
										if (!this.precpred(this._ctx, 5)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
										}
										this.state = 402;
										this.match(KipperParser.LeftParen);
										this.state = 404;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (
											(((_la - 21) & ~0x1f) === 0 &&
												((1 << (_la - 21)) &
													((1 << (KipperParser.CallFunc - 21)) |
														(1 << (KipperParser.True - 21)) |
														(1 << (KipperParser.False - 21)) |
														(1 << (KipperParser.Void - 21)) |
														(1 << (KipperParser.Null - 21)) |
														(1 << (KipperParser.Undefined - 21)) |
														(1 << (KipperParser.LeftParen - 21)) |
														(1 << (KipperParser.LeftBracket - 21)) |
														(1 << (KipperParser.Plus - 21)) |
														(1 << (KipperParser.PlusPlus - 21)) |
														(1 << (KipperParser.Minus - 21)) |
														(1 << (KipperParser.MinusMinus - 21)) |
														(1 << (KipperParser.Not - 21)))) !==
													0) ||
											(((_la - 64) & ~0x1f) === 0 &&
												((1 << (_la - 64)) &
													((1 << (KipperParser.Identifier - 64)) |
														(1 << (KipperParser.IntegerConstant - 64)) |
														(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
														(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
														(1 << (KipperParser.FloatingConstant - 64)) |
														(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
														(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
													0)
										) {
											{
												this.state = 403;
												this.argumentExpressionList();
											}
										}

										this.state = 406;
										this.match(KipperParser.RightParen);
										_localctx._labelASTKind = ParserASTMapping.RULE_functionCallExpression;
									}
									break;

								case 2:
									{
										_localctx = new DotNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 408;
										if (!this.precpred(this._ctx, 3)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
										}
										this.state = 409;
										this.dotNotation();
										_localctx._labelASTKind = ParserASTMapping.RULE_memberAccessExpression;
									}
									break;

								case 3:
									{
										_localctx = new BracketNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 412;
										if (!this.precpred(this._ctx, 2)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
										}
										this.state = 413;
										this.bracketNotation();
										_localctx._labelASTKind = ParserASTMapping.RULE_memberAccessExpression;
									}
									break;

								case 4:
									{
										_localctx = new SliceNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 416;
										if (!this.precpred(this._ctx, 1)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
										}
										this.state = 417;
										this.sliceNotation();
										_localctx._labelASTKind = ParserASTMapping.RULE_memberAccessExpression;
									}
									break;
							}
						}
					}
					this.state = 424;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
		this.enterRule(_localctx, 82, KipperParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 425;
				this.assignmentExpression();
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 426;
							this.match(KipperParser.Comma);
							this.state = 427;
							this.assignmentExpression();
						}
					}
					this.state = 432;
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
		this.enterRule(_localctx, 84, KipperParser.RULE_dotNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 433;
				this.match(KipperParser.Dot);
				this.state = 434;
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
		this.enterRule(_localctx, 86, KipperParser.RULE_bracketNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 436;
				this.match(KipperParser.LeftBracket);
				this.state = 437;
				this.expression();
				this.state = 438;
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
		this.enterRule(_localctx, 88, KipperParser.RULE_sliceNotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 440;
				this.match(KipperParser.LeftBracket);
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 21) & ~0x1f) === 0 &&
						((1 << (_la - 21)) &
							((1 << (KipperParser.CallFunc - 21)) |
								(1 << (KipperParser.True - 21)) |
								(1 << (KipperParser.False - 21)) |
								(1 << (KipperParser.Void - 21)) |
								(1 << (KipperParser.Null - 21)) |
								(1 << (KipperParser.Undefined - 21)) |
								(1 << (KipperParser.LeftParen - 21)) |
								(1 << (KipperParser.LeftBracket - 21)) |
								(1 << (KipperParser.Plus - 21)) |
								(1 << (KipperParser.PlusPlus - 21)) |
								(1 << (KipperParser.Minus - 21)) |
								(1 << (KipperParser.MinusMinus - 21)) |
								(1 << (KipperParser.Not - 21)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.Identifier - 64)) |
								(1 << (KipperParser.IntegerConstant - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.FloatingConstant - 64)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
							0)
				) {
					{
						this.state = 441;
						this.expression();
						_localctx.sliceStart = true;
					}
				}

				this.state = 446;
				this.match(KipperParser.Colon);
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 21) & ~0x1f) === 0 &&
						((1 << (_la - 21)) &
							((1 << (KipperParser.CallFunc - 21)) |
								(1 << (KipperParser.True - 21)) |
								(1 << (KipperParser.False - 21)) |
								(1 << (KipperParser.Void - 21)) |
								(1 << (KipperParser.Null - 21)) |
								(1 << (KipperParser.Undefined - 21)) |
								(1 << (KipperParser.LeftParen - 21)) |
								(1 << (KipperParser.LeftBracket - 21)) |
								(1 << (KipperParser.Plus - 21)) |
								(1 << (KipperParser.PlusPlus - 21)) |
								(1 << (KipperParser.Minus - 21)) |
								(1 << (KipperParser.MinusMinus - 21)) |
								(1 << (KipperParser.Not - 21)))) !==
							0) ||
					(((_la - 64) & ~0x1f) === 0 &&
						((1 << (_la - 64)) &
							((1 << (KipperParser.Identifier - 64)) |
								(1 << (KipperParser.IntegerConstant - 64)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 64)) |
								(1 << (KipperParser.FloatingConstant - 64)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 64)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 64)))) !==
							0)
				) {
					{
						this.state = 447;
						this.expression();
						_localctx.sliceEnd = true;
					}
				}

				this.state = 452;
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
		this.enterRule(_localctx, 90, KipperParser.RULE_postfixExpression);
		try {
			this.state = 456;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 454;
						this.computedPrimaryExpression(0);
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 455;
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
		this.enterRule(_localctx, 92, KipperParser.RULE_incrementOrDecrementPostfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 458;
				this.computedPrimaryExpression(0);
				this.state = 459;
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
		this.enterRule(_localctx, 94, KipperParser.RULE_unaryExpression);
		try {
			this.state = 464;
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
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
				case KipperParser.FloatingConstant:
				case KipperParser.FStringSingleQuoteStart:
				case KipperParser.FStringDoubleQuoteStart:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 461;
						this.postfixExpression();
					}
					break;
				case KipperParser.PlusPlus:
				case KipperParser.MinusMinus:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 462;
						this.incrementOrDecrementUnaryExpression();
					}
					break;
				case KipperParser.Plus:
				case KipperParser.Minus:
				case KipperParser.Not:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 463;
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
		this.enterRule(_localctx, 96, KipperParser.RULE_incrementOrDecrementUnaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 466;
				this.incrementOrDecrementOperator();
				this.state = 467;
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
		this.enterRule(_localctx, 98, KipperParser.RULE_operatorModifiedUnaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 469;
				this.unaryOperator();
				this.state = 470;
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
		this.enterRule(_localctx, 100, KipperParser.RULE_incrementOrDecrementOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 472;
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
		this.enterRule(_localctx, 102, KipperParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 474;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 40) & ~0x1f) === 0 &&
						((1 << (_la - 40)) &
							((1 << (KipperParser.Plus - 40)) | (1 << (KipperParser.Minus - 40)) | (1 << (KipperParser.Not - 40)))) !==
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
		this.enterRule(_localctx, 104, KipperParser.RULE_castOrConvertExpression);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
				case 1:
					_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 476;
						this.unaryExpression();
					}
					break;

				case 2:
					_localctx = new ActualCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 477;
						this.unaryExpression();
						this.state = 478;
						this.match(KipperParser.As);
						this.state = 479;
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
		let _startState: number = 106;
		this.enterRecursionRule(_localctx, 106, KipperParser.RULE_multiplicativeExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnMultiplicativeExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 484;
					this.castOrConvertExpression();
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 491;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
								this.state = 486;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 487;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 44) & ~0x1f) === 0 &&
										((1 << (_la - 44)) &
											((1 << (KipperParser.Star - 44)) |
												(1 << (KipperParser.Div - 44)) |
												(1 << (KipperParser.Mod - 44)) |
												(1 << (KipperParser.PowerTo - 44)))) !==
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
								this.state = 488;
								this.castOrConvertExpression();
							}
						}
					}
					this.state = 493;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
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
		let _startState: number = 108;
		this.enterRecursionRule(_localctx, 108, KipperParser.RULE_additiveExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnAdditiveExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 495;
					this.multiplicativeExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 502;
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
								_localctx = new ActualAdditiveExpressionContext(
									new AdditiveExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_additiveExpression);
								this.state = 497;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 498;
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
								this.state = 499;
								this.multiplicativeExpression(0);
							}
						}
					}
					this.state = 504;
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
		let _startState: number = 110;
		this.enterRecursionRule(_localctx, 110, KipperParser.RULE_relationalExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnRelationalExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 506;
					this.additiveExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 513;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
								this.state = 508;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 509;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 59) & ~0x1f) === 0 &&
										((1 << (_la - 59)) &
											((1 << (KipperParser.Less - 59)) |
												(1 << (KipperParser.LessEqual - 59)) |
												(1 << (KipperParser.Greater - 59)) |
												(1 << (KipperParser.GreaterEqual - 59)))) !==
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
								this.state = 510;
								this.additiveExpression(0);
							}
						}
					}
					this.state = 515;
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
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, KipperParser.RULE_equalityExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnEqualityExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 517;
					this.relationalExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 524;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
								this.state = 519;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 520;
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
								this.state = 521;
								this.relationalExpression(0);
							}
						}
					}
					this.state = 526;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
		let _startState: number = 114;
		this.enterRecursionRule(_localctx, 114, KipperParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalAndExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 528;
					this.equalityExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 535;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
								this.state = 530;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 531;
								this.match(KipperParser.AndAnd);
								this.state = 532;
								this.equalityExpression(0);
							}
						}
					}
					this.state = 537;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
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
		let _startState: number = 116;
		this.enterRecursionRule(_localctx, 116, KipperParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalOrExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 539;
					this.logicalAndExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 546;
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
								_localctx = new ActualLogicalOrExpressionContext(
									new LogicalOrExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_logicalOrExpression);
								this.state = 541;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 542;
								this.match(KipperParser.OrOr);
								this.state = 543;
								this.logicalAndExpression(0);
							}
						}
					}
					this.state = 548;
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
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, KipperParser.RULE_conditionalExpression);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
				case 1:
					_localctx = new PassOnConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 549;
						this.logicalOrExpression(0);
					}
					break;

				case 2:
					_localctx = new ActualConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 550;
						this.logicalOrExpression(0);
						this.state = 551;
						this.match(KipperParser.QuestionMark);
						this.state = 552;
						this.conditionalExpression();
						this.state = 553;
						this.match(KipperParser.Colon);
						this.state = 554;
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
		this.enterRule(_localctx, 120, KipperParser.RULE_assignmentExpression);
		try {
			this.state = 563;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
				case 1:
					_localctx = new PassOnAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 558;
						this.conditionalExpression();
					}
					break;

				case 2:
					_localctx = new ActualAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 559;
						this.computedPrimaryExpression(0);
						this.state = 560;
						this.assignmentOperator();
						this.state = 561;
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
		this.enterRule(_localctx, 122, KipperParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 565;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 51) & ~0x1f) === 0 &&
						((1 << (_la - 51)) &
							((1 << (KipperParser.Assign - 51)) |
								(1 << (KipperParser.PlusAssign - 51)) |
								(1 << (KipperParser.MinusAssign - 51)) |
								(1 << (KipperParser.StarAssign - 51)) |
								(1 << (KipperParser.DivAssign - 51)) |
								(1 << (KipperParser.ModAssign - 51)))) !==
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
		this.enterRule(_localctx, 124, KipperParser.RULE_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 567;
				this.assignmentExpression();
				this.state = 572;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 568;
								this.match(KipperParser.Comma);
								this.state = 569;
								this.assignmentExpression();
							}
						}
					}
					this.state = 574;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
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
		this.enterRule(_localctx, 126, KipperParser.RULE_typeSpecifier);
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 575;
						this.identifierTypeSpecifier();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 576;
						this.genericTypeSpecifier();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 577;
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
		this.enterRule(_localctx, 128, KipperParser.RULE_identifierTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 580;
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
		this.enterRule(_localctx, 130, KipperParser.RULE_genericTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 582;
				this.typeSpecifierIdentifier();
				this.state = 583;
				this.match(KipperParser.Less);
				this.state = 584;
				this.typeSpecifierIdentifier();
				this.state = 585;
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
		this.enterRule(_localctx, 132, KipperParser.RULE_typeofTypeSpecifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 587;
				this.match(KipperParser.Typeof);
				this.state = 588;
				this.match(KipperParser.LeftParen);
				this.state = 589;
				this.typeSpecifierIdentifier();
				this.state = 590;
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
		this.enterRule(_localctx, 134, KipperParser.RULE_typeSpecifierIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 592;
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
			case 40:
				return this.computedPrimaryExpression_sempred(_localctx as ComputedPrimaryExpressionContext, predIndex);

			case 53:
				return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

			case 54:
				return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

			case 55:
				return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

			case 56:
				return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

			case 57:
				return this.logicalAndExpression_sempred(_localctx as LogicalAndExpressionContext, predIndex);

			case 58:
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03N\u0255\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		'\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04#' +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x03" +
		"\x02\x05\x02\x8C\n\x02\x03\x02\x03\x02\x03\x03\x06\x03\x91\n\x03\r\x03" +
		"\x0E\x03\x92\x03\x04\x03\x04\x03\x05\x06\x05\x98\n\x05\r\x05\x0E\x05\x99" +
		"\x03\x06\x03\x06\x03\x06\x05\x06\x9F\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\xA6\n\x07\x05\x07\xA8\n\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\xAE\n\b\x03\b\x03\b\x03\b\x03\b\x05\b\xB4\n\b\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\xC4\n\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xC9\n\x0E\f\x0E\x0E\x0E\xCC" +
		"\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xDA\n\x11\x03\x12\x03\x12\x05" +
		"\x12\xDE\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x05\x14\xE7\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x05\x15\xF0\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x07\x16\xF8\n\x16\f\x16\x0E\x16\xFB\v\x16\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0107\n\x17" +
		"\x03\x18\x03\x18\x03\x18\x05\x18\u010C\n\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x05\x19\u0112\n\x19\x03\x19\x03\x19\x05\x19\u0116\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x05\x19\u011C\n\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u0122\n\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x05\x1D\u013A\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u0146\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03" +
		' \x03!\x03!\x03"\x03"\x03#\x03#\x03$\x03$\x07$\u0156\n$\f$\x0E$\u0159' +
		"\v$\x03$\x03$\x03$\x07$\u015E\n$\f$\x0E$\u0161\v$\x03$\x05$\u0164\n$\x03" +
		"%\x03%\x03%\x05%\u0169\n%\x03%\x05%\u016C\n%\x03&\x03&\x03&\x05&\u0171" +
		"\n&\x03&\x05&\u0174\n&\x03'\x03'\x03(\x03(\x03(\x03(\x07(\u017C\n(\f" +
		"(\x0E(\u017F\v(\x05(\u0181\n(\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03*" +
		"\x03*\x03*\x05*\u018D\n*\x03*\x03*\x03*\x05*\u0192\n*\x03*\x03*\x03*\x05" +
		"*\u0197\n*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x07*\u01A7\n*\f*\x0E*\u01AA\v*\x03+\x03+\x03+\x07+\u01AF\n" +
		"+\f+\x0E+\u01B2\v+\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03" +
		".\x05.\u01BF\n.\x03.\x03.\x03.\x03.\x05.\u01C5\n.\x03.\x03.\x03/\x03/" +
		"\x05/\u01CB\n/\x030\x030\x030\x031\x031\x031\x051\u01D3\n1\x032\x032\x03" +
		"2\x033\x033\x033\x034\x034\x035\x035\x036\x036\x036\x036\x036\x056\u01E4" +
		"\n6\x037\x037\x037\x037\x037\x037\x077\u01EC\n7\f7\x0E7\u01EF\v7\x038" +
		"\x038\x038\x038\x038\x038\x078\u01F7\n8\f8\x0E8\u01FA\v8\x039\x039\x03" +
		"9\x039\x039\x039\x079\u0202\n9\f9\x0E9\u0205\v9\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x07:\u020D\n:\f:\x0E:\u0210\v:\x03;\x03;\x03;\x03;\x03;\x03;\x07" +
		";\u0218\n;\f;\x0E;\u021B\v;\x03<\x03<\x03<\x03<\x03<\x03<\x07<\u0223\n" +
		"<\f<\x0E<\u0226\v<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u022F\n=\x03" +
		">\x03>\x03>\x03>\x03>\x05>\u0236\n>\x03?\x03?\x03@\x03@\x03@\x07@\u023D" +
		"\n@\f@\x0E@\u0240\v@\x03A\x03A\x03A\x05A\u0245\nA\x03B\x03B\x03C\x03C" +
		"\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x02\x02\tRlnp" +
		"rtvF\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		'\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02' +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x02\x10\x03\x02\x06" +
		"\x07\x03\x02\r\x0E\x03\x02\x19\x1A\x03\x02DE\x04\x02CCFF\x03\x02\x1C\x1E" +
		"\x04\x02++--\x05\x02**,,44\x03\x02.1\x04\x02**,,\x03\x02=@\x03\x02;<\x03" +
		"\x025:\x04\x02\x1C\x1EBB\x02\u0255\x02\x8B\x03\x02\x02\x02\x04\x90\x03" +
		"\x02\x02\x02\x06\x94\x03\x02\x02\x02\b\x97\x03\x02\x02\x02\n\x9E\x03\x02" +
		"\x02\x02\f\xA7\x03\x02\x02\x02\x0E\xA9\x03\x02\x02\x02\x10\xB5\x03\x02" +
		"\x02\x02\x12\xB8\x03\x02\x02\x02\x14\xBA\x03\x02\x02\x02\x16\xBC\x03\x02" +
		"\x02\x02\x18\xBE\x03\x02\x02\x02\x1A\xC5\x03\x02\x02\x02\x1C\xCD\x03\x02" +
		'\x02\x02\x1E\xD1\x03\x02\x02\x02 \xD9\x03\x02\x02\x02"\xDB\x03\x02\x02' +
		"\x02$\xE1\x03\x02\x02\x02&\xE6\x03\x02\x02\x02(\xE8\x03\x02\x02\x02*\xF1" +
		"\x03\x02\x02\x02,\u0106\x03\x02\x02\x02.\u010B\x03\x02\x02\x020\u010D" +
		"\x03\x02\x02\x022\u0126\x03\x02\x02\x024\u012C\x03\x02\x02\x026\u0134" +
		"\x03\x02\x02\x028\u0137\x03\x02\x02\x02:\u0145\x03\x02\x02\x02<\u0147" +
		"\x03\x02\x02\x02>\u014B\x03\x02\x02\x02@\u014D\x03\x02\x02\x02B\u014F" +
		"\x03\x02\x02\x02D\u0151\x03\x02\x02\x02F\u0163\x03\x02\x02\x02H\u016B" +
		"\x03\x02\x02\x02J\u0173\x03\x02\x02\x02L\u0175\x03\x02\x02\x02N\u0177" +
		"\x03\x02\x02\x02P\u0184\x03\x02\x02\x02R\u0191\x03\x02\x02\x02T\u01AB" +
		"\x03\x02\x02\x02V\u01B3\x03\x02\x02\x02X\u01B6\x03\x02\x02\x02Z\u01BA" +
		"\x03\x02\x02\x02\\\u01CA\x03\x02\x02\x02^\u01CC\x03\x02\x02\x02`\u01D2" +
		"\x03\x02\x02\x02b\u01D4\x03\x02\x02\x02d\u01D7\x03\x02\x02\x02f\u01DA" +
		"\x03\x02\x02\x02h\u01DC\x03\x02\x02\x02j\u01E3\x03\x02\x02\x02l\u01E5" +
		"\x03\x02\x02\x02n\u01F0\x03\x02\x02\x02p\u01FB\x03\x02\x02\x02r\u0206" +
		"\x03\x02\x02\x02t\u0211\x03\x02\x02\x02v\u021C\x03\x02\x02\x02x\u022E" +
		"\x03\x02\x02\x02z\u0235\x03\x02\x02\x02|\u0237\x03\x02\x02\x02~\u0239" +
		"\x03\x02\x02\x02\x80\u0244\x03\x02\x02\x02\x82\u0246\x03\x02\x02\x02\x84" +
		"\u0248\x03\x02\x02\x02\x86\u024D\x03\x02\x02\x02\x88\u0252\x03\x02\x02" +
		"\x02\x8A\x8C\x05\x04\x03\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02" +
		"\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x07\x02\x02\x03\x8E\x03\x03\x02\x02" +
		"\x02\x8F\x91\x05\x06\x04\x02\x90\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
		"\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x05\x03\x02\x02" +
		"\x02\x94\x95\x05\b\x05\x02\x95\x07\x03\x02\x02\x02\x96\x98\x05\n\x06\x02" +
		"\x97\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02" +
		"\x99\x9A\x03\x02\x02\x02\x9A\t\x03\x02\x02\x02\x9B\x9F\x05 \x11\x02\x9C" +
		"\x9F\x05\f\x07\x02\x9D\x9F\x07 \x02\x02\x9E\x9B\x03\x02\x02\x02\x9E\x9C" +
		"\x03\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\v\x03\x02\x02\x02\xA0\xA1" +
		"\x05\x10\t\x02\xA1\xA2\x07 \x02\x02\xA2\xA8\x03\x02\x02\x02\xA3\xA5\x05" +
		"\x0E\b\x02\xA4\xA6\x07 \x02\x02\xA5\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02" +
		"\x02\x02\xA6\xA8\x03\x02\x02\x02\xA7\xA0\x03\x02\x02\x02\xA7\xA3\x03\x02" +
		"\x02\x02\xA8\r\x03\x02\x02\x02\xA9\xAA\x07\x15\x02\x02\xAA\xAB\x05\x14" +
		"\v\x02\xAB\xAD\x07#\x02\x02\xAC\xAE\x05\x1A\x0E\x02\xAD\xAC\x03\x02\x02" +
		"\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x07$\x02" +
		'\x02\xB0\xB1\x07\x18\x02\x02\xB1\xB3\x05\x80A\x02\xB2\xB4\x05"\x12\x02' +
		"\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\x0F\x03\x02\x02\x02" +
		"\xB5\xB6\x05\x12\n\x02\xB6\xB7\x05\x18\r\x02\xB7\x11\x03\x02\x02\x02\xB8" +
		"\xB9\t\x02\x02\x02\xB9\x13\x03\x02\x02\x02\xBA\xBB\x05\x16\f\x02\xBB\x15" +
		"\x03\x02\x02\x02\xBC\xBD\x07B\x02\x02\xBD\x17\x03\x02\x02\x02\xBE\xBF" +
		'\x05\x14\v\x02\xBF\xC0\x07"\x02\x02\xC0\xC3\x05\x80A\x02\xC1\xC2\x07' +
		"5\x02\x02\xC2\xC4\x05\x1E\x10\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03" +
		"\x02\x02\x02\xC4\x19\x03\x02\x02\x02\xC5\xCA\x05\x1C\x0F\x02\xC6\xC7\x07" +
		"\x1F\x02\x02\xC7\xC9\x05\x1C\x0F\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCC\x03" +
		"\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\x1B\x03" +
		"\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xCE\x05\x14\v\x02\xCE\xCF\x07" +
		'"\x02\x02\xCF\xD0\x05\x80A\x02\xD0\x1D\x03\x02\x02\x02\xD1\xD2\x05z>' +
		'\x02\xD2\x1F\x03\x02\x02\x02\xD3\xDA\x05"\x12\x02\xD4\xDA\x05$\x13\x02' +
		"\xD5\xDA\x05&\x14\x02\xD6\xDA\x05.\x18\x02\xD7\xDA\x056\x1C\x02\xD8\xDA" +
		"\x058\x1D\x02\xD9\xD3\x03\x02\x02\x02\xD9\xD4\x03\x02\x02\x02\xD9\xD5" +
		"\x03\x02\x02\x02\xD9\xD6\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xD8" +
		"\x03\x02\x02\x02\xDA!\x03\x02\x02\x02\xDB\xDD\x07(\x02\x02\xDC\xDE\x05" +
		"\b\x05\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03" +
		"\x02\x02\x02\xDF\xE0\x07)\x02\x02\xE0#\x03\x02\x02\x02\xE1\xE2\x05~@\x02" +
		"\xE2\xE3\x07 \x02\x02\xE3%\x03\x02\x02\x02\xE4\xE7\x05(\x15\x02\xE5\xE7" +
		"\x05*\x16\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE5\x03\x02\x02\x02\xE7'\x03" +
		"\x02\x02\x02\xE8\xE9\x07\x11\x02\x02\xE9\xEA\x07#\x02\x02\xEA\xEB\x05" +
		"~@\x02\xEB\xEC\x07$\x02\x02\xEC\xEF\x05 \x11\x02\xED\xEE\x07\x12\x02\x02" +
		"\xEE\xF0\x05 \x11\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02" +
		"\xF0)\x03\x02\x02\x02\xF1\xF2\x07\n\x02\x02\xF2\xF3\x07#\x02\x02\xF3\xF4" +
		"\x05~@\x02\xF4\xF5\x07$\x02\x02\xF5\xF9\x07(\x02\x02\xF6\xF8\x05,\x17" +
		"\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02" +
		"\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03\x02\x02" +
		"\x02\xFC\xFD\x07)\x02\x02\xFD+\x03\x02\x02\x02\xFE\xFF\x07\v\x02\x02\xFF" +
		'\u0100\x05~@\x02\u0100\u0101\x07"\x02\x02\u0101\u0102\x05 \x11\x02\u0102' +
		'\u0107\x03\x02\x02\x02\u0103\u0104\x07\f\x02\x02\u0104\u0105\x07"\x02' +
		"\x02\u0105\u0107\x05 \x11\x02\u0106\xFE\x03\x02\x02\x02\u0106\u0103\x03" +
		"\x02\x02\x02\u0107-\x03\x02\x02\x02\u0108\u010C\x050\x19\x02\u0109\u010C" +
		"\x052\x1A\x02\u010A\u010C\x054\x1B\x02\u010B\u0108\x03\x02\x02\x02\u010B" +
		"\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C/\x03\x02\x02" +
		"\x02\u010D\u010E\x07\x13\x02\x02\u010E\u0115\x07#\x02\x02\u010F\u0112" +
		"\x05\x10\t\x02\u0110\u0112\x05~@\x02\u0111\u010F\x03\x02\x02\x02\u0111" +
		"\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\b\x19\x01" +
		"\x02\u0114\u0116\x03\x02\x02\x02\u0115\u0111\x03\x02\x02\x02\u0115\u0116" +
		"\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u011B\x07 \x02\x02" +
		"\u0118\u0119\x05~@\x02\u0119\u011A\b\x19\x01\x02\u011A\u011C\x03\x02\x02" +
		"\x02\u011B\u0118\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D" +
		"\x03\x02\x02\x02\u011D\u0121\x07 \x02\x02\u011E\u011F\x05~@\x02\u011F" +
		"\u0120\b\x19\x01\x02\u0120\u0122\x03\x02\x02\x02\u0121\u011E\x03\x02\x02" +
		"\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124" +
		"\x07$\x02\x02\u0124\u0125\x05 \x11\x02\u01251\x03\x02\x02\x02\u0126\u0127" +
		"\x07\x10\x02\x02\u0127\u0128\x07#\x02\x02\u0128\u0129\x05~@\x02\u0129" +
		"\u012A\x07$\x02\x02\u012A\u012B\x05 \x11\x02\u012B3\x03\x02\x02\x02\u012C" +
		"\u012D\x07\x0F\x02\x02\u012D\u012E\x05 \x11\x02\u012E\u012F\x07\x10\x02" +
		"\x02\u012F\u0130\x07#\x02\x02\u0130\u0131\x05~@\x02\u0131\u0132\x07$\x02" +
		"\x02\u0132\u0133\x07 \x02\x02\u01335\x03\x02\x02\x02\u0134\u0135\t\x03" +
		"\x02\x02\u0135\u0136\x07 \x02\x02\u01367\x03\x02\x02\x02\u0137\u0139\x07" +
		"\x16\x02\x02\u0138\u013A\x05~@\x02\u0139\u0138\x03\x02\x02\x02\u0139\u013A" +
		"\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C\x07 \x02\x02" +
		"\u013C9\x03\x02\x02\x02\u013D\u0146\x05<\x1F\x02\u013E\u0146\x05> \x02" +
		"\u013F\u0146\x05@!\x02\u0140\u0146\x05D#\x02\u0141\u0146\x05F$\x02\u0142" +
		"\u0146\x05L'\x02\u0143\u0146\x05N(\x02\u0144\u0146\x05P)\x02\u0145\u013D" +
		"\x03\x02\x02\x02\u0145\u013E\x03\x02\x02\x02\u0145\u013F\x03\x02\x02\x02" +
		"\u0145\u0140\x03\x02\x02\x02\u0145\u0141\x03\x02\x02\x02\u0145\u0142\x03" +
		"\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145\u0144\x03\x02\x02\x02\u0146" +
		";\x03\x02\x02\x02\u0147\u0148\x07#\x02\x02\u0148\u0149\x05~@\x02\u0149" +
		"\u014A\x07$\x02\x02\u014A=\x03\x02\x02\x02\u014B\u014C\t\x04\x02\x02\u014C" +
		'?\x03\x02\x02\x02\u014D\u014E\x05B"\x02\u014EA\x03\x02\x02\x02\u014F' +
		"\u0150\x07B\x02\x02\u0150C\x03\x02\x02\x02\u0151\u0152\t\x05\x02\x02\u0152" +
		"E\x03\x02\x02\x02\u0153\u0157\x07I\x02\x02\u0154\u0156\x05H%\x02\u0155" +
		"\u0154\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0155\x03\x02" +
		"\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u015A\x03\x02\x02\x02\u0159" +
		"\u0157\x03\x02\x02\x02\u015A\u0164\x07K\x02\x02\u015B\u015F\x07J\x02\x02" +
		"\u015C\u015E\x05J&\x02\u015D\u015C\x03\x02\x02\x02\u015E\u0161\x03\x02" +
		"\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\u0162\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0164\x07M\x02" +
		"\x02\u0163\u0153\x03\x02\x02\x02\u0163\u015B\x03\x02\x02\x02\u0164G\x03" +
		"\x02\x02\x02\u0165\u016C\x07L\x02\x02\u0166\u0168\x07\x03\x02\x02\u0167" +
		"\u0169\x05~@\x02\u0168\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
		"\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x07'\x02\x02\u016B\u0165\x03" +
		"\x02\x02\x02\u016B\u0166\x03\x02\x02\x02\u016CI\x03\x02\x02\x02\u016D" +
		"\u0174\x07N\x02\x02\u016E\u0170\x07\x03\x02\x02\u016F\u0171\x05~@\x02" +
		"\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03" +
		"\x02\x02\x02\u0172\u0174\x07'\x02\x02\u0173\u016D\x03\x02\x02\x02\u0173" +
		"\u016E\x03\x02\x02\x02\u0174K\x03\x02\x02\x02\u0175\u0176\t\x06\x02\x02" +
		"\u0176M\x03\x02\x02\x02\u0177\u0180\x07%\x02\x02\u0178\u017D\x05~@\x02" +
		"\u0179\u017A\x07\x1F\x02\x02\u017A\u017C\x05~@\x02\u017B\u0179\x03\x02" +
		"\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D" +
		"\u017E\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02" +
		"\x02\x02\u0180\u0178\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181" +
		"\u0182\x03\x02\x02\x02\u0182\u0183\x07&\x02\x02\u0183O\x03\x02\x02\x02" +
		"\u0184\u0185\t\x07\x02\x02\u0185Q\x03\x02\x02\x02\u0186\u0187\b*\x01\x02" +
		"\u0187\u0192\x05:\x1E\x02\u0188\u0189\x07\x17\x02\x02\u0189\u018A\x05" +
		"R*\x02\u018A\u018C\x07#\x02\x02\u018B\u018D\x05T+\x02\u018C\u018B\x03" +
		"\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E" +
		"\u018F\x07$\x02\x02\u018F\u0190\b*\x01\x02\u0190\u0192\x03\x02\x02\x02" +
		"\u0191\u0186\x03\x02\x02\x02\u0191\u0188\x03\x02\x02\x02\u0192\u01A8\x03" +
		"\x02\x02\x02\u0193\u0194\f\x07\x02\x02\u0194\u0196\x07#\x02\x02\u0195" +
		"\u0197\x05T+\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02" +
		"\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x07$\x02\x02\u0199\u01A7\b*\x01" +
		"\x02\u019A\u019B\f\x05\x02\x02\u019B\u019C\x05V,\x02\u019C\u019D\b*\x01" +
		"\x02\u019D\u01A7\x03\x02\x02\x02\u019E\u019F\f\x04\x02\x02\u019F\u01A0" +
		"\x05X-\x02\u01A0\u01A1\b*\x01\x02\u01A1\u01A7\x03\x02\x02\x02\u01A2\u01A3" +
		"\f\x03\x02\x02\u01A3\u01A4\x05Z.\x02\u01A4\u01A5\b*\x01\x02\u01A5\u01A7" +
		"\x03\x02\x02\x02\u01A6\u0193\x03\x02\x02\x02\u01A6\u019A\x03\x02\x02\x02" +
		"\u01A6\u019E\x03\x02\x02\x02\u01A6\u01A2\x03\x02\x02\x02\u01A7\u01AA\x03" +
		"\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9" +
		"S\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01B0\x05z>\x02\u01AC" +
		"\u01AD\x07\x1F\x02\x02\u01AD\u01AF\x05z>\x02\u01AE\u01AC\x03\x02\x02\x02" +
		"\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03" +
		"\x02\x02\x02\u01B1U\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3" +
		'\u01B4\x07A\x02\x02\u01B4\u01B5\x05B"\x02\u01B5W\x03\x02\x02\x02\u01B6' +
		"\u01B7\x07%\x02\x02\u01B7\u01B8\x05~@\x02\u01B8\u01B9\x07&\x02\x02\u01B9" +
		"Y\x03\x02\x02\x02\u01BA\u01BE\x07%\x02\x02\u01BB\u01BC\x05~@\x02\u01BC" +
		"\u01BD\b.\x01\x02\u01BD\u01BF\x03\x02\x02\x02\u01BE\u01BB\x03\x02\x02" +
		"\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0\u01C4" +
		'\x07"\x02\x02\u01C1\u01C2\x05~@\x02\u01C2\u01C3\b.\x01\x02\u01C3\u01C5' +
		"\x03\x02\x02\x02\u01C4\u01C1\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02" +
		"\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x07&\x02\x02\u01C7[\x03\x02\x02" +
		"\x02\u01C8\u01CB\x05R*\x02\u01C9\u01CB\x05^0\x02\u01CA\u01C8\x03\x02\x02" +
		"\x02\u01CA\u01C9\x03\x02\x02\x02\u01CB]\x03\x02\x02\x02\u01CC\u01CD\x05" +
		"R*\x02\u01CD\u01CE\x05f4\x02\u01CE_\x03\x02\x02\x02\u01CF\u01D3\x05\\" +
		"/\x02\u01D0\u01D3\x05b2\x02\u01D1\u01D3\x05d3\x02\u01D2\u01CF\x03\x02" +
		"\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3" +
		"a\x03\x02\x02\x02\u01D4\u01D5\x05f4\x02\u01D5\u01D6\x05\\/\x02\u01D6c" +
		"\x03\x02\x02\x02\u01D7\u01D8\x05h5\x02\u01D8\u01D9\x05\\/\x02\u01D9e\x03" +
		"\x02\x02\x02\u01DA\u01DB\t\b\x02\x02\u01DBg\x03\x02\x02\x02\u01DC\u01DD" +
		"\t\t\x02\x02\u01DDi\x03\x02\x02\x02\u01DE\u01E4\x05`1\x02\u01DF\u01E0" +
		"\x05`1\x02\u01E0\u01E1\x07\b\x02\x02\u01E1\u01E2\x05\x80A\x02\u01E2\u01E4" +
		"\x03\x02\x02\x02\u01E3\u01DE\x03\x02\x02\x02\u01E3\u01DF\x03\x02\x02\x02" +
		"\u01E4k\x03\x02\x02\x02\u01E5\u01E6\b7\x01\x02\u01E6\u01E7\x05j6\x02\u01E7" +
		"\u01ED\x03\x02\x02\x02\u01E8\u01E9\f\x03\x02\x02\u01E9\u01EA\t\n\x02\x02" +
		"\u01EA\u01EC\x05j6\x02\u01EB\u01E8\x03\x02\x02\x02\u01EC\u01EF\x03\x02" +
		"\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE" +
		"m\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0\u01F1\b8\x01\x02\u01F1" +
		"\u01F2\x05l7\x02\u01F2\u01F8\x03\x02\x02\x02\u01F3\u01F4\f\x03\x02\x02" +
		"\u01F4\u01F5\t\v\x02\x02\u01F5\u01F7\x05l7\x02\u01F6\u01F3\x03\x02\x02" +
		"\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9" +
		"\x03\x02\x02\x02\u01F9o\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB" +
		"\u01FC\b9\x01\x02\u01FC\u01FD\x05n8\x02\u01FD\u0203\x03\x02\x02\x02\u01FE" +
		"\u01FF\f\x03\x02\x02\u01FF\u0200\t\f\x02\x02\u0200\u0202\x05n8\x02\u0201" +
		"\u01FE\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02" +
		"\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204q\x03\x02\x02\x02\u0205\u0203" +
		"\x03\x02\x02\x02\u0206\u0207\b:\x01\x02\u0207\u0208\x05p9\x02\u0208\u020E" +
		"\x03\x02\x02\x02\u0209\u020A\f\x03\x02\x02\u020A\u020B\t\r\x02\x02\u020B" +
		"\u020D\x05p9\x02\u020C\u0209\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02" +
		"\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02\u020Fs\x03\x02" +
		"\x02\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0212\b;\x01\x02\u0212\u0213" +
		"\x05r:\x02\u0213\u0219\x03\x02\x02\x02\u0214\u0215\f\x03\x02\x02\u0215" +
		"\u0216\x072\x02\x02\u0216\u0218\x05r:\x02\u0217\u0214\x03\x02\x02\x02" +
		"\u0218\u021B\x03\x02\x02\x02\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03" +
		"\x02\x02\x02\u021Au\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C" +
		"\u021D\b<\x01\x02\u021D\u021E\x05t;\x02\u021E\u0224\x03\x02\x02\x02\u021F" +
		"\u0220\f\x03\x02\x02\u0220\u0221\x073\x02\x02\u0221\u0223\x05t;\x02\u0222" +
		"\u021F\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0222\x03\x02" +
		"\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225w\x03\x02\x02\x02\u0226\u0224" +
		"\x03\x02\x02\x02\u0227\u022F\x05v<\x02\u0228\u0229\x05v<\x02\u0229\u022A" +
		'\x07!\x02\x02\u022A\u022B\x05x=\x02\u022B\u022C\x07"\x02\x02\u022C\u022D' +
		"\x05x=\x02\u022D\u022F\x03\x02\x02\x02\u022E\u0227\x03\x02\x02\x02\u022E" +
		"\u0228\x03\x02\x02\x02\u022Fy\x03\x02\x02\x02\u0230\u0236\x05x=\x02\u0231" +
		"\u0232\x05R*\x02\u0232\u0233\x05|?\x02\u0233\u0234\x05z>\x02\u0234\u0236" +
		"\x03\x02\x02\x02\u0235\u0230\x03\x02\x02\x02\u0235\u0231\x03\x02\x02\x02" +
		"\u0236{\x03\x02\x02\x02\u0237\u0238\t\x0E\x02\x02\u0238}\x03\x02\x02\x02" +
		"\u0239\u023E\x05z>\x02\u023A\u023B\x07\x1F\x02\x02\u023B\u023D\x05z>\x02" +
		"\u023C\u023A\x03\x02\x02\x02\u023D\u0240\x03\x02\x02\x02\u023E\u023C\x03" +
		"\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\x7F\x03\x02\x02\x02\u0240" +
		"\u023E\x03\x02\x02\x02\u0241\u0245\x05\x82B\x02\u0242\u0245\x05\x84C\x02" +
		"\u0243\u0245\x05\x86D\x02\u0244\u0241\x03\x02\x02\x02\u0244\u0242\x03" +
		"\x02\x02\x02\u0244\u0243\x03\x02\x02\x02\u0245\x81\x03\x02\x02\x02\u0246" +
		"\u0247\x05\x88E\x02\u0247\x83\x03\x02\x02\x02\u0248\u0249\x05\x88E\x02" +
		"\u0249\u024A\x07=\x02\x02\u024A";
	private static readonly _serializedATNSegment1: string =
		"\u024B\x05\x88E\x02\u024B\u024C\x07?\x02\x02\u024C\x85\x03\x02\x02\x02" +
		"\u024D\u024E\x07\x1B\x02\x02\u024E\u024F\x07#\x02\x02\u024F\u0250\x05" +
		"\x88E\x02\u0250\u0251\x07$\x02\x02\u0251\x87\x03\x02\x02\x02\u0252\u0253" +
		"\t\x0F\x02\x02\u0253\x89\x03\x02\x02\x027\x8B\x92\x99\x9E\xA5\xA7\xAD" +
		"\xB3\xC3\xCA\xD9\xDD\xE6\xEF\xF9\u0106\u010B\u0111\u0115\u011B\u0121\u0139" +
		"\u0145\u0157\u015F\u0163\u0168\u016B\u0170\u0173\u017D\u0180\u018C\u0191" +
		"\u0196\u01A6\u01A8\u01B0\u01BE\u01C4\u01CA\u01D2\u01E3\u01ED\u01F8\u0203" +
		"\u020E\u0219\u0224\u022E\u0235\u023E\u0244";
	public static readonly _serializedATN: string = Utils.join(
		[KipperParser._serializedATNSegment0, KipperParser._serializedATNSegment1],
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
	public SemiColon(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.SemiColon, 0);
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

export class DeclarationContext extends KipperParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public SemiColon(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.SemiColon, 0);
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
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
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

export class VariableDeclarationContext extends KipperParserRuleContext {
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
	public _forDeclaration: boolean = false;
	public _forCondition: boolean = false;
	public _forIterationExp: boolean = false;
	public For(): TerminalNode {
		return this.getToken(KipperParser.For, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
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
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
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
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
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
	public FStringSingleQuoteStart(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringSingleQuoteStart, 0);
	}
	public FStringSingleQuoteEnd(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringSingleQuoteEnd, 0);
	}
	public fStringSingleQuoteAtom(): FStringSingleQuoteAtomContext[];
	public fStringSingleQuoteAtom(i: number): FStringSingleQuoteAtomContext;
	public fStringSingleQuoteAtom(i?: number): FStringSingleQuoteAtomContext | FStringSingleQuoteAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FStringSingleQuoteAtomContext);
		} else {
			return this.getRuleContext(i, FStringSingleQuoteAtomContext);
		}
	}
	public FStringDoubleQuoteStart(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringDoubleQuoteStart, 0);
	}
	public FStringDoubleQuoteEnd(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringDoubleQuoteEnd, 0);
	}
	public fStringDoubleQuoteAtom(): FStringDoubleQuoteAtomContext[];
	public fStringDoubleQuoteAtom(i: number): FStringDoubleQuoteAtomContext;
	public fStringDoubleQuoteAtom(i?: number): FStringDoubleQuoteAtomContext | FStringDoubleQuoteAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FStringDoubleQuoteAtomContext);
		} else {
			return this.getRuleContext(i, FStringDoubleQuoteAtomContext);
		}
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

export class FStringSingleQuoteAtomContext extends KipperParserRuleContext {
	public FStringSingleQuoteAtom(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringSingleQuoteAtom, 0);
	}
	public FStringExpStart(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringExpStart, 0);
	}
	public FStringExpEnd(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringExpEnd, 0);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_fStringSingleQuoteAtom;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterFStringSingleQuoteAtom) {
			listener.enterFStringSingleQuoteAtom(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitFStringSingleQuoteAtom) {
			listener.exitFStringSingleQuoteAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitFStringSingleQuoteAtom) {
			return visitor.visitFStringSingleQuoteAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FStringDoubleQuoteAtomContext extends KipperParserRuleContext {
	public FStringDoubleQuoteAtom(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringDoubleQuoteAtom, 0);
	}
	public FStringExpStart(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringExpStart, 0);
	}
	public FStringExpEnd(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.FStringExpEnd, 0);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_fStringDoubleQuoteAtom;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterFStringDoubleQuoteAtom) {
			listener.enterFStringDoubleQuoteAtom(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitFStringDoubleQuoteAtom) {
			listener.exitFStringDoubleQuoteAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitFStringDoubleQuoteAtom) {
			return visitor.visitFStringDoubleQuoteAtom(this);
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
	public _labelASTKind: ASTKind | undefined;
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
