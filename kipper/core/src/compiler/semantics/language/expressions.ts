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
	CharacterPrimaryExpressionContext,
	ConditionalExpressionContext,
	EqualityExpressionContext,
	FStringPrimaryExpressionContext,
	FunctionCallPostfixExpressionContext,
	GenericTypeSpecifierContext,
	IdentifierPrimaryExpressionContext,
	IncrementOrDecrementPostfixExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	ListPrimaryExpressionContext,
	LogicalAndExpressionContext,
	LogicalOrExpressionContext,
	MultiplicativeExpressionContext,
	NumberPrimaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	RelationalExpressionContext,
	SingleTypeSpecifierContext,
	StringPrimaryExpressionContext,
	TangledPrimaryExpressionContext,
	TypeofTypeSpecifierContext,
} from "../../parser";
import {
	type KipperAdditiveOperator,
	kipperAdditiveOperators,
	type KipperArithmeticOperator,
	type KipperBoolTypeLiterals,
	kipperCharType,
	type KipperCharType,
	type KipperFunction,
	type KipperListType,
	type KipperMultiplicativeOperator,
	kipperMultiplicativeOperators,
	type KipperNumType,
	kipperStrType,
	type KipperStrType,
	type KipperType,
	type TranslatedExpression,
} from "../const";
import type { TargetTokenCodeGenerator } from "../../translation";
import type { TargetTokenSemanticAnalyser } from "../target-semantic-analyser";
import { CompoundStatement } from "./statements";
import { CompilableASTNode } from "../../parser";
import { ScopeVariableDeclaration } from "../scope-declaration";
import { KipperNotImplementedError, UnableToDetermineMetadataError } from "../../../errors";
import { TerminalNode } from "antlr4ts/tree";

/**
 * Every antlr4 expression ctx type
 */
export type antlrExpressionCtxType =
	| NumberPrimaryExpressionContext
	| CharacterPrimaryExpressionContext
	| ListPrimaryExpressionContext
	| IdentifierPrimaryExpressionContext
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
	| SingleTypeSpecifierContext
	| GenericTypeSpecifierContext
	| TypeofTypeSpecifierContext;

/**
 * Fetches the handler for the specified {@link antlrExpressionCtxType}.
 * @param antlrCtx The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 */
export function getExpressionInstance(
	antlrCtx: antlrExpressionCtxType,
	parent: CompilableASTNode<any>,
): Expression<any> {
	if (antlrCtx instanceof NumberPrimaryExpressionContext) {
		return new NumberPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof CharacterPrimaryExpressionContext) {
		return new CharacterPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof ListPrimaryExpressionContext) {
		return new ListPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof IdentifierPrimaryExpressionContext) {
		return new IdentifierPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof SingleTypeSpecifierContext) {
		return new SingleTypeSpecifierExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof GenericTypeSpecifierContext) {
		return new GenericTypeSpecifierExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof TypeofTypeSpecifierContext) {
		return new TypeofTypeSpecifierExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof StringPrimaryExpressionContext) {
		return new StringPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof FStringPrimaryExpressionContext) {
		return new FStringPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof TangledPrimaryExpressionContext) {
		return new TangledPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof ArraySpecifierPostfixExpressionContext) {
		return new ArraySpecifierExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof IncrementOrDecrementPostfixExpressionContext) {
		return new IncrementOrDecrementExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof FunctionCallPostfixExpressionContext) {
		return new FunctionCallPostfixExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof IncrementOrDecrementUnaryExpressionContext) {
		return new IncrementOrDecrementUnaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof OperatorModifiedUnaryExpressionContext) {
		return new OperatorModifiedUnaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof CastOrConvertExpressionContext) {
		return new CastOrConvertExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof MultiplicativeExpressionContext) {
		return new MultiplicativeExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof AdditiveExpressionContext) {
		return new AdditiveExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof RelationalExpressionContext) {
		return new RelationalExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof EqualityExpressionContext) {
		return new EqualityExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof LogicalAndExpressionContext) {
		return new LogicalAndExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof LogicalOrExpressionContext) {
		return new LogicalOrExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof ConditionalExpressionContext) {
		return new ConditionalExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof BoolPrimaryExpressionContext) {
		return new BoolPrimaryExpression(antlrCtx, parent);
	} else {
		// Last remaining possible type {@link AssignmentExpression}
		return new AssignmentExpression(antlrCtx, parent);
	}
}

