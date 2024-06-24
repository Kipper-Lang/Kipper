import { EvaluatedKipperConfigFile } from "@kipper/config";
import * as fs from "node:fs/promises";
import * as fsSync from "node:fs";
import { KipperLogger } from "@kipper/core";

import path from "node:path";

/**
 * Copy resources from the source to the destination.
 * @param resources The resources to copy.
 * @param logger The logger to use. If not provided, no logs will be emitted.
 * @since 0.11.0
 */
export async function copyConfigResources(
	resources: EvaluatedKipperConfigFile["resources"],
	logger?: KipperLogger,
): Promise<void> {
	for (const resource of resources) {
		const dir = path.dirname(resource.out);
		if (!fsSync.existsSync(dir) || !(await fs.stat(dir)).isDirectory()) {
			await fs.mkdir(dir, { recursive: true });
		}
		await fs.copyFile(resource.src, resource.out);
		if (logger) {
			logger.debug(`Copied resource from ${resource.src} to ${resource.out}`);
		}
	}
}
