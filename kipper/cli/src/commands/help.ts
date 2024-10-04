/**
 * 'help' command for displaying help for the CLI.
 * @since 0.5.0
 */
import HelpCommand from "@oclif/plugin-help/lib/commands/help";
import type {flags} from "@oclif/command";

/**
 * This class is only there so oclif auto-generates docs for the help command, which should be visible in the README.md.
 *
 * Note that there is another Help class in the root module of '@kipper/cli'.
 */
export default class Help extends HelpCommand {
	static override description: string = "Display help for the Kipper CLI.";
	static override args = HelpCommand.args;
	static override flags: flags.Input<any> = HelpCommand.flags;

	static override async run(): Promise<void> {
		return await super.run();
	}
}
