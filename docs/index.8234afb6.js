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
})({"3gHlg":[function(require,module,exports) {
/**
 * Main file for every docs page, which implements basic functionality for the interface of the various pages.
 */ // Version selection
const versionSelectorDropdown = document.querySelector("#docs-versions-dropdown");
const versionSelectorButton = document.querySelector("#docs-version-selector-root-button-wrapper button");
const navDirDropdownButtons = document.querySelectorAll("p.sidebar-nav-header-dir-item");
// Docs sidebar navigation
const docsSidebarNav = document.querySelector("#docs-sidebar-nav-wrapper");
// Docs content wrapper
const docsContentWrapper = document.querySelector("#docs-page-content-wrapper");
// Phone menu toggle
const phoneMenuToggle = document.querySelectorAll(".phone-docs-nav-bar-menu-toggle");
/**
 * Disables the visibility of the dropdown menu.
 */ function disableVersionDropdownVisibility() {
    versionSelectorDropdown.style.visibility = "hidden";
    versionSelectorDropdown.style.display = "none";
}
/**
 * Enables the visibility of the dropdown menu.
 */ function enableVersionDropdownVisibility() {
    versionSelectorDropdown.style.visibility = "visible";
    versionSelectorDropdown.style.display = "unset";
}
/**
 * Toggles on or off the dropdown for the version picker.
 */ function toggleVersionDropdownVisibility() {
    const isVisible = versionSelectorDropdown.style.visibility === "visible" && versionSelectorDropdown.style.display !== "none";
    if (isVisible) disableVersionDropdownVisibility();
    else enableVersionDropdownVisibility();
}
/**
 * Handles the click event for a dir dropdown button.
 *
 * This is a toggle function, which will either show or hide the content of the directory.
 * @param dirElement The dir dropdown button element, which has been clicked.
 */ function dropdownButtonHandler(dirElement) {
    const contentOfDir = dirElement.nextElementSibling;
    const caretDown = dirElement.children[0].children[0];
    // Only if the dir has content (i.e. is not empty) we want to toggle the visibility
    if (contentOfDir) {
        let style = window.getComputedStyle(contentOfDir);
        if (style.visibility === "visible") {
            /* Hide dropdown */ contentOfDir.style.visibility = "hidden";
            contentOfDir.style.display = "none";
            caretDown.style.rotate = "-90deg";
            caretDown.style.top = "1px";
        } else {
            /* Show dropdown */ contentOfDir.style.visibility = "visible";
            contentOfDir.style.display = "block";
            caretDown.style.rotate = "0deg";
            caretDown.style.top = "0";
        }
    }
}
/**
 * Returns true if the {@link docsSidebarNav} object is visible.
 */ function sidebarIsVisible() {
    return window.getComputedStyle(docsSidebarNav).visibility === "visible";
}
/**
 * Toggles on or off the visibility of {@link docsSidebarNav} and the
 * {@link docsContentWrapper}. They can't be both visible at the same time.
 */ function toggleVisibilityOfSidebarNav() {
    const isVisible = sidebarIsVisible();
    if (isVisible) {
        // Make the docs sidebar nav invisible
        docsSidebarNav.classList.remove("visible");
        docsSidebarNav.classList.add("invisible");
        // Make the docs content wrapper visible - class for handling the animation
        docsContentWrapper.classList.add("visible");
        docsContentWrapper.classList.remove("invisible");
    } else {
        // Make the docs sidebar nav visible
        docsSidebarNav.classList.add("visible");
        docsSidebarNav.classList.remove("invisible");
        // Make the docs content wrapper invisible - removing the animation class
        docsContentWrapper.classList.add("invisible");
        docsContentWrapper.classList.remove("visible");
    }
}
// Version selector button
versionSelectorButton.addEventListener("click", toggleVersionDropdownVisibility);
// Phone menu toggle
phoneMenuToggle.forEach((e)=>e.addEventListener("click", toggleVisibilityOfSidebarNav));
// Add button handler for each dir dropdown button
navDirDropdownButtons.forEach((button)=>{
    button.addEventListener("click", ()=>dropdownButtonHandler(button));
});
// Ensure on resizing the phone sidebar menu is closed (as it covers the whole screen only on phones)
window.addEventListener("resize", ()=>{
    if (window.innerWidth > 920 && sidebarIsVisible()) {
        // Remove any class specific to the phone sidebar
        docsSidebarNav.classList.remove("visible");
        docsSidebarNav.classList.remove("invisible");
        docsContentWrapper.classList.remove("visible");
        docsContentWrapper.classList.remove("invisible");
    }
});

},{}]},["3gHlg"], "3gHlg", "parcelRequiree125")

//# sourceMappingURL=index.8234afb6.js.map
