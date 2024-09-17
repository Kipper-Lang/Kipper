# F-String Expression

F-String Expression is a string literal that is prefixed with `f`. It may contain replacement fields, which are
expressions delimited by curly braces `{}`.

This is the Kipper variant of templating/string formatting. It works by evaluating the expression inside the curly
braces and replacing the curly braces and the expression with the result of the evaluation.

```kipper
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

### String Formatting

```kipper
var name: str = "Luna";
var age: num = 20;
print(f"Hello {name}! You are {age} years old.");
```

### Simplified String Concatenation

```kipper
var welcome: str = "Hello ";
var name: str = "World";
print(f"{welcome}{name}");
```

### Using Expressions in F-Strings

```kipper
var name: str = "user";
var age: num = 20;
print(f"Hello {name}! You are {age} years old. Next year you will be {age + 1} years old.");
```

### Using F-Strings in F-Strings (Nested Expressions)

```kipper
def printWelcome(name: str, age: num) -> void {
    var olderKeyword: str = "adult";
    var youngerKeyword: str = "child";
    print(f"Hello {name}! {age > 18 ? f"You are an {olderKeyword}." : f"You are a {youngerKeyword}."}");
}

var name: str = "Luna";
var age: num = 20;
printWelcome(name, age);
```
