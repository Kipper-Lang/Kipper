import { expect } from "chai";
import { kipperRunCLI } from "../index";

describe("Simple", () => {
  it("Example", () => {
    const r = kipperRunCLI();
    expect(r).to.equal(r);
  });
});
