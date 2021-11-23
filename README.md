![](./img/Kipper-Logo-with-head.png)

# Kipper

The Kipper programming language (CLI implementation) - Currently in development. No usable/stable versions available

*Note that this is a development preview! Stable releases might take until January-March 2022*

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/kipper.svg)](https://npmjs.org/package/kipper)
[![Downloads/week](https://img.shields.io/npm/dw/kipper.svg)](https://npmjs.org/package/kipper)
[![License](https://img.shields.io/npm/l/kipper.svg)](https://github.com/Luna-Klatzer/Kipper/blob/master/package.json)
[![Issues](https://img.shields.io/github/issues/Luna-Klatzer/Kipper)](https://github.com/Luna-Klatzer/Kipper/issues)

<!-- toc -->
* [Kipper](#kipper)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g kipper
$ kipper COMMAND
running command...
$ kipper (-v|--version|version)
kipper/0.0.2 linux-x64 node-v16.10.0
$ kipper --help [COMMAND]
USAGE
  $ kipper COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`kipper analyse FILE`](#kipper-analyse-file)
* [`kipper hello`](#kipper-hello)
* [`kipper help [COMMAND]`](#kipper-help-command)

## `kipper analyse FILE`

Analyses a file and validates its syntax

```
USAGE
  $ kipper analyse FILE

ARGUMENTS
  FILE  The file that should be analysed and checked

OPTIONS
  --encoding=encoding  [default: utf-8] The encoding that should be used to read the file

EXAMPLE
  $ kipper analyse
  Validating syntax... - file.kip

  0 Warnings, 0 Errors found!

  Full log available at `local/path/kipper-analyse_HH-MM-SS_dd-mm-yy.log`
```

_See code: [src/commands/analyse.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.0.2/src/commands/analyse.ts)_

## `kipper hello`

Returns a simple hello from Kipper

```
USAGE
  $ kipper hello

EXAMPLE
  $ kipper hello
  Hello from Kipper!
```

_See code: [src/commands/hello.ts](https://github.com/Luna-Klatzer/Kipper/blob/v0.0.2/src/commands/hello.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
