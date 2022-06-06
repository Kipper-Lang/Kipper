import { KipperCompiler, KipperCompileResult, KipperParseStream } from "@kipper/core";
import { assert } from "chai";

describe("KipperOptimiser", () => {
	const compiler = new KipperCompiler();

	describe("optimiseInternals", () => {
		it("No reference", async () => {
			const stream = new KipperParseStream("var x: num = 4;");
			const instance: KipperCompileResult = await compiler.compile(stream);
			assert(instance.programCtx.internals.length === 0, "Expected one internal function");
		});

		it("One reference", async () => {
			const stream = new KipperParseStream("var x: str = 4 as str;");
			const instance: KipperCompileResult = await compiler.compile(stream);
			assert(instance.programCtx.internals.length === 1, "Expected one internal function");
		});

		it("Multiple references", async () => {
			const stream = new KipperParseStream('var x: str = 4 as str; var y: num = "4" as num; var z: str = true as str;');
			const instance: KipperCompileResult = await compiler.compile(stream);
			assert(instance.programCtx.internals.length === 3, "Expected three internal functions");
		});
	});

	describe("optimiseBuiltIns", () => {
		it("No reference", async () => {
			const stream = new KipperParseStream("var x: num = 4;");
			const instance: KipperCompileResult = await compiler.compile(stream);
			assert(instance.programCtx.builtIns.length === 0, "Expected no built-in");
		});

		it("One reference", async () => {
			const stream = new KipperParseStream("var x: num = 4; call print(x as str);");
			const instance: KipperCompileResult = await compiler.compile(stream);
			assert(instance.programCtx.builtIns.length === 1, "Expected one built-in");
		});
	});
});
