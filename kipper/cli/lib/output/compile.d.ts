import { KipperCompileResult } from "@kipper/core";
import { KipperEncoding } from "../input";
export declare function writeCompilationResult(result: KipperCompileResult, outDir: string, outPath: string, encoding: KipperEncoding): Promise<string>;
