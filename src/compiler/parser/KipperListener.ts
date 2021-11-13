// Generated from Kipper.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExternalFunctionDefinitionContext } from "./KipperParser";
import { ExternalDeclarationContext } from "./KipperParser";
import { ExternalBlockItemContext } from "./KipperParser";
import { PrimaryExpressionContext } from "./KipperParser";
import { PostfixExpressionContext } from "./KipperParser";
import { ArgumentExpressionListContext } from "./KipperParser";
import { UnaryExpressionContext } from "./KipperParser";
import { UnaryOperatorContext } from "./KipperParser";
import { CastOrConvertExpressionContext } from "./KipperParser";
import { MultiplicativeExpressionContext } from "./KipperParser";
import { AdditiveExpressionContext } from "./KipperParser";
import { RelationalExpressionContext } from "./KipperParser";
import { EqualityExpressionContext } from "./KipperParser";
import { LogicalAndExpressionContext } from "./KipperParser";
import { LogicalOrExpressionContext } from "./KipperParser";
import { ConditionalExpressionContext } from "./KipperParser";
import { AssignmentExpressionContext } from "./KipperParser";
import { AssignmentOperatorContext } from "./KipperParser";
import { ExpressionContext } from "./KipperParser";
import { ConstantExpressionContext } from "./KipperParser";
import { DeclarationContext } from "./KipperParser";
import { StorageTypeSpecifierContext } from "./KipperParser";
import { DeclarationSpecifiersContext } from "./KipperParser";
import { DeclarationSpecifierContext } from "./KipperParser";
import { InitDeclaratorContext } from "./KipperParser";
import { ArraySpecifierContext } from "./KipperParser";
import { TypeSpecifierContext } from "./KipperParser";
import { DeclaratorContext } from "./KipperParser";
import { DirectDeclaratorContext } from "./KipperParser";
import { NestedParenthesesBlockContext } from "./KipperParser";
import { ParameterTypeListContext } from "./KipperParser";
import { ParameterListContext } from "./KipperParser";
import { ParameterDeclarationContext } from "./KipperParser";
import { InitializerContext } from "./KipperParser";
import { InitializerListContext } from "./KipperParser";
import { DesignationContext } from "./KipperParser";
import { DesignatorListContext } from "./KipperParser";
import { DesignatorContext } from "./KipperParser";
import { StatementContext } from "./KipperParser";
import { LabeledStatementContext } from "./KipperParser";
import { CompoundStatementContext } from "./KipperParser";
import { BlockItemListContext } from "./KipperParser";
import { BlockItemContext } from "./KipperParser";
import { ExpressionStatementContext } from "./KipperParser";
import { SelectionStatementContext } from "./KipperParser";
import { IterationStatementContext } from "./KipperParser";
import { JumpStatementContext } from "./KipperParser";
import { CompilationUnitContext } from "./KipperParser";
import { TranslationUnitContext } from "./KipperParser";
import { ExternalItemContext } from "./KipperParser";
import { FunctionDefinitionContext } from "./KipperParser";
import { EndOfItemContext } from "./KipperParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `KipperParser`.
 */
