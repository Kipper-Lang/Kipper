import { KipperCompiler } from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { assert } from "chai";

describe("GlobalScope", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	describe("constructor", () => {
		it("should have an empty list of variables", async () => {
			const compileResult = await new KipperCompiler().compile("", { target: defaultTarget });
			const scope = compileResult.programCtx.globalScope;
			assert.equal(scope.variables.length, 0);
		});

		it("should have an empty list of functions", async () => {
			const compileResult = await new KipperCompiler().compile("", { target: defaultTarget });
			const scope = compileResult.programCtx.globalScope;
			assert.equal(scope.functions.length, 0);
		});
	});

	describe("addVariable", () => {
		it("one", async () => {
			const compileResult = await new KipperCompiler().compile("var test: num = 5;", { target: defaultTarget });
			const scope = compileResult.programCtx.globalScope;

			// Should have one variable
			assert.equal(scope.variables.length, 1);
			assert.equal(scope.variables[0].identifier, "test");
			assert.equal(scope.variables[0].type, "num");
			assert.equal(scope.variables[0].storageType, "var");
			assert.equal(scope.variables[0].hasValue, true);
			assert.equal(scope.variables[0].isDefined, true);
			assert.equal(scope.variables[0].isCallable, false);
			assert.equal(scope.variables[0].scope, scope);
			assert.equal(scope.variables[0].programCtx, compileResult.programCtx);

			// Should have no functions
			assert.equal(scope.functions.length, 0);
		});

		it("two", async () => {
			const compileResult = await new KipperCompiler().compile("var test: num = 5; var test2: num = 5;", {
				target: defaultTarget,
			});
			const scope = compileResult.programCtx.globalScope;

			// Should have two variables
			assert.equal(scope.variables.length, 2);

			// First variable
			assert.equal(scope.variables[0].identifier, "test");
			assert.equal(scope.variables[0].type, "num");
			assert.equal(scope.variables[0].storageType, "var");
			assert.equal(scope.variables[0].hasValue, true);
			assert.equal(scope.variables[0].isDefined, true);
			assert.equal(scope.variables[0].isCallable, false);
			assert.equal(scope.variables[0].scope, scope);
			assert.equal(scope.variables[0].programCtx, compileResult.programCtx);

			// Second variable
			assert.equal(scope.variables[1].identifier, "test2");
			assert.equal(scope.variables[1].type, "num");
			assert.equal(scope.variables[1].storageType, "var");
			assert.equal(scope.variables[1].hasValue, true);
			assert.equal(scope.variables[1].isDefined, true);
			assert.equal(scope.variables[1].isCallable, false);
			assert.equal(scope.variables[1].scope, scope);
			assert.equal(scope.variables[1].programCtx, compileResult.programCtx);

			// Should have no functions
			assert.equal(scope.functions.length, 0);
		});

		it("three", async () => {
			const compileResult = await new KipperCompiler().compile(
				"var test: num = 5; var test2: num = 5; var test3: num = 5;",
				{ target: defaultTarget },
			);
			const scope = compileResult.programCtx.globalScope;

			// Should have three variables
			assert.equal(scope.variables.length, 3);

			// First variable
			assert.equal(scope.variables[0].identifier, "test");
			assert.equal(scope.variables[0].type, "num");
			assert.equal(scope.variables[0].storageType, "var");
			assert.equal(scope.variables[0].hasValue, true);
			assert.equal(scope.variables[0].isDefined, true);
			assert.equal(scope.variables[0].isCallable, false);
			assert.equal(scope.variables[0].scope, scope);
			assert.equal(scope.variables[0].programCtx, compileResult.programCtx);

			// Second variable
			assert.equal(scope.variables[1].identifier, "test2");
			assert.equal(scope.variables[1].type, "num");
			assert.equal(scope.variables[1].storageType, "var");
			assert.equal(scope.variables[1].hasValue, true);
			assert.equal(scope.variables[1].isDefined, true);
			assert.equal(scope.variables[1].isCallable, false);
			assert.equal(scope.variables[1].scope, scope);
			assert.equal(scope.variables[1].programCtx, compileResult.programCtx);

			// Third variable
			assert.equal(scope.variables[2].identifier, "test3");
			assert.equal(scope.variables[2].type, "num");
			assert.equal(scope.variables[2].storageType, "var");
			assert.equal(scope.variables[2].hasValue, true);
			assert.equal(scope.variables[2].isDefined, true);
			assert.equal(scope.variables[2].isCallable, false);
			assert.equal(scope.variables[2].scope, scope);
			assert.equal(scope.variables[2].programCtx, compileResult.programCtx);

			// Should have no functions
			assert.equal(scope.functions.length, 0);
		});
	});

	describe("addFunction", () => {
		it("one", async () => {
			const compileResult = await new KipperCompiler().compile("def test() -> num { return 5; }", {
				target: defaultTarget,
			});
			const scope = compileResult.programCtx.globalScope;

			// Should have no variable
			assert.equal(scope.variables.length, 0);

			// Should have one function
			assert.equal(scope.functions.length, 1);
			assert.equal(scope.functions[0].identifier, "test");
			assert.equal(scope.functions[0].returnType, "num");
			assert.equal(scope.functions[0].hasValue, true);
			assert.equal(scope.functions[0].isDefined, true);
			assert.equal(scope.functions[0].isCallable, true);
			assert.equal(scope.functions[0].params.length, 0);
			assert.equal(scope.functions[0].programCtx, compileResult.programCtx);
		});

		it("two", async () => {
			const compileResult = await new KipperCompiler().compile(
				`
					def test() -> num { return 5; }
					def test2() -> num { return 5; }
				`,
				{ target: defaultTarget },
			);
			const scope = compileResult.programCtx.globalScope;

			// Should have no variable
			assert.equal(scope.variables.length, 0);

			// Should have two functions
			assert.equal(scope.functions.length, 2);

			// First function
			assert.equal(scope.functions[0].identifier, "test");
			assert.equal(scope.functions[0].returnType, "num");
			assert.equal(scope.functions[0].hasValue, true);
			assert.equal(scope.functions[0].isDefined, true);
			assert.equal(scope.functions[0].isCallable, true);
			assert.equal(scope.functions[0].params.length, 0);
			assert.equal(scope.functions[0].programCtx, compileResult.programCtx);

			// Second function
			assert.equal(scope.functions[1].identifier, "test2");
			assert.equal(scope.functions[1].returnType, "num");
			assert.equal(scope.functions[1].hasValue, true);
			assert.equal(scope.functions[1].isDefined, true);
			assert.equal(scope.functions[1].isCallable, true);
			assert.equal(scope.functions[1].params.length, 0);
			assert.equal(scope.functions[1].programCtx, compileResult.programCtx);
		});

		it("three", async () => {
			const compileResult = await new KipperCompiler().compile(
				`
					def test() -> num { return 5; }
					def test2() -> num { return 5; }
					def test3() -> num { return 5; }
				`,
				{ target: defaultTarget },
			);
			const scope = compileResult.programCtx.globalScope;

			// Should have no variable
			assert.equal(scope.variables.length, 0);

			// Should have three functions
			assert.equal(scope.functions.length, 3);

			// First function
			assert.equal(scope.functions[0].identifier, "test");
			assert.equal(scope.functions[0].returnType, "num");
			assert.equal(scope.functions[0].hasValue, true);
			assert.equal(scope.functions[0].isDefined, true);
			assert.equal(scope.functions[0].isCallable, true);
			assert.equal(scope.functions[0].params.length, 0);
			assert.equal(scope.functions[0].programCtx, compileResult.programCtx);

			// Second function
			assert.equal(scope.functions[1].identifier, "test2");
			assert.equal(scope.functions[1].returnType, "num");
			assert.equal(scope.functions[1].hasValue, true);
			assert.equal(scope.functions[1].isDefined, true);
			assert.equal(scope.functions[1].isCallable, true);
			assert.equal(scope.functions[1].params.length, 0);
			assert.equal(scope.functions[1].programCtx, compileResult.programCtx);

			// Third function
			assert.equal(scope.functions[2].identifier, "test3");
			assert.equal(scope.functions[2].returnType, "num");
			assert.equal(scope.functions[2].hasValue, true);
			assert.equal(scope.functions[2].isDefined, true);
			assert.equal(scope.functions[2].isCallable, true);
			assert.equal(scope.functions[2].params.length, 0);
			assert.equal(scope.functions[2].programCtx, compileResult.programCtx);
		});
	});
});
