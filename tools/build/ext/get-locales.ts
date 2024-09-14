import * as fs from "fs/promises";
import { localsPath } from "./const-config";
import * as path from "path";

type LocalEntry = { [key: string]: LocalEntry } | string;

interface Local {
	name: string;
	values: Record<string, LocalEntry>;
}

export async function getLocales(): Promise<Record<string, Local>> {
	const entries = await fs.readdir(localsPath);
	const locals: Record<string, Local> = {};
	for (const entry of entries) {
		const localPath = path.join(localsPath, entry);
    const json = JSON.parse(await fs.readFile(localPath, "utf8"));
    if (!json["name"]) {
      throw new Error("Locals file does not contain a name");
    }
    locals[json["name"]] = json;
	}

  if (!locals["en-US"]) {
    throw new Error("en-US locals not found");
  }
  locals["default"] = locals["en-US"];
	return locals;
}
