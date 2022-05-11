import { assert } from "chai";
import {
	InvalidGlobalError,
	KipperCompiler,
	KipperParseStream,
	KipperProgramContext,
} from "@kipper/core";
import { promises as fs } from "fs";
import { ScopeVariableDeclaration, CompilerEvaluatedOptions } from "@kipper/core";
import * as path from "path";

const mainFile = path.resolve(`${__dirname}/../../kipper-files/main.kip`);

describe("KipperProgramContext", async () => {
	const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
	const stream: KipperParseStream = new KipperParseStream(fileContent);

	describe("constructor", async () => {
		it("Default config", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// No globals registered yet!
			assert(programCtx.builtInGlobals.length === 0, "Expected builtInGlobals to be empty");
		});

		it("Add single global", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			assert(programCtx.builtInGlobals.length === 0, "Expected builtInGlobals to be empty");

			// Register globals
			programCtx.registerGlobals(CompilerEvaluatedOptions.defaults.globals[0]);

			// Make sure a single global exists
			assert(programCtx.builtInGlobals.length == 1, "Expected one global to exist");
			assert(programCtx.builtInGlobals[0] === CompilerEvaluatedOptions.defaults.globals[0], "Expected global to match!");
		});

		it("Expecting error with duplicate global", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			assert(programCtx.builtInGlobals.length === 0, "Expected builtInGlobals to be empty");

			// Register already registered global again
			programCtx.registerGlobals(CompilerEvaluatedOptions.defaults.globals[0]);

			// Make sure a single global exists
			assert(programCtx.builtInGlobals.length == 1, "Expected one global to exist");

			try {
				programCtx.registerGlobals(CompilerEvaluatedOptions.defaults.globals[0]);
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
	describe("getGlobalIdentifier", () => {
		it("Get undefined (invalid identifier)", async () => {
			const programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// No globals should be there
			assert(programCtx.builtInGlobals.length === 0, "Expected builtInGlobals to be empty");
			assert(programCtx.getGlobalIdentifier("") === undefined, "No global should exist");
			assert(programCtx.getGlobalIdentifier("id") === undefined, "No global should exist");

			// Register globals and check again
			programCtx.registerGlobals(CompilerEvaluatedOptions.defaults.globals[0]);
			assert(programCtx.getGlobalIdentifier("") === undefined, "No global should exist");
			assert(programCtx.getGlobalIdentifier("id") === undefined, "No global should exist");
		});

		it("Get built-in function", async () => {
			const programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// Register globals and check again
			programCtx.registerGlobals(CompilerEvaluatedOptions.defaults.globals[0]);
			assert(
				programCtx.getGlobalIdentifier("print") === CompilerEvaluatedOptions.defaults.globals[0],
				"The built-in function 'print' should be returned."
			);
		});

		it("Get existing variable", async () => {
			const programCtx: KipperProgramContext = (await new KipperCompiler().compile(
				new KipperParseStream("var i: num = 4;")
			)).programCtx;

			// Getting the variable -> Should not return a defined value
			const variable = <ScopeVariableDeclaration | undefined>programCtx.getGlobalIdentifier("i");
			assert(variable instanceof ScopeVariableDeclaration, "Expected defined variable");
			assert(variable?.identifier === "i", "Expected correct required metadata");
			assert(variable?.type === "num", "Expected correct required metadata");
			assert(variable?.identifier === "i", "Expected correct required metadata");
		});
	});
});
