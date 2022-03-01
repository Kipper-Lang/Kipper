![](./img/Kipper-Logo-with-head.png)

# Kipper

The Kipper programming language - Currently in development. No usable/stable versions available

*Note that this is a development preview! Stable releases might take until January-March 2022*

[![Version](https://img.shields.io/npm/v/kipper.svg)](https://npmjs.org/package/kipper)
[![Downloads/week](https://img.shields.io/npm/dw/kipper.svg)](https://npmjs.org/package/kipper)
[![License](https://img.shields.io/npm/l/kipper.svg)](https://github.com/Luna-Klatzer/Kipper/blob/master/package.json)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)

# Docs

For proper documentation on the kipper language go [here](https://wmc-ahif-2021.github.io/Kipper-Web/)!

# Usage

Kipper is a language that is designed to compile to native TypeScript (ES2016 / ES7). Therefore, running it requires 
either NodeJS or a compiler that will translate it to JavaScript, which can then be also run in the browser (For 
compiling TS to JS in the browser, [@babel/standalone](https://babeljs.io/docs/en/babel-standalone) is recommended, as 
it can compile without any overhead in the browser).

## In a browser

For running Kipper in the browser, you will have to download a browserify-packaged js-file, which combines all the 
dependencies of Kipper into a web-friendly file that you can include in your HTML files.

```html
<!-- Babel dependency -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- Kipper dependency - Get it from the GitHub release page for Kipper -->
<script src="KIPPER_DOWNLOAD_LINK"></script>
<!-- Kipper will automatically compile all kipper script tags and replace them with javascript tags before runtime -->
<script type="text/kipper"></script>
```

## With NodeJS

In work...
