/**
 * The global logger that will handle the output for either the browser or
 * the local command line
 *
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

// The LogLevels for the Logger
export enum LogLevel {
	UNKNOWN = "UNKNOWN",
	DEBUG = "DEBUG",
	INFO = "INFO",
	WARN = "WARN",
	ERROR = "ERROR",
	FATAL = "FATAL",
	TRACE = "TRACE",
}

/**
 * The KipperLogger class, which implements the specific logging logic for this
 * library.
 * @since 0.0.3
 */
export class KipperLogger {
	/**
	 * Available log levels for the {@link KipperLogger}
	 * @static
	 * @public
	 */
	public static levels: typeof LogLevel = LogLevel;

	/**
	 * The private '_emitHandler' that actually stores the variable data,
	 * which is returned inside the getter 'emitHandler'.
	 * @private
	 */
		// eslint-disable-next-line no-unused-vars
	private readonly _emitHandler: (level: LogLevel, msg: string) => void;

	constructor(
		// eslint-disable-next-line no-unused-vars
		emitHandler: (level: LogLevel, msg: string) => void,
	) {
		this._emitHandler = emitHandler;
	}

	/**
	 * The specific handler that should handle emitted log messages
	 */
	// eslint-disable-next-line no-unused-vars
	get emitHandler(): ((level: LogLevel, msg: string) => void) | undefined {
		return this._emitHandler;
	}

	/**
	 * Logs a message with the severity 'debug'
	 * @param {string} msg The message to log
	 */
	debug(msg: string): void {
		return this.log(LogLevel.DEBUG, msg);
	}

	/**
	 * Logs a message with the severity 'info'
	 * @param {string} msg The message to log
	 */
	info(msg: string): void {
		return this.log(LogLevel.INFO, msg);
	}

	/**
	 * Logs a message with the severity 'warn'
	 * @param {string} msg The message to log
	 */
	warn(msg: string): void {
		return this.log(LogLevel.WARN, msg);
	}

	/**
	 * Logs a message with the severity 'error'
	 * @param {string} msg The message to log
	 */
	error(msg: string): void {
		return this.log(LogLevel.ERROR, msg);
	}

	/**
	 * Logs a message with the severity 'fatal'
	 * @param {string} msg The message to log
	 */
	fatal(msg: string): void {
		return this.log(LogLevel.FATAL, msg);
	}

	/**
	 * Logs a message with traceback / stack information
	 * @param {string} msg The message to log
	 */
	trace(msg: string): void {
		return this.log(LogLevel.TRACE, msg);
	}

	/**
	 * Logs a general message, and invokes the proper emit handler for it
	 *
	 * @param {LogLevel} level The level of the logging message
	 * @param {string} msg The content of the logging message
	 */
	log(level: LogLevel, msg: string): void {
		return this._emitHandler(level, msg);
	}
}
