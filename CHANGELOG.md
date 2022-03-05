# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `KipperFileListener.itemBuffer`, which will contain the generated TypeScript code-lines, that were
  generated in the walking step.
- Basic `KipperFileContext`, which will serve as the base class, where the compilation data is stored.
- General namespace import of `kipper` in `kipper-standalone.ts`, which allows the usage of the entire library.
- `KipperFileContext.translate()`, which walks through the listener and returns the generated code of the listener.
- `LogLevel.UNKNOWN` as the default log level. 
- `KipperLogger.levels` as a static variable to access the enum `LogLevel`.
- New abstract base class `KipperParseToken`, which will represent the major parse tokens inside a kipper program. 
  This class will be used to represent the items in a kipper program, and generate the typescript counterpart.
- Properties `parser`, `lexer`, `errorHandler` and `tokenStream` inside the class `KipperFileContext`.
- New dictionary `builtInFunctions`, which will map to the built-in function names, like `print()`, a 
  handler that will generate the typescript code to replace the function call with. This is to avoid having to
  add overhead or any dependencies for the function calls, and natively convert the statement to TypeScript.

### Changed
- Made return of `KipperCompiler.parse()` to `KipperFileContext`, which wraps the generated parse tree.
- Behaviour of `KipperCompileResult`, which will now store the `fileCtx: KipperFileContext` and `result: string[]`
  of a compilation. 
- Fixed bug in `KipperErrorListener`, which resulted in errors being not properly raised. The function is
  now a template, where `<T>` represents the offending token. `<T>` will also be passed onto `KipperSyntaxError<T>`.
- Changed type of `LogLevel`, which now returns string-representations of the log level.

### Removed
- Unneeded namespace `KipperStreams` and its functions.
- Unneeded variable `LogLevelNames`, as now the enum `LogLevel` per default returns the names of the level.

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

[unreleased]: https://github.com/Luna-Klatzer/Kipper/compare/0.0.3...HEAD
[0.0.5]: https://github.com/Luna-Klatzer/Kipper/tag/0.0.5
[0.0.4]: https://github.com/Luna-Klatzer/Kipper/
[0.0.3]: https://github.com/Luna-Klatzer/Kipper/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/Luna-Klatzer/Kipper/tags/0.0.2
