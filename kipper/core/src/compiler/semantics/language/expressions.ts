/**
 * Expressions of the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import {
	AdditiveExpressionContext,
	ArraySpecifierPostfixExpressionContext,
	AssignmentExpressionContext,
	BoolPrimaryExpressionContext,
	CastOrConvertExpressionContext,
	CompilableASTNode,
	ConditionalExpressionContext,
	EqualityExpressionContext,
	FStringPrimaryExpressionContext,
	FunctionCallPostfixExpressionContext,
	GenericTypeSpecifierContext,
	IdentifierPrimaryExpressionContext,
	IdentifierTypeSpecifierContext,
	IncrementOrDecrementPostfixExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	ListPrimaryExpressionContext,
	LogicalAndExpressionContext,
	LogicalOrExpressionContext,
	MultiplicativeExpressionContext,
	NumberPrimaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	RelationalExpressionContext,
	StringPrimaryExpressionContext,
	TangledPrimaryExpressionContext,
	TypeofTypeSpecifierContext,
	UnaryOperatorContext,
	VoidOrNullOrUndefinedPrimaryExpressionContext,
} from "../../parser";
import {
	type KipperAdditiveOperator,
	kipperAdditiveOperators,
	kipperArithmeticAssignOperators,
	type KipperAssignOperator,
	type KipperBoolTypeLiterals,
	type KipperEqualityOperator,
	kipperEqualityOperators,
	type KipperFunction,
	kipperLogicalAndOperator,
	kipperLogicalOrOperator,
	type KipperMultiplicativeOperator,
	kipperMultiplicativeOperators,
	type KipperNegateOperator,
	KipperNullType,
	type KipperRelationalOperator,
	kipperRelationalOperators,
	type KipperSignOperator,
	kipperStrType,
	type KipperType,
	kipperUnaryModifierOperators,
	KipperUndefinedType,
	KipperVoidType,
	type TranslatedExpression,
} from "../const";
import type { TargetASTNodeCodeGenerator, TargetASTNodeSemanticAnalyser } from "../../target-presets";
import { ScopeDeclaration, ScopeVariableDeclaration } from "../../scope-declaration";
import { KipperNotImplementedError, UnableToDetermineSemanticDataError } from "../../../errors";
import { TerminalNode } from "antlr4ts/tree";
import { getConversionFunctionIdentifier, getParseRuleSource } from "../../../utils";
import { kipperInternalBuiltIns } from "../../runtime-built-ins";
import { ParserRuleContext } from "antlr4ts";
import {
	AdditiveExpressionSemantics,
	ArraySpecifierExpressionSemantics,
	AssignmentExpressionSemantics,
	BoolPrimaryExpressionSemantics,
	CastOrConvertExpressionSemantics,
	ComparativeExpressionSemantics,
	ConditionalExpressionSemantics,
	ConstantExpressionSemantics,
	EqualityExpressionSemantics,
	ExpressionSemantics,
	FStringPrimaryExpressionSemantics,
	FunctionCallPostfixExpressionSemantics,
	GenericTypeSpecifierExpressionSemantics,
	IdentifierPrimaryExpressionSemantics,
	IdentifierTypeSpecifierExpressionSemantics,
	IncrementOrDecrementPostfixExpressionSemantics,
	IncrementOrDecrementUnaryExpressionSemantics,
	ListPrimaryExpressionSemantics,
	LogicalAndExpressionSemantics,
	LogicalExpressionSemantics,
	LogicalOrExpressionSemantics,
	MultiplicativeExpressionSemantics,
	NumberPrimaryExpressionSemantics,
	OperatorModifiedUnaryExpressionSemantics,
	RelationalExpressionSemantics,
	StringPrimaryExpressionSemantics,
	TangledPrimaryExpressionSemantics,
	TypeofTypeSpecifierExpressionSemantics,
	TypeSpecifierExpressionSemantics,
	UnaryExpressionSemantics,
	VoidOrNullOrUndefinedPrimaryExpressionSemantics,
} from "../semantic-data";
import {
	AdditiveExpressionTypeSemantics,
	ArraySpecifierTypeSemantics,
	AssignmentExpressionTypeSemantics,
	BoolPrimaryExpressionTypeSemantics,
	CastOrConvertExpressionTypeSemantics,
	ComparativeExpressionTypeSemantics,
	ConditionalExpressionTypeSemantics,
	EqualityExpressionTypeSemantics,
	ExpressionTypeSemantics,
	FStringPrimaryExpressionTypeSemantics,
	FunctionCallPostfixTypeSemantics,
	GenericTypeSpecifierTypeSemantics,
	IdentifierPrimaryExpressionTypeSemantics,
	IdentifierTypeSpecifierTypeSemantics,
	IncrementOrDecrementPostfixExpressionTypeSemantics,
	IncrementOrDecrementUnaryTypeSemantics,
	ListPrimaryExpressionTypeSemantics,
	LogicalAndExpressionTypeSemantics,
	LogicalExpressionTypeSemantics,
	LogicalOrExpressionTypeSemantics,
	MultiplicativeTypeSemantics,
	NumberPrimaryExpressionTypeSemantics,
	OperatorModifiedUnaryTypeSemantics,
	RelationalExpressionTypeSemantics,
	StringPrimaryExpressionTypeSemantics,
	TangledPrimaryTypeSemantics,
	TypeofTypeSpecifierTypeSemantics,
	TypeSpecifierTypeSemantics,
	UnaryExpressionTypeSemantics,
	VoidOrNullOrUndefinedPrimaryExpressionTypeSemantics,
} from "../type-data";

/**
 * Every antlr4 expression ctx type
 */
