import { getFileName } from "./utils/utils";
import { assert } from "chai";
import { KipperConfigFile, KipperConfigInterpreter, version as kipConfigVersion } from "@kipper/config";
import * as semver from "semver";

const basicKipConfig = getFileName("kip-config.basic.json");

describe("KipperConfigInterpreter", () => {
	describe("loadConfig", () => {
		describe("no extends", () => {
			const interpreter = new KipperConfigInterpreter();

			it("should load a basic config", async () => {
				const kipperConfigFile = await KipperConfigFile.fromFile(basicKipConfig, "utf8");
				const config = await interpreter.loadConfig(kipperConfigFile);

				const pwd = process.cwd();
				assert.deepEqual(config.raw, {
					basePath: pwd,
					srcDir: `${pwd}/test/kipper-files`,
					outDir: `${pwd}/dist`,
					compiler: {
						version: semver.parse(semver.clean(kipConfigVersion))!,
						target: "ts"
					},
					files: [
						{ src: `${pwd}/test/kipper-files/main.kip`, outDir: `${pwd}/dist` }
					],
					resources: [
						{ src: `${pwd}/img/icon.png`, out: `${pwd}/dist/img/icon.png` }
					]
				});
			});
		});
	});
});
