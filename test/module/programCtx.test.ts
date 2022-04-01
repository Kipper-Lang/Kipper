import { assert } from "chai";
import {
	GlobalAlreadyRegisteredError,
	KipperCompiler,
	KipperParseStream,
	KipperProgramContext,
} from "../../src";
import { promises as fs } from "fs";
import { RuntimeCompileConfig } from "../../src/compiler/compiler";

const mainFile = `${__dirname}/../kipper-files/main.kip`;

describe("KipperProgramContext", () => {
	describe("constructor", async () => {
		const fileContent = (await fs.readFile(mainFile, "utf8" as BufferEncoding)).toString();
		const stream: KipperParseStream = new KipperParseStream("anonymous-script", fileContent);

		it("DefaultConfiguration", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// Make sure the default ones are enabled
			assert(programCtx.globals.length === 0, "Expected globals to be empty");
		});

		it("AddSingleGlobal", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// Make sure the default ones are enabled
			assert(programCtx.globals.length === 0, "Expected globals to be empty");

			// Register already registered global again
			programCtx.registerGlobals(RuntimeCompileConfig.defaultGlobals[0]);

			// Make sure a single global exists
			assert(programCtx.globals.length == 1, "Expected one global to exist");
			assert(programCtx.globals[0] === RuntimeCompileConfig.defaultGlobals[0], "Expected global to match!");
		});

		it("ExpectingErrorOnDoubleGlobalRegistration", async () => {
			let programCtx: KipperProgramContext = await new KipperCompiler().parse(stream);

			// Make sure the default ones are enabled
			assert(programCtx.globals.length === 0, "Expected globals to be empty");

			// Register already registered global again
			programCtx.registerGlobals(RuntimeCompileConfig.defaultGlobals[0]);

			// Make sure a single global exists
			assert(programCtx.globals.length == 1, "Expected one global to exist");

			try {
				programCtx.registerGlobals(RuntimeCompileConfig.defaultGlobals[0]);
			} catch (e) {
				if (e instanceof GlobalAlreadyRegisteredError) {
					return;
				} else {
					assert(false, "Unexpected error!");
				}
			}
			assert(false, "Expected error!");
		});
	});
});
