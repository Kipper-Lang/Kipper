/*
 * The Antlr4 Grammar file for the Kipper Programming Language
 */

grammar Kipper;

// Entry Point for an entire file
compilationUnit
    :   translationUnit? EOF
    ;

translationUnit
    :   (externalItem | endOfLine | WS+)+
    ;

externalItem
    :   functionDeclaration # externalFunctionDeclaration
    |   blockItem # externalBlockItem
    ;

functionDeclaration
    :   'def' WS* declarator WS* '(' parameterTypeList? ')' WS* '->' WS* typeSpecifier WS* (compoundStatement | endOfLine)
    ;

endOfLine
    :   Whitespace* ';' Whitespace*
    ;

primaryExpression
    :   Identifier # identifierPrimaryExpression
    |   (StringLiteral WS*)+ # stringPrimaryExpression
    |   (FStringLiteral WS*)+ # fStringPrimaryExpression
    |   '(' expression ')' # tangledPrimaryExpression
    |   (IntegerConstant | FloatingConstant) #numberPrimaryExpression
    |   CharacterConstant #characterPrimaryExpression
    |   listConstant #listPrimaryExpression
    |   ('true' | 'false') #boolPrimaryExpression
    ;

listConstant
    :   '[' WS* constantExpression WS* (',' WS* constantExpression WS*)* ']'
    ;

postfixExpression
    :   primaryExpression #passOnPostfixExpression
    |   primaryExpression arraySpecifier+ #arraySpecifierPostfixExpression
    |   primaryExpression incrementOrDecrementOperator # incrementOrDecrementPostfixExpression
    |   'call' WS* primaryExpression WS* '(' WS* argumentExpressionList? WS* ')' # functionCallPostfixExpression
    ;

arraySpecifier
    :   '[' WS* expression WS* ']'
    ;

argumentExpressionList
    :   assignmentExpression WS* (',' WS* assignmentExpression WS*)*
    ;

unaryExpression
    :   postfixExpression # passOnUnaryExpression
    |   incrementOrDecrementOperator WS* postfixExpression # incrementOrDecrementUnaryExpression
    |   unaryOperator WS* postfixExpression # operatorModifiedUnaryExpression
    ;

incrementOrDecrementOperator
    :   ('++' |  '--')
    ;

unaryOperator
    :   '+' | '-' | '!'
    ;

castOrConvertExpression
    :   unaryExpression # passOnCastOrConvertExpression
    |   unaryExpression WS* 'as' WS* typeSpecifier # actualCastOrConvertExpression // conversion function
    ;

multiplicativeExpression
    :   castOrConvertExpression # passOnMultiplicativeExpression
    |   multiplicativeExpression WS* ('*'|'/'|'%'|'**') WS* castOrConvertExpression WS* # actualMultiplicativeExpression
    ;

additiveExpression
    :   multiplicativeExpression # passOnAdditiveExpression
    |   additiveExpression WS* ('+'|'-') WS* multiplicativeExpression WS* # actualAdditiveExpression
    ;

relationalExpression
    :   additiveExpression # passOnRelationalExpression
    |   relationalExpression WS* ('<'|'>'|'<='|'>=') WS* additiveExpression WS* # actualRelationalExpression
    ;

equalityExpression
    :   relationalExpression # passOnEqualityExpression
    |   equalityExpression WS* ('=='| '!=') WS* relationalExpression WS* # actualEqualityExpression
    ;

logicalAndExpression
    :   equalityExpression # passOnLogicalAndExpression
    |   logicalAndExpression WS* '&&' WS* equalityExpression WS* # actualLogicalAndExpression
    ;

logicalOrExpression
    :   logicalAndExpression # passOnLogicalOrExpression
    |   logicalOrExpression WS* '||' WS* logicalAndExpression WS* # actualLogicalOrExpression
    ;

conditionalExpression
    :   logicalOrExpression # passOnConditionalExpression
    |   logicalOrExpression WS* '?' WS* conditionalExpression WS* ':' WS* conditionalExpression WS* # actualConditionalExpression
    ;

assignmentExpression
    :   conditionalExpression # passOnAssignmentExpression
    |   primaryExpression WS* assignmentOperator WS* assignmentExpression # actualAssignmentExpression
    ;

assignmentOperator
    :   '=' | '*=' | '/=' | '%=' | '+=' | '-='
    ;

expression
    :   assignmentExpression WS* (',' WS* assignmentExpression WS*)*
    ;

constantExpression
    :   conditionalExpression
    ;

declaration
    :   storageTypeSpecifier WS* initDeclarator endOfLine
    ;

storageTypeSpecifier
    :   'var'
    |   'const'
    ;

declarationSpecifiers
    :   (declarationSpecifier WS*)+
    ;

declarationSpecifier
    :   typeSpecifier
    ;

initDeclarator
    :   declarator WS* ':' WS* typeSpecifier WS* ('=' WS* initializer WS*)?
    ;

// TODO! Implement the following type specifiers as expressions
typeSpecifier
    :   Identifier # singleTypeSpecifier // for single items, like 'num'
    |   Identifier '<' WS* Identifier WS* '>' # genericTypeSpecifier // for lists
    |   'typeof' WS* '('  WS* Identifier  WS* ')' # typeofTypeSpecifier // typeof another variable
    ;

declarator
    :   directDeclarator
    ;

directDeclarator
    :   Identifier
    ;

