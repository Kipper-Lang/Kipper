// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1g48U":[function(require,module,exports) {
// Import the kipper module
// eslint-disable-next-line no-undef
importScripts("//cdn.jsdelivr.net/npm/@kipper/core@latest/kipper-standalone.min.js");
// Import the babel transpiler
// eslint-disable-next-line no-undef
importScripts("//unpkg.com/@babel/standalone/babel.min.js");
// The message handler for the compiler log messages - We don't handle those yet and just log them onto the console
const msgHandler = (level, msg)=>{
    // @ts-ignore
    // eslint-disable-next-line no-undef
    postMessage(`[${Kipper.getLogLevelString(level)}]: ${msg}`);
};
// Global logger for the compiler
// @ts-ignore
// eslint-disable-next-line no-undef
const logger = new Kipper.KipperLogger(msgHandler);
// Global compiler
// @ts-ignore
// eslint-disable-next-line no-undef
const compiler = new Kipper.KipperCompiler(logger);
/**
 * Evaluates the passed Kipper code using specific handlers.
 * @param code The translated code to evaluate. (Must be in JavaScript)
 */ async function evalKipperCode(code) {
    // Overwrite 'console.log'
    const prevLog = console.log;
    console.log = (msg)=>{
        postMessage(msg);
    };
    // Eval the Kipper code
    eval(code);
    // Restore old 'console.log'
    console.log = prevLog;
}
// Define the handler for worker messages
onmessage = async function(event) {
    console.log("Received compilation request from main thread. Preparing compilation in Worker.");
    // Print version of Kipper
    // @ts-ignore
    // eslint-disable-next-line no-undef
    postMessage(`Kipper Compiler v${Kipper.version}\n`);
    // Compile the code to TypeScript
    let result;
    try {
        result = (await compiler.compile(event.data, {
        })).write();
    } catch (e) {
        postMessage(1);
        throw e;
    }
    // Evaluate the code
    try {
        // Transpile the code from TypeScript to JavaScript
        // @ts-ignore
        // eslint-disable-next-line no-undef
        const compiledCode = Babel.transform(result, {
            filename: "kipper-web-script.ts",
            presets: [
                "env",
                "typescript"
            ]
        });
        // Switch to console output
        postMessage(0);
        await evalKipperCode(compiledCode.code);
    } catch (e1) {
        postMessage(`\nEncountered Runtime error:\n  ${e1.name}: ${e1.message}`);
        postMessage(`\nIf this is unexpected, please report this bug to the developer on GitHub with your code snippet.`);
        postMessage(1);
        throw e1;
    }
    // Return with exit code 0 (Success)
    postMessage(0);
};

},{}]},["1g48U"], "1g48U", "parcelRequiree125")

//# sourceMappingURL=compile-worker.e6655ca5.js.map
