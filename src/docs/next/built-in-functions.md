# Built-in Functions

Built-in functions, which can be called in every Kipper program without importing any other
file. These are specifically implemented for their specific target, so the implementation
results might differ depending on whether you are using Node.js or a browser environment.

## List of all Built-in Functions

List of all built-in functions, which are usable in the current release of Kipper.

<h3 id="print" class="starts-with-code-tag"><code>print(msg: str) -> void</code></h3>

<p class="docs-version-indicator">Since v0.1.0</p>

Prints the specified string `msg` onto stdout/the console of the specific platform.

This function under the hood `console.log()` in both Node.js and Browser environments.

#### List of supported environments

| Platform            | Status                                       |
| ------------------- | -------------------------------------------- |
| Node.js             | Supported <em class="green-checkmark">✓</em> |
| Native JS (Browser) | Supported <em class="green-checkmark">✓</em> |

<h3 id="len" class="starts-with-code-tag"><code>len(iterable: str) -> num</code></h3>

<p class="docs-version-indicator">Since v0.10.0</p>

Returns the length of the specified iterable `iterable`.

Though note that at the current stage of development, only strings are supported, since iterables such as lists are yet
to be implemented and will be released in the future. For more info regarding the development schedule please go
<a href="<%- roadmapURL %>">here</a>.

#### List of supported environments

| Platform            | Status                                       |
| ------------------- | -------------------------------------------- |
| Node.js             | Supported <em class="green-checkmark">✓</em> |
| Native JS (Browser) | Supported <em class="green-checkmark">✓</em> |
