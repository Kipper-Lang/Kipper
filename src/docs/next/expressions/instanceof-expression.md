# Instanceof Expression

The `instanceof` expression is used to check if an object is an instance of a class. Like in TypeScript this is only
available for classes and not for interfaces, as `instanceof` checks against the object prototype chain.

## Syntax

```kipper
EXP instanceof CLASS
```

## Examples

### Checking if a class instance is an instance of a class

```kipper
class SomeClass {
	key: str;

	constructor() {
		this.key = "value";
	}
}
var obj: SomeClass = new SomeClass();

print(f"Object is an instance of SomeClass: {obj instanceof SomeClass}"); // -> true
```

### Checking if an object is an instance of a class

```kipper
class SomeClass {
	key: str;

	constructor() {
		this.key = "value";
	}
}
var obj: obj = { key: "value" };

print(f"Object is an instance of SomeClass: {obj instanceof SomeClass}"); // -> false
```
