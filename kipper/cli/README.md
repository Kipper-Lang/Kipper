![](https://github.com/Kipper-Lang/Kipper/raw/main/img/Kipper-Logo-with-head.png)

# Kipper CLI - `@kipper/cli` 🦊✨

The Kipper command line interface (CLI) to interact with the Kipper compiler. ⌨️✨

Kipper is a JavaScript-like strongly and strictly typed language with Python flavour. It aims to provide
straightforward, simple, secure and type-safe coding with better efficiency and developer satisfaction!

It compiles to both JavaScript and TypeScript, and can be set up in your terminal, Node.js or ES6+ browser. 🦊💻

_For more details, you can read more about this project on the [project repository](https://github.com/Kipper-Lang/Kipper)
and the [Kipper website](https://kipper-lang.org)._

[![Version](https://img.shields.io/npm/v/@kipper/cli?label=release&color=%23cd2620&logo=npm)](https://npmjs.org/package/@kipper/cli)
[![Dev Version](https://img.shields.io/github/v/tag/Kipper-Lang/Kipper?include_prereleases&label=dev&logo=github&sort=semver)](https://github.com/Kipper-Lang/Kipper/tags)
[![codecov](https://codecov.io/gh/Kipper-Lang/Kipper/branch/main/graph/badge.svg?token=S4RQT7X3YP)](https://codecov.io/gh/Kipper-Lang/Kipper)
[![License](https://img.shields.io/github/license/Kipper-Lang/Kipper?color=cyan)](https://github.com/Kipper-Lang/Kipper/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/Kipper-Lang/Kipper)](https://github.com/Kipper-Lang/Kipper/issues)
[![Install size](https://packagephobia.com/badge?p=@kipper/cli)](https://packagephobia.com/result?p=@kipper/cli)
[![Publish size](https://badgen.net/packagephobia/publish/@kipper/cli)](https://packagephobia.com/result?p=@kipper/cli)
[![DOI](https://zenodo.org/badge/411260595.svg)](https://zenodo.org/badge/latestdoi/411260595)

<!-- toc -->

- [Kipper CLI - `@kipper/cli` 🦊✨](#kipper-cli---kippercli-)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

## General Information

- Website: https://kipper-lang.org
- Docs: https://docs.kipper-lang.org
- Playground: https://play.kipper-lang.org
- Issue Tracker: https://issues.kipper-lang.org
- Roadmap: [View Kipper Roadmap 🦊🚧](https://github.com/Kipper-Lang/Kipper/discussions/139)
- Changelog: [View CHANGELOG.md](https://github.com/Kipper-Lang/Kipper/blob/main/CHANGELOG.md)

# Usage

<!-- usage -->

```sh-session
$ npm install -g @kipper/cli
$ kipper COMMAND
running command...
$ kipper (--version)
@kipper/cli/0.12.0-alpha.3 linux-x64 node-v20.15.0
$ kipper --help [COMMAND]
USAGE
  $ kipper COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`kipper compile [FILE]`](#kipper-compile-file)
- [`kipper help [COMMAND]`](#kipper-help-command)
- [`kipper new [LOCATION]`](#kipper-new-location)
- [`kipper run [FILE]`](#kipper-run-file)
- [`kipper version`](#kipper-version)

## `kipper compile [FILE]`

Compile a Kipper program into the specified target language.

```
USAGE
  $ kipper compile [FILE]

ARGUMENTS
  FILE  The file that should be compiled. Takes precedence over the 'string-code' flag and the config file.

OPTIONS
  -b, --[no-]optimise-builtins   Optimise the generated built-in functions using tree-shaking to reduce the size of the
                                 output.

  -d, --[no-]dry-run             Run the compiler without writing any output. Useful for checking for errors.

  -e, --encoding=encoding        The encoding that should be used to read the file (ascii,utf-8,utf8,utf16le).

  -i, --[no-]optimise-internals  Optimise the generated internal functions using tree-shaking to reduce the size of the
                                 output.

  -o, --output-dir=output-dir    The build directory where the compiled files should be placed. If the path does not
                                 exist, it will be created. Takes precedence over the config file, defaults to 'build'
                                 if both are not provided

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter. Takes precedence over the config file.

  -t, --target=js|ts             The target language where the compiled program should be emitted to.

  -w, --[no-]warnings            Show warnings that were emitted during the compilation.

  --[no-]log-timestamp           Show the timestamp of each log message.

  --[no-]recover                 Recover from compiler errors and log all detected semantic issues.

EXAMPLES
  kipper compile -t js
  kipper compile -t ts -s "print('Hello, World!');"
  kipper compile -t js -e utf8 -o build/ -s "print('Hello, World!');"
  kipper compile -t ts -o build/ -e utf8 -s "print('Hello, World!');"
  kipper compile -t js -o build/ -e utf8 -s "print('Hello, World!');" --warnings
  kipper compile -t ts -o build/ -e utf8 -s "print('Hello, World!');" --warnings --log-timestamp
  kipper compile -t js ./path/to/file.kip
  kipper compile -t ts ./path/to/file.kip -o build/ --log-timestamp
  kipper compile -t js ./path/to/file.kip -o build/ --warnings --log-timestamp
  kipper compile -t ts ./path/to/file.kip -o build/ -e utf16le --warnings --log-timestamp
```

_See code: [src/commands/compile.ts](https://github.com/Kipper-Lang/Kipper/blob/v0.12.0-alpha.3/kipper/cli/src/commands/compile.ts)_

## `kipper help [COMMAND]`

Display help for the Kipper CLI.

```
USAGE
  $ kipper help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [src/commands/help.ts](https://github.com/Kipper-Lang/Kipper/blob/v0.12.0-alpha.3/kipper/cli/src/commands/help.ts)_

## `kipper new [LOCATION]`

Generate a new Kipper project with a kip-config.json using a setup wizard.

```
USAGE
  $ kipper new [LOCATION]

ARGUMENTS
  LOCATION  [default: .] The directory where the new project should be created.

OPTIONS
  -d, --default  Use the default settings for the new project. Skips the setup wizard.
```

_See code: [src/commands/new.ts](https://github.com/Kipper-Lang/Kipper/blob/v0.12.0-alpha.3/kipper/cli/src/commands/new.ts)_

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

  -e, --encoding=encoding        The encoding that should be used to read the file (ascii,utf-8,utf8,utf16le).

  -i, --[no-]optimise-internals  Optimise the generated internal functions using tree-shaking to reduce the size of the
                                 output.

  -o, --output-dir=output-dir    The build directory where the compiled files should be placed. If the path does not
                                 exist, it will be created.

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter.

  -t, --target=js|ts             The target language where the compiled program should be emitted to.

  -w, --[no-]warnings            Show warnings that were emitted during the compilation.

  --[no-]log-timestamp           Show the timestamp of each log message.

  --[no-]recover                 Recover from compiler errors and display all detected compiler errors.

EXAMPLES
  kipper run -t js
  kipper run -t ts -s "print('Hello, World!');"
  kipper run -t js -e utf8 -o build/ -s "print('Hello, World!');"
  kipper run -t ts -o build/ -e utf8 -s "print('Hello, World!');"
  kipper run -t js -o build/ -e utf8 -s "print('Hello, World!');" --warnings
  kipper run -t ts -o build/ -e utf8 -s "print('Hello, World!');" --warnings --log-timestamp
```

_See code: [src/commands/run.ts](https://github.com/Kipper-Lang/Kipper/blob/v0.12.0-alpha.3/kipper/cli/src/commands/run.ts)_

## `kipper version`

Display the currently installed Kipper version.

```
USAGE
  $ kipper version
```

_See code: [src/commands/version.ts](https://github.com/Kipper-Lang/Kipper/blob/v0.12.0-alpha.3/kipper/cli/src/commands/version.ts)_

<!-- commandsstop -->

## Contributing to Kipper

If you want to contribute to Kipper, we have a full guide explaining the structure of Kipper and how to use GitHub
issues and pull requests. Check it out [here](https://github.com/Kipper-Lang/Kipper/blob/main/CONTRIBUTING.md)!

If you have any questions or concerns, you can open up a discussion page [here](https://github.com/Kipper-Lang/Kipper/discussions)!

We appreciate any feedback or help! Kipper is open-source and free for anyone, help us make it even better! 🦊❤️

## Copyright and License

![License](https://img.shields.io/github/license/Kipper-Lang/Kipper?color=cyan)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_shield)

Copyright (C) 2021-2024 Luna Klatzer

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU General Public License as published by the Free Software
Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
this program. If not, see <https://www.gnu.org/licenses/>.

See the [LICENSE](https://raw.githubusercontent.com/Kipper-Lang/Kipper/main/LICENSE)
for information on terms & conditions for usage.

### FOSSA License Report

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FLuna-Klatzer%2FKipper?ref=badge_large)
