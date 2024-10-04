/**
 * The global logger that will handle the log output of the {@link KipperCompiler}.
 * @since 0.0.3
 */

import {KipperError} from "./errors";
import type {KipperWarning} from "./warnings";

/**
 * The log levels for the {@link KipperLogger}, but as numeric values to allow comparisons.
 * @since 0.2.0
 */
export enum LogLevel {
	// eslint-disable-next-line no-unused-vars
	UNKNOWN = 0,
	// eslint-disable-next-line no-unused-vars
	DEBUG = 10,
	// eslint-disable-next-line no-unused-vars
	INFO = 20,
	// eslint-disable-next-line no-unused-vars
	WARN = 30,
	// eslint-disable-next-line no-unused-vars
	ERROR = 40,
	// eslint-disable-next-line no-unused-vars
	FATAL = 50,
}

/**
 * Gets for the {@link LogLevel} the corresponding string representation.
 * @param level The log level.
 */
export function getLogLevelString(level: LogLevel): string {
	switch (level) {
		case LogLevel.FATAL:
			return "FATAL";
		case LogLevel.ERROR:
			return "ERROR";
		case LogLevel.WARN:
			return "WARN";
		case LogLevel.INFO:
			return "INFO";
		case LogLevel.DEBUG:
			return "DEBUG";
		case LogLevel.UNKNOWN:
		default:
			return "UNKNOWN";
	}
}

/**
 * The KipperLogger class, which implements the specific logging logic for this
 * library.
 * @since 0.0.3
 */
export class KipperLogger {
	/**
	 * The private field '_emitHandler' that actually stores the variable data,
	 * which is returned inside the {@link this.emitHandler}.
	 * @private
	 */
	private readonly _emitHandler: (level: LogLevel, msg: string) => void;

	/**
	 * Available log levels for the {@link KipperLogger}.
	 * @static
	 * @public
	 */
	public static levels: typeof LogLevel = LogLevel;

	/**
	 * Available log levels in numeric form for the {@link KipperLogger}.
	 * @static
	 * @public
	 */
	public static numLevels: typeof LogLevel = LogLevel;

	/**
	 * The current log level of the {@link KipperLogger}. Everything with a lower level will be ignored and not logged.
	 */
	public logLevel: LogLevel;

	/**
	 * If set to true, warnings will be reported. Otherwise, they will be ignored even if the log level is set to
	 * 'WARN' or lower.
	 * @since 0.9.0
	 */
	public readonly reportWarnings: boolean;

	constructor(
		emitHandler: (level: LogLevel, msg: string) => void,
		logLevel: LogLevel = LogLevel.INFO,
		reportWarnings: boolean = true,
	) {
		this._emitHandler = emitHandler;
		this.reportWarnings = reportWarnings;
		this.logLevel = logLevel;
	}

	/**
	 * The specific handler that should handle emitted log messages
	 */
	public get emitHandler(): (level: LogLevel, msg: string) => void {
		return this._emitHandler;
	}

	/**
	 * Logs a message with the severity 'debug'
	 * @param msg The message to log
	 */
	public debug(msg: string): void {
		return this.log(LogLevel.DEBUG, msg);
	}

	/**
	 * Logs a message with the severity 'info'
	 * @param msg The message to log
	 */
	public info(msg: string): void {
		return this.log(LogLevel.INFO, msg);
	}

	/**
	 * Logs a message with the severity 'warn'
	 * @param msg The message to log
	 */
	public warn(msg: string): void {
		return this.log(LogLevel.WARN, msg);
	}

	/**
	 * Logs a message with the severity 'error'
	 * @param msg The message to log
	 */
	public error(msg: string): void {
		return this.log(LogLevel.ERROR, msg);
	}

	/**
	 * Logs a message with the severity 'fatal'
	 * @param msg The message to log
	 */
	public fatal(msg: string): void {
		return this.log(LogLevel.FATAL, msg);
	}

	/**
	 * Logs a general message, and invokes the proper emit handler for it.
	 * @param {LogLevel} level The level of the logging message.
	 * @param msg The content of the logging message.
	 */
	public log(level: LogLevel, msg: string): void {
		// If the level is lower than the current  log level or the level is 'WARN' and the warnings are disabled, then
		// ignore the message.
		if (level < this.logLevel || (level === LogLevel.WARN && !this.reportWarnings)) {
			return;
		}

		return this._emitHandler(level, msg);
	}

	/**
	 * Reports an error with the passed level.
	 * @param level The {@link LogLevel level} to log the error with.
	 * @param err The error to log.
	 * @since 0.4.0
	 */
	public reportError(level: LogLevel.ERROR | LogLevel.FATAL, err: KipperError | string) {
		this.log(level, err instanceof KipperError ? `Compilation error - ${err.getTraceback()}` : err);
	}

	/**
	 * Reports a warning with the passed level.
	 * @param warn The warning to log.
	 * @since 0.9.0
	 */
	public reportWarning(warn: KipperWarning | string) {
		this.log(LogLevel.WARN, warn instanceof KipperError ? `Compilation warning - ${warn.getTraceback()}` : warn);
	}
}
