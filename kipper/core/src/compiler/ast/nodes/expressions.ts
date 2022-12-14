/**
 * Expressions of the Kipper language.
 * @since 0.1.0
 */
import type { TargetASTNodeCodeGenerator } from "../../target-presets";
import type {
	AdditiveExpressionSemantics,
	AssignmentExpressionSemantics,
	BoolPrimaryExpressionSemantics,
	CastOrConvertExpressionSemantics,
	ComparativeExpressionSemantics,
	ConditionalExpressionSemantics,
	ConstantExpressionSemantics,
	EqualityExpressionSemantics,
	ExpressionSemantics,
	FStringPrimaryExpressionSemantics,
	FunctionCallExpressionSemantics,
	GenericTypeSpecifierExpressionSemantics,
	IdentifierPrimaryExpressionSemantics,
	IdentifierTypeSpecifierExpressionSemantics,
	IncrementOrDecrementPostfixExpressionSemantics,
	IncrementOrDecrementUnaryExpressionSemantics,
	ArrayLiteralPrimaryExpressionSemantics,
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
	MemberAccessExpressionSemantics,
} from "../semantic-data";
import type {
	AdditiveExpressionTypeSemantics,
	AssignmentExpressionTypeSemantics,
	BoolPrimaryExpressionTypeSemantics,
	CastOrConvertExpressionTypeSemantics,
	ComparativeExpressionTypeSemantics,
	ConditionalExpressionTypeSemantics,
	EqualityExpressionTypeSemantics,
	ExpressionTypeSemantics,
	FStringPrimaryExpressionTypeSemantics,
	FunctionCallPostfixTypeSemantics,
	GenericTypeSpecifierExpressionTypeSemantics,
	IdentifierPrimaryExpressionTypeSemantics,
	IdentifierTypeSpecifierExpressionTypeSemantics,
	IncrementOrDecrementPostfixExpressionTypeSemantics,
	IncrementOrDecrementUnaryTypeSemantics,
	ArrayLiteralPrimaryExpressionTypeSemantics,
	LogicalAndExpressionTypeSemantics,
	LogicalExpressionTypeSemantics,
	LogicalOrExpressionTypeSemantics,
	MultiplicativeTypeSemantics,
	NumberPrimaryExpressionTypeSemantics,
	OperatorModifiedUnaryTypeSemantics,
	RelationalExpressionTypeSemantics,
	StringPrimaryExpressionTypeSemantics,
	TangledPrimaryTypeSemantics,
	TypeofTypeSpecifierExpressionTypeSemantics,
	TypeSpecifierExpressionTypeSemantics,
	UnaryExpressionTypeSemantics,
	VoidOrNullOrUndefinedPrimaryExpressionTypeSemantics,
} from "../type-data";
import {
	KipperAdditiveOperator,
	kipperAdditiveOperators,
	kipperArithmeticAssignOperators,
	KipperAssignOperator,
	KipperBoolTypeLiterals,
	KipperEqualityOperator,
	kipperEqualityOperators,
	KipperFunction,
	KipperIncrementOrDecrementOperator,
	kipperLogicalAndOperator,
	kipperLogicalOrOperator,
	KipperMultiplicativeOperator,
	kipperMultiplicativeOperators,
	KipperNegateOperator,
	KipperNullType,
	KipperRelationalOperator,
	kipperRelationalOperators,
	KipperSignOperator,
	kipperUnaryModifierOperators,
	KipperUndefinedType,
	KipperVoidType,
	TranslatedExpression,
} from "../../const";
import { kipperInternalBuiltIns } from "../../runtime-built-ins";
import { CheckedType, ScopeDeclaration, ScopeVariableDeclaration, UncheckedType } from "../../analysis";
import { KipperNotImplementedError, UnableToDetermineSemanticDataError } from "../../../errors";
import { TerminalNode } from "antlr4ts/tree";
import { getConversionFunctionIdentifier, getParseRuleSource } from "../../../utils";
import {
	AdditiveExpressionContext,
	AssignmentExpressionContext,
	BoolPrimaryExpressionContext,
	CastOrConvertExpressionContext,
	ConditionalExpressionContext,
	EqualityExpressionContext,
	FStringPrimaryExpressionContext,
	FunctionCallExpressionContext,
	GenericTypeSpecifierContext,
	IdentifierPrimaryExpressionContext,
	IdentifierTypeSpecifierContext,
	IncrementOrDecrementPostfixExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	ArrayLiteralPrimaryExpressionContext,
	LogicalAndExpressionContext,
	LogicalOrExpressionContext,
	MemberAccessExpressionContext,
	MultiplicativeExpressionContext,
	NumberPrimaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	RelationalExpressionContext,
	StringPrimaryExpressionContext,
	TangledPrimaryExpressionContext,
	TypeofTypeSpecifierContext,
	UnaryOperatorContext,
	VoidOrNullOrUndefinedPrimaryExpressionContext,
	KipperParser,
} from "../../parser";
import { CompilableASTNode } from "../compilable-ast-node";
import { ParserRuleContext } from "antlr4ts";
import { MemberAccessExpressionTypeSemantics } from "../type-data";

