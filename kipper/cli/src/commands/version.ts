/**
 * 'version' command returning the version and user agent of the Kipper installation.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */
import { Command } from "@oclif/core";

export default class Version extends Command {
	static description = "Display the currently installed Kipper version.";

	async run(): Promise<void> {
		process.stdout.write(this.config.userAgent + "\n");
	}
}
