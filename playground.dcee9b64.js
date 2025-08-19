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
})({"9bt33":[function(require,module,exports) {
/**
 * Main file for the playground, which implements the compilation and online editor behaviour.
 */ // Editor elements
// Initialize the editor, console and runner
var _editor = require("./editor");
var _console = require("./console");
var _runner = require("./runner");
const interactiveCodeEditor = document.querySelector("#interactive-code-editor");
const playgroundOptionMenu = document.querySelector("#playground-option-menu");
const codeEditor = document.querySelector("#code-editor");
const codeTextArea = document.querySelector("#code-editor-textarea");
const codeTextAreaHighlightField = document.querySelector("#code-editor-highlighting-field");
// Sidebar editor fields
const shellOutput = document.querySelector("#shell-output");
const shellOutputResult = document.querySelector("#shell-sidebar-highlight-field-content");
// Size of a rem unit in pixels
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
/**
 * Gets the width of the scrollbar in the current browser.
 */ function getScrollBarWidth() {
    let el = document.createElement("div");
    // Make it overflow and add it to the body
    el.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
    document.body.appendChild(el);
    // Calculate the width of the scrollbar (may be 0 in some browsers or on phones)
    let width = el.offsetWidth - el.clientWidth;
    el.remove();
    return width;
}
/**
 * Fixes the sizes of the code editor and the console output.
 * @param outputData If true, will output the global rem size and the metadata of the individual playground DOM elements
 * to the console.
 */ function setEditorAndConsoleSizes(outputData = false) {
    const mediumScreenSize = Number(getComputedStyle(codeTextAreaHighlightField).getPropertyValue("--medium-screen-size").replace("px", ""));
    // Get the width of the scrollbar - this is sometimes needed to offset the size of the scrollbar
    const scrollBarWidth = getScrollBarWidth();
    // Set the height of the code editor
    codeEditor.style.height = `${interactiveCodeEditor.offsetHeight - playgroundOptionMenu.offsetHeight}px`;
    if (window.innerWidth <= mediumScreenSize) {
        // -- Small screen configuration --
        // Set editor size
        // - Subtract 2rem for the height due to an inner padding of 1rem
        // - Unset the width as it will automatically fill up the available space
        codeTextAreaHighlightField.style.height = `${codeEditor.offsetHeight - 2 * rem}px`;
        codeTextAreaHighlightField.style.width = undefined;
        codeTextArea.style.height = `${codeEditor.offsetHeight - 2 * rem}px`;
        codeTextArea.style.width = undefined;
        // Set console size
        // - Subtract 2rem for the height due to an inner padding of 1rem
        shellOutputResult.style.height = `${shellOutput.offsetHeight - 2 * rem}px`;
        shellOutputResult.style.width = undefined;
    } else {
        // -- Large screen configuration --
        // Set editor size
        // - Subtract 2rem for the height due to an inner padding of 1rem
        // - Subtract 4rem for the width due to an inner padding of 3rem + 1rem
        codeTextAreaHighlightField.style.height = `${codeEditor.offsetHeight - 2 * rem + scrollBarWidth}px`;
        codeTextAreaHighlightField.style.width = `${codeEditor.offsetWidth - 4 * rem}px`;
        codeTextArea.style.height = `${codeEditor.offsetHeight - 2 * rem + scrollBarWidth}px`;
        codeTextArea.style.width = `${codeEditor.offsetWidth - 4 * rem}px`;
        // Set console size
        // - Subtracts 2rem due to an inner padding of 1rem
        shellOutputResult.style.height = `${shellOutput.offsetHeight - 2 * rem}px`;
        shellOutputResult.style.width = `${shellOutput.offsetWidth - 2 * rem - scrollBarWidth}px`;
    }
    if (outputData) {
        console.log(`REM: ${rem}`);
        console.log(`Code Editor: ${codeEditor.offsetWidth}x${codeEditor.offsetHeight}`);
        console.log(`Code Editor Textarea: ${codeTextArea.offsetWidth}x${codeTextArea.offsetHeight}`);
        console.log(`Code Editor Highlight Field: ${codeTextAreaHighlightField.offsetWidth}x${codeTextAreaHighlightField.offsetHeight}`);
        console.log(`Shell Output: ${shellOutput.offsetWidth}x${shellOutput.offsetHeight}`);
        console.log(`Shell Output Result: ${shellOutputResult.offsetWidth}x${shellOutputResult.offsetHeight}`);
    }
}
// Properly configure the sizes of the items in the browser window. This should set every item relative to the maximum
// possible space available.
window.addEventListener("DOMContentLoaded", async ()=>{
    await setEditorAndConsoleSizes();
    // After the initial setup, call the function again to let the DOM in the meantime update (allows for all final
    // sizes to be taken into account - Not the cleanest solution, but it works)
    setTimeout(()=>setEditorAndConsoleSizes(true), 10);
});
window.addEventListener("resize", ()=>setEditorAndConsoleSizes());
window.addEventListener("DOMContentLoaded", ()=>{
    (0, _editor.init)();
    (0, _console.init)();
    (0, _runner.init)();
});

},{"./editor":"iSH0Y","./console":"acLSX","./runner":"iMIih"}],"iSH0Y":[function(require,module,exports) {
/**
 * Script for managing the code editor in the playground.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Writes the given text to the text saving state.
 * @param text The text to write.
 */ parcelHelpers.export(exports, "writeTextSavingState", ()=>writeTextSavingState);
/**
 * Switches the interaction button to 'Run', so a new program can be started again.
 */ parcelHelpers.export(exports, "switchButtonToRun", ()=>switchButtonToRun);
/**
 * Clears the content of the code editor.
 */ parcelHelpers.export(exports, "clearEditorContent", ()=>clearEditorContent);
/**
 * Copies the code from the code editor.
 */ parcelHelpers.export(exports, "copyEditorContent", ()=>copyEditorContent);
/**
 * Editor-Update, which allows for syntax highlighting
 * @param value The value the element was updated to
 */ parcelHelpers.export(exports, "writeEditorResultAndHighlight", ()=>writeEditorResultAndHighlight);
/**
 * Checks whether the input key is a 'tab' and handles it appropriately for the code editor input.
 * @param event The key event.
 */ parcelHelpers.export(exports, "checkForTab", ()=>checkForTab);
/**
 * Syncs the scrolling for both <textarea> and codeInputResult.
 */ parcelHelpers.export(exports, "syncTextAreaSizeAndScroll", ()=>syncTextAreaSizeAndScroll);
/**
 * Initializes the event listeners for this script.
 */ parcelHelpers.export(exports, "init", ()=>init);
var _prismCoreJs = require("../../prism/prism-core.js");
var _runner = require("./runner");
var _tools = require("./tools");
const localStorageIdentifier = "kipper-code-editor-content";
// Editor elements
const codeTextArea = document.querySelector("#code-editor-textarea");
const codeTextAreaResultWrapper = document.querySelector("#code-editor-highlighting-field");
const codeTextAreaResult = document.querySelector("#code-editor-highlighting-field-content");
const textSavingState = document.querySelector("#text-saving-state");
const phoneTextSavingState = document.querySelector("#phone-text-saving-state");
// Menu buttons
let runCodeButton = document.querySelector("#run-code-list-item button");
const runCodeListItem = document.querySelector("#run-code-list-item");
const copyCodeButton = document.querySelector("#copy-code-list-item button");
const clearContentButton = document.querySelector("#clear-content-list-item button");
let disappear;
async function writeTextSavingState(text) {
    phoneTextSavingState.classList.remove("fade-out");
    textSavingState.innerHTML = text;
    phoneTextSavingState.innerHTML = text;
    if (disappear) clearTimeout(disappear);
    disappear = setTimeout(()=>phoneTextSavingState.classList.add("fade-out"), 10000);
}
function switchButtonToRun() {
    runCodeListItem.innerHTML = `<button>${window.locale["values"]["playground"]["buttons"]["run"]}</button>`;
    runCodeButton = document.querySelector("#run-code-list-item button");
    runCodeButton.addEventListener("click", (0, _runner.runCode));
}
function clearEditorContent() {
    console.log("Code Cleared!");
    codeTextArea.value = "";
    codeTextAreaResult.innerHTML = "";
    localStorage.setItem(localStorageIdentifier, "");
    writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["actions"]["cleared"]}</p>`);
}
function copyEditorContent() {
    console.log("Code Copied!");
    navigator.clipboard.writeText(codeTextArea.value).then(()=>{
        writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["actions"]["copied"]}</p>`);
    });
}
function writeEditorResultAndHighlight(value) {
    // If the last character is a newline character
    // Add a placeholder space character to the final line
    if (value[value.length - 1] == "\n") value += " ";
    // Write results to the original 'codeInput' <textarea> and syntax-highlighted result
    codeTextAreaResult.innerHTML = (0, _tools.escapeHTMLChars)(value);
    // Highlight output field
    _prismCoreJs.highlightElement(codeTextAreaResult);
    // Sync formatting
    syncTextAreaSizeAndScroll();
}
function checkForTab(event) {
    const element = codeTextArea;
    const code = element.value;
    if (event.key === "Tab") {
        event.preventDefault();
        // If the shift key is also pressed, push tabs back
        if (event.shiftKey) {
            const beforeTab = code.slice(0, element.selectionStart);
            const afterTab = code.slice(element.selectionEnd, element.value.length);
            // Remove tab char or whitespace if it exists
            if (beforeTab[beforeTab.length - 1] === "	" || beforeTab[beforeTab.length - 1] === " ") {
                const moveBack = beforeTab.slice(-2, beforeTab.length) === "  " ? 2 : 1;
                // where cursor moves after tab - moving forward by 1 char to after tab
                const cursorPos = element.selectionStart > 0 ? element.selectionStart - moveBack : 0;
                element.value = beforeTab.slice(0, beforeTab.length - moveBack) + afterTab;
                // Move cursor
                element.selectionStart = cursorPos;
                element.selectionEnd = cursorPos;
            }
        } else {
            const beforeTab = code.slice(0, element.selectionStart);
            const afterTab = code.slice(element.selectionEnd, element.value.length);
            // where cursor moves after tab - moving forward by 1 char to after tab
            const cursorPos = element.selectionEnd + 1;
            // Add tab char
            element.value = beforeTab + "	" + afterTab;
            // Move cursor
            element.selectionStart = cursorPos;
            element.selectionEnd = cursorPos;
        }
        writeEditorResultAndHighlight(element.value);
    }
}
function syncTextAreaSizeAndScroll() {
    /* Scroll result to scroll coords of event - sync with textarea */ // Get and set x and y
    codeTextAreaResultWrapper.scrollTop = codeTextArea.scrollTop;
    codeTextAreaResultWrapper.scrollLeft = codeTextArea.scrollLeft;
}
function init() {
    // Playground menu buttons handling
    runCodeButton.addEventListener("click", (0, _runner.runCode));
    copyCodeButton.addEventListener("click", copyEditorContent);
    clearContentButton.addEventListener("click", clearEditorContent);
    // Highlight new input
    codeTextArea.addEventListener("input", (event)=>{
        const givenTextArea = event.target;
        writeEditorResultAndHighlight(givenTextArea.value);
    });
    // Ensure the code text area stays properly formatted
    codeTextArea.addEventListener("scroll", syncTextAreaSizeAndScroll);
    codeTextArea.addEventListener("keydown", checkForTab);
    // Spinner animation & saving text
    let cancel;
    let spinning;
    codeTextArea.addEventListener("keydown", async (event)=>{
        // if cancel exists / is active -> clear timeout
        if (cancel) clearTimeout(cancel);
        // creating the new timeout and assigning it, if the user types more
        // the timeout will be cancelled and restarted, so that the caching is
        // only done when the user finished typing!
        cancel = setTimeout(async ()=>{
            const givenTextArea = event.target;
            localStorage.setItem(localStorageIdentifier, givenTextArea.value);
            spinning = false;
            await writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["save-state"]["saved"]}</p>`);
        }, 1000);
        if (!spinning) {
            await writeTextSavingState(`<div id="text-save-spinner" class="spinner">
        <!-- This may look stupid, but don't delete it -->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p class="gray-text">${window.locale["values"]["playground"]["save-state"]["saving"]}</p>
      `);
            spinning = true;
        }
    }, {
        once: false
    });
    // Initialize the code input of the editor of the page
    // Restore the code if there has been a previous session
    const localStorageCodeInput = localStorage.getItem(localStorageIdentifier);
    if (localStorageCodeInput != undefined) {
        codeTextArea.value = localStorageCodeInput;
        writeEditorResultAndHighlight(localStorageCodeInput);
    } else codeTextArea.value = "";
    // If the input is not empty, signalize that code was restored
    if (codeTextArea.value.trim() !== "") writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["save-state"]["loaded"]}</p>`);
}

},{"../../prism/prism-core.js":"kUkoQ","./runner":"iMIih","./tools":"4QP8C","@parcel/transformer-js/src/esmodule-helpers.js":"dCOmu"}],"kUkoQ":[function(require,module,exports) {
/* PrismJS 1.28.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+http+json+json5+markdown+python+typescript+typoscript+wasm&plugins=line-numbers+show-language+highlight-keywords+toolbar+copy-to-clipboard+download-button */ var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function(e) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t = 0, r = {}, a = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
            encode: function e(n) {
                return n instanceof i ? new i(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            },
            type: function(e) {
                return Object.prototype.toString.call(e).slice(8, -1);
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++t
                }), e.__id;
            },
            clone: function e(n, t) {
                var r, i;
                switch(t = t || {}, a.util.type(n)){
                    case "Object":
                        if (i = a.util.objId(n), t[i]) return t[i];
                        for(var l in r = {}, t[i] = r, n)n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                        return r;
                    case "Array":
                        return i = a.util.objId(n), t[i] ? t[i] : (r = [], t[i] = r, n.forEach(function(n, a) {
                            r[a] = e(n, t);
                        }), r);
                    default:
                        return n;
                }
            },
            getLanguage: function(e) {
                for(; e;){
                    var t = n.exec(e.className);
                    if (t) return t[1].toLowerCase();
                    e = e.parentElement;
                }
                return "none";
            },
            setLanguage: function(e, t) {
                e.className = e.className.replace(RegExp(n, "gi"), ""), e.classList.add("language-" + t);
            },
            currentScript: function() {
                if ("undefined" == typeof document) return null;
                if ("currentScript" in document) return document.currentScript;
                try {
                    throw new Error();
                } catch (r) {
                    var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                    if (e) {
                        var n = document.getElementsByTagName("script");
                        for(var t in n)if (n[t].src == e) return n[t];
                    }
                    return null;
                }
            },
            isActive: function(e, n, t) {
                for(var r = "no-" + n; e;){
                    var a = e.classList;
                    if (a.contains(n)) return !0;
                    if (a.contains(r)) return !1;
                    e = e.parentElement;
                }
                return !!t;
            }
        },
        languages: {
            plain: r,
            plaintext: r,
            text: r,
            txt: r,
            extend: function(e, n) {
                var t = a.util.clone(a.languages[e]);
                for(var r in n)t[r] = n[r];
                return t;
            },
            insertBefore: function(e, n, t, r) {
                var i = (r = r || a.languages)[e], l = {};
                for(var o in i)if (i.hasOwnProperty(o)) {
                    if (o == n) for(var s in t)t.hasOwnProperty(s) && (l[s] = t[s]);
                    t.hasOwnProperty(o) || (l[o] = i[o]);
                }
                var u = r[e];
                return r[e] = l, a.languages.DFS(a.languages, function(n, t) {
                    t === u && n != e && (this[n] = l);
                }), l;
            },
            DFS: function e(n, t, r, i) {
                i = i || {};
                var l = a.util.objId;
                for(var o in n)if (n.hasOwnProperty(o)) {
                    t.call(n, o, n[o], r || o);
                    var s = n[o], u = a.util.type(s);
                    "Object" !== u || i[l(s)] ? "Array" !== u || i[l(s)] || (i[l(s)] = !0, e(s, t, o, i)) : (i[l(s)] = !0, e(s, t, null, i));
                }
            }
        },
        plugins: {},
        highlightAll: function(e, n) {
            a.highlightAllUnder(document, e, n);
        },
        highlightAllUnder: function(e, n, t) {
            var r = {
                callback: t,
                container: e,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r);
            for(var i, l = 0; i = r.elements[l++];)a.highlightElement(i, !0 === n, r.callback);
        },
        highlightElement: function(n, t, r) {
            var i = a.util.getLanguage(n), l = a.languages[i];
            a.util.setLanguage(n, i);
            var o = n.parentElement;
            o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
            var s = {
                element: n,
                language: i,
                grammar: l,
                code: n.textContent
            };
            function u(e) {
                s.highlightedCode = e, a.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, a.hooks.run("after-highlight", s), a.hooks.run("complete", s), r && r.call(s.element);
            }
            if (a.hooks.run("before-sanity-check", s), (o = s.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !s.code) return a.hooks.run("complete", s), void (r && r.call(s.element));
            if (a.hooks.run("before-highlight", s), s.grammar) {
                if (t && e.Worker) {
                    var c = new Worker(a.filename);
                    c.onmessage = function(e) {
                        u(e.data);
                    }, c.postMessage(JSON.stringify({
                        language: s.language,
                        code: s.code,
                        immediateClose: !0
                    }));
                } else u(a.highlight(s.code, s.grammar, s.language));
            } else u(a.util.encode(s.code));
        },
        highlight: function(e, n, t) {
            var r = {
                code: e,
                grammar: n,
                language: t
            };
            if (a.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.');
            return r.tokens = a.tokenize(r.code, r.grammar), a.hooks.run("after-tokenize", r), i.stringify(a.util.encode(r.tokens), r.language);
        },
        tokenize: function(e, n) {
            var t = n.rest;
            if (t) {
                for(var r in t)n[r] = t[r];
                delete n.rest;
            }
            var a = new s();
            return u(a, a.head, e), o(e, a, n, a.head, 0), function(e) {
                for(var n = [], t = e.head.next; t !== e.tail;)n.push(t.value), t = t.next;
                return n;
            }(a);
        },
        hooks: {
            all: {},
            add: function(e, n) {
                var t = a.hooks.all;
                t[e] = t[e] || [], t[e].push(n);
            },
            run: function(e, n) {
                var t = a.hooks.all[e];
                if (t && t.length) for(var r, i = 0; r = t[i++];)r(n);
            }
        },
        Token: i
    };
    function i(e, n, t, r) {
        this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length;
    }
    function l(e, n, t, r) {
        e.lastIndex = n;
        var a = e.exec(t);
        if (a && r && a[1]) {
            var i = a[1].length;
            a.index += i, a[0] = a[0].slice(i);
        }
        return a;
    }
    function o(e, n, t, r, s, g) {
        for(var f in t)if (t.hasOwnProperty(f) && t[f]) {
            var h = t[f];
            h = Array.isArray(h) ? h : [
                h
            ];
            for(var d = 0; d < h.length; ++d){
                if (g && g.cause == f + "," + d) return;
                var v = h[d], p = v.inside, m = !!v.lookbehind, y = !!v.greedy, k = v.alias;
                if (y && !v.pattern.global) {
                    var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                    v.pattern = RegExp(v.pattern.source, x + "g");
                }
                for(var b = v.pattern || v, w = r.next, A = s; w !== n.tail && !(g && A >= g.reach); A += w.value.length, w = w.next){
                    var E = w.value;
                    if (n.length > e.length) return;
                    if (!(E instanceof i)) {
                        var P, L = 1;
                        if (y) {
                            if (!(P = l(b, A, e, m)) || P.index >= e.length) break;
                            var S = P.index, O = P.index + P[0].length, j = A;
                            for(j += w.value.length; S >= j;)j += (w = w.next).value.length;
                            if (A = j -= w.value.length, w.value instanceof i) continue;
                            for(var C = w; C !== n.tail && (j < O || "string" == typeof C.value); C = C.next)L++, j += C.value.length;
                            L--, E = e.slice(A, j), P.index -= A;
                        } else if (!(P = l(b, 0, E, m))) continue;
                        S = P.index;
                        var N = P[0], _ = E.slice(0, S), M = E.slice(S + N.length), W = A + E.length;
                        g && W > g.reach && (g.reach = W);
                        var z = w.prev;
                        if (_ && (z = u(n, z, _), A += _.length), c(n, z, L), w = u(n, z, new i(f, p ? a.tokenize(N, p) : N, k, N)), M && u(n, w, M), L > 1) {
                            var I = {
                                cause: f + "," + d,
                                reach: W
                            };
                            o(e, n, t, w.prev, A, I), g && I.reach > g.reach && (g.reach = I.reach);
                        }
                    }
                }
            }
        }
    }
    function s() {
        var e = {
            value: null,
            prev: null,
            next: null
        }, n = {
            value: null,
            prev: e,
            next: null
        };
        e.next = n, this.head = e, this.tail = n, this.length = 0;
    }
    function u(e, n, t) {
        var r = n.next, a = {
            value: t,
            prev: n,
            next: r
        };
        return n.next = a, r.prev = a, e.length++, a;
    }
    function c(e, n, t) {
        for(var r = n.next, a = 0; a < t && r !== e.tail; a++)r = r.next;
        n.next = r, r.prev = n, e.length -= a;
    }
    if (e.Prism = a, i.stringify = function e(n, t) {
        if ("string" == typeof n) return n;
        if (Array.isArray(n)) {
            var r = "";
            return n.forEach(function(n) {
                r += e(n, t);
            }), r;
        }
        var i = {
            type: n.type,
            content: e(n.content, t),
            tag: "span",
            classes: [
                "token",
                n.type
            ],
            attributes: {},
            language: t
        }, l = n.alias;
        l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)), a.hooks.run("wrap", i);
        var o = "";
        for(var s in i.attributes)o += " " + s + '="' + (i.attributes[s] || "").replace(/"/g, "&quot;") + '"';
        return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">";
    }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", function(n) {
        var t = JSON.parse(n.data), r = t.language, i = t.code, l = t.immediateClose;
        e.postMessage(a.highlight(i, a.languages[r], r)), l && e.close();
    }, !1), a) : a;
    var g = a.util.currentScript();
    function f() {
        a.manual || a.highlightAll();
    }
    if (g && (a.filename = g.src, g.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) {
        var h = document.readyState;
        "loading" === h || "interactive" === h && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16);
    }
    return a;
}(_self);
(0, module.exports) && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
    },
    prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
    },
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
    },
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [
                        {
                            pattern: /^=/,
                            alias: "attr-equals"
                        },
                        /"|'/
                    ]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [
        {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
    ]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var t = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        t["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var n = {};
        n[a] = {
            pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
                return a;
            }), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, Prism.languages.insertBefore("markup", "cdata", n);
    }
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function(a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
            lookbehind: !0,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [
                                e,
                                "language-" + e
                            ],
                            inside: Prism.languages[e]
                        },
                        punctuation: [
                            {
                                pattern: /^=/,
                                alias: "attr-equals"
                            },
                            /"|'/
                        ]
                    }
                }
            }
        });
    }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
