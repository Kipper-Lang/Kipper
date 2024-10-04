/**
 * Decorators for code generators.
 * @since 0.11.0
 */
import type {ASTKind} from "../../compiler";

/**
 * A decorator function which registers the given method as a code generator for the specified {@link target}.
 *
 * By applying this decorator to a method, the method will be automatically called when the compiler is generating
 * code for the specified {@link target}.
 * @param target The number identifier of the target for which the decorated method should be called. This number can
 * be fetched from the {@link ParserASTNode.kind} property.
 * @since 0.11.0
 */
export function /* Unused */ codeGenerator(target: ASTKind) {
	// TODO! May not be actually needed
	return function (target: /* prototype */ any, propertyKey: string, descriptor: PropertyDescriptor) {
		target.codeGenerators = target.codeGenerators ?? {};
		target.codeGenerators[target] = descriptor.value;
	};
}
