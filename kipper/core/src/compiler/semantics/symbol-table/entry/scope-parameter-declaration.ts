/**
 * A symbol table entry for a parameter declaration.
 * @since 0.10.0
 */
import { ScopeDeclaration } from "./scope-declaration";
import type {
	FunctionDeclaration,
	ParameterDeclaration,
	ParameterDeclarationSemantics,
	ParameterDeclarationTypeSemantics,
} from "../../../ast";
import type { LocalScope } from "../index";
import { BuiltInTypes } from "../index";
import type { ProcessedType } from "../../types";

/**
 * Represents the definition of a parameter inside a {@link FunctionDeclaration function}.
 * @since 0.10.0
 */
export class ScopeParameterDeclaration extends ScopeDeclaration {
	private readonly _node: ParameterDeclaration;

	private constructor(node: ParameterDeclaration) {
		super();
		this._node = node;
	}

	/**
	 * Creates a new scope parameter declaration from a parameter declaration.
	 * @param node The parameter declaration node.
	 */
	public static fromParameterDeclaration(node: ParameterDeclaration): ScopeParameterDeclaration {
		return new ScopeParameterDeclaration(node);
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @since 0.10.0
	 * @private
	 */
	private get semanticData(): ParameterDeclarationSemantics {
		return this._node.getSemanticData();
	}

	/**
	 * The type data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before type checking was performed.
	 * @since 0.10.0
	 * @private
	 */
	private get typeData(): ParameterDeclarationTypeSemantics {
		return this._node.getTypeSemanticData();
	}

	/**
	 * Returns the {@link ParameterDeclaration AST node} this scope parameter declaration bases on.
	 * @since 0.10.0
	 */
	public get node(): ParameterDeclaration {
		return this._node;
	}

	/**
	 * The identifier of this parameter.
	 * @since 0.10.0
	 */
	public get identifier(): string {
		return this.semanticData.identifier;
	}

	/**
	 * The type of this parameter.
	 * @since 0.10.0
	 */
	public get type(): ProcessedType {
		return this.typeData.valueType;
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}.
	 * @since 0.10.0
	 */
	public get scope(): LocalScope {
		return this.func.innerScope;
	}

	/**
	 * Returns the function this parameter is defined in.
	 * @since 0.10.0
	 */
	public get func(): FunctionDeclaration {
		return this.semanticData.func;
	}

	/**
	 * Returns whether the parameter declaration is defined and has a value set during declaration.
	 *
	 * This will always be true, since a parameter declaration always has a value, even if it is not set or is set to
	 * 'undefined'.
	 * @since 0.10.0
	 */
	public get isDefined(): boolean {
		return true;
	}

	/**
	 * Returns whether the parameter declaration has a value.
	 *
	 * This is always true, since a parameter declaration always has a value, even if it is not set or is set to
	 * 'undefined'.
	 * @since 0.10.0
	 */
	public get hasValue(): boolean {
		return true;
	}

	/**
	 * Returns whether the declaration has a callable value (function).
	 * @since 0.10.0
	 */
	public get isCallable(): boolean {
		return this.type === BuiltInTypes.func;
	}
}
