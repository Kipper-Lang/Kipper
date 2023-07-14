![](./img/Kipper-Logo-with-head.png)

# The Kipper programming language - `kipper` 🦊✨

[![Version](https://img.shields.io/npm/v/kipper?label=npm%20stable&color=%23cd2620&logo=npm)](https://npmjs.org/package/kipper)
[![Dev Version](https://img.shields.io/github/v/tag/Luna-Klatzer/Kipper?include_prereleases&label=dev&logo=github&sort=semver)](https://github.com/Luna-Klatzer/Kipper/tags)
[![codecov](https://codecov.io/gh/Luna-Klatzer/Kipper/branch/main/graph/badge.svg?token=S4RQT7X3YP)](https://codecov.io/gh/Luna-Klatzer/Kipper)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)
[![License](https://img.shields.io/github/license/Luna-Klatzer/Kipper?color=cyan)](https://github.com/Luna-Klatzer/Kipper/blob/main/LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_shield)

Kipper is a JavaScript-like strongly and strictly typed language with Python flavour. It aims to provide
straightforward, simple, secure and type-safe coding with better efficiency and developer satisfaction!

It compiles to both JavaScript and TypeScript, and can be set up in your terminal, Node.js or ES6+ browser. 🦊💻

_For more details, you can read more about this project in the sections ["Goals & Planned Features"](#goals--planned-features) and ["Why Kipper?"](#why-kipper-)._

## General Information

- Website: https://kipper-lang.org
- Docs: https://docs.kipper-lang.org
- Playground: https://play.kipper-lang.org
- Issue Tracker: https://issues.kipper-lang.org
- Roadmap: [View Kipper Roadmap 🦊🚧](https://github.com/Luna-Klatzer/Kipper/discussions/139)
- Changelog: [View CHANGELOG.md](https://github.com/Luna-Klatzer/Kipper/blob/main/CHANGELOG.md)

## Installation

To install the whole Kipper package with its CLI, run the following command:

```bash
npm i kipper
```

If you are using `pnpm` or `yarn`, use `pnpm i kipper` or `yarn add kipper`.

## Project Packages

- [`kipper`](https://www.npmjs.com/package/kipper): The Kipper compiler and API, which ships with all child packages.
- [`@kipper/core`](https://www.npmjs.com/package/@kipper/core): The core implementation of the Kipper compiler.
- [`@kipper/cli`](https://www.npmjs.com/package/@kipper/cli): The Kipper command line interface (CLI).
- [`@kipper/web`](https://www.npmjs.com/package/@kipper/web): The standalone web-module for the Kipper compiler.
- [`@kipper/target-js`](https://www.npmjs.com/package/@kipper/target-js): The JavaScript target for the Kipper
  compiler.
- [`@kipper/target-ts`](https://www.npmjs.com/package/@kipper/target-ts): The TypeScript target for the Kipper
  compiler.

## Goals & Planned Features

_View the current implementation state in the [Kipper Roadmap 🦊🚧](https://github.com/Luna-Klatzer/Kipper/discussions/139)._

- Full compiler ensured type safety, by analysing and reporting code during compilation.
- Duck typing type checking with TypeScript-like interface types for both compile and runtime.
- Runtime type and type checking features, where original compile time type issues can be
  resolved during runtime.
- Strict cast and conversion handling, so that potentially or definitely problematic usage
  is detected by the compiler and ensures the developer has to handle them.
- Avoidance of `any` type issues, with ensurance of compiler checks that operations and data
  access are valid.
- Runtime errors and safety checks in case of incomplete or faulty typing. This should avoid
  issues, such as "TypeError: can't access property "..." of undefined".
- Null safety, by enforcing non-null types unless explicitly allowed.
- Conversion behaviour functions in classes to customise conversion behaviour.
- Operator overloading and additional customisation behaviour.
- Type Conversion Overloading to customise conversion behaviour.
- Full translation to/and integration with JavaScript and TypeScript.
- Import Support for `.ts` files, as well as `.d.ts` + `.js` files.
- Translation support for all ES versions as far as ES6 (JavaScript target specific)

## How to use Kipper?

To use Kipper you have three options:

- Run it in the browser using the CDN [`kipper-standalone.min.js`](https://cdn.jsdelivr.net/npm/@kipper/web@latest/kipper-standalone.min.js) file, which bundles the entire compiler
  for your browser.
- Run it using the NodeJS CLI [`@kipper/cli`](https://www.npmjs.com/package/@kipper/cli).
- Import the package [`@kipper/core`](https://www.npmjs.com/package/@kipper/core) in NodeJS or Deno.

### In a browser 🦊🌐

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
		target: new KipperJS.TargetJS(),
	});
	const jsCode = result.write();

	// Finally, run your program
	eval(jsCode);
</script>
```

### Locally using Node.js with `@kipper/cli` 🦊🖥️

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

### Locally in your own code with `@kipper/core` 🦊⌨️

This is the recommended way if you intend to use kipper in a workflow or write code yourself to manage
the compiler. This also allows for special handling of logging and customising the compilation process.

Simple example of using the Kipper Compiler in Node.js:

- JavaScript (CommonJS):

  ```js
  const fs = require("fs").promises;
  const kipper = require("@kipper/core");
  const kipperJS = require("@kipper/target-js");

  const path = "INSERT_PATH";
  fs.readFile(path, "utf8").then(async (fileContent) => {
  	const compiler = new kipper.KipperCompiler();

  	// Compile the code string or stream
  	let result = await compiler.compile(fileContent, { target: new kipperJS.TargetJS() });
  	let jsCode = result.write();

  	// Running the Kipper program
  	eval(jsCode);
  });
  ```

- TypeScript (CommonJS):

  ```ts
  import { promises as fs } from "fs";
  import { KipperCompiler } from "@kipper/core";
  import { TargetJS } from "@kipper/target-js";

  const path = "INSERT_PATH";
  fs.readFile(path, "utf8" as BufferEncoding).then(async (fileContent: string) => {
  	const compiler = new KipperCompiler();

  	// Compile the code string or stream
  	let result = await compiler.compile(fileContent, { target: new TargetJS() });
  	let jsCode = result.write();

  	// Running the Kipper program
  	eval(jsCode);
  });
  ```

## Why Kipper? 🦊❓

_Skip this section, if you are not interested in the details behind Kipper and this
project. It is not required knowledge for using or trying out Kipper._

The primary use case and reason for the development of Kipper is the
simplification of the development process for developers, both in the web
and server-side space, by improving on common issues and helping developers
fix them more easily and quickly.

Therefore this programming language, like TypeScript, aims to provide more
safety and functionality using a compiler and pre-runtime error checking.
This primarily also utilises type checking, as a way to ensure that programs
work as intended and that developers can discover errors before they run their
code.

TypeScript already does a great job at this, so why is Kipper needed or how does
it do things differently? TypeScript is an amazing language, which is why Kipper
has many of its designs and features similarly implemented. Though a big issue
that TypeScript can't detect is and properly resolve is the issue of inconsistent
or incomplete typing. This is a huge issue when working with dynamic data or JavaScript
code, where types are unknown or can't be known before runtime, since due to the
compile time typing of TypeScript type checking often is not able to detect
issues and many will simply bypass error checks altogether. Even with
`instanceof` and `typeof` checks, it becomes a tedious effort that often results
in more errors, due to issues arising while trying to fix the original problems.

Kipper therefore tries to implement a way to easily solve those issues in a
standardised way, by allowing for more complex runtime type checks and runtime
error handling. This means Kipper will still be there to assist the developer
during runtime, by handling many cases where type issues could arise. This also
means functionality like casts or conversions are more strictly handled and don't
overwrite type checking behaviour. Even so though, Kipper will always try to not
be invasive, and developers can choose during development time how to handle
different cases and how Kipper should handle them during runtime.

## Contributing to Kipper

If you want to contribute to Kipper, we have a full guide explaining the structure of Kipper and how to use GitHub
issues and pull requests. Check it out [here](https://github.com/Luna-Klatzer/Kipper/blob/main/CONTRIBUTING.md)!

If you have any questions or concerns, you can open up a discussion page [here](https://github.com/Luna-Klatzer/Kipper/discussions)!

We appreciate any feedback or help! 🦊❤️

## Copyright and License

![License](https://img.shields.io/github/license/Luna-Klatzer/Kipper?color=cyan)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_shield)

Copyright (C) 2021-2023 Luna Klatzer

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
