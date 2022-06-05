/**
 * 'update' command for updating the CLI if there is a new version available.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.5.0
 */
import UpdateCommand from "@oclif/plugin-update/lib/commands/update";

export default class Update extends UpdateCommand {
	static description = "Updates the Kipper compiler and CLI.";
}
