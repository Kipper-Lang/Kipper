/**
 * 'help' command for displaying help for the CLI.
 * @since 0.5.0
 */
import HelpCommand from "@oclif/plugin-help/lib/commands/help";

export default class Help extends HelpCommand {
	static override description = "Display help for the Kipper CLI.";
	static override args = HelpCommand.args;
	static override flags = HelpCommand.flags;

	static override async run(): Promise<void> {
		return await super.run();
	}
}
