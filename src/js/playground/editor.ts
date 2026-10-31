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

const STARTUP_CODE_SAMPLE = `/**
 * Welcome to the Kipper Playground!
 *
 * Kipper transpiles to both JavaScript and TypeScript,
 * so concepts should feel familiar to experienced
 * developers. While the fundamentals are similar,
 * Kipper enforces strict safe typing on all variables,
 * functions and objects. This avoids ambiguity and
 * allows errors to be caught right at the source!
 *
 * Here is a brief overview what Kipper can do:
 */
print("--    Welcome to Kipper!   --\\n--  Happy to have you here!  --\\n");

// Defining a function works like this:
def isPrime(x: num) -> bool {
	if (x <= 1) {
		return false;
	}
	for (var i: num = 2; i < x; i = i + 1) {
		if (x % i == 0) {
			return false;
		}
	}
	return true;
}
print(f"Is 13 prime? {isPrime(13) ? 'yes' : 'no'}");
print(f"Is 25 prime? {isPrime(25) ? 'yes' : 'no'}");

// And a class can be implemented like this:
class Calculator {
	balance: num;

	constructor() {
		this.balance = 0;
	}

	add(x: num): void {
		this.balance = this.balance + x;
	}

	subtract(x: num): void {
		this.balance = this.balance - x;
	}

	getBalance(): num {
		return this.balance;
	}
}

// Variables and objects can be defined like this:
var calc: Calculator = new Calculator();
calc.add(10);
calc.subtract(3);
print(f"Current balance: {calc.getBalance()}");

// One of the biggest feature is pattern matching!
interface Shape {
	width: num;
	height: num;
	color: str;
}

// We get some unknown data and can then see if it
// matches the shape interface we defined earlier!
// Interfaces in this way are tangible types that
// can be used beyond just compiler checks!
const someWebFunc: Func<obj> = (): obj -> {
	return { width: 10, height: 20, color: "red", dotted: true };
};
const someData: obj = someWebFunc();
if (someData matches Shape) {
	print("We got a shape over here!");
} else {
	print("Doesn't fit the shape category apparently");
}
`;

let disappear: ReturnType<typeof setTimeout>;
/**
 * Writes the given text to the text saving state.
 * @param text The text to write.
 */
export async function writeTextSavingState(text: string): Promise<void> {
	phoneTextSavingState.classList.remove("fade-out");
	textSavingState.innerHTML = text;
	phoneTextSavingState.innerHTML = text;

	if (disappear) clearTimeout(disappear);
	disappear = setTimeout(() => phoneTextSavingState.classList.add("fade-out"), 10000);
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
	void writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["actions"]["cleared"]}</p>`);
}

/**
 * Copies the code from the code editor.
 */
export function copyEditorContent(): void {
	console.log("Code Copied!");
	navigator.clipboard.writeText(codeTextArea.value).then(() => {
		void writeTextSavingState(`<p class="gray-text">${window.locale["values"]["playground"]["actions"]["copied"]}</p>`);
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
	codeTextArea.addEventListener(
		"keydown",
		async (event) => {
			// if cancel exists / is active -> clear timeout
			if (cancel) clearTimeout(cancel);

			// creating the new timeout and assigning it, if the user types more
			// the timeout will be cancelled and restarted, so that the caching is
			// only done when the user finished typing!
			cancel = setTimeout(async () => {
				const givenTextArea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
				localStorage.setItem(localStorageIdentifier, givenTextArea.value);

				spinning = false;
				await writeTextSavingState(
					`<p class="gray-text">${window.locale["values"]["playground"]["save-state"]["saved"]}</p>`,
				);
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
		},
		{ once: false },
	);

	// Initialise the code input of the editor of the page
	// Restore the code if there has been a previous session
	const localStorageCodeInput: string | null = localStorage.getItem(localStorageIdentifier);
	if (localStorageCodeInput && localStorageCodeInput.trim() !== "") {
		// Non-null and non-empty string
		codeTextArea.value = localStorageCodeInput;
		writeEditorResultAndHighlight(localStorageCodeInput);
		void writeTextSavingState(
			`<p class="gray-text">${window.locale["values"]["playground"]["save-state"]["loaded"]}</p>`,
		);
	} else {
		codeTextArea.value = STARTUP_CODE_SAMPLE;
		writeEditorResultAndHighlight(STARTUP_CODE_SAMPLE);
	}
}
