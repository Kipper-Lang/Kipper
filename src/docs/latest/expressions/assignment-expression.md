# Assignment Expression

Assignment expressions are used to assign a value to a variable. They may also be chained based on their order of
precedence, where each item is one by one evaluated.

## Syntax

```ts
NAME = EXP
```

### Operator Modified Assignment

Besides the regular assignment, there are also operators that modify the value of the variable by the value of the
expression. These operators are `+=`, `-=`, `*=`, `/=`, `**=` and `%=`. These acts like arithmetic
expressions and assignments combined.

```ts
NAME ( += | -= | *= | /= | **= | %= ) EXP
```

## Examples

### Assigning a value to a variable

```ts
var var1: num = 0;

// Re-assigned the value of var1
var1 = 3;
```

### Chaining assignment expressions

```ts
var x: num = 5;
var y: num = 5;
var z: num = 5;

// Chained assignment expressions
x = y = z = 1;

// All of these should now output "1"
print(x as str);
print(y as str);
print(z as str);
```

### Operator Modified Assignment

```ts
var x: num = 5;

// Operator modified assignment
x += 5; // x = x + 5
x -= 5; // x = x - 5
x *= 5; // x = x * 5
x /= 5; // x = x / 5
x **= 5; // x = x ** 5
x %= 5; // x = x % 5
```
