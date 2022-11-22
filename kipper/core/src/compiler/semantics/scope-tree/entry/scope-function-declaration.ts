/**
 *
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.10.0
 */
import {
	FunctionDeclaration,
	FunctionDeclarationSemantics,
	FunctionDeclarationTypeSemantics,
	ParameterDeclaration,
} from "../../index";
import { ScopeDeclaration } from "./scope-declaration";
import { CheckedType } from "../../type";

/**
 * Represents the definition of a function inside a {@link Scope}.
 * @since 0.1.2
 */
export class ScopeFunctionDeclaration extends ScopeDeclaration {
	private readonly _node: FunctionDeclaration;

	public constructor(node: FunctionDeclaration) {
		super();
		this._node = node;
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 */
	private get semanticData(): FunctionDeclarationSemantics {
		return this._node.getSemanticData();
	}

	/**
	 * The type data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before type checking was performed.
	 * @private
	 */
	private get typeData(): FunctionDeclarationTypeSemantics {
		return this._node.getTypeSemanticData();
	}

	/**
	 * Returns the {@link FunctionDeclaration AST node} this scope function declaration bases on.
	 */
	public get node(): FunctionDeclaration {
		return this._node;
	}

	/**
	 * The identifier of this function.
	 */
	public get identifier(): string {
		return this.semanticData.identifier;
	}

	/**
	 * The type of this function. This is always "func".
	 * @since 0.10.0
	 */
	public get type(): CheckedType {
		return CheckedType.fromCompilableType("func");
	}

	/**
	 * The return type of this function. This can be every {@link KipperType} except {@link KipperFuncType}.
	 */
	public get returnType(): CheckedType {
		return this.typeData.returnType;
	}

	/**
	 * The parameters that are accepted inside this function. These are represented using the {@link ParameterDeclaration}
	 * class.
	 *
	 * The index in the array represents the position inside the function. Meaning the first item in the array maps to
	 * the first parameter inside the function.
	 */
	public get params(): Array<ParameterDeclaration> {
		return this.semanticData.params;
	}

	/**
	 * Returns whether the function declaration is defined and has a function body set during declaration.
	 * @since 0.3.0
	 */
	public get isDefined(): boolean {
		return this.semanticData.isDefined;
	}

	/**
	 * Returns whether the function declaration has a value.
	 * @since 0.10.0
	 */
	public get hasValue(): boolean {
		return this.isDefined;
	}

	/**
	 * Returns whether the declaration has a callable value (function).
	 * @since 0.10.0
	 */
	public get isCallable(): boolean {
		return true;
	}
}
