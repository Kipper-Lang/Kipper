import { assert } from "chai";
import type { BuiltInFunction } from "@kipper/core";
import { EvaluatedCompileConfig, InvalidGlobalError, KipperCompiler, KipperFileStream } from "@kipper/core";
import { promises as fs } from "fs";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import * as path from "path";

const mainFile = path.resolve(`${__dirname}/../../kipper-files/main.kip`);

describe("KipperProgramContext", async () => {
	const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
	const stream: KipperFileStream = new KipperFileStream({ stringContent: fileContent });
	const defaultTarget = new KipperTypeScriptTarget();

	describe("constructor", async () => {
		it("Default config", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, { target: defaultTarget });

			// Only the default built-in functions should be present
			assert.equal(
				programCtx.builtIns.length,
				Object.values([
					...EvaluatedCompileConfig.defaults.builtInFunctions,
					...EvaluatedCompileConfig.defaults.builtInVariables,
				]).length,
				"Expected the program ctx built-ins to match the default built-ins",
			);
		});

		it("Add single global", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, { target: defaultTarget });

			// Only the default built-in functions should be present
			assert.equal(
				programCtx.builtIns.length,
				Object.values([
					...EvaluatedCompileConfig.defaults.builtInFunctions,
					...EvaluatedCompileConfig.defaults.builtInVariables,
				]).length,
				"Expected the program ctx built-ins to match the default built-ins",
			);

			// Add a new built-in function
			let func: BuiltInFunction = {
				identifier: "test",
				params: [],
				returnType: "void",
			};
			programCtx.registerBuiltInFunctions(func);

			assert.equal(
				programCtx.builtIns.length,
				Object.values([
					...EvaluatedCompileConfig.defaults.builtInFunctions,
					...EvaluatedCompileConfig.defaults.builtInVariables,
				]).length + 1,
				"Expected the program ctx built-ins to match the default built-ins",
			);
		});

		it("Expecting error with duplicate global", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, { target: defaultTarget });

			// Only the default built-in functions should be present
			assert.equal(
				programCtx.builtIns.length,
				Object.values([
					...EvaluatedCompileConfig.defaults.builtInFunctions,
					...EvaluatedCompileConfig.defaults.builtInVariables,
				]).length,
				"Expected the program ctx built-ins to match the default built-ins",
			);

			// Register new built-in function
			let func: BuiltInFunction = {
				identifier: "test",
				params: [],
				returnType: "void",
			};
			programCtx.registerBuiltInFunctions(func);

			assert.equal(
				programCtx.builtIns.length,
				Object.values([
					...EvaluatedCompileConfig.defaults.builtInFunctions,
					...EvaluatedCompileConfig.defaults.builtInVariables,
				]).length + 1,
				"Expected the program ctx built-ins to match the default built-ins",
			);

			try {
				programCtx.registerBuiltInFunctions(func);
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
			let programCtx = await compiler.getProgramCtx(parseData, { target: defaultTarget });

			// Only the default built-in functions should be present
			assert.equal(
				programCtx.builtIns.length,
				Object.values([
					...EvaluatedCompileConfig.defaults.builtInFunctions,
					...EvaluatedCompileConfig.defaults.builtInVariables,
				]).length,
				"Expected the program ctx built-ins to match the default built-ins",
			);
			assert(programCtx.getBuiltInFunction("") === undefined, "No built-in should exist");
			assert(programCtx.getBuiltInFunction("id") === undefined, "No built-in should exist");

			// Register new built-in function
			let func: BuiltInFunction = {
				identifier: "test",
				params: [],
				returnType: "void",
			};
			programCtx.registerBuiltInFunctions(func);

			assert(programCtx.getBuiltInFunction("") === undefined, "No built-in should exist");
			assert(programCtx.getBuiltInFunction("id") === undefined, "No built-in should exist");
		});

		it("Get built-in function", async () => {
			let compiler = new KipperCompiler();
			let parseData = await compiler.parse(stream);
			let programCtx = await compiler.getProgramCtx(parseData, { target: defaultTarget });

			// Register new built-in function
			let func: BuiltInFunction = {
				identifier: "test",
				params: [],
				returnType: "void",
			};
			programCtx.registerBuiltInFunctions(func);

			assert.equal(
				programCtx.builtIns.length,
				Object.values([
					...EvaluatedCompileConfig.defaults.builtInFunctions,
					...EvaluatedCompileConfig.defaults.builtInVariables,
				]).length + 1,
				"Expected one additional built-in function after registration",
			);
			assert(programCtx.getBuiltInFunction("test") === func, "The built-in function 'print' should be returned.");
		});
	});
});
