# Expressions

Expressions are the basis of Kipper, as every operation in a program is made up of single expressions that perform
certain actions, like reading a value, calculating something, calling a function, comparing values...

A simple example for expressions can be a simple calculation, like this:

```ts
val1 + val2 * val3; // Mathematical/Arithmetic expression
```

Notice how in this case we are not assigning the result to anything? This is an important fact of expressions that they are usually independent and do a single task, meaning if we wanted to assign this result to a variable, we would have to use an assignment expression like this:

```ts
// Assign and arithmetic expression
var result: num = val1 + val2 * val3;
```

In this case, we also now created an expression statement (ends in `;`), which wraps an expression and allows it
to be used inside a program. Expression statements will be explained further in the docs page
[Statements](./statements.html).

## Kipper Operators and Expressions Precedence

The following table shows all valid operators and expressions in the Kipper language, with their respective precedence. The higher the precedence the higher the importance of the item, and the order of evaluation.

<table>
<colgroup>
  <col />
  <col />
  <col />
  <col />
</colgroup>
<thead>
  <tr>
    <th>Precedence</th>
    <th>Operator / Expression</th>
    <th>Description</th>
    <th>Associativity</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>13</td>
    <td><code>( ... )</code></td>
    <td>
      Tangled expression - Forced increased precedence
    <td>n/a</td>
  </tr>
  <tr>
    <td>12</td>
    <td>
      <code>++ ...</code> / <code>-- ...</code><br />
      <code>call ... ( ... )</code><br />
      <code>... [ ... ]</code><br/>
      <code>... . ...</code>
    </td>
    <td>
      Prefix increment and decrement (Suffix)<br />
      Function Call<br />
      List subscripting<br />
      Object member accessing<br />
    </td>
    <td>Left-To-Right</td>
  </tr>
  <tr>
    <td>11</td>
    <td>
      <code>... ++</code>/ <code>... --</code><br />
    </td>
    <td>
      Postfix increment and decrement<br />
    </td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>10</td>
    <td>
      <code>+ ...</code> / <code>- ...</code><br />
      <code>! ...</code><br />
      <code>... as ...</code>
    </td>
    <td>
      Unary plus and minus<br />
      Logical NOT<br />
      Type conversion
    </td>
    <td>Right-To-Left</td>
  </tr>
  <tr>
    <td>9</td>
    <td>
      <code>... * ...</code><br />
      <code>... / ...</code><br />
      <code>... % ...</code><br />
      <code>... ** ...</code>
    </td>
    <td>
      Multiplication<br />
      Division<br />
      Modulus<br />
      Power-To<br />
    </td>
    <td rowspan="6">Left-To-Right</td>
  </tr>
  <tr>
    <td>8</td>
    <td>
      <code>... + ...</code> / <code>... - ...</code>
    </td>
    <td>Addition and subtraction<br /></td>
  </tr>
  <tr>
    <td>7</td>
    <td>
      <code>... &lt; ...</code> / <code>... &lt;= ...</code><br />
      <code>... &gt; ...</code> / <code>... =&gt; ...</code><br />
    </td>
    <td>
      More than / More or Equal to<br />
      Less than / Less or Equal to<br />
    </td>
  </tr>
  <tr>
    <td>6</td>
    <td>
      <code>... == ...</code> / <code>... != ...</code>
    </td>
    <td>Relational comparison (Equal / Not equal to)<br /></td>
  </tr>
  <tr>
    <td>5</td>
    <td><code>... &amp;&amp; ...</code><br /></td>
    <td>Logical AND<br /></td>
  </tr>
  <tr>
    <td>4</td>
    <td><code>... || ...</code></td>
    <td>Logical OR<br /></td>
  </tr>
  <tr>
    <td>3</td>
    <td><code> ... ? ... : ...</code><br /></td>
    <td>Ternary expression<br /></td>
    <td rowspan="2">Right-To-Left</td>
  </tr>
  <tr>
    <td>2</td>
    <td>
      <code>... = ...</code><br />
      <code>... += ...</code> / <code>... -= ...</code><br />
      <code>... *= ...</code><br />
      <code>... /= ...</code><br />
      <code>... %= ...</code>
    </td>
    <td>
      Simple assignment<br />Increment or Decrement assignment<br />Multiplicative assignment<br />Divisional
      assignment<br />Rest of Division / Remainder assignment<br />
    </td>
  </tr>
  <tr>
    <td>1</td>
    <td><code>... , ...</code></td>
    <td>Comma</td>
    <td>Left-To-Right</td>
  </tr>
