# Goals for Kipper

The goal of Kipper is to provide an easy to learn and type-safe language, which tries to be as straight-forward and
secure as possible with features, such as:

- Full type safety to ensure if possible that all errors occur on compile time, not runtime.
- Runtime types and type checking, which allow variable types to be checked during runtime, if their type can not be
  evaluated during compile time. For example when using `JSON.parse()` and the object type is
  unknown.
- Full translation to/and integration with JavaScript and TypeScript.
- Custom Operator Overload Methods for specifying custom behaviour for specific operators.
  These will be similar to the Python dunder methods.
- Type Conversion Overloading to customise conversion behaviour.
- Runtime errors for invalid operations. No hidden errors like in JavaScript.
- Null safety, by enforcing non-null types unless explicitly allowed.

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

The primary use case and reason for the development of Kipper is the
simplification of the development process for developers, both in the web
and server-side space, by improving on common issues and helping developers
fix them more easily and quickly.

Therefore, this programming language, like TypeScript, aims to provide more
safety and functionality using a compiler and pre-runtime error checking.
This primarily also utilises type checking, as a way to ensure that programs
work as intended and that developers can discover errors before they run their
code.

TypeScript already does a great job at this, so why is Kipper needed or how does
it do things differently? TypeScript is an amazing language, which is why Kipper
has many of its designs and features similarly implemented. Though a big issue
that TypeScript can't detect is and properly resolve is the issue of inconsistent
or incomplete typing. This is a huge issue when working with dynamic data or JavaScript
code, where types are unknown or can't be known before runtime, since due to the
compile time typing of TypeScript type checking often is not able to detect
issues and many will simply bypass error checks altogether. Even with
`instanceof` and `typeof` checks, it becomes a tedious effort that often results
in more errors, due to issues arising while trying to fix the original problems.

Kipper therefore tries to implement a way to easily solve those issues in a
standardised way, by allowing for more complex runtime type checks and runtime
error handling. This means Kipper will still be there to assist the developer
during runtime, by handling many cases where type issues could arise. This also
means functionality like casts or conversions are more strictly handled and don't
overwrite type checking behaviour. Even so though, Kipper will always try to not
be invasive, and developers can choose during development time how to handle
different cases and how Kipper should handle them during runtime.
