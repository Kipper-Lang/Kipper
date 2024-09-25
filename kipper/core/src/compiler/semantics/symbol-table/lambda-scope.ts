import { FunctionScope } from "./function-scope";

/**
 * File containing the definition for a lambda-specific scope that is bound to a {@link LambdaExpression} and not
 * the global namespace.
 * @since 0.11.0
 */
export class LambdaScope extends FunctionScope {}
