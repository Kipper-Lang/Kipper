# Goals for Kipper

The goal of Kipper is to provide an easy to learn and type-safe language, which tries to make type safety as straightforward and
safe as possible, providing features such as:

- JavaScript-like Syntax
- JavaScript Flavor Objects and Arrays
- High-Level Functions
- TypeScript-like Compile Type Checking
- Runtime Type Checking
- Runtime Types and Type Casting
- Compile and Runtime Interfaces
- Standard OOP with classes and inheritance
- Pattern Matching

For more info on the project, go to [Why Kipper?](#why-kipper).

## Roadmap for Kipper

All active changes, issues and development plans are tracked on the following sites on GitHub. If any changes occur
they will be reported there first:

- <a href="<%- roadmapURL %>">Project Roadmap</a>
- <a href="<%- issueTrackerURL %>">Issues Tracker</a>
- <a href="<%- projectPanelURL %>">GitHub Project Panel</a>

## Why Kipper?

_Skip this section, if you are not interested in the details behind Kipper and this
project. It is not required knowledge for using or trying out Kipper._

The primary reason for the development of Kipper is the simplification of the development process for developers, both
in the web and server-side space, by improving on common type and non-type-related issues. Through this, the language
should help developers fix those issues more reliably and quickly.

Therefore, this programming language, like TypeScript, aims to provide more safety and functionality using, among other
things, compile-time error checking and transpilation. This primarily relies on the addition of types and type checking,
as a way to ensure that programs work as intended and that developers can discover errors before they run their code.

TypeScript already does a great job at this, so why is Kipper needed and how does it do things differently? TypeScript is
an amazing language, which is why Kipper has many of its designs and features similarly implemented. A big issue
that TypeScript can't detect and properly resolve is the issue of inconsistent or non-determined typing. This is a
fundamental issue when working with dynamic data or JavaScript code in TypeScript, where types are unknown or can't be
known before runtime. TypeScript is unable to work with this code appropriately and requires the user to make
assumptions about its types at compile-time. This leads to many issues where the compiler is unable to check for many
potential issues and is often largely turned off, as the developers themselves are required to decide what is correct
and often make serious mistakes in the process, causing code to become unpredictable and error-prone during execution.
Even with runtime-bound `instanceof` and `typeof` checks, it becomes a tedious effort that often results in more errors,
due to issues arising while trying to fix the original problems.

Kipper therefore tries to implement a standardised way to easily solve those issues, by providing consistent compile- and
runtime types, type checks, and error handling. This means the compiler will be there to assist the developer both during
compile time and runtime, extending its capabilities of ensuring code is secure and providing methods for developers to handle
them in a consistent and easy-to-understand way. This also means functionality like casts or conversions is more
strictly handled and doesn't overwrite type-checking behaviour. Even so, Kipper will always try not to be invasive,
and developers can choose during development time how to handle different cases and how Kipper should handle them during
runtime.

Using this approach, Kipper will add many features developers know from other languages, such as:
- Runtime Casting
- Runtime Type Casting
- Pattern Matching
- Consistent Typing and Compile Time Cast Checks
- Custom Runtime Types

Beyond this, there is a whole paper illustrating the design, implementation and reasons behind Kipper, which can be found
at <a href="<%- designPaperURL %>">"Kipper - Programming Language for Improved Runtime Type-Safety"</a> (written in English,
with additional German oath and abstract).