/**
 * Union type of all usable expression sub-rule context classes implemented by the {@link KipperParser} for an
 * {@link Expression}.
 */
export type ParserExpressionCtx =
	| NumberPrimaryExpressionContext
	| ArrayLiteralPrimaryExpressionContext
	| IdentifierPrimaryExpressionContext
	| VoidOrNullOrUndefinedPrimaryExpressionContext
	| BoolPrimaryExpressionContext
	| StringPrimaryExpressionContext
	| FStringPrimaryExpressionContext
	| TangledPrimaryExpressionContext
	| IncrementOrDecrementPostfixExpressionContext
	| FunctionCallExpressionContext
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
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link Declaration} AST node.
 * @since 0.10.0
 */
export type ParserExpressionKind =
	| typeof KipperParser.RULE_expression
	| typeof KipperParser.RULE_numberPrimaryExpression
	| typeof KipperParser.RULE_arrayLiteralPrimaryExpression
	| typeof KipperParser.RULE_identifierPrimaryExpression
	| typeof KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression
	| typeof KipperParser.RULE_boolPrimaryExpression
	| typeof KipperParser.RULE_stringPrimaryExpression
	| typeof KipperParser.RULE_fStringPrimaryExpression
	| typeof KipperParser.RULE_tangledPrimaryExpression
	| typeof KipperParser.RULE_memberAccessExpression
	| typeof KipperParser.RULE_incrementOrDecrementPostfixExpression
	| typeof KipperParser.RULE_functionCallExpression
	| typeof KipperParser.RULE_incrementOrDecrementUnaryExpression
	| typeof KipperParser.RULE_operatorModifiedUnaryExpression
	| typeof KipperParser.RULE_castOrConvertExpression
	| typeof KipperParser.RULE_multiplicativeExpression
	| typeof KipperParser.RULE_additiveExpression
	| typeof KipperParser.RULE_relationalExpression
	| typeof KipperParser.RULE_equalityExpression
	| typeof KipperParser.RULE_logicalAndExpression
	| typeof KipperParser.RULE_logicalOrExpression
	| typeof KipperParser.RULE_conditionalExpression
	| typeof KipperParser.RULE_assignmentExpression
	| typeof KipperParser.RULE_identifierTypeSpecifier
	| typeof KipperParser.RULE_genericTypeSpecifier
	| typeof KipperParser.RULE_typeofTypeSpecifier
	| typeof KipperParser.RULE_memberAccessExpression
	| typeof KipperParser.RULE_bracketNotationMemberAccessExpression
	| typeof KipperParser.RULE_dotNotationMemberAccessExpression;

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
		antlrRuleCtx: ParserExpressionCtx,
		parent: CompilableASTNode<any, any>,
	): Expression<ExpressionSemantics, ExpressionTypeSemantics> {
		if (antlrRuleCtx instanceof NumberPrimaryExpressionContext) {
			return new NumberPrimaryExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof ArrayLiteralPrimaryExpressionContext) {
			return new ArrayLiteralPrimaryExpression(antlrRuleCtx, parent);
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
		} else if (antlrRuleCtx instanceof IncrementOrDecrementPostfixExpressionContext) {
			return new IncrementOrDecrementPostfixExpression(antlrRuleCtx, parent);
		} else if (antlrRuleCtx instanceof FunctionCallExpressionContext) {
			return new FunctionCallExpression(antlrRuleCtx, parent);
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
		}
		// Last remaining possible type {@link AssignmentExpression}
		return new AssignmentExpression(antlrRuleCtx, parent);
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
	protected override readonly _antlrRuleCtx: ParserExpressionCtx;

	protected override _children: Array<Expression<ExpressionSemantics, ExpressionTypeSemantics>>;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public abstract readonly kind: ParserExpressionKind;

	protected constructor(antlrRuleCtx: ParserExpressionCtx, parent: CompilableASTNode<any, any>) {
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
	public abstract checkForWarnings?(): Promise<void>;

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ParserExpressionCtx {
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
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link ConstantExpression} AST node.
 * @since 0.10.0
 */
export type ParserConstantExpressionKind =
	| typeof KipperParser.RULE_numberPrimaryExpression
	| typeof KipperParser.RULE_stringPrimaryExpression
	| typeof KipperParser.RULE_boolPrimaryExpression
	| typeof KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression
	| typeof KipperParser.RULE_arrayLiteralPrimaryExpression;

/**
 * Abstract constant expression class representing a constant expression, which was defined in the source code. This
 * abstract class only exists to provide the commonality between the different constant expressions.
 */
export abstract class ConstantExpression<
	Semantics extends ConstantExpressionSemantics,
	TypeSemantics extends ExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	public abstract readonly kind: ParserConstantExpressionKind;
}

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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_numberPrimaryExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'number'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("num"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): NumberPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.numberPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.numberPrimaryExpression;
}