export type antlrExpressionCtxType =
	| NumberPrimaryExpressionContext
	| ListPrimaryExpressionContext
	| IdentifierPrimaryExpressionContext
	| VoidOrNullOrUndefinedPrimaryExpressionContext
	| BoolPrimaryExpressionContext
	| StringPrimaryExpressionContext
	| FStringPrimaryExpressionContext
	| TangledPrimaryExpressionContext
	| ArraySpecifierPostfixExpressionContext
	| IncrementOrDecrementPostfixExpressionContext
	| FunctionCallPostfixExpressionContext
	| IncrementOrDecrementUnaryExpressionContext
	| OperatorModifiedUnaryExpressionContext
	| CastOrConvertExpressionContext
	| MultiplicativeExpressionContext
	| AdditiveExpressionContext
	| RelationalExpressionContext
	| EqualityExpressionContext
	| LogicalAndExpressionContext
	| LogicalOrExpressionContext
	| ConditionalExpressionContext
	| AssignmentExpressionContext
	| IdentifierTypeSpecifierContext
	| GenericTypeSpecifierContext
	| TypeofTypeSpecifierContext;

/**
 * Factory class which generates expression class instances using {@link ExpressionASTNodeFactory.create ExpressionASTNodeFactory.create()}.
 * @since 0.9.0
 */
export class ExpressionASTNodeFactory {
	/**
	 * Fetches the AST node and creates a new instance based on the {@link antlrRuleCtx}.
	 * @param antlrRuleCtx The context instance that the handler class should be fetched for.
	 * @param parent The file context class that will be assigned to the instance.
	 * @since 0.9.0
	 */
	public static create(
		antlrRuleCtx: antlrExpressionCtxType,
		parent: CompilableASTNode<any, any>,
	): Expression<ExpressionSemantics, ExpressionTypeSemantics> {
		if (antlrRuleCtx instanceof NumberPrimaryExpressionContext) {
			return new NumberPrimaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ListPrimaryExpressionContext) {
			return new ListPrimaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof IdentifierPrimaryExpressionContext) {
			return new IdentifierPrimaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof IdentifierTypeSpecifierContext) {
			return new IdentifierTypeSpecifierExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof GenericTypeSpecifierContext) {
			return new GenericTypeSpecifierExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof TypeofTypeSpecifierContext) {
			return new TypeofTypeSpecifierExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof StringPrimaryExpressionContext) {
			return new StringPrimaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof FStringPrimaryExpressionContext) {
			return new FStringPrimaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof TangledPrimaryExpressionContext) {
			return new TangledPrimaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ArraySpecifierPostfixExpressionContext) {
			return new ArraySpecifierExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof IncrementOrDecrementPostfixExpressionContext) {
			return new IncrementOrDecrementPostfixExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof FunctionCallPostfixExpressionContext) {
			return new FunctionCallPostfixExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof IncrementOrDecrementUnaryExpressionContext) {
			return new IncrementOrDecrementUnaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof OperatorModifiedUnaryExpressionContext) {
			return new OperatorModifiedUnaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof CastOrConvertExpressionContext) {
			return new CastOrConvertExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof MultiplicativeExpressionContext) {
			return new MultiplicativeExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof AdditiveExpressionContext) {
			return new AdditiveExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof RelationalExpressionContext) {
			return new RelationalExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof EqualityExpressionContext) {
			return new EqualityExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof LogicalAndExpressionContext) {
			return new LogicalAndExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof LogicalOrExpressionContext) {
			return new LogicalOrExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ConditionalExpressionContext) {
			return new ConditionalExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof BoolPrimaryExpressionContext) {
			return new BoolPrimaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof VoidOrNullOrUndefinedPrimaryExpressionContext) {
			return new VoidOrNullOrUndefinedPrimaryExpression(antlrRuleCtx, parent);
		} else {
			// Last remaining possible type {@link AssignmentExpression}
			return new AssignmentExpression(antlrRuleCtx, parent);
		}
	}
}

/**
 * Expression class, which represents any expression in the Kipper language that is able to evaluate to a value with
 * a specific {@link evaluatedType type}.
 *
 * The {@link evaluatedType type} of the expression return depends on the type of the expression
 * and its inputs, and will be evaluated during the semantic analysis phase to perform type checking.
 *
 * This class is the base class for all expression classes.
 * @abstract
 * @since 0.1.0
 */
export abstract class Expression<
	Semantics extends ExpressionSemantics,
	TypeSemantics extends ExpressionTypeSemantics,
