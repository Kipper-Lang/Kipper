import { getFileName } from "./utils/utils";
import { assert } from "chai";
import { KipperConfigFile, KipperConfigInterpreter, version as kipConfigVersion } from "@kipper/config";
import * as semver from "semver";
import * as path from "node:path";

const basicKipConfig = getFileName("kip-config.basic.json");
const extendsKipConfig = getFileName("kip-config.extended.json");

describe("KipperConfigInterpreter", () => {
	describe("loadConfig", () => {
		const interpreter = new KipperConfigInterpreter();
		const errorTestCases = [
			{ file: getFileName("errors/does-not-exist.json"), error: "FileNotFoundError" },
			{ file: getFileName("errors/invalid-json.json"), error: "JSONSyntaxError" },
			{ file: getFileName("errors/invalid-version-syntax.json"), error: "InvalidVersionSyntaxError" },
			{ file: getFileName("errors/incompatible-version.json"), error: "IncompatibleVersionError" },
			{ file: getFileName("errors/invalid-mapping.json"), error: "InvalidMappingSyntaxError" },
			{ file: getFileName("errors/unknown-field.json"), error: "UnknownFieldError" },
			{ file: getFileName("errors/missing-required-field.json"), error: "ConfigValidationError" },
			{ file: getFileName("errors/invalid-type.json"), error: "ConfigValidationError" },
			{ file: getFileName("errors/invalid-array-element-type.json"), error: "ConfigValidationError" },
		];

		describe("no extends", () => {
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
						target: "ts",
					},
					files: [{ src: `${pwd}/test/kipper-files/main.kip`, outDir: `${pwd}/dist` }],
					resources: [
						{ src: `${pwd}/img/icon.png`, out: `${pwd}/dist/img/icon.png` },
						{ src: `${pwd}/img/Kipper-Logo-without-head.png`, out: `${pwd}/dist/new-img-folder/icon.png` },
					],
				});
			});

			errorTestCases.forEach(({ file, error }) => {
				it(`should throw '${error}' if the file is '${path.basename(file)}'`, async () => {
					try {
						const kipperConfigFile = await KipperConfigFile.fromFile(file, "utf8");
						await interpreter.loadConfig(kipperConfigFile);
						assert.fail("Expected an error to be thrown");
					} catch (err) {
						assert.equal((<Error>err).constructor.name, error);
					}
				});
			});
		});

		describe("with extends", () => {
			it("should load a config with extends", async () => {
				const kipperConfigFile = await KipperConfigFile.fromFile(extendsKipConfig, "utf8");
				const config = await interpreter.loadConfig(kipperConfigFile);

				const pwd = process.cwd();
				assert.deepEqual(config.raw, {
					basePath: pwd,
					srcDir: `${pwd}/test/kipper-files`,
					outDir: `${pwd}/dist`,
					compiler: {
						version: semver.parse(semver.clean(kipConfigVersion))!,
						target: "ts",
					},
					files: [
						{ src: `${pwd}/test/kipper-files/multi-function-definition.kip`, outDir: `${pwd}/dist` },
						{ src: `${pwd}/test/kipper-files/multi-function-call.kip`, outDir: `${pwd}/dist` },
						{ src: `${pwd}/test/kipper-files/main.kip`, outDir: `${pwd}/dist` },
					],
					resources: [
						{ src: `${pwd}/img/Kipper-Logo-with-head.png`, out: `${pwd}/dist/img/Kipper-Logo-with-head.png` },
						{ src: `${pwd}/img/Kipper-Icon.png`, out: `${pwd}/dist/img/Kipper-Icon.png` },
						{ src: `${pwd}/img/icon.png`, out: `${pwd}/dist/img/icon.png` },
						{ src: `${pwd}/img/Kipper-Logo-without-head.png`, out: `${pwd}/dist/new-img-folder/icon.png` },
					],
				});
			});

			errorTestCases.forEach(({ file, error }) => {
				it(`should throw '${error}' if the file is '${path.basename(file)}'`, async () => {
					try {
						const kipperConfigFile = await KipperConfigFile.fromFile(file, "utf8");
						await interpreter.loadConfig(kipperConfigFile);
						assert.fail("Expected an error to be thrown");
					} catch (err) {
						assert.equal((<Error>err).constructor.name, error);
					}
				});
			});
		});
	});
});
