import { assert } from "chai";
import { BuiltInFunction, InvalidGlobalError, KipperCompiler, KipperParseStream } from "@kipper/core";
import { promises as fs } from "fs";
import { EvaluatedCompileConfig } from "@kipper/core";
import * as path from "path";

const mainFile = path.resolve(`${__dirname}/../../kipper-files/main.kip`);

describe("KipperProgramContext", async () => {
	const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
	const stream: KipperParseStream = new KipperParseStream(fileContent);

	describe("constructor", async () => {
		it("Default config", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, {});

			// Only the default built-in functions should be present
			assert(
				programCtx.builtIns.length === Object.values(EvaluatedCompileConfig.defaults.builtIns).length,
				"Expected the program ctx built-ins to match the default built-ins",
			);
		});

		it("Add single global", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, {});

			// Only the default built-in functions should be present
			assert(
				programCtx.builtIns.length === Object.values(EvaluatedCompileConfig.defaults.builtIns).length,
				"Expected the program ctx built-ins to match the default built-ins",
			);

			// Add a new built-in function
			let func: BuiltInFunction = {
				identifier: "test",
				args: [],
				returnType: "void",
			};
			programCtx.registerBuiltIns(func);

			assert(
				programCtx.builtIns.length === Object.values(EvaluatedCompileConfig.defaults.builtIns).length + 1,
				"Expected the program ctx built-ins to match the default built-ins",
			);
		});

		it("Expecting error with duplicate global", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, {});

			// Only the default built-in functions should be present
			assert(
				programCtx.builtIns.length === Object.values(EvaluatedCompileConfig.defaults.builtIns).length,
				"Expected the program ctx built-ins to match the default built-ins",
			);

			// Register new built-in function
			let func: BuiltInFunction = {
				identifier: "test",
				args: [],
				returnType: "void",
			};
			programCtx.registerBuiltIns(func);

			assert(
				programCtx.builtIns.length === Object.values(EvaluatedCompileConfig.defaults.builtIns).length + 1,
				"Expected the program ctx built-ins to match the default built-ins",
			);

			try {
				programCtx.registerBuiltIns(func);
			} catch (e) {
				if (e instanceof InvalidGlobalError) {
					return;
				} else {
					assert(false, "Unexpected error!");
				}
			}
			assert(false, "Expected 'InvalidGlobalError'!");
		});
	});

	// These tests are also made to validate the functionality in 'getGlobalFunction' and 'getGlobalVariable'
	describe("getBuiltInFunction", () => {
		it("Get undefined (invalid identifier)", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, {});

			// Only the default built-in functions should be present
			assert(
				programCtx.builtIns.length === Object.values(EvaluatedCompileConfig.defaults.builtIns).length,
				"Expected the program ctx built-ins to match the default built-ins",
			);
			assert(programCtx.getBuiltInFunction("") === undefined, "No built-in should exist");
			assert(programCtx.getBuiltInFunction("id") === undefined, "No built-in should exist");

			// Register new built-in function
			let func: BuiltInFunction = {
				identifier: "test",
				args: [],
				returnType: "void",
			};
			programCtx.registerBuiltIns(func);

			assert(programCtx.getBuiltInFunction("") === undefined, "No built-in should exist");
			assert(programCtx.getBuiltInFunction("id") === undefined, "No built-in should exist");
		});

		it("Get built-in function", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, {});

			// Register new built-in function
			let func: BuiltInFunction = {
				identifier: "test",
				args: [],
				returnType: "void",
			};
			programCtx.registerBuiltIns(func);

			assert(
				programCtx.builtIns.length === Object.values(EvaluatedCompileConfig.defaults.builtIns).length + 1,
				"Expected one additional built-in function after registration",
			);
			assert(programCtx.getBuiltInFunction("test") === func, "The built-in function 'print' should be returned.");
		});
	});
});
