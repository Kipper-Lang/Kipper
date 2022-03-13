/**
 * Antlr4 listener for walking through a parser tree and processing its content
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
import {
	ActualAdditiveExpressionContext,
	ActualAssignmentExpressionContext,
	ActualCastOrConvertExpressionContext,
	ActualConditionalExpressionContext,
	ActualEqualityExpressionContext,
	ActualLogicalAndExpressionContext,
	ActualLogicalOrExpressionContext,
	ActualMultiplicativeExpressionContext,
	ActualRelationalExpressionContext,
	ArgumentExpressionListContext,
	ArraySpecifierContext,
	ArraySpecifierPostfixExpressionContext,
	AssignmentOperatorContext,
	BlockItemContext,
	BlockItemListContext,
	CharacterPrimaryExpressionContext,
	CompilationUnitContext,
	CompoundStatementContext,
	DeclarationContext,
	DeclarationSpecifierContext,
	DeclarationSpecifiersContext,
	DeclaratorContext,
	DirectDeclaratorContext,
	EndOfItemContext,
	ExpressionStatementContext,
	ExternalBlockItemContext,
	ExternalFunctionDefinitionContext,
	ExternalItemContext,
	FStringPrimaryExpressionContext,
	FunctionCallPostfixExpressionContext,
	FunctionDefinitionContext,
	IdentifierPrimaryExpressionContext,
	IncrementOrDecrementPostfixExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	InitDeclaratorContext,
	InitializerContext,
	IterationStatementContext,
	JumpStatementContext,
	KipperListener,
	ListConstantContext,
	ListPrimaryExpressionContext,
	MultiItemTypeSpecifierContext,
	NestedParenthesesBlockContext,
	NumberPrimaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	ParameterDeclarationContext,
	ParameterListContext,
	ParameterTypeListContext,
	SingleItemTypeSpecifierContext,
	StorageTypeSpecifierContext,
	StringPrimaryExpressionContext,
	SwitchLabeledStatementContext,
	TangledPrimaryExpressionContext,
	TranslationUnitContext,
	TypeofTypeSpecifierContext,
	TypeSpecifierContext,
	UnaryOperatorContext,
} from "./parser";
import { KipperProgramContext } from "./program-ctx";
import { ParserRuleContext } from "antlr4ts";
import {
	antlrDefinitionCtxType,
	antlrExpressionCtxType,
	antlrStatementCtxType,
	CompilableParseToken,
	Definition,
	Expression,
	getDefinitionInstance,
	getExpressionInstance,
	getStatementInstance,
	Statement,
} from "./tokens";
import { RootFileParseToken } from "./tokens/parse-token";
import { IfStatementContext, SwitchStatementContext } from "./parser/KipperParser";

const passOnHandler: () => void = () => {};

/**
 * The listener for a {@link KipperProgramContext}, which walks through the generated
 * parser tree and produces the TypeScript code output in {@link kipperParseTree}.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
export class KipperFileListener implements KipperListener {
	/**
	 * The private '_programCtx' that actually stores the variable data,
	 * which is returned inside the getter 'programCtx'.
	 * @private
	 */
	private readonly _programCtx: KipperProgramContext;

	/**
	 * The private '_itemBuffer' that actually stores the variable data,
	 * which is returned inside the getter 'itemBuffer'.
	 * @private
	 */
	private readonly _kipperParseTree: RootFileParseToken;

	/**
	 * If this is true, the current context is inside an external item and automatically indicates
	 * {@link _isFunctionDefinition} is false.
	 */
	private _isExternalItem: boolean;

	/**
	 * If this is true, the current context is inside a function definition and automatically indicates
	 * {@link _isExternalItem} is false.
	 */
	private _isFunctionDefinition: boolean;

	/**
	 * The correct Kipper token that is being walked through right now. This is the instance where current metadata
	 * should be added to and read from, as this instance will represent and convert the context items that were walked
	 * through during this operation.
	 */
	private _currentPrimaryToken: CompilableParseToken | undefined;

	/**
	 * The current expression that is being walked through. This is the instance where current metadata
	 * should be added to and read from, as this instance will represent and convert the context items that were walked
	 * through during this operation.
	 */
	private _currentExpression: Expression | undefined;

	constructor(programCtx: KipperProgramContext) {
		this._kipperParseTree = new RootFileParseToken(programCtx);
		this._programCtx = programCtx;
		this._isExternalItem = false;
		this._isFunctionDefinition = false;
		this._currentPrimaryToken = undefined;
	}

	/**
	 * The {@link KipperProgramContext} instance responsible for managing this {@link KipperFileListener} instance.
	 */
	get programCtx(): KipperProgramContext {
		return this._programCtx;
	}

	/**
	 * The root token instance that represents a simplified Kipper parse tree that may be used for semantic analysis and
	 * compilation.
	 * @since 0.0.6
	 */
	get kipperParseTree(): RootFileParseToken {
		return this._kipperParseTree;
	}

	/**
	 * Returns which token is being processed at the moment and where meta-data should be assigned to. If
	 * {@link _currentExpression} is defined, then that item will be returned, otherwise {@link _currentPrimaryToken}.
	 * @private
	 */
	private get getCurrentProcessedToken(): CompilableParseToken | RootFileParseToken {
		if (this._currentExpression !== undefined) {
			return this._currentExpression;
		} else if (this._currentPrimaryToken !== undefined) {
			return this._currentPrimaryToken;
		} else {
			return this._kipperParseTree;
		}
	}

	/**
	 * Handles an incoming expression context. The handling algorithm is:
	 * - If {@link _currentExpression} is undefined, then it will be created and set as a child of the
	 * {@link _currentPrimaryToken}.
	 * - Otherwise, generate a new {@link Expression} instance, which will be added to the {@link _currentExpression} as
	 * a child. Afterwards {@link _currentExpression} will be set to this new instance, as all new context instances
	 * must be assigned to it. When the context is left, then the old {@link _currentExpression} will be restored as
	 * {@link _currentExpression}, and all further context instances will be assigned to it.
	 * @param ctx The context instance of the expression
	 * @private
	 */
	private handleIncomingExpressionCtx(ctx: antlrExpressionCtxType) {
		if (this.getCurrentProcessedToken instanceof RootFileParseToken) {
			throw new Error(
				"An expression may not have the root file token as a parent. It must be child to a statement or a" +
					" definition",
			);
		}

		this._currentExpression = getExpressionInstance(ctx, this.getCurrentProcessedToken);
	}

	/**
	 * Handles an exiting expression context. The handling algorithm is:
	 * - If {@link _currentExpression.parent} is of type {@link Expression}, then set {@link _currentExpression} to
	 * that parent.
	 * - Otherwise set {@link _currentExpression} to {@link undefined} again. If  {@link handleIncomingExpressionCtx} is
	 * called again, the {@link _currentExpression} will be defined again and the whole process starts again.
	 * @private
	 */
	private handleExitingExpressionCtx() {
		if (this._currentExpression?.parent instanceof Expression) {
			this._currentExpression = this._currentExpression.parent;
		} else {
			this._currentExpression = undefined;
		}
	}

	/**
	 * Handles an incoming statement context. The handling algorithm is:
	 * - If {@link _currentPrimaryToken} is undefined, then it will be created and set as a child of
	 * {@link _kipperParseTree}
	 * - Otherwise, generate a new {@link Statement} instance, which will be added to the {@link _currentPrimaryToken} as
	 * a child. Afterwards {@link _currentPrimaryToken} will be set to this new instance, as all new context instances
	 * must be assigned to it. When the context is left, then the old {@link _currentPrimaryToken} will be restored as
	 * {@link _currentPrimaryToken}, and all further context instances will be assigned to it.
	 * @private
	 */
	private handleIncomingStatementCtx(ctx: antlrStatementCtxType) {
		this._currentPrimaryToken = getStatementInstance(ctx, this.getCurrentProcessedToken);
	}

	/**
	 * Handles an incoming statement context. The handling algorithm is:
	 * - If {@link _currentPrimaryToken} is undefined, then it will be created and set as a child of
	 * {@link _kipperParseTree}
	 * - Otherwise, generate a new {@link Definition} instance, which will be added to the {@link _currentPrimaryToken} as
	 * a child. Afterwards {@link _currentPrimaryToken} will be set to this new instance, as all new context instances
	 * must be assigned to it. When the context is left, then the old {@link _currentPrimaryToken} will be restored as
	 * {@link _currentPrimaryToken}, and all further context instances will be assigned to it.
	 * @private
	 */
	private handleIncomingDefinitionCtx(ctx: antlrDefinitionCtxType) {
		this._currentPrimaryToken = getDefinitionInstance(ctx, this.getCurrentProcessedToken);
	}

	/**
	 * Handles an exiting statement or definition context. The handling algorithm is:
	 * - If {@link _currentPrimaryToken.parent} is of type {@link _currentPrimaryToken} or {@link Statement}, then set
	 * {@link _currentPrimaryToken} to that parent.
	 * - Otherwise set {@link _currentPrimaryToken} to {@link undefined} again. If
	 * {@link handleExitingStatementOrDefinitionCtx} is called again, the {@link _currentPrimaryToken} will be defined
	 * again and the whole process starts again.
	 * @private
	 */
	private handleExitingStatementOrDefinitionCtx() {
		if (
			this._currentPrimaryToken?.parent instanceof Definition ||
			this._currentPrimaryToken?.parent instanceof Statement
		) {
			this._currentPrimaryToken = this._currentPrimaryToken.parent;
		} else {
			this._currentExpression = undefined;
		}
	}

	/**
	 * Function that is called every time an time is entered
	 * @param ctx The context of the rule
	 */
	enterEveryRule(/*@NotNull*/ ctx: ParserRuleContext): void {}

	/**
	 * Function that is called every time an item is exited.
	 * @param ctx The context of the rule.
	 */
	exitEveryRule(/*@NotNull*/ ctx: ParserRuleContext): void {}

	// -- Top Item Section --

	/**
	 * Enter a parse tree produced by the `externalFunctionDefinition`
	 * Labeled alternative in `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterExternalFunctionDefinition(ctx: ExternalFunctionDefinitionContext): void {
		this._isFunctionDefinition = true;
	}

	/**
	 * Exit a parse tree produced by the `externalFunctionDefinition`
	 * Labeled alternative in `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitExternalFunctionDefinition(ctx: ExternalFunctionDefinitionContext): void {
		this._isFunctionDefinition = false;
	}

	/**
	 * Enter a parse tree produced by the `externalBlockItem`
	 * Labeled alternative in `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterExternalBlockItem(ctx: ExternalBlockItemContext): void {
		this._isExternalItem = true;
	}

	/**
	 * Exit a parse tree produced by the `externalBlockItem`
	 * Labeled alternative in `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitExternalBlockItem(ctx: ExternalBlockItemContext): void {
		this._isExternalItem = false;
	}

	// -- Expression Section --

	/**
	 * We are ignoring primary expressions, and only going to handle the rules 'identifierPrimaryExpression'
	 * 'constantPrimaryExpression', 'stringPrimaryExpression', 'fStringPrimaryExpression' and
	 * 'tangledPrimaryExpression', which implement a more precise 'primaryExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.primaryExpression`.
	//  *
	//  * This is the lowest expression / This has the highest importance of all!
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterPrimaryExpression(ctx: PrimaryExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.primaryExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitPrimaryExpression(ctx: PrimaryExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `identifierPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterIdentifierPrimaryExpression(ctx: IdentifierPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `identifierPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitIdentifierPrimaryExpression(ctx: IdentifierPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `stringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterStringPrimaryExpression(ctx: StringPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `stringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitStringPrimaryExpression(ctx: StringPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `fStringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterFStringPrimaryExpression(ctx: FStringPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `fStringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitFStringPrimaryExpression(ctx: FStringPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `tangledPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterTangledPrimaryExpression(ctx: TangledPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `tangledPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitTangledPrimaryExpression(ctx: TangledPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `numberPrimaryExpression`
	 * labeled alternative in `KipperParser.PrimaryExpression`.
	 * @param ctx The parse tree
	 */
	enterNumberPrimaryExpression(ctx: NumberPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `numberPrimaryExpression`
	 * labeled alternative in `KipperParser.PrimaryExpression`.
	 * @param ctx The parse tree
	 */
	exitNumberPrimaryExpression(ctx: NumberPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `characterPrimaryExpression`
	 * labeled alternative in `KipperParser.PrimaryExpression`.
	 * @param ctx The parse tree
	 */
	enterCharacterPrimaryExpression(ctx: CharacterPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `characterPrimaryExpression`
	 * labeled alternative in `KipperParser.PrimaryExpression`.
	 * @param ctx The parse tree
	 */
	exitCharacterPrimaryExpression(ctx: CharacterPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `listConstantPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree
	 */
	enterListPrimaryExpression(ctx: ListPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `listConstantPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree
	 */
	exitListPrimaryExpression(ctx: ListPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.listConstant`.
	 * @param ctx The parse tree
	 */
	enterListConstant(ctx: ListConstantContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.listConstant`.
	 * @param ctx The parse tree
	 */
	exitListConstant(ctx: ListConstantContext): void {}

	/**
	 * We are ignoring postfix expressions, and only going to handle the rules 'referenceExpression' and
	 * 'functionCallExpression', which implement a more precise 'postfixExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.postfixExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterPostfixExpression(ctx: PostfixExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.postfixExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitPostfixExpression(ctx: PostfixExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnPostfixExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnPostfixExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `arraySpecifierPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterArraySpecifierPostfixExpression(ctx: ArraySpecifierPostfixExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `arraySpecifierPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitArraySpecifierPostfixExpression(ctx: ArraySpecifierPostfixExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `incrementOrDecrementPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterIncrementOrDecrementPostfixExpression(ctx: IncrementOrDecrementPostfixExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `incrementOrDecrementPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitIncrementOrDecrementPostfixExpression(ctx: IncrementOrDecrementPostfixExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `functionCallPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterFunctionCallPostfixExpression(ctx: FunctionCallPostfixExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `functionCallPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitFunctionCallPostfixExpression(ctx: FunctionCallPostfixExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.argumentExpressionList`.
	 *
	 * This is a list of arguments for a 'functionCallExpression', which calls a function with the arguments listed in
	 * the {@link ctx} instance.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterArgumentExpressionList(ctx: ArgumentExpressionListContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.argumentExpressionList`.
	 *
	 * This is a list of arguments for a 'functionCallExpression', which calls a function with the arguments listed in
	 * the {@link ctx} instance.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitArgumentExpressionList(ctx: ArgumentExpressionListContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.arraySpecifier`.
	 * @param ctx The parse tree
	 */
	enterArraySpecifier(ctx: ArraySpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.arraySpecifier`.
	 * @param ctx The parse tree
	 */
	exitArraySpecifier(ctx: ArraySpecifierContext): void {}

	/**
	 * We are ignoring unary expressions, and only going to handle the rules 'passOnUnaryExpression',
	 * 'incrementOrDecrementUnaryExpression' and 'operatorModifiedUnaryExpression', which implement a more precise
	 * 'unaryExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.unaryExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterUnaryExpression(ctx: UnaryExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.unaryExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitUnaryExpression(ctx: UnaryExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnUnaryExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnUnaryExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `incrementOrDecrementUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterIncrementOrDecrementUnaryExpression(ctx: IncrementOrDecrementUnaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `incrementOrDecrementUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitIncrementOrDecrementUnaryExpression(ctx: IncrementOrDecrementUnaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `operatorModifiedUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterOperatorModifiedUnaryExpression(ctx: OperatorModifiedUnaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `operatorModifiedUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitOperatorModifiedUnaryExpression(ctx: OperatorModifiedUnaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterUnaryOperator(ctx: UnaryOperatorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitUnaryOperator(ctx: UnaryOperatorContext): void {}

	/**
	 * We are ignoring cast or convert expressions, and only going to handle the rules 'passOnCastOrConvertExpression',
	 * and 'actualCastOrConvertExpression', which implement a more precise 'castOrConvertExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.castOrConvertExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterCastOrConvertExpression(ctx: CastOrConvertExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.castOrConvertExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitCastOrConvertExpression(ctx: CastOrConvertExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnCastOrConvertExpression`
	 * Labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnCastOrConvertExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnCastOrConvertExpression`
	 * Labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnCastOrConvertExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualCastOrConvertExpression`
	 * Labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualCastOrConvertExpression(ctx: ActualCastOrConvertExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualCastOrConvertExpression`
	 * Labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualCastOrConvertExpression(ctx: ActualCastOrConvertExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * We are ignoring multiplicative expressions, and only going to handle the rules 'passOnMultiplicativeExpression',
	 * and 'actualMultiplicativeExpression', which implement a more precise 'multiplicativeExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.multiplicativeExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterMultiplicativeExpression(ctx: MultiplicativeExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.multiplicativeExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnMultiplicativeExpression`
	 * Labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnMultiplicativeExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnMultiplicativeExpression`
	 * Labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnMultiplicativeExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualMultiplicativeExpression`
	 * Labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualMultiplicativeExpression(ctx: ActualMultiplicativeExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualMultiplicativeExpression`
	 * Labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualMultiplicativeExpression(ctx: ActualMultiplicativeExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * We are ignoring additive expressions, and only going to handle the rules 'passOnAdditiveExpression',
	 * and 'actualAdditiveExpression', which implement a more precise 'additiveExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.additiveExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterAdditiveExpression(ctx: AdditiveExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.additiveExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitAdditiveExpression(ctx: AdditiveExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnAdditiveExpression`
	 * Labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnAdditiveExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnAdditiveExpression`
	 * Labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnAdditiveExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualAdditiveExpression`
	 * Labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualAdditiveExpression(ctx: ActualAdditiveExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualAdditiveExpression`
	 * Labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualAdditiveExpression(ctx: ActualAdditiveExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * We are ignoring relational expressions, and only going to handle the rules 'passOnRelationalExpression',
	 * and 'actualRelationalExpression', which implement a more precise 'relationalExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.relationalExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterRelationalExpression(ctx: RelationalExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.relationalExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitRelationalExpression(ctx: RelationalExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnRelationalExpression`
	 * Labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnRelationalExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnRelationalExpression`
	 * Labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnRelationalExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualRelationalExpression`
	 * Labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualRelationalExpression(ctx: ActualRelationalExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualRelationalExpression`
	 * Labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualRelationalExpression(ctx: ActualRelationalExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * We are ignoring equality expressions, and only going to handle the rules 'passOnEqualityExpression',
	 * and 'actualEqualityExpression', which implement a more precise 'equalityExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.equalityExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterEqualityExpression(ctx: EqualityExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.equalityExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitEqualityExpression(ctx: EqualityExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnEqualityExpression`
	 * Labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnEqualityExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnEqualityExpression`
	 * Labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnEqualityExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualEqualityExpression`
	 * Labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualEqualityExpression(ctx: ActualEqualityExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualEqualityExpression`
	 * Labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualEqualityExpression(ctx: ActualEqualityExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * We are ignoring logical and expressions, and only going to handle the rules 'passOnLogicalAndExpression',
	 * and 'actualLogicalAndExpression', which implement a more precise 'logicalAndExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.logicalAndExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterLogicalAndExpression(ctx: LogicalAndExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.logicalAndExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitLogicalAndExpression(ctx: LogicalAndExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnLogicalAndExpression`
	 * Labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnLogicalAndExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnLogicalAndExpression`
	 * Labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnLogicalAndExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualLogicalAndExpression`
	 * Labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualLogicalAndExpression(ctx: ActualLogicalAndExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualLogicalAndExpression`
	 * Labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualLogicalAndExpression(ctx: ActualLogicalAndExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * We are ignoring logical or expressions, and only going to handle the rules 'passOnLogicalOrExpression',
	 * and 'actualLogicalOrExpression', which implement a more precise 'logicalOrExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.logicalOrExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterLogicalOrExpression(ctx: LogicalOrExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.logicalOrExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitLogicalOrExpression(ctx: LogicalOrExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnLogicalOrExpression`
	 * Labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnLogicalOrExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnLogicalOrExpression`
	 * Labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnLogicalOrExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualLogicalOrExpression`
	 * Labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualLogicalOrExpression(ctx: ActualLogicalOrExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualLogicalOrExpression`
	 * Labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualLogicalOrExpression(ctx: ActualLogicalOrExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * We are ignoring conditional expressions, and only going to handle the rules 'passOnConditionalExpression',
	 * and 'actualConditionalExpression', which implement a more precise 'conditionalExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.conditionalExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterConditionalExpression(ctx: ConditionalExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.conditionalExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitConditionalExpression(ctx: ConditionalExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnConditionalExpression`
	 * Labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnConditionalExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnConditionalExpression`
	 * Labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnConditionalExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualConditionalExpression`
	 * Labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualConditionalExpression(ctx: ActualConditionalExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualConditionalExpression`
	 * Labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualConditionalExpression(ctx: ActualConditionalExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * We are ignoring assignment expressions, and only going to handle the rules 'passOnAssignmentExpression',
	 * and 'actualAssignmentExpression', which implement a more precise 'assignmentExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.assignmentExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterAssignmentExpression(ctx: AssignmentExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.assignmentExpression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitAssignmentExpression(ctx: AssignmentExpressionContext): void {}

	/**
	 * Enter a parse tree produced by the `passOnAssignmentExpression`
	 * Labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterPassOnAssignmentExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnAssignmentExpression`
	 * Labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitPassOnAssignmentExpression: () => void = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualAssignmentExpression`
	 * Labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterActualAssignmentExpression(ctx: ActualAssignmentExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualAssignmentExpression`
	 * Labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitActualAssignmentExpression(ctx: ActualAssignmentExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterAssignmentOperator(ctx: AssignmentOperatorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitAssignmentOperator(ctx: AssignmentOperatorContext): void {}

	/**
	 * We are ignoring constant expressions and default expressions, as the children will handle everything.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.constantExpression`.
	//  *
	//  * This is an expression that "re-directs" directly to an {@link ConditionalExpressionContext} and is used inside
	//  * {@link SwitchLabeledStatementContext} (Switch).
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterConstantExpression(ctx: ConstantExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.constantExpression`.
	//  *
	//  * This is an expression that "re-directs" directly to an {@link ConditionalExpressionContext} and is used inside
	//  * {@link SwitchLabeledStatementContext} (Switch statement).
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitConstantExpression(ctx: ConstantExpressionContext): void {}
	//
	// /**
	//  * Enter a parse tree produced by `KipperParser.expression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterExpression(ctx: ExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.expression`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitExpression(ctx: ExpressionContext): void {}

	// -- Statement section --

	/**
	 * We are ignoring statements, and only going to handle the rules 'expressionStatement', 'labeledStatement'
	 * 'selectionStatement', 'iterationStatement', 'jumpStatement' and 'compoundStatement', which implement a more precise
	 * 'assignmentExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.statement`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterStatement(ctx: StatementContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.statement`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitStatement(ctx: StatementContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterExpressionStatement(ctx: ExpressionStatementContext): void {
		// TODO! Implement proper handling of parents for compound statements and function definitions
		this.handleIncomingStatementCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitExpressionStatement(ctx: ExpressionStatementContext): void {
		this.handleExitingStatementOrDefinitionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterCompoundStatement(ctx: CompoundStatementContext): void {
		throw new Error("Compound statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitCompoundStatement(ctx: CompoundStatementContext): void {
		throw new Error("Compound statements are not supported yet in Kipper");
	}

	/**
	 * We are ignoring selection statements, and only going to handle the rules 'ifStatement' and 'switchStatement',
	 * which implement a more precise 'assignmentExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.selectionStatement`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterSelectionStatement(ctx: SelectionStatementContext): void {
	// 	throw new Error("Selection statements are not supported yet in Kipper");
	// }
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.selectionStatement`.
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// exitSelectionStatement(ctx: SelectionStatementContext): void {
	// 	throw new Error("Selection statements are not supported yet in Kipper");
	// }

	/**
	 * Enter a parse tree produced by the `ifStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement(ctx: IfStatementContext): void {
		throw new Error("If statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by the `ifStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement(ctx: IfStatementContext): void {
		throw new Error("If statements are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by the `switchStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement(ctx: SwitchStatementContext): void {
		throw new Error("Switch statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by the `switchStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement(ctx: SwitchStatementContext): void {
		throw new Error("Switch statements are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by `KipperParser.labeledStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterSwitchLabeledStatement(ctx: SwitchLabeledStatementContext): void {
		throw new Error("Switch statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.labeledStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitSwitchLabeledStatement(ctx: SwitchLabeledStatementContext): void {
		throw new Error("Switch statements are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterIterationStatement(ctx: IterationStatementContext): void {
		throw new Error("Iteration statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitIterationStatement(ctx: IterationStatementContext): void {
		throw new Error("Iteration statements are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterJumpStatement(ctx: JumpStatementContext): void {
		throw new Error("Jump statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitJumpStatement(ctx: JumpStatementContext): void {
		throw new Error("Jump statements are not supported yet in Kipper");
	}

	// -- Declaration section --

	/**
	 * Enter a parse tree produced by `KipperParser.declaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterDeclaration(ctx: DeclarationContext): void {
		throw new Error("Declaration and definitions are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.declaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitDeclaration(ctx: DeclarationContext): void {
		throw new Error("Declaration and definitions are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by `KipperParser.functionDefinition`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterFunctionDefinition(ctx: FunctionDefinitionContext): void {
		throw new Error("Function definitions are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.functionDefinition`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitFunctionDefinition(ctx: FunctionDefinitionContext): void {}

	// -- Child Rules Section --

	/**
	 * Enter a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterStorageTypeSpecifier(ctx: StorageTypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitStorageTypeSpecifier(ctx: StorageTypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.declarationSpecifiers`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterDeclarationSpecifiers(ctx: DeclarationSpecifiersContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.declarationSpecifiers`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitDeclarationSpecifiers(ctx: DeclarationSpecifiersContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.declarationSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterDeclarationSpecifier(ctx: DeclarationSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.declarationSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitDeclarationSpecifier(ctx: DeclarationSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterInitDeclarator(ctx: InitDeclaratorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitInitDeclarator(ctx: InitDeclaratorContext): void {}

	/**
	 * Enter a parse tree produced by the `singleItemTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterSingleItemTypeSpecifier(ctx: SingleItemTypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by the `singleItemTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitSingleItemTypeSpecifier(ctx: SingleItemTypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by the `multiItemTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterMultiItemTypeSpecifier(ctx: MultiItemTypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by the `multiItemTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitMultiItemTypeSpecifier(ctx: MultiItemTypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by the `typeofTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterTypeofTypeSpecifier(ctx: TypeofTypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by the `typeofTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitTypeofTypeSpecifier(ctx: TypeofTypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterTypeSpecifier(ctx: TypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitTypeSpecifier(ctx: TypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.declarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterDeclarator(ctx: DeclaratorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.declarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitDeclarator(ctx: DeclaratorContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterDirectDeclarator(ctx: DirectDeclaratorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitDirectDeclarator(ctx: DirectDeclaratorContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.nestedParenthesesBlock`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterNestedParenthesesBlock(ctx: NestedParenthesesBlockContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.nestedParenthesesBlock`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitNestedParenthesesBlock(ctx: NestedParenthesesBlockContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.parameterTypeList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterParameterTypeList(ctx: ParameterTypeListContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.parameterTypeList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitParameterTypeList(ctx: ParameterTypeListContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterParameterList(ctx: ParameterListContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitParameterList(ctx: ParameterListContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterParameterDeclaration(ctx: ParameterDeclarationContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitParameterDeclaration(ctx: ParameterDeclarationContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.initializer`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterInitializer(ctx: InitializerContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.initializer`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitInitializer(ctx: InitializerContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.blockItemList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterBlockItemList(ctx: BlockItemListContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.blockItemList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitBlockItemList(ctx: BlockItemListContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.blockItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterBlockItem(ctx: BlockItemContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.blockItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitBlockItem(ctx: BlockItemContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.compilationUnit`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterCompilationUnit(ctx: CompilationUnitContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.compilationUnit`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitCompilationUnit(ctx: CompilationUnitContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.translationUnit`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterTranslationUnit(ctx: TranslationUnitContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.translationUnit`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitTranslationUnit(ctx: TranslationUnitContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterExternalItem(ctx: ExternalItemContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitExternalItem(ctx: ExternalItemContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.endOfItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterEndOfItem(ctx: EndOfItemContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.endOfItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitEndOfItem(ctx: EndOfItemContext): void {}
}
