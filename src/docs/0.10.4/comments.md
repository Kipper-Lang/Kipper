# Comments

A comment is a special string, which is processed differently from other code elements, as it is ignored by the parser
and has no effect on the behaviour of a program. Comments are therefore best suited for describing code functionality
and informing the reader of important info.

## Syntax

- Single Line Comment:
```kipper
// CONTENT
```
- Block Comment:
```kipper
/* CONTENT */
```

## Function Comments

Function comments are special comments, which are placed directly above a function definition.
They are used to describe the functionality of a function and its parameters, and should be
used whenever a function is not self-explanatory.

Function comments are written in the following format:
```kipper
/**
 * DESCRIPTION
 * @param PARAMETER_NAME DESCRIPTION
 * @returns DESCRIPTION
 */
def FUNCTION_NAME(...) -> ... {
  ...
}
```

This is a best-practise for any large code and library, as it allows the user to quickly understand the functionality
of a function, without having to read the entire function body. Especially also using IDEs this is essential for quick
and easy development.

## Examples

### One-Line Comment

```kipper
// Greet the user
print("Hello user!");
```

### Multi-Line Comment

```kipper
/*
 * We have a lot to say.
 * This is a very long comment.
 * It spans multiple lines.
 */
print("Hello user!");
print("This is a very long comment.");
print("It spans multiple lines.");
```

### Function Comment

```kipper
/**
 * Calculates the sum of all numbers in the list 'val'.
 * @param val The list of numbers.
 * @returns The sum of all numbers.
 */
def sum(val: Array<num>) -> num {
  var sum: num = 0;
  for (var i: num = 0; i < call len(val); i++) {
    sum += i;
  }
  return sum;
}
```
