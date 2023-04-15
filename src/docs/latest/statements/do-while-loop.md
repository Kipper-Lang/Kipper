# Do-While Loop

Do-while-loops are loops with a similar behaviour to [while-loops](./while-loop.html), with the main difference being
that do-while loops run the statement once before starting evaluating its condition. Afterwards the
statement is only run if the `CONDITION` is met.

<p class="important">
  Scheduled for release in Kipper v0.12.0
</p>

## Syntax

```ts
do STATEMENT while (CONDITION);
```

## Execution Schema

- Run `STATEMENT` (Only the first time).
- Check `CONDITION`, if it exists, before running the `STATEMENT` again. If `CONDITION` is `false`, then the loop will be stopped!
- Run `STATEMENT` if `CONDITION` was `true`.

## Examples

```ts
// ✓ Simple loop
var var1: num = 0;
do {
  var1++; // This statement is evaluated once at the start even if the condition isn't met
} while (var1 >= 3);
call print(f"'var1' is now '{var1}'"); // -> 'var1' is now '1'

// ✓ Simple loop, where initially the condition isn't met but after the first run it becomes true
var var2: num = 0;
do {
  var2++;
} while (var2 > 0 && var2 <= 25)
call print(f"'var1' is now '{var2}'"); // -> 'var1' is now '26'

// X Infinite Loop - Avoid this, as it results in your program freezing/running forever
do {
  call print("An unnecessary print!");
} while (true)
```
