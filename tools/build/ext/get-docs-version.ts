import * as path from "path";
import * as fs from "fs/promises";
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

  return entries;
}
