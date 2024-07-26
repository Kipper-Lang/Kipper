import type { KipperError, KipperProgramContext, LexerParserData } from "@kipper/core";
import { BuiltInFunction } from "@kipper/core";
import { BuiltInTypes } from "@kipper/core";
import { KipperCompiler, KipperFileStream } from "@kipper/core";
import { defaultConfig } from "../index";
import { assert } from "chai";

describe("InvalidGlobalError", () => {
	["i", "log", "UNKNOWN"].forEach((globalName) => {
		it(globalName, async () => {
			let compiler = new KipperCompiler();
			try {
				const parseData: LexerParserData = await compiler.parse(
					new KipperFileStream({ stringContent: `var ${globalName}: num = 4;` }),
				);
				const programCtx: KipperProgramContext = await compiler.getProgramCtx(parseData, defaultConfig);

				// Duplicate identifier
				programCtx.registerBuiltInFunctions(new BuiltInFunction(globalName, [], BuiltInTypes.void));
				programCtx.registerBuiltInFunctions(new BuiltInFunction(globalName, [], BuiltInTypes.void));
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidGlobalError", "Expected different error");
				assert((<KipperError>e).line !== undefined, "Expected existing 'line' meta field");
				assert((<KipperError>e).col !== undefined, "Expected existing 'col' meta field");
				assert((<KipperError>e).filePath !== undefined, "Expected existing 'filePath' meta field");
				// Token src should not exist, since this is a configuration error!
				assert((<KipperError>e).tokenSrc === undefined, "Expected non-existing 'tokenSrc' meta field");
				return;
			}
			assert.fail("Expected 'InvalidGlobalError'");
		});
	});
});
