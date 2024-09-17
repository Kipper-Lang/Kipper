/**
 * Script for managing the code editor in the playground.
 */
import * as prism from "../../prism/prism-core.js";

import { runCode } from "./runner";
import { escapeHTMLChars } from "./tools";

const localStorageIdentifier = "kipper-code-editor-content";

// Editor elements
const codeTextArea: HTMLTextAreaElement = document.querySelector("#code-editor-textarea");
const codeTextAreaResultWrapper: HTMLElement = document.querySelector("#code-editor-highlighting-field");
const codeTextAreaResult: HTMLElement = document.querySelector("#code-editor-highlighting-field-content");
const textSavingState: HTMLDivElement = document.querySelector("#text-saving-state");
const phoneTextSavingState: HTMLDivElement = document.querySelector("#phone-text-saving-state");

// Menu buttons
let runCodeButton: HTMLButtonElement = document.querySelector("#run-code-list-item button");
const runCodeListItem: HTMLLIElement = document.querySelector("#run-code-list-item");
const copyCodeButton: HTMLButtonElement = document.querySelector("#copy-code-list-item button");
const clearContentButton: HTMLButtonElement = document.querySelector("#clear-content-list-item button");

/**
 * Writes the given text to the text saving state.
 * @param text The text to write.
 */
export function writeTextSavingState(text: string): void {
  phoneTextSavingState.classList.remove("fade-out");
  textSavingState.innerHTML = text;
  phoneTextSavingState.innerHTML = text;
  setTimeout(
    () => {
      phoneTextSavingState.classList.add("fade-out");
    },
    10000
  );
}

/**
 * Switches the interaction button to 'Run', so a new program can be started again.
 */
export function switchButtonToRun(): void {
  runCodeListItem.innerHTML = `<button>${window.locale["values"]["playground"]["buttons"]["run"]}</button>`;
  runCodeButton = document.querySelector("#run-code-list-item button");
  runCodeButton.addEventListener("click", runCode);
}

/**
 * Clears the content of the code editor.
 */
export function clearEditorContent(): void {
  console.log("Code Cleared!");
  codeTextArea.value = "";
  codeTextAreaResult.innerHTML = "";
  localStorage.setItem(localStorageIdentifier, "");
  writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["actions"]["cleared"]}</p>`);
}

/**
 * Copies the code from the code editor.
 */
export function copyEditorContent(): void {
  console.log("Code Copied!");
  navigator.clipboard.writeText(codeTextArea.value).then(() => {
    writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["actions"]["copied"]}</p>`);
  });
}

/**
 * Editor-Update, which allows for syntax highlighting
 * @param value The value the element was updated to
 */
export function writeEditorResultAndHighlight(value: string): void {
  // If the last character is a newline character
  // Add a placeholder space character to the final line
  if (value[value.length - 1] == "\n") {
    value += " ";
  }

  // Write results to the original 'codeInput' <textarea> and syntax-highlighted result
  codeTextAreaResult.innerHTML = escapeHTMLChars(value);

  // Highlight output field
  prism.highlightElement(codeTextAreaResult);

  // Sync formatting
  syncTextAreaSizeAndScroll();
}

/**
 * Checks whether the input key is a 'tab' and handles it appropriately for the code editor input.
 * @param event The key event.
 */
export function checkForTab(event: KeyboardEvent) {
  const element = codeTextArea;
  const code = element.value;
  if (event.key === "Tab") {
    event.preventDefault();

    // If the shift key is also pressed, push tabs back
    if (event.shiftKey) {
      const beforeTab = code.slice(0, element.selectionStart);
      const afterTab = code.slice(element.selectionEnd, element.value.length);

      // Remove tab char or whitespace if it exists
      if (beforeTab[beforeTab.length - 1] === "\t" || beforeTab[beforeTab.length - 1] === " ") {
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
      element.value = beforeTab + "\t" + afterTab;

      // Move cursor
      element.selectionStart = cursorPos;
      element.selectionEnd = cursorPos;
    }

    writeEditorResultAndHighlight(element.value);
  }
}

/**
 * Syncs the scrolling for both <textarea> and codeInputResult.
 */
export function syncTextAreaSizeAndScroll(): void {
  /* Scroll result to scroll coords of event - sync with textarea */

  // Get and set x and y
  codeTextAreaResultWrapper.scrollTop = codeTextArea.scrollTop;
  codeTextAreaResultWrapper.scrollLeft = codeTextArea.scrollLeft;
}

/**
 * Initializes the event listeners for this script.
 */
export function init(): void {
  // Playground menu buttons handling
  runCodeButton.addEventListener("click", runCode);
  copyCodeButton.addEventListener("click", copyEditorContent);
  clearContentButton.addEventListener("click", clearEditorContent);

  // Highlight new input
  codeTextArea.addEventListener("input", (event) => {
    const givenTextArea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    writeEditorResultAndHighlight(givenTextArea.value);
  });

  // Ensure the code text area stays properly formatted
  codeTextArea.addEventListener("scroll", syncTextAreaSizeAndScroll);
  codeTextArea.addEventListener("keydown", checkForTab);

  // Spinner animation & saving text
  let cancel;
  let spinning: boolean;
  codeTextArea.addEventListener("keyup", (event) => {
    // if cancel exists / is active -> clear timeout
    if (cancel) clearTimeout(cancel);

    // creating the new timeout and assigning it, if the user types more
    // the timeout will be cancelled and restarted, so that the caching is
    // only done when the user finished typing!
    cancel = setTimeout(() => {
      const givenTextArea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
      localStorage.setItem(localStorageIdentifier, givenTextArea.value);

      spinning = false;
      writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["save-state"]["saved"]}</p>`);
    }, 1000);

    if (!spinning) {
      writeTextSavingState(`<div id="text-save-spinner" class="spinner">
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
  });

  // Initialize the code input of the editor of the page
  // Restore the code if there has been a previous session
  const localStorageCodeInput = localStorage.getItem(localStorageIdentifier);
  if (localStorageCodeInput != undefined) {
    codeTextArea.value = localStorageCodeInput;
    writeEditorResultAndHighlight(localStorageCodeInput);
  } else {
    codeTextArea.value = "";
  }

  // If the input is not empty, signalize that code was restored
  if (codeTextArea.value.trim() !== "") {
    writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["save-state"]["loaded"]}</p>`);
  }
}
