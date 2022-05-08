import { assert } from "chai";
import { promises as fs } from "fs";
import { KipperParseStream } from "@kipper/base/lib";

const fileLocation: string = `${__dirname}/../../kipper-files/main.kip`;

describe("KipperParseStream", () => {
  describe("constructor", () => {
    it("Simple file initialisation", async () => {
      let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
      let stream: KipperParseStream = new KipperParseStream(fileContent);

      assert(stream.name === "anonymous-script");
      assert(stream.stringContent === fileContent);
      assert(stream.charStream.sourceName === "anonymous-script");
      assert(stream.charStream.toString() === fileContent);
    });
  });

  describe("fields", () => {
    it("lines", () => {
      const content = "1\r\n2\r3\n4";
      let stream: KipperParseStream = new KipperParseStream(content);

      assert(stream.name === "anonymous-script");
      assert(stream.stringContent === content);
      assert(stream.charStream.sourceName === "anonymous-script");
      assert(stream.charStream.toString() === content);
      assert(stream.lines.length == 4, "Expected three lines");
      assert(JSON.stringify(stream.lines) === JSON.stringify(["1", "2", "3", "4"]), "Expected identical content");
    });
  });
});
