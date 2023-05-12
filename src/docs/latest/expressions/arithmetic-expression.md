# Arithmetic Expression

Arithmetic expressions are simple mathematical calculations, where a numeric result is returned after the expression
was evaluated. They may also be chained based on their order of precedence, where each item is one by one evaluated.

Besides arithmetic expression there are also [operator modified assignment](./assignment-expression.html#operator-modified-assignment),
which can be used similarly by directly assigning the result to a variable.

## Syntax

```ts
EXP ( + | - | * | / | ** | % ) EXP
```

## Examples

### Addition Operator

```ts
400.3 + 26.3; // -> 426.6
```

### Minus Operator

```ts
87 - 2.5; // -> 84.5
```

// Plus
### Multiply Operator

```ts
2.4 * 5; // -> 12
```

### Divide Operator

```ts
25 / 4; // -> 6.25
```

### Power-To Operator

```ts
2 ** 8; // -> 256
```

### Modulo Operator

```ts
51 % 10; // -> 1
```