/**
 * Semantics for any expression.
 * @since 0.6.0
 */
export interface ExpressionSemantics {
	/**
	 * The value type that this expression evaluates to. This is used to properly represent the return type of
	 * expressions that do not explicitly show their type, like
	 * {@link FunctionCallPostfixExpression function call expressions}. The evaluated types of these
	 * {@link Expression expressions} depend on their {@link Declaration declarations}, unlike
	 * {@link NumberPrimaryExpression number expressions} which always are of type {@link KipperNumType}.
	 *
	 * This is an important field, as its essential for any form type checking.
	 * @since 0.6.0
	 */
	evaluatedType: KipperType;
}

/**
 * Expression class, which represents an expression in the Kipper language. Expressions are the fundamental logic
 * of the Kipper language and will {@link ExpressionSemantics.evaluatedType evaluate to a specific type} that can be
 * either used in another expression or discarded.
 * @abstract
 * @since 0.1.0
 */
export abstract class Expression<Semantics extends ExpressionSemantics> extends CompilableASTNode<Semantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: antlrExpressionCtxType;

	protected override _children: Array<Expression<any>>;

	protected constructor(antlrCtx: antlrExpressionCtxType, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
		this._children = [];

		// Manually add the child to the parent
		parent.addNewChild(this);
	}

	public get children(): Array<Expression<any>> {
		return this._children;
	}

	public addNewChild(newChild: Expression<any>) {
		this._children.push(newChild);
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

	public abstract targetCodeGenerator: TargetTokenCodeGenerator<any, TranslatedExpression>;
}

/**
 * Semantics for {@link ConstantExpression}.
 * @since 0.5.0
 */
export interface ConstantExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type of the constant expression.
	 * @since 0.6.0
	 */
	evaluatedType: KipperType;
	/**
	 * The value of the constant expression. This is usually either a {@link String} or {@link Number}.
	 * @since 0.5.0
	 */
	value: any;
}

/**
 * Abstract core class constant expression representing a constant expression. This type only exists to narrow down the
 * generic type.
 */
export abstract class ConstantExpression<Semantics extends ConstantExpressionSemantics> extends Expression<Semantics> {}

/**
 * Semantics for {@link NumberPrimaryExpression}.
 * @since 0.5.0
 */
export interface NumberPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type of the constant expression.
	 * @since 0.6.0
	 */
	evaluatedType: KipperNumType;
	/**
	 * The value of the constant number expression. We don't bother converting this to a number, since it's an unnecessary
	 * conversion.
	 * @since 0.5.0
	 */
	value: string;
}

/**
 * Integer constant expression class, which represents an integer constant in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class NumberPrimaryExpression extends ConstantExpression<NumberPrimaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: NumberPrimaryExpressionContext;

	constructor(antlrCtx: NumberPrimaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			value: this.sourceCode,
			evaluatedType: "num",
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// Constants will never get type checking
		return Promise.resolve(undefined);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): NumberPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<NumberPrimaryExpression> =
		this.semanticAnalyser.numberPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<NumberPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.numberPrimaryExpression;
}

/**
 * Semantics for {@link CharacterPrimaryExpression}.
 * @since 0.5.0
 */
export interface CharacterPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type of the constant character expression.
	 * @since 0.5.0
	 */
	evaluatedType: KipperCharType;
	/**
	 * The value of the constant character expression.
	 * @since 0.5.0
	 */
	value: string;
}

/**
 * Character constant expression class, which represents a single character constant in the Kipper language.
 * @since 0.1.0
 */
export class CharacterPrimaryExpression extends ConstantExpression<CharacterPrimaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: CharacterPrimaryExpressionContext;

	constructor(antlrCtx: CharacterPrimaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			value: this.sourceCode.slice(1, this.sourceCode.length - 1),
			evaluatedType: "char",
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// Constants will never get type checking
		return Promise.resolve(undefined);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): CharacterPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<CharacterPrimaryExpression> =
		this.semanticAnalyser.characterPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<CharacterPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.characterPrimaryExpression;
}

/**
 * Semantics for {@link ListPrimaryExpression}.
 * @since 0.5.0
 */
export interface ListPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type of the constant list expression.
	 * @since 0.5.0
	 */
	evaluatedType: KipperListType<KipperType>;
	/**
	 * The value of the constant list expression.
	 * @since 0.5.0
	 */
	value: Array<Expression<any>>;
}

/**
 * List constant expression class, which represents a list constant in the Kipper language.
 * @since 0.1.0
 */
