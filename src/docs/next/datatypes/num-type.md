---
title: Number Type
---

# Number Type - `num`

The `num` type is a special type that represents a number (both floating point and integer) in the Kipper language. This
datatype may always be used with the standard mathematical [expressions](../expressions/index.html).

## Order or evaluation

When working with numbers watch out for the order of evaluations of arithmetic expressions. Kipper will interpret
mathematical calculations as defined in the standard math conventions i.e. multiplications, divisions and power-to
operations have a higher priority than additions and subtractions.

Simple example:

```kipper
var result: num = 4 + 4 * 5; // 4 + (4 * 5) -> 24
```

These are also defined in the [table of operator precedence](../expressions/index.html#kipper-operators-and-expressions-precedence).

## Octal, Hex and Binary numbers

Besides the regular Base-10 numbers, you may also use Hex, Octal and Binary numbers, as long as they are prefixed with
the correct identifier:

- Binary numbers are prefixed with `0b`:
<pre><code class="language-ts">var bytes: num = 0b11111010; // -> 250</code></pre>
- Hexadecimal numbers are prefixed with `0x`:
<pre><code class="language-ts">var hex: num = 0xffa2; // -> 65442</code></pre>
- Octal numbers are prefixed with `0o`:
<pre><code class="language-ts">var octal: num = 0o347; // -> 231</code></pre>

Note that the numbers stored in the variables are always stored as Base-10 numbers, so converting them to a string will
always result in a Base-10 number.

This also means that you may mix different number types together, as long as they are prefixed with the correct
identifier:

```kipper
var octal: num = 0o347 + 150 + 0xffa2; // -> 65823
```

## Safe Number Range

Due to the fact that Kipper only compiles to TypeScript or JavaScript, the underlying number type will almost always
be a 64-bit floating point number. This means that the maximum safe number range is the same as in JavaScript, which is
[`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

Over this limit, the numbers will start to lose precision, as shown in the following example:

```kipper
var num1: num = 9007199254740991; // -> 9007199254740991
var num2: num = 9007199254740992; // -> 9007199254740992
var num3: num = 9007199254740993; // -> 9007199254740992
```

Performing equality checks now causes the following problem:

```kipper
var isEqual = num3 === 9007199254740993; // -> true
print(isEqual as str) // -> true

isEqual: bool = num3 === num2; // -> true (but should be false)
print(isEqual as str) // -> true

isEqual = num3 === 9007199254740992; // -> true (but should be false)
print(isEqual as str) // -> false
```

This is due to the fact that the numbers are stored as floating point numbers, which are not able to represent the
number with full precision.

<div class="important">
<h2>Note</h2>
<p>
Kipper is at the stage of writing with the current version still under heavy development. This means that the
implementation of types such as
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"><code>BigInt</code></a>
may take some time.
</p>
<p>
This also includes global functions to check whether a number is within the safe range or not.
</p>
</div>

## Examples

### Simple integer variable definitions

```kipper
var var1: num = 400;
```

### Simple floating point variable definitions

```kipper
var var2: num = 0.43493;
```

### Calculations using floating point and integer numbers

```kipper
var var3: num = var2 + var1; // -> 400.43493
```

### Arithmetic Expressions

The following arithmetic expressions are supported (as also shown in [arithmetical expressions](../expressions/arithmetic-expression.html)):

- Addition:
<pre><code class="language-ts">var var1: num = 400.3 + 26.3; // -> 426.6</code></pre>
- Subtraction:
<pre><code class="language-ts">var var2: num = 87 - 2.5; // -> 84.5</code></pre>
- Multiplication:
<pre><code class="language-ts">var var3: num = 2.4 * 5; // -> 12</code></pre>
- Division:
<pre><code class="language-ts">var var4: num = 25 / 4; // -> 6.25</code></pre>
- Power to:
<pre><code class="language-ts">var var5: num = 2 ** 8; // -> 256</code></pre>
- Rest of Divide (Modulo):
<pre><code class="language-ts">var var6: num = 51 % 10; // -> 1</code></pre>
