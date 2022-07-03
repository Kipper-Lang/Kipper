# Kipper Datatypes

As previously shown in the docs page [Variables](./variables.html), every variable always has a type that defines what
values it can store. This also means that you often can not mix variables of different data types together, as they
fundamentally represent different things.

## What is a datatype?

A data type defines the type of value, which can be stored in a variable or constant.

A variable with the datatype `num`, for example, can only contain numbers. A variable with an `str` datatype can only
contain text, symbols or numbers, but saves them as text. This makes them for example impossible to use for calculations
and as such using them in arithmetic expression is invalid.

### Remember!

Data types can not be mixed together and must be converted before being used with another type.

<em class="green-checkmark">✓ VALID CODE</em>

```ts
// ✓ Valid
var var1: str = "This ";
var var2: str = "is ";
var var3: str = "a string";
var result: str = var1 + var2 + var3; // -> "This is a string"

// ✓ Also Valid
var var4: str = "42";
var var5: num = (var4 as num) + 5; // Converts the string to 'num' and adds 5 to them

// ✓ Also Valid
var var6: num = 32;
var var7: num = (var6 as num) * 2; // Converts the string to 'num' and multiplies it by 2
```

<em class="red-checkmark">X INVALID CODE</em>

```ts
// X Invalid - May not re-define with new type signature
var var1: str = "3";
var var1: num = 3;

// X Invalid - Invalid conversion from 'str' to 'num'
var var2: str = "Obviously not a number";
var var3: num = var4 as num; // Impossible to convert!

// X Invalid - Invalid conversion from 'str' to 'num'
var var2: str = ""; // empty
var var3: num = var2 as num; // Impossible to convert, as it is an empty value!
```

## List of data types in Kipper

### Number Type - `num`

Represents a number (both floating point and integer) in the Kipper language. This datatype may always be used with the
standard mathematical [expressions](./expressions.html).

#### Examples

```ts
// ✓ Simple integer number
var var1: num = 400;

// ✓ Simple floating point number
var var2: num = 0.43493;

// ✓ Calculations using floating point 'num' and integer 'num'
var var3: num = var2 + var1; // -> 400.43493

// ✓ Plus
var var1: num = 400.3 + 26.3; // -> 426.6

// ✓ Minus
var var2: num = 87 - 2.5; // -> 84.5

// ✓ Multiply
var var2: num = 2.4 * 5; // -> 12

// ✓ Divide
var var2: num = 25 / 4; // -> 6.25

// ✓ Power to
var var2: num = 2 ** 8; // -> 256

// ✓ Rest of Divide
var var2: num = 51 % 10; // -> 1
```

<article class="red-highlight-text">
  <h3>Important</h3>
  <p>
    Remember that Kipper will interpret mathematical calculations as defined in the standard
    math conventions. (Multiplications, divisions and power-to operations have a higher
    priority than additions and subtractions.)
  </p>
  <pre><code class="language-ts">// ✓ Standard math rules apply
  var result: num = 4 + 4 * 5; // 4 + (4 * 5) -> 24</code></pre>
</article>

Additionally, to the default Base-10 numbers, you may also use Hex, Octal and Binary numbers:

```ts
// ✓ Byte Number Support
var bytes: num = 0b11111010; // -> 250

// ✓ Hex-Decimal Number Support
var hex: num = 0xffa2; // -> 65442

// ✓ Octal Number Support
var octal: num = 0o347; // -> 231
```

### String Type - `str`

A string is a simple sequence of characters in UTF-16. A string may be any length, as underneath the length of the list that represents the string will always be increased as needed.

#### Examples

```ts
// ✓ Standard addition and concatenations are allowed
var var4: str = "This is a";
var var5: str = " string";
var result_str: str = var5 + var6; // -> "This is a string"

// ✓ Single character UTF-16 characters in strings
var kipper: str = "ƛ";

// ✓ Multi character UTF-16 characters in strings
var kipper: str = "Kipper is 🦊💘";
```

Strings are defined using quotation marks (`""`) , which automatically hint the `str` type.

### Char Type - `char`

<p class="red-highlight-text">
Scheduled for release in Kipper v0.10.0
</p>

A character is a simple UTF-16 character, which may represent any Unicode character that is defined in the UTF-16
standard. To define a simple character, you use the `''` syntax, hinting a single character.

#### Examples

```ts
// ✓ Simple UTF-16 Character
var var6: char = "4";

// ✓ Single character UTF-16 character
var var7: char = "ƛ";

// X Char may not be empty
var var8: char = "";

// X Char may only be a single character
var var9: char = "This is obviously more than a single character";

// X Char has to be a string and "" signalises a string!
var var10: char = "x";

// X No direct calculations between 'char' and 'num' without conversion
var var11: char = "8"; // -> 8
var var12: num = 48; // -> 0
var result: char = var10 + var11; // -> Incompatible types 'char' and 'num'

// X No usage of emojis that use multi-character UTF-16 sequences like 💘 (U+1F498 / 128152), which are bigger than the
// allowed range of 65535. For these use 'str' instead, as they require multiple characters!
var var13: char = "💘"; // -> X Char may only be a single character

// ✓ Multi character UTF-16 characters in strings
var var14: str = "💘";
```

### Boolean Type - `bool`

The boolean is a simple binary value that may be either `true` or `false`.

The value can be also represented as 0 (`false`) and 1 (`true`).

#### Examples

```ts
// ✓ Simple bool value using 'True' and 'False'
var var15: bool = False;
var var16: bool = True;

// ✓ Simple comparison
var var17: num = 3;
var var18: num = 48;
var is_equal: bool = var10 <= var11; // 3 smaller than 48 -> True

// ✓ Boolean calculations with numbers
var var19: bool = True;
var var20: num = (var18 as num) + 2; // -> 3
```

### Void Type - `void`

The `void` type represents a value that is nothing and may only be `void`.

This is usually used for functions to hint they have no return. Otherwise, this data type is practically useless, and it
should be not be used.

#### Examples

```ts
// ✓ Creating a void variable - This may only be 'void'
var var21: void = void;

// X May not set a 'void' variable to anything except 'void'
var var22: void = 4;

// ✓ Returning void for a function - Returns 'void' per default
def func1() -> void {
  return;
}

// ✓ Returning void for a function manually
def func2() -> void {
  return void;
}

// ✓ Assigning void return to variable of type 'void'
var var23: void = func2();
```

### List Type - `list<type>`

<p class="red-highlight-text">
Scheduled for release in Kipper v0.12.0
</p>

The `list<type>` data type is a unique data type, as it does not represent itself a value, but rather a sequence of
multiple values. As a result of that a list has also a length and an index for each item, which you may use to access
them using the following syntax:

```ts
VAR[INDEX];
```

#### Examples

```ts
// ✓ Creating a simple list
var var24: list<num> = [2, 3, 4];

// ✓ Accessing item of value per index (0 = first item)
var var25: list<num> = [2, 3, 4];
var item_of_list: num = var26[2]; // -> 4

// ✓ Accessing the length of the list using 'len()'
var len_of_list: num = len(var26); // -> 3

// ✓ Accessing the last item of the list using 'last()'
var len_of_list: num = last(var26); // -> 4

// ✓ Accessing the first item of the list using 'first()'
var len_of_list: num = first(var26); // -> 2

// X May not set a list to a single value
var var26: list<num> = 2;

// X May not set item of list to an invalid type
var var27: list<num> = ["string"];

// X May not convert list to another type as a whole!
var var28: list<str> = ["99", "1893", "4"];
var var29: list<num> = var27 as list<num>; // -> Invalid conversion
```
