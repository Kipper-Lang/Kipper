/**
 * 'help' command for displaying help for the CLI.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */
import HelpCommand from "@oclif/plugin-help/lib/commands/help";

export default class Help extends HelpCommand {
	static override description = "Display help for the Kipper CLI.";
}
