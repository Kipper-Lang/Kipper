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
})({"7r9Yz":[function(require,module,exports) {
/**
 * Generator for the sidebar navigation for the documentation
 */ const docsFiles = {
    quickstart: {
        file: "quickstart.html",
        title: "Quickstart"
    },
    ourGoals: {
        file: "goals-and-roadmap.html",
        title: "Goals & Roadmap"
    },
    supportedPlatforms: {
        file: "supported-platforms.html",
        title: "Supported platforms"
    },
    usageExamples: {
        file: "usage-examples.html",
        title: "Usage Examples"
    },
    compiler: {
        file: "compiler.html",
        title: "Kipper Compiler"
    },
    variables: {
        file: "variables.html",
        title: "Variables"
    },
    datatypes: {
        file: "datatypes.html",
        title: "Variable Datatypes"
    },
    expression: {
        file: "expressions.html",
        title: "Expressions"
    },
    statements: {
        file: "statements.html",
        title: "Statements"
    },
    decisionMaking: {
        file: "if-statement.html",
        title: "If-Statement"
    },
    whileLoop: {
        file: "while-loop.html",
        title: "While-Loop"
    },
    doWhileLoop: {
        file: "do-while-loop.html",
        title: "Do-While-Loop"
    },
    forLoop: {
        file: "for-loop.html",
        title: "For-Loop"
    },
    functions: {
        file: "functions.html",
        title: "Functions"
    },
    comments: {
        file: "comments.html",
        title: "Comments"
    },
    builtinFunctions: {
        file: "built-in-functions.html",
        title: "Built-in Functions"
    }
};
function GenDocsSidebarNavigation() {
    let headers = "";
    for (const item of Object.values(docsFiles)){
        const pathToInsert = `./${item.file}`;
        const isCurrentFile = item.file === window.location.pathname.split("/").pop();
        headers = headers.concat(`
      <li>
        <p class="sidebar-nav-header ${isCurrentFile ? "selected-page-sidebar-nav-header" : ""}">
          <a href=${pathToInsert}>
            ${item.title}
          </a>
        </p>
      </li>
    `);
    }
    return `<nav id="docs-sidebar-nav">
          <h6 id="nav-kipper-header">
            <a class="docs-page-nav-header" href="./index.html">Kipper Docs</a>
          </h6>
          <ul class="no-style-list flex-column">
            ${headers}
          </ul>
        </nav>`;
}
// writing the content to the innerHtml of the document docs page navigation list
document.getElementById("docs-sidebar-nav-wrapper").innerHTML = GenDocsSidebarNavigation();

},{}]},["7r9Yz"], "7r9Yz", "parcelRequiree125")

//# sourceMappingURL=index.49ea9f72.js.map
