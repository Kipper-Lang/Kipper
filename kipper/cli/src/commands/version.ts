/**
 * 'version' command returning the version and user agent of the Kipper installation.
 * @since 0.5.0
 */
import { Command } from "@oclif/core";

export default class Version extends Command {
	static override description = "Display the currently installed Kipper version.";

	public async run(): Promise<void> {
		process.stdout.write(this.config.userAgent + "\n");
	}
}
