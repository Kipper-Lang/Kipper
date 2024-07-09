/**
 * Utility decorators for the Kipper CLI.
 */
import type { Command } from "@oclif/command";
import { KipperInternalError } from "@kipper/core";
import { KipperCLIError } from "./errors";
import type { PrettyPrintableError } from "@oclif/errors";
import { CLIError as OclifCLIError } from "@oclif/errors";
import { ConfigError } from "@kipper/config";

/**
 * Wraps the given function with an async error handler that will pretty print errors using the {@link Command.error}
 * method.
 *
 * Note that the method must be async, otherwise this will not work.
 */
export function prettifiedErrors<TProto extends Command>() {
	// Replaces the original function with the error handling wrapper
	return function (target: TProto, propertyKey: keyof TProto, descriptor: PropertyDescriptor) {
		const originalFunc: Function = descriptor.value;

		const func = async function (this: Command, ...argArray: Array<any>): Promise<any> {
			try {
				return await originalFunc.call(this, ...argArray);
			} catch (error) {
				const cliError = error instanceof KipperCLIError || error instanceof OclifCLIError;
				const configError = error instanceof ConfigError;
				const internalError = error instanceof KipperInternalError;

				// Error configuration
				const name: string = getErrorName(cliError, configError, internalError);
				const msg: string =
					error && typeof error === "object" && "message" in error && typeof error.message === "string"
						? error.message
						: String(error);
				// prettier-ignore
				const errConfig: { exit: number } & PrettyPrintableError = {
					exit: 1,
					suggestions:
						internalError || (!cliError && !configError)
							? [
									"Ensure no invalid types or data were passed to module functions or classes. Otherwise report the " +
										"issue on https://github.com/Kipper-Lang/Kipper. Help us improve Kipper!️",
								]
							: undefined,
				};

				// 'Command.error' (i.e. 'this.error') will throw the CLI error we want, which means we need to catch it and
				// modify it, so we have the correct result we want
				try {
					this.error(msg, errConfig);
				} catch (e) {
					(<OclifCLIError>e).name = name;

					throw e; // Rethrowing it -> Oclif will pretty print it
				}
			}
		};

		// Modify the prototype and return the property descriptor
		target[propertyKey] = func as TProto[keyof TProto];
		return func as TypedPropertyDescriptor<(...argArray: Array<any>) => Promise<any>>;
	};
}

function getErrorName(cliError: boolean, configError: boolean, internalError: boolean): string {
	if (cliError) {
		return "Error";
	} else if (configError) {
		return "Config Error";
	} else if (internalError) {
		return "Internal Error";
	} else {
		return "CLI Error";
	}
}
