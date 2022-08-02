/**
 * CLI Logger implementing the core logger from '@kipper/core'
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */

import { LogLevel } from "@kipper/core";
import { ILogObject, ISettingsParam, Logger } from "tslog";

/**
 * Default {@link ISettingsParam} Configuration for the CLI Logger.
 */
export const defaultKipperLoggerConfig: ISettingsParam = {
	dateTimePattern: "hour:minute:second",
	displayFilePath: "hidden",
	displayFunctionName: false,
	displayDateTime: false,
};

/**
 * Default visual CLI {@link Logger logger}.
 */
export const defaultCliLogger: Logger = new Logger(defaultKipperLoggerConfig);

/**
 * CLI Emit Handler for the {@link KipperLogger}. This handles the formatted output of the CLI using the
 * {@link Logger Logger class (tslog)}.
 * @since 0.10.0
 */
export class CLIEmitHandler {
	/**
	 * Active CLI logger, which is the one that will be used to log messages.
	 *
	 * Per default {@link defaultCliLogger}, unless explicitly set to use another instance.
	 * @since 0.10.0
	 */
	public static cliLogger: Logger = defaultCliLogger;

	/**
	 * CLI Emit Handler for the {@link KipperLogger}.
	 * @param level The log level.
	 * @param msg The log message.
	 * @returns The log object that the {@link Logger} returned.
	 */
	public static emit(level: LogLevel, msg: string): ILogObject {
		switch (level) {
			case LogLevel.FATAL:
				return CLIEmitHandler.cliLogger.fatal(msg);
			case LogLevel.ERROR:
				return CLIEmitHandler.cliLogger.error(msg);
			case LogLevel.WARN:
				return CLIEmitHandler.cliLogger.warn(msg);
			case LogLevel.DEBUG:
				return CLIEmitHandler.cliLogger.debug(msg);
			case LogLevel.UNKNOWN:
			case LogLevel.INFO:
			default:
				return CLIEmitHandler.cliLogger.info(msg);
		}
	}
}