> extends CompilableASTNode<Semantics, TypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: antlrExpressionCtxType;

	protected override _children: Array<Expression<ExpressionSemantics, ExpressionTypeSemantics>>;

	protected constructor(antlrRuleCtx: antlrExpressionCtxType, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._children = [];

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	public get children(): Array<Expression<ExpressionSemantics, ExpressionTypeSemantics>> {
		return this._children;
	}

	public addNewChild(newChild: Expression<ExpressionSemantics, ExpressionTypeSemantics>) {
		this._children.push(newChild);
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): antlrExpressionCtxType {
		return this._antlrRuleCtx;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<TranslatedExpression> {
		return await this.targetCodeGenerator(this);
	}

	public abstract targetCodeGenerator: TargetASTNodeCodeGenerator<any, TranslatedExpression>;
}

/**
 * Abstract constant expression class representing a constant expression, which was defined in the source code. This
 * abstract class only exists to provide the commonality between the different constant expressions.
 */
export abstract class ConstantExpression<
	Semantics extends ConstantExpressionSemantics,
	TypeSemantics extends ExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {}

/**
 * Integer constant expression, which represents a number constant that was defined in the source code.
 * @since 0.1.0
 */
export class NumberPrimaryExpression extends ConstantExpression<
	NumberPrimaryExpressionSemantics,
	NumberPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: NumberPrimaryExpressionContext;

	constructor(antlrRuleCtx: NumberPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// The value should stay the same as written, and the code generator implementation should handle outputting the
		// value in the target language
		this.semanticData = {
			value: this.sourceCode,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'number'
		this.typeSemantics = {
			evaluatedType: "num",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): NumberPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<NumberPrimaryExpression> =
		this.semanticAnalyser.numberPrimaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<NumberPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.numberPrimaryExpression;
}

/**
 * List constant expression, which represents a list constant that was defined in the source code.
 * @since 0.1.0
 */
export class ListPrimaryExpression extends ConstantExpression<
	ListPrimaryExpressionSemantics,
	ListPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ListPrimaryExpressionContext;

	constructor(antlrRuleCtx: ListPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			value: [], // TODO! Implement list data fetching.
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'list'
		this.typeSemantics = {
			evaluatedType: "list",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ListPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ListPrimaryExpression> =
		this.semanticAnalyser.listPrimaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ListPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.listPrimaryExpression;
}

/**
 * String constant expression, which represents a string constant that was defined in the source code.
 * @since 0.1.0
 */
export class StringPrimaryExpression extends ConstantExpression<
	StringPrimaryExpressionSemantics,
	StringPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: StringPrimaryExpressionContext;

	constructor(antlrRuleCtx: StringPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			value: this.sourceCode.slice(1, this.sourceCode.length - 1), // Remove string quotation marks
			quotationMarks: <`"` | `'`>this.sourceCode[0],
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'str'
		this.typeSemantics = {
			evaluatedType: "str",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): StringPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<StringPrimaryExpression> =
		this.semanticAnalyser.stringPrimaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<StringPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.stringPrimaryExpression;
}

/**
 * Boolean constant expression representing the built-in constants {@link true} and {@link false}.
 * @since 0.8.0
 */
export class BoolPrimaryExpression extends Expression<
	BoolPrimaryExpressionSemantics,
	BoolPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: BoolPrimaryExpressionContext;

	constructor(antlrRuleCtx: BoolPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			value: <KipperBoolTypeLiterals>this.sourceCode,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'bool'
		this.typeSemantics = {
			evaluatedType: "bool",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): BoolPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<BoolPrimaryExpression> =
		this.semanticAnalyser.boolPrimaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<BoolPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.boolPrimaryExpression;
}

/**
 * F-String class, which represents an f-string expression in the Kipper language.
 * @since 0.1.0
 */
export class FStringPrimaryExpression extends Expression<
	FStringPrimaryExpressionSemantics,
	FStringPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FStringPrimaryExpressionContext;

	// TODO! Implement proper f-string value referencing using children expressions

	constructor(antlrRuleCtx: FStringPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("F-String Expressions have not been implemented yet."));
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'str'
		this.typeSemantics = {
			evaluatedType: "str",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FStringPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<FStringPrimaryExpression> =
		this.semanticAnalyser.fStringPrimaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<FStringPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.fStringPrimaryExpression;
}

/**
 * Identifier expression, which represents an identifier referencing a variable, function or built-in identifier.
 *
 * This is only represents a reference and not a declaration/definition.
 * @since 0.1.0
 */
export class IdentifierPrimaryExpression extends Expression<
	IdentifierPrimaryExpressionSemantics,
	IdentifierPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IdentifierPrimaryExpressionContext;

	constructor(antlrRuleCtx: IdentifierPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const identifier = this.sourceCode;

		// Make sure the referenced variable even exists!
		const ref = this.programCtx
			.semanticCheck(this)
			.getExistingReference(identifier, "localScope" in this.scopeCtx ? this.scopeCtx : undefined);

		this.semanticData = {
			identifier: identifier,
			ref: ref,
		};

		if (!(ref instanceof ScopeDeclaration)) {
			this.programCtx.addBuiltInReference(this, ref);
		} else {
			// Ensure that the reference is defined, if it's not used inside an assignment expression
			if (!(this.parent instanceof AssignmentExpression)) {
				this.programCtx.semanticCheck(this).referenceDefined(ref);
			}
		}
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Get the type of the reference
		let evaluatedType: KipperType;
		if (semanticData.ref instanceof ScopeVariableDeclaration) {
			evaluatedType = semanticData.ref.type;
		} else {
			// If the type is not a variable declaration, then it must always be a function. Since the other possible
			// references are built-in functions and user-defined functions, which if not called will always be of type 'func'
			evaluatedType = "func";
		}

		this.typeSemantics = {
			evaluatedType: evaluatedType,
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IdentifierPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<IdentifierPrimaryExpression> =
		this.semanticAnalyser.identifierPrimaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<IdentifierPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.identifierPrimaryExpression;
}

/**
 * Abstract type class representing a type specifier. This abstract class only exists to provide the commonality between the
 * different type specifier expressions.
 */
export abstract class TypeSpecifierExpression<
	Semantics extends TypeSpecifierExpressionSemantics,
	TypeSemantics extends TypeSpecifierTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {}

/**
 * Type specifier expression, which represents a simple identifier type specifier.
 * @example
 * num // Number type
 * str // String type
 * char // Character type
 * bool // Boolean type
 * @since 0.8.0
 */
export class IdentifierTypeSpecifierExpression extends TypeSpecifierExpression<
	IdentifierTypeSpecifierExpressionSemantics,
	IdentifierTypeSpecifierTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IdentifierTypeSpecifierContext;

	constructor(antlrRuleCtx: IdentifierTypeSpecifierContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			typeIdentifier: this.sourceCode,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure the type exists
		this.programCtx.typeCheck(this).typeExists(semanticData.typeIdentifier);

		// A type identifier will always be of type 'type'
		this.typeSemantics = {
			evaluatedType: "type",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IdentifierTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<IdentifierTypeSpecifierExpression> =
		this.semanticAnalyser.identifierTypeSpecifierExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<IdentifierTypeSpecifierExpression, TranslatedExpression> =
		this.codeGenerator.identifierTypeSpecifierExpression;
}

/**
 * Generic type specifier expression, which represents a generic type specifier.
 * @example
 * list<num> // List type with number as generic type
 * @since 0.8.0
 */
export class GenericTypeSpecifierExpression extends TypeSpecifierExpression<
	GenericTypeSpecifierExpressionSemantics,
	GenericTypeSpecifierTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: GenericTypeSpecifierContext;

	constructor(antlrRuleCtx: GenericTypeSpecifierContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Generic Type Expressions have not been implemented yet."));
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Generic Type Expressions have not been implemented yet."));
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): GenericTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<GenericTypeSpecifierExpression> =
		this.semanticAnalyser.genericTypeSpecifierExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<GenericTypeSpecifierExpression, TranslatedExpression> =
		this.codeGenerator.genericTypeSpecifierExpression;
}

/**
 * Typeof type specifier expression, which represents a runtime typeof expression evaluating the type of a value.
 * @since 0.8.0
 */
export class TypeofTypeSpecifierExpression extends TypeSpecifierExpression<
	TypeofTypeSpecifierExpressionSemantics,
	TypeofTypeSpecifierTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: TypeofTypeSpecifierContext;

	constructor(antlrRuleCtx: TypeofTypeSpecifierContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Typeof Type Expressions have not been implemented yet."));
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Typeof Type Expressions have not been implemented yet."));
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): TypeofTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<TypeofTypeSpecifierExpression> =
		this.semanticAnalyser.typeofTypeSpecifierExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<TypeofTypeSpecifierExpression, TranslatedExpression> =
		this.codeGenerator.typeofTypeSpecifierExpression;
}

/**
 * Tangled/Parenthesised expression, which represents a parenthesised expression that wraps another expression and
 * increases its order of precedence.
 * @example
 * (4 + 5) * 5; // 4 + 5 will be evaluated first, then the multiplication will be performed
 * @since 0.1.0
 */
export class TangledPrimaryExpression extends Expression<
	TangledPrimaryExpressionSemantics,
	TangledPrimaryTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: TangledPrimaryExpressionContext;

	constructor(antlrRuleCtx: TangledPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Tangled expressions always contain one expression child
		const exp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];

		// Ensure that the child expression is present
		if (!exp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			childExp: exp,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const exp = this.getSemanticData().childExp;

		this.typeSemantics = {
			// Tangled expressions always evaluate to the type of its child expression
			evaluatedType: exp.getTypeSemanticData().evaluatedType,
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): TangledPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<TangledPrimaryExpression> =
		this.semanticAnalyser.tangledPrimaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<TangledPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.tangledPrimaryExpression;
}

export class VoidOrNullOrUndefinedPrimaryExpression extends Expression<
	VoidOrNullOrUndefinedPrimaryExpressionSemantics,
	VoidOrNullOrUndefinedPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: VoidOrNullOrUndefinedPrimaryExpressionContext;

	constructor(antlrRuleCtx: VoidOrNullOrUndefinedPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			// Syntactically there can only be 'void', 'null' or 'undefined' stored in this expression
			constantIdentifier: <KipperVoidType | KipperNullType | KipperUndefinedType>this.sourceCode,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.10.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// The evaluated type of this expression will always be equal to the constant identifier that this expression
		// contains e.g. either 'void', 'null' or 'undefined'.
		this.typeSemantics = {
			evaluatedType: semanticData.constantIdentifier,
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): VoidOrNullOrUndefinedPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<VoidOrNullOrUndefinedPrimaryExpression> =
		this.semanticAnalyser.voidOrNullOrUndefinedPrimaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<VoidOrNullOrUndefinedPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.voidOrNullOrUndefinedPrimaryExpression;
}

/**
 * Increment or Decrement expression, which represents a right-side -- or ++ expression modifying a numeric value.
 * @since 0.1.0
 * @example
 * 49++; // 49 will be incremented by 1
 * 11--; // 11 will be decremented by 1
 */
export class IncrementOrDecrementPostfixExpression extends Expression<
	IncrementOrDecrementPostfixExpressionSemantics,
	IncrementOrDecrementPostfixExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IncrementOrDecrementPostfixExpressionContext;

	constructor(antlrRuleCtx: IncrementOrDecrementPostfixExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Increment/Decrement Expressions have not been implemented yet."),
			);
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Increment/Decrement Expressions have not been implemented yet."),
			);
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IncrementOrDecrementPostfixExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<IncrementOrDecrementPostfixExpression> =
		this.semanticAnalyser.incrementOrDecrementPostfixExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<IncrementOrDecrementPostfixExpression, TranslatedExpression> =
		this.codeGenerator.incrementOrDecrementPostfixExpression;
}

/**
 * Array Specifier expression, which accesses a list/array based on its index.
 * @since 0.1.0
 * @example
 * array[0]
 */
export class ArraySpecifierExpression extends Expression<
	ArraySpecifierExpressionSemantics,
	ArraySpecifierTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ArraySpecifierPostfixExpressionContext;

	constructor(antlrRuleCtx: ArraySpecifierPostfixExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Array Subscripting has not been implemented yet."));
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Array Subscripting has not been implemented yet."));
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ArraySpecifierPostfixExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ArraySpecifierExpression> =
		this.semanticAnalyser.arraySpecifierExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ArraySpecifierExpression, TranslatedExpression> =
		this.codeGenerator.arraySpecifierExpression;
}

/**
 * Function call class, which represents a function call expression in the Kipper language.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 * // or
 * print("Hello world!")
 */
export class FunctionCallPostfixExpression extends Expression<
	FunctionCallPostfixExpressionSemantics,
	FunctionCallPostfixTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FunctionCallPostfixExpressionContext;

	constructor(antlrRuleCtx: FunctionCallPostfixExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the identifier of the function that is called
		const identifierSemantics = <IdentifierPrimaryExpressionSemantics>this.children[0].getSemanticData();

		// Ensure that the identifier is present
		if (!identifierSemantics) {
			throw new UnableToDetermineSemanticDataError();
		}

		// Fetching the called function and its semantic data
		const calledFunc: KipperFunction = this.programCtx
			.semanticCheck(this)
			.getExistingFunction(identifierSemantics.identifier);

		// Every item from index 1 to the end is an argument (First child is the identifier).
		// Tries to fetch the function. If it fails throw a {@link UnknownFunctionIdentifier} error.
		const args: Array<Expression<ExpressionSemantics, ExpressionTypeSemantics>> =
			this.children.length > 1 ? this.children.slice(1, this.children.length) : [];

		// Ensure that the arguments provided are valid
		this.programCtx.semanticCheck(this).validFunctionCallArguments(calledFunc, args);

		this.semanticData = {
			identifier: calledFunc.identifier,
			args: args,
			function: calledFunc,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure valid arguments are passed
		this.programCtx.typeCheck(this).validFunctionCallArguments(semanticData.function, semanticData.args);

		// The evaluated type is always equal to the return of the function
		this.typeSemantics = {
			evaluatedType: semanticData.function.returnType,
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FunctionCallPostfixExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<FunctionCallPostfixExpression> =
		this.semanticAnalyser.functionCallPostfixExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<FunctionCallPostfixExpression, TranslatedExpression> =
		this.codeGenerator.functionCallPostfixExpression;
}

/**
 * Abstract unary expression class representing a unary expression, which can be used to modify an expression with
 * a specified operator. This abstract class only exists to provide the commonality between the different comparative
 * expressions.
 * @since 0.9.0
 */
export abstract class UnaryExpression<
	Semantics extends UnaryExpressionSemantics,
	TypeSemantics extends UnaryExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {}

/**
 * Increment or decrement expression class, which represents a left-side -- or ++ expression modifying a numeric value.
 * @since 0.1.0
 * @example
 * ++49; // 49 will be incremented by 1
 * --11; // 11 will be decremented by 1
 */
export class IncrementOrDecrementUnaryExpression extends UnaryExpression<
	IncrementOrDecrementUnaryExpressionSemantics,
	IncrementOrDecrementUnaryTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IncrementOrDecrementUnaryExpressionContext;

	constructor(antlrRuleCtx: IncrementOrDecrementUnaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Increment/Decrement Expressions have not been implemented yet."),
			);
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Increment/Decrement Expressions have not been implemented yet."),
			);
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IncrementOrDecrementUnaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<IncrementOrDecrementUnaryExpression> =
		this.semanticAnalyser.incrementOrDecrementUnaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<IncrementOrDecrementUnaryExpression, TranslatedExpression> =
		this.codeGenerator.incrementOrDecrementUnaryExpression;
}

/**
 * Operator modified expressions, which are used to modify the value of an expression based on an
 * {@link KipperUnaryOperator unary operator.}
 * @since 0.1.0
 * @example
 * -41 // -41
 * +59 // 59
 */
export class OperatorModifiedUnaryExpression extends UnaryExpression<
	OperatorModifiedUnaryExpressionSemantics,
	OperatorModifiedUnaryTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: OperatorModifiedUnaryExpressionContext;

	constructor(antlrRuleCtx: OperatorModifiedUnaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the raw antlr4 parse-tree children, which should store the operator
		const children = this.getAntlrRuleChildren();

		// Get the operator
		const unaryOperator = <KipperNegateOperator | KipperSignOperator | undefined>children
			.find((token) => {
				return (
					token instanceof UnaryOperatorContext &&
					kipperUnaryModifierOperators.find((op) => op === token.text) !== undefined
				);
			})
			?.text.trim();

		// Get the expression of this unary expression
		const exp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];

		// Ensure that the children are fully present and not undefined
		if (!exp || !unaryOperator) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			operator: unaryOperator,
			operand: exp,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure the operator is compatible with the type of the operand
		this.programCtx.typeCheck(this).validUnaryExpression(this);

		this.typeSemantics = {
			evaluatedType: semanticData.operator === "!" ? "bool" : "num",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): OperatorModifiedUnaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<OperatorModifiedUnaryExpression> =
		this.semanticAnalyser.operatorModifiedUnaryExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<OperatorModifiedUnaryExpression, TranslatedExpression> =
		this.codeGenerator.operatorModifiedUnaryExpression;
}

