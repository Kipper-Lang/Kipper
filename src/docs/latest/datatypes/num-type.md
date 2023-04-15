---
title: Number Type
---

# Number Type - `num`

Represents a number (both floating point and integer) in the Kipper language. This datatype may always be used with the
standard mathematical [expressions](../expressions/index.html).

## Examples

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

<div class="important">
  <h3>Important</h3>
  <p>
    Remember that Kipper will interpret mathematical calculations as defined in the standard
    math conventions. (Multiplications, divisions and power-to operations have a higher
    priority than additions and subtractions.)
  </p>
  <pre><code class="language-ts">// ✓ Standard math rules apply
  var result: num = 4 + 4 * 5; // 4 + (4 * 5) -> 24</code></pre>
</div>

Additionally, to the default Base-10 numbers, you may also use Hex, Octal and Binary numbers:

```ts
// ✓ Byte Number Support
var bytes: num = 0b11111010; // -> 250

// ✓ Hex-Decimal Number Support
var hex: num = 0xffa2; // -> 65442

// ✓ Octal Number Support
var octal: num = 0o347; // -> 231
```
