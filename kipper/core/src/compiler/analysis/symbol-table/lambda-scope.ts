/**
 * File containing the definition for a lambda-specific scope that is bound to a {@link LambdaExpression} and not
 * the global namespace.
 * @since 0.11.0
 */
import type { LambdaExpression } from "../../ast";
import { FunctionScope } from "./function-scope";

export class LambdaScope extends FunctionScope {}
