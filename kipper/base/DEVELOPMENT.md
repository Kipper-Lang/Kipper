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
pnpm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
pnpm ci
```

## Other scripts for Development

### Run the application

```sh
pnpm start
```

You can also run `node .` to skip the build step.

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

### Tests

```sh
pnpm test
```

### Generate Antlr4 Files

If you only want to generate the antlr4-files:

```bash
pnpm run antlr4ts
```

(If antlr4 is not installed, install it from here: https://www.antlr.org/)

otherwise, run simply the default `build` script:

```bash
pnpm run build
```

## Making a new release

1. Bump version with the identifier (Visit GitHub for to recommended version):

   ```bash
   pnpm version MAJOR.MINOR.PATCH
   ```

2. Updated CHANGELOG.md and create a new release identifier:
 
   ```markdown
   ## [MAJOR.MINOR.PATCH] - YEAR-MONTH-DAY
  
   ### Added
   ### Changed
   ### Removed
   ```

3. Updated static version identifier `version` in `index.ts`:

   ```ts
   export const version = "MAJOR.MINOR.PATCH";
   ```

5. Then login into your account:
   ```bash
   pnpm login
   ```

5. Afterwards publish publicly using:

   ```bash
   pnpm publish --access public
   ```
