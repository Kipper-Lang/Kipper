---
title: Object Type
---

# Object Type - `obj`

The object type `obj` is a simple catch-all type that represents any object. It is used to define objects that do not
have a specific type or to define objects that have a dynamic structure.

As this type is a catch-all type, it is not possible to access any properties or methods of the object without first
checking if they exist using the [`matches` expression](../expressions/matches-expression.html).

## Examples

### Defining an object with a dynamic structure

```kipper
var obj1: obj = { key: "value" };
```

### Defining an object with a dynamic structure and accessing its properties

```kipper
var obj2: obj = { key: "value" };

interface Sample {
	key: str;
}
if (obj2 matches Sample) {
	print("Object matches the interface");
}
```
