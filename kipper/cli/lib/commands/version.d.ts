import { Command } from "@oclif/command";
export default class Version extends Command {
    static description: string;
    run(): Promise<void>;
}