export class ListPrimaryExpression extends ConstantExpression<ListPrimaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ListPrimaryExpressionContext;

	constructor(antlrCtx: ListPrimaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			evaluatedType: "list",
			value: [], // TODO! Implement list data fetching.
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ListPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<ListPrimaryExpression> =
		this.semanticAnalyser.listPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<ListPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.listPrimaryExpression;
}

/**
 * Semantics for {@link StringPrimaryExpression}.
 * @since 0.5.0
 */
export interface StringPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type of the constant string expression.
	 * @since 0.5.0
	 */
	evaluatedType: KipperStrType;
	/**
	 * The value of the constant string expression.
	 * @since 0.5.0
	 */
	value: string;
}

/**
 * String class, which represents a string expression in the Kipper language.
 * @since 0.1.0
 */
export class StringPrimaryExpression extends ConstantExpression<StringPrimaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: StringPrimaryExpressionContext;

	constructor(antlrCtx: StringPrimaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			evaluatedType: "str",
			value: this.sourceCode.slice(1, this.sourceCode.length - 1),
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// Constants will never get type checking
		return Promise.resolve(undefined);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): StringPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<StringPrimaryExpression> =
		this.semanticAnalyser.stringPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<StringPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.stringPrimaryExpression;
}

/**
 * Semantics for {@link IdentifierPrimaryExpression}.
 * @since 0.5.0
 */
export interface IdentifierPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The constant identifier.
	 * @since 0.5.0
	 */
	identifier: string;
}

/**
 * Identifier expression class, which represents an identifier in the Kipper language.
 *
 * This is only used for identifier references used inside other expressions as its own expression. Therefore, variable
 * declarations or definition do not use this class and have their own implementation for identifier handling.
 * @example
 * var x: str = "5"; // 'x' is a declarator identifier and is not an identifier reference
 * call print(x); // 'print' and 'x' are identifier references
 * @since 0.1.0
 */
export class IdentifierPrimaryExpression extends Expression<IdentifierPrimaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IdentifierPrimaryExpressionContext;

	constructor(antlrCtx: IdentifierPrimaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
			.getExistingReference(identifier, this.scope instanceof CompoundStatement ? this.scope : undefined);

		// Evaluate the type by attempting to fetch it from the global
		const evaluateType: () => KipperType = () => {
			if (ref instanceof ScopeVariableDeclaration) {
				return ref.type;
			} else {
				return "func";
			}
		};
		this.semanticData = {
			evaluatedType: evaluateType(),
			identifier: identifier,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// Constants will never get type checking
		return Promise.resolve(undefined);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IdentifierPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<IdentifierPrimaryExpression> =
		this.semanticAnalyser.identifierPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<IdentifierPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.identifierPrimaryExpression;
}

/**
 * Semantics for {@link SingleTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface SingleTypeSpecifierExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type specified by this expression.
	 * @since 0.8.0
	 */
	type: KipperType;
}

/**
 * Default type specifier
 * @since 0.8.0
 */
export class SingleTypeSpecifierExpression extends Expression<SingleTypeSpecifierExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: SingleTypeSpecifierContext;

	constructor(antlrCtx: SingleTypeSpecifierContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			type: <KipperType>this.sourceCode,
			evaluatedType: "type",
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.8.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		const semanticData = this.ensureSemanticDataExists();

		this.programCtx.typeCheck(this).typeExists(semanticData.type);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): SingleTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<SingleTypeSpecifierExpression> =
		this.semanticAnalyser.singleTypeSpecifierExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<SingleTypeSpecifierExpression, TranslatedExpression> =
		this.codeGenerator.singleTypeSpecifierExpression;
}

/**
 * Semantics for {@link GenericTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface GenericTypeSpecifierExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type specified by this expression.
	 * @since 0.8.0
	 */
	type: KipperType;
}

/**
 * Default type specifier
 * @since 0.8.0
 */
export class GenericTypeSpecifierExpression extends Expression<GenericTypeSpecifierExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: GenericTypeSpecifierContext;

	constructor(antlrCtx: GenericTypeSpecifierContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	public async semanticTypeChecking(): Promise<void> {
		const semanticData = this.ensureSemanticDataExists();

		this.programCtx.typeCheck(this).typeExists(semanticData.type);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): GenericTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<GenericTypeSpecifierExpression> =
		this.semanticAnalyser.genericTypeSpecifierExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<GenericTypeSpecifierExpression, TranslatedExpression> =
		this.codeGenerator.genericTypeSpecifierExpression;
}

