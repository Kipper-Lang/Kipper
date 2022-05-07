import { assert } from "chai";
import { promises as fs } from "fs";
import { CompilableParseToken, KipperParseStream } from "../../src";
import { KipperProgramContext } from "../../src";
import { KipperCompiler } from "../../src";
import { RootFileParseToken } from "../../src";
import { TranslatedCodeLine } from "../../src";
import { TargetTokenCodeGenerator } from "../../src/compiler/code-generator";
import { TargetTokenSemanticAnalyser } from "../../src/compiler/semantic-analyser";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("Parse-Tokens", () => {
	describe("CompilableParseToken", () => {
		// Example class for testing purposes
		class ExampleToken extends CompilableParseToken<any> {
			public async primarySemanticAnalysis(): Promise<void> { }
      targetSemanticAnalysis: TargetTokenSemanticAnalyser<ExampleToken> = async (T: ExampleToken) => {
        return;
      };
      targetCodeGenerator: TargetTokenCodeGenerator<ExampleToken, TranslatedCodeLine> = async (T: ExampleToken) => {
        return <TranslatedCodeLine>[];
      };
		}

		describe("sourceCode", () => {
			it("Validating integrity of content", async () => {
				let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
				let stream: KipperParseStream = new KipperParseStream(fileContent);
				let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

				assert(stream.name === "anonymous-script");
				assert(stream.stringContent === fileContent);
				assert(stream.charStream.sourceName === "anonymous-script");
				assert(stream.charStream.toString() === fileContent);

				let parenToken = new RootFileParseToken(programCtx);
				let token = new ExampleToken(programCtx.antlrParseTree, parenToken);
				assert(token.sourceCode === fileContent, "Source code and fileContent must match!");
				assert(token.programCtx === programCtx, "Expected 'programCtx' to match");
				assert(token.parent === parenToken, "Expected 'parent' to match");
				assert(token.parent.programCtx === programCtx, "Expected 'parent' to match");
			});
		});
	});
});

