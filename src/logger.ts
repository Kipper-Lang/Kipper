/**
 * The global logger that will handle the output for either the browser or
 * the local command line
 *
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */

import { ISettingsParam, Logger } from "tslog";
import { ILogObject } from "tslog/dist/types/interfaces";

// The LogLevels for the Logger
export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL,
  TRACE
}

/**
 * Default @link{}
 */
export const defaultKipperLoggerConfig: ISettingsParam = {
  dateTimePattern: "hour:minute:second",
  displayFilePath: "hidden",
  displayFunctionName: false
};

/**
 * The KipperLogger class, which implements the specific logging logic for this
 * library.
 * @since 0.0.3
 */
export class KipperLogger {
  private readonly _emitHandler: ((level: LogLevel, msg: string) => void) | undefined;
  private readonly _tsLogger: Logger;

  constructor(
    emitHandler?: (level: LogLevel, msg: string) => void,
    logger?: Logger
  ) {
    this._emitHandler = emitHandler;
    this._tsLogger = logger ?? new Logger(defaultKipperLoggerConfig);
  }

  /**
   * The specific handler that should handle emitted log messages
   */
  get emitHandler(): ((level: LogLevel, msg: string) => void) | undefined {
    return this._emitHandler;
  }

  /**
   * Logs a message with the severity 'debug'
   * @param {string} msg The message to log
   */
  debug(msg: string): ILogObject | void {
    return this.log(LogLevel.DEBUG, msg);
  }

  /**
   * Logs a message with the severity 'info'
   * @param {string} msg The message to log
   */
  info(msg: string): ILogObject | void {
    return this.log(LogLevel.INFO, msg);
  }

  /**
   * Logs a message with the severity 'warn'
   * @param {string} msg The message to log
   */
  warn(msg: string): ILogObject | void {
    return this.log(LogLevel.WARN, msg);
  }

  /**
   * Logs a message with the severity 'error'
   * @param {string} msg The message to log
   */
  error(msg: string): ILogObject | void {
    return this.log(LogLevel.ERROR, msg);
  }

  /**
   * Logs a message with the severity 'fatal'
   * @param {string} msg The message to log
   */
  fatal(msg: string): ILogObject | void {
    return this.log(LogLevel.FATAL, msg);
  }

  /**
   * Logs a message with traceback / stack information
   * @param {string} msg The message to log
   */
  trace(msg: string): ILogObject | void {
    return this.log(LogLevel.TRACE, msg);
  }

  /**
   * Logs a general message, and invokes the proper emit handler for it. If
   * 'emitHandler' is not defined, then the default 'tslog' logger for node will
   * be used!
   *
   * @param {logLevel} level The level of the logging message
   * @param {string} msg The content of the logging message
   */
  log(level: LogLevel, msg: string): ILogObject | void {
    if (this._emitHandler) {
      this._emitHandler(level, msg);
      return;
    } else {
      switch (level) {
        case LogLevel.DEBUG:
          return this._tsLogger.debug(msg);
        case LogLevel.INFO:
          return this._tsLogger.info(msg);
        case LogLevel.WARN:
          return this._tsLogger.warn(msg);
        case LogLevel.ERROR:
          return this._tsLogger.error(msg);
        case LogLevel.FATAL:
          return this._tsLogger.fatal(msg);
        case LogLevel.TRACE:
          return this._tsLogger.trace(msg);
      }
    }
  }
}
