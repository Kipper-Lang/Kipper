/**
 * The global logger that will handle the output for either the browser or
 * the local command line
 *
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

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
	 * The private '_emitHandler' that actually stores the variable data,
	 * which is returned inside the {@link this.emitHandler}.
	 * @private
	 */
	// eslint-disable-next-line no-unused-vars
	private readonly _emitHandler: (level: LogLevel, msg: string) => void;

	constructor(
		// eslint-disable-next-line no-unused-vars
		emitHandler: (level: LogLevel, msg: string) => void,
		// eslint-disable-next-line no-unused-vars
		public logLevel: LogLevel = LogLevel.INFO,
	) {
		this._emitHandler = emitHandler;
	}

	/**
	 * The specific handler that should handle emitted log messages
	 */
	// eslint-disable-next-line no-unused-vars
	public get emitHandler(): (level: LogLevel, msg: string) => void {
		return this._emitHandler;
	}

	/**
	 * Logs a message with the severity 'debug'
	 * @param {string} msg The message to log
	 */
	public debug(msg: string): void {
		return this.log(LogLevel.DEBUG, msg);
	}

	/**
	 * Logs a message with the severity 'info'
	 * @param {string} msg The message to log
	 */
	public info(msg: string): void {
		return this.log(LogLevel.INFO, msg);
	}

	/**
	 * Logs a message with the severity 'warn'
	 * @param {string} msg The message to log
	 */
	public warn(msg: string): void {
		return this.log(LogLevel.WARN, msg);
	}

	/**
	 * Logs a message with the severity 'error'
	 * @param {string} msg The message to log
	 */
	public error(msg: string): void {
		return this.log(LogLevel.ERROR, msg);
	}

	/**
	 * Logs a message with the severity 'fatal'
	 * @param {string} msg The message to log
	 */
	public fatal(msg: string): void {
		return this.log(LogLevel.FATAL, msg);
	}

	/**
	 * Logs a general message, and invokes the proper emit handler for it.
	 * @param {LogLevel} level The level of the logging message.
	 * @param {string} msg The content of the logging message.
	 */
	public log(level: LogLevel, msg: string): void {
		if (level < this.logLevel) {
			return;
		}

		return this._emitHandler(level, msg);
	}
}
