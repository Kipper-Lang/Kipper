---
title: Datatypes
nav:
  - ./index.md
  - ./str-type.md
  - ./num-type.md
  - ./bool-type.md
  - ./void-type.md
  - ./null-type.md
  - ./undefined-type.md
  - ./array-type.md
---

# Datatypes

As previously shown in the docs page [Variables](../variables.html), every variable always has a type that defines what
values it can store. This also means that you often can not mix variables of different data types together, as they
fundamentally represent different things.

## What is a datatype?

A data type defines the type of value, which can be stored in a variable or constant.

A variable with the datatype `num`, for example, can only contain numbers. A variable with an `str` datatype can only
contain text, symbols or numbers, but saves them as text. This makes them for example impossible to use for calculations
and as such using them in arithmetic expression is invalid.

<div class="red-highlight-text">
  <h2>Important</h2>
  <p>
  Data types can not be mixed together and must be converted before being used with another type.
  </p>
  <p>
    <em class="green-checkmark">✓ VALID CODE</em>
  </p>
  <pre><code class="language-ts">// ✓ Valid
var var1: str = "This ";
var var2: str = "is ";
var var3: str = "a string";
var result: str = var1 + var2 + var3; // -> "This is a string"

// ✓ Also Valid
var var4: str = "42";
var var5: num = (var4 as num) + 5; // Converts the string to 'num' and adds 5 to them

// ✓ Also Valid
var var6: num = 32;
var var7: num = (var6 as num) \* 2; // Converts the string to 'num' and multiplies it by 2</code></pre>

  <p>
    <em class="red-checkmark">X INVALID CODE</em>
  </p>
  <pre><code class="language-ts">// X Invalid - May not re-define with new type signature
var var1: str = "3";
var var1: num = 3;

// X Invalid - Invalid conversion from 'str' to 'num'
var var2: str = "Obviously not a number";
var var3: num = var4 as num; // Impossible to convert!

// X Invalid - Invalid conversion from 'str' to 'num'
var var2: str = ""; // empty
var var3: num = var2 as num; // Impossible to convert, as it is an empty value!</code></pre>

</div>

## List of data types in Kipper

- [String Type - `str`](./str-type.html)
- [Number Type - `num`](./num-type.html)
- [Boolean Type - `bool`](./bool-type.html)
- [Void Type - `void`](./void-type.html)
- [Null Type - `null`](./null-type.html)
- [Undefined Type - `undefined`](./undefined-type.html)
- [Array Type - `Array<T>`](./array-type.html)
