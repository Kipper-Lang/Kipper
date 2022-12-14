/**
 * The primary statements that make up the Kipper language.
 *
 * Statements:
 * - Compound statement
 * - Selection statement
 * - Expression statement
 * - Iteration statement
 * - Jump statement (Only valid in functions or loops)
 * @since 0.1.0
 */
import type {
	CompilableNodeChild,
	CompilableNodeParent,
	NoSemantics,
	NoTypeSemantics,
	SemanticData,
	TypeData,
} from "..";
import type {
	DoWhileLoopStatementSemantics,
	ExpressionSemantics,
	ForLoopStatementSemantics,
	IfStatementSemantics,
	IterationStatementSemantics,
	JumpStatementSemantics,
	ReturnStatementSemantics,
	WhileLoopStatementSemantics,
} from "../semantic-data";
import type { TranslatedCodeLine } from "../../const";
import type { Expression } from "./expressions";
import type { TargetASTNodeCodeGenerator } from "../../target-presets";
import type { ExpressionTypeSemantics, ReturnStatementTypeSemantics } from "../type-data";
import {
	CompoundStatementContext,
	DoWhileLoopIterationStatementContext,
	ExpressionStatementContext,
	ForLoopIterationStatementContext,
	IfStatementContext,
	JumpStatementContext,
	KipperParser,
	ReturnStatementContext,
	SwitchStatementContext,
	WhileLoopIterationStatementContext,
} from "../../parser";
import { CompilableASTNode } from "../compilable-ast-node";
import { CheckedType, LocalScope } from "../../analysis";
import { KipperNotImplementedError, UnableToDetermineSemanticDataError } from "../../../errors";
import { ScopeNode } from "../scope-node";

/**
 * Union type of all usable statement sub-rule context classes implemented by the {@link KipperParser} for a
 * {@link Statement}.
 */
export type ParserStatementCtx =
	| CompoundStatementContext
	| IfStatementContext
	| SwitchStatementContext
	| ExpressionStatementContext
	| DoWhileLoopIterationStatementContext
	| WhileLoopIterationStatementContext
	| ForLoopIterationStatementContext
	| JumpStatementContext
	| ReturnStatementContext;

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link Statement} AST node.
 * @since 0.10.0
 */
export type ParserStatementKind =
	| typeof KipperParser.RULE_statement
	| typeof KipperParser.RULE_typeofTypeSpecifier
	| typeof KipperParser.RULE_compoundStatement
	| typeof KipperParser.RULE_ifStatement
	| typeof KipperParser.RULE_switchStatement
	| typeof KipperParser.RULE_expressionStatement
	| typeof KipperParser.RULE_doWhileLoopIterationStatement
	| typeof KipperParser.RULE_whileLoopIterationStatement
	| typeof KipperParser.RULE_forLoopIterationStatement
	| typeof KipperParser.RULE_jumpStatement
	| typeof KipperParser.RULE_returnStatement;

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
	public static create(
		antlrRuleCtx: ParserStatementCtx,
		parent: CompilableNodeParent,
	): Statement<SemanticData, TypeData> {
		if (antlrRuleCtx instanceof CompoundStatementContext) {
			return new CompoundStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof IfStatementContext) {
			return new IfStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof SwitchStatementContext) {
			return new SwitchStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ExpressionStatementContext) {
			return new ExpressionStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof DoWhileLoopIterationStatementContext) {
			return new DoWhileLoopStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof WhileLoopIterationStatementContext) {
			return new WhileLoopStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ForLoopIterationStatementContext) {
			return new ForLoopStatement(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ReturnStatementContext) {
			return new ReturnStatement(antlrRuleCtx, parent);
		}
		// Can only be {@link JumpStatementContext}
		return new JumpStatement(antlrRuleCtx, parent);
	}
}

/**
 * Base Statement class, which represents a statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Statement<
	Semantics extends SemanticData,
	TypeSemantics extends TypeData,
> extends CompilableASTNode<Semantics, TypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ParserStatementCtx;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public abstract readonly kind: ParserStatementKind;

	protected constructor(antlrRuleCtx: ParserStatementCtx, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): ParserStatementCtx {
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
export class CompoundStatement extends Statement<NoSemantics, NoTypeSemantics> implements ScopeNode<LocalScope> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: CompoundStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_compoundStatement;

	protected readonly _children: Array<Statement<SemanticData, TypeData>>;

	private readonly _innerScope: LocalScope;

	constructor(antlrRuleCtx: CompoundStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
		this._semanticData = {};
		this._typeSemantics = {};
		this._innerScope = new LocalScope(this);
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Statement<SemanticData, TypeData>> {
		return this._children;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this statement.
	 */
	public override get antlrRuleCtx(): CompoundStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Returns the inner scope of this {@link CompoundStatement}, which is automatically created when using a compound
	 * statement.
	 * @since 0.10.0
	 */
	public get innerScope(): LocalScope {
		return this._innerScope;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public primarySemanticAnalysis = undefined; // Compound statements will never have semantic data

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public primarySemanticTypeChecking = undefined; // Compound statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.compoundStatement;
	readonly targetCodeGenerator = this.codeGenerator.compoundStatement;
}

