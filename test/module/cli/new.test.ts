import { assert } from "chai";
import * as path from "path";
import * as fsSync from "fs";
import * as fs from "fs/promises";
import { test } from "@oclif/test";
import { version } from "@kipper/core";

const tempFolder = path.join(__dirname, "..", "..", "temp");

function createTemp(): void {
	if (!fsSync.existsSync(tempFolder)) {
		fsSync.mkdirSync(tempFolder, { recursive: true });
	}
}

function removeTemp(): void {
	if (fsSync.existsSync(tempFolder)) {
		fsSync.rmSync(tempFolder, { recursive: true });
	}
}

describe("Kipper CLI 'new'", () => {
	beforeEach(() => {
		createTemp();
	});

	test
		.stdout()
		.command(["new", tempFolder, "-d"])
		.it("using '-d' (Default Config)", async (ctx) => {
			assert.isNotEmpty(ctx.stdout);
			assert.include(ctx.stdout, "Using default settings. Skipping setup wizard.");
			assert.include(ctx.stdout, "Project 'new-kipper-project' created successfully!");

			// Ensure that the files were created
			const files = await fs.readdir(tempFolder);
			assert.include(files, "kip-config.json");
			assert.include(files, "src");
			assert.include(files, "package.json");
			assert.include(files, ".gitignore");

			// Ensure that the package.json file was created
			const packageJson = await fs.readFile(path.join(tempFolder, "package.json"), "utf8");
			assert.include(packageJson, "new-kipper-project");
			assert.include(packageJson, "A new Kipper project");
			assert.include(packageJson, "1.0.0");
			assert.include(packageJson, "MIT");
			assert.include(packageJson, "Anonymous");

			// Ensure that the kip-config.json file was created
			const kipConfig = await fs.readFile(path.join(tempFolder, "kip-config.json"), "utf8");
			assert.include(kipConfig, '"target": "js"');
			assert.include(kipConfig, '"srcDir": "src"');
			assert.include(kipConfig, '"outDir": "build"');
			assert.include(kipConfig, '"version": "^' + version + '"');
			assert.include(kipConfig, '"files"');
			assert.include(kipConfig, '"./src/main.kip"');
			assert.include(kipConfig, '"resources": []');
		});

	afterEach(() => {
		removeTemp();
	});
});
