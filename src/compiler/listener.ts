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
  AdditiveExpressionContext,
  ArgumentExpressionListContext,
  AssignmentExpressionContext,
  AssignmentOperatorContext,
  BlockItemContext,
  BlockItemListContext,
  CastOrConvertExpressionContext,
  CompilationUnitContext,
  CompoundStatementContext,
  ConditionalExpressionContext,
  ConstantExpressionContext,
  ConstantPrimaryExpressionContext,
  DeclarationContext,
  DeclarationSpecifierContext,
  DeclarationSpecifiersContext,
  DeclaratorContext,
  DirectDeclaratorContext,
  EndOfItemContext,
  EqualityExpressionContext,
  ExpressionContext,
  ExpressionStatementContext,
  ExternalBlockItemContext,
  ExternalFunctionDefinitionContext,
  ExternalItemContext,
  FStringPrimaryExpressionContext,
  FunctionDefinitionContext,
  IdentifierPrimaryExpressionContext,
  IncrementOrDecrementUnaryExpressionContext,
  InitDeclaratorContext,
  InitializerContext,
  IterationStatementContext,
  JumpStatementContext,
  KipperListener,
  LabeledStatementContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  MultiItemTypeSpecifierContext,
  MultiplicativeExpressionContext,
  NestedParenthesesBlockContext,
  OperatorModifiedUnaryExpressionContext,
  ParameterDeclarationContext,
  ParameterListContext,
  ParameterTypeListContext,
  PassOnAdditiveExpressionContext,
  PassOnAssignmentExpressionContext,
  PassOnCastOrConvertExpressionContext,
  PassOnConditionalExpressionContext,
  PassOnEqualityExpressionContext,
  PassOnLogicalAndExpressionContext,
  PassOnLogicalOrExpressionContext,
  PassOnMultiplicativeExpressionContext,
  PassOnRelationalExpressionContext,
  PassOnUnaryExpressionContext,
  PostfixExpressionContext,
  PrimaryExpressionContext,
  RelationalExpressionContext,
  SelectionStatementContext,
  SingleItemTypeSpecifierContext,
  StatementContext,
  StorageTypeSpecifierContext,
  StringPrimaryExpressionContext,
  TangledPrimaryExpressionContext,
  TranslationUnitContext,
  TypeofTypeSpecifierContext,
  TypeSpecifierContext,
  UnaryExpressionContext,
  UnaryOperatorContext,
} from "./parser";
import {KipperProgramContext} from "./program-ctx";
import {ParserRuleContext} from "antlr4ts";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {Expression, ExpressionStatement, KipperParseToken} from "./parse-tokens";
import {FunctionCallExpressionContext, ReferenceExpressionContext} from "./parser/KipperParser";

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
  private readonly _processedParseTree: Array<KipperParseToken>;

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
  private _currentKipperToken: KipperParseToken | undefined;

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
    this._currentKipperToken = undefined;
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
  get processedParseTree(): Array<KipperParseToken> {
    return this._processedParseTree;
  }

  /**
   * ??? - Let's ignore this for now
   * @param node The node that was visited.
   */
  visitTerminal(/*@NotNull*/ node: TerminalNode): void {}

  /**
   * Function that is called when an error node is visited.
   * @param node The node that was visited.
   */
  visitErrorNode(/*@NotNull*/ node: ErrorNode): void {}

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

  /**
   * Enter a parse tree produced by the `identifierPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterIdentifierPrimaryExpression(ctx: IdentifierPrimaryExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `identifierPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitIdentifierPrimaryExpression(ctx: IdentifierPrimaryExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `constantPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterConstantPrimaryExpression(ctx: ConstantPrimaryExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `constantPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitConstantPrimaryExpression(ctx: ConstantPrimaryExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `stringPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterStringPrimaryExpression(ctx: StringPrimaryExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `stringPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitStringPrimaryExpression(ctx: StringPrimaryExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `fstringPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterFStringPrimaryExpression(ctx: FStringPrimaryExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `fstringPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitFStringPrimaryExpression(ctx: FStringPrimaryExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `tangledPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterTangledPrimaryExpression(ctx: TangledPrimaryExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `tangledPrimaryExpression`
   * Labeled alternative in `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitTangledPrimaryExpression(ctx: TangledPrimaryExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.primaryExpression`.
   *
   * This is the lowest expression / This has the highest importance of all!
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterPrimaryExpression(ctx: PrimaryExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPrimaryExpression(ctx: PrimaryExpressionContext): void {}

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
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `ReferenceExpression`
   * Labeled alternative in `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitReferenceExpression(ctx: ReferenceExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `FunctionCallExpression`
   * Labeled alternative in `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterFunctionCallExpression(ctx: FunctionCallExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `FunctionCallExpression`
   * Labeled alternative in `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitFunctionCallExpression(ctx: FunctionCallExpressionContext): void {}

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
   * Enter a parse tree produced by `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterPostfixExpression(ctx: PostfixExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPostfixExpression(ctx: PostfixExpressionContext): void {}

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
  enterPassOnUnaryExpression(ctx: PassOnUnaryExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnUnaryExpression`
   * Labeled alternative in `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnUnaryExpression(ctx: PassOnUnaryExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `incrementOrDecrementUnaryExpression`
   * Labeled alternative in `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterIncrementOrDecrementUnaryExpression(ctx: IncrementOrDecrementUnaryExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `incrementOrDecrementUnaryExpression`
   * Labeled alternative in `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitIncrementOrDecrementUnaryExpression(ctx: IncrementOrDecrementUnaryExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `operatorModifiedUnaryExpression`
   * Labeled alternative in `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterOperatorModifiedUnaryExpression(ctx: OperatorModifiedUnaryExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `operatorModifiedUnaryExpression`
   * Labeled alternative in `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitOperatorModifiedUnaryExpression(ctx: OperatorModifiedUnaryExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.unaryOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterUnaryOperator(ctx: UnaryOperatorContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by `KipperParser.unaryOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitUnaryOperator(ctx: UnaryOperatorContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterUnaryExpression(ctx: UnaryExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitUnaryExpression(ctx: UnaryExpressionContext): void {}

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
  enterPassOnCastOrConvertExpression(ctx: PassOnCastOrConvertExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnCastOrConvertExpression`
   * Labeled alternative in `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnCastOrConvertExpression(ctx: PassOnCastOrConvertExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualCastOrConvertExpression`
   * Labeled alternative in `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualCastOrConvertExpression(ctx: ActualCastOrConvertExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualCastOrConvertExpression`
   * Labeled alternative in `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualCastOrConvertExpression(ctx: ActualCastOrConvertExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterCastOrConvertExpression(ctx: CastOrConvertExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitCastOrConvertExpression(ctx: CastOrConvertExpressionContext): void {}

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
  enterPassOnMultiplicativeExpression(ctx: PassOnMultiplicativeExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnMultiplicativeExpression`
   * Labeled alternative in `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnMultiplicativeExpression(ctx: PassOnMultiplicativeExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualMultiplicativeExpression`
   * Labeled alternative in `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualMultiplicativeExpression(ctx: ActualMultiplicativeExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualMultiplicativeExpression`
   * Labeled alternative in `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualMultiplicativeExpression(ctx: ActualMultiplicativeExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterMultiplicativeExpression(ctx: MultiplicativeExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): void {}

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
  enterPassOnAdditiveExpression(ctx: PassOnAdditiveExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnAdditiveExpression`
   * Labeled alternative in `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnAdditiveExpression(ctx: PassOnAdditiveExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualAdditiveExpression`
   * Labeled alternative in `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualAdditiveExpression(ctx: ActualAdditiveExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualAdditiveExpression`
   * Labeled alternative in `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualAdditiveExpression(ctx: ActualAdditiveExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAdditiveExpression(ctx: AdditiveExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAdditiveExpression(ctx: AdditiveExpressionContext): void {}

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
  enterPassOnRelationalExpression(ctx: PassOnRelationalExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnRelationalExpression`
   * Labeled alternative in `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnRelationalExpression(ctx: PassOnRelationalExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualRelationalExpression`
   * Labeled alternative in `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualRelationalExpression(ctx: ActualRelationalExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualRelationalExpression`
   * Labeled alternative in `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualRelationalExpression(ctx: ActualRelationalExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterRelationalExpression(ctx: RelationalExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitRelationalExpression(ctx: RelationalExpressionContext): void {}

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
  enterPassOnEqualityExpression(ctx: PassOnEqualityExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnEqualityExpression`
   * Labeled alternative in `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnEqualityExpression(ctx: PassOnEqualityExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualEqualityExpression`
   * Labeled alternative in `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualEqualityExpression(ctx: ActualEqualityExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualEqualityExpression`
   * Labeled alternative in `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualEqualityExpression(ctx: ActualEqualityExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterEqualityExpression(ctx: EqualityExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitEqualityExpression(ctx: EqualityExpressionContext): void {}

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
  enterPassOnLogicalAndExpression(ctx: PassOnLogicalAndExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnLogicalAndExpression`
   * Labeled alternative in `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnLogicalAndExpression(ctx: PassOnLogicalAndExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualLogicalAndExpression`
   * Labeled alternative in `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualLogicalAndExpression(ctx: ActualLogicalAndExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualLogicalAndExpression`
   * Labeled alternative in `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualLogicalAndExpression(ctx: ActualLogicalAndExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterLogicalAndExpression(ctx: LogicalAndExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitLogicalAndExpression(ctx: LogicalAndExpressionContext): void {}

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
  enterPassOnLogicalOrExpression(ctx: PassOnLogicalOrExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnLogicalOrExpression`
   * Labeled alternative in `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnLogicalOrExpression(ctx: PassOnLogicalOrExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualLogicalOrExpression`
   * Labeled alternative in `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualLogicalOrExpression(ctx: ActualLogicalOrExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualLogicalOrExpression`
   * Labeled alternative in `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualLogicalOrExpression(ctx: ActualLogicalOrExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterLogicalOrExpression(ctx: LogicalOrExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitLogicalOrExpression(ctx: LogicalOrExpressionContext): void {}

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
  enterPassOnConditionalExpression(ctx: PassOnConditionalExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnConditionalExpression`
   * Labeled alternative in `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnConditionalExpression(ctx: PassOnConditionalExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualConditionalExpression`
   * Labeled alternative in `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualConditionalExpression(ctx: ActualConditionalExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualConditionalExpression`
   * Labeled alternative in `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualConditionalExpression(ctx: ActualConditionalExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterConditionalExpression(ctx: ConditionalExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitConditionalExpression(ctx: ConditionalExpressionContext): void {}

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
  enterPassOnAssignmentExpression(ctx: PassOnAssignmentExpressionContext): void {}

  /**
   * Exit a parse tree produced by the `passOnAssignmentExpression`
   * Labeled alternative in `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPassOnAssignmentExpression(ctx: PassOnAssignmentExpressionContext): void {}

  /**
   * Enter a parse tree produced by the `actualAssignmentExpression`
   * Labeled alternative in `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterActualAssignmentExpression(ctx: ActualAssignmentExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by the `actualAssignmentExpression`
   * Labeled alternative in `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitActualAssignmentExpression(ctx: ActualAssignmentExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.assignmentOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAssignmentOperator(ctx: AssignmentOperatorContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by `KipperParser.assignmentOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAssignmentOperator(ctx: AssignmentOperatorContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAssignmentExpression(ctx: AssignmentExpressionContext): void {}

  /**
   * Exit a parse tree produced by `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAssignmentExpression(ctx: AssignmentExpressionContext): void {}

  /**
   * We are ignoring assignment expressions, and only going to handle the rules 'passOnAssignmentExpression',
   * and 'actualAssignmentExpression', which implement a more precise 'assignmentExpression' rule.
   *
   * This is to simplify the walking process, without having to check if the expression is actually used every time an
   * expression is called.
   */

  /**
   * Enter a parse tree produced by `KipperParser.constantExpression`.
   *
   * This is an expression that "re-directs" directly to an {@link ConditionalExpressionContext} and is used inside
   * {@link LabeledStatementContext} (Switch).
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterConstantExpression(ctx: ConstantExpressionContext): void {
    this._currentExpression?.setExpressionCtx(ctx);
  }

  /**
   * Exit a parse tree produced by `KipperParser.constantExpression`.
   *
   * This is an expression that "re-directs" directly to an {@link ConditionalExpressionContext} and is used inside
   * {@link LabeledStatementContext} (Switch statement).
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitConstantExpression(ctx: ConstantExpressionContext): void {}

  /**
   * Enter a parse tree produced by `KipperParser.expression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExpression(ctx: ExpressionContext): void {
    this._currentExpression = new Expression(ctx, this.fileCtx);
    this._currentKipperToken?.children.push(this._currentExpression);
  }

  /**
   * Exit a parse tree produced by `KipperParser.expression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExpression(ctx: ExpressionContext): void {
    this._currentExpression = undefined;
  }

  /**
   * Enter a parse tree produced by `KipperParser.expressionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExpressionStatement(ctx: ExpressionStatementContext): void {
    this._currentKipperToken = new ExpressionStatement(ctx, this.fileCtx);
  }

  /**
   * Exit a parse tree produced by `KipperParser.expressionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExpressionStatement(ctx: ExpressionStatementContext): void {
    if (this._currentKipperToken instanceof ExpressionStatement) this.processedParseTree.push(this._currentKipperToken);
    this._currentKipperToken = undefined;
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
