import { assert } from "chai";
import { InvalidGlobalError, KipperCompiler, KipperParseStream, KipperProgramContext } from "@kipper/core";
import { promises as fs } from "fs";
import { ScopeVariableDeclaration, EvaluatedCompileOptions } from "@kipper/core";
import * as path from "path";

const mainFile = path.resolve(`${__dirname}/../../kipper-files/main.kip`);

describe("KipperProgramContext", async () => {
	const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
	const stream: KipperParseStream = new KipperParseStream(fileContent);

	describe("constructor", async () => {
		it("Default config", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// No builtIns registered yet!
			assert(programCtx.builtIns.length === 0, "Expected builtIns to be empty");
		});

		it("Add single global", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			assert(programCtx.builtIns.length === 0, "Expected builtIns to be empty");

			// Register builtIns
			programCtx.registerGlobals(EvaluatedCompileOptions.defaults.builtIns.print);

			// Make sure a single global exists
			assert(programCtx.builtIns.length == 1, "Expe`cted one global to exist");
			assert(programCtx.builtIns[0] === EvaluatedCompileOptions.defaults.builtIns.print, "Expected global to match!");
		});

		it("Expecting error with duplicate global", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			assert(programCtx.builtIns.length === 0, "Expected builtIns to be empty");

			// Register already registered global again
			programCtx.registerGlobals(EvaluatedCompileOptions.defaults.builtIns.print);

			// Make sure a single global exists
			assert(programCtx.builtIns.length == 1, "Expected one global to exist");

			try {
				programCtx.registerGlobals(EvaluatedCompileOptions.defaults.builtIns.print);
			} catch (e) {
				if (e instanceof InvalidGlobalError) {
					return;
				} else {
					assert(false, "Unexpected error!");
				}
			}
			assert(false, "Expected error!");
		});
	});

	// These tests are also made to validate the functionality in 'getGlobalFunction' and 'getGlobalVariable'
	describe("getBuiltInFunction", () => {
		it("Get undefined (invalid identifier)", async () => {
			const programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// No builtIns should be there
			assert(programCtx.builtIns.length === 0, "Expected builtIns to be empty");
			assert(programCtx.getBuiltInFunction("") === undefined, "No built-in should exist");
			assert(programCtx.getBuiltInFunction("id") === undefined, "No built-in should exist");

			// Register builtIns and check again
			programCtx.registerGlobals(EvaluatedCompileOptions.defaults.builtIns.print);
			assert(programCtx.getBuiltInFunction("") === undefined, "No built-in should exist");
			assert(programCtx.getBuiltInFunction("id") === undefined, "No built-in should exist");
		});

		it("Get built-in function", async () => {
			const programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// Register builtIns and check again
			programCtx.registerGlobals(EvaluatedCompileOptions.defaults.builtIns.print);
			assert(
				programCtx.getBuiltInFunction("print") === EvaluatedCompileOptions.defaults.builtIns.print,
				"The built-in function 'print' should be returned.",
			);
		});
	});
});