/**
 * Semantics for {@link TypeofTypeSpecifierExpression}.
 * @since 0.8.0
 */
export interface TypeofTypeSpecifierExpressionSemantics extends ExpressionSemantics {
	/**
	 * The type specified by this expression.
	 * @since 0.8.0
	 */
	type: KipperType;
}

/**
 * Default type specifier
 * @since 0.8.0
 */
export class TypeofTypeSpecifierExpression extends Expression<TypeofTypeSpecifierExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: TypeofTypeSpecifierContext;

	constructor(antlrCtx: TypeofTypeSpecifierContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	public async semanticTypeChecking(): Promise<void> {
		const semanticData = this.ensureSemanticDataExists();

		this.programCtx.typeCheck(this).typeExists(semanticData.type);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): TypeofTypeSpecifierContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<TypeofTypeSpecifierExpression> =
		this.semanticAnalyser.typeofTypeSpecifierExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<TypeofTypeSpecifierExpression, TranslatedExpression> =
		this.codeGenerator.typeofTypeSpecifierExpression;
}

/**
 * Semantics for {@link BoolPrimaryExpression}.
 * @since 0.8.0
 */
export interface BoolPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * The value of this boolean constant expression.
	 * @since 0.8.0
	 */
	value: KipperBoolTypeLiterals;
}

/**
 * Boolean constant expression representing the built-in constants {@link true} and {@link false}.
 * @since 0.8.0
 */
export class BoolPrimaryExpression extends Expression<BoolPrimaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: BoolPrimaryExpressionContext;

	constructor(antlrCtx: BoolPrimaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			evaluatedType: "bool",
			value: <KipperBoolTypeLiterals>this.sourceCode,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public semanticTypeChecking(): Promise<void> {
		// Constants will never get type checking
		return Promise.resolve(undefined);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): BoolPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<BoolPrimaryExpression> =
		this.semanticAnalyser.boolPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<BoolPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.boolPrimaryExpression;
}

/**
 * Semantics for {@link FStringPrimaryExpression}.
 * @since 0.5.0
 */
export interface FStringPrimaryExpressionSemantics extends ExpressionSemantics {
	/**
	 * Returns the items of the f-strings, where each item represents one section of a string. The section may either be
	 * a {@link String constant string} or {@link Expression evaluable runtime expression}.
	 * @since 0.5.0
	 */
	items: Array<string | Expression<any>>;
}

/**
 * F-String class, which represents an f-string expression in the Kipper language.
 * @since 0.1.0
 */
export class FStringPrimaryExpression extends Expression<FStringPrimaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FStringPrimaryExpressionContext;

	// TODO! Implement proper f-string value referencing using children expressions

	constructor(antlrCtx: FStringPrimaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("F-String Expressions have not been implemented yet."));

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "str",
			items: [], // TODO! Implement proper fetching of the string items and expressions contained in the f-string
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FStringPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<FStringPrimaryExpression> =
		this.semanticAnalyser.fStringPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<FStringPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.fStringPrimaryExpression;
}

/**
 * Semantics for {@link TangledPrimaryExpression}.
 * @since 0.5.0
 */
export interface TangledPrimaryExpressionSemantics extends ExpressionSemantics {}

/**
 * Tangled expression class, which represents a tangled expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class TangledPrimaryExpression extends Expression<TangledPrimaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: TangledPrimaryExpressionContext;

	constructor(antlrCtx: TangledPrimaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Tangled Expressions have not been implemented yet."));

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): TangledPrimaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<TangledPrimaryExpression> =
		this.semanticAnalyser.tangledPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<TangledPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.tangledPrimaryExpression;
}

/**
 * Semantics for {@link IncrementOrDecrementExpression}.
 * @since 0.5.0
 */
export interface IncrementOrDecrementExpressionSemantics extends ExpressionSemantics {}

/**
 * Increment or Decrement expression,  which represents a left-side -- or ++ expression in the Kipper language.
 * @since 0.1.0
 * @example
 * val++
 * val--
 */
export class IncrementOrDecrementExpression extends Expression<IncrementOrDecrementExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IncrementOrDecrementPostfixExpressionContext;

	constructor(antlrCtx: IncrementOrDecrementPostfixExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IncrementOrDecrementPostfixExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<IncrementOrDecrementExpression> =
		this.semanticAnalyser.incrementOrDecrementExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<IncrementOrDecrementExpression, TranslatedExpression> =
		this.codeGenerator.incrementOrDecrementExpression;
}

