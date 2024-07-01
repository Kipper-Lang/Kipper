"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const command_1 = require("@oclif/command");
const core_1 = require("@kipper/core");
const child_process_1 = require("child_process");
const logger_1 = require("../logger");
const input_1 = require("../input/");
const decorators_1 = require("../decorators");
const compile_1 = tslib_1.__importDefault(require("./compile"));
class Run extends compile_1.default {
    async executeKipperProgram(entryFile) {
        const kipperProgram = (0, child_process_1.spawn)("ts-node", [entryFile]);
        kipperProgram.stdin.setDefaultEncoding("utf-8");
        kipperProgram.stdout.pipe(process.stdout);
        kipperProgram.stderr.pipe(process.stderr);
        kipperProgram.on("close", (code) => process.exit(code));
    }
    async run() {
        const { flags, config } = await this.getRunConfig();
        const logger = new core_1.KipperLogger(logger_1.CLIEmitHandler.emit, core_1.LogLevel.WARN, flags["warnings"]);
        await super.run(logger);
        await this.executeKipperProgram(config.outPath);
    }
}
Run.description = "Compile and execute a Kipper program.";
Run.examples = [];
Run.args = [
    {
        name: "file",
        required: false,
        description: "The file that should be compiled and run.",
    },
];
Run.flags = {
    target: command_1.flags.string({
        char: "t",
        description: "The target language where the compiled program should be emitted to.",
        options: ["js", "ts"],
    }),
    encoding: command_1.flags.string({
        char: "e",
        description: `The encoding that should be used to read the file (${input_1.KipperEncodings.join()}).`,
        parse: input_1.verifyEncoding,
    }),
    "output-dir": command_1.flags.string({
        char: "o",
        description: "The build directory where the compiled files should be placed. If the path does not exist, it will be created.",
    }),
    "string-code": command_1.flags.string({
        char: "s",
        description: "The content of a Kipper file that can be passed as a replacement for the 'file' parameter.",
    }),
    "optimise-internals": command_1.flags.boolean({
        char: "i",
        description: "Optimise the generated internal functions using tree-shaking to reduce the size of the output.",
        allowNo: true,
    }),
    "optimise-builtins": command_1.flags.boolean({
        char: "b",
        description: "Optimise the generated built-in functions using tree-shaking to reduce the size of the output.",
        allowNo: true,
    }),
    warnings: command_1.flags.boolean({
        char: "w",
        default: false,
        description: "Show warnings that were emitted during the compilation.",
        allowNo: true,
    }),
    "log-timestamp": command_1.flags.boolean({
        default: false,
        description: "Show the timestamp of each log message.",
        allowNo: true,
    }),
    recover: command_1.flags.boolean({
        default: core_1.EvaluatedCompileConfig.defaults.recover,
        description: "Recover from compiler errors and display all detected compiler errors.",
        allowNo: true,
    }),
    "abort-on-first-error": command_1.flags.boolean({
        default: core_1.EvaluatedCompileConfig.defaults.abortOnFirstError,
        description: "Abort on the first error the compiler encounters. Same behaviour as '--no-recover'.",
        allowNo: true,
    }),
};
exports.default = Run;
tslib_1.__decorate([
    (0, decorators_1.prettifiedErrors)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Run.prototype, "run", null);
//# sourceMappingURL=run.js.map