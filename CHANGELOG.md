# Kipper Compiler Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

<details>
<summary>Show unreleased changes</summary>

Note that all changes categorised under [Unreleased](#unreleased) are UNSTABLE changes, which MAY be released in the
next version. These should not be considered guaranteed changes for the next release of Kipper.

To use development versions of Kipper download the
[`next` tag release](https://www.npmjs.com/package/kipper?activeTab=versions), which will include the specified changes.

### Added

- Semantic checking and code generation for the `new` keyword expression to be able to create new instances of
  classes. ([#679](https://github.com/Kipper-Lang/Kipper/issues/679))
- Support for the typeof operator, which returns the runtime type of a value.
  ([#663](https://github.com/Kipper-Lang/Kipper/issues/663))
- Support for Nix Flakes and direnv, which allows for a more reproducible and consistent development environment.
- Support for dot notation for accessing properties of objects. ([#67](https://github.com/Kipper-Lang/Kipper/issues/67))
- Support for classes, class methods, class properties and class constructors.
  ([#665](https://github.com/Kipper-Lang/Kipper/issues/665))
- Support for object literals and object properties.
  ([#526](https://github.com/Kipper-Lang/Kipper/issues/526))
- Support for calling lambdas and functions stored in variables or expressions.
  ([#674](https://github.com/Kipper-Lang/Kipper/issues/674))
- Implemented internal representation for custom types such as objects, interfaces and classes. This change means that
  the entire core type system has been reworked and adjusted to also support custom types as well as complex types
  (objects, arrays etc.). This does not inherently add functionality but serves as the stepping stone for the
  implementation of all custom types in the future. ([#524](https://github.com/Kipper-Lang/Kipper/issues/524))
- Implemented the generic `Array<T>` type and single-type array initializers.
  ([#499](https://github.com/Kipper-Lang/Kipper/issues/499))
- Support for index-based array assignments. ([#669](https://github.com/Kipper-Lang/Kipper/issues/669))
- Implemented the generic `Func<T..., R>` type and function type initializers.
  ([#584](https://github.com/Kipper-Lang/Kipper/issues/584))
- Implemented internal generic spread argument `T...`, which allows multiple arguments to be passed to a single
  parameter inside a generic type specifier.
- Implemented constant `NaN`, which represents the `NaN` value in JavaScript (Not a Number).
  ([#671](https://github.com/Kipper-Lang/Kipper/issues/671))
- Support for internal type unions in built-in and internal functions.
  ([#496](https://github.com/Kipper-Lang/Kipper/issues/496))
- New module:
  - `semantics/runtime-built-ins`, which contains runtime built-in functions, variables and types.
  - `semantics/runtime-internals`, which contains the runtime internal functions.
  - `semantics/types`, which contains the runtime types.
- New classes:
  - `TypeofExpression`, which represents an AST typeof expression that returns the runtime type of an object.
  - `TypeofTypeSpecifierExpression`, which represents an AST typeof type specifier that lets one define a type by using an object as reference
  - `BuiltInTypeObject`, which is the base class for the compilers representation of runtime objects
  - `UniverseScope`, which represents the universe scope, where all built-in types, functions and variables are
    declared. This serves as the parent of the global scope.
  - `InterfaceDeclaration`, which represents an AST interface declaration.
  - `ClassMethodDeclaration`, which represents an AST class method declaration.
  - `ClassPropertyDeclaration`, which represents an AST class property declaration.
  - `ClassConstructorDeclaration`, which represents an AST class constructor.
  - `ClassDeclaration`, which represents an AST class declaration.
  - `BuiltInType`, which represents a built-in type.
  - `CustomType`, which represents a user defined type.
  - `UnionType`, which represents a union type.
  - `BuiltInTypeAny`, which represents the `any` type.
  - `BuiltInTypeVoid`, which represents the `void` type.
  - `BuiltInTypeNull`, which represents the `null` type.
  - `BuiltInTypeUndefined`, which represents the `undefined` type.
  - `BuiltInTypeBool`, which represents the `bool` type.
  - `BuiltInTypeNum`, which represents the `num` type.
  - `BuiltInTypeStr`, which represents the `str` type.
  - `BuiltInTypeArray`, which represents the `Array<T>` type.
  - `BuiltInTypeFunc`, which represents the `Func<T..., R>` type.
  - `BuiltInTypeObj`, which represents the `obj` type.
  - `ScopeTypeDeclaration`, which represents a scope type declaration.
  - `CustomType`, which is a class extending from `ProcessedType` and implementing the functionality for a custom type such as a interface or class.
- New errors:
  - `TypeCanNotBeUsedForTypeCheckingError`, which is thrown when a type is used for type checking, but is not a valid
    type. This is an error indicating an invalid logic that should be fixed.
  - `GenericArgumentTypeError`, which is thrown when a generic argument is used with an invalid type. This is an error
    indicating an invalid logic that should be fixed.
  - `InvalidAmountOfGenericArgumentsError`, which is thrown when an invalid amount of generic arguments is used. This is
    an error indicating an invalid logic that should be fixed.
  - `CanNotUseNonGenericAsGenericTypeError`, which is thrown when a non-generic type is used as a generic type. This is
    an error indicating an invalid logic that should be fixed.
  - `MismatchingArgCountBetweenFuncTypesError`, which is thrown when the amount of arguments in a function type does not
    match the number of arguments in the function type it is compared to.
  - `GenericCanOnlyHaveOneSpreadError`, which is thrown when a generic type has more than one spread argument. This is
    for now an internal-only error that should not be thrown in normal circumstances.
  - `TypeNotAssignableToUnionError`, which is thrown when a type is not assignable to a union type.
  - `ValueTypeNotIndexableWithGivenAccessor`, which is thrown when a value type is not indexable with the given
    accessor.
  - `PropertyDoesNotExistError`, which is thrown when a property does not exist on a type.
- New interfaces and types:
  - `InterfaceDeclarationSemantics`, which represents the semantics of an interface declaration.
  - `InterfaceDeclarationTypeSemantics`, which represents the type semantics of an interface declaration.
  - `ClassMethodDeclarationSemantics`, which represents the semantics of a class method declaration.
  - `ClassMethodDeclarationTypeSemantics`, which represents the type semantics of a class method declaration.
  - `ClassPropertyDeclarationSemantics`, which represents the semantics of a class property declaration.
  - `ClassPropertyDeclarationTypeSemantics`, which represents the type semantics of a class property declaration.
  - `ClassConstructorDeclarationSemantics`, which represents the semantics of a class constructor declaration.
  - `ClassConstructorDeclarationTypeSemantics`, which represents the type semantics of a class constructor declaration.
  - `ClassDeclarationSemantics`, which represents the semantics of a class declaration.
  - `ClassDeclarationTypeSemantics`, which represents the type semantics of a class declaration.
  - `TypeDeclaration`, which represents a type declaration. This is an abstract base class for all type declarations.
  - `TypeDeclarationSemantics`, which represents the semantics of a type declaration.
  - `TypeDeclarationTyp`KipperTypeChecker.validArrayExpression`eSemantics`, which represents the type semantics of a type declaration.
  - `CompilableType`, which represents a type that can be compiled.
  - `BuiltInReference`, which replaces the now removed type `Reference` in the `KipperProgramContext` for reference
    tracking of built-in types.
- New functions:
  - `KipperTypeChecker.validArrayExpression`, which ensures that an array expression is valid.
  - `generateInterfaceRuntimeTypeChecks` which generates runtime type checks for an interface.
  - `getRuntimeType`, which gets the corresponding runtime representation of a built-in type.
- New properties:
  - `BuiltInFunction.funcType`, which returns a function type for the built-in function.
  - `FunctionDeclarationTypeSemantics.type`, which returns the type of the function declaration i.e. the function type.
  - `LambdaPrimaryExpressionTypeSemantics.type`, which returns the type of the lambda primary expression i.e. the
    function type.
  - `FunctionCallExpressionTypeSemantics.funcOrExp`, which returns the function or expression that is called. This
    always stores some sort of value that extends `BuiltInTypeFunc`.
- New runtime error `KipperError`, which serves as the base for `TypeError` and `IndexError`.

### Changed

- Argument type of built-in function `print` from `str` to `any`.
- Argument type of built-in function `len` from `str` to `str | Array<any>`.
  ([#667](https://github.com/Kipper-Lang/Kipper/issues/667))
- Type from interface to class:
  - `InternalFunction`, which represents an internal function.
  - `BuiltInFunction`, which represents a built-in function.
  - `InternalFunctionArgument`, which represents an internal function argument.
  - `BuiltInVariable`, which represents a built-in variable.
- Renamed:
  - Module `analysis` to `semantics`.
  - Module `compiler/.../expressions/arithmetic` to `arithmetic-expression`.
  - Class `UncheckedType` to `RawType`.
  - Class `CheckedType` to `ProcessedType`.
  - Class `UndefinedCustomType` to `UndefinedType`.

### Fixed

- All functions and lambdas simply resolving to `Func` instead of the appropriate filled-up `Func<T..., R>` type. This
  now enables proper type checking for function references.
- CLI command `run` not properly reporting internal or unexpected errors, as they were already prettified in the
  internally called up command `compile`.

### Deprecated

### Removed

- Type `Reference` as it is no longer needed and has been replaced by `KipperReferenceable`.
- `FunctionCallExpressionTypeSemantics.func`, which is now has been replaced by `funcOrExp`.

</details>

## [0.11.0] - 2024-07-10

### Added

- Implemented Processing for File Scoped pragmas ([#480](https://github.com/Kipper-Lang/Kipper/issues/480))
- Added Lambda Expressions, which are anonymous functions that can be used as expressions.
  ([#572](https://github.com/Kipper-Lang/Kipper/issues/572))
- Implemented Bitwise Operations (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`).
  ([#493](https://github.com/Kipper-Lang/Kipper/issues/493))
- Implemented Conditional Expression (`COND ? EXP : EXP`) as a ternary operator.
  ([#534](https://github.com/Kipper-Lang/Kipper/issues/534))
- Implemented Do-While-Loop (`do ... while ...`) iteration statements.
  ([#271](https://github.com/Kipper-Lang/Kipper/issues/271))
- Support for config files with a new monorepo package called `@kipper/config`, which implements config file loading
  and parsing. This package is used by the Kipper CLI to automatically load and parse config files.
  ([#502](https://github.com/Kipper-Lang/Kipper/issues/502)).
- Added setup wizard to the `@kipper/cli` to automatically create a Kipper project with a config file.
  ([#502](https://github.com/Kipper-Lang/Kipper/issues/502)).
- Support for complex string formatting (or also called templating) in the form of Python-like F-Strings.
  ([#287](https://github.com/Kipper-Lang/Kipper/issues/287)).
- Support for string multiplication using the `*` operator.
  ([#478](https://github.com/Kipper-Lang/Kipper/issues/478)).
- New CLI flag `--dry-run` in `compile`, which only compiles the program and does not write any outputs.
  ([#532](https://github.com/Kipper-Lang/Kipper/issues/532)).
- New valid conversions:
  - `void` to `str`.
  - `null` to `str`.
  - `undefined` to `str`.
- New modules:
  - `kipper/core/tools`, which contains all tools and utilities used by the compiler.
  - `kipper/core/tools/decorators`, which contains all decorators used by the compiler.
  - `kipper/core/tools/functions`, which contains all functions used by the compiler.
  - `kipper/core/tools/types`, which contains all types used by the compiler.
  - `kipper/core/compiler/ast/common`, which contains commonly used types and functions.
  - `kipper/core/compiler/ast/factories`, which replaces the old file `factories.ts` and contains all AST factory
    classes and types.
  - `kipper/core/compiler/ast/mapping`, which contains all AST mapping objects and the `ASTNodeMapper` class.
- New classes:
  - `ASTNodeMapper`, which handles the mapping between kind numbers, rule names, AST classes and parser context classes.
  - `PrimaryExpression`, which is an abstract base class for all primary expressions.
  - `PostfixExpression`, which is an abstract base class for all postfix expressions.
  - `PromptModule` in `@kipper/cli`, which contains all prompt-related functions and classes.
  - `ObjectPrimaryExpression`, which represents an AST object primary expression.
  - `ObjectProperty`, which represents an AST object property.
  - `BitwiseExpression`, which represents an AST bitwise expression.
  - `BitwiseAndExpression`, which represents an AST bitwise AND expression.
  - `BitwiseOrExpression`, which represents an AST bitwise OR expression.
  - `BitwiseXorExpression`, which represents an AST bitwise XOR expression.
  - `BitwiseShiftExpression`, which represents an AST bitwise shift expression.
  - `LambdaExpression`, which represents an AST lambda expression.
  - `PragmaProcessor` which handles the processing of all possible Pragmas.
- New interfaces:
  - `LambdaExpressionSemantics`, which represents the semantics of a lambda expression.
  - `LambdaExpressionTypeSemantics`, which represents the type semantics of a lambda expression.
  - `PrimaryExpressionSemantics`, which represents the semantics of a primary expression.
  - `PrimaryExpressionTypeSemantics`, which represents the type semantics of a primary expression.
  - `PostfixExpressionSemantics`, which represents the semantics of a postfix expression.
  - `PostfixExpressionTypeSemantics`, which represents the type semantics of a postfix expression.
  - `IterationStatementTypeSemantics`, which represents the type semantics of an iteration statement.
  - `ExpressionStatementSemantics`, which represents the semantics of an expression statement.
  - `ExpressionStatementTypeSemantics`, which represents the type semantics of an expression statement.
  - `StatementSemantics`, which represents the semantics of a statement.
  - `StatementTypeSemantics`, which represents the type semantics of a statement.
  - `IfStatementTypeSemantics`, which represents the type semantics of an if statement.
  - `CompoundStatementSemantics`, which represents the semantics of a compound statement.
  - `CompoundStatementTypeSemantics`, which represents the type semantics of a compound statement.
  - `ForLoopStatementTypeSemantics`, which represents the type semantics of a for loop statement.
  - `DoWhileLoopIterationStatementTypeSemantics`, which represents the type semantics of a do-while loop statement.
  - `WhileLoopStatementTypeSemantics`, which represents the type semantics of a while loop statement.
  - `JumpStatementTypeSemantics`, which represents the type semantics of a jump statement.
  - `SwitchStatementSemantics`, which represents the semantics of a switch statement.
  - `SwitchStatementTypeSemantics`, which represents the type semantics of a switch statement.
  - `ObjectPrimaryExpressionSemantics`, which represents the semantics of an object primary expression.
  - `ObjectPrimaryExpressionTypeSemantics`, which represents the type semantics of an object primary expression.
  - `ObjectPropertySemantics`, which represents the semantics of an object property.
  - `ObjectPropertyTypeSemantics`, which represents the type semantics of an object property.
  - `BitwiseExpressionSemantics`, which represents the semantics of a bitwise expression.
  - `BitwiseExpressionTypeSemantics`, which represents the type semantics of a bitwise expression.
  - `BitwiseAndExpressionSemantics`, which represents the semantics of a bitwise AND expression.
  - `BitwiseAndExpressionTypeSemantics`, which represents the type semantics of a bitwise AND expression.
  - `BitwiseOrExpressionSemantics`, which represents the semantics of a bitwise OR expression.
  - `BitwiseOrExpressionTypeSemantics`, which represents the type semantics of a bitwise OR expression.
  - `BitwiseXorExpressionSemantics`, which represents the semantics of a bitwise XOR expression.
  - `BitwiseXorExpressionTypeSemantics`, which represents the type semantics of a bitwise XOR expression.
  - `BitwiseShiftExpressionSemantics`, which represents the semantics of a bitwise shift expression.
  - `BitwiseShiftExpressionTypeSemantics`, which represents the type semantics of a bitwise shift expression.
- New parameters:
  - `ignoreParams` in `genJSFunction()`, which, if true makes the function signature define no parameters.
  - `ignoreParams` in `createJSFunctionSignature()`, which, if true makes the function signature define no parameters.
  - `ignoreParams` in `genTSFunction()`, which, if true makes the function signature define no parameters.
  - `ignoreParams` in `createTSFunctionSignature()`, which, if true makes the function signature define no parameters.
- New constants:
  - `DEFAULT_TOKEN_CHANNEL`, which is the channel id of the default channel storing all the parser-relevant tokens that
    the Lexer lexed.
  - `HIDDEN`, which is the channel id of the channel storing all whitespaces and newlines that the Lexer lexed.
  - `COMMENT`, which is the channel id of the channel storing all the comments that the Lexer lexed.
  - `PRAGMA`, which is the channel id of the channel storing all pragma comments that the Lexer lexed.
- New fields:
  - `KipperError.programCtx`, which contains, if `KipperError.tracebackData.errorNode` is not undefined, the program
    context of the error.
  - `ParserASTNode.ruleName`, which contains the rule name of the node.
  - `LexerParserData.channels`, which stores the channels generated by the Lexer.
- New types:
  - `InverseMap`, which inverts a map by swapping the keys and values.
- New functions:
  - `KipperTargetBuiltInGenerator.voidToStr()`, for the built-in conversion from `void` to `str`.
  - `KipperTargetBuiltInGenerator.nullToStr()`, for the built-in conversion from `null` to `str`.
  - `KipperTargetBuiltInGenerator.undefinedToStr()`, for the built-in conversion from `undefined` to `str`.
  - `replaceObjKeys()`, which replaces the keys of an object with the values returned by a function.
  - `inverseMap()`, which inverts a map by swapping the keys and values.
  - `loadConfig()` in `@kipper/cli`, which loads a config file from the specified path.
  - `loadAutoConfig()` in `@kipper/cli`, which loads a config file from the current working directory.
  - `copyConfigResources()` in `@kipper/cli`, which copies the resources from the config file to the output directory.
  - `KipperTypeChecker.validConditionalExpression()`, which ensures that a conditional expression is valid.
  - `PragmaProcessor.processSingleLine()`, which changes the compiler options according to the pragmas found in the file.

### Changed

- Fixed bug allowing the use of any expressions for call expressions as that is not implemented yet.
- Standardised error output for the CLI as described in [#435](https://github.com/Kipper-Lang/Kipper/issues/435).
  (This is the same change as in `0.10.3`, but was only added to the dev branch with the release of `0.11.0-alpha.1`
  i.e. `0.11.0-alpha.0` does _not_ have this change).
- Made `VoidOrNullOrUndefinedPrimaryExpression` a constant expression and inherit from the `ConstantExpression` class.
  This means it's AST kind number is now also added to the `ASTConstantExpressionKind` type and its context class is
  also part of the `ParserConstantExpressionContext` type.
- Renamed:
  - Module `compiler/parser` to `lexer-parser`.
  - File `kipper/core/compiler/parser/parser-ast-mapping.ts` to `parse-rule-kind-mappings.ts`.
  - Class `KipperParseStream` to `KipperFileStream` including its file to `file-stream.ts`.
  - CLI Class `KipperParseFile` to `KipperInputFile` including its file to `input-file.ts`.
  - Class `FunctionCallPostfixTypeSemantics` to `FunctionCallExpressionTypeSemantics`.
  - Field `FStringPrimaryExpressionSemantics.items` to `atoms`.
  - Function `getTSFunction()` to `genTSFunction()`.
  - Grammar Rule `typeSpecifier` to `typeSpecifierExpression` and its AST class `TypeSpecifier` to
    `TypeSpecifierExpression`. This also includes changing the name in the `KipperTargetCodeGenerator`,
    `KipperTargetSemanticAnalyser` and `KipperTargetBuiltInGenerator` classes.
  - Grammar Rule `identifierTypeSpecifier` to `identifierTypeSpecifierExpression` and its AST class
    `IdentifierTypeSpecifier` to `IdentifierTypeSpecifierExpression`. This also includes changing the name in the
    `KipperTargetCodeGenerator`, `KipperTargetSemanticAnalyser` and `KipperTargetBuiltInGenerator` classes.
  - Grammar Rule `genericTypeSpecifier` to `genericTypeSpecifierExpression` and its AST class `GenericTypeSpecifier` to
    `GenericTypeSpecifierExpression`. This also includes changing the name in the `KipperTargetCodeGenerator`,
    `KipperTargetSemanticAnalyser` and `KipperTargetBuiltInGenerator` classes.
  - Grammar Rule `typeofTypeSpecifier` to `typeofTypeSpecifierExpression` and its AST class `TypeofTypeSpecifier` to
    `TypeofTypeSpecifierExpression`. This also includes changing the name in the `KipperTargetCodeGenerator`,
    `KipperTargetSemanticAnalyser` and `KipperTargetBuiltInGenerator` classes.
  - Grammar Rule `forLoopStatement` to `forLoopIterationStatement` and its AST class `ForLoopStatement` to
    `ForLoopIterationStatement`. This also includes changing the name in the `KipperTargetCodeGenerator`,
    `KipperTargetSemanticAnalyser` and `KipperTargetBuiltInGenerator` classes.
  - Grammar Rule `whileLoopStatement` to `whileLoopIterationStatement` and its AST class `WhileLoopStatement` to
    `WhileLoopIterationStatement`. This also includes changing the name in the `KipperTargetCodeGenerator`,
    `KipperTargetSemanticAnalyser` and `KipperTargetBuiltInGenerator` classes.
  - Grammar Rule `doWhileLoopStatement` to `doWhileLoopIterationStatement` and its AST class
    `DoWhileLoopStatement` to `DoWhileLoopIterationStatement`. This also includes changing the name in the
    `KipperTargetCodeGenerator`, `KipperTargetSemanticAnalyser` and `KipperTargetBuiltInGenerator` classes.
  - File `kipper/core/compiler/parser/parser-ast-mapping.ts` to `parse-rule-kind-mappings.ts`.
  - Class `ArrayLiteralPrimaryExpression` to `ArrayPrimaryExpression`.
  - Interface `ArrayLiteralPrimaryExpressionSemantics` to `ArrayPrimaryExpressionSemantics`.
  - Interface `ArrayLiteralPrimaryExpressionTypeSemantics` to `ArrayPrimaryExpressionTypeSemantics`.
  - Interface `TangledPrimaryTypeSemantics` to `TangledPrimaryExpressionTypeSemantics`.
  - Interface `DoWhileLoopStatementSemantics` to `DoWhileLoopIterationStatementSemantics`.
  - Interface `ParseData` to `LexerParserData`.
  - Method `TargetASTNodeCodeGenerator.arrayLiteralExpression` to `arrayPrimaryExpression`.
  - Method `TargetASTNodeSemanticAnalyser.listPrimaryExpression` to `arrayPrimaryExpression`.
  - Field `FStringPrimaryExpressionSemantics.items` to `atoms`.
  - Field `LexerParserData.parseStream` to `fileStream`.
- Moved:
  - `kipper/core/utils.ts` to `kipper/core/tools` and separated it into multiple files & modules.
  - `kipper/core/compiler/ast/root-ast-node.ts` to the `kipper/core/compiler/ast/nodes` module.
  - `kipper/core/compiler/ast/ast-types.ts` to the new `kipper/core/compiler/ast/common` module.

### Fixed

- Redeclaration bug causing an `InternalError` after calling the compiler
  ([#462](https://github.om/Kipper-Lang/Kipper/issues/462)).
- Compiler argument bug in `KipperCompiler`, where `abortOnFirstError` didn't precede `recover`, meaning that instead
  of an error being thrown the failed result was returned (As defined in the `recover` behaviour, which is incorrect).
- Bug of invalid underline indent in error traceback.
  ([#434](https://github.com/Kipper-Lang/Kipper/issues/434)).
- CLI bug where the `-t` shortcut flag was incorrectly shown for the command `help compile`.
  ([#451](https://github.com/Kipper-Lang/Kipper/issues/451)) (This is the same fix as in `0.10.3`, but was only
  added to the dev branch with the release of `0.11.0-alpha.1` i.e. `0.11.0-alpha.0` still has this bug).
- CLI error handling bug as described in [#491](https://github.com/Kipper-Lang/Kipper/issues/491). This includes
  multiple bugs where errors were reported as "Unexpected CLI Error". (This is the same fix as in `0.10.4`, but with one
  additional edge-case covered. This fix was only added to the dev branch with the release of `0.11.0-alpha.1` i.e.
  `0.11.0-alpha.0` still has this bug).

### Removed

- Removed deprecated flag `--abort-on-first-error` in favour of `--no-recover`.
  ([#501](https://github.com/Kipper-Lang/Kipper/issues/501)).
- Removed CLI command `analyse` in favor of the flag `--dry-run` in the CLI command `compile`.
  ([#532](https://github.com/Kipper-Lang/Kipper/issues/532)).
- Removed AST parent class `ConstantExpression`, its interfaces `ConstantExpressionSemantics` and
  `ConstantExpressionTypeSemantics`, as they were not really needed and unnecessarily added another level of
  complexity to the AST. All classes which previously inherited from `ConstantExpression` now inherit from
  `PrimaryExpression` instead.

## [0.10.4] - 2023-08-15

### Changed

- Moved function `executeKipperProgram` to `Run` as a private function.
- Moved class `KipperCompileResult` to new file `compile-result.ts` in the same directory.
- Field `KipperCompileResult.programCtx` can now be also `undefined`, due to the changed behaviour that now
  a `KipperCompileResult` is also returned for syntax errors (where it has no value).

### Fixed

- CLI error handling bug as described in [#491](https://github.com/Kipper-Lang/Kipper/issues/491). This includes
  multiple bugs where errors were reported as "Unexpected CLI Error".

### Deprecated

- CLI flag `--abort-on-first-error` in favour of `--no-recover`. [#501](https://github.com/Kipper-Lang/Kipper/issues/501).

## [0.10.3] - 2023-07-22

### Added

- New modules in `@kipper/cli`:
  - `input`, which contains all input-related handling functions and classes.
  - `output`, which contains the output-related handling functions and classes.
- New decorator `prettifiedErrors` in `@kipper/cli`, which applies standardised error formatting to any thrown error.

### Changed

- Standardised error output for the CLI as described in [#435](https://github.com/Kipper-Lang/Kipper/issues/435).
- Error message of `KipperInternalError`, which does not have " - Report this bug to the developer using the traceback!"
  as a suffix anymore.
- Changed success message of the `kipper analyse` command `Finished code analysis in ...` to `Done in ...`.
- Renamed `getFile` to `getParseStream`.

### Fixed

- CLI bug where the `-t` shortcut flag was incorrectly shown for the command `help compile`.
  ([#451](https://github.com/Kipper-Lang/Kipper/issues/451))

## [0.10.2] - 2023-06-16

### Added

- New field:
  - `KipperError.programCtx`, which contains, if `KipperError.tracebackData.errorNode` is not undefined, the program
    context of the error.
- New function:
  - `ensureScopeDeclarationAvailableIfNeeded`, which ensures that a scope declaration is available if needed. This
    is used during the semantic analysis/type checking of a declaration statement, which may need the scope
    declaration object during the processing.

### Fixed

- Redeclaration bug causing an `InternalError` after calling the compiler
  ([#462](https://github.com/Kipper-Lang/Kipper/issues/462)).
- Compiler argument bug in `KipperCompiler`, where `abortOnFirstError` didn't precede `recover`, meaning that instead
  of an error being thrown the failed result was returned (As defined in the `recover` behaviour, which is incorrect).
- Bug of invalid underline indent in error traceback.
  ([#434](https://github.com/Kipper-Lang/Kipper/issues/434)).

## [0.10.1] - 2023-02-21

### Fixed

- Bug causing the compiler to not detect the expected useless statement warning for a useless arithmetic
  expression. ([#426](https://github.com/Kipper-Lang/Kipper/issues/426)).

## [0.10.0] - 2023-02-19

### Added

- Added full support for custom-defined functions, function arguments, function return evaluation, function
  scopes/argument referencing and return-value code branch
  inspection. ([#183](https://github.om/Kipper-Lang/Kipper/issues/183)).
- Implemented while-loop iteration statements ([#268](https://github.com/Kipper-Lang/Kipper/issues/268)).
- Implemented for-loop iteration statements ([#270](https://github.com/Kipper-Lang/Kipper/issues/270)).
- JavaScript compilation target with a new monorepo package called `@kipper/target-js`, which implements the semantic
  analysis and code generation for JavaScript, and provides the class `KipperJavaScriptTarget` (`TargetTS` available
  as alias), which can be used as the target in
  the `CompileConfig`. ([#208](https://github.com/Kipper-Lang/Kipper/issues/208)).
- Standalone web-module package called `@kipper/web`, which from now on will provide the `kipper-standalone.js` script
  that can be used in a web-application. This also bundles `@kipper/target-js` and `@kipper/target-ts`, which can be
  also accessed using the identifiers `KipperJS` and `KipperTS` in the web environment.
  ([#86](https://github.com/Kipper-Lang/Kipper/issues/86)).
- Implemented arithmetic assignment operators `+=`, `-=`, `*=`, `%=` and `/=`
  ([#273](https://github.com/Kipper-Lang/Kipper/issues/273)).
- Support for unary and postfix increment and decrement (`++`, `--`) expressions
  ([#272](https://github.com/Kipper-Lang/Kipper/issues/272)).
- Implemented member-access expressions using bracket and slice notation (`[]`, `[:]`), which can be used to access
  specific elements of a string (In the future, this will also be used to access elements of arrays and objects).
  ([#372](https://github.com/Kipper-Lang/Kipper/issues/372)).
- Support for single-line comments separated by a newline char.
  ([#400](https://github.com/Kipper-Lang/Kipper/issues/400)).
- Implemented new built-in function `len()`, which returns the length of a string (In the future also arrays).
  ([#411](https://github.com/Kipper-Lang/Kipper/issues/411)).
- Support for jump statements `continue` and `break` for iteration statements.
  ([#269](https://github.com/Kipper-Lang/Kipper/issues/269)).
- New built-in variable `__name__` returning the name of the current file. This also includes general support for
  built-in variables in the compiler.
  ([#412](https://github.com/Kipper-Lang/Kipper/issues/412)).
- New built-in Kipper type `null` and `undefined`, and support for the constant identifier `void`, `null` and
  `undefined`.
- Finished implementation of warning reporting system and added warning for useless expression statements.
  ([#413](https://github.com/Kipper-Lang/Kipper/issues/413)).
- New Kipper CLI flag `-t/--target` to specify the target to use for a compilation or execution.
- Use of `"use strict";` in the TypeScript target to enforce the use of strict mode during runtime.
- New generic parameter `TypeSemantics` to `ASTNode`, which defines the type data that the AST Node should
  evaluate during type checking.
- New CLI flags for commands `run` and `compile`:
  - `--log-timestamp`, which enables timestamps for the log messages.
  - `--recover`, which enables error recovery for the Kipper compiler.
  - `--abort-on-first-error`, which aborts the compilation on the first compiler error that is encountered.
- New errors/warnings:
  - `MissingFunctionBodyError`, which is thrown when a function declaration is missing a body (compound statement).
  - `LexerOrParserSyntaxError`, which is thrown when the lexer or parser encounters a syntax error.
  - `IdentifierAlreadyUsedByParameterError`, which is thrown when an identifier is already used by a parameter in
    the same scope or any parent scope.
  - `ExpressionNotCallableError`, which is thrown when an expression is not callable, despite it being used in a call
    expression.
  - `IncompleteReturnsInCodePathsError`, which is thrown whenever a non-void function has code paths that do not return
    a value.
  - `ReturnStatementError`, which is thrown whenever a return statement is used outside a function.
  - `InvalidUnaryExpressionOperandError`, which is thrown whenever a unary expression is used with an invalid operand.
  - `UndefinedDeclarationCtxError`, which is thrown when the declaration context of a declaration is undefined. (This is
    an internal error that happens if the declaration context is accessed too early e.g. before its creation.)
  - `TypeNotCompilableError`, which is thrown when an invalid/undefined type is cast to a compilable type, despite it
    being invalid. (This is an internal error that happens if the type is cast during compilation despite it having
    errored during semantic analysis/type checking.)
  - `InvalidKeyTypeError`, which is thrown when an expression with an invalid type is used as a key/index to access
    an object-like or array-like.
  - `ValueNotIndexableTypeError`, which is thrown when a value is not indexable (not object-like), despite it being used
    in a member access expression.
  - `MissingRequiredSemanticDataError`, which is a specific internal error used to indicate that a specified node is
    missing required semantic data from another node and as a result failed to process itself.
  - `UselessExpressionStatementWarning`, which is reported when an expression statement is used without any side-effects
    and as such does not have any effect on the program.
- New classes/interfaces:
  - `KipperWarning`, which is a subclass of `KipperError` that is used to indicate a warning.
    This replaces the use of `KipperError` for warnings.
  - `ReturnStatement`, which is a subclass of `Statement` that represents a return statement. This is not anymore
    included in the `JumpStatement` class.
  - `FunctionScope`, which is a subclass of `Scope` that represents a function scope with registered parameters.
  - `UndefinedCustomType`, which represents an invalid/undefined type that was created by the user, but is not
    defined in the program. This is used to allow error recovery and continue even with an invalid type during type
    checking, and let the type checker know to ignore type checks with references of this type.
  - `Type`, which is an abstract base class for defining a wrapper class for a Kipper type during semantic analysis and
    type checking.
  - `UncheckedType`, which is an implementation of `Type` and represents a raw specified type during semantic analysis.
  - `CheckedType`, which is an implementation of `Type` and represents a checked type during type checking, which also
    handles compatibility and error recovery for undefined types.
  - `MemberAccessExpression`, which is a subclass of `Expression` that represents a member access expression (Antlr4
    rule `memberAccessExpression`).
  - `AnalysableASTNode`, which represents an AST node that can be semantically processed. This class was created as
    a parent class for `CompilableASTNode`, as a way to split up the semantic analysis and code generation.
  - `KipperWarningIssuer`, which is a class similar to `KipperSemanticChecker` and checks for certain conditions and
    reports warnings if they are met.
  - `ScopeNode<T>`, which is an interface representing an AST node that implements its own local scope. This means that
    the definitions of its children, will be stored in the `innerScope` field of the class implementation.
  - `SymbolTable`, which implements the basic functionality of a symbol table containing the metadata for a scope.
  - `MemberAccessExpressionSemantics`, which represents the semantics for `MemberAccessExpression`.
  - `MemberAccessExpressionTypeSemantics`, which represents the type semantics for `MemberAccessExpression`.
  - `TargetAnalysableNode`, which represents an AST node that has a target-specific semantic analysis function.
  - `TargetCompilableNode`, which represents an AST node that has a target-specific code generation function.
  - `ASTNodeFactory`, which represents a basic factory for creating AST nodes.
  - `InternalFunctionArgument`, which represents an internal function argument.
  - `InternalReference<T>`, which represents an indirect reference to an internal function by the user. This is
    primarily used to keep track of the internal functions that are used in the program, and to generate them in the
    target code.
- New functions:
  - `KipperTargetCodeGenerator.setUp()`, which should generate SetUp code for the specified target.
  - `KipperTargetCodeGenerator.wrapUp()`, which should generate WrapUp code for the specified target.
  - `ASTNode.getTypeSemanticData()`, which returns the type semantics if they are defined, otherwise throws an
    `UndefinedSemanticsError`.
  - `CompilableASTNode.semanticTypeChecking()`, which performs type checking for the AST node and its children nodes.
    This is called in the function `RootASTNode.semanticAnalysis` after `CompilableASTNode.semanticAnalysis()`.
  - `CompilableASTNode.wrapUpSemanticAnalysis()`, which performs wrap-up semantic analysis for the target of the AST
    node.
    This is called in the function `RootASTNode.semanticAnalysis` after `CompilableASTNode.semanticTypeChecking()`.
  - `Scope.getReferenceRecursively()`, which tries to evaluate a reference recursively in the scope and its parent
    scopes.
  - `KipperTypeChecker.validReturnStatement()`, which ensures that a return statement is only used inside a function.
  - `KipperTypeChecker.checkMatchingTypes()`, which checks if the two specified types are matching.
  - `KipperTypeChecker.referenceCallable()`, which asserts that the specified reference is a callable function.
  - `KipperTypeChecker.validReturnCodePathsInFunctionBody()`, which ensures that all code paths of a non-void
    function return a proper value.
  - `KipperSemanticChecker.identifierNotUsed()`, which asserts that the specified identifier is unused in the
    specified scope and can be used for a new declaration.
  - `KipperSemanticChecker.getReturnStatementParent()`, which evaluates the parent function for a return statement.
  - `KipperSemanticChecker.refTargetDefined()`, which asserts that the specified reference is defined and can be used.
  - `KipperSemanticChecker.validFunctionBody()`, which ensures the body of a function is a compound statement.
  - `CompilableASTNode.addError()`, which adds an error to the list of errors caused by the node.
  - `removeBraces()` for removing braces due to formatting reasons.
  - `CompilableASTNode.recursivelyCheckForWarnings()`, which recursively calls all children's `checkforWarnings()`
    functions as well as the function of the parent instance.
  - `shouldRecoverFromError()` and `handleSemanticError()` in `handle-error.ts`.
  - `AnalysableASTNode.semanticallyAnalyseChildren()`, which semantically analyses all children nodes of the AST node.
  - `AnalysableASTNode.semanticallyTypeCheckChildren()`, which semantically type checks all children nodes of the AST
    node.
  - `AnalysableASTNode.targetSemanticallyAnalyseChildren()`, which semantically analyses all children nodes of the AST
    node for the target.
  - `AnalysableASTNode.ensureSemanticallyValid()`, which throws a `MissingRequiredSemanticDataError` in case that the
    specified node failed during semantic analysis. This is used by other nodes to ensure that the node is valid and
    its data can be safely accessed.
  - `AnalysableASTNode.ensureTypeSemanticallyValid()`, which throws a `MissingRequiredSemanticDataError` in case that
    the specified node failed during type checking. This is used by other nodes to ensure that the node is valid and
    its data can be safely accessed.
  - `KipperSemanticChecker.getJumpStatementParent()`, which evaluates the parent iteration statement for a jump statement.
  - `KipperProgramContext.registerBuiltInFunctions()`, which registers one or more built-in functions.
  - `KipperProgramContext.registerBuiltInVariables()`, which registers one or more built-in variables.
  - `KipperProgramContext.clearBuiltInFunctions()`, which clears the list of built-in functions.
  - `KipperProgramContext.clearBuiltInVariables()`, which clears the list of built-in variables.
  - `KipperProgramContext.getBuiltInVariable()`, which returns the built-in variable with the specified name if found.
  - `KipperProgramContext.builtInFunctionReferences`, which stores all the references to built-in functions.
  - `KipperProgramContext.builtInVariableReferences`, which stores all the references to built-in variables.
- New types:
  - `TypeData`, which represents the type data of an `ASTNode`.
  - `NoTypeSemantics`, which hints that an `ASTNode` has no type semantic data.
  - `TargetSetUpCodeGenerator`, which represents a function that generates SetUp code for a Kipper file.
  - `TargetWrapUpCodeGenerator`, which represents a function that generates WrapUp code for a Kipper file.
  - `KipperEqualAssignOperator`, which represents the equal assignment operator (`=`).
  - `KipperAssignOperator`, which represents all available assignment operators.
  - `KipperArithmeticAssignOperator`, which represents all available arithmetic assignment operators.
  - `KipperArg`, which represents a function argument. Alias for `KipperParam`.
  - `KipperParam`, which represents a function parameter.
  - `JmpStatementType`, which represents all possible jump statement types e.g. `break` and `continue`.
  - `ASTDeclarationKind`, which is a union type of all possible `ParserASTNode.kind` values for a `Declaration` AST
    node.
  - `ASTExpressionKind`, which is a union type of all possible `ParserASTNode.kind` values for a `Expression` AST
    node.
  - `ASTStatementKind`, which is a union type of all possible `ParserASTNode.kind` values for a `Statement` AST
    node.
  - `ASTConstantExpressionKind`, which is a union type of all possible `ParserASTNode.kind` values for a
    `ConstantExpression` AST node.
  - `ParserConstantExpressionContext`, which is a union type of all possible `ParserASTNode.antlrRuleCtx` values
    for a `ConstantExpression` AST node.
  - `ASTTypeSpecifierExpressionKind`, which is a union type of all possible `ParserASTNode.kind` values for a
    `TypeSpecifierExpression` AST node.
  - `ParserTypeSpecifierExpressionContext`, which is a union type of all possible `ParserASTNode.antlrRuleCtx`
    values for a `TypeSpecifierExpression` AST node.
  - `ASTUnaryExpressionKind`, which is a union type of all possible `ParserASTNode.kind` values for a
    `UnaryExpression` AST node.
  - `ParserUnaryExpressionContext`, which is a union type of all possible `ParserASTNode.antlrRuleCtx` values for a
    `UnaryExpression` AST node.
  - `ASTComparativeExpressionKind`, which is a union type of all possible `ParserASTNode.kind` values for a
    `ComparativeExpression` AST node.
  - `ParserComparativeExpressionContext`, which is a union type of all possible `ParserASTNode.antlrRuleCtx` values for
    a `ComparativeExpression` AST node.
  - `ConstructableASTStatementClass`, which is a union type of all possible `Statement` AST node classes.
  - `ASTLogicalExpressionKind`, which is a union type of all possible `ParserASTNode.kind` values for a
    `LogicalExpression` AST node.
  - `ParserLogicalExpressionContext`, which is a union type of all possible `Parserement` AST node classes.
  - `ConstructableASTExpressionClass`, which is a union type of all possible `Expression` AST node classes.
  - `ConstructableASTDeclarationClass`, which is a union type of all possible `Declaration` AST node classes.
  - `ConstructableASTNodeClass`, which is a union type of all possible `ASTNode` AST node classes.
  - `ConstructableASTStatement`, which is a union type of all possible `Statement` AST node instances.
  - `ConstructableASTExpression`, which is a union type of all possible `Expression` AST node instances.
  - `ConstructableASTDeclaration`, which is a union type of all possible `Declaration` AST node instances.
  - `ConstructableASTNode`, which is a union type of all possible `ASTNode` AST node instances.
  - `ASTKind`, which represents a union of all AST node kind values that can be used to map a KipperParser rule context
    to an AST node. This is the type representing all values from `ParserASTMapping`.
  - `ConstructableASTKind`, which is the same as `ASTKind`, but removes any kind value that does not have a
    corresponding AST node class.
  - `KipperReferenceableFunction`, which represents a function that can be referenced by a `FunctionCallExpression`.
  - `ASTNodeParserContext`, which represents a union of all possible `ParserASTNode.antlrRuleCtx` values implemented
    in the `KipperParser` that have a corresponding AST node class.
- New fields/properties:
  - `CompileConfig.recover`, which if set enables compiler error recovery.
  - `CompileConfig.abortOnFirstError`, which changes the compiler error handling behaviour and makes it
    abort on the first error encountered. This overwrites `recover` per default.
  - `RootASTNode.target`, which returns the `KipperCompileTarget` of the program ctx the root AST node is in.
  - `RootASTNode.codeGenerator`, which returns the `KipperTargetCodeGenerator` of the program ctx the root AST node is
    in.
  - `RootASTNode.semanticAnalyser`, which returns the `KipperTargetSemanticAnalyser` of the program ctx the root AST
    node is in.
  - `ASTNode.typeSemantics`, which contains the type data for an ASTNode that was evaluated during type checking.
  - `ScopeFunctionDeclaration.typeData`, which returns the type data of the function AST node.
  - `ScopeVariableDeclaration.typeData`, which returns the type data of the variable AST node.
  - `ScopeVariableDeclaration.valueWasUpdated`, which returns true if the variable was updated after its initial
    declaration.
  - `ScopeDeclaration.isDefined`, which is an abstract field that returns whether the scope declaration was defined
    during its declaration.
  - `ScopeDeclaration.hasValue`, which is an abstract field that returns whether the scope declaration has a value set.
  - `FunctionDeclaration.innerScope`, which returns the inner scope of the function declaration. This can be used before
    semantic analysis, though will return undefined if it encounters any error.
  - `TracebackMetadata.errorNode`, which contains the error node that caused the error.
  - `CompilableASTNode.errors` and `RootASTNode.errors`, which returns all errors caused by this node and or its
    children.
  - `KipperProgramContext.hasFailed`, `CompilableASTNode.hasFailed`, `RootASTNode.hasFailed`, which returns true if the
    node or any of its children have failed to be processed during semantic analysis or type checking.
  - `Scope.parent`, which returns the parent scope of the scope. This is used to recursively evaluate references in all
    parent scopes.
  - `ParserASTNode.kind`, which returns the kind of the parser AST node. This returns the `KipperParser` rule number, as
    defined by `KipperParser.RULE_*`.
  - `StatementASTNodeFactory.statementMatchTable`, which returns the match table for the statement AST node factory.
  - `ExpressionASTNodeFactory.expressionMatchTable`, which returns the match table for the expression AST node factory.
  - `DeclarationASTNodeFactory.declarationMatchTable`, which returns the match table for the declaration AST node factory.
  - `CompileConfig.builtInFunctions`, which overwrites the built-in functions of the target.
  - `CompileConfig.extendBuiltInFunctions`, which adds new built-in functions to the target.
  - `CompileConfig.builtInVariables`, which overwrites the built-in variables of the target.
  - `CompileConfig.extendBuiltInVariables`, which adds new built-in variables to the target.
  - `Expression.hasSideEffects`, which returns true if the expression has side effects and as such affects the state of
    the program. This is primarily used for reporting warnings.
- New constants:
  - `kipperNullType`, which represents the Kipper null type.
  - `kipperUndefinedType`, which represents the Kipper undefined type.
  - `ParserASTMapping`, which is a special mapping object used to get the AST kind number for a `KipperParser` rule ctx
    instance.
  - `kipperRuntimeBuiltInVariables`, which contains the built-in variables of the Kipper runtime.

### Changed

- Moved TypeScript target from the core package to a new monorepo package called `@kipper/target-ts`, which implements
  the semantic analysis and code generation for TypeScript, and provides the class `KipperTypeScriptTarget`
  (`TargetTS` available as alias), which can be used as the target in the `CompileConfig`.
- Updated behaviour of the Compiler semantic analysis and implemented a basic error recovery system.
  ([#198](https://github.com/Kipper-Lang/Kipper/issues/198))
- Updated behaviour of Kipper Compiler semantic analysis and separated primary semantic analysis, type checking and
  target-specific semantic analysis into their own processing steps. (E.g. First, all AST nodes are semantically
  analysed, then type checked and semantically analysed for the target language)
- Updated the built-in functions' generation behaviour, by making every built-in function be defined inside the global
  variable `__kipper` and the global object property `globalThis.__kipper`. This means that the functions are directly
  bound to the JS runtime and any function definition in the generated file is placed after the initial evaluation
  of the global scope.
- Updated the function call syntax and made the `call` keyword optional. This allows for simplified function calls,
  such as `print("Hello world!");`.
- Default error identifier is now just `Error` instead of `KipperError`.
- Migrated the internal storage of `Scope` and its implementing classes to a hashmap implementation.
- Updated types of `CompilableASTNode` functions `primarySemanticAnalysis`, `primarySemanticTypeChecking` and
  `targetSemanticAnalysis` and made them possibly undefined if there is nothing to check. This is to improve
  performance and not call an async function unnecessarily.
- Allowed the use of function declarations inside nested scopes (e.g. inside a function body or compound statement).
- Split grammar file `Kipper.g4` into `KipperLexer.g4` and `KipperParser.g4`.
- Updated factory system for `StatementASTNodeFactory`, `DeclarationASTNodeFactory` and `ExpressionASTNodeFactory` to
  use a mapping table instead of a switch statement for better readability and accessibility. This also allows for
  easier extension of the factory system. The `create` function is now instance-based (not static anymore) as well.
- Constructor in `KipperParseStream` to allow either an `CharPointCharStream` or a `string` as input, but not
  allow a mismatch content between the two.
- Cleaned up structure in `KipperFileASTGenerator` (previously `KipperFileListener`) and removed unnecessary code.
- Renamed:
  - `EvaluatedCompileOptions` to `EvaluatedCompileConfig`.
  - `UnableToDetermineMetadataError` to `UndefinedSemanticsError`.
  - `ReadOnlyAssignmentTypeError` to `ReadOnlyWriteTypeError`.
  - `InvalidAssignmentTypeError` to `AssignmentTypeError`.
  - `InvalidArgumentTypeError` to `ArgumentTypeError`.
  - `InvalidArithmeticOperationTypeError` to `ArithmeticOperationTypeError`.
  - `InvalidReturnTypeError` to `FunctionReturnTypeError`.
  - `UndefinedIdentifierError` to `UndefinedReferenceError`.
  - `UnknownIdentifierError` to `UnknownReferenceError`.
  - `FunctionDeclarationSemantics.args` to `params`.
  - `KipperTypeChecker.argumentTypesMatch` to `validArgumentValue`.
  - `ListPrimaryExpression` to `ArrayLiteralPrimaryExpression`.
  - `FunctionCallPostfixExpression` to `FunctionCallExpression`.
  - `antlrDefinitionCtxType` to `ParserDeclarationCtx`.
  - `antlrExpressionCtxType` to `ParserExpressionCtx`.
  - `antlrStatementCtxType` to `ParserStatementCtx`.
  - `ParserExpressionCtx` to `ParserExpressionContext`.
  - `ParserStatementCtx` to `ParserStatementContext`.
  - `ParserDeclarationCtx` to `ParserDeclarationContext`.
  - `KipperFileListener` to `KipperFileASTGenerator`.
  - `KipperProgramContext.addError` to `reportError`.
  - `kipperRuntimeBuiltIns` to `kipperRuntimeBuiltInFunctions`.
  - `kipperInternalBuiltIns` to `kipperInternalBuiltInFunctions`.
- Moved:
  - Function `KipperSemanticsAsserter.getReference` to class `KipperSemanticChecker`.
  - Function `KipperSemanticsAsserter.getExistingReference` to class `KipperSemanticChecker`.
  - Function `indentLines` to file `tools.ts` of `@kipper/target-js`.
  - Function `CompilableASTNode.semanticAnalysis` to `AnalysableASTNode`.
  - Function `CompilableASTNode.semanticTypeChecking` to `AnalysableASTNode`.
  - Function `CompilableASTNode.wrapUpSemanticAnalysis` to `AnalysableASTNode`.
  - Function `CompilableASTNode.recursivelyCheckForWarnings` to `AnalysableASTNode`.
  - Function `CompilableASTNode.recursivelyCheckForWarnings` to `AnalysableASTNode`.
  - Abstract Function `CompilableASTNode.primarySemanticAnalysis` to `AnalysableASTNode`.
  - Abstract Function `CompilableASTNode.primarySemanticTypeChecking` to `AnalysableASTNode`.
  - Abstract Function `CompilableASTNode.checkForWarnings` to `AnalysableASTNode`.
  - Field `CompilableASTNode.programCtx` to `AnalysableASTNode`.
  - Field `CompilableASTNode.compileConfig` to `AnalysableASTNode`.
  - Field `CompilableASTNode.errors` to `AnalysableASTNode`.
  - Field `CompilableASTNode.addError` to `AnalysableASTNode`.
  - Field `CompilableASTNode.hasFailed` to `AnalysableASTNode`.

### Fixed

- Multiple reference and declaration bugs, which resulted in invalid handling of declarations and assignments
  to undefined variables and allowed the referencing of variables that were not defined or had no value set.
- Grammar bug which didn't allow the representation of empty lists (e.g. `[]`).
- Multiple reference and declaration bugs, which resulted in invalid handling of declarations and assignments
  to undefined variables and allowed the referencing of variables that were not defined or had no value set.
- Grammar bug which didn't allow the representation of empty lists (e.g. `[]`).
- A bug where using a `KipperParseStream` multiple times would result in the `CodePointCharStream` being empty.
- Grammar bug not allowing an empty statement (`;`) in a compound statement.

### Removed

- Kipper CLI command `update`, as it was not needed since there are no plans to deploy S3 distributions of Kipper.
- `KipperError.isWarning`, which has been replaced by the new class `KipperWarning`.
- `KipperCharType` (`char`) and its grammar implementation, meaning all string types from now on will only be of type
  `str`. This also means that the single-quote character `'` can from now also be used for string literals and
  f-strings with the same behaviour as the regular double-quoted character `"`.
- `KipperReturnType` and `kipperReturnTypes`, as they are always identical to the `KipperType` and `kipperTypes`
  respectively.
- `FunctionReturnTypeError`, as it is obsolete since all return types are valid.
- The following fields:
  - `Scope.functions` (replaced by hash-map implementation of `Scope`).
  - `Scope.variables` (replaced by hash-map implementation of `Scope`).
  - `Scope.getVariable` (replaced by hash-map implementation of `Scope`).
  - `Scope.getFunction` (replaced by hash-map implementation of `Scope`).
  - `KipperError.antlrCtx`, as it was replaced by `TracebackMetadata.errorNode`.
  - `KipperTypeChecker.validReturnType`, as it is obsolete due to the absence of `KipperReturnType`.
- The following functions:
  - `KipperFileASTGenerator.handleIncomingDeclarationCtx` (removed in clean-up).
  - `KipperFileASTGenerator.handleIncomingStatementCtx` (removed in clean-up).
  - `KipperFileASTGenerator.handleExitingStatementOrDefinitionCtx` (removed in clean-up).
  - `KipperFileASTGenerator.handleIncomingExpressionCtx` (removed in clean-up).
  - `KipperFileASTGenerator.handleExitingExpressionCtx` (removed in clean-up).
  - `KipperProgramConext.builtInReferences` (replaced by `builtInFunctionReferences` and `builtInVariableReferences`).
  - `KipperProgramConext.registerBuiltIns` (replaced by `registerBuiltInFunctions` and `registerBuiltInVariables`).
  - `CompileConfig.builtIns` (replaced by `builtInFunctions` and `builtInVariables`).
  - `CompileConfig.extendBuiltIns` (replaced by `extendBuiltInFunctions` and `extendBuiltInVariables`).
- Parser rule `arraySpecifierExpression` (`ArraySpecifierExpression`), which was made obsolete with the addition of
  `bracketNotationMemberAccessExpression` (`BracketNotationMemberAccessExpression`).

## [0.9.2] - 2022-07-23

### Changed

- Fixed traceback bug for re-declarations inside compound statements generating an invalid error message and traceback.
  ([#240](https://github.com/Kipper-Lang/Kipper/issues/240))
- Updated Kipper compiler error message.

## [0.9.1] - 2022-06-29

### Changed

- Fixed invalid traceback underline formatting for Kipper errors.
- Updated error messages in multiple Kipper errors.

## [0.9.0] - 2022-06-26

### Added

- Entry point file for the root package `kipper`, which exports `@kipper/core` allowing the `kipper`
  package to be used in projects.
- Syntax support and code generation for if, else-if and else statements
  ([#182](https://github.com/Kipper-Lang/Kipper/issues/182)).
- Code generation of expression lists (e.g. expression statements containing multiple child expressions)
  ([#173](https://github.com/Kipper-Lang/Kipper/issues/173)).
- Code generation for tangled expressions.
  ([#203](https://github.com/Kipper-Lang/Kipper/issues/203))
- Comparative and relational expressions, which allow for logical operations and comparisons on expressions. List of all
  supported operators, which can be used between two expressions.
  - `!=` (Not Equal Operator)
  - `==` (Equal Operator)
  - `>` (Greater than Operator)
  - `>=` (Greater or equal to Operator)
  - `<` (Less than Operator)
  - `<=` (Less or equal to Operator)
- Logical expressions, which allow for the chaining and combination of expressions and conditions. List of all available
  supported operators, which can be used between two expressions/conditions:
  - `&&` (Logical And Operator)
  - `||` (Logical Or Operator)
- Operator modified expressions, which allow for the modification of an expression using a specific operator. List
  of all supported operators:
  - `!` (Logical NOT Operator)
  - `+` (Plus Operator)
  - `-` (Minus Operator)
- Partial support for compiler warnings by allowing `KipperError` instances to be warnings if `isWarning` is set to
  true and implementing AST-based checks for warnings using the new function `CompilableASTNode.checkForWarnings()`.
  ([#199](https://github.com/Kipper-Lang/Kipper/issues/199))
- New flag `-w/--warnings` in the commands `compile`, `run` and `analyse`, which enables logger warnings.
  ([#199](https://github.com/Kipper-Lang/Kipper/issues/199))
- Support for hex, binary and octal numbers. (Only minor changes, as previously the syntax for binary, octal and
  hex numbers was already added.) ([#184](https://github.com/Kipper-Lang/Kipper/issues/184))
- New errors:
  - `InvalidRelationalComparisonTypeError`, which is thrown whenever a relational comparison is used with types that
    are not comparable.
  - `InvalidUnaryExpressionTypeError`, which is thrown whenever a unary expression has an operand with an invalid type.
- New classes:
  - `IfStatement`, which represents if, if-else and else statements. Chained if, else-if and else statements are
    structured like a tree, where the top if statement represents the root and each following if statement is a
    section/branch of the tree.
  - `TypeSpecifierExpression`, which is an abstract class used to provide the commonality between the
    different type specifier expressions.
  - `ComparativeExpression`, which is an abstract class used to provide the commonality between the
    different comparative expressions.
  - `LogicalExpression`, which is an abstract class used to provide the commonality between the
    different logical expressions.
  - `UnaryExpression`, which is an abstract class used to provide the commonality between the
    different unary expressions.
  - `SwitchStatement`, which represents a switch selection statement.
  - `DefinitionASTNodeFactory`, which is a factory that creates a definition instance based on
    a `antlrRuleCtx`.
  - `ExpressionASTNodeFactory`, which is a factory that creates an expression instance based on
    a `antlrRuleCtx`.
  - `StatementASTNodeFactory`, which is a factory that creates a statement instance based on
    a `antlrRuleCtx`.
- New types:
  - `KipperUnaryOperator`
  - `KipperLogicalAndOperator`
  - `KipperLogicalOrOperator`
  - `KipperLogicalOperator`
  - `KipperEqualityOperator`
  - `KipperRelationalOperator`
  - `KipperComparativeOperator`
  - `KipperUnaryModifierOperator`
  - `KipperIncrementOrDecrementOperator`
  - `KipperNegateOperator`
  - `KipperSignOperator`
- New constants:
  - `kipperUnaryOperators`
  - `kipperLogicalAndOperator`
  - `kipperLogicalOrOperator`
  - `kipperLogicalOperator`
  - `kipperEqualityOperators`
  - `kipperRelationalOperators`
  - `kipperComparativeOperators`
  - `kipperIncrementOrDecrementOperators`
  - `kipperNegateOperators`
  - `kipperSignOperators`
- New interfaces:
  - `IfStatementSemantics`, which contains the semantic data of an if-statement.
  - `ComparativeExpressionSemantics`, which defines the semantic data of a comparative expression.
  - `LogicalExpressionSemantics`, which defines the semantics of a logical expression.
  - `UnaryExpressionSemantics`, which defines the base semantics for every unary expression.
  - `TracebackMetadata`, which defines the required data for a full traceback in a `KipperError`.
- New functions:
  - `CompilableASTNode.checkForWarnings()`, which checks for warnings in an AST Node.
  - `KipperTypeChecker.validRelationalExpression()`, which ensures a `RelationalExpression` is semantically valid.
  - `KipperTypeChecker.validUnaryExpression()`, which ensures a `UnaryExpression` is semantically valid.
  - `KipperProgramContext.addWarning()`, which adds a warning to the program context.
  - `KipperLogger.reportWarning()`, which reports a warning with its traceback to the consoles.
- New fields/properties:
  - `CompileConfig.warnings`, which if set to true enables warnings and stores them in `KipperCompileResult.warnings`.
  - `EvaluatedCompileOptions.warnings`, which if set to true enables warnings and stores them in
    `KipperCompileResult.warnings`.
  - `KipperCompileResult.warnings`, which contains a list of all warnings that were found during the compilation of a
    program.
  - `KipperError.isWarning`, which if true defines the error as non-fatal warning that does not prevent the
    compilation from continuing.
  - `KipperProgramContext.warnings`, which contains all warnings that have been found in the program.
  - `KipperLogger.reportWarnings`, which if set to true will report warnings to the console.
  - `KipperProgramContext.reportWarnings`, which if set to true will run warning checks on the AST nodes of the program.

### Changed

- Moved `KipperSemanticChecker.arithmeticExpressionValid()` to `KipperTypeChecker` and renamed it to
  `validArithmeticExpression()`.
- Renamed Antlr4 rule `singleTypeSpecifier` to `identifierTypeSpecifier` and its associated
  class to `IdentifierTypeSpecifierExpression`.
- Renamed:
  - `SingleTypeSpecifierExpression` to `IdentifierTypeSpecifierExpression`.
  - `ParserASTNode.getTokenChildren()` to `getAntlrRuleChildren()`.
  - `Scope.localVariables` to `variables`.
  - `Scope.localFunctions` to `functions`.
- Updated logging messages and shortened them to be more concise.

### Removed

- Deprecated and replaced functions:
  - `getDefinitionInstance`, which was replaced with `DefinitionASTNodeFactory`.
  - `getExpressionInstance`, which was replaced with `ExpressionASTNodeFactory`.
  - `getStatementInstance`, which was replaced with `StatementASTNodeFactory`.

## [0.8.3] - 2022-06-18

### Added

- New errors:
  - `ReadOnlyAssignmentTypeError`, which is thrown whenever a read-only (constant) variable is being
    assigned to.
  - `InvalidAssignmentTypeError`, which is thrown whenever an assignment has mismatching types that
    are not compatible.
  - `UndefinedConstantError`, which is thrown whenever a constant declaration is not defined. (Constants
    may not be undefined).

### Changed

- Fixed const assignment bug [#188](https://github.com/Kipper-Lang/Kipper/issues/188), which allowed assignments to
  read-only (constant) variables.
- Fixed invalid identifier translation of built-in references in the TypeScript target.
- Renamed:
  - `KipperProgramContext.registerGlobals()` to `registerBuiltIns`.
  - `InvalidConversionError` to `InvalidConversionTypeError`
  - `InvalidArithmeticOperationError` to `InvalidArithmeticOperationTypeError`
- Set display error name of `InvalidArithmeticOperationTypeError` to `TypeError`.

## [0.8.2] - 2022-06-14

### Changed

- Handling of integer constants and cleaned up the lexer rules in Kipper.g4.
- Updated error message of `InvalidAmountOfArgumentsError`.
- Updated and improved speed of space handling by optimising parser rules and removing manual spaces in rules.

### Removed

- Integer and float suffixes from the lexer rules in Kipper.g4, as they are meaningless in Kipper.

## [0.8.1] - 2022-06-09

### Changed

- Replaced outdated `NotImplemented` errors from `KipperFileListener.ts` with `KipperNotImplementedError` errors,
  which are now thrown inside the `primarySemanticAnalysis()` functions of the affected statements.
- Updated and simplified logging messages.
- Fixed grammar issue in `Kipper.g4`, which resulted in spaces being syntactically invalid in an empty function argument
  list, e.g. `def func( ) -> void;` was invalid before.

### Removed

- Unused grammar rule `nestedParenthesesBlock`.

## [0.8.0] - 2022-06-07

### Added

- Implemented type conversion expressions, which allow for the conversion of a value to another type.
  ([#133](https://github.com/Kipper-Lang/Kipper/issues/133)) The following conversions are supported:
  - `str` as `num`
  - `num` as `str`
  - `bool` as `str`
  - `bool` as `num`
- Boolean constant expressions `true` and `false`, which automatically evaluate to the type `bool` and can be used in
  expressions. (`true` and `false` are now reserved identifiers, which can never be overwritten and any attempts to do
  so will be blocked by the parser). This also includes a new expression class `BoolPrimaryExpression`, a new
  target-specific semantics function `KipperTargetSemanticAnalyser.boolPrimaryExpression` and target-specific
  translation function `KipperTargetCodeGenerator.boolPrimaryExpression`.
  ([#134](https://github.com/Kipper-Lang/Kipper/issues/134))
- Implemented reserved identifier checking, which ensures that no declarations overwrite/interfere with an internal
  identifier or reserved identifier/keyword. ([#153](https://github.com/Kipper-Lang/Kipper/issues/153))
- Implemented tree-shaking for internal and built-in functions using the new class `KipperOptimiser`, which removes
  any function definitions that are not used ([#159](https://github.com/Kipper-Lang/Kipper/issues/159)).
- New field `KipperCompileTarget.builtInGenerator`, which will store the built-in generator for each target.
- New classes and interfaces:
  - `KipperTargetBuiltInGenerator`, which updates the behaviour for generating built-in functions.
    This function should also allow the use of built-in variables in the future and also provide a basis for dynamic
    dependency generation for the Kipper built-ins. This means that targets can now specify themselves how the
    built-in should be generated and can handle all type conversions, internal prefixes, name mangling etc. themselves.
  - `identifierTypeSpecifierExpression`, which represents a single constant type identifier, such as `str`.
  - `GenericTypeSpecifierExpression`, which represents a generic type constant, such as `type<T>`. (Functionality not
    implemented yet! Planned for v0.12)
  - `TypeofTypeSpecifierExpression`, which represents a dynamically evaluated type, such as `typeof("string")`.
    (Functionality not implemented yet! Planned for v0.11)
  - `InternalFunction`, which represents an internal function for Kipper, which provides specific functionality for
    keywords and other internal logic.
  - `KipperSemanticErrorHandler`, which implements a default abstract error handler for semantic errors. This is
    used by `KipperTargetSemanticAnalyser` and `KipperAsserter`.
  - `KipperOptimiser`, which handles code optimisation for a Kipper program.
- New functions:
  - `KipperSemanticChecker.validConversion()`, which checks whether a type conversion is valid and implemented by
    Kipper.
  - `KipperOptimiser.optimise()`, which performs optimisation on an abstract syntax tree.
  - `KipperProgramContext.getBuiltInFunction()`, which searches for a built-in function based on a passed
    identifier.
  - `KipperProgramContext.optimise()`, which performs code optimisations for the local abstract syntax tree.
- New errors:
  - `InvalidConversionError`, which is thrown when an invalid or unimplemented conversion is performed in a Kipper
    program.
  - `ReservedIdentifierOverwriteError`, which is thrown whenever a declaration identifier overwrites/interferes with
    an internal function or reserved keyword/identifier.
- New types and constants:
  - Kipper meta type `type`, which represents the type of a Kipper type.
  - `kipperSupportedConversions`, which is an array containing multiple tuples representing allowed conversions in
    Kipper.
- New `CompileConfig` option `optimisationOptions`, which contains the configuration for the `KipperOptimiser`.
- Added new flags `-b/--[no-]optimise-builtins` and `-i/--[no-]optimise-internals` to the `@kipper/cli` for enabling
  internal and built-in functions optimisation.

### Changed

- Updated error traceback generation algorithm to be more concise and useful. The algorithm will try from now on to mark
  the origin of the error in the source line, instead of only returning the characters causing the error.
- Updated folder structure of built-in targets, by moving all target-related files to `kipper/core/src/targets`. This
  should from now on be the folder, where all the targets that are natively supported by Kipper should be located.
- Moved all typescript-related target files to `kipper/core/src/targets/typescript` and split up the classes into
  their own files.
- Updated built-in code generation behaviour in `KipperProgramContext.generateRequirements()`. This function
  generates the built-ins for a program using its `KipperTargetBuiltInGenerator`, which is specified in the
  `KipperCompileTarget`.
- Fixed bug in `@kipper/cli` which occurred when reading files causing line endings to be internally removed. This
  resulted in CLI errors sometimes displaying an entire Kipper file as a single line of code, instead of displaying the
  original code line alone.
- Renamed:
  - `builtIns` to `kipperRuntimeBuiltIns`.
  - `semantic-analyser.ts` to `target-semantic-analyser.ts`.
  - `ParserASTNode.ensureTokenChildrenExist()` to `getTokenChildren()`.
  - `ParserASTNode.ensureSemanticDataExists()` to `getSemanticData()`.
  - `KipperError.setMetadata()` to `KipperError.setTracebackData()`.
  - `KipperAsserter` to `KipperSemanticsAsserter`.
  - `TargetTokenCodeGenerator` to `TargetASTNodeCodeGenerator`.
  - `TargetTokenSemanticAnalyser` to `TargetASTNodeSemanticAnalyser`.
  - `CompilerEvaluatedOptions` to `EvaluatedCompileOptions`.
  - `KipperProgramContext.processedParseTree` to `abstractSyntaxTree`.
  - `KipperProgramContext.builtInGlobals` to `builtIns`.
  - `CompileConfig.globals` to `builtIns`.
  - `CompileConfig.extendGlobals` to `extendBuiltIns`.
- Optimised and simplified Kipper code generation in `KipperCompileResult.write()`.
- Updated `@kipper/core` code base structure:
  - `/parser/` now contains these new files:
    - `ast-node.test.ts` - AST Node (Previously parse-token.ts)
    - `root-ast-node.test.ts` - Root AST Node (Extracted from compilable-ast-node.test.ts)
    - `compilable-ast-node.test.ts` - Compilable AST Node (Previously compilable-parse-token.ts)
  - `/semantics/language/` which contains the language specific AST Node classes that implement the semantics for the
    expressions, definitions and statements in Kipper.
  - `/semantics/processor/` which is the module containing the Semantic analyser and Type checker.
- Updated local and global scope handling by introducing three new classes: `Scope`, `GlobalScope` and `LocalScope`.
  These classes now handle local variables and functions and implement a standard interface for handling declarations
  and definitions.
- Updated `@kipper/cli` flag names from camelCase to dash-case.

### Removed

- Module `kipper/core/compiler/lib`, as the built-ins shall from now on be handled by each individual target instead
  of the whole Kipper package to allow a unique specific implementation per target.
- Deprecated errors and functions:
  - `UnknownFunctionIdentifierError`
  - `UnknownVariableIdentifierError`
  - `KipperSemanticChecker.functionIsDefined`
  - `KipperSemanticChecker.variableIsDefined`
- `BuiltInFunction.handler` as the core compiler will not handle code generation of Kipper built-ins (like
  for example `print`) anymore.
- Support for multi strings seperated by a whitespace (e.g. `"1" "2"` is counted as a single string `"12"`). This
  may be added back later, but for now it will be removed from the Kipper language.
- Error `InvalidOverwriteError`, as all errors it represented are now subclasses of `IdentifierError`.
- Unneeded functions from `KipperProgramContext`, as they were replaced by the new scope handling classes:
  - `getGlobalFunction()`
  - `getGlobalIdentifier()`
  - `getGlobalVariable()`
  - `addGlobalVariable()`
- Unneeded function `determineScope()`, as the scope handling was moved to `CompilableASTNode.scope`.

## [0.7.0] - 2022-05-22

### Added

- Implemented code generation for declarations, definitions and variable assignments
  ([#26](https://github.com/Kipper-Lang/Kipper/issues/26)).
- Implemented semantic analysis for `AssignmentExpression` and `VariableDeclaration`.
- Implemented support for identifiers references, which means variables can now be used in the following contexts:
  - As a function call argument: `call print(identifier)`
  - As a value in an arithmetic expression: `identifier + identifier` or `identifier + 5`
- Implemented CLI flag `-s/--stringCode`, which can be used as a replacement for the argument `file`.
  ([#100](https://github.com/Kipper-Lang/Kipper/issues/100)). This flag is available for `kipper analyse`,
  `kipper compile` and `kipper run`)
- Implemented single char flags for the CLI ([#109](https://github.com/Kipper-Lang/Kipper/issues/109)).
- Additional metadata and stack info when non-compiler errors are thrown during runtime in the CLI.
- New fields:
  - `VariableDeclarationSemantics.value`, which represents the expression that was assigned in the definition.
    This field is `undefined` if `VariableDeclarationSemantics.isDefined` is `false`.
- New functions:
  - `CompileAssert.validAssignment()`, which asserts that an assignment expression is valid.
  - `abstract CompilableASTNode.semanticTypeChecking()`, which must be implemented by every child and should serve
    as a separate semantic type checking step outside of `primarySemanticAnalysis()`.
- New classes:
  - `KipperAsserter`, which is an abstract base class that represents a class that can be used to assert certain truths
    and handle/throw compile errors.
  - `KipperTypeChecker` and `KipperSemanticChecker`, which perform specialised semantic checking and verify logical
    integrity and cohesion. These two classes replace `CompileAssert`.
- New errors:
  - `InvalidAssignmentError`, which is thrown when an invalid assignment is used.
  - `KipperInvalidInputError`, which is thrown when passing invalid input to the Kipper cli.

### Changed

- Optimised Kipper parsing and lexing process by updating the parsing behaviour in Kipper.g4. Kipper should handle
  standard expressions a lot faster from no on.
- Fixed bug [#104](https://github.com/Kipper-Lang/Kipper/issues/104), which caused an invalid evaluation of the return
  type of string additive expressions causing invalid type errors when used with other expressions.
- Fixed CLI issues with unrecognisable non-printable unicode characters, which caused errors with the Antlr4 Parser and
  Lexer, when reading files using the `utf16le` encoding.
- Fixed NULL character issue [#114](https://github.com/Kipper-Lang/Kipper/pull/114) when writing TypeScript code onto
  files using the `utf16le` encoding. From now on a buffer will be created using the proper encoding (also for
  `ascii` and `utf8`) that should be properly writable to a file.
- Fixed incomplete translation bug [#118](https://github.com/Kipper-Lang/Kipper/issues/118) of chained arithmetic
  expressions with the same operator (`N + N + N`) resulting in incomplete TypeScript code.
- Fixed bug [#111](https://github.com/Kipper-Lang/Kipper/issues/111), which caused an invalid evaluation of the
  return type of string expressions.
- Updated logger messages.
- Updated `compiler` folder structure of the core package:
  - `compiler/parser` from now on contains everything parser and lexer-related.
  - `compiler/parser/antlr` from now on contains the Antlr4 generated parser and lexer files.
  - `compiler/semantics` from now on contains everything semantics related, such as the file listener, the Kipper
    tokens, logical constants etc.
  - `compiler/translation` from now on contains the classes and tools used for translating Kipper code into another
    language.
  - `compiler/targets` from now on contains the existing targets for Kipper, such as `typescript`.
  - `compiler/lib` from now on contains the standard library and built-ins for Kipper.
  - `compiler/lib/import` from now on contains the default importable libraries for Kipper.
- Renamed:
  - Error `InvalidTypeError` to `TypeError`.
  - Function `KipperProgramContext.addNewGlobalScopeEntry` to `addGlobalVariable()`.
  - Function `CompoundStatement.addNewLocalVariable` to `addLocalVariable()`.

### Removed

- Unnecessary traceback when encountering Kipper runtime errors as explained in
  [#110](https://github.com/Kipper-Lang/Kipper/issues/109).
- Option to use unary expressions for the left-hand side of an assignment expression in Kipper.g4. (Only identifiers
  may be used.)
- Option to redeclare variables. From on a variable declaration can only be done once and afterwards the variable may
  only be overwritten or modified, but not re-declared. This should help make Kipper have a similar behaviour to
  TypeScript.

## [0.6.1] - 2022-05-17

### Added

- `@types/node` as a dependency for `@kipper/cli`.

### Changed

- Updated locale dependency requirements for kipper packages to `~` (Accepting patches, but not
  new features). E.g. `@kipper/cli` requires `"@kipper/core": "~0.6"`

## [0.6.0] - 2022-05-16

### Added

- Implemented TypeScript translation for constant numeric values (`NumberPrimaryExpression`).
- Implemented TypeScript translation for arithmetic expressions: `MultiplicativeExpression` and `AdditiveExpression`.
- New base interface `ExpressionSemantics`, which is the base for all expression semantics.
- New interface `ArithmeticExpressionSemantics` which is used as a parent for `MultiplicativeExpressionSemantics` and
  `AdditiveExpressionSemantics`.
- Field `args` in `FunctionCallPostfixExpressionSemantics`, which contains the `Expression` instances representing
  the arguments of a function call.
- New functions:
  - `getTokenIntervalSource()`, which fetches the source code for an interval of two `Token` instances.
  - `getParseTreeSource()`, which fetches the source code for a parse tree.
  - `CompilableASTNode.ensureTokenChildrenExist()`, which throws an `UnableToDetermineMetadataError`
    error in case that the children tokens are undefined.
  - `KipperProgramContext.semanticAnalysis()` (which allows for semantic analysis without compiling)
  - `KipperProgramContext.translate()`, which translates a processed parse tree.
  - `CompileAssert.getExistingVariable()` and `CompileAssert.getExistingReference()` for fetching reference variables
    based on an identifier.
  - `CompoundStatement.getLocalVariable()` and `CompoundStatement.getVariableRecursively()` for fetching
    a variable based on an identifier inside a `CompoundStatement`/`KipperScope`.
- New types:
  - `KipperReturnType`, which represents valid types that may be returned from a function.
  - `KipperPrimitiveType`, which represents primitive types in Kipper.
  - `KipperMultiplicativeOperator`, which represents multiplicative operators (`*`, `/`, `**` and `%`).
  - `KipperAdditiveOperator`, which represents additive operators (`+` and `-`).
  - `KipperPlusOperator`, which represents the Kipper plus operator.
  - `KipperMinusOperator`, which represents the Kipper minus operator.
  - `KipperStrLikeTypes`, which represents string-like Kipper types, like `char` and `str`.
- New errors:
  - `UndefinedSemanticsError`, which specifically is thrown whenever the semantics of a token are undefined.
  - `UndefinedIdentifierError`, which is thrown when an identifier is referenced that does not exist.
  - `ArgumentError`, which is thrown whenever there is an error related to invalid arguments inside a function call.
  - `InvalidReturnTypeError`, which is thrown whenever an invalid type is set as return type of a function.
  - `InvalidAmountOfArgumentsError`, which is thrown whenever an invalid amount of arguments is passed to a function.
  - `InvalidArithmeticOperationError`, which is thrown whenever an invalid arithmetic operation is performed.
  - `KipperNotImplementedError`, which is thrown when a feature is used that is not yet implemented in Kipper.
- New constants:
  - `defaultWebBuiltIns` and `defaultNodeBuiltIns`, which provide the default built-in functions for Kipper.
    Kipper will attempt from now on to detect whether the environment is a browser and use `defaultWebBuiltIns` in
    that case and otherwise default to `defaultNodeBuiltIns`.
  - `kipperStorageTypes`, which represents all valid storage types in Kipper.
  - `kipperMultiplicativeOperators`, which represents all valid multiplicative operators in Kipper.
  - `kipperAdditiveOperators`, which represents all valid additive operators in Kipper.
  - `kipperArithmeticOperators`, which combines both `kipperAdditiveOperators` and `kipperMultiplicativeOperators`.
  - `kipperVoidType`, which represents the Kipper void type.
  - `kipperFuncType`, which represents the Kipper func type.
  - `kipperBoolType`, which represents the Kipper bool type.
  - `kipperNumType`, which represents the Kipper num type.
  - `kipperCharType`, which represents the Kipper char type.
  - `kipperStrType`, which represents the Kipper str type.
  - `kipperPlusOperator`, which represents the Kipper plus operator.
  - `kipperMinusOperator`, which represents the Kipper minus operator.
  - `kipperStrLikeTypes`, which represents string-like Kipper types, like `char` and `str`.

### Changed

- Renamed:
  - `getTokenSource` to `getParseRuleSource`, and replaced the original function with `getTokenSource` that only
    fetches the code for a single `Token` instance.
  - `CompilableASTNode.antlrCtx` to `antlrRuleCtx`.
  - `functionIdentifierNotUsed` to `functionIdentifierNotDeclared`.
  - `variableIdentifierNotUsed` to `variableIdentifierNotDeclared`.
  - Field `name` to `identifier` in interface `BuiltInFunctionArgument`.
- Deprecated the following items (Should be removed in `0.8.0`):
  - `variableIsDefined`
  - `functionIsDefined`
  - `UnknownVariableIdentifierError`
  - `UnknownFunctionIdentifierError`

### Removed

- Invalid expression class `ArgumentExpressionListExpression` and its abstract translation function in
  `KipperTargetCodeGenerator`.
- Unneeded function `RootFileParseToken.compileCtx`.

## [0.5.0] - 2022-05-11

### Added

- New field `target` in `CompileConfig`, which defines the compilation target for a Kipper program.
- New field and constructor argument `KipperProgramContext.target`, which defines the compilation target for the
  program.
- New type `TargetTokenSemanticAnalyser`, which represents a function type that semantically analyses a
  `CompilableASTNode`.
- New type `TargetTokenCodeGenerator`, which represents a function type that semantically analyses a
  `CompilableASTNode`.
- Target-specific code generator `KipperTargetCodeGenerator`, which defines the functions that convert the Kipper code
  into a specific target language.
- Target-specific semantic analyser class `KipperTargetSemanticAnalyser`, which can define additional semantic analysis
  logic for a compilation target.
- Class `KipperCompileTarget` which defines the functions and classes for how to handle the translation to a
  specific target.
- Class `TypeScriptTarget`, which defines the default target for Kipper.
- Abstract fields `targetCodeGenerator` and `targetSemanticAnalysis`, which must be defined in child classes of
  abstract base class `CompilableASTNode`.
- New getters `target`, `codeGenerator` and `semanticAnalyser` in class `CompilableASTNode`.
- New protected functions `primarySemanticAnalysis` and `targetSemanticAnalysis`, which are split to separate the
  core/primary semantic analysis and the target specific semantic analysis.
- New types `KipperVoidType`, `KipperNumType`, `KipperStrType`, `KipperCharType`, `KipperBoolType` and `KipperListType`,
  which represent Kipper available types in the Kipper language. core/primary semantic analysis and the target specific
  semantic analysis.
- Assert function `CompileAssert.getExistingFunction()` for fetching a function and throwing an error if it does
  not exist.
- New CLI commands:
  - `version`, which returns the currently installed Kipper version.
  - `update`, which updates the CLI if a new version is available.
- New CLI plugins:
  - Plugin and manual command `update`, which updates the CLI if a new release is available.
  - Plugin `warn-if-update-available`, which will display a warning when the CLI is used that a new version can be
    installed.

### Changed

- Deprecated `@kipper/base` as it is now replaced with `@kipper/core`.
- Fixed `@kipper/cli` bug causing logging messages to only contain "anonymous-script".
- Extracted the content of the `RootFileParseToken.compileCtx` function and added new two functions
  `RootFileParseToken.semanticAnalysis()`, which semantically analysis the code for basic semantics and target-specific
  semantics, and `RootFileParseToken.translate()`, which translates the code into the specific target.
- Made `CompilableASTNode.semanticAnalysis()` and `CompilableASTNode.translateCtxAndChildren()` non-abstract and
  implemented basic processing algorithm to run the code from `CompilableASTNode.targetCodeGenerator` and
  `CompilableASTNode.targetSemanticAnalysis`.
- Changed semantic definitions for `CompilableASTNode` children classes and created for each child class a
  representing semantics class defining the metadata for the token.
- Renamed error `UnknownFunctionIdentifier` to `UnknownFunctionIdentifierError`.
- Renamed function `CompileAssert.assertTypeExists` to `typeExists`.

### Removed

- File `CHANGELOG.md` from `@kipper/cli` and `@kipper/core`, as it is now only shipped with `kipper`.

## [0.4.0] - 2022-05-03

### Added

- New function `KipperLogger.reportError()` for reporting and logging errors.
- New function `KipperAntlrErrorListener.getSourceCode()` for fetching the source code for a syntax error.
- Proper tracebacks handling for `KipperSyntaxError` ([#42](https://github.com/Kipper-Lang/Kipper/issues/42)).
- Getter fields `line`, `col`, `filePath` and `tokenSrc` in `KipperError`, which returns the metadata for the error.
- Fallback option for Lexer errors, where if `offendingSymbol` is `undefined` the entire line of code is set as
  `tokenSrc` ([#36](https://github.com/Kipper-Lang/Kipper/issues/36)).
- Getter field `KipperParseStream.lines` returning all lines in the source file as an array.

### Changed

- Fixed missing traceback line hinting ([#24](https://github.com/Kipper-Lang/Kipper/issues/24)).
- Fixed missing error and fatal error logs ([#34](https://github.com/Kipper-Lang/Kipper/issues/34)).
- Renamed function `CompileAssert.error()` to `CompileAssert.throwError()` and added error logging for the error
  passed as argument.
- Renamed `KipperErrorListener` to `KipperAntlrErrorListener`.
- Renamed `InternalKipperError` to `KipperInternalError`.
- Fixed usage of default antlr4 listeners for lexer errors ([#36](https://github.com/Kipper-Lang/Kipper/issues/36)).

### Removed

- Field `KipperCompiler.errorListener`, as due to ([#42](https://github.com/Kipper-Lang/Kipper/issues/42))
  the `KipperAntlrErrorListener` will have to be initialised per compilation, not per compiler instance.
- Namespace `Utils` and moved its methods into the global scope of the file to allow the following import scheme
  `import * as Utils from "@kipper/core/utils"`, where the user can themselves define the wanted scope identifier.

## [0.3.0] - 2022-04-28

### Added

- Implemented handling of declarations and definitions, where definitions can only appear once. (
  Reassignments are not counted as definitions!)
- Traceback handling using `KipperErorr.getTraceback()` and `KipperError.setMetadata`.
- New namespace `Utils` with new function `getTokenSource()` and `determineScope()`.
- New errors `FunctionDefinitionAlreadyExistsError` and `VariableDefinitionAlreadyExistsError`, which are raised if
  definition rules are violated.
- Project version information constants in `index.ts`.
- Implemented abstract classes to differentiate error groups: `InvalidOverwriteError` and `IdentifierError`.
- `KipperInternalError`, which is raised in case there is an internal error/bug.

### Changed

- Renamed definition errors:
  - `DuplicateVariableDefinitionError` to `IdentifierAlreadyUsedByVariableError`
  - `DuplicateFunctionDefinitionError` to `IdentifierAlreadyUsedByFunctionError`
- Renamed `antlrContext` to `antlrCtx` across all files.
- Changed behaviour of the `assert` system:
  - All assertion will if possible now handled using the expression `KipperProgramContext.assert(ctx).ASSERT_FUNC()`.
  - Assertions should happen in the `semanticAnalysis()` step.
  - Registrations and updates of stack information should also happen in the `semanticAnalysis()` step to properly
    compile top to bottom. (For now there is no support for calling functions that are defined afterwards in the file.
    So a pre-declaration is required!)
- Updated behaviour of `CompilableASTNode` to determine semantics and semantic types using generic classes. This
  means all semantic data is now stored using the get and setter `CompilableASTNode.semanticData`.

### Removed

- Method `CompilableASTNode.compileCtx()` added in `0.2.0`, and split the handling of the semantic analysis and
  compilation into two separate stages. This means that before compilation, all children will be semantically analysed.
  Starting from the bottom/the simplest tokens working upwards as the tokens get more complicated.
- Unneeded private tracking of `_currentScope` in `KipperFileListener`, as the scope handling system has been replaced
  with a dynamic determination using `semanticAnalysis()`.

## [0.2.1] - 2022-04-22

### Added

- Updated kipper-standalone global identifier behaviour and added support for WebWorkers.

## [0.2.0] - 2022-04-13

### Added

- Created new class `CompileAssert`, which is used to assert certain compiler-required truths, which, if false, trigger
  corresponding errors.
- New errors `UnknownVariableDefinition` and `UnknownFunctionDefinition`.
- New getter `CompilableASTNode.tokenStream`, which returns the `programCtx.tokenStream` instance.
- Created new expression class `ArgumentExpressionList` representing an argument list inside function calls.
- New function `KipperCompileResult.write()`, which creates a human-readable string from the generated
  source code.
- Added new property and constructor parameter `logLevel`, which defines which messages should be logged. (Only messages
  with equal or higher importance will be logged).
- Added class name insertion for custom Kipper errors by setting the `name` property explicitly.

### Changed

- Changed execution of most compilation functions to async.
- Replaced `DuplicateIdentifierError` with `DuplicateVariableDefinitionError` and `DuplicateFunctionDefinitionError`.
- Renamed `NoBuiltInOverwriteError` to `BuiltInOverwriteError`.
- Made all `getMetadata` functions `/tokens/` instance-methods, removing all required parameters.
- Changed compilation result from `Array<string>` to `Array<Array<string>>`, where each nested array represents a line
  combined of string tokens.
- Set explicit children type for expressions and statements, instead of letting them inherit the children type from
  `CompilableASTNode`.
- Set return type of `compileCtx` to `Array<string>` in children classes of `Expression`.
  - Changed visibility of `CompilableASTNode.semanticAnalysis()` and `CompilableASTNode.translateCtxAndChildren()`
    to `protected`, as they will be replaced and tied together using `CompilableASTNode.compileCtx()`.
- Replaced compilation in `RootParseToken.translateCtxAndChildren` with `RootParseToken.compileCtx()`.
- Changed values of `LogLevel` to numeric values, which can be translated into strings using `getLogLevelString()`.

### Removed

- Functions `RootParseToken.semanticAnalysis()` and `RootParseToken.translateCtxAndChildren`

## [0.1.2] - 2022-04-06

### Added

- Implemented simple scope logic by adding the `scope` property to all `Statement` classes and creating a tracking
  variable called `_currentScope` in `KipperFileListener`, which will be updated while processing the parse tree.
- Added variable metadata handling in `VariableDeclaration`. The class will now on construction determine its
  identifier, storage type, value type and state (whether it was defined yet) using its antlr4 context instance.
- Added errors `BuiltInOverwriteError`, `UnableToDetermineMetadataError` and `UnknownTypeError`.
- Added new abstract base class `ScopeDeclaration`, which is the parent class for the already existing
  `ScopeDeclaration` and the added `ScopeFunctionDeclaration`.
- Implemented `KipperProgramContext.globalScope`, which contains all global variables and function definitions.
- Implemented support for function definitions that will be from now on automatically registered globally.

### Changed

- Renamed class `ScopeDeclaration` to `ScopeDeclaration` and updated its constructor to require a token
  (`VariableDeclaration` instance), which will automatically set the properties (identifier, storage type, value type,
  scope and state).
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
- General namespace import of `kipper` in `index.ts`, which allows the usage of the entire library.
- `KipperFileContext.translate()`, which walks through the listener and returns the generated code. The generated code
  will be cached inside `KipperFileContext.typescriptCode` to allow reusing code instead of unnecessarily generating
  code again.
- `LogLevel.UNKNOWN` as the default log level for `LogLevel`.
- `KipperLogger.levels` as a static variable to access the enum `LogLevel`.
- New abstract base class `CompilableASTNode`, which will represent the major parse tokens inside a kipper
  program. The token class has the additional functionality of wrapping an entire antlr4 statement, expression or
  block, and being able to semantically analyse it using `semanticAnalysis()` and translate it to TypeScript using
  `compileCtx()`.
- Properties `parser`, `lexer`, `errorHandler` and `tokenStream` inside the class `KipperFileContext`.
- File `builtIns.ts`, which defines the behaviour on how to define built-in items inside a kipper program. This
  primarily includes global functions, which can be represented using the interface `BuiltInFunction`. (In work!)
- Implemented `**` (Power-to) as a valid arithmetic expression.
- Implemented `RuntimeCompileConfig` and `CompileConfig`, which may be passed onto `KipperCompile.compile()` to
  configure the compilation behaviour.
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
  This also means that errors will always be logged _and_ thrown as a catchable error instance.
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

[unreleased]: https://github.com/Kipper-Lang/Kipper/compare/v0.11.0...HEAD
[0.11.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.10.4...v0.11.0
[0.10.4]: https://github.com/Kipper-Lang/Kipper/compare/v0.10.3...v0.10.4
[0.10.3]: https://github.com/Kipper-Lang/Kipper/compare/v0.10.2...v0.10.3
[0.10.2]: https://github.com/Kipper-Lang/Kipper/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/Kipper-Lang/Kipper/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.9.2...v0.10.0
[0.9.2]: https://github.com/Kipper-Lang/Kipper/compare/v0.9.1...v0.9.2
[0.9.1]: https://github.com/Kipper-Lang/Kipper/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.8.3...v0.9.0
[0.8.3]: https://github.com/Kipper-Lang/Kipper/compare/v0.8.2...v0.8.3
[0.8.2]: https://github.com/Kipper-Lang/Kipper/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/Kipper-Lang/Kipper/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.6.1...v0.7.0
[0.6.1]: https://github.com/Kipper-Lang/Kipper/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/Kipper-Lang/Kipper/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/Kipper-Lang/Kipper/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Kipper-Lang/Kipper/compare/v0.0.5...v0.1.1
[0.1.0]: https://github.com/Kipper-Lang/Kipper/compare/v0.0.5...v0.1.1
[0.0.5]: https://github.com/Kipper-Lang/Kipper/compare/v0.0.3...v0.0.5
[0.0.4]: https://github.com/Kipper-Lang/Kipper/compare/v0.0.3...v0.0.5
[0.0.3]: https://github.com/Kipper-Lang/Kipper/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/Kipper-Lang/Kipper/tags/v0.0.2
