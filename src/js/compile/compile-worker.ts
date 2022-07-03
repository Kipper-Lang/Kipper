// Import the kipper module
// eslint-disable-next-line no-undef
importScripts("//cdn.jsdelivr.net/npm/@kipper/core@latest/kipper-standalone.min.js");

// Import the babel transpiler
// eslint-disable-next-line no-undef
importScripts("//unpkg.com/@babel/standalone/babel.min.js");

// The message handler for the compiler log messages - We don't handle those yet and just log them onto the console
const msgHandler = (level, msg) => {
	// @ts-ignore
	// eslint-disable-next-line no-undef
	postMessage(`[${Kipper.getLogLevelString(level)}]: ${msg}`);
};

// Global logger for the compiler
// @ts-ignore
// eslint-disable-next-line no-undef
const logger = new Kipper.KipperLogger(msgHandler);

// Global compiler
// @ts-ignore
// eslint-disable-next-line no-undef
const compiler = new Kipper.KipperCompiler(logger);

/**
 * Evaluates the passed Kipper code using specific handlers.
 * @param code The translated code to evaluate. (Must be in JavaScript)
 */
async function evalKipperCode(code: string) {
	// Overwrite 'console.log'
	const prevLog = console.log;
	console.log = (msg: string) => {
		postMessage(msg);
	};

	// Eval the Kipper code
	eval(code);

	// Restore old 'console.log'
	console.log = prevLog;
}

// Define the handler for worker messages
onmessage = async function (event) {
	console.log("Received compilation request from main thread. Preparing compilation in Worker.");

	// Print version of Kipper
	// @ts-ignore
	// eslint-disable-next-line no-undef
	postMessage(`Kipper Compiler v${Kipper.version}\n`);

	// Compile the code to TypeScript
	let result: string;
	try {
		result = (await compiler.compile(event.data, {})).write();
	} catch (e) {
		postMessage(1);
		throw e;
	}

	// Evaluate the code
	try {
		// Transpile the code from TypeScript to JavaScript
		// @ts-ignore
		// eslint-disable-next-line no-undef
		const compiledCode = Babel.transform(result, {
			filename: "kipper-web-script.ts",
			presets: ["env", "typescript"],
		});

		// Switch to console output
		postMessage(0);

		await evalKipperCode(compiledCode.code);
	} catch (e) {
		postMessage(`\nEncountered Runtime error:\n  ${(<Error>e).name}: ${(<Error>e).message}`);
		postMessage(`\nIf this is unexpected, please report this bug to the developer on GitHub with your code snippet.`);
		postMessage(1);
		throw e;
	}

	// Return with exit code 0 (Success)
	postMessage(0);
};
