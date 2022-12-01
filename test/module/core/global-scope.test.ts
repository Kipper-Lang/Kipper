import { KipperCompiler, ScopeFunctionDeclaration, ScopeVariableDeclaration } from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";
import { assert } from "chai";

describe("GlobalScope", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	describe("constructor", () => {
		it("should have an empty hash map", async () => {
			const compileResult = await new KipperCompiler().compile("", { target: defaultTarget });
			const scope = compileResult.programCtx.globalScope;
			assert.equal(scope.entries.size, 0);
		});
	});

	describe("addVariable", () => {
		it("one", async () => {
			const compileResult = await new KipperCompiler().compile("var test: num = 5;", { target: defaultTarget });
			const scope = compileResult.programCtx.globalScope;

			// Should have one variable
			assert.equal(scope.entries.size, 1);

			let iter = scope.entries.keys();
			let entry = <ScopeVariableDeclaration>scope.entries.get(<string>iter.next().value);
			assert.instanceOf(entry, ScopeVariableDeclaration);
			assert.equal(entry.identifier, "test");
			assert.equal(entry.type.getCompilableType(), "num");
			assert.equal(entry.storageType, "var");
			assert.equal(entry.hasValue, true);
			assert.equal(entry.isDefined, true);
			assert.equal(entry.isCallable, false);
			assert.equal(entry.scope, scope);
			assert.equal(entry.programCtx, compileResult.programCtx);
		});

		it("two", async () => {
			const compileResult = await new KipperCompiler().compile("var test: num = 5; var test2: num = 5;", {
				target: defaultTarget,
			});
			const scope = compileResult.programCtx.globalScope;

			// Should have two variables
			assert.equal(scope.entries.size, 2);

			let iter = scope.entries.keys();
			let entryOne = <ScopeVariableDeclaration>scope.entries.get(<string>iter.next().value);
			let entryTwo = <ScopeVariableDeclaration>scope.entries.get(<string>iter.next().value);

			// First variable
			assert.equal(entryOne.identifier, "test");
			assert.equal(entryOne.type.identifier, "num");
			assert.equal(entryOne.storageType, "var");
			assert.equal(entryOne.hasValue, true);
			assert.equal(entryOne.isDefined, true);
			assert.equal(entryOne.isCallable, false);
			assert.equal(entryOne.scope, scope);
			assert.equal(entryOne.programCtx, compileResult.programCtx);

			// Second variable
			assert.equal(entryTwo.identifier, "test2");
			assert.equal(entryTwo.type.identifier, "num");
			assert.equal(entryTwo.storageType, "var");
			assert.equal(entryTwo.hasValue, true);
			assert.equal(entryTwo.isDefined, true);
			assert.equal(entryTwo.isCallable, false);
			assert.equal(entryTwo.scope, scope);
			assert.equal(entryTwo.programCtx, compileResult.programCtx);
		});

		it("three", async () => {
			const compileResult = await new KipperCompiler().compile(
				"var test: num = 5; var test2: num = 5; var test3: num = 5;",
				{ target: defaultTarget },
			);
			const scope = compileResult.programCtx.globalScope;

			// Should have three variables
			assert.equal(scope.entries.size, 3);

			let iter = scope.entries.keys();
			let entryOne = <ScopeVariableDeclaration>scope.entries.get(<string>iter.next().value);
			let entryTwo = <ScopeVariableDeclaration>scope.entries.get(<string>iter.next().value);
			let entryThree = <ScopeVariableDeclaration>scope.entries.get(<string>iter.next().value);

			// First variable
			assert.equal(entryOne.identifier, "test");
			assert.equal(entryOne.type.identifier, "num");
			assert.equal(entryOne.storageType, "var");
			assert.equal(entryOne.hasValue, true);
			assert.equal(entryOne.isDefined, true);
			assert.equal(entryOne.isCallable, false);
			assert.equal(entryOne.scope, scope);
			assert.equal(entryOne.programCtx, compileResult.programCtx);

			// Second variable
			assert.equal(entryTwo.identifier, "test2");
			assert.equal(entryTwo.type.identifier, "num");
			assert.equal(entryTwo.storageType, "var");
			assert.equal(entryTwo.hasValue, true);
			assert.equal(entryTwo.isDefined, true);
			assert.equal(entryTwo.isCallable, false);
			assert.equal(entryTwo.scope, scope);
			assert.equal(entryTwo.programCtx, compileResult.programCtx);

			// Third variable
			assert.equal(entryThree.identifier, "test3");
			assert.equal(entryThree.type.identifier, "num");
			assert.equal(entryThree.storageType, "var");
			assert.equal(entryThree.hasValue, true);
			assert.equal(entryThree.isDefined, true);
			assert.equal(entryThree.isCallable, false);
			assert.equal(entryThree.scope, scope);
			assert.equal(entryThree.programCtx, compileResult.programCtx);
		});
	});

	describe("addFunction", () => {
		it("one", async () => {
			const compileResult = await new KipperCompiler().compile("def test() -> num { return 5; }", {
				target: defaultTarget,
			});
			const scope = compileResult.programCtx.globalScope;

			// Should have one function
			assert.equal(scope.entries.size, 1);

			let iter = scope.entries.keys();
			let entry = <ScopeFunctionDeclaration>scope.entries.get(<string>iter.next().value);
			assert.equal(entry.identifier, "test");
			assert.equal(entry.returnType.identifier, "num");
			assert.equal(entry.hasValue, true);
			assert.equal(entry.isDefined, true);
			assert.equal(entry.isCallable, true);
			assert.equal(entry.params.length, 0);
			assert.equal(entry.programCtx, compileResult.programCtx);
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

			// Should have two functions
			assert.equal(scope.entries.size, 2);

			let iter = scope.entries.keys();
			let entryOne = <ScopeFunctionDeclaration>scope.entries.get(<string>iter.next().value);
			let entryTwo = <ScopeFunctionDeclaration>scope.entries.get(<string>iter.next().value);

			// First function
			assert.equal(entryOne.identifier, "test");
			assert.equal(entryOne.returnType.identifier, "num");
			assert.equal(entryOne.hasValue, true);
			assert.equal(entryOne.isDefined, true);
			assert.equal(entryOne.isCallable, true);
			assert.equal(entryOne.params.length, 0);
			assert.equal(entryOne.programCtx, compileResult.programCtx);

			// Second function
			assert.equal(entryTwo.identifier, "test2");
			assert.equal(entryTwo.returnType.identifier, "num");
			assert.equal(entryTwo.hasValue, true);
			assert.equal(entryTwo.isDefined, true);
			assert.equal(entryTwo.isCallable, true);
			assert.equal(entryTwo.params.length, 0);
			assert.equal(entryTwo.programCtx, compileResult.programCtx);
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

			// Should have three functions
			assert.equal(scope.entries.size, 3);

			let iter = scope.entries.keys();
			let entryOne = <ScopeFunctionDeclaration>scope.entries.get(<string>iter.next().value);
			let entryTwo = <ScopeFunctionDeclaration>scope.entries.get(<string>iter.next().value);
			let entryThree = <ScopeFunctionDeclaration>scope.entries.get(<string>iter.next().value);

			// First function
			assert.equal(entryOne.identifier, "test");
			assert.equal(entryOne.returnType.identifier, "num");
			assert.equal(entryOne.hasValue, true);
			assert.equal(entryOne.isDefined, true);
			assert.equal(entryOne.isCallable, true);
			assert.equal(entryOne.params.length, 0);
			assert.equal(entryOne.programCtx, compileResult.programCtx);

			// Second function
			assert.equal(entryTwo.identifier, "test2");
			assert.equal(entryTwo.returnType.identifier, "num");
			assert.equal(entryTwo.hasValue, true);
			assert.equal(entryTwo.isDefined, true);
			assert.equal(entryTwo.isCallable, true);
			assert.equal(entryTwo.params.length, 0);
			assert.equal(entryTwo.programCtx, compileResult.programCtx);

			// Third function
			assert.equal(entryThree.identifier, "test3");
			assert.equal(entryThree.returnType.identifier, "num");
			assert.equal(entryThree.hasValue, true);
			assert.equal(entryThree.isDefined, true);
			assert.equal(entryThree.isCallable, true);
			assert.equal(entryThree.params.length, 0);
			assert.equal(entryThree.programCtx, compileResult.programCtx);
		});
	});
});
