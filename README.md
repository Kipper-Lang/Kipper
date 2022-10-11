![](./img/Kipper-Logo-with-head.png)

# The Kipper programming language - `kipper`

[![Version](https://img.shields.io/npm/v/kipper?label=release&color=%23cd2620&logo=npm)](https://npmjs.org/package/kipper)
![](https://img.shields.io/badge/Coverage-80%25-83A603.svg?style=flat&logo=github&logoColor=white&color=blue&prefix=$coverage$)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)
[![License](https://img.shields.io/github/license/Luna-Klatzer/Kipper?color=cyan)](https://github.com/Luna-Klatzer/Kipper/blob/main/LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_shield)

Kipper is a JavaScript-like strongly and strictly typed language with Python flavour. It aims to provide
straightforward, simple, secure and type-safe coding with better efficiency and developer satisfaction! 🦊

## Installation

To install the whole Kipper package with its CLI, run the following command:

```bash
npm i kipper
```

If you are using `pnpm` or `yarn`, use `pnpm i kipper` or `yarn add kipper`.

## Goals & Planned Features

- Full type safety to ensure if possible that all errors occur on compile time, not runtime.
- Runtime types and type checking, which allow variable types to be checked during runtime, if their type can not be
  evaluated during compile time. For example when using `JSON.parse()` and the object type is
  unknown.
- Full translation to/and integration with JavaScript and TypeScript.
- Custom Operator Overload Methods for specifying custom behaviour for specific operators.
  These will be similar to the Python dunder methods.
- Type Conversion Overloading to customise conversion behaviour.
- Runtime errors for invalid operations. No hidden errors like in JavaScript.
- Null safety, by enforcing non-null types unless explicitly allowed.

## Example Code Snippet

![](img/carbon/carbon-code-snippet.png)

_Kipper is still in an early development phase, as such not all features shown in the snippet are implemented yet._

## Packages

- [`kipper`](https://www.npmjs.com/package/kipper): The Kipper compiler and API, which ships with all child packages.
- [`@kipper/core`](https://www.npmjs.com/package/@kipper/core): The core implementation of the Kipper compiler.
- [`@kipper/cli`](https://www.npmjs.com/package/@kipper/cli): The Kipper command line interface (CLI).
- [`@kipper/web`](https://www.npmjs.com/package/@kipper/web): The standalone web-module for the Kipper compiler.
- [`@kipper/target-js`](https://www.npmjs.com/package/@kipper/target-js): The JavaScript target for the Kipper
  compiler.
- [`@kipper/target-ts`](https://www.npmjs.com/package/@kipper/target-ts): The TypeScript target for the Kipper
  compiler.

## Kipper Docs

Proper documentation for the Kipper language is available [here](https://luna-klatzer.github.io/Kipper/)!

## How to use Kipper?

To use Kipper you have three options:

- Run it in the browser using the CDN [`kipper-standalone.min.js`](https://cdn.jsdelivr.net/npm/@kipper/web@latest/kipper-standalone.min.js) file, which bundles the entire compiler
  for your browser.
- Run it using the NodeJS CLI [`@kipper/cli`](https://www.npmjs.com/package/@kipper/cli).
- Import the package [`@kipper/core`](https://www.npmjs.com/package/@kipper/core) in NodeJS or Deno.

### In a browser

For running Kipper in the browser, you will have to include the `kipper-standalone.js` file, which
provides the Kipper Compiler for the browser and enables the compilation of Kipper code to JavaScript.

Simple example of compiling and running Kipper code in a browser:

```html
<!-- Kipper dependency -->
<script src="https://cdn.jsdelivr.net/npm/@kipper/web@latest/kipper-standalone.min.js"></script>

<!-- You won't have to define Kipper or anything after including the previous file. It will be defined per default  -->
<!-- with the global 'Kipper' -->
<script type="module">
	// Define your own logger and compiler, which will handle the compilation
	const logger = new Kipper.KipperLogger((level, msg) => {
		console.log(`[${Kipper.getLogLevelString(level)}] ${msg}`);
	});
	// Define your own compiler with your wanted configuration
	const compiler = new Kipper.KipperCompiler(logger);

	// Compile the code to JavaScript
	// Top-level await ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
	const result = await compiler.compile(`call print("Hello world!");`, {
		target: new KipperJS.KipperJavaScriptTarget(),
	});
	const jsCode = result.write();

	// Finally, run your program
	eval(jsCode);
</script>
```

### Locally using Node.js and the CLI

This is to recommend way to use Kipper if you want to dive deeper into Kipper, as it allows you to locally use and run
kipper, without depending on a browser.

For example:

- Compiling a Kipper program:
  ```bash
  kipper compile file.kip
  ```
- Executing a Kipper program using Node.js:
  ```bash
  kipper run file.kip
  ```

This also enables the usage of Kipper files with the `.kip` extension, which can be read and compiled to TypeScript,
without having to configure anything yourself. This also allows the input of data over the
console and file-interactions, which are not supported inside a browser.

For more info go to the [`@kipper/cli` README](https://github.com/Luna-Klatzer/Kipper/blob/main/kipper/cli/README.md).

### Locally in your own code as a package

This is the recommended way if you intend to use kipper in a workflow or write code yourself to manage
the compiler. This also allows for special handling of logging and customising the compilation process.

Simple example of using the Kipper Compiler in Node.js:

- JavaScript:

  ```js
  const fs = require("fs").promises;
  const kipper = require("@kipper/core");
  const KipperJavaScriptTarget = require("@kipper/target-js").KipperJavaScriptTarget;

  const path = "INSERT_PATH";
  fs.readFile(path, "utf8").then(async (fileContent) => {
  	// Define your own logger and compiler, which will handle the compilation
  	const logger = new kipper.KipperLogger((level, msg) => {
  		console.log(`[${level}] ${msg}`);
  	});
  	const compiler = new kipper.KipperCompiler(logger);

  	// Compile the code string or stream
  	let result = await compiler.compile(fileContent, {
  		/* Config */
  		target: new KipperJavaScriptTarget(),
  	});
  	let jsCode = result.write();

  	// Running the Kipper program
  	eval(jsCode);
  });
  ```

- TypeScript:

  ```ts
  import { promises as fs } from "fs";
  import * as kipper from "@kipper/core";
  import { KipperJavaScriptTarget } from "@kipper/target-js";

  const path = "INSERT_PATH";
  fs.readFile(path, "utf8" as BufferEncoding).then(async (fileContent: string) => {
  	// Define your own logger and compiler, which will handle the compilation
  	const logger = new kipper.KipperLogger((level, msg) => {
  		console.log(`[${level}] ${msg}`);
  	});
  	const compiler = new kipper.KipperCompiler(logger);

  	// Compile the code string or stream
  	let result = await compiler.compile(fileContent, {
  		/* Config */
  		target: new KipperJavaScriptTarget(),
  	});
  	let jsCode = result.write();

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
