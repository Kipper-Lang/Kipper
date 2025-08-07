---
title: Overview
nav:
  - ./index.md
  - ./quickstart.md
  - ./goals-and-roadmap.md
  - ./supported-platforms.md
  - ./usage-examples.md
  - ./api/
  - ./variables.md
  - ./datatypes/
  - ./expressions/
  - ./statements/
  - ./functions.md
  - ./interfaces.md
  - ./classes.md
  - ./comments.md
  - ./built-in-functions.md
---

# Welcome to the Kipper Docs

<% if (docsVersion === 'next') { %>
	<p class="important">
	Viewing experimental features for the <a href="https://www.npmjs.com/package/kipper/v/next"><code>next</code></a> release of Kipper! Features may change or be removed in the future, as well as not being fully implemented yet due to the ongoing development of Kipper.
	</p>
<% } %>

This is the in-depth documentation and API reference for the Kipper programming language and compiler, which aims to
explain the implementation, functionality and details for Kipper.

## Introduction to Kipper

- [Kipper Quickstart](./quickstart.html)
- [Goals & Roadmap](./goals-and-roadmap.html)
- [Supported platforms](./supported-platforms.html)
- [Usage Examples](./usage-examples.html)
- [Kipper Compiler](./compiler.html)

## Kipper Language Reference

- [Variables](./variables.html)
- [Datatypes](./datatypes/index.html)
- [Expressions](./expressions/index.html)
- [Statements](./statements/index.html)
- [Functions](./functions.html)
- [Comments](./comments.html)
- [Built-in Functions](./built-in-functions.html)

<p class="important">
  Not all features shown in the docs are implemented yet. View the
  <a href="<%- roadmapURL %>">Roadmap for Kipper</a>
  for info about the active development of Kipper.
</p>
