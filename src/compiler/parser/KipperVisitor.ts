// Generated from Kipper.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import {
  AdditiveExpressionContext,
  ArgumentExpressionListContext,
  ArraySpecifierContext,
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
  DesignationContext,
  DesignatorContext,
  DesignatorListContext,
  DirectDeclaratorContext,
  EndOfItemContext,
  EqualityExpressionContext,
  ExpressionContext,
  ExpressionStatementContext,
  ExternalBlockItemContext,
  ExternalDeclarationContext,
  ExternalFunctionDefinitionContext,
  ExternalItemContext,
  FunctionDefinitionContext,
  InitDeclaratorContext,
  InitializerContext,
  InitializerListContext,
  IterationStatementContext,
  JumpStatementContext,
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
  UnaryOperatorContext
} from "./KipperParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `KipperParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface KipperVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `externalFunctionDefinition`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternalFunctionDefinition?: (ctx: ExternalFunctionDefinitionContext) => Result;

  /**
   * Visit a parse tree produced by the `externalDeclaration`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternalDeclaration?: (ctx: ExternalDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by the `externalBlockItem`
   * labeled alternative in `KipperParser.externalItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternalBlockItem?: (ctx: ExternalBlockItemContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.primaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.postfixExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.argumentExpressionList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.unaryExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.unaryOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.castOrConvertExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCastOrConvertExpression?: (ctx: CastOrConvertExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.multiplicativeExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.additiveExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.relationalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.equalityExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.logicalAndExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.logicalOrExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.conditionalExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.assignmentExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.assignmentOperator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.constantExpression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.storageTypeSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStorageTypeSpecifier?: (ctx: StorageTypeSpecifierContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.declarationSpecifiers`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.declarationSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.initDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitDeclarator?: (ctx: InitDeclaratorContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.arraySpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitArraySpecifier?: (ctx: ArraySpecifierContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.typeSpecifier`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.declarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarator?: (ctx: DeclaratorContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.directDeclarator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDirectDeclarator?: (ctx: DirectDeclaratorContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.nestedParenthesesBlock`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNestedParenthesesBlock?: (ctx: NestedParenthesesBlockContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.parameterTypeList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterTypeList?: (ctx: ParameterTypeListContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.parameterList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterList?: (ctx: ParameterListContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.parameterDeclaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.initializer`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializer?: (ctx: InitializerContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.initializerList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitInitializerList?: (ctx: InitializerListContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.designation`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDesignation?: (ctx: DesignationContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.designatorList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDesignatorList?: (ctx: DesignatorListContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.designator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDesignator?: (ctx: DesignatorContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitStatement?: (ctx: StatementContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.labeledStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.compoundStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.blockItemList`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockItemList?: (ctx: BlockItemListContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.blockItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlockItem?: (ctx: BlockItemContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.expressionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.selectionStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelectionStatement?: (ctx: SelectionStatementContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.iterationStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIterationStatement?: (ctx: IterationStatementContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.jumpStatement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJumpStatement?: (ctx: JumpStatementContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.compilationUnit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.translationUnit`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTranslationUnit?: (ctx: TranslationUnitContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.externalItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExternalItem?: (ctx: ExternalItemContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.functionDefinition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

  /**
   * Visit a parse tree produced by `KipperParser.endOfItem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitEndOfItem?: (ctx: EndOfItemContext) => Result;
}