/**
 * If statement class, which represents if, else-if and else statements in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class IfStatement extends Statement<IfStatementSemantics, NoTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IfStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_ifStatement;

	protected readonly _children: Array<Expression<any, any> | Statement<SemanticData, TypeData>>;

	constructor(antlrRuleCtx: IfStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
		this._typeSemantics = {};
	}

	/**
	 * The children of this AST node.
	 *
	 * May contain both {@link Expression expressions} and {@link Statement statements}, as it will always contain
	 * an expression at index 03 to represent the condition.
	 */
	public get children(): Array<Expression<any, any> | Statement<SemanticData, TypeData>> {
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
		const condition: Expression<any, any> = <Expression<any, any>>this.children[0];
		const body: Statement<SemanticData, TypeData> = <Statement<SemanticData, TypeData>>this.children[1];
		const alternativeBranch: IfStatement | Statement<SemanticData, TypeData> | null =
			this.children.length > 2 ? <IfStatement | Statement<SemanticData, TypeData>>this.children[2] : null;

		// Ensure that the children are fully present and not undefined
		if (!condition || !body) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			condition: condition,
			ifBranch: body,
			elseBranch: alternativeBranch ?? undefined,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public primarySemanticTypeChecking = undefined; // If-statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.ifStatement;
	readonly targetCodeGenerator = this.codeGenerator.ifStatement;
}

/**
 * Switch statement class, which represents a switch selection statement in the Kipper language.
 */
export class SwitchStatement extends Statement<NoSemantics, NoTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: SwitchStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_switchStatement;

	protected readonly _children: Array<Statement<SemanticData, TypeData>>;

	constructor(antlrRuleCtx: SwitchStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this AST node.
	 */
	public get children(): Array<Statement<SemanticData, TypeData>> {
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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Switch statements have not been implemented yet."));
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.switchStatement;
	readonly targetCodeGenerator = this.codeGenerator.switchStatement;
}

/**
 * Expression statement class, which represents a statement made up of an expression in the Kipper language.
 */
export class ExpressionStatement extends Statement<NoSemantics, NoTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ExpressionStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_expressionStatement;

	protected readonly _children: Array<Expression<any, any>>;

	constructor(antlrRuleCtx: ExpressionStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
		this._semanticData = {};
		this._typeSemantics = {};
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression<any, any>> {
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
	public primarySemanticAnalysis = undefined; // Expression statements will never have semantic data

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public primarySemanticTypeChecking = undefined; // Expression statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.expressionStatement;
	readonly targetCodeGenerator = this.codeGenerator.expressionStatement;
}

/**
 * Iteration statement class, which represents an iteration/loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export abstract class IterationStatement<
	Semantics extends IterationStatementSemantics,
	TypeSemantics extends NoTypeSemantics,
> extends Statement<Semantics, TypeSemantics> {}

/**
 * Do-While loop statement class, which represents a do-while loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class DoWhileLoopStatement extends IterationStatement<DoWhileLoopStatementSemantics, NoTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: DoWhileLoopIterationStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_doWhileLoopIterationStatement;

	protected readonly _children: Array<CompilableNodeChild>;

	constructor(antlrRuleCtx: DoWhileLoopIterationStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
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
	public override get antlrRuleCtx(): DoWhileLoopIterationStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Do-While loop statements have not been implemented yet."));
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Do-While loop statements have not been implemented yet."));
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.doWhileLoopStatement;
	readonly targetCodeGenerator = this.codeGenerator.doWhileLoopStatement;
}

/**
 * While loop statement class, which represents a while loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class WhileLoopStatement extends IterationStatement<WhileLoopStatementSemantics, NoTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: WhileLoopIterationStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_whileLoopIterationStatement;

	protected readonly _children: Array<CompilableNodeChild>;

	constructor(antlrRuleCtx: WhileLoopIterationStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
		this._typeSemantics = {};
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
	public override get antlrRuleCtx(): WhileLoopIterationStatementContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const loopCondition = <Expression<ExpressionSemantics, ExpressionTypeSemantics>>this.children[0];
		const loopBody = <Statement<SemanticData, TypeData>>this.children[1];

		this.semanticData = {
			loopCondition: loopCondition,
			loopBody: loopBody,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public primarySemanticTypeChecking = undefined; // While-loop statements will never have type checking

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.whileLoopStatement;
	readonly targetCodeGenerator = this.codeGenerator.whileLoopStatement;
}

/**
 * For loop statement class, which represents a for loop statement in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 */
export class ForLoopStatement extends IterationStatement<ForLoopStatementSemantics, NoTypeSemantics> {
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
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("For-loop statements have not been implemented yet."));
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("For-loop statements have not been implemented yet."));
	}

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

/**
 * Jump statement class, which represents a jump/break statement in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 */
export class JumpStatement extends Statement<JumpStatementSemantics, NoTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: JumpStatementContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_jumpStatement;

	protected readonly _children: Array<Expression<any, any>>;

	constructor(antlrRuleCtx: JumpStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression<any, any>> {
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
		const jmpType = this.sourceCode.startsWith("break") ? "break" : "continue";

		this.semanticData = {
			jmpType: jmpType,
		};

		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Break and continue statements have not been implemented yet."),
			);
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Break and continue statements have not been implemented yet."),
			);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.jumpStatement;
	readonly targetCodeGenerator = this.codeGenerator.jumpStatement;
}

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
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_returnStatement;

	protected readonly _children: Array<Expression<any, any>>;

	constructor(antlrRuleCtx: ReturnStatementContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];
	}

	/**
	 * The children of this parse token.
	 */
	public get children(): Array<Expression<any, any>> {
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
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const returnValue = <Expression<ExpressionSemantics, ExpressionTypeSemantics> | undefined>this.children[0];

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
