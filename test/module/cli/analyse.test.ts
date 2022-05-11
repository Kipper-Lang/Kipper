import {expect, test} from "@oclif/test";
import * as path from "path";
import {KipperSyntaxError} from "@kipper/core";

const validFilePath = path.resolve(`${__dirname}/../../kipper-files/main.kip`);
const invalidFilePath = path.resolve(`${__dirname}/../../kipper-files/invalid.kip`);

describe("analyse", () => {
  test
    .stdout()
    .command(["analyse", validFilePath])
    .it("Valid syntax", ctx => {
      expect(ctx.stdout).to.length.greaterThan(0);
      expect(ctx.stdout).to.contain("Starting syntax check for 'main.kip'.");
      expect(ctx.stdout).to.contain("Parsing 'main.kip'.");
      expect(ctx.stdout).to.contain("Finished syntax check successfully.");
      expect(ctx.stdout).to.contain("Finished code analysis in");
    });

  test
    .stderr()
    .stdout()
    .command(["analyse", invalidFilePath])
    .catch(err => {
      expect(err instanceof KipperSyntaxError, "Expected proper syntax error");

      // Every data field should be filled
      expect((<KipperSyntaxError<any>>err).stack).to.not.be.undefined;
      expect((<KipperSyntaxError<any>>err).line).to.not.be.undefined;
      expect((<KipperSyntaxError<any>>err).col).to.not.be.undefined;
      expect((<KipperSyntaxError<any>>err).filePath).to.not.be.undefined;
      expect((<KipperSyntaxError<any>>err).tokenSrc).to.not.be.undefined;
      expect((<KipperSyntaxError<any>>err).getTraceback().includes("Unknown")).to.be.false;

      // The path should be passed down to the error
      expect((<KipperSyntaxError<any>>err).filePath).to.equal(invalidFilePath, "Paths should match");
    })
    .it("Invalid syntax", ctx => {
      expect(ctx.stdout).to.length.greaterThan(0);
      expect(ctx.stdout).to.contain("Starting syntax check for 'invalid.kip'.");
      expect(ctx.stdout).to.contain("Parsing 'invalid.kip'.");
      expect(ctx.stderr).to.contain("Traceback:");
      expect(ctx.stderr).to.contain(`File '${invalidFilePath}'`);
      expect(ctx.stderr).to.contain("KipperSyntaxError: Mismatched input");
    });
});
