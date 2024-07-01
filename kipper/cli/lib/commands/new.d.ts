import type { args } from "@oclif/parser";
import { Command, flags } from "@oclif/command";
export default class New extends Command {
    static description: string;
    static examples: Array<string>;
    static args: args.Input;
    static flags: flags.Input<any>;
    private getRunConfig;
    private fileExists;
    private genKipConfig;
    private genMainFile;
    private genGitignore;
    private genPackageJson;
    run(): Promise<void>;
}
