/**
 * Main file for the playground, which implements the compilation and online editor behaviour.
 */

// Editor elements
const interactiveCodeEditor: HTMLDivElement = document.querySelector("#interactive-code-editor");
const playgroundOptionMenu: HTMLDivElement = document.querySelector("#playground-option-menu");
const codeEditor: HTMLDivElement = document.querySelector("#code-editor");
const codeTextArea: HTMLTextAreaElement = document.querySelector("#code-editor-textarea");
const codeTextAreaHighlightField: HTMLElement = document.querySelector("#code-editor-highlighting-field");

// Sidebar editor fields
const shellOutput: HTMLDivElement = document.querySelector("#shell-output");
const shellOutputResult: HTMLElement = document.querySelector("#shell-sidebar-highlight-field-content");

// Size of a rem unit in pixels
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

/**
 * Fixes the sizes of the code editor and the console output.
 */
function setEditorAndConsoleSizes(): void {
  const mediumScreenSize = Number(getComputedStyle(
    codeTextAreaHighlightField
  ).getPropertyValue(
    '--medium-screen-size'
  ).replace("px", ''));

  if (window.innerWidth <= mediumScreenSize) {
    // -- Small screen configuration (Automatically done by CSS) --
    // Set editor size
    // - Subtract 2rem for the height due to an inner padding of 1rem
    // - Unset the width as it will automatically fill up the available space
    codeEditor.style.height = `${interactiveCodeEditor.clientHeight - playgroundOptionMenu.clientHeight}px`;

    codeTextAreaHighlightField.style.height = `${codeEditor.clientHeight - 2 * rem}px`;
    codeTextAreaHighlightField.style.width = undefined;
    codeTextArea.style.height = `${codeEditor.clientHeight - 2 * rem}px`;
    codeTextArea.style.width = undefined;

    // Set console size
    // - Subtract 2rem for the height due to an inner padding of 1rem
    shellOutputResult.style.height = `${shellOutput.clientHeight - 2 * rem}px}`;
    shellOutputResult.style.width = undefined;
  } else {
    // -- Large screen configuration --
    // Set editor size
    // - Subtract 2rem for the height due to an inner padding of 1rem
    // - Subtract 4rem for the width due to an inner padding of 3rem + 1rem
    codeTextAreaHighlightField.style.height = `${codeEditor.clientHeight - 2 * rem}px`;
    codeTextAreaHighlightField.style.width = `${codeEditor.clientWidth - 4 * rem}px`;
    codeTextArea.style.height = `${codeEditor.clientHeight - 2 * rem}px`;
    codeTextArea.style.width = `${codeEditor.clientWidth - 4 * rem}px`;

    // Set console size
    // - Subtracts 2rem due to an inner padding of 1rem
    shellOutputResult.style.height = `${shellOutput.clientHeight - 2 * rem}px`;
    shellOutputResult.style.width = `${shellOutput.clientWidth - 2 * rem}px`;
  }

  console.log(`REM: ${rem}`);
  console.log(`Code Editor: ${codeEditor.clientWidth}x${codeEditor.clientHeight}`);
  console.log(`Code Editor Textarea: ${codeTextArea.clientWidth}x${codeTextArea.clientHeight}`);
  console.log(`Code Editor Highlight Field: ${codeTextAreaHighlightField.clientWidth}x${codeTextAreaHighlightField.clientHeight}`);
  console.log(`Shell Output: ${shellOutput.clientWidth}x${shellOutput.clientHeight}`);
  console.log(`Shell Output Result: ${shellOutputResult.clientWidth}x${shellOutputResult.clientHeight}`);
}

// Properly configure the sizes of the items in the browser window. This should set every item relative to the maximum
// possible space available.
window.addEventListener("DOMContentLoaded", setEditorAndConsoleSizes);
window.addEventListener("resize", setEditorAndConsoleSizes);

// Initialize the editor, console and runner
import { init as initEditor } from "./editor";
import { init as initConsole } from "./console";
import { init as initRunner } from "./runner";

window.addEventListener("DOMContentLoaded", () => {
  initEditor();
  initConsole();
  initRunner();
});
