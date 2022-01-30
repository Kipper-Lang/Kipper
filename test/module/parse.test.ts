import {assert} from "chai";
import {KipperCompiler} from "../../src/";
import {CompilationUnitContext} from "../../src/compiler/parser/KipperParser";
import { KipperStreams } from "../../src/compiler/parse-stream";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("KipperCompiler.parse", () => {
  it("KipperStreams.fromFile", async () => {
    let compiler = new KipperCompiler();
    let fileToParse = await KipperStreams.fromFile(fileLocation, "utf8" as BufferEncoding);

    let compilationUnit: CompilationUnitContext = await compiler.parse(fileToParse);
    assert(compilationUnit, 'compilationUnit must be defined');
  });

  it("KipperStreams.fromString", async () => {
    let compiler = new KipperCompiler();
    let _file = await KipperStreams.fromFile(fileLocation, "utf8" as BufferEncoding);
    let fileToParse = await KipperStreams.fromString(_file.stringContent, "utf8" as BufferEncoding);

    let compilationUnit: CompilationUnitContext = await compiler.parse(fileToParse);
    assert(compilationUnit, 'compilationUnit must be defined');
  });
});