/**
 * Semantics for {@link ArraySpecifierExpression}.
 * @since 0.5.0
 */
export interface ArraySpecifierExpressionSemantics extends ExpressionSemantics {}

/**
 * Array Specifier expression, which accesses a list/array based on its index.
 * @since 0.1.0
 * @example
 * array[0]
 */
export class ArraySpecifierExpression extends Expression<ArraySpecifierExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ArraySpecifierPostfixExpressionContext;

	constructor(antlrCtx: ArraySpecifierPostfixExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Array Subscripting has not been implemented yet."));

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ArraySpecifierPostfixExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<ArraySpecifierExpression> =
		this.semanticAnalyser.arraySpecifierExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<ArraySpecifierExpression, TranslatedExpression> =
		this.codeGenerator.arraySpecifierExpression;
}

/**
 * Semantics for {@link FunctionCallPostfixExpression}.
 * @since 0.5.0
 */
export interface FunctionCallPostfixExpressionSemantics extends ExpressionSemantics {
	/**
	 * The identifier of the function that is called.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The function that is called.
	 * @since 0.5.0
	 */
	function: KipperFunction;
	/**
	 * The arguments that were passed to this function.
	 * @since 0.6.0
	 */
	args: Array<Expression<any>>;
}

/**
 * Function call class, which represents a function call expression in the Kipper language.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 */
export class FunctionCallPostfixExpression extends Expression<FunctionCallPostfixExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: FunctionCallPostfixExpressionContext;

	constructor(antlrCtx: FunctionCallPostfixExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the identifier of the function that is called
		const identifierSemantics: IdentifierPrimaryExpressionSemantics = this.children[0].ensureSemanticDataExists();

		// Fetching the called function and its semantic data
		const calledFunc = this.programCtx.semanticCheck(this).getExistingFunction(identifierSemantics.identifier);

		// Every item from index 1 to the end is an argument (First child is the identifier).
		// Tries to fetch the function. If it fails throw a {@link UnknownFunctionIdentifier} error.
		const args = this.children.slice(1, this.children.length);

		// Ensure the arguments provided are valid
		this.programCtx.semanticCheck(this).validFunctionCallArguments(calledFunc, args);

		this.semanticData = {
			evaluatedType: "void",
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
	public async semanticTypeChecking(): Promise<void> {
		const semanticData = this.ensureSemanticDataExists();

		this.programCtx.typeCheck(this).validFunctionCallArguments(semanticData.function, semanticData.args);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FunctionCallPostfixExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<FunctionCallPostfixExpression> =
		this.semanticAnalyser.functionCallPostfixExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<FunctionCallPostfixExpression, TranslatedExpression> =
		this.codeGenerator.functionCallPostfixExpression;
}

/**
 * Semantics for {@link IncrementOrDecrementUnaryExpression}.
 * @since 0.5.0
 */
export interface IncrementOrDecrementUnaryExpressionSemantics extends ExpressionSemantics {}

/**
 * Increment or decrement expression class, which represents a left-side -- or ++ expression in the Kipper language.
 * @since 0.1.0
 * @example
 * ++4 // 5
 * --61 // 60
 */
export class IncrementOrDecrementUnaryExpression extends Expression<IncrementOrDecrementUnaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: IncrementOrDecrementUnaryExpressionContext;

	constructor(antlrCtx: IncrementOrDecrementUnaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): IncrementOrDecrementUnaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<IncrementOrDecrementUnaryExpression> =
		this.semanticAnalyser.incrementOrDecrementUnaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<IncrementOrDecrementUnaryExpression, TranslatedExpression> =
		this.codeGenerator.incrementOrDecrementUnaryExpression;
}

/**
 * Semantics for {@link OperatorModifiedUnaryExpression}.
 * @since 0.5.0
 */
export interface OperatorModifiedUnaryExpressionSemantics extends ExpressionSemantics {}

/**
 * Operator modified unary expression class, which represents a signed (+/-) unary expression in the Kipper language
 * and is compilable using {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * -41 // -41
 * +59 // 59
 */
export class OperatorModifiedUnaryExpression extends Expression<OperatorModifiedUnaryExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: OperatorModifiedUnaryExpressionContext;

	constructor(antlrCtx: OperatorModifiedUnaryExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Operator Modified Expression have not been implemented yet."),
			);

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): OperatorModifiedUnaryExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<OperatorModifiedUnaryExpression> =
		this.semanticAnalyser.operatorModifiedUnaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<OperatorModifiedUnaryExpression, TranslatedExpression> =
		this.codeGenerator.operatorModifiedUnaryExpression;
}

