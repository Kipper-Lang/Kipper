/**
 * AST Node factories which are used to create AST nodes from the ANTLR4 parse tree.
 * @since 0.10.0
 */
import { ConstructableASTExpressionClass } from "./expression-ast-factory";
import { ConstructableASTStatementClass } from "./statement-ast-factory";
import { ConstructableASTDeclarationClass } from "./declaration-ast-factory";

export * from "./ast-node-factory";
export * from "./expression-ast-factory";
export * from "./statement-ast-factory";
export * from "./declaration-ast-factory";

/**
 * A union of all construable AST node classes.
 * @since 0.10.0
 */
export type ConstructableASTNodeClass =
	| ConstructableASTStatementClass
	| ConstructableASTExpressionClass
	| ConstructableASTDeclarationClass;

/**
 * A union of all construable AST nodes. Uses {@link ConstructableASTNodeClass} to infer the type.
 * @since 0.10.0
 */
export type ConstructableASTNode = InstanceType<ConstructableASTNodeClass>;
