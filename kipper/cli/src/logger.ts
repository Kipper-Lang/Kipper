/**
 * CLI Logger implementing the core logger from '@kipper/core'
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */

import { LogLevel } from "@kipper/core";
import { ISettingsParam, Logger } from "tslog";

/**
 * The default Kipper CLI LogObj that will be passed to {@link Logger}.
 * @since 0.10.0
 */
export type LogObj = { [key: string]: any };

/**
 * CLI Emit Handler for the {@link KipperLogger}. This handles the formatted output of the CLI using the {@link Logger}
 * provided by tslog.
 * @since 0.10.0
 */
export class CLIEmitHandler {
	/**
	 * Default {@link ISettingsParam} settings for the {@link this.logger}
	 */
	public static readonly defaultSettings: ISettingsParam<LogObj> = {};

	private static _logger: Logger<LogObj> = new Logger<LogObj>(CLIEmitHandler.defaultSettings);

	/**
	 * Active CLI logger, which will be used to log messages.
	 * @since 0.10.0
	 */
	public static get logger(): Logger<LogObj> {
		return this._logger;
	}

	public static set logger(logger: Logger<LogObj>) {
		this._logger = logger;
	}

	/**
	 * Prints the specified {@link msg} using the {@link this.logger logger} with the level {@link LogLevel.FATAL fatal}.
	 * @since 0.10.0
	 */
	public static fatal(msg: string): void {
		this.emit(LogLevel.FATAL, msg);
	}

	/**
	 * Prints the specified {@link msg} using the {@link this.logger logger} with the level {@link LogLevel.ERROR error}.
	 * @since 0.10.0
	 */
	public static error(msg: string): void {
		this.emit(LogLevel.ERROR, msg);
	}

	/**
	 * Prints the specified {@link msg} using the {@link this.logger logger} with the level {@link LogLevel.WARN warn}.
	 * @since 0.10.0
	 */
	public static warn(msg: string): void {
		this.emit(LogLevel.WARN, msg);
	}

	/**
	 * Prints the specified {@link msg} using the {@link this.logger logger} with the level {@link LogLevel.INFO info}.
	 * @since 0.10.0
	 */
	public static info(msg: string): void {
		this.emit(LogLevel.INFO, msg);
	}

	/**
	 * Prints the specified {@link msg} using the {@link this.logger logger} with the level {@link LogLevel.DEBUG debug}.
	 * @since 0.10.0
	 */
	public static debug(msg: string): void {
		this.emit(LogLevel.DEBUG, msg);
	}

	/**
	 * Prints the specified {@link msg} using the {@link this.logger logger} with the level {@link LogLevel.UNKNOWN unknown}.
	 * @since 0.10.0
	 */
	public static unknown(msg: string): void {
		this.emit(LogLevel.UNKNOWN, msg);
	}

	/**
	 * CLI Emit Handler for the {@link KipperLogger}.
	 * @param level The log level.
	 * @param msg The log message.
	 * @returns The log object that the {@link Logger} returned.
	 */
	public static emit(level: LogLevel, msg: string): LogObj | undefined {
		switch (level) {
			case LogLevel.FATAL:
				return this.logger.fatal(msg);
			case LogLevel.ERROR:
				return this.logger.error(msg);
			case LogLevel.WARN:
				return this.logger.warn(msg);
			case LogLevel.DEBUG:
				return this.logger.debug(msg);
			case LogLevel.UNKNOWN:
			case LogLevel.INFO:
			default:
				return this.logger.info(msg);
		}
	}

	/**
	 * Enables timestamps for the CLI logger by using the default config and adding the timestamp to the pretty log.
	 * @since 0.10.0
	 */
	public static useTimeStampConfig(): void {
		this.logger = new Logger<LogObj>({
			...this.defaultSettings,
			prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}}\\t{{logLevelName}}\\t{{message}}",
			stylePrettyLogs: true,
		});
	}
}
