# If Statement

If-statements or also if-else-statements make up an essential part of every program. These statements check if a
specified condition is met and react accordingly. If the specified condition isn’t met, the program will execute a
different code, which may be specified inside an `else` code block.

It is also possible to check multiple different conditions by using `else if` blocks.

## Syntax

They must have a single starting `if`, may have multiple extending `else if` branches and can have a single ending `else` branch, which is evaluated if the previous condition were all `false`.

```kipper
if (CONDITION) STATEMENT;
// Required
else if (CONDITION) STATEMENT;
// Optional - No limit for the amount of 'else if' branches
else STATEMENT; // Optional
```

## Examples

```kipper
// Simple comparison of a value
var var1: num = 4;
if (var1 == 4) {
  call print("It's 4");
} else {
  call print("It's not 4");
}

// Simple else-if branch chaining
var var2: num = 5;
if (var2 < 5) {
  call print("It's less than 5");
} else if (var2 == 5) {
  call print("It's 5");
} else {
  call print("It's more than 5");
}

// Simple else-if branch chaining without braces
var var3: num = 123;
if (var3 < 123)
  call print("It's less than 123");
else if (var3 == 123) {
  call print("It's 123");
else
  call print("It's more than 123");

// Nested if-statement
var var4: str = "Hello!";
if (var4 == "Hello")
  call print("It says Hello. Hello back :)");
else
  if (var4 == "Hello!")
    call print("It says Hello! Hello back!");
  else
    call print(f"It says: {var4}");
```