!function(s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + e.source + ")*?(?:;|(?=\\s*\\{))"),
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                    pattern: RegExp("^" + e.source + "$"),
                    alias: "url"
                }
            }
        },
        selector: {
            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
            lookbehind: !0
        },
        string: {
            pattern: e,
            greedy: !0
        },
        property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
        },
        punctuation: /[(){};:,]/
    }, s.languages.css.atrule.inside.rest = s.languages.css;
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
}(Prism);
Prism.languages.clike = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [
        Prism.languages.clike["class-name"],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0
        }
    ],
    keyword: [
        {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: !0
        },
        {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }
    ],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
        lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),
        lookbehind: !0,
        greedy: !0,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
        }
    },
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    parameter: [
        {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        },
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
    },
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    }
}), Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
    }
}), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
!function(t) {
    function a(t) {
        return RegExp("(^(?:" + t + "):[ 	]*(?![ 	]))[^]+", "i");
    }
    t.languages.http = {
        "request-line": {
            pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
            inside: {
                method: {
                    pattern: /^[A-Z]+\b/,
                    alias: "property"
                },
                "request-target": {
                    pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
                    lookbehind: !0,
                    alias: "url",
                    inside: t.languages.uri
                },
                "http-version": {
                    pattern: /^(\s)HTTP\/[\d.]+/,
                    lookbehind: !0,
                    alias: "property"
                }
            }
        },
        "response-status": {
            pattern: /^HTTP\/[\d.]+ \d+ .+/m,
            inside: {
                "http-version": {
                    pattern: /^HTTP\/[\d.]+/,
                    alias: "property"
                },
                "status-code": {
                    pattern: /^(\s)\d+(?=\s)/,
                    lookbehind: !0,
                    alias: "number"
                },
                "reason-phrase": {
                    pattern: /^(\s).+/,
                    lookbehind: !0,
                    alias: "string"
                }
            }
        },
        header: {
            pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
            inside: {
                "header-value": [
                    {
                        pattern: a("Content-Security-Policy"),
                        lookbehind: !0,
                        alias: [
                            "csp",
                            "languages-csp"
                        ],
                        inside: t.languages.csp
                    },
                    {
                        pattern: a("Public-Key-Pins(?:-Report-Only)?"),
                        lookbehind: !0,
                        alias: [
                            "hpkp",
                            "languages-hpkp"
                        ],
                        inside: t.languages.hpkp
                    },
                    {
                        pattern: a("Strict-Transport-Security"),
                        lookbehind: !0,
                        alias: [
                            "hsts",
                            "languages-hsts"
                        ],
                        inside: t.languages.hsts
                    },
                    {
                        pattern: a("[^:]+"),
                        lookbehind: !0
                    }
                ],
                "header-name": {
                    pattern: /^[^:]+/,
                    alias: "keyword"
                },
                punctuation: /^:/
            }
        }
    };
    var e, n = t.languages, s = {
        "application/javascript": n.javascript,
        "application/json": n.json || n.javascript,
        "application/xml": n.xml,
        "text/xml": n.xml,
        "text/html": n.html,
        "text/css": n.css,
        "text/plain": n.plain
    }, i = {
        "application/json": !0,
        "application/xml": !0
    };
    function r(t) {
        var a = t.replace(/^[a-z]+\//, "");
        return "(?:" + t + "|\\w+/(?:[\\w.-]+\\+)+" + a + "(?![+\\w.-]))";
    }
    for(var p in s)if (s[p]) {
        e = e || {};
        var l = i[p] ? r(p) : p;
        e[p.replace(/\//g, "-")] = {
            pattern: RegExp("(content-type:\\s*" + l + "(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ 	\\w-][^]*", "i"),
            lookbehind: !0,
            inside: s[p]
        };
    }
    e && t.languages.insertBefore("http", "header", e);
}(Prism);
Prism.languages.json = {
    property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: !0,
        greedy: !0
    },
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    }
}, Prism.languages.webmanifest = Prism.languages.json;
!function(n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend("json", {
        property: [
            {
                pattern: RegExp(e.source + "(?=\\s*:)"),
                greedy: !0
            },
            {
                pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
                alias: "unquoted"
            }
        ],
        string: {
            pattern: e,
            greedy: !0
        },
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    });
}(Prism);
!function(n) {
    function e(n) {
        return n = n.replace(/<inner>/g, function() {
            return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?![\r\n]))";
        }), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")");
    }
    var t = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+", a = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|(?![^]))".replace(/__/g, function() {
        return t;
    }), i = "\\|?[ 	]*:?-{3,}:?[ 	]*(?:\\|[ 	]*:?-{3,}:?[ 	]*)+\\|?(?:\n|\r\n?)";
    n.languages.markdown = n.languages.extend("markup", {}), n.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                punctuation: /^---|---$/,
                "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: [
                        "yaml",
                        "language-yaml"
                    ],
                    inside: n.languages.yaml
                }
            }
        },
        blockquote: {
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
        },
        table: {
            pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"),
            inside: {
                "table-data-rows": {
                    pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                        "table-data": {
                            pattern: RegExp(t),
                            inside: n.languages.markdown
                        },
                        punctuation: /\|/
                    }
                },
                "table-line": {
                    pattern: RegExp("^(" + a + ")" + i + "$"),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\||:?-{3,}:?/
                    }
                },
                "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                        "table-header": {
                            pattern: RegExp(t),
                            alias: "important",
                            inside: n.languages.markdown
                        },
                        punctuation: /\|/
                    }
                }
            }
        },
        code: [
            {
                pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                lookbehind: !0,
                alias: "keyword"
            },
            {
                pattern: /^```[\s\S]*?^```$/m,
                greedy: !0,
                inside: {
                    "code-block": {
                        pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                        lookbehind: !0
                    },
                    "code-language": {
                        pattern: /^(```).+/,
                        lookbehind: !0
                    },
                    punctuation: /```/
                }
            }
        ],
        title: [
            {
                pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                alias: "important",
                inside: {
                    punctuation: /==+$|--+$/
                }
            },
            {
                pattern: /(^\s*)#.+/m,
                lookbehind: !0,
                alias: "important",
                inside: {
                    punctuation: /^#+|#+$/
                }
            }
        ],
        hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {
                    pattern: /^(!?\[)[^\]]+/,
                    lookbehind: !0
                },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: e("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /\*\*|__/
            }
        },
        italic: {
            pattern: e("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /[*_]/
            }
        },
        strike: {
            pattern: e("(~~?)(?:(?!~)<inner>)+\\2"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /~~?/
            }
        },
        "code-snippet": {
            pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: !0,
            greedy: !0,
            alias: [
                "code",
                "keyword"
            ]
        },
        url: {
            pattern: e('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[	 ]+"(?:\\\\.|[^"\\\\])*")?\\)|[ 	]?\\[(?:(?!\\])<inner>)+\\])'),
            lookbehind: !0,
            greedy: !0,
            inside: {
                operator: /^!/,
                content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {}
                },
                variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0
                },
                url: {
                    pattern: /(^\]\()[^\s)]+/,
                    lookbehind: !0
                },
                string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0
                }
            }
        }
    }), [
        "url",
        "bold",
        "italic",
        "strike"
    ].forEach(function(e) {
        [
            "url",
            "bold",
            "italic",
            "strike",
            "code-snippet"
        ].forEach(function(t) {
            e !== t && (n.languages.markdown[e].inside.content.inside[t] = n.languages.markdown[t]);
        });
    }), n.hooks.add("after-tokenize", function(n) {
        "markdown" !== n.language && "md" !== n.language || function n(e) {
            if (e && "string" != typeof e) for(var t = 0, a = e.length; t < a; t++){
                var i = e[t];
                if ("code" === i.type) {
                    var r = i.content[1], o = i.content[3];
                    if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
                        var l = r.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [
                            ""
                        ])[0].toLowerCase());
                        o.alias ? "string" == typeof o.alias ? o.alias = [
                            o.alias,
                            s
                        ] : o.alias.push(s) : o.alias = [
                            s
                        ];
                    }
                } else n(i.content);
            }
        }(n.tokens);
    }), n.hooks.add("wrap", function(e) {
        if ("code-block" === e.type) {
            for(var t = "", a = 0, i = e.classes.length; a < i; a++){
                var s = e.classes[a], d = /language-(.+)/.exec(s);
                if (d) {
                    t = d[1];
                    break;
                }
            }
            var p = n.languages[t];
            if (p) e.content = n.highlight(e.content.replace(r, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(n, e) {
                var t;
                return "#" === (e = e.toLowerCase())[0] ? (t = "x" === e[1] ? parseInt(e.slice(2), 16) : Number(e.slice(1)), l(t)) : o[e] || n;
            }), p, t);
            else if (t && "none" !== t && n.plugins.autoloader) {
                var u = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
                e.attributes.id = u, n.plugins.autoloader.loadLanguages(t, function() {
                    var e = document.getElementById(u);
                    e && (e.innerHTML = n.highlight(e.textContent, n.languages[t], t));
                });
            }
        }
    });
    var r = RegExp(n.languages.markup.tag.pattern.source, "gi"), o = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"'
    }, l = String.fromCodePoint || String.fromCharCode;
    n.languages.md = n.languages.markdown;
}(Prism);
Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        greedy: !0
    },
    "string-interpolation": {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0
                    },
                    "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0
    },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0
    },
    "class-name": {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: !0
    },
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: [
            "annotation",
            "punctuation"
        ],
        inside: {
            punctuation: /\./
        }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python;
