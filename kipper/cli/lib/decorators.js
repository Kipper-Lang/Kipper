"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettifiedErrors = void 0;
const core_1 = require("@kipper/core");
const errors_1 = require("./errors");
const errors_2 = require("@oclif/errors");
const config_1 = require("@kipper/config");
function prettifiedErrors() {
    return function (target, propertyKey, descriptor) {
        const originalFunc = descriptor.value;
        const func = async function (...argArray) {
            try {
                await originalFunc.call(this, ...argArray);
            }
            catch (error) {
                const cliError = error instanceof errors_1.KipperCLIError || error instanceof errors_2.CLIError;
                const configError = error instanceof config_1.ConfigError;
                const internalError = error instanceof core_1.KipperInternalError;
                const name = getErrorName(cliError, configError, internalError);
                const msg = error && typeof error === "object" && "message" in error && typeof error.message === "string"
                    ? error.message
                    : String(error);
                const errConfig = {
                    exit: 1,
                    suggestions: internalError || (!cliError && !configError)
                        ? [
                            "Ensure no invalid types or data were passed to module functions or classes. Otherwise report the " +
                                "issue on https://github.com/Kipper-Lang/Kipper. Help us improve Kipper!️",
                        ]
                        : undefined,
                };
                try {
                    this.error(msg, errConfig);
                }
                catch (e) {
                    e.name = name;
                    throw e;
                }
            }
        };
        target[propertyKey] = func;
        return func;
    };
}
exports.prettifiedErrors = prettifiedErrors;
function getErrorName(cliError, configError, internalError) {
    if (cliError) {
        return "Error";
    }
    else if (configError) {
        return "Config Error";
    }
    else if (internalError) {
        return "Internal Error";
    }
    else {
        return "CLI Error";
    }
}
//# sourceMappingURL=decorators.js.map