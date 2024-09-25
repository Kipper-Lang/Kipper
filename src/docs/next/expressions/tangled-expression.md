# Tangled Expression

A tangled expression is a forced increased precedence expression that is used to change the order of operations in an
expression. It is used to force the evaluation of an expression before the rest of the expression.

## Syntax

```kipper
( EXP )
```

## Examples

### Changing the order of operations

```kipper
var result1: num = 2 + 3 * 4;
print(result); // -> 14

var result2: num = (2 + 3) * 4;
print(result2); // -> 20
```
