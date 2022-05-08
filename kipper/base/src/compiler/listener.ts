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
	CharacterPrimaryExpressionContext,
	CompoundStatementContext,
	DeclarationContext,
	DeclarationSpecifierContext,
	DeclarationSpecifiersContext,
	DeclaratorContext,
	DirectDeclaratorContext,
	ExpressionStatementContext,
	ExternalBlockItemContext,
	ExternalFunctionDeclarationContext,
	FStringPrimaryExpressionContext,
	FunctionCallPostfixExpressionContext,
	FunctionDeclarationContext,
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
	TypeofTypeSpecifierContext,
	TypeSpecifierContext,
	UnaryOperatorContext,
} from "./parser";
import type { KipperProgramContext } from "./program-ctx";
import { ParserRuleContext } from "antlr4ts";
import {
	antlrDefinitionCtxType,
	antlrExpressionCtxType,
	antlrStatementCtxType,
	CompilableParseToken,
	Declaration,
	Expression,
	getDefinitionInstance,
	getExpressionInstance,
	getStatementInstance,
	RootFileParseToken,
	Statement,
} from "./tokens";
import { IfStatementContext, SwitchStatementContext } from "./parser/KipperParser";

const passOnHandler = undefined;

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
	 * which is returned inside the {@link this.programCtx}.
	 * @private
	 */
	private readonly _programCtx: KipperProgramContext;

	/**
	 * The private '_itemBuffer' that actually stores the variable data,
	 * which is returned inside the {@link this.itemBuffer}.
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
	private _currentPrimaryToken: CompilableParseToken<any> | undefined;

	/**
	 * The current expression that is being walked through. This is the instance where current metadata
	 * should be added to and read from, as this instance will represent and convert the context items that were walked
	 * through during this operation.
	 */
	private _currentExpression: Expression<any> | undefined;

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
	public get programCtx(): KipperProgramContext {
		return this._programCtx;
	}

	/**
	 * The root token instance that represents a simplified Kipper parse tree that may be used for semantic analysis and
	 * compilation.
	 * @since 0.1.0
	 */
	public get kipperParseTree(): RootFileParseToken {
		return this._kipperParseTree;
	}

	/**
	 * Returns which token is being processed at the moment and where meta-data should be assigned to. If
	 * {@link _currentExpression} is defined, then that item will be returned, otherwise {@link _currentPrimaryToken}.
	 * @private
	 */
	private get getCurrentProcessedToken(): CompilableParseToken<any> | RootFileParseToken {
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
	 * - Otherwise, generate a new {@link Declaration} instance, which will be added to the {@link _currentPrimaryToken} as
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
			this._currentPrimaryToken?.parent instanceof Declaration ||
			this._currentPrimaryToken?.parent instanceof Statement
		) {
			this._currentPrimaryToken = this._currentPrimaryToken.parent;
		} else {
			this._currentPrimaryToken = undefined;
		}
	}

	/**
	 * Function that is called every time an item is entered.
	 * @param ctx The context of the rule
	 */
	// eslint-disable-next-line no-unused-vars
	public enterEveryRule(/*@NotNull*/ ctx: ParserRuleContext): void {}

	/**
	 * Function that is called every time an item is exited.
	 * @param ctx The context of the rule.
	 */
	// eslint-disable-next-line no-unused-vars
	public exitEveryRule(/*@NotNull*/ ctx: ParserRuleContext): void {}

	// -- Top Item Section --

	/**
	 * Enter a parse tree produced by the `externalFunctionDeclaration`
	 * Labeled alternative in `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterExternalFunctionDeclaration(ctx: ExternalFunctionDeclarationContext): void {
		// We don't check if this is a declaration, as if it were, then there will be no children that
		// need to know they are in a function definition.
		this._isFunctionDefinition = true;
	}

	/**
	 * Exit a parse tree produced by the `externalFunctionDeclaration`
	 * Labeled alternative in `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitExternalFunctionDeclaration(ctx: ExternalFunctionDeclarationContext): void {
		this._isFunctionDefinition = false;
	}

	/**
	 * Enter a parse tree produced by the `externalBlockItem`
	 * Labeled alternative in `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterExternalBlockItem(ctx: ExternalBlockItemContext): void {
		this._isExternalItem = true;
	}

	/**
	 * Exit a parse tree produced by the `externalBlockItem`
	 * Labeled alternative in `KipperParser.externalItem`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitExternalBlockItem(ctx: ExternalBlockItemContext): void {
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
	public enterIdentifierPrimaryExpression(ctx: IdentifierPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `identifierPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitIdentifierPrimaryExpression(ctx: IdentifierPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `stringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterStringPrimaryExpression(ctx: StringPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `stringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitStringPrimaryExpression(ctx: StringPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `fStringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterFStringPrimaryExpression(ctx: FStringPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `fStringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitFStringPrimaryExpression(ctx: FStringPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `tangledPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterTangledPrimaryExpression(ctx: TangledPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `tangledPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitTangledPrimaryExpression(ctx: TangledPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `numberPrimaryExpression`
	 * labeled alternative in `KipperParser.PrimaryExpression`.
	 * @param ctx The parse tree
	 */
	public enterNumberPrimaryExpression(ctx: NumberPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `numberPrimaryExpression`
	 * labeled alternative in `KipperParser.PrimaryExpression`.
	 * @param ctx The parse tree
	 */
	public exitNumberPrimaryExpression(ctx: NumberPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `characterPrimaryExpression`
	 * labeled alternative in `KipperParser.PrimaryExpression`.
	 * @param ctx The parse tree
	 */
	public enterCharacterPrimaryExpression(ctx: CharacterPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `characterPrimaryExpression`
	 * labeled alternative in `KipperParser.PrimaryExpression`.
	 * @param ctx The parse tree
	 */
	public exitCharacterPrimaryExpression(ctx: CharacterPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `listConstantPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree
	 */
	public enterListPrimaryExpression(ctx: ListPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `listConstantPrimaryExpression`
	 * labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree
	 */
	public exitListPrimaryExpression(ctx: ListPrimaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.listConstant`.
	 * @param ctx The parse tree
	 */
	public enterListConstant(ctx: ListConstantContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.listConstant`.
	 * @param ctx The parse tree
	 */
	public exitListConstant(ctx: ListConstantContext): void {}

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
	public enterPassOnPostfixExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnPostfixExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `arraySpecifierPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterArraySpecifierPostfixExpression(ctx: ArraySpecifierPostfixExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `arraySpecifierPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitArraySpecifierPostfixExpression(ctx: ArraySpecifierPostfixExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `incrementOrDecrementPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterIncrementOrDecrementPostfixExpression(ctx: IncrementOrDecrementPostfixExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `incrementOrDecrementPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitIncrementOrDecrementPostfixExpression(ctx: IncrementOrDecrementPostfixExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `functionCallPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterFunctionCallPostfixExpression(ctx: FunctionCallPostfixExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `functionCallPostfixExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitFunctionCallPostfixExpression(ctx: FunctionCallPostfixExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.argumentExpressionList`.
	 *
	 * This is a list of arguments for a 'functionCallExpression', which calls a function with the arguments listed in
	 * the {@link ctx} instance.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterArgumentExpressionList(ctx: ArgumentExpressionListContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by `KipperParser.argumentExpressionList`.
	 *
	 * This is a list of arguments for a 'functionCallExpression', which calls a function with the arguments listed in
	 * the {@link ctx} instance.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitArgumentExpressionList(ctx: ArgumentExpressionListContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.arraySpecifier`.
	 * @param ctx The parse tree
	 */
	public enterArraySpecifier(ctx: ArraySpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.arraySpecifier`.
	 * @param ctx The parse tree
	 */
	public exitArraySpecifier(ctx: ArraySpecifierContext): void {}

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
	public enterPassOnUnaryExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnUnaryExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `incrementOrDecrementUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterIncrementOrDecrementUnaryExpression(ctx: IncrementOrDecrementUnaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `incrementOrDecrementUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitIncrementOrDecrementUnaryExpression(ctx: IncrementOrDecrementUnaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `operatorModifiedUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterOperatorModifiedUnaryExpression(ctx: OperatorModifiedUnaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `operatorModifiedUnaryExpression`
	 * Labeled alternative in `KipperParser.unaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitOperatorModifiedUnaryExpression(ctx: OperatorModifiedUnaryExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterUnaryOperator(ctx: UnaryOperatorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitUnaryOperator(ctx: UnaryOperatorContext): void {}

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
	public enterPassOnCastOrConvertExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnCastOrConvertExpression`
	 * Labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnCastOrConvertExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualCastOrConvertExpression`
	 * Labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualCastOrConvertExpression(ctx: ActualCastOrConvertExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualCastOrConvertExpression`
	 * Labeled alternative in `KipperParser.castOrConvertExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualCastOrConvertExpression(ctx: ActualCastOrConvertExpressionContext): void {
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
	public enterPassOnMultiplicativeExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnMultiplicativeExpression`
	 * Labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnMultiplicativeExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualMultiplicativeExpression`
	 * Labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualMultiplicativeExpression(ctx: ActualMultiplicativeExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualMultiplicativeExpression`
	 * Labeled alternative in `KipperParser.multiplicativeExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualMultiplicativeExpression(ctx: ActualMultiplicativeExpressionContext): void {
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
	public enterPassOnAdditiveExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnAdditiveExpression`
	 * Labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnAdditiveExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualAdditiveExpression`
	 * Labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualAdditiveExpression(ctx: ActualAdditiveExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualAdditiveExpression`
	 * Labeled alternative in `KipperParser.additiveExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualAdditiveExpression(ctx: ActualAdditiveExpressionContext): void {
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
	public enterPassOnRelationalExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnRelationalExpression`
	 * Labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnRelationalExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualRelationalExpression`
	 * Labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualRelationalExpression(ctx: ActualRelationalExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualRelationalExpression`
	 * Labeled alternative in `KipperParser.relationalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualRelationalExpression(ctx: ActualRelationalExpressionContext): void {
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
	public enterPassOnEqualityExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnEqualityExpression`
	 * Labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnEqualityExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualEqualityExpression`
	 * Labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualEqualityExpression(ctx: ActualEqualityExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualEqualityExpression`
	 * Labeled alternative in `KipperParser.equalityExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualEqualityExpression(ctx: ActualEqualityExpressionContext): void {
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
	public enterPassOnLogicalAndExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnLogicalAndExpression`
	 * Labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnLogicalAndExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualLogicalAndExpression`
	 * Labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualLogicalAndExpression(ctx: ActualLogicalAndExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualLogicalAndExpression`
	 * Labeled alternative in `KipperParser.logicalAndExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualLogicalAndExpression(ctx: ActualLogicalAndExpressionContext): void {
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
	public enterPassOnLogicalOrExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnLogicalOrExpression`
	 * Labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnLogicalOrExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualLogicalOrExpression`
	 * Labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualLogicalOrExpression(ctx: ActualLogicalOrExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualLogicalOrExpression`
	 * Labeled alternative in `KipperParser.logicalOrExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualLogicalOrExpression(ctx: ActualLogicalOrExpressionContext): void {
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
	public enterPassOnConditionalExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnConditionalExpression`
	 * Labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnConditionalExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualConditionalExpression`
	 * Labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualConditionalExpression(ctx: ActualConditionalExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualConditionalExpression`
	 * Labeled alternative in `KipperParser.conditionalExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualConditionalExpression(ctx: ActualConditionalExpressionContext): void {
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
	public enterPassOnAssignmentExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Exit a parse tree produced by the `passOnAssignmentExpression`
	 * Labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitPassOnAssignmentExpression: undefined = passOnHandler; // pass on expressions are always ignored

	/**
	 * Enter a parse tree produced by the `actualAssignmentExpression`
	 * Labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterActualAssignmentExpression(ctx: ActualAssignmentExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `actualAssignmentExpression`
	 * Labeled alternative in `KipperParser.assignmentExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitActualAssignmentExpression(ctx: ActualAssignmentExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterAssignmentOperator(ctx: AssignmentOperatorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitAssignmentOperator(ctx: AssignmentOperatorContext): void {}

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
	public enterExpressionStatement(ctx: ExpressionStatementContext): void {
		// TODO! Implement proper handling of parents for compound statements and function definitions
		this.handleIncomingStatementCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitExpressionStatement(ctx: ExpressionStatementContext): void {
		this.handleExitingStatementOrDefinitionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterCompoundStatement(ctx: CompoundStatementContext): void {
		this.handleIncomingStatementCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitCompoundStatement(ctx: CompoundStatementContext): void {
		this.handleExitingStatementOrDefinitionCtx();
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
	public enterIfStatement(ctx: IfStatementContext): void {
		throw new Error("If statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by the `ifStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	public exitIfStatement(ctx: IfStatementContext): void {
		throw new Error("If statements are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by the `switchStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	public enterSwitchStatement(ctx: SwitchStatementContext): void {
		throw new Error("Switch statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by the `switchStatement`
	 * labeled alternative in `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	public exitSwitchStatement(ctx: SwitchStatementContext): void {
		throw new Error("Switch statements are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by `KipperParser.labeledStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterSwitchLabeledStatement(ctx: SwitchLabeledStatementContext): void {
		throw new Error("Switch statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.labeledStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitSwitchLabeledStatement(ctx: SwitchLabeledStatementContext): void {
		throw new Error("Switch statements are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterIterationStatement(ctx: IterationStatementContext): void {
		throw new Error("Iteration statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitIterationStatement(ctx: IterationStatementContext): void {
		throw new Error("Iteration statements are not supported yet in Kipper");
	}

	/**
	 * Enter a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterJumpStatement(ctx: JumpStatementContext): void {
		throw new Error("Jump statements are not supported yet in Kipper");
	}

	/**
	 * Exit a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitJumpStatement(ctx: JumpStatementContext): void {
		throw new Error("Jump statements are not supported yet in Kipper");
	}

	// -- VariableDeclaration section --

	/**
	 * Enter a parse tree produced by `KipperParser.declaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterDeclaration(ctx: DeclarationContext): void {
		this.handleIncomingDefinitionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by `KipperParser.declaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitDeclaration(ctx: DeclarationContext): void {
		this.handleExitingStatementOrDefinitionCtx();
	}

	/**
	 * Enter a parse tree produced by `KipperParser.functionDefinition`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterFunctionDeclaration(ctx: FunctionDeclarationContext): void {
		this.handleIncomingDefinitionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by `KipperParser.functionDefinition`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitFunctionDeclaration(ctx: FunctionDeclarationContext): void {
		this.handleExitingStatementOrDefinitionCtx();
	}

	// -- Child Rules Section --

	/**
	 * Enter a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterStorageTypeSpecifier(ctx: StorageTypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitStorageTypeSpecifier(ctx: StorageTypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.declarationSpecifiers`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterDeclarationSpecifiers(ctx: DeclarationSpecifiersContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.declarationSpecifiers`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitDeclarationSpecifiers(ctx: DeclarationSpecifiersContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.declarationSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterDeclarationSpecifier(ctx: DeclarationSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.declarationSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitDeclarationSpecifier(ctx: DeclarationSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterInitDeclarator(ctx: InitDeclaratorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitInitDeclarator(ctx: InitDeclaratorContext): void {}

	/**
	 * Enter a parse tree produced by the `singleItemTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterSingleItemTypeSpecifier(ctx: SingleItemTypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by the `singleItemTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitSingleItemTypeSpecifier(ctx: SingleItemTypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by the `multiItemTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterMultiItemTypeSpecifier(ctx: MultiItemTypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by the `multiItemTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitMultiItemTypeSpecifier(ctx: MultiItemTypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by the `typeofTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterTypeofTypeSpecifier(ctx: TypeofTypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by the `typeofTypeSpecifier`
	 * Labeled alternative in `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitTypeofTypeSpecifier(ctx: TypeofTypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterTypeSpecifier(ctx: TypeSpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitTypeSpecifier(ctx: TypeSpecifierContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.declarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterDeclarator(ctx: DeclaratorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.declarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitDeclarator(ctx: DeclaratorContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterDirectDeclarator(ctx: DirectDeclaratorContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitDirectDeclarator(ctx: DirectDeclaratorContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.nestedParenthesesBlock`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterNestedParenthesesBlock(ctx: NestedParenthesesBlockContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.nestedParenthesesBlock`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitNestedParenthesesBlock(ctx: NestedParenthesesBlockContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.parameterTypeList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterParameterTypeList(ctx: ParameterTypeListContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.parameterTypeList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitParameterTypeList(ctx: ParameterTypeListContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterParameterList(ctx: ParameterListContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitParameterList(ctx: ParameterListContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterParameterDeclaration(ctx: ParameterDeclarationContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitParameterDeclaration(ctx: ParameterDeclarationContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.initializer`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public enterInitializer(ctx: InitializerContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.initializer`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	public exitInitializer(ctx: InitializerContext): void {}
}
