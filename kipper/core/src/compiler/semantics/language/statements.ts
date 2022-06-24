/**
 * The primary statements that make up the Kipper language.
 *
 * Statements:
 * - Compound statement
 * - Selection statement
 * - Expression statement
 * - Iteration statement
 * - Jump statement (Only valid in functions or loops)
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import type { compilableNodeChild, compilableNodeParent, NoSemantics } from "../../parser/";
import { IfStatementContext, SwitchStatementContext } from "../../parser/";
import {
	CompilableASTNode,
	CompoundStatementContext,
	ExpressionStatementContext,
	IterationStatementContext,
	JumpStatementContext,
} from "../../parser";
import type { TranslatedCodeLine } from "../const";
import type { Expression } from "./expressions";
import type { TargetASTNodeCodeGenerator } from "../../translation";
import type { TargetASTNodeSemanticAnalyser } from "../target-semantic-analyser";
import { LocalScope } from "../../local-scope";
import { KipperNotImplementedError, UnableToDetermineMetadataError } from "../../../errors";

/**
 * Every antlr4 statement ctx type
 */
export type antlrStatementCtxType =
	| CompoundStatementContext
	| IfStatementContext
	| SwitchStatementContext
	| ExpressionStatementContext
	| IterationStatementContext
	| JumpStatementContext;

/**
 * Factory class which generates statement class instances using {@link StatementASTNodeFactory.create StatementASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class StatementASTNodeFactory {
	/**
	 * Fetches the AST node and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The file context class that will be assigned to the instance.
	 * @since 0.9.0
	 */
	public static create(antlrRuleCtx: antlrStatementCtxType, parent: compilableNodeParent): Statement<any> {
		if (antlrRuleCtx instanceof CompoundStatementContext) {
			return new CompoundStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof IfStatementContext) {
			return new IfStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof SwitchStatementContext) {
			return new SwitchStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ExpressionStatementContext) {
			return new ExpressionStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof IterationStatementContext) {
			return new IterationStatement(antlrRuleCtx, parent);
		} else {
			// Can only be {@link JumpStatementContext}
			return new JumpStatement(antlrRuleCtx, parent);
		}
	}
}

/**
 * Base Statement class, which represents a statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Statement<Semantics> extends CompilableASTNode<Semantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: antlrStatementCtxType;

	protected constructor(antlrRuleCtx: antlrStatementCtxType, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): antlrStatementCtxType {
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

/**
 * Compound statement class, which represents a compound statement containing other items in the Kipper
 * language and is compilable using {@link translateCtxAndChildren}.
 */
export class CompoundStatement extends Statement<NoSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: CompoundStatementContext;

	protected readonly _children: Array<Statement<any>>;

	private readonly _localScope: LocalScope;

	constructor(antlrRuleCtx: CompoundStatementContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._localScope = new LocalScope(this);
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Statement<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): CompoundStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Returns the local scope of this {@link CompoundStatement}.
	 */
	public get localScope(): LocalScope {
		return this._localScope;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Compound statements will never have semantic data
		this.semanticData = {};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public semanticTypeChecking(): Promise<void> {
		// Compound statements will never have type checking
		return Promise.resolve(undefined);
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<CompoundStatement> = this.semanticAnalyser.compoundStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<CompoundStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.compoundStatement;
}

/**
 * Semantics for AST Node {@link IfStatement}.
 * @since 0.9.0
 */
export interface IfStatementSemantics {
	/**
	 * The condition of the if-statement.
	 * @since 0.9.0
	 */
	condition: Expression<any>;
	/**
	 * The body of the if-statement.
	 * @since 0.9.0
	 */
	statementBody: Statement<any>;
	/**
	 * The alternative branch of the if-statement, which is optional. This alternative branch can either be:
	 * - An else branch, if the type is a regular {@link Statement} (the statement that should be
	 * evaluated in the else branch)
	 * - Or an else-if branch, if the type is another {@link IfStatement}.
	 * @since 0.9.0
	 */
	alternativeBranch?: IfStatement | Statement<any>;
}

/**
 * If statement class, which represents if, else-if and else statements in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class IfStatement extends Statement<IfStatementSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IfStatementContext;

	protected readonly _children: Array<Expression<any> | Statement<any>>;

	constructor(antlrRuleCtx: IfStatementContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this AST node.
	 *
	 * May contain both {@link Expression expressions} and {@link Statement statements}, as it will always contain
	 * an expression at index 03 to represent the condition.
	 */
	public get children(): Array<Expression<any> | Statement<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): IfStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// There will be always at least two children
		const condition: Expression<any> = <Expression<any>>this.children[0];
		const body: Statement<any> = <Statement<any>>this.children[1];
		const alternativeBranch: IfStatement | Statement<any> | null =
			this.children.length > 2 ? <IfStatement | Statement<any>>this.children[2] : null;

		// Ensure that the children are fully present and not undefined
		if (!condition || !body) {
			throw new UnableToDetermineMetadataError();
		}

		this.semanticData = {
			condition: condition,
			statementBody: body,
			alternativeBranch: alternativeBranch ?? undefined,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<IfStatement> = this.semanticAnalyser.ifStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<IfStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.ifStatement;
}

/**
 * Switch statement class, which represents a switch selection statement in the Kipper language.
 */
export class SwitchStatement extends Statement<NoSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: SwitchStatementContext;

	protected readonly _children: Array<Statement<any>>;

	constructor(antlrRuleCtx: SwitchStatementContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this AST node.
	 */
	public get children(): Array<Statement<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): SwitchStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Switch statements have not been implemented yet."));
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<SwitchStatement> = this.semanticAnalyser.switchStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<SwitchStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.switchStatement;
}

/**
 * Expression statement class, which represents a statement made up of an expression in the Kipper language.
 */
export class ExpressionStatement extends Statement<NoSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ExpressionStatementContext;

	protected readonly _children: Array<Expression<any>>;

	constructor(antlrRuleCtx: ExpressionStatementContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): ExpressionStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Expression statements will never have semantic data
		this.semanticData = {};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public semanticTypeChecking(): Promise<void> {
		// Expression statements will never have type checking
		return Promise.resolve(undefined);
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ExpressionStatement> =
		this.semanticAnalyser.expressionStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ExpressionStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.expressionStatement;
}

/**
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class IterationStatement extends Statement<NoSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IterationStatementContext;

	protected readonly _children: Array<compilableNodeChild>;

	constructor(antlrRuleCtx: IterationStatementContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<compilableNodeChild> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): IterationStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Iteration statements have not been implemented yet."));
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<IterationStatement> = this.semanticAnalyser.iterationStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<IterationStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.iterationStatement;
}

/**
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class JumpStatement extends Statement<NoSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: JumpStatementContext;

	protected readonly _children: Array<Expression<any>>;

	constructor(antlrRuleCtx: JumpStatementContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression<any>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): JumpStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Jump statements have not been implemented yet."));
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<JumpStatement> = this.semanticAnalyser.jumpStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<JumpStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.jumpStatement;
}
