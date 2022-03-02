import {assert} from "chai";
import { KipperFileContext } from '../../src';
import { KipperFileListener } from '../../src';

describe("KipperFileContext", () => {
  it("constructor", () => {
    let fileCtx = new KipperFileContext();
    let instance = new KipperFileListener(fileCtx);
    assert(instance, "Has to be undefined");
    assert(instance.fileCtx === fileCtx, "Set init value has to be equal to the property");
  })
});