</tbody>
</table>

## How does precedence of operators and expressions affect a program?

The order of precedence is a very vital concept in programming languages, as they define how expressions are going to be evaluated. This directly can affect how your code runs, as certain parts might be evaluated first before others and change the entire course of your program.

A simple example of this are arithmetic expressions `+ - * / %`, which have per mathematical conventions their own order of precedence. For example, multiplication and division signs **always** come first before plus and minus, unless you explicitly use brackets, like these `( )`. The same can be done here in Kipper as well, where you can forcefully increase the order of precedence using brackets:

```ts
15 + 4 * 6; // -> (15 + (4 * 6)) -> (15 + 24) -> 39
```

Forced higher precedence using brackets:

```ts
(15 + 4) * 6; // -> ((15 + 4) * 6) -> (19 * 6) -> 114
```

## What does associativity mean?

As you should have already seen in the table above, there is an extra column defining the so-called associativity. What
does that mean? It's relatively simple and means whether the following (`( )` meaning the expression is read first):

```ts
a OPR b OPR c
```

is evaluated as (left-associative - Reads from left to right):

```ts
(a OPR b) OPR c
```

or as (right-associative - reads from right to left):

```ts
a OPR (b OPR c)
```

This is especially important as it can change how certain things are evaluated, and also cause unwanted errors! For
example the following would be interpreted as (left-associative):

```ts
32 / 4 / 4; // -> ((32 / 4) / 4) -> (8 / 4) -> 2
```

## List of expressions in the Kipper language

This is a concise list of all expressions in the Kipper language that may be used:

## Arithmetic Expression

Arithmetic expressions are simple mathematical calculations, where a numeric result is returned after the expression
was evaluated. They may also be chained based on their order of precedence, where each item is one by one evaluated.

### Syntax

```ts
EXP ( + | - | * | / | ** | % ) EXP
```

### Examples

```ts
// Plus
400.3 + 26.3; // -> 426.6

// Minus
87 - 2.5; // -> 84.5

// Multiply
2.4 * 5; // -> 12

// Divide
25 / 4; // -> 6.25

// Power to
2 ** 8; // -> 256

// Rest of Divide
51 % 10; // -> 1
```

## Relational Expressions (Comparisons)

Relational expressions are comparative expressions that compare two other expressions/values with a specific operator.
They evaluate to `true` if the condition of the operator is true, for example `<` (less than) with `1 < 5`, and
evaluate to `false` if the condition is false, for example `>` (greater than) with `1 > 5`.

Such expressions are essential for conditional expressions that are used in statements such as:

- [If-statements](./if-statement.html)
- [While-loops](./while-loop.html)
- [Do-while-loops](./while-loop.html)
- [For-loops](./for-loop.html)

### Syntax

```ts
EXP ( == | != | > | >= | < | <= ) EXP
```

### Examples

```ts
// Equal to
20 == 20; // -> true
92 == 20; // -> false

// Not equal to
21 != 9; // -> true
21 != 21; // -> false

// Is greater than
20 > 5; // -> true
20 > 20; // -> false

// Is greater or equal to
11 >= 5; // -> true
20 >= 20; // -> true
32 >= 99; // -> false

// Is less than
10 < 78; // -> true
43 < 14; // -> false

// Is less or equal to
12 <= 29; // -> true
56 <= 56; // -> true
21 <= 13; // -> false
```

## Logical Expressions

Logical expressions combine two or more expressions/conditions and evaluate to a `bool` value (Either `true` or `false`)
based on the specific operator used.

The NOT operator (`!`) is also a logical operator, even though unlike the other operators it can be only used on a
single expression, and can be used to invert the result of a logical expression.

### Syntax

For the logical `AND` and `OR`:

```ts
EXP ( && | || ) EXP
```

For the logical `NOT`:

```ts
!VALUE;
```

### Examples

```ts
// Logical AND - All must be true
true && true; // -> true
false && true; // -> false
true && false; // -> false
false && false; // -> false

// Logical OR - One must be true
true || true; // -> true
false || true; // -> true
true || false; // -> true
false || false; // -> false

// Logical NOT - Negate
!false; // -> true
!true; // -> false
```

Logical Expressions may be also chained together as long as you want. For example:

