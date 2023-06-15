---
title: Function Type
---

# Function Type - `func`

The function type is a special type that represents a function. It is used to define functions and to call functions by
storing them in variables.

<p class="important">
    The function type is at the moment only half implemented, meaning that it is not possible to pass generic arguments
    to specify the type, nor is it possible to call the function stored. This will be added in a future release, though
    the syntax is already defined.
</p>

## Examples

### Storing a simple function

```kipper
def func1() -> void {
    return;
}

var storedRef = func1;
```

### Storing a built-in function

```
var storedRef = print;
```

### <em class="red-checkmark">X</em> Calling a function reference

```kipper
def func2() -> void {
    return;
}

var storedRef = func2;
func2(); // Not possible at the current version
```
