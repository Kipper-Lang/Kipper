import HelpCommand from "@oclif/plugin-help/lib/commands/help";
import { flags } from "@oclif/command";
export default class Help extends HelpCommand {
    static description: string;
    static args: {
        name: string;
        required: boolean;
        description: string;
    }[];
    static flags: flags.Input<any>;
    static run(): Promise<void>;
}
