import { assert } from "chai";
import { promises as fs } from "fs";
import * as path from "path";
import { KipperParserRuleContext } from "@kipper/core";
import {
	CompilableASTNode,
	KipperCompiler,
	KipperParseStream,
	KipperProgramContext,
	RootASTNode,
	ParseData,
	TargetASTNodeSemanticAnalyser,
	TargetASTNodeCodeGenerator,
	TranslatedCodeLine,
	CompilableNodeParent,
} from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";

const fileLocation: string = path.resolve(`${__dirname}/../../kipper-files/main.kip`);

describe("AST Nodes", () => {
	const defaultTarget = new KipperTypeScriptTarget();

	describe("CompilableASTNode", () => {
		// Example class for testing purposes
		class ExampleNode extends CompilableASTNode {
			readonly kind: number = Number.MAX_SAFE_INTEGER;

			constructor(antlrCtx: KipperParserRuleContext, parent: CompilableNodeParent) {
				super(antlrCtx, parent);
			}

			primarySemanticAnalysis(): Promise<void> {
				return Promise.resolve(undefined);
			}

			readonly targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ExampleNode> = () => {
				return Promise.resolve(undefined);
			};

			readonly targetCodeGenerator: TargetASTNodeCodeGenerator<ExampleNode, TranslatedCodeLine> = async () => {
				return <TranslatedCodeLine>[];
			};

			primarySemanticTypeChecking(): Promise<void> {
				return Promise.resolve(undefined);
			}

			checkForWarnings(): Promise<void> {
				return Promise.resolve(undefined);
			}
		}

		describe("sourceCode", () => {
			it("Validating integrity of content", async () => {
				let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
				let stream: KipperParseStream = new KipperParseStream(fileContent);
				let parseData: ParseData = await new KipperCompiler().parse(stream);
				let programCtx: KipperProgramContext = await new KipperCompiler().getProgramCtx(parseData, {
					target: defaultTarget,
				});

				assert(stream.name === "anonymous-script");
				assert(stream.stringContent === fileContent);
				assert(stream.charStream.sourceName === "anonymous-script");
				assert(stream.charStream.toString() === fileContent);

				let parenToken = new RootASTNode(programCtx, programCtx.antlrParseTree);
				let node = new ExampleNode(programCtx.antlrParseTree, parenToken);
				assert(node.sourceCode === fileContent, "Source code and fileContent must match!");
				assert(node.programCtx === programCtx, "Expected 'programCtx' to match");
				assert(node.parent === parenToken, "Expected 'parent' to match");
				assert(node.parent.programCtx === programCtx, "Expected 'parent' to match");
			});
		});

		describe("hasFailed", () => {
			it("With no errors", async () => {
				const result = await new KipperCompiler().compile("var valid: str = '1';", { target: defaultTarget });
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.equal(ast.children.length, 1, "Expected 1 child for RootASTNode");
				assert.equal(ast.children[0].hasFailed, false, "Expected 'hasFailed' to be false");
			});

			it("With errors", async () => {
				const result = await new KipperCompiler().compile("var invalid: str = 1;", { target: defaultTarget });
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.equal(ast.children.length, 1, "Expected 1 child for RootASTNode");
				assert.isTrue(ast.children[0].hasFailed, "Expected 'hasFailed' to be false");
			});
		});
	});

	describe("RootASTNode", () => {
		describe("sourceCode", () => {
			it("With empty file", async () => {
				const result = await new KipperCompiler().compile("", { target: defaultTarget });
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.equal(ast.sourceCode, "", "Expected source code to be empty");
			});

			it("With file content", async () => {
				const sourceCode = "var valid: str = '1';";
				const result = await new KipperCompiler().compile(sourceCode, { target: defaultTarget });
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.equal(ast.sourceCode, sourceCode, "Expected source code to match");
			});
		});

		describe("hasFailed", () => {
			it("With no errors", async () => {
				const result = await new KipperCompiler().compile("var valid: str = '1';", { target: defaultTarget });
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.equal(ast.hasFailed, false, "Expected 'hasFailed' to be false");
			});

			it("With errors", async () => {
				const result = await new KipperCompiler().compile("var invalid: str = 1;", { target: defaultTarget });
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.isTrue(ast.hasFailed, "Expected 'hasFailed' to be false");
			});
		});

		describe("children", () => {
			it("With empty file", async () => {
				const result = await new KipperCompiler().compile("", { target: defaultTarget });
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.equal(ast.children.length, 0, "Expected 0 children");
			});

			it("With single statement", async () => {
				const result = await new KipperCompiler().compile(
					// Even though this is invalid, we still expect 1 child to be present
					"var invalid: str = 1;",
					{ target: defaultTarget },
				);
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.equal(ast.children.length, 1, "Expected 1 child");
			});

			it("With multiple statements", async () => {
				const result = await new KipperCompiler().compile(
					// Even though some of these are invalid, we still expect 3 children to be present
					"var x1: str = 1; var x2: str = '1'; const x3: str;",
					{ target: defaultTarget },
				);
				const ast = <RootASTNode>result.programCtx.abstractSyntaxTree;

				assert.notEqual(ast, undefined, "Expected AST to be present");
				assert.equal(ast.children.length, 3, "Expected 2 children");
			});
		});

		it("programCtx", async () => {
			let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
			let stream: KipperParseStream = new KipperParseStream(fileContent);
			let parseData: ParseData = await new KipperCompiler().parse(stream);
			let programCtx: KipperProgramContext = await new KipperCompiler().getProgramCtx(parseData, {
				target: defaultTarget,
			});

			// Generate the AST by compiling the program (as 'generateAbstractSyntaxTree' is private)
			await programCtx.compileProgram();
			const ast = <RootASTNode>programCtx.abstractSyntaxTree;

			assert.notEqual(programCtx, undefined, "Expected programCtx to be present");
			assert.notEqual(programCtx.abstractSyntaxTree, undefined, "Expected AST to be present");
			assert.equal(ast.programCtx, programCtx, "Expected programCtx to match");
		});

		it("parent", async () => {
			let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
			let stream: KipperParseStream = new KipperParseStream(fileContent);
			let parseData: ParseData = await new KipperCompiler().parse(stream);
			let programCtx: KipperProgramContext = await new KipperCompiler().getProgramCtx(parseData, {
				target: defaultTarget,
			});

			// Generate the AST by compiling the program (as 'generateAbstractSyntaxTree' is private)
			await programCtx.compileProgram();
			const ast = <RootASTNode>programCtx.abstractSyntaxTree;

			assert.notEqual(programCtx, undefined, "Expected programCtx to be present");
			assert.notEqual(programCtx.abstractSyntaxTree, undefined, "Expected AST to be present");
			assert.equal(ast.parent, undefined, "Expected parent to be undefined");
		});
	});
});
