/**
 * Creates a new version folder with the specified version number and copies the 'latest' folder into it. It will also
 * move the files from the 'next' folder to the 'latest' folder and replace its content.
 *
 * Usage: node push-new-version.ts <version>
 */
import * as path from "path";
import * as fs from "fs";

const rootDir = path.resolve(__dirname, "..", "..");
const docsDir = path.join(rootDir, "src", "docs");

/**
 * Ensures that the specified version is valid.
 * @throws {Error} If the version is invalid or undefined.
 */
function ensureVersionIsValid(version: string) {
	if (!version) {
		throw new Error("No version specified.");
	}

	if (!/^\d+\.\d+\.\d+$/.test(version)) {
		throw new Error("Invalid version specified.");
	}
}

/**
 * Creates a new version folder with the specified version number and copies the 'latest' folder into it.
 */
function createVersionFolder(version: string) {
	const versionDir = path.join(docsDir, version);
	console.log(` - Creating version folder: ${versionDir}`);
	fs.mkdirSync(versionDir);

	// Copy all files in the 'latest' folder into the new version folder.
	const latestDir = path.join(docsDir, "latest");
	console.log(` - Copying 'latest' folder content to version folder '${version}'`);
	fs.readdirSync(latestDir).forEach((file: string) => {
		fs.copyFileSync(
			path.join(latestDir, file), // src
			path.join(versionDir, file), // dest
		);
	});
}

/**
 * Moves the files from the 'next' folder to the 'latest' folder and replace its content.
 */
function replaceLatestWithNext() {
	const nextDir = path.join(docsDir, "next");
	const latestDir = path.join(docsDir, "latest");

	console.log(` - Moving 'next' folder content to 'latest' folder`);
	fs.rmSync(latestDir, { recursive: true });
	fs.mkdirSync(latestDir);
	fs.readdirSync(nextDir).forEach((file: string) => {
		fs.copyFileSync(
			path.join(nextDir, file), // src
			path.join(latestDir, file), // dest
		);
	});
}

function main() {
	const version = process.argv[2];
	ensureVersionIsValid(version);
	createVersionFolder(version);
	replaceLatestWithNext();
}

main();
