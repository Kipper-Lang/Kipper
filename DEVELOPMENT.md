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
pnpm install --frozen-lockfile
```

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
   pnpm version MAJOR.MINOR.PATCH && npm version -r MAJOR.MINOR.PATCH
   ```
   
   Add `-alpha.N`, `-beta.N` or `-rc.N` in case it's a development version.
   For example `0.5.0-alpha.0`, `0.5.0-beta.0`, `0.5.0-beta.1` or `0.5.0-rc.0`.

2. Updated CHANGELOG.md and create a new release identifier:

   ```markdown
   ## [MAJOR.MINOR.PATCH] - YEAR-MONTH-DAY
  
   ### Added
   ### Changed
   ### Removed
   ```

3. Updated static version identifier `version` in every `src/index.ts` file of each child package:

   ```ts
   export const version = "MAJOR.MINOR.PATCH";
   ```

4. Then login into your account:
   ```bash
   pnpm login
   ```

5. Afterwards publish each package. View for every file the specific release notes in their
   respective `DEVELOPMENT.md` files:

   - For a stable release: 
   ```bash
   pnpm -r publish --access public
   ```
   - For a release-candidate:
   ```
   pnpm -r publish --access public --tag rc
   ```
   - For a beta release:
   ```bash
   pnpm -r publish --access public --tag beta
   ```
   - For an alpha release:
   ```bash
   pnpm -r publish --access public --tag alpha
   ```