export interface KipperListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `externalFunctionDefinition`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	enterExternalFunctionDefinition?: (ctx: ExternalFunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by the `externalFunctionDefinition`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	exitExternalFunctionDefinition?: (ctx: ExternalFunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by the `externalDeclaration`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	enterExternalDeclaration?: (ctx: ExternalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `externalDeclaration`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	exitExternalDeclaration?: (ctx: ExternalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `externalBlockItem`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	enterExternalBlockItem?: (ctx: ExternalBlockItemContext) => void;
	/**
	 * Exit a parse tree produced by the `externalBlockItem`
	 * labeled alternative in `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	exitExternalBlockItem?: (ctx: ExternalBlockItemContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 */
	enterArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.argumentExpressionList`.
	 * @param ctx the parse tree
	 */
	exitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	enterCastOrConvertExpression?: (ctx: CastOrConvertExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.castOrConvertExpression`.
	 * @param ctx the parse tree
	 */
	exitCastOrConvertExpression?: (ctx: CastOrConvertExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterStorageTypeSpecifier?: (ctx: StorageTypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.storageTypeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitStorageTypeSpecifier?: (ctx: StorageTypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.declarationSpecifiers`.
	 * @param ctx the parse tree
	 */
	enterDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.declarationSpecifiers`.
	 * @param ctx the parse tree
	 */
	exitDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.declarationSpecifier`.
	 * @param ctx the parse tree
	 */
	enterDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.declarationSpecifier`.
	 * @param ctx the parse tree
	 */
	exitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	enterInitDeclarator?: (ctx: InitDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.initDeclarator`.
	 * @param ctx the parse tree
	 */
	exitInitDeclarator?: (ctx: InitDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.arraySpecifier`.
	 * @param ctx the parse tree
	 */
	enterArraySpecifier?: (ctx: ArraySpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.arraySpecifier`.
	 * @param ctx the parse tree
	 */
	exitArraySpecifier?: (ctx: ArraySpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx the parse tree
	 */
	enterDirectDeclarator?: (ctx: DirectDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.directDeclarator`.
	 * @param ctx the parse tree
	 */
	exitDirectDeclarator?: (ctx: DirectDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.nestedParenthesesBlock`.
	 * @param ctx the parse tree
	 */
	enterNestedParenthesesBlock?: (ctx: NestedParenthesesBlockContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.nestedParenthesesBlock`.
	 * @param ctx the parse tree
	 */
	exitNestedParenthesesBlock?: (ctx: NestedParenthesesBlockContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.parameterTypeList`.
	 * @param ctx the parse tree
	 */
	enterParameterTypeList?: (ctx: ParameterTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.parameterTypeList`.
	 * @param ctx the parse tree
	 */
	exitParameterTypeList?: (ctx: ParameterTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 */
	exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.initializerList`.
	 * @param ctx the parse tree
	 */
	enterInitializerList?: (ctx: InitializerListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.initializerList`.
	 * @param ctx the parse tree
	 */
	exitInitializerList?: (ctx: InitializerListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.designation`.
	 * @param ctx the parse tree
	 */
	enterDesignation?: (ctx: DesignationContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.designation`.
	 * @param ctx the parse tree
	 */
	exitDesignation?: (ctx: DesignationContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.designatorList`.
	 * @param ctx the parse tree
	 */
	enterDesignatorList?: (ctx: DesignatorListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.designatorList`.
	 * @param ctx the parse tree
	 */
	exitDesignatorList?: (ctx: DesignatorListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.designator`.
	 * @param ctx the parse tree
	 */
	enterDesignator?: (ctx: DesignatorContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.designator`.
	 * @param ctx the parse tree
	 */
	exitDesignator?: (ctx: DesignatorContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	enterLabeledStatement?: (ctx: LabeledStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.labeledStatement`.
	 * @param ctx the parse tree
	 */
	exitLabeledStatement?: (ctx: LabeledStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.compoundStatement`.
	 * @param ctx the parse tree
	 */
	exitCompoundStatement?: (ctx: CompoundStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	enterBlockItemList?: (ctx: BlockItemListContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	exitBlockItemList?: (ctx: BlockItemListContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.blockItem`.
	 * @param ctx the parse tree
	 */
	enterBlockItem?: (ctx: BlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.blockItem`.
	 * @param ctx the parse tree
	 */
	exitBlockItem?: (ctx: BlockItemContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectionStatement?: (ctx: SelectionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.selectionStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectionStatement?: (ctx: SelectionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	enterIterationStatement?: (ctx: IterationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.iterationStatement`.
	 * @param ctx the parse tree
	 */
	exitIterationStatement?: (ctx: IterationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx the parse tree
	 */
	enterJumpStatement?: (ctx: JumpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.jumpStatement`.
	 * @param ctx the parse tree
	 */
	exitJumpStatement?: (ctx: JumpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.translationUnit`.
	 * @param ctx the parse tree
	 */
	enterTranslationUnit?: (ctx: TranslationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.translationUnit`.
	 * @param ctx the parse tree
	 */
	exitTranslationUnit?: (ctx: TranslationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	enterExternalItem?: (ctx: ExternalItemContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.externalItem`.
	 * @param ctx the parse tree
	 */
	exitExternalItem?: (ctx: ExternalItemContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `KipperParser.endOfItem`.
	 * @param ctx the parse tree
	 */
	enterEndOfItem?: (ctx: EndOfItemContext) => void;
	/**
	 * Exit a parse tree produced by `KipperParser.endOfItem`.
	 * @param ctx the parse tree
	 */
	exitEndOfItem?: (ctx: EndOfItemContext) => void;
}

