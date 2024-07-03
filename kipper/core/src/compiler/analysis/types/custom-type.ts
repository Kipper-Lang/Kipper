import { ProcessedType } from "./processed-type";
import type { KipperCompilableType } from "../../const";
import { KipperNotImplementedError } from "../../../errors";

export type CustomTypeConstraint = CustomPrimitiveTypeConstraint | CustomObjectTypeConstraint;
export type CustomPrimitiveTypeConstraint = KipperCompilableType;
export type CustomObjectTypeConstraint = { [key: string]: CustomTypeConstraint };

/**
 * Represents a custom type which is not a built-in type.
 *
 * This type implements its own type constraints and can be used to represent complex type structures.
 * @since 0.11.0
 */
export class CustomType extends ProcessedType {
	public constructor(identifier: string, constraints: CustomTypeConstraint) {
		// TODO! Implement proper custom types once we can migrate past the old type system
		super(identifier, "void");
		throw new KipperNotImplementedError("Custom types are not implement yet");
	}
}
