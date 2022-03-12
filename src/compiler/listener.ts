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
	AssignmentOperatorContext,
	BlockItemContext,
	BlockItemListContext,
	CompilationUnitContext,
	CompoundStatementContext,
	ConstantPrimaryExpressionContext,
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
	FunctionCallExpressionContext,
	FunctionDefinitionContext,
	IdentifierPrimaryExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	InitDeclaratorContext,
	InitializerContext,
	IterationStatementContext,
	JumpStatementContext,
	KipperListener,
	LabeledStatementContext,
	MultiItemTypeSpecifierContext,
	NestedParenthesesBlockContext,
	OperatorModifiedUnaryExpressionContext,
	ParameterDeclarationContext,
	ParameterListContext,
	ParameterTypeListContext,
	ReferenceExpressionContext,
	SelectionStatementContext,
	SingleItemTypeSpecifierContext,
	StatementContext,
	StorageTypeSpecifierContext,
	StringPrimaryExpressionContext,
	TangledPrimaryExpressionContext,
	TranslationUnitContext,
	TypeofTypeSpecifierContext,
	TypeSpecifierContext,
	UnaryOperatorContext,
	ArraySpecifierContext,
	DefaultInitializerContext,
	ListInitializerContext
} from "./parser";
import { KipperProgramContext } from "./program-ctx";
import { ParserRuleContext } from "antlr4ts";
import { CompilableParseToken, Expression, ExpressionStatement } from "./tokens";
import { antlrExpressionCtx, getExpressionInstance } from "./tokens/expressions";

const passOnHandler: () => void = (() => {});

