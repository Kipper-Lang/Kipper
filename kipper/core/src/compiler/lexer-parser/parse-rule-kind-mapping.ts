/**
 * Mappings for KipperParser rules to AST nodes. This is used to map the parse tree to the AST.
 * @since 0.10.0
 */
import type {InverseMap} from "../../tools/types";
import {inverseMap} from "../../tools";
import {KipperParser} from "./antlr";

/**
 * A mapping object which maps the KipperParser rules to an AST syntax kind number and in extension with the
 * {@link ASTNodeFactory} factories to an AST node class implementation.
 *
 * This mapping is required, since even if the {@link KipperParser} implements numbers for each rule, labelled rules
 * are ignored and the parent rule index is used instead. This means that the rule index is not unique and cannot be
 * used for identifying the AST node class for a labelled rule. As such we need a new mapping for the AST generation.
 *
 * Not every number contained here is mapped to a constructable AST node. Some may be only used for
 * internal purposes inside the parser. For completion’s sake, all numbers are listed here regardless.
 * @since 0.10.0
 */
export const ParseRuleKindMapping = {
	RULE_compilationUnit: KipperParser.RULE_compilationUnit,
	RULE_translationUnit: KipperParser.RULE_translationUnit,
	RULE_externalItem: KipperParser.RULE_externalItem,
	RULE_blockItemList: KipperParser.RULE_blockItemList,
	RULE_blockItem: KipperParser.RULE_blockItem,
	RULE_declaration: KipperParser.RULE_declaration,
	RULE_variableDeclaration: KipperParser.RULE_variableDeclaration,
	RULE_storageTypeSpecifier: KipperParser.RULE_storageTypeSpecifier,
	RULE_initDeclarator: KipperParser.RULE_initDeclarator,
	RULE_initializer: KipperParser.RULE_initializer,
	RULE_declarator: KipperParser.RULE_declarator,
	RULE_directDeclarator: KipperParser.RULE_directDeclarator,
	RULE_functionDeclaration: KipperParser.RULE_functionDeclaration,
	RULE_parameterList: KipperParser.RULE_parameterList,
	RULE_parameterDeclaration: KipperParser.RULE_parameterDeclaration,
	RULE_interfaceDeclaration: KipperParser.RULE_interfaceDeclaration,
	RULE_interfacePropertyDeclaration: KipperParser.RULE_interfacePropertyDeclaration,
	RULE_interfaceMethodDeclaration: KipperParser.RULE_interfaceMethodDeclaration,
	RULE_classDeclaration: KipperParser.RULE_classDeclaration,
	RULE_classPropertyDeclaration: KipperParser.RULE_classPropertyDeclaration,
	RULE_classMethodDeclaration: KipperParser.RULE_classMethodDeclaration,
	RULE_classConstructorDeclaration: KipperParser.RULE_classConstructorDeclaration,
	RULE_statement: KipperParser.RULE_statement,
	RULE_compoundStatement: KipperParser.RULE_compoundStatement,
	RULE_expressionStatement: KipperParser.RULE_expressionStatement,
	RULE_selectionStatement: KipperParser.RULE_selectionStatement,
	RULE_ifStatement: KipperParser.RULE_ifStatement,
	RULE_switchStatement: KipperParser.RULE_switchStatement,
	RULE_switchLabeledStatement: KipperParser.RULE_switchLabeledStatement,
	RULE_iterationStatement: KipperParser.RULE_iterationStatement,
	RULE_forLoopIterationStatement: KipperParser.RULE_forLoopIterationStatement,
	RULE_whileLoopIterationStatement: KipperParser.RULE_whileLoopIterationStatement,
	RULE_doWhileLoopIterationStatement: KipperParser.RULE_doWhileLoopIterationStatement,
	RULE_jumpStatement: KipperParser.RULE_jumpStatement,
	RULE_returnStatement: KipperParser.RULE_returnStatement,
	RULE_primaryExpression: KipperParser.RULE_primaryExpression,
	RULE_lambdaPrimaryExpression: KipperParser.RULE_lambdaPrimaryExpression,
	RULE_tangledPrimaryExpression: KipperParser.RULE_tangledPrimaryExpression,
	RULE_boolPrimaryExpression: KipperParser.RULE_boolPrimaryExpression,
	RULE_identifierPrimaryExpression: KipperParser.RULE_identifierPrimaryExpression,
	RULE_identifier: KipperParser.RULE_identifier,
	RULE_identifierOrStringPrimaryExpression: KipperParser.RULE_identifierOrStringPrimaryExpression,
	RULE_stringPrimaryExpression: KipperParser.RULE_stringPrimaryExpression,
	RULE_fStringPrimaryExpression: KipperParser.RULE_fStringPrimaryExpression,
	RULE_fStringSingleQuoteAtom: KipperParser.RULE_fStringSingleQuoteAtom,
	RULE_fStringDoubleQuoteAtom: KipperParser.RULE_fStringDoubleQuoteAtom,
	RULE_numberPrimaryExpression: KipperParser.RULE_numberPrimaryExpression,
	RULE_arrayPrimaryExpression: KipperParser.RULE_arrayPrimaryExpression,
	RULE_objectPrimaryExpression: KipperParser.RULE_objectPrimaryExpression,
	RULE_objectProperty: KipperParser.RULE_objectProperty,
	RULE_voidOrNullOrUndefinedPrimaryExpression: KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression,
	RULE_computedPrimaryExpression: KipperParser.RULE_computedPrimaryExpression,
	RULE_argumentExpressionList: KipperParser.RULE_argumentExpressionList,
	RULE_dotNotation: KipperParser.RULE_dotNotation,
	RULE_bracketNotation: KipperParser.RULE_bracketNotation,
	RULE_sliceNotation: KipperParser.RULE_sliceNotation,
	RULE_postfixExpression: KipperParser.RULE_postfixExpression,
	RULE_incrementOrDecrementPostfixExpression: KipperParser.RULE_incrementOrDecrementPostfixExpression,
	RULE_unaryExpression: KipperParser.RULE_unaryExpression,
	RULE_incrementOrDecrementUnaryExpression: KipperParser.RULE_incrementOrDecrementUnaryExpression,
	RULE_operatorModifiedUnaryExpression: KipperParser.RULE_operatorModifiedUnaryExpression,
	RULE_incrementOrDecrementOperator: KipperParser.RULE_incrementOrDecrementOperator,
	RULE_unaryOperator: KipperParser.RULE_unaryOperator,
	RULE_castOrConvertExpression: KipperParser.RULE_castOrConvertExpression,
	RULE_convertExpression: KipperParser.RULE_convertExpression,
	RULE_castExpression: KipperParser.RULE_castExpression,
	RULE_forceCastExpression: KipperParser.RULE_forceCastExpression,
	RULE_tryCastExpression: KipperParser.RULE_tryCastExpression,
	RULE_multiplicativeExpression: KipperParser.RULE_multiplicativeExpression,
	RULE_additiveExpression: KipperParser.RULE_additiveExpression,
	RULE_bitwiseShiftExpression: KipperParser.RULE_bitwiseShiftExpression,
	RULE_bitwiseShiftOperators: KipperParser.RULE_bitwiseShiftOperators,
	RULE_relationalExpression: KipperParser.RULE_relationalExpression,
	RULE_equalityExpression: KipperParser.RULE_equalityExpression,
	RULE_bitwiseAndExpression: KipperParser.RULE_bitwiseAndExpression,
	RULE_bitwiseXorExpression: KipperParser.RULE_bitwiseXorExpression,
	RULE_bitwiseOrExpression: KipperParser.RULE_bitwiseOrExpression,
	RULE_logicalAndExpression: KipperParser.RULE_logicalAndExpression,
	RULE_logicalOrExpression: KipperParser.RULE_logicalOrExpression,
	RULE_conditionalExpression: KipperParser.RULE_conditionalExpression,
	RULE_assignmentExpression: KipperParser.RULE_assignmentExpression,
	RULE_typeofExpression: KipperParser.RULE_typeofExpression,
	RULE_assignmentOperator: KipperParser.RULE_assignmentOperator,
	RULE_expression: KipperParser.RULE_expression,
	RULE_typeSpecifierExpression: KipperParser.RULE_typeSpecifierExpression,
	RULE_identifierTypeSpecifierExpression: KipperParser.RULE_identifierTypeSpecifierExpression,
	RULE_genericTypeSpecifierExpression: KipperParser.RULE_genericTypeSpecifierExpression,
	RULE_typeofTypeSpecifierExpression: KipperParser.RULE_typeofTypeSpecifierExpression,
	RULE_typeSpecifierIdentifier: KipperParser.RULE_typeSpecifierIdentifier,
	RULE_instanceofExpression: KipperParser.RULE_instanceOfExpression,
	RULE_matchesExpression: KipperParser.RULE_matchesExpression,
	// Labelled rules, which don't have a corresponding identifier number in KipperParser.
	RULE_memberAccessExpression: 1001, // -> See 'computedPrimaryExpression'
	RULE_functionCallExpression: 1002, // -> See 'computedPrimaryExpression'
	RULE_newInstantiationExpression: 1003, // -> See 'computedPrimaryExpression'
} as const;

/**
 * Inverse mapping of {@link ParseRuleKindMapping} which maps the AST syntax kind number to the KipperParser rule.
 * @since 0.11.0
 */
export const KindParseRuleMapping = <InverseMap<typeof ParseRuleKindMapping>>inverseMap(ParseRuleKindMapping);

/**
 * Union type of every possible {@link ParseRuleKindMapping AST kind number} mapped to a KipperParser rule.
 *
 * Not every number contained here is mapped to a constructable AST node. Some may be only used for
 * internal purposes inside the parser. For completion’s sake, all numbers are listed here regardless.
 * @since 0.10.0
 */
export type ASTKind = (typeof ParseRuleKindMapping)[keyof typeof ParseRuleKindMapping];
