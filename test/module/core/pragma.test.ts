import { KipperCompiler, type KipperCompileResult } from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { promises as fs } from "fs";
import { assert } from "chai";
import { getFileName } from "./compiler.test";

const notOptimizedKipperFile = getFileName("not-optimised.kip");
const optimizedKipperFile = getFileName("optimised.kip");

describe("no-optimise", () => {
	const compiler = new KipperCompiler();
	const defaultTarget = new KipperTypeScriptTarget();

	it("should be optimised", async () => {
		const fileContent = (await fs.readFile(notOptimizedKipperFile, "utf8" as BufferEncoding)).toString();
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		assert.include(instance.write(), "__kipper.voidToStr = function voidToStr(): string { return \"void\"; };");
	});

	it("should not be optimised", async () => {
		const fileContent = (await fs.readFile(optimizedKipperFile, "utf8" as BufferEncoding)).toString();
		const instance: KipperCompileResult = await compiler.compile(fileContent, { target: defaultTarget });

		assert.isDefined(instance.programCtx);
		assert.equal(instance.programCtx!!.errors.length, 0, "Expected no compilation errors");
		assert.notInclude(instance.write(), "__kipper.voidToStr = function voidToStr(): string { return \"void\"; };");
	});
});
