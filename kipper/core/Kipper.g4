/*
 * The Antlr4 Grammar file for the Kipper programming language.
 */

grammar Kipper;

// Entry Point for an entire file
compilationUnit
    :   translationUnit? EOF
    ;

translationUnit
    :   (externalItem | endOfLine)+
    ;

externalItem
    :   functionDeclaration # externalFunctionDeclaration
    |   blockItem # externalBlockItem
    ;

functionDeclaration
    :   'def' declarator '(' (parameterTypeList)? ')' '->' typeSpecifier (compoundStatement | endOfLine)
    ;

endOfLine
    :   ';'
    ;

primaryExpression
    :   '(' assignmentExpression ')' # tangledPrimaryExpression
    |   (True | False) #boolPrimaryExpression
    | 	Identifier # identifierPrimaryExpression
    |   (SingleQuoteStringLiteral | DoubleQuoteStringLiteral) # stringPrimaryExpression
    |   (SingleQuoteFStringLiteral | DoubleQuoteFStringLiteral) # fStringPrimaryExpression
    |   (IntegerConstant | FloatingConstant) #numberPrimaryExpression
    |   '[' (constantExpression (',' constantExpression)*)? ']' #listPrimaryExpression
    |		('void' | 'null' | 'undefined') #voidOrNullOrUndefinedPrimaryExpression
    ;

postfixExpression
    :   primaryExpression #passOnPostfixExpression
    |   primaryExpression arraySpecifier+ #arraySpecifierPostfixExpression
    |   primaryExpression incrementOrDecrementOperator # incrementOrDecrementPostfixExpression
    |   'call'? primaryExpression '(' argumentExpressionList? ')' # functionCallPostfixExpression
    ;

arraySpecifier
    :   '[' expression ']'
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
    :   ('++' |  '--')
    ;

unaryOperator
    :   '+' | '-' | '!'
    ;

castOrConvertExpression
    :   unaryExpression # passOnCastOrConvertExpression
    |   unaryExpression 'as' typeSpecifier # actualCastOrConvertExpression // conversion function
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
    :   assignmentExpression (',' assignmentExpression)*
    ;

constantExpression
    :   conditionalExpression
    ;

declaration
    :   storageTypeSpecifier initDeclarator endOfLine
    ;

storageTypeSpecifier
    :   'var'
    |   'const'
    ;

declarationSpecifiers
    :   (declarationSpecifier)+
    ;

declarationSpecifier
    :   typeSpecifier
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
		:		(Identifier | 'null' | 'undefined' | 'void')
		;

declarator
    :   directDeclarator
    ;

directDeclarator
    :   Identifier
    ;

parameterTypeList
    :   parameterList /* Args and Kwargs, like in Python will be added later */
    ;

parameterList
    :   parameterDeclaration (',' parameterDeclaration)*
    ;

parameterDeclaration
    :   declarator ':' declarationSpecifiers
    ;

initializer
    :   assignmentExpression
    ;

statement
    :   compoundStatement
    |   expressionStatement
    |   selectionStatement
    |   iterationStatement
    |   jumpStatement
    | 	returnStatement
    ;

compoundStatement
    :   '{' blockItemList?'}'
    ;

blockItemList
    :   blockItem+
    ;

blockItem
    :   (statement | declaration)
    ;

expressionStatement
    :   expression? endOfLine
    ;

selectionStatement
    :   'if' '(' expression ')' statement ('else' statement)? #ifStatement
    |   'switch' '(' expression ')' '{' (switchLabeledStatement)* '}' #switchStatement
    ;

switchLabeledStatement
    :   'case' constantExpression ':' statement
    |   'default' ':' statement
    ;

iterationStatement
    :   For '(' forCondition ')' statement # ForLoopIterationStatement
    |   While '(' expression ')' statement # WhileLoopIterationStatement
    |   Do statement While '(' expression ')' endOfLine # DoWhileLoopIterationStatement
    ;

forCondition
	  :   (forDeclaration | expression?) endOfLine forExpression? endOfLine forExpression?
	  ;

forDeclaration
    :   storageTypeSpecifier initDeclarator
    ;

forExpression
    :   assignmentExpression (',' assignmentExpression )*
    ;

jumpStatement
    :   ('continue' | 'break') endOfLine
    ;

returnStatement
		: 	'return' expression? endOfLine
		;

// Lexer Rules (tokens / token rules)

// const / var
Const : 'const';
Var : 'var';

// conversion
As : 'as';

// spread operator
Spread : '...';

// switch
Switch : 'switch';
Case : 'case';
Default : 'default';

// switch / loop : 'break'
Break : 'break';

// loop: 'continue'
Continue : 'continue';

// do-while / while loop
Do : 'do';
While : 'while';

