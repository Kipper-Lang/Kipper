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
	RULE_jumpStatement: 26,
	RULE_returnStatement: 27,
	RULE_primaryExpression: 28,
	RULE_tangledPrimaryExpression: 29,
	RULE_boolPrimaryExpression: 30,
	RULE_identifierPrimaryExpression: 31,
	RULE_identifier: 32,
	RULE_stringPrimaryExpression: 33,
	RULE_fStringPrimaryExpression: 34,
	RULE_numberPrimaryExpression: 35,
	RULE_arrayLiteralPrimaryExpression: 36,
	RULE_voidOrNullOrUndefinedPrimaryExpression: 37,
	RULE_computedPrimaryExpression: 38,
	RULE_argumentExpressionList: 39,
	RULE_dotNotation: 40,
	RULE_bracketNotation: 41,
	RULE_sliceNotation: 42,
	RULE_postfixExpression: 43,
	RULE_incrementOrDecrementPostfixExpression: 44,
	RULE_unaryExpression: 45,
	RULE_incrementOrDecrementUnaryExpression: 46,
	RULE_operatorModifiedUnaryExpression: 47,
	RULE_incrementOrDecrementOperator: 48,
	RULE_unaryOperator: 49,
	RULE_castOrConvertExpression: 50,
	RULE_multiplicativeExpression: 51,
	RULE_additiveExpression: 52,
	RULE_relationalExpression: 53,
	RULE_equalityExpression: 54,
	RULE_logicalAndExpression: 55,
	RULE_logicalOrExpression: 56,
	RULE_conditionalExpression: 57,
	RULE_assignmentExpression: 58,
	RULE_assignmentOperator: 59,
	RULE_expression: 60,
	RULE_typeSpecifier: 61,
	RULE_identifierTypeSpecifier: 62,
	RULE_genericTypeSpecifier: 63,
	RULE_typeofTypeSpecifier: 64,
	RULE_typeSpecifierIdentifier: 65,
	// Labelled rules, which don't have a corresponding identifier number in KipperParser.
	RULE_memberAccessExpression: 66, // -> See 'computedPrimaryExpression'
	RULE_functionCallExpression: 67, // -> See 'computedPrimaryExpression'
} as const;

/**
 * Union type of every possible {@link ParserASTMapping AST kind number} mapped to a KipperParser rule.
 *
 * Not every number contained here is mapped to a constructable AST node. Some may be only used for
 * internal purposes inside the parser. For completion’s sake, all numbers are listed here regardless.
 * @since 0.10.0
 */
export type ASTKind = typeof ParserASTMapping[keyof typeof ParserASTMapping];
