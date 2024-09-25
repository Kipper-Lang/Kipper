---
title: Array Type
---

# Array Type - `Array<T>`

The `Array<T>` data type is a unique data type, as it does not represent itself a value, but rather a sequence of
multiple values. As a result of that an array has also a length and an index for each item, which you may use to access
them using an [bracket notation member access expression](../expressions/member-access-expression.html#bracket-notation).

## Generic Arguments

### `T`

The generic argument `T` represents the type of the items that are stored in the array. Any other type not matching `T`
will result in a type error.

## Examples

### Simple constant array definition

```kipper
var var24: Array<num> = [2, 3, 4];
```

### Accessing elements of an array

```kipper
var var25: Array<num> = [2, 3, 4];
var item_of_list: num = var26[2]; // -> 4
```

### Calling [`len`](../built-in-functions.html#len) function on an array

```kipper
var len_of_list: num = len(var26); // -> 3
```

### Calling `last` function on an array

```kipper
var len_of_list: num = last(var26); // -> 4
```

### Calling `first` function on an array

```kipper
// ✓ Accessing the first item of the list using 'first()'
var len_of_list: num = first(var26); // -> 2
```

### <em class="red-checkmark">X</em> May not set a list to a single value

```kipper
var var26: Array<num> = 2;
```

### <em class="red-checkmark">X</em> May not set item of list to an invalid type

```kipper
var var27: Array<num> = ["string"];
```

### <em class="red-checkmark">X</em> May not convert list to another type as a whole

```kipper
var var28: Array<str> = ["99", "1893", "4"];
var var29: Array<num> = var27 as Array<num>; // -> Invalid conversion
```
