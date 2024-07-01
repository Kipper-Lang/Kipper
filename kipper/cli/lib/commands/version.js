"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class Version extends command_1.Command {
    async run() {
        process.stdout.write(this.config.userAgent + "\n");
    }
}
Version.description = "Display the currently installed Kipper version.";
exports.default = Version;
//# sourceMappingURL=version.js.map