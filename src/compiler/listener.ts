/**
 * Antlr4 listener for walking through a parser tree and processing its content
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
import {
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
  FunctionDefinitionContext,
  InitDeclaratorContext,
  InitializerContext,
  IterationStatementContext,
  JumpStatementContext,
  KipperListener,
  LabeledStatementContext,
  LogicalAndExpressionContext,
  LogicalOrExpressionContext,
  MultiplicativeExpressionContext,
  NestedParenthesesBlockContext,
  ParameterDeclarationContext,
  ParameterListContext,
  ParameterTypeListContext,
  PostfixExpressionContext,
  PrimaryExpressionContext,
  RelationalExpressionContext,
  SelectionStatementContext,
  StatementContext,
  StorageTypeSpecifierContext,
  TranslationUnitContext,
  TypeSpecifierContext,
  UnaryExpressionContext,
  UnaryOperatorContext,
} from "./parser";
import {KipperFileContext} from "./file-ctx";
import {ParserRuleContext} from "antlr4ts";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";
import {ErrorNode} from "antlr4ts/tree/ErrorNode";
import {ExpressionStatement, KipperParseToken, Expression} from "./parse-tokens";
import {FunctionCallExpressionContext, ReferenceExpressionContext} from "./parser/KipperParser";

/**
 * The listener for a {@link KipperFileContext}, which walks through the generated
 * parser tree and produces the TypeScript code output in {@link itemBuffer}.
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
  private readonly _fileCtx: KipperFileContext;

  /**
   * The private '_itemBuffer' that actually stores the variable data,
   * which is returned inside the getter 'itemBuffer'.
   * @private
   */
  private readonly _itemBuffer: Array<KipperParseToken>;

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

  constructor(fileCtx: KipperFileContext) {
    this._fileCtx = fileCtx;
    this._itemBuffer = [];
    this._isExternalItem = false;
    this._isFunctionDefinition = false;
    this._currentKipperToken = undefined;
  }

  /**
   * The {@link KipperFileContext} instance responsible for managing this {@link KipperFileListener} instance.
   */
  get fileCtx(): KipperFileContext {
    return this._fileCtx;
  }

  /**
   * A string array that contains the generated TypeScript code lines that were created by
   * the listener.
   * @since 0.0.6
   */
  get itemBuffer(): Array<KipperParseToken> {
    return this._itemBuffer;
  }

  /**
   * ??? - Let's ignore this for now
   * @param node The node that was visited.
   */
  visitTerminal = (/*@NotNull*/ node: TerminalNode): void => {};

  /**
   * Function that is called when an error node is visited.
   * @param node The node that was visited.
   */
  visitErrorNode = (/*@NotNull*/ node: ErrorNode): void => {};

  /**
   * Function that is called every time an time is entered
   * @param ctx The context of the rule
   */
  enterEveryRule = (/*@NotNull*/ ctx: ParserRuleContext): void => {};

  /**
   * Function that is called every time an item is exited.
   * @param ctx The context of the rule.
   */
  exitEveryRule = (/*@NotNull*/ ctx: ParserRuleContext): void => {};

  /**
   * Enter a parse tree produced by the `externalFunctionDefinition`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExternalFunctionDefinition = (ctx: ExternalFunctionDefinitionContext) => {
    this._isFunctionDefinition = true;
  };

  /**
   * Exit a parse tree produced by the `externalFunctionDefinition`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExternalFunctionDefinition = (ctx: ExternalFunctionDefinitionContext) => {
    this._isFunctionDefinition = false;
  };

  /**
   * Enter a parse tree produced by the `externalBlockItem`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExternalBlockItem = (ctx: ExternalBlockItemContext) => {
    this._isExternalItem = true;
  };

  /**
   * Exit a parse tree produced by the `externalBlockItem`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExternalBlockItem = (ctx: ExternalBlockItemContext) => {
    this._isExternalItem = false;
  };

  /**
   * Enter a parse tree produced by `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterPrimaryExpression = (ctx: PrimaryExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.primaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPrimaryExpression = (ctx: PrimaryExpressionContext) => {};

  /**
   * Enter a parse tree produced by the `ReferenceExpression`
   * labeled alternative in `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterReferenceExpression = (ctx: ReferenceExpressionContext) => {};

  /**
   * Exit a parse tree produced by the `ReferenceExpression`
   * labeled alternative in `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitReferenceExpression = (ctx: ReferenceExpressionContext) => {};

  /**
   * Enter a parse tree produced by the `FunctionCallExpression`
   * labeled alternative in `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterFunctionCallExpression = (ctx: FunctionCallExpressionContext) => {};

  /**
   * Exit a parse tree produced by the `FunctionCallExpression`
   * labeled alternative in `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitFunctionCallExpression = (ctx: FunctionCallExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterPostfixExpression = (ctx: PostfixExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.postfixExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitPostfixExpression = (ctx: PostfixExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.argumentExpressionList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterArgumentExpressionList = (ctx: ArgumentExpressionListContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.argumentExpressionList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitArgumentExpressionList = (ctx: ArgumentExpressionListContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterUnaryExpression = (ctx: UnaryExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.unaryExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitUnaryExpression = (ctx: UnaryExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.unaryOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterUnaryOperator = (ctx: UnaryOperatorContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.unaryOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitUnaryOperator = (ctx: UnaryOperatorContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterCastOrConvertExpression = (ctx: CastOrConvertExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.castOrConvertExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitCastOrConvertExpression = (ctx: CastOrConvertExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterMultiplicativeExpression = (ctx: MultiplicativeExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.multiplicativeExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitMultiplicativeExpression = (ctx: MultiplicativeExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAdditiveExpression = (ctx: AdditiveExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.additiveExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAdditiveExpression = (ctx: AdditiveExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterRelationalExpression = (ctx: RelationalExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.relationalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitRelationalExpression = (ctx: RelationalExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterEqualityExpression = (ctx: EqualityExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.equalityExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitEqualityExpression = (ctx: EqualityExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterLogicalAndExpression = (ctx: LogicalAndExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.logicalAndExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitLogicalAndExpression = (ctx: LogicalAndExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterLogicalOrExpression = (ctx: LogicalOrExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.logicalOrExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitLogicalOrExpression = (ctx: LogicalOrExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterConditionalExpression = (ctx: ConditionalExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.conditionalExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitConditionalExpression = (ctx: ConditionalExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAssignmentExpression = (ctx: AssignmentExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.assignmentExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAssignmentExpression = (ctx: AssignmentExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.assignmentOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterAssignmentOperator = (ctx: AssignmentOperatorContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.assignmentOperator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitAssignmentOperator = (ctx: AssignmentOperatorContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.constantExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterConstantExpression = (ctx: ConstantExpressionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.constantExpression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitConstantExpression = (ctx: ConstantExpressionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.expression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExpression = (ctx: ExpressionContext) => {
    this._currentExpression = new Expression(ctx, this.fileCtx);
    this._currentKipperToken?.children.push(this._currentExpression);
  };

  /**
   * Exit a parse tree produced by `KipperParser.expression`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExpression = (ctx: ExpressionContext) => {
    this._currentExpression = undefined;
  };

  /**
   * Enter a parse tree produced by `KipperParser.expressionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExpressionStatement = (ctx: ExpressionStatementContext) => {
    this._currentKipperToken = new ExpressionStatement(ctx, this.fileCtx);
  };

  /**
   * Exit a parse tree produced by `KipperParser.expressionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExpressionStatement = (ctx: ExpressionStatementContext) => {
    if (this._currentKipperToken instanceof ExpressionStatement) this.itemBuffer.push(this._currentKipperToken);
    this._currentKipperToken = undefined;
  };

  /**
   * Enter a parse tree produced by `KipperParser.declaration`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDeclaration = (ctx: DeclarationContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.declaration`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDeclaration = (ctx: DeclarationContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.storageTypeSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterStorageTypeSpecifier = (ctx: StorageTypeSpecifierContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.storageTypeSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitStorageTypeSpecifier = (ctx: StorageTypeSpecifierContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.declarationSpecifiers`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDeclarationSpecifiers = (ctx: DeclarationSpecifiersContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.declarationSpecifiers`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDeclarationSpecifiers = (ctx: DeclarationSpecifiersContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.declarationSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDeclarationSpecifier = (ctx: DeclarationSpecifierContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.declarationSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDeclarationSpecifier = (ctx: DeclarationSpecifierContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.initDeclarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterInitDeclarator = (ctx: InitDeclaratorContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.initDeclarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitInitDeclarator = (ctx: InitDeclaratorContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.typeSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterTypeSpecifier = (ctx: TypeSpecifierContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.typeSpecifier`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitTypeSpecifier = (ctx: TypeSpecifierContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.declarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDeclarator = (ctx: DeclaratorContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.declarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDeclarator = (ctx: DeclaratorContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.directDeclarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterDirectDeclarator = (ctx: DirectDeclaratorContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.directDeclarator`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitDirectDeclarator = (ctx: DirectDeclaratorContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.nestedParenthesesBlock`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterNestedParenthesesBlock = (ctx: NestedParenthesesBlockContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.nestedParenthesesBlock`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitNestedParenthesesBlock = (ctx: NestedParenthesesBlockContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.parameterTypeList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterParameterTypeList = (ctx: ParameterTypeListContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.parameterTypeList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitParameterTypeList = (ctx: ParameterTypeListContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.parameterList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterParameterList = (ctx: ParameterListContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.parameterList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitParameterList = (ctx: ParameterListContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.parameterDeclaration`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterParameterDeclaration = (ctx: ParameterDeclarationContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.parameterDeclaration`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitParameterDeclaration = (ctx: ParameterDeclarationContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.initializer`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterInitializer = (ctx: InitializerContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.initializer`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitInitializer = (ctx: InitializerContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.statement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterStatement = (ctx: StatementContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.statement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitStatement = (ctx: StatementContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.labeledStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterLabeledStatement = (ctx: LabeledStatementContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.labeledStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitLabeledStatement = (ctx: LabeledStatementContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.compoundStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterCompoundStatement = (ctx: CompoundStatementContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.compoundStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitCompoundStatement = (ctx: CompoundStatementContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.blockItemList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterBlockItemList = (ctx: BlockItemListContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.blockItemList`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitBlockItemList = (ctx: BlockItemListContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.blockItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterBlockItem = (ctx: BlockItemContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.blockItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitBlockItem = (ctx: BlockItemContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.selectionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterSelectionStatement = (ctx: SelectionStatementContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.selectionStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitSelectionStatement = (ctx: SelectionStatementContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.iterationStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterIterationStatement = (ctx: IterationStatementContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.iterationStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitIterationStatement = (ctx: IterationStatementContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.jumpStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterJumpStatement = (ctx: JumpStatementContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.jumpStatement`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitJumpStatement = (ctx: JumpStatementContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.compilationUnit`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterCompilationUnit = (ctx: CompilationUnitContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.compilationUnit`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitCompilationUnit = (ctx: CompilationUnitContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.translationUnit`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterTranslationUnit = (ctx: TranslationUnitContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.translationUnit`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitTranslationUnit = (ctx: TranslationUnitContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterExternalItem = (ctx: ExternalItemContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.externalItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitExternalItem = (ctx: ExternalItemContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.functionDefinition`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterFunctionDefinition = (ctx: FunctionDefinitionContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.functionDefinition`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitFunctionDefinition = (ctx: FunctionDefinitionContext) => {};

  /**
   * Enter a parse tree produced by `KipperParser.endOfItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  enterEndOfItem = (ctx: EndOfItemContext) => {};

  /**
   * Exit a parse tree produced by `KipperParser.endOfItem`.
   * @param ctx The parse tree (instance of {@link ParserRuleContext})
   */
  exitEndOfItem = (ctx: EndOfItemContext) => {};
}
