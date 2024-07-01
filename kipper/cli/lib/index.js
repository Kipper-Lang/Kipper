"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.github = exports.license = exports.author = exports.version = exports.name = exports.run = void 0;
const tslib_1 = require("tslib");
var command_1 = require("@oclif/command");
Object.defineProperty(exports, "run", { enumerable: true, get: function () { return command_1.run; } });
tslib_1.__exportStar(require("./input"), exports);
tslib_1.__exportStar(require("./logger"), exports);
tslib_1.__exportStar(require("./errors"), exports);
tslib_1.__exportStar(require("./output/compile"), exports);
exports.name = "@kipper/cli";
exports.version = "0.11.0-alpha.1";
exports.author = "Luna Klatzer";
exports.license = "GPL-3.0-or-later";
exports.github = "https://github.com/Kipper-Lang/Kipper";
//# sourceMappingURL=index.js.map