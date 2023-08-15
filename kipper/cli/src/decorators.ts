/**
 * Utility decorators for the Kipper CLI.
 */
import { Command } from "@oclif/command";
import { KipperError, KipperInternalError } from "@kipper/core";
import { KipperCLIError } from "./errors";
import { CLIError as OclifCLIError, PrettyPrintableError } from "@oclif/errors";

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

		const func = async function (this: Command): Promise<void> {
			try {
				await originalFunc.call(this);
			} catch (error) {
				const cliError = error instanceof KipperCLIError;
				const internalError = error instanceof KipperInternalError;

				// Error configuration
				const name: string = cliError ? "Error" : internalError ? "Unexpected Internal Error" : "Unexpected CLI Error";
				const msg: string =
					error && typeof error === "object" && "message" in error && typeof error.message === "string"
						? error.message
						: String(error);
				const errConfig: { exit: number } & PrettyPrintableError = {
					exit: 1,
					suggestions:
						internalError || !cliError
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
		return func as TypedPropertyDescriptor<() => Promise<void>>;
	};
}
