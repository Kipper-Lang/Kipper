/**
 * AST Node Statement classes of the Kipper language.
 * @since 0.1.0
 */
import type { CompilableNodeParent, SemanticData, TypeData } from "../../index";
import type { ASTStatementKind, ASTStatementRuleName, ParserStatementContext } from "../../common";
import type { TranslatedCodeLine } from "../../../const";
import type { TargetASTNodeCodeGenerator } from "../../../target-presets";
import { CompilableASTNode } from "../../compilable-ast-node";

/**
 * The base abstract AST node class for all statements, which wrap their corresponding
 * {@link KipperParserRuleContext} rule context classes that were generated by the {@link KipperParser}.
 *
 * These AST nodes can be created with the {@link StatementASTNodeFactory} class.
 * @since 0.1.0
 */
export abstract class Statement<
	Semantics extends SemanticData = SemanticData,
	TypeSemantics extends TypeData = TypeData,
> extends CompilableASTNode<Semantics, TypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ParserStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.10.0
	 */
	public abstract get kind(): ASTStatementKind;

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.11.0
	 */
	public abstract get ruleName(): ASTStatementRuleName;

	protected constructor(antlrRuleCtx: ParserStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): ParserStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a single line of code.
	 */
	public async translateCtxAndChildren(): Promise<Array<TranslatedCodeLine>> {
		return await this.targetCodeGenerator(this);
	}

	public abstract targetCodeGenerator: TargetASTNodeCodeGenerator<any, Array<TranslatedCodeLine>>;
}