/**
 * The listener for a {@link KipperProgramContext}, which walks through the generated
 * parser tree and produces the TypeScript code output in {@link processedParseTree}.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
export class KipperFileListener implements KipperListener {
	/**
	 * The private '_fileCtx' that actually stores the variable data,
	 * which is returned inside the getter 'fileCtx'.
	 * @private
	 */
	private readonly _fileCtx: KipperProgramContext;

	/**
	 * The private '_itemBuffer' that actually stores the variable data,
	 * which is returned inside the getter 'itemBuffer'.
	 * @private
	 */
	private readonly _processedParseTree: Array<CompilableParseToken>;

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
	 * The correct kipper token that is being walked through right now. This is the instance where current metadata
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

	constructor(fileCtx: KipperProgramContext) {
		this._fileCtx = fileCtx;
		this._processedParseTree = [];
		this._isExternalItem = false;
		this._isFunctionDefinition = false;
		this._currentPrimaryToken = undefined;
	}

	/**
	 * The {@link KipperProgramContext} instance responsible for managing this {@link KipperFileListener} instance.
	 */
	get fileCtx(): KipperProgramContext {
		return this._fileCtx;
	}

	/**
	 * A string array that contains the generated TypeScript code lines that were created by
	 * the listener.
	 * @since 0.0.6
	 */
	get processedParseTree(): Array<CompilableParseToken> {
		return this._processedParseTree;
	}

	/**
	 * Returns which token is being processed at the moment and where meta-data should be assigned to. If
	 * {@link _currentExpression} is defined, then that item will be returned, otherwise {@link _currentPrimaryToken}.
	 * @private
	 */
	private get currentProcessedToken() {
		if (this._currentExpression !== undefined) {
			return this._currentExpression;
		}
		return this._currentPrimaryToken;
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
	private handleIncomingExpressionCtx(ctx: ParserRuleContext) {
		if (this._currentExpression === undefined) {
			this._currentExpression = new Expression(ctx, this.fileCtx);
			this._currentPrimaryToken?.addNewChild(this._currentExpression);
		} else {
			// Generating a new expression, which a child of the previous expression.
			let newExpression: Expression = getExpressionInstance(ctx, this.fileCtx);
			this._currentExpression.addNewChild(newExpression);
			this._currentExpression = newExpression;
		}
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
	 * Enter a parse tree produced by the `constantPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterConstantPrimaryExpression(ctx: ConstantPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `constantPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitConstantPrimaryExpression(ctx: ConstantPrimaryExpressionContext): void {
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
	 * Enter a parse tree produced by the `fstringPrimaryExpression`
	 * Labeled alternative in `KipperParser.primaryExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterFStringPrimaryExpression(ctx: FStringPrimaryExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `fstringPrimaryExpression`
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
	 * We are ignoring primary expressions, and only going to handle the rules 'identifierPrimaryExpression'
	 * 'constantPrimaryExpression', 'stringPrimaryExpression', 'fStringPrimaryExpression' and
	 * 'tangledPrimaryExpression', which implement a more precise 'primaryExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

	/**
	 * Enter a parse tree produced by the `ReferenceExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterReferenceExpression(ctx: ReferenceExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `ReferenceExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitReferenceExpression(ctx: ReferenceExpressionContext): void {
		this.handleExitingExpressionCtx();
	}

	/**
	 * Enter a parse tree produced by the `FunctionCallExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterFunctionCallExpression(ctx: FunctionCallExpressionContext): void {
		this.handleIncomingExpressionCtx(ctx);
	}

	/**
	 * Exit a parse tree produced by the `FunctionCallExpression`
	 * Labeled alternative in `KipperParser.postfixExpression`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitFunctionCallExpression(ctx: FunctionCallExpressionContext): void {
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
	 * @param ctx the parse tree
	 */
	enterArraySpecifier(ctx: ArraySpecifierContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.arraySpecifier`.
	 * @param ctx the parse tree
	 */
	exitArraySpecifier(ctx: ArraySpecifierContext): void {}

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
	 * We are ignoring postfix expressions, and only going to handle the rules 'referenceExpression' and
	 * 'functionCallExpression', which implement a more precise 'postfixExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

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
	 * We are ignoring unary expressions, and only going to handle the rules 'passOnUnaryExpression',
	 * 'incrementOrDecrementUnaryExpression' and 'operatorModifiedUnaryExpression', which implement a more precise
	 * 'unaryExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

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
	 * We are ignoring cast or convert expressions, and only going to handle the rules 'passOnCastOrConvertExpression',
	 * and 'actualCastOrConvertExpression', which implement a more precise 'castOrConvertExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

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
	 * We are ignoring multiplicative expressions, and only going to handle the rules 'passOnMultiplicativeExpression',
	 * and 'actualMultiplicativeExpression', which implement a more precise 'multiplicativeExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

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
	 * We are ignoring additive expressions, and only going to handle the rules 'passOnAdditiveExpression',
	 * and 'actualAdditiveExpression', which implement a more precise 'additiveExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time
	 * an expression is called.
	 */

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
	 * We are ignoring relational expressions, and only going to handle the rules 'passOnRelationalExpression',
	 * and 'actualRelationalExpression', which implement a more precise 'relationalExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

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
	 * We are ignoring equality expressions, and only going to handle the rules 'passOnEqualityExpression',
	 * and 'actualEqualityExpression', which implement a more precise 'equalityExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

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
	 * We are ignoring logical and expressions, and only going to handle the rules 'passOnLogicalAndExpression',
	 * and 'actualLogicalAndExpression', which implement a more precise 'logicalAndExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

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
	 * We are ignoring logical or expressions, and only going to handle the rules 'passOnLogicalOrExpression',
	 * and 'actualLogicalOrExpression', which implement a more precise 'logicalOrExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

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
	 * We are ignoring conditional expressions, and only going to handle the rules 'passOnConditionalExpression',
	 * and 'actualConditionalExpression', which implement a more precise 'conditionalExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

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
	 * We are ignoring assignment expressions, and only going to handle the rules 'passOnAssignmentExpression',
	 * and 'actualAssignmentExpression', which implement a more precise 'assignmentExpression' rule.
	 *
	 * This is to simplify the walking process, without having to check if the expression is actually used every time an
	 * expression is called.
	 */

	// /**
	//  * Enter a parse tree produced by `KipperParser.constantExpression`.
	//  *
	//  * This is an expression that "re-directs" directly to an {@link ConditionalExpressionContext} and is used inside
	//  * {@link LabeledStatementContext} (Switch).
	//  * @param ctx The parse tree (instance of {@link ParserRuleContext})
	//  */
	// enterConstantExpression(ctx: ConstantExpressionContext): void {}
	//
	// /**
	//  * Exit a parse tree produced by `KipperParser.constantExpression`.
	//  *
	//  * This is an expression that "re-directs" directly to an {@link ConditionalExpressionContext} and is used inside
	//  * {@link LabeledStatementContext} (Switch statement).
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

	/**
	 * We are ignoring constant expressions and default expressions, as the children will handle everything.
	 */

	// -- Statement and Declaration section --

	/**
	 * Enter a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterExpressionStatement(ctx: ExpressionStatementContext): void {
		this._currentPrimaryToken = new ExpressionStatement(ctx, this.fileCtx);
	}

	/**
	 * Exit a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitExpressionStatement(ctx: ExpressionStatementContext): void {
		if (this._currentPrimaryToken instanceof ExpressionStatement) {
			this.processedParseTree.push(this._currentPrimaryToken);
		}
		this._currentPrimaryToken = undefined;
	}

	/**
	 * Enter a parse tree produced by `KipperParser.declaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterDeclaration(ctx: DeclarationContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.declaration`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitDeclaration(ctx: DeclarationContext): void {}

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
	 * Enter a parse tree produced by the `defaultInitializer`
	 * labeled alternative in `KipperParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterDefaultInitializer(ctx: DefaultInitializerContext): void {
	}

	/**
	 * Exit a parse tree produced by the `defaultInitializer`
	 * labeled alternative in `KipperParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitDefaultInitializer(ctx: DefaultInitializerContext): void {
	}

	/**
	 * Enter a parse tree produced by the `listInitializer`
	 * labeled alternative in `KipperParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterListInitializer(ctx: ListInitializerContext): void {
	}

	/**
	 * Exit a parse tree produced by the `listInitializer`
	 * labeled alternative in `KipperParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitListInitializer(ctx: ListInitializerContext): void {
	}

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
	 * Enter a parse tree produced by `KipperParser.statement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterStatement(ctx: StatementContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.statement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitStatement(ctx: StatementContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.labeledStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterLabeledStatement(ctx: LabeledStatementContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.labeledStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitLabeledStatement(ctx: LabeledStatementContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterCompoundStatement(ctx: CompoundStatementContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitCompoundStatement(ctx: CompoundStatementContext): void {}

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
	 * Enter a parse tree produced by `KipperParser.selectionStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterSelectionStatement(ctx: SelectionStatementContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.selectionStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitSelectionStatement(ctx: SelectionStatementContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterIterationStatement(ctx: IterationStatementContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitIterationStatement(ctx: IterationStatementContext): void {}

	/**
	 * Enter a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterJumpStatement(ctx: JumpStatementContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitJumpStatement(ctx: JumpStatementContext): void {}

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
	 * Enter a parse tree produced by `KipperParser.functionDefinition`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	enterFunctionDefinition(ctx: FunctionDefinitionContext): void {}

	/**
	 * Exit a parse tree produced by `KipperParser.functionDefinition`.
	 * @param ctx The parse tree (instance of {@link ParserRuleContext})
	 */
	exitFunctionDefinition(ctx: FunctionDefinitionContext): void {}

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