```ts
// Chained Logical AND - All must be true
true && true && true; // -> true
true && false && true; // -> false

// Chained Logical OR - One must be true
true || true || true; // -> true
true || false || true; // -> true
false || false || false; // -> false
```

You can also combine relational expressions with logical expressions, like this for example:

```ts
// ✓ Combined relational and logical expressions
(3 == 4 && 3 != 4) || (2 != 22 && 3 == 3);

// Following the order of precedence:
// -> (false && true) || (true && true)
// -> (false) || (true)
// -> true
```

## Conditional Expressions (Ternary conditional)

Conditional expressions are like [if-statements](./if-statement.html) with the major difference and advantage of being
in-line and allowing evaluation of specific expressions based on a condition.

If the `CONDITION` evaluates to `true`, the left side of the `:` operator is evaluated and returned, otherwise the
right side is evaluated and returned.

### Syntax

```ts
CONDITION ? EVALUATE_IF_TRUE : EVALUATE_IF_FALSE;
```

### Examples

```ts
// ✓ Simple evaluation of a number
true ? 3 : 2; // -> 3
false ? 3 : 2; // -> 2

// ✓ Simple evaluation of a number that will be assigned
var var1: num = 2;
var var2: num = 9;
var smallestOrEqual: num = var1 < var2 ? var1 : var2; // -> 2
```

As the ternary operator evaluates to more expressions, you can also chain it like this:

```ts
// ✓ Valid - Chained if ... else-if ... else-if ... else ternary operator
val result: num = condition1 ? value1
     : condition2 ? value2
     : condition3 ? value3
     : value4;

// -> Equivalent to:
if (condition1) { var result = value1; }
else if (condition2) { var result = value2; }
else if (condition3) { var result = value3; }
else { var result = value4; }
```

## Convert Expression

Conversion expressions convert the value of an expression to a target type using pre-defined built-in conversion
functions. Such conversions are essential for using values of different types in the same expression and avoiding type
errors.

An important example of this are `print` function call expressions, as the `print` function is a built-in function that
only allows a string as a parameter. Therefore, to print out a number you first have to convert it to a string.

### Syntax

```ts
EXP as TYPE;
```

### Allowed conversions

#### From `str` to `num`

Converts a string to a number, if it meets the following requirements:

- Only contains numeric characters (`0 - 9`)
- Is not empty (length > 0)

Otherwise if the string does not meet the above requirements, it will return `NaN` (Not a number). In future releases,
though this will throw a `ConversionError`.

```ts
"203" as num; // -> 203
```

#### From `num` to `str`

Converts a number to an identical string representation of the number.

```ts
203 as str; // -> "203"
```

#### From `char` to `str`

Converts a single character to a string.

```ts
"c" as str; // -> "c"
```

#### From `num` to `bool`

Converts a number to a bool. This evaluates to `true` if it's a non-zero value.

```ts
20 as bool; // -> true
0 as bool; // -> false
```

#### From `bool` to `num`

Converts a bool to a number. This evaluates to `1` if it's `true`, otherwise it's `0`.

```ts
true as num; // -> 1
false as num; // -> 0
```

#### From `bool` to `str`

Converts a string to a number. This evaluates to `"true"` if it's `true`, otherwise it's `"false"`.

```ts
true as str; // -> "true"
false as str; // -> "false"
```

## Function Call Expression

Function call expression are expressions that call and run a specified [function](./functions.html) and evaluates to
the return of the [function](./functions.html). In case that the return is not assigned to any variable or used in
another expression, then it will be simply discarded.

If the return type of the [function](./functions.html) is `void`, then the function call expression will not return any
value.

### Syntax

```ts
call FUNC(ARGS...)
```

### Examples

```ts
// ✓ Calling a defined function
def func1() -> num { return 5; }
call func1(); // -> 5

// ✓ Calling a defined function and assigning it to a variable
def func2() -> num { return 10; }
var example1: num = call func2(); // -> 10

// ✓ Multiple function calls with the end-result being assigned to a variable
def func3() -> num { return 25; }
var example2: num = call func2() + call func2(); // -> 50

// ✓ Using the return of a function with a return type of void and assigning it to a variable
def func4() -> void {}
var example3: void = call func4(); // -> void

// X Can not use the return of a void function with any other expression
def func4() -> void {}
4 + call func5(); // -> Error: Invalid arithmetic operation between types 'num' and 'void'.
```
