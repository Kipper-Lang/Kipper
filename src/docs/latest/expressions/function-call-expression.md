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

```ts
// ✓ Calling a defined function
def func1() -> num { return 5; }
call func1(); // -> 5

// ✓ Calling a defined function and assigning it to a variable
def func2() -> num { return 10; }
var example1: num = call func2(); // -> 10

// ✓ Multiple function calls with the end-result being assigned to a variable
def func3() -> num { return 25; }
var example2: num = call func2() + call func2(); // -> 50

// ✓ Using the return of a function with a return type of void and assigning it to a variable
def func4() -> void {}
var example3: void = call func4(); // -> void

// X Can not use the return of a void function with any other expression
def func4() -> void {}
4 + call func5(); // -> Error: Invalid arithmetic operation between types 'num' and 'void'.
```
