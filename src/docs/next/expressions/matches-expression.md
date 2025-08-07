# Matches Expression

A `matches` expression is an expression used to pattern match a given value against a given interface blueprint type. It
is used to check whether a value qualifies as a certain type (using the duck typing principle) and executes at runtime
allowing any value to be checked.

## Syntax

```kipper
EXP matches INTERFACE
```

## Examples

### Matching a value against an interface

```kipper
interface SomeInterface {
	key: str;
}
var obj1: obj = { key: "value" };

print(f"Object matches the interface: {obj1 matches SomeInterface}"); // -> true
```

### Matching a value against an interface with a nested interface

```kipper
interface NestedInterface {
	key: str;
}

interface SomeInterface {
	nested: NestedInterface;
	key2: bool;
}

var obj2: obj = { nested: { key: "value" }, key2: true };

print(f"Object matches the interface: {obj2 matches SomeInterface}"); // -> true
```

### Matching a value with invalid property types against an interface

```kipper
interface SomeInterface {
	key: str;
	key2: bool;
	key3: num;
}
var obj3: obj = { key: "value", key2: "true", key3: 3 };

print(f"Object matches the interface: {obj3 matches SomeInterface}"); // -> false
```

### Matching a value with missing properties against an interface

```kipper
interface SomeInterface {
	key: str;
	key2: bool;
	key3: num;
}
var obj4: obj = { key: "value" };

print(f"Object matches the interface: {obj4 matches SomeInterface}"); // -> false
```

### Matching a value with additional properties against an interface

```kipper
interface SomeInterface {
	key: str;
	key2: bool;
	key3: num;
}
var obj5: obj = { key: "value", key2: true, key3: 3, key4: "extra" };

print(f"Object matches the interface: {obj5 matches SomeInterface}"); // -> true
```
