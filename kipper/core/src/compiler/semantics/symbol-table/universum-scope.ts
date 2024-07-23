import { Scope } from "./base";
import type { ScopeDeclaration } from "./entry";
import { ScopeFunctionDeclaration, ScopeTypeDeclaration, ScopeVariableDeclaration } from "./entry";
import type { BuiltInType } from "../types";
import type { KipperProgramContext } from "../../program-ctx";
import { BuiltInFunction, BuiltInVariable } from "../runtime-built-ins";
import type { KipperBuiltInTypeLiteral } from "../../const";
import {
	BuiltInTypeArray,
	BuiltInTypeBool,
	BuiltInTypeFunc,
	BuiltInTypeNull,
	BuiltInTypeNum,
	BuiltInTypeStr,
	BuiltInTypeType,
	BuiltInTypeUndefined,
	BuiltInTypeVoid,
} from "../types";
import { BuiltInTypeAny } from "../types/built-in/any";
import { BuiltInTypeObject } from "../types/built-in/object";

const any = new BuiltInTypeAny();

/**
 * Contains all the built-in types that are used in the type analysis phase.
 * @since 0.11.0
 */
export const BuiltInTypes = {
	any: any,
	type: new BuiltInTypeType(),
	undefined: new BuiltInTypeUndefined(),
	void: new BuiltInTypeVoid(),
	null: new BuiltInTypeNull(),
	bool: new BuiltInTypeBool(),
	num: new BuiltInTypeNum(),
	str: new BuiltInTypeStr(),
	Func: new BuiltInTypeFunc([], any),
	Array: new BuiltInTypeArray(any),
	obj: new BuiltInTypeObject(),
} satisfies Record<KipperBuiltInTypeLiteral, BuiltInType>;

/**
 * Contains all the built-in functions in Kipper that are available per default in every program.
 */
export const BuiltInFunctions = {
	print: new BuiltInFunction(
		"print",
		[
			{
				identifier: "msg",
				valueType: BuiltInTypes.str,
			},
		],
		BuiltInTypes.void,
	),
	len: new BuiltInFunction(
		"len",
		[
			{
				identifier: "arrayLike",
				// TODO: Implement this for all arrayLike types (At the moment only strings are supported)
				valueType: BuiltInTypes.str,
			},
		],
		BuiltInTypes.num,
	),
} satisfies Record<string, BuiltInFunction>;

/**
 * Contains all the built-in variables in Kipper that are available per default in every program.
 * @since 0.10.0
 */
export const BuiltInVariables = {
	__name__: new BuiltInVariable("__name__", BuiltInTypes.str, true),
	NaN: new BuiltInVariable("NaN", BuiltInTypes.num, false),
} satisfies Record<string, BuiltInVariable>;

/**
 * The universal scope which only defines built-ins and is not bound to any specific context.
 * @since 0.11.0
 */
export class UniverseScope extends Scope<never, never, BuiltInType> {
	public readonly parent: undefined;

	public constructor(public ctx: KipperProgramContext) {
		super();
	}

	/**
	 * Initializes the universal scope by adding all built-in types, functions and variables.
	 * @since 0.11.0
	 */
	public init(): void {
		for (const type of Object.values(BuiltInTypes)) {
			this.addType(type);
		}
		for (const variable of Object.values(BuiltInVariables)) {
			this.addVariable(variable);
		}
		for (const func of Object.values(BuiltInFunctions)) {
			this.addFunction(func);
		}
	}

	/**
	 * Adds a built-in variable to the universal scope.
	 * @param declaration The built-in variable to add.
	 * @returns The scope declaration of the added variable.
	 * @since 0.11.0
	 */
	public addVariable(declaration: BuiltInVariable): ScopeVariableDeclaration {
		const scopeDeclaration = ScopeVariableDeclaration.fromBuiltInVariable(declaration, this);
		this.entries.set(scopeDeclaration.identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	/**
	 * Adds a built-in function to the universal scope.
	 * @param declaration The built-in function to add.
	 * @returns The scope declaration of the added function.
	 * @since 0.11.0
	 */
	public addFunction(declaration: BuiltInFunction): ScopeFunctionDeclaration {
		const scopeDeclaration = ScopeFunctionDeclaration.fromBuiltInFunction(declaration, this);
		this.entries.set(scopeDeclaration.identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	/**
	 * Adds a built-in type to the universal scope.
	 * @param declarationOrIdentifier The built-in type to add.
	 * @returns The scope declaration of the added type.
	 * @since 0.11.0
	 */
	public addType(declarationOrIdentifier: BuiltInType): ScopeTypeDeclaration {
		const scopeDeclaration = ScopeTypeDeclaration.fromBuiltInType(declarationOrIdentifier, this);
		this.entries.set(scopeDeclaration.identifier, scopeDeclaration);
		return scopeDeclaration;
	}

	/**
	 * Retrieves a scope declaration from the universal scope.
	 * @param identifier The identifier of the declaration to retrieve.
	 * @returns The scope declaration if it exists, otherwise `undefined`.
	 * @since 0.11.0
	 */
	public getEntry(identifier: string): ScopeDeclaration | undefined {
		return this.entries.get(identifier);
	}

	/**
	 * Retrieves a scope declaration from the universal scope recursively.
	 * @param identifier The identifier of the declaration to retrieve.
	 * @returns The scope declaration if it exists, otherwise `undefined`.
	 * @since 0.11.0
	 */
	public getEntryRecursively(identifier: string): ScopeDeclaration | undefined {
		return this.getEntry(identifier);
	}

	/**
	 * DANGEROUS METHOD! Clears all the universal functions and create dangling references.
	 * @since 0.11.0
	 */
	public clearUniversalFunctions(): void {
		this.entries.clear();
	}

	/**
	 * DANGEROUS METHOD! Clears all the universal variables and create dangling references.
	 * @since 0.11.0
	 */
	public clearUniversalVariables(): void {
		this.entries.clear();
	}
}
