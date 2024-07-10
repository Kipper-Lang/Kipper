---
title: run
dropdownTitle: run
---

## `kipper run [FILE]`

Compile and execute a Kipper program.

```sh
USAGE
  $ kipper run [FILE]

ARGUMENTS
  FILE  The file that should be compiled and run.

OPTIONS
  -b, --[no-]optimise-builtins   Optimise the generated built-in functions using tree-shaking to reduce the size of the
                                 output.

  -e, --encoding=encoding        The encoding that should be used to read the file (ascii,utf-8,utf8,utf16le).

  -i, --[no-]optimise-internals  Optimise the generated internal functions using tree-shaking to reduce the size of the
                                 output.

  -o, --output-dir=output-dir    The build directory where the compiled files should be placed. If the path does not
                                 exist, it will be created.

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter.

  -t, --target=js|ts             The target language where the compiled program should be emitted to.

  -w, --[no-]warnings            Show warnings that were emitted during the compilation.

  --[no-]log-timestamp           Show the timestamp of each log message.

  --[no-]recover                 Recover from compiler errors and display all detected compiler errors.

EXAMPLES
  kipper run -t js
  kipper run -t ts -s "print('Hello, World!');"
  kipper run -t js -e utf8 -o build/ -s "print('Hello, World!');"
  kipper run -t ts -o build/ -e utf8 -s "print('Hello, World!');"
  kipper run -t js -o build/ -e utf8 -s "print('Hello, World!');" --warnings
  kipper run -t ts -o build/ -e utf8 -s "print('Hello, World!');" --warnings --log-timestamp
```

_See code: [src/commands/run.ts](https://github.com/Kipper-Lang/Kipper/blob/v0.11.0/kipper/cli/src/commands/run.ts)_
