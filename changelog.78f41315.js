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
})({"f0ywd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "capitalizeFirstLetter", ()=>capitalizeFirstLetter
);
parcelHelpers.export(exports, "setSearchVisibility", ()=>setSearchVisibility
);
parcelHelpers.export(exports, "search", ()=>search
);
parcelHelpers.export(exports, "loadSearch", ()=>loadSearch
);
var _searchIndex = require("./search-index");
var _main = require("./main");
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function setSearchVisibility(visible) {
    document.getElementById("search-result").style.visibility = visible ? "visible" : "hidden";
    document.getElementById("search-result-overlay").style.visibility = visible ? "visible" : "hidden";
}
async function search() {
    const overlaySearch = document.getElementById("search-result-overlay");
    const searchResult = document.getElementById("search-result");
    const searchBarInput = document.getElementById("search-bar-input");
    const searchBar = document.getElementById("search-bar");
    // Initialise basic interface
    setSearchVisibility(true);
    // Get the search text
    const searchInput = searchBarInput.value.toLowerCase();
    if (searchInput) {
        const pageResults = (()=>{
            const results = [];
            for (const page of _searchIndex.searchIndex){
                const title = page.pageTitle.toLowerCase();
                const description = page.pageDescription.toLowerCase();
                // If the title or the description includes the string that was searched for, add it to the list
                if (title.includes(searchInput) || description.includes(searchInput)) results.push(page);
            }
            console.log(results);
            return results;
        })();
        if (pageResults.length > 0) {
            let resultsHTML = "";
            for (const result of pageResults){
                // @ts-ignore
                const link = _main.isDocsFile ? `..${result.uriPath}` : `.${result.uriPath}`;
                const pageDescription = result.pageDescription;
                const pageTitle = capitalizeFirstLetter(result.pageTitle);
                // Positive Result at Search
                console.log("The Search found: " + link + " for your request! (" + searchInput + ")");
                resultsHTML += `<div><p><a href="${link}">${pageTitle}</a></p><small>${pageDescription}</small></div>`;
            }
            searchResult.innerHTML = resultsHTML;
        } else // Negative Result at Search
        searchResult.innerHTML = "<div><p>Sorry, we couldn't find anything for your search!</p></div>";
    } else searchResult.innerHTML = "<div><p>Type to search...</p></div>";
    // Set position of the search result box
    const searchBarRect = searchBar.parentElement.getBoundingClientRect();
    overlaySearch.style.left = `${searchBarRect.left}px`;
    overlaySearch.style.top = `${searchBarRect.top + searchBarRect.height}px`;
    overlaySearch.style.width = `${searchBarRect.width}px`;
}
async function loadSearch() {
    // Verify that the index is complete
    if (_searchIndex.searchIndex === []) {
        console.error("Critical Error: Index for the search failed to load! Searching is disabled.");
        document.getElementById("search-bar").style.visibility = "hidden";
    } else console.log("Index initialised!");
    // Add event listener
    document.getElementById("search-bar-input").addEventListener("keyup", search);
    document.getElementById("search-bar-input").addEventListener("focus", search);
    console.log("Search loaded!");
}
// Load search when the DOM finished loading
window.addEventListener("DOMContentLoaded", loadSearch);
// If the user clicks outside the search, remove search
document.addEventListener("click", (e)=>{
    if (!document.getElementById("search-result-overlay").contains(e.target) && !document.getElementById("search-bar").contains(e.target)) setSearchVisibility(false);
});
document.addEventListener("scroll", ()=>{
    setSearchVisibility(false);
});

},{"./search-index":"5XOYW","./main":"2mZi0","@parcel/transformer-js/src/esmodule-helpers.js":"8FjkE"}],"5XOYW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rawSearchIndex", ()=>rawSearchIndex
);
parcelHelpers.export(exports, "searchIndex", ()=>searchIndex
);
const rawSearchIndex = [
    "Quickstart;/docs/quickstart.html;Quickstart;The quickstart guide for Kipper.",
    "Goals & Roadmap;/docs/goals-and-roadmap.html;Goals & Roadmap;Goals & Roadmap for Kipper.",
    "Supported Platforms;/docs/supported-platforms.html;Supported Platforms;Supported platforms for Kipper.",
    "Usage Examples;/docs/usage-examples.html;Usage;Usage examples for the Kipper language.",
    "Variables;/docs/variables.html;Variables;Kipper variables for storing and reusing data.",
    "Variable Datatypes;/docs/datatypes.html;Variable Datatypes;Variable datatypes in the Kipper language.",
    "Expressions;/docs/expressions.html;Expressions;Expressions, which can perform various operations and evaluate to a new value.",
    "Statements;/docs/statements.html;Statements;Kipper Statements, which are standalone units of execution able to perform various tasks.",
    "If-Statement;/docs/if-statement.html;If-Statement;Decision making using if, else-if and else statements.",
    "While-Loop;/docs/while-loop.html;While-Loop;While-loop statements, which allow for the repeated execution of code.",
    "Do-While-Loop;/docs/do-while-loop.html;Do-While-Loop;Do-While-loop statements, which allow for the repeated execution of code.",
    "For-Loop;/docs/for-loop.html;For-Loop;For-loop statements, which allow for the repeated execution of code.",
    "Functions;/docs/functions.html;Functions;Kipper Functions, which allow for the repeated execution of code using arguments.",
    "Built-in Functions;/docs/built-in-functions.html;Built-In Functions;Built-in Kipper Functions, which are available in every program per default.",
    "Playground;/playground.html;Playground;Online Playground for using Kipper in your browser.",
    "Docs;/docs/index.html;Documentation;Kipper Documentation and API Reference.",
    "Changelog;/changelog.html;Changelog;Detailed Changelog documenting changes in Kipper.",
    "Downloads;/download.html;Downloads;Downloads.",
    "Comments;/docs/comments.html;Comments;Comments in the Kipper language.", 
];
const searchIndex = rawSearchIndex.map((index)=>{
    const lineContent = index.split(";");
    return {
        keyword: lineContent[0],
        uriPath: lineContent[1],
        pageTitle: lineContent[2],
        pageDescription: lineContent[3]
    };
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FjkE"}],"8FjkE":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2mZi0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "path", ()=>path
);
parcelHelpers.export(exports, "isDocsFile", ()=>isDocsFile
);
parcelHelpers.export(exports, "isNestedDir", ()=>isNestedDir
);
parcelHelpers.export(exports, "documentTitle", ()=>documentTitle
);
parcelHelpers.export(exports, "documentDescription", ()=>documentDescription
);
const path = window.location.pathname;
const isDocsFile = ((array)=>{
    return array[array.length - 2] == "docs";
})(path.split("/"));
const isNestedDir = isDocsFile;
const documentTitle = document.title;
const documentDescription = document.querySelector('meta[name="description"]').getAttribute("content");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8FjkE"}]},["f0ywd"], "f0ywd", "parcelRequiree125")

//# sourceMappingURL=changelog.78f41315.js.map
