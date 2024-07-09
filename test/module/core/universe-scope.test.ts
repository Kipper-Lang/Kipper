import { BuiltInFunctions, BuiltInVariables, ScopeFunctionDeclaration } from "@kipper/core";
import { BuiltInTypes } from "@kipper/core";
import { KipperCompiler } from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { assert } from "chai";

const DEFAULT_BUILTIN_COUNT =
	Object.values(BuiltInVariables).length + Object.values(BuiltInFunctions).length + Object.values(BuiltInTypes).length;

describe("UniverseScope", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	describe("constructor", () => {
		it("should have an empty hash map", async () => {
			const compileResult = await new KipperCompiler().compile("", { target: defaultTarget });
			assert.isDefined(compileResult.programCtx);
			const scope = compileResult.programCtx!!.universeScope;
			assert.equal(scope.entries.size, DEFAULT_BUILTIN_COUNT);
		});
	});
});
