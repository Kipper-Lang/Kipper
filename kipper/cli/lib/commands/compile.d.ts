import type { args } from "@oclif/parser";
import { Command, flags } from "@oclif/command";
import { CompileConfig, KipperCompileTarget, KipperLogger } from "@kipper/core";
import { KipperParseFile } from "../input/";
export default class Compile extends Command {
    static description: string;
    static examples: Array<string>;
    static args: args.Input;
    static flags: flags.Input<any>;
    protected getRunConfig(): Promise<{
        args: {
            [name: string]: any;
        };
        flags: {
            [x: string]: any;
        };
        config: {
            stream: KipperParseFile | import("@kipper/core").KipperParseStream;
            target: KipperCompileTarget;
            outDir: string;
            outPath: string;
            encoding: any;
            resources: {
                src: string;
                out: string;
            }[];
            compilerOptions: CompileConfig;
        };
    }>;
    run(logger?: KipperLogger): Promise<void>;
}
