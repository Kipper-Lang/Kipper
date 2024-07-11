import { KipperBuiltInTypeLiteral } from "../../const";
import type { ProcessedType } from "../types";
import { UniverseScope } from "../symbol-table";

/**
 * Interface representation of a {@link BuiltInVariable}, which is available inside a Kipper program using the specified
 * metadata.
 * @since 0.10.0
 */
export class BuiltInVariable {
	/**
	 * The identifier of the global variable that should be available inside the program.
	 * @since 0.10.0
	 */
	public readonly identifier: string;

	/**
	 * The type of the variable.
	 * @since 0.10.0
	 */
	public readonly valueType: ProcessedType;

	/**
	 * If true then the variable is local to the current file. If false then the variable is global and can be accessed
	 * from any file.
	 *
	 * This is primarily used to differentiate between local and global variables during the code generation process,
	 * since local ones will usually be initialised like any other variables, while globals will be registered on a global
	 * object.
	 * @since 0.10.0
	 */
	public readonly local: boolean;

	public constructor(identifier: string, valueType: ProcessedType, local: boolean) {
		this.identifier = identifier;
		this.valueType = valueType;
		this.local = local;
	}
}
