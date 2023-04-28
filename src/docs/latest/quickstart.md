# Quickstart

Welcome to the Quickstart Guide for the Kipper programming language! Here you will find a concise guide on how to
install Kipper and start using it for your own projects.

<p class="important">
  Before using Kipper make sure your system or browser is supported! View support list
  <a href="./supported-platforms.html">here</a>.
</p>

## How to use Kipper?

The Kipper Compiler supports multiple environments of which the most common ones are:

1. Running the Kipper Compiler in a browser using `@kipper/web`. [-> `Setting up Kipper for the Browser`](#setting-up-kipper-for-the-browser)
2. Running the Kipper Compiler using the `@kipper/cli` package in a terminal. [-> `Setting up Kipper for the Terminal`](#setting-up-kipper-for-the-terminal)
3. Including the `@kipper/core` package into a Node.js program. [-> `Importing Kipper as a module`](#importing-kipper-as-a-module)

## Setting up Kipper for the Browser

For running Kipper in the browser, you will have to include the primary `kipper-standalone.min.js` file, which
provides the kipper source code compatible for _modern_ browsers.

View the [support list](./supported-platforms.html) to make sure your browser is supported.

### Including the Web Bundle

The following script tag will include the latest version of the Kipper Compiler for the browser:

```html

<script src="https://cdn.jsdelivr.net/npm/@kipper/web@latest/kipper-standalone.min.js"></script>
```

Once the Kipper file has been loaded, you can access the library using the identifier `Kipper`, which will be globally
available in your HTML file.

<div class="red-highlight-text">
  <h3>Version Migration Info</h3>
  <p>
  Kipper v0.9.2 uses a different method of including and running Kipper in the browser. If you are still using 0.9.2,
	please go to <a href="<%= rootDir %>/docs/0.9.2/quickstart.html">this docs page</a> to see how to use it.
  </p>
</div>

### Running the Compiler in an HTML file - Example

This is a simple example of how to use Kipper in an HTML file. This will compile the string `print("Hello world");`
down to JavaScript, and evaluate it. If everything worked, you should see the logger output and `Hello world!` printed
to the browser console:

- Using [top-level await (Not supported in all browsers)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await):

```html
<script type="module">
	// Define your own logger and compiler, which will handle the compilation
	const logger = new Kipper.KipperLogger((level, msg) => {
		console.log(`[${Kipper.getLogLevelString(level)}] ${msg}`);
	});

	// Define your own compiler with your wanted configuration
	const compiler = new Kipper.KipperCompiler(logger, {});

	// Compile the code to Typescript
	const result = await compiler.compile(
		`print("Hello world!");`,
		{ target: new KipperJS.TargetJS() }, // Configure the compiler to compile to JavaScript
	);
	const jsCode = result.write();

	// Finally, run your program
	eval(jsCode);
</script>
```

- Using callbacks:

```html
<script type="module">
	// Define your own logger and compiler, which will handle the compilation
	const logger = new Kipper.KipperLogger((level, msg) => {
		console.log(`[${Kipper.getLogLevelString(level)}] ${msg}`);
	});

	// Define your own compiler with your wanted configuration
	const compiler = new Kipper.KipperCompiler(logger, {});

	// Compile the code to Typescript - With a callback
	compiler.compile(
		`print("Hello world!");`,
		{ target: new KipperJS.TargetJS() }, // Configure the compiler to compile to JavaScript
	).then(
		(result) => {
			const jsCode = result.write();

			// Finally, run your program
			eval(jsCode);
		},
		(rejected) => {
			console.error(rejected);
		},
	);
</script>
```

## Setting up Kipper for the Terminal

To use Kipper in a terminal, you will have to install the package `@kipper/cli`, which provides the CLI for the Kipper
Compiler. This will make the executable program `kipper` globally available in your project work-directory and will
allow you to run the Kipper Compiler from the terminal.

### Installing Kipper for a project

For setting up a project with a specific Kipper version you will have to add the `@kipper/cli` package to your
`package.json` file. If then installed by your local package manager, the executable `kipper` will be available in your
project's work-directory, but not anywhere else.

Running the following command will install the latest version of Kipper for your project:

```bash
npm install @kipper/cli
```

Use the flags `--save` or `--save-dev` to add the package to your `package.json` file permanently, so that it will be
installed automatically when running `npm install` in the future.

#### Manual Installation to `package.json`

Example `package.json`:

```json
{
	"name": "example",
	"version": "0.1.0",
	"description": "An example program using Kipper",
	"keywords": [
		"kipper",
		"example"
	],
	"license": "GPL-3.0",
	"dependencies": {
		"@kipper/cli": "latest" // <-- Add this line to your dependencies (latest version or specific version)
	}
}
```

### Global Installation

If you intend to only try out Kipper or use a specific version across your entire system, you can also simply install
the CLI package globally:

```bash
npm install -g @kipper/cli
```

<article class="important">
  <h2>Important</h2>
  <p>
  If possible avoid installing Kipper globally if you intend to use it inside your own projects, as it can cause
  issues with locally installed versions (node project dependencies). For a localised and project-dependent kipper
  installation add kipper to your dependencies as shown previously.
  </p>
</article>

### Post Installation

After finishing the installation, try to run the following command:

```bash
kipper --version
```

If the identifier `kipper` is not found, try to run Kipper using your project's package manager. For example, if you are
using `npm`, you can run the following code:

```bash
npx kipper
```

## Importing Kipper as a module

To set up Kipper for your personal code, simply add <code>@kipper/core</code> or <code>kipper</code> (also includes the
Kipper CLI) to your project dependencies or development dependencies in your <code>package.json</code> file.

Example package.json:

```json
{
	"name": "example",
	"version": "0.1.0",
	"description": "An example program using Kipper",
	"keywords": [
		"kipper",
		"example"
	],
	"license": "GPL-3.0",
	"dependencies": {
		"@kipper/core": "latest"
	}
}
```

Afterwards, you can include the `@kipper/core` package in your JavaScript or TypeScript file. This package contains the
full Kipper Compiler and API, which can be customised according to your needs.

Kipper is shipped as a commonjs module and can therefore be imported using `require()` in Javascript or`import` in
TypeScript.

### Example

Using JavaScript:

```ts
const fs = require("fs").promises;
const kipper = require("@kipper/core");
const kipperJS = require("@kipper/core");

const path = "INSERT_PATH";
fs.readFile(path, "utf8").then(async (fileContent) => {
	// Define your own logger and compiler, which will handle the compilation
	const logger = new kipper.KipperLogger((level, msg) => {
		console.log(`[${level}] ${msg}`);
	});
	const compiler = new kipper.KipperCompiler(logger);

	// Compile the code string or stream
	let result = await compiler.compile(fileContent, {
		/* Config - Target must always be specified */
		target: kipperJS.TargetJS
	});
	let jsCode = result.write();

	// Running the Kipper program
	eval(jsCode);
});
```

Using TypeScript:

```ts
import { promises as fs } from "fs";
import * as kipper from "@kipper/core";
import * as kipperJS from "@kipper/target-js";

const path = "INSERT_PATH";
fs.readFile(path, "utf8" as BufferEncoding).then(async (fileContent: string) => {
	// Define your own logger and compiler, which will handle the compilation
	const logger = new kipper.KipperLogger((level, msg) => {
		console.log(`[${level}] ${msg}`);
	});
	const compiler = new kipper.KipperCompiler(logger);

	// Compile the code string or stream
	let result = await compiler.compile(fileContent, {
		/* Config - Target must always be specified */
		target: kipperJS.TargetJS
	});
	let jsCode = result.write();

	// Running the Kipper program
	eval(jsCode);
});
```
