# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Implemented handling of declarations and definitions, where definitions can only appear once. (
  Reassignments are not counted as definitions!)
- New errors `FunctionDefinitionAlreadyExistsError` and `VariableDefinitionAlreadyExistsError`, which are raised if
  definition rules are violated.
- Added project version information constants in `index.ts`.

### Updated
- Renamed definition errors:
  - `DuplicateVariableDefinitionError` to `IdentifierAlreadyUsedByVariableError`
  - `DuplicateFunctionDefinitionError` to `IdentifierAlreadyUsedByFunctionError`

### Removed

## [0.2.1] - 2022-04-22

### Added
- Updated kipper-standalone global identifier behaviour and added support for WebWorkers.

## [0.2.0] - 2022-04-13

### Added
- Created new class `CompileAssert`, which is used to assert certain compiler-required truths, which, if false, trigger
  corresponding errors.
- New errors `UnknownVariableDefinition` and `UnknownFunctionDefinition`.
- New getter `CompilableParseToken.tokenStream`, which returns the `programCtx.tokenStream` instance.
- Created new expression class `ArgumentExpressionList` representing an argument list inside function calls.
- New function `KipperCompileResult.write()`, which creates a human-readable string from the generated 
  source code.
- Added new property and constructor parameter `logLevel`, which defines which messages should be logged. (Only messages
  with equal or higher importance will be logged).
- Added class name insertion for custom Kipper errors by setting the `name` property explicitly.

### Updated
- Changed execution of most compilation functions to async. 
- Replaced `DuplicateIdentifierError` with `DuplicateVariableDefinitionError` and `DuplicateFunctionDefinitionError`.
- Renamed `NoBuiltInOverwriteError` to `BuiltInOverwriteError`.
- Made all `getMetadata` functions `/tokens/` instance-methods, removing all required parameters.
- Changed compilation result from `Array<string>` to `Array<Array<string>>`, where each nested array represents a line
  combined of string tokens.
- Set explicit children type for expressions and statements, instead of letting them inherit the children type from
  `CompilableParseToken`.
- Set return type of `compileCtx` to `Array<string>` in children classes of `Expression`. 
  - Changed visibility of `CompilableParseToken.semanticAnalysis()` and `CompilableParseToken.translateCtxAndChildren()`
  to `protected`, as they will be replaced and tied together using `CompilableParseToken.compileCtx()`.
- Replaced compilation in `RootParseToken.translateCtxAndChildren` with `RootParseToken.compileCtx()`.
- Changed values of `LogLevel` to numeric values, which can be translated into strings using `getLogLevelString()`.

### Removed
- Functions `RootParseToken.semanticAnalysis()` and `RootParseToken.translateCtxAndChildren`

## [0.1.2] - 2022-04-06

### Added
- Implemented simple scope logic by adding the `scope` property to all `Statement` classes and creating a tracking variable
  called `_currentScope` in `KipperFileListener`, which will be updated while processing the parse tree.
- Added variable metadata handling in `VariableDeclaration`. The class will now on construction determine its identifier,
  storage type, value type and state (whether it was defined yet) using its antlr4 context instance.
- Added errors `BuiltInOverwriteError`, `UnableToDetermineMetadataError` and `UnknownTypeError`.
- Added new abstract base class `ScopeDeclaration`, which is the parent class for the already existing 
  `ScopeDeclaration` and the added `ScopeFunctionDeclaration`.
- Implemented `KipperProgramContext.globalScope`, which contains all global variables and function definitions.
- Implemented support for function definitions that will be from now on automatically registered globally.

### Updated
- Renamed class `ScopeDeclaration` to `ScopeDeclaration` and updated its constructor to require a token 
  (`VariableDeclaration` instance), which will automatically set the properties (identifier, storage type, value type, scope 
  and state).
- Rearranged constructor arguments of `KipperParseStream` to `stringContent, name, charStream`, and set `name` to
  default to `"anonymous-script"`.
- Updated `CompoundStatement` children behaviour, by adding a new array `localScope`, which will store the metadata
  for all variables exclusively available in that compound statement.

## [0.1.1] - 2022-04-01

### Added
- Added missing dependency `tslib`

## [0.1.0] - 2022-04-01

### Added
- `KipperFileListener.itemBuffer`, which will contain the generated TypeScript code-lines, that were
  generated in the walking step.
- Basic `KipperFileContext`, which will serve as the base class, where the compilation data is stored.
- General namespace import of `kipper` in `kipper-standalone.ts`, which allows the usage of the entire library.
- `KipperFileContext.translate()`, which walks through the listener and returns the generated code. The generated code
  will be cached inside `KipperFileContext.typescriptCode` to allow reusing code instead of unnecessarily generating 
  code again.
- `LogLevel.UNKNOWN` as the default log level for `LogLevel`.
- `KipperLogger.levels` as a static variable to access the enum `LogLevel`.
- New abstract base class `CompilableParseToken`, which will represent the major parse tokens inside a kipper 
  program. The token class has the additional functionality of wrapping an entire antlr4 statement, expression or 
  block, and being able to semantically analyse it using `semanticAnalysis()` and translate it to TypeScript using 
  `compileCtx()`.
