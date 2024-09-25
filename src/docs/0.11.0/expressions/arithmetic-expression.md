# Arithmetic Expression

Arithmetic expressions are simple mathematical calculations, where a numeric result is returned after the expression
was evaluated. They may also be chained based on their order of precedence, where each item is one by one evaluated.

Besides arithmetic expression there are also [operator modified assignment](./assignment-expression.html#operator-modified-assignment),
which can be used similarly by directly assigning the result to a variable.

## Syntax

```kipper
EXP ( + | - | * | / | ** | % ) EXP
```

## Examples

### Addition Operator

```kipper
400.3 + 26.3; // -> 426.6
```

### Minus Operator

```kipper
87 - 2.5; // -> 84.5
```

### Multiply Operator

Standard multiplications can be done between operands of the type `num`.

```kipper
2.4 * 5; // -> 12
```

Additionally, string repetitions can be also performed using the `*` operator.

```kipper
"Hello " * 3; // -> "Hello Hello Hello "
```

### Divide Operator

```kipper
25 / 4; // -> 6.25
```

### Power-To Operator

```kipper
2 ** 8; // -> 256
```

### Modulo Operator

```kipper
51 % 10; // -> 1
```
