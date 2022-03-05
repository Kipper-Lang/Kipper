import * as kipper from ".";

function emitHandler(level: kipper.LogLevel, msg: string): void {
  console.log(`[${level}] ${msg}`)
}

let logger: kipper.KipperLogger = new kipper.KipperLogger(emitHandler);

// Test message
logger.info("Testing functionality");