/**
 * List constant expression, which represents a list constant that was defined in the source code.
 * @since 0.1.0
 */
export class ArrayLiteralPrimaryExpression extends ConstantExpression<
	ArrayLiteralPrimaryExpressionSemantics,
	ArrayLiteralPrimaryExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ArrayLiteralPrimaryExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_arrayLiteralPrimaryExpression;

	constructor(antlrRuleCtx: ArrayLiteralPrimaryExpressionContext, parent: CompilableASTNode<any, any>) {
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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'list'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("list"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ArrayLiteralPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.listPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.arrayLiteralExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_stringPrimaryExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'str'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("str"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): StringPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.stringPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.stringPrimaryExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_boolPrimaryExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'bool'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("bool"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): BoolPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.boolPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.boolPrimaryExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_fStringPrimaryExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'str'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("str"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FStringPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.fStringPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.fStringPrimaryExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_identifierPrimaryExpression;

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
			.getExistingReference(identifier, "innerScope" in this.scopeCtx ? this.scopeCtx : undefined);

		// Once we have the identifier and ensured a reference exists, we are done with the primary semantic analysis.
		this.semanticData = {
			identifier: identifier,
			ref: {
				refTarget: ref,
				srcExpr: this,
			},
		};

		if (!(ref instanceof ScopeDeclaration)) {
			this.programCtx.addBuiltInReference(this, ref);
		} else {
			// If the reference is not used inside an assignment expression, ensure that the reference is defined
			// (This is due to the fact that assignments to undefined variables must always be valid, unless it's a
			// modifier assignment operator)
			if (!(this.parent instanceof AssignmentExpression)) {
				this.programCtx.semanticCheck(this).refTargetDefined(ref);
			}
		}
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.typeSemantics = {
			evaluatedType:
				"type" in semanticData.ref.refTarget ? semanticData.ref.refTarget.type : CheckedType.fromCompilableType("func"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IdentifierPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.identifierPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.identifierPrimaryExpression;
}

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link TypeSpecifierExpression} AST node.
 * @since 0.10.0
 */
export type ParserTypeSpecifierExpressionKind =
	| typeof KipperParser.RULE_identifierTypeSpecifier
	| typeof KipperParser.RULE_genericTypeSpecifier
	| typeof KipperParser.RULE_typeofTypeSpecifier;

/**
 * Abstract type class representing a type specifier. This abstract class only exists to provide the commonality between the
 * different type specifier expressions.
 */
export abstract class TypeSpecifierExpression<
	Semantics extends TypeSpecifierExpressionSemantics,
	TypeSemantics extends TypeSpecifierExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	public abstract readonly kind: ParserTypeSpecifierExpressionKind;
}

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
	IdentifierTypeSpecifierExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IdentifierTypeSpecifierContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_identifierTypeSpecifier;

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
			typeIdentifier: new UncheckedType(this.sourceCode),
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Create a checked type instance (this function handles error recovery and invalid types)
		const valueType = this.programCtx.typeCheck(this).getCheckedType(semanticData.typeIdentifier);
		this.typeSemantics = {
			// A type specifier will always evaluate to be of type 'type'
			evaluatedType: CheckedType.fromCompilableType("type"),
			storedType: valueType,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IdentifierTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.identifierTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.identifierTypeSpecifierExpression;
}

/**
 * Generic type specifier expression, which represents a generic type specifier.
 * @example
 * list<num> // List type with number as generic type
 * @since 0.8.0
 */
export class GenericTypeSpecifierExpression extends TypeSpecifierExpression<
	GenericTypeSpecifierExpressionSemantics,
	GenericTypeSpecifierExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: GenericTypeSpecifierContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_genericTypeSpecifier;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
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
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): GenericTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.genericTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.genericTypeSpecifierExpression;
}

