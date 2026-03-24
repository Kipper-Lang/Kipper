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
})({"8JDto":[function(require,module,exports) {
/**
 * Compiler worker responsible for handling the compilation of a Kipper program in a separate thread.
 */ let compilerInitialised = false;
let initFailed = false;
let logger;
let compiler;
/**
 * Evaluates the passed Kipper code using specific handlers.
 * @param code The translated code to evaluate. (Must be in JavaScript)
 */ // prettier-ignore
async function evalKipperCode(code) {
    // Clean up any global scope entries
    // eslint-disable-next-line no-undef
    var __globalScope = typeof __globalScope !== "undefined" ? __globalScope : typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    var __kipper = __globalScope.__kipper = undefined;
    // Overwrite 'console.log'
    const prevLog = console.log;
    console.log = (msg)=>{
        postMessage(String(msg)); // Make sure it's a string so we differentiate between log messages and exit codes
    };
    // Eval the Kipper code
    eval(code);
    // Restore old 'console.log'
    console.log = prevLog;
}
/**
 * Initialises the Kipper Compiler.
 * @param versionToUse The version to use for the Kipper compiler.
 */ async function initCompiler(versionToUse) {
    // Variable to store the info whether the initialisation was successful
    initFailed = true;
    if (!versionToUse.match(/^[~^]?([0-1].(?:[8-9]|([1-9][0-9])).[0-9](?:-(?:alpha|beta|rc).[\dx*]+)?)$/g) && ![
        "latest",
        "next",
        "alpha",
        "beta",
        "rc"
    ].find((v)=>v === versionToUse)) throw new Error(`Invalid version number '${versionToUse}'`);
    // In case we want to use a version bigger than 0.10.0, we need to use the new web package for the Kipper Compiler
    if (versionToUse.match(/^[~^]?[0-1].[1-9][0-9].[0-9](?:-(?:alpha|beta|rc).[\dx*]+)?$/) || [
        "next",
        "alpha",
        "beta",
        "rc"
    ].find((v)=>v === versionToUse)) // eslint-disable-next-line no-undef
    importScripts(`//cdn.jsdelivr.net/npm/@kipper/web@${versionToUse}/kipper-standalone.min.js`);
    else // eslint-disable-next-line no-undef
    importScripts(`//cdn.jsdelivr.net/npm/@kipper/core@${versionToUse}/kipper-standalone.min.js`);
    // Use babel if the version is between 0.8.x-x and 0.9.x-x
    if (versionToUse.match(/^[~^]?([0-1].[8-9].[0-9](?:[-.](?:[\dx*]+|alpha|beta|rc)){0,2})$/g) || versionToUse === "latest") // Import the babel transpiler
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
    logger = new Kipper.KipperLogger(msgHandler);
    // Global compiler
    // @ts-ignore
    // eslint-disable-next-line no-undef
    compiler = new Kipper.KipperCompiler(logger);
    // Set the compiler to initialised
    compilerInitialised = true;
    initFailed = false;
}
// Define the handler for worker messages
onmessage = async function(event) {
    if (initFailed) // If the initialisation already was tried once and we failed, then we can't do anything
    throw new Error("Web Worker thread for the Kipper Compiler encountered fatal error during initialisation");
    else if (!compilerInitialised) {
        await initCompiler(event.data);
        return; // Return here since we don't want to do anything else (this was just the initialisation)
    }
    // Log the message that the compiler has started preparing for the compilation
    console.log("Received compilation request from main thread. Preparing compilation in Worker.");
    // Print version of Kipper
    // @ts-ignore
    // eslint-disable-next-line no-undef
    postMessage(`Kipper Compiler v${Kipper.version}\n`);
    // Compile the code to TypeScript
    let kipperResult;
    let config = {};
    try {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        if (typeof KipperJS === "object" && typeof KipperJS.KipperJavaScriptTarget === "function") // @ts-ignore
        // eslint-disable-next-line no-undef
        config.target = new KipperJS.KipperJavaScriptTarget();
        kipperResult = (await compiler.compile(event.data, config)).write();
    } catch (e) {
        postMessage(1);
        throw e;
    }
    // Evaluate the code
    try {
        let execCode = kipperResult;
        if (!("target" in config)) // Transpile the code from TypeScript to JavaScript (if the Kipper compiler didn't generate JS code already)
        // @ts-ignore
        // eslint-disable-next-line no-undef
        execCode = Babel.transform(kipperResult, {
            filename: "kipper-web-script.ts",
            presets: [
                "env",
                "typescript"
            ]
        }).code;
        console.log("[compile-worker.ts] Generated code:\n", execCode);
        // Switch to console output
        postMessage(0);
        await evalKipperCode(execCode);
    } catch (e) {
        postMessage(`Encountered Runtime error:\n  ${e.name}: ${e.message}`);
        postMessage(`\nIf this is unexpected, please report this bug to the developer on GitHub with your code snippet.`);
        postMessage(1);
        throw e;
    }
    // Return with exit code 0 (Success)
    postMessage(0);
};

},{}]},["8JDto"], "8JDto", "parcelRequiree125")

//# sourceMappingURL=compile-worker.81bc0288.js.map
