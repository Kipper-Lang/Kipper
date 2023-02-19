/*
 * The Antlr4 Grammar file for the Kipper Lexer.
 */

lexer grammar KipperLexer;

channels {
	// Channel for all types of comments
	COMMENT
}

// Comments are at the lowest priority of lexing
BlockComment
    :   '/*' .*? '*/'
    	-> channel(COMMENT)
    ;

LineComment
	:	'//' ~[\r\n\u2028\u2029]*
		-> channel(COMMENT)
	;

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
DefFunc : 'def';
Return : 'return';
CallFunc : 'call';
RetIndicator : '->';

// boolean constants
True : 'true';
False : 'false';

// typeof operator
Typeof : 'typeof';

// Constant undefined, void and null identifiers
Void : 'void';
Null : 'null';
Undefined : 'undefined';

// General Punctuators
Comma : ',';
SemiColon : ';';
QuestionMark : '?';
Colon : ':';
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

// Assignment
Assign : '=';
PlusAssign : '+=';
MinusAssign : '-=';
StarAssign : '*=';
DivAssign : '/=';
ModAssign : '%=';

// Value Comparison
Equal : '==';
NotEqual : '!=';
Less : '<';
LessEqual : '<=';
Greater : '>';
GreaterEqual : '>=';

// Property accessing
Dot : '.';

Identifier
    :   IdentifierNondigit (IdentifierNondigit | Digit)*
    ;

IntegerConstant
    :   DecimalConstant
    |   OctalConstant
    |   HexadecimalConstant
    |	BinaryConstant
    ;

SingleQuoteFStringLiteral
    :   'f\'' SingleQuoteSCharSequence? '\''
    ;

DoubleQuoteFStringLiteral
    :   'f"' DoubleQuoteSCharSequence? '"'
    ;

SingleQuoteStringLiteral
	:	'\'' SingleQuoteSCharSequence? '\''
	;

DoubleQuoteStringLiteral
    :   '"' DoubleQuoteSCharSequence? '"'
    ;

FloatingConstant
    :   DecimalFloatingConstant
    ;

Whitespace
    :   [\t\u000B\u000C\u0020\u00A0]+
		-> channel(HIDDEN)
    ;

Newline
    :   [\r\n\u2028\u2029]
        -> channel(HIDDEN)
    ;

// Fragment rules for the lexer
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

fragment
DecimalConstant
    :   Digit+
    ;

fragment
BinaryConstant
	:	'0' [bB] BinaryDigit+
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
  	:	[0-1]
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
DigitSequence
    :   Digit+
    ;

fragment
Sign
    :   [+-]
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
