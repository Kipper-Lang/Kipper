import {expect, test} from "@oclif/test";

describe("hello", () => {
  test
    .stdout()
    .command(["hello"])
    .it("runs hello", ctx => {
      expect(ctx.stdout).to.contain("Hello from Kipper!");
    });
});