/**
 * Typeof type specifier expression, which represents a runtime typeof expression evaluating the type of a value.
 * @since 0.8.0
 */
export class TypeofTypeSpecifierExpression extends TypeSpecifierExpression<
	TypeofTypeSpecifierExpressionSemantics,
	TypeofTypeSpecifierExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: TypeofTypeSpecifierContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_typeofTypeSpecifier;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
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
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): TypeofTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.typeofTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.typeofTypeSpecifierExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_tangledPrimaryExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
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
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): TangledPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.tangledPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.tangledPrimaryExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_voidOrNullOrUndefinedPrimaryExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.10.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// The evaluated type of this expression will always be equal to the constant identifier that this expression
		// contains e.g. either 'void', 'null' or 'undefined'.
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType(semanticData.constantIdentifier),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): VoidOrNullOrUndefinedPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.voidOrNullOrUndefinedPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.voidOrNullOrUndefinedPrimaryExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_incrementOrDecrementPostfixExpression;

	constructor(antlrRuleCtx: IncrementOrDecrementPostfixExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const exp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const operator = <KipperIncrementOrDecrementOperator>this.sourceCode.slice(-2); // After the expression

		// Ensure that the child expression is present
		if (!exp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			operand: exp,
			operator: operator,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Ensure that this expression is valid (e.g. the operand is a number)
		this.programCtx.typeCheck(this).validUnaryExpression(this);

		this.typeSemantics = {
			// This will always be a number
			evaluatedType: CheckedType.fromKipperType("num"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IncrementOrDecrementPostfixExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.incrementOrDecrementPostfixExpression;
	readonly targetCodeGenerator = this.codeGenerator.incrementOrDecrementPostfixExpression;
}

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link MemberAccessExpression} AST node.
 * @since 0.10.0
 */
export type ParserMemberAccessKind =
	| typeof KipperParser.RULE_memberAccessExpression
	| typeof KipperParser.RULE_dotNotationMemberAccessExpression
	| typeof KipperParser.RULE_bracketNotationMemberAccessExpression;

/**
 * Member access expression, which represents a member access expression that evaluates to a value of a member of an
 * object or array.
 * @since 0.10.0
 */
export abstract class MemberAccessExpression<
	Semantics extends MemberAccessExpressionSemantics,
	TypeSemantics extends MemberAccessExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: MemberAccessExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind: ParserMemberAccessKind = KipperParser.RULE_memberAccessExpression;

	protected constructor(antlrRuleCtx: MemberAccessExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}
}

/**
 * Function call class, which represents a function call expression in the Kipper language.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 * // or
 * print("Hello world!")
 */
export class FunctionCallExpression extends Expression<
	FunctionCallExpressionSemantics,
	FunctionCallPostfixTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FunctionCallExpressionContext;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_functionCallExpression;

	constructor(antlrRuleCtx: FunctionCallExpressionContext, parent: CompilableASTNode<any, any>) {
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
		if (!identifierSemantics || !identifierSemantics.ref) {
			throw new UnableToDetermineSemanticDataError();
		}

		// Every item from index 1 to the end is an argument (First child is the identifier).
		// Tries to fetch the function. If it fails throw a {@link UnknownFunctionIdentifier} error.
		const args: Array<Expression<ExpressionSemantics, ExpressionTypeSemantics>> =
			this.children.length > 1 ? this.children.slice(1, this.children.length) : [];

		this.semanticData = {
			identifier: identifierSemantics.identifier,
			args: args,
			callTarget: identifierSemantics.ref,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure that the reference is a callable function
		this.programCtx.typeCheck(this).refTargetCallable(semanticData.callTarget.refTarget);
		const calledFunc = <KipperFunction>semanticData.callTarget.refTarget;

		// Ensure valid arguments are passed
		this.programCtx.typeCheck(this).validFunctionCallArguments(calledFunc, semanticData.args);

		// Get the type that the function call will evaluate to
		let evaluatedType: CheckedType;
		if (calledFunc.returnType instanceof CheckedType) {
			evaluatedType = calledFunc.returnType;
		} else {
			evaluatedType = CheckedType.fromCompilableType(calledFunc.returnType);
		}

		// The evaluated type is always equal to the return of the function
		this.typeSemantics = {
			evaluatedType: evaluatedType,
			func: calledFunc,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FunctionCallExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.functionCallExpression;
	readonly targetCodeGenerator = this.codeGenerator.functionCallExpression;
}

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link UnaryExpression} AST node.
 * @since 0.10.0
 */
export type ParserUnaryExpressionKind =
	| typeof KipperParser.RULE_incrementOrDecrementUnaryExpression
	| typeof KipperParser.RULE_operatorModifiedUnaryExpression;

/**
 * Abstract unary expression class representing a unary expression, which can be used to modify an expression with
 * a specified operator. This abstract class only exists to provide the commonality between the different comparative
 * expressions.
 * @since 0.9.0
 */
export abstract class UnaryExpression<
	Semantics extends UnaryExpressionSemantics,
	TypeSemantics extends UnaryExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	public abstract readonly kind: ParserUnaryExpressionKind;
}

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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_incrementOrDecrementUnaryExpression;

	constructor(antlrRuleCtx: IncrementOrDecrementUnaryExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const exp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];
		const operator = <KipperIncrementOrDecrementOperator>this.sourceCode.slice(0, 2); // Before the expression

		// Ensure that the child expression is present
		if (!exp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			operand: exp,
			operator: operator,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Ensure that this expression is valid (e.g. the operand is a number)
		this.programCtx.typeCheck(this).validUnaryExpression(this);

		this.typeSemantics = {
			// This will always be a number
			evaluatedType: CheckedType.fromKipperType("num"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IncrementOrDecrementUnaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.incrementOrDecrementUnaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.incrementOrDecrementUnaryExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_operatorModifiedUnaryExpression;

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
		const unaryOperator = <KipperNegateOperator | KipperSignOperator | undefined>children.find((token) => {
			return (
				token instanceof UnaryOperatorContext &&
				kipperUnaryModifierOperators.find((op) => op === token.text) !== undefined
			);
		})?.text;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Ensure the operator is compatible with the type of the operand
		this.programCtx.typeCheck(this).validUnaryExpression(this);

		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType(semanticData.operator === "!" ? "bool" : "num"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): OperatorModifiedUnaryExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.operatorModifiedUnaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.operatorModifiedUnaryExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_castOrConvertExpression;

	constructor(antlrRuleCtx: CastOrConvertExpressionContext, parent: CompilableASTNode<any, any>) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// The first child will always be the expression that will be converted
		const exp: Expression<ExpressionSemantics, ExpressionTypeSemantics> = this.children[0];

		// Get the type using the type specifier
		const typeSpecifier = <IdentifierTypeSpecifierExpression>this.children[1];
		const type: UncheckedType = typeSpecifier.getSemanticData().typeIdentifier;

		// Ensure that the children are fully present and not undefined
		if (!exp || !type) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			castTypeSpecifier: typeSpecifier,
			castType: type,
			exp: exp,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Get the type specified by the type specifier
		const evalType = semanticData.castTypeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			// The evaluated type of the expression is equal to the cast type
			evaluatedType: evalType,
			castType: evalType,
		};

		// Ensure the conversion is valid
		this.programCtx.typeCheck(this).validConversion(semanticData.exp, evalType);

		// Add internal reference to the program ctx for the conversion function, so it is guaranteed to be included in the
		// output code.
		const internalIdentifier = getConversionFunctionIdentifier(
			semanticData.exp.getTypeSemanticData().evaluatedType.identifier,
			semanticData.castType.identifier,
		);
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
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): CastOrConvertExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.castOrConvertExpression;
	readonly targetCodeGenerator = this.codeGenerator.castOrConvertExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_multiplicativeExpression;

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
		const operator = <KipperMultiplicativeOperator | undefined>children.find((token) => {
			return (
				token instanceof TerminalNode && kipperMultiplicativeOperators.find((op) => op === token.text) !== undefined
			);
		})?.text;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
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
			evaluatedType: CheckedType.fromCompilableType("num"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): MultiplicativeExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.multiplicativeExpression;
	readonly targetCodeGenerator = this.codeGenerator.multiplicativeExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_additiveExpression;

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

		const operator = <KipperAdditiveOperator | undefined>children.find((token) => {
			return token instanceof TerminalNode && kipperAdditiveOperators.find((op) => op === token.text) !== undefined;
		})?.text;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Assert that the arithmetic expression is valid
		this.programCtx
			.typeCheck(this)
			.validArithmeticExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		this.typeSemantics = {
			// Simply use the left operand's type, since the type of the right operand is irrelevant (since they are always
			// the same anyway - otherwise there would have already been an error)
			evaluatedType: semanticData.leftOp.getTypeSemanticData().evaluatedType,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): AdditiveExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.additiveExpression;
	readonly targetCodeGenerator = this.codeGenerator.additiveExpression;
}

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link ComparativeExpression} AST node.
 * @since 0.10.0
 */