/**
 * Convert expressions, which are used to convert a value to a different type.
 *
 * For now only conversions are supported, but this will be extended to conversions and casts in the future.
 * @since 0.1.0
 * @example
 * "4" as num // 4
 * 39 as str // "39"
 */
export class CastOrConvertExpression extends Expression<
	CastOrConvertExpressionSemantics,
	CastOrConvertExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: CastOrConvertExpressionContext;

	constructor(antlrRuleCtx: CastOrConvertExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Fetching the original exp and the type using the children
		const exp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const type: string = (<IdentifierTypeSpecifierExpression>this.children[1]).getSemanticData().typeIdentifier;

		// Ensure that the children are fully present and not undefined
		if (!exp || !type) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			castType: type,
			exp: exp,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure the type can be casted/converted into the target type
		this.programCtx.typeCheck(this).typeExists(semanticData.castType);
		this.programCtx.typeCheck(this).validConversion(semanticData.exp, <KipperType>semanticData.castType);

		this.typeSemantics = {
			// The evaluated type of the expression is equal to the cast type
			evaluatedType: <KipperType>semanticData.castType,
			castType: <KipperType>semanticData.castType,
		};

		// Add internal reference to the program ctx
		const expType = (<Expression<ExpressionSemantics, ExpressionTypeSemantics>>semanticData.exp).getTypeSemanticData()
			.evaluatedType;
		const internalIdentifier = getConversionFunctionIdentifier(expType, semanticData.castType);
		if (internalIdentifier in kipperInternalBuiltIns) {
			this.programCtx.addInternalReference(this, kipperInternalBuiltIns[internalIdentifier]);
		}
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): CastOrConvertExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<CastOrConvertExpression> =
		this.semanticAnalyser.castOrConvertExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<CastOrConvertExpression, TranslatedExpression> =
		this.codeGenerator.castOrConvertExpression;
}

