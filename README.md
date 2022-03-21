![](./img/Kipper-Logo-with-head.png)

# Kipper Base Package - `@kipper/base`

[![Version](https://img.shields.io/npm/v/@kipper/base)](https://npmjs.org/package/@kipper/base)
![](https://img.shields.io/badge/Coverage-57%25-F2E96B.svg?style=flat&logoColor=white&color=blue&prefix=$coverage$)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)
[![License](https://img.shields.io/github/license/Para-Lang/Para?color=cyan)](https://github.com/Luna-Klatzer/Kipper/blob/main/LICENSE)
[![Install size](https://packagephobia.com/badge?p=@kipper/base)](https://packagephobia.com/result?p=@kipper/base)
[![Publish size](https://badgen.net/packagephobia/publish/@kipper/base)](https://packagephobia.com/result?p=@kipper/base)

The base module and dependency for the entire Kipper project, which contains the core language and compiler.

Kipper is a simple TS-based strongly and statically typed programming language, which is designed to allow for
simple and straightforward coding similar to TypeScript and Python.

*Note that this is a development version! Stable releases might take until April/May 2022*

## Docs

For proper documentation on the kipper language go [here](https://wmc-ahif-2021.github.io/Kipper-Web/)!

*This is a project in work, and as such some docs pages can be work in progress!*

## Usage

To use, Kipper you have three options:
- Run it in the browser using the CDN `kipper-standalone.min.js` file, which bundles the entire compiler
  for your browser.
- Run it using the NodeJS CLI
- Import it as a NodeJS package in your code

### In a browser

For running Kipper in the browser, you will have to include the `kipper-standalone.min.js` file, which
provides the kipper compiler for the browser. This script will fetch your code from script tags with
the property `type="text/kipper"`, and replace the content with runnable JavaScript.

As a dependency you will also have to include `babel.min.js`, which is needed to allow for a compilation
from TS to JS in your browser, as Kipper compiles only to TypeScript.

Simple example of including your code in your browser:

```html
<!-- Babel dependency -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- Kipper dependency - Get it from the GitHub release page for Kipper -->
<script src="https://cdn.jsdelivr.net/npm/@kipper/base@latest/kipper-standalone.min.js"></script>
<!-- Kipper will automatically compile all kipper script tags and replace them with javascript tags before runtime -->
<script type="text/kipper">
  /* Simple Program */
  call print("Hello world!");
</script>
```

### Locally using Node.js and the CLI

This is to recommend way to use Kipper if you are new to coding, as it allows you to locally use and run kipper, 
without depending on a browser. 

This also enables the usage of files, which can be read and compiled to TypeScript, and run using the CLI, without
having to do anything yourself. This also allows internally the input of data over the console and file-interactions, 
which are not supported inside a browser.

For more info go to the CLI repository [here](https://github.con/Luna-Klatzer/Kipper-CLI) or visit the npm page 
[here](https://www.npmjs.com/package/@kipper/cli).

### Locally in your own code as a package

This is the recommended way if you intend to use kipper in a workflow or write code yourself to manage 
the compiler. This also allows for special handling of logging and customising the compilation process.

Simple example of using kipper using Node.js:

```ts
import { promises as fs } from "fs";
import { KipperCompiler } from "@kipper/base";

const path = "INSERT_PATH";
fs.readFile(path, "utf8" as BufferEncoding).then(
  (fileContent: string) => {
    const compiler = new KipperCompiler();
    let compileResult = compiler.compile(fileContent);
  }
);
```
