import { ProcessedType } from "./base/processed-type";
import type { KipperBuiltInTypeLiteral } from "../../const";
import { kipperBuiltInTypeLiterals } from "../../const";
import { KipperNotImplementedError } from "../../../errors";
import type { CompilableType } from "./base/compilable-type";

/**
 * Represents a built-in type that is used in the type analysis phase.
 * @since 0.11.0
 */
export class BuiltInType extends ProcessedType implements CompilableType {
	public static readonly interchangeableTypes = ["void", "undefined"];

	public constructor(identifier: KipperBuiltInTypeLiteral) {
		super(identifier, true);
		throw new KipperNotImplementedError("Built-in type wrapper classes are not implement yet");
	}

	public get isCompilable(): true {
		return true;
	}

	/**
	 * Returns whether this type is assignable to another type.
	 * @param type The type to check against.
	 * @since 0.11.0
	 */
	public isAssignableTo(type: ProcessedType): boolean {
		if (this === type) {
			return true;
		} else if (
			BuiltInType.interchangeableTypes.includes(this.identifier) &&
			BuiltInType.interchangeableTypes.includes(type.identifier)
		) {
			return true;
		}
		return false;
	}
}
