---
title: Function Type
---

# Function Type - `Func<ARGS..., RET>`

The function type is a special type that represents a function. It is used to define functions and to call functions by
storing them in variables.

## Generic Arguments

### `ARGS...`

An exhaustive list of arguments that the function takes. This may be empty if the function does not take any arguments.

This list takes in each element except the last one.

### `RET`

The return type of the function. This may be `void` if the function does not return anything.

## Examples

### Assigning named function and calling it from the reference variable

```kipper
def add(a: num, b: num) -> num {
		return a + b;
}

var add_func: Func<num, num, num> = add;
var result: num = add_func(2, 3);
print(result); // -> 5
```

### Assigning anonymous lambda function and calling it from the reference variable

```kipper
var add_func: Func<num, num, num> = (a: num, b: num): num -> {
		return a + b;
};

var result: num = add_func(2, 3);
print(result); // -> 5
```

### Assigning anonymous lambda function with no arguments and calling it from the reference variable

```kipper
var hello_func: Func<void> = (): void -> {
		print("Hello, World!");
};

hello_func(); // -> "Hello, World!"
```

### Passing on a function as a function argument

```kipper
def forEach(values: Array<num>, func: Func<num, void>) -> void {
    for (var i: num = 0; i < len(values); i++) {
        func(values[i]);
    }
}

var f: Func<num, void> = (arg: num): void -> {
    print(arg ** arg);
};
forEach([1, 2, 3, 4, 5, 6, 7, 8, 9], f);
// ->
// 1
// 4
// 27
// 256
// 3125
// 46656
// 823543
// 16777216
// 387420489
```
