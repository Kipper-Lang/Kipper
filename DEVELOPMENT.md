![](src/img/logos/kipper-logo-with-head.png)
# Setup

You need to install TypeScript and Node.js at first.
The Download links are below.

#### Install the TypeScript Compiler and Node.js

- [Download page of TypeScript](https://www.typescriptlang.org/download)
- [Download page of Node.js](https://nodejs.org/en/download/)

### Install PNPM for the monorepo management

Before working on Kipper, it's important to install pnpm, since Kipper is a monorepo with many child packages in a
single branch and repo, and therefore depends on the monorepo tools of pnpm.

For how to install pnpm please refer to the pnpm website, or if you have npm just run:

```sh
npm i -g pnpm
```

### VSCode setup

Install the following extensions:

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Install dependencies

Whenever dependencies in `package.json` are changed or you are setting up the repo for the first time, run the
following command:

```sh
pnpm install
```

To only install resolved dependencies in `pnpm-lock.yaml`:

```sh
pnpm install --frozen-lockfile
```

## Force LF line-endings

To force git to use LF line endings everywhere, run the following commands in your console:

```bash
git config --global core.autocrlf false
git config --global core.eol lf
```

Remove the `--global` tags if you want to keep using `CRLF` on other git repositories.

## Other scripts for Development

### Rebuild the project

To incrementally build the project:

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

#### Install dependencies

Whenever `package.json` is changed, run the following command:

```sh
pnpm install
```

## Run the application

To start the Application use the command:

```sh
pnpm run dev
```

## Build the project

To build the project:

```sh
pnpm run build
```
