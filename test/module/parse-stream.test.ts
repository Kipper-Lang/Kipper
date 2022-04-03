import { assert } from "chai";
import { promises as fs } from "fs";
import { KipperParseStream } from "../../src";

const fileLocation: string = `${__dirname}/../kipper-files/main.kip`;

describe("KipperStreams", () => {
  describe("fromString", () => {
    it("Simple file initialisation", async () => {
      let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
      let stream: KipperParseStream = new KipperParseStream(fileContent);

      assert(stream.name === "anonymous-script");
      assert(stream.stringContent === fileContent);
      assert(stream.charStream.sourceName === "anonymous-script");
      assert(stream.charStream.toString() === fileContent);
    });
  });
});
