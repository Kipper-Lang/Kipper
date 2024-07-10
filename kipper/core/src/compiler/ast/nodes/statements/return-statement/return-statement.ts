/**
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
import type { CompilableNodeParent } from "../../../compilable-ast-node";
import type { ReturnStatementSemantics } from "./return-statement-semantics";
import type { ReturnStatementTypeSemantics } from "./return-statement-type-semantics";
import type { Expression } from "../../expressions";
import { Statement } from "../statement";
import { CheckedType } from "../../../../analysis";
import type { ReturnStatementContext } from "../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../lexer-parser";

/**
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class ReturnStatement extends Statement<ReturnStatementSemantics, ReturnStatementTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ReturnStatementContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_returnStatement;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return ReturnStatement.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_statement}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return ReturnStatement.ruleName;
	}

	protected readonly _children: Array<Expression>;

	constructor(antlrRuleCtx: ReturnStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): ReturnStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const returnValue = <Expression | undefined>this.children[0];

		// Getting the function of the return statement
		const func = this.programCtx.semanticCheck(this).getReturnStatementParent(this);

		this.semanticData = {
			returnValue: returnValue,
			function: func,
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
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure that the types of the return match the function's return.
		this.programCtx.typeCheck(this).validReturnStatement(this);

		this.typeSemantics = {
			returnType:
				semanticData.returnValue?.getTypeSemanticData().evaluatedType ?? CheckedType.fromCompilableType("void"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.returnStatement;
	readonly targetCodeGenerator = this.codeGenerator.returnStatement;
}
