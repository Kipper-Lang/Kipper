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

// Startup message to display in the console output when the playground is first loaded
const STARTUP_MESSAGE = `--- Welcome to the Kipper Playground! ---

Try out your first program by writing:

  print("Hello world");

Create your first variable by writing:

  var myString: str = "Hello world!";
  print(myString);

Perform your first calculations by writing:

  var result: num = 3.14 * 9;
  print(result);

Like any other language, Kipper provides loops like while-loops:

  var i: num = 0;
  while (i < 5) {
    print(i);
    i = i + 1;
  }

And you can also use classic loops:

  for (var i: num = 0; i < 5; i = i + 1) {
    print(i);
  }

You can use conditionals:

  var x: num = 10;
  if (x > 5) {
    print("x is greater than 5");
  } else {
    print("x is less than or equal to 5");
  }

You can define functions:

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
  print(isPrime(17));
  print(isPrime(50));

You can also work with interface, classes and other higher level programming concepts:

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

	var calc: Calculator = new Calculator();
	calc.add(10);
	calc.subtract(3);
	print(calc.getBalance() as str);
`;

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
	clearConsoleOutput();
	const welcomeMessage: Array<string> = STARTUP_MESSAGE.split("\n");

	// Write to the console
	for (const msg of welcomeMessage) {
		writeLineToConsoleOutput(msg);
	}
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
 * Initialises the event listeners for this script.
 */
export function init(): void {
	// Print default message to the console output
	switchToConsoleOutput();
	writeConsoleOutputDefaultMessage();

	// Sidebar button handling
	consoleOutputButton.addEventListener("click", switchToConsoleOutput);
	compilerOutputButton.addEventListener("click", switchToCompilerOutput);
}
