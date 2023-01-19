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
    :   variableDeclaration | functionDeclaration
    ;

variableDeclaration
	:	storageTypeSpecifier initDeclarator SemiColon
	;

functionDeclaration
	:	'def' declarator '(' parameterList? ')' '->' typeSpecifier (compoundStatement | SemiColon)
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
    :   expression SemiColon
    ;

selectionStatement
    :	ifStatement | switchStatement
    ;

ifStatement
	:	'if' '(' expression ')' statement ('else' statement)?
	;

switchStatement
	:	'switch' '(' expression ')' '{' (switchLabeledStatement)* '}'
	;

switchLabeledStatement
    :   'case' expression ':' statement
    |   'default' ':' statement
    ;

iterationStatement
    :	forLoopIterationStatement
    |	whileLoopIterationStatement
    |	doWhileLoopIterationStatement
    ;

forLoopIterationStatement
	:	'for' '(' forCondition ')' statement
	;

whileLoopIterationStatement
	:	'while' '(' expression ')' statement
	;

doWhileLoopIterationStatement
	:	'do' statement 'while' '(' expression ')' SemiColon
	;

forCondition
	:	(forDeclaration | expression?) SemiColon forExpression? SemiColon forExpression?
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
    :   tangledPrimaryExpression
    |   boolPrimaryExpression
    | 	identifierPrimaryExpression
    |   stringPrimaryExpression
    |   fStringPrimaryExpression
    |   numberPrimaryExpression
    |   arrayLiteralPrimaryExpression
    |	voidOrNullOrUndefinedPrimaryExpression
    ;

tangledPrimaryExpression
	:   '(' expression ')'
	;

boolPrimaryExpression
	:	True | False
	;

identifierPrimaryExpression
	:	identifier
	;

identifier
	:	Identifier
	;

stringPrimaryExpression
	:	SingleQuoteStringLiteral | DoubleQuoteStringLiteral
	;

fStringPrimaryExpression
	:	SingleQuoteFStringLiteral | DoubleQuoteFStringLiteral
	;

numberPrimaryExpression
	:	IntegerConstant | FloatingConstant
	;

arrayLiteralPrimaryExpression
	:	'[' (expression (',' expression)*)? ']'
	;

voidOrNullOrUndefinedPrimaryExpression
	:	Void | Null | Undefined
	;

// Member Access Expression are a special type of expression, because they can be chained together and as such are
// mutually recursive with themselves and therefore can't be handled with regular expression rules
memberAccessExpression
	:	primaryExpression # passOnMemberAccessExpression
	|	memberAccessExpression ('.' identifier) # dotNotationMemberAccessExpression
	|	memberAccessExpression bracketNotation # bracketNotationMemberAccessExpression
	|	memberAccessExpression sliceNotation # sliceNotationMemberAccessExpression
	;

// Lowest level above 'primaryExpression', which represents member access and function call expressions
computedPrimaryExpression
    :	memberAccessExpression
    |	functionCallExpression
    ;

bracketNotation
	:   '[' expression ']'
    ;

sliceNotation
	:	'[' expression? ':' expression? ']'
	;

functionCallExpression
	:	'call'? memberAccessExpression '(' argumentExpressionList? ')'
	;

postfixExpression
    :   computedPrimaryExpression // Pass-on (Not matching rule)
    |   incrementOrDecrementPostfixExpression // Strictly speaking also an unary expression
    ;

incrementOrDecrementPostfixExpression
	:	computedPrimaryExpression incrementOrDecrementOperator
	;

argumentExpressionList
    :   assignmentExpression (',' assignmentExpression)*
    ;

unaryExpression
    :   postfixExpression // Pass-on (Not matching rule)
    |   incrementOrDecrementUnaryExpression
    |   operatorModifiedUnaryExpression
    ;

incrementOrDecrementUnaryExpression
	:	incrementOrDecrementOperator postfixExpression
	;

operatorModifiedUnaryExpression
	:	unaryOperator postfixExpression
	;

incrementOrDecrementOperator
    :   '++' |  '--'
    ;

unaryOperator
    :   '+' | '-' | '!'
    ;

castOrConvertExpression
    :   unaryExpression # passOnCastOrConvertExpression
    |   unaryExpression 'as' typeSpecifier #actualCastOrConvertExpression
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

// TODO! Implement the following type specifiers as expressions
typeSpecifier
    :   identifierTypeSpecifier | genericTypeSpecifier | typeofTypeSpecifier
    ;

identifierTypeSpecifier
	:	typeSpecifierIdentifier
	;

genericTypeSpecifier
	:	typeSpecifierIdentifier '<' typeSpecifierIdentifier '>'
	;

typeofTypeSpecifier
	:	'typeof' '(' typeSpecifierIdentifier ')'
	;

typeSpecifierIdentifier
	:	(Identifier | 'null' | 'undefined' | 'void')
	;
