import { expect, test } from "@oclif/test";
import { constants, promises as fs } from "fs";
import { assert } from "chai";
import * as path from "path";
import * as ts from "typescript";

const filePath = path.resolve(`${__dirname}/../../kipper-files/hello-world.kip`);
const utf16filePath = path.resolve(`${__dirname}/../../kipper-files/hello-world-utf16.kip`);
const compiledPath = path.resolve(`build/hello-world.js`);
const utf16CompiledPath = path.resolve("build/hello-world-utf16.js");
const anonymousJSCompiledPath = path.resolve("build/anonymous-script.js");
const anonymousTSCompiledPath = path.resolve("build/anonymous-script.ts");

describe("Kipper CLI 'compile'", async () => {
	describe("primary", () => {
		let fileArgTestOutput: string;
		let stringFlagTestOutput: string;

		describe("using 'file'", () => {
			test
				.stdout()
				.command(["compile", filePath])
				.it("Compile file 'hello-world.kip' with file argument", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting compilation for 'hello-world.kip'.");
					expect(ctx.stdout).to.contain("Parsing file content.");
					expect(ctx.stdout).to.contain("Done in");
					try {
						await fs.access(compiledPath, constants.R_OK);
					} catch (e) {
						assert(false, `Expected file '${compiledPath}' to exist.`);
					}
					await fs.rm(compiledPath);
				});

			test
				.stdout()
				.command(["compile", filePath])
				.it("Run file 'hello-world.kip' with file argument", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);

					// Read the created file
					try {
						await fs.access(compiledPath, constants.R_OK);
					} catch (e) {
						assert(false, `Expected file '${compiledPath}' to exist.`);
					}
					const fileContent = await fs.readFile(compiledPath, "utf8" as BufferEncoding);
					fileArgTestOutput = fileContent;

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(fileContent);

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: any) => {
						// Assert that the output is "Hello world!"
						assert(message === "Hello world!");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;

					// Remove unneeded file
					await fs.rm(compiledPath);
				});
		});

		describe("using '-s'", () => {
			test
				.stdout()
				.command(["compile", "-s", `call print("Hello world!");`])
				.it("Compile Hello world with --stringCode flag", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting compilation for 'anonymous-script'.");
					expect(ctx.stdout).to.contain("Parsing file content.");
					expect(ctx.stdout).to.contain("Done in");
					try {
						await fs.access(anonymousJSCompiledPath, constants.R_OK);
					} catch (e) {
						assert(false, `Expected file '${anonymousJSCompiledPath}' to exist.`);
					}
					await fs.rm(anonymousJSCompiledPath);
				});

			test
				.stdout()
				.command(["compile", "-s", `call print("Hello world!");`])
				.it("Run Hello world with --stringCode flag", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);

					// Read the created file
					try {
						await fs.access(anonymousJSCompiledPath, constants.R_OK);
					} catch (e) {
						assert(false, `Expected file '${anonymousJSCompiledPath}' to exist.`);
					}
					const fileContent = await fs.readFile(anonymousJSCompiledPath, "utf8" as BufferEncoding);
					stringFlagTestOutput = fileContent;

					// Compile the program to JavaScript and evaluate it
					const jsCode = ts.transpile(fileContent);

					// Overwrite built-in to access output
					const prevLog = console.log;
					console.log = (message: any) => {
						// Assert that the output is "Hello world!"
						assert(message === "Hello world!");
					};

					// Evaluate expression
					eval(jsCode);

					// Restore old console.log
					console.log = prevLog;

					// Remove unneeded file
					await fs.rm(anonymousJSCompiledPath);
				});
		});

		test.it("Ensure equal return by 'file' arg and '--stringCode' flag", () => {
			assert(fileArgTestOutput === stringFlagTestOutput, "Expected equal return by 'file' arg and '--stringCode' flag");
		});
	});

	describe("encoding", () => {
		describe("using 'file'", () => {
			test
				.stdout()
				.command(["compile", filePath, "-e", "ascii"])
				.it("Compile using encoding 'ascii'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting compilation for 'hello-world.kip'.");
					expect(ctx.stdout).to.contain("Parsing file content.");
					expect(ctx.stdout).to.contain("Done in");
					try {
						await fs.access(compiledPath, constants.R_OK);
					} catch (e) {
						assert(false, `Expected file '${compiledPath}' to exist.`);
					}
					await fs.rm(compiledPath);
				});

			test
				.stdout()
				.command(["compile", filePath, "-e", "utf8"])
				.it("Compile using encoding 'utf8'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting compilation for 'hello-world.kip'.");
					expect(ctx.stdout).to.contain("Parsing file content.");
					expect(ctx.stdout).to.contain("Done in");
					try {
						await fs.access(compiledPath, constants.R_OK);
					} catch (e) {
						assert(false, `Expected file '${compiledPath}' to exist.`);
					}
					await fs.rm(compiledPath);
				});

			test
				.stdout()
				.command(["compile", utf16filePath, "-e", "utf16le"])
				.it("Compile using encoding 'utf16le'", async (ctx) => {
					expect(ctx.stdout).to.length.greaterThan(0);
					expect(ctx.stdout).to.contain("Starting compilation for 'hello-world-utf16.kip'.");
					expect(ctx.stdout).to.contain("Parsing file content.");
					expect(ctx.stdout).to.contain("Done in");
					try {
						await fs.access(utf16CompiledPath, constants.R_OK);
					} catch (e) {
						assert(false, `Expected file '${utf16CompiledPath}' to exist.`);
					}
					await fs.rm(utf16CompiledPath);
				});
		});

		// Setting the encoding should not change the output whatsoever when using the '-s' flag
		describe("using '-s'", () => {
			describe("javascript", () => {
				test
					.stdout()
					.command(["compile", "-s", `call print("Hello world!");`, "-e", "ascii"])
					.it("Compile using encoding 'ascii'", async (ctx) => {
						expect(ctx.stdout).to.length.greaterThan(0);
						expect(ctx.stdout).to.contain("Starting compilation for 'anonymous-script'.");
						expect(ctx.stdout).to.contain("Parsing file content.");
						expect(ctx.stdout).to.contain("Done in");
						try {
							await fs.access(anonymousJSCompiledPath, constants.R_OK);
						} catch (e) {
							assert(false, `Expected file '${anonymousJSCompiledPath}' to exist.`);
						}
						await fs.rm(anonymousJSCompiledPath);
					});

				test
					.stdout()
					.command(["compile", "-s", `call print("Hello world!");`, "-e", "utf8"])
					.it("Compile using encoding 'utf8'", async (ctx) => {
						expect(ctx.stdout).to.length.greaterThan(0);
						expect(ctx.stdout).to.contain("Starting compilation for 'anonymous-script'.");
						expect(ctx.stdout).to.contain("Parsing file content.");
						expect(ctx.stdout).to.contain("Done in");
						try {
							await fs.access(anonymousJSCompiledPath, constants.R_OK);
						} catch (e) {
							assert(false, `Expected file '${anonymousJSCompiledPath}' to exist.`);
						}
						await fs.rm(anonymousJSCompiledPath);
					});

				test
					.stdout()
					.command(["compile", "-s", `call print("Hello world!");`, "-e", "utf16le"])
					.it("Compile using encoding 'utf16le'", async (ctx) => {
						expect(ctx.stdout).to.length.greaterThan(0);
						expect(ctx.stdout).to.contain("Starting compilation for 'anonymous-script'.");
						expect(ctx.stdout).to.contain("Parsing file content.");
						expect(ctx.stdout).to.contain("Done in");
						try {
							await fs.access(anonymousJSCompiledPath, constants.R_OK);
						} catch (e) {
							assert(false, `Expected file '${anonymousJSCompiledPath}' to exist.`);
						}
						await fs.rm(anonymousJSCompiledPath);
					});
			});

			describe("typescript", () => {
				test
					.stdout()
					.command(["compile", "-s", `call print("Hello world!");`, "-e", "ascii", "-t", "ts"])
					.it("Compile using encoding 'ascii'", async (ctx) => {
						expect(ctx.stdout).to.length.greaterThan(0);
						expect(ctx.stdout).to.contain("Starting compilation for 'anonymous-script'.");
						expect(ctx.stdout).to.contain("Parsing file content.");
						expect(ctx.stdout).to.contain("Done in");
						try {
							await fs.access(anonymousTSCompiledPath, constants.R_OK);
						} catch (e) {
							assert(false, `Expected file '${anonymousTSCompiledPath}' to exist.`);
						}
						await fs.rm(anonymousTSCompiledPath);
					});

				test
					.stdout()
					.command(["compile", "-s", `call print("Hello world!");`, "-e", "utf8", "-t", "ts"])
					.it("Compile using encoding 'utf8'", async (ctx) => {
						expect(ctx.stdout).to.length.greaterThan(0);
						expect(ctx.stdout).to.contain("Starting compilation for 'anonymous-script'.");
						expect(ctx.stdout).to.contain("Parsing file content.");
						expect(ctx.stdout).to.contain("Done in");
						try {
							await fs.access(anonymousTSCompiledPath, constants.R_OK);
						} catch (e) {
							assert(false, `Expected file '${anonymousTSCompiledPath}' to exist.`);
						}
						await fs.rm(anonymousTSCompiledPath);
					});

				test
					.stdout()
					.command(["compile", "-s", `call print("Hello world!");`, "-e", "utf16le", "-t", "ts"])
					.it("Compile using encoding 'utf16le'", async (ctx) => {
						expect(ctx.stdout).to.length.greaterThan(0);
						expect(ctx.stdout).to.contain("Starting compilation for 'anonymous-script'.");
						expect(ctx.stdout).to.contain("Parsing file content.");
						expect(ctx.stdout).to.contain("Done in");
						try {
							await fs.access(anonymousTSCompiledPath, constants.R_OK);
						} catch (e) {
							assert(false, `Expected file '${anonymousTSCompiledPath}' to exist.`);
						}
						await fs.rm(anonymousTSCompiledPath);
					});
			});
		});
	});
});
