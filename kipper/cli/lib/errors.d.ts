import { KipperError } from "@kipper/core";
export declare abstract class KipperCLIError extends KipperError {
    protected constructor(msg: string);
}
export declare class KipperUnsupportedEncodingError extends KipperCLIError {
    constructor(encoding: string);
}
export declare class KipperFileAccessError extends KipperCLIError {
    constructor(filePath: string);
}
export declare class KipperFileWriteError extends KipperCLIError {
    constructor(filePath: string);
}
export declare class KipperInvalidInputError extends KipperCLIError {
    constructor(err: string);
}
export declare class KipperUnsupportedConfigError extends KipperCLIError {
    constructor(err: string);
}
