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
import type {
	SemanticData,
	DoWhileLoopIterationStatementContext,
	ForLoopIterationStatementContext,
	IfStatementContext,
	ReturnStatementContext,
	SwitchStatementContext,
	WhileLoopIterationStatementContext,
	compilableNodeChild,
	compilableNodeParent,
	NoSemantics,
	NoTypeSemantics,
	SemanticData,
	TypeData,
} from "../../parser/";
import type { TranslatedCodeLine } from "../const";
import type { Expression } from "./expressions";
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../../target-presets";
import type {
	ExpressionSemantics,
	IfStatementSemantics,
	JumpStatementSemantics,
	ReturnStatementSemantics,
} from "../semantic-data";
import type { ExpressionTypeSemantics, ReturnStatementTypeSemantics } from "../type-data";
import {
	CompilableASTNode,
	CompoundStatementContext,
	ExpressionStatementContext,
	IfStatementContext,
	IterationStatementContext,
	JumpStatementContext,
	ReturnStatementContext,
	SwitchStatementContext,
} from "../../parser";
import { FunctionScope, LocalScope } from "../../symbol-table";
import { KipperNotImplementedError, UnableToDetermineSemanticDataError } from "../../../errors";
import { FunctionDeclaration } from "./definitions";
import {
	DoWhileLoopStatementSemantics,
	ForLoopStatementSemantics,
	IterationStatementSemantics,
	WhileLoopStatementSemantics,
} from "../semantic-data";
import { CheckedType } from "../type";

/**
 * Every antlr4 statement ctx type
 */
export type antlrStatementCtxType =
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
		antlrRuleCtx: antlrStatementCtxType,
		parent: compilableNodeParent,
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
export class CompoundStatement extends Statement<NoSemantics, NoTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: CompoundStatementContext;

	protected readonly _children: Array<Statement<SemanticData, TypeData>>;

	private readonly _localScope: LocalScope | FunctionScope;

	constructor(antlrRuleCtx: CompoundStatementContext, parent: compilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];

		// Make the local scope a function scope if the parent is a function
		if (parent instanceof FunctionDeclaration) {
			this._localScope = new FunctionScope(this);
		} else {
			this._localScope = new LocalScope(this);
		}
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
	 * Returns the local scope of this {@link CompoundStatement}.
	 */
	public get localScope(): LocalScope | FunctionScope {
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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public primarySemanticTypeChecking(): Promise<void> {
		// Compound statements will never have type checking
		return Promise.resolve(undefined);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<CompoundStatement> = this.semanticAnalyser.compoundStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<CompoundStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.compoundStatement;
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

	protected readonly _children: Array<Expression<any, any> | Statement<SemanticData, TypeData>>;

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
	public async primarySemanticTypeChecking(): Promise<void> {
		// TODO!
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<IfStatement> = this.semanticAnalyser.ifStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<IfStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.ifStatement;
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

	protected readonly _children: Array<Statement<SemanticData, TypeData>>;

	constructor(antlrRuleCtx: SwitchStatementContext, parent: compilableNodeParent) {
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
		// TODO!
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<SwitchStatement> = this.semanticAnalyser.switchStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<SwitchStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.switchStatement;
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

	protected readonly _children: Array<Expression<any, any>>;

	constructor(antlrRuleCtx: ExpressionStatementContext, parent: compilableNodeParent) {
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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public primarySemanticTypeChecking(): Promise<void> {
		// Expression statements will never have type checking
		return Promise.resolve(undefined);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
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

	protected readonly _children: Array<compilableNodeChild>;

	constructor(antlrRuleCtx: DoWhileLoopIterationStatementContext, parent: compilableNodeParent) {
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
		// TODO!
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<DoWhileLoopStatement> =
		this.semanticAnalyser.doWhileLoopStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<DoWhileLoopStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.doWhileLoopStatement;
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

	protected readonly _children: Array<compilableNodeChild>;

	constructor(antlrRuleCtx: WhileLoopIterationStatementContext, parent: compilableNodeParent) {
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
	public primarySemanticTypeChecking(): Promise<void> {
		// While-loop statements will never have type checking
		return Promise.resolve(undefined);
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<WhileLoopStatement> = this.semanticAnalyser.whileLoopStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<WhileLoopStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.whileLoopStatement;
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

	protected readonly _children: Array<compilableNodeChild>;

	constructor(antlrRuleCtx: ForLoopIterationStatementContext, parent: compilableNodeParent) {
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
		// TODO!
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ForLoopStatement> = this.semanticAnalyser.forLoopStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ForLoopStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.forLoopStatement;
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

	protected readonly _children: Array<Expression<any, any>>;

	constructor(antlrRuleCtx: JumpStatementContext, parent: compilableNodeParent) {
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
		this.typeSemantics = {};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<JumpStatement> = this.semanticAnalyser.jumpStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<JumpStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.jumpStatement;
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

	protected readonly _children: Array<Expression<any, any>>;

	constructor(antlrRuleCtx: ReturnStatementContext, parent: compilableNodeParent) {
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
	public async checkForWarnings(): Promise<void> {
		// TODO!
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ReturnStatement> = this.semanticAnalyser.returnStatement;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ReturnStatement, Array<TranslatedCodeLine>> =
		this.codeGenerator.returnStatement;
}
