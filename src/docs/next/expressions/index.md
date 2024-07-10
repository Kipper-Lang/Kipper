---
title: Overview
dropdownTitle: Expressions
nav:
  - ./index.md
  - ./arithmetic-expression.md
  - ./assignment-expression.md
  - ./conditional-expression.md
  - ./logical-expression.md
  - ./relational-expression.md
  - ./convert-expression.md
  - ./f-string-expression.md
  - ./member-access-expression.md
  - ./function-call-expression.md
---

# Overview - Expressions

Expressions are the basis of Kipper, as every operation in a program is made up of single expressions that perform
certain actions, like reading a value, calculating something, calling a function, comparing values...

A simple example for expressions can be a simple calculation, like this:

```kipper
val1 + val2 * val3; // Mathematical/Arithmetic expression
```

Notice how in this case we are not assigning the result to anything? This is an important fact of expressions that they are usually independent and do a single task, meaning if we wanted to assign this result to a variable, we would have to use an assignment expression like this:

```kipper
// Assign and arithmetic expression
var result: num = val1 + val2 * val3;
```

In this case, we also now created an expression statement (ends in `;`), which wraps an expression and allows it
to be used inside a program. Expression statements will be explained further in the docs page
[Statements](../statements/index.html).

## Kipper Operators and Expressions Precedence

The following table shows all valid operators and expressions in the Kipper language, with their respective precedence. The higher the precedence the higher the importance of the item, and the order of evaluation.

<div class="table-wrapper">
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
    <td>19</td>
    <td><code>( ... )</code></td>
    <td>
      Tangled expression - Forced increased precedence
    <td>n/a</td>
  </tr>
  <tr>
    <td>18</td>
    <td>
      <code>... ( ... )</code><br />
      <code>call ... ( ... )</code><br />
      <code>... [ ... ]</code><br/>
      <code>... [ ... : ... ]</code><br/>
      <code>... . ...</code>
    </td>
    <td>
      Prefix increment and decrement (Suffix)<br />
      Function call<br />
      Function call (Legacy)<br />
      Computed member access<br />
      Slice subscripting<br />
      Dot-notation member access<br />
    </td>
    <td>Left-To-Right</td>
  </tr>
  <tr>
    <td>17</td>
    <td>
      <code>... ++</code><br />
			<code>... --</code><br />
    </td>
    <td>
      Postfix increment<br />
			Postfix decrement<br />
    </td>
    <td rowspan="3">n/a</td>
  </tr>
  <tr>
    <td>16</td>
    <td>
      <code>+ ...</code><br />
			<code>- ...</code><br />
      <code>! ...</code><br />
			<code>~ ...</code><br />
      <code>++ ... </code><br />
			<code>-- ...</code><br />
    </td>
    <td>
      Unary plus<br />
			Unary minus<br />
			Logical NOT<br />
			Bitwise NOT<br />
			Prefix increment<br />
			Prefix decrement<br />
    </td>
  </tr>
	<tr>
    <td>15</td>
    <td>
      <code>... as ...</code>
    </td>
    <td>
      Type conversion
    </td>
  </tr>
	<tr>
    <td>14</td>
		<td>
      <code>... ** ...</code>
		</td>
    <td>
      Exponentiation<br />
    </td>
    <td>right-to-left</td>
	</tr>
  <tr>
    <td>13</td>
    <td>
      <code>... * ...</code><br />
      <code>... / ...</code><br />
      <code>... % ...</code><br />
    </td>
    <td>
      Multiplication<br />
      Division<br />
      Modulus<br />
      Exponentiation<br />
    </td>
    <td>left-to-right</td>
  </tr>
  <tr>
    <td>12</td>
    <td>
      <code>... + ...</code><br />
			<code>... - ...</code>
    </td>
    <td>
			Addition <br />
			Subtraction <br />
		</td>
    <td>left-to-right</td>
  </tr>
	<tr>
    <td>11</td>
		<td>
      <code>... << ...</code><br />
			<code>... >> ...</code><br />
			<code>... >>> ...</code>
		</td>
		<td>
			Bitwise shift left<br />
			Bitwise shift right<br />
			Bitwise shift right zero fill<br />
		</td>
		<td>left-to-right</td>
	</tr>
  <tr>
    <td>10</td>
    <td>
      <code>... &lt; ...</code><br />
			<code>... &lt;= ...</code><br />
      <code>... &gt; ...</code><br />
			<code>... =&gt; ...</code><br />
		</td>
    <td>
      More than <br />
			More or Equal to <br />
      Less than<br />
			Less or Equal to <br />
    </td>
		<td>left-to-right</td>
  </tr>
  <tr>
    <td>9</td>
    <td>
      <code>... == ...</code><br />
			<code>... != ...</code><br />
		</td>
    <td>
			Equal to<br />
			Not Equal to<br />
		</td>
		<td>left-to-right</td>
  </tr>
	<tr>
		<td>8</td>
    <td><code>... & ...</code><br /></td>
    <td>Bitwise AND<br /></td>
		<td>left-to-right</td>
	</tr>
	<tr>
		<td>7</td>
    <td><code>... ^ ...</code><br /></td>
    <td>Bitwise XOR<br /></td>
		<td>left-to-right</td>
	</tr>
	<tr>
		<td>6</td>
    <td><code>... | ...</code><br /></td>
    <td>Bitwise OR<br /></td>
		<td>left-to-right</td>
	</tr>
  <tr>
    <td>5</td>
    <td><code>... &amp;&amp; ...</code><br /></td>
    <td>Logical AND<br /></td>
		<td>left-to-right</td>
  </tr>
  <tr>
    <td>4</td>
    <td><code>... || ...</code></td>
    <td>Logical OR<br /></td>
		<td>left-to-right</td>
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
      <code>... += ...</code><br />
			<code>... -= ...</code><br />
      <code>... *= ...</code><br />
      <code>... /= ...</code><br />
      <code>... %= ...</code>
    </td>
    <td>
			Assignment<br />
			Incremental assignment<br />
			Decremental assignment<br />
			Multiplicative assignment<br />
			Divisional assignment<br />
			Modulo assignment<br />
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
</div>

## How does precedence of operators and expressions affect a program?

The order of precedence is a very vital concept in programming languages, as they define how expressions are going to be evaluated. This directly can affect how your code runs, as certain parts might be evaluated first before others and change the entire course of your program.

A simple example of this are arithmetic expressions `+ - * / %`, which have per mathematical conventions their own order of precedence. For example, multiplication and division signs **always** come first before plus and minus, unless you explicitly use brackets, like these `( )`. The same can be done here in Kipper as well, where you can forcefully increase the order of precedence using brackets:

```kipper
15 + 4 * 6; // -> (15 + (4 * 6)) -> (15 + 24) -> 39
```

Forced higher precedence using brackets:

```kipper
(15 + 4) * 6; // -> ((15 + 4) * 6) -> (19 * 6) -> 114
```

## What does associativity mean?

As you should have already seen in the table above, there is an extra column defining the so-called associativity. What
does that mean? It's relatively simple and means whether the following (`( )` meaning the expression is read first):

```kipper
a OPR b OPR c
```

is evaluated as (left-associative - Reads from left to right):

```kipper
(a OPR b) OPR c
```

or as (right-associative - reads from right to left):

```kipper
a OPR (b OPR c)
```

This is especially important as it can change how certain things are evaluated, and also cause unwanted errors! For
example the following would be interpreted as (left-associative):

```kipper
32 / 4 / 4; // -> ((32 / 4) / 4) -> (8 / 4) -> 2
```
