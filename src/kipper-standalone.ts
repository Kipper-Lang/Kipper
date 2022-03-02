import * as kipper from ".";

function emitHandler(level: kipper.LogLevel, msg: string): void {
  console.log(`[${kipper.LogLevelNames.get(level)}] ${msg}`)
}

let logger: kipper.KipperLogger = new kipper.KipperLogger(emitHandler);
let compiler: kipper.KipperCompiler = new kipper.KipperCompiler(logger);

// Test message
logger.info("Testing functionality");