!function(e) {
    e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
    var s = e.languages.extend("typescript", {});
    delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", {
        decorator: {
            pattern: /@[$\w\xA0-\uFFFF]+/,
            inside: {
                at: {
                    pattern: /^@/,
                    alias: "operator"
                },
                function: /^[\s\S]+/
            }
        },
        "generic-function": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: !0,
            inside: {
                function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: s
                }
            }
        }
    }), e.languages.ts = e.languages.typescript;
}(Prism);
!function(E) {
    var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
    E.languages.typoscript = {
        comment: [
            {
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0
            },
            {
                pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
                lookbehind: !0,
                greedy: !0
            },
            {
                pattern: /(^|[^"'])#.*/,
                lookbehind: !0,
                greedy: !0
            }
        ],
        function: [
            {
                pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
                inside: {
                    string: {
                        pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                        inside: {
                            keyword: n
                        }
                    },
                    keyword: {
                        pattern: /INCLUDE_TYPOSCRIPT/
                    }
                }
            },
            {
                pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
                inside: {
                    string: /"[^"\r\n]*"|'[^'\r\n]*'/
                }
            }
        ],
        string: {
            pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
            lookbehind: !0,
            inside: {
                function: /\{\$.*\}/,
                keyword: n,
                number: /^\d+$/,
                punctuation: /[,|:]/
            }
        },
        keyword: n,
        number: {
            pattern: /\b\d+\s*[.{=]/,
            inside: {
                operator: /[.{=]/
            }
        },
        tag: {
            pattern: /\.?[-\w\\]+\.?/,
            inside: {
                punctuation: /\./
            }
        },
        punctuation: /[{}[\];(),.:|]/,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
    }, E.languages.tsconfig = E.languages.typoscript;
}(Prism);
Prism.languages.wasm = {
    comment: [
        /\(;[\s\S]*?;\)/,
        {
            pattern: /;;.*/,
            greedy: !0
        }
    ],
    string: {
        pattern: /"(?:\\[\s\S]|[^"\\])*"/,
        greedy: !0
    },
    keyword: [
        {
            pattern: /\b(?:align|offset)=/,
            inside: {
                operator: /=/
            }
        },
        {
            pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
            inside: {
                punctuation: /\./
            }
        },
        /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/
    ],
    variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
    number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
    punctuation: /[()]/
};
// Extend Kipper with TypoScript
Prism.languages.kipper = Prism.languages.extend("typescript", {});
Prism.languages.kip = Prism.languages.kipper;
!function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = "line-numbers", n = /\n(?!$)/g, t = Prism.plugins.lineNumbers = {
            getLine: function(n, t) {
                if ("PRE" === n.tagName && n.classList.contains(e)) {
                    var i = n.querySelector(".line-numbers-rows");
                    if (i) {
                        var r = parseInt(n.getAttribute("data-start"), 10) || 1, s = r + (i.children.length - 1);
                        t < r && (t = r), t > s && (t = s);
                        var l = t - r;
                        return i.children[l];
                    }
                }
            },
            resize: function(e) {
                r([
                    e
                ]);
            },
            assumeViewportIndependence: !0
        }, i = void 0;
        window.addEventListener("resize", function() {
            t.assumeViewportIndependence && i === window.innerWidth || (i = window.innerWidth, r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))));
        }), Prism.hooks.add("complete", function(t) {
            if (t.code) {
                var i = t.element, s = i.parentNode;
                if (s && /pre/i.test(s.nodeName) && !i.querySelector(".line-numbers-rows") && Prism.util.isActive(i, e)) {
                    i.classList.remove(e), s.classList.add(e);
                    var l, o = t.code.match(n), a = o ? o.length + 1 : 1, u = new Array(a + 1).join("<span></span>");
                    (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, s.hasAttribute("data-start") && (s.style.counterReset = "linenumber " + (parseInt(s.getAttribute("data-start"), 10) - 1)), t.element.appendChild(l), r([
                        s
                    ]), Prism.hooks.run("line-numbers", t);
                }
            }
        }), Prism.hooks.add("line-numbers", function(e) {
            e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
        });
    }
    function r(e) {
        if (0 != (e = e.filter(function(e) {
            var n, t = (n = e, n ? window.getComputedStyle ? getComputedStyle(n) : n.currentStyle || null : null)["white-space"];
            return "pre-wrap" === t || "pre-line" === t;
        })).length) {
            var t = e.map(function(e) {
                var t = e.querySelector("code"), i = e.querySelector(".line-numbers-rows");
                if (t && i) {
                    var r = e.querySelector(".line-numbers-sizer"), s = t.textContent.split(n);
                    r || ((r = document.createElement("span")).className = "line-numbers-sizer", t.appendChild(r)), r.innerHTML = "0", r.style.display = "block";
                    var l = r.getBoundingClientRect().height;
                    return r.innerHTML = "", {
                        element: e,
                        lines: s,
                        lineHeights: [],
                        oneLinerHeight: l,
                        sizer: r
                    };
                }
            }).filter(Boolean);
            t.forEach(function(e) {
                var n = e.sizer, t = e.lines, i = e.lineHeights, r = e.oneLinerHeight;
                i[t.length - 1] = void 0, t.forEach(function(e, t) {
                    if (e && e.length > 1) {
                        var s = n.appendChild(document.createElement("span"));
                        s.style.display = "block", s.textContent = e;
                    } else i[t] = r;
                });
            }), t.forEach(function(e) {
                for(var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++)void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height);
            }), t.forEach(function(e) {
                var n = e.sizer, t = e.element.querySelector(".line-numbers-rows");
                n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function(e, n) {
                    t.children[n].style.height = e + "px";
                });
            });
        }
    }
}();
!function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = [], t = {}, n = function() {};
        Prism.plugins.toolbar = {};
        var a = Prism.plugins.toolbar.registerButton = function(n, a) {
            var r;
            r = "function" == typeof a ? a : function(e) {
                var t;
                return "function" == typeof a.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function() {
                    a.onClick.call(this, e);
                })) : "string" == typeof a.url ? (t = document.createElement("a")).href = a.url : t = document.createElement("span"), a.className && t.classList.add(a.className), t.textContent = a.text, t;
            }, n in t ? console.warn('There is a button with the key "' + n + '" registered already.') : e.push(t[n] = r);
        }, r = Prism.plugins.toolbar.hook = function(a) {
            var r = a.element.parentNode;
            if (r && /pre/i.test(r.nodeName) && !r.parentNode.classList.contains("code-toolbar")) {
                var o = document.createElement("div");
                o.classList.add("code-toolbar"), r.parentNode.insertBefore(o, r), o.appendChild(r);
                var i = document.createElement("div");
                i.classList.add("toolbar");
                var l = e, d = function(e) {
                    for(; e;){
                        var t = e.getAttribute("data-toolbar-order");
                        if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                        e = e.parentElement;
                    }
                }(a.element);
                d && (l = d.map(function(e) {
                    return t[e] || n;
                })), l.forEach(function(e) {
                    var t = e(a);
                    if (t) {
                        var n = document.createElement("div");
                        n.classList.add("toolbar-item"), n.appendChild(t), i.appendChild(n);
                    }
                }), o.appendChild(i);
            }
        };
        a("label", function(e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n, a, r = t.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + r);
                } catch (e) {}
                return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n;
            }
        }), Prism.hooks.add("complete", r);
    }
}();
!function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        if (Prism.plugins.toolbar) {
            var e = {
                none: "Plain text",
                plain: "Plain text",
                plaintext: "Plain text",
                text: "Plain text",
                txt: "Plain text",
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                rss: "RSS",
                css: "CSS",
                clike: "C-like",
                js: "JavaScript",
                abap: "ABAP",
                abnf: "ABNF",
                al: "AL",
                antlr4: "ANTLR4",
                g4: "ANTLR4",
                apacheconf: "Apache Configuration",
                apl: "APL",
                aql: "AQL",
                ino: "Arduino",
                arff: "ARFF",
                armasm: "ARM Assembly",
                "arm-asm": "ARM Assembly",
                art: "Arturo",
                asciidoc: "AsciiDoc",
                adoc: "AsciiDoc",
                aspnet: "ASP.NET (C#)",
                asm6502: "6502 Assembly",
                asmatmel: "Atmel AVR Assembly",
                autohotkey: "AutoHotkey",
                autoit: "AutoIt",
                avisynth: "AviSynth",
                avs: "AviSynth",
                "avro-idl": "Avro IDL",
                avdl: "Avro IDL",
                awk: "AWK",
                gawk: "GAWK",
                basic: "BASIC",
                bbcode: "BBcode",
                bnf: "BNF",
                rbnf: "RBNF",
                bsl: "BSL (1C:Enterprise)",
                oscript: "OneScript",
                csharp: "C#",
                cs: "C#",
                dotnet: "C#",
                cpp: "C++",
                cfscript: "CFScript",
                cfc: "CFScript",
                cil: "CIL",
                cmake: "CMake",
                cobol: "COBOL",
                coffee: "CoffeeScript",
                conc: "Concurnas",
                csp: "Content-Security-Policy",
                "css-extras": "CSS Extras",
                csv: "CSV",
                cue: "CUE",
                dataweave: "DataWeave",
                dax: "DAX",
                django: "Django/Jinja2",
                jinja2: "Django/Jinja2",
                "dns-zone-file": "DNS zone file",
                "dns-zone": "DNS zone file",
                dockerfile: "Docker",
                dot: "DOT (Graphviz)",
                gv: "DOT (Graphviz)",
                ebnf: "EBNF",
                editorconfig: "EditorConfig",
                ejs: "EJS",
                etlua: "Embedded Lua templating",
                erb: "ERB",
                "excel-formula": "Excel Formula",
                xlsx: "Excel Formula",
                xls: "Excel Formula",
                fsharp: "F#",
                "firestore-security-rules": "Firestore security rules",
                ftl: "FreeMarker Template Language",
                gml: "GameMaker Language",
                gamemakerlanguage: "GameMaker Language",
                gap: "GAP (CAS)",
                gcode: "G-code",
                gdscript: "GDScript",
                gedcom: "GEDCOM",
                gettext: "gettext",
                po: "gettext",
                glsl: "GLSL",
                gn: "GN",
                gni: "GN",
                "linker-script": "GNU Linker Script",
                ld: "GNU Linker Script",
                "go-module": "Go module",
                "go-mod": "Go module",
                graphql: "GraphQL",
                hbs: "Handlebars",
                hs: "Haskell",
                hcl: "HCL",
                hlsl: "HLSL",
                http: "HTTP",
                hpkp: "HTTP Public-Key-Pins",
                hsts: "HTTP Strict-Transport-Security",
                ichigojam: "IchigoJam",
                "icu-message-format": "ICU Message Format",
                idr: "Idris",
                ignore: ".ignore",
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
                inform7: "Inform 7",
                javadoc: "JavaDoc",
                javadoclike: "JavaDoc-like",
                javastacktrace: "Java stack trace",
                jq: "JQ",
                jsdoc: "JSDoc",
                "js-extras": "JS Extras",
                json: "JSON",
                webmanifest: "Web App Manifest",
                json5: "JSON5",
                jsonp: "JSONP",
                jsstacktrace: "JS stack trace",
                "js-templates": "JS Templates",
                keepalived: "Keepalived Configure",
                kts: "Kotlin Script",
                kt: "Kotlin",
                kumir: "KuMir (\u041A\u0443\u041C\u0438\u0440)",
                kum: "KuMir (\u041A\u0443\u041C\u0438\u0440)",
                latex: "LaTeX",
                tex: "TeX",
                context: "ConTeXt",
                lilypond: "LilyPond",
                ly: "LilyPond",
                emacs: "Lisp",
                elisp: "Lisp",
                "emacs-lisp": "Lisp",
                llvm: "LLVM IR",
                log: "Log file",
                lolcode: "LOLCODE",
                magma: "Magma (CAS)",
                md: "Markdown",
                "markup-templating": "Markup templating",
                matlab: "MATLAB",
                maxscript: "MAXScript",
                mel: "MEL",
                mongodb: "MongoDB",
                moon: "MoonScript",
                n1ql: "N1QL",
                n4js: "N4JS",
                n4jsd: "N4JS",
                "nand2tetris-hdl": "Nand To Tetris HDL",
                naniscript: "Naninovel Script",
                nani: "Naninovel Script",
                nasm: "NASM",
                neon: "NEON",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                objc: "Objective-C",
                ocaml: "OCaml",
                opencl: "OpenCL",
                openqasm: "OpenQasm",
                qasm: "OpenQasm",
                parigp: "PARI/GP",
                objectpascal: "Object Pascal",
                psl: "PATROL Scripting Language",
                pcaxis: "PC-Axis",
                px: "PC-Axis",
                peoplecode: "PeopleCode",
                pcode: "PeopleCode",
                php: "PHP",
                phpdoc: "PHPDoc",
                "php-extras": "PHP Extras",
                "plant-uml": "PlantUML",
                plantuml: "PlantUML",
                plsql: "PL/SQL",
                powerquery: "PowerQuery",
                pq: "PowerQuery",
                mscript: "PowerQuery",
                powershell: "PowerShell",
                promql: "PromQL",
                properties: ".properties",
                protobuf: "Protocol Buffers",
                purebasic: "PureBasic",
                pbfasm: "PureBasic",
                purs: "PureScript",
                py: "Python",
                qsharp: "Q#",
                qs: "Q#",
                q: "Q (kdb+ database)",
                qml: "QML",
                rkt: "Racket",
                cshtml: "Razor C#",
                razor: "Razor C#",
                jsx: "React JSX",
                tsx: "React TSX",
                renpy: "Ren'py",
                rpy: "Ren'py",
                res: "ReScript",
                rest: "reST (reStructuredText)",
                robotframework: "Robot Framework",
                robot: "Robot Framework",
                rb: "Ruby",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (Scss)",
                "shell-session": "Shell session",
                "sh-session": "Shell session",
                shellsession: "Shell session",
                sml: "SML",
                smlnj: "SML/NJ",
                solidity: "Solidity (Ethereum)",
                sol: "Solidity (Ethereum)",
                "solution-file": "Solution file",
                sln: "Solution file",
                soy: "Soy (Closure Template)",
                sparql: "SPARQL",
                rq: "SPARQL",
                "splunk-spl": "Splunk SPL",
                sqf: "SQF: Status Quo Function (Arma 3)",
                sql: "SQL",
                stata: "Stata Ado",
                iecst: "Structured Text (IEC 61131-3)",
                supercollider: "SuperCollider",
                sclang: "SuperCollider",
                systemd: "Systemd configuration file",
                "t4-templating": "T4 templating",
                "t4-cs": "T4 Text Templates (C#)",
                t4: "T4 Text Templates (C#)",
                "t4-vb": "T4 Text Templates (VB)",
                tap: "TAP",
                tt2: "Template Toolkit 2",
                toml: "TOML",
                trickle: "trickle",
                troy: "troy",
                trig: "TriG",
                ts: "TypeScript",
                tsconfig: "TSConfig",
                uscript: "UnrealScript",
                uc: "UnrealScript",
                uorazor: "UO Razor Script",
                uri: "URI",
                url: "URL",
                vbnet: "VB.Net",
                vhdl: "VHDL",
                vim: "vim",
                "visual-basic": "Visual Basic",
                vba: "VBA",
                vb: "Visual Basic",
                wasm: "WebAssembly",
                "web-idl": "Web IDL",
                webidl: "Web IDL",
                wiki: "Wiki markup",
                wolfram: "Wolfram language",
                nb: "Mathematica Notebook",
                wl: "Wolfram language",
                xeoracube: "XeoraCube",
                "xml-doc": "XML doc (.net)",
                xojo: "Xojo (REALbasic)",
                xquery: "XQuery",
                yaml: "YAML",
                yml: "YAML",
                yang: "YANG"
            };
            Prism.plugins.toolbar.registerButton("show-language", function(a) {
                var t = a.element.parentNode;
                if (t && /pre/i.test(t.nodeName)) {
                    var o, s = t.getAttribute("data-language") || e[a.language] || ((o = a.language) ? (o.substring(0, 1).toUpperCase() + o.substring(1)).replace(/s(?=cript)/, "S") : o);
                    if (s) {
                        var r = document.createElement("span");
                        return r.textContent = s, r;
                    }
                }
            });
        } else console.warn("Show Languages plugin loaded before Toolbar plugin.");
    }
}();
"undefined" != typeof Prism && Prism.hooks.add("wrap", function(e) {
    "keyword" === e.type && e.classes.push("keyword-" + e.content);
});
!function() {
    function t(t) {
        var e = document.createElement("textarea");
        e.value = t.getText(), e.style.top = "0", e.style.left = "0", e.style.position = "fixed", document.body.appendChild(e), e.focus(), e.select();
        try {
            var o = document.execCommand("copy");
            setTimeout(function() {
                o ? t.success() : t.error();
            }, 1);
        } catch (e) {
            setTimeout(function() {
                t.error(e);
            }, 1);
        }
        document.body.removeChild(e);
    }
    "undefined" != typeof Prism && "undefined" != typeof document && (Prism.plugins.toolbar ? Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(e) {
        var o = e.element, n = function(t) {
            var e = {
                copy: "Copy",
                "copy-error": "Press Ctrl+C to copy",
                "copy-success": "Copied!",
                "copy-timeout": 5e3
            };
            for(var o in e){
                for(var n = "data-prismjs-" + o, c = t; c && !c.hasAttribute(n);)c = c.parentElement;
                c && (e[o] = c.getAttribute(n));
            }
            return e;
        }(o), c = document.createElement("button");
        c.className = "copy-to-clipboard-button", c.setAttribute("type", "button");
        var r = document.createElement("span");
        return c.appendChild(r), u("copy"), function(e, o) {
            e.addEventListener("click", function() {
                !function(e) {
                    navigator.clipboard ? navigator.clipboard.writeText(e.getText()).then(e.success, function() {
                        t(e);
                    }) : t(e);
                }(o);
            });
        }(c, {
            getText: function() {
                return o.textContent;
            },
            success: function() {
                u("copy-success"), i();
            },
            error: function() {
                u("copy-error"), setTimeout(function() {
                    !function(t) {
                        window.getSelection().selectAllChildren(t);
                    }(o);
                }, 1), i();
            }
        }), c;
        function i() {
            setTimeout(function() {
                u("copy");
            }, n["copy-timeout"]);
        }
        function u(t) {
            r.textContent = n[t], c.setAttribute("data-copy-state", t);
        }
    }) : console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."));
}();
"undefined" != typeof Prism && "undefined" != typeof document && document.querySelector && Prism.plugins.toolbar.registerButton("download-file", function(t) {
    var e = t.element.parentNode;
    if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-src") && e.hasAttribute("data-download-link")) {
        var n = e.getAttribute("data-src"), a = document.createElement("a");
        return a.textContent = e.getAttribute("data-download-link-label") || "Download", a.setAttribute("download", ""), a.href = n, a;
    }
});
// Kipper extension
"undefined" != typeof Prism && "undefined" != typeof document && (()=>{
    Prism.languages["kipper"] = {
        ...Prism.languages["typescript"]
    };
})();

},{}],"iMIih":[function(require,module,exports) {
/**
 * Script for managing the code runner and execution functionality in the playground.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Wrap up function that will be called once the compiler has been downloaded and initialised in the web worker.
 *
 * Called by {@link warmUpCompiler warmUpCompiler()}.
 */ parcelHelpers.export(exports, "wrapUpWarmUp", ()=>wrapUpWarmUp);
/**
 * Creates a new web worker and initialises the Kipper Compiler in the wbe worker thread.
 */ parcelHelpers.export(exports, "createCompilerWebWorker", ()=>createCompilerWebWorker);
/**
 * Ensure that the Kipper Compiler is using the latest selected version.
 */ parcelHelpers.export(exports, "ensureCompilerWebWorkerIsUpToDate", ()=>ensureCompilerWebWorkerIsUpToDate);
/**
 * Warms up the compiler by running a simple default program.
 *
 * Running this function will allow the compiler and parser to use caching to speed up future compilations.
 */ parcelHelpers.export(exports, "warmUpCompiler", ()=>warmUpCompiler);
/**
 * Runs the code using a web worker and writes the console output to the "virtual" terminal.
 */ parcelHelpers.export(exports, "runCode", ()=>runCode);
/**
 * Safely aborts the worker's current process and recreates it.
 */ parcelHelpers.export(exports, "safeAbortWorker", ()=>safeAbortWorker);
/**
 * Stops the WebWorker from executing the current code.
 */ parcelHelpers.export(exports, "stopCode", ()=>stopCode);
parcelHelpers.export(exports, "resetRunnerState", ()=>resetRunnerState);
/**
 * Initializes the event listeners for this script.
 */ parcelHelpers.export(exports, "init", ()=>init);
var _version = require("./version");
var _console = require("./console");
var _editor = require("./editor");
const codeTextArea = document.querySelector("#code-editor-textarea");
const runCodeListItem = document.querySelector("#run-code-list-item");
let runCodeButton = document.querySelector("#run-code-list-item button");
// Active version of the compiler.
// This will be used to check whether the version selection was changed before starting a new compilation,
// so that we can ensure the selected version is used instead of the old one. This value will only be changed
// when the version is passed onto the compiler (e.g. the version has been loaded).
let activeEnvVersion = (0, _version.getKipperVersion)();
// Global web worker that will run the code
let worker = createCompilerWebWorker();
// Status code returns
const STATUS_FAILURE = 1;
// Program states
let compiling = false;
let running = false;
// Store the warmup promise
let warmUp = undefined;
async function wrapUpWarmUp() {
    warmUp = undefined;
    worker.onmessage = undefined;
    console.log("Finished warming up the compiler!");
}
function createCompilerWebWorker() {
    let newWorker = new Worker(new URL(require("370ce7af372457d9")));
    // Send the version to the worker
    activeEnvVersion = (0, _version.getKipperVersion)();
    newWorker.postMessage(activeEnvVersion);
    return newWorker;
}
function ensureCompilerWebWorkerIsUpToDate() {
    if ((0, _version.getKipperVersionUnsafe)() !== activeEnvVersion) // Create a new worker and set it as the current worker
    worker = createCompilerWebWorker();
}
async function warmUpCompiler() {
    console.log("Warming up compiler...");
    if (window.Worker) {
        worker.onmessage = (event)=>{
            const numMsg = typeof event.data === "number" || event.data instanceof Number;
            if (numMsg) {
                const statusCode = event.data;
                if (!running) {
                    // Only if the status code is 0 the compilation successfully finished.
                    if (statusCode === 0) running = true;
                    else wrapUpWarmUp();
                } else {
                    // Finished warming up
                    running = false;
                    wrapUpWarmUp();
                }
            }
        };
        // Send basic program to warm up
        worker.postMessage("var x: num = 5; def func() -> void {}");
    }
}
async function runCode() {
    runCodeListItem.innerHTML = `<button>${window.locale["values"]["playground"]["buttons"]["stop"]}</button>`;
    runCodeButton = document.querySelector("#run-code-list-item button");
    runCodeButton.addEventListener("click", stopCode);
    if (window.Worker) {
        // Clear the console
        (0, _console.clearConsoleOutput)();
        (0, _console.clearCompilerOutput)();
        // If the compiler is warming up, wait for it to finish
        if (warmUp) {
            console.log("Received 'run' operation too soon. Waiting for warmup to finish...");
            while(warmUp)// Wait for 100ms and then try again checking if the warmUp is done
            await new Promise((resolve)=>setTimeout(resolve, 100));
        }
        // Ensure that the compiler is using the latest selected version
        ensureCompilerWebWorkerIsUpToDate();
        console.log("Reading editor content and preparing compilation");
        // Enable compiler logs
        (0, _console.switchToCompilerOutput)();
        // Start timer
        const startTime = new Date().getTime();
        // Signalise compilation is currently undergoing
        compiling = true;
        // Event handler for the return. This imitates stdout.
        worker.onmessage = async (event)=>{
            const stringMsg = typeof event.data === "string" || event.data instanceof String;
            const numMsg = typeof event.data === "number" || event.data instanceof Number;
            // String values represent runtime or compilation log messages
            if (stringMsg) {
                if (!running) // Write compiler logs
                (0, _console.writeLineToCompilerOutput)(event.data);
                else // Write stdout output
                (0, _console.writeLineToConsoleOutput)(event.data);
            } else if (numMsg) {
                const statusCode = event.data;
                if (!running) {
                    // Only if the status code is 0 the compilation successfully finished.
                    if (statusCode === 0) {
                        // Compilation finished -> Say how long it took
                        const endTimeInSeconds = (new Date().getTime() - startTime) / 1000;
                        (0, _console.writeLineToCompilerOutput)(`\nCompilation finished in ${endTimeInSeconds}s`);
                        // Enable output to 'stdout'
                        (0, _console.switchToConsoleOutput)();
                        running = true;
                        compiling = false;
                    } else // Abort because of the error
                    await stopCode();
                } else {
                    // End of the program
                    resetRunnerState();
                    (0, _console.printProgramExitCode)(statusCode);
                    (0, _editor.switchButtonToRun)();
                }
            } else // Unknown message type
            console.error(`Invalid message from WebWorker: ${event.data}`);
        };
        // Post the message to tell the worker to process the code
        const currentCode = codeTextArea.value;
        worker.postMessage(currentCode);
    } else alert("Your browser does not support web-workers! Aborting operation.");
}
async function safeAbortWorker() {
    if (window.Worker) {
        // If there is no current execution, return.
        if (worker === undefined) return;
        // Sadly only using a full termination of the worker we can stop the code from running
        // This has the downside of recreating the worker and as such losing the warmup performance boost of the Parser.
        worker.terminate();
        // Recreate the worker now to save time for the next run call.
        worker = createCompilerWebWorker();
    } else alert("Your browser does not support web-workers! Aborting operation.");
}
async function stopCode() {
    (0, _editor.switchButtonToRun)();
    await safeAbortWorker();
    let consoleOutputSelected = (0, _console.isConsoleOutputSelected)();
    if (compiling || !consoleOutputSelected) {
        (0, _console.switchToCompilerOutput)();
        (0, _console.writeLineToCompilerOutput)("\nCompilation terminated.");
    } else if (running || consoleOutputSelected) {
        (0, _console.switchToConsoleOutput)();
        (0, _console.printProgramExitCode)(STATUS_FAILURE);
    } // If nothing is going on rn, just keep the console output as it is
    resetRunnerState();
}
function resetRunnerState() {
    running = false;
    compiling = false;
}
function init() {
    // Warmup the compiler to speed up future compilations
    // Add loading message (Don't switch the compiler output window though)
    (0, _console.writeLineToCompilerOutput)("--- Loading compiler... ---");
    // Ensure we switch to the stored version, when the page is loaded
    const storedVersion = (0, _version.getKipperVersionUnsafe)();
    if (storedVersion !== null) // Switch to the stored version if there has been a previous session
    (0, _version.setKipperVersion)(storedVersion);
    // Warm up the compiler
    warmUp = warmUpCompiler();
    // Afterwards display the ready message
    (0, _console.clearCompilerOutput)();
    (0, _console.writeLineToCompilerOutput)("--- Kipper Compiler ready for compilation --- ");
}

},{"./version":"6CneJ","./console":"acLSX","./editor":"iSH0Y","370ce7af372457d9":"3F75N","@parcel/transformer-js/src/esmodule-helpers.js":"dCOmu"}],"6CneJ":[function(require,module,exports) {
/**
 * Script for managing the version selection inside the playground.
 */ // Version dropdown list
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Ensures that a version is set in the {@link localStorage} field 'kipperVersion'.
 */ parcelHelpers.export(exports, "ensureVersionIsSet", ()=>ensureVersionIsSet);
/**
 * Get the current version set for the Kipper compiler.
 */ parcelHelpers.export(exports, "getKipperVersion", ()=>getKipperVersion);
/**
 * Unsafe version of {@link getKipperVersion}, which does not ensure that the version is set.
 *
 * This means it may return null if there hasn't been a version set before.
 */ parcelHelpers.export(exports, "getKipperVersionUnsafe", ()=>getKipperVersionUnsafe);
/**
 * Sets the {@link localStorage} field 'kipperVersion' to the specified {@link version}.
 * @param version The version to set.
 */ parcelHelpers.export(exports, "setKipperVersion", ()=>setKipperVersion);
/**
 * Disables the visibility of the dropdown menu.
 */ parcelHelpers.export(exports, "disableVersionDropdownVisibility", ()=>disableVersionDropdownVisibility);
/**
 * Enables the visibility of the dropdown menu.
 */ parcelHelpers.export(exports, "enableVersionDropdownVisibility", ()=>enableVersionDropdownVisibility);
/**
 * Sets the version of the playground to the version that was selected.
 * @param versionListItem The list item that was clicked.
 */ parcelHelpers.export(exports, "selectPlaygroundVersion", ()=>selectPlaygroundVersion);
/**
 * Toggles on or off the dropdown for the version picker.
 */ parcelHelpers.export(exports, "toggleVersionDropdownVisibility", ()=>toggleVersionDropdownVisibility);
const versionSelectorDropdown = document.querySelector("#versions-dropdown");
// Version selector button
const versionSelectorButton = document.querySelector("#version-selector-root-button-wrapper button");
const versionSelectorButtonVersionText = document.querySelector("#version-selector-root-button-wrapper button span");
function ensureVersionIsSet() {
    if (!localStorage.getItem("kipperVersion")) {
        // Get the default version from the dropdown (EJS will have handled this and rendered the correct version)
        // Remove the 'v' prefix, as for NPM versions, the 'v' prefix is not used.
        const defaultVersion = versionSelectorButtonVersionText.innerText.replace("v", "");
        localStorage.setItem("kipperVersion", defaultVersion);
    }
}
function getKipperVersion() {
    ensureVersionIsSet();
    return getKipperVersionUnsafe();
}
function getKipperVersionUnsafe() {
    return localStorage.getItem("kipperVersion");
}
function setKipperVersion(version) {
    localStorage.setItem("kipperVersion", version);
    // Set the version in the dropdown button
    versionSelectorButtonVersionText.innerHTML = `v${version}`;
}
function disableVersionDropdownVisibility() {
    versionSelectorDropdown.style.visibility = "hidden";
    versionSelectorDropdown.style.display = "none";
}
function enableVersionDropdownVisibility() {
    versionSelectorDropdown.style.visibility = "visible";
    versionSelectorDropdown.style.display = "unset";
}
async function selectPlaygroundVersion(versionListItem) {
    // Set the version based on the data field of the element
    const version = versionListItem.getAttribute("data-version");
    console.log(version);
    if (version !== null) {
        setKipperVersion(version);
        disableVersionDropdownVisibility(); // Hide the dropdown
    }
}
function toggleVersionDropdownVisibility() {
    const isVisible = versionSelectorDropdown.style.visibility === "visible" && versionSelectorDropdown.style.display !== "none";
    if (isVisible) disableVersionDropdownVisibility();
    else enableVersionDropdownVisibility();
}
// Version selector button
versionSelectorButton.addEventListener("click", toggleVersionDropdownVisibility);
// Version selector dropdown handling (clicking on a version)
const versionSelectorDropdownItems = document.querySelectorAll("#versions-dropdown .version-selector-button-wrapper");
versionSelectorDropdownItems.forEach((item)=>{
    item.addEventListener("click", async ()=>await selectPlaygroundVersion(item));
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dCOmu"}],"dCOmu":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"acLSX":[function(require,module,exports) {
/**
 * Script for managing the console output in the playground.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Returns whether the console output is selected or not (the compiler logs are selected).
 */ parcelHelpers.export(exports, "isConsoleOutputSelected", ()=>isConsoleOutputSelected);
/**
 * Switches the side panel interface to the program console output.
 */ parcelHelpers.export(exports, "switchToConsoleOutput", ()=>switchToConsoleOutput);
/**
 * Switches the side panel interface to the compiler logs output.
 */ parcelHelpers.export(exports, "switchToCompilerOutput", ()=>switchToCompilerOutput);
/**
 * Write to the console the default welcome message
 */ parcelHelpers.export(exports, "writeConsoleOutputDefaultMessage", ()=>writeConsoleOutputDefaultMessage);
/**
 * Prints the passed exit status onto the console
 * @param exitCode The exit code to print.
 */ parcelHelpers.export(exports, "printProgramExitCode", ()=>printProgramExitCode);
/**
 * Write the passed text onto the console and applies syntax highlighting.
 * @param value The text to write.
 */ parcelHelpers.export(exports, "writeConsoleResultAndHighlight", ()=>writeConsoleResultAndHighlight);
/**
 * Appends a new line to the console output and applies syntax highlighting.
 * @param value The line to add.
 */ parcelHelpers.export(exports, "writeLineToConsoleOutput", ()=>writeLineToConsoleOutput);
parcelHelpers.export(exports, "writeLineToCompilerOutput", ()=>writeLineToCompilerOutput);
/**
 * Clears the content of the console.
 */ parcelHelpers.export(exports, "clearConsoleOutput", ()=>clearConsoleOutput);
/**
 * Clears the content of the console.
 */ parcelHelpers.export(exports, "clearCompilerOutput", ()=>clearCompilerOutput);
/**
 * Initializes the event listeners for this script.
 */ parcelHelpers.export(exports, "init", ()=>init);
var _prismCoreJs = require("../../prism/prism-core.js");
var _tools = require("./tools");
let consoleOutputSelected = true;
let consoleOutput = "";
let compilerOutput = "";
// Sidebar editor fields
const shellOutputResult = document.querySelector("#shell-sidebar-highlight-field-content");
// Sidebar buttons
const consoleOutputButton = document.querySelector("#console-output-button button");
const compilerOutputButton = document.querySelector("#compiler-output-button button");
function isConsoleOutputSelected() {
    return consoleOutputSelected;
}
function switchToConsoleOutput() {
    // Change styling
    compilerOutputButton.style.borderBottom = "2px solid var(--scheme-gray)";
    consoleOutputButton.style.borderBottom = "3px solid var(--scheme-primary)";
    writeConsoleResultAndHighlight(consoleOutput);
    consoleOutputSelected = true;
}
function switchToCompilerOutput() {
    // Change styling console
    consoleOutputButton.style.borderBottom = "2px solid var(--scheme-gray)";
    compilerOutputButton.style.borderBottom = "3px solid var(--scheme-primary)";
    writeConsoleResultAndHighlight(compilerOutput);
    consoleOutputSelected = false;
}
function writeConsoleOutputDefaultMessage() {
    // Clear output
    clearConsoleOutput();
    const welcomeMessage = `--- Welcome to the Kipper Playground! ---

Try out your first program by writing:

  print("Hello world");

Create your first variable by writing:

  var myString: str = "Hello world!";
  print(myString);

Perform your first calculations by writing:

  var result: num = 3.14 * 9;
  print(result as str);

Like other languages, Kipper provides loops like while-loops:

  var i: num = 0;
  while (i < 5) {
    print(i as str);
    i = i + 1;
  }

And you can also use for-loops:

  for (var i: num = 0; i < 5; i = i + 1) {
    print(i as str);
  }

You can also use conditionals:

  var x: num = 10;
  if (x > 5) {
    print("x is greater than 5");
  } else {
    print("x is less than or equal to 5");
  }

You can also define functions:

  func add(a: num, b: num): num {
    return a + b;
  }
  print(add(3, 4) as str);
`.split("\n");
    // Write to the console
    for (const msg of welcomeMessage)writeLineToConsoleOutput(msg);
}
function printProgramExitCode(exitCode) {
    writeLineToConsoleOutput(`\nFinished execution with exit code ${exitCode}.`);
}
function writeConsoleResultAndHighlight(value) {
    // If the last character is a newline character
    // Add a placeholder space character to the final line
    if (value[value.length - 1] == "\n") value += " ";
    // Write content to the console
    shellOutputResult.innerHTML = (0, _tools.escapeHTMLChars)(value);
    // Highlight output field
    _prismCoreJs.highlightElement(shellOutputResult);
}
function writeLineToConsoleOutput(value) {
    // Switch to the console output, if the sidebar wasn't already set to it
    if (!consoleOutputSelected) switchToConsoleOutput();
    consoleOutput += value + "\n";
    writeConsoleResultAndHighlight(consoleOutput);
}
function writeLineToCompilerOutput(value) {
    // Switch to the compiler output, if the sidebar wasn't already set to it
    if (consoleOutputSelected) switchToCompilerOutput();
    compilerOutput += value + "\n";
    writeConsoleResultAndHighlight(compilerOutput);
}
function clearConsoleOutput() {
    consoleOutput = "";
    // Don't override the compiler output if it's selected and only clear the console output
    if (consoleOutputSelected) writeConsoleResultAndHighlight("");
}
function clearCompilerOutput() {
    compilerOutput = "";
    // Don't override the console output if it's selected and only clear the compiler output
    if (!consoleOutputSelected) writeConsoleResultAndHighlight("");
}
function init() {
    // Print default message to the console output
    switchToConsoleOutput();
    writeConsoleOutputDefaultMessage();
    // Sidebar button handling
    consoleOutputButton.addEventListener("click", switchToConsoleOutput);
    compilerOutputButton.addEventListener("click", switchToCompilerOutput);
}

},{"../../prism/prism-core.js":"kUkoQ","./tools":"4QP8C","@parcel/transformer-js/src/esmodule-helpers.js":"dCOmu"}],"4QP8C":[function(require,module,exports) {
/**
 * Script for providing additional tools for the playground.
 */ /**
 * Escapes all '&', '<' and '>' characters.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "escapeHTMLChars", ()=>escapeHTMLChars);
function escapeHTMLChars(str) {
    return str.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;").replace(new RegExp(">", "g"), "&gt;");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dCOmu"}],"3F75N":[function(require,module,exports) {
module.exports = require("aac900697d671819").getBundleURL("dvDVO") + "compile-worker.81bc0288.js";

},{"aac900697d671819":"8aZgg"}],"8aZgg":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["9bt33"], "9bt33", "parcelRequiree125")

//# sourceMappingURL=playground.dcee9b64.js.map
