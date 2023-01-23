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
	RULE_declaration: 3,
	RULE_variableDeclaration: 4,
	RULE_functionDeclaration: 5,
	RULE_declarator: 6,
	RULE_directDeclarator: 7,
	RULE_storageTypeSpecifier: 8,
	RULE_initDeclarator: 9,
	RULE_parameterList: 10,
	RULE_parameterDeclaration: 11,
	RULE_initializer: 12,
	RULE_statement: 13,
	RULE_compoundStatement: 14,
	RULE_blockItemList: 15,
	RULE_blockItem: 16,
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
	RULE_forDeclaration: 27,
	RULE_forExpression: 28,
	RULE_jumpStatement: 29,
	RULE_returnStatement: 30,
	RULE_primaryExpression: 31,
	RULE_tangledPrimaryExpression: 32,
	RULE_boolPrimaryExpression: 33,
	RULE_identifierPrimaryExpression: 34,
	RULE_identifier: 35,
	RULE_stringPrimaryExpression: 36,
	RULE_fStringPrimaryExpression: 37,
	RULE_numberPrimaryExpression: 38,
	RULE_arrayLiteralPrimaryExpression: 39,
	RULE_voidOrNullOrUndefinedPrimaryExpression: 40,
	RULE_computedPrimaryExpression: 41,
	RULE_argumentExpressionList: 42,
	RULE_dotNotation: 43,
	RULE_bracketNotation: 44,
	RULE_sliceNotation: 45,
	RULE_postfixExpression: 46,
	RULE_incrementOrDecrementPostfixExpression: 47,
	RULE_unaryExpression: 48,
	RULE_incrementOrDecrementUnaryExpression: 49,
	RULE_operatorModifiedUnaryExpression: 50,
	RULE_incrementOrDecrementOperator: 51,
	RULE_unaryOperator: 52,
	RULE_castOrConvertExpression: 53,
	RULE_multiplicativeExpression: 54,
	RULE_additiveExpression: 55,
	RULE_relationalExpression: 56,
	RULE_equalityExpression: 57,
	RULE_logicalAndExpression: 58,
	RULE_logicalOrExpression: 59,
	RULE_conditionalExpression: 60,
	RULE_assignmentExpression: 61,
	RULE_assignmentOperator: 62,
	RULE_expression: 63,
	RULE_typeSpecifier: 64,
	RULE_identifierTypeSpecifier: 65,
	RULE_genericTypeSpecifier: 66,
	RULE_typeofTypeSpecifier: 67,
	RULE_typeSpecifierIdentifier: 68,
	// Labelled rules, which don't have a corresponding identifier number in KipperParser.
	RULE_memberAccessExpression: 69, // -> See 'computedPrimaryExpression'
	RULE_functionCallExpression: 70, // -> See 'computedPrimaryExpression'
} as const;

/**
 * Union type of every possible {@link ParserASTMapping AST kind number} mapped to a KipperParser rule.
 *
 * Not every number contained here is mapped to a constructable AST node. Some may be only used for 
 * internal purposes inside the parser. For completion’s sake, all numbers are listed here regardless.
 * @since 0.10.0
 */
export type ParserASTMapSyntaxKind = typeof ParserASTMapping[keyof typeof ParserASTMapping];
