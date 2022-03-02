import { assert } from "chai";
import { KipperCompiler, KipperStreams } from "../../src/";
import { promises as fs } from "fs";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("KipperCompiler.parse", () => {
  it("KipperStreams.fromString", async () => {
    let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
    let compiler = new KipperCompiler();
    let stream = await KipperStreams.fromString(fileContent, "inline-stream");

    assert(stream.name === "inline-stream");
    assert(stream.stringContent === fileContent);
    assert(stream.charStream.sourceName === "inline-stream");
    assert(stream.charStream.toString() === fileContent);
  });
});
