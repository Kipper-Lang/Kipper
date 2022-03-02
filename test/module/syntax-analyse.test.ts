import { promises as fs } from "fs";
import { KipperCompiler, KipperStreams } from "../../src";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("KipperCompiler.syntaxAnalyse", () => {
  it("Simple Check", async () => {
    let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
    let compiler = new KipperCompiler();
    let stream = await KipperStreams.fromString(fileContent, "inline-stream");

    await compiler.syntaxAnalyse(stream, false);
  });
});
