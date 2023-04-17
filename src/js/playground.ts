/**
 * Main file for the playground, which implements the compilation and online editor behaviour.
 */

import * as prism from "../prism/prism";

// Initialise Prism
(() => {
	prism.languages["kipper"] = {
		...prism.languages["typescript"],
	};
})();

const localStorageIdentifier = "kipper-code-editor-content";

// Editor elements
const codeEditor: HTMLDivElement = document.querySelector("#code-editor");
const codeTextArea: HTMLTextAreaElement = document.querySelector("#code-editor-textarea");
const codeTextAreaResultWrapper: HTMLElement = document.querySelector("#highlighting-field");
const codeTextAreaResult: HTMLElement = document.querySelector("#highlighting-field-content");
const textSavingState: HTMLDivElement = document.querySelector("#text-saving-state");

// Version selector dropdown
const versionSelectorDropdown: HTMLUListElement = document.querySelector("#versions-dropdown");

// Menu buttons
let runCodeButton: HTMLButtonElement = document.querySelector("#run-code-list-item button");
const runCodeListItem: HTMLLIElement = document.querySelector("#run-code-list-item");
const copyCodeButton: HTMLButtonElement = document.querySelector("#copy-code-list-item button");
const clearContentButton: HTMLButtonElement = document.querySelector("#clear-content-list-item button");

// Version selector button
const versionSelectorButton: HTMLButtonElement = document.querySelector("#version-selector-root-button-wrapper button");
const versionSelectorButtonVersionText: HTMLSpanElement = document.querySelector(
	"#version-selector-root-button-wrapper button span",
);

// Sidebar editor fields
const shellOutput: HTMLDivElement = document.querySelector("#shell-output");
const shellOutputResult: HTMLElement = document.querySelector("#shell-sidebar-highlight-field-content");

// Sidebar buttons
const consoleOutputButton: HTMLButtonElement = document.querySelector("#console-output-button button");
const compilerOutputButton: HTMLButtonElement = document.querySelector("#compiler-output-button button");

// Active version of the compiler.
// This will be used to check whether the version selection was changed before starting a new compilation,
// so that we can ensure the selected version is used instead of the old one. This value will only be changed
// when the version is passed onto the compiler (e.g. the version has been loaded).
let activeEnvVersion: string = getKipperVersion();

// Global web worker that will run the code
let worker: Worker = createCompilerWebWorker();

// Status code returns
const statusFailure = 1;

// Program states
let compiling = false;
let running = false;
let consoleOutputSelected = true;

// Store the warmup promise
let warmUp: Promise<void> | undefined = undefined;

/**
 * Ensures that a version is set in the {@link localStorage} field 'kipperVersion'.
 */
function ensureVersionIsSet(): void {
	if (!localStorage.getItem("kipperVersion")) {
		// Get the default version from the dropdown (EJS will have handled this and rendered the correct version)
		// Remove the 'v' prefix, as for NPM versions, the 'v' prefix is not used.
		const defaultVersion = versionSelectorButtonVersionText.innerText.replace("v", "");

		localStorage.setItem("kipperVersion", defaultVersion);
	}
}

/**
 * Get the current version set for the Kipper compiler.
 */
function getKipperVersion(): string {
	ensureVersionIsSet();
	return getKipperVersionUnsafe()!;
}

/**
 * Unsafe version of {@link getKipperVersion}, which does not ensure that the version is set.
 *
 * This means it may return null if there hasn't been a version set before.
 */
function getKipperVersionUnsafe(): string | null {
	return localStorage.getItem("kipperVersion");
}

/**
 * Sets the {@link localStorage} field 'kipperVersion' to the specified {@link version}.
 * @param version The version to set.
 */
function setKipperVersion(version: string) {
	localStorage.setItem("kipperVersion", version);

	// Set the version in the dropdown button
	versionSelectorButtonVersionText.innerHTML = `v${version}`;
}

/**
 * Wrap up function that will be called once the compiler has been downloaded and initialised in the web worker.
 *
 * Called by {@link warmUpCompiler warmUpCompiler()}.
 */
