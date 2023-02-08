import { KipperCompiler, KipperError, KipperParseStream, KipperProgramContext, ParseData } from "@kipper/core";
import { defaultConfig } from "../index";
import { assert } from "chai";

describe("InvalidGlobalError", () => {
	["i", "log", "UNKNOWN"].forEach((globalName) => {
		it(globalName, async () => {
			let compiler = new KipperCompiler();
			try {
				const parseData: ParseData = await compiler.parse(
					new KipperParseStream({ stringContent: `var ${globalName}: num = 4;` }),
				);
				const programCtx: KipperProgramContext = await compiler.getProgramCtx(parseData, defaultConfig);

				// Duplicate identifier
				programCtx.registerBuiltIns({ identifier: globalName, params: [], returnType: "void" });
				programCtx.registerBuiltIns({ identifier: globalName, params: [], returnType: "void" });
			} catch (e) {
				assert.equal((<KipperError>e).constructor.name, "InvalidGlobalError", "Expected proper error");
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
