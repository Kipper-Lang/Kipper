import { assert } from "chai";
import { KipperFileContext } from "../../src";

describe("KipperFileContext", () => {
  it("Constructor", () => {
    let instance = new KipperFileContext();
    assert(instance, "Has to be undefined");
  });
});
