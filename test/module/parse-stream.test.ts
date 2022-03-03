import { assert } from "chai";
import { promises as fs } from "fs";
import { KipperParseStream } from "../../src";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("KipperStreams", () => {
  describe("KipperStreams.fromString()", () => {
    it("Simple file initialisation", async () => {
      let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
      let stream: KipperParseStream = new KipperParseStream("inline-stream", fileContent);

      assert(stream.name === "inline-stream");
      assert(stream.stringContent === fileContent);
      assert(stream.charStream.sourceName === "inline-stream");
      assert(stream.charStream.toString() === fileContent);
    });
  });
});
