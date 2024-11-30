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
