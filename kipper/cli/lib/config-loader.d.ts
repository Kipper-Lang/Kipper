/// <reference types="node" />
import { EvaluatedKipperConfigFile, KipperConfigInterpreter } from "@kipper/config";
export declare let defaultConfigInterpreter: KipperConfigInterpreter;
export declare function setDefaultConfigInterpreter(interpreter: KipperConfigInterpreter): void;
export declare function loadConfig(options: {
    path: string;
    encoding: BufferEncoding;
} | {
    content: string;
    encoding: BufferEncoding;
}, interpreter?: KipperConfigInterpreter): Promise<EvaluatedKipperConfigFile>;
export declare function loadAutoConfig(): Promise<EvaluatedKipperConfigFile | undefined>;
