import type { args } from "@oclif/parser";
import { Command, flags } from "@oclif/command";
export default class Analyse extends Command {
    static description: string;
    static examples: Array<string>;
    static args: args.Input;
    static flags: flags.Input<any>;
    private getRunConfig;
    run(): Promise<void>;
}
