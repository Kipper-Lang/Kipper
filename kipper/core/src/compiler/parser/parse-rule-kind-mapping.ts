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
	RULE_tangledPrimaryExpression: 29,
	RULE_boolPrimaryExpression: 30,
	RULE_identifierPrimaryExpression: 31,
	RULE_identifier: 32,
	RULE_identifierOrStringPrimaryExpression: 33,
	RULE_stringPrimaryExpression: 34,
	RULE_fStringPrimaryExpression: 35,
	RULE_fStringSingleQuoteAtom: 36,
	RULE_fStringDoubleQuoteAtom: 37,
	RULE_numberPrimaryExpression: 38,
	RULE_arrayPrimaryExpression: 39,
	RULE_objectPrimaryExpression: 40,
	RULE_objectProperty: 41,
	RULE_voidOrNullOrUndefinedPrimaryExpression: 42,
	RULE_computedPrimaryExpression: 43,
	RULE_argumentExpressionList: 44,
	RULE_dotNotation: 45,
	RULE_bracketNotation: 46,
	RULE_sliceNotation: 47,
	RULE_postfixExpression: 48,
	RULE_incrementOrDecrementPostfixExpression: 49,
	RULE_unaryExpression: 50,
	RULE_incrementOrDecrementUnaryExpression: 51,
	RULE_operatorModifiedUnaryExpression: 52,
	RULE_incrementOrDecrementOperator: 53,
	RULE_unaryOperator: 54,
	RULE_castOrConvertExpression: 55,
	RULE_multiplicativeExpression: 56,
	RULE_additiveExpression: 57,
	RULE_bitwiseShiftExpression: 58,
	RULE_bitwiseShiftOperators: 59,
	RULE_relationalExpression: 60,
	RULE_equalityExpression: 61,
	RULE_bitwiseAndExpression: 62,
	RULE_bitwiseXorExpression: 63,
	RULE_bitwiseOrExpression: 64,
	RULE_logicalAndExpression: 65,
	RULE_logicalOrExpression: 66,
	RULE_conditionalExpression: 67,
	RULE_assignmentExpression: 68,
	RULE_assignmentOperator: 69,
	RULE_expression: 70,
	RULE_typeSpecifierExpression: 71,
	RULE_identifierTypeSpecifierExpression: 72,
	RULE_genericTypeSpecifierExpression: 73,
	RULE_typeofTypeSpecifierExpression: 74,
	RULE_typeSpecifierIdentifier: 75,
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
