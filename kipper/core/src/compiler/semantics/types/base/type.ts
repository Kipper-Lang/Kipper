/**
 * The abstract base type of a general type that may exist/be valid, but also
 * may not. This is a general representation to store a type's information
 * in the {@link CompilableASTNode.semanticData semantic data} and
 * {@link CompilableASTNode.typeData type data} of an {@link CompilableASTNode}.
 * @since 0.10.0
 */
export abstract class Type {
	protected readonly _identifier: string;

	protected constructor(identifier: string) {
		this._identifier = identifier;
	}

	/**
	 * The identifier of this type.
	 * @since 0.10.0
	 */
	public get identifier(): string {
		return this._identifier;
	}

	/**
	 * Returns the full string representation of this type.
	 *
	 * This also includes generic type arguments if this type is a generic type.
	 * @since 0.12.0
	 */
	public abstract toString(): string;
}
