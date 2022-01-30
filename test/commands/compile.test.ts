import {expect, test} from "@oclif/test";

describe("compile", () => {
  test
    .stdout()
    .command(["'compile'", "./test/kipper-files/main.kip"])
    .it("runs 'compile'", ctx => {
      // TODO! Implement this test case once 'compile' moved out of development
      expect(ctx.stdout).to.not.contain("");
    });
});
