import { BuiltInType, type CompilableType } from "../index";

/**
 * Represents the built-in type `null`.
 * @since 0.12.0
 */
export class BuiltInTypeNull extends BuiltInType implements CompilableType {
	constructor() {
		super("null");
	}

	/**
	 * Returns whether the type is a compilable type.
	 *
	 * This is always true for the built-in type `null`.
	 * @since 0.12.0
	 */
	public get isCompilable(): true {
		return true;
	}
}
