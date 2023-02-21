# Variables

Variables are data items, which can contain data based on their [data type](./datatypes.html). The value of a variable
is dynamic and can be changed as often as you want throughout the code. Variables are essential for a program to store
data, read data and use data inside our programs.

## What are Declarations and Definitions?

There are two ways to create a variable in Kipper, like in many other languages as well. This is the simple concept of
so-called declarations and definitions.

- Declaring a variable = Reserving the name of the variable and setting its type.
- Defining a variable = Defining and setting the value of a variable. Can be combined with the declaration in a single
  line.

## How to declare variables in Kipper

To declare a variable you simply specify its name and its type, but don't set a value yet:

```ts
var NAME: TYPE;
```

In this case, we have now also defined the scope and visibility of the variable, which will be explained later in
[Scopes and Visibility of Variables](#scopes-and-visibility-of-variables). Though, due to the fact we have not set a
value yet, attempting to read from a variable will result in a compiler error, as you can not read from a variable with
no value.

<div class="red-highlight-text">
  <h2>Important</h2>
  <p>
    You may re-declare a variable as often as you want, as long as the types match and the scope is identical. If
    they are not, it will result in a compiler error!
  </p>
  <p>
    <em class="green-checkmark">✓ VALID CODE</em>
  </p>
  <pre><code class="language-ts">// ✓ Valid
var var1: str;
var var1: str;</code></pre>
  <p>
    <em class="red-checkmark">X INVALID CODE</em>
  </p>
  <pre><code class="language-ts">// X Invalid - May not re-declare with new type signature
var var2: str;
var var2: num;

// X Invalid - May not re-declare in a different scope
var var3: str;
{
var var3: str;
}</code></pre>

</div>

## How to define variables in Kipper

Defining a variable is fairly straightforward in Kipper, as like in declarations you specify the name, type and now as
well the value. Here we use the assign character `=`, which sets the variable to the `VALUE`:

```ts
var NAME: TYPE = VALUE;
```

Though, in case you want to make clear that you have already declared the variable and don't want to specify the type
again, the following is also valid code:

```ts
NAME = VALUE;
```

<div class="red-highlight-text">
  <h2>Important</h2>
  <p>
    When you already have defined or declared a variable, you may not change its type anymore, but only overwrite its
    value with the same type!
  </p>
  <p>
    <em class="green-checkmark">✓ VALID CODE</em>
  </p>
  <pre><code class="language-ts">// ✓ Valid
var var1: str = "3"; // Declaring and defining a variable in a one-line statement
var1 = "Another string"; // Assigning a new value

// ✓ Also Valid
var var2: str; // Declaring a variable
var var2: str = "3"; // Declaring again and defining a variable in a one-line statement</code></pre>

  <p>
    <em class="red-checkmark">X INVALID CODE</em>
  </p>
  <pre><code class="language-ts">// X Invalid - May not re-define with new type signature
var var1: str = "3";
var var1: num = 3;

// X Also Invalid - May not overwrite with a different type
var var2: str = "3";
var2 = 3; // typeof(3) -> num</code></pre>

</div>

## Scopes and Visibility of Variables

Before we can get to using our own variables, the concept of so-called scopes has to be understood. A scope of a
variable defines simply where your code can access a variable, and not interfere with other variables.

```ts
// This is a simple scope or also called "block of code"
{
	// Variable that is bound to this scope
	var var1: num = 0;

	// ✓ 'var2' is able to see 'var1' as it's in the same scope, and as such the value may be copied!
	var var2: num = var1;
}
```

In this code-block, you may only reference/use variables that were defines in this scope, or a scope that is above it
(parent scope).

The scope that you can always access is the highest scope and is called "global scope". It's where you define variables
for your entire file/program. An example of a global would be simply this:

```ts
// Global variable
var var3: num = 0;

// This is another simple scope
{
	// ✓ 'var4' is able to see 'var3' as it's in the parent scope, and as such the value may be copied!
	var var4: num = var3;

	// ✓ 'var5' is able to see 'var4' as it's in the same scope, and as such the value may be copied!
	var var5: num = var4;
}
```

Though, if you try to access a variable in another scope, you will get a compiler error, as you may not access variables
from other scopes. They are invisible to you, so you will get an `Undefined Reference` error, saying the value is not
defined in your or any other parent scope!

```ts
// Global variable
var var3: num = 0;

// This is another simple scope
{
	// ✓ 'var4' is able to see 'var3' as it's in the parent scope,
	// and as such the value may be copied!
	var var4: num = var3;
}

// This is another simple scope
{
	// X 'var5' is NOT able to see 'var4' as it's not in this or any parent's scope,
	// and as such the value may NOT be copied!
	var var5: num = var4;
}
```

# Constants

Besides, the already explained variables that may change throughout the code, there are also the so-called constants,
which are defined once with a value and may never be re-defined or overwritten.

## How to define a constant variable?

To define a constant variable, you simply use the `const` keyword in place of the `var` keyword, defining the variable
as a constant that is protected from changes (You may not declare a constant variable though, and you will always have
to specify its value right when creating the variable!):

```ts
// Constant variable
const var6: num = 1;
```

You may read from the constant value like with a standard variable:

```ts
// Constant variable
const var7: num = 1;
const var8: num = 3;

var var9: num = var7 + var8; // 1 + 3 -> 4
const var10: num = var9 + var8; // 4 + 3 -> 4
```

<div class="red-highlight-text">
  ## Important
  <p>
  You may not overwrite the value of a constant or declare it without a value.
  </p>
  <p>
    <em class="green-checkmark">✓ VALID CODE</em>
  </p>
  <pre><code class="language-ts">// ✓ Valid
const var1: num = 4;

// ✓ Also Valid
const var2: num = var1;</code></pre>

  <p>
    <em class="red-checkmark">X INVALID CODE</em>
  </p>
  <pre><code class="language-ts">// X Also Invalid - A value must be present for a constant definition!
const var1;

// X Invalid - May not overwrite read-only constant
const var2: num = 4;
var2 = 5;

// X Also Invalid - May not define with a different type
const var2: num = "4"; // typeof("4") -> string</code></pre>

</div>
