# Convert Or Cast Expression

Conversion expressions convert the value of an expression to a target type using pre-defined built-in conversion
functions. Such conversions are essential for using values of different types in the same expression and avoiding type
errors.

An important example of this are `print` function call expressions, as the `print` function is a built-in function that
only allows a string as a parameter. Therefore, to print out a number you first have to convert it to a string.

## Syntax

```ts
EXP as TYPE;
```

## Allowed conversions

### From `str` to `num`

Converts a string to a number, if it meets the following requirements:

- Only contains numeric characters (`0 - 9`)
- Is not empty (length > 0)

Otherwise if the string does not meet the above requirements, it will return `NaN` (Not a number). In future releases,
though this will throw a `ConversionError`.

```ts
"203" as num; // -> 203
```

### From `num` to `str`

Converts a number to an identical string representation of the number.

```ts
203 as str; // -> "203"
```

### From `char` to `str`

Converts a single character to a string.

```ts
"c" as str; // -> "c"
```

### From `num` to `bool`

Converts a number to a bool. This evaluates to `true` if it's a non-zero value.

```ts
20 as bool; // -> true
0 as bool; // -> false
```

### From `bool` to `num`

Converts a bool to a number. This evaluates to `1` if it's `true`, otherwise it's `0`.

```ts
true as num; // -> 1
false as num; // -> 0
```

### From `bool` to `str`

Converts a string to a number. This evaluates to `"true"` if it's `true`, otherwise it's `"false"`.

```ts
true as str; // -> "true"
false as str; // -> "false"
```
