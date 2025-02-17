import { assert } from "chai";
import type { KipperProgramContext } from "@kipper/core";

/**
 * Tests the 'print' function of Kipper.
 * @param newConsoleLog The new console.log function, which is called by the 'print' function. This function should
 * assert the output and throw an error if the output is invalid.
 * @param jsProgram The program that was compiled to JavaScript that should be evaluated. This program should contain a
 * translated 'print' function call.
 * @param forceString Is per default true and will enforce that the output is a string. If set to false, the output will
 * be the raw value and can therefore be any type.
 */
export function testPrintOutput(
	newConsoleLog: (message: any) => void,
	jsProgram: string,
	forceString: boolean = true,
): void {
	const oldConsoleLog = console.log;
	console.log = (v: any) => newConsoleLog(forceString ? String(v) : v);
	eval(jsProgram); // Eval the program, which should call the 'print' function.
	console.log = oldConsoleLog;
}

/**
 * Tests that the given JavaScript program throws the expected error.
 *
 * Unlike {@link testPrintOutput}, this function does not hook itself into the output of the program. Instead, it
 * evaluates the program and expects an error to be thrown.
 * @param expectedError The name of the expected error.
 * @param expectedErrorMsg The expected error message. If undefined, the error message is not checked.
 * @param jsProgram The JavaScript program to evaluate.
 */
export function testErrorThrows(expectedError: string, expectedErrorMsg: string | undefined, jsProgram: string): void {
	try {
		eval(jsProgram);
		assert.fail(`Expected error '${expectedError}' but no error was thrown.`);
	} catch (e) {
		assert.equal((<Error>e).name, expectedError, `Expected error '${expectedError}' but got '${(<Error>e).name}'.`);
		if (expectedErrorMsg) {
			assert.include((<Error>e).message, expectedErrorMsg, `Expected error message to include '${expectedErrorMsg}'`);
		}
	}
}

/**
 * Asserts that the program context has no errors and reports all the errors if there are any.
 * @param programCtx The program context to check for errors.
 * @throws If the program context has errors.
 */
export function assertErrorsAreEmpty(programCtx: KipperProgramContext): void {
	try {
		assert.deepEqual(programCtx.errors, [], "Expected no compilation errors");
	} catch (e) {
		for (const error of programCtx.errors) {
			console.error(error);
		}
		throw e;
	}
}

/**
 * Asserts that the code includes the snippet.
 * @param code The code to check.
 * @param snippet The snippet to check for.
 * @throws If the code does not include the snippet.
 */
export function assertCodeIncludesSnippet(code: string, snippet: string): void {
	try {
		assert.include(code, snippet, `Invalid TypeScript code (Expected different output)`);
	} catch (e) {
		console.error(`Expected code to include snippet:\n${snippet}`);
		console.error(`Actual code:\n${code}`);
		throw e;
	}
}
