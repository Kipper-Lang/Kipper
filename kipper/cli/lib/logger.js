"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIEmitHandler = exports.defaultCliLogger = exports.defaultKipperLoggerConfig = void 0;
const core_1 = require("@kipper/core");
const tslog_1 = require("tslog");
exports.defaultKipperLoggerConfig = {
    dateTimePattern: "hour:minute:second",
    displayFilePath: "hidden",
    displayFunctionName: false,
    displayDateTime: false,
};
exports.defaultCliLogger = new tslog_1.Logger(exports.defaultKipperLoggerConfig);
class CLIEmitHandler {
    static emit(level, msg) {
        switch (level) {
            case core_1.LogLevel.FATAL:
                return CLIEmitHandler.cliLogger.fatal(msg);
            case core_1.LogLevel.ERROR:
                return CLIEmitHandler.cliLogger.error(msg);
            case core_1.LogLevel.WARN:
                return CLIEmitHandler.cliLogger.warn(msg);
            case core_1.LogLevel.DEBUG:
                return CLIEmitHandler.cliLogger.debug(msg);
            case core_1.LogLevel.UNKNOWN:
            case core_1.LogLevel.INFO:
            default:
                return CLIEmitHandler.cliLogger.info(msg);
        }
    }
}
exports.CLIEmitHandler = CLIEmitHandler;
CLIEmitHandler.cliLogger = exports.defaultCliLogger;
//# sourceMappingURL=logger.js.map