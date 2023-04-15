# Logical Expressions

Logical expressions combine two or more expressions/conditions and evaluate to a `bool` value (Either `true` or `false`)
based on the specific operator used.

The NOT operator (`!`) is also a logical operator, even though unlike the other operators it can be only used on a
single expression, and can be used to invert the result of a logical expression.

## Syntax

For the logical `AND` and `OR`:

```ts
EXP ( && | || ) EXP
```

For the logical `NOT`:

```ts
!VALUE;
```

## Examples

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
