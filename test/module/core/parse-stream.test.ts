import { assert } from "chai";
import { promises as fs } from "fs";
import * as path from "path";
import { KipperFileStream } from "../../../kipper/core/src/compiler/lexer-parser";
import { CharStreams } from "antlr4ts";
import { KipperConfigError } from "@kipper/core";

const fileLocation: string = path.resolve(`${__dirname}/../../kipper-files/main.kip`);

describe("KipperParseStream", () => {
	describe("constructor", () => {
		it("File initialisation without name", async () => {
			let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
			let stream: KipperFileStream = new KipperFileStream({
				stringContent: fileContent,
				filePath: fileLocation,
			});

			assert.equal(stream.name, "anonymous-script");
			assert.equal(stream.stringContent, fileContent);
			assert.equal(stream.charStream.sourceName, "anonymous-script");
			assert.equal(stream.charStream.toString(), fileContent);
			assert.equal(stream.filePath, fileLocation);
		});

		it("File initialisation with name", async () => {
			let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
			let stream: KipperFileStream = new KipperFileStream({
				name: path.parse(fileLocation).name,
				stringContent: fileContent,
				filePath: fileLocation,
			});

			assert.equal(stream.name, path.parse(fileLocation).name);
			assert.equal(stream.stringContent, fileContent);
			assert.equal(stream.charStream.sourceName, path.parse(fileLocation).name);
			assert.equal(stream.charStream.toString(), fileContent);
			assert.equal(stream.filePath, fileLocation);
		});

		it("File initialisation with const string", async () => {
			let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
			let stream: KipperFileStream = new KipperFileStream({
				name: path.parse(fileLocation).name,
				stringContent: fileContent,
				filePath: fileLocation,
			});

			assert.equal(stream.name, path.parse(fileLocation).name);
			assert.equal(stream.stringContent, fileContent);
			assert.equal(stream.charStream.sourceName, path.parse(fileLocation).name);
			assert.equal(stream.charStream.toString(), fileContent);
			assert.equal(stream.filePath, fileLocation);
		});

		it("File initialisation with char stream", async () => {
			let fileContent = (await fs.readFile(fileLocation, "utf8" as BufferEncoding)).toString();
			let stream: KipperFileStream = new KipperFileStream({
				name: path.parse(fileLocation).name,
				charStream: CharStreams.fromString(fileContent),
				filePath: fileLocation,
			});

			assert.equal(stream.name, path.parse(fileLocation).name);
			assert.equal(stream.stringContent, fileContent);
			assert.equal(stream.charStream.sourceName, path.parse(fileLocation).name);
			assert.equal(stream.charStream.toString(), fileContent);
			assert.equal(stream.filePath, fileLocation);
		});

		it("No string or char stream should throw an error", async () => {
			try {
				new KipperFileStream({});
			} catch (e) {
				assert(e instanceof KipperConfigError);
				return;
			}
			assert.fail("Expected 'KipperConfigError' to be thrown");
		});
	});

	describe("fields", () => {
		it("lines", () => {
			const content = "1\r\n2\r3\n4";
			let stream: KipperFileStream = new KipperFileStream({ stringContent: content });

			assert.equal(stream.name, "anonymous-script");
			assert.equal(stream.stringContent, content);
			assert.equal(stream.charStream.sourceName, "anonymous-script");
			assert.equal(stream.charStream.toString(), content);
			assert.equal(stream.lines.length, 4, "Expected three lines");
			assert.equal(JSON.stringify(stream.lines), JSON.stringify(["1", "2", "3", "4"]), "Expected identical content");
		});

		it("charStream must be a copy", () => {
			const charStream = CharStreams.fromString("1\r\n2\r3\n4");
			let stream: KipperFileStream = new KipperFileStream({ charStream: charStream });

			assert(stream.charStream !== charStream, "Expected a copy");
			assert(stream.charStream.toString() === charStream.toString(), "Expected identical content");
		});
	});
});
