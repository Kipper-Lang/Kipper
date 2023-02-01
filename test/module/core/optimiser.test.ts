import { CompileConfig, KipperCompiler, KipperCompileResult } from "@kipper/core";
import { assert } from "chai";
import { KipperTypeScriptTarget } from "@kipper/target-ts";

describe("KipperOptimiser", () => {
	const compiler = new KipperCompiler();
	const optimisationOptions: CompileConfig = {
		target: new KipperTypeScriptTarget(),
		optimisationOptions: {
			optimiseInternals: true,
			optimiseBuiltIns: true,
		},
	};

	describe("optimiseInternals", () => {
		it("No reference", async () => {
			const fileContent = "var x: num = 4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, optimisationOptions);
			assert(instance.programCtx.internals.length === 0, "Expected one internal function");
		});

		it("One reference", async () => {
			const fileContent = "var x: str = 4 as str;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, optimisationOptions);
			assert(instance.programCtx.internals.length === 1, "Expected one internal function");
		});

		it("Multiple references", async () => {
			const fileContent = 'var x: str = 4 as str; var y: num = "4" as num; var z: str = true as str;';
			const instance: KipperCompileResult = await compiler.compile(fileContent, optimisationOptions);
			assert(instance.programCtx.internals.length === 3, "Expected three internal functions");
		});
	});

	describe("optimiseBuiltIns", () => {
		it("No reference", async () => {
			const fileContent = "var x: num = 4;";
			const instance: KipperCompileResult = await compiler.compile(fileContent, optimisationOptions);
			assert(instance.programCtx.builtIns.length === 0, "Expected no built-in");
		});

		it("One reference", async () => {
			const fileContent = "var x: num = 4; call print(x as str);";
			const instance: KipperCompileResult = await compiler.compile(fileContent, optimisationOptions);
			assert(instance.programCtx.builtIns.length === 1, "Expected one built-in");
		});
	});
});
