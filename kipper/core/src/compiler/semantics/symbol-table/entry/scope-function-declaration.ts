/**
 * A symbol table entry for a function declaration.
 * @since 0.10.0
 */
import type {
	ClassConstructorDeclaration,
	ClassConstructorDeclarationSemantics,
	ClassConstructorDeclarationTypeSemantics,
	ClassMethodDeclaration,
	ClassMethodDeclarationSemantics,
	ClassMethodDeclarationTypeSemantics,
	FunctionDeclaration,
	FunctionDeclarationSemantics,
	FunctionDeclarationTypeSemantics,
	ParameterDeclaration,
} from "../../../ast";
import { ScopeDeclaration } from "./scope-declaration";
import type { ProcessedType } from "../../types";
import type { BuiltInFunction, BuiltInFunctionArgument } from "../../runtime-built-ins";
import type { UniverseScope } from "../universum-scope";
import { BuiltInTypes } from "../universum-scope";

/**
 * Represents the definition of a function inside a {@link Scope}.
 * @since 0.1.2
 */
export class ScopeFunctionDeclaration extends ScopeDeclaration {
	private constructor(
		private readonly _declaration?: FunctionDeclaration | ClassMethodDeclaration | ClassConstructorDeclaration,
		private readonly _builtInFunction?: BuiltInFunction,
		private readonly _universeScope?: UniverseScope,
	) {
		super();
	}

	/**
	 * Creates a new scope function declaration from a function declaration.
	 * @param declaration The function declaration node.
	 */
	public static fromFunctionDeclaration(declaration: FunctionDeclaration): ScopeFunctionDeclaration {
		return new ScopeFunctionDeclaration(declaration);
	}

	/**
	 * Creates a new scope function declaration from a given class method declaration.
	 * @param declaration The method declaration node.
	 */
	public static fromClassMethodDeclaration(declaration: ClassMethodDeclaration): ScopeFunctionDeclaration {
		return new ScopeFunctionDeclaration(declaration);
	}

	/**
	 * Creates a new scope function declaration from a given class constructor declaration.
	 * @param declaration The constructor declaration node.
	 */
	public static fromClassConstructorDeclaration(declaration: ClassConstructorDeclaration): ScopeFunctionDeclaration {
		return new ScopeFunctionDeclaration(declaration);
	}

	/**
	 * Creates a new scope function declaration from a function declaration.
	 * @param declaration The function declaration node.
	 * @param universeScope The universe scope i.e. the scope for all the built-ins.
	 */
	static fromBuiltInFunction(declaration: BuiltInFunction, universeScope: UniverseScope): ScopeFunctionDeclaration {
		return new ScopeFunctionDeclaration(undefined, declaration, universeScope);
	}

	/**
	 * Returns whether this function declaration is a built-in function.
	 * @since 0.11.0
	 */
	public override get isBuiltIn(): boolean {
		return this._builtInFunction !== undefined;
	}

	/**
	 * Returns the built-in structure of this declaration, if this declaration is based on one.
	 * @since 0.11.0
	 */
	public override get builtInStructure(): BuiltInFunction | undefined {
		return this._builtInFunction;
	}

	/**
	 * The semantic data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before semantic analysis was performed.
	 * @private
	 */
	private get semanticData():
		| FunctionDeclarationSemantics
		| ClassMethodDeclarationSemantics
		| ClassConstructorDeclarationSemantics
		| undefined {
		return this._declaration?.getSemanticData();
	}

	/**
	 * The type data of this declaration.
	 * @throws UndefinedSemanticsError If this is accessed, before type checking was performed.
	 * @private
	 */
	private get typeData():
		| FunctionDeclarationTypeSemantics
		| ClassMethodDeclarationTypeSemantics
		| ClassConstructorDeclarationTypeSemantics
		| undefined {
		return this._declaration?.getTypeSemanticData();
	}

	/**
	 * Returns the {@link FunctionDeclaration AST node} this scope function declaration bases on.
	 */
	public get node(): FunctionDeclaration | ClassMethodDeclaration | ClassConstructorDeclaration | undefined {
		return this._declaration;
	}

	/**
	 * The identifier of this function.
	 */
	public get identifier(): string {
		return this.semanticData?.identifier ?? this._builtInFunction!!.identifier;
	}

	/**
	 * The type of this function. This is always "func".
	 * @since 0.10.0
	 */
	public get type(): ProcessedType {
		return BuiltInTypes.Func;
	}

	/**
	 * The return type of this function. This can be every {@link KipperType} except {@link KipperFuncType}.
	 */
	public get returnType(): ProcessedType {
		return this.typeData?.returnType ?? this._builtInFunction?.returnType!!;
	}

	/**
	 * Returns the scope associated with this {@link ScopeDeclaration}.
	 */
	public get scope() {
		return this._declaration?.scope ?? this._universeScope!!;
	}

	/**
	 * The parameters that are accepted inside this function. These are represented using the {@link ParameterDeclaration}
	 * class.
	 *
	 * The index in the array represents the position inside the function. Meaning the first item in the array maps to
	 * the first parameter inside the function.
	 */
	public get params(): Array<ParameterDeclaration> | Array<BuiltInFunctionArgument> {
		return this.semanticData?.params ?? this._builtInFunction?.params!!;
	}

	/**
	 * Returns whether the function declaration is defined and has a function body set during declaration.
	 * @since 0.3.0
	 */
	public get isDefined(): boolean {
		return this.semanticData?.isDefined ?? true;
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
