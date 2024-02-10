![](https://github.com/Luna-Klatzer/Kipper/raw/main/img/Kipper-Logo-with-head.png)

# Kipper JavaScript Target - `@kipper/target-js` 🦊⌨️

[![Version](https://img.shields.io/npm/v/@kipper/target-js?label=npm%20stable&color=%23cd2620&logo=npm)](https://npmjs.org/package/kipper)
[![Dev Version](https://img.shields.io/github/v/tag/Luna-Klatzer/Kipper?include_prereleases&label=dev&logo=github&sort=semver)](https://github.com/Luna-Klatzer/Kipper/tags)
[![codecov](https://codecov.io/gh/Luna-Klatzer/Kipper/branch/main/graph/badge.svg?token=S4RQT7X3YP)](https://codecov.io/gh/Luna-Klatzer/Kipper)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)
[![License](https://img.shields.io/github/license/Luna-Klatzer/Kipper?color=cyan)](https://github.com/Luna-Klatzer/Kipper/blob/main/LICENSE)
[![Install size](https://packagephobia.com/badge?p=@kipper/target-js)](https://packagephobia.com/result?p=@kipper/target-js)
[![Publish size](https://badgen.net/packagephobia/publish/@kipper/target-js)](https://packagephobia.com/result?p=@kipper/target-js)
[![DOI](https://zenodo.org/badge/411260595.svg)](https://zenodo.org/badge/latestdoi/411260595)

The JavaScript target for the Kipper Compiler. 🦊✨

Kipper is a JavaScript-like strongly and strictly typed language with Python flavour. It aims to provide
straightforward, simple, secure and type-safe coding with better efficiency and developer satisfaction!

It compiles to both JavaScript and TypeScript, and can be set up in your terminal, Node.js or ES6+ browser. 🦊

_For more details, you can read more about this project on the [project repository](https://github.com/Luna-Klatzer/Kipper)
and the [Kipper website](https://kipper-lang.org)._

## Installation

To install the whole Kipper package with its CLI, run the following command:

```bash
npm i @kipper/target-js
```

If you are using `pnpm` or `yarn`, use `pnpm i @kipper/target-js` or `yarn add @kipper/target-js`.

## General Information

- Website: https://kipper-lang.org
- Docs: https://docs.kipper-lang.org
- Playground: https://play.kipper-lang.org
- Issue Tracker: https://issues.kipper-lang.org
- Roadmap: [View Kipper Roadmap 🦊🚧](https://github.com/Luna-Klatzer/Kipper/discussions/139)
- Changelog: [View CHANGELOG.md](https://github.com/Luna-Klatzer/Kipper/blob/main/CHANGELOG.md)

## Usage

If you are using `@kipper/cli` then this package is automatically installed and compiling to JavaScript can be done
using the `--target=js` flag, for example:

```bash
kipper compile example-script.kip --target=js
```

Otherwise, simply import the target and specify it in the `compilerOptions` field of `KipperCompiler.compile()`, for
example:

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

## Kipper Docs

Proper documentation for the Kipper language is available at https://docs.kipper-lang.org!

## Contributing to Kipper

If you want to contribute to Kipper, we have a full guide explaining the structure of Kipper and how to use GitHub
issues and pull requests. Check it out [here](https://github.com/Luna-Klatzer/Kipper/blob/main/CONTRIBUTING.md)!

If you have any questions or concerns, you can open up a discussion page [here](https://github.com/Luna-Klatzer/Kipper/discussions)!

We appreciate any feedback or help! Kipper is open-source and free for anyone, help us make it even better! 🦊❤️

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
