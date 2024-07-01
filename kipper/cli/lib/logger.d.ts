import { LogLevel } from "@kipper/core";
import { ILogObject, ISettingsParam, Logger } from "tslog";
export declare const defaultKipperLoggerConfig: ISettingsParam;
export declare const defaultCliLogger: Logger;
export declare class CLIEmitHandler {
    static cliLogger: Logger;
    static emit(level: LogLevel, msg: string): ILogObject;
}
