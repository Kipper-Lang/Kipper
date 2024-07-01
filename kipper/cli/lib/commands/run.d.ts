import type { args } from "@oclif/parser";
import { flags } from "@oclif/command";
import Compile from "./compile";
export default class Run extends Compile {
    static description: string;
    static examples: Array<string>;
    static args: args.Input;
    static flags: flags.Input<any>;
    private executeKipperProgram;
    run(): Promise<void>;
}
