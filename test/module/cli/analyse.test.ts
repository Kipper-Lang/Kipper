import { expect, test } from "@oclif/test";
import * as path from "path";

const validFilePath = path.resolve(`${__dirname}/../../kipper-files/main.kip`);
const invalidFilePath = path.resolve(`${__dirname}/../../kipper-files/invalid.kip`);
const utf16filePath = path.resolve(`${__dirname}/../../kipper-files/hello-world-utf16.kip`);

describe("kipper analyse", () => {
	describe("primary", () => {
		test
			.stdout()
			.command(["analyse", validFilePath])
			.it("Valid syntax", (ctx) => {
				expect(ctx.stdout).to.length.greaterThan(0);
				expect(ctx.stdout).to.contain("Starting syntax check for 'main.kip'.");
				expect(ctx.stdout).to.contain("Parsing");
				expect(ctx.stdout).to.contain("Finished syntax check successfully.");
				expect(ctx.stdout).to.contain("Finished code analysis in");
			});

		test
			.stderr()
			.stdout()
			.command(["analyse", invalidFilePath])
			.it("Invalid syntax", (ctx) => {
				expect(ctx.stdout).to.length.greaterThan(0);
				expect(ctx.stdout).to.contain("Starting syntax check for 'invalid.kip'.");
				expect(ctx.stdout).to.contain("Parsing");
				expect(ctx.stderr).to.contain("Traceback:");
				expect(ctx.stderr).to.contain(`File '${invalidFilePath}'`);
				expect(ctx.stderr).to.contain("SyntaxError: Missing ';' at 'is'");
			});
	});

	describe("encoding", () => {
		describe("using 'file'", () => {
			test
				.stdout()
				.command(["analyse", validFilePath, "-e", "ascii"])
				.it("Compile using encoding 'ascii'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting syntax check for 'main.kip'.");
					expect(ctx.stdout).to.contain("Parsing");
					expect(ctx.stdout).to.contain("Finished syntax check successfully.");
					expect(ctx.stdout).to.contain("Finished code analysis in");
				});

			test
				.stdout()
				.command(["analyse", validFilePath, "-e", "utf8"])
				.it("Compile using encoding 'utf8'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting syntax check for 'main.kip'.");
					expect(ctx.stdout).to.contain("Parsing");
					expect(ctx.stdout).to.contain("Finished syntax check successfully.");
					expect(ctx.stdout).to.contain("Finished code analysis in");
				});

			test
				.stdout()
				.command(["analyse", utf16filePath, "-e", "utf16le"])
				.it("Compile using encoding 'utf16le'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting syntax check for 'hello-world-utf16.kip'.");
					expect(ctx.stdout).to.contain("Parsing");
					expect(ctx.stdout).to.contain("Finished syntax check successfully.");
					expect(ctx.stdout).to.contain("Finished code analysis in");
				});
		});

		// Setting the encoding should not change the output whatsoever when using the '-s' flag
		describe("using '-s'", () => {
			test
				.stdout()
				.command(["analyse", "-s", `call print("Hello world!");`, "-e", "ascii"])
				.it("Compile using encoding 'ascii'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting syntax check for 'anonymous-script'.");
					expect(ctx.stdout).to.contain("Parsing");
					expect(ctx.stdout).to.contain("Finished syntax check successfully.");
					expect(ctx.stdout).to.contain("Finished code analysis in");
				});

			test
				.stdout()
				.command(["analyse", "-s", `call print("Hello world!");`, "-e", "utf8"])
				.it("Compile using encoding 'utf8'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting syntax check for 'anonymous-script'.");
					expect(ctx.stdout).to.contain("Parsing");
					expect(ctx.stdout).to.contain("Finished syntax check successfully.");
					expect(ctx.stdout).to.contain("Finished code analysis in");
				});

			test
				.stdout()
				.command(["analyse", "-s", `call print("Hello world!");`, "-e", "utf16le"])
				.it("Compile using encoding 'utf16le'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting syntax check for 'anonymous-script'.");
					expect(ctx.stdout).to.contain("Parsing");
					expect(ctx.stdout).to.contain("Finished syntax check successfully.");
					expect(ctx.stdout).to.contain("Finished code analysis in");
				});
		});
	});
});
