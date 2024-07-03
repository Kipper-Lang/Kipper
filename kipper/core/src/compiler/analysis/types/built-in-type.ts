import { ProcessedType } from "./processed-type";
import type { KipperCompilableType } from "../../const";
import { KipperNotImplementedError } from "../../../errors";

/**
 * Represents a built-in type that is used in the type analysis phase.
 * @since 0.11.0
 */
export class BuiltInType extends ProcessedType {
	public constructor(identifier: KipperCompilableType) {
		super(identifier, identifier);
		throw new KipperNotImplementedError("Built-in type wrapper classes are not implement yet");
	}
}
