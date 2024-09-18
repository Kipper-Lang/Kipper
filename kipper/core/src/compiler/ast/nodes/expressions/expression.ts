/**
 * The base abstract AST node class for all expressions, which wrap their corresponding
 * {@link KipperParserRuleContext} rule context classes that were generated by the {@link KipperParser}.
 *
 * These AST nodes can be created with the {@link ExpressionASTNodeFactory} class.
 * @since 0.1.0
 */
import type {TargetASTNodeCodeGenerator} from "../../../target-presets";
import type {ExpressionSemantics} from "./expression-semantics";
import type {ExpressionTypeSemantics} from "./expression-type-semantics";
import type {TranslatedExpression} from "../../../const";
import {MissingRequiredSemanticDataError} from "../../../../errors";
import {CompilableASTNode} from "../../compilable-ast-node";
import type {ASTExpressionKind, ASTExpressionRuleName, ParserExpressionContext} from "../../common";

/**
 * The base abstract AST node class for all expressions, which wrap their corresponding
 * {@link KipperParserRuleContext} rule context classes that were generated by the {@link KipperParser}.
 *
 * These AST nodes can be created with the {@link ExpressionASTNodeFactory} class.
 * @since 0.1.0
 */
export abstract class Expression<
	Semantics extends ExpressionSemantics = ExpressionSemantics,
	TypeSemantics extends ExpressionTypeSemantics = ExpressionTypeSemantics,
	Children extends CompilableASTNode = CompilableASTNode,
> extends CompilableASTNode<Semantics, TypeSemantics> {
	protected constructor(antlrRuleCtx: ParserExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	protected override _children: Array<Children>;

	public get children(): Array<Children> {
		return this._children;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public abstract get kind(): ASTExpressionKind;

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public abstract get ruleName(): ASTExpressionRuleName;

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ParserExpressionContext {
		return this._antlrRuleCtx;
	}

	public addNewChild(newChild: Children) {
		this._children.push(newChild);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public abstract checkForWarnings?(): Promise<void>;

	/**
	 * Semantically analyses the code inside this AST node and all {@link this.children children nodes}.
	 *
	 * This function will recursively call itself on the {@link this.children} instances and analyse the deepest children
	 * nodes first, working up as the tokens get more complex. This way the parent tokens can access the semantics of
	 * the children and properly process itself.
	 *
	 * This function will set the {@link this.semanticData} property and allow the use of {@link this.getSemanticData},
	 * without getting any error.
	 * @since 0.8.0
	 */
	public override async semanticAnalysis(): Promise<void> {
		// Start with the evaluation of the children
		await this.semanticallyAnalyseChildren();

		// If the semantic analysis until now hasn't failed, do the semantic analysis of this node (if defined)
		// Note: The specific AST node will have to handle errors in their children and ensure for analysis all required
		// data is present.
		// This overwrites the default behaviour of every node handling the errors in the children
		if (!this.hasFailed && this.primarySemanticAnalysis !== undefined) {
			try {
				await this.primarySemanticAnalysis();
			} catch (e) {
				if (e instanceof MissingRequiredSemanticDataError) {
					this._skippedSemanticAnalysis = true;
				}
				this.handleSemanticError(<Error>e);
			}
		}
	}

	/**
	 * Performs type checking on this AST node and all {@link this.children children nodes}. This uses the
	 * {@link this.semanticData semantic data} that was evaluated during {@link this.semanticAnalysis semantic analysis}.
	 * @since 0.10.0
	 */
	public override async semanticTypeChecking(): Promise<void> {
		// Start with the evaluation of the children
		await this.semanticallyTypeCheckChildren();

		// If the semantic analysis until now hasn't failed, do the semantic type checking of this node (if defined)
		// This overwrites the default behaviour of every node handling the errors in the children
		if (!this.hasFailed && !this.skippedSemanticAnalysis && this.primarySemanticTypeChecking !== undefined) {
			try {
				await this.primarySemanticTypeChecking();
			} catch (e) {
				if (e instanceof MissingRequiredSemanticDataError) {
					this._skippedSemanticAnalysis = true;
				}
				this.handleSemanticError(<Error>e);
			}
		}
	}

	/**
	 * Wrap-up semantic analysis, which analyses this AST node and all {@link this.children children nodes}, and
	 * checks whether they are semantically valid for the {@link this.target target language}. This uses the
	 * {@link this.semanticData semantic data} and {@link this.typeData type data} that was evaluated during the previous
	 * {@link this.semanticAnalysis semantic analysis} and {@link this.semanticTypeChecking type checking} steps.
	 * @since 0.10.0
	 */
	public override async wrapUpSemanticAnalysis(): Promise<void> {
		// Start with the evaluation of the children
		await this.targetSemanticallyAnalyseChildren();

		// If the semantic analysis until now hasn't failed, do the target semantic analysis of this node (if defined)
		// This overwrites the default behaviour of every node handling the errors in the children
		if (!this.hasFailed && !this.skippedSemanticTypeChecking && this.targetSemanticAnalysis !== undefined) {
			try {
				await this.targetSemanticAnalysis(this);
			} catch (e) {
				if (e instanceof MissingRequiredSemanticDataError) {
					this._skippedSemanticAnalysis = true;
				}
				this.handleSemanticError(<Error>e);
			}
		}
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public override async translateCtxAndChildren(): Promise<TranslatedExpression> {
		return await this.targetCodeGenerator(this);
	}

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ParserExpressionContext;

	public abstract targetCodeGenerator: TargetASTNodeCodeGenerator<any, TranslatedExpression>;
}
