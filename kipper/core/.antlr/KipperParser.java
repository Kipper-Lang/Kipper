// Generated from /home/lorenz/Distrobox/kipper/Documents/Projects/Kipper/kipper/core/KipperParser.g4 by ANTLR 4.13.1

	// Import the required class for the ctx super class, as well as the 'ASTKind' type defining all possible syntax
	// kind values.
	import { KipperParserRuleContext, ParseRuleKindMapping, ASTKind } from "..";

import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class KipperParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FStringExpStart=1, BlockComment=2, LineComment=3, Const=4, Var=5, As=6, 
		Spread=7, Switch=8, Case=9, Default=10, Break=11, Continue=12, Do=13, 
		While=14, If=15, Else=16, For=17, Enum=18, DefFunc=19, Return=20, CallFunc=21, 
		RetIndicator=22, True=23, False=24, Typeof=25, Void=26, Null=27, Undefined=28, 
		Comma=29, SemiColon=30, QuestionMark=31, Colon=32, LeftParen=33, RightParen=34, 
		LeftBracket=35, RightBracket=36, FStringExpEnd=37, LeftBrace=38, RightBrace=39, 
		Plus=40, PlusPlus=41, Minus=42, MinusMinus=43, Star=44, Div=45, Mod=46, 
		PowerTo=47, AndAnd=48, OrOr=49, Not=50, Assign=51, PlusAssign=52, MinusAssign=53, 
		StarAssign=54, DivAssign=55, ModAssign=56, Equal=57, NotEqual=58, Less=59, 
		LessEqual=60, Greater=61, GreaterEqual=62, BitwiseAnd=63, BitwiseOr=64, 
		BitwiseXor=65, BitwiseNot=66, BitwiseLeftShift=67, BitwiseRightShift=68, 
		BitwiseZeroFillRightShift=69, Dot=70, Identifier=71, IntegerConstant=72, 
		SingleQuoteStringLiteral=73, DoubleQuoteStringLiteral=74, FloatingConstant=75, 
		Whitespace=76, Newline=77, FStringSingleQuoteStart=78, FStringDoubleQuoteStart=79, 
		FStringSingleQuoteEnd=80, FStringSingleQuoteAtom=81, FStringDoubleQuoteEnd=82, 
		FStringDoubleQuoteAtom=83;
	public static final int
		RULE_compilationUnit = 0, RULE_translationUnit = 1, RULE_externalItem = 2, 
		RULE_blockItemList = 3, RULE_blockItem = 4, RULE_declaration = 5, RULE_functionDeclaration = 6, 
		RULE_variableDeclaration = 7, RULE_storageTypeSpecifier = 8, RULE_declarator = 9, 
		RULE_directDeclarator = 10, RULE_initDeclarator = 11, RULE_parameterList = 12, 
		RULE_parameterDeclaration = 13, RULE_initializer = 14, RULE_statement = 15, 
		RULE_compoundStatement = 16, RULE_expressionStatement = 17, RULE_selectionStatement = 18, 
		RULE_ifStatement = 19, RULE_switchStatement = 20, RULE_switchLabeledStatement = 21, 
		RULE_iterationStatement = 22, RULE_forLoopIterationStatement = 23, RULE_whileLoopIterationStatement = 24, 
		RULE_doWhileLoopIterationStatement = 25, RULE_jumpStatement = 26, RULE_returnStatement = 27, 
		RULE_primaryExpression = 28, RULE_tangledPrimaryExpression = 29, RULE_boolPrimaryExpression = 30, 
		RULE_identifierPrimaryExpression = 31, RULE_identifier = 32, RULE_stringPrimaryExpression = 33, 
		RULE_fStringPrimaryExpression = 34, RULE_fStringSingleQuoteAtom = 35, 
		RULE_fStringDoubleQuoteAtom = 36, RULE_numberPrimaryExpression = 37, RULE_arrayPrimaryExpression = 38, 
		RULE_voidOrNullOrUndefinedPrimaryExpression = 39, RULE_computedPrimaryExpression = 40, 
		RULE_argumentExpressionList = 41, RULE_dotNotation = 42, RULE_bracketNotation = 43, 
		RULE_sliceNotation = 44, RULE_postfixExpression = 45, RULE_incrementOrDecrementPostfixExpression = 46, 
		RULE_unaryExpression = 47, RULE_incrementOrDecrementUnaryExpression = 48, 
		RULE_operatorModifiedUnaryExpression = 49, RULE_incrementOrDecrementOperator = 50, 
		RULE_unaryOperator = 51, RULE_castOrConvertExpression = 52, RULE_multiplicativeExpression = 53, 
		RULE_additiveExpression = 54, RULE_relationalExpression = 55, RULE_equalityExpression = 56, 
		RULE_bitwiseAndExpression = 57, RULE_bitwiseXorExpression = 58, RULE_bitwiseOrExpression = 59, 
		RULE_logicalAndExpression = 60, RULE_logicalOrExpression = 61, RULE_conditionalExpression = 62, 
		RULE_assignmentExpression = 63, RULE_assignmentOperator = 64, RULE_expression = 65, 
		RULE_typeSpecifierExpression = 66, RULE_identifierTypeSpecifierExpression = 67, 
		RULE_genericTypeSpecifierExpression = 68, RULE_typeofTypeSpecifierExpression = 69, 
		RULE_typeSpecifierIdentifier = 70;
	private static String[] makeRuleNames() {
		return new String[] {
			"compilationUnit", "translationUnit", "externalItem", "blockItemList", 
			"blockItem", "declaration", "functionDeclaration", "variableDeclaration", 
			"storageTypeSpecifier", "declarator", "directDeclarator", "initDeclarator", 
			"parameterList", "parameterDeclaration", "initializer", "statement", 
			"compoundStatement", "expressionStatement", "selectionStatement", "ifStatement", 
			"switchStatement", "switchLabeledStatement", "iterationStatement", "forLoopIterationStatement", 
			"whileLoopIterationStatement", "doWhileLoopIterationStatement", "jumpStatement", 
			"returnStatement", "primaryExpression", "tangledPrimaryExpression", "boolPrimaryExpression", 
			"identifierPrimaryExpression", "identifier", "stringPrimaryExpression", 
			"fStringPrimaryExpression", "fStringSingleQuoteAtom", "fStringDoubleQuoteAtom", 
			"numberPrimaryExpression", "arrayPrimaryExpression", "voidOrNullOrUndefinedPrimaryExpression", 
			"computedPrimaryExpression", "argumentExpressionList", "dotNotation", 
			"bracketNotation", "sliceNotation", "postfixExpression", "incrementOrDecrementPostfixExpression", 
			"unaryExpression", "incrementOrDecrementUnaryExpression", "operatorModifiedUnaryExpression", 
			"incrementOrDecrementOperator", "unaryOperator", "castOrConvertExpression", 
			"multiplicativeExpression", "additiveExpression", "relationalExpression", 
			"equalityExpression", "bitwiseAndExpression", "bitwiseXorExpression", 
			"bitwiseOrExpression", "logicalAndExpression", "logicalOrExpression", 
			"conditionalExpression", "assignmentExpression", "assignmentOperator", 
			"expression", "typeSpecifierExpression", "identifierTypeSpecifierExpression", 
			"genericTypeSpecifierExpression", "typeofTypeSpecifierExpression", "typeSpecifierIdentifier"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'const'", "'var'", "'as'", "'...'", "'switch'", 
			"'case'", "'default'", "'break'", "'continue'", "'do'", "'while'", "'if'", 
			"'else'", "'for'", "'enum'", "'def'", "'return'", "'call'", "'->'", "'true'", 
			"'false'", "'typeof'", "'void'", "'null'", "'undefined'", "','", "';'", 
			"'?'", "':'", "'('", "')'", "'['", "']'", null, "'{'", "'}'", "'+'", 
			"'++'", "'-'", "'--'", "'*'", "'/'", "'%'", "'**'", "'&&'", "'||'", "'!'", 
			"'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'=='", "'!='", "'<'", 
			"'<='", "'>'", "'>='", "'&'", "'|'", "'^'", "'~'", "'<<'", "'>>'", "'>>>'", 
			"'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FStringExpStart", "BlockComment", "LineComment", "Const", "Var", 
			"As", "Spread", "Switch", "Case", "Default", "Break", "Continue", "Do", 
			"While", "If", "Else", "For", "Enum", "DefFunc", "Return", "CallFunc", 
			"RetIndicator", "True", "False", "Typeof", "Void", "Null", "Undefined", 
			"Comma", "SemiColon", "QuestionMark", "Colon", "LeftParen", "RightParen", 
			"LeftBracket", "RightBracket", "FStringExpEnd", "LeftBrace", "RightBrace", 
			"Plus", "PlusPlus", "Minus", "MinusMinus", "Star", "Div", "Mod", "PowerTo", 
			"AndAnd", "OrOr", "Not", "Assign", "PlusAssign", "MinusAssign", "StarAssign", 
			"DivAssign", "ModAssign", "Equal", "NotEqual", "Less", "LessEqual", "Greater", 
			"GreaterEqual", "BitwiseAnd", "BitwiseOr", "BitwiseXor", "BitwiseNot", 
			"BitwiseLeftShift", "BitwiseRightShift", "BitwiseZeroFillRightShift", 
			"Dot", "Identifier", "IntegerConstant", "SingleQuoteStringLiteral", "DoubleQuoteStringLiteral", 
			"FloatingConstant", "Whitespace", "Newline", "FStringSingleQuoteStart", 
			"FStringDoubleQuoteStart", "FStringSingleQuoteEnd", "FStringSingleQuoteAtom", 
			"FStringDoubleQuoteEnd", "FStringDoubleQuoteAtom"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "KipperParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public KipperParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompilationUnitContext extends KipperParserRuleContext {
		public TerminalNode EOF() { return getToken(KipperParser.EOF, 0); }
		public TranslationUnitContext translationUnit() {
			return getRuleContext(TranslationUnitContext.class,0);
		}
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1142711981373744L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 415L) != 0)) {
				{
				setState(142);
				translationUnit();
				}
			}

			setState(145);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TranslationUnitContext extends KipperParserRuleContext {
		public List<ExternalItemContext> externalItem() {
			return getRuleContexts(ExternalItemContext.class);
		}
		public ExternalItemContext externalItem(int i) {
			return getRuleContext(ExternalItemContext.class,i);
		}
		public TranslationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_translationUnit; }
	}

	public final TranslationUnitContext translationUnit() throws RecognitionException {
		TranslationUnitContext _localctx = new TranslationUnitContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_translationUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(147);
				externalItem();
				}
				}
				setState(150); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1142711981373744L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 415L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExternalItemContext extends KipperParserRuleContext {
		public ExternalItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_externalItem; }
	 
		public ExternalItemContext() { }
		public void copyFrom(ExternalItemContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExternalBlockItemContext extends ExternalItemContext {
		public BlockItemListContext blockItemList() {
			return getRuleContext(BlockItemListContext.class,0);
		}
		public ExternalBlockItemContext(ExternalItemContext ctx) { copyFrom(ctx); }
	}

	public final ExternalItemContext externalItem() throws RecognitionException {
		ExternalItemContext _localctx = new ExternalItemContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_externalItem);
		try {
			_localctx = new ExternalBlockItemContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			blockItemList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockItemListContext extends KipperParserRuleContext {
		public List<BlockItemContext> blockItem() {
			return getRuleContexts(BlockItemContext.class);
		}
		public BlockItemContext blockItem(int i) {
			return getRuleContext(BlockItemContext.class,i);
		}
		public BlockItemListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockItemList; }
	}

	public final BlockItemListContext blockItemList() throws RecognitionException {
		BlockItemListContext _localctx = new BlockItemListContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_blockItemList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(155); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(154);
					blockItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(157); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockItemContext extends KipperParserRuleContext {
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(KipperParser.SemiColon, 0); }
		public BlockItemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockItem; }
	}

	public final BlockItemContext blockItem() throws RecognitionException {
		BlockItemContext _localctx = new BlockItemContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_blockItem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Switch:
			case Break:
			case Continue:
			case Do:
			case While:
			case If:
			case For:
			case Return:
			case CallFunc:
			case True:
			case False:
			case Void:
			case Null:
			case Undefined:
			case LeftParen:
			case LeftBracket:
			case LeftBrace:
			case Plus:
			case PlusPlus:
			case Minus:
			case MinusMinus:
			case Not:
			case Identifier:
			case IntegerConstant:
			case SingleQuoteStringLiteral:
			case DoubleQuoteStringLiteral:
			case FloatingConstant:
			case FStringSingleQuoteStart:
			case FStringDoubleQuoteStart:
				{
				setState(159);
				statement();
				}
				break;
			case Const:
			case Var:
			case DefFunc:
				{
				setState(160);
				declaration();
				}
				break;
			case SemiColon:
				{
				setState(161);
				match(SemiColon);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclarationContext extends KipperParserRuleContext {
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(KipperParser.SemiColon, 0); }
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_declaration);
		try {
			setState(171);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Const:
			case Var:
				enterOuterAlt(_localctx, 1);
				{
				setState(164);
				variableDeclaration();
				setState(165);
				match(SemiColon);
				}
				break;
			case DefFunc:
				enterOuterAlt(_localctx, 2);
				{
				setState(167);
				functionDeclaration();
				setState(169);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
				case 1:
					{
					setState(168);
					match(SemiColon);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclarationContext extends KipperParserRuleContext {
		public TerminalNode DefFunc() { return getToken(KipperParser.DefFunc, 0); }
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public TerminalNode RetIndicator() { return getToken(KipperParser.RetIndicator, 0); }
		public TypeSpecifierExpressionContext typeSpecifierExpression() {
			return getRuleContext(TypeSpecifierExpressionContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_functionDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(DefFunc);
			setState(174);
			declarator();
			setState(175);
			match(LeftParen);
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Identifier) {
				{
				setState(176);
				parameterList();
				}
			}

			setState(179);
			match(RightParen);
			setState(180);
			match(RetIndicator);
			setState(181);
			typeSpecifierExpression();
			setState(183);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(182);
				compoundStatement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends KipperParserRuleContext {
		public StorageTypeSpecifierContext storageTypeSpecifier() {
			return getRuleContext(StorageTypeSpecifierContext.class,0);
		}
		public InitDeclaratorContext initDeclarator() {
			return getRuleContext(InitDeclaratorContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_variableDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			storageTypeSpecifier();
			setState(186);
			initDeclarator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StorageTypeSpecifierContext extends KipperParserRuleContext {
		public TerminalNode Var() { return getToken(KipperParser.Var, 0); }
		public TerminalNode Const() { return getToken(KipperParser.Const, 0); }
		public StorageTypeSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_storageTypeSpecifier; }
	}

	public final StorageTypeSpecifierContext storageTypeSpecifier() throws RecognitionException {
		StorageTypeSpecifierContext _localctx = new StorageTypeSpecifierContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_storageTypeSpecifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			_la = _input.LA(1);
			if ( !(_la==Const || _la==Var) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaratorContext extends KipperParserRuleContext {
		public DirectDeclaratorContext directDeclarator() {
			return getRuleContext(DirectDeclaratorContext.class,0);
		}
		public DeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarator; }
	}

	public final DeclaratorContext declarator() throws RecognitionException {
		DeclaratorContext _localctx = new DeclaratorContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_declarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			directDeclarator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DirectDeclaratorContext extends KipperParserRuleContext {
		public TerminalNode Identifier() { return getToken(KipperParser.Identifier, 0); }
		public DirectDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directDeclarator; }
	}

	public final DirectDeclaratorContext directDeclarator() throws RecognitionException {
		DirectDeclaratorContext _localctx = new DirectDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_directDeclarator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InitDeclaratorContext extends KipperParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TerminalNode Colon() { return getToken(KipperParser.Colon, 0); }
		public TypeSpecifierExpressionContext typeSpecifierExpression() {
			return getRuleContext(TypeSpecifierExpressionContext.class,0);
		}
		public TerminalNode Assign() { return getToken(KipperParser.Assign, 0); }
		public InitializerContext initializer() {
			return getRuleContext(InitializerContext.class,0);
		}
		public InitDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initDeclarator; }
	}

	public final InitDeclaratorContext initDeclarator() throws RecognitionException {
		InitDeclaratorContext _localctx = new InitDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_initDeclarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			declarator();
			setState(195);
			match(Colon);
			setState(196);
			typeSpecifierExpression();
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(197);
				match(Assign);
				setState(198);
				initializer();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterListContext extends KipperParserRuleContext {
		public List<ParameterDeclarationContext> parameterDeclaration() {
			return getRuleContexts(ParameterDeclarationContext.class);
		}
		public ParameterDeclarationContext parameterDeclaration(int i) {
			return getRuleContext(ParameterDeclarationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(KipperParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(KipperParser.Comma, i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			parameterDeclaration();
			setState(206);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(202);
				match(Comma);
				setState(203);
				parameterDeclaration();
				}
				}
				setState(208);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterDeclarationContext extends KipperParserRuleContext {
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TerminalNode Colon() { return getToken(KipperParser.Colon, 0); }
		public TypeSpecifierExpressionContext typeSpecifierExpression() {
			return getRuleContext(TypeSpecifierExpressionContext.class,0);
		}
		public ParameterDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterDeclaration; }
	}

	public final ParameterDeclarationContext parameterDeclaration() throws RecognitionException {
		ParameterDeclarationContext _localctx = new ParameterDeclarationContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_parameterDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			declarator();
			setState(210);
			match(Colon);
			setState(211);
			typeSpecifierExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InitializerContext extends KipperParserRuleContext {
		public AssignmentExpressionContext assignmentExpression() {
			return getRuleContext(AssignmentExpressionContext.class,0);
		}
		public InitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializer; }
	}

	public final InitializerContext initializer() throws RecognitionException {
		InitializerContext _localctx = new InitializerContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_initializer);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			assignmentExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends KipperParserRuleContext {
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public SelectionStatementContext selectionStatement() {
			return getRuleContext(SelectionStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
		}
		public JumpStatementContext jumpStatement() {
			return getRuleContext(JumpStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_statement);
		try {
			setState(221);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftBrace:
				enterOuterAlt(_localctx, 1);
				{
				setState(215);
				compoundStatement();
				}
				break;
			case CallFunc:
			case True:
			case False:
			case Void:
			case Null:
			case Undefined:
			case LeftParen:
			case LeftBracket:
			case Plus:
			case PlusPlus:
			case Minus:
			case MinusMinus:
			case Not:
			case Identifier:
			case IntegerConstant:
			case SingleQuoteStringLiteral:
			case DoubleQuoteStringLiteral:
			case FloatingConstant:
			case FStringSingleQuoteStart:
			case FStringDoubleQuoteStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(216);
				expressionStatement();
				}
				break;
			case Switch:
			case If:
				enterOuterAlt(_localctx, 3);
				{
				setState(217);
				selectionStatement();
				}
				break;
			case Do:
			case While:
			case For:
				enterOuterAlt(_localctx, 4);
				{
				setState(218);
				iterationStatement();
				}
				break;
			case Break:
			case Continue:
				enterOuterAlt(_localctx, 5);
				{
				setState(219);
				jumpStatement();
				}
				break;
			case Return:
				enterOuterAlt(_localctx, 6);
				{
				setState(220);
				returnStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompoundStatementContext extends KipperParserRuleContext {
		public TerminalNode LeftBrace() { return getToken(KipperParser.LeftBrace, 0); }
		public TerminalNode RightBrace() { return getToken(KipperParser.RightBrace, 0); }
		public BlockItemListContext blockItemList() {
			return getRuleContext(BlockItemListContext.class,0);
		}
		public CompoundStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundStatement; }
	}

	public final CompoundStatementContext compoundStatement() throws RecognitionException {
		CompoundStatementContext _localctx = new CompoundStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_compoundStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(LeftBrace);
			setState(225);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1142711981373744L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 415L) != 0)) {
				{
				setState(224);
				blockItemList();
				}
			}

			setState(227);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionStatementContext extends KipperParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SemiColon() { return getToken(KipperParser.SemiColon, 0); }
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			expression();
			setState(230);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SelectionStatementContext extends KipperParserRuleContext {
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public SelectionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectionStatement; }
	}

	public final SelectionStatementContext selectionStatement() throws RecognitionException {
		SelectionStatementContext _localctx = new SelectionStatementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_selectionStatement);
		try {
			setState(234);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case If:
				enterOuterAlt(_localctx, 1);
				{
				setState(232);
				ifStatement();
				}
				break;
			case Switch:
				enterOuterAlt(_localctx, 2);
				{
				setState(233);
				switchStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatementContext extends KipperParserRuleContext {
		public TerminalNode If() { return getToken(KipperParser.If, 0); }
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode Else() { return getToken(KipperParser.Else, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			match(If);
			setState(237);
			match(LeftParen);
			setState(238);
			expression();
			setState(239);
			match(RightParen);
			setState(240);
			statement();
			setState(243);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(241);
				match(Else);
				setState(242);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SwitchStatementContext extends KipperParserRuleContext {
		public TerminalNode Switch() { return getToken(KipperParser.Switch, 0); }
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public TerminalNode LeftBrace() { return getToken(KipperParser.LeftBrace, 0); }
		public TerminalNode RightBrace() { return getToken(KipperParser.RightBrace, 0); }
		public List<SwitchLabeledStatementContext> switchLabeledStatement() {
			return getRuleContexts(SwitchLabeledStatementContext.class);
		}
		public SwitchLabeledStatementContext switchLabeledStatement(int i) {
			return getRuleContext(SwitchLabeledStatementContext.class,i);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_switchStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			match(Switch);
			setState(246);
			match(LeftParen);
			setState(247);
			expression();
			setState(248);
			match(RightParen);
			setState(249);
			match(LeftBrace);
			setState(253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Case || _la==Default) {
				{
				{
				setState(250);
				switchLabeledStatement();
				}
				}
				setState(255);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(256);
			match(RightBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SwitchLabeledStatementContext extends KipperParserRuleContext {
		public TerminalNode Case() { return getToken(KipperParser.Case, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Colon() { return getToken(KipperParser.Colon, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Default() { return getToken(KipperParser.Default, 0); }
		public SwitchLabeledStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchLabeledStatement; }
	}

	public final SwitchLabeledStatementContext switchLabeledStatement() throws RecognitionException {
		SwitchLabeledStatementContext _localctx = new SwitchLabeledStatementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_switchLabeledStatement);
		try {
			setState(266);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Case:
				enterOuterAlt(_localctx, 1);
				{
				setState(258);
				match(Case);
				setState(259);
				expression();
				setState(260);
				match(Colon);
				setState(261);
				statement();
				}
				break;
			case Default:
				enterOuterAlt(_localctx, 2);
				{
				setState(263);
				match(Default);
				setState(264);
				match(Colon);
				setState(265);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IterationStatementContext extends KipperParserRuleContext {
		public ForLoopIterationStatementContext forLoopIterationStatement() {
			return getRuleContext(ForLoopIterationStatementContext.class,0);
		}
		public WhileLoopIterationStatementContext whileLoopIterationStatement() {
			return getRuleContext(WhileLoopIterationStatementContext.class,0);
		}
		public DoWhileLoopIterationStatementContext doWhileLoopIterationStatement() {
			return getRuleContext(DoWhileLoopIterationStatementContext.class,0);
		}
		public IterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationStatement; }
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_iterationStatement);
		try {
			setState(271);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case For:
				enterOuterAlt(_localctx, 1);
				{
				setState(268);
				forLoopIterationStatement();
				}
				break;
			case While:
				enterOuterAlt(_localctx, 2);
				{
				setState(269);
				whileLoopIterationStatement();
				}
				break;
			case Do:
				enterOuterAlt(_localctx, 3);
				{
				setState(270);
				doWhileLoopIterationStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForLoopIterationStatementContext extends KipperParserRuleContext {
		public boolean _forDeclaration = false;
		public boolean _forCondition = false;
		public boolean _forIterationExp = false;
		public TerminalNode For() { return getToken(KipperParser.For, 0); }
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public List<TerminalNode> SemiColon() { return getTokens(KipperParser.SemiColon); }
		public TerminalNode SemiColon(int i) {
			return getToken(KipperParser.SemiColon, i);
		}
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public ForLoopIterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forLoopIterationStatement; }
	}

	public final ForLoopIterationStatementContext forLoopIterationStatement() throws RecognitionException {
		ForLoopIterationStatementContext _localctx = new ForLoopIterationStatementContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_forLoopIterationStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(For);
			setState(274);
			match(LeftParen);
			setState(281);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1142436027957296L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 415L) != 0)) {
				{
				setState(277);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Const:
				case Var:
					{
					setState(275);
					variableDeclaration();
					}
					break;
				case CallFunc:
				case True:
				case False:
				case Void:
				case Null:
				case Undefined:
				case LeftParen:
				case LeftBracket:
				case Plus:
				case PlusPlus:
				case Minus:
				case MinusMinus:
				case Not:
				case Identifier:
				case IntegerConstant:
				case SingleQuoteStringLiteral:
				case DoubleQuoteStringLiteral:
				case FloatingConstant:
				case FStringSingleQuoteStart:
				case FStringDoubleQuoteStart:
					{
					setState(276);
					expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				 _localctx._forDeclaration = true 
				}
			}

			setState(283);
			match(SemiColon);
			setState(287);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
				{
				setState(284);
				expression();
				 _localctx._forCondition = true 
				}
			}

			setState(289);
			match(SemiColon);
			setState(293);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
				{
				setState(290);
				expression();
				 _localctx._forIterationExp = true 
				}
			}

			setState(295);
			match(RightParen);
			setState(296);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WhileLoopIterationStatementContext extends KipperParserRuleContext {
		public TerminalNode While() { return getToken(KipperParser.While, 0); }
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileLoopIterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileLoopIterationStatement; }
	}

	public final WhileLoopIterationStatementContext whileLoopIterationStatement() throws RecognitionException {
		WhileLoopIterationStatementContext _localctx = new WhileLoopIterationStatementContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_whileLoopIterationStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			match(While);
			setState(299);
			match(LeftParen);
			setState(300);
			expression();
			setState(301);
			match(RightParen);
			setState(302);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DoWhileLoopIterationStatementContext extends KipperParserRuleContext {
		public TerminalNode Do() { return getToken(KipperParser.Do, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode While() { return getToken(KipperParser.While, 0); }
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public TerminalNode SemiColon() { return getToken(KipperParser.SemiColon, 0); }
		public DoWhileLoopIterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doWhileLoopIterationStatement; }
	}

	public final DoWhileLoopIterationStatementContext doWhileLoopIterationStatement() throws RecognitionException {
		DoWhileLoopIterationStatementContext _localctx = new DoWhileLoopIterationStatementContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_doWhileLoopIterationStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(Do);
			setState(305);
			statement();
			setState(306);
			match(While);
			setState(307);
			match(LeftParen);
			setState(308);
			expression();
			setState(309);
			match(RightParen);
			setState(310);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JumpStatementContext extends KipperParserRuleContext {
		public TerminalNode SemiColon() { return getToken(KipperParser.SemiColon, 0); }
		public TerminalNode Continue() { return getToken(KipperParser.Continue, 0); }
		public TerminalNode Break() { return getToken(KipperParser.Break, 0); }
		public JumpStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jumpStatement; }
	}

	public final JumpStatementContext jumpStatement() throws RecognitionException {
		JumpStatementContext _localctx = new JumpStatementContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_jumpStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(312);
			_la = _input.LA(1);
			if ( !(_la==Break || _la==Continue) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(313);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStatementContext extends KipperParserRuleContext {
		public TerminalNode Return() { return getToken(KipperParser.Return, 0); }
		public TerminalNode SemiColon() { return getToken(KipperParser.SemiColon, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_returnStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			match(Return);
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
				{
				setState(316);
				expression();
				}
			}

			setState(319);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrimaryExpressionContext extends KipperParserRuleContext {
		public TangledPrimaryExpressionContext tangledPrimaryExpression() {
			return getRuleContext(TangledPrimaryExpressionContext.class,0);
		}
		public BoolPrimaryExpressionContext boolPrimaryExpression() {
			return getRuleContext(BoolPrimaryExpressionContext.class,0);
		}
		public IdentifierPrimaryExpressionContext identifierPrimaryExpression() {
			return getRuleContext(IdentifierPrimaryExpressionContext.class,0);
		}
		public StringPrimaryExpressionContext stringPrimaryExpression() {
			return getRuleContext(StringPrimaryExpressionContext.class,0);
		}
		public FStringPrimaryExpressionContext fStringPrimaryExpression() {
			return getRuleContext(FStringPrimaryExpressionContext.class,0);
		}
		public NumberPrimaryExpressionContext numberPrimaryExpression() {
			return getRuleContext(NumberPrimaryExpressionContext.class,0);
		}
		public ArrayPrimaryExpressionContext arrayPrimaryExpression() {
			return getRuleContext(ArrayPrimaryExpressionContext.class,0);
		}
		public VoidOrNullOrUndefinedPrimaryExpressionContext voidOrNullOrUndefinedPrimaryExpression() {
			return getRuleContext(VoidOrNullOrUndefinedPrimaryExpressionContext.class,0);
		}
		public PrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryExpression; }
	}

	public final PrimaryExpressionContext primaryExpression() throws RecognitionException {
		PrimaryExpressionContext _localctx = new PrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_primaryExpression);
		try {
			setState(329);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LeftParen:
				enterOuterAlt(_localctx, 1);
				{
				setState(321);
				tangledPrimaryExpression();
				}
				break;
			case True:
			case False:
				enterOuterAlt(_localctx, 2);
				{
				setState(322);
				boolPrimaryExpression();
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 3);
				{
				setState(323);
				identifierPrimaryExpression();
				}
				break;
			case SingleQuoteStringLiteral:
			case DoubleQuoteStringLiteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(324);
				stringPrimaryExpression();
				}
				break;
			case FStringSingleQuoteStart:
			case FStringDoubleQuoteStart:
				enterOuterAlt(_localctx, 5);
				{
				setState(325);
				fStringPrimaryExpression();
				}
				break;
			case IntegerConstant:
			case FloatingConstant:
				enterOuterAlt(_localctx, 6);
				{
				setState(326);
				numberPrimaryExpression();
				}
				break;
			case LeftBracket:
				enterOuterAlt(_localctx, 7);
				{
				setState(327);
				arrayPrimaryExpression();
				}
				break;
			case Void:
			case Null:
			case Undefined:
				enterOuterAlt(_localctx, 8);
				{
				setState(328);
				voidOrNullOrUndefinedPrimaryExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TangledPrimaryExpressionContext extends KipperParserRuleContext {
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public TangledPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tangledPrimaryExpression; }
	}

	public final TangledPrimaryExpressionContext tangledPrimaryExpression() throws RecognitionException {
		TangledPrimaryExpressionContext _localctx = new TangledPrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_tangledPrimaryExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			match(LeftParen);
			setState(332);
			expression();
			setState(333);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BoolPrimaryExpressionContext extends KipperParserRuleContext {
		public TerminalNode True() { return getToken(KipperParser.True, 0); }
		public TerminalNode False() { return getToken(KipperParser.False, 0); }
		public BoolPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boolPrimaryExpression; }
	}

	public final BoolPrimaryExpressionContext boolPrimaryExpression() throws RecognitionException {
		BoolPrimaryExpressionContext _localctx = new BoolPrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_boolPrimaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			_la = _input.LA(1);
			if ( !(_la==True || _la==False) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierPrimaryExpressionContext extends KipperParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierPrimaryExpression; }
	}

	public final IdentifierPrimaryExpressionContext identifierPrimaryExpression() throws RecognitionException {
		IdentifierPrimaryExpressionContext _localctx = new IdentifierPrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_identifierPrimaryExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierContext extends KipperParserRuleContext {
		public TerminalNode Identifier() { return getToken(KipperParser.Identifier, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(339);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringPrimaryExpressionContext extends KipperParserRuleContext {
		public TerminalNode SingleQuoteStringLiteral() { return getToken(KipperParser.SingleQuoteStringLiteral, 0); }
		public TerminalNode DoubleQuoteStringLiteral() { return getToken(KipperParser.DoubleQuoteStringLiteral, 0); }
		public StringPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringPrimaryExpression; }
	}

	public final StringPrimaryExpressionContext stringPrimaryExpression() throws RecognitionException {
		StringPrimaryExpressionContext _localctx = new StringPrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_stringPrimaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(341);
			_la = _input.LA(1);
			if ( !(_la==SingleQuoteStringLiteral || _la==DoubleQuoteStringLiteral) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FStringPrimaryExpressionContext extends KipperParserRuleContext {
		public TerminalNode FStringSingleQuoteStart() { return getToken(KipperParser.FStringSingleQuoteStart, 0); }
		public TerminalNode FStringSingleQuoteEnd() { return getToken(KipperParser.FStringSingleQuoteEnd, 0); }
		public List<FStringSingleQuoteAtomContext> fStringSingleQuoteAtom() {
			return getRuleContexts(FStringSingleQuoteAtomContext.class);
		}
		public FStringSingleQuoteAtomContext fStringSingleQuoteAtom(int i) {
			return getRuleContext(FStringSingleQuoteAtomContext.class,i);
		}
		public TerminalNode FStringDoubleQuoteStart() { return getToken(KipperParser.FStringDoubleQuoteStart, 0); }
		public TerminalNode FStringDoubleQuoteEnd() { return getToken(KipperParser.FStringDoubleQuoteEnd, 0); }
		public List<FStringDoubleQuoteAtomContext> fStringDoubleQuoteAtom() {
			return getRuleContexts(FStringDoubleQuoteAtomContext.class);
		}
		public FStringDoubleQuoteAtomContext fStringDoubleQuoteAtom(int i) {
			return getRuleContext(FStringDoubleQuoteAtomContext.class,i);
		}
		public FStringPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fStringPrimaryExpression; }
	}

	public final FStringPrimaryExpressionContext fStringPrimaryExpression() throws RecognitionException {
		FStringPrimaryExpressionContext _localctx = new FStringPrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_fStringPrimaryExpression);
		int _la;
		try {
			setState(359);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FStringSingleQuoteStart:
				enterOuterAlt(_localctx, 1);
				{
				setState(343);
				match(FStringSingleQuoteStart);
				setState(347);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==FStringExpStart || _la==FStringSingleQuoteAtom) {
					{
					{
					setState(344);
					fStringSingleQuoteAtom();
					}
					}
					setState(349);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(350);
				match(FStringSingleQuoteEnd);
				}
				break;
			case FStringDoubleQuoteStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(351);
				match(FStringDoubleQuoteStart);
				setState(355);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==FStringExpStart || _la==FStringDoubleQuoteAtom) {
					{
					{
					setState(352);
					fStringDoubleQuoteAtom();
					}
					}
					setState(357);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(358);
				match(FStringDoubleQuoteEnd);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FStringSingleQuoteAtomContext extends KipperParserRuleContext {
		public TerminalNode FStringSingleQuoteAtom() { return getToken(KipperParser.FStringSingleQuoteAtom, 0); }
		public TerminalNode FStringExpStart() { return getToken(KipperParser.FStringExpStart, 0); }
		public TerminalNode FStringExpEnd() { return getToken(KipperParser.FStringExpEnd, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FStringSingleQuoteAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fStringSingleQuoteAtom; }
	}

	public final FStringSingleQuoteAtomContext fStringSingleQuoteAtom() throws RecognitionException {
		FStringSingleQuoteAtomContext _localctx = new FStringSingleQuoteAtomContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_fStringSingleQuoteAtom);
		int _la;
		try {
			setState(367);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FStringSingleQuoteAtom:
				enterOuterAlt(_localctx, 1);
				{
				setState(361);
				match(FStringSingleQuoteAtom);
				}
				break;
			case FStringExpStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(362);
				match(FStringExpStart);
				setState(364);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
					{
					setState(363);
					expression();
					}
				}

				setState(366);
				match(FStringExpEnd);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FStringDoubleQuoteAtomContext extends KipperParserRuleContext {
		public TerminalNode FStringDoubleQuoteAtom() { return getToken(KipperParser.FStringDoubleQuoteAtom, 0); }
		public TerminalNode FStringExpStart() { return getToken(KipperParser.FStringExpStart, 0); }
		public TerminalNode FStringExpEnd() { return getToken(KipperParser.FStringExpEnd, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FStringDoubleQuoteAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fStringDoubleQuoteAtom; }
	}

	public final FStringDoubleQuoteAtomContext fStringDoubleQuoteAtom() throws RecognitionException {
		FStringDoubleQuoteAtomContext _localctx = new FStringDoubleQuoteAtomContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_fStringDoubleQuoteAtom);
		int _la;
		try {
			setState(375);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FStringDoubleQuoteAtom:
				enterOuterAlt(_localctx, 1);
				{
				setState(369);
				match(FStringDoubleQuoteAtom);
				}
				break;
			case FStringExpStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(370);
				match(FStringExpStart);
				setState(372);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
					{
					setState(371);
					expression();
					}
				}

				setState(374);
				match(FStringExpEnd);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberPrimaryExpressionContext extends KipperParserRuleContext {
		public TerminalNode IntegerConstant() { return getToken(KipperParser.IntegerConstant, 0); }
		public TerminalNode FloatingConstant() { return getToken(KipperParser.FloatingConstant, 0); }
		public NumberPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numberPrimaryExpression; }
	}

	public final NumberPrimaryExpressionContext numberPrimaryExpression() throws RecognitionException {
		NumberPrimaryExpressionContext _localctx = new NumberPrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_numberPrimaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(377);
			_la = _input.LA(1);
			if ( !(_la==IntegerConstant || _la==FloatingConstant) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayPrimaryExpressionContext extends KipperParserRuleContext {
		public TerminalNode LeftBracket() { return getToken(KipperParser.LeftBracket, 0); }
		public TerminalNode RightBracket() { return getToken(KipperParser.RightBracket, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(KipperParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(KipperParser.Comma, i);
		}
		public ArrayPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayPrimaryExpression; }
	}

	public final ArrayPrimaryExpressionContext arrayPrimaryExpression() throws RecognitionException {
		ArrayPrimaryExpressionContext _localctx = new ArrayPrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_arrayPrimaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(LeftBracket);
			setState(388);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
				{
				setState(380);
				expression();
				setState(385);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Comma) {
					{
					{
					setState(381);
					match(Comma);
					setState(382);
					expression();
					}
					}
					setState(387);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(390);
			match(RightBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VoidOrNullOrUndefinedPrimaryExpressionContext extends KipperParserRuleContext {
		public TerminalNode Void() { return getToken(KipperParser.Void, 0); }
		public TerminalNode Null() { return getToken(KipperParser.Null, 0); }
		public TerminalNode Undefined() { return getToken(KipperParser.Undefined, 0); }
		public VoidOrNullOrUndefinedPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_voidOrNullOrUndefinedPrimaryExpression; }
	}

	public final VoidOrNullOrUndefinedPrimaryExpressionContext voidOrNullOrUndefinedPrimaryExpression() throws RecognitionException {
		VoidOrNullOrUndefinedPrimaryExpressionContext _localctx = new VoidOrNullOrUndefinedPrimaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_voidOrNullOrUndefinedPrimaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(392);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 469762048L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComputedPrimaryExpressionContext extends KipperParserRuleContext {
		public ASTKind | undefined _labelASTKind;
		public ComputedPrimaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_computedPrimaryExpression; }
	 
		public ComputedPrimaryExpressionContext() { }
		public void copyFrom(ComputedPrimaryExpressionContext ctx) {
			super.copyFrom(ctx);
			this._labelASTKind = ctx._labelASTKind;
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOncomputedPrimaryExpressionContext extends ComputedPrimaryExpressionContext {
		public PrimaryExpressionContext primaryExpression() {
			return getRuleContext(PrimaryExpressionContext.class,0);
		}
		public PassOncomputedPrimaryExpressionContext(ComputedPrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SliceNotationMemberAccessExpressionContext extends ComputedPrimaryExpressionContext {
		public ComputedPrimaryExpressionContext computedPrimaryExpression() {
			return getRuleContext(ComputedPrimaryExpressionContext.class,0);
		}
		public SliceNotationContext sliceNotation() {
			return getRuleContext(SliceNotationContext.class,0);
		}
		public SliceNotationMemberAccessExpressionContext(ComputedPrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallExpressionContext extends ComputedPrimaryExpressionContext {
		public ComputedPrimaryExpressionContext computedPrimaryExpression() {
			return getRuleContext(ComputedPrimaryExpressionContext.class,0);
		}
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public ArgumentExpressionListContext argumentExpressionList() {
			return getRuleContext(ArgumentExpressionListContext.class,0);
		}
		public FunctionCallExpressionContext(ComputedPrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DotNotationMemberAccessExpressionContext extends ComputedPrimaryExpressionContext {
		public ComputedPrimaryExpressionContext computedPrimaryExpression() {
			return getRuleContext(ComputedPrimaryExpressionContext.class,0);
		}
		public DotNotationContext dotNotation() {
			return getRuleContext(DotNotationContext.class,0);
		}
		public DotNotationMemberAccessExpressionContext(ComputedPrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ExplicitCallFunctionCallExpressionContext extends ComputedPrimaryExpressionContext {
		public TerminalNode CallFunc() { return getToken(KipperParser.CallFunc, 0); }
		public ComputedPrimaryExpressionContext computedPrimaryExpression() {
			return getRuleContext(ComputedPrimaryExpressionContext.class,0);
		}
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public ArgumentExpressionListContext argumentExpressionList() {
			return getRuleContext(ArgumentExpressionListContext.class,0);
		}
		public ExplicitCallFunctionCallExpressionContext(ComputedPrimaryExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BracketNotationMemberAccessExpressionContext extends ComputedPrimaryExpressionContext {
		public ComputedPrimaryExpressionContext computedPrimaryExpression() {
			return getRuleContext(ComputedPrimaryExpressionContext.class,0);
		}
		public BracketNotationContext bracketNotation() {
			return getRuleContext(BracketNotationContext.class,0);
		}
		public BracketNotationMemberAccessExpressionContext(ComputedPrimaryExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ComputedPrimaryExpressionContext computedPrimaryExpression() throws RecognitionException {
		return computedPrimaryExpression(0);
	}

	private ComputedPrimaryExpressionContext computedPrimaryExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ComputedPrimaryExpressionContext _localctx = new ComputedPrimaryExpressionContext(_ctx, _parentState);
		ComputedPrimaryExpressionContext _prevctx = _localctx;
		int _startState = 80;
		enterRecursionRule(_localctx, 80, RULE_computedPrimaryExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(405);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case True:
			case False:
			case Void:
			case Null:
			case Undefined:
			case LeftParen:
			case LeftBracket:
			case Identifier:
			case IntegerConstant:
			case SingleQuoteStringLiteral:
			case DoubleQuoteStringLiteral:
			case FloatingConstant:
			case FStringSingleQuoteStart:
			case FStringDoubleQuoteStart:
				{
				_localctx = new PassOncomputedPrimaryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(395);
				primaryExpression();
				}
				break;
			case CallFunc:
				{
				_localctx = new ExplicitCallFunctionCallExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(396);
				match(CallFunc);
				setState(397);
				computedPrimaryExpression(0);
				setState(398);
				match(LeftParen);
				setState(400);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
					{
					setState(399);
					argumentExpressionList();
					}
				}

				setState(402);
				match(RightParen);
				 _localctx._labelASTKind = ParseRuleKindMapping.RULE_functionCallExpression 
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(428);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,36,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(426);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
					case 1:
						{
						_localctx = new FunctionCallExpressionContext(new ComputedPrimaryExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_computedPrimaryExpression);
						setState(407);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(408);
						match(LeftParen);
						setState(410);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
							{
							setState(409);
							argumentExpressionList();
							}
						}

						setState(412);
						match(RightParen);
						 _localctx._labelASTKind = ParseRuleKindMapping.RULE_functionCallExpression 
						}
						break;
					case 2:
						{
						_localctx = new DotNotationMemberAccessExpressionContext(new ComputedPrimaryExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_computedPrimaryExpression);
						setState(414);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(415);
						dotNotation();
						 _localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression 
						}
						break;
					case 3:
						{
						_localctx = new BracketNotationMemberAccessExpressionContext(new ComputedPrimaryExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_computedPrimaryExpression);
						setState(418);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(419);
						bracketNotation();
						 _localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression 
						}
						break;
					case 4:
						{
						_localctx = new SliceNotationMemberAccessExpressionContext(new ComputedPrimaryExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_computedPrimaryExpression);
						setState(422);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(423);
						sliceNotation();
						 _localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression 
						}
						break;
					}
					} 
				}
				setState(430);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,36,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentExpressionListContext extends KipperParserRuleContext {
		public List<AssignmentExpressionContext> assignmentExpression() {
			return getRuleContexts(AssignmentExpressionContext.class);
		}
		public AssignmentExpressionContext assignmentExpression(int i) {
			return getRuleContext(AssignmentExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(KipperParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(KipperParser.Comma, i);
		}
		public ArgumentExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentExpressionList; }
	}

	public final ArgumentExpressionListContext argumentExpressionList() throws RecognitionException {
		ArgumentExpressionListContext _localctx = new ArgumentExpressionListContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_argumentExpressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(431);
			assignmentExpression();
			setState(436);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(432);
				match(Comma);
				setState(433);
				assignmentExpression();
				}
				}
				setState(438);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DotNotationContext extends KipperParserRuleContext {
		public TerminalNode Dot() { return getToken(KipperParser.Dot, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public DotNotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dotNotation; }
	}

	public final DotNotationContext dotNotation() throws RecognitionException {
		DotNotationContext _localctx = new DotNotationContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_dotNotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			match(Dot);
			setState(440);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BracketNotationContext extends KipperParserRuleContext {
		public TerminalNode LeftBracket() { return getToken(KipperParser.LeftBracket, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RightBracket() { return getToken(KipperParser.RightBracket, 0); }
		public BracketNotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bracketNotation; }
	}

	public final BracketNotationContext bracketNotation() throws RecognitionException {
		BracketNotationContext _localctx = new BracketNotationContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_bracketNotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(442);
			match(LeftBracket);
			setState(443);
			expression();
			setState(444);
			match(RightBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SliceNotationContext extends KipperParserRuleContext {
		public boolean sliceStart = false;
		public boolean sliceEnd = false;
		public TerminalNode LeftBracket() { return getToken(KipperParser.LeftBracket, 0); }
		public TerminalNode Colon() { return getToken(KipperParser.Colon, 0); }
		public TerminalNode RightBracket() { return getToken(KipperParser.RightBracket, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public SliceNotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sliceNotation; }
	}

	public final SliceNotationContext sliceNotation() throws RecognitionException {
		SliceNotationContext _localctx = new SliceNotationContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_sliceNotation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			match(LeftBracket);
			setState(450);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
				{
				setState(447);
				expression();
				 _localctx.sliceStart = true 
				}
			}

			setState(452);
			match(Colon);
			setState(456);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 21)) & ~0x3f) == 0 && ((1L << (_la - 21)) & 467248461884444909L) != 0)) {
				{
				setState(453);
				expression();
				 _localctx.sliceEnd = true 
				}
			}

			setState(458);
			match(RightBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PostfixExpressionContext extends KipperParserRuleContext {
		public ComputedPrimaryExpressionContext computedPrimaryExpression() {
			return getRuleContext(ComputedPrimaryExpressionContext.class,0);
		}
		public IncrementOrDecrementPostfixExpressionContext incrementOrDecrementPostfixExpression() {
			return getRuleContext(IncrementOrDecrementPostfixExpressionContext.class,0);
		}
		public PostfixExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfixExpression; }
	}

	public final PostfixExpressionContext postfixExpression() throws RecognitionException {
		PostfixExpressionContext _localctx = new PostfixExpressionContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_postfixExpression);
		try {
			setState(462);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(460);
				computedPrimaryExpression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(461);
				incrementOrDecrementPostfixExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IncrementOrDecrementPostfixExpressionContext extends KipperParserRuleContext {
		public ComputedPrimaryExpressionContext computedPrimaryExpression() {
			return getRuleContext(ComputedPrimaryExpressionContext.class,0);
		}
		public IncrementOrDecrementOperatorContext incrementOrDecrementOperator() {
			return getRuleContext(IncrementOrDecrementOperatorContext.class,0);
		}
		public IncrementOrDecrementPostfixExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incrementOrDecrementPostfixExpression; }
	}

	public final IncrementOrDecrementPostfixExpressionContext incrementOrDecrementPostfixExpression() throws RecognitionException {
		IncrementOrDecrementPostfixExpressionContext _localctx = new IncrementOrDecrementPostfixExpressionContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_incrementOrDecrementPostfixExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(464);
			computedPrimaryExpression(0);
			setState(465);
			incrementOrDecrementOperator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnaryExpressionContext extends KipperParserRuleContext {
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public IncrementOrDecrementUnaryExpressionContext incrementOrDecrementUnaryExpression() {
			return getRuleContext(IncrementOrDecrementUnaryExpressionContext.class,0);
		}
		public OperatorModifiedUnaryExpressionContext operatorModifiedUnaryExpression() {
			return getRuleContext(OperatorModifiedUnaryExpressionContext.class,0);
		}
		public UnaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryExpression; }
	}

	public final UnaryExpressionContext unaryExpression() throws RecognitionException {
		UnaryExpressionContext _localctx = new UnaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_unaryExpression);
		try {
			setState(470);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CallFunc:
			case True:
			case False:
			case Void:
			case Null:
			case Undefined:
			case LeftParen:
			case LeftBracket:
			case Identifier:
			case IntegerConstant:
			case SingleQuoteStringLiteral:
			case DoubleQuoteStringLiteral:
			case FloatingConstant:
			case FStringSingleQuoteStart:
			case FStringDoubleQuoteStart:
				enterOuterAlt(_localctx, 1);
				{
				setState(467);
				postfixExpression();
				}
				break;
			case PlusPlus:
			case MinusMinus:
				enterOuterAlt(_localctx, 2);
				{
				setState(468);
				incrementOrDecrementUnaryExpression();
				}
				break;
			case Plus:
			case Minus:
			case Not:
				enterOuterAlt(_localctx, 3);
				{
				setState(469);
				operatorModifiedUnaryExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IncrementOrDecrementUnaryExpressionContext extends KipperParserRuleContext {
		public IncrementOrDecrementOperatorContext incrementOrDecrementOperator() {
			return getRuleContext(IncrementOrDecrementOperatorContext.class,0);
		}
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public IncrementOrDecrementUnaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incrementOrDecrementUnaryExpression; }
	}

	public final IncrementOrDecrementUnaryExpressionContext incrementOrDecrementUnaryExpression() throws RecognitionException {
		IncrementOrDecrementUnaryExpressionContext _localctx = new IncrementOrDecrementUnaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_incrementOrDecrementUnaryExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(472);
			incrementOrDecrementOperator();
			setState(473);
			postfixExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperatorModifiedUnaryExpressionContext extends KipperParserRuleContext {
		public UnaryOperatorContext unaryOperator() {
			return getRuleContext(UnaryOperatorContext.class,0);
		}
		public PostfixExpressionContext postfixExpression() {
			return getRuleContext(PostfixExpressionContext.class,0);
		}
		public OperatorModifiedUnaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorModifiedUnaryExpression; }
	}

	public final OperatorModifiedUnaryExpressionContext operatorModifiedUnaryExpression() throws RecognitionException {
		OperatorModifiedUnaryExpressionContext _localctx = new OperatorModifiedUnaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_operatorModifiedUnaryExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			unaryOperator();
			setState(476);
			postfixExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IncrementOrDecrementOperatorContext extends KipperParserRuleContext {
		public TerminalNode PlusPlus() { return getToken(KipperParser.PlusPlus, 0); }
		public TerminalNode MinusMinus() { return getToken(KipperParser.MinusMinus, 0); }
		public IncrementOrDecrementOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incrementOrDecrementOperator; }
	}

	public final IncrementOrDecrementOperatorContext incrementOrDecrementOperator() throws RecognitionException {
		IncrementOrDecrementOperatorContext _localctx = new IncrementOrDecrementOperatorContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_incrementOrDecrementOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(478);
			_la = _input.LA(1);
			if ( !(_la==PlusPlus || _la==MinusMinus) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnaryOperatorContext extends KipperParserRuleContext {
		public TerminalNode Plus() { return getToken(KipperParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(KipperParser.Minus, 0); }
		public TerminalNode Not() { return getToken(KipperParser.Not, 0); }
		public UnaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryOperator; }
	}

	public final UnaryOperatorContext unaryOperator() throws RecognitionException {
		UnaryOperatorContext _localctx = new UnaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(480);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1131397464981504L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CastOrConvertExpressionContext extends KipperParserRuleContext {
		public CastOrConvertExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_castOrConvertExpression; }
	 
		public CastOrConvertExpressionContext() { }
		public void copyFrom(CastOrConvertExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualCastOrConvertExpressionContext extends CastOrConvertExpressionContext {
		public UnaryExpressionContext unaryExpression() {
			return getRuleContext(UnaryExpressionContext.class,0);
		}
		public TerminalNode As() { return getToken(KipperParser.As, 0); }
		public TypeSpecifierExpressionContext typeSpecifierExpression() {
			return getRuleContext(TypeSpecifierExpressionContext.class,0);
		}
		public ActualCastOrConvertExpressionContext(CastOrConvertExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnCastOrConvertExpressionContext extends CastOrConvertExpressionContext {
		public UnaryExpressionContext unaryExpression() {
			return getRuleContext(UnaryExpressionContext.class,0);
		}
		public PassOnCastOrConvertExpressionContext(CastOrConvertExpressionContext ctx) { copyFrom(ctx); }
	}

	public final CastOrConvertExpressionContext castOrConvertExpression() throws RecognitionException {
		CastOrConvertExpressionContext _localctx = new CastOrConvertExpressionContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_castOrConvertExpression);
		try {
			setState(487);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				_localctx = new PassOnCastOrConvertExpressionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(482);
				unaryExpression();
				}
				break;
			case 2:
				_localctx = new ActualCastOrConvertExpressionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(483);
				unaryExpression();
				setState(484);
				match(As);
				setState(485);
				typeSpecifierExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultiplicativeExpressionContext extends KipperParserRuleContext {
		public MultiplicativeExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicativeExpression; }
	 
		public MultiplicativeExpressionContext() { }
		public void copyFrom(MultiplicativeExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnMultiplicativeExpressionContext extends MultiplicativeExpressionContext {
		public CastOrConvertExpressionContext castOrConvertExpression() {
			return getRuleContext(CastOrConvertExpressionContext.class,0);
		}
		public PassOnMultiplicativeExpressionContext(MultiplicativeExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualMultiplicativeExpressionContext extends MultiplicativeExpressionContext {
		public MultiplicativeExpressionContext multiplicativeExpression() {
			return getRuleContext(MultiplicativeExpressionContext.class,0);
		}
		public CastOrConvertExpressionContext castOrConvertExpression() {
			return getRuleContext(CastOrConvertExpressionContext.class,0);
		}
		public TerminalNode Star() { return getToken(KipperParser.Star, 0); }
		public TerminalNode Div() { return getToken(KipperParser.Div, 0); }
		public TerminalNode Mod() { return getToken(KipperParser.Mod, 0); }
		public TerminalNode PowerTo() { return getToken(KipperParser.PowerTo, 0); }
		public ActualMultiplicativeExpressionContext(MultiplicativeExpressionContext ctx) { copyFrom(ctx); }
	}

	public final MultiplicativeExpressionContext multiplicativeExpression() throws RecognitionException {
		return multiplicativeExpression(0);
	}

	private MultiplicativeExpressionContext multiplicativeExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		MultiplicativeExpressionContext _localctx = new MultiplicativeExpressionContext(_ctx, _parentState);
		MultiplicativeExpressionContext _prevctx = _localctx;
		int _startState = 106;
		enterRecursionRule(_localctx, 106, RULE_multiplicativeExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnMultiplicativeExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(490);
			castOrConvertExpression();
			}
			_ctx.stop = _input.LT(-1);
			setState(497);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualMultiplicativeExpressionContext(new MultiplicativeExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_multiplicativeExpression);
					setState(492);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(493);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 263882790666240L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(494);
					castOrConvertExpression();
					}
					} 
				}
				setState(499);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AdditiveExpressionContext extends KipperParserRuleContext {
		public AdditiveExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additiveExpression; }
	 
		public AdditiveExpressionContext() { }
		public void copyFrom(AdditiveExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnAdditiveExpressionContext extends AdditiveExpressionContext {
		public MultiplicativeExpressionContext multiplicativeExpression() {
			return getRuleContext(MultiplicativeExpressionContext.class,0);
		}
		public PassOnAdditiveExpressionContext(AdditiveExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualAdditiveExpressionContext extends AdditiveExpressionContext {
		public AdditiveExpressionContext additiveExpression() {
			return getRuleContext(AdditiveExpressionContext.class,0);
		}
		public MultiplicativeExpressionContext multiplicativeExpression() {
			return getRuleContext(MultiplicativeExpressionContext.class,0);
		}
		public TerminalNode Plus() { return getToken(KipperParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(KipperParser.Minus, 0); }
		public ActualAdditiveExpressionContext(AdditiveExpressionContext ctx) { copyFrom(ctx); }
	}

	public final AdditiveExpressionContext additiveExpression() throws RecognitionException {
		return additiveExpression(0);
	}

	private AdditiveExpressionContext additiveExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AdditiveExpressionContext _localctx = new AdditiveExpressionContext(_ctx, _parentState);
		AdditiveExpressionContext _prevctx = _localctx;
		int _startState = 108;
		enterRecursionRule(_localctx, 108, RULE_additiveExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnAdditiveExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(501);
			multiplicativeExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(508);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualAdditiveExpressionContext(new AdditiveExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_additiveExpression);
					setState(503);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(504);
					_la = _input.LA(1);
					if ( !(_la==Plus || _la==Minus) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(505);
					multiplicativeExpression(0);
					}
					} 
				}
				setState(510);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RelationalExpressionContext extends KipperParserRuleContext {
		public RelationalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relationalExpression; }
	 
		public RelationalExpressionContext() { }
		public void copyFrom(RelationalExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnRelationalExpressionContext extends RelationalExpressionContext {
		public AdditiveExpressionContext additiveExpression() {
			return getRuleContext(AdditiveExpressionContext.class,0);
		}
		public PassOnRelationalExpressionContext(RelationalExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualRelationalExpressionContext extends RelationalExpressionContext {
		public RelationalExpressionContext relationalExpression() {
			return getRuleContext(RelationalExpressionContext.class,0);
		}
		public AdditiveExpressionContext additiveExpression() {
			return getRuleContext(AdditiveExpressionContext.class,0);
		}
		public TerminalNode Less() { return getToken(KipperParser.Less, 0); }
		public TerminalNode Greater() { return getToken(KipperParser.Greater, 0); }
		public TerminalNode LessEqual() { return getToken(KipperParser.LessEqual, 0); }
		public TerminalNode GreaterEqual() { return getToken(KipperParser.GreaterEqual, 0); }
		public ActualRelationalExpressionContext(RelationalExpressionContext ctx) { copyFrom(ctx); }
	}

	public final RelationalExpressionContext relationalExpression() throws RecognitionException {
		return relationalExpression(0);
	}

	private RelationalExpressionContext relationalExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		RelationalExpressionContext _localctx = new RelationalExpressionContext(_ctx, _parentState);
		RelationalExpressionContext _prevctx = _localctx;
		int _startState = 110;
		enterRecursionRule(_localctx, 110, RULE_relationalExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnRelationalExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(512);
			additiveExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(519);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualRelationalExpressionContext(new RelationalExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_relationalExpression);
					setState(514);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(515);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8646911284551352320L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(516);
					additiveExpression(0);
					}
					} 
				}
				setState(521);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,45,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EqualityExpressionContext extends KipperParserRuleContext {
		public EqualityExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equalityExpression; }
	 
		public EqualityExpressionContext() { }
		public void copyFrom(EqualityExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualEqualityExpressionContext extends EqualityExpressionContext {
		public EqualityExpressionContext equalityExpression() {
			return getRuleContext(EqualityExpressionContext.class,0);
		}
		public RelationalExpressionContext relationalExpression() {
			return getRuleContext(RelationalExpressionContext.class,0);
		}
		public TerminalNode Equal() { return getToken(KipperParser.Equal, 0); }
		public TerminalNode NotEqual() { return getToken(KipperParser.NotEqual, 0); }
		public ActualEqualityExpressionContext(EqualityExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnEqualityExpressionContext extends EqualityExpressionContext {
		public RelationalExpressionContext relationalExpression() {
			return getRuleContext(RelationalExpressionContext.class,0);
		}
		public PassOnEqualityExpressionContext(EqualityExpressionContext ctx) { copyFrom(ctx); }
	}

	public final EqualityExpressionContext equalityExpression() throws RecognitionException {
		return equalityExpression(0);
	}

	private EqualityExpressionContext equalityExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		EqualityExpressionContext _localctx = new EqualityExpressionContext(_ctx, _parentState);
		EqualityExpressionContext _prevctx = _localctx;
		int _startState = 112;
		enterRecursionRule(_localctx, 112, RULE_equalityExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnEqualityExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(523);
			relationalExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(530);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualEqualityExpressionContext(new EqualityExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_equalityExpression);
					setState(525);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(526);
					_la = _input.LA(1);
					if ( !(_la==Equal || _la==NotEqual) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(527);
					relationalExpression(0);
					}
					} 
				}
				setState(532);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BitwiseAndExpressionContext extends KipperParserRuleContext {
		public BitwiseAndExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitwiseAndExpression; }
	 
		public BitwiseAndExpressionContext() { }
		public void copyFrom(BitwiseAndExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnBitwiseAndExpressionContext extends BitwiseAndExpressionContext {
		public EqualityExpressionContext equalityExpression() {
			return getRuleContext(EqualityExpressionContext.class,0);
		}
		public PassOnBitwiseAndExpressionContext(BitwiseAndExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualBitwiseAndExpressionContext extends BitwiseAndExpressionContext {
		public BitwiseAndExpressionContext bitwiseAndExpression() {
			return getRuleContext(BitwiseAndExpressionContext.class,0);
		}
		public TerminalNode BitwiseAnd() { return getToken(KipperParser.BitwiseAnd, 0); }
		public EqualityExpressionContext equalityExpression() {
			return getRuleContext(EqualityExpressionContext.class,0);
		}
		public ActualBitwiseAndExpressionContext(BitwiseAndExpressionContext ctx) { copyFrom(ctx); }
	}

	public final BitwiseAndExpressionContext bitwiseAndExpression() throws RecognitionException {
		return bitwiseAndExpression(0);
	}

	private BitwiseAndExpressionContext bitwiseAndExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BitwiseAndExpressionContext _localctx = new BitwiseAndExpressionContext(_ctx, _parentState);
		BitwiseAndExpressionContext _prevctx = _localctx;
		int _startState = 114;
		enterRecursionRule(_localctx, 114, RULE_bitwiseAndExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnBitwiseAndExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(534);
			equalityExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(541);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,47,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualBitwiseAndExpressionContext(new BitwiseAndExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_bitwiseAndExpression);
					setState(536);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(537);
					match(BitwiseAnd);
					setState(538);
					equalityExpression(0);
					}
					} 
				}
				setState(543);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,47,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BitwiseXorExpressionContext extends KipperParserRuleContext {
		public BitwiseXorExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitwiseXorExpression; }
	 
		public BitwiseXorExpressionContext() { }
		public void copyFrom(BitwiseXorExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualBitwiseXorExpressionContext extends BitwiseXorExpressionContext {
		public BitwiseXorExpressionContext bitwiseXorExpression() {
			return getRuleContext(BitwiseXorExpressionContext.class,0);
		}
		public TerminalNode BitwiseXor() { return getToken(KipperParser.BitwiseXor, 0); }
		public BitwiseAndExpressionContext bitwiseAndExpression() {
			return getRuleContext(BitwiseAndExpressionContext.class,0);
		}
		public ActualBitwiseXorExpressionContext(BitwiseXorExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnBitwiseXorExpressionContext extends BitwiseXorExpressionContext {
		public BitwiseAndExpressionContext bitwiseAndExpression() {
			return getRuleContext(BitwiseAndExpressionContext.class,0);
		}
		public PassOnBitwiseXorExpressionContext(BitwiseXorExpressionContext ctx) { copyFrom(ctx); }
	}

	public final BitwiseXorExpressionContext bitwiseXorExpression() throws RecognitionException {
		return bitwiseXorExpression(0);
	}

	private BitwiseXorExpressionContext bitwiseXorExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BitwiseXorExpressionContext _localctx = new BitwiseXorExpressionContext(_ctx, _parentState);
		BitwiseXorExpressionContext _prevctx = _localctx;
		int _startState = 116;
		enterRecursionRule(_localctx, 116, RULE_bitwiseXorExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnBitwiseXorExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(545);
			bitwiseAndExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(552);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualBitwiseXorExpressionContext(new BitwiseXorExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_bitwiseXorExpression);
					setState(547);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(548);
					match(BitwiseXor);
					setState(549);
					bitwiseAndExpression(0);
					}
					} 
				}
				setState(554);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BitwiseOrExpressionContext extends KipperParserRuleContext {
		public BitwiseOrExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitwiseOrExpression; }
	 
		public BitwiseOrExpressionContext() { }
		public void copyFrom(BitwiseOrExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualBitwiseOrExpressionContext extends BitwiseOrExpressionContext {
		public BitwiseOrExpressionContext bitwiseOrExpression() {
			return getRuleContext(BitwiseOrExpressionContext.class,0);
		}
		public TerminalNode BitwiseOr() { return getToken(KipperParser.BitwiseOr, 0); }
		public BitwiseXorExpressionContext bitwiseXorExpression() {
			return getRuleContext(BitwiseXorExpressionContext.class,0);
		}
		public ActualBitwiseOrExpressionContext(BitwiseOrExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnBitwiseOrExpressionContext extends BitwiseOrExpressionContext {
		public BitwiseXorExpressionContext bitwiseXorExpression() {
			return getRuleContext(BitwiseXorExpressionContext.class,0);
		}
		public PassOnBitwiseOrExpressionContext(BitwiseOrExpressionContext ctx) { copyFrom(ctx); }
	}

	public final BitwiseOrExpressionContext bitwiseOrExpression() throws RecognitionException {
		return bitwiseOrExpression(0);
	}

	private BitwiseOrExpressionContext bitwiseOrExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		BitwiseOrExpressionContext _localctx = new BitwiseOrExpressionContext(_ctx, _parentState);
		BitwiseOrExpressionContext _prevctx = _localctx;
		int _startState = 118;
		enterRecursionRule(_localctx, 118, RULE_bitwiseOrExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnBitwiseOrExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(556);
			bitwiseXorExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(563);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualBitwiseOrExpressionContext(new BitwiseOrExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_bitwiseOrExpression);
					setState(558);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(559);
					match(BitwiseOr);
					setState(560);
					bitwiseXorExpression(0);
					}
					} 
				}
				setState(565);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogicalAndExpressionContext extends KipperParserRuleContext {
		public LogicalAndExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalAndExpression; }
	 
		public LogicalAndExpressionContext() { }
		public void copyFrom(LogicalAndExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnLogicalAndExpressionContext extends LogicalAndExpressionContext {
		public BitwiseOrExpressionContext bitwiseOrExpression() {
			return getRuleContext(BitwiseOrExpressionContext.class,0);
		}
		public PassOnLogicalAndExpressionContext(LogicalAndExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualLogicalAndExpressionContext extends LogicalAndExpressionContext {
		public LogicalAndExpressionContext logicalAndExpression() {
			return getRuleContext(LogicalAndExpressionContext.class,0);
		}
		public TerminalNode AndAnd() { return getToken(KipperParser.AndAnd, 0); }
		public BitwiseOrExpressionContext bitwiseOrExpression() {
			return getRuleContext(BitwiseOrExpressionContext.class,0);
		}
		public ActualLogicalAndExpressionContext(LogicalAndExpressionContext ctx) { copyFrom(ctx); }
	}

	public final LogicalAndExpressionContext logicalAndExpression() throws RecognitionException {
		return logicalAndExpression(0);
	}

	private LogicalAndExpressionContext logicalAndExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicalAndExpressionContext _localctx = new LogicalAndExpressionContext(_ctx, _parentState);
		LogicalAndExpressionContext _prevctx = _localctx;
		int _startState = 120;
		enterRecursionRule(_localctx, 120, RULE_logicalAndExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnLogicalAndExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(567);
			bitwiseOrExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(574);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualLogicalAndExpressionContext(new LogicalAndExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_logicalAndExpression);
					setState(569);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(570);
					match(AndAnd);
					setState(571);
					bitwiseOrExpression(0);
					}
					} 
				}
				setState(576);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogicalOrExpressionContext extends KipperParserRuleContext {
		public LogicalOrExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalOrExpression; }
	 
		public LogicalOrExpressionContext() { }
		public void copyFrom(LogicalOrExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnLogicalOrExpressionContext extends LogicalOrExpressionContext {
		public LogicalAndExpressionContext logicalAndExpression() {
			return getRuleContext(LogicalAndExpressionContext.class,0);
		}
		public PassOnLogicalOrExpressionContext(LogicalOrExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualLogicalOrExpressionContext extends LogicalOrExpressionContext {
		public LogicalOrExpressionContext logicalOrExpression() {
			return getRuleContext(LogicalOrExpressionContext.class,0);
		}
		public TerminalNode OrOr() { return getToken(KipperParser.OrOr, 0); }
		public LogicalAndExpressionContext logicalAndExpression() {
			return getRuleContext(LogicalAndExpressionContext.class,0);
		}
		public ActualLogicalOrExpressionContext(LogicalOrExpressionContext ctx) { copyFrom(ctx); }
	}

	public final LogicalOrExpressionContext logicalOrExpression() throws RecognitionException {
		return logicalOrExpression(0);
	}

	private LogicalOrExpressionContext logicalOrExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicalOrExpressionContext _localctx = new LogicalOrExpressionContext(_ctx, _parentState);
		LogicalOrExpressionContext _prevctx = _localctx;
		int _startState = 122;
		enterRecursionRule(_localctx, 122, RULE_logicalOrExpression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new PassOnLogicalOrExpressionContext(_localctx);
			_ctx = _localctx;
			_prevctx = _localctx;

			setState(578);
			logicalAndExpression(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(585);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ActualLogicalOrExpressionContext(new LogicalOrExpressionContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_logicalOrExpression);
					setState(580);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(581);
					match(OrOr);
					setState(582);
					logicalAndExpression(0);
					}
					} 
				}
				setState(587);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionalExpressionContext extends KipperParserRuleContext {
		public ConditionalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalExpression; }
	 
		public ConditionalExpressionContext() { }
		public void copyFrom(ConditionalExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualConditionalExpressionContext extends ConditionalExpressionContext {
		public LogicalOrExpressionContext logicalOrExpression() {
			return getRuleContext(LogicalOrExpressionContext.class,0);
		}
		public TerminalNode QuestionMark() { return getToken(KipperParser.QuestionMark, 0); }
		public List<ConditionalExpressionContext> conditionalExpression() {
			return getRuleContexts(ConditionalExpressionContext.class);
		}
		public ConditionalExpressionContext conditionalExpression(int i) {
			return getRuleContext(ConditionalExpressionContext.class,i);
		}
		public TerminalNode Colon() { return getToken(KipperParser.Colon, 0); }
		public ActualConditionalExpressionContext(ConditionalExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnConditionalExpressionContext extends ConditionalExpressionContext {
		public LogicalOrExpressionContext logicalOrExpression() {
			return getRuleContext(LogicalOrExpressionContext.class,0);
		}
		public PassOnConditionalExpressionContext(ConditionalExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ConditionalExpressionContext conditionalExpression() throws RecognitionException {
		ConditionalExpressionContext _localctx = new ConditionalExpressionContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_conditionalExpression);
		try {
			setState(595);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				_localctx = new PassOnConditionalExpressionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(588);
				logicalOrExpression(0);
				}
				break;
			case 2:
				_localctx = new ActualConditionalExpressionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(589);
				logicalOrExpression(0);
				setState(590);
				match(QuestionMark);
				setState(591);
				conditionalExpression();
				setState(592);
				match(Colon);
				setState(593);
				conditionalExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentExpressionContext extends KipperParserRuleContext {
		public AssignmentExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentExpression; }
	 
		public AssignmentExpressionContext() { }
		public void copyFrom(AssignmentExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ActualAssignmentExpressionContext extends AssignmentExpressionContext {
		public ComputedPrimaryExpressionContext computedPrimaryExpression() {
			return getRuleContext(ComputedPrimaryExpressionContext.class,0);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public AssignmentExpressionContext assignmentExpression() {
			return getRuleContext(AssignmentExpressionContext.class,0);
		}
		public ActualAssignmentExpressionContext(AssignmentExpressionContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PassOnAssignmentExpressionContext extends AssignmentExpressionContext {
		public ConditionalExpressionContext conditionalExpression() {
			return getRuleContext(ConditionalExpressionContext.class,0);
		}
		public PassOnAssignmentExpressionContext(AssignmentExpressionContext ctx) { copyFrom(ctx); }
	}

	public final AssignmentExpressionContext assignmentExpression() throws RecognitionException {
		AssignmentExpressionContext _localctx = new AssignmentExpressionContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_assignmentExpression);
		try {
			setState(602);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				_localctx = new PassOnAssignmentExpressionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(597);
				conditionalExpression();
				}
				break;
			case 2:
				_localctx = new ActualAssignmentExpressionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(598);
				computedPrimaryExpression(0);
				setState(599);
				assignmentOperator();
				setState(600);
				assignmentExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentOperatorContext extends KipperParserRuleContext {
		public TerminalNode Assign() { return getToken(KipperParser.Assign, 0); }
		public TerminalNode StarAssign() { return getToken(KipperParser.StarAssign, 0); }
		public TerminalNode DivAssign() { return getToken(KipperParser.DivAssign, 0); }
		public TerminalNode ModAssign() { return getToken(KipperParser.ModAssign, 0); }
		public TerminalNode PlusAssign() { return getToken(KipperParser.PlusAssign, 0); }
		public TerminalNode MinusAssign() { return getToken(KipperParser.MinusAssign, 0); }
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(604);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 141863388262170624L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends KipperParserRuleContext {
		public List<AssignmentExpressionContext> assignmentExpression() {
			return getRuleContexts(AssignmentExpressionContext.class);
		}
		public AssignmentExpressionContext assignmentExpression(int i) {
			return getRuleContext(AssignmentExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(KipperParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(KipperParser.Comma, i);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_expression);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(606);
			assignmentExpression();
			setState(611);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(607);
					match(Comma);
					setState(608);
					assignmentExpression();
					}
					} 
				}
				setState(613);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,54,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeSpecifierExpressionContext extends KipperParserRuleContext {
		public IdentifierTypeSpecifierExpressionContext identifierTypeSpecifierExpression() {
			return getRuleContext(IdentifierTypeSpecifierExpressionContext.class,0);
		}
		public GenericTypeSpecifierExpressionContext genericTypeSpecifierExpression() {
			return getRuleContext(GenericTypeSpecifierExpressionContext.class,0);
		}
		public TypeofTypeSpecifierExpressionContext typeofTypeSpecifierExpression() {
			return getRuleContext(TypeofTypeSpecifierExpressionContext.class,0);
		}
		public TypeSpecifierExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeSpecifierExpression; }
	}

	public final TypeSpecifierExpressionContext typeSpecifierExpression() throws RecognitionException {
		TypeSpecifierExpressionContext _localctx = new TypeSpecifierExpressionContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_typeSpecifierExpression);
		try {
			setState(617);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,55,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(614);
				identifierTypeSpecifierExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(615);
				genericTypeSpecifierExpression();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(616);
				typeofTypeSpecifierExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierTypeSpecifierExpressionContext extends KipperParserRuleContext {
		public TypeSpecifierIdentifierContext typeSpecifierIdentifier() {
			return getRuleContext(TypeSpecifierIdentifierContext.class,0);
		}
		public IdentifierTypeSpecifierExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierTypeSpecifierExpression; }
	}

	public final IdentifierTypeSpecifierExpressionContext identifierTypeSpecifierExpression() throws RecognitionException {
		IdentifierTypeSpecifierExpressionContext _localctx = new IdentifierTypeSpecifierExpressionContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_identifierTypeSpecifierExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(619);
			typeSpecifierIdentifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GenericTypeSpecifierExpressionContext extends KipperParserRuleContext {
		public List<TypeSpecifierIdentifierContext> typeSpecifierIdentifier() {
			return getRuleContexts(TypeSpecifierIdentifierContext.class);
		}
		public TypeSpecifierIdentifierContext typeSpecifierIdentifier(int i) {
			return getRuleContext(TypeSpecifierIdentifierContext.class,i);
		}
		public TerminalNode Less() { return getToken(KipperParser.Less, 0); }
		public TerminalNode Greater() { return getToken(KipperParser.Greater, 0); }
		public GenericTypeSpecifierExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_genericTypeSpecifierExpression; }
	}

	public final GenericTypeSpecifierExpressionContext genericTypeSpecifierExpression() throws RecognitionException {
		GenericTypeSpecifierExpressionContext _localctx = new GenericTypeSpecifierExpressionContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_genericTypeSpecifierExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(621);
			typeSpecifierIdentifier();
			setState(622);
			match(Less);
			setState(623);
			typeSpecifierIdentifier();
			setState(624);
			match(Greater);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeofTypeSpecifierExpressionContext extends KipperParserRuleContext {
		public TerminalNode Typeof() { return getToken(KipperParser.Typeof, 0); }
		public TerminalNode LeftParen() { return getToken(KipperParser.LeftParen, 0); }
		public TypeSpecifierIdentifierContext typeSpecifierIdentifier() {
			return getRuleContext(TypeSpecifierIdentifierContext.class,0);
		}
		public TerminalNode RightParen() { return getToken(KipperParser.RightParen, 0); }
		public TypeofTypeSpecifierExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeofTypeSpecifierExpression; }
	}

	public final TypeofTypeSpecifierExpressionContext typeofTypeSpecifierExpression() throws RecognitionException {
		TypeofTypeSpecifierExpressionContext _localctx = new TypeofTypeSpecifierExpressionContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_typeofTypeSpecifierExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(626);
			match(Typeof);
			setState(627);
			match(LeftParen);
			setState(628);
			typeSpecifierIdentifier();
			setState(629);
			match(RightParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeSpecifierIdentifierContext extends KipperParserRuleContext {
		public TerminalNode Identifier() { return getToken(KipperParser.Identifier, 0); }
		public TerminalNode Null() { return getToken(KipperParser.Null, 0); }
		public TerminalNode Undefined() { return getToken(KipperParser.Undefined, 0); }
		public TerminalNode Void() { return getToken(KipperParser.Void, 0); }
		public TypeSpecifierIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeSpecifierIdentifier; }
	}

	public final TypeSpecifierIdentifierContext typeSpecifierIdentifier() throws RecognitionException {
		TypeSpecifierIdentifierContext _localctx = new TypeSpecifierIdentifierContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_typeSpecifierIdentifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(631);
			_la = _input.LA(1);
			if ( !(((((_la - 26)) & ~0x3f) == 0 && ((1L << (_la - 26)) & 35184372088839L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 40:
			return computedPrimaryExpression_sempred((ComputedPrimaryExpressionContext)_localctx, predIndex);
		case 53:
			return multiplicativeExpression_sempred((MultiplicativeExpressionContext)_localctx, predIndex);
		case 54:
			return additiveExpression_sempred((AdditiveExpressionContext)_localctx, predIndex);
		case 55:
			return relationalExpression_sempred((RelationalExpressionContext)_localctx, predIndex);
		case 56:
			return equalityExpression_sempred((EqualityExpressionContext)_localctx, predIndex);
		case 57:
			return bitwiseAndExpression_sempred((BitwiseAndExpressionContext)_localctx, predIndex);
		case 58:
			return bitwiseXorExpression_sempred((BitwiseXorExpressionContext)_localctx, predIndex);
		case 59:
			return bitwiseOrExpression_sempred((BitwiseOrExpressionContext)_localctx, predIndex);
		case 60:
			return logicalAndExpression_sempred((LogicalAndExpressionContext)_localctx, predIndex);
		case 61:
			return logicalOrExpression_sempred((LogicalOrExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean computedPrimaryExpression_sempred(ComputedPrimaryExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 3);
		case 2:
			return precpred(_ctx, 2);
		case 3:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean multiplicativeExpression_sempred(MultiplicativeExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 4:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean additiveExpression_sempred(AdditiveExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean relationalExpression_sempred(RelationalExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean equalityExpression_sempred(EqualityExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 7:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean bitwiseAndExpression_sempred(BitwiseAndExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean bitwiseXorExpression_sempred(BitwiseXorExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 9:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean bitwiseOrExpression_sempred(BitwiseOrExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 10:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean logicalAndExpression_sempred(LogicalAndExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 11:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean logicalOrExpression_sempred(LogicalOrExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 12:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001S\u027a\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007@\u0002"+
		"A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007E\u0002"+
		"F\u0007F\u0001\u0000\u0003\u0000\u0090\b\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0004\u0001\u0095\b\u0001\u000b\u0001\f\u0001\u0096\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0004\u0003\u009c\b\u0003\u000b\u0003\f"+
		"\u0003\u009d\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004\u00a3\b\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005"+
		"\u00aa\b\u0005\u0003\u0005\u00ac\b\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0003\u0006\u00b2\b\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0003\u0006\u00b8\b\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b\u00c8\b\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0005\f\u00cd\b\f\n\f\f\f\u00d0\t\f\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00de\b\u000f\u0001"+
		"\u0010\u0001\u0010\u0003\u0010\u00e2\b\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0003\u0012\u00eb"+
		"\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0003\u0013\u00f4\b\u0013\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0005\u0014\u00fc\b\u0014\n"+
		"\u0014\f\u0014\u00ff\t\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0003\u0015\u010b\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0003"+
		"\u0016\u0110\b\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0003"+
		"\u0017\u0116\b\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u011a\b\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u0120\b\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u0126\b\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u001a"+
		"\u0001\u001a\u0001\u001a\u0001\u001b\u0001\u001b\u0003\u001b\u013e\b\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c"+
		"\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u014a\b\u001c"+
		"\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e"+
		"\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001!\u0001!\u0001\"\u0001\"\u0005"+
		"\"\u015a\b\"\n\"\f\"\u015d\t\"\u0001\"\u0001\"\u0001\"\u0005\"\u0162\b"+
		"\"\n\"\f\"\u0165\t\"\u0001\"\u0003\"\u0168\b\"\u0001#\u0001#\u0001#\u0003"+
		"#\u016d\b#\u0001#\u0003#\u0170\b#\u0001$\u0001$\u0001$\u0003$\u0175\b"+
		"$\u0001$\u0003$\u0178\b$\u0001%\u0001%\u0001&\u0001&\u0001&\u0001&\u0005"+
		"&\u0180\b&\n&\f&\u0183\t&\u0003&\u0185\b&\u0001&\u0001&\u0001\'\u0001"+
		"\'\u0001(\u0001(\u0001(\u0001(\u0001(\u0001(\u0003(\u0191\b(\u0001(\u0001"+
		"(\u0001(\u0003(\u0196\b(\u0001(\u0001(\u0001(\u0003(\u019b\b(\u0001(\u0001"+
		"(\u0001(\u0001(\u0001(\u0001(\u0001(\u0001(\u0001(\u0001(\u0001(\u0001"+
		"(\u0001(\u0001(\u0005(\u01ab\b(\n(\f(\u01ae\t(\u0001)\u0001)\u0001)\u0005"+
		")\u01b3\b)\n)\f)\u01b6\t)\u0001*\u0001*\u0001*\u0001+\u0001+\u0001+\u0001"+
		"+\u0001,\u0001,\u0001,\u0001,\u0003,\u01c3\b,\u0001,\u0001,\u0001,\u0001"+
		",\u0003,\u01c9\b,\u0001,\u0001,\u0001-\u0001-\u0003-\u01cf\b-\u0001.\u0001"+
		".\u0001.\u0001/\u0001/\u0001/\u0003/\u01d7\b/\u00010\u00010\u00010\u0001"+
		"1\u00011\u00011\u00012\u00012\u00013\u00013\u00014\u00014\u00014\u0001"+
		"4\u00014\u00034\u01e8\b4\u00015\u00015\u00015\u00015\u00015\u00015\u0005"+
		"5\u01f0\b5\n5\f5\u01f3\t5\u00016\u00016\u00016\u00016\u00016\u00016\u0005"+
		"6\u01fb\b6\n6\f6\u01fe\t6\u00017\u00017\u00017\u00017\u00017\u00017\u0005"+
		"7\u0206\b7\n7\f7\u0209\t7\u00018\u00018\u00018\u00018\u00018\u00018\u0005"+
		"8\u0211\b8\n8\f8\u0214\t8\u00019\u00019\u00019\u00019\u00019\u00019\u0005"+
		"9\u021c\b9\n9\f9\u021f\t9\u0001:\u0001:\u0001:\u0001:\u0001:\u0001:\u0005"+
		":\u0227\b:\n:\f:\u022a\t:\u0001;\u0001;\u0001;\u0001;\u0001;\u0001;\u0005"+
		";\u0232\b;\n;\f;\u0235\t;\u0001<\u0001<\u0001<\u0001<\u0001<\u0001<\u0005"+
		"<\u023d\b<\n<\f<\u0240\t<\u0001=\u0001=\u0001=\u0001=\u0001=\u0001=\u0005"+
		"=\u0248\b=\n=\f=\u024b\t=\u0001>\u0001>\u0001>\u0001>\u0001>\u0001>\u0001"+
		">\u0003>\u0254\b>\u0001?\u0001?\u0001?\u0001?\u0001?\u0003?\u025b\b?\u0001"+
		"@\u0001@\u0001A\u0001A\u0001A\u0005A\u0262\bA\nA\fA\u0265\tA\u0001B\u0001"+
		"B\u0001B\u0003B\u026a\bB\u0001C\u0001C\u0001D\u0001D\u0001D\u0001D\u0001"+
		"D\u0001E\u0001E\u0001E\u0001E\u0001E\u0001F\u0001F\u0001F\u0000\nPjln"+
		"prtvxzG\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080"+
		"\u0082\u0084\u0086\u0088\u008a\u008c\u0000\u000e\u0001\u0000\u0004\u0005"+
		"\u0001\u0000\u000b\f\u0001\u0000\u0017\u0018\u0001\u0000IJ\u0002\u0000"+
		"HHKK\u0001\u0000\u001a\u001c\u0002\u0000))++\u0003\u0000((**22\u0001\u0000"+
		",/\u0002\u0000((**\u0001\u0000;>\u0001\u00009:\u0001\u000038\u0002\u0000"+
		"\u001a\u001cGG\u027a\u0000\u008f\u0001\u0000\u0000\u0000\u0002\u0094\u0001"+
		"\u0000\u0000\u0000\u0004\u0098\u0001\u0000\u0000\u0000\u0006\u009b\u0001"+
		"\u0000\u0000\u0000\b\u00a2\u0001\u0000\u0000\u0000\n\u00ab\u0001\u0000"+
		"\u0000\u0000\f\u00ad\u0001\u0000\u0000\u0000\u000e\u00b9\u0001\u0000\u0000"+
		"\u0000\u0010\u00bc\u0001\u0000\u0000\u0000\u0012\u00be\u0001\u0000\u0000"+
		"\u0000\u0014\u00c0\u0001\u0000\u0000\u0000\u0016\u00c2\u0001\u0000\u0000"+
		"\u0000\u0018\u00c9\u0001\u0000\u0000\u0000\u001a\u00d1\u0001\u0000\u0000"+
		"\u0000\u001c\u00d5\u0001\u0000\u0000\u0000\u001e\u00dd\u0001\u0000\u0000"+
		"\u0000 \u00df\u0001\u0000\u0000\u0000\"\u00e5\u0001\u0000\u0000\u0000"+
		"$\u00ea\u0001\u0000\u0000\u0000&\u00ec\u0001\u0000\u0000\u0000(\u00f5"+
		"\u0001\u0000\u0000\u0000*\u010a\u0001\u0000\u0000\u0000,\u010f\u0001\u0000"+
		"\u0000\u0000.\u0111\u0001\u0000\u0000\u00000\u012a\u0001\u0000\u0000\u0000"+
		"2\u0130\u0001\u0000\u0000\u00004\u0138\u0001\u0000\u0000\u00006\u013b"+
		"\u0001\u0000\u0000\u00008\u0149\u0001\u0000\u0000\u0000:\u014b\u0001\u0000"+
		"\u0000\u0000<\u014f\u0001\u0000\u0000\u0000>\u0151\u0001\u0000\u0000\u0000"+
		"@\u0153\u0001\u0000\u0000\u0000B\u0155\u0001\u0000\u0000\u0000D\u0167"+
		"\u0001\u0000\u0000\u0000F\u016f\u0001\u0000\u0000\u0000H\u0177\u0001\u0000"+
		"\u0000\u0000J\u0179\u0001\u0000\u0000\u0000L\u017b\u0001\u0000\u0000\u0000"+
		"N\u0188\u0001\u0000\u0000\u0000P\u0195\u0001\u0000\u0000\u0000R\u01af"+
		"\u0001\u0000\u0000\u0000T\u01b7\u0001\u0000\u0000\u0000V\u01ba\u0001\u0000"+
		"\u0000\u0000X\u01be\u0001\u0000\u0000\u0000Z\u01ce\u0001\u0000\u0000\u0000"+
		"\\\u01d0\u0001\u0000\u0000\u0000^\u01d6\u0001\u0000\u0000\u0000`\u01d8"+
		"\u0001\u0000\u0000\u0000b\u01db\u0001\u0000\u0000\u0000d\u01de\u0001\u0000"+
		"\u0000\u0000f\u01e0\u0001\u0000\u0000\u0000h\u01e7\u0001\u0000\u0000\u0000"+
		"j\u01e9\u0001\u0000\u0000\u0000l\u01f4\u0001\u0000\u0000\u0000n\u01ff"+
		"\u0001\u0000\u0000\u0000p\u020a\u0001\u0000\u0000\u0000r\u0215\u0001\u0000"+
		"\u0000\u0000t\u0220\u0001\u0000\u0000\u0000v\u022b\u0001\u0000\u0000\u0000"+
		"x\u0236\u0001\u0000\u0000\u0000z\u0241\u0001\u0000\u0000\u0000|\u0253"+
		"\u0001\u0000\u0000\u0000~\u025a\u0001\u0000\u0000\u0000\u0080\u025c\u0001"+
		"\u0000\u0000\u0000\u0082\u025e\u0001\u0000\u0000\u0000\u0084\u0269\u0001"+
		"\u0000\u0000\u0000\u0086\u026b\u0001\u0000\u0000\u0000\u0088\u026d\u0001"+
		"\u0000\u0000\u0000\u008a\u0272\u0001\u0000\u0000\u0000\u008c\u0277\u0001"+
		"\u0000\u0000\u0000\u008e\u0090\u0003\u0002\u0001\u0000\u008f\u008e\u0001"+
		"\u0000\u0000\u0000\u008f\u0090\u0001\u0000\u0000\u0000\u0090\u0091\u0001"+
		"\u0000\u0000\u0000\u0091\u0092\u0005\u0000\u0000\u0001\u0092\u0001\u0001"+
		"\u0000\u0000\u0000\u0093\u0095\u0003\u0004\u0002\u0000\u0094\u0093\u0001"+
		"\u0000\u0000\u0000\u0095\u0096\u0001\u0000\u0000\u0000\u0096\u0094\u0001"+
		"\u0000\u0000\u0000\u0096\u0097\u0001\u0000\u0000\u0000\u0097\u0003\u0001"+
		"\u0000\u0000\u0000\u0098\u0099\u0003\u0006\u0003\u0000\u0099\u0005\u0001"+
		"\u0000\u0000\u0000\u009a\u009c\u0003\b\u0004\u0000\u009b\u009a\u0001\u0000"+
		"\u0000\u0000\u009c\u009d\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000"+
		"\u0000\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u0007\u0001\u0000"+
		"\u0000\u0000\u009f\u00a3\u0003\u001e\u000f\u0000\u00a0\u00a3\u0003\n\u0005"+
		"\u0000\u00a1\u00a3\u0005\u001e\u0000\u0000\u00a2\u009f\u0001\u0000\u0000"+
		"\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a2\u00a1\u0001\u0000\u0000"+
		"\u0000\u00a3\t\u0001\u0000\u0000\u0000\u00a4\u00a5\u0003\u000e\u0007\u0000"+
		"\u00a5\u00a6\u0005\u001e\u0000\u0000\u00a6\u00ac\u0001\u0000\u0000\u0000"+
		"\u00a7\u00a9\u0003\f\u0006\u0000\u00a8\u00aa\u0005\u001e\u0000\u0000\u00a9"+
		"\u00a8\u0001\u0000\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa"+
		"\u00ac\u0001\u0000\u0000\u0000\u00ab\u00a4\u0001\u0000\u0000\u0000\u00ab"+
		"\u00a7\u0001\u0000\u0000\u0000\u00ac\u000b\u0001\u0000\u0000\u0000\u00ad"+
		"\u00ae\u0005\u0013\u0000\u0000\u00ae\u00af\u0003\u0012\t\u0000\u00af\u00b1"+
		"\u0005!\u0000\u0000\u00b0\u00b2\u0003\u0018\f\u0000\u00b1\u00b0\u0001"+
		"\u0000\u0000\u0000\u00b1\u00b2\u0001\u0000\u0000\u0000\u00b2\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b4\u0005\"\u0000\u0000\u00b4\u00b5\u0005\u0016"+
		"\u0000\u0000\u00b5\u00b7\u0003\u0084B\u0000\u00b6\u00b8\u0003 \u0010\u0000"+
		"\u00b7\u00b6\u0001\u0000\u0000\u0000\u00b7\u00b8\u0001\u0000\u0000\u0000"+
		"\u00b8\r\u0001\u0000\u0000\u0000\u00b9\u00ba\u0003\u0010\b\u0000\u00ba"+
		"\u00bb\u0003\u0016\u000b\u0000\u00bb\u000f\u0001\u0000\u0000\u0000\u00bc"+
		"\u00bd\u0007\u0000\u0000\u0000\u00bd\u0011\u0001\u0000\u0000\u0000\u00be"+
		"\u00bf\u0003\u0014\n\u0000\u00bf\u0013\u0001\u0000\u0000\u0000\u00c0\u00c1"+
		"\u0005G\u0000\u0000\u00c1\u0015\u0001\u0000\u0000\u0000\u00c2\u00c3\u0003"+
		"\u0012\t\u0000\u00c3\u00c4\u0005 \u0000\u0000\u00c4\u00c7\u0003\u0084"+
		"B\u0000\u00c5\u00c6\u00053\u0000\u0000\u00c6\u00c8\u0003\u001c\u000e\u0000"+
		"\u00c7\u00c5\u0001\u0000\u0000\u0000\u00c7\u00c8\u0001\u0000\u0000\u0000"+
		"\u00c8\u0017\u0001\u0000\u0000\u0000\u00c9\u00ce\u0003\u001a\r\u0000\u00ca"+
		"\u00cb\u0005\u001d\u0000\u0000\u00cb\u00cd\u0003\u001a\r\u0000\u00cc\u00ca"+
		"\u0001\u0000\u0000\u0000\u00cd\u00d0\u0001\u0000\u0000\u0000\u00ce\u00cc"+
		"\u0001\u0000\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000\u0000\u00cf\u0019"+
		"\u0001\u0000\u0000\u0000\u00d0\u00ce\u0001\u0000\u0000\u0000\u00d1\u00d2"+
		"\u0003\u0012\t\u0000\u00d2\u00d3\u0005 \u0000\u0000\u00d3\u00d4\u0003"+
		"\u0084B\u0000\u00d4\u001b\u0001\u0000\u0000\u0000\u00d5\u00d6\u0003~?"+
		"\u0000\u00d6\u001d\u0001\u0000\u0000\u0000\u00d7\u00de\u0003 \u0010\u0000"+
		"\u00d8\u00de\u0003\"\u0011\u0000\u00d9\u00de\u0003$\u0012\u0000\u00da"+
		"\u00de\u0003,\u0016\u0000\u00db\u00de\u00034\u001a\u0000\u00dc\u00de\u0003"+
		"6\u001b\u0000\u00dd\u00d7\u0001\u0000\u0000\u0000\u00dd\u00d8\u0001\u0000"+
		"\u0000\u0000\u00dd\u00d9\u0001\u0000\u0000\u0000\u00dd\u00da\u0001\u0000"+
		"\u0000\u0000\u00dd\u00db\u0001\u0000\u0000\u0000\u00dd\u00dc\u0001\u0000"+
		"\u0000\u0000\u00de\u001f\u0001\u0000\u0000\u0000\u00df\u00e1\u0005&\u0000"+
		"\u0000\u00e0\u00e2\u0003\u0006\u0003\u0000\u00e1\u00e0\u0001\u0000\u0000"+
		"\u0000\u00e1\u00e2\u0001\u0000\u0000\u0000\u00e2\u00e3\u0001\u0000\u0000"+
		"\u0000\u00e3\u00e4\u0005\'\u0000\u0000\u00e4!\u0001\u0000\u0000\u0000"+
		"\u00e5\u00e6\u0003\u0082A\u0000\u00e6\u00e7\u0005\u001e\u0000\u0000\u00e7"+
		"#\u0001\u0000\u0000\u0000\u00e8\u00eb\u0003&\u0013\u0000\u00e9\u00eb\u0003"+
		"(\u0014\u0000\u00ea\u00e8\u0001\u0000\u0000\u0000\u00ea\u00e9\u0001\u0000"+
		"\u0000\u0000\u00eb%\u0001\u0000\u0000\u0000\u00ec\u00ed\u0005\u000f\u0000"+
		"\u0000\u00ed\u00ee\u0005!\u0000\u0000\u00ee\u00ef\u0003\u0082A\u0000\u00ef"+
		"\u00f0\u0005\"\u0000\u0000\u00f0\u00f3\u0003\u001e\u000f\u0000\u00f1\u00f2"+
		"\u0005\u0010\u0000\u0000\u00f2\u00f4\u0003\u001e\u000f\u0000\u00f3\u00f1"+
		"\u0001\u0000\u0000\u0000\u00f3\u00f4\u0001\u0000\u0000\u0000\u00f4\'\u0001"+
		"\u0000\u0000\u0000\u00f5\u00f6\u0005\b\u0000\u0000\u00f6\u00f7\u0005!"+
		"\u0000\u0000\u00f7\u00f8\u0003\u0082A\u0000\u00f8\u00f9\u0005\"\u0000"+
		"\u0000\u00f9\u00fd\u0005&\u0000\u0000\u00fa\u00fc\u0003*\u0015\u0000\u00fb"+
		"\u00fa\u0001\u0000\u0000\u0000\u00fc\u00ff\u0001\u0000\u0000\u0000\u00fd"+
		"\u00fb\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000\u0000\u0000\u00fe"+
		"\u0100\u0001\u0000\u0000\u0000\u00ff\u00fd\u0001\u0000\u0000\u0000\u0100"+
		"\u0101\u0005\'\u0000\u0000\u0101)\u0001\u0000\u0000\u0000\u0102\u0103"+
		"\u0005\t\u0000\u0000\u0103\u0104\u0003\u0082A\u0000\u0104\u0105\u0005"+
		" \u0000\u0000\u0105\u0106\u0003\u001e\u000f\u0000\u0106\u010b\u0001\u0000"+
		"\u0000\u0000\u0107\u0108\u0005\n\u0000\u0000\u0108\u0109\u0005 \u0000"+
		"\u0000\u0109\u010b\u0003\u001e\u000f\u0000\u010a\u0102\u0001\u0000\u0000"+
		"\u0000\u010a\u0107\u0001\u0000\u0000\u0000\u010b+\u0001\u0000\u0000\u0000"+
		"\u010c\u0110\u0003.\u0017\u0000\u010d\u0110\u00030\u0018\u0000\u010e\u0110"+
		"\u00032\u0019\u0000\u010f\u010c\u0001\u0000\u0000\u0000\u010f\u010d\u0001"+
		"\u0000\u0000\u0000\u010f\u010e\u0001\u0000\u0000\u0000\u0110-\u0001\u0000"+
		"\u0000\u0000\u0111\u0112\u0005\u0011\u0000\u0000\u0112\u0119\u0005!\u0000"+
		"\u0000\u0113\u0116\u0003\u000e\u0007\u0000\u0114\u0116\u0003\u0082A\u0000"+
		"\u0115\u0113\u0001\u0000\u0000\u0000\u0115\u0114\u0001\u0000\u0000\u0000"+
		"\u0116\u0117\u0001\u0000\u0000\u0000\u0117\u0118\u0006\u0017\uffff\uffff"+
		"\u0000\u0118\u011a\u0001\u0000\u0000\u0000\u0119\u0115\u0001\u0000\u0000"+
		"\u0000\u0119\u011a\u0001\u0000\u0000\u0000\u011a\u011b\u0001\u0000\u0000"+
		"\u0000\u011b\u011f\u0005\u001e\u0000\u0000\u011c\u011d\u0003\u0082A\u0000"+
		"\u011d\u011e\u0006\u0017\uffff\uffff\u0000\u011e\u0120\u0001\u0000\u0000"+
		"\u0000\u011f\u011c\u0001\u0000\u0000\u0000\u011f\u0120\u0001\u0000\u0000"+
		"\u0000\u0120\u0121\u0001\u0000\u0000\u0000\u0121\u0125\u0005\u001e\u0000"+
		"\u0000\u0122\u0123\u0003\u0082A\u0000\u0123\u0124\u0006\u0017\uffff\uffff"+
		"\u0000\u0124\u0126\u0001\u0000\u0000\u0000\u0125\u0122\u0001\u0000\u0000"+
		"\u0000\u0125\u0126\u0001\u0000\u0000\u0000\u0126\u0127\u0001\u0000\u0000"+
		"\u0000\u0127\u0128\u0005\"\u0000\u0000\u0128\u0129\u0003\u001e\u000f\u0000"+
		"\u0129/\u0001\u0000\u0000\u0000\u012a\u012b\u0005\u000e\u0000\u0000\u012b"+
		"\u012c\u0005!\u0000\u0000\u012c\u012d\u0003\u0082A\u0000\u012d\u012e\u0005"+
		"\"\u0000\u0000\u012e\u012f\u0003\u001e\u000f\u0000\u012f1\u0001\u0000"+
		"\u0000\u0000\u0130\u0131\u0005\r\u0000\u0000\u0131\u0132\u0003\u001e\u000f"+
		"\u0000\u0132\u0133\u0005\u000e\u0000\u0000\u0133\u0134\u0005!\u0000\u0000"+
		"\u0134\u0135\u0003\u0082A\u0000\u0135\u0136\u0005\"\u0000\u0000\u0136"+
		"\u0137\u0005\u001e\u0000\u0000\u01373\u0001\u0000\u0000\u0000\u0138\u0139"+
		"\u0007\u0001\u0000\u0000\u0139\u013a\u0005\u001e\u0000\u0000\u013a5\u0001"+
		"\u0000\u0000\u0000\u013b\u013d\u0005\u0014\u0000\u0000\u013c\u013e\u0003"+
		"\u0082A\u0000\u013d\u013c\u0001\u0000\u0000\u0000\u013d\u013e\u0001\u0000"+
		"\u0000\u0000\u013e\u013f\u0001\u0000\u0000\u0000\u013f\u0140\u0005\u001e"+
		"\u0000\u0000\u01407\u0001\u0000\u0000\u0000\u0141\u014a\u0003:\u001d\u0000"+
		"\u0142\u014a\u0003<\u001e\u0000\u0143\u014a\u0003>\u001f\u0000\u0144\u014a"+
		"\u0003B!\u0000\u0145\u014a\u0003D\"\u0000\u0146\u014a\u0003J%\u0000\u0147"+
		"\u014a\u0003L&\u0000\u0148\u014a\u0003N\'\u0000\u0149\u0141\u0001\u0000"+
		"\u0000\u0000\u0149\u0142\u0001\u0000\u0000\u0000\u0149\u0143\u0001\u0000"+
		"\u0000\u0000\u0149\u0144\u0001\u0000\u0000\u0000\u0149\u0145\u0001\u0000"+
		"\u0000\u0000\u0149\u0146\u0001\u0000\u0000\u0000\u0149\u0147\u0001\u0000"+
		"\u0000\u0000\u0149\u0148\u0001\u0000\u0000\u0000\u014a9\u0001\u0000\u0000"+
		"\u0000\u014b\u014c\u0005!\u0000\u0000\u014c\u014d\u0003\u0082A\u0000\u014d"+
		"\u014e\u0005\"\u0000\u0000\u014e;\u0001\u0000\u0000\u0000\u014f\u0150"+
		"\u0007\u0002\u0000\u0000\u0150=\u0001\u0000\u0000\u0000\u0151\u0152\u0003"+
		"@ \u0000\u0152?\u0001\u0000\u0000\u0000\u0153\u0154\u0005G\u0000\u0000"+
		"\u0154A\u0001\u0000\u0000\u0000\u0155\u0156\u0007\u0003\u0000\u0000\u0156"+
		"C\u0001\u0000\u0000\u0000\u0157\u015b\u0005N\u0000\u0000\u0158\u015a\u0003"+
		"F#\u0000\u0159\u0158\u0001\u0000\u0000\u0000\u015a\u015d\u0001\u0000\u0000"+
		"\u0000\u015b\u0159\u0001\u0000\u0000\u0000\u015b\u015c\u0001\u0000\u0000"+
		"\u0000\u015c\u015e\u0001\u0000\u0000\u0000\u015d\u015b\u0001\u0000\u0000"+
		"\u0000\u015e\u0168\u0005P\u0000\u0000\u015f\u0163\u0005O\u0000\u0000\u0160"+
		"\u0162\u0003H$\u0000\u0161\u0160\u0001\u0000\u0000\u0000\u0162\u0165\u0001"+
		"\u0000\u0000\u0000\u0163\u0161\u0001\u0000\u0000\u0000\u0163\u0164\u0001"+
		"\u0000\u0000\u0000\u0164\u0166\u0001\u0000\u0000\u0000\u0165\u0163\u0001"+
		"\u0000\u0000\u0000\u0166\u0168\u0005R\u0000\u0000\u0167\u0157\u0001\u0000"+
		"\u0000\u0000\u0167\u015f\u0001\u0000\u0000\u0000\u0168E\u0001\u0000\u0000"+
		"\u0000\u0169\u0170\u0005Q\u0000\u0000\u016a\u016c\u0005\u0001\u0000\u0000"+
		"\u016b\u016d\u0003\u0082A\u0000\u016c\u016b\u0001\u0000\u0000\u0000\u016c"+
		"\u016d\u0001\u0000\u0000\u0000\u016d\u016e\u0001\u0000\u0000\u0000\u016e"+
		"\u0170\u0005%\u0000\u0000\u016f\u0169\u0001\u0000\u0000\u0000\u016f\u016a"+
		"\u0001\u0000\u0000\u0000\u0170G\u0001\u0000\u0000\u0000\u0171\u0178\u0005"+
		"S\u0000\u0000\u0172\u0174\u0005\u0001\u0000\u0000\u0173\u0175\u0003\u0082"+
		"A\u0000\u0174\u0173\u0001\u0000\u0000\u0000\u0174\u0175\u0001\u0000\u0000"+
		"\u0000\u0175\u0176\u0001\u0000\u0000\u0000\u0176\u0178\u0005%\u0000\u0000"+
		"\u0177\u0171\u0001\u0000\u0000\u0000\u0177\u0172\u0001\u0000\u0000\u0000"+
		"\u0178I\u0001\u0000\u0000\u0000\u0179\u017a\u0007\u0004\u0000\u0000\u017a"+
		"K\u0001\u0000\u0000\u0000\u017b\u0184\u0005#\u0000\u0000\u017c\u0181\u0003"+
		"\u0082A\u0000\u017d\u017e\u0005\u001d\u0000\u0000\u017e\u0180\u0003\u0082"+
		"A\u0000\u017f\u017d\u0001\u0000\u0000\u0000\u0180\u0183\u0001\u0000\u0000"+
		"\u0000\u0181\u017f\u0001\u0000\u0000\u0000\u0181\u0182\u0001\u0000\u0000"+
		"\u0000\u0182\u0185\u0001\u0000\u0000\u0000\u0183\u0181\u0001\u0000\u0000"+
		"\u0000\u0184\u017c\u0001\u0000\u0000\u0000\u0184\u0185\u0001\u0000\u0000"+
		"\u0000\u0185\u0186\u0001\u0000\u0000\u0000\u0186\u0187\u0005$\u0000\u0000"+
		"\u0187M\u0001\u0000\u0000\u0000\u0188\u0189\u0007\u0005\u0000\u0000\u0189"+
		"O\u0001\u0000\u0000\u0000\u018a\u018b\u0006(\uffff\uffff\u0000\u018b\u0196"+
		"\u00038\u001c\u0000\u018c\u018d\u0005\u0015\u0000\u0000\u018d\u018e\u0003"+
		"P(\u0000\u018e\u0190\u0005!\u0000\u0000\u018f\u0191\u0003R)\u0000\u0190"+
		"\u018f\u0001\u0000\u0000\u0000\u0190\u0191\u0001\u0000\u0000\u0000\u0191"+
		"\u0192\u0001\u0000\u0000\u0000\u0192\u0193\u0005\"\u0000\u0000\u0193\u0194"+
		"\u0006(\uffff\uffff\u0000\u0194\u0196\u0001\u0000\u0000\u0000\u0195\u018a"+
		"\u0001\u0000\u0000\u0000\u0195\u018c\u0001\u0000\u0000\u0000\u0196\u01ac"+
		"\u0001\u0000\u0000\u0000\u0197\u0198\n\u0005\u0000\u0000\u0198\u019a\u0005"+
		"!\u0000\u0000\u0199\u019b\u0003R)\u0000\u019a\u0199\u0001\u0000\u0000"+
		"\u0000\u019a\u019b\u0001\u0000\u0000\u0000\u019b\u019c\u0001\u0000\u0000"+
		"\u0000\u019c\u019d\u0005\"\u0000\u0000\u019d\u01ab\u0006(\uffff\uffff"+
		"\u0000\u019e\u019f\n\u0003\u0000\u0000\u019f\u01a0\u0003T*\u0000\u01a0"+
		"\u01a1\u0006(\uffff\uffff\u0000\u01a1\u01ab\u0001\u0000\u0000\u0000\u01a2"+
		"\u01a3\n\u0002\u0000\u0000\u01a3\u01a4\u0003V+\u0000\u01a4\u01a5\u0006"+
		"(\uffff\uffff\u0000\u01a5\u01ab\u0001\u0000\u0000\u0000\u01a6\u01a7\n"+
		"\u0001\u0000\u0000\u01a7\u01a8\u0003X,\u0000\u01a8\u01a9\u0006(\uffff"+
		"\uffff\u0000\u01a9\u01ab\u0001\u0000\u0000\u0000\u01aa\u0197\u0001\u0000"+
		"\u0000\u0000\u01aa\u019e\u0001\u0000\u0000\u0000\u01aa\u01a2\u0001\u0000"+
		"\u0000\u0000\u01aa\u01a6\u0001\u0000\u0000\u0000\u01ab\u01ae\u0001\u0000"+
		"\u0000\u0000\u01ac\u01aa\u0001\u0000\u0000\u0000\u01ac\u01ad\u0001\u0000"+
		"\u0000\u0000\u01adQ\u0001\u0000\u0000\u0000\u01ae\u01ac\u0001\u0000\u0000"+
		"\u0000\u01af\u01b4\u0003~?\u0000\u01b0\u01b1\u0005\u001d\u0000\u0000\u01b1"+
		"\u01b3\u0003~?\u0000\u01b2\u01b0\u0001\u0000\u0000\u0000\u01b3\u01b6\u0001"+
		"\u0000\u0000\u0000\u01b4\u01b2\u0001\u0000\u0000\u0000\u01b4\u01b5\u0001"+
		"\u0000\u0000\u0000\u01b5S\u0001\u0000\u0000\u0000\u01b6\u01b4\u0001\u0000"+
		"\u0000\u0000\u01b7\u01b8\u0005F\u0000\u0000\u01b8\u01b9\u0003@ \u0000"+
		"\u01b9U\u0001\u0000\u0000\u0000\u01ba\u01bb\u0005#\u0000\u0000\u01bb\u01bc"+
		"\u0003\u0082A\u0000\u01bc\u01bd\u0005$\u0000\u0000\u01bdW\u0001\u0000"+
		"\u0000\u0000\u01be\u01c2\u0005#\u0000\u0000\u01bf\u01c0\u0003\u0082A\u0000"+
		"\u01c0\u01c1\u0006,\uffff\uffff\u0000\u01c1\u01c3\u0001\u0000\u0000\u0000"+
		"\u01c2\u01bf\u0001\u0000\u0000\u0000\u01c2\u01c3\u0001\u0000\u0000\u0000"+
		"\u01c3\u01c4\u0001\u0000\u0000\u0000\u01c4\u01c8\u0005 \u0000\u0000\u01c5"+
		"\u01c6\u0003\u0082A\u0000\u01c6\u01c7\u0006,\uffff\uffff\u0000\u01c7\u01c9"+
		"\u0001\u0000\u0000\u0000\u01c8\u01c5\u0001\u0000\u0000\u0000\u01c8\u01c9"+
		"\u0001\u0000\u0000\u0000\u01c9\u01ca\u0001\u0000\u0000\u0000\u01ca\u01cb"+
		"\u0005$\u0000\u0000\u01cbY\u0001\u0000\u0000\u0000\u01cc\u01cf\u0003P"+
		"(\u0000\u01cd\u01cf\u0003\\.\u0000\u01ce\u01cc\u0001\u0000\u0000\u0000"+
		"\u01ce\u01cd\u0001\u0000\u0000\u0000\u01cf[\u0001\u0000\u0000\u0000\u01d0"+
		"\u01d1\u0003P(\u0000\u01d1\u01d2\u0003d2\u0000\u01d2]\u0001\u0000\u0000"+
		"\u0000\u01d3\u01d7\u0003Z-\u0000\u01d4\u01d7\u0003`0\u0000\u01d5\u01d7"+
		"\u0003b1\u0000\u01d6\u01d3\u0001\u0000\u0000\u0000\u01d6\u01d4\u0001\u0000"+
		"\u0000\u0000\u01d6\u01d5\u0001\u0000\u0000\u0000\u01d7_\u0001\u0000\u0000"+
		"\u0000\u01d8\u01d9\u0003d2\u0000\u01d9\u01da\u0003Z-\u0000\u01daa\u0001"+
		"\u0000\u0000\u0000\u01db\u01dc\u0003f3\u0000\u01dc\u01dd\u0003Z-\u0000"+
		"\u01ddc\u0001\u0000\u0000\u0000\u01de\u01df\u0007\u0006\u0000\u0000\u01df"+
		"e\u0001\u0000\u0000\u0000\u01e0\u01e1\u0007\u0007\u0000\u0000\u01e1g\u0001"+
		"\u0000\u0000\u0000\u01e2\u01e8\u0003^/\u0000\u01e3\u01e4\u0003^/\u0000"+
		"\u01e4\u01e5\u0005\u0006\u0000\u0000\u01e5\u01e6\u0003\u0084B\u0000\u01e6"+
		"\u01e8\u0001\u0000\u0000\u0000\u01e7\u01e2\u0001\u0000\u0000\u0000\u01e7"+
		"\u01e3\u0001\u0000\u0000\u0000\u01e8i\u0001\u0000\u0000\u0000\u01e9\u01ea"+
		"\u00065\uffff\uffff\u0000\u01ea\u01eb\u0003h4\u0000\u01eb\u01f1\u0001"+
		"\u0000\u0000\u0000\u01ec\u01ed\n\u0001\u0000\u0000\u01ed\u01ee\u0007\b"+
		"\u0000\u0000\u01ee\u01f0\u0003h4\u0000\u01ef\u01ec\u0001\u0000\u0000\u0000"+
		"\u01f0\u01f3\u0001\u0000\u0000\u0000\u01f1\u01ef\u0001\u0000\u0000\u0000"+
		"\u01f1\u01f2\u0001\u0000\u0000\u0000\u01f2k\u0001\u0000\u0000\u0000\u01f3"+
		"\u01f1\u0001\u0000\u0000\u0000\u01f4\u01f5\u00066\uffff\uffff\u0000\u01f5"+
		"\u01f6\u0003j5\u0000\u01f6\u01fc\u0001\u0000\u0000\u0000\u01f7\u01f8\n"+
		"\u0001\u0000\u0000\u01f8\u01f9\u0007\t\u0000\u0000\u01f9\u01fb\u0003j"+
		"5\u0000\u01fa\u01f7\u0001\u0000\u0000\u0000\u01fb\u01fe\u0001\u0000\u0000"+
		"\u0000\u01fc\u01fa\u0001\u0000\u0000\u0000\u01fc\u01fd\u0001\u0000\u0000"+
		"\u0000\u01fdm\u0001\u0000\u0000\u0000\u01fe\u01fc\u0001\u0000\u0000\u0000"+
		"\u01ff\u0200\u00067\uffff\uffff\u0000\u0200\u0201\u0003l6\u0000\u0201"+
		"\u0207\u0001\u0000\u0000\u0000\u0202\u0203\n\u0001\u0000\u0000\u0203\u0204"+
		"\u0007\n\u0000\u0000\u0204\u0206\u0003l6\u0000\u0205\u0202\u0001\u0000"+
		"\u0000\u0000\u0206\u0209\u0001\u0000\u0000\u0000\u0207\u0205\u0001\u0000"+
		"\u0000\u0000\u0207\u0208\u0001\u0000\u0000\u0000\u0208o\u0001\u0000\u0000"+
		"\u0000\u0209\u0207\u0001\u0000\u0000\u0000\u020a\u020b\u00068\uffff\uffff"+
		"\u0000\u020b\u020c\u0003n7\u0000\u020c\u0212\u0001\u0000\u0000\u0000\u020d"+
		"\u020e\n\u0001\u0000\u0000\u020e\u020f\u0007\u000b\u0000\u0000\u020f\u0211"+
		"\u0003n7\u0000\u0210\u020d\u0001\u0000\u0000\u0000\u0211\u0214\u0001\u0000"+
		"\u0000\u0000\u0212\u0210\u0001\u0000\u0000\u0000\u0212\u0213\u0001\u0000"+
		"\u0000\u0000\u0213q\u0001\u0000\u0000\u0000\u0214\u0212\u0001\u0000\u0000"+
		"\u0000\u0215\u0216\u00069\uffff\uffff\u0000\u0216\u0217\u0003p8\u0000"+
		"\u0217\u021d\u0001\u0000\u0000\u0000\u0218\u0219\n\u0001\u0000\u0000\u0219"+
		"\u021a\u0005?\u0000\u0000\u021a\u021c\u0003p8\u0000\u021b\u0218\u0001"+
		"\u0000\u0000\u0000\u021c\u021f\u0001\u0000\u0000\u0000\u021d\u021b\u0001"+
		"\u0000\u0000\u0000\u021d\u021e\u0001\u0000\u0000\u0000\u021es\u0001\u0000"+
		"\u0000\u0000\u021f\u021d\u0001\u0000\u0000\u0000\u0220\u0221\u0006:\uffff"+
		"\uffff\u0000\u0221\u0222\u0003r9\u0000\u0222\u0228\u0001\u0000\u0000\u0000"+
		"\u0223\u0224\n\u0001\u0000\u0000\u0224\u0225\u0005A\u0000\u0000\u0225"+
		"\u0227\u0003r9\u0000\u0226\u0223\u0001\u0000\u0000\u0000\u0227\u022a\u0001"+
		"\u0000\u0000\u0000\u0228\u0226\u0001\u0000\u0000\u0000\u0228\u0229\u0001"+
		"\u0000\u0000\u0000\u0229u\u0001\u0000\u0000\u0000\u022a\u0228\u0001\u0000"+
		"\u0000\u0000\u022b\u022c\u0006;\uffff\uffff\u0000\u022c\u022d\u0003t:"+
		"\u0000\u022d\u0233\u0001\u0000\u0000\u0000\u022e\u022f\n\u0001\u0000\u0000"+
		"\u022f\u0230\u0005@\u0000\u0000\u0230\u0232\u0003t:\u0000\u0231\u022e"+
		"\u0001\u0000\u0000\u0000\u0232\u0235\u0001\u0000\u0000\u0000\u0233\u0231"+
		"\u0001\u0000\u0000\u0000\u0233\u0234\u0001\u0000\u0000\u0000\u0234w\u0001"+
		"\u0000\u0000\u0000\u0235\u0233\u0001\u0000\u0000\u0000\u0236\u0237\u0006"+
		"<\uffff\uffff\u0000\u0237\u0238\u0003v;\u0000\u0238\u023e\u0001\u0000"+
		"\u0000\u0000\u0239\u023a\n\u0001\u0000\u0000\u023a\u023b\u00050\u0000"+
		"\u0000\u023b\u023d\u0003v;\u0000\u023c\u0239\u0001\u0000\u0000\u0000\u023d"+
		"\u0240\u0001\u0000\u0000\u0000\u023e\u023c\u0001\u0000\u0000\u0000\u023e"+
		"\u023f\u0001\u0000\u0000\u0000\u023fy\u0001\u0000\u0000\u0000\u0240\u023e"+
		"\u0001\u0000\u0000\u0000\u0241\u0242\u0006=\uffff\uffff\u0000\u0242\u0243"+
		"\u0003x<\u0000\u0243\u0249\u0001\u0000\u0000\u0000\u0244\u0245\n\u0001"+
		"\u0000\u0000\u0245\u0246\u00051\u0000\u0000\u0246\u0248\u0003x<\u0000"+
		"\u0247\u0244\u0001\u0000\u0000\u0000\u0248\u024b\u0001\u0000\u0000\u0000"+
		"\u0249\u0247\u0001\u0000\u0000\u0000\u0249\u024a\u0001\u0000\u0000\u0000"+
		"\u024a{\u0001\u0000\u0000\u0000\u024b\u0249\u0001\u0000\u0000\u0000\u024c"+
		"\u0254\u0003z=\u0000\u024d\u024e\u0003z=\u0000\u024e\u024f\u0005\u001f"+
		"\u0000\u0000\u024f\u0250\u0003|>\u0000\u0250\u0251\u0005 \u0000\u0000"+
		"\u0251\u0252\u0003|>\u0000\u0252\u0254\u0001\u0000\u0000\u0000\u0253\u024c"+
		"\u0001\u0000\u0000\u0000\u0253\u024d\u0001\u0000\u0000\u0000\u0254}\u0001"+
		"\u0000\u0000\u0000\u0255\u025b\u0003|>\u0000\u0256\u0257\u0003P(\u0000"+
		"\u0257\u0258\u0003\u0080@\u0000\u0258\u0259\u0003~?\u0000\u0259\u025b"+
		"\u0001\u0000\u0000\u0000\u025a\u0255\u0001\u0000\u0000\u0000\u025a\u0256"+
		"\u0001\u0000\u0000\u0000\u025b\u007f\u0001\u0000\u0000\u0000\u025c\u025d"+
		"\u0007\f\u0000\u0000\u025d\u0081\u0001\u0000\u0000\u0000\u025e\u0263\u0003"+
		"~?\u0000\u025f\u0260\u0005\u001d\u0000\u0000\u0260\u0262\u0003~?\u0000"+
		"\u0261\u025f\u0001\u0000\u0000\u0000\u0262\u0265\u0001\u0000\u0000\u0000"+
		"\u0263\u0261\u0001\u0000\u0000\u0000\u0263\u0264\u0001\u0000\u0000\u0000"+
		"\u0264\u0083\u0001\u0000\u0000\u0000\u0265\u0263\u0001\u0000\u0000\u0000"+
		"\u0266\u026a\u0003\u0086C\u0000\u0267\u026a\u0003\u0088D\u0000\u0268\u026a"+
		"\u0003\u008aE\u0000\u0269\u0266\u0001\u0000\u0000\u0000\u0269\u0267\u0001"+
		"\u0000\u0000\u0000\u0269\u0268\u0001\u0000\u0000\u0000\u026a\u0085\u0001"+
		"\u0000\u0000\u0000\u026b\u026c\u0003\u008cF\u0000\u026c\u0087\u0001\u0000"+
		"\u0000\u0000\u026d\u026e\u0003\u008cF\u0000\u026e\u026f\u0005;\u0000\u0000"+
		"\u026f\u0270\u0003\u008cF\u0000\u0270\u0271\u0005=\u0000\u0000\u0271\u0089"+
		"\u0001\u0000\u0000\u0000\u0272\u0273\u0005\u0019\u0000\u0000\u0273\u0274"+
		"\u0005!\u0000\u0000\u0274\u0275\u0003\u008cF\u0000\u0275\u0276\u0005\""+
		"\u0000\u0000\u0276\u008b\u0001\u0000\u0000\u0000\u0277\u0278\u0007\r\u0000"+
		"\u0000\u0278\u008d\u0001\u0000\u0000\u00008\u008f\u0096\u009d\u00a2\u00a9"+
		"\u00ab\u00b1\u00b7\u00c7\u00ce\u00dd\u00e1\u00ea\u00f3\u00fd\u010a\u010f"+
		"\u0115\u0119\u011f\u0125\u013d\u0149\u015b\u0163\u0167\u016c\u016f\u0174"+
		"\u0177\u0181\u0184\u0190\u0195\u019a\u01aa\u01ac\u01b4\u01c2\u01c8\u01ce"+
		"\u01d6\u01e7\u01f1\u01fc\u0207\u0212\u021d\u0228\u0233\u023e\u0249\u0253"+
		"\u025a\u0263\u0269";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}