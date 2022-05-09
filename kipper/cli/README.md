![](https://github.com/Luna-Klatzer/Kipper/raw/main/img/Kipper-Logo-with-head.png)

# Kipper CLI - `@kipper/cli`

The CLI implementation for the Kipper programming language and compiler.

*Note that this is a development preview! Stable releases might take until January-March 2022*

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![](https://img.shields.io/badge/Coverage-72%25-5A7302.svg?style=flat&logoColor=white&color=blue&prefix=$coverage$)
[![Version](https://img.shields.io/npm/v/@kipper/cli)](https://npmjs.org/package/@kipper/cli)
[![License](https://img.shields.io/npm/l/@kipper/cli)](https://github.com/Luna-Klatzer/Kipper/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)

<!-- toc -->
* [Kipper CLI - `@kipper/cli`](#kipper-cli---kippercli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

## Kipper Docs

For proper documentation on the kipper language go [here](https://wmc-ahif-2021.github.io/Kipper-Web/)!

*This is a project in work, and as such some docs pages can be incomplete or work in progress!*

# Usage

<!-- usage -->
```sh-session
$ npm install -g @kipper/cli
$ kipper COMMAND
running command...
$ kipper (-v|--version|version)
@kipper/cli/0.5.0-beta.1 linux-x64 node-v16.15.0
$ kipper --help [COMMAND]
USAGE
  $ kipper COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`kipper analyse FILE`](#kipper-analyse-file)
* [`kipper compile FILE`](#kipper-compile-file)
* [`kipper help [COMMAND]`](#kipper-help-command)
* [`kipper run FILE`](#kipper-run-file)

## `kipper analyse FILE`

Analyses a file and validates its syntax.

```
USAGE
  $ kipper analyse FILE

ARGUMENTS
  FILE  The file that should be analysed.

OPTIONS
  --encoding=encoding  [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).
```

_See code: [src/commands/analyse.ts](https://github.com/Luna-Klatzer/Kipper-CLI/blob/v0.5.0-beta.1/src/commands/analyse.ts)_

## `kipper compile FILE`

Compiles a Kipper source file file into TypeScript.

```
USAGE
  $ kipper compile FILE

ARGUMENTS
  FILE  The file that should be compiled.

OPTIONS
  --encoding=encoding    [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).

  --outputDir=outputDir  [default: build] The build directory where the compiled files should be placed. If the path
                         does not exist, it will be created.
```

_See code: [src/commands/compile.ts](https://github.com/Luna-Klatzer/Kipper-CLI/blob/v0.5.0-beta.1/src/commands/compile.ts)_

## `kipper help [COMMAND]`

display help for kipper

```
USAGE
  $ kipper help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.3.1/src/commands/help.ts)_

## `kipper run FILE`

Compiles a Kipper program and transpiles it to JavaScript using tsc to execute it.

```
USAGE
  $ kipper run FILE

ARGUMENTS
  FILE  The file that should be compiled and run.

OPTIONS
  --encoding=encoding    [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).

  --outputDir=outputDir  [default: build] The build directory where the compiled files should be placed. If the path
                         does not exist, it will be created.
```

_See code: [src/commands/run.ts](https://github.com/Luna-Klatzer/Kipper-CLI/blob/v0.5.0-beta.1/src/commands/run.ts)_
<!-- commandsstop -->

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

See the [LICENSE](https://raw.githubusercontent.com/Para-Lang/Para/main/LICENSE)
for information on terms & conditions for usage.

### FOSSA License Report

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_large)
