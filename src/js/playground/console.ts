/**
 * Script for managing the console output in the playground.
 */
import * as prism from "../../prism/prism-core.js";
import { escapeHTMLChars } from "./tools";

let consoleOutputSelected = true;
let consoleOutput = "";
let compilerOutput = "";

// Sidebar editor fields
const shellOutputResult: HTMLElement = document.querySelector("#shell-sidebar-highlight-field-content");

// Sidebar buttons
const consoleOutputButton: HTMLButtonElement = document.querySelector("#console-output-button button");
const compilerOutputButton: HTMLButtonElement = document.querySelector("#compiler-output-button button");

/**
 * Returns whether the console output is selected or not (the compiler logs are selected).
 */
export function isConsoleOutputSelected(): boolean {
	return consoleOutputSelected;
}

/**
 * Switches the side panel interface to the program console output.
 */
export function switchToConsoleOutput() {
	// Change styling
	compilerOutputButton.style.borderBottom = "2px solid var(--scheme-gray)";
	consoleOutputButton.style.borderBottom = "3px solid var(--scheme-primary)";

	writeConsoleResultAndHighlight(consoleOutput);
	consoleOutputSelected = true;
}

/**
 * Switches the side panel interface to the compiler logs output.
 */
export function switchToCompilerOutput() {
	// Change styling console
	consoleOutputButton.style.borderBottom = "2px solid var(--scheme-gray)";
	compilerOutputButton.style.borderBottom = "3px solid var(--scheme-primary)";

	writeConsoleResultAndHighlight(compilerOutput);
	consoleOutputSelected = false;
}

/**
 * Write to the console the default welcome message
 */
export function writeConsoleOutputDefaultMessage(): void {
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
 * Prints the passed exit status onto the console
 * @param exitCode The exit code to print.
 */
export function printProgramExitCode(exitCode: number) {
	writeLineToConsoleOutput(`\nFinished execution with exit code ${exitCode}.`);
}

/**
 * Write the passed text onto the console and applies syntax highlighting.
 * @param value The text to write.
 */
export function writeConsoleResultAndHighlight(value: string): void {
	// If the last character is a newline character
	// Add a placeholder space character to the final line
	if (value[value.length - 1] == "\n") {
		value += " ";
	}

	// Write content to the console
	shellOutputResult.innerHTML = escapeHTMLChars(value);

	// Highlight output field
	prism.highlightElement(shellOutputResult);
}

/**
 * Appends a new line to the console output and applies syntax highlighting.
 * @param value The line to add.
 */
export function writeLineToConsoleOutput(value: string): void {
	// Switch to the console output, if the sidebar wasn't already set to it
	if (!consoleOutputSelected) {
		switchToConsoleOutput();
	}

	consoleOutput += value + "\n";
	writeConsoleResultAndHighlight(consoleOutput);
}

export function writeLineToCompilerOutput(value: string): void {
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
export function clearConsoleOutput(): void {
	consoleOutput = "";

	// Don't override the compiler output if it's selected and only clear the console output
	if (consoleOutputSelected) {
		writeConsoleResultAndHighlight("");
	}
}

/**
 * Clears the content of the console.
 */
export function clearCompilerOutput(): void {
	compilerOutput = "";

	// Don't override the console output if it's selected and only clear the compiler output
	if (!consoleOutputSelected) {
		writeConsoleResultAndHighlight("");
	}
}

/**
 * Initializes the event listeners for this script.
 */
export function init(): void {
	// Print default message to the console output
  switchToConsoleOutput();
  writeConsoleOutputDefaultMessage();

	// Sidebar button handling
	consoleOutputButton.addEventListener("click", switchToConsoleOutput);
	compilerOutputButton.addEventListener("click", switchToCompilerOutput);
}
