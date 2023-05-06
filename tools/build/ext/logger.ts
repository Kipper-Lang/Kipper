import { Logger } from "tslog";
import { TLogLevelName } from "tslog/src/interfaces";

export const log = new Logger({
  minLevel: "trace" as TLogLevelName,
	dateTimePattern: "hour:minute:second",
	displayFilePath: "hidden",
	displayFunctionName: false,
	displayDateTime: true,
});
