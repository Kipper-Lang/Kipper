/*
 * The Antlr4 Grammar file for the Kipper Parser.
 */

parser grammar KipperParser;

options {
  tokenVocab=KipperLexer;
  contextSuperClass=KipperParserRuleContext;
  superClass=KipperParserBase;
}

@parser::header {
	// Import the required class for the ctx super class, as well as the 'ASTKind' type defining all possible syntax
	// kind values.
	import { KipperParserRuleContext, ParseRuleKindMapping, ASTKind } from "..";
	import KipperParserBase from "./base/KipperParserBase";
}

// Entry Point for an entire file
compilationUnit
    :   translationUnit? EOF
    ;

translationUnit
    :   externalItem+
    ;

externalItem
    :   blockItemList # externalBlockItem
    ;

blockItemList
    :   blockItem+
    ;

blockItem
    :   (statement | declaration | SemiColon)
    ;

// -- Declarations

declaration
    :   variableDeclaration SemiColon
    | 	functionDeclaration SemiColon?
    ;

functionDeclaration
	:	'def' declarator '(' parameterList? ')' '->' typeSpecifierExpression compoundStatement?
	;

variableDeclaration
	:	storageTypeSpecifier initDeclarator
	;

storageTypeSpecifier
    :   'var'
    |   'const'
    ;

declarator
    :   directDeclarator
    ;

directDeclarator
    :   Identifier
    ;

initDeclarator
    :   declarator ':' typeSpecifierExpression ('=' initializer)?
    ;

parameterList
    :   parameterDeclaration (',' parameterDeclaration)*
    // Note: Args and Kwargs, like in Python will be added later
    ;

parameterDeclaration
    :   declarator ':' typeSpecifierExpression
    ;

initializer
    :   assignmentExpression
    ;

// -- Statements

statement
    :   expressionStatement
    |   selectionStatement
    |   iterationStatement
    |   jumpStatement
    | 	returnStatement
    |	compoundStatement
    ;

compoundStatement
    :   {this.notInsideExpressionStatement()}? '{' blockItemList? '}'
    ;

expressionStatement
    :   {this.enterExpressionStatement()} expression SemiColon {this.exitExpressionStatement()}
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
	locals[_forDeclaration: boolean = false, _forCondition: boolean = false, _forIterationExp: boolean = false]
	:	'for' '('
		((variableDeclaration | expression) { _localctx._forDeclaration = true })? SemiColon
		(expression { _localctx._forCondition = true })? SemiColon
		(expression { _localctx._forIterationExp = true })?
		')' statement
	;

whileLoopIterationStatement
	:	'while' '(' expression ')' statement
	;

doWhileLoopIterationStatement
	:	'do' statement 'while' '(' expression ')' SemiColon
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
    |   arrayPrimaryExpression
    |   objectPrimaryExpression
    |   boolPrimaryExpression
    | 	identifierPrimaryExpression
    |   stringPrimaryExpression
    |   fStringPrimaryExpression
    |   numberPrimaryExpression
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

identifierOrStringPrimaryExpression
	:	identifier
	|	stringPrimaryExpression
	;

stringPrimaryExpression
	:	SingleQuoteStringLiteral | DoubleQuoteStringLiteral
	;

fStringPrimaryExpression
	:	FStringSingleQuoteStart fStringSingleQuoteAtom* FStringSingleQuoteEnd
	|   FStringDoubleQuoteStart fStringDoubleQuoteAtom* FStringDoubleQuoteEnd
	;

fStringSingleQuoteAtom
	: 	FStringSingleQuoteAtom
	|	FStringExpStart expression? FStringExpEnd
	;

fStringDoubleQuoteAtom
	: 	FStringDoubleQuoteAtom
	|	FStringExpStart expression? FStringExpEnd
	;

numberPrimaryExpression
	:	IntegerConstant | FloatingConstant
	;

arrayPrimaryExpression
	:	'[' (expression (',' expression)*)? ','? ']'
	;

objectPrimaryExpression
	:	'{' (objectProperty (',' objectProperty)*)? ','? '}'
	;

objectProperty
	:	identifierOrStringPrimaryExpression ':' expression
	;

voidOrNullOrUndefinedPrimaryExpression
	:	Void | Null | Undefined
	;

// Member Access Expressions and function call expressions are a special type of expression, because they can be
// chained together and as such are mutually recursive with themselves. Since Antlr4 doesn't properly implement
// left-recursion, except in direct left recursion, both memeber access expressions and function call expressions
// need to have their own mutual rule.
//
// As a result and to prevent the need for a common AST class implementing both, they need special handling, which
// comes in the form of a special '_labelASTKind' property on the rule context, which defines which AST class should
// implement the rule context.
//
// Note: All AST identifier numbers are stored in the 'ParseRuleKindMapping' object.
computedPrimaryExpression
	locals[_labelASTKind: ASTKind | undefined]
	: 	primaryExpression # passOncomputedPrimaryExpression
	|	computedPrimaryExpression '(' argumentExpressionList? ')' { _localctx._labelASTKind = ParseRuleKindMapping.RULE_functionCallExpression } # functionCallExpression
	|	'call' computedPrimaryExpression '(' argumentExpressionList? ')' { _localctx._labelASTKind = ParseRuleKindMapping.RULE_functionCallExpression } # explicitCallFunctionCallExpression
	|	computedPrimaryExpression dotNotation { _localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression } # dotNotationMemberAccessExpression
	|	computedPrimaryExpression bracketNotation { _localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression } # bracketNotationMemberAccessExpression
	|	computedPrimaryExpression sliceNotation { _localctx._labelASTKind = ParseRuleKindMapping.RULE_memberAccessExpression } # sliceNotationMemberAccessExpression
	;

argumentExpressionList
    :   assignmentExpression (',' assignmentExpression)*
    ;

dotNotation
	:	'.' identifier
	;

bracketNotation
	:   '[' expression ']'
    ;

sliceNotation
	locals[sliceStart: boolean = false, sliceEnd: boolean = false]
	:	'[' (expression { _localctx.sliceStart = true })? ':' (expression { _localctx.sliceEnd = true })? ']'
	;

postfixExpression
    :   computedPrimaryExpression // Pass-on (Not matching rule)
    |   incrementOrDecrementPostfixExpression // Strictly speaking also an unary expression
    ;

incrementOrDecrementPostfixExpression
	:	computedPrimaryExpression incrementOrDecrementOperator
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
    |   unaryExpression 'as' typeSpecifierExpression #actualCastOrConvertExpression
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
    |   computedPrimaryExpression assignmentOperator assignmentExpression # actualAssignmentExpression
    ;

assignmentOperator
    :   '=' | '*=' | '/=' | '%=' | '+=' | '-='
    ;

expression
    :   assignmentExpression (',' assignmentExpression)* // Comma-separated expressions
    ;

typeSpecifierExpression
    :   identifierTypeSpecifierExpression | genericTypeSpecifierExpression | typeofTypeSpecifierExpression
    ;

identifierTypeSpecifierExpression
	:	typeSpecifierIdentifier
	;

genericTypeSpecifierExpression
	:	typeSpecifierIdentifier '<' typeSpecifierIdentifier '>'
	;

typeofTypeSpecifierExpression
	:	'typeof' '(' typeSpecifierIdentifier ')'
	;

typeSpecifierIdentifier
	:	(Identifier | 'null' | 'undefined' | 'void')
	;
