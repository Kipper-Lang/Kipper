/*
 * The Antlr4 Grammar file for the Kipper Lexer.
 */

lexer grammar KipperLexer;

channels {
	COMMENT // Channel for all types of comments
}

tokens {
	FStringExpStart
}

options {
	superClass=KipperLexerBase;
}

@lexer::header {
	import KipperLexerBase from "./base/KipperLexerBase";
}

BlockComment
    :   '/*' .*?  '*/'
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

// FString Literal Braces - End Brace should trigger popMode as we go back to the FSTRING mode
// This lexer rule should only be invoked when inside a FString literal
FStringExpEnd : {this.insideFString()}? '}' -> popMode;

// General braces
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

// Bitwise Operators
BitwiseAnd : '&';
BitwiseOr : '|';
BitwiseXor : '^';
BitwiseNot : '~';
BitwiseZeroFillLeftShift : '<<';
BitwiseSignedRightShift : '>>';
BitwiseZeroFillRightShift : '>>>';

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

SingleQuoteStringLiteral
	:	'\'' SingleQuoteSCharSequence? '\''
	;

DoubleQuoteStringLiteral
    :   '"' DoubleQuoteSCharSequence? '"'
    ;

FloatingConstant
    :   DecimalFloatingConstant
    ;

// Whitespaces and newlines are always hidden, so they are not included in the parsing process but still visible
Whitespace : [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);
Newline : [\r\n\u2028\u2029] -> channel(HIDDEN);

// FString Start Quotes - Will change the mode to one of the FString modes
FStringSingleQuoteStart : 'f\'' {this.incrementFStringDepth()} -> pushMode(SINGLE_QUOTE_FSTRING);
FStringDoubleQuoteStart : 'f"' {this.incrementFStringDepth()} -> pushMode(DOUBLE_QUOTE_FSTRING);

// ----------------------------------------------------
// Special FString mode for single quotes
// ----------------------------------------------------
mode SINGLE_QUOTE_FSTRING;

// Push to the default mode to allow for expression parsing
FStringSingleQuoteExpStart : {this.insideFString()}? '{' -> type(FStringExpStart), pushMode(DEFAULT_MODE);

// Pop the FString mode when the end of the FString literal is reached
// -> we go back to the previous mode (usually DEFAULT_MODE)
FStringSingleQuoteEnd : '\'' {this.decrementFStringDepth()} -> popMode;

// FString Atom - Text between the braces
FStringSingleQuoteAtom : SingleQuoteFStringSCharSequence;

// ----------------------------------------------------
// Special FString mode for double quotes
// ----------------------------------------------------
mode DOUBLE_QUOTE_FSTRING;

// Push to the default mode to allow for expression parsing
FStringDoubleQuoteExpStart : {this.insideFString()}? '{' -> type(FStringExpStart), pushMode(DEFAULT_MODE);

// Pop the FString mode when the end of the FString literal is reached
// -> we go back to the previous mode (usually DEFAULT_MODE)
FStringDoubleQuoteEnd : '"' {this.decrementFStringDepth()} -> popMode;

// FString Atom - Text between the braces
FStringDoubleQuoteAtom : DoubleQuoteFStringSCharSequence;

// ----------------------------------------------------
// Fragment rules for the lexer - Not in any mode
// ----------------------------------------------------
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
    :   '\\' ['"{}?abfnrtv\\]
    ;

fragment
OctalEscapeSequence
    :   '\\' OctalDigit OctalDigit? OctalDigit?
    ;

fragment
HexadecimalEscapeSequence
    :   '\\x' HexadecimalDigit+
    ;

// FString Literal content
fragment
SingleQuoteFStringSCharSequence
	:	SingleQuoteFStringSChar+
	;

fragment
SingleQuoteFStringSChar
	:	~['\\\r\n{}]
	|	EscapeSequence
	;

fragment
DoubleQuoteFStringSCharSequence
	:	DoubleQuoteFStringSChar+
	;

fragment
DoubleQuoteFStringSChar
	:	~["\\\r\n{}]
	|	EscapeSequence
	;

// Standard String Literal content

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
