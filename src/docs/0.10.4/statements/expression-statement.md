# Expression Statement

An expression statement is a simple expression that ends in a semicolon (`;`) and evaluates one or more expressions,
without the involvement of any other statements.

## Syntax

```kipper
EXPRESSION;
```

## Examples

Common examples of expression statements are with increment or decrement expressions ( `val++`/`val--`) that simply add
or subtract `1` to/from a value. These often do not require any other expressions, and can simply be used as a whole
statement, like this:

```kipper
// Defining a variable
var increase_this: num = 4;
increase_this++; // Expression statement -> 5
increase_this--; // Expression statement -> 4
```
