# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Basic `run` command for running a compiled file or compiling and running a file. (This is still in development).
- Basic `compile` command for compiling a file into it's js-counterpart with its typescript types added.
- New Parse Stream class `KipperParseStream`, which implements a basic Utf-16 stream.
- Added support for `[]` initializers for lists in Kipper.g4.
- Added support for `multiItemTypeSpecifier`, which use the `identifier<T>` syntax (for lists specifically).

### Changed
- Made `KipperParseFile` inherit from `KipperParseStream` and made it be a specific interface for files alone, while
  `KipperParseStream` handles raw string data.

### Removed

## [0.0.2] - 2021-11-23

### Added
- `oclif` environment with the appropriate tests
- `/test/module` for module specific tests using `mocha`
- `KipperErrorListener<Token>` for listening to `KipperParser` and `KipperLexer` errors
- `ParserFile` for implementing the stream that may be used for `KipperCompiler.parser()`

### Changed
- Updated file structure to separate `commands` (for `oclif`) and `compiler` (for the compiler source-code)

[unreleased]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/0.0.2...HEAD
[0.0.2]: https://github.com/WMC-AHIF-2021/Kipper-Web/tags/0.0.2
