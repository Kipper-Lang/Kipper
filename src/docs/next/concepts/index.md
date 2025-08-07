---
title: Overview
dropdownTitle: Concepts
nav:
	- ./index.md
---

This section of the Kipper documentation talks about its core concepts, which are the building blocks of the Kipper
programming language.
It is not vital to understand these concepts or know what the compiler is doing behind the scenes, but it can help you
to understand how Kipper works and how to use it more effectively, as well as justify the design decisions made in the
language as well as its existing features.

Note that this section is still under development, and some concepts may not be fully implemented yet or be subject to
change in the future.

## What Kipper tries to achieve

As mentioned in [Goals for Kipper](../goals-and-roadmap.html), Kipper is a programming language that aims to improve the
modern web development experience by providing safer and more efficient tools for developers, while also being easy to
learn and use. It does not try to be too different from the established designs in JavaScript and TypeScript, but still
removes certain pitfalls and issues that are common in these languages, such as the lack of type safety. It is as such a
fairly opinionated language and may enforce certain design decisions that may not be to everyone's liking, but it is
still a language designed to be flexible and adaptable to different use cases.

## Core Concepts

- [Type Consistency](./type-consistency.html)
- [Runtime Type Casting](./runtime-type-casting.html)
- [Strict Compiler Inspection](./strict-compiler-inspection.html)
- [Integrated Runtime Library](./integrated-runtime-library.html)
