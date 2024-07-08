import { Type } from "./base";

/**
 * An unchecked type wrapper that may contain any type, even if it does not exist or is invalid.
 * @since 0.10.0
 */
export class RawType extends Type {
	constructor(identifier: string) {
		super(identifier);
	}

	/**
	 * The identifier of this type.
	 *
	 * This identifier has not been type-checked yet, and may not exist/be valid.
	 * @since 0.10.0
	 */
	public get identifier(): string {
		return super.identifier;
	}
}
