# F-String Expression

F-String Expression is a string literal that is prefixed with `f`. It may contain replacement fields, which are
expressions delimited by curly braces `{}`.

This is the Kipper variant of templating/string formatting. It works by evaluating the expression inside the curly
braces and replacing the curly braces and the expression with the result of the evaluation.

```kipperper
f"Hello {name}!"
```

The above expression will be evaluated to `Hello World!` if `name` is `World`.

## Syntax

The syntax of F-String Expression is as follows:

```kipper
f"STR{EXP}STR";
```

Every expression inside the curly braces will be evaluated and replaced with the result of the evaluation. The rest
of the string will be left as is. Expressions may appear anywhere in the string, including the beginning and the end.

## Examples

### Simple F-String Expression

```kipper
var name: str = "World";
print(f"Hello {name}!"); // -> "Hello World!"
```

### F-String Expression with multiple expressions

```kipper
var name: str = "World";
var age: num = 42;
print(f"Hello {name}! You are {age} years old."); // -> "Hello World! You are 42 years old."
```

### F-String Expression with expressions at the beginning and the end

```kipper
var name: str = "Kipper";
print(f"{name} is the best!"); // -> "Kipper is the best!"
```

### Nested F-String Expression

```kipper
var name: str = "World";
print(f"Hello {f"nested {name}"}!"); // -> "Hello nested World!"
```

### F-String Expression with escaped curly braces

```kipper
var name: str = "World";
print(f"Hello {f"\{name\}"}!"); // -> "Hello {name}!"
```
