# While-loop

While-loops are code blocks that are executed multiple times as long as the specified `CONDITION` is met. The behaviour
of while-loops is very similar to [do-while-loops](./do-while-loop.html), and in some cases it even might be better to
use do-while than while-loops, so watch out for opportunities to replace while-loops with do-while loops.

<p class="important">
  Scheduled for release in Kipper v0.11.0
</p>

## Syntax

```ts
while (CONDITION) STATEMENT;
```

## Execution Schema

- Check `CONDITION`, if it exists, before running the `STATEMENT`. If `CONDITION` is `false`, then the loop will be stopped!
- Run `STATEMENT` if `CONDITION` was `true`.

## Examples

```ts
// ✓ Simple loop
var var1: num = 0;
while (var1 <= 5) {
  var1++;
}
call print(f"'var1' is now '{var1}'"); // -> 'var1' is now '6'


// ✓ Simple loop, without braces
var var2: num = 0;
while (var2 > 0 && var2 <= 25)
  var2++;
call print(f"'var1' is now '{var2}'"); // -> 'var1' is now '0'

// X Infinite Loop - Avoid this, as it results in your program freezing/running forever
while (true) {
  call print("An unnecessary print!");
}
```
