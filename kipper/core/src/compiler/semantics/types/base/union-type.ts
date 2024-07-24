import { ProcessedType } from "./processed-type";
import { BuiltInTypes } from "../../symbol-table";
import type { TypeError } from "../../../../errors";
import {
	ArgumentAssignmentTypeError,
	AssignmentTypeError,
	PropertyAssignmentTypeError,
	TypeNotAssignableToUnionError,
} from "../../../../errors";

/**
 * Represents a union type, which is a type that can be one of multiple types.
 * @since 0.12.0
 */
export class UnionType<T extends Array<ProcessedType> = [ProcessedType, ProcessedType]> extends ProcessedType {
	/**
	 * Returns whether the type is a union type. This is always true.
	 * @since 0.12.0
	 */
	public get isUnion(): true {
		return true;
	}

	/**
	 * The types that this union type can be.
	 * @since 0.12.0
	 */
	readonly unionTypes: T;

	public constructor(unionTypes: T, identifier?: string) {
		super(identifier ?? unionTypes.join(" | "));
		this.unionTypes = unionTypes;
	}

	get isCompilable(): boolean {
		return this.unionTypes.every((type) => type.isCompilable);
	}

	assertAssignableTo(type: ProcessedType, propertyName?: string, argumentName?: string): void {
		if (this === type || type === BuiltInTypes.any) {
			return;
		}

		let e: TypeError | undefined;
		if (type instanceof UnionType) {
			if (
				this.unionTypes.every((unionType) => type.unionTypes.some((t: ProcessedType) => unionType.isAssignableTo(t)))
			) {
				return;
			} else {
				e = new TypeNotAssignableToUnionError(
					this.identifier,
					type.unionTypes.map((t: ProcessedType) => t.identifier),
				);
			}
		}

		if (propertyName) {
			throw new PropertyAssignmentTypeError(propertyName, type.identifier, this.identifier, e);
		} else if (argumentName) {
			throw new ArgumentAssignmentTypeError(argumentName, type.identifier, this.identifier, e);
		} else {
			throw new AssignmentTypeError(type.identifier, this.identifier, e);
		}
	}
}
