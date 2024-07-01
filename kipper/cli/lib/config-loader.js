"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAutoConfig = exports.loadConfig = exports.setDefaultConfigInterpreter = exports.defaultConfigInterpreter = void 0;
const tslib_1 = require("tslib");
const config_1 = require("@kipper/config");
const fs = tslib_1.__importStar(require("fs"));
exports.defaultConfigInterpreter = new config_1.KipperConfigInterpreter();
function setDefaultConfigInterpreter(interpreter) {
    exports.defaultConfigInterpreter = interpreter;
}
exports.setDefaultConfigInterpreter = setDefaultConfigInterpreter;
async function loadConfig(options, interpreter) {
    interpreter = interpreter ?? exports.defaultConfigInterpreter;
    if ("path" in options) {
        return interpreter.loadConfig(await config_1.KipperConfigFile.fromFile(options.path, options.encoding));
    }
    else {
        return interpreter.loadConfig(config_1.KipperConfigFile.fromString(options.content, options.encoding));
    }
}
exports.loadConfig = loadConfig;
async function loadAutoConfig() {
    const workdir = process.cwd();
    const potentialPaths = [`${workdir}/kip-config.json`, `${workdir}/kipper-config.json`];
    for (const path of potentialPaths) {
        if (fs.existsSync(path)) {
            return loadConfig({ path, encoding: "utf8" });
        }
    }
    return undefined;
}
exports.loadAutoConfig = loadAutoConfig;
//# sourceMappingURL=config-loader.js.map