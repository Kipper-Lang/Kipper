"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyConfigResources = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("node:fs/promises"));
const fsSync = tslib_1.__importStar(require("node:fs"));
const node_path_1 = tslib_1.__importDefault(require("node:path"));
async function copyConfigResources(resources, logger) {
    for (const resource of resources) {
        const dir = node_path_1.default.dirname(resource.out);
        if (!fsSync.existsSync(dir) || !(await fs.stat(dir)).isDirectory()) {
            await fs.mkdir(dir, { recursive: true });
        }
        await fs.copyFile(resource.src, resource.out);
        if (logger) {
            logger.debug(`Copied resource from ${resource.src} to ${resource.out}`);
        }
    }
}
exports.copyConfigResources = copyConfigResources;
//# sourceMappingURL=copy-resources.js.map