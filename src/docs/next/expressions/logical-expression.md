# Logical Expressions

Logical expressions combine two or more expressions/conditions and evaluate to a `bool` value (Either `true` or `false`)
based on the specific operator used.

The NOT operator (`!`) is also a logical operator, even though unlike the other operators it can be only used on a
single expression, and can be used to invert the result of a logical expression.

## Syntax

For the logical `AND` and `OR`:

```kipper
EXP ( && | || ) EXP
```

For the logical `NOT`:

```kipper
!VALUE;
```

## Examples

### Logical AND

```kipper
// Logical AND - All must be true
true && true; // -> true
false && true; // -> false
true && false; // -> false
false && false; // -> false
```

### Logical OR

```kipper
// Logical OR - One must be true
true || true; // -> true
false || true; // -> true
true || false; // -> true
false || false; // -> false
```

### Logical NOT

```kipper
// Logical NOT - Negate
!false; // -> true
!true; // -> false
```

### Chained Logical Expressions

Logical Expressions may be also chained together as long as you want. For example:

```kipper
// Chained Logical AND - All must be true
true && true && true; // -> true
true && false && true; // -> false

// Chained Logical OR - One must be true
true || true || true; // -> true
true || false || true; // -> true
false || false || false; // -> false
```

### Logical Expressions & Relational Expressions

You can also combine relational expressions with logical expressions, like this for example:

```kipper
// ✓ Combined relational and logical expressions
(3 == 4 && 3 != 4) || (2 != 22 && 3 == 3);

// Following the order of precedence:
// -> (false && true) || (true && true)
// -> (false) || (true)
// -> true
```
