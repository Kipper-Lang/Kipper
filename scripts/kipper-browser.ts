import { KipperCompiler } from "../src";
import { KipperLogger, LogLevel } from "../src/logger";

function emitHandler(level: LogLevel, msg: string): void {
  console.log(`[${level}] ${msg}`)
}

let logger: KipperLogger = new KipperLogger(emitHandler);
let compiler: KipperCompiler = new KipperCompiler(logger);

// Test message
logger.info("test");