export type ParserComparativeExpressionKind =
	| typeof KipperParser.RULE_equalityExpression
	| typeof KipperParser.RULE_relationalExpression;

/**
 * Abstract comparative expression class representing a comparative expression, which can be used to compare two
 * expressions. This abstract class only exists to provide the commonality between the different comparative expressions.
 * @since 0.9.0
 */
export abstract class ComparativeExpression<
	Semantics extends ComparativeExpressionSemantics,
	TypeSemantics extends ComparativeExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	public abstract readonly kind: ParserComparativeExpressionKind;
}

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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_relationalExpression;

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
		const operator = <KipperRelationalOperator | undefined>children.find((token) => {
			return token instanceof TerminalNode && kipperRelationalOperators.find((op) => op === token.text) !== undefined;
		})?.text;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Type check the relational expression and ensure its operands are of type 'num'
		this.programCtx.typeCheck(this).validRelationalExpression(this);

		// Relational expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("bool"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): RelationalExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.relationalExpression;
	readonly targetCodeGenerator = this.codeGenerator.relationalExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_equalityExpression;

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
		const operator = <KipperEqualityOperator | undefined>children.find((token) => {
			return token instanceof TerminalNode && kipperEqualityOperators.find((op) => op === token.text) !== undefined;
		})?.text;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Equality expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("bool"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): EqualityExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.equalityExpression;
	readonly targetCodeGenerator = this.codeGenerator.equalityExpression;
}

