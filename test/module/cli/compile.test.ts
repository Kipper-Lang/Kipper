import {expect, test} from "@oclif/test";
import {constants, promises as fs} from "fs";
import {assert} from "chai";
import * as path from "path";

const filePath = path.resolve(`${__dirname}/../../kipper-files/hello-world.kip`);

describe("compile", () => {
  test
    .stdout()
    .command(["compile", filePath])
    .it("'compile' command", async ctx => {
      expect(ctx.stdout).to.length.greaterThan(0);
      try {
        await fs.access(filePath, constants.R_OK);
      } catch (e) {
        assert(false, `Expected file '${filePath}' to exist.`);
      }
    });
});
