---
title: Conditional Expressions
---

# Conditional Expressions (Ternary conditional)

Conditional expressions are like [if-statements](../statements/if-statement.html) with the major difference and advantage of being
in-line and allowing evaluation of specific expressions based on a condition.

If the `CONDITION` evaluates to `true`, the left side of the `:` operator is evaluated and returned, otherwise the
right side is evaluated and returned.

## Syntax

```kipper
CONDITION ? EVALUATE_IF_TRUE : EVALUATE_IF_FALSE;
```

## Examples

### Simple Conditional Expressions

```kipper
// ✓ Simple evaluation of a number
true ? 3 : 2; // -> 3
false ? 3 : 2; // -> 2
```

### Using Conditional Expressions to assign a value

```kipper
// ✓ Simple evaluation of a number that will be assigned
var var1: num = 2;
var var2: num = 9;
var smallestOrEqual: num = var1 < var2 ? var1 : var2; // -> 2
```

### Chained Conditional Expressions

As the ternary operator evaluates to more expressions, you can also chain it like this:

```kipper
// ✓ Valid - Chained if ... else-if ... else-if ... else ternary operator
var result: num = condition1 ? value1
     : condition2 ? value2
     : condition3 ? value3
     : value4;
```

Equivalent to:

```kipper
if (condition1) { var result = value1; }
else if (condition2) { var result = value2; }
else if (condition3) { var result = value3; }
else { var result = value4; }
```
