---
title: Relational Expressions
---

# Relational Expressions (Comparisons)

Relational expressions are comparative expressions that compare two other expressions/values with a specific operator.
They evaluate to `true` if the condition of the operator is true, for example `<` (less than) with `1 < 5`, and
evaluate to `false` if the condition is false, for example `>` (greater than) with `1 > 5`.

Such expressions are essential for conditional expressions that are used in statements such as:

- [If-statements](../statements/if-statement.html)
- [While-loops](../statements/while-loop.html)
- [Do-while-loops](../statements/while-loop.html)
- [For-loops](../statements/for-loop.html)

## Syntax

```ts
EXP ( == | != | > | >= | < | <= ) EXP
```

## Examples

### Equal-to Operator

```ts
20 == 20; // -> true
92 == 20; // -> false
```

### Not Equal-to Operator

```ts
21 != 9; // -> true
21 != 21; // -> false
```

### Greater-than Operator

```ts
20 > 5; // -> true
20 > 20; // -> false
```

### Greater-than or Equal-to Operator

```ts
11 >= 5; // -> true
20 >= 20; // -> true
32 >= 99; // -> false
```

### Less-than Operator

```ts
10 < 78; // -> true
43 < 14; // -> false
```

### Less-than or Equal-to Operator

```ts
12 <= 29; // -> true
56 <= 56; // -> true
21 <= 13; // -> false
```
