---
title: Compiler Setup
---

# Setting up your compiler

Setting up the compiler is a rather straightforward process as you simply define all required parameters and
options in the configuration object that is passed to the compiler.

<div class="important">
<p>
The API docs are a work-in-progress and will be slowly, but surely realised with the development of Kipper. As such this
page is for now used as a substitute for the in-detail CLI and Module API docs.
</p>
</div>

## Kipper API

Kipper provides an API for interacting with its compiler, which can be used to configure and inspect the
compilation of a program. This API is per default shipped with the `@kipper/core` package and the
`kipper-standalone.js` file.

## Configuring the Kipper Compiler in Node.js

Configuring `KipperCompile.compile()` can be done using the [`CompileConfig`](./module/core/interfaces/compiler.CompileConfig.html) interface, which defines all available parameters for a compilation.

### Example Configuration

```kipper
import { KipperCompiler } from "@kipper/core";
import { JSTarget } from "@kipper/target-js";

const compiler = new KipperCompiler();
const result = compiler.compile(
	kipperCode, // A string or a KipperParseStream containing the source code
	{
		fileName: "myProgram.kip",
		target: new JSTarget(),
		optimisationOptions: {
			optimiseInternals: true, // Removes any unused internal function
			optimiseBuiltIns: true, // Removes any unused built-in function
		},
	},
);
```
