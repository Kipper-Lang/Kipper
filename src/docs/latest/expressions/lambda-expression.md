# Lambda Expression

A lambda expression is an expression creating an anonymous function in memory that can be used as a value. It is a way
to define a function without giving it a name, and it can be used in the same way as a named function.

When creating a lambda expression it will be of type [`Func<ARGS..., RET>`](../datatypes/func-type.html), where
`ARGS...` is a list of arguments the function takes and `RET` is the return type of the function.

## Syntax

### Expression Lambda Expression

```kipper
(ARG1: T1, ...): RET -> EXP
```

### Compound Lambda Expression

```kipper
(ARG1: T1, ...): RET -> {
	// Content
	return EXP;
}
```

## Examples

### Assigning an anonymous lambda function to a variable

```kipper
var add_func: Func<num, num, num> = (a: num, b: num): num -> {
		return a + b;
};

var result: num = add_func(2, 3);
print(result); // -> 5
```

### Assigning an anonymous lambda function with no arguments to a variable

```kipper
var hello_func: Func<void> = (): void -> {
		print("Hello, World!");
};

hello_func(); // -> "Hello, World!"
```

### Passing on a lambda function as a function argument

```kipper
def forEach(values: Array<num>, func: Func<num, void>) -> void {
	for (var i: num = 0; i < len(values); i++) {
		func(values[i]);
	}
}

var values: Array<num> = [1, 2, 3, 4, 5];
forEach(values, (value: num): void -> {
		print(value);
});
```

### Using a lambda function in a higher-order function

```kipper
def map(values: Array<num>, func: Func<num, num>) -> Array<num> {
	var result: Array<num> = [];
	for (var i: num = 0; i < len(values); i++) {
		result[i] = func(values[i]);
	}
	return result;
}

var values: Array<num> = [1, 2, 3, 4, 5];
var squared_values: Array<num> = map(values, (value: num): num -> {
		return value ** 2;
});
print(squared_values); // -> [1, 4, 9, 16, 25]
```
