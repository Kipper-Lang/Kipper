# Member Access Expression

Member access expressions are used to access a member or multiple members of an object or iterable.

## Syntax

### Dot Notation

Syntax for accessing a member of an object:

```kipper
EXP . IDENTIFIER
```

### Bracket Notation

Syntax for accessing a member of an object or an element of an iterable (may be string or list):

```kipper
EXP [ EXP ]
```

### Slice Notation

Syntax for accessing a slice of an iterable (may be string or list):

```kipper
EXP [ EXP : EXP ]
```

## Examples

### Accessing a member of an object

```kipper
interface SomeInterface {
	key: str;
}

var obj: SomeInterface = { key: "value" };
var value: str = obj.key;
print(value); // -> "value"
```

### Accessing an element of an array

```kipper
var list: Array<num> = [1, 2, 3];
var item: num = list[1];
print(item); // -> 2
```

### Accessing a slice of an array

```kipper
var list: Array<num> = [1, 2, 3, 4, 5];
var slice: Array<num> = list[1:3];
print(slice); // -> [2, 3]
```

### Accessing a slice of a string

```kipper
var str: str = "Hello, World!";
var slice: str = str[1:5];
print(slice); // -> "ello"
```
