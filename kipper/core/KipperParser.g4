/*
 * The Antlr4 Grammar file for the Kipper Parser.
 */

parser grammar KipperParser;

options {
  tokenVocab=KipperLexer;
}

// Entry Point for an entire file
compilationUnit
    :   translationUnit? EOF
    ;

translationUnit
    :   (externalItem | SemiColon)+
    ;

externalItem
    :   blockItemList # externalBlockItem
    ;

// -- Declarations

declaration
    :   storageTypeSpecifier initDeclarator SemiColon # variableDeclaration
    |	'def' declarator '(' parameterList? ')' '->' typeSpecifier (compoundStatement | SemiColon) # functionDeclaration
    ;

declarator
    :   directDeclarator
    ;

directDeclarator
    :   Identifier
    ;

storageTypeSpecifier
    :   'var'
    |   'const'
    ;

initDeclarator
    :   declarator ':' typeSpecifier ('=' initializer)?
    ;

// TODO! Implement the following type specifiers as expressions
typeSpecifier
    :   typeSpecifierIdentifier # identifierTypeSpecifier // for simple type identifiers, like 'num'
    |   typeSpecifierIdentifier '<' typeSpecifierIdentifier '>' # genericTypeSpecifier // for lists
    |   'typeof' '('  typeSpecifierIdentifier  ')' # typeofTypeSpecifier // typeof another variable
    ;

typeSpecifierIdentifier
	:	(Identifier | 'null' | 'undefined' | 'void')
	;

parameterList
    :   parameterDeclaration (',' parameterDeclaration)*
    // Note: Args and Kwargs, like in Python will be added later
    ;

parameterDeclaration
    :   declarator ':' typeSpecifier
    ;

initializer
    :   assignmentExpression
    ;

// -- Statements

statement
    :   compoundStatement
    |   expressionStatement
    |   selectionStatement
    |   iterationStatement
    |   jumpStatement
    | 	returnStatement
    ;

compoundStatement
    :   '{' blockItemList? '}'
    ;

blockItemList
    :   blockItem+
    ;

blockItem
    :   (statement | declaration)
    ;

expressionStatement
    :   expression? SemiColon
    ;

selectionStatement
    :   'if' '(' expression ')' statement ('else' statement)? #ifStatement
    |   'switch' '(' expression ')' '{' (switchLabeledStatement)* '}' #switchStatement
    ;

switchLabeledStatement
    :   'case' expression ':' statement
    |   'default' ':' statement
    ;

iterationStatement
    :   For '(' forCondition ')' statement # ForLoopIterationStatement
    |   While '(' expression ')' statement # WhileLoopIterationStatement
    |   Do statement While '(' expression ')' SemiColon # DoWhileLoopIterationStatement
    ;

forCondition
	  :   (forDeclaration | expression?) SemiColon forExpression? SemiColon forExpression?
	  ;

forDeclaration
    :   storageTypeSpecifier initDeclarator
    ;

forExpression
    :   assignmentExpression (',' assignmentExpression )*
    ;

jumpStatement
    :   ('continue' | 'break') SemiColon
    ;

returnStatement
	: 	'return' expression? SemiColon
	;

// -- Expressions

primaryExpression // Primary expressions, which build up the rest of the more complex expressions
    :   tangledExpression # tangledPrimaryExpression
    |   boolLiteral #boolPrimaryExpression
    | 	identifier # identifierPrimaryExpression
    |   stringLiteral # stringPrimaryExpression
    |   fStringLiteral # fStringPrimaryExpression
    |   numberLiteral #numberPrimaryExpression
    |   arrayLiteral #arrayLiteralPrimaryExpression
    |	voidOrNullOrUndefined #voidOrNullOrUndefinedPrimaryExpression
    ;

tangledExpression
	:   '(' expression ')'
	;

identifier
	:	Identifier
	;

boolLiteral
	:	True | False
	;

stringLiteral
	:	SingleQuoteStringLiteral | DoubleQuoteStringLiteral
	;

fStringLiteral
	:	SingleQuoteFStringLiteral | DoubleQuoteFStringLiteral
	;

numberLiteral
	:	IntegerConstant | FloatingConstant
	;

arrayLiteral
	:	'[' (expression (',' expression)*)? ']'
	;

voidOrNullOrUndefined
	:	Void | Null | Undefined
	;

computedPrimaryExpression
    :	primaryExpression
    |	memberAccessExpression
    |	functionCallExpression
    ;

functionCallExpression
	:	'call'? primaryExpression '(' argumentExpressionList? ')'
	;

memberAccessExpression
	:	primaryExpression ('.' identifier)+ # dotNotationMemberAccessExpression
	| 	primaryExpression bracketNotation+ # bracketNotationMemberAccessExpression
	;

bracketNotation
	:   '[' expression ']'
    ;

postfixExpression
    :   computedPrimaryExpression #passOnPostfixExpression
    |   computedPrimaryExpression incrementOrDecrementOperator # incrementOrDecrementPostfixExpression // Strictly speaking also an unary expression
    ;

argumentExpressionList
    :   assignmentExpression (',' assignmentExpression)*
    ;

unaryExpression
    :   postfixExpression # passOnUnaryExpression
    |   incrementOrDecrementOperator postfixExpression # incrementOrDecrementUnaryExpression
    |   unaryOperator postfixExpression # operatorModifiedUnaryExpression
    ;

incrementOrDecrementOperator
    :   '++' |  '--'
    ;

unaryOperator
    :   '+' | '-' | '!'
    ;

castOrConvertExpression
    :   unaryExpression # passOnCastOrConvertExpression
    |   unaryExpression 'as' typeSpecifier # actualCastOrConvertExpression
    ;

multiplicativeExpression
    :   castOrConvertExpression # passOnMultiplicativeExpression
    |   multiplicativeExpression ('*'|'/'|'%'|'**') castOrConvertExpression # actualMultiplicativeExpression
    ;

additiveExpression
    :   multiplicativeExpression # passOnAdditiveExpression
    |   additiveExpression ('+'|'-') multiplicativeExpression # actualAdditiveExpression
    ;

relationalExpression
    :   additiveExpression # passOnRelationalExpression
    |   relationalExpression ('<'|'>'|'<='|'>=') additiveExpression # actualRelationalExpression
    ;

equalityExpression
    :   relationalExpression # passOnEqualityExpression
    |   equalityExpression ('=='| '!=') relationalExpression # actualEqualityExpression
    ;

logicalAndExpression
    :   equalityExpression # passOnLogicalAndExpression
    |   logicalAndExpression '&&' equalityExpression # actualLogicalAndExpression
    ;

logicalOrExpression
    :   logicalAndExpression # passOnLogicalOrExpression
    |   logicalOrExpression '||' logicalAndExpression # actualLogicalOrExpression
    ;

conditionalExpression
    :   logicalOrExpression # passOnConditionalExpression
    |   logicalOrExpression '?' conditionalExpression ':' conditionalExpression # actualConditionalExpression
    ;

assignmentExpression
    :   conditionalExpression # passOnAssignmentExpression
    |   primaryExpression assignmentOperator assignmentExpression # actualAssignmentExpression
    ;

assignmentOperator
    :   '=' | '*=' | '/=' | '%=' | '+=' | '-='
    ;

expression
    :   assignmentExpression (',' assignmentExpression)* // Comma-separated expressions
    ;
