---
title: String Type
---

# String Type - `str`

A string is a simple sequence of characters in UTF-16. A string may be any length, as underneath the length of the list that represents the string will always be increased as needed.

## Examples

```kipper
// ✓ Standard addition and concatenations are allowed
var var4: str = "This is a";
var var5: str = " string";
var result_str: str = var5 + var6; // -> "This is a string"

// ✓ Single character UTF-16 characters in strings
var kipper: str = "ƛ";

// ✓ Multi character UTF-16 characters in strings
var kipper: str = "Kipper is 🦊💘";
```

Strings are defined using quotation marks (`""`) , which automatically hint the `str` type.
