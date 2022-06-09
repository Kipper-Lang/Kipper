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

## Install dependencies

Whenever dependencies in `package.json` are changed, run the following command:

```sh
pnpm install
```

To only install resolved dependencies in `package-lock.json`:

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

### Tests

```sh
pnpm test
```

### Generate Antlr4 Files

If you want to generate the antlr4 lexer and parser files run:

```bash
pnpm run antlr4ts
```

If antlr4 is not installed, install it from here: https://www.antlr.org/

## Making a new release

1. Get new version for the next release
   (Visit GitHub for the [recommended version](https://github.com/Luna-Klatzer/Kipper/releases)):

   ```bash
   MAJOR.MINOR.PATCH
   ```

   Add `-alpha.N`, `-beta.N` or `-rc.N` in case it's a development version.
   For example `0.5.0-alpha.0`, `0.5.0-beta.0`, `0.5.0-beta.1` or `0.5.0-rc.0`.

2. Update CHANGELOG.md and replace `Unreleased` with new version identifier:

   _Skip this step unless it's a stable release!_

   ```markdown
   ## [MAJOR.MINOR.PATCH] - YEAR-MONTH-DAY

   ### Added

   ### Changed

   ### Removed
   ```

   Also update the links at the bottom of the CHANGELOG.md file to properly link the releases to their GitHub page!

3. Updated the static `version` identifiers in the `src/index.ts` files of each child package:

   ```ts
   export const version = "MAJOR.MINOR.PATCH";
   ```

   The easiest way to do this is to run `replace` in an IDE and replace the old versions with the new version. These
   changes must be committed yourself with a commit message preferably similar to this:

   ```
   Bumped static index.ts versions to MAJOR.MINOR.PATCH
   ```

   For example:

   ```
   Bumped static index.ts versions to 0.5.0-rc.0
   ```

4. Bump version with a pre-written script (This will create a tag with the prefix `v`, make a commit and push to
   the remote host):

   ```bash
   pnpm run bump MAJOR.MINOR.PATCH
   ```

   It is important that this script is run _AFTER_ the previous step, so that the commits associated with the tags
   already have the version identifiers in the `index.ts` files updated.

5. Then login into your account:

   ```bash
   pnpm login
   ```

6. Afterwards publish each package. View for every file the specific release notes in their
   respective `DEVELOPMENT.md` files:

   - For a stable release:

   ```bash
   pnpm publish --access public && pnpm -r publish --access public
   ```

   - For a release candidate:

   ```bash
   pnpm publish --access public --tag rc && pnpm -r publish --access public --tag rc
   ```

   - For a beta release:

   ```bash
   pnpm publish --access public --tag beta && pnpm -r publish --access public --tag beta
   ```

   - For an alpha release:

   ```bash
   pnpm publish --access public --tag alpha && pnpm -r publish --access public --tag alpha
   ```
