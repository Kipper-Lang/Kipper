/**
 * Tests the 'print' function of Kipper.
 * @param newConsoleLog The new console.log function, which is called by the 'print' function. This function should
 * assert the output and throw an error if the output is invalid.
 * @param jsProgram The program that was compiled to JavaScript that should be evaluated. This program should contain a
 * translated 'print' function call.
 */
export function testPrintOutput(newConsoleLog: (message: any) => void, jsProgram: string): void {
	const oldConsoleLog = console.log;
	console.log = (v: any) => newConsoleLog(String(v));
	eval(jsProgram); // Eval the program, which should call the 'print' function.
	console.log = oldConsoleLog;
}
