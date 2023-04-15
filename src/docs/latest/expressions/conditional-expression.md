# Conditional Expressions (Ternary conditional)

Conditional expressions are like [if-statements](../statements/if-statement.html) with the major difference and advantage of being
in-line and allowing evaluation of specific expressions based on a condition.

If the `CONDITION` evaluates to `true`, the left side of the `:` operator is evaluated and returned, otherwise the
right side is evaluated and returned.

## Syntax

```ts
CONDITION ? EVALUATE_IF_TRUE : EVALUATE_IF_FALSE;
```

## Examples

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
