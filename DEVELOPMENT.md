# Developer's Guide

Welcome to the Developer's Guide for Kipper! Here you can get a general overview of how to get started with
working on the Kipper programming language.

Please note that there may be changes in the workflow or work process and as such sometimes also inconsistencies in this
file. We will try to keep it as well maintained as possible, but if anything seems off don't hesitate to open up a
[discussion](https://github.com/Kipper-Lang/Kipper/discussions) or an
[issue](https://github.com/Kipper-Lang/Kipper/issues/new/choose) if it is something that's clearly wrong.

## General Setup

We recommend Web-Storm for developing on Kipper, as that has based on our experience provided the best development
experience, but other options such as VSCode are also viable. Generally speaking it's

### Install Node.js

[Download page of Node.js](https://nodejs.org/en/download/)

Please be aware that Kipper only supports the following versions:

- `16.x`
- `18.x`
- `20.x`
- `22.x`

### Install PNPM for the monorepo management

Before working on Kipper, it's important to install pnpm which provides the toolset required to manage a monorepo such
as the one set up here!

For how to install pnpm please refer to the pnpm website, or if you have npm just run:

```sh
npm i -g pnpm
```

Please also be aware that we strictly require PNPM version `8` and anything besides that is currently not supported and
may break! PNPM sometimes introduces breaking changes with their major releases, so using a different version may brick
the setup so please watch out for that too!

## Install dependencies

Whenever dependencies in `package.json` are changed, run the following command:

```sh
pnpm i
```

To only install resolved dependencies in `pnpm-lock.yaml`:

```sh
pnpm i --frozen-lockfile
```

## Force LF line-endings

To force git to use LF line endings everywhere, run the following commands in your console:

```bash
git config --global core.autocrlf false
git config --global core.eol lf
```

Remove the `--global` tags if you want to keep using `CRLF` on other git repositories.

## Start Kipper CLI

Without any input:

```bash
pnpm start
```

With command input:

```bash
pnpm start [COMMAND] [ARGS...] [FLAGS...]
```

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

### Generate Antlr4 Files

If you want to generate the antlr4 lexer and parser files run:

```bash
pnpm run antlr4ts
```

If antlr4 is not installed, install it from here: https://www.antlr.org/

### Generate standalone Browser bundle

First build the whole project:

```bash
pnpm build
```

Run browserify using the following command:

```bash
pnpm run browserify
```

This will generate a `kipper-standalone.js` and `kipper-standalone.min.js` file located in the `kipper/web` directory,
which can be included and used inside a browser without any dependencies.

## Making a new release

1.  Get new version for the next release
    (Visit GitHub for the [recommended version](https://github.com/Kipper-Lang/Kipper/releases)):

    ```bash
    MAJOR.MINOR.PATCH[-SUFFIX_IF_PRESENT]
    ```

    Add `-alpha.N`, `-beta.N` or `-rc.N` in case it's a development version.
    For example `0.5.0-alpha.0`, `0.5.0-beta.0`, `0.5.0-beta.1` or `0.5.0-rc.0`.

2.  Update CHANGELOG.md and replace `Unreleased` with new version identifier:

    _Skip this step unless it's a stable release! No alpha, beta or rc versions should be listed here!_

    ```markdown
    ## [MAJOR.MINOR.PATCH] - YEAR-MONTH-DAY

    ### Added

    ### Changed

    ### Removed
    ```

    Also update the links at the bottom of the CHANGELOG.md file to properly link the releases to their GitHub page!

3.  Updated the static `version` identifiers in the `index.ts` files of each package:

    ```ts
    export const version = "MAJOR.MINOR.PATCH[-SUFFIX_IF_PRESENT]";
    ```

    The easiest way to do this is to run `replace` in an IDE and replace the old versions with the new version.

    Additionally, you will have to update `CITATION.cff`, which contains the explanation for how to cite this project.
    For that you will need to update every reference to the old version and replace it with the new one. The fields
    that must be changed are as follows:

    - `identifiers.value`
    - `identifiers.description`
    - `license-url`
    - `version`

    These changes must be committed yourself with a commit message preferably similar to this:

    ```
    release: Bumped Kipper project version to MAJOR.MINOR.PATCH[-SUFFIX_IF_PRESENT]
    ```

    (Previously, before `0.11.0-alpha.2` it was `release: Bumped static index.ts versions to MAJOR.MINOR.PATCH[-SUFFIX_IF_PRESENT]`)

    For example:

    ```
    release: Bumped Kipper project version to 0.5.0-rc.0
    ```

4.  Bump version with a pre-written script (This will create a tag with the prefix `v`, make a commit and push to
    the remote host):

    ```bash
    pnpm run bump MAJOR.MINOR.PATCH[-SUFFIX_IF_PRESENT]
    ```

    It is important that this script is run _AFTER_ the previous step, so that the commits associated with the tags
    already have the version identifiers in the `index.ts` files updated.

5.  Then login into your account:

    ```bash
    pnpm login
    ```

6.  Afterwards publish each package. View for every file the specific release notes in their respective `DEVELOPMENT.md`
    files:

    - For a stable release:

    ```bash
    pnpm publish; pnpm -r publish
    ```

    - For a release candidate:

    ```bash
    pnpm publish --tag rc; pnpm -r publish --tag rc
    ```

    - For a beta release:

    ```bash
    pnpm publish --tag beta; pnpm -r publish --tag beta
    ```

    - For an alpha release:

    ```bash
    pnpm publish --tag alpha; pnpm -r publish --tag alpha
    ```

    Afterwards ensure the `next` tag is updated for every package using (Requires `npm` to be installed):

    ```bash
    pnpm run add-next-tag MAJOR.MINOR.PATCH[-SUFFIX_IF_PRESENT]
    ```