/**
 * Semantics for {@link CastOrConvertExpression}.
 * @since 0.5.0
 */
export interface CastOrConvertExpressionSemantics extends ExpressionSemantics {
	/**
	 * The expression to convert.
	 * @since 0.8.0
	 */
	exp: Expression<any>;
	/**
	 * The type the {@link exp} should be converted to.
	 * @since 0.8.0
	 */
	type: KipperType;
}

/**
 * Convert expression class, which represents a conversion expression in the Kipper language.
 * @since 0.1.0
 * @example
 * "4" as num // 4
 * 39 as str // "39"
 */
export class CastOrConvertExpression extends Expression<CastOrConvertExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: CastOrConvertExpressionContext;

	constructor(antlrCtx: CastOrConvertExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Fetching the original exp and the type using the children
		const exp: Expression<any> = this.children[0];
		const type: KipperType = (<SingleTypeSpecifierExpression>this.children[1]).ensureSemanticDataExists().type;

		// Ensure the children are fully present and not undefined
		if (!exp || !type) {
			throw new UnableToDetermineMetadataError();
		}

		this.semanticData = {
			evaluatedType: type,
			type: type,
			exp: exp,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		const semanticData = this.ensureSemanticDataExists();

		this.programCtx.semanticCheck(this).validConversion(semanticData.exp, semanticData.type);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): CastOrConvertExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<CastOrConvertExpression> =
		this.semanticAnalyser.castOrConvertExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<CastOrConvertExpression, TranslatedExpression> =
		this.codeGenerator.castOrConvertExpression;
}

/**
 * Semantics for the Arithmetic expressions: {@link MultiplicativeExpression} and {@link AdditiveExpression}.
 * @since 0.6.0
 */
export interface ArithmeticExpressionSemantics extends ExpressionSemantics {
	/**
	 * The first expression. The left side of the expression.
	 * @since 0.6.0
	 */
	exp1: Expression<any>;
	/**
	 * The second expression. The right side of the expression.
	 * @since 0.6.0
	 */
	exp2: Expression<any>;
	/**
	 * The operator using the two values {@link this.exp1 exp1} and {@link this.exp2 exp2} to generate a result.
	 * @since 0.6.0
	 */
	operator: KipperArithmeticOperator;
}

/**
 * Semantics for {@link MultiplicativeExpression}.
 * @since 0.5.0
 */
export interface MultiplicativeExpressionSemantics extends ArithmeticExpressionSemantics {
	/**
	 * The first expression. The left side of the expression.
	 * @since 0.6.0
	 */
	exp1: Expression<any>;
	/**
	 * The second expression. The right side of the expression.
	 * @since 0.6.0
	 */
	exp2: Expression<any>;
	/**
	 * The operator using the two values {@link this.exp1 exp1} and {@link this.exp2 exp2} to generate a result.
	 * @since 0.6.0
	 */
	operator: KipperMultiplicativeOperator;
}

/**
 * Multiplicative expression class, which represents a multiplicative expression in the Kipper language.
 * @since 0.1.0
 * @example
 * 16 * 6 // 96
 * 12 / 5 // 2.4
 * 96 % 15 // 6
 * 2 ** 8 // 256
 */
export class MultiplicativeExpression extends Expression<MultiplicativeExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: MultiplicativeExpressionContext;

	constructor(antlrCtx: MultiplicativeExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const children = this.ensureTokenChildrenExist();

		const operator = <KipperMultiplicativeOperator | undefined>children
			.find((token) => {
				return (
					token instanceof TerminalNode && kipperMultiplicativeOperators.find((op) => op === token.text) !== undefined
				);
			})
			?.text.trim();

		const exp1: Expression<any> = this.children[0];
		const exp2: Expression<any> = this.children[1];

		// Ensure the children are fully present and not undefined
		if (!operator || !exp1 || !exp2) {
			throw new UnableToDetermineMetadataError();
		}

		// Assert that the arithmetic expression is valid
		this.programCtx.semanticCheck(this).arithmeticExpressionValid(exp1, exp2, operator);

		this.semanticData = {
			evaluatedType: "num",
			exp1: exp1, // First expression
			exp2: exp2, // Second expression
			operator: operator,
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): MultiplicativeExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<MultiplicativeExpression> =
		this.semanticAnalyser.multiplicativeExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<MultiplicativeExpression, TranslatedExpression> =
		this.codeGenerator.multiplicativeExpression;
}

