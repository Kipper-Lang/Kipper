# Jump Statement

Jump statements are statements that can stop the execution of a [function](../functions.html) or a loop
([while-loops](./while-loop.html), [do-while-loops](./do-while-loop.html) or [for-loops](./for-loop.html))
prematurely.

Jump statements must always have a valid target (parent statement) that can be determined at compile time, otherwise
the statement is invalid and an error will be thrown.

These jump statements are:

- `break` \- Stops a [while-loop](./while-loop.html), [do-while-loop](./do-while-loop.html) or [for-loop](./for-loop.html).
- `return` \- Returns from a [functions](../functions.html) with an optional specific return value (Must match
  function return type).
- `continue` \- Jumps directly to the execution of the next loop cycle and will compare the loop-condition again.

## Syntax

```ts
// Only valid in functions
return VALUE(OPTIONAL); // 'VALUE' is only required if the return type of the function is not 'void'

// Only valid in loops
break;

// Only valid in loops
continue;
```
