# For Loop

For-loops are statements with a loop-expression, a loop condition and a statement body that are executed as long as a
specified condition is met.

For-loops have the unique attribute, unlike [while-loops](./while-loop.html) and [do-while-loops](./do-while-loop.html),
of having an executable loop expression, which is evaluated at the end of every loop cycle. This loop expression can
be used to do repeating tasks at the end of a loop cycle, like calling a function or increasing a counter.

## Syntax

```kipper
for (INIT_EXPRESSION (OPTIONAL); CONDITION (OPTIONAL); LOOP_EXPRESSIONS (OPTIONAL)...) STATEMENT;
```

## Execution Schema

- Evaluate `INIT_EXPRESSION`, if it exists (Only the first time).
- Check `CONDITION`, if it exists, before running the `STATEMENT`. If `CONDITION` is `false`, then the loop will be stopped!
- Run `STATEMENT` if `CONDITION` was `true`.
- If the loop was not stopped using `return` or `break`, evaluate `LOOP_EXPRESSION` after finishing the execution of `STATEMENT`.

## Examples

```kipper
// ✓ Simple for-loop with an execution counter
for (var i: num = 1; i < 10; i++) {
  call print(f"Running for the {i}. time!");
}

// ✓ Simple for-loop with two execution counters
var j: num = 0;
for (var i: num = 1; i < 10; i++, j++) {
  call print(f"i = {i}");
}
call print(f"Additional variable j = {j}"); // -> Additional variable j = 10

// X Infinite loop - Avoid this, as it results in your program freezing/running forever
for ( ; ; ) {
  call print(f"Running for the {i}. time!");
}
```
