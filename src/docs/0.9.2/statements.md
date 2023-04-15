# Statements

Statements form the basis of Kipper next to [expressions](./expressions.html), and perform the basic operations and
define the logic in your program. They can be easily identified with their usage of either curly brackets (`{ }`) or a
semicolon (`;`).

Every operation in a Kipper program must be contained in a statement to be valid. This also includes
[expressions](./expressions.html), which can never be written alone.

## List of statements in Kipper

### Expression Statement

An expression statement is a simple expression that ends in a semicolon (`;`) and evaluates one or more expressions,
without the involvement of any other statements.

#### Syntax

```ts
EXPRESSION;
```

#### Examples

Common examples of expression statements are with increment or decrement expressions ( `val++`/`val--`) that simply add
or subtract `1` to/from a value. These often do not require any other expressions, and can simply be used as a whole
statement, like this:

```ts
// Defining a variable
var increase_this: num = 4;
increase_this++; // Expression statement -> 5
increase_this--; // Expression statement -> 4
```

### Compound Statement

A compound statement is also called block of code, and defines, as already explained in [variables](./variables.html),
a scope for variables. Compound statements are commonly used together with other statements, such as
[if-statements](./if-statement.html), [while-loops](./while-loop.html) and [for-loops](./for-loop.html).

#### Syntax

```ts
{
  STATEMENTS (OPTIONAL)...
}
```

### If Statement

_This also has its own docs page, which can be accessed [here](./if-statement.html)._

If-statements or also if-else-statements make up an essential part of every program. These statements check if a
specified condition is met and react accordingly. If the specified condition isn’t met, the program will execute a
different code, which may be specified inside an `else` code block.

#### Syntax

They must have a single starting `if`, may have multiple extending `else if` branches and can have a single ending `else` branch, which is evaluated if the previous condition were all `false`.

```ts
if (CONDITION) STATEMENT; // Required
else if (CONDITION) STATEMENT; // Optional - No limit for the amount of 'else if' branches
else STATEMENT; // Optional
```

#### Examples

```ts
// Simple comparison of a value
var var1: num = 4;
if (var1 == 4) {
  call print("It's 4");
} else {
  call print("It's not 4");
}

// Simple else-if branch chaining
var var2: num = 5;
if (var2 < 5) {
  call print("It's less than 5");
} else if (var2 == 5) {
  call print("It's 5");
} else {
  call print("It's more than 4");
}
```

### For-loop Statement

<p class="important">
  Released in v0.10.0 - Please update your version to access this feature.
</p>

_This also has its own docs page, which can be accessed [here](./for-loop.html)._

For-loops are statements with a loop-expression, a loop condition and a statement body that are executed as long as a
specified condition is met.

For-loops have the unique attribute, unlike [while-loops](./while-loop.html) and [do-while-loops](./do-while-loop.html),
of having an executable `LOOP_EXPRESSION`, which is evaluated at the end of every loop cycle. This `LOOP_EXPRESSION` can
be used to do repeating tasks at the end of a loop cycle, like calling a function or increasing a counter.

#### Syntax

```ts
for (INIT_EXPRESSION(OPTIONAL); CONDITION(OPTIONAL); LOOP_EXPRESSION(OPTIONAL)) STATEMENT;
```

The execution of a for-loop follows this schema:

- Evaluate `INIT_EXPRESSION`, if it exists (Only the first time).
- Check `CONDITION`, if it exists, before running the `STATEMENT`. If `CONDITION` is `false`, then the loop will be stopped!
- Run `STATEMENT` if `CONDITION` was `true`.
- Evaluate `LOOP_EXPRESSION` after finishing the execution of `STATEMENT`, and the loop was not stopped using `return;` or `break;`.

### While-loop Statement

<p class="important">
  Released in v0.10.0 - Please update your version to access this feature.
</p>

_This also has its own docs page, which can be accessed [here](./while-loop.html)._

While-loops are code blocks that are executed multiple times as long as the specified `CONDITION` is met. The behaviour
of while-loops is very similar to [do-while-loops](./do-while-loop.html), and in some cases it even might be better to
use do-while than while-loops, so watch out for opportunities to replace while-loops with do-while loops.

#### Syntax

```ts
while (CONDITION) STATEMENT;
```

The execution of a while-loop follows this schema:

- Check `CONDITION`, if it exists, before running the `STATEMENT`. If `CONDITION` is `false`, then the loop will be stopped!
- Run `STATEMENT` if `CONDITION` was `true`.

### Do-while-loop Statement

<p class="important">
  Released in v0.10.0 - Please update your version to access this feature.
</p>

_This also has its own docs page, which can be accessed [here](./do-while-loop.html)._

Do-while-loops are loops with a similar behaviour to [while-loops](./while-loop.html), with the main difference being
that do-while loops run the statement once before starting evaluating its condition. Afterwards the
statement is only run if the `CONDITION` is met.

#### Syntax

```ts
do STATEMENT while (CONDITION);
```

The execution of a do-while-loop follows this schema:

- Run `STATEMENT` (Only the first time).
- Check `CONDITION`, if it exists, before running the `STATEMENT` again. If `CONDITION` is `false`, then the loop will
  be stopped!
- Run `STATEMENT` if `CONDITION` was `true`.

### Jump Statement

Jump statements are statements that can stop the execution of a [function](./functions.html) or a loop
([while-loops](./while-loop.html), [do-while-loops](./do-while-loop.html) or [for-loops](./for-loop.html))
prematurely.

Jump statements must always have a valid target (parent statement) that can be determined at compile time, otherwise
the statement is invalid and an error will be thrown.

These jump statements are:

- `break` \- Stops a [while-loop](./while-loop.html), [do-while-loop](./do-while-loop.html) or [for-loop](./for-loop.html).
- `return` \- Returns from a [functions](./functions.html) with an optional specific return value (Must match function return type).
- `continue` \- Jumps directly to the execution of the next loop cycle and will compare the loop-condition again.

#### Syntax

```ts
// Only valid in functions
return VALUE(OPTIONAL); // 'VALUE' is only required if the return type of the function is not 'void'

// Only valid in loops
break;

// Only valid in loops
continue;
```
