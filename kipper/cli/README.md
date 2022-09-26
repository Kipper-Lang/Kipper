![](https://github.com/Luna-Klatzer/Kipper/raw/main/img/Kipper-Logo-with-head.png)

# Kipper CLI - `@kipper/cli`

The Kipper command line interface (CLI) to interact with the Kipper compiler.

Kipper is a simple strongly and statically typed programming language, which is designed to allow for
straightforward, simple, secure and type-safe coding similar to TypeScript, Rust and Python! 🦊

[![Version](https://img.shields.io/npm/v/@kipper/cli?label=release&color=%23cd2620&logo=npm)](https://npmjs.org/package/@kipper/cli)
![](https://img.shields.io/badge/Coverage-75%25-5A7302.svg?style=flat&logo=github&logoColor=white&color=blue&prefix=$coverage$)
[![License](https://img.shields.io/github/license/Luna-Klatzer/Kipper?color=cyan)](https://github.com/Luna-Klatzer/Kipper/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)
[![Install size](https://packagephobia.com/badge?p=@kipper/cli)](https://packagephobia.com/result?p=@kipper/cli)
[![Publish size](https://badgen.net/packagephobia/publish/@kipper/cli)](https://packagephobia.com/result?p=@kipper/cli)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->

- [Kipper CLI - `@kipper/cli`](#kipper-cli---kippercli)
- [Kipper Docs](#kipper-docs)
- [Usage](#usage)
- [Commands](#commands)

<!-- tocstop -->

# Kipper Docs

Proper documentation for the Kipper language is available [here](https://luna-klatzer.github.io/Kipper/)!

# Usage

<!-- usage -->

```sh-session
$ npm install -g @kipper/cli
$ kipper COMMAND
running command...
$ kipper (--version)
@kipper/cli/0.10.0-alpha.4 linux-x64 node-v16.15.1
$ kipper --help [COMMAND]
USAGE
  $ kipper COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`kipper analyse [FILE]`](#kipper-analyse-file)
- [`kipper compile [FILE]`](#kipper-compile-file)
- [`kipper help [COMMAND]`](#kipper-help-command)
- [`kipper run [FILE]`](#kipper-run-file)
- [`kipper update [CHANNEL]`](#kipper-update-channel)
- [`kipper version`](#kipper-version)

## `kipper analyse [FILE]`

Analyse a Kipper file and validate its syntax and semantic integrity.

```
USAGE
  $ kipper analyse [FILE]

ARGUMENTS
  FILE  The file that should be analysed.

OPTIONS
  -e, --encoding=encoding        [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter.

  -w, --[no-]warnings            Show warnings that were emitted during the analysis.
```

_See
code: [lib/commands/analyse.js](https://github.com/Luna-Klatzer/Kipper/blob/v0.10.0-alpha.4/kipper/cli/lib/commands/analyse.js)_

## `kipper compile [FILE]`

Compile a Kipper program into the specified target language.

```
USAGE
  $ kipper compile [FILE]

ARGUMENTS
  FILE  The file that should be compiled.

OPTIONS
  -b, --[no-]optimise-builtins   Optimise the generated built-in functions using tree-shaking to reduce the size of the
                                 output.

  -e, --encoding=encoding        [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).

  -i, --[no-]optimise-internals  Optimise the generated internal functions using tree-shaking to reduce the size of the
                                 output.

  -o, --output-dir=output-dir    [default: build] The build directory where the compiled files should be placed. If the
                                 path does not exist, it will be created.

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter.

  -t, --[no-]log-timestamp       Show the timestamp of each log message.

  -t, --target=js|ts             [default: js] The target language where the compiled program should be emitted to.

  -w, --[no-]warnings            Show warnings that were emitted during the compilation.

  --[no-]abort-on-first-error    Abort on the first error the compiler encounters.

  --[no-]recover                 Recover from compiler errors and log all detected semantic issues.
```

_See
code: [lib/commands/compile.js](https://github.com/Luna-Klatzer/Kipper/blob/v0.10.0-alpha.4/kipper/cli/lib/commands/compile.js)_

## `kipper help [COMMAND]`

Display help for the Kipper CLI.

```
USAGE
  $ kipper help [COMMAND]

ARGUMENTS
  COMMAND  Command to show help for.

OPTIONS
  -n, --nested-commands  Include all nested commands in the output.
```

_See
code: [lib/commands/help.js](https://github.com/Luna-Klatzer/Kipper/blob/v0.10.0-alpha.4/kipper/cli/lib/commands/help.js)_

## `kipper run [FILE]`

Compile and execute a Kipper program.

```
USAGE
  $ kipper run [FILE]

ARGUMENTS
  FILE  The file that should be compiled and run.

OPTIONS
  -b, --[no-]optimise-builtins   Optimise the generated built-in functions using tree-shaking to reduce the size of the
                                 output.

  -e, --encoding=encoding        [default: utf8] The encoding that should be used to read the file (ascii,utf8,utf16le).

  -i, --[no-]optimise-internals  Optimise the generated internal functions using tree-shaking to reduce the size of the
                                 output.

  -o, --output-dir=output-dir    [default: build] The build directory where the compiled files should be placed. If the
                                 path does not exist, it will be created.

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter.

  -t, --target=js|ts             [default: js] The target language where the compiled program should be emitted to.

  -w, --[no-]warnings            Show warnings that were emitted during the compilation.

  --[no-]abort-on-first-error    Abort on the first error the compiler encounters. Same behaviour as '--no-recover'.

  --[no-]log-timestamp           Show the timestamp of each log message.

  --[no-]recover                 Recover from compiler errors and display all detected compiler errors.
```

_See
code: [lib/commands/run.js](https://github.com/Luna-Klatzer/Kipper/blob/v0.10.0-alpha.4/kipper/cli/lib/commands/run.js)_

## `kipper update [CHANNEL]`

Update the Kipper compiler and CLI.

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

_See
code: [lib/commands/update.js](https://github.com/Luna-Klatzer/Kipper/blob/v0.10.0-alpha.4/kipper/cli/lib/commands/update.js)_

## `kipper version`

Display the currently installed Kipper version.

```
USAGE
  $ kipper version
```

_See
code: [lib/commands/version.js](https://github.com/Luna-Klatzer/Kipper/blob/v0.10.0-alpha.4/kipper/cli/lib/commands/version.js)_

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
