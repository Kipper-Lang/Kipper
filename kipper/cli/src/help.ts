/**
 * Help class extending the built-in oclif v1 help class. This class is intended to customise the help output.
 * @since 0.5.0
 */
import {Help as OclifHelp} from "@oclif/plugin-help";

export default class Help extends OclifHelp {
	static description: string = "Displays help for the Kipper CLI";
}
