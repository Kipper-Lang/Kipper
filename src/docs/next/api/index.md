---
title: Overview
dropdownTitle: Kipper API
nav:
  - index.md
  - compiler-setup.md
  - module/
  - cli/
---

# Kipper Compiler API

The Compiler API of Kipper enables you to interact with the primary language compiler, which is the core element
of Kipper that translates your program code into TypeScript or JavaScript, as well as generates the required
overhead for your target environment.

This API is per default shipped with the `@kipper/core` package and the `kipper-standalone.js` file, or wrapped using
flags with the CLI provided by the `@kipper/cli` package.

All available configuration options, functions and classes of the Kipper API will be listed in the subsections of this
part of the docs. Please refer to the detailed subpages for info on the specific details of the API.

<div class="important">
<p>
The API docs are a work-in-progress and will be slowly, but surely realised with the development of Kipper.
Please note though that changes may occur and certain behaviour might change over the course of the development
process.
</p>
</div>

## Overview

The subsections of the Kipper Compiler API documentation:

- [Compiler Setup](./compiler-setup.html)
- [Module API](./module/index.html)
- [CLI API](./cli/index.html)
