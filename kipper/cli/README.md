![](https://github.com/Luna-Klatzer/Kipper/raw/main/img/Kipper-Logo-with-head.png)

# Kipper CLI - `@kipper/cli`

The Kipper command line interface (CLI) to interact with the Kipper compiler.

Kipper is a simple TS-based strongly and statically typed programming language, which is designed to allow for
simple and straightforward coding similar to TypeScript and Python! 🦊

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
![](https://img.shields.io/badge/Coverage-72%25-5A7302.svg?style=flat&logoColor=white&color=blue&prefix=$coverage$)
[![Version](https://img.shields.io/npm/v/@kipper/cli)](https://npmjs.org/package/@kipper/cli)
[![License](https://img.shields.io/npm/l/@kipper/cli)](https://github.com/Luna-Klatzer/Kipper/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)

<!-- toc -->
* [Kipper CLI - `@kipper/cli`](#kipper-cli---kippercli)
* [Kipper Docs](#kipper-docs)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Kipper Docs

Proper documentation for the Kipper language is available [here](https://wmc-ahif-2021.github.io/Kipper-Web/)!

# Usage

<!-- usage -->
```sh-session
$ npm install -g @kipper/cli
$ kipper COMMAND
running command...
$ kipper (--version)
@kipper/cli/0.8.0 linux-x64 node-v16.15.0
$ kipper --help [COMMAND]
USAGE
  $ kipper COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`kipper analyse [FILE]`](#kipper-analyse-file)
* [`kipper compile [FILE]`](#kipper-compile-file)
* [`kipper help [COMMAND]`](#kipper-help-command)
* [`kipper run [FILE]`](#kipper-run-file)
* [`kipper update [CHANNEL]`](#kipper-update-channel)
* [`kipper version`](#kipper-version)

## `kipper analyse [FILE]`

Analyses a file and validates its syntax and semantic integrity.

```
USAGE
  $ kipper analyse [FILE]

ARGUMENTS
  FILE  The file that should be analysed.

OPTIONS
  -e, --encoding=encoding        [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter.
```

_See code: [src/commands/analyse.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.8.0/kipper/cli/src/commands/analyse.ts)_

## `kipper compile [FILE]`

Compiles a Kipper program.

```
USAGE
  $ kipper compile [FILE]

ARGUMENTS
  FILE  The file that should be compiled.

OPTIONS
  -b, --[no-]optimise-builtins   If set to true, the built-in functions of the compiled code will be optimised using
                                 tree-shaking reducing the size of the output.

  -e, --encoding=encoding        [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).

  -i, --[no-]optimise-internals  If set to true, the internal functions of the compiled code will be optimised using
                                 tree-shaking reducing the size of the output.

  -o, --output-dir=output-dir    [default: build] The build directory where the compiled files should be placed. If the
                                 path does not exist, it will be created.

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter.
```

_See code: [src/commands/compile.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.8.0/kipper/cli/src/commands/compile.ts)_

## `kipper help [COMMAND]`

Displays help for the Kipper CLI.

```
USAGE
  $ kipper help [COMMAND]

ARGUMENTS
  COMMAND  Command to show help for.

OPTIONS
  -n, --nested-commands  Include all nested commands in the output.
```

_See code: [src/commands/help.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.8.0/kipper/cli/src/commands/help.ts)_

## `kipper run [FILE]`

Compiles and executes a Kipper program.

```
USAGE
  $ kipper run [FILE]

ARGUMENTS
  FILE  The file that should be compiled and run.

OPTIONS
  -b, --[no-]optimise-builtins   If set to true, the built-in functions of the compiled code will be optimised using
                                 tree-shaking reducing the size of the output.

  -e, --encoding=encoding        [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).

  -i, --[no-]optimise-internals  If set to true, the internal functions of the compiled code will be optimised using
                                 tree-shaking reducing the size of the output.

  -o, --output-dir=output-dir    [default: build] The build directory where the compiled files should be placed. If the
                                 path does not exist, it will be created.

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter.
```

_See code: [src/commands/run.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.8.0/kipper/cli/src/commands/run.ts)_

## `kipper update [CHANNEL]`

Updates the Kipper compiler and CLI.

```
USAGE
  $ kipper update [CHANNEL]

OPTIONS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=version  Install a specific version.
  --force                Force a re-download of the requested version.

EXAMPLES
  [object Object]
  [object Object]
  [object Object]
  [object Object]
```

_See code: [src/commands/update.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.8.0/kipper/cli/src/commands/update.ts)_

## `kipper version`

Displays the currently installed Kipper version.

```
USAGE
  $ kipper version
```

_See code: [src/commands/version.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.8.0/kipper/cli/src/commands/version.ts)_
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

See the [LICENSE](https://raw.githubusercontent.com/Luna-Klatzer/Kipper/main/LICENSE)
for information on terms & conditions for usage.

### FOSSA License Report

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_large)
