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

Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Other scripts for Development

### Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

### Rebuild the project

To incrementally build the project:

```sh
npm run build
```

### Fix code style and formatting issues

(Using `lint` will also call `prettier` afterwards. For a pure `typescript-eslint` execution use `tslint`)

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

### Tests

```sh
npm test
```

### Generate Antlr4 Files

If you only want to generate the antlr4-files:

```bash
npm run antlr4ts
```

(If antlr4 is not installed, install it from here: https://www.antlr.org/)

otherwise, run simply the default `build` script:

```bash
npm run build
```

## Making a new release

First login to your account:

```bash
npm login
```

Afterwards publish publicly using:

```bash
npm publish --access public
```
