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
 * Gets the width of the scrollbar in the current browser.
 */
function getScrollBarWidth(): number {
  let el: HTMLDivElement = document.createElement("div");

  // Make it overflow and add it to the body
  el.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
  document.body.appendChild(el);

  // Calculate the width of the scrollbar (may be 0 in some browsers or on phones)
  let width: number = el.offsetWidth - el.clientWidth;
  el.remove();

  return width;
}

/**
 * Fixes the sizes of the code editor and the console output.
 */
function setEditorAndConsoleSizes(): void {
  const mediumScreenSize = Number(getComputedStyle(
    codeTextAreaHighlightField
  ).getPropertyValue(
    '--medium-screen-size'
  ).replace("px", ''));

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
    codeTextAreaHighlightField.style.width = `${codeEditor.offsetWidth - 4 * rem - scrollBarWidth}px`;
    codeTextArea.style.height = `${codeEditor.offsetHeight - 2 * rem + scrollBarWidth}px`;
    codeTextArea.style.width = `${codeEditor.offsetWidth - 4 * rem - scrollBarWidth}px`;

    // Set console size
    // - Subtracts 2rem due to an inner padding of 1rem
    shellOutputResult.style.height = `${shellOutput.offsetHeight - 2 * rem}px`;
    shellOutputResult.style.width = `${shellOutput.offsetWidth - 2 * rem - scrollBarWidth}px`;
  }

  console.log(`REM: ${rem}`);
  console.log(`Code Editor: ${codeEditor.offsetWidth}x${codeEditor.offsetHeight}`);
  console.log(`Code Editor Textarea: ${codeTextArea.offsetWidth}x${codeTextArea.offsetHeight}`);
  console.log(`Code Editor Highlight Field: ${codeTextAreaHighlightField.offsetWidth}x${codeTextAreaHighlightField.offsetHeight}`);
  console.log(`Shell Output: ${shellOutput.offsetWidth}x${shellOutput.offsetHeight}`);
  console.log(`Shell Output Result: ${shellOutputResult.offsetWidth}x${shellOutputResult.offsetHeight}`);
}

// Properly configure the sizes of the items in the browser window. This should set every item relative to the maximum
// possible space available.
window.addEventListener(
  "DOMContentLoaded", async () => {
    await setEditorAndConsoleSizes();

    // After the initial setup, call the function again to let the DOM in the meantime update (allows for all final
    // sizes to be taken into account - Not the cleanest solution, but it works)
    setTimeout(setEditorAndConsoleSizes, 10);
  }
);
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
