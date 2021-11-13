import {assert} from "chai";
import {KipperCompiler} from "../../src/";
import {CompilationUnitContext} from "../../src/compiler/parser/KipperParser";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("lib-compile", () => {
  it("lib-single-file", async () => {
    const compiler = new KipperCompiler();
    const fileToParse = await compiler.getParseFile(fileLocation, "utf-8");
    let compilationUnit: CompilationUnitContext = await compiler.parse(fileToParse);
    assert(
      compilationUnit != undefined,
      'compilationUnit must not be undefined'
    );
  });
});
