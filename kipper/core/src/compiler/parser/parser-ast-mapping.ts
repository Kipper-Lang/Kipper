/**
 * Mappings for KipperParser rules to AST nodes. This is used to map the parse tree to the AST.
 * @since 0.10.0
 */

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
export const ParserASTMapping = {
	// Standard rules copied from KipperParser
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
	RULE_forCondition: 26,
	RULE_jumpStatement: 27,
	RULE_returnStatement: 28,
	RULE_primaryExpression: 29,
	RULE_tangledPrimaryExpression: 30,
	RULE_boolPrimaryExpression: 31,
	RULE_identifierPrimaryExpression: 32,
	RULE_identifier: 33,
	RULE_stringPrimaryExpression: 34,
	RULE_fStringPrimaryExpression: 35,
	RULE_numberPrimaryExpression: 36,
	RULE_arrayLiteralPrimaryExpression: 37,
	RULE_voidOrNullOrUndefinedPrimaryExpression: 38,
	RULE_computedPrimaryExpression: 39,
	RULE_argumentExpressionList: 40,
	RULE_dotNotation: 41,
	RULE_bracketNotation: 42,
	RULE_sliceNotation: 43,
	RULE_postfixExpression: 44,
	RULE_incrementOrDecrementPostfixExpression: 45,
	RULE_unaryExpression: 46,
	RULE_incrementOrDecrementUnaryExpression: 47,
	RULE_operatorModifiedUnaryExpression: 48,
	RULE_incrementOrDecrementOperator: 49,
	RULE_unaryOperator: 50,
	RULE_castOrConvertExpression: 51,
	RULE_multiplicativeExpression: 52,
	RULE_additiveExpression: 53,
	RULE_relationalExpression: 54,
	RULE_equalityExpression: 55,
	RULE_logicalAndExpression: 56,
	RULE_logicalOrExpression: 57,
	RULE_conditionalExpression: 58,
	RULE_assignmentExpression: 59,
	RULE_assignmentOperator: 60,
	RULE_expression: 61,
	RULE_typeSpecifier: 62,
	RULE_identifierTypeSpecifier: 63,
	RULE_genericTypeSpecifier: 64,
	RULE_typeofTypeSpecifier: 65,
	RULE_typeSpecifierIdentifier: 66,
	// Labelled rules, which don't have a corresponding identifier number in KipperParser.
	RULE_memberAccessExpression: 67, // -> See 'computedPrimaryExpression'
	RULE_functionCallExpression: 68, // -> See 'computedPrimaryExpression'
} as const;

/**
 * Union type of every possible {@link ParserASTMapping AST kind number} mapped to a KipperParser rule.
 *
 * Not every number contained here is mapped to a constructable AST node. Some may be only used for
 * internal purposes inside the parser. For completion’s sake, all numbers are listed here regardless.
 * @since 0.10.0
 */
export type ASTKind = typeof ParserASTMapping[keyof typeof ParserASTMapping];
