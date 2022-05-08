import {expect, test} from "@oclif/test";

const filePath = `${__dirname}/../../kipper-files/main.kip`;

describe("analyse", () => {
  test
    .stdout()
    .command(["analyse", filePath])
    .it("'analyse' command", ctx => {
      expect(ctx.stdout).to.length.greaterThan(0);
    });
});
