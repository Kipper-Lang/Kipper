import {expect, test} from "@oclif/test";

describe("compile", () => {
  test
    .stdout()
    .command(["'run'", "./test/kipper-files/main.kip"])
    .it("runs 'run'", ctx => {
      // TODO! Implement this test case once 'compile' moved out of development
      expect(ctx.stdout).to.not.contain("");
    });
});
