---
title: Array Type
---
# Array Type - `Array<T>`

<p class="red-highlight-text">
Scheduled for release in Kipper v0.12.0
</p>

The `Array<T>` data type is a unique data type, as it does not represent itself a value, but rather a sequence of
multiple values. As a result of that an array has also a length and an index for each item, which you may use to access
them using the following syntax:

```ts
VAR[INDEX];
```

## Examples

```ts
// ✓ Creating a simple list
var var24: Array<num> = [2, 3, 4];

// ✓ Accessing item of value per index (0 = first item)
var var25: Array<num> = [2, 3, 4];
var item_of_list: num = var26[2]; // -> 4

// ✓ Accessing the length of the list using 'len()'
var len_of_list: num = len(var26); // -> 3

// ✓ Accessing the last item of the list using 'last()'
var len_of_list: num = last(var26); // -> 4

// ✓ Accessing the first item of the list using 'first()'
var len_of_list: num = first(var26); // -> 2

// X May not set a list to a single value
var var26: Array<num> = 2;

// X May not set item of list to an invalid type
var var27: Array<num> = ["string"];

// X May not convert list to another type as a whole!
var var28: Array<str> = ["99", "1893", "4"];
var var29: Array<num> = var27 as Array<num>; // -> Invalid conversion
```
