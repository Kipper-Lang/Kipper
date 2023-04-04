import type { ForLoopStatementSemantics } from "../../../semantic-data";
import type { NoTypeSemantics } from "../../../ast-node";
import type { CompilableNodeChild, CompilableNodeParent } from "../../../compilable-ast-node";
/**
 * For loop statement class, which represents a for loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
import type { ScopeNode } from "../../../scope-node";
import type { Statement } from "../statement";
import type { VariableDeclaration } from "../../declarations";
import { IterationStatement } from "./iteration-statement";
import { ForLoopIterationStatementContext, KipperParser } from "../../../../parser";
import { Expression } from "../../expressions";
import { LocalScope } from "../../../../analysis";

/**
 * For loop statement class, which represents a for loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class ForLoopStatement
	extends IterationStatement<ForLoopStatementSemantics, NoTypeSemantics>
	implements ScopeNode<LocalScope>
{
	/**
	 * The private field '_innerScope' that actually stores the variable data,
	 * which is returned inside the {@link this.innerScope}.
	 * @private
	 */
	private readonly _innerScope: LocalScope;

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ForLoopIterationStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_forLoopIterationStatement;

	protected readonly _children: Array<CompilableNodeChild>;

	constructor(antlrRuleCtx: ForLoopIterationStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
		this._innerScope = new LocalScope(this);
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<CompilableNodeChild> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): ForLoopIterationStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Gets the inner scope of this for-loop statement, which is automatically created when using a for loop.
	 * @since 0.10.0
	 */
	public get innerScope(): LocalScope {
		return this._innerScope;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		let index = 0;

		// 'index++' will increase the index after the assignment, so the first assignment will be '0' and the second
		// assignment will be '1', and so on...
		const forDeclaration = this.antlrRuleCtx._forDeclaration
			? <VariableDeclaration | Expression>this.children[index++]
			: undefined;
		const forCondition = this.antlrRuleCtx._forCondition ? <Expression>this.children[index++] : undefined;
		const forIterationExp = this.antlrRuleCtx._forIterationExp ? <Expression>this.children[index++] : undefined;
		const loopBody = <Statement>this.children[index++];

		this.semanticData = {
			forDeclaration: forDeclaration,
			loopCondition: forCondition,
			forIterationExp: forIterationExp,
			loopBody: loopBody,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.7.0
	 */
	public primarySemanticTypeChecking = undefined; // For-loop statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.forLoopStatement;
	readonly targetCodeGenerator = this.codeGenerator.forLoopStatement;
}
