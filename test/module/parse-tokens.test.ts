import { assert } from "chai";
import { promises as fs } from "fs";
import { CompilableParseToken, KipperParseStream } from "../../src";
import { KipperProgramContext } from "../../src/compiler/program-ctx";
import { KipperCompiler } from "../../src";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("Parse-Tokens", () => {
	describe("CompilableParseToken", () => {
		// Example class for testing purposes
		class ExampleToken extends CompilableParseToken {
			compileCtxAndChildren() { return []; }
		}

		describe("sourceCode", () => {
			it("Validating integrity of content", async () => {
				let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
				let stream: KipperParseStream = new KipperParseStream("inline-stream", fileContent);
				let fileCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

				assert(stream.name === "inline-stream");
				assert(stream.stringContent === fileContent);
				assert(stream.charStream.sourceName === "inline-stream");
				assert(stream.charStream.toString() === fileContent);

				let token = new ExampleToken(fileCtx.parseTreeEntry, fileCtx);
				assert(token.sourceCode === fileContent, "Source code and fileContent must match!");
			});
		});
	});
});
