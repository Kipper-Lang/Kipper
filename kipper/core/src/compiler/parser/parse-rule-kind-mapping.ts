/**
 * Mappings for KipperParser rules to AST nodes. This is used to map the parse tree to the AST.
 * @since 0.10.0
 */
import type { InverseMap } from "../../tools/types";
import { inverseMap } from "../../tools";
import { KipperParser } from "./antlr";

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
	RULE_compilationUnit: 0,
	RULE_translationUnit: 1,
	RULE_externalItem: 2,
	RULE_blockItemList: 3,
	RULE_blockItem: 4,
	RULE_declaration: 5,
	RULE_functionDeclaration: 6,
	RULE_variableDeclaration: 7,
	RULE_storageTypeSpecifier: 8,
	RULE_declarator: 9,
	RULE_directDeclarator: 10,
	RULE_initDeclarator: 11,
	RULE_parameterList: 12,
	RULE_parameterDeclaration: 13,
	RULE_initializer: 14,
	RULE_statement: 15,
	RULE_compoundStatement: 16,
	RULE_expressionStatement: 17,
	RULE_selectionStatement: 18,
	RULE_ifStatement: 19,
	RULE_switchStatement: 20,
	RULE_switchLabeledStatement: 21,
	RULE_iterationStatement: 22,
	RULE_forLoopIterationStatement: 23,
	RULE_whileLoopIterationStatement: 24,
	RULE_doWhileLoopIterationStatement: 25,
	RULE_jumpStatement: 26,
	RULE_returnStatement: 27,
	RULE_primaryExpression: 28,
	RULE_lambdaExpression: 29,
	RULE_tangledPrimaryExpression: 30,
	RULE_boolPrimaryExpression: 31,
	RULE_identifierPrimaryExpression: 32,
	RULE_identifier: 33,
	RULE_identifierOrStringPrimaryExpression: 34,
	RULE_stringPrimaryExpression: 35,
	RULE_fStringPrimaryExpression: 36,
	RULE_fStringSingleQuoteAtom: 37,
	RULE_fStringDoubleQuoteAtom: 38,
	RULE_numberPrimaryExpression: 39,
	RULE_arrayPrimaryExpression: 40,
	RULE_objectPrimaryExpression: 41,
	RULE_objectProperty: 42,
	RULE_voidOrNullOrUndefinedPrimaryExpression: 43,
	RULE_computedPrimaryExpression: 44,
	RULE_argumentExpressionList: 45,
	RULE_dotNotation: 46,
	RULE_bracketNotation: 47,
	RULE_sliceNotation: 48,
	RULE_postfixExpression: 49,
	RULE_incrementOrDecrementPostfixExpression: 50,
	RULE_unaryExpression: 51,
	RULE_incrementOrDecrementUnaryExpression: 52,
	RULE_operatorModifiedUnaryExpression: 53,
	RULE_incrementOrDecrementOperator: 54,
	RULE_unaryOperator: 55,
	RULE_castOrConvertExpression: 56,
	RULE_multiplicativeExpression: 57,
	RULE_additiveExpression: 58,
	RULE_bitwiseShiftExpression: 59,
	RULE_bitwiseShiftOperators: 60,
	RULE_relationalExpression: 61,
	RULE_equalityExpression: 62,
	RULE_bitwiseAndExpression: 63,
	RULE_bitwiseXorExpression: 64,
	RULE_bitwiseOrExpression: 65,
	RULE_logicalAndExpression: 66,
	RULE_logicalOrExpression: 67,
	RULE_conditionalExpression: 68,
	RULE_assignmentExpression: 69,
	RULE_assignmentOperator: 70,
	RULE_expression: 71,
	RULE_typeSpecifierExpression: 72,
	RULE_identifierTypeSpecifierExpression: 73,
	RULE_genericTypeSpecifierExpression: 74,
	RULE_typeofTypeSpecifierExpression: 75,
	RULE_typeSpecifierIdentifier: 76,
	// Labelled rules, which don't have a corresponding identifier number in KipperParser.
	RULE_memberAccessExpression: 1001, // -> See 'computedPrimaryExpression'
	RULE_functionCallExpression: 1002, // -> See 'computedPrimaryExpression'
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
