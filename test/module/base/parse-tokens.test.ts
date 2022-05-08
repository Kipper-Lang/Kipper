import { assert } from "chai";
import { promises as fs } from "fs";
import { CompilableParseToken, KipperParseStream } from "@kipper/base/lib";
import { KipperProgramContext } from "@kipper/base/lib";
import { KipperCompiler } from "@kipper/base/lib";
import { RootFileParseToken } from "@kipper/base/lib";
import { TranslatedCodeLine } from "@kipper/base/lib";
import { TargetTokenCodeGenerator } from "@kipper/base/lib/compiler/code-generator";
import { TargetTokenSemanticAnalyser } from "@kipper/base/lib/compiler/semantic-analyser";
import {eligibleParentToken} from "@kipper/base";
import {ParserRuleContext} from "antlr4ts";

const fileLocation: string = `${__dirname}/../../kipper-files/main.kip`;

describe("Parse-Tokens", () => {
	describe("CompilableParseToken", () => {
		// Example class for testing purposes
		class ExampleToken extends CompilableParseToken<any> {
      constructor(antlrCtx: ParserRuleContext, parent: eligibleParentToken) {
        super(antlrCtx, parent);
      }

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