// selection statement - if
If : 'if';
Else : 'else';

// for - loop
For : 'for';

// Enum Variable
Enum : 'enum';

// function-related
DefFunc: 'def';
Return : 'return';
CallFunc : 'call';

// boolean constants
True: 'true';
False: 'false';

// typeof operator
Typeof : 'typeof';

// Constant undefined type and null object
Null : 'null';
Undefined : 'undefined';

// Punctuators
LeftParen : '(';
RightParen : ')';
LeftBracket : '[';
RightBracket : ']';
LeftBrace : '{';
RightBrace : '}';

// Mathematical operators
Plus : '+';
PlusPlus : '++';
Minus : '-';
MinusMinus : '--';
Star : '*';
Div : '/';
Mod : '%';
PowerTo : '**';

// Boolish Logical Operations
AndAnd : '&&';
OrOr : '||';
Not : '!';

// General comma
Comma : ',';

// Value assign
Assign : '=';

// '*=' | '/=' | '%=' | '+=' | '-=' |
StarAssign : '*=';
DivAssign : '/=';
ModAssign : '%=';
PlusAssign : '+=';
MinusAssign : '-=';

// Value Comparison
Equal : '==';
NotEqual : '!=';
Less : '<';
LessEqual : '<=';
Greater : '>';
GreaterEqual : '>=';

// property accessing
Dot : '.';

Identifier
    :   IdentifierNondigit
        (   IdentifierNondigit
        |   Digit
        )*
    ;

fragment
ExtensionTaskBlock
    :   '{' [\u0000-\uFFFE]* '}'
    ;

fragment
IdentifierNondigit
    :   Nondigit
    ;

fragment
Nondigit
    :   [a-zA-Z_]
    ;

fragment
Digit
    :   [0-9]
    ;

IntegerConstant
    :   DecimalConstant
    |   OctalConstant
    |   HexadecimalConstant
    |		BinaryConstant
    ;

fragment
DecimalConstant
    :   Digit+
    ;

fragment
BinaryConstant
		:		'0' [bB] BinaryDigit+
		;

fragment
OctalConstant
    :   '0' [oO] OctalDigit+
    ;

fragment
HexadecimalConstant
    :    '0' [xX] HexadecimalDigit+
    ;

fragment
NonzeroDigit
    :   [1-9]
    ;

fragment
BinaryDigit
	  :		[0-1]
	  ;

fragment
OctalDigit
    :   [0-7]
    ;

fragment
HexadecimalDigit
    :   [0-9a-fA-F]
    ;

FloatingConstant
    :   DecimalFloatingConstant
    ;

fragment
DecimalFloatingConstant
    :   FractionalConstant ExponentPart?
    |   DigitSequence ExponentPart
    ;

fragment
FractionalConstant
    :   DigitSequence? '.' DigitSequence
    |   DigitSequence '.'
    ;

fragment
ExponentPart
    :   [eE] Sign? DigitSequence
    ;

fragment
Sign
    :   [+-]
    ;

DigitSequence
    :   Digit+
    ;

fragment
CCharSequence
    :   CChar+
    ;

fragment
CChar
    :   ~['\\\r\n]
    |   EscapeSequence
    ;

fragment
EscapeSequence
    :   SimpleEscapeSequence
    |   OctalEscapeSequence
    |   HexadecimalEscapeSequence
    ;

fragment
SimpleEscapeSequence
    :   '\\' ['"?abfnrtv\\]
    ;

fragment
OctalEscapeSequence
    :   '\\' OctalDigit OctalDigit? OctalDigit?
    ;

fragment
HexadecimalEscapeSequence
    :   '\\x' HexadecimalDigit+
    ;

SingleQuoteFStringLiteral
    :   'f\'' SingleQuoteSCharSequence? '\''
    ;

DoubleQuoteFStringLiteral
    :   'f"' DoubleQuoteSCharSequence? '"'
    ;

SingleQuoteStringLiteral
		:		'\'' SingleQuoteSCharSequence? '\''
		;

DoubleQuoteStringLiteral
    :   '"' DoubleQuoteSCharSequence? '"'
    ;

fragment
SingleQuoteSCharSequence
    :   SingleQuoteSChar+
    ;

fragment
SingleQuoteSChar
    :   ~['\\\r\n]
    |   EscapeSequence
    ;

fragment
DoubleQuoteSCharSequence
    :   DoubleQuoteSChar+
    ;

fragment
DoubleQuoteSChar
    :   ~["\\\r\n]
    |   EscapeSequence
    ;

Whitespace
    :   [ \t]+
    		-> channel(HIDDEN)
    ;

BlockComment
    :   '/*' .*? '*/'
        -> skip
    ;

Newline
    :   (  '\r' '\n'? | '\n')
        -> channel(HIDDEN)
    ;
