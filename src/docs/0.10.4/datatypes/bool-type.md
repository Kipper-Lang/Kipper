---
title: Boolean Type
---

# Boolean Type - `bool`

The boolean is a simple binary value that may be either `true` or `false`. The value can be also represented as 0
(`false`) and 1 (`true`).

Booleans are commonly used in conditional statements and loops, where
[relational expressions](../expressions/relational-expression.html) and
[logical expressions](../expressions/logical-expression.html) are used to determine the flow of the program, and
implement complex logic.

## Examples

### Simple bool variable definitions

```kipper
var var1: bool = false;
var var2: bool = true;
```

### Comparison of two numbers

```kipper
var var3: num = 3;
var var4: num = 48;
var equal: bool = var10 <= var11; // 3 smaller than 48 -> True
```

### Using a boolean as a number

```kipper
var var5: bool = True;
var var6: num = (var18 as num) + 2; // -> 3
```

### Using a boolean inside an if statement

- External boolean variable:

	```kipper
	var var7: bool = externalNumber % 10 == 0;
	if (var7) {
		// This code will be executed
	} else {
		// This code will not be executed
	}
	```

- Direct boolean expression ([relational expressions](../expressions/relational-expression.html) or [logical expressions](../expressions/logical-expression.html)):

	```kipper
	if (externalNumber % 10 == 0) {
		// This code will be executed
	} else {
		// This code will not be executed
	}
	```

### Using a boolean inside a while loop

- External boolean variable:

	```kipper
	var var8: bool = validNumber(1);
	while (var8) {
		// This code will be executed
		var8 = false;
	}
	```

- Direct boolean expression ([relational expressions](../expressions/relational-expression.html) or [logical expressions](../expressions/logical-expression.html)):

	```kipper
	while (validNumber(1)) {
		// This code will be executed
	}
	```

