/// <reference types="node" />
/// <reference types="node" />
import * as path from "path";
import { KipperParseStream } from "@kipper/core";
import { OutputArgs, OutputFlags } from "@oclif/parser/lib/parse";
import { EvaluatedKipperConfigFile } from "@kipper/config";
export type KipperEncoding = "ascii" | "utf8" | "utf16le";
export declare const KipperEncodings: Array<KipperEncoding>;
export declare function verifyEncoding(encoding: string): KipperEncoding;
export declare function getParseStream(args: OutputArgs, flags: OutputFlags<any>, config: EvaluatedKipperConfigFile | undefined): Promise<{
    stream: KipperParseFile | KipperParseStream;
    outDir: string;
}>;
export declare class KipperParseFile extends KipperParseStream {
    static SPECIAL_CHARACTER_REPLACE_REGEX: RegExp;
    private readonly _absolutePath;
    private readonly _encoding;
    private readonly _path;
    constructor(stringContent: string, fileLocation: string, fileName: string, encoding: BufferEncoding);
    get absolutePath(): string;
    get filePath(): string;
    get encoding(): BufferEncoding;
    get path(): path.ParsedPath;
    static fromFile(filePath: string, encoding?: KipperEncoding): Promise<KipperParseFile>;
}
