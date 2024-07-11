/**
 * File containing the definition for a class-specific scope that is bound to a {@link InterfaceDeclaration} and not
 * the global namespace.
 * @since 0.11.0
 */
import type { ClassDeclaration } from "../../ast";
import { LocalScope } from "./local-scope";

/**
 * A function-specific scope that is bound to a {@link FunctionDeclaration} and not the global namespace.
 * @since 0.11.0
 */
export class ClassScope extends LocalScope {
	constructor(public ctx: ClassDeclaration) {
		super(ctx);
	}
}
