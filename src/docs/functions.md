# Functions

Functions are an easy way to re-use code and provide interface to do certain things over and over again. These functions
may also accept arguments/parameters to change the functions behaviour and also return values after execution.

Functions are essential for every program, as the ability to re-execute statements over and over again, makes them an
powerful tool for every program allowing the creation of complex behaviour fairly easily and avoiding ugly code
repetition.

<p class="red-highlight-text">
  Scheduled for release in Kipper v0.10.0
</p>

## Syntax

Defining a Kipper function:

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

Calling a defined function ([Function call expression](./expressions.html)):

```ts
call NAME(ARGS...);
```

## Behaviour

When calling a function all arguments have to be passed with the argument types matching. When calling, the variables are going to be copied to the local function stack (local scope), where the function may utilise them for its behaviour.

_Note! A function allows for an infinite amount of arguments (`ARG_NAME: TYPE`), though at the current stage of development, no optional or default arguments are available/planned. Meaning **all** arguments have to be passed when calling a function!_

## Examples

```ts
// ✓ Simple void function with no arguments and return
def print_banner() -> void {
  call print("Welcome to Kipper!");
  return; // Optional
}

// ✓ Calling the function
call print_banner();

// ✓ Simple function with arguments and return-type
// Note: It is good to always document your functions to make sure you understand their behaviour even later on!
/*
 * @brief Adds the prefix before the main_str
 * @param prefix The prefix that shall be added
 * @param main_str The main_str to append to
 */
def add_prefix(prefix: str, main_str: str) -> str {
  return prefix + main_str;
}

// ✓ Calling the function with all the required arguments and passing the result to a variable
var result_str: str = call add_prefix("pre", "fix"); // -> "prefix"

// X May not pass the function itself to a variable!
var any_var: str = add_prefix("pre", "fix");

// X May not pass the function itself to a variable!
var any_var: str = add_prefix;

// X May not call a function without its required arguments or brackets!
var any_var: str = call add_prefix;
```
