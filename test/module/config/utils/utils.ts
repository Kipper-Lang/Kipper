import * as path from "path";

export function getFileName(pathString: string): string {
	return path.resolve(`${__dirname}/../../../config-files/${pathString}`);
}
