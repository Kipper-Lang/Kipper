# Function Call Expression

Function call expression are expressions that call and run a specified [function](../functions.html) and evaluates to
the return of the [function](../functions.html). In case the return value is not assigned to any variable or used in
another expression, then it will be simply discarded.

If the return type of the [function](../functions.html) is `void`, then the function call expression will not return any
value.

_See also [Functions](../functions.html)._

## Syntax

```kipper
call NAME(ARG1, ARG2, ARGn, ...);
// OR - 'call' is optional
NAME(ARGS, ARG2, ARGn, ...);
```

## Examples

### Calling a defined function

```kipper
def func1(val1: num, val2: num) -> num {
	return val1 + val2;
}
func1(10, 10); // -> 20
```

### Calling a defined function and assigning it

```kipper
def func2(val1: num, val2: num) -> num {
	return val1 * val2;
}
var example1: num = func2(10, 10); // -> 100
```

### Multiple chained function calls

```kipper
def func3(val1: num, val2: num) -> num {
	if (val1 < 0) {
		return 0;
	}
	return val1 * val2;
}
var example2: num = func3(5, 10) + func3(-1, 10); // -> 50
```

### Using the return of a function with a return type of `void`

```kipper
def func4() -> void {
	return;
}
var example3: void = func4(); // -> void
```

### <em class="red-checkmark">X</em> Can not use the return of a void function

```kipper
def func4() -> void {
	return;
}
4 + func5(); // -> Error: Invalid arithmetic operation between types 'num' and 'void'.
```
