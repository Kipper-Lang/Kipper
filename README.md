# Kipper

The Kipper Programming Language

## Project Overview

- NodeJS is used for the deployment and usage of the project.
- [Semantic versioning](https://semver.org/) is used for the versioning of new releases.
- CHANGELOG.md uses the format from [KeepAChangelog](https://keepachangelog.com/en/1.0.0/).
- [Antrl4](https://antlr.org) is used for generating the lexer and parser for the language.

## Website Project and online Compiler Project

Since this project is intended as a learning task for TypeScript and Web-Dev, the project will have an interactive website
and the compiler built in for simple usage online without having to install the project.

## Language Grammar

The grammar files can be found in `./grammar/`. The files are in the Antlr4-Format and will be used with the Antlr4 compiled
TypeScript Parser and Lexer.

## Development

### Setup

#### Install the TypeScript Compiler and Node.js

- [Download page of TypeScript](https://www.typescriptlang.org/download)
- [Download page of Node.js](https://nodejs.org/en/download/)

#### Install dependencies

Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Tests

```sh
npm test
```
