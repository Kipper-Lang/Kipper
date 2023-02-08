/**
 * Language-specific AST nodes enriched with semantic data and logical handling that implement the semantic
 * analysis, type checking and translation of Kipper code.
 * @since 0.8.0
 */
export * from "./expressions";
export * from "./definitions";
export * from "./statements";
export * from "./factories";

import type { ASTDeclarationKind } from "./definitions";
import type { ASTStatementKind } from "./statements";
import type { ASTExpressionKind } from "./expressions";

/**
 * Union type of all possible {@link ParserASTNode.kind} values that have a constructable {@link CompilableASTNode}.
 *
 * This unlike {@link ParserASTMapSyntaxKind} only contains the syntax kinds that have a corresponding constructable
 * {@link CompilableASTNode} implementation.
 * @since 0.10.0
 */
export type ASTKind = ASTDeclarationKind | ASTStatementKind | ASTExpressionKind;
