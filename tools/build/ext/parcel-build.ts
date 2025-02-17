/**
 * Parcel build script which calls the parcel build command using PNPM.
 */
import { spawn } from "child_process";
import { debuggerMessages, prodFlag, rootDir } from "./const-config";
import { log } from "./logger";

const parcelDevBuildCommand: string = "pnpm run parcel-dev-build";
const parcelProdBuildCommand: string = "pnpm run gh-pages-build";
const prettierCommand: string = "pnpm run prettier-build";

function getSpawnArgs(inputCmd: string): { command: string; args: string[] } {
	const cmdParts = inputCmd.split(" ");
	const command = cmdParts.shift();
	const args = cmdParts;
	return { command, args };
}

/**
 * Returns true when the process successfully executed the given command.
 * @param command The command to execute.
 * @param args The arguments to pass to the command.
 * @param cwd The working directory to execute the command in.
 * @param noStdOut If true, the process will not log any output to the console.
 * @returns True if the process successfully executed the given command.
 * @throws {Error} If the process failed to execute the given command.
 */
async function callProcess(command: string, args: string[], cwd: string, noStdOut: boolean = false): Promise<boolean> {
	const process = spawn(
		// Start the process with working directory equal to the project path
		command,
		args,
		{ cwd: cwd, detached: true },
	);

	let hasFailed = false;
	process.stdout.on("data", noStdOut ? () => void 0 : (data) => log.debug(`Subprocess 'stdout': ${data}`));
	process.stderr.on("data", (data) => {
		const checkForDebuggerMessage = (msg: string) => {
			// Checking if the data contains the debugger message or the other way around - due to weird split behavior
			data = data.toString();
			return (
				data.includes(msg) ||
				msg.includes(data) ||
				data.replace(/[\n\r]+/g, "").includes(msg) ||
				msg.includes(data.replace(/[\n\r]+/g, ""))
			);
		};
		if (debuggerMessages.some(checkForDebuggerMessage) || data.replace(/[\n\r]+/g, "") === "") {
			return; // Ignore debugger messages - this is not an error
		}

		log.error(`Subprocess 'stderr': ${data}`);
		hasFailed = true;
	});

	// Wait until the process is closed
	await new Promise<void>((resolve) => {
		process.on("close", resolve);
	});

	if (hasFailed) {
		throw new Error(`Subprocess '${command} ${args.join(" ")}' failed.`);
	}
	return true;
}

/**
 * Will build all files into the {@link destRootDir} using Parcel for a development environment.
 */
async function buildForDev(): Promise<void> {
	const { command, args } = getSpawnArgs(parcelDevBuildCommand);
	await callProcess(command, args, rootDir);
}

/**
 * Will build all files into the {@link rootDir} (In the root folder where package.json is located) using Parcel for a
 * production environment.
 */
async function buildForProd(): Promise<void> {
	const { command, args } = getSpawnArgs(parcelProdBuildCommand);
	await callProcess(command, args, rootDir);
}

/**
 * Prettifies all generated files.
 */
async function prettify(): Promise<void> {
	const { command, args } = getSpawnArgs(prettierCommand);
	await callProcess(command, args, rootDir, true);
}

/**
 * Builds the project using Parcel.
 *
 * If '--prod' is present in {@link process.argv} then this function uses {@link buildForProd}, otherwise a dev build
 * will be performed using {@link buildForDev}.
 */
export async function parcelBuild(): Promise<void> {
	// Prettify now - Better now than when the API docs are imported (they are using the built files as template, so
	// it's unnecessary to increase the workload by waiting)
	await prettify();

	if (prodFlag) {
		await buildForProd();
	} else {
		await buildForDev();
	}
}
