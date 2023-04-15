# Functions

A function is a block of code that can be called by name. It can be passed data to operate on (i.e. the parameters) and
can optionally return data (the return value).

All data that is passed to a function is explicitly passed.

Functions are an easy way to re-use code and provide interface to do certain things over and over again. They are 
essential for every program, as the ability to re-execute statements over and over again, makes them a powerful tool 
for every program allowing the creation of complex behaviour fairly easily and avoiding ugly or tedious code repetition.

## Syntax

### Defining a function

```ts
def NAME(ARG_NAME: TYPE, ...) -> RETURN_TYPE {
  STATEMENTS... (OPTIONAL) // Function content

  return; // Optional if RETURN_TYPE is void, invalid if RETURN_TYPE is not void
  return VALUE; // Required if RETURN_TYPE is not void
}
```

Rules for defining a Kipper function:

- A function body/statement must exist.
- An identifier must be specified.
- The return type must be specified.
- Arguments are optional.

### Calling a function

_See also [Function call expression](./expressions/index.html)._

```ts
call NAME(ARG1, ARG2, ARGn, ...);
// OR - 'call' is optional
NAME(ARGS, ARG2, ARGn, ...);
```

## Behaviour

Functions are executable segments of code that are only executed when their identifier is referenced and called as shown above.

When calling them all arguments have to be passed with the argument types matching. Once the function has been called,
the variables are going to be copied to the local function stack (local scope) and be available to the body of the function.
This means that the arguments will also be referencable by statements inside the function body.

<div class="important">
  <h2>Important</h2>
  <p>
    A function allows for an infinite amount of arguments, though at the current stage of development, no optional or
    default arguments are available. Meaning <em>all</em> arguments have to be defined when calling a function!
  </p>
</div>

### Function name shadowing

Like many other languages, Kipper allows some form of identifier/variable shadowing, though it's heavily restricted to
avoid confusion in many cases. An exception though is the shadowing of the function identifier inside its own scope.

That means that the following code is valid and that the variable `x` is _not_ going to throw an `IdentifierError`:

```ts
def x() -> void {
  // 'x' will exist without issue with the type 'num'
  // in this scope/all children scopes.
  var x: num = 5;

  // 'x' can also now be referenced, though note that the function will keep being shadowed
  print(x as str);
}
```

## Examples

### Simple function

```ts
def func1() -> void {
	return;
}

// May call with either 'call' prefix keyword or without
func1();
call func1();
```

### Function with parameters

```ts
def func2(param1: num, param2: str) -> void {
	return;
}

var result: void = func2(4, "string"); // -> void (no meaningful return value)
```

### Function with return value

```ts
def func3() -> num {
	return 4;
}

var result = func3(); // -> 4
```

### Function with parameters and return value

```ts
def func4(param1: num, param2: str) -> str {
	return param1 as str + param2;
}

var result: str = func4(4, "string"); // -> "4string"
```

### <em class="red-checkmark">X</em> May not call a function without parameters with parameters

```ts
def func5() -> void {
	return;
}

func5(4, "string");
```

### <em class="red-checkmark">X</em> May not call a function without the required parameters

```ts
def func6(param1: num, param2: str) -> void {
    return;
}

func6(4);
```

### <em class="red-checkmark">X</em> May not call a function with invalid parameters/types

```ts
def func7(param1: num, param2: str) -> void {
	return;
}

func7("string", 4);
```

### <em class="red-checkmark">X</em> May not return a value of a different type than the return type

```ts
def func8() -> num {
    return "string";
}
```

### More complex example

```ts
// Note: It is good to always document your functions
/*
 * @brief Adds the prefix before the main_str
 * @param prefix The prefix that shall be added
 * @param main_str The main_str to append to
 */
def add_prefix(prefix: str, main_str: str) -> str {
  return prefix + main_str;
}

// ✓ Calling the function with all the required arguments and passing the result to a variable
var result_str: str = add_prefix("pre", "fix"); // -> "prefix"

// X May not call a function without its required arguments!
var any_var: str = add_prefix();

// X May not pass the function itself to a variable!
var any_var: str = add_prefix;
```
