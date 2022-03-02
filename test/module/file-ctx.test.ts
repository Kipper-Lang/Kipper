import {assert} from "chai";
import { KipperFileContext } from '../../src';

describe("KipperFileContext", () => {
  it("constructor", () => {
    let instance = new KipperFileContext();
    assert(instance, "Has to be undefined");
  })
});
