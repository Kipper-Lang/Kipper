---
title: Void Type
---
# Void Type - `void`

The `void` type represents a value that is nothing and may only be `void`.

This is usually used for functions to hint they have no return. Otherwise, this data type is practically useless, and it
should be not be used.

## Examples

```ts
// ✓ Creating a void variable - This may only be 'void'
var var21: void = void;

// X May not set a 'void' variable to anything except 'void'
var var22: void = 4;

// ✓ Returning void for a function - Returns 'void' per default
def func1() -> void {
  return;
}

// ✓ Returning void for a function manually
def func2() -> void {
  return void;
}

// ✓ Assigning void return to variable of type 'void'
var var23: void = func2();
```

