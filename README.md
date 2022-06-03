![](./img/Kipper-Logo-with-head.png)

# The Kipper programming language - `kipper`

[![Version](https://img.shields.io/npm/v/kipper?label=release&color=%23cd2620&logo=npm)](https://npmjs.org/package/kipper)
![](https://img.shields.io/badge/Coverage-77%25-5A7302.svg?style=flat&logoColor=white&color=blue&prefix=$coverage$)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)
[![License](https://img.shields.io/github/license/Luna-Klatzer/Kipper?color=cyan)](https://github.com/Luna-Klatzer/Kipper/blob/main/LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_shield)

The full module for Kipper, which contains the core language, compiler and command line interface (CLI).

Kipper is a simple strongly and statically typed programming language, which is designed to allow for
straightforward, simple, secure and type-safe coding similar to TypeScript, Rust and Python! 🦊

## Goals

- Full type safety to ensure errors occur on compile time, not runtime.
- Runtime types and type checking, which allow variable types to be checked during runtime, if
  their type can not be evaluated during compile time. For example when using `JSON.parse()`.
- Runtime errors for invalid operations. No hidden errors like in JavaScript.
- Null safety, by enforcing non-null types unless explicitly allowed.
- Full translation and integration with TypeScript.

## Syntax Snippet

![](./img/carbon-code-sample.png)

_Kipper is still in an early development phase, as such not all features shown are implemented yet._

## Child Packages

These are the child packages that are shipped with this bundle of Kipper:

- [`@kipper/core`](https://www.npmjs.com/package/@kipper/core): The Kipper compiler for the browser and Node.js! 🦊
- [`@kipper/cli`](https://www.npmjs.com/package/@kipper/cli): The Kipper command line interface (CLI) to interact
  with the Kipper compiler! 🦊

## Kipper Docs

Proper documentation for the Kipper language is available [here](https://wmc-ahif-2021.github.io/Kipper-Web/)!

## How to use Kipper?

To use Kipper you have three options:

- Run it in the browser using the CDN [`kipper-standalone.min.js`](https://cdn.jsdelivr.net/npm/@kipper/core@latest/kipper-standalone.min.js) file, which bundles the entire compiler
  for your browser.
- Run it using the NodeJS CLI [`@kipper/cli`](https://www.npmjs.com/package/@kipper/cli).
- Import the package [`@kipper/core`](https://www.npmjs.com/package/@kipper/core) in NodeJS or Deno.

### In a browser

For running Kipper in the browser, you will have to include the `kipper-standalone.min.js` file, which
provides the kipper compiler for the browser.

As a dependency you will also have to include `babel.min.js`, which is needed to allow for a compilation
from TS to JS in your browser, as Kipper compiles only to TypeScript.

Simple example of running your code in your browser using Kipper and Babel:

```html
<!-- Babel dependency -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- Kipper dependency -->
<script src="https://cdn.jsdelivr.net/npm/@kipper/core@latest/kipper-standalone.min.js"></script>

<!-- You won't have to define Kipper or anything after including the previous file. It will be defined per default  -->
<!-- with the global 'Kipper' -->
<script type="module">
	// Define your own logger and compiler, which will handle the compilation
	const logger = new Kipper.KipperLogger((level, msg) => {
		console.log(`[${Kipper.getLogLevelString(level)}] ${msg}`);
	});
	// Define your own compiler with your wanted configuration
	const compiler = new Kipper.KipperCompiler(logger);

	// Compile the code to Typescript
	// Top-level await ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
	const result = (await compiler.compile(`call print("Hello world!");`)).write();

	// Transpile the TS code into JS
	const jsCode = Babel.transform(result, { filename: "kipper-web-script.ts", presets: ["env", "typescript"] });

	// Finally, run your program
	eval(jsCode.code);
</script>
```

### Locally using Node.js and the CLI

This is to recommend way to use Kipper if you want to dive deeper into Kipper, as it allows you to locally use and run
kipper, without depending on a browser.

This also enables the usage of files, which can be read and compiled to TypeScript, and run using the CLI, without
having to do anything yourself. This also allows the input of data over the console and file-interactions,
which are not supported inside a browser.

For more info go to the [`@kipper/cli` README.md](https://github.com/Luna-Klatzer/Kipper/blob/main/kipper/cli/README.md).

### Locally in your own code as a package

This is the recommended way if you intend to use kipper in a workflow or write code yourself to manage
the compiler. This also allows for special handling of logging and customising the compilation process.

Simple example of using kipper using Node.js:

```ts
import * as ts from "typescript";
import { promises as fs } from "fs";
import { KipperCompiler } from "@kipper/core";

const path = "INSERT_PATH";
fs.readFile(path, "utf8" as BufferEncoding).then((fileContent: string) => {
	// Define your own logger and compiler, which will handle the compilation
	const yourLogger = new Kipper.KipperLogger((level, msg) => {
		console.log(`[${level}] ${msg}`);
	});
	const yourCompiler = new Kipper.KipperCompiler(yourLogger);

	// Compile the code string or stream
	let code = yourCompiler.compile(fileContent).write();

	// Compiling down to JS using the typescript node module
	let jsCode = ts.transpile(code);

	// Running the Kipper program
	eval(jsCode);
});
```

## Contributing to Kipper

If you want to contribute to Kipper, we have a full guide explaining the structure of Kipper and how to use GitHub
issues and pull requests. Check it out [here](https://github.com/Luna-Klatzer/Kipper/blob/main/CONTRIBUTING.md)!

If you have any questions or concerns, you can open up a discussion page [here](https://github.com/Luna-Klatzer/Kipper/discussions)!

## Copyright and License

![License](https://img.shields.io/github/license/Luna-Klatzer/Kipper?color=cyan)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_shield)

Copyright (C) 2021-2022 Luna Klatzer

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see <https://www.gnu.org/licenses/>.

See the [LICENSE](https://raw.githubusercontent.com/Luna-Klatzer/Kipper/main/LICENSE)
for information on terms & conditions for usage.

### FOSSA License Report

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_large)
