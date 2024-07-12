import { BuiltInType, type CompilableType } from "../index";

/**
 * Represents the built-in type `num`.
 * @since 0.12.0
 */
export class BuiltInTypeNum extends BuiltInType implements CompilableType {
	constructor() {
		super("num");
	}

	/**
	 * Returns whether the type is a compilable type.
	 *
	 * This is always true for the built-in type `num`.
	 * @since 0.12.0
	 */
	public get isCompilable(): true {
		return true;
	}
}
