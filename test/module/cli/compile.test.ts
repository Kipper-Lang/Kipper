import {expect, test} from "@oclif/test";
import {constants, promises as fs} from "fs";
import {assert} from "chai";
import * as path from "path";
import * as ts from "typescript";

const filePath = path.resolve(`${__dirname}/../../kipper-files/hello-world.kip`);
const compiledPath = path.resolve(`build/hello-world.ts`);

describe("compile", () => {
  test
    .stdout()
    .command(["compile", filePath])
    .it("Compile 'hello-world.kip'", async ctx => {
      expect(ctx.stdout).to.length.greaterThan(0);
      expect(ctx.stdout).to.contain("Starting compilation for 'hello-world.kip'.");
      expect(ctx.stdout).to.contain("Parsing 'hello-world.kip'.");
      expect(ctx.stdout).to.contain("Finished code compilation in");
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
    .it("Run 'hello-world.kip!'", async ctx => {
      expect(ctx.stdout).to.length.greaterThan(0);

      // Read the created file
      try {
        await fs.access(compiledPath, constants.R_OK);
      } catch (e) {
        assert(false, `Expected file '${compiledPath}' to exist.`);
      }
      const fileContent = (await fs.readFile(compiledPath, "utf8" as BufferEncoding)).toString();

      // Compile the program to JavaScript and evaluate it
      const jsCode = ts.transpile(fileContent);

      // Overwrite built-in to access output
      const prevLog = console.log;
      console.log = (message: string) => {
        // Assert that the output is "Hello world!"
        assert(message === "Hello world!");
      };

      // Evaluate expression
      eval(jsCode);

      // Restore old console.log
      console.log = prevLog;
    });
});
