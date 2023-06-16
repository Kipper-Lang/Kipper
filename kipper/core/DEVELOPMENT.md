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

## Other scripts for Development

### Rebuild the project

To build the project:

```sh
pnpm run build
```

### Fix code style and formatting issues

(Using `lint` will also call `prettier` afterwards. For a pure `typescript-eslint` execution use `tslint`)

```sh
pnpm run lint
```

To automatically fix such issues:

```sh
pnpm run lint:fix
```

### Tests

```sh
pnpm test
```

## Potential issues with Antlr4 Lexer and Parser combination

If you are adding new Lexer rules that have not been yet added to the `KipperLexer.tokens` file,
then the Antlr4 CLI might raise some issues, saying that implicit tokens are not allowed.

For example if the following syntax is added to the `KipperLexer.g4` file:

```antlr
TriplePlus : '+++';
```

And is used implicitly in the `KipperParser.g4` file:

```antlr
someExpression
	: 	'+++'
	;
```

Then likely the following error will be raised:

```
error(126): KipperLexer.g4:X:X: cannot create implicit token for string literal in non-combined grammar: '+++'
```

To fix this, simply reference the token directly in the `KipperParser.g4` file, like so:

```antlr
someExpression
	: 	TriplePlus
	;
```

This will make the Antlr4 CLI generate the token in the `KipperLexer.tokens` file, meaning afterwards the implicit use
will be valid. For now this is the only quick way to fix this issue, so this workaround should be used until a better
solution is found.
