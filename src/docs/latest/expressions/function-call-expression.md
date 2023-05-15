# Function Call Expression

Function call expression are expressions that call and run a specified [function](../functions.html) and evaluates to
the return of the [function](../functions.html). In case that the return is not assigned to any variable or used in
another expression, then it will be simply discarded.

If the return type of the [function](../functions.html) is `void`, then the function call expression will not return any
value.

## Syntax

```ts
call FUNC(ARGS...)
```

## Examples

### Calling a defined function

```ts
def func1() -> num { return 5; }
func1(); // -> 5
```

### Calling a defined function and assigning it

```ts
def func2() -> num { return 10; }
var example1: num = func2(); // -> 10
```

### Multiple chained function calls

```ts
// ✓ Multiple function calls with the end-result being assigned to a variable
def func3() -> num { return 25; }
var example2: num = func2() + func2(); // -> 50
```

### Using the return of a function with a return type of `void`

```ts
def func4() -> void {}
var example3: void = func4(); // -> void
```

### <em class="red-checkmark">X</em> Can not use the return of a void function

```ts
def func4() -> void {}
4 + func5(); // -> Error: Invalid arithmetic operation between types 'num' and 'void'.
```
