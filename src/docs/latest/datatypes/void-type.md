---
title: Void Type
---

# Void Type - `void`

The `void` type represents a value that is nothing and may only be `void`.

This is usually used for functions to hint they have no return. Otherwise, this data type is practically useless, and it
should be not be used.

## Examples

### Creating a `void` variable

```ts
var var1: void = void;
```

### Using `void` to indicate a function has no return

```ts
def func1() -> void {
  return;
}
```

### Explicitly returning `void` for a function

```ts
def func2() -> void {
  return void;
}
```

### Assigning `void` value to a `void` variable

```ts
var var23: void = func2();
```

### <em class="red-checkmark">X</em> Can not assign to a `void` variable anything but `void`

```ts
// X May not set a 'void' variable to anything except 'void'
var var2: void = 4;
```

