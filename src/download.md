<!--
This is the raw Markdown code, which will be represented as Markdown on the website.
As this is not in the docs, it does not have the same build process, but will still use Markdown for ease of use.
-->

## Overview

- [Installing the NPM module](#installing-the-npm-module)
- [Including the Web bundle](#including-the-web-bundle)
- [Download Source Code](#download-source-code)

## Installing the NPM module

### Trying out Kipper

For simply trying out Kipper the following command can be used, which will globally install Kipper and the Kipper CLI,
making Kipper available to the entire Node.js installation and your operating system (This also means you can call
`kipper` from any terminal in any directory on your system):

```bash
npm install -g @kipper/cli
```

### Add Kipper to your project

If you intend to use Kipper in a Node project, you can also install it locally in the project directory:

```bash
npm install @kipper/cli
```

This is preferred for projects, where version-specific features are used and the version is locked.

To add Kipper to your permanent project dependencies use `--save` or `--save-dev` to add it to the development
dependencies:

```bash
npm install @kipper/cli --save/--save-dev
```

Replace `@kipper/cli` with `@kipper/core` if you want the core Kipper Compiler and API for Node.js.

### Check Compiler installation

To check whether the Kipper compiler has been properly installed, run the following command in your project's working
directory (where it has been set up) or if you have it installed globally, anywhere:

```bash
kipper --version
```

If the output shows something like the following output (version, operating system and nodejs version might be different),
your kipper installation should be set up and ready to use!

```bash
kipper/0.8.1 win32-x64 node-v16.13.0
```

<div class="red-highlight-text">
  <h3>Important</h3>
  <p>
  On some systems the CLI identifier <code>kipper</code> may not work and as such as a replacement <code>npx</code>
  should be used. For example:
  </p>
  <pre><code class="language-bash">npx kipper</code></pre>
  <p>For yarn, you can also use:</p>
  <pre><code class="language-bash">yarn kipper</code></pre>
</div>

## Including the Web bundle

If you want to use Kipper inside your browser, then you can include the browser-standalone version of Kipper into
your HTML file with the following script tag:

```html
<script src="https://cdn.jsdelivr.net/npm/@kipper/web@latest/kipper-standalone.min.js"></script>
```

This will globally register the identifier `Kipper`, which can then be used to access the Kipper package. For more
info go on how to get started with Kipper in the web to the section
[Running the Compiler in an HTML file](./docs/quickstart.html#running-the-compiler-in-an-html-file) in the
Quickstart guide.

<div class="red-highlight-text">
  <h3>Important Version Info</h3>
  <p>
  Using Kipper v0.9.x, the standalone web version requires Babel as a dependency, as it does not itself yet implement
  direct Kipper-to-JavaScript compilations, but only Kipper-to-TypeScript.
  </p>
  <p>
  Additionally the package <code>@kipper/core</code> will be used instead of <code>@kipper/web</code>, as the web
  package has only been introduced since v0.10.0. As such, use the following script import instead:
  </p>
  <pre><code class="language-html">&lt;!-- Babel dependency --&gt;
&lt;script src="https://unpkg.com/@babel/standalone/babel.min.js"&gt;&lt;/script&gt;

&lt;!-- Kipper --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/@kipper/core@0.9.2/kipper-standalone.min.js"&gt;&lt;/script&gt;</code></pre>
  <p>
  This was changed with the release of
  <a href="https://github.com/Luna-Klatzer/Kipper/releases/tag/v0.10.0">v0.10.0</a>,
  which releases the JavaScript target for the Kipper compiler.
  </p>
</div>

## Download Source Code

To download the latest stable source code of Kipper, download the compressed package as a `zip` or `tar.gz` with the links below:

- [GitHub Source Code (zip)](https://github.com/Luna-Klatzer/Kipper/zipball/main/)
- [GitHub Source Code (tar.gz)](https://github.com/Luna-Klatzer/Kipper/tarball/main/)
