# Bitwise Expression

Bitwise expressions are used to perform bitwise operations on integers. These operations are performed on the binary
representation of the numbers and manipulate the individual bits of the number.

## Syntax

### Bitwise AND, OR and XOR

```kipper
EXP ( & | | | ^ ) EXP
```

### Bitwise NOT

```kipper
~VALUE;
```

### Bitwise Shift

```kipper
EXP ( << | >> | >>>) EXP
```

## Examples

### Bitwise AND

```kipper
// Bitwise AND
5 & 3; // -> 1
```

### Bitwise OR

```kipper
// Bitwise OR
5 | 3; // -> 7
```

### Bitwise XOR

```kipper
// Bitwise XOR
5 ^ 3; // -> 6
```

### Bitwise NOT

```kipper
// Bitwise NOT
~5; // -> -6
```

### Bitwise Shift

```kipper
// Bitwise Shift
5 << 3; // -> 40
5 >> 3; // -> 0
5 >>> 3; // -> 0
```

### Chained Bitwise Expressions

Bitwise expressions may be also chained together as long as you want. For example:

```kipper
// Chained Bitwise AND
5 & 3 & 1; // -> 1

// Chained Bitwise OR
5 | 3 | 1; // -> 7

// Chained Bitwise XOR
5 ^ 3 ^ 1; // -> 7
```

## Precedence

The precedence of bitwise expressions is as follows:

1. Bitwise Shift
2. Bitwise AND
3. Bitwise XOR
4. Bitwise OR

### Chained Bitwise Expressions

Chained bitwise expressions are evaluated from left to right.

```kipper
5 & 3 | 1; // -> 1
```

In this example, the bitwise AND operation is evaluated first, followed by the bitwise OR operation.

You can also use parentheses to change the order of evaluation.

```kipper
5 & (3 | 1); // -> 1
```

A more complicated example may look like this:

```kipper
// Declare variables
var a: num = 15; // Binary: 1111
var b: num = 10; // Binary: 1010
var c: num = 3;  // Binary: 0011

// Complex expression with all bitwise operations
// Following the order of precedence:
// 1. Bitwise Shift: a << 2 and then >> 3
// 2. Bitwise AND: a & b
// 3. Bitwise XOR: c ^ (result of shift operations)
// 4. Bitwise OR: (result of AND operation) | (result of XOR operation)
var result: num = a & b | c ^ a << 2 >> 3 >>> 4;

// Output the result
print(result as str);
```

## See Also

- [Arithmetic Expression](./arithmetic-expression.html)
- [Kipper Operators and Expressions Precedence](./index.html#kipper-operators-and-expressions-precedence)