/**
 * Multiplicative expression, which can be used to perform multiplicative operations on two expressions.
 *
 * Divisions, multiplications, and modulus are also considered to be multiplicative operations.
 * @since 0.1.0
 * @example
 * 16 * 6 // 96
 * 12 / 5 // 2.4
 * 96 % 15 // 6
 * 2 ** 8 // 256
 */
export class MultiplicativeExpression extends Expression<
	MultiplicativeExpressionSemantics,
	MultiplicativeTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: MultiplicativeExpressionContext;

	constructor(antlrRuleCtx: MultiplicativeExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the raw antlr4 parse-tree children, which should store the operator
		const children = this.getAntlrRuleChildren();

		// Get the operator
		const operator = <KipperMultiplicativeOperator | undefined>children
			.find((token) => {
				return (
					token instanceof TerminalNode && kipperMultiplicativeOperators.find((op) => op === token.text) !== undefined
				);
			})
			?.text.trim();

		// Get the expressions of this multiplicative expression
		const leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[1];

		// Ensure that the children are fully present and not undefined
		if (!operator || !leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: operator,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Assert that the arithmetic expression is valid
		this.programCtx
			.typeCheck(this)
			.validArithmeticExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		// A multiplicative expression will always be of type 'num'
		this.typeSemantics = {
			evaluatedType: "num",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): MultiplicativeExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<MultiplicativeExpression> =
		this.semanticAnalyser.multiplicativeExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<MultiplicativeExpression, TranslatedExpression> =
		this.codeGenerator.multiplicativeExpression;
}

/**
 * Additive expression, which can be used add together or concatenate two expressions.
 *
 * Subtraction is also considered to be an additive operation.
 * @since 0.1.0
 * @example
 * 4 + 4 // 8
 * 9 - 3 // 6
 */
export class AdditiveExpression extends Expression<AdditiveExpressionSemantics, AdditiveExpressionTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: AdditiveExpressionContext;

	constructor(antlrRuleCtx: AdditiveExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the raw antlr4 parse-tree children, which should store the operator
		const children = this.getAntlrRuleChildren();

		const operator = <KipperAdditiveOperator | undefined>children
			.find((token) => {
				return token instanceof TerminalNode && kipperAdditiveOperators.find((op) => op === token.text) !== undefined;
			})
			?.text.trim();

		// Get the expressions of this additive expression
		const leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[1];

		// Ensure that the children are fully present and not undefined
		if (!operator || !leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: operator,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Assert that the arithmetic expression is valid
		this.programCtx
			.typeCheck(this)
			.validArithmeticExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		// Evaluate the type based on the types of the operands
		let evaluatedType: KipperType;

		const leftOpType = semanticData.leftOp.getTypeSemanticData().evaluatedType;
		const rightOpType = semanticData.rightOp.getTypeSemanticData().evaluatedType;
		if (leftOpType === rightOpType) {
			evaluatedType = leftOpType;
		} else {
			evaluatedType = kipperStrType;
		}

		this.typeSemantics = {
			evaluatedType: evaluatedType,
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): AdditiveExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<AdditiveExpression> = this.semanticAnalyser.additiveExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<AdditiveExpression, TranslatedExpression> =
		this.codeGenerator.additiveExpression;
}

/**
 * Abstract comparative expression class representing a comparative expression, which can be used to compare two
 * expressions. This abstract class only exists to provide the commonality between the different comparative expressions.
 * @since 0.9.0
 */
export abstract class ComparativeExpression<
	Semantics extends ComparativeExpressionSemantics,
	TypeSemantics extends ComparativeExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {}

/**
 * Relational expression, which can be used to compare two numeric expressions.
 * @since 0.1.0
 * @example
 * 19 > 11 // true
 * 91 > 99 // false
 * 12 >= 11 // true
 * 77 >= 77 // true
 * 36 >= 43 // false
 * 19 < 36 // true
 * 91 < 45 // false
 * 12 <= 68 // true
 * 77 <= 77 // true
 * 36 <= 12 // false
 */
export class RelationalExpression extends ComparativeExpression<
	RelationalExpressionSemantics,
	RelationalExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: RelationalExpressionContext;

	constructor(antlrRuleCtx: RelationalExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the raw antlr4 parse-tree children, which should store the operator
		const children = this.getAntlrRuleChildren();

		// Get the expressions of this relational expression
		const leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[1];
		const operator = <KipperRelationalOperator | undefined>children
			.find((token) => {
				return token instanceof TerminalNode && kipperRelationalOperators.find((op) => op === token.text) !== undefined;
			})
			?.text.trim();

		// Ensure that the children are fully present and not undefined
		if (!leftOp || !rightOp || !operator) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: operator,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Type check the relational expression and ensure its operands are of type 'num'
		this.programCtx.typeCheck(this).validRelationalExpression(this);

		// Relational expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: "bool",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): RelationalExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<RelationalExpression> =
		this.semanticAnalyser.relationalExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<RelationalExpression, TranslatedExpression> =
		this.codeGenerator.relationalExpression;
}

/**
 * Equality expression, which can be used to compare two expressions for equality.
 * @since 0.1.0
 * @example
 * 4 == 4 // true
 * 9 == 3 // false
 * 32 != 9 // true
 * 59 != 59 // false
 */
export class EqualityExpression extends ComparativeExpression<
	EqualityExpressionSemantics,
	EqualityExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: EqualityExpressionContext;

	constructor(antlrRuleCtx: EqualityExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the raw antlr4 parse-tree children, which should store the operator
		const children = this.getAntlrRuleChildren();

		// Get the expressions of this relational expression
		const leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[1];
		const operator = <KipperEqualityOperator | undefined>children
			.find((token) => {
				return token instanceof TerminalNode && kipperEqualityOperators.find((op) => op === token.text) !== undefined;
			})
			?.text.trim();

		// Ensure that the children are fully present and not undefined
		if (!leftOp || !rightOp || !operator) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp, // First expression
			rightOp: rightOp, // Second expression
			operator: operator,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Equality expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: "bool",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): EqualityExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<EqualityExpression> = this.semanticAnalyser.equalityExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<EqualityExpression, TranslatedExpression> =
		this.codeGenerator.equalityExpression;
}

/**
 * Logical expression, representing an expression which can be used to combine two expressions/conditions using
 * {@link LogicalAndExpression logical AND} or {@link LogicalOrExpression logical OR}. This
 * abstract class only exists to provide the commonality between the different logical expressions.
 * @abstract
 */
export abstract class LogicalExpression<
	Semantics extends LogicalExpressionSemantics,
	TypeSemantics extends LogicalExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {}

/**
 * Logical-and expression, representing an expression which can be used to combine multiple conditions. It will
 * evaluate to true if all conditions are true.
 * @since 0.1.0
 * @example
 * false && false // false
 * true && false // false
 * false && true // false
 * true && true // true
 */
export class LogicalAndExpression extends LogicalExpression<
	LogicalAndExpressionSemantics,
	LogicalAndExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: LogicalAndExpressionContext;

	constructor(antlrRuleCtx: LogicalAndExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the expressions of this logical-and expression
		const leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[1];

		// Ensure that the children are fully present and not undefined
		if (!leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp, // First expression
			rightOp: rightOp, // Second expression
			operator: kipperLogicalAndOperator,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Logical expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: "bool",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): LogicalAndExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<LogicalAndExpression> =
		this.semanticAnalyser.logicalAndExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<LogicalAndExpression, TranslatedExpression> =
		this.codeGenerator.logicalAndExpression;
}

/**
 * Logical-or expression, representing an expression which can be used to combine multiple conditions. It returns true
 * if at least one condition is true.
 * @since 0.1.0
 * @example
 * false || false // false
 * true || false // true
 * false || true // true
 * true || true // true
 */
export class LogicalOrExpression extends LogicalExpression<
	LogicalOrExpressionSemantics,
	LogicalOrExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: LogicalOrExpressionContext;

	constructor(antlrRuleCtx: LogicalOrExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the expressions of this logical-or expression
		const leftOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const rightOp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[1];

		// Ensure that the children are fully present and not undefined
		if (!leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp, // First expression
			rightOp: rightOp, // Second expression
			operator: kipperLogicalOrOperator,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Logical expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: "bool",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): LogicalOrExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<LogicalOrExpression> =
		this.semanticAnalyser.logicalOrExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<LogicalOrExpression, TranslatedExpression> =
		this.codeGenerator.logicalOrExpression;
}

/**
 * Conditional expression, which evaluates a condition and evaluates the left expression if it is true, or the right
 * expression if it is false.
 * @since 0.1.0
 * @example
 * true ? 3 : 4; // 3
 * false ? 3 : 4; // 4
 */
export class ConditionalExpression extends Expression<
	ConditionalExpressionSemantics,
	ConditionalExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ConditionalExpressionContext;

	constructor(antlrRuleCtx: ConditionalExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Conditional Expressions have not been implemented yet."));
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Conditional Expressions have not been implemented yet."));
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ConditionalExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<ConditionalExpression> =
		this.semanticAnalyser.conditionalExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<ConditionalExpression, TranslatedExpression> =
		this.codeGenerator.conditionalExpression;
}

/**
 * Assignment expression, which assigns an expression to a variable. This class only represents assigning a value to
 * an existing variable, but not creating a new one.
 *
 * This expression will evaluate to the value that was assigned to the identifier.
 * @since 0.1.0
 * @example
 * x = 4
 * x += 5
 * x -= 12
 * x *= 2
 * x /= 5
 * x %= 55
 */
export class AssignmentExpression extends Expression<AssignmentExpressionSemantics, AssignmentExpressionTypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: AssignmentExpressionContext;

	constructor(antlrRuleCtx: AssignmentExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const antlrRuleChildren = this.getAntlrRuleChildren();

		// There will always be only two children, which are the identifier and expression assigned.
		const identifier: IdentifierPrimaryExpression = (() => {
			const exp = this.children[0];

			// Ensure that the left-hand side of the expression is an identifier
			this.programCtx.semanticCheck(this).validAssignment(exp);

			return <IdentifierPrimaryExpression>exp;
		})();
		const assignValue: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[1];

		// Throw an error if the children are incomplete or the operator can not be determined
		if (!assignValue || !(antlrRuleChildren[1] instanceof ParserRuleContext)) {
			throw new UnableToDetermineSemanticDataError();
		}

		const operator = <KipperAssignOperator>getParseRuleSource(<ParserRuleContext>antlrRuleChildren[1]);
		const identifierSemantics = identifier.getSemanticData();

		// Semantics of the assignment
		this.semanticData = {
			value: assignValue,
			identifierCtx: identifier,
			identifier: identifierSemantics.identifier,
			ref: identifierSemantics.ref,
			operator: operator,
		};

		// Ensure that the reference is defined and has a usable value if it's used with an arithmetic operator
		if (kipperArithmeticAssignOperators.find((o) => o === operator)) {
			this.programCtx.semanticCheck(identifier).referenceDefined(identifierSemantics.ref);
		}

		// If the reference was a variable, indicate that the value was updated
		if (identifierSemantics.ref instanceof ScopeVariableDeclaration) {
			identifierSemantics.ref.valueWasUpdated = true;
		}
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const valueTypeSemantics = semanticData.value.getTypeSemanticData();

		// Ensure the assignment is valid and the types match up
		this.programCtx.typeCheck(this).validAssignment(this);

		// The evaluated type of an assignment expression is always the evaluated type assigned to the variable
		this.typeSemantics = {
			evaluatedType: valueTypeSemantics.evaluatedType,
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): AssignmentExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<AssignmentExpression> =
		this.semanticAnalyser.assignmentExpression;
	targetCodeGenerator: TargetASTNodeCodeGenerator<AssignmentExpression, TranslatedExpression> =
		this.codeGenerator.assignmentExpression;
}
