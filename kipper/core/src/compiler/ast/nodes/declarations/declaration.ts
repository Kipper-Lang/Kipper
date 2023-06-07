/**
 * The base abstract AST node class for all declarations/declarations, which wrap their corresponding
 * {@link KipperParserRuleContext} rule context classes that were generated by the {@link KipperParser}.
 *
 * These AST nodes can be created with the {@link DeclarationASTNodeFactory} class.
 *
 * Note! Any function, variable or parameter declaration in Kipper will be registered in a {@link Scope}, which will
 * define the visibility of the variable. The only exception is a {@link ParameterDeclaration}, which is bound to a
 * function and its local scope.
 * @since 0.1.0
 */
import type { DeclarationSemantics } from "../../semantic-data";
import type { DeclarationTypeData } from "../../type-data";
import type { TranslatedCodeLine } from "../../../const";
import type { ASTDeclarationKind, ParserDeclarationContext } from "../../ast-types";
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../../../target-presets";
import type { ScopeDeclaration } from "../../../analysis";
import { CompilableASTNode, type CompilableNodeParent } from "../../compilable-ast-node";
import {MissingRequiredSemanticDataError, UndefinedDeclarationCtxError} from "../../../../errors";

/**
 * The base abstract AST node class for all declarations/declarations, which wrap their corresponding
 * {@link KipperParserRuleContext} rule context classes that were generated by the {@link KipperParser}.
 *
 * These AST nodes can be created with the {@link DeclarationASTNodeFactory} class.
 *
 * Note! Any function, variable or parameter declaration in Kipper will be registered in a {@link Scope}, which will
 * define the visibility of the variable. The only exception is a {@link ParameterDeclaration}, which is bound to a
 * function and its local scope.
 * @since 0.1.0
 */
export abstract class Declaration<
	Semantics extends DeclarationSemantics = DeclarationSemantics,
	TypeData extends DeclarationTypeData = DeclarationTypeData,
> extends CompilableASTNode<Semantics, TypeData> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ParserDeclarationContext;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected _scopeDeclaration: ScopeDeclaration | undefined;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public abstract readonly kind: ASTDeclarationKind;

	protected constructor(antlrRuleCtx: ParserDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ParserDeclarationContext {
		return this._antlrRuleCtx;
	}

	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.10.0
	 */
	public get scopeDeclaration(): ScopeDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	/**
	 * Returns the {@link scopeDeclaration scope declaration ctx} of this declaration and throws an error in case
	 * it is undefined.
	 * @throws UndefinedDeclarationCtx If {@link scopeDeclaration} is undefined.
	 * @since 0.10.0
	 */
	public getScopeDeclaration(): ScopeDeclaration {
		if (!this.scopeDeclaration) {
			throw new UndefinedDeclarationCtxError();
		}
		return this.scopeDeclaration;
	}

	/**
	 * Ensures that this node has a {@link Declaration.scopeDeclaration scope declaration} available. This will be
	 * primarily used by declarations in their own analysis.
	 *
	 * This will throw an error if the scope declaration is not available.
	 *
	 * This is primarily used by the {@link Declaration.semanticTypeChecking} method, which often requires the scope
	 * declaration to be available. As such this is a helper method which ensures the control flow is correct and no
	 * invalid errors are thrown. (E.g. an internal error is thrown after a normal semantic analysis error).
	 *
	 * Intentionally this will also likely cause an {@link UndefinedSemanticsError} in case the {@link scopeDeclaration}
	 * is missing and {@link AnalysableASTNode.hasFailed hasFailed} is returning false. Since that's an automatic
	 * contradiction, it's better to ignore it here and let the {@link UndefinedSemanticsError} be thrown later.
	 * @throws {MissingRequiredSemanticDataError} If the scope declaration is not available.
	 * @since 0.11.0
	 */
	public ensureScopeDeclarationAvailableIfNeeded(): void {
		if (this instanceof Declaration && this.hasFailed && this.scopeDeclaration === undefined) {
			throw new MissingRequiredSemanticDataError();
		}
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 * @since 0.8.0
	 */
	public async translateCtxAndChildren(): Promise<Array<TranslatedCodeLine>> {
		return await this.targetCodeGenerator(this);
	}

	public abstract targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any> | undefined;
	public abstract targetCodeGenerator: TargetASTNodeCodeGenerator<any, Array<TranslatedCodeLine>>;
}
