# Interfaces

An interface is a type that defines a contract for the properties and methods that an object must implement. Interfaces
are used to define the structure of an object without providing an implementation. This allows for the creation of
objects that can be used interchangeably, as long as they implement the required properties and methods.

See also [Classes](./classes.html).

## Syntax

```kipper
interface IDENTIFIER {
	[ FIELD_DECLARATION ]
	[ METHOD_DECLARATION ]
}
```

### Field Declaration

```kipper
IDENTIFIER: TYPE;
```

### Method Declaration

```kipper
IDENTIFIER(PARAMETER_LIST): RETURN_TYPE;
```

## Examples

### Simple interface definition

```kipper
interface Person {
	name: str;
	age: num;
	sayHello(): void;
}
```

### Assigning an object to an interface

```kipper
interface Person {
	name: str;
	age: num;
	sayHello(): void;
}
var person: Person = {
	name: "Alice",
	age: 25,
	sayHello: (): void -> {
			print("Hello");
	}
};

person.sayHello(); // -> "Hello"
```

### Matching an interface

See [`matches` expression](./expressions/matches-expression.html).

```kipper
interface Person {
	name: str;
	age: num;
	sayHello(): void;
}

var person: obj = {
	name: "Alice",
	age: 25,
	sayHello: (): void -> {
		print("Hello");
	}
};

if (person matches Person) {
	print("Person matches interface");
}
```
