import { KipperCompiler } from "./compiler";
import { KipperLogger, LogLevel, LogLevelNames } from "./logger";

function emitHandler(level: LogLevel, msg: string): void {
  console.log(`[${LogLevelNames.get(level)}] ${msg}`)
}

let logger: KipperLogger = new KipperLogger(emitHandler);
let compiler: KipperCompiler = new KipperCompiler(logger);

// Test message
logger.info("Testing functionality");
