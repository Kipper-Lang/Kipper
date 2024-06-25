import { FileNotFoundError, KipperConfigFile } from "@kipper/config";
import { getFileName } from "./utils/utils";
import { assert } from "chai";
import * as path from "path";
import * as fs from "node:fs/promises";

const basicKipConfig = getFileName("kip-config.basic.json");

describe("KipperConfigFile", () => {
	const encoding = "utf8";

	describe("fromString", () => {
		it("should return a KipperConfigFile instance", () => {
			const kipConfig = KipperConfigFile.fromString("{}", encoding);
			assert.instanceOf(kipConfig, KipperConfigFile);
			assert.strictEqual(kipConfig.content, "{}");
			assert.deepEqual(kipConfig.parsedJSON, {});
			assert.strictEqual(kipConfig.fileName, "<string>");
			assert.strictEqual(kipConfig.encoding, encoding);
		});
	});

	describe("fromFile", () => {
		it("should return a KipperConfigFile instance", async () => {
			// First get the file content to check what we are expecting
			const fileContent = await fs.readFile(basicKipConfig, { encoding });

			const kipConfig = await KipperConfigFile.fromFile(basicKipConfig, encoding);
			assert.instanceOf(kipConfig, KipperConfigFile);
			assert.strictEqual(kipConfig.content, fileContent);
			assert.deepEqual(kipConfig.parsedJSON, JSON.parse(fileContent));
			assert.strictEqual(kipConfig.fileName, path.basename(basicKipConfig));
			assert.strictEqual(kipConfig.encoding, encoding);
		});

		it("should throw an error if the file does not exist", async () => {
			try {
				await KipperConfigFile.fromFile(getFileName("does-not-exist.json"), encoding);
				assert.fail("Expected an error to be thrown");
			} catch (error) {
				assert.instanceOf(error, FileNotFoundError);
			}
		});
	});
});
