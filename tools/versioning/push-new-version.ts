/**
 * Creates a new version folder with the specified version number and copies the 'latest' folder into it. It will also
 * move the files from the 'next' folder to the 'latest' folder and replace its content.
 *
 * Usage: node push-new-version.ts <version>
 */
import * as path from "path";
import * as fs from "fs/promises";

const rootDir = path.resolve(__dirname, "..", "..");
const docsDir = path.join(rootDir, "src", "docs");

/**
 * Ensures that the specified version is valid.
 * @throws {Error} If the version is invalid or undefined.
 */
async function ensureVersionIsValid(version: string) {
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
async function createVersionFolder(version: string) {
	const versionDir = path.join(docsDir, version);
	console.log(` - Creating version folder: ${versionDir}`);
	await fs.mkdir(versionDir);

	// Copy all files in the 'latest' folder into the new version folder.
	const latestDir = path.join(docsDir, "latest");
	console.log(` - Moving 'latest' folder content to version folder '${version}'`);
	await fs.cp(latestDir, versionDir, { recursive: true });
  await fs.rm(latestDir, { recursive: true });
  await fs.mkdir(latestDir);
}

/**
 * Moves the files from the 'next' folder to the 'latest' folder and replace its content.
 */
async function replaceLatestWithNext() {
	const nextDir = path.join(docsDir, "next");
	const latestDir = path.join(docsDir, "latest");

	console.log(` - Copying 'next' folder content to 'latest' folder (Preserving current state to allow for further updates)`);
	await fs.cp(nextDir, latestDir, { recursive: true });
  await fs.rm(nextDir, { recursive: true });
  await fs.mkdir(nextDir);
}

async function main() {
	const version = process.argv[2];
	await ensureVersionIsValid(version);
	await createVersionFolder(version);
	await replaceLatestWithNext();
}

void main();