async function wrapUpWarmUp(): Promise<void> {
	warmUp = undefined;
	worker.onmessage = undefined;
	console.log("Finished warming up the compiler!");
}

/**
 * Creates a new web worker and initialises the Kipper Compiler in the wbe worker thread.
 */
function createCompilerWebWorker(): Worker {
	let newWorker = new Worker(
		// @ts-ignore
		new URL("./compile/compile-worker.ts", import.meta.url),
	);

	// Send the version to the worker
	activeEnvVersion = getKipperVersion();
	newWorker.postMessage(activeEnvVersion);
	return newWorker;
}

/**
 * Ensure that the Kipper Compiler is using the latest selected version.
 */
function ensureCompilerWebWorkerIsUpToDate(): void {
	if (getKipperVersionUnsafe() !== activeEnvVersion) {
		// Create a new worker and set it as the current worker
		worker = createCompilerWebWorker();
	}
}

/**
 * Warms up the compiler by running a simple default program.
 *
 * Running this function will allow the compiler and parser to use caching to speed up future compilations.
 */
async function warmUpCompiler(): Promise<void> {
	console.log("Warming up compiler...");
	if (window.Worker) {
		worker.onmessage = (event: MessageEvent) => {
			const numMsg: boolean = typeof event.data === "number" || event.data instanceof Number;
			if (numMsg) {
				const statusCode = event.data as number;
				if (!running) {
					// Only if the status code is 0 the compilation successfully finished.
					if (statusCode === 0) {
						running = true;
					} else {
						wrapUpWarmUp();
					}
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

/**
 * Runs the code using a web worker and writes the console output to the "virtual" terminal.
 */
async function runCode(): Promise<void> {
	runCodeListItem.innerHTML = `<button>Stop</button>`;
	runCodeButton = document.querySelector("#run-code-list-item button");
	runCodeButton.addEventListener("click", stopCode);

	if (window.Worker) {
		// Clear the console
		clearConsoleOutput();
		clearCompilerOutput();

		// If the compiler is warming up, wait for it to finish
		if (warmUp) {
			console.log("Received 'run' operation too soon. Waiting for warmup to finish...");
			while (warmUp) {
				// Wait for 100ms and then try again checking if the warmUp is done
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
		}

		// Ensure that the compiler is using the latest selected version
		ensureCompilerWebWorkerIsUpToDate();

		console.log("Reading editor content and preparing compilation");

		// Enable compiler logs
		switchToCompilerOutput();

		// Start timer
		const startTime: number = new Date().getTime();

		// Signalise compilation is currently undergoing
		compiling = true;

		// Event handler for the return. This imitates stdout.
		worker.onmessage = async (event: MessageEvent) => {
			const stringMsg: boolean = typeof event.data === "string" || event.data instanceof String;
			const numMsg: boolean = typeof event.data === "number" || event.data instanceof Number;

			// String values represent runtime or compilation log messages
			if (stringMsg) {
				if (!running) {
					// Write compiler logs
					writeLineToCompilerOutput(event.data as string);
				} else {
					// Write stdout output
					writeLineToConsoleOutput(event.data as string);
				}
				// Numeric values signalise change of state or program handling
			} else if (numMsg) {
				const statusCode = event.data as number;
				if (!running) {
					// Only if the status code is 0 the compilation successfully finished.
					if (statusCode === 0) {
						// Compilation finished -> Say how long it took
						const endTimeInSeconds: number = (new Date().getTime() - startTime) / 1000;
						writeLineToCompilerOutput(`\nCompilation finished in ${endTimeInSeconds}s`);

						// Enable output to 'stdout'
						switchToConsoleOutput();
						running = true;
						compiling = false;
					} else {
						// Abort because of the error
						await stopCode();
					}
				} else {
					// End of the program
					printProgramExitCode(statusCode);
					switchButtonToRun();
				}
			} else {
				// Unknown message type
				console.error(`Invalid message from WebWorker: ${event.data}`);
			}
		};

		// Post the message to tell the worker to process the code
		const currentCode = codeTextArea.value;
		worker.postMessage(currentCode);
	} else {
		alert("Your browser does not support web-workers! Aborting operation.");
	}
}

/**
 * Switches the interaction button to 'Run', so a new program can be started again.
 */
function switchButtonToRun(): void {
	runCodeListItem.innerHTML = `<button>Run</button>`;
	runCodeButton = document.querySelector("#run-code-list-item button");
	runCodeButton.addEventListener("click", runCode);
}

/**
 * Safely aborts the worker's current process and recreates it.
 */
async function safeAbortWorker(): Promise<void> {
	if (window.Worker) {
		// If there is no current execution, return.
		if (worker === undefined) {
			return;
		}

		// Sadly only using a full termination of the worker we can stop the code from running
		// This has the downside of recreating the worker and as such losing the warmup performance boost of the Parser.
		worker.terminate();

		// Recreate the worker now to save time for the next run call.
		worker = createCompilerWebWorker();
	} else {
		alert("Your browser does not support web-workers! Aborting operation.");
	}
}

/**
 * Stops the WebWorker from executing the current code.
 */
async function stopCode(): Promise<void> {
	switchButtonToRun();
	await safeAbortWorker();

	if (compiling || !consoleOutputSelected) {
		switchToCompilerOutput();
		writeLineToCompilerOutput("\nCompilation terminated.");
	} else if (running || consoleOutputSelected) {
		switchToConsoleOutput();
		printProgramExitCode(statusFailure);
	} // If nothing is going on rn, just keep the console output as it is

	compiling = false;
	running = false;
}

/**
 * Prints the passed exit status onto the console
 * @param exitCode The exit code to print.
 */
function printProgramExitCode(exitCode: number) {
	writeLineToConsoleOutput(`\nFinished execution with exit code ${exitCode}.`);
	running = false;
	compiling = false;
}

/**
 * Clears the content of the code editor.
 */
function clearEditorContent(): void {
	console.log("Code Cleared!");
	codeTextArea.value = "";
	codeTextAreaResult.innerHTML = "";
	localStorage.setItem(localStorageIdentifier, "");
	textSavingState.innerHTML = `<p class="gray-text">Code cleared!</p>`;
}

/**
 * Copies the code from the code editor.
 */
function copyEditorContent(): void {
	console.log("Code Copied!");
	navigator.clipboard.writeText(codeTextArea.value).then(() => {
		textSavingState.innerHTML = `<p class="gray-text">Code copied!</p>`;
	});
}

/**
 * Disables the visibility of the dropdown menu.
 */
function disableVersionDropdownVisibility(): void {
	versionSelectorDropdown.style.visibility = "hidden";
	versionSelectorDropdown.style.display = "none";
}

/**
 * Enables the visibility of the dropdown menu.
 */
function enableVersionDropdownVisibility(): void {
	versionSelectorDropdown.style.visibility = "visible";
	versionSelectorDropdown.style.display = "unset";
}

/**
 * Toggles on or off the dropdown for the version picker.
 */
function toggleVersionDropdownVisibility(): void {
	const isVisible =
		versionSelectorDropdown.style.visibility === "visible" && versionSelectorDropdown.style.display !== "none";
	if (isVisible) {
		disableVersionDropdownVisibility();
	} else {
		enableVersionDropdownVisibility();
	}
}

/**
 * Sets the version of the playground to the version that was selected.
 * @param versionListItem The list item that was clicked.
 */
async function selectPlaygroundVersion(versionListItem: HTMLLIElement): Promise<void> {
	// Set the version based on the data field of the element
	const version = versionListItem.getAttribute("data-version");
	console.log(version);
	if (version !== null) {
		setKipperVersion(version);
		disableVersionDropdownVisibility(); // Hide the dropdown
	}
}

let consoleOutput = "";
let compilerOutput = "";

/**
 * Switches the side panel interface to the program console output.
 */
function switchToConsoleOutput() {
	// Change styling
	compilerOutputButton.style.borderBottom = "2px solid var(--scheme-gray)";
	consoleOutputButton.style.borderBottom = "3px solid var(--scheme-primary)";

	writeConsoleResultAndHighlight(consoleOutput);
	consoleOutputSelected = true;
}

/**
 * Switches the side panel interface to the compiler logs output.
 */
function switchToCompilerOutput() {
	// Change styling console
	consoleOutputButton.style.borderBottom = "2px solid var(--scheme-gray)";
	compilerOutputButton.style.borderBottom = "3px solid var(--scheme-primary)";

	writeConsoleResultAndHighlight(compilerOutput);
	consoleOutputSelected = false;
}

/**
 * Write to the console the default welcome message
 */
function writeConsoleOutputDefaultMessage(): void {
	// Clear output
	clearConsoleOutput();

	const welcomeMessage: Array<string> = [
		"--- Welcome to the Kipper Playground! ---\n",
		"Try out your first program by writing:\n",
		'  call print("Hello world");\n',
		"Create your first variable by writing:\n",
		'  var myString: str = "Hello world!";',
		"  call print(myString);\n",
		"Perform your first calculations by writing:\n",
		"  var result: num = 3.14 * 9;",
		"  call print(result as str);\n",
	];

	// Write to the console
	for (const msg of welcomeMessage) {
		writeLineToConsoleOutput(msg);
	}
}

/**
 * Escapes all '&', '<' and '>' characters.
 */
function escapeHTMLChars(str: string): string {
	return str
		.replace(new RegExp("&", "g"), "&amp;")
		.replace(new RegExp("<", "g"), "&lt;")
		.replace(new RegExp(">", "g"), "&gt;");
}

/**
 * Editor-Update, which allows for syntax highlighting
 * @param value The value the element was updated to
 */
function writeEditorResultAndHighlight(value: string): void {
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
function checkForTab(event: KeyboardEvent) {
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
function syncTextAreaSizeAndScroll(): void {
	/* Scroll result to scroll coords of event - sync with textarea */

	// Get and set x and y
	codeTextAreaResultWrapper.scrollTop = codeTextArea.scrollTop;
	codeTextAreaResultWrapper.scrollLeft = codeTextArea.scrollLeft;
}

/**
 * Write the passed text onto the console and applies syntax highlighting.
 * @param value The text to write.
 */
function writeConsoleResultAndHighlight(value: string): void {
	// If the last character is a newline character
	// Add a placeholder space character to the final line
	if (value[value.length - 1] == "\n") {
		value += " ";
	}

	// Write content to the console
	shellOutputResult.innerHTML = escapeHTMLChars(value);

	console.log(shellOutputResult);

	// Highlight output field
	prism.highlightElement(shellOutputResult);
}

/**
 * Appends a new line to the console output and applies syntax highlighting.
 * @param value The line to add.
 */
function writeLineToConsoleOutput(value: string): void {
	// Switch to the console output, if the sidebar wasn't already set to it
	if (!consoleOutputSelected) {
		switchToConsoleOutput();
	}

	consoleOutput += value + "\n";
	writeConsoleResultAndHighlight(consoleOutput);
}

function writeLineToCompilerOutput(value: string): void {
	// Switch to the compiler output, if the sidebar wasn't already set to it
	if (consoleOutputSelected) {
		switchToCompilerOutput();
	}

	compilerOutput += value + "\n";
	writeConsoleResultAndHighlight(compilerOutput);
}

/**
 * Clears the content of the console.
 */
function clearConsoleOutput(): void {
	consoleOutput = "";

	// Don't override the compiler output if it's selected and only clear the console output
	if (consoleOutputSelected) {
		writeConsoleResultAndHighlight("");
	}
}

/**
 * Clears the content of the console.
 */
function clearCompilerOutput(): void {
	compilerOutput = "";

	// Don't override the console output if it's selected and only clear the compiler output
	if (!consoleOutputSelected) {
		writeConsoleResultAndHighlight("");
	}
}

/**
 * Fixes the sizes of the code editor.
 */
function setEditorAndConsoleSizes(): void {
	const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

	// Set editor size
	// - Subtract 2rem for the height due to an inner padding of 1rem
	// - Subtract 4rem for the width due to an inner padding of 3rem + 1rem
	codeTextAreaResultWrapper.style.height = `${codeEditor.clientHeight - 2 * rem}px`;
	codeTextAreaResultWrapper.style.width = `${codeEditor.clientWidth - 4 * rem}px`;
	codeTextArea.style.height = `${codeEditor.clientHeight - 2 * rem}px`;
	codeTextArea.style.width = `${codeEditor.clientWidth - 4 * rem}px`;

	// Set console size. Subtracts -2rem due to an inner padding of 1rem
	shellOutputResult.style.height = `${shellOutput.clientHeight - 2 * rem}px`;
	shellOutputResult.style.width = `${shellOutput.clientWidth - 2 * rem}px`;
}

// Print default message to the console output
window.addEventListener("DOMContentLoaded", switchToConsoleOutput);
window.addEventListener("DOMContentLoaded", writeConsoleOutputDefaultMessage);

// Initialise the code input of the editor of the page
window.addEventListener("DOMContentLoaded", () => {
	// Restore the code if there has been a previous session
	const localStorageCodeInput = localStorage.getItem(localStorageIdentifier);
	if (localStorageCodeInput != undefined) {
		codeTextArea.value = localStorageCodeInput;
		writeEditorResultAndHighlight(localStorageCodeInput);
	} else {
		codeTextArea.value = "";
	}

	// If the input is not empty, signalise that code was restored
	if (codeTextArea.value.trim() !== "") {
		textSavingState.innerHTML = `<p class="gray-text">Code restored :)</p>`;
	}
});

// Warmup the compiler to speed up future compilations
window.addEventListener("DOMContentLoaded", async () => {
	// Add loading message (Don't switch the compiler output window though)
	compilerOutput = "--- Loading compiler... ---";

	// Ensure we switch to the stored version, when the page is loaded
	const storedVersion = getKipperVersionUnsafe();
	if (storedVersion !== null) {
		// Switch to the stored version if there has been a previous session
		setKipperVersion(storedVersion);
	}

	// Warm up the compiler
	warmUp = warmUpCompiler();

	// Afterwards display the ready message
	compilerOutput = "--- Kipper Compiler ready for compilation --- ";
});

// Playground menu buttons handling
runCodeButton.addEventListener("click", runCode);
copyCodeButton.addEventListener("click", copyEditorContent);
clearContentButton.addEventListener("click", clearEditorContent);

// Version selector button
versionSelectorButton.addEventListener("click", toggleVersionDropdownVisibility);

// Sidebar button handling
consoleOutputButton.addEventListener("click", switchToConsoleOutput);
compilerOutputButton.addEventListener("click", switchToCompilerOutput);

// Version selector dropdown handling (clicking on a version)
const versionSelectorDropdownItems = document.querySelectorAll("#versions-dropdown .version-selector-button-wrapper");
versionSelectorDropdownItems.forEach((item: HTMLLIElement) => {
	item.addEventListener("click", async () => await selectPlaygroundVersion(item));
});

// Highlight new input
codeTextArea.addEventListener("input", (event) => {
	const givenTextArea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
	writeEditorResultAndHighlight(givenTextArea.value);
});

// Ensure the code text area stays properly formatted
codeTextArea.addEventListener("scroll", syncTextAreaSizeAndScroll);
codeTextArea.addEventListener("keydown", checkForTab);

// Properly configure the sizes of the items in the browser window. This should set every item relative to the maximum
// possible space available.
window.addEventListener("DOMContentLoaded", setEditorAndConsoleSizes);
window.addEventListener("resize", setEditorAndConsoleSizes);

// Runtime variable for the writing event listener
let cancel;
let spinning: boolean;

// Adding keyup listener
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
		textSavingState.innerHTML = `<p class="gray-text">Code Saved!</p>`;
	}, 1000);

	if (!spinning) {
		textSavingState.innerHTML = `<div id="text-save-spinner" class="spinner">
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
      <p class="gray-text">Saving...</p>
    `;
		spinning = true;
	}
});
