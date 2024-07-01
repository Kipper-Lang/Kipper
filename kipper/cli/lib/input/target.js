"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTarget = void 0;
const target_js_1 = require("@kipper/target-js");
const target_ts_1 = require("@kipper/target-ts");
const errors_1 = require("../errors");
function getTarget(name) {
    switch (name) {
        case "js": {
            return new target_js_1.KipperJavaScriptTarget();
        }
        case "ts": {
            return new target_ts_1.KipperTypeScriptTarget();
        }
        default:
            throw new errors_1.KipperInvalidInputError(`Invalid target '${name}'.`);
    }
}
exports.getTarget = getTarget;
//# sourceMappingURL=target.js.map