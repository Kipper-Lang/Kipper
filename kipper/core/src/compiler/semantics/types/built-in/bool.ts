import { BuiltInType, type CompilableType } from "../index";

/**
 * Represents the built-in type `bool`.
 * @since 0.12.0
 */
export class BuiltInTypeBool extends BuiltInType implements CompilableType {
	constructor() {
		super("bool");
	}

	/**
	 * Returns whether the type is a compilable type.
	 *
	 * This is always true for the built-in type `bool`.
	 * @since 0.12.0
	 */
	public get isCompilable(): true {
		return true;
	}
}
