/**
 * Kipper Warning, which is thrown whenever the compiler encounters an item that could potentially be problematic, but
 * does not necessarily create an error for the runtime.
 * @since 0.10.0
 */
import { KipperError } from "./errors";

/**
 * Kipper Warning, which is thrown whenever the compiler encounters an item that could potentially be problematic, but
 * does not necessarily create an error for the runtime.
 *
 * This is primarily like a {@link KipperError}, but should be not used as one.
 * @since 0.10.0
 */
export class KipperWarning extends KipperError {
	constructor(msg: string) {
		super(msg);
		this.name = "Warning";
	}
}

/**
 * A warning that is thrown when a useless expression statement is found (has no side effects).
 * @since 0.10.0
 */
export class UselessExpressionStatementWarning extends KipperWarning {
	constructor() {
		super("Useless expression statement which does not modify a variable, call a function or throw an error.");
	}
}
