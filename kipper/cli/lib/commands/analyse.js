"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const command_1 = require("@oclif/command");
const core_1 = require("@kipper/core");
const logger_1 = require("../logger");
const input_1 = require("../input/");
const decorators_1 = require("../decorators");
const config_loader_1 = require("../config-loader");
class Analyse extends command_1.Command {
    async getRunConfig() {
        const { args, flags } = this.parse(Analyse);
        const preExistingConfig = await (0, config_loader_1.loadAutoConfig)();
        const { stream } = await (0, input_1.getParseStream)(args, flags, preExistingConfig);
        return {
            args,
            flags,
            config: {
                stream,
            },
        };
    }
    async run() {
        const { flags, config } = await this.getRunConfig();
        const logger = new core_1.KipperLogger(logger_1.CLIEmitHandler.emit, core_1.LogLevel.INFO, flags["warnings"]);
        const compiler = new core_1.KipperCompiler(logger);
        const startTime = new Date().getTime();
        try {
            await compiler.syntaxAnalyse(config.stream);
        }
        catch (e) {
            return;
        }
        const duration = (new Date().getTime() - startTime) / 1000;
        await logger.info(`Done in ${duration}s.`);
    }
}
Analyse.description = "Analyse a Kipper file and validate its syntax and semantic integrity.";
Analyse.examples = [];
Analyse.args = [
    {
        name: "file",
        required: false,
        description: "The file that should be analysed.",
    },
];
Analyse.flags = {
    encoding: command_1.flags.string({
        char: "e",
        default: "utf8",
        description: `The encoding that should be used to read the file (${input_1.KipperEncodings.join()}).`,
        parse: input_1.verifyEncoding,
    }),
    "string-code": command_1.flags.string({
        char: "s",
        description: "The content of a Kipper file that can be passed as a replacement for the 'file' parameter.",
    }),
    warnings: command_1.flags.boolean({
        char: "w",
        default: true,
        description: "Show warnings that were emitted during the analysis.",
        allowNo: true,
    }),
};
exports.default = Analyse;
tslib_1.__decorate([
    (0, decorators_1.prettifiedErrors)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Analyse.prototype, "run", null);
//# sourceMappingURL=analyse.js.map