- Properties `parser`, `lexer`, `errorHandler` and `tokenStream` inside the class `KipperFileContext`.
- File `builtIns.ts`, which defines the behaviour on how to define built-in items inside a kipper program. This
  primarily includes global functions, which can be represented using the interface `BuiltInFunction`. (In work!)
- Implemented `**` (Power-to) as a valid arithmetic expression.
- Implemented `RuntimeCompileConfig` and `CompileConfig`, which may be passed onto `KipperCompile.compile()` to configure
  the compilation behaviour.
- Implemented new module `/compiler/tokens`, which contains the parse token implementations.
- Implemented basic global function `print` that will be available inside a Kipper program per default (unless 
  forcibly changed).
- New Class `ScopeDeclaration` representing a declaration/entry inside a scope. This is used primarily inside
  `KipperProgramContext`, which uses it to keep track of global definitions and also `CompoundStatement`s, which
  may have children definitions.
- Type Implementation with two new type aliases: `KipperStorageType` and `KipperType`.

### Changed
- Made return of `KipperCompiler.parse()` to `KipperFileContext`, which wraps the generated parse tree.
- Behaviour of `KipperCompileResult`, which will now store the `programCtx: KipperFileContext` and `result: string[]`
  of a compilation. 
- Fixed bug in `KipperErrorListener`, which resulted in errors being not properly raised. The function is
  now a template, where `<T>` represents the offending token. `<T>` will also be passed onto `KipperSyntaxError<T>`.
- Changed type of `LogLevel`, which now returns string-representations of the log level.
- Fixed `initializer` rule in Kipper.g4 and removed invalid designator rules.
- Updated all expressions in `Kipper.g4` to contain proper labelled sub-rules, which clearly state if
  the expression is used or if it's a pass on and an expression with higher importance is used (child of that
  expression).
- Renamed `KipperFileContext` to `KipperProgramContext`, which will now handle the entire compilation and store its
  meta-data.

### Removed
- Unneeded namespace `KipperStreams` and its functions.
- Unneeded variable `LogLevelNames`, as now the enum `LogLevel` per default returns the names of the level.
- Removed `preferLogging` options in the entire module, as errors and warnings will always be logged no matter what. 
  This also means that errors will always be logged *and* thrown as a catchable error instance.
- Argument `streamName` in `KipperCompiler.syntaxAnalyse()` and `KipperCompiler.compile()`. 

## [0.0.5] - 2022-03-02

### Changed
- Fixed invalid publish of the module on npm

## [0.0.4] - 2022-03-02

**Broken version!**

## [0.0.3] - 2022-03-02

### Added
- Build Option for the browser-compatible script `kipper-standalone.js`
- Basic `run` command for running a compiled file or compiling and running a file. (This is still in development).
- Basic `compile` command for compiling a file into it's js-counterpart with its typescript types added.
- New Parse Stream class `KipperParseStream`, which implements a basic Utf-16 stream.
- Support for `[]` initializers for lists in Kipper.g4.
- Support for `multiItemTypeSpecifier`, which use the `identifier<T>` syntax (for lists specifically).
- Support for `typeof(V)` (`typeofTypeSpecifier`) syntax for `typeSpecifier` expressions.
- Support for Kipper-Conversion `identifier as typeSpecifier` syntax.
- Support for for-loops using the `for(INIT_EXPRESSION; CONDITION, LOOP_EXPRESSION) STATEMENT` syntax.
- New Map `LogLevelNames`, which will map `LogLevel` enum values to constant strings (e.g. `LogLevel.CRITICAL` -> 
  `"CRITICAL"`).

### Changed
- Fixed syntax bug in Kipper.g4 that caused typed arguments to not be able to passed to functions.
- Updated handling of the `KipperLogger`, which will now only use an `emitHandler`, which can be defined by the user.
  This means the user entirely decides how to handle the logging output of the compiler, and there is no default logging
  anymore.

### Removed
- Oclif CLI, which will be released in another package separate to this one, as this will be made to suit the usage
  inside a browser.
- `KipperParseFile`, which will be implemented in the NodeJS CLI implementation for Kipper

## [0.0.2] - 2021-11-23

### Added
- `oclif` environment with the appropriate tests
- `/test/module` for module specific tests using `mocha`
- `KipperErrorListener<Token>` for listening to `KipperParser` and `KipperLexer` errors
- `ParserFile` for implementing the stream that may be used for `KipperCompiler.parser()`

### Changed
- Updated file structure to separate `commands` (for `oclif`) and `compiler` (for the compiler source-code)

[unreleased]: https://github.com/Luna-Klatzer/Kipper/compare/0.2.1...HEAD
[0.2.1]: https://github.com/Luna-Klatzer/Kipper/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Luna-Klatzer/Kipper/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/Luna-Klatzer/Kipper/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Luna-Klatzer/Kipper/compare/v0.0.5...v0.1.1
[0.1.0]: https://github.com/Luna-Klatzer/Kipper/compare/v0.0.5...v0.1.1
[0.0.5]: https://github.com/Luna-Klatzer/Kipper/compare/v0.0.3...v0.0.5
[0.0.4]: https://github.com/Luna-Klatzer/Kipper/compare/v0.0.3...v0.0.5
[0.0.3]: https://github.com/Luna-Klatzer/Kipper/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/Luna-Klatzer/Kipper/tags/v0.0.2
