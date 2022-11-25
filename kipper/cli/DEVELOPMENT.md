# Developer's Guide

We recommend Visual Studio Code or Web-Storm for developing on Kipper.

## General Setup

### Install the TypeScript Compiler and Node.js

- [Download page of TypeScript](https://www.typescriptlang.org/download)
- [Download page of Node.js](https://nodejs.org/en/download/)

### VSCode setup

Install the following extensions:

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Install dependencies

For installing the dependencies, please refer to the root [DEVELOPMENT.md](../../DEVELOPMENT.md), as the entire project should be
handled as a monorepo.

## Development workflow

### Visual Studio Code

1. Start the build task (Cmd+Shift+B) to run TypeScript compiler in the
   background, watching and recompiling files as you change them. Compilation
   errors will be shown in the VSCode's "PROBLEMS" window.

2. Execute "Run Rest Task" from the Command Palette (Cmd+Shift+P) to re-run the
   test suite and lint the code for both programming and style errors. Linting
   errors will be shown in VSCode's "PROBLEMS" window. Failed tests are printed
   to terminal output only.

### Other editors/IDEs

1. Open a new terminal window/tab and start the continuous build process via
   `pnpm run build:watch`. It will run TypeScript compiler in watch mode,
   recompiling files as you change them. Any compilation errors will be printed
   to the terminal.

2. In your main terminal window/tab, run `pnpm run test` to re-run the test
   suite and lint the code for both programming and style errors. You should run
   this command manually whenever you have new changes to test. Test failures
   and linter errors will be printed to the terminal.

## Other scripts for Development

### Rebuild the project

To build the project:

```sh
pnpm run build
```

### Fix code style and formatting issues

(Using `lint` will also call `prettier` afterwards. For a pure `typescript-eslint` use `tslint`)

```sh
pnpm run lint
```

To automatically fix such issues:

```sh
pnpm run lint:fix
```
