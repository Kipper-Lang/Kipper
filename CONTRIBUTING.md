![](./img/Kipper-Logo-with-head.png)

# Content

- [How to contribute to Kipper](#how-to-contribute-to-kipper)
  - [Using issues to propose changes](#using-issues-to-propose-changes)
    - [Bug issue](#bug-issue)
    - [Feature issue](#feature-issue)
  - [Using PRs to add new changes](#using-prs-to-add-new-changes)
  - [Basic structure of Kipper](#basic-structure-of-kipper)
    - [Monorepo structure using pnpm](#monorepo-structure-using-pnpm)
    - [`@kipper/core` package](#kippercore-package)
    - [`@kipper/cli` package](#kippercli-package)
  - [Kipper compilation targets](#kipper-compilation-targets)
  - [Configuring the compiler](#configuring-the-compiler)
  - [How to add new compiler functionality](#how-to-add-new-compiler-functionality)
    - [Add or update semantics](#add-or-update-semantics)
      - [Updating target specific semantic checks](#updating-target-specific-semantic-checks)
      - [Throwing semantic errors](#throwing-semantic-errors)
    - [Add or update token translation](#add-or-update-token-translation)
  - [Testing](#testing)
    - [How to write tests](#how-to-write-tests)

# How to contribute to Kipper

Welcome to the Kipper contribution guide!

This guide will try to explain the basics of how to contribute to Kipper, how to use issues/PRs and how to modify the source code.

Before starting, thank you for showing interest in this guide! I ([@Luna-Klatzer](https://github.com/Luna-Klatzer))
appreciate any help with this project and am happy to help if there are any questions left unanswered!

## Using issues to propose changes

One of the first things that must be done before contributing to Kipper is to open an issue, or look at
existing issues or pull requests.

- In case you are working on someone else's issue or PR, it is important to read through the details of the issue or PR
  and get to know what should be done, and how other people proposed to do it.
- In case you are creating your own issue, it is important to think through how your change matters and what they
  should do. This is vital for others to understand how to work on your issue and give feedback/recommendations.

### Bug issue

If you are working on or creating a bug issue, it is important to try and reproduce the issue using tests or sample
projects that recreate the situation that the bug was encountered in.

In case you are creating a bug issue, it is also important to provide steps on how to reproduce the issue and info
about your environment. The [bug issue template](https://github.com/Luna-Klatzer/Kipper/issues/new/choose) will help you

### Feature issue

If you are working on or creating a feature issue, it is important to understand the details behind the proposed
feature and its possible implementation. If you are going through someone else's issue, it's good to write additional
questions, recommendations, ideas or criticism as a comment under the issue.

In case you are creating a feature issue it is also important to provide info on how you exactly want it to work and
what your changes will do (More on that in [Using PRs to add new changes](#using-prs-to-add-new-changes)).

## Using PRs to add new changes

After having gone through an issue and having discussed a change, it is now time to make those
changes and try to get them into the future Kipper releases.

Creating and merging changes into the source code is done using pull requests and forks. PRs are vital as they
allow for a managed way to propose, document and merge changes into Kipper. That is why it's important to
also make sure your PRs are organised, documented well and link related issues, docs or websites. The PR template will
help with that.

If you are new to GitHub and PRs, you can follow the guide from GitHub [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
to learn how to create such a pull Request.

If you created a new PR, please also update the CHANGELOG.md file and create a Changelog specifically for your
PR changes based on the [Keep a Changelog format]([Keep a Changelog](https://keepachangelog.com/en/1.0.0/)).

## Basic structure of Kipper

Kipper is split up into multiple packages, which are contained in the main monorepo `kipper` that depends on
_all_ Kipper sub-packages.

### Monorepo structure using pnpm

To work on Kipper you will need to install and use `pnpm`, which provides the tools for managing a monorepo like the one
used in this repository.

Pnpm supports, like npm, `package.json` scripts, which are heavily used in the process of managing Kipper. It's best
to also use them, since they predefine behaviour for building, testing and other useful stuff.

Overview of important basic scripts:

- `pnpm test` - Tests Kipper using the files in `/test/`.
- `pnpm build` - Builds all Kipper packages in the `/kipper/` folder.
- `pnpm start` - Starts the CLI for Kipper. Arguments can be passed using `pnpm start args...`
- `pnpm run browserify` - Builds the browser standalone script `kipper-standalone.js`.
- `pnpm run antlr4ts` - Builds the Kipper Parser and Lexer using the grammar file `/kipper/core/Kipper.g4`
- `pnpm run prettier` - Prettifies and reformats the source and test files.
- `pnpm run lint` - Runs the tslint plugin for eslint and analyses the source code. 
- `pnpm run lint:fix` - Runs the tslint plugin for eslint, analyses the source code and automatically tries to fix 
  issues if they are encountered.

### `@kipper/core` package

The core package is, as already in the name, the core package of Kipper. It contains the lexer, parser, semantic
analysers, code translators and the classes and functions making up the Kipper compiler.

The most important class from that package is `KipperCompiler`, which provides the user-interface for interacting
with Kipper. It allows the parsing, semantic analysis and compilation of files.

### `@kipper/cli` package

The CLI package is the command line interface for interacting with the Kipper compiler using pre-defined commands. It
is not as customisable as if someone would write TypeScript code using `@kipper/core`, but it provides a lot of simple 
and easy to use functionality over the command line.

To run the Kipper cli, you can simply run:

```bash
pnpm start ...
```

## Kipper compilation targets

Kipper is primarily designed to translate to TypeScript code, though currently it is planned to also support other
targets, like native JavaScript or AssemblyScript to allow more diverse targets and support a bigger ecosystem.

For the moment though, the only target is TypeScript, which is defined in the file `/compiler/target/typescript` of
`@kipper/core`. This target also is the default target that will be used for every compilation, unless another target
is specified in `CompileConfig`.

## Configuring the compiler

The Kipper compiler uses a configuration interface `CompileConfig` to configure the compilation of a program. This
interface can be passed as an argument to `KipperCompiler.compile()`, where it will be put into a
`CompilerEvaluatedOptions` that merges both the default configuration with the user defined configuration.

_Currently, configuring `KipperCompiler.syntaxAnalyse()` is not supported, as it does not yet support semantic analysis.
This should be implemented in future releases._

## How to add new compiler functionality

If you want to add new functionality for the Kipper compiler, you can easily do that in multiple ways:

- If you want to add new syntax, you will have to edit the Antlr4 `/kipper/core/Kipper.g4` file and update the
  `KipperFileListener`, which walks through a generated parse tree and determines what items
  should be added to the `RootFileParseToken` (represents the root item of the entire file, which contains all
  statements and declarations as children).
- If you want to update the compiler logic and semantics, you will have to work in the `/compiler/tokens` and 
  `/compiler/logic` folder of `@kipper/core`, where the logical tokens are contained that represent expressions, 
  declarations and statements.
- If you want to update the default translation to TypeScript, you will have to work in the
  `/compiler/target/typescript` file, which contains the semantic analyser and target code generator for TypeScript.
- If you want to work on a new target or add any other functionality, you should add new files that extend the existing
  functionality.

### Add or update semantics

The semantics of a token is usually represented using an interface that defines what metadata must be present for an
instance to be compilable. This semantic data interface is passed to the abstract generic class
`CompilableParsenToken<Semantics>` as a generic type parameter, which then defines the semantic data that must be
present.

Usually the semantic interfaces of Kipper tokens are defined right above, like for example:

```ts
export interface AdditiveExpressionSemantics extends ArithmeticExpressionSemantics {
	exp1: Expression<any>;
	exp2: Expression<any>;
	operator: KipperAdditiveOperator;
}

export class AdditiveExpression extends Expression<AdditiveExpressionSemantics> {
	// ...
}
```

These semantics then are per default processed using the async function `primarySemanticAnalysis()`. This function
should always evaluate and define the semantics by setting the field `CompilableParseToken.semanticData`. Though to
avoid unexpected errors, when using the semantic data they should always be fetched using
`CompilableParseToken.ensureSemanticDataExists()`, which throws an error in case they are undefined.

To update how semantics are handled or what semantic data exists, either the semantics interface or the
function `CompilableParseToken.primarySemanticAnalysis()` should be updated and changed. Avoid at all cost
checking semantic data and performing semantic analysis anywhere outside those functions and the target specific 
semantics!

#### Updating target specific semantic checks

In case that a target (targets are for example TypeScript) has specific semantic logic that must be upheld, a
`KipperTargetSemanticAnalyser` is used, which can do additional checks on specific tokens. Each program
(`KipperProgramContext`) has one `KipperCompileTarget` set, which defines how Kipper should be translated. This class
also defines a `KipperTargetSemanticAnalyser`, where target-specific semantic can be checked.

To update or add target specific semantic checks, you can update the corresponding functions for the tokens.
For example `KipperTargetSemanticAnalyser.compoundStatement`, which handles the semantic analysis for `{ }` blocks.

#### Throwing semantic errors

Throwing errors in Kipper is handled similarly to how mocha tests works. A truth is asserted to be true
and if it turns out to be false an error is thrown. This behaviour is handled using the `CompileAssert` class 
and `KipperProgramContext.assert()` function, which pre-define certain checks that can be done.

For example (Code snippet from the class `FunctionDeclaration`):

```
this.programCtx.assert(this).typeExists(this.semanticData.returnType);
```

### Add or update token translation

## Testing

If you want to make sure your new changes or new functionality works, you will have to add new tests in the
`/test/` folder of Kipper. 

These tests are categorised into sub-folders per package in the following scheme:

```markdown
module/

- cli/
- core/

Please add tests for a package to the correlating test folder e.g. make sure CLI tests are in `/cli/` and core tests in
`/core/`.

### How to write tests

Tests are written using mocha and chai, so you can easily add new tests in existing files or new files.

- To add a new test file, create a new file with the file ending `test.ts`.
- To add a new test namespace, call the `describe` function and pass as argument a new unique name:
  ```ts
  describe(name, () => {
  	// Add tests here
  });
  ```
- To add a single test, call `it` inside a `describe` lambda function with a new unique test name:
  ```ts
  describe(name, () => {
  	it(name, () => {
  		// Use 'async ()' in case you need async functionality
  	});
  });
  ```
- To add an assertion/expectation, use `assert(truth);` inside a test.

If you need ideas how to write good tests, look at the exiting ones and try to get an idea what may
be important to test.

In case you notice existing tests are insufficient, you can update or rewrite them to make sure everything is 
tested and the percentage of code covered goes up. 