/**
 * Semantics for {@link AdditiveExpression}.
 * @since 0.5.0
 */
export interface AdditiveExpressionSemantics extends ArithmeticExpressionSemantics {
	/**
	 * The first expression. The left side of the expression.
	 * @since 0.6.0
	 */
	exp1: Expression<any>;
	/**
	 * The second expression. The right side of the expression.
	 * @since 0.6.0
	 */
	exp2: Expression<any>;
	/**
	 * The operator using the two values {@link this.exp1 exp1} and {@link this.exp2 exp2} to generate a result.
	 * @since 0.6.0
	 */
	operator: KipperAdditiveOperator;
}

/**
 * Additive expression class, which represents an additive expression in the Kipper language.
 * @since 0.1.0
 * @example
 * 4 + 4 // 8
 * 9 - 3 // 6
 */
export class AdditiveExpression extends Expression<AdditiveExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: AdditiveExpressionContext;

	constructor(antlrCtx: AdditiveExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const children = this.ensureTokenChildrenExist();

		const operator = <KipperAdditiveOperator | undefined>children
			.find((token) => {
				return token instanceof TerminalNode && kipperAdditiveOperators.find((op) => op === token.text) !== undefined;
			})
			?.text.trim();

		const exp1: Expression<any> = this.children[0];
		const exp2: Expression<any> = this.children[1];

		// Ensure the children are fully present and not undefined
		if (!operator || !exp1 || !exp2) {
			throw new UnableToDetermineMetadataError();
		}

		// Assert that the arithmetic expression is valid
		this.programCtx.semanticCheck(this).arithmeticExpressionValid(exp1, exp2, operator);

		const evaluateType: () => KipperType = () => {
			const exp1Type = exp1.ensureSemanticDataExists().evaluatedType;
			const exp2Type = exp2.ensureSemanticDataExists().evaluatedType;
			if (exp1Type === exp2Type) {
				return exp1.semanticData.evaluatedType;
			} else if (
				(exp1Type === kipperCharType && exp2Type === kipperStrType) ||
				(exp1Type === kipperStrType && exp2Type === kipperCharType)
			) {
				return kipperStrType;
			} else {
				// This should never happen
				throw new UnableToDetermineMetadataError();
			}
		};
		this.semanticData = {
			evaluatedType: evaluateType(),
			exp1: exp1, // First expression
			exp2: exp2, // Second expression
			operator: operator,
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): AdditiveExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<AdditiveExpression> = this.semanticAnalyser.additiveExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<AdditiveExpression, TranslatedExpression> =
		this.codeGenerator.additiveExpression;
}

/**
 * Semantics for {@link RelationalExpression}.
 * @since 0.5.0
 */
export interface RelationalExpressionSemantics extends ExpressionSemantics {}

/**
 * Relational expression class, which represents a relational expression in the Kipper language.
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
export class RelationalExpression extends Expression<RelationalExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: RelationalExpressionContext;

	constructor(antlrCtx: RelationalExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Logical Relational Expressions have not been implemented yet."),
			);

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): RelationalExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<RelationalExpression> =
		this.semanticAnalyser.relationalExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<RelationalExpression, TranslatedExpression> =
		this.codeGenerator.relationalExpression;
}

/**
 * Semantics for {@link EqualityExpressionSemantics}.
 * @since 0.5.0
 */
export interface EqualityExpressionSemantics extends ExpressionSemantics {}

/**
 * Equality expression class, which represents an equality check expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * 4 == 4 // true
 * 9 == 3 // false
 * 32 != 9 // true
 * 59 != 59 // false
 */
export class EqualityExpression extends Expression<EqualityExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: EqualityExpressionContext;

	constructor(antlrCtx: EqualityExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(
				new KipperNotImplementedError("Logical Equality Expressions have not been implemented yet."),
			);

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): EqualityExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<EqualityExpression> = this.semanticAnalyser.equalityExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<EqualityExpression, TranslatedExpression> =
		this.codeGenerator.equalityExpression;
}

/**
 * Semantics for {@link LogicalAndExpression}.
 * @since 0.5.0
 */
export interface LogicalAndExpressionSemantics extends ExpressionSemantics {}

