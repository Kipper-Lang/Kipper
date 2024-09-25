import * as path from "path";
import * as fs from "fs/promises";
import * as semver from "semver";
import { statSync } from "fs";
import { srcRootDocs } from "./const-config";

export async function getDocsVersions() {
	// Get all directories in the docs folder that are not current, next, or latest,
	let entries = await fs.readdir(srcRootDocs);

	// Filter out non-directories
	entries = entries.filter((entry) => {
		const entryPath = path.join(srcRootDocs, entry);
		return statSync(entryPath).isDirectory();
	});
  entries = entries.sort((a: string, b: string) => {
    // Check for latest and next
    if (a === "next") return -1;
    if (b === "next") return 1;
    if (a === "latest") return -1;
    if (b === "latest") return 1;

    a = a.replace(/^v/, "");
    b = b.replace(/^v/, "");
    if (semver.valid(a) && semver.valid(b)) {
      return -semver.compare(a, b);
    }
  });

  return entries;
}
