---
title: Void Type
---

# Void Type - `void`

The `void` type represents a value that is nothing and may only be `void` or [`undefined`](./undefined-type.html).

This is usually used for functions to hint they have no return. Otherwise, this data type is practically useless, as it
is practically only a synonym for [`undefined`](./undefined-type.html).

The only difference is that `void` is indicating that the value is always nothing, while `undefined` is indicating
that the value is nothing at the moment but may be something later (Like in an optional parameter or a variable that is
not yet assigned).

This also means comparing `void` to `undefined` will always be true:

```kipper
var var1: void = void;
var var2: undefined = undefined;

var1 == var2; // true
```

Note that unlike in JavaScript, `void` is not an operator, but a type. This means that standard syntax of `void 0` is
not valid in this language. Instead, simply use void.

<div class="important">
	<h2>Note</h2>
	<p>
		This may change in the future, as a way to allow the easy nullification of data using the <code>void EXP</code>
		syntax.
	</p>
</div>

## Examples

### Creating a `void` variable

```kipper
var var1: void = void;
```

### Using `void` to indicate a function has no return

```kipper
def func1() -> void {
  return;
}
```

### Explicitly returning `void` for a function

```kipper
def func2() -> void {
  return void;
}
```

### Assigning `void` value to a `void` variable

```ts
var var23: void = func2();
```

### <em class="red-checkmark">X</em> Can not assign to a `void` variable anything but `void`

```kipper
// X May not set a 'void' variable to anything except 'void'
var var2: void = 4;
```
