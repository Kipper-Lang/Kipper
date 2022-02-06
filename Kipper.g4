/*
 * The Antlr4 Grammar file for the Kipper Programming Language
 */

grammar Kipper;

primaryExpression
    :   Identifier
    |   Constant
    |   StringLiteral+
    |   '(' expression ')'
    ;

postfixExpression
    :   primaryExpression WS*
        ('[' WS* expression WS* ']' // array specifier
        | ('++' | '--')
        )*
        |
        'call' WS* primaryExpression WS* '(' WS* argumentExpressionList? WS* ')' // function call
    ;

argumentExpressionList
    :   assignmentExpression WS* (',' WS* assignmentExpression WS*)*
    ;

unaryExpression
    :
    ('++' |  '--')* WS*
    (postfixExpression
    |   unaryOperator WS* castOrConvertExpression
    )
    ;

unaryOperator
    :   '*' | '+' | '-' | '!'
    ;

castOrConvertExpression
    :   unaryExpression
    |   DigitSequence // for
    |   unaryExpression WS* 'as' WS* typeSpecifier // conversion function
    ;

multiplicativeExpression
    :   castOrConvertExpression WS* (('*'|'/'|'%') WS* castOrConvertExpression WS*)*
    ;

additiveExpression
    :   multiplicativeExpression WS* (('+'|'-') WS* multiplicativeExpression WS*)*
    ;

relationalExpression
    :   additiveExpression WS* (('<'|'>'|'<='|'>=') WS* additiveExpression WS*)*
    ;

equalityExpression
    :   relationalExpression WS* (('=='| '!=') WS* relationalExpression WS*)*
    ;

logicalAndExpression
    :   equalityExpression WS* ('&&' WS* equalityExpression WS*)*
    ;

logicalOrExpression
    :   logicalAndExpression WS* ( '||' WS* logicalAndExpression WS*)*
    ;

conditionalExpression
    :   logicalOrExpression WS* ('?' WS* expression WS* ':' WS* conditionalExpression WS*)?
    ;

assignmentExpression
    :   conditionalExpression
    |   unaryExpression WS* assignmentOperator WS* assignmentExpression
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
    :   storageTypeSpecifier WS* initDeclarator endOfItem
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

typeSpecifier
    :   Identifier #singleItemTypeSpecifier // for single items, like 'num'
    |   Identifier '<' WS* Identifier WS* '>' #multiItemTypeSpecifier // for lists
    |   'typeof' WS* '(' Identifier ')' #typeofTypeSpecifier // typeof another variable
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
    :   parameterList WS* (',' WS* '...' WS*)?
    ;

parameterList
    :   parameterDeclaration WS* (',' WS* parameterDeclaration WS*)*
    ;

parameterDeclaration
    :   declarator WS* declarationSpecifiers
    ;

initializer
    :   assignmentExpression
    |   '[' WS* initializerList? WS* ','? WS* ']' // for lists
    ;

initializerList
    :   designation? WS* initializer WS* (',' WS* designation? WS* initializer WS*)*
    ;

// struct designator
designation
    :   designatorList WS* '='
    ;

designatorList
    :   designator+
    ;

designator
    :   '[' WS* constantExpression WS* ']'
    |   '.' WS* Identifier
    ;

statement
    :   labeledStatement
    |   compoundStatement
    |   expressionStatement
    |   selectionStatement
    |   iterationStatement
    |   jumpStatement
    ;

labeledStatement
    :   'case' WS* constantExpression WS* ':' WS* statement
    |   'default' WS* ':' WS* statement
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
    :   expression? endOfItem
    ;

selectionStatement
    :   'if' WS* '(' WS* expression WS* ')' WS* statement WS* ('else' WS* statement)?
    |   'switch' WS* '(' WS* expression WS* ')' WS* statement
    ;

iterationStatement
    :   For WS* '(' forCondition ')' WS* statement
    |   While WS* '(' WS* expression WS* ')' WS* statement
    |   Do WS* statement WS* While WS* '(' WS* expression WS* ')' endOfItem
    ;

forCondition
	  :   (forDeclaration | expression?) endOfItem forExpression? endOfItem forExpression?
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
    endOfItem
    ;

// Entry Point for an entire file
compilationUnit
    :   translationUnit? EOF
    ;

translationUnit
    :   (externalItem | endOfItem | WS+)+
    ;

externalItem
    :   functionDefinition # externalFunctionDefinition
    |   declaration # externalDeclaration
    |   blockItem # externalBlockItem
    ;

functionDefinition
    :   'def' WS* declarator WS* '(' parameterTypeList? ')' WS* '->' WS* typeSpecifier WS* compoundStatement
    ;

endOfItem
    :   Whitespace* ';' Whitespace*
    ;

// Lexer Rules (tokens / token rules)

// const / var
Const : 'const';
Var : 'var';

// conversion
As : 'as';

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

// struct specifier - not implemented in base lang
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

Constant
    :   IntegerConstant
    |   FloatingConstant
    |   CharacterConstant
    ;

fragment
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

fragment
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

fragment
CharacterConstant
    :   '\'' CCharSequence '\''
    |   'L\'' CCharSequence '\''
    |   'u\'' CCharSequence '\''
    |   'U\'' CCharSequence '\''
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

StringLiteral
    :   EncodingPrefix? '"' SCharSequence? '"'
    ;

fragment
EncodingPrefix
    :   'u8'
    |   'u'
    |   'U'
    |   'L'
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

Directive
    :   '#' ~[\r\n]*
        -> skip
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
