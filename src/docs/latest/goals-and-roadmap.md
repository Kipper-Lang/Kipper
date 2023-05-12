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
