"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCompilationResult = void 0;
const fs_1 = require("fs");
const errors_1 = require("../errors");
async function writeCompilationResult(result, outDir, outPath, encoding) {
    try {
        try {
            await fs_1.promises.access(outDir, fs_1.constants.R_OK);
        }
        catch (e) {
            await fs_1.promises.mkdir(outDir);
        }
        const code = result.write();
        let buffer;
        if (encoding === "utf16le") {
            buffer = Buffer.from(`\ufeff${code}`, "utf16le");
        }
        else if (encoding === "utf8") {
            buffer = Buffer.from(code, "utf8");
        }
        else {
            buffer = Buffer.from(code, "ascii");
        }
        await fs_1.promises.writeFile(outPath, buffer, { encoding: encoding });
    }
    catch (e) {
        throw new errors_1.KipperFileWriteError(outPath);
    }
    return outPath;
}
exports.writeCompilationResult = writeCompilationResult;
//# sourceMappingURL=compile.js.map