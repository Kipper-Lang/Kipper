# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
[0.0.3]: https://github.com/Luna-Klatzer/Kipper/compare/0.0.2...0.0.3
[0.0.2]: https://github.com/Luna-Klatzer/Kipper/tags/0.0.2
