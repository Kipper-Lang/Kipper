import {expect, test} from "@oclif/test";

describe("analyse", () => {
  test
    .stdout()
    .command(["analyse", "./test/kipper-files/main.kip"])
    .it("runs analyse command", ctx => {
      expect(ctx.stdout).to.contain("");
    });
});
