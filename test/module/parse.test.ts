import {assert} from "chai";
import {KipperCompiler} from "../../src/";
import {CompilationUnitContext} from "../../src/compiler/parser/KipperParser";
import { KipperStreams } from '../../src';
import { promises as fs } from "fs";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("KipperCompiler.parse", () => {

  it("KipperStreams.fromString", async () => {
    let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
    let compiler = new KipperCompiler();
    let fileToParse = await KipperStreams.fromString(fileContent, "utf8" as BufferEncoding);

    let compilationUnit: CompilationUnitContext = await compiler.parse(fileToParse);
    assert(compilationUnit, 'compilationUnit must be defined');
  });
});
