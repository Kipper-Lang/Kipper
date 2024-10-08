// Generated from ./KipperParser.g4 by ANTLR 4.9.0-SNAPSHOT

// Import the required class for the ctx super class, as well as the 'ASTKind' type defining all possible syntax
// kind values.
import { KipperParserRuleContext, ParseRuleKindMapping, ASTKind } from "..";
import KipperParserBase from "./base/KipperParserBase";

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

export class KipperParser extends KipperParserBase {
	public static readonly FStringExpStart = 1;
	public static readonly BlockComment = 2;
	public static readonly LineComment = 3;
	public static readonly Pragma = 4;
	public static readonly InstanceOf = 5;
	public static readonly Const = 6;
	public static readonly Var = 7;
	public static readonly As = 8;
	public static readonly Spread = 9;
	public static readonly Switch = 10;
	public static readonly Case = 11;
	public static readonly Default = 12;
	public static readonly Break = 13;
	public static readonly Continue = 14;
	public static readonly Do = 15;
	public static readonly While = 16;
	public static readonly If = 17;
	public static readonly Else = 18;
	public static readonly For = 19;
	public static readonly Enum = 20;
	public static readonly DefFunc = 21;
	public static readonly Return = 22;
	public static readonly CallFunc = 23;
	public static readonly RetIndicator = 24;
	public static readonly Class = 25;
	public static readonly Interface = 26;
	public static readonly Constructor = 27;
	public static readonly New = 28;
	public static readonly True = 29;
	public static readonly False = 30;
	public static readonly Matches = 31;
	public static readonly Typeof = 32;
	public static readonly Void = 33;
	public static readonly Null = 34;
	public static readonly Undefined = 35;
	public static readonly Comma = 36;
	public static readonly SemiColon = 37;
	public static readonly QuestionMark = 38;
	public static readonly Colon = 39;
	public static readonly LeftParen = 40;
	public static readonly RightParen = 41;
	public static readonly LeftBracket = 42;
	public static readonly RightBracket = 43;
	public static readonly FStringExpEnd = 44;
	public static readonly LeftBrace = 45;
	public static readonly RightBrace = 46;
	public static readonly Plus = 47;
	public static readonly PlusPlus = 48;
	public static readonly Minus = 49;
	public static readonly MinusMinus = 50;
	public static readonly Star = 51;
	public static readonly Div = 52;
	public static readonly Mod = 53;
	public static readonly PowerTo = 54;
	public static readonly AndAnd = 55;
	public static readonly OrOr = 56;
	public static readonly Not = 57;
	public static readonly Assign = 58;
	public static readonly PlusAssign = 59;
	public static readonly MinusAssign = 60;
	public static readonly StarAssign = 61;
	public static readonly DivAssign = 62;
	public static readonly ModAssign = 63;
	public static readonly Equal = 64;
	public static readonly NotEqual = 65;
	public static readonly Less = 66;
	public static readonly LessEqual = 67;
	public static readonly Greater = 68;
	public static readonly GreaterEqual = 69;
	public static readonly BitwiseAnd = 70;
	public static readonly BitwiseOr = 71;
	public static readonly BitwiseXor = 72;
	public static readonly BitwiseNot = 73;
	public static readonly BitwiseZeroFillLeftShift = 74;
	public static readonly BitwiseSignedRightShift = 75;
	public static readonly BitwiseZeroFillRightShift = 76;
	public static readonly Dot = 77;
	public static readonly Identifier = 78;
	public static readonly IntegerConstant = 79;
	public static readonly SingleQuoteStringLiteral = 80;
	public static readonly DoubleQuoteStringLiteral = 81;
	public static readonly FloatingConstant = 82;
	public static readonly Whitespace = 83;
	public static readonly Newline = 84;
	public static readonly FStringSingleQuoteStart = 85;
	public static readonly FStringDoubleQuoteStart = 86;
	public static readonly FStringSingleQuoteEnd = 87;
	public static readonly FStringSingleQuoteAtom = 88;
	public static readonly FStringDoubleQuoteEnd = 89;
	public static readonly FStringDoubleQuoteAtom = 90;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_translationUnit = 1;
	public static readonly RULE_externalItem = 2;
	public static readonly RULE_blockItemList = 3;
	public static readonly RULE_blockItem = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_variableDeclaration = 6;
	public static readonly RULE_storageTypeSpecifier = 7;
	public static readonly RULE_initDeclarator = 8;
	public static readonly RULE_initializer = 9;
	public static readonly RULE_declarator = 10;
	public static readonly RULE_directDeclarator = 11;
	public static readonly RULE_functionDeclaration = 12;
	public static readonly RULE_parameterList = 13;
	public static readonly RULE_parameterDeclaration = 14;
	public static readonly RULE_interfaceDeclaration = 15;
	public static readonly RULE_interfaceMemberDeclaration = 16;
	public static readonly RULE_interfacePropertyDeclaration = 17;
	public static readonly RULE_interfaceMethodDeclaration = 18;
	public static readonly RULE_classDeclaration = 19;
	public static readonly RULE_classMemberDeclaration = 20;
	public static readonly RULE_classPropertyDeclaration = 21;
	public static readonly RULE_classMethodDeclaration = 22;
	public static readonly RULE_classConstructorDeclaration = 23;
	public static readonly RULE_statement = 24;
	public static readonly RULE_compoundStatement = 25;
	public static readonly RULE_expressionStatement = 26;
	public static readonly RULE_selectionStatement = 27;
	public static readonly RULE_ifStatement = 28;
	public static readonly RULE_switchStatement = 29;
	public static readonly RULE_switchLabeledStatement = 30;
	public static readonly RULE_iterationStatement = 31;
	public static readonly RULE_forLoopIterationStatement = 32;
	public static readonly RULE_whileLoopIterationStatement = 33;
	public static readonly RULE_doWhileLoopIterationStatement = 34;
	public static readonly RULE_jumpStatement = 35;
	public static readonly RULE_returnStatement = 36;
	public static readonly RULE_primaryExpression = 37;
	public static readonly RULE_lambdaPrimaryExpression = 38;
	public static readonly RULE_tangledPrimaryExpression = 39;
	public static readonly RULE_boolPrimaryExpression = 40;
	public static readonly RULE_identifierPrimaryExpression = 41;
	public static readonly RULE_identifier = 42;
	public static readonly RULE_identifierOrStringPrimaryExpression = 43;
	public static readonly RULE_stringPrimaryExpression = 44;
	public static readonly RULE_fStringPrimaryExpression = 45;
	public static readonly RULE_fStringSingleQuoteAtom = 46;
	public static readonly RULE_fStringDoubleQuoteAtom = 47;
	public static readonly RULE_numberPrimaryExpression = 48;
	public static readonly RULE_arrayPrimaryExpression = 49;
	public static readonly RULE_objectPrimaryExpression = 50;
	public static readonly RULE_objectProperty = 51;
	public static readonly RULE_voidOrNullOrUndefinedPrimaryExpression = 52;
	public static readonly RULE_computedPrimaryExpression = 53;
	public static readonly RULE_argumentExpressionList = 54;
	public static readonly RULE_dotNotation = 55;
	public static readonly RULE_bracketNotation = 56;
	public static readonly RULE_sliceNotation = 57;
	public static readonly RULE_postfixExpression = 58;
	public static readonly RULE_incrementOrDecrementPostfixExpression = 59;
	public static readonly RULE_typeofExpression = 60;
	public static readonly RULE_unaryExpression = 61;
	public static readonly RULE_incrementOrDecrementUnaryExpression = 62;
	public static readonly RULE_operatorModifiedUnaryExpression = 63;
	public static readonly RULE_incrementOrDecrementOperator = 64;
	public static readonly RULE_unaryOperator = 65;
	public static readonly RULE_castOrConvertExpression = 66;
	public static readonly RULE_multiplicativeExpression = 67;
	public static readonly RULE_additiveExpression = 68;
	public static readonly RULE_bitwiseShiftExpression = 69;
	public static readonly RULE_bitwiseShiftOperators = 70;
	public static readonly RULE_instanceOfExpression = 71;
	public static readonly RULE_matchesExpression = 72;
	public static readonly RULE_relationalExpression = 73;
	public static readonly RULE_equalityExpression = 74;
	public static readonly RULE_bitwiseAndExpression = 75;
	public static readonly RULE_bitwiseXorExpression = 76;
	public static readonly RULE_bitwiseOrExpression = 77;
	public static readonly RULE_logicalAndExpression = 78;
	public static readonly RULE_logicalOrExpression = 79;
	public static readonly RULE_conditionalExpression = 80;
	public static readonly RULE_assignmentExpression = 81;
	public static readonly RULE_assignmentOperator = 82;
	public static readonly RULE_expression = 83;
	public static readonly RULE_typeSpecifierExpression = 84;
	public static readonly RULE_identifierTypeSpecifierExpression = 85;
	public static readonly RULE_genericTypeSpecifierExpression = 86;
	public static readonly RULE_typeofTypeSpecifierExpression = 87;
	public static readonly RULE_typeSpecifierIdentifier = 88;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit",
		"translationUnit",
		"externalItem",
		"blockItemList",
		"blockItem",
		"declaration",
		"variableDeclaration",
		"storageTypeSpecifier",
		"initDeclarator",
		"initializer",
		"declarator",
		"directDeclarator",
		"functionDeclaration",
		"parameterList",
		"parameterDeclaration",
		"interfaceDeclaration",
		"interfaceMemberDeclaration",
		"interfacePropertyDeclaration",
		"interfaceMethodDeclaration",
		"classDeclaration",
		"classMemberDeclaration",
		"classPropertyDeclaration",
		"classMethodDeclaration",
		"classConstructorDeclaration",
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
		"lambdaPrimaryExpression",
		"tangledPrimaryExpression",
		"boolPrimaryExpression",
		"identifierPrimaryExpression",
		"identifier",
		"identifierOrStringPrimaryExpression",
		"stringPrimaryExpression",
		"fStringPrimaryExpression",
		"fStringSingleQuoteAtom",
		"fStringDoubleQuoteAtom",
		"numberPrimaryExpression",
		"arrayPrimaryExpression",
		"objectPrimaryExpression",
		"objectProperty",
		"voidOrNullOrUndefinedPrimaryExpression",
		"computedPrimaryExpression",
		"argumentExpressionList",
		"dotNotation",
		"bracketNotation",
		"sliceNotation",
		"postfixExpression",
		"incrementOrDecrementPostfixExpression",
		"typeofExpression",
		"unaryExpression",
		"incrementOrDecrementUnaryExpression",
		"operatorModifiedUnaryExpression",
		"incrementOrDecrementOperator",
		"unaryOperator",
		"castOrConvertExpression",
		"multiplicativeExpression",
		"additiveExpression",
		"bitwiseShiftExpression",
		"bitwiseShiftOperators",
		"instanceOfExpression",
		"matchesExpression",
		"relationalExpression",
		"equalityExpression",
		"bitwiseAndExpression",
		"bitwiseXorExpression",
		"bitwiseOrExpression",
		"logicalAndExpression",
		"logicalOrExpression",
		"conditionalExpression",
		"assignmentExpression",
		"assignmentOperator",
		"expression",
		"typeSpecifierExpression",
		"identifierTypeSpecifierExpression",
		"genericTypeSpecifierExpression",
		"typeofTypeSpecifierExpression",
		"typeSpecifierIdentifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		"'instanceof'",
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
		"'class'",
		"'interface'",
		"'constructor'",
		"'new'",
		"'true'",
		"'false'",
		"'matches'",
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
		"'&'",
		"'|'",
		"'^'",
		"'~'",
		"'<<'",
		"'>>'",
		"'>>>'",
		"'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		"FStringExpStart",
		"BlockComment",
		"LineComment",
		"Pragma",
		"InstanceOf",
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
		"Class",
		"Interface",
		"Constructor",
		"New",
		"True",
		"False",
		"Matches",
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
		"BitwiseAnd",
		"BitwiseOr",
		"BitwiseXor",
		"BitwiseNot",
		"BitwiseZeroFillLeftShift",
		"BitwiseSignedRightShift",
		"BitwiseZeroFillRightShift",
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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 179;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
					case 1:
						{
							this.state = 178;
							this.translationUnit();
						}
						break;
				}
				this.state = 181;
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 184;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								{
									this.state = 183;
									this.externalItem();
								}
							}
							break;
						default:
							throw new NoViableAltException(this);
					}
					this.state = 186;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
	public externalItem(): ExternalItemContext {
		let _localctx: ExternalItemContext = new ExternalItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KipperParser.RULE_externalItem);
		try {
			_localctx = new ExternalBlockItemContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 188;
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
				this.state = 191;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
						case 1:
							{
								{
									this.state = 190;
									this.blockItem();
								}
							}
							break;
						default:
							throw new NoViableAltException(this);
					}
					this.state = 193;
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
				this.state = 198;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
					case 1:
						{
							this.state = 195;
							this.statement();
						}
						break;

					case 2:
						{
							this.state = 196;
							this.declaration();
						}
						break;

					case 3:
						{
							this.state = 197;
							this.match(KipperParser.SemiColon);
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KipperParser.RULE_declaration);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Const:
				case KipperParser.Var:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 200;
						this.variableDeclaration();
						this.state = 201;
						this.match(KipperParser.SemiColon);
					}
					break;
				case KipperParser.DefFunc:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 203;
						this.functionDeclaration();
					}
					break;
				case KipperParser.Interface:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 204;
						this.interfaceDeclaration();
					}
					break;
				case KipperParser.Class:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 205;
						this.classDeclaration();
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
		this.enterRule(_localctx, 12, KipperParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 208;
				this.storageTypeSpecifier();
				this.state = 209;
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
		this.enterRule(_localctx, 14, KipperParser.RULE_storageTypeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 211;
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
		this.enterRule(_localctx, 16, KipperParser.RULE_initDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 213;
				this.declarator();
				this.state = 214;
				this.match(KipperParser.Colon);
				this.state = 215;
				this.typeSpecifierExpression();
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Assign) {
					{
						this.state = 216;
						this.match(KipperParser.Assign);
						this.state = 217;
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
	public initializer(): InitializerContext {
		let _localctx: InitializerContext = new InitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KipperParser.RULE_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 220;
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, KipperParser.RULE_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 222;
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
		this.enterRule(_localctx, 22, KipperParser.RULE_directDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 224;
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, KipperParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 226;
				this.match(KipperParser.DefFunc);
				this.state = 227;
				this.declarator();
				this.state = 228;
				this.match(KipperParser.LeftParen);
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 229;
						this.parameterList();
					}
				}

				this.state = 232;
				this.match(KipperParser.RightParen);
				this.state = 233;
				this.match(KipperParser.RetIndicator);
				this.state = 234;
				this.typeSpecifierExpression();
				this.state = 236;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
					case 1:
						{
							this.state = 235;
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, KipperParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 238;
				this.parameterDeclaration();
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 239;
							this.match(KipperParser.Comma);
							this.state = 240;
							this.parameterDeclaration();
						}
					}
					this.state = 245;
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
		this.enterRule(_localctx, 28, KipperParser.RULE_parameterDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 246;
				this.declarator();
				this.state = 247;
				this.match(KipperParser.Colon);
				this.state = 248;
				this.typeSpecifierExpression();
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
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, KipperParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 250;
				this.match(KipperParser.Interface);
				this.state = 251;
				this.declarator();
				this.state = 252;
				this.match(KipperParser.LeftBrace);
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Identifier) {
					{
						{
							this.state = 253;
							this.interfaceMemberDeclaration();
						}
					}
					this.state = 258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 259;
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
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, KipperParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 261;
						this.interfacePropertyDeclaration();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 262;
						this.interfaceMethodDeclaration();
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
	public interfacePropertyDeclaration(): InterfacePropertyDeclarationContext {
		let _localctx: InterfacePropertyDeclarationContext = new InterfacePropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, KipperParser.RULE_interfacePropertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 265;
				this.declarator();
				this.state = 266;
				this.match(KipperParser.Colon);
				this.state = 267;
				this.typeSpecifierExpression();
				this.state = 268;
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
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, KipperParser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 270;
				this.declarator();
				this.state = 271;
				this.match(KipperParser.LeftParen);
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 272;
						this.parameterList();
					}
				}

				this.state = 275;
				this.match(KipperParser.RightParen);
				this.state = 276;
				this.match(KipperParser.Colon);
				this.state = 277;
				this.typeSpecifierExpression();
				this.state = 278;
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
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, KipperParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 280;
				this.match(KipperParser.Class);
				this.state = 281;
				this.declarator();
				this.state = 282;
				this.match(KipperParser.LeftBrace);
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Constructor || _la === KipperParser.SemiColon || _la === KipperParser.Identifier) {
					{
						this.state = 285;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case KipperParser.Constructor:
							case KipperParser.Identifier:
								{
									this.state = 283;
									this.classMemberDeclaration();
								}
								break;
							case KipperParser.SemiColon:
								{
									this.state = 284;
									this.match(KipperParser.SemiColon);
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 290;
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
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let _localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, KipperParser.RULE_classMemberDeclaration);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 292;
						this.classPropertyDeclaration();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 293;
						this.classMethodDeclaration();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 294;
						this.classConstructorDeclaration();
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
	public classPropertyDeclaration(): ClassPropertyDeclarationContext {
		let _localctx: ClassPropertyDeclarationContext = new ClassPropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, KipperParser.RULE_classPropertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 297;
				this.declarator();
				this.state = 298;
				this.match(KipperParser.Colon);
				this.state = 299;
				this.typeSpecifierExpression();
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
	public classMethodDeclaration(): ClassMethodDeclarationContext {
		let _localctx: ClassMethodDeclarationContext = new ClassMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, KipperParser.RULE_classMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 301;
				this.declarator();
				this.state = 302;
				this.match(KipperParser.LeftParen);
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 303;
						this.parameterList();
					}
				}

				this.state = 306;
				this.match(KipperParser.RightParen);
				this.state = 307;
				this.match(KipperParser.Colon);
				this.state = 308;
				this.typeSpecifierExpression();
				this.state = 310;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
					case 1:
						{
							this.state = 309;
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
	public classConstructorDeclaration(): ClassConstructorDeclarationContext {
		let _localctx: ClassConstructorDeclarationContext = new ClassConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, KipperParser.RULE_classConstructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 312;
				this.match(KipperParser.Constructor);
				this.state = 313;
				this.match(KipperParser.LeftParen);
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 314;
						this.parameterList();
					}
				}

				this.state = 317;
				this.match(KipperParser.RightParen);
				this.state = 318;
				this.compoundStatement();
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
		this.enterRule(_localctx, 48, KipperParser.RULE_statement);
		try {
			this.state = 326;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 320;
						this.expressionStatement();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 321;
						this.selectionStatement();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 322;
						this.iterationStatement();
					}
					break;

				case 4:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 323;
						this.jumpStatement();
					}
					break;

				case 5:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 324;
						this.returnStatement();
					}
					break;

				case 6:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 325;
						this.compoundStatement();
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
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, KipperParser.RULE_compoundStatement);
		try {
			this.state = 342;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 328;
						if (!this.notInsideExpressionStatement()) {
							throw this.createFailedPredicateException("this.notInsideExpressionStatement()");
						}
						this.state = 329;
						this.match(KipperParser.LeftBrace);
						this.state = 331;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
							case 1:
								{
									this.state = 330;
									this.blockItemList();
								}
								break;
						}
						this.state = 333;
						this.match(KipperParser.RightBrace);
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 334;
						if (!this.insideLambda()) {
							throw this.createFailedPredicateException("this.insideLambda()");
						}
						this.state = 335;
						this.match(KipperParser.LeftBrace);
						this.exitLambda();
						this.state = 338;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
							case 1:
								{
									this.state = 337;
									this.blockItemList();
								}
								break;
						}
						this.enterLambda();
						this.state = 341;
						this.match(KipperParser.RightBrace);
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, KipperParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.enterExpressionStatement();
				this.state = 345;
				this.expression();
				this.state = 346;
				this.match(KipperParser.SemiColon);
				this.exitExpressionStatement();
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
		this.enterRule(_localctx, 54, KipperParser.RULE_selectionStatement);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.If:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 349;
						this.ifStatement();
					}
					break;
				case KipperParser.Switch:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 350;
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
		this.enterRule(_localctx, 56, KipperParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 353;
				this.match(KipperParser.If);
				this.state = 354;
				this.match(KipperParser.LeftParen);
				this.state = 355;
				this.expression();
				this.state = 356;
				this.match(KipperParser.RightParen);
				this.state = 357;
				this.statement();
				this.state = 360;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
					case 1:
						{
							this.state = 358;
							this.match(KipperParser.Else);
							this.state = 359;
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
		this.enterRule(_localctx, 58, KipperParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 362;
				this.match(KipperParser.Switch);
				this.state = 363;
				this.match(KipperParser.LeftParen);
				this.state = 364;
				this.expression();
				this.state = 365;
				this.match(KipperParser.RightParen);
				this.state = 366;
				this.match(KipperParser.LeftBrace);
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Case || _la === KipperParser.Default) {
					{
						{
							this.state = 367;
							this.switchLabeledStatement();
						}
					}
					this.state = 372;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 373;
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
		this.enterRule(_localctx, 60, KipperParser.RULE_switchLabeledStatement);
		try {
			this.state = 383;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Case:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 375;
						this.match(KipperParser.Case);
						this.state = 376;
						this.expression();
						this.state = 377;
						this.match(KipperParser.Colon);
						this.state = 378;
						this.statement();
					}
					break;
				case KipperParser.Default:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 380;
						this.match(KipperParser.Default);
						this.state = 381;
						this.match(KipperParser.Colon);
						this.state = 382;
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
		this.enterRule(_localctx, 62, KipperParser.RULE_iterationStatement);
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.For:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 385;
						this.forLoopIterationStatement();
					}
					break;
				case KipperParser.While:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 386;
						this.whileLoopIterationStatement();
					}
					break;
				case KipperParser.Do:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 387;
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
		this.enterRule(_localctx, 64, KipperParser.RULE_forLoopIterationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 390;
				this.match(KipperParser.For);
				this.state = 391;
				this.match(KipperParser.LeftParen);
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << KipperParser.Const) |
								(1 << KipperParser.Var) |
								(1 << KipperParser.CallFunc) |
								(1 << KipperParser.New) |
								(1 << KipperParser.True) |
								(1 << KipperParser.False))) !==
							0) ||
					(((_la - 32) & ~0x1f) === 0 &&
						((1 << (_la - 32)) &
							((1 << (KipperParser.Typeof - 32)) |
								(1 << (KipperParser.Void - 32)) |
								(1 << (KipperParser.Null - 32)) |
								(1 << (KipperParser.Undefined - 32)) |
								(1 << (KipperParser.LeftParen - 32)) |
								(1 << (KipperParser.LeftBracket - 32)) |
								(1 << (KipperParser.LeftBrace - 32)) |
								(1 << (KipperParser.Plus - 32)) |
								(1 << (KipperParser.PlusPlus - 32)) |
								(1 << (KipperParser.Minus - 32)) |
								(1 << (KipperParser.MinusMinus - 32)) |
								(1 << (KipperParser.Not - 32)))) !==
							0) ||
					(((_la - 73) & ~0x1f) === 0 &&
						((1 << (_la - 73)) &
							((1 << (KipperParser.BitwiseNot - 73)) |
								(1 << (KipperParser.Identifier - 73)) |
								(1 << (KipperParser.IntegerConstant - 73)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 73)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 73)) |
								(1 << (KipperParser.FloatingConstant - 73)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 73)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 73)))) !==
							0)
				) {
					{
						this.state = 394;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case KipperParser.Const:
							case KipperParser.Var:
								{
									this.state = 392;
									this.variableDeclaration();
								}
								break;
							case KipperParser.CallFunc:
							case KipperParser.New:
							case KipperParser.True:
							case KipperParser.False:
							case KipperParser.Typeof:
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
							case KipperParser.BitwiseNot:
							case KipperParser.Identifier:
							case KipperParser.IntegerConstant:
							case KipperParser.SingleQuoteStringLiteral:
							case KipperParser.DoubleQuoteStringLiteral:
							case KipperParser.FloatingConstant:
							case KipperParser.FStringSingleQuoteStart:
							case KipperParser.FStringDoubleQuoteStart:
								{
									this.state = 393;
									this.expression();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
						_localctx._forDeclaration = true;
					}
				}

				this.state = 400;
				this.match(KipperParser.SemiColon);
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 23) & ~0x1f) === 0 &&
						((1 << (_la - 23)) &
							((1 << (KipperParser.CallFunc - 23)) |
								(1 << (KipperParser.New - 23)) |
								(1 << (KipperParser.True - 23)) |
								(1 << (KipperParser.False - 23)) |
								(1 << (KipperParser.Typeof - 23)) |
								(1 << (KipperParser.Void - 23)) |
								(1 << (KipperParser.Null - 23)) |
								(1 << (KipperParser.Undefined - 23)) |
								(1 << (KipperParser.LeftParen - 23)) |
								(1 << (KipperParser.LeftBracket - 23)) |
								(1 << (KipperParser.LeftBrace - 23)) |
								(1 << (KipperParser.Plus - 23)) |
								(1 << (KipperParser.PlusPlus - 23)) |
								(1 << (KipperParser.Minus - 23)) |
								(1 << (KipperParser.MinusMinus - 23)))) !==
							0) ||
					(((_la - 57) & ~0x1f) === 0 &&
						((1 << (_la - 57)) &
							((1 << (KipperParser.Not - 57)) |
								(1 << (KipperParser.BitwiseNot - 57)) |
								(1 << (KipperParser.Identifier - 57)) |
								(1 << (KipperParser.IntegerConstant - 57)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.FloatingConstant - 57)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
							0)
				) {
					{
						this.state = 401;
						this.expression();
						_localctx._forCondition = true;
					}
				}

				this.state = 406;
				this.match(KipperParser.SemiColon);
				this.state = 410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 23) & ~0x1f) === 0 &&
						((1 << (_la - 23)) &
							((1 << (KipperParser.CallFunc - 23)) |
								(1 << (KipperParser.New - 23)) |
								(1 << (KipperParser.True - 23)) |
								(1 << (KipperParser.False - 23)) |
								(1 << (KipperParser.Typeof - 23)) |
								(1 << (KipperParser.Void - 23)) |
								(1 << (KipperParser.Null - 23)) |
								(1 << (KipperParser.Undefined - 23)) |
								(1 << (KipperParser.LeftParen - 23)) |
								(1 << (KipperParser.LeftBracket - 23)) |
								(1 << (KipperParser.LeftBrace - 23)) |
								(1 << (KipperParser.Plus - 23)) |
								(1 << (KipperParser.PlusPlus - 23)) |
								(1 << (KipperParser.Minus - 23)) |
								(1 << (KipperParser.MinusMinus - 23)))) !==
							0) ||
					(((_la - 57) & ~0x1f) === 0 &&
						((1 << (_la - 57)) &
							((1 << (KipperParser.Not - 57)) |
								(1 << (KipperParser.BitwiseNot - 57)) |
								(1 << (KipperParser.Identifier - 57)) |
								(1 << (KipperParser.IntegerConstant - 57)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.FloatingConstant - 57)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
							0)
				) {
					{
						this.state = 407;
						this.expression();
						_localctx._forIterationExp = true;
					}
				}

				this.state = 412;
				this.match(KipperParser.RightParen);
				this.state = 413;
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
		this.enterRule(_localctx, 66, KipperParser.RULE_whileLoopIterationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 415;
				this.match(KipperParser.While);
				this.state = 416;
				this.match(KipperParser.LeftParen);
				this.state = 417;
				this.expression();
				this.state = 418;
				this.match(KipperParser.RightParen);
				this.state = 419;
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
		this.enterRule(_localctx, 68, KipperParser.RULE_doWhileLoopIterationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 421;
				this.match(KipperParser.Do);
				this.state = 422;
				this.statement();
				this.state = 423;
				this.match(KipperParser.While);
				this.state = 424;
				this.match(KipperParser.LeftParen);
				this.state = 425;
				this.expression();
				this.state = 426;
				this.match(KipperParser.RightParen);
				this.state = 427;
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
		this.enterRule(_localctx, 70, KipperParser.RULE_jumpStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 429;
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
				this.state = 430;
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
		this.enterRule(_localctx, 72, KipperParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 432;
				this.match(KipperParser.Return);
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 23) & ~0x1f) === 0 &&
						((1 << (_la - 23)) &
							((1 << (KipperParser.CallFunc - 23)) |
								(1 << (KipperParser.New - 23)) |
								(1 << (KipperParser.True - 23)) |
								(1 << (KipperParser.False - 23)) |
								(1 << (KipperParser.Typeof - 23)) |
								(1 << (KipperParser.Void - 23)) |
								(1 << (KipperParser.Null - 23)) |
								(1 << (KipperParser.Undefined - 23)) |
								(1 << (KipperParser.LeftParen - 23)) |
								(1 << (KipperParser.LeftBracket - 23)) |
								(1 << (KipperParser.LeftBrace - 23)) |
								(1 << (KipperParser.Plus - 23)) |
								(1 << (KipperParser.PlusPlus - 23)) |
								(1 << (KipperParser.Minus - 23)) |
								(1 << (KipperParser.MinusMinus - 23)))) !==
							0) ||
					(((_la - 57) & ~0x1f) === 0 &&
						((1 << (_la - 57)) &
							((1 << (KipperParser.Not - 57)) |
								(1 << (KipperParser.BitwiseNot - 57)) |
								(1 << (KipperParser.Identifier - 57)) |
								(1 << (KipperParser.IntegerConstant - 57)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.FloatingConstant - 57)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
							0)
				) {
					{
						this.state = 433;
						this.expression();
					}
				}

				this.state = 436;
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
		this.enterRule(_localctx, 74, KipperParser.RULE_primaryExpression);
		try {
			this.state = 448;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 438;
						this.tangledPrimaryExpression();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 439;
						this.lambdaPrimaryExpression();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 440;
						this.arrayPrimaryExpression();
					}
					break;

				case 4:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 441;
						this.objectPrimaryExpression();
					}
					break;

				case 5:
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 442;
						this.boolPrimaryExpression();
					}
					break;

				case 6:
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 443;
						this.identifierPrimaryExpression();
					}
					break;

				case 7:
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 444;
						this.stringPrimaryExpression();
					}
					break;

				case 8:
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 445;
						this.fStringPrimaryExpression();
					}
					break;

				case 9:
					this.enterOuterAlt(_localctx, 9);
					{
						this.state = 446;
						this.numberPrimaryExpression();
					}
					break;

				case 10:
					this.enterOuterAlt(_localctx, 10);
					{
						this.state = 447;
						this.voidOrNullOrUndefinedPrimaryExpression();
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
	public lambdaPrimaryExpression(): LambdaPrimaryExpressionContext {
		let _localctx: LambdaPrimaryExpressionContext = new LambdaPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, KipperParser.RULE_lambdaPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.enterLambda();
				this.state = 451;
				this.match(KipperParser.LeftParen);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Identifier) {
					{
						this.state = 452;
						this.parameterList();
					}
				}

				this.state = 455;
				this.match(KipperParser.RightParen);
				this.state = 456;
				this.match(KipperParser.Colon);
				this.state = 457;
				this.typeSpecifierExpression();
				this.state = 458;
				this.match(KipperParser.RetIndicator);
				this.state = 461;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
					case 1:
						{
							this.state = 459;
							this.expression();
						}
						break;

					case 2:
						{
							this.state = 460;
							this.compoundStatement();
						}
						break;
				}
				this.exitLambda();
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
		this.enterRule(_localctx, 78, KipperParser.RULE_tangledPrimaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 465;
				this.match(KipperParser.LeftParen);
				this.state = 466;
				this.expression();
				this.state = 467;
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
		this.enterRule(_localctx, 80, KipperParser.RULE_boolPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 469;
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
		this.enterRule(_localctx, 82, KipperParser.RULE_identifierPrimaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 471;
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
		this.enterRule(_localctx, 84, KipperParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 473;
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
	public identifierOrStringPrimaryExpression(): IdentifierOrStringPrimaryExpressionContext {
		let _localctx: IdentifierOrStringPrimaryExpressionContext = new IdentifierOrStringPrimaryExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 86, KipperParser.RULE_identifierOrStringPrimaryExpression);
		try {
			this.state = 477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.Identifier:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 475;
						this.identifier();
					}
					break;
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 476;
						this.stringPrimaryExpression();
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
	public stringPrimaryExpression(): StringPrimaryExpressionContext {
		let _localctx: StringPrimaryExpressionContext = new StringPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, KipperParser.RULE_stringPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 479;
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
		this.enterRule(_localctx, 90, KipperParser.RULE_fStringPrimaryExpression);
		let _la: number;
		try {
			this.state = 497;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.FStringSingleQuoteStart:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 481;
						this.match(KipperParser.FStringSingleQuoteStart);
						this.state = 485;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.FStringExpStart || _la === KipperParser.FStringSingleQuoteAtom) {
							{
								{
									this.state = 482;
									this.fStringSingleQuoteAtom();
								}
							}
							this.state = 487;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 488;
						this.match(KipperParser.FStringSingleQuoteEnd);
					}
					break;
				case KipperParser.FStringDoubleQuoteStart:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 489;
						this.match(KipperParser.FStringDoubleQuoteStart);
						this.state = 493;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.FStringExpStart || _la === KipperParser.FStringDoubleQuoteAtom) {
							{
								{
									this.state = 490;
									this.fStringDoubleQuoteAtom();
								}
							}
							this.state = 495;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 496;
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
		this.enterRule(_localctx, 92, KipperParser.RULE_fStringSingleQuoteAtom);
		let _la: number;
		try {
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.FStringSingleQuoteAtom:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 499;
						this.match(KipperParser.FStringSingleQuoteAtom);
					}
					break;
				case KipperParser.FStringExpStart:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 500;
						this.match(KipperParser.FStringExpStart);
						this.state = 502;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							(((_la - 23) & ~0x1f) === 0 &&
								((1 << (_la - 23)) &
									((1 << (KipperParser.CallFunc - 23)) |
										(1 << (KipperParser.New - 23)) |
										(1 << (KipperParser.True - 23)) |
										(1 << (KipperParser.False - 23)) |
										(1 << (KipperParser.Typeof - 23)) |
										(1 << (KipperParser.Void - 23)) |
										(1 << (KipperParser.Null - 23)) |
										(1 << (KipperParser.Undefined - 23)) |
										(1 << (KipperParser.LeftParen - 23)) |
										(1 << (KipperParser.LeftBracket - 23)) |
										(1 << (KipperParser.LeftBrace - 23)) |
										(1 << (KipperParser.Plus - 23)) |
										(1 << (KipperParser.PlusPlus - 23)) |
										(1 << (KipperParser.Minus - 23)) |
										(1 << (KipperParser.MinusMinus - 23)))) !==
									0) ||
							(((_la - 57) & ~0x1f) === 0 &&
								((1 << (_la - 57)) &
									((1 << (KipperParser.Not - 57)) |
										(1 << (KipperParser.BitwiseNot - 57)) |
										(1 << (KipperParser.Identifier - 57)) |
										(1 << (KipperParser.IntegerConstant - 57)) |
										(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
										(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
										(1 << (KipperParser.FloatingConstant - 57)) |
										(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
										(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
									0)
						) {
							{
								this.state = 501;
								this.expression();
							}
						}

						this.state = 504;
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
		this.enterRule(_localctx, 94, KipperParser.RULE_fStringDoubleQuoteAtom);
		let _la: number;
		try {
			this.state = 513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.FStringDoubleQuoteAtom:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 507;
						this.match(KipperParser.FStringDoubleQuoteAtom);
					}
					break;
				case KipperParser.FStringExpStart:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 508;
						this.match(KipperParser.FStringExpStart);
						this.state = 510;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (
							(((_la - 23) & ~0x1f) === 0 &&
								((1 << (_la - 23)) &
									((1 << (KipperParser.CallFunc - 23)) |
										(1 << (KipperParser.New - 23)) |
										(1 << (KipperParser.True - 23)) |
										(1 << (KipperParser.False - 23)) |
										(1 << (KipperParser.Typeof - 23)) |
										(1 << (KipperParser.Void - 23)) |
										(1 << (KipperParser.Null - 23)) |
										(1 << (KipperParser.Undefined - 23)) |
										(1 << (KipperParser.LeftParen - 23)) |
										(1 << (KipperParser.LeftBracket - 23)) |
										(1 << (KipperParser.LeftBrace - 23)) |
										(1 << (KipperParser.Plus - 23)) |
										(1 << (KipperParser.PlusPlus - 23)) |
										(1 << (KipperParser.Minus - 23)) |
										(1 << (KipperParser.MinusMinus - 23)))) !==
									0) ||
							(((_la - 57) & ~0x1f) === 0 &&
								((1 << (_la - 57)) &
									((1 << (KipperParser.Not - 57)) |
										(1 << (KipperParser.BitwiseNot - 57)) |
										(1 << (KipperParser.Identifier - 57)) |
										(1 << (KipperParser.IntegerConstant - 57)) |
										(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
										(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
										(1 << (KipperParser.FloatingConstant - 57)) |
										(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
										(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
									0)
						) {
							{
								this.state = 509;
								this.expression();
							}
						}

						this.state = 512;
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
		this.enterRule(_localctx, 96, KipperParser.RULE_numberPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 515;
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
	public arrayPrimaryExpression(): ArrayPrimaryExpressionContext {
		let _localctx: ArrayPrimaryExpressionContext = new ArrayPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, KipperParser.RULE_arrayPrimaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 517;
				this.match(KipperParser.LeftBracket);
				this.state = 526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 23) & ~0x1f) === 0 &&
						((1 << (_la - 23)) &
							((1 << (KipperParser.CallFunc - 23)) |
								(1 << (KipperParser.New - 23)) |
								(1 << (KipperParser.True - 23)) |
								(1 << (KipperParser.False - 23)) |
								(1 << (KipperParser.Typeof - 23)) |
								(1 << (KipperParser.Void - 23)) |
								(1 << (KipperParser.Null - 23)) |
								(1 << (KipperParser.Undefined - 23)) |
								(1 << (KipperParser.LeftParen - 23)) |
								(1 << (KipperParser.LeftBracket - 23)) |
								(1 << (KipperParser.LeftBrace - 23)) |
								(1 << (KipperParser.Plus - 23)) |
								(1 << (KipperParser.PlusPlus - 23)) |
								(1 << (KipperParser.Minus - 23)) |
								(1 << (KipperParser.MinusMinus - 23)))) !==
							0) ||
					(((_la - 57) & ~0x1f) === 0 &&
						((1 << (_la - 57)) &
							((1 << (KipperParser.Not - 57)) |
								(1 << (KipperParser.BitwiseNot - 57)) |
								(1 << (KipperParser.Identifier - 57)) |
								(1 << (KipperParser.IntegerConstant - 57)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.FloatingConstant - 57)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
							0)
				) {
					{
						this.state = 518;
						this.expression();
						this.state = 523;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 519;
										this.match(KipperParser.Comma);
										this.state = 520;
										this.expression();
									}
								}
							}
							this.state = 525;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
						}
					}
				}

				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Comma) {
					{
						this.state = 528;
						this.match(KipperParser.Comma);
					}
				}

				this.state = 531;
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
	public objectPrimaryExpression(): ObjectPrimaryExpressionContext {
		let _localctx: ObjectPrimaryExpressionContext = new ObjectPrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, KipperParser.RULE_objectPrimaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 533;
				this.match(KipperParser.LeftBrace);
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					((_la - 78) & ~0x1f) === 0 &&
					((1 << (_la - 78)) &
						((1 << (KipperParser.Identifier - 78)) |
							(1 << (KipperParser.SingleQuoteStringLiteral - 78)) |
							(1 << (KipperParser.DoubleQuoteStringLiteral - 78)))) !==
						0
				) {
					{
						this.state = 534;
						this.objectProperty();
						this.state = 539;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
									{
										this.state = 535;
										this.match(KipperParser.Comma);
										this.state = 536;
										this.objectProperty();
									}
								}
							}
							this.state = 541;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
						}
					}
				}

				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === KipperParser.Comma) {
					{
						this.state = 544;
						this.match(KipperParser.Comma);
					}
				}

				this.state = 547;
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
	public objectProperty(): ObjectPropertyContext {
		let _localctx: ObjectPropertyContext = new ObjectPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, KipperParser.RULE_objectProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 549;
				this.identifierOrStringPrimaryExpression();
				this.state = 550;
				this.match(KipperParser.Colon);
				this.state = 551;
				this.expression();
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
		this.enterRule(_localctx, 104, KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 553;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 33) & ~0x1f) === 0 &&
						((1 << (_la - 33)) &
							((1 << (KipperParser.Void - 33)) |
								(1 << (KipperParser.Null - 33)) |
								(1 << (KipperParser.Undefined - 33)))) !==
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
		let _startState: number = 106;
		this.enterRecursionRule(_localctx, 106, KipperParser.RULE_computedPrimaryExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 575;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
					case KipperParser.True:
					case KipperParser.False:
					case KipperParser.Void:
					case KipperParser.Null:
					case KipperParser.Undefined:
					case KipperParser.LeftParen:
					case KipperParser.LeftBracket:
					case KipperParser.LeftBrace:
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

							this.state = 556;
							this.primaryExpression();
						}
						break;
					case KipperParser.CallFunc:
						{
							_localctx = new ExplicitCallFunctionCallExpressionContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 557;
							this.match(KipperParser.CallFunc);
							this.state = 558;
							this.computedPrimaryExpression(0);
							this.state = 559;
							this.match(KipperParser.LeftParen);
							this.state = 561;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								(((_la - 23) & ~0x1f) === 0 &&
									((1 << (_la - 23)) &
										((1 << (KipperParser.CallFunc - 23)) |
											(1 << (KipperParser.New - 23)) |
											(1 << (KipperParser.True - 23)) |
											(1 << (KipperParser.False - 23)) |
											(1 << (KipperParser.Typeof - 23)) |
											(1 << (KipperParser.Void - 23)) |
											(1 << (KipperParser.Null - 23)) |
											(1 << (KipperParser.Undefined - 23)) |
											(1 << (KipperParser.LeftParen - 23)) |
											(1 << (KipperParser.LeftBracket - 23)) |
											(1 << (KipperParser.LeftBrace - 23)) |
											(1 << (KipperParser.Plus - 23)) |
											(1 << (KipperParser.PlusPlus - 23)) |
											(1 << (KipperParser.Minus - 23)) |
											(1 << (KipperParser.MinusMinus - 23)))) !==
										0) ||
								(((_la - 57) & ~0x1f) === 0 &&
									((1 << (_la - 57)) &
										((1 << (KipperParser.Not - 57)) |
											(1 << (KipperParser.BitwiseNot - 57)) |
											(1 << (KipperParser.Identifier - 57)) |
											(1 << (KipperParser.IntegerConstant - 57)) |
											(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
											(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
											(1 << (KipperParser.FloatingConstant - 57)) |
											(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
											(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
										0)
							) {
								{
									this.state = 560;
									this.argumentExpressionList();
								}
							}

							this.state = 563;
							this.match(KipperParser.RightParen);
							_localctx._labelASTKind = ParseRuleKindMapping.RULE_functionCallExpression;
						}
						break;
					case KipperParser.New:
						{
							_localctx = new NewInstantiationExpressionContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 566;
							this.match(KipperParser.New);
							this.state = 567;
							this.typeSpecifierExpression();
							this.state = 568;
							this.match(KipperParser.LeftParen);
							this.state = 570;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (
								(((_la - 23) & ~0x1f) === 0 &&
									((1 << (_la - 23)) &
										((1 << (KipperParser.CallFunc - 23)) |
											(1 << (KipperParser.New - 23)) |
											(1 << (KipperParser.True - 23)) |
											(1 << (KipperParser.False - 23)) |
											(1 << (KipperParser.Typeof - 23)) |
											(1 << (KipperParser.Void - 23)) |
											(1 << (KipperParser.Null - 23)) |
											(1 << (KipperParser.Undefined - 23)) |
											(1 << (KipperParser.LeftParen - 23)) |
											(1 << (KipperParser.LeftBracket - 23)) |
											(1 << (KipperParser.LeftBrace - 23)) |
											(1 << (KipperParser.Plus - 23)) |
											(1 << (KipperParser.PlusPlus - 23)) |
											(1 << (KipperParser.Minus - 23)) |
											(1 << (KipperParser.MinusMinus - 23)))) !==
										0) ||
								(((_la - 57) & ~0x1f) === 0 &&
									((1 << (_la - 57)) &
										((1 << (KipperParser.Not - 57)) |
											(1 << (KipperParser.BitwiseNot - 57)) |
											(1 << (KipperParser.Identifier - 57)) |
											(1 << (KipperParser.IntegerConstant - 57)) |
											(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
											(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
											(1 << (KipperParser.FloatingConstant - 57)) |
											(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
											(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
										0)
							) {
								{
									this.state = 569;
									this.argumentExpressionList();
								}
							}

							this.state = 572;
							this.match(KipperParser.RightParen);
							_localctx._labelASTKind = ParseRuleKindMapping.RULE_newInstantiationExpression;
						}
						break;
					default:
						throw new NoViableAltException(this);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 598;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							this.state = 596;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
								case 1:
									{
										_localctx = new DotNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 577;
										if (!this.precpred(this._ctx, 6)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
										}
										this.state = 578;
										this.dotNotation();
										_localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression;
									}
									break;

								case 2:
									{
										_localctx = new BracketNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 581;
										if (!this.precpred(this._ctx, 5)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
										}
										this.state = 582;
										this.bracketNotation();
										_localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression;
									}
									break;

								case 3:
									{
										_localctx = new SliceNotationMemberAccessExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 585;
										if (!this.precpred(this._ctx, 4)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
										}
										this.state = 586;
										this.sliceNotation();
										_localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression;
									}
									break;

								case 4:
									{
										_localctx = new FunctionCallExpressionContext(
											new ComputedPrimaryExpressionContext(_parentctx, _parentState),
										);
										this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_computedPrimaryExpression);
										this.state = 589;
										if (!this.precpred(this._ctx, 3)) {
											throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
										}
										this.state = 590;
										this.match(KipperParser.LeftParen);
										this.state = 592;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (
											(((_la - 23) & ~0x1f) === 0 &&
												((1 << (_la - 23)) &
													((1 << (KipperParser.CallFunc - 23)) |
														(1 << (KipperParser.New - 23)) |
														(1 << (KipperParser.True - 23)) |
														(1 << (KipperParser.False - 23)) |
														(1 << (KipperParser.Typeof - 23)) |
														(1 << (KipperParser.Void - 23)) |
														(1 << (KipperParser.Null - 23)) |
														(1 << (KipperParser.Undefined - 23)) |
														(1 << (KipperParser.LeftParen - 23)) |
														(1 << (KipperParser.LeftBracket - 23)) |
														(1 << (KipperParser.LeftBrace - 23)) |
														(1 << (KipperParser.Plus - 23)) |
														(1 << (KipperParser.PlusPlus - 23)) |
														(1 << (KipperParser.Minus - 23)) |
														(1 << (KipperParser.MinusMinus - 23)))) !==
													0) ||
											(((_la - 57) & ~0x1f) === 0 &&
												((1 << (_la - 57)) &
													((1 << (KipperParser.Not - 57)) |
														(1 << (KipperParser.BitwiseNot - 57)) |
														(1 << (KipperParser.Identifier - 57)) |
														(1 << (KipperParser.IntegerConstant - 57)) |
														(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
														(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
														(1 << (KipperParser.FloatingConstant - 57)) |
														(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
														(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
													0)
										) {
											{
												this.state = 591;
												this.argumentExpressionList();
											}
										}

										this.state = 594;
										this.match(KipperParser.RightParen);
										_localctx._labelASTKind = ParseRuleKindMapping.RULE_functionCallExpression;
									}
									break;
							}
						}
					}
					this.state = 600;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
		this.enterRule(_localctx, 108, KipperParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 601;
				this.assignmentExpression();
				this.state = 606;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === KipperParser.Comma) {
					{
						{
							this.state = 602;
							this.match(KipperParser.Comma);
							this.state = 603;
							this.assignmentExpression();
						}
					}
					this.state = 608;
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
		this.enterRule(_localctx, 110, KipperParser.RULE_dotNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 609;
				this.match(KipperParser.Dot);
				this.state = 610;
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
		this.enterRule(_localctx, 112, KipperParser.RULE_bracketNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 612;
				this.match(KipperParser.LeftBracket);
				this.state = 613;
				this.expression();
				this.state = 614;
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
		this.enterRule(_localctx, 114, KipperParser.RULE_sliceNotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 616;
				this.match(KipperParser.LeftBracket);
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 23) & ~0x1f) === 0 &&
						((1 << (_la - 23)) &
							((1 << (KipperParser.CallFunc - 23)) |
								(1 << (KipperParser.New - 23)) |
								(1 << (KipperParser.True - 23)) |
								(1 << (KipperParser.False - 23)) |
								(1 << (KipperParser.Typeof - 23)) |
								(1 << (KipperParser.Void - 23)) |
								(1 << (KipperParser.Null - 23)) |
								(1 << (KipperParser.Undefined - 23)) |
								(1 << (KipperParser.LeftParen - 23)) |
								(1 << (KipperParser.LeftBracket - 23)) |
								(1 << (KipperParser.LeftBrace - 23)) |
								(1 << (KipperParser.Plus - 23)) |
								(1 << (KipperParser.PlusPlus - 23)) |
								(1 << (KipperParser.Minus - 23)) |
								(1 << (KipperParser.MinusMinus - 23)))) !==
							0) ||
					(((_la - 57) & ~0x1f) === 0 &&
						((1 << (_la - 57)) &
							((1 << (KipperParser.Not - 57)) |
								(1 << (KipperParser.BitwiseNot - 57)) |
								(1 << (KipperParser.Identifier - 57)) |
								(1 << (KipperParser.IntegerConstant - 57)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.FloatingConstant - 57)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
							0)
				) {
					{
						this.state = 617;
						this.expression();
						_localctx.sliceStart = true;
					}
				}

				this.state = 622;
				this.match(KipperParser.Colon);
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 23) & ~0x1f) === 0 &&
						((1 << (_la - 23)) &
							((1 << (KipperParser.CallFunc - 23)) |
								(1 << (KipperParser.New - 23)) |
								(1 << (KipperParser.True - 23)) |
								(1 << (KipperParser.False - 23)) |
								(1 << (KipperParser.Typeof - 23)) |
								(1 << (KipperParser.Void - 23)) |
								(1 << (KipperParser.Null - 23)) |
								(1 << (KipperParser.Undefined - 23)) |
								(1 << (KipperParser.LeftParen - 23)) |
								(1 << (KipperParser.LeftBracket - 23)) |
								(1 << (KipperParser.LeftBrace - 23)) |
								(1 << (KipperParser.Plus - 23)) |
								(1 << (KipperParser.PlusPlus - 23)) |
								(1 << (KipperParser.Minus - 23)) |
								(1 << (KipperParser.MinusMinus - 23)))) !==
							0) ||
					(((_la - 57) & ~0x1f) === 0 &&
						((1 << (_la - 57)) &
							((1 << (KipperParser.Not - 57)) |
								(1 << (KipperParser.BitwiseNot - 57)) |
								(1 << (KipperParser.Identifier - 57)) |
								(1 << (KipperParser.IntegerConstant - 57)) |
								(1 << (KipperParser.SingleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.DoubleQuoteStringLiteral - 57)) |
								(1 << (KipperParser.FloatingConstant - 57)) |
								(1 << (KipperParser.FStringSingleQuoteStart - 57)) |
								(1 << (KipperParser.FStringDoubleQuoteStart - 57)))) !==
							0)
				) {
					{
						this.state = 623;
						this.expression();
						_localctx.sliceEnd = true;
					}
				}

				this.state = 628;
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
		this.enterRule(_localctx, 116, KipperParser.RULE_postfixExpression);
		try {
			this.state = 633;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 630;
						this.computedPrimaryExpression(0);
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 631;
						this.incrementOrDecrementPostfixExpression();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 632;
						this.typeofExpression();
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
		this.enterRule(_localctx, 118, KipperParser.RULE_incrementOrDecrementPostfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 635;
				this.computedPrimaryExpression(0);
				this.state = 636;
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
	public typeofExpression(): TypeofExpressionContext {
		let _localctx: TypeofExpressionContext = new TypeofExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, KipperParser.RULE_typeofExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 638;
				this.match(KipperParser.Typeof);
				this.state = 639;
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
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, KipperParser.RULE_unaryExpression);
		try {
			this.state = 644;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case KipperParser.CallFunc:
				case KipperParser.New:
				case KipperParser.True:
				case KipperParser.False:
				case KipperParser.Typeof:
				case KipperParser.Void:
				case KipperParser.Null:
				case KipperParser.Undefined:
				case KipperParser.LeftParen:
				case KipperParser.LeftBracket:
				case KipperParser.LeftBrace:
				case KipperParser.Identifier:
				case KipperParser.IntegerConstant:
				case KipperParser.SingleQuoteStringLiteral:
				case KipperParser.DoubleQuoteStringLiteral:
				case KipperParser.FloatingConstant:
				case KipperParser.FStringSingleQuoteStart:
				case KipperParser.FStringDoubleQuoteStart:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 641;
						this.postfixExpression();
					}
					break;
				case KipperParser.PlusPlus:
				case KipperParser.MinusMinus:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 642;
						this.incrementOrDecrementUnaryExpression();
					}
					break;
				case KipperParser.Plus:
				case KipperParser.Minus:
				case KipperParser.Not:
				case KipperParser.BitwiseNot:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 643;
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
		this.enterRule(_localctx, 124, KipperParser.RULE_incrementOrDecrementUnaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 646;
				this.incrementOrDecrementOperator();
				this.state = 647;
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
		this.enterRule(_localctx, 126, KipperParser.RULE_operatorModifiedUnaryExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 649;
				this.unaryOperator();
				this.state = 650;
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
		this.enterRule(_localctx, 128, KipperParser.RULE_incrementOrDecrementOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 652;
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
		this.enterRule(_localctx, 130, KipperParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 654;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 47) & ~0x1f) === 0 &&
						((1 << (_la - 47)) &
							((1 << (KipperParser.Plus - 47)) |
								(1 << (KipperParser.Minus - 47)) |
								(1 << (KipperParser.Not - 47)) |
								(1 << (KipperParser.BitwiseNot - 47)))) !==
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
		this.enterRule(_localctx, 132, KipperParser.RULE_castOrConvertExpression);
		try {
			this.state = 661;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
				case 1:
					_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 656;
						this.unaryExpression();
					}
					break;

				case 2:
					_localctx = new ActualCastOrConvertExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 657;
						this.unaryExpression();
						this.state = 658;
						this.match(KipperParser.As);
						this.state = 659;
						this.typeSpecifierExpression();
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
		let _startState: number = 134;
		this.enterRecursionRule(_localctx, 134, KipperParser.RULE_multiplicativeExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnMultiplicativeExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 664;
					this.castOrConvertExpression();
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 671;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
								this.state = 666;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 667;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 51) & ~0x1f) === 0 &&
										((1 << (_la - 51)) &
											((1 << (KipperParser.Star - 51)) |
												(1 << (KipperParser.Div - 51)) |
												(1 << (KipperParser.Mod - 51)) |
												(1 << (KipperParser.PowerTo - 51)))) !==
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
								this.state = 668;
								this.castOrConvertExpression();
							}
						}
					}
					this.state = 673;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
		let _startState: number = 136;
		this.enterRecursionRule(_localctx, 136, KipperParser.RULE_additiveExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnAdditiveExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 675;
					this.multiplicativeExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 682;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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
								this.state = 677;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 678;
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
								this.state = 679;
								this.multiplicativeExpression(0);
							}
						}
					}
					this.state = 684;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 62, this._ctx);
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

	public bitwiseShiftExpression(): BitwiseShiftExpressionContext;
	public bitwiseShiftExpression(_p: number): BitwiseShiftExpressionContext;
	// @RuleVersion(0)
	public bitwiseShiftExpression(_p?: number): BitwiseShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BitwiseShiftExpressionContext = new BitwiseShiftExpressionContext(this._ctx, _parentState);
		let _prevctx: BitwiseShiftExpressionContext = _localctx;
		let _startState: number = 138;
		this.enterRecursionRule(_localctx, 138, KipperParser.RULE_bitwiseShiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnBitwiseShiftExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 686;
					this.additiveExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualBitwiseShiftExpressionContext(
									new BitwiseShiftExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_bitwiseShiftExpression);
								this.state = 688;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 689;
								this.bitwiseShiftOperators();
								this.state = 690;
								this.bitwiseAndExpression(0);
							}
						}
					}
					this.state = 696;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
	public bitwiseShiftOperators(): BitwiseShiftOperatorsContext {
		let _localctx: BitwiseShiftOperatorsContext = new BitwiseShiftOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, KipperParser.RULE_bitwiseShiftOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 697;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 74) & ~0x1f) === 0 &&
						((1 << (_la - 74)) &
							((1 << (KipperParser.BitwiseZeroFillLeftShift - 74)) |
								(1 << (KipperParser.BitwiseSignedRightShift - 74)) |
								(1 << (KipperParser.BitwiseZeroFillRightShift - 74)))) !==
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

	public instanceOfExpression(): InstanceOfExpressionContext;
	public instanceOfExpression(_p: number): InstanceOfExpressionContext;
	// @RuleVersion(0)
	public instanceOfExpression(_p?: number): InstanceOfExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InstanceOfExpressionContext = new InstanceOfExpressionContext(this._ctx, _parentState);
		let _prevctx: InstanceOfExpressionContext = _localctx;
		let _startState: number = 142;
		this.enterRecursionRule(_localctx, 142, KipperParser.RULE_instanceOfExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnInstanceOfExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 700;
					this.bitwiseShiftExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 707;
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
								_localctx = new ActualInstanceOfExpressionContext(
									new InstanceOfExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_instanceOfExpression);
								this.state = 702;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 703;
								this.match(KipperParser.InstanceOf);
								this.state = 704;
								this.typeSpecifierExpression();
							}
						}
					}
					this.state = 709;
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

	public matchesExpression(): MatchesExpressionContext;
	public matchesExpression(_p: number): MatchesExpressionContext;
	// @RuleVersion(0)
	public matchesExpression(_p?: number): MatchesExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MatchesExpressionContext = new MatchesExpressionContext(this._ctx, _parentState);
		let _prevctx: MatchesExpressionContext = _localctx;
		let _startState: number = 144;
		this.enterRecursionRule(_localctx, 144, KipperParser.RULE_matchesExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnMatchesExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 711;
					this.instanceOfExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 718;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualMatchesExpressionContext(new MatchesExpressionContext(_parentctx, _parentState));
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_matchesExpression);
								this.state = 713;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 714;
								this.match(KipperParser.Matches);
								this.state = 715;
								this.typeSpecifierExpression();
							}
						}
					}
					this.state = 720;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
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
		let _startState: number = 146;
		this.enterRecursionRule(_localctx, 146, KipperParser.RULE_relationalExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnRelationalExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 722;
					this.matchesExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 729;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
								this.state = 724;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 725;
								_la = this._input.LA(1);
								if (
									!(
										((_la - 66) & ~0x1f) === 0 &&
										((1 << (_la - 66)) &
											((1 << (KipperParser.Less - 66)) |
												(1 << (KipperParser.LessEqual - 66)) |
												(1 << (KipperParser.Greater - 66)) |
												(1 << (KipperParser.GreaterEqual - 66)))) !==
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
								this.state = 726;
								this.relationalExpression(2);
							}
						}
					}
					this.state = 731;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
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
		let _startState: number = 148;
		this.enterRecursionRule(_localctx, 148, KipperParser.RULE_equalityExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnEqualityExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 733;
					this.relationalExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 740;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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
								this.state = 735;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 736;
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
								this.state = 737;
								this.relationalExpression(0);
							}
						}
					}
					this.state = 742;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 67, this._ctx);
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

	public bitwiseAndExpression(): BitwiseAndExpressionContext;
	public bitwiseAndExpression(_p: number): BitwiseAndExpressionContext;
	// @RuleVersion(0)
	public bitwiseAndExpression(_p?: number): BitwiseAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BitwiseAndExpressionContext = new BitwiseAndExpressionContext(this._ctx, _parentState);
		let _prevctx: BitwiseAndExpressionContext = _localctx;
		let _startState: number = 150;
		this.enterRecursionRule(_localctx, 150, KipperParser.RULE_bitwiseAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnBitwiseAndExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 744;
					this.equalityExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 751;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualBitwiseAndExpressionContext(
									new BitwiseAndExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_bitwiseAndExpression);
								this.state = 746;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 747;
								this.match(KipperParser.BitwiseAnd);
								this.state = 748;
								this.equalityExpression(0);
							}
						}
					}
					this.state = 753;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 68, this._ctx);
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

	public bitwiseXorExpression(): BitwiseXorExpressionContext;
	public bitwiseXorExpression(_p: number): BitwiseXorExpressionContext;
	// @RuleVersion(0)
	public bitwiseXorExpression(_p?: number): BitwiseXorExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BitwiseXorExpressionContext = new BitwiseXorExpressionContext(this._ctx, _parentState);
		let _prevctx: BitwiseXorExpressionContext = _localctx;
		let _startState: number = 152;
		this.enterRecursionRule(_localctx, 152, KipperParser.RULE_bitwiseXorExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnBitwiseXorExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 755;
					this.bitwiseAndExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 762;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualBitwiseXorExpressionContext(
									new BitwiseXorExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_bitwiseXorExpression);
								this.state = 757;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 758;
								this.match(KipperParser.BitwiseXor);
								this.state = 759;
								this.bitwiseAndExpression(0);
							}
						}
					}
					this.state = 764;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
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

	public bitwiseOrExpression(): BitwiseOrExpressionContext;
	public bitwiseOrExpression(_p: number): BitwiseOrExpressionContext;
	// @RuleVersion(0)
	public bitwiseOrExpression(_p?: number): BitwiseOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BitwiseOrExpressionContext = new BitwiseOrExpressionContext(this._ctx, _parentState);
		let _prevctx: BitwiseOrExpressionContext = _localctx;
		let _startState: number = 154;
		this.enterRecursionRule(_localctx, 154, KipperParser.RULE_bitwiseOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnBitwiseOrExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 766;
					this.bitwiseXorExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 773;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							{
								_localctx = new ActualBitwiseOrExpressionContext(
									new BitwiseOrExpressionContext(_parentctx, _parentState),
								);
								this.pushNewRecursionContext(_localctx, _startState, KipperParser.RULE_bitwiseOrExpression);
								this.state = 768;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 769;
								this.match(KipperParser.BitwiseOr);
								this.state = 770;
								this.bitwiseXorExpression(0);
							}
						}
					}
					this.state = 775;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
		let _startState: number = 156;
		this.enterRecursionRule(_localctx, 156, KipperParser.RULE_logicalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalAndExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 777;
					this.bitwiseOrExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 784;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
								this.state = 779;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 780;
								this.match(KipperParser.AndAnd);
								this.state = 781;
								this.bitwiseOrExpression(0);
							}
						}
					}
					this.state = 786;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
		let _startState: number = 158;
		this.enterRecursionRule(_localctx, 158, KipperParser.RULE_logicalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				{
					_localctx = new PassOnLogicalOrExpressionContext(_localctx);
					this._ctx = _localctx;
					_prevctx = _localctx;

					this.state = 788;
					this.logicalAndExpression(0);
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 795;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
								this.state = 790;
								if (!this.precpred(this._ctx, 1)) {
									throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
								}
								this.state = 791;
								this.match(KipperParser.OrOr);
								this.state = 792;
								this.logicalAndExpression(0);
							}
						}
					}
					this.state = 797;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
		this.enterRule(_localctx, 160, KipperParser.RULE_conditionalExpression);
		try {
			this.state = 805;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 73, this._ctx)) {
				case 1:
					_localctx = new PassOnConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 798;
						this.logicalOrExpression(0);
					}
					break;

				case 2:
					_localctx = new ActualConditionalExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 799;
						this.logicalOrExpression(0);
						this.state = 800;
						this.match(KipperParser.QuestionMark);
						this.state = 801;
						this.conditionalExpression();
						this.state = 802;
						this.match(KipperParser.Colon);
						this.state = 803;
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
		this.enterRule(_localctx, 162, KipperParser.RULE_assignmentExpression);
		try {
			this.state = 812;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 74, this._ctx)) {
				case 1:
					_localctx = new PassOnAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 807;
						this.conditionalExpression();
					}
					break;

				case 2:
					_localctx = new ActualAssignmentExpressionContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 808;
						this.computedPrimaryExpression(0);
						this.state = 809;
						this.assignmentOperator();
						this.state = 810;
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
		this.enterRule(_localctx, 164, KipperParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 814;
				_la = this._input.LA(1);
				if (
					!(
						((_la - 58) & ~0x1f) === 0 &&
						((1 << (_la - 58)) &
							((1 << (KipperParser.Assign - 58)) |
								(1 << (KipperParser.PlusAssign - 58)) |
								(1 << (KipperParser.MinusAssign - 58)) |
								(1 << (KipperParser.StarAssign - 58)) |
								(1 << (KipperParser.DivAssign - 58)) |
								(1 << (KipperParser.ModAssign - 58)))) !==
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
		this.enterRule(_localctx, 166, KipperParser.RULE_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 816;
				this.assignmentExpression();
				this.state = 821;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 817;
								this.match(KipperParser.Comma);
								this.state = 818;
								this.assignmentExpression();
							}
						}
					}
					this.state = 823;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
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
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		let _localctx: TypeSpecifierExpressionContext = new TypeSpecifierExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, KipperParser.RULE_typeSpecifierExpression);
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 76, this._ctx)) {
				case 1:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 824;
						this.identifierTypeSpecifierExpression();
					}
					break;

				case 2:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 825;
						this.genericTypeSpecifierExpression();
					}
					break;

				case 3:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 826;
						this.typeofTypeSpecifierExpression();
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
	public identifierTypeSpecifierExpression(): IdentifierTypeSpecifierExpressionContext {
		let _localctx: IdentifierTypeSpecifierExpressionContext = new IdentifierTypeSpecifierExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 170, KipperParser.RULE_identifierTypeSpecifierExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 829;
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
	public genericTypeSpecifierExpression(): GenericTypeSpecifierExpressionContext {
		let _localctx: GenericTypeSpecifierExpressionContext = new GenericTypeSpecifierExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 172, KipperParser.RULE_genericTypeSpecifierExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 831;
				this.typeSpecifierIdentifier();
				this.state = 832;
				this.match(KipperParser.Less);
				this.state = 841;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (
					(((_la - 32) & ~0x1f) === 0 &&
						((1 << (_la - 32)) &
							((1 << (KipperParser.Typeof - 32)) |
								(1 << (KipperParser.Void - 32)) |
								(1 << (KipperParser.Null - 32)) |
								(1 << (KipperParser.Undefined - 32)))) !==
							0) ||
					_la === KipperParser.Identifier
				) {
					{
						this.state = 833;
						this.typeSpecifierExpression();
						this.state = 838;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === KipperParser.Comma) {
							{
								{
									this.state = 834;
									this.match(KipperParser.Comma);
									this.state = 835;
									this.typeSpecifierExpression();
								}
							}
							this.state = 840;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 843;
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
	public typeofTypeSpecifierExpression(): TypeofTypeSpecifierExpressionContext {
		let _localctx: TypeofTypeSpecifierExpressionContext = new TypeofTypeSpecifierExpressionContext(
			this._ctx,
			this.state,
		);
		this.enterRule(_localctx, 174, KipperParser.RULE_typeofTypeSpecifierExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 845;
				this.match(KipperParser.Typeof);
				this.state = 846;
				this.match(KipperParser.LeftParen);
				this.state = 847;
				this.typeSpecifierIdentifier();
				this.state = 848;
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
		this.enterRule(_localctx, 176, KipperParser.RULE_typeSpecifierIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 850;
				_la = this._input.LA(1);
				if (
					!(
						(((_la - 33) & ~0x1f) === 0 &&
							((1 << (_la - 33)) &
								((1 << (KipperParser.Void - 33)) |
									(1 << (KipperParser.Null - 33)) |
									(1 << (KipperParser.Undefined - 33)))) !==
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
			case 25:
				return this.compoundStatement_sempred(_localctx as CompoundStatementContext, predIndex);

			case 53:
				return this.computedPrimaryExpression_sempred(_localctx as ComputedPrimaryExpressionContext, predIndex);

			case 67:
				return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);

			case 68:
				return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);

			case 69:
				return this.bitwiseShiftExpression_sempred(_localctx as BitwiseShiftExpressionContext, predIndex);

			case 71:
				return this.instanceOfExpression_sempred(_localctx as InstanceOfExpressionContext, predIndex);

			case 72:
				return this.matchesExpression_sempred(_localctx as MatchesExpressionContext, predIndex);

			case 73:
				return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);

			case 74:
				return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);

			case 75:
				return this.bitwiseAndExpression_sempred(_localctx as BitwiseAndExpressionContext, predIndex);

			case 76:
				return this.bitwiseXorExpression_sempred(_localctx as BitwiseXorExpressionContext, predIndex);

			case 77:
				return this.bitwiseOrExpression_sempred(_localctx as BitwiseOrExpressionContext, predIndex);

			case 78:
				return this.logicalAndExpression_sempred(_localctx as LogicalAndExpressionContext, predIndex);

			case 79:
				return this.logicalOrExpression_sempred(_localctx as LogicalOrExpressionContext, predIndex);
		}
		return true;
	}
	private compoundStatement_sempred(_localctx: CompoundStatementContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.notInsideExpressionStatement();

			case 1:
				return this.insideLambda();
		}
		return true;
	}
	private computedPrimaryExpression_sempred(_localctx: ComputedPrimaryExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 2:
				return this.precpred(this._ctx, 6);

			case 3:
				return this.precpred(this._ctx, 5);

			case 4:
				return this.precpred(this._ctx, 4);

			case 5:
				return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 6:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 7:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private bitwiseShiftExpression_sempred(_localctx: BitwiseShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 8:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private instanceOfExpression_sempred(_localctx: InstanceOfExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 9:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private matchesExpression_sempred(_localctx: MatchesExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 10:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 11:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 12:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private bitwiseAndExpression_sempred(_localctx: BitwiseAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 13:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private bitwiseXorExpression_sempred(_localctx: BitwiseXorExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 14:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private bitwiseOrExpression_sempred(_localctx: BitwiseOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 15:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalAndExpression_sempred(_localctx: LogicalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 16:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private logicalOrExpression_sempred(_localctx: LogicalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
			case 17:
				return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\\\u0357\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x03\x02\x05\x02\xB6\n\x02\x03\x02\x03\x02\x03\x03" +
		"\x06\x03\xBB\n\x03\r\x03\x0E\x03\xBC\x03\x04\x03\x04\x03\x05\x06\x05\xC2" +
		"\n\x05\r\x05\x0E\x05\xC3\x03\x06\x03\x06\x03\x06\x05\x06\xC9\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xD1\n\x07\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xDD\n\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\xE9\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xEF\n\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\xF4\n\x0F\f\x0F\x0E\x0F\xF7\v\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0101\n\x11\f" +
		"\x11\x0E\x11\u0104\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u010A" +
		"\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\u0114\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0120\n\x15\f\x15\x0E\x15\u0123\v" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05\x16\u012A\n\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u0133\n\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0139\n\x18\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u013E\n\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u0149\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B" +
		"\u014E\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0155\n\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0159\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x05\x1D\u0162\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u016B\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x07\x1F\u0173\n\x1F\f\x1F\x0E\x1F\u0176\v\x1F\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0182\n \x03" +
		'!\x03!\x03!\x05!\u0187\n!\x03"\x03"\x03"\x03"\x05"\u018D\n"\x03' +
		'"\x03"\x05"\u0191\n"\x03"\x03"\x03"\x03"\x05"\u0197\n"\x03"' +
		'\x03"\x03"\x03"\x05"\u019D\n"\x03"\x03"\x03"\x03#\x03#\x03#\x03' +
		"#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
		"&\x03&\x05&\u01B5\n&\x03&\x03&\x03'\x03'\x03'\x03'\x03'\x03'\x03" +
		"'\x03'\x03'\x03'\x05'\u01C3\n'\x03(\x03(\x03(\x05(\u01C8\n(\x03" +
		"(\x03(\x03(\x03(\x03(\x03(\x05(\u01D0\n(\x03(\x03(\x03)\x03)\x03)\x03" +
		")\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x05-\u01E0\n-\x03.\x03.\x03" +
		"/\x03/\x07/\u01E6\n/\f/\x0E/\u01E9\v/\x03/\x03/\x03/\x07/\u01EE\n/\f/" +
		"\x0E/\u01F1\v/\x03/\x05/\u01F4\n/\x030\x030\x030\x050\u01F9\n0\x030\x05" +
		"0\u01FC\n0\x031\x031\x031\x051\u0201\n1\x031\x051\u0204\n1\x032\x032\x03" +
		"3\x033\x033\x033\x073\u020C\n3\f3\x0E3\u020F\v3\x053\u0211\n3\x033\x05" +
		"3\u0214\n3\x033\x033\x034\x034\x034\x034\x074\u021C\n4\f4\x0E4\u021F\v" +
		"4\x054\u0221\n4\x034\x054\u0224\n4\x034\x034\x035\x035\x035\x035\x036" +
		"\x036\x037\x037\x037\x037\x037\x037\x057\u0234\n7\x037\x037\x037\x037" +
		"\x037\x037\x037\x057\u023D\n7\x037\x037\x037\x057\u0242\n7\x037\x037\x03" +
		"7\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x057\u0253" +
		"\n7\x037\x037\x077\u0257\n7\f7\x0E7\u025A\v7\x038\x038\x038\x078\u025F" +
		"\n8\f8\x0E8\u0262\v8\x039\x039\x039\x03:\x03:\x03:\x03:\x03;\x03;\x03" +
		";\x03;\x05;\u026F\n;\x03;\x03;\x03;\x03;\x05;\u0275\n;\x03;\x03;\x03<" +
		"\x03<\x03<\x05<\u027C\n<\x03=\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03?" +
		"\x05?\u0287\n?\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03C\x03C\x03D" +
		"\x03D\x03D\x03D\x03D\x05D\u0298\nD\x03E\x03E\x03E\x03E\x03E\x03E\x07E" +
		"\u02A0\nE\fE\x0EE\u02A3\vE\x03F\x03F\x03F\x03F\x03F\x03F\x07F\u02AB\n" +
		"F\fF\x0EF\u02AE\vF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x07G\u02B7\nG\f" +
		"G\x0EG\u02BA\vG\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x07I\u02C4\nI" +
		"\fI\x0EI\u02C7\vI\x03J\x03J\x03J\x03J\x03J\x03J\x07J\u02CF\nJ\fJ\x0EJ" +
		"\u02D2\vJ\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u02DA\nK\fK\x0EK\u02DD\v" +
		"K\x03L\x03L\x03L\x03L\x03L\x03L\x07L\u02E5\nL\fL\x0EL\u02E8\vL\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x07M\u02F0\nM\fM\x0EM\u02F3\vM\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x07N\u02FB\nN\fN\x0EN\u02FE\vN\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x07O\u0306\nO\fO\x0EO\u0309\vO\x03P\x03P\x03P\x03P\x03P\x03P\x07P\u0311" +
		"\nP\fP\x0EP\u0314\vP\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x07Q\u031C\nQ\fQ\x0E" +
		"Q\u031F\vQ\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0328\nR\x03S\x03S" +
		"\x03S\x03S\x03S\x05S\u032F\nS\x03T\x03T\x03U\x03U\x03U\x07U\u0336\nU\f" +
		"U\x0EU\u0339\vU\x03V\x03V\x03V\x05V\u033E\nV\x03W\x03W\x03X\x03X\x03X" +
		"\x03X\x03X\x07X\u0347\nX\fX\x0EX\u034A\vX\x05X\u034C\nX\x03X\x03X\x03" +
		"Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x02\x02\x0Fl\x88\x8A\x8C\x90\x92" +
		"\x94\x96\x98\x9A\x9C\x9E\xA0[\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		' \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02' +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\x02\x11\x03\x02\b\t\x03\x02\x0F\x10\x03\x02\x1F" +
		" \x03\x02RS\x04\x02QQTT\x03\x02#%\x04\x022244\x06\x021133;;KK\x03\x02" +
		"58\x04\x021133\x03\x02LN\x03\x02DG\x03\x02BC\x03\x02<A\x04\x02#%PP\x02" +
		"\u0363\x02\xB5\x03\x02\x02\x02\x04\xBA\x03\x02\x02\x02\x06\xBE\x03\x02" +
		"\x02\x02\b\xC1\x03\x02\x02\x02\n\xC8\x03\x02\x02\x02\f\xD0\x03\x02\x02" +
		"\x02\x0E\xD2\x03\x02\x02\x02\x10\xD5\x03\x02\x02\x02\x12\xD7\x03\x02\x02" +
		"\x02\x14\xDE\x03\x02\x02\x02\x16\xE0\x03\x02\x02\x02\x18\xE2\x03\x02\x02" +
		"\x02\x1A\xE4\x03\x02\x02\x02\x1C\xF0\x03\x02\x02\x02\x1E\xF8\x03\x02\x02" +
		'\x02 \xFC\x03\x02\x02\x02"\u0109\x03\x02\x02\x02$\u010B\x03\x02\x02\x02' +
		"&\u0110\x03\x02\x02\x02(\u011A\x03\x02\x02\x02*\u0129\x03\x02\x02\x02" +
		",\u012B\x03\x02\x02\x02.\u012F\x03\x02\x02\x020\u013A\x03\x02\x02\x02" +
		"2\u0148\x03\x02\x02\x024\u0158\x03\x02\x02\x026\u015A\x03\x02\x02\x02" +
		"8\u0161\x03\x02\x02\x02:\u0163\x03\x02\x02\x02<\u016C\x03\x02\x02\x02" +
		">\u0181\x03\x02\x02\x02@\u0186\x03\x02\x02\x02B\u0188\x03\x02\x02\x02" +
		"D\u01A1\x03\x02\x02\x02F\u01A7\x03\x02\x02\x02H\u01AF\x03\x02\x02\x02" +
		"J\u01B2\x03\x02\x02\x02L\u01C2\x03\x02\x02\x02N\u01C4\x03\x02\x02\x02" +
		"P\u01D3\x03\x02\x02\x02R\u01D7\x03\x02\x02\x02T\u01D9\x03\x02\x02\x02" +
		"V\u01DB\x03\x02\x02\x02X\u01DF\x03\x02\x02\x02Z\u01E1\x03\x02\x02\x02" +
		"\\\u01F3\x03\x02\x02\x02^\u01FB\x03\x02\x02\x02`\u0203\x03\x02\x02\x02" +
		"b\u0205\x03\x02\x02\x02d\u0207\x03\x02\x02\x02f\u0217\x03\x02\x02\x02" +
		"h\u0227\x03\x02\x02\x02j\u022B\x03\x02\x02\x02l\u0241\x03\x02\x02\x02" +
		"n\u025B\x03\x02\x02\x02p\u0263\x03\x02\x02\x02r\u0266\x03\x02\x02\x02" +
		"t\u026A\x03\x02\x02\x02v\u027B\x03\x02\x02\x02x\u027D\x03\x02\x02\x02" +
		"z\u0280\x03\x02\x02\x02|\u0286\x03\x02\x02\x02~\u0288\x03\x02\x02\x02" +
		"\x80\u028B\x03\x02\x02\x02\x82\u028E\x03\x02\x02\x02\x84\u0290\x03\x02" +
		"\x02\x02\x86\u0297\x03\x02\x02\x02\x88\u0299\x03\x02\x02\x02\x8A\u02A4" +
		"\x03\x02\x02\x02\x8C\u02AF\x03\x02\x02\x02\x8E\u02BB\x03\x02\x02\x02\x90" +
		"\u02BD\x03\x02\x02\x02\x92\u02C8\x03\x02\x02\x02\x94\u02D3\x03\x02\x02" +
		"\x02\x96\u02DE\x03\x02\x02\x02\x98\u02E9\x03\x02\x02\x02\x9A\u02F4\x03" +
		"\x02\x02\x02\x9C\u02FF\x03\x02\x02\x02\x9E\u030A\x03\x02\x02\x02\xA0\u0315" +
		"\x03\x02\x02\x02\xA2\u0327\x03\x02\x02\x02\xA4\u032E\x03\x02\x02\x02\xA6" +
		"\u0330\x03\x02\x02\x02\xA8\u0332\x03\x02\x02\x02\xAA\u033D\x03\x02\x02" +
		"\x02\xAC\u033F\x03\x02\x02\x02\xAE\u0341\x03\x02\x02\x02\xB0\u034F\x03" +
		"\x02\x02\x02\xB2\u0354\x03\x02\x02\x02\xB4\xB6\x05\x04\x03\x02\xB5\xB4" +
		"\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8" +
		"\x07\x02\x02\x03\xB8\x03\x03\x02\x02\x02\xB9\xBB\x05\x06\x04\x02\xBA\xB9" +
		"\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD" +
		"\x03\x02\x02\x02\xBD\x05\x03\x02\x02\x02\xBE\xBF\x05\b\x05\x02\xBF\x07" +
		"\x03\x02\x02\x02\xC0\xC2\x05\n\x06\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC3" +
		"\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\t" +
		"\x03\x02\x02\x02\xC5\xC9\x052\x1A\x02\xC6\xC9\x05\f\x07\x02\xC7\xC9\x07" +
		"'\x02\x02\xC8\xC5\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC7\x03" +
		"\x02\x02\x02\xC9\v\x03\x02\x02\x02\xCA\xCB\x05\x0E\b\x02\xCB\xCC\x07'" +
		"\x02\x02\xCC\xD1\x03\x02\x02\x02\xCD\xD1\x05\x1A\x0E\x02\xCE\xD1\x05 " +
		"\x11\x02\xCF\xD1\x05(\x15\x02\xD0\xCA\x03\x02\x02\x02\xD0\xCD\x03\x02" +
		"\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\r\x03\x02" +
		"\x02\x02\xD2\xD3\x05\x10\t\x02\xD3\xD4\x05\x12\n\x02\xD4\x0F\x03\x02\x02" +
		"\x02\xD5\xD6\t\x02\x02\x02\xD6\x11\x03\x02\x02\x02\xD7\xD8\x05\x16\f\x02" +
		"\xD8\xD9\x07)\x02\x02\xD9\xDC\x05\xAAV\x02\xDA\xDB\x07<\x02\x02\xDB\xDD" +
		"\x05\x14\v\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\x13" +
		"\x03\x02\x02\x02\xDE\xDF\x05\xA4S\x02\xDF\x15\x03\x02\x02\x02\xE0\xE1" +
		"\x05\x18\r\x02\xE1\x17\x03\x02\x02\x02\xE2\xE3\x07P\x02\x02\xE3\x19\x03" +
		"\x02\x02\x02\xE4\xE5\x07\x17\x02\x02\xE5\xE6\x05\x16\f\x02\xE6\xE8\x07" +
		"*\x02\x02\xE7\xE9\x05\x1C\x0F\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03" +
		"\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x07+\x02\x02\xEB\xEC\x07" +
		"\x1A\x02\x02\xEC\xEE\x05\xAAV\x02\xED\xEF\x054\x1B\x02\xEE\xED\x03\x02" +
		"\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\x1B\x03\x02\x02\x02\xF0\xF5\x05\x1E" +
		"\x10\x02\xF1\xF2\x07&\x02\x02\xF2\xF4\x05\x1E\x10\x02\xF3\xF1\x03\x02" +
		"\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02" +
		"\x02\x02\xF6\x1D\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xF9\x05\x16" +
		"\f\x02\xF9\xFA\x07)\x02\x02\xFA\xFB\x05\xAAV\x02\xFB\x1F\x03\x02\x02\x02" +
		"\xFC\xFD\x07\x1C\x02\x02\xFD\xFE\x05\x16\f\x02\xFE\u0102\x07/\x02\x02" +
		'\xFF\u0101\x05"\x12\x02\u0100\xFF\x03\x02\x02\x02\u0101\u0104\x03\x02' +
		"\x02\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103" +
		"\u0105\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105\u0106\x070\x02" +
		"\x02\u0106!\x03\x02\x02\x02\u0107\u010A\x05$\x13\x02\u0108\u010A\x05&" +
		"\x14\x02\u0109\u0107\x03\x02\x02\x02\u0109\u0108\x03\x02\x02\x02\u010A" +
		"#\x03\x02\x02\x02\u010B\u010C\x05\x16\f\x02\u010C\u010D\x07)\x02\x02\u010D" +
		"\u010E\x05\xAAV\x02\u010E\u010F\x07'\x02\x02\u010F%\x03\x02\x02\x02\u0110" +
		"\u0111\x05\x16\f\x02\u0111\u0113\x07*\x02\x02\u0112\u0114\x05\x1C\x0F" +
		"\x02\u0113\u0112\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115" +
		"\x03\x02\x02\x02\u0115\u0116\x07+\x02\x02\u0116\u0117\x07)\x02\x02\u0117" +
		"\u0118\x05\xAAV\x02\u0118\u0119\x07'\x02\x02\u0119'\x03\x02\x02\x02" +
		"\u011A\u011B\x07\x1B\x02\x02\u011B\u011C\x05\x16\f\x02\u011C\u0121\x07" +
		"/\x02\x02\u011D\u0120\x05*\x16\x02\u011E\u0120\x07'\x02\x02\u011F\u011D" +
		"\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02" +
		"\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03" +
		"\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0125\x070\x02\x02\u0125" +
		")\x03\x02\x02\x02\u0126\u012A\x05,\x17\x02\u0127\u012A\x05.\x18\x02\u0128" +
		"\u012A\x050\x19\x02\u0129\u0126\x03\x02\x02\x02\u0129\u0127\x03\x02\x02" +
		"\x02\u0129\u0128\x03\x02\x02\x02\u012A+\x03\x02\x02\x02\u012B\u012C\x05" +
		"\x16\f\x02\u012C\u012D\x07)\x02\x02\u012D\u012E\x05\xAAV\x02\u012E-\x03" +
		"\x02\x02\x02\u012F\u0130\x05\x16\f\x02\u0130\u0132\x07*\x02\x02\u0131" +
		"\u0133\x05\x1C\x0F\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x07+\x02\x02\u0135\u0136" +
		"\x07)\x02\x02\u0136\u0138\x05\xAAV\x02\u0137\u0139\x054\x1B\x02\u0138" +
		"\u0137\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139/\x03\x02\x02" +
		"\x02\u013A\u013B\x07\x1D\x02\x02\u013B\u013D\x07*\x02\x02\u013C\u013E" +
		"\x05\x1C\x0F\x02\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02" +
		"\u013E\u013F\x03\x02\x02\x02\u013F\u0140\x07+\x02\x02\u0140\u0141\x05" +
		"4\x1B\x02\u01411\x03\x02\x02\x02\u0142\u0149\x056\x1C\x02\u0143\u0149" +
		"\x058\x1D\x02\u0144\u0149\x05@!\x02\u0145\u0149\x05H%\x02\u0146\u0149" +
		"\x05J&\x02\u0147\u0149\x054\x1B\x02\u0148\u0142\x03\x02\x02\x02\u0148" +
		"\u0143\x03\x02\x02\x02\u0148\u0144\x03\x02\x02\x02\u0148\u0145\x03\x02" +
		"\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149" +
		"3\x03\x02\x02\x02\u014A\u014B\x06\x1B\x02\x02\u014B\u014D\x07/\x02\x02" +
		"\u014C\u014E\x05\b\x05\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E\x03" +
		"\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0159\x070\x02\x02\u0150" +
		"\u0151\x06\x1B\x03\x02\u0151\u0152\x07/\x02\x02\u0152\u0154\b\x1B\x01" +
		"\x02\u0153\u0155\x05\b\x05\x02\u0154\u0153\x03\x02\x02\x02\u0154\u0155" +
		"\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\b\x1B\x01\x02" +
		"\u0157\u0159\x070\x02\x02\u0158\u014A\x03\x02\x02\x02\u0158\u0150\x03" +
		"\x02\x02\x02\u01595\x03\x02\x02\x02\u015A\u015B\b\x1C\x01\x02\u015B\u015C" +
		"\x05\xA8U\x02\u015C\u015D\x07'\x02\x02\u015D\u015E\b\x1C\x01\x02\u015E" +
		"7\x03\x02\x02\x02\u015F\u0162\x05:\x1E\x02\u0160\u0162\x05<\x1F\x02\u0161" +
		"\u015F\x03\x02\x02\x02\u0161\u0160\x03\x02\x02\x02\u01629\x03\x02\x02" +
		"\x02\u0163\u0164\x07\x13\x02\x02\u0164\u0165\x07*\x02\x02\u0165\u0166" +
		"\x05\xA8U\x02\u0166\u0167\x07+\x02\x02\u0167\u016A\x052\x1A\x02\u0168" +
		"\u0169\x07\x14\x02\x02\u0169\u016B\x052\x1A\x02\u016A\u0168\x03\x02\x02" +
		"\x02\u016A\u016B\x03\x02\x02\x02\u016B;\x03\x02\x02\x02\u016C\u016D\x07" +
		"\f\x02\x02\u016D\u016E\x07*\x02\x02\u016E\u016F\x05\xA8U\x02\u016F\u0170" +
		"\x07+\x02\x02\u0170\u0174\x07/\x02\x02\u0171\u0173\x05> \x02\u0172\u0171" +
		"\x03\x02\x02\x02\u0173\u0176\x03\x02\x02\x02\u0174\u0172\x03\x02\x02\x02" +
		"\u0174\u0175\x03\x02\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u0174\x03" +
		"\x02\x02\x02\u0177\u0178\x070\x02\x02\u0178=\x03\x02\x02\x02\u0179\u017A" +
		"\x07\r\x02\x02\u017A\u017B\x05\xA8U\x02\u017B\u017C\x07)\x02\x02\u017C" +
		"\u017D\x052\x1A\x02\u017D\u0182\x03\x02\x02\x02\u017E\u017F\x07\x0E\x02" +
		"\x02\u017F\u0180\x07)\x02\x02\u0180\u0182\x052\x1A\x02\u0181\u0179\x03" +
		"\x02\x02\x02\u0181\u017E\x03\x02\x02\x02\u0182?\x03\x02\x02\x02\u0183" +
		'\u0187\x05B"\x02\u0184\u0187\x05D#\x02\u0185\u0187\x05F$\x02\u0186\u0183' +
		"\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0185\x03\x02\x02\x02" +
		"\u0187A\x03\x02\x02\x02\u0188\u0189\x07\x15\x02\x02\u0189\u0190\x07*\x02" +
		"\x02\u018A\u018D\x05\x0E\b\x02\u018B\u018D\x05\xA8U\x02\u018C\u018A\x03" +
		"\x02\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E" +
		'\u018F\b"\x01\x02\u018F\u0191\x03\x02\x02\x02\u0190\u018C\x03\x02\x02' +
		"\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0196" +
		"\x07'\x02\x02\u0193\u0194\x05\xA8U\x02\u0194\u0195\b\"\x01\x02\u0195" +
		"\u0197\x03\x02\x02\x02\u0196\u0193\x03\x02\x02\x02\u0196\u0197\x03\x02" +
		"\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019C\x07'\x02\x02\u0199\u019A" +
		'\x05\xA8U\x02\u019A\u019B\b"\x01\x02\u019B\u019D\x03\x02\x02\x02\u019C' +
		"\u0199\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x03\x02" +
		"\x02\x02\u019E\u019F\x07+\x02\x02\u019F\u01A0\x052\x1A\x02\u01A0C\x03" +
		"\x02\x02\x02\u01A1\u01A2\x07\x12\x02\x02\u01A2\u01A3\x07*\x02\x02\u01A3" +
		"\u01A4\x05\xA8U\x02\u01A4\u01A5\x07+\x02\x02\u01A5\u01A6\x052\x1A\x02" +
		"\u01A6E\x03\x02\x02\x02\u01A7\u01A8\x07\x11\x02\x02\u01A8\u01A9\x052\x1A" +
		"\x02\u01A9\u01AA\x07\x12\x02\x02\u01AA\u01AB\x07*\x02\x02\u01AB\u01AC" +
		"\x05\xA8U\x02\u01AC\u01AD\x07+\x02\x02\u01AD\u01AE\x07'\x02\x02\u01AE" +
		"G\x03\x02\x02\x02\u01AF\u01B0\t\x03\x02\x02\u01B0\u01B1\x07'\x02\x02" +
		"\u01B1I\x03\x02\x02\x02\u01B2\u01B4\x07\x18\x02\x02\u01B3\u01B5\x05\xA8" +
		"U\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6" +
		"\x03\x02\x02\x02\u01B6\u01B7\x07'\x02\x02\u01B7K\x03\x02\x02\x02\u01B8" +
		"\u01C3\x05P)\x02\u01B9\u01C3\x05N(\x02\u01BA\u01C3\x05d3\x02\u01BB\u01C3" +
		"\x05f4\x02\u01BC\u01C3\x05R*\x02\u01BD\u01C3\x05T+\x02\u01BE\u01C3\x05" +
		"Z.\x02\u01BF\u01C3\x05\\/\x02\u01C0\u01C3\x05b2\x02\u01C1\u01C3\x05j6" +
		"\x02\u01C2\u01B8\x03\x02\x02\x02\u01C2\u01B9\x03\x02\x02\x02\u01C2\u01BA" +
		"\x03\x02\x02\x02\u01C2\u01BB\x03\x02\x02\x02\u01C2\u01BC\x03\x02\x02\x02" +
		"\u01C2\u01BD\x03\x02\x02\x02\u01C2\u01BE\x03\x02\x02\x02\u01C2\u01BF\x03" +
		"\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3" +
		"M\x03\x02\x02\x02\u01C4\u01C5\b(\x01\x02\u01C5\u01C7\x07*\x02\x02\u01C6" +
		"\u01C8\x05\x1C\x0F\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03\x02" +
		"\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x07+\x02\x02\u01CA\u01CB" +
		"\x07)\x02\x02\u01CB\u01CC\x05\xAAV\x02\u01CC\u01CF\x07\x1A\x02\x02\u01CD" +
		"\u01D0\x05\xA8U\x02\u01CE\u01D0\x054\x1B\x02\u01CF\u01CD\x03\x02\x02\x02" +
		"\u01CF\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\b" +
		"(\x01\x02\u01D2O\x03\x02\x02\x02\u01D3\u01D4\x07*\x02\x02\u01D4\u01D5" +
		"\x05\xA8U\x02\u01D5\u01D6\x07+\x02\x02\u01D6Q\x03\x02\x02\x02\u01D7\u01D8" +
		"\t\x04\x02\x02\u01D8S\x03\x02\x02\x02\u01D9\u01DA\x05V,\x02\u01DAU\x03" +
		"\x02\x02\x02\u01DB\u01DC\x07P\x02\x02\u01DCW\x03\x02\x02\x02\u01DD\u01E0" +
		"\x05V,\x02\u01DE\u01E0\x05Z.\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01DE" +
		"\x03\x02\x02\x02\u01E0Y\x03\x02\x02\x02\u01E1\u01E2\t\x05\x02\x02\u01E2" +
		"[\x03\x02\x02\x02\u01E3\u01E7\x07W\x02\x02\u01E4\u01E6\x05^0\x02\u01E5" +
		"\u01E4\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02\u01E7\u01E5\x03\x02" +
		"\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA\x03\x02\x02\x02\u01E9" +
		"\u01E7\x03\x02\x02\x02\u01EA\u01F4\x07Y\x02\x02\u01EB\u01EF\x07X\x02\x02" +
		"\u01EC\u01EE\x05`1\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02" +
		"\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0" +
		"\u01F2\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F4\x07[\x02" +
		"\x02\u01F3\u01E3\x03\x02\x02\x02\u01F3\u01EB\x03\x02\x02\x02\u01F4]\x03" +
		"\x02\x02\x02\u01F5\u01FC\x07Z\x02\x02\u01F6\u01F8\x07\x03\x02\x02\u01F7" +
		"\u01F9\x05\xA8U\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02" +
		"\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FC\x07.\x02\x02\u01FB\u01F5" +
		"\x03\x02\x02\x02\u01FB\u01F6\x03\x02\x02\x02\u01FC_\x03\x02\x02\x02\u01FD" +
		"\u0204\x07\\\x02\x02\u01FE\u0200\x07\x03\x02\x02\u01FF\u0201\x05\xA8U" +
		"\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202" +
		"\x03\x02\x02\x02\u0202\u0204\x07.\x02\x02\u0203\u01FD\x03\x02\x02\x02" +
		"\u0203\u01FE";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u0204a\x03\x02\x02\x02\u0205\u0206\t\x06\x02\x02\u0206" +
		"c\x03\x02\x02\x02\u0207\u0210\x07,\x02\x02\u0208\u020D\x05\xA8U\x02\u0209" +
		"\u020A\x07&\x02\x02\u020A\u020C\x05\xA8U\x02\u020B\u0209\x03\x02\x02\x02" +
		"\u020C\u020F\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020E\x03" +
		"\x02\x02\x02\u020E\u0211\x03\x02\x02\x02\u020F\u020D\x03\x02\x02\x02\u0210" +
		"\u0208\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0213\x03\x02" +
		"\x02\x02\u0212\u0214\x07&\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213\u0214" +
		"\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0216\x07-\x02\x02" +
		"\u0216e\x03\x02\x02\x02\u0217\u0220\x07/\x02\x02\u0218\u021D\x05h5\x02" +
		"\u0219\u021A\x07&\x02\x02\u021A\u021C\x05h5\x02\u021B\u0219\x03\x02\x02" +
		"\x02\u021C\u021F\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E" +
		"\x03\x02\x02\x02\u021E\u0221\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02" +
		"\u0220\u0218\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u0223\x03" +
		"\x02\x02\x02\u0222\u0224\x07&\x02\x02\u0223\u0222\x03\x02\x02\x02\u0223" +
		"\u0224\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226\x070\x02" +
		"\x02\u0226g\x03\x02\x02\x02\u0227\u0228\x05X-\x02\u0228\u0229\x07)\x02" +
		"\x02\u0229\u022A\x05\xA8U\x02\u022Ai\x03\x02\x02\x02\u022B\u022C\t\x07" +
		"\x02\x02\u022Ck\x03\x02\x02\x02\u022D\u022E\b7\x01\x02\u022E\u0242\x05" +
		"L'\x02\u022F\u0230\x07\x19\x02\x02\u0230\u0231\x05l7\x02\u0231\u0233" +
		"\x07*\x02\x02\u0232\u0234\x05n8\x02\u0233\u0232\x03\x02\x02\x02\u0233" +
		"\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x07+\x02" +
		"\x02\u0236\u0237\b7\x01\x02\u0237\u0242\x03\x02\x02\x02\u0238\u0239\x07" +
		"\x1E\x02\x02\u0239\u023A\x05\xAAV\x02\u023A\u023C\x07*\x02\x02\u023B\u023D" +
		"\x05n8\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D" +
		"\u023E\x03\x02\x02\x02\u023E\u023F\x07+\x02\x02\u023F\u0240\b7\x01\x02" +
		"\u0240\u0242\x03\x02\x02\x02\u0241\u022D\x03\x02\x02\x02\u0241\u022F\x03" +
		"\x02\x02\x02\u0241\u0238\x03\x02\x02\x02\u0242\u0258\x03\x02\x02\x02\u0243" +
		"\u0244\f\b\x02\x02\u0244\u0245\x05p9\x02\u0245\u0246\b7\x01\x02\u0246" +
		"\u0257\x03\x02\x02\x02\u0247\u0248\f\x07\x02\x02\u0248\u0249\x05r:\x02" +
		"\u0249\u024A\b7\x01\x02\u024A\u0257\x03\x02\x02\x02\u024B\u024C\f\x06" +
		"\x02\x02\u024C\u024D\x05t;\x02\u024D\u024E\b7\x01\x02\u024E\u0257\x03" +
		"\x02\x02\x02\u024F\u0250\f\x05\x02\x02\u0250\u0252\x07*\x02\x02\u0251" +
		"\u0253\x05n8\x02\u0252\u0251\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02" +
		"\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x07+\x02\x02\u0255\u0257\b7\x01" +
		"\x02\u0256\u0243\x03\x02\x02\x02\u0256\u0247\x03\x02\x02\x02\u0256\u024B" +
		"\x03\x02\x02\x02\u0256\u024F\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02" +
		"\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259m\x03\x02" +
		"\x02\x02\u025A\u0258\x03\x02\x02\x02\u025B\u0260\x05\xA4S\x02\u025C\u025D" +
		"\x07&\x02\x02\u025D\u025F\x05\xA4S\x02\u025E\u025C\x03\x02\x02\x02\u025F" +
		"\u0262\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03\x02" +
		"\x02\x02\u0261o\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263\u0264" +
		"\x07O\x02\x02\u0264\u0265\x05V,\x02\u0265q\x03\x02\x02\x02\u0266\u0267" +
		"\x07,\x02\x02\u0267\u0268\x05\xA8U\x02\u0268\u0269\x07-\x02\x02\u0269" +
		"s\x03\x02\x02\x02\u026A\u026E\x07,\x02\x02\u026B\u026C\x05\xA8U\x02\u026C" +
		"\u026D\b;\x01\x02\u026D\u026F\x03\x02\x02\x02\u026E\u026B\x03\x02\x02" +
		"\x02\u026E\u026F\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0274" +
		"\x07)\x02\x02\u0271\u0272\x05\xA8U\x02\u0272\u0273\b;\x01\x02\u0273\u0275" +
		"\x03\x02\x02\x02\u0274\u0271\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02" +
		"\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x07-\x02\x02\u0277u\x03\x02\x02" +
		"\x02\u0278\u027C\x05l7\x02\u0279\u027C\x05x=\x02\u027A\u027C\x05z>\x02" +
		"\u027B\u0278\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027A\x03" +
		"\x02\x02\x02\u027Cw\x03\x02\x02\x02\u027D\u027E\x05l7\x02\u027E\u027F" +
		'\x05\x82B\x02\u027Fy\x03\x02\x02\x02\u0280\u0281\x07"\x02\x02\u0281\u0282' +
		"\x05\xA4S\x02\u0282{\x03\x02\x02\x02\u0283\u0287\x05v<\x02\u0284\u0287" +
		"\x05~@\x02\u0285\u0287\x05\x80A\x02\u0286\u0283\x03\x02\x02\x02\u0286" +
		"\u0284\x03\x02\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287}\x03\x02\x02" +
		"\x02\u0288\u0289\x05\x82B\x02\u0289\u028A\x05v<\x02\u028A\x7F\x03\x02" +
		"\x02\x02\u028B\u028C\x05\x84C\x02\u028C\u028D\x05v<\x02\u028D\x81\x03" +
		"\x02\x02\x02\u028E\u028F\t\b\x02\x02\u028F\x83\x03\x02\x02\x02\u0290\u0291" +
		"\t\t\x02\x02\u0291\x85\x03\x02\x02\x02\u0292\u0298\x05|?\x02\u0293\u0294" +
		"\x05|?\x02\u0294\u0295\x07\n\x02\x02\u0295\u0296\x05\xAAV\x02\u0296\u0298" +
		"\x03\x02\x02\x02\u0297\u0292\x03\x02\x02\x02\u0297\u0293\x03\x02\x02\x02" +
		"\u0298\x87\x03\x02\x02\x02\u0299\u029A\bE\x01\x02\u029A\u029B\x05\x86" +
		"D\x02\u029B\u02A1\x03\x02\x02\x02\u029C\u029D\f\x03\x02\x02\u029D\u029E" +
		"\t\n\x02\x02\u029E\u02A0\x05\x86D\x02\u029F\u029C\x03\x02\x02\x02\u02A0" +
		"\u02A3\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02" +
		"\x02\x02\u02A2\x89\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4\u02A5" +
		"\bF\x01\x02\u02A5\u02A6\x05\x88E\x02\u02A6\u02AC\x03\x02\x02\x02\u02A7" +
		"\u02A8\f\x03\x02\x02\u02A8\u02A9\t\v\x02\x02\u02A9\u02AB\x05\x88E\x02" +
		"\u02AA\u02A7\x03\x02\x02\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03" +
		"\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\x8B\x03\x02\x02\x02\u02AE" +
		"\u02AC\x03\x02\x02\x02\u02AF\u02B0\bG\x01\x02\u02B0\u02B1\x05\x8AF\x02" +
		"\u02B1\u02B8\x03\x02\x02\x02\u02B2\u02B3\f\x03\x02\x02\u02B3\u02B4\x05" +
		"\x8EH\x02\u02B4\u02B5\x05\x98M\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6\u02B2" +
		"\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02" +
		"\u02B8\u02B9\x03\x02\x02\x02\u02B9\x8D\x03\x02\x02\x02\u02BA\u02B8\x03" +
		"\x02\x02\x02\u02BB\u02BC\t\f\x02\x02\u02BC\x8F\x03\x02\x02\x02\u02BD\u02BE" +
		"\bI\x01\x02\u02BE\u02BF\x05\x8CG\x02\u02BF\u02C5\x03\x02\x02\x02\u02C0" +
		"\u02C1\f\x03\x02\x02\u02C1\u02C2\x07\x07\x02\x02\u02C2\u02C4\x05\xAAV" +
		"\x02\u02C3\u02C0\x03\x02\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3" +
		"\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6\x91\x03\x02\x02\x02" +
		"\u02C7\u02C5\x03\x02\x02\x02\u02C8\u02C9\bJ\x01\x02\u02C9\u02CA\x05\x90" +
		"I\x02\u02CA\u02D0\x03\x02\x02\x02\u02CB\u02CC\f\x03\x02\x02\u02CC\u02CD" +
		"\x07!\x02\x02\u02CD\u02CF\x05\xAAV\x02\u02CE\u02CB\x03\x02\x02\x02\u02CF" +
		"\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02" +
		"\x02\x02\u02D1\x93\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02D4" +
		"\bK\x01\x02\u02D4\u02D5\x05\x92J\x02\u02D5\u02DB\x03\x02\x02\x02\u02D6" +
		"\u02D7\f\x03\x02\x02\u02D7\u02D8\t\r\x02\x02\u02D8\u02DA\x05\x94K\x04" +
		"\u02D9\u02D6\x03\x02\x02\x02\u02DA\u02DD\x03\x02\x02\x02\u02DB\u02D9\x03" +
		"\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\x95\x03\x02\x02\x02\u02DD" +
		"\u02DB\x03\x02\x02\x02\u02DE\u02DF\bL\x01\x02\u02DF\u02E0\x05\x94K\x02" +
		"\u02E0\u02E6\x03\x02\x02\x02\u02E1\u02E2\f\x03\x02\x02\u02E2\u02E3\t\x0E" +
		"\x02\x02\u02E3\u02E5\x05\x94K\x02\u02E4\u02E1\x03\x02\x02\x02\u02E5\u02E8" +
		"\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02" +
		"\u02E7\x97\x03\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E9\u02EA\bM" +
		"\x01\x02\u02EA\u02EB\x05\x96L\x02\u02EB\u02F1\x03\x02\x02\x02\u02EC\u02ED" +
		"\f\x03\x02\x02\u02ED\u02EE\x07H\x02\x02\u02EE\u02F0\x05\x96L\x02\u02EF" +
		"\u02EC\x03\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02" +
		"\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\x99\x03\x02\x02\x02\u02F3\u02F1" +
		"\x03\x02\x02\x02\u02F4\u02F5\bN\x01\x02\u02F5\u02F6\x05\x98M\x02\u02F6" +
		"\u02FC\x03\x02\x02\x02\u02F7\u02F8\f\x03\x02\x02\u02F8\u02F9\x07J\x02" +
		"\x02\u02F9\u02FB\x05\x98M\x02\u02FA\u02F7\x03\x02\x02\x02\u02FB\u02FE" +
		"\x03\x02\x02\x02\u02FC\u02FA\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02" +
		"\u02FD\x9B\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FF\u0300\bO" +
		"\x01\x02\u0300\u0301\x05\x9AN\x02\u0301\u0307\x03\x02\x02\x02\u0302\u0303" +
		"\f\x03\x02\x02\u0303\u0304\x07I\x02\x02\u0304\u0306\x05\x9AN\x02\u0305" +
		"\u0302\x03\x02\x02\x02\u0306\u0309\x03\x02\x02\x02\u0307\u0305\x03\x02" +
		"\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\x9D\x03\x02\x02\x02\u0309\u0307" +
		"\x03\x02\x02\x02\u030A\u030B\bP\x01\x02\u030B\u030C\x05\x9CO\x02\u030C" +
		"\u0312\x03\x02\x02\x02\u030D\u030E\f\x03\x02\x02\u030E\u030F\x079\x02" +
		"\x02\u030F\u0311\x05\x9CO\x02\u0310\u030D\x03\x02\x02\x02\u0311\u0314" +
		"\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02" +
		"\u0313\x9F\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0316\bQ" +
		"\x01\x02\u0316\u0317\x05\x9EP\x02\u0317\u031D\x03\x02\x02\x02\u0318\u0319" +
		"\f\x03\x02\x02\u0319\u031A\x07:\x02\x02\u031A\u031C\x05\x9EP\x02\u031B" +
		"\u0318\x03\x02\x02\x02\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02" +
		"\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\xA1\x03\x02\x02\x02\u031F\u031D" +
		"\x03\x02\x02\x02\u0320\u0328\x05\xA0Q\x02\u0321\u0322\x05\xA0Q\x02\u0322" +
		"\u0323\x07(\x02\x02\u0323\u0324\x05\xA2R\x02\u0324\u0325\x07)\x02\x02" +
		"\u0325\u0326\x05\xA2R\x02\u0326\u0328\x03\x02\x02\x02\u0327\u0320\x03" +
		"\x02\x02\x02\u0327\u0321\x03\x02\x02\x02\u0328\xA3\x03\x02\x02\x02\u0329" +
		"\u032F\x05\xA2R\x02\u032A\u032B\x05l7\x02\u032B\u032C\x05\xA6T\x02\u032C" +
		"\u032D\x05\xA4S\x02\u032D\u032F\x03\x02\x02\x02\u032E\u0329\x03\x02\x02" +
		"\x02\u032E\u032A\x03\x02\x02\x02\u032F\xA5\x03\x02\x02\x02\u0330\u0331" +
		"\t\x0F\x02\x02\u0331\xA7\x03\x02\x02\x02\u0332\u0337\x05\xA4S\x02\u0333" +
		"\u0334\x07&\x02\x02\u0334\u0336\x05\xA4S\x02\u0335\u0333\x03\x02\x02\x02" +
		"\u0336\u0339\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03" +
		"\x02\x02\x02\u0338\xA9\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u033A" +
		"\u033E\x05\xACW\x02\u033B\u033E\x05\xAEX\x02\u033C\u033E\x05\xB0Y\x02" +
		"\u033D\u033A\x03\x02\x02\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033C\x03" +
		"\x02\x02\x02\u033E\xAB\x03\x02\x02\x02\u033F\u0340\x05\xB2Z\x02\u0340" +
		"\xAD\x03\x02\x02\x02\u0341\u0342\x05\xB2Z\x02\u0342\u034B\x07D\x02\x02" +
		"\u0343\u0348\x05\xAAV\x02\u0344\u0345\x07&\x02\x02\u0345\u0347\x05\xAA" +
		"V\x02\u0346\u0344\x03\x02\x02\x02\u0347\u034A\x03\x02\x02\x02\u0348\u0346" +
		"\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034C\x03\x02\x02\x02" +
		"\u034A\u0348\x03\x02\x02\x02\u034B\u0343\x03\x02\x02\x02\u034B\u034C\x03" +
		"\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034E\x07F\x02\x02\u034E" +
		'\xAF\x03\x02\x02\x02\u034F\u0350\x07"\x02\x02\u0350\u0351\x07*\x02\x02' +
		"\u0351\u0352\x05\xB2Z\x02\u0352\u0353\x07+\x02\x02\u0353\xB1\x03\x02\x02" +
		"\x02\u0354\u0355\t\x10\x02\x02\u0355\xB3\x03\x02\x02\x02Q\xB5\xBC\xC3" +
		"\xC8\xD0\xDC\xE8\xEE\xF5\u0102\u0109\u0113\u011F\u0121\u0129\u0132\u0138" +
		"\u013D\u0148\u014D\u0154\u0158\u0161\u016A\u0174\u0181\u0186\u018C\u0190" +
		"\u0196\u019C\u01B4\u01C2\u01C7\u01CF\u01DF\u01E7\u01EF\u01F3\u01F8\u01FB" +
		"\u0200\u0203\u020D\u0210\u0213\u021D\u0220\u0223\u0233\u023C\u0241\u0252" +
		"\u0256\u0258\u0260\u026E\u0274\u027B\u0286\u0297\u02A1\u02AC\u02B8\u02C5" +
		"\u02D0\u02DB\u02E6\u02F1\u02FC\u0307\u0312\u031D\u0327\u032E\u0337\u033D" +
		"\u0348\u034B";
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
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
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

export class InitDeclaratorContext extends KipperParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
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
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
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
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
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

export class InterfaceDeclarationContext extends KipperParserRuleContext {
	public Interface(): TerminalNode {
		return this.getToken(KipperParser.Interface, 0);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(KipperParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(KipperParser.RightBrace, 0);
	}
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext[];
	public interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext;
	public interfaceMemberDeclaration(
		i?: number,
	): InterfaceMemberDeclarationContext | InterfaceMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_interfaceDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InterfaceMemberDeclarationContext extends KipperParserRuleContext {
	public interfacePropertyDeclaration(): InterfacePropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfacePropertyDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_interfaceMemberDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterInterfaceMemberDeclaration) {
			listener.enterInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitInterfaceMemberDeclaration) {
			listener.exitInterfaceMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InterfacePropertyDeclarationContext extends KipperParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
	}
	public SemiColon(): TerminalNode {
		return this.getToken(KipperParser.SemiColon, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_interfacePropertyDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterInterfacePropertyDeclaration) {
			listener.enterInterfacePropertyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitInterfacePropertyDeclaration) {
			listener.exitInterfacePropertyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitInterfacePropertyDeclaration) {
			return visitor.visitInterfacePropertyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InterfaceMethodDeclarationContext extends KipperParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
	}
	public SemiColon(): TerminalNode {
		return this.getToken(KipperParser.SemiColon, 0);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_interfaceMethodDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassDeclarationContext extends KipperParserRuleContext {
	public Class(): TerminalNode {
		return this.getToken(KipperParser.Class, 0);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public LeftBrace(): TerminalNode {
		return this.getToken(KipperParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(KipperParser.RightBrace, 0);
	}
	public classMemberDeclaration(): ClassMemberDeclarationContext[];
	public classMemberDeclaration(i: number): ClassMemberDeclarationContext;
	public classMemberDeclaration(i?: number): ClassMemberDeclarationContext | ClassMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassMemberDeclarationContext);
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
		return KipperParser.RULE_classDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassMemberDeclarationContext extends KipperParserRuleContext {
	public classPropertyDeclaration(): ClassPropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassPropertyDeclarationContext);
	}
	public classMethodDeclaration(): ClassMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassMethodDeclarationContext);
	}
	public classConstructorDeclaration(): ClassConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_classMemberDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterClassMemberDeclaration) {
			listener.enterClassMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitClassMemberDeclaration) {
			listener.exitClassMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitClassMemberDeclaration) {
			return visitor.visitClassMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassPropertyDeclarationContext extends KipperParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_classPropertyDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterClassPropertyDeclaration) {
			listener.enterClassPropertyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitClassPropertyDeclaration) {
			listener.exitClassPropertyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitClassPropertyDeclaration) {
			return visitor.visitClassPropertyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassMethodDeclarationContext extends KipperParserRuleContext {
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
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
		return KipperParser.RULE_classMethodDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterClassMethodDeclaration) {
			listener.enterClassMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitClassMethodDeclaration) {
			listener.exitClassMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitClassMethodDeclaration) {
			return visitor.visitClassMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ClassConstructorDeclarationContext extends KipperParserRuleContext {
	public Constructor(): TerminalNode {
		return this.getToken(KipperParser.Constructor, 0);
	}
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_classConstructorDeclaration;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterClassConstructorDeclaration) {
			listener.enterClassConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitClassConstructorDeclaration) {
			listener.exitClassConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitClassConstructorDeclaration) {
			return visitor.visitClassConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StatementContext extends KipperParserRuleContext {
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
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
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
	public lambdaPrimaryExpression(): LambdaPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaPrimaryExpressionContext);
	}
	public arrayPrimaryExpression(): ArrayPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayPrimaryExpressionContext);
	}
	public objectPrimaryExpression(): ObjectPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, ObjectPrimaryExpressionContext);
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

export class LambdaPrimaryExpressionContext extends KipperParserRuleContext {
	public LeftParen(): TerminalNode {
		return this.getToken(KipperParser.LeftParen, 0);
	}
	public RightParen(): TerminalNode {
		return this.getToken(KipperParser.RightParen, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
	}
	public RetIndicator(): TerminalNode {
		return this.getToken(KipperParser.RetIndicator, 0);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_lambdaPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterLambdaPrimaryExpression) {
			listener.enterLambdaPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitLambdaPrimaryExpression) {
			listener.exitLambdaPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitLambdaPrimaryExpression) {
			return visitor.visitLambdaPrimaryExpression(this);
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

export class IdentifierOrStringPrimaryExpressionContext extends KipperParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public stringPrimaryExpression(): StringPrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringPrimaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_identifierOrStringPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIdentifierOrStringPrimaryExpression) {
			listener.enterIdentifierOrStringPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIdentifierOrStringPrimaryExpression) {
			listener.exitIdentifierOrStringPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIdentifierOrStringPrimaryExpression) {
			return visitor.visitIdentifierOrStringPrimaryExpression(this);
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

export class ArrayPrimaryExpressionContext extends KipperParserRuleContext {
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
		return KipperParser.RULE_arrayPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterArrayPrimaryExpression) {
			listener.enterArrayPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitArrayPrimaryExpression) {
			listener.exitArrayPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitArrayPrimaryExpression) {
			return visitor.visitArrayPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ObjectPrimaryExpressionContext extends KipperParserRuleContext {
	public LeftBrace(): TerminalNode {
		return this.getToken(KipperParser.LeftBrace, 0);
	}
	public RightBrace(): TerminalNode {
		return this.getToken(KipperParser.RightBrace, 0);
	}
	public objectProperty(): ObjectPropertyContext[];
	public objectProperty(i: number): ObjectPropertyContext;
	public objectProperty(i?: number): ObjectPropertyContext | ObjectPropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPropertyContext);
		} else {
			return this.getRuleContext(i, ObjectPropertyContext);
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
		return KipperParser.RULE_objectPrimaryExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterObjectPrimaryExpression) {
			listener.enterObjectPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitObjectPrimaryExpression) {
			listener.exitObjectPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitObjectPrimaryExpression) {
			return visitor.visitObjectPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ObjectPropertyContext extends KipperParserRuleContext {
	public identifierOrStringPrimaryExpression(): IdentifierOrStringPrimaryExpressionContext {
		return this.getRuleContext(0, IdentifierOrStringPrimaryExpressionContext);
	}
	public Colon(): TerminalNode {
		return this.getToken(KipperParser.Colon, 0);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_objectProperty;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterObjectProperty) {
			listener.enterObjectProperty(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitObjectProperty) {
			listener.exitObjectProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitObjectProperty) {
			return visitor.visitObjectProperty(this);
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
export class NewInstantiationExpressionContext extends ComputedPrimaryExpressionContext {
	public New(): TerminalNode {
		return this.getToken(KipperParser.New, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
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
		if (listener.enterNewInstantiationExpression) {
			listener.enterNewInstantiationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitNewInstantiationExpression) {
			listener.exitNewInstantiationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitNewInstantiationExpression) {
			return visitor.visitNewInstantiationExpression(this);
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
	public typeofExpression(): TypeofExpressionContext | undefined {
		return this.tryGetRuleContext(0, TypeofExpressionContext);
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

export class TypeofExpressionContext extends KipperParserRuleContext {
	public Typeof(): TerminalNode {
		return this.getToken(KipperParser.Typeof, 0);
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_typeofExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
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
	public BitwiseNot(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.BitwiseNot, 0);
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
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
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

export class BitwiseShiftExpressionContext extends KipperParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_bitwiseShiftExpression;
	}
	public copyFrom(ctx: BitwiseShiftExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnBitwiseShiftExpressionContext extends BitwiseShiftExpressionContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	constructor(ctx: BitwiseShiftExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnBitwiseShiftExpression) {
			listener.enterPassOnBitwiseShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnBitwiseShiftExpression) {
			listener.exitPassOnBitwiseShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPassOnBitwiseShiftExpression) {
			return visitor.visitPassOnBitwiseShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualBitwiseShiftExpressionContext extends BitwiseShiftExpressionContext {
	public bitwiseShiftExpression(): BitwiseShiftExpressionContext {
		return this.getRuleContext(0, BitwiseShiftExpressionContext);
	}
	public bitwiseShiftOperators(): BitwiseShiftOperatorsContext {
		return this.getRuleContext(0, BitwiseShiftOperatorsContext);
	}
	public bitwiseAndExpression(): BitwiseAndExpressionContext {
		return this.getRuleContext(0, BitwiseAndExpressionContext);
	}
	constructor(ctx: BitwiseShiftExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualBitwiseShiftExpression) {
			listener.enterActualBitwiseShiftExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualBitwiseShiftExpression) {
			listener.exitActualBitwiseShiftExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualBitwiseShiftExpression) {
			return visitor.visitActualBitwiseShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BitwiseShiftOperatorsContext extends KipperParserRuleContext {
	public BitwiseZeroFillLeftShift(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.BitwiseZeroFillLeftShift, 0);
	}
	public BitwiseSignedRightShift(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.BitwiseSignedRightShift, 0);
	}
	public BitwiseZeroFillRightShift(): TerminalNode | undefined {
		return this.tryGetToken(KipperParser.BitwiseZeroFillRightShift, 0);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_bitwiseShiftOperators;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterBitwiseShiftOperators) {
			listener.enterBitwiseShiftOperators(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitBitwiseShiftOperators) {
			listener.exitBitwiseShiftOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitBitwiseShiftOperators) {
			return visitor.visitBitwiseShiftOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class InstanceOfExpressionContext extends KipperParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_instanceOfExpression;
	}
	public copyFrom(ctx: InstanceOfExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnInstanceOfExpressionContext extends InstanceOfExpressionContext {
	public bitwiseShiftExpression(): BitwiseShiftExpressionContext {
		return this.getRuleContext(0, BitwiseShiftExpressionContext);
	}
	constructor(ctx: InstanceOfExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnInstanceOfExpression) {
			listener.enterPassOnInstanceOfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnInstanceOfExpression) {
			listener.exitPassOnInstanceOfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPassOnInstanceOfExpression) {
			return visitor.visitPassOnInstanceOfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualInstanceOfExpressionContext extends InstanceOfExpressionContext {
	public instanceOfExpression(): InstanceOfExpressionContext {
		return this.getRuleContext(0, InstanceOfExpressionContext);
	}
	public InstanceOf(): TerminalNode {
		return this.getToken(KipperParser.InstanceOf, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
	}
	constructor(ctx: InstanceOfExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualInstanceOfExpression) {
			listener.enterActualInstanceOfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualInstanceOfExpression) {
			listener.exitActualInstanceOfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualInstanceOfExpression) {
			return visitor.visitActualInstanceOfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class MatchesExpressionContext extends KipperParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_matchesExpression;
	}
	public copyFrom(ctx: MatchesExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnMatchesExpressionContext extends MatchesExpressionContext {
	public instanceOfExpression(): InstanceOfExpressionContext {
		return this.getRuleContext(0, InstanceOfExpressionContext);
	}
	constructor(ctx: MatchesExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnMatchesExpression) {
			listener.enterPassOnMatchesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnMatchesExpression) {
			listener.exitPassOnMatchesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPassOnMatchesExpression) {
			return visitor.visitPassOnMatchesExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualMatchesExpressionContext extends MatchesExpressionContext {
	public matchesExpression(): MatchesExpressionContext {
		return this.getRuleContext(0, MatchesExpressionContext);
	}
	public Matches(): TerminalNode {
		return this.getToken(KipperParser.Matches, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext {
		return this.getRuleContext(0, TypeSpecifierExpressionContext);
	}
	constructor(ctx: MatchesExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualMatchesExpression) {
			listener.enterActualMatchesExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualMatchesExpression) {
			listener.exitActualMatchesExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualMatchesExpression) {
			return visitor.visitActualMatchesExpression(this);
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
	public matchesExpression(): MatchesExpressionContext {
		return this.getRuleContext(0, MatchesExpressionContext);
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
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
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

export class BitwiseAndExpressionContext extends KipperParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_bitwiseAndExpression;
	}
	public copyFrom(ctx: BitwiseAndExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnBitwiseAndExpressionContext extends BitwiseAndExpressionContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	constructor(ctx: BitwiseAndExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnBitwiseAndExpression) {
			listener.enterPassOnBitwiseAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnBitwiseAndExpression) {
			listener.exitPassOnBitwiseAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPassOnBitwiseAndExpression) {
			return visitor.visitPassOnBitwiseAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualBitwiseAndExpressionContext extends BitwiseAndExpressionContext {
	public bitwiseAndExpression(): BitwiseAndExpressionContext {
		return this.getRuleContext(0, BitwiseAndExpressionContext);
	}
	public BitwiseAnd(): TerminalNode {
		return this.getToken(KipperParser.BitwiseAnd, 0);
	}
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	constructor(ctx: BitwiseAndExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualBitwiseAndExpression) {
			listener.enterActualBitwiseAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualBitwiseAndExpression) {
			listener.exitActualBitwiseAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualBitwiseAndExpression) {
			return visitor.visitActualBitwiseAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BitwiseXorExpressionContext extends KipperParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_bitwiseXorExpression;
	}
	public copyFrom(ctx: BitwiseXorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnBitwiseXorExpressionContext extends BitwiseXorExpressionContext {
	public bitwiseAndExpression(): BitwiseAndExpressionContext {
		return this.getRuleContext(0, BitwiseAndExpressionContext);
	}
	constructor(ctx: BitwiseXorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnBitwiseXorExpression) {
			listener.enterPassOnBitwiseXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnBitwiseXorExpression) {
			listener.exitPassOnBitwiseXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPassOnBitwiseXorExpression) {
			return visitor.visitPassOnBitwiseXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualBitwiseXorExpressionContext extends BitwiseXorExpressionContext {
	public bitwiseXorExpression(): BitwiseXorExpressionContext {
		return this.getRuleContext(0, BitwiseXorExpressionContext);
	}
	public BitwiseXor(): TerminalNode {
		return this.getToken(KipperParser.BitwiseXor, 0);
	}
	public bitwiseAndExpression(): BitwiseAndExpressionContext {
		return this.getRuleContext(0, BitwiseAndExpressionContext);
	}
	constructor(ctx: BitwiseXorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualBitwiseXorExpression) {
			listener.enterActualBitwiseXorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualBitwiseXorExpression) {
			listener.exitActualBitwiseXorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualBitwiseXorExpression) {
			return visitor.visitActualBitwiseXorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class BitwiseOrExpressionContext extends KipperParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_bitwiseOrExpression;
	}
	public copyFrom(ctx: BitwiseOrExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PassOnBitwiseOrExpressionContext extends BitwiseOrExpressionContext {
	public bitwiseXorExpression(): BitwiseXorExpressionContext {
		return this.getRuleContext(0, BitwiseXorExpressionContext);
	}
	constructor(ctx: BitwiseOrExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterPassOnBitwiseOrExpression) {
			listener.enterPassOnBitwiseOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitPassOnBitwiseOrExpression) {
			listener.exitPassOnBitwiseOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitPassOnBitwiseOrExpression) {
			return visitor.visitPassOnBitwiseOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ActualBitwiseOrExpressionContext extends BitwiseOrExpressionContext {
	public bitwiseOrExpression(): BitwiseOrExpressionContext {
		return this.getRuleContext(0, BitwiseOrExpressionContext);
	}
	public BitwiseOr(): TerminalNode {
		return this.getToken(KipperParser.BitwiseOr, 0);
	}
	public bitwiseXorExpression(): BitwiseXorExpressionContext {
		return this.getRuleContext(0, BitwiseXorExpressionContext);
	}
	constructor(ctx: BitwiseOrExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterActualBitwiseOrExpression) {
			listener.enterActualBitwiseOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitActualBitwiseOrExpression) {
			listener.exitActualBitwiseOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitActualBitwiseOrExpression) {
			return visitor.visitActualBitwiseOrExpression(this);
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
	public bitwiseOrExpression(): BitwiseOrExpressionContext {
		return this.getRuleContext(0, BitwiseOrExpressionContext);
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
	public bitwiseOrExpression(): BitwiseOrExpressionContext {
		return this.getRuleContext(0, BitwiseOrExpressionContext);
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

export class TypeSpecifierExpressionContext extends KipperParserRuleContext {
	public identifierTypeSpecifierExpression(): IdentifierTypeSpecifierExpressionContext | undefined {
		return this.tryGetRuleContext(0, IdentifierTypeSpecifierExpressionContext);
	}
	public genericTypeSpecifierExpression(): GenericTypeSpecifierExpressionContext | undefined {
		return this.tryGetRuleContext(0, GenericTypeSpecifierExpressionContext);
	}
	public typeofTypeSpecifierExpression(): TypeofTypeSpecifierExpressionContext | undefined {
		return this.tryGetRuleContext(0, TypeofTypeSpecifierExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_typeSpecifierExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterTypeSpecifierExpression) {
			listener.enterTypeSpecifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitTypeSpecifierExpression) {
			listener.exitTypeSpecifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitTypeSpecifierExpression) {
			return visitor.visitTypeSpecifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class IdentifierTypeSpecifierExpressionContext extends KipperParserRuleContext {
	public typeSpecifierIdentifier(): TypeSpecifierIdentifierContext {
		return this.getRuleContext(0, TypeSpecifierIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return KipperParser.RULE_identifierTypeSpecifierExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterIdentifierTypeSpecifierExpression) {
			listener.enterIdentifierTypeSpecifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitIdentifierTypeSpecifierExpression) {
			listener.exitIdentifierTypeSpecifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitIdentifierTypeSpecifierExpression) {
			return visitor.visitIdentifierTypeSpecifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class GenericTypeSpecifierExpressionContext extends KipperParserRuleContext {
	public typeSpecifierIdentifier(): TypeSpecifierIdentifierContext {
		return this.getRuleContext(0, TypeSpecifierIdentifierContext);
	}
	public Less(): TerminalNode {
		return this.getToken(KipperParser.Less, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(KipperParser.Greater, 0);
	}
	public typeSpecifierExpression(): TypeSpecifierExpressionContext[];
	public typeSpecifierExpression(i: number): TypeSpecifierExpressionContext;
	public typeSpecifierExpression(i?: number): TypeSpecifierExpressionContext | TypeSpecifierExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierExpressionContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierExpressionContext);
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
		return KipperParser.RULE_genericTypeSpecifierExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterGenericTypeSpecifierExpression) {
			listener.enterGenericTypeSpecifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitGenericTypeSpecifierExpression) {
			listener.exitGenericTypeSpecifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitGenericTypeSpecifierExpression) {
			return visitor.visitGenericTypeSpecifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class TypeofTypeSpecifierExpressionContext extends KipperParserRuleContext {
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
		return KipperParser.RULE_typeofTypeSpecifierExpression;
	}
	// @Override
	public enterRule(listener: KipperParserListener): void {
		if (listener.enterTypeofTypeSpecifierExpression) {
			listener.enterTypeofTypeSpecifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: KipperParserListener): void {
		if (listener.exitTypeofTypeSpecifierExpression) {
			listener.exitTypeofTypeSpecifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: KipperParserVisitor<Result>): Result {
		if (visitor.visitTypeofTypeSpecifierExpression) {
			return visitor.visitTypeofTypeSpecifierExpression(this);
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