nestedParenthesesBlock
    :   (   ~('(' | ')')
        |   '(' WS* nestedParenthesesBlock WS* ')'
        )*
    ;

parameterTypeList
    :   parameterList WS* (',' WS* '...' Identifier WS*)? /* Kipper should allow for a sequence of arguments */
    ;

parameterList
    :   parameterDeclaration WS* (',' WS* parameterDeclaration WS*)*
    ;

parameterDeclaration
    :   declarator WS* ':' WS* declarationSpecifiers
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
    ;

compoundStatement
    :   '{' WS* blockItemList? WS*'}'
    ;

blockItemList
    :   blockItem+
    ;

blockItem
    :   WS* (statement | declaration) WS*
    ;

expressionStatement
    :   expression? endOfLine
    ;

selectionStatement
    :   'if' WS* '(' WS* expression WS* ')' WS* statement WS* ('else' WS* statement)? #ifStatement
    |   'switch' WS* '(' WS* expression WS* ')' WS* '{' (WS* switchLabeledStatement)* '}' #switchStatement
    ;

switchLabeledStatement
    :   'case' WS* constantExpression WS* ':' WS* statement
    |   'default' WS* ':' WS* statement
    ;

iterationStatement
    :   For WS* '(' forCondition ')' WS* statement
    |   While WS* '(' WS* expression WS* ')' WS* statement
    |   Do WS* statement WS* While WS* '(' WS* expression WS* ')' endOfLine
    ;

forCondition
	  :   (forDeclaration | expression?) endOfLine forExpression? endOfLine forExpression?
	  ;

forDeclaration
    :   storageTypeSpecifier WS* initDeclarator
    ;

forExpression
    :   assignmentExpression WS* (',' WS* assignmentExpression WS* )*
    ;

jumpStatement
    :   (('continue' | 'break')
    |   'return' WS* expression?
    )
    endOfLine
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

// struct specifier - not implemented in core lang
Struct : 'struct';

// typeof operator
Typeof : 'typeof';

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
    |   UniversalCharacterName
    //|   // other c-implementation-defined characters...
    ;

fragment
Nondigit
    :   [a-zA-Z_]
    ;

fragment
Digit
    :   [0-9]
    ;

fragment
UniversalCharacterName
    :   '\\u' HexQuad
    |   '\\U' HexQuad HexQuad
    ;

fragment
HexQuad
    :   HexadecimalDigit HexadecimalDigit HexadecimalDigit HexadecimalDigit
    ;

IntegerConstant
    :   DecimalConstant IntegerSuffix?
    |   OctalConstant IntegerSuffix?
    |   HexadecimalConstant IntegerSuffix?
    |	BinaryConstant
    ;

fragment
BinaryConstant
	:	'0' [bB] [0-1]+
	;

fragment
DecimalConstant
    :   NonzeroDigit Digit*
    ;

fragment
OctalConstant
    :   '0' OctalDigit*
    ;

fragment
HexadecimalConstant
    :   HexadecimalPrefix HexadecimalDigit+
    ;

fragment
HexadecimalPrefix
    :   '0' [xX]
    ;

fragment
NonzeroDigit
    :   [1-9]
    ;

fragment
OctalDigit
    :   [0-7]
    ;

fragment
HexadecimalDigit
    :   [0-9a-fA-F]
    ;

fragment
IntegerSuffix
    :   UnsignedSuffix LongSuffix?
    |   UnsignedSuffix LongLongSuffix
    |   LongSuffix UnsignedSuffix?
    |   LongLongSuffix UnsignedSuffix?
    ;

fragment
UnsignedSuffix
    :   [uU]
    ;

fragment
LongSuffix
    :   [lL]
    ;

fragment
LongLongSuffix
    :   'll' | 'LL'
    ;

FloatingConstant
    :   DecimalFloatingConstant
    |   HexadecimalFloatingConstant
    ;

fragment
DecimalFloatingConstant
    :   FractionalConstant ExponentPart? FloatingSuffix?
    |   DigitSequence ExponentPart FloatingSuffix?
    ;

fragment
HexadecimalFloatingConstant
    :   HexadecimalPrefix (HexadecimalFractionalConstant | HexadecimalDigitSequence) BinaryExponentPart FloatingSuffix?
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
HexadecimalFractionalConstant
    :   HexadecimalDigitSequence? '.' HexadecimalDigitSequence
    |   HexadecimalDigitSequence '.'
    ;

fragment
BinaryExponentPart
    :   [pP] Sign? DigitSequence
    ;

fragment
HexadecimalDigitSequence
    :   HexadecimalDigit+
    ;

fragment
FloatingSuffix
    :   [flFL]
    ;

CharacterConstant
    :   '\'' CChar '\''
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
    |   UniversalCharacterName
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

FStringLiteral
    :   'f' '"' SCharSequence? '"'
    ;

StringLiteral
    :   '"' SCharSequence? '"'
    ;

fragment
SCharSequence
    :   SChar+
    ;

fragment
SChar
    :   ~["\\\r\n]
    |   EscapeSequence
    |   '\\\n'   // Added line
    |   '\\\r\n' // Added line
    ;

WS
    :   Whitespace
    ;

Whitespace
    :   [ \t]+
    ;

BlockComment
    :   '/*' .*? '*/'
        -> skip
    ;

Newline
    :   (  '\r' '\n'? | '\n')
        -> skip
    ;
