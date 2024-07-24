import type { ProcessedType } from "../base";
import { BuiltInType, type CompilableType } from "../base";
import { CustomType } from "../custom-type";

/**
 * Represents the built-in type `obj`.
 * @since 0.12.0
 */
export class BuiltInTypeObj extends BuiltInType implements CompilableType {
	constructor() {
		super("obj");
	}

	/**
	 * Returns whether the type is a compilable type.
	 *
	 * This is always true for the built-in type `type`.
	 * @since 0.12.0
	 */
	public get isCompilable(): true {
		return true;
	}

	public assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string): void {
		try {
			super.assertAssignableTo(type, propertyName, argumentName);
		} catch (e) {
			// If there is an error we make sure it's not potentially a custom type, which we match against
			// i.e. custom types are always objects and therefore match!
			if (type instanceof CustomType) {
				return;
			}
			throw e;
		}
	}
}
