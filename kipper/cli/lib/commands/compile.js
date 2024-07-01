"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const command_1 = require("@oclif/command");
const tslog_1 = require("tslog");
const core_1 = require("@kipper/core");
const logger_1 = require("../logger");
const input_1 = require("../input/");
const output_1 = require("../output");
const decorators_1 = require("../decorators");
const config_loader_1 = require("../config-loader");
const copy_resources_1 = require("../copy-resources");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
class Compile extends command_1.Command {
    async getRunConfig() {
        const { args, flags } = this.parse(Compile);
        const preExistingConfig = await (0, config_loader_1.loadAutoConfig)();
        const preExistingCompileConfig = preExistingConfig?.genCompilerConfig();
        const { stream, outDir } = await (0, input_1.getParseStream)(args, flags, preExistingConfig);
        const target = flags["target"]
            ? (0, input_1.getTarget)(flags["target"])
            : preExistingCompileConfig?.target ?? (0, input_1.getTarget)("js");
        const encoding = flags["encoding"] || "utf-8";
        const fileName = stream instanceof input_1.KipperParseFile ? stream.path.name : stream.name;
        const outPath = `${node_path_1.default.resolve(outDir)}/${fileName}.${target.fileExtension}`;
        return {
            args,
            flags,
            config: {
                stream,
                target,
                outDir,
                outPath,
                encoding,
                resources: preExistingConfig?.resources ?? [],
                compilerOptions: {
                    ...preExistingCompileConfig,
                    target: target,
                    optimisationOptions: {
                        optimiseInternals: flags["optimise-internals"] ??
                            preExistingCompileConfig?.optimisationOptions?.optimiseInternals ??
                            core_1.defaultOptimisationOptions.optimiseInternals,
                        optimiseBuiltIns: flags["optimise-builtins"] ??
                            preExistingCompileConfig?.optimisationOptions?.optimiseBuiltIns ??
                            core_1.defaultOptimisationOptions.optimiseBuiltIns,
                    },
                    recover: flags["recover"] ?? preExistingCompileConfig?.recover ?? core_1.EvaluatedCompileConfig.defaults.recover,
                    abortOnFirstError: flags["abort-on-first-error"] ??
                        preExistingCompileConfig?.abortOnFirstError ??
                        core_1.EvaluatedCompileConfig.defaults.abortOnFirstError,
                },
            },
        };
    }
    async run(logger) {
        const { flags, config } = await this.getRunConfig();
        logger = logger ?? new core_1.KipperLogger(logger_1.CLIEmitHandler.emit, core_1.LogLevel.INFO, flags["warnings"]);
        const compiler = new core_1.KipperCompiler(logger);
        if (flags["log-timestamp"]) {
            logger_1.CLIEmitHandler.cliLogger = new tslog_1.Logger({ ...logger_1.defaultKipperLoggerConfig, displayDateTime: true });
        }
        const startTime = new Date().getTime();
        let result;
        try {
            result = await compiler.compile(config.stream, config.compilerOptions);
        }
        catch (e) {
            if (e instanceof core_1.KipperError && config.compilerOptions.abortOnFirstError) {
                return;
            }
            throw e;
        }
        if (!result.success) {
            return;
        }
        const out = await (0, output_1.writeCompilationResult)(result, config.outDir, config.outPath, config.encoding);
        logger.debug(`Generated file '${out}'.`);
        if (config.resources) {
            await (0, copy_resources_1.copyConfigResources)(config.resources);
            logger.debug(`Finished copying resources specified in config.`);
        }
        const duration = (new Date().getTime() - startTime) / 1000;
        logger.info(`Done in ${duration}s.`);
    }
}
Compile.description = "Compile a Kipper program into the specified target language.";
Compile.examples = [];
Compile.args = [
    {
        name: "file",
        required: false,
        description: "The file that should be compiled. Takes precedence over the 'string-code' flag and the config file.",
    },
];
Compile.flags = {
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
        description: "The build directory where the compiled files should be placed. If the path does not exist, it will be created. Takes precedence over the config file, defaults to 'build' if both are not provided",
    }),
    "string-code": command_1.flags.string({
        char: "s",
        description: "The content of a Kipper file that can be passed as a replacement for the 'file' parameter. Takes precedence over the config file.",
    }),
    "optimise-internals": command_1.flags.boolean({
        char: "i",
        default: core_1.defaultOptimisationOptions.optimiseInternals,
        description: "Optimise the generated internal functions using tree-shaking to reduce the size of the output.",
        allowNo: true,
    }),
    "optimise-builtins": command_1.flags.boolean({
        char: "b",
        default: core_1.defaultOptimisationOptions.optimiseInternals,
        description: "Optimise the generated built-in functions using tree-shaking to reduce the size of the output.",
        allowNo: true,
    }),
    warnings: command_1.flags.boolean({
        char: "w",
        default: true,
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
        description: "Recover from compiler errors and log all detected semantic issues.",
        allowNo: true,
    }),
    "abort-on-first-error": command_1.flags.boolean({
        default: core_1.EvaluatedCompileConfig.defaults.abortOnFirstError,
        description: "Abort on the first error the compiler encounters.",
        allowNo: true,
    }),
};
exports.default = Compile;
tslib_1.__decorate([
    (0, decorators_1.prettifiedErrors)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [core_1.KipperLogger]),
    tslib_1.__metadata("design:returntype", Promise)
], Compile.prototype, "run", null);
//# sourceMappingURL=compile.js.map