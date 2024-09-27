# Classes

A class is an object-oriented structure similar to an interface which defines a specific type of object. It can contain
properties and methods that define the behavior of the object, which can be altered by a setup method called
`constructor`.

See also [Interfaces](./interfaces.html).

## Syntax

```kipper
class IDENTIFIER {
	[ FIELD_DECLARATION ]
	[ METHOD_DECLARATION ]
	[ CONSTRUCTOR_DECLARATION ]
}
```

### Field Declaration

```kipper
IDENTIFIER: TYPE;
```

### Method Declaration

```kipper
IDENTIFIER(PARAMETER_LIST): RETURN_TYPE {
	STATEMENT
}
```

### Constructor Declaration

```kipper
constructor(PARAMETER_LIST) {
	STATEMENT
}
```

## Examples

### Simple class definition

```kipper
class Person {
	name: str;
	age: num;

	constructor(name: str, age: num) {
		this.name = name;
		this.age = age;
	}

	sayHello(): void {
		print(f"Hello, my name is {this.name} and I am {this.age} years old.");
	}
}

var person: Person = new Person("Alice", 25);
person.sayHello(); // -> "Hello, my name is Alice and I am 25 years old."
```
