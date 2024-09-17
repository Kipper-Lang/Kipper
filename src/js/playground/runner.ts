/**
 * Script for managing the code runner and execution functionality in the playground.
 */
import { getKipperVersion, getKipperVersionUnsafe, setKipperVersion } from "./version";
import {
	clearCompilerOutput,
	clearConsoleOutput,
	isConsoleOutputSelected,
	printProgramExitCode,
	switchToCompilerOutput,
	switchToConsoleOutput,
	writeLineToCompilerOutput,
	writeLineToConsoleOutput,
} from "./console";
import { switchButtonToRun } from "./editor";

const codeTextArea: HTMLTextAreaElement = document.querySelector("#code-editor-textarea");
const runCodeListItem: HTMLLIElement = document.querySelector("#run-code-list-item");
let runCodeButton: HTMLButtonElement = document.querySelector("#run-code-list-item button");

// Active version of the compiler.
// This will be used to check whether the version selection was changed before starting a new compilation,
// so that we can ensure the selected version is used instead of the old one. This value will only be changed
// when the version is passed onto the compiler (e.g. the version has been loaded).
let activeEnvVersion: string = getKipperVersion();

// Global web worker that will run the code
let worker: Worker = createCompilerWebWorker();

// Status code returns
const STATUS_FAILURE = 1;

// Program states
let compiling = false;
let running = false;

// Store the warmup promise
let warmUp: Promise<void> | undefined = undefined;

/**
 * Wrap up function that will be called once the compiler has been downloaded and initialised in the web worker.
 *
 * Called by {@link warmUpCompiler warmUpCompiler()}.
 */
export async function wrapUpWarmUp(): Promise<void> {
	warmUp = undefined;
	worker.onmessage = undefined;
	console.log("Finished warming up the compiler!");
}

/**
 * Creates a new web worker and initialises the Kipper Compiler in the wbe worker thread.
 */
export function createCompilerWebWorker(): Worker {
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
export function ensureCompilerWebWorkerIsUpToDate(): void {
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
export async function warmUpCompiler(): Promise<void> {
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
export async function runCode(): Promise<void> {
	runCodeListItem.innerHTML = `<button>${window.locale["values"]["playground"]["buttons"]["stop"]}</button>`;
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
					resetRunnerState();
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
 * Safely aborts the worker's current process and recreates it.
 */
export async function safeAbortWorker(): Promise<void> {
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
export async function stopCode(): Promise<void> {
	switchButtonToRun();
	await safeAbortWorker();

	let consoleOutputSelected = isConsoleOutputSelected();
	if (compiling || !consoleOutputSelected) {
		switchToCompilerOutput();
		writeLineToCompilerOutput("\nCompilation terminated.");
	} else if (running || consoleOutputSelected) {
		switchToConsoleOutput();
		printProgramExitCode(STATUS_FAILURE);
	} // If nothing is going on rn, just keep the console output as it is

	resetRunnerState();
}

export function resetRunnerState(): void {
	running = false;
	compiling = false;
}

/**
 * Initializes the event listeners for this script.
 */
export function init(): void {
	// Warmup the compiler to speed up future compilations
	// Add loading message (Don't switch the compiler output window though)
	writeLineToCompilerOutput("--- Loading compiler... ---");

	// Ensure we switch to the stored version, when the page is loaded
	const storedVersion = getKipperVersionUnsafe();
	if (storedVersion !== null) {
		// Switch to the stored version if there has been a previous session
		setKipperVersion(storedVersion);
	}

	// Warm up the compiler
	warmUp = warmUpCompiler();

	// Afterwards display the ready message
	clearCompilerOutput();
	writeLineToCompilerOutput("--- Kipper Compiler ready for compilation --- ");
}
