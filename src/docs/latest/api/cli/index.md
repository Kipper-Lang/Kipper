---
title: Overview
dropdownTitle: CLI
nav:
  - index.md
  - new.md
  - run.md
  - compile.md
  - help.md
  - version.md
---

# Kipper CLI API

The Kipper CLI API describes the functionality of the Kipper CLI, which is provided by the `@kipper/cli` package. This
is besides the [Kipper Module API](../module/index.html) the only way to interact with the Kipper compiler.

Unlike the programmatic API, the CLI can be interacted with using the command line. This is done by calling commands
and passing flags (arguments) to the `kipper` command, which is per default available in your package or globally when
the `@kipper/cli` package is installed.

## Usage

<!-- usage -->

```sh-session
$ npm install -g @kipper/cli
$ kipper COMMAND
running command...
$ kipper (--version)
@kipper/cli/0.11.0-rc.0 linux-x64 node-v18.18.2
$ kipper --help [COMMAND]
USAGE
  $ kipper COMMAND
...
```

<!-- usagestop -->

## Available Commands

- [`kipper new [LOCATION]`](./new.html): Initialises a new Kipper project.
- [`kipper run [FILE]`](./run.html): Compiles and runs a Kipper program.
- [`kipper compile [FILE]`](./compile.html): Compiles a Kipper program to a target language.
- [`kipper help [COMMAND]`](./help.html): Displays help information about the Kipper CLI.
- [`kipper version`](./version.html): Displays the version of the Kipper CLI.
