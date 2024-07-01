"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const help_1 = tslib_1.__importDefault(require("@oclif/plugin-help/lib/commands/help"));
class Help extends help_1.default {
    static async run() {
        return await super.run();
    }
}
Help.description = "Display help for the Kipper CLI.";
Help.args = help_1.default.args;
Help.flags = help_1.default.flags;
exports.default = Help;
//# sourceMappingURL=help.js.map