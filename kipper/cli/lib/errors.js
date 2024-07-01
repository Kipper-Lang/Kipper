"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KipperUnsupportedConfigError = exports.KipperInvalidInputError = exports.KipperFileWriteError = exports.KipperFileAccessError = exports.KipperUnsupportedEncodingError = exports.KipperCLIError = void 0;
const core_1 = require("@kipper/core");
class KipperCLIError extends core_1.KipperError {
    constructor(msg) {
        super(msg);
    }
}
exports.KipperCLIError = KipperCLIError;
class KipperUnsupportedEncodingError extends KipperCLIError {
    constructor(encoding) {
        super(`Unsupported encoding '${encoding}'.`);
    }
}
exports.KipperUnsupportedEncodingError = KipperUnsupportedEncodingError;
class KipperFileAccessError extends KipperCLIError {
    constructor(filePath) {
        super(`Failed to access file '${filePath}'. Make sure the file exists and it is readable.`);
    }
}
exports.KipperFileAccessError = KipperFileAccessError;
class KipperFileWriteError extends KipperCLIError {
    constructor(filePath) {
        super(`Failed to write file '${filePath}'.`);
    }
}
exports.KipperFileWriteError = KipperFileWriteError;
class KipperInvalidInputError extends KipperCLIError {
    constructor(err) {
        super(err);
    }
}
exports.KipperInvalidInputError = KipperInvalidInputError;
class KipperUnsupportedConfigError extends KipperCLIError {
    constructor(err) {
        super(err);
    }
}
exports.KipperUnsupportedConfigError = KipperUnsupportedConfigError;
//# sourceMappingURL=errors.js.map