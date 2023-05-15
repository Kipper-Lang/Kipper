---
title: Number Type
---

# Number Type - `num`

Represents a number (both floating point and integer) in the Kipper language. This datatype may always be used with the
standard mathematical [expressions](../expressions/index.html).

## Order or evaluation

Remember that Kipper will interpret mathematical calculations as defined in the standard math conventions.
(Multiplications, divisions and power-to operations have a higher priority than additions and subtractions.)

```ts
// ✓ Standard math rules apply
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
always result in a Base-10 number. This also means that you may mix different number types together, as long as they are
prefixed with the correct identifier:

```ts
var octal: num = 0o347 + 150 + 0xffa2; // -> 65823
```

## Examples

### Simple integer variable definitions

```ts
var var1: num = 400;
```

### Simple floating point variable definitions

```ts
var var2: num = 0.43493;
```

### Calculations using floating point and integer numbers

```ts
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
