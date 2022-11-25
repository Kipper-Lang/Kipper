/**
 * 'help' command for displaying help for the CLI. This implements the core help class which generates the help
 * interface.
 * @since 0.5.0
 */
import { Help as OclifHelp } from "@oclif/help";

export default class Help extends OclifHelp {
	static description = "Displays help for the Kipper CLI";
}
