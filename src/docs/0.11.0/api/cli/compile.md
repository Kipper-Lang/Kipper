---
title: compile
dropdownTitle: compile
---

# `kipper compile [FILE]`

Compile a Kipper program into the specified target language.

```sh
USAGE
  $ kipper compile [FILE]

ARGUMENTS
  FILE  The file that should be compiled. Takes precedence over the 'string-code' flag and the config file.

OPTIONS
  -b, --[no-]optimise-builtins   Optimise the generated built-in functions using tree-shaking to reduce the size of the
                                 output.

  -d, --[no-]dry-run             Run the compiler without writing any output. Useful for checking for errors.

  -e, --encoding=encoding        The encoding that should be used to read the file (ascii,utf-8,utf8,utf16le).

  -i, --[no-]optimise-internals  Optimise the generated internal functions using tree-shaking to reduce the size of the
                                 output.

  -o, --output-dir=output-dir    The build directory where the compiled files should be placed. If the path does not
                                 exist, it will be created. Takes precedence over the config file, defaults to 'build'
                                 if both are not provided

  -s, --string-code=string-code  The content of a Kipper file that can be passed as a replacement for the 'file'
                                 parameter. Takes precedence over the config file.

  -t, --target=js|ts             The target language where the compiled program should be emitted to.

  -w, --[no-]warnings            Show warnings that were emitted during the compilation.

  --[no-]log-timestamp           Show the timestamp of each log message.

  --[no-]recover                 Recover from compiler errors and log all detected semantic issues.

EXAMPLES
  kipper compile -t js
  kipper compile -t ts -s "print('Hello, World!');"
  kipper compile -t js -e utf8 -o build/ -s "print('Hello, World!');"
  kipper compile -t ts -o build/ -e utf8 -s "print('Hello, World!');"
  kipper compile -t js -o build/ -e utf8 -s "print('Hello, World!');" --warnings
  kipper compile -t ts -o build/ -e utf8 -s "print('Hello, World!');" --warnings --log-timestamp
  kipper compile -t js ./path/to/file.kip
  kipper compile -t ts ./path/to/file.kip -o build/ --log-timestamp
  kipper compile -t js ./path/to/file.kip -o build/ --warnings --log-timestamp
  kipper compile -t ts ./path/to/file.kip -o build/ -e utf16le --warnings --log-timestamp
```

_See code: [src/commands/compile.ts](https://github.com/Kipper-Lang/Kipper/blob/v0.11.0/kipper/cli/src/commands/compile.ts)_
