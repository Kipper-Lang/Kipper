/**
 * Compiler worker responsible for handling the compilation of a Kipper program in a separate thread.
 */

let compilerInitialised: boolean = false;
let initFailed: boolean = false;
let logger: never | any;
let compiler: never | any;

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

/**
 * Initialises the Kipper Compiler.
 * @param versionToUse The version to use for the Kipper compiler.
 */
async function initCompiler(versionToUse: string): Promise<void> {
	// Variable to store the info whether the initialisation was successful
	initFailed = true;

	if (
		!versionToUse.match(/^[~^]?([0-1].(?:[8-9]|([1-9][0-9])).[0-9](?:-(?:alpha|beta|rc).[\dx*]+)?)$/g) &&
		!["latest", "next", "alpha", "beta", "rc"].find((v) => v === versionToUse)
	) {
		throw new Error(`Invalid version number '${versionToUse}'`);
	}

	// In case we want to use a version bigger than 0.10.0, we need to use the new web package for the Kipper Compiler
	if (
		versionToUse.match(/^[~^]?[0-1].[1-9][0-9].[0-9](?:-(?:alpha|beta|rc).[\dx*]+)?$/) ||
		["next", "alpha", "beta", "rc"].find((v) => v === versionToUse)
	) {
		// eslint-disable-next-line no-undef
		importScripts(`//cdn.jsdelivr.net/npm/@kipper/web@${versionToUse}/kipper-standalone.min.js`);
	} else {
		// eslint-disable-next-line no-undef
		importScripts(`//cdn.jsdelivr.net/npm/@kipper/core@${versionToUse}/kipper-standalone.min.js`);
	}

	// Use babel if the version is between 0.8.x-x and 0.9.x-x
	if (
		versionToUse.match(/^[~^]?([0-1].[8-9].[0-9](?:[-.](?:[\dx*]+|alpha|beta|rc)){0,2})$/g) ||
		versionToUse === "latest"
	) {
		// Import the babel transpiler
		// eslint-disable-next-line no-undef
		importScripts("//unpkg.com/@babel/standalone/babel.min.js");
	}

	// The message handler for the compiler log messages - We don't handle those yet and just log them onto the console
	const msgHandler = (level, msg) => {
		// @ts-ignore
		// eslint-disable-next-line no-undef
		postMessage(`[${Kipper.getLogLevelString(level)}]: ${msg}`);
	};

	// Global logger for the compiler
	// @ts-ignore
	// eslint-disable-next-line no-undef
	logger = new Kipper.KipperLogger(msgHandler);

	// Global compiler
	// @ts-ignore
	// eslint-disable-next-line no-undef
	compiler = new Kipper.KipperCompiler(logger);

	// Set the compiler to initialised
	compilerInitialised = true;
	initFailed = false;
}

// Define the handler for worker messages
onmessage = async function (event) {
	if (initFailed) {
		// If the initialisation already was tried once and we failed, then we can't do anything
		throw new Error("Web Worker thread for the Kipper Compiler encountered fatal error during initialisation");
	} else if (!compilerInitialised) {
		await initCompiler(event.data);
		return; // Return here since we don't want to do anything else (this was just the initialisation)
	}

	// Log the message that the compiler has started preparing for the compilation
	console.log("Received compilation request from main thread. Preparing compilation in Worker.");

	// Print version of Kipper
	// @ts-ignore
	// eslint-disable-next-line no-undef
	postMessage(`Kipper Compiler v${Kipper.version}\n`);

	// Compile the code to TypeScript
	let kipperResult: string;
	let config = {};
	try {
		// @ts-ignore
		// eslint-disable-next-line no-undef
		if (typeof KipperJS === "object" && typeof KipperJS.KipperJavaScriptTarget === "function") {
			// @ts-ignore
			// eslint-disable-next-line no-undef
			config.target = new KipperJS.KipperJavaScriptTarget();
		}

		kipperResult = (await compiler.compile(event.data, config)).write();
	} catch (e) {
		postMessage(1);
		throw e;
	}

	// Evaluate the code
	try {
		let execCode = kipperResult;
		if (!("target" in config)) {
			// Transpile the code from TypeScript to JavaScript (if the Kipper compiler didn't generate JS code already)
			// @ts-ignore
			// eslint-disable-next-line no-undef
			execCode = Babel.transform(kipperResult, {
				filename: "kipper-web-script.ts",
				presets: ["env", "typescript"],
			}).code;
		}

		// Switch to console output
		postMessage(0);

		await evalKipperCode(execCode);
	} catch (e) {
		postMessage(`\nEncountered Runtime error:\n  ${(<Error>e).name}: ${(<Error>e).message}`);
		postMessage(`\nIf this is unexpected, please report this bug to the developer on GitHub with your code snippet.`);
		postMessage(1);
		throw e;
	}

	// Return with exit code 0 (Success)
	postMessage(0);
};