/**
 * Logical-And expression class, which represents a logical-and expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * false && false // false
 * true && false // false
 * false && true // false
 * true && true // true
 */
export class LogicalAndExpression extends Expression<LogicalAndExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: LogicalAndExpressionContext;

	constructor(antlrCtx: LogicalAndExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Logical And Expressions have not been implemented yet."));

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): LogicalAndExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<LogicalAndExpression> =
		this.semanticAnalyser.logicalAndExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<LogicalAndExpression, TranslatedExpression> =
		this.codeGenerator.logicalAndExpression;
}

/**
 * Semantics for {@link LogicalOrExpression}.
 * @since 0.5.0
 */
export interface LogicalOrExpressionSemantics extends ExpressionSemantics {}

/**
 * Logical-Or expression class, which represents a logical-or expression in the Kipper language.
 * @since 0.1.0
 * @example
 * false || false // false
 * true || false // true
 * false || true // true
 * true || true // true
 */
export class LogicalOrExpression extends Expression<LogicalOrExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: LogicalOrExpressionContext;

	constructor(antlrCtx: LogicalOrExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Logical Or Expressions have not been implemented yet."));

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): LogicalOrExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<LogicalOrExpression> = this.semanticAnalyser.logicalOrExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<LogicalOrExpression, TranslatedExpression> =
		this.codeGenerator.logicalOrExpression;
}

/**
 * Semantics for {@link ConditionalExpression}.
 * @since 0.5.0
 */
export interface ConditionalExpressionSemantics extends ExpressionSemantics {}

/**
 * Conditional expression class, which represents a conditional expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * true ? 3 : 4; // 3
 * false ? 3 : 4; // 4
 */
export class ConditionalExpression extends Expression<ConditionalExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ConditionalExpressionContext;

	constructor(antlrCtx: ConditionalExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		throw this.programCtx
			.semanticCheck(this)
			.notImplementedError(new KipperNotImplementedError("Conditional Expressions have not been implemented yet."));

		// eslint-disable-next-line no-unreachable
		this.semanticData = {
			evaluatedType: "void",
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ConditionalExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<ConditionalExpression> =
		this.semanticAnalyser.conditionalExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<ConditionalExpression, TranslatedExpression> =
		this.codeGenerator.conditionalExpression;
}

/**
 * Semantics for {@link AssignmentExpression}.
 * @since 0.5.0
 */
export interface AssignmentExpressionSemantics extends ExpressionSemantics {
	/**
	 * The identifier expression that is being assigned to.
	 * @since 0.7.0
	 */
	identifier: IdentifierPrimaryExpression;
	/**
	 * The assigned value to this variable.
	 * @since 0.7.0
	 */
	value: Expression<any>;
}

/**
 * Assignment expression class, which represents an assignment expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}. This class only represents assigning a value, but not declaring it!
 *
 * This expression will evaluate to the value that was assigned to the identifier.
 * @since 0.1.0
 * @example
 * x = 4
 */
export class AssignmentExpression extends Expression<AssignmentExpressionSemantics> {
	/**
	 * The private field '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: AssignmentExpressionContext;

	constructor(antlrCtx: AssignmentExpressionContext, parent: CompilableASTNode<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// There will always be only two children, which are the identifier and expression assigned.
		const identifier: IdentifierPrimaryExpression = (() => {
			const exp = this.children[0];
			// Ensure the left-hand side of the expression is an identifier
			this.programCtx.semanticCheck(this).validAssignment(exp);
			return <IdentifierPrimaryExpression>exp;
		})();
		const assignValue: Expression<any> = this.children[1];

		// Throw an error if the children are incomplete
		if (!assignValue) {
			throw new UnableToDetermineMetadataError();
		}

		// Get the semantics / the evaluated type of this expression
		const valueSemantics = assignValue.ensureSemanticDataExists();
		this.semanticData = {
			evaluatedType: valueSemantics.evaluatedType,
			value: assignValue,
			identifier: identifier,
		};
	}

	/**
	 * Performs type checking for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 * @since 0.7.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		const semanticData = this.ensureSemanticDataExists();

		this.programCtx.typeCheck(this).validAssignment(semanticData.identifier, semanticData.value);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): AssignmentExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<AssignmentExpression> =
		this.semanticAnalyser.assignmentExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<AssignmentExpression, TranslatedExpression> =
		this.codeGenerator.assignmentExpression;
}
