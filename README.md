![](./img/Kipper-Logo-with-head.png)

# Kipper

Kipper is a simple TS-based strongly and statically typed programming language, which is designed to allow for
simple and straightforward coding similar to TypeScript and Python.

*Note that this is a development version! Stable releases might take until April/May 2022*

[![Version](https://img.shields.io/npm/v/@kipper/base)](https://npmjs.org/package/@kipper/base)
[![License](https://img.shields.io/npm/l/kipper.svg)](https://github.com/Luna-Klatzer/Kipper/blob/master/package.json)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)

# Docs

For proper documentation on the kipper language go [here](https://wmc-ahif-2021.github.io/Kipper-Web/)!

*This is a project in work, and as such some docs pages can be work in progress!*

# Usage

To use, Kipper you have three options:
- Run it in the browser using the CDN `kipper-standalone.min.js` file, which bundles the entire compiler
  for your browser.
- Run it using the NodeJS CLI
- Import it as a NodeJS module in your code

## In a browser

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
<script src="https://cdn.jsdelivr.net/npm/kipper/base@latest/kipper-standalone.min.js"></script>
<!-- Kipper will automatically compile all kipper script tags and replace them with javascript tags before runtime -->
<script type="text/kipper">
  /* Simple Program */
  call print("Hello world!");
</script>
```

## With the CLI in a terminal

In work...

## With NodeJS as a module

Go to our separate repository [here](https://github.com/Luna-Klatzer/Kipper-CLI), which is designed for NodeJS and implements a basic CLI to interact
with the compiler.
