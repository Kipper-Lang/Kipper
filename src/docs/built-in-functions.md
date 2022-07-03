# Built-in Functions

Built-in functions, which can be called in every Kipper program without importing any other
file. These are specifically implemented for their specific target, so the implementation
results might differ depending on whether you are using Node.js or a browser environment.

## List of all Built-in Functions

List of all built-in functions, which are usable in the current release of Kipper.

### `print(msg: str) -> void`

Prints the specified string `msg` onto stdout/the console of the specific
platform. This function under the hood `console.log()` in both Node.js and
Browser environments.

#### List of supported environments

| Platform            | Status                                       |
| ------------------- | -------------------------------------------- |
| Node.js             | Supported <em class="green-checkmark">✓</em> |
| Native JS (Browser) | Supported <em class="green-checkmark">✓</em> |
