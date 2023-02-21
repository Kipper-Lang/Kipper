# Quickstart

Welcome to the Quickstart Guide for the Kipper programming language! Here you will find a concise guide on how to
install Kipper and start using it for your own projects.

<p class="red-highlight-text">
  Before using Kipper make sure your system or browser is supported! View support list
  <a href="./supported-platforms.html">here</a>.
</p>

## How to use Kipper?

Since the Kipper Compiler per default translates to TypeScript and therefore also JavaScript, there are several options to using Kipper:

1. Running the Kipper Compiler in a Browser and using a Transpiler to generate native JavaScript code.
2. Running the Kipper Compiler using the `@kipper/cli` package in a terminal.
3. Including the `@kipper/core` package into a Node.js program.

## Setting up Kipper in an HTML file

For running Kipper in the browser, you will have to include:

1. The primary `kipper-standalone.min.js` file, which provides the kipper source code compatible for _modern_ browsers.
   View the [support list](./supported-platforms.html) to make sure your browser is supported.
2. The Babel typescript transpiler, which allows native browser transpiling and code generation. This is required as Kipper is not a language that compiles directly to JavaScript code, but uses TypeScript as another level of abstraction. (This may change in the future. View [#208](https://github.com/Luna-Klatzer/Kipper/issues/208) for more info.)

### Including the Kipper Script

The snippet shown below includes both the Kipper compiler and the Babel typescript transpiler, which allows you to compile Kipper code and directly transpile it to JavaScript.

```html
<!-- Babel -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<!-- Kipper -->
<script src="https://cdn.jsdelivr.net/npm/@kipper/core@latest/kipper-standalone.min.js"></script>
```

Once the Kipper file has been loaded, you can access the library using the identifier `Kipper`, which will be globally available in your HTML file.

### Running the Compiler in an HTML file

This is a simple example of how to use Kipper in a HTML file. This will compile the string `call print("Hello world");` down to JavaScript, and evaluate it. If everything worked, you should see the logger output and `Hello world!` printed to the browser console.

Example code:

```html
<script type="module">
	// Define your own logger and compiler, which will handle the compilation
	const logger = new Kipper.KipperLogger((level, msg) => {
		console.log(`[${Kipper.getLogLevelString(level)}] ${msg}`);
	});

	// Define your own compiler with your wanted configuration
	const compiler = new Kipper.KipperCompiler(logger, {});

	// Compile the code to Typescript
	// Top-level await ref:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await
	const result = (await compiler.compile(`call print("Hello world!");`)).write();

	// Transpile the TS code into JS
	const jsCode = Babel.transform(result, {
		filename: "kipper-web-script.ts",
		presets: ["env", "typescript"],
	});

	// Finally, run your program
	eval(jsCode.code);
</script>
```

## Setting up Kipper for the Terminal

To use Kipper in a terminal, you will have to install the package `@kipper/cli`, which provides the CLI for the Kipper Compiler. This will make the identifier `kipper` globally available in your project work-directory and will allow you to run the Kipper Compiler from the terminal.

Example `package.json`:

```json
{
	"name": "example",
	"version": "0.1.0",
	"description": "An example program using Kipper",
	"keywords": ["kipper", "example"],
	"license": "GPL-3.0",
	"dependencies": {
		"@kipper/cli": "latest"
	}
}
```

### Post Installation

After finishing the installation, try to run the following command:

```bash
kipper --version
```

If the identifier `kipper` is not found, try to run Kipper using your project's package manager. For example, if you are using `npm`, you can run the following code:

```bash
npx kipper
```

### Global Installation

If you intend to only try out Kipper, you can also simply install Kipper globally:

```bash
npm install -g @kipper/cli
```

<article class="red-highlight-text">
  <h2>Important</h2>
  <p>
  If possible avoid installing Kipper globally if you intend to use it inside your own projects, as it can cause issues with locally installed versions (node project dependencies). For a localised and project-dependent kipper installation add kipper to your dependencies as shown previously.
  </p>
</article>

### Importing Kipper as a module

To set up Kipper for your personal code, simply add <code>@kipper/core</code> or <code>kipper</code> (also includes the
Kipper CLI) to your project dependencies or development dependencies in your <code>package.json</code> file.

Example package.json

```json
{
	"name": "example",
	"version": "0.1.0",
	"description": "An example program using Kipper",
	"keywords": ["kipper", "example"],
	"license": "GPL-3.0",
	"dependencies": {
		"@kipper/core": "latest"
	}
}
```

### Importing the Kipper package

Afterwards you can include the `@kipper/core` package in your JavaScript or TypeScript file. This package contains the full Kipper Compiler and API, which can be customised according to your needs.

Kipper is shipped as a commonjs module and can therefore be imported using `require()` in Javascript or`import` in TypeScript.

### Example

Using JavaScript:

```ts
const ts = require("typescript");
const fs = require("fs").promises;
const kipper = require("@kipper/core");

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
	});
	let tsCode = result.write();

	// Compiling down to JS using the typescript node module
	let jsCode = ts.transpile(tsCode);

	// Running the Kipper program
	eval(jsCode);
});
```

Using TypeScript:

```ts
import * as ts from "typescript";
import { promises as fs } from "fs";
import * as kipper from "@kipper/core";

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
	});
	let tsCode = result.write();

	// Compiling down to JS using the typescript node module
	let jsCode = ts.transpile(tsCode);

	// Running the Kipper program
	eval(jsCode);
});
```