/**
 * Union type of all possible {@link ParserASTNode.kind} values for a {@link LogicalExpression} AST node.
 * @since 0.10.0
 */
export type ParserLogicalExpressionType =
	| typeof KipperParser.RULE_logicalAndExpression
	| typeof KipperParser.RULE_logicalOrExpression;

/**
 * Logical expression, representing an expression which can be used to combine two expressions/conditions using
 * {@link LogicalAndExpression logical AND} or {@link LogicalOrExpression logical OR}. This
 * abstract class only exists to provide the commonality between the different logical expressions.
 * @abstract
 */
export abstract class LogicalExpression<
	Semantics extends LogicalExpressionSemantics,
	TypeSemantics extends LogicalExpressionTypeSemantics,
> extends Expression<Semantics, TypeSemantics> {
	public abstract readonly kind: ParserLogicalExpressionType;
}

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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_logicalAndExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Logical expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("bool"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): LogicalAndExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.logicalAndExpression;
	readonly targetCodeGenerator = this.codeGenerator.logicalAndExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_logicalOrExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// Logical expressions always return 'bool'
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("bool"),
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): LogicalOrExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.logicalOrExpression;
	readonly targetCodeGenerator = this.codeGenerator.logicalOrExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_conditionalExpression;

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
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
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
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ConditionalExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.conditionalExpression;
	readonly targetCodeGenerator = this.codeGenerator.conditionalExpression;
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

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link KipperParser} rule fields, for example {@link KipperParser.RULE_expression}.
	 * @since 0.10.0
	 */
	public override readonly kind = KipperParser.RULE_assignmentExpression;

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

		// Throw an error if the children are incomplete or the operator can not be determined (antlrRuleChildren[1])
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
			assignTarget: identifierSemantics.ref,
			operator: operator,
		};

		// Ensure that the reference is defined and has a usable value if it's used with an arithmetic operator
		if (kipperArithmeticAssignOperators.find((o) => o === operator)) {
			this.programCtx.semanticCheck(identifier).refTargetDefined(identifierSemantics.ref.refTarget);
		}

		// If the reference was a variable, indicate that the value was updated, since it's being assigned to
		if (identifierSemantics.ref.refTarget instanceof ScopeVariableDeclaration) {
			identifierSemantics.ref.refTarget.valueWasUpdated = true;
		}
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
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
	public checkForWarnings = undefined; // TODO!

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): AssignmentExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.assignmentExpression;
	readonly targetCodeGenerator = this.codeGenerator.assignmentExpression;
}
