# Comments

A comment is a special string, which is ignored by the Parser and has no effect on the
compilation of a Program. Comments are best suited for describing functionality and informing
the code reader of important info.

## Syntax

```kipper
/* CONTENT */
```

## Examples

```kipper
// ✓ Simple comment
/* Greet the user */
call print("Hello user!");

// ✓ Function comment
/**
 * Calculates the sum of all numbers in the list 'val'.
 * @param val The list of numbers.
 * @returns The sum of all numbers
 */
def sum(val: list<num>) -> num {
  var sum: num = 0;
  for (var i: num = 0; i < call len(val); i++) {
    sum += i;
  }
  return sum;
}
```
