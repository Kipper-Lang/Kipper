/**
 * Expressions of the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { CompilableParseToken } from "./parse-token";
import {
	AdditiveExpressionContext,
	ArraySpecifierPostfixExpressionContext,
	AssignmentExpressionContext,
	CastOrConvertExpressionContext,
	CharacterPrimaryExpressionContext,
	ConditionalExpressionContext,
	EqualityExpressionContext,
	FStringPrimaryExpressionContext,
	FunctionCallPostfixExpressionContext,
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
	StringPrimaryExpressionContext,
	TangledPrimaryExpressionContext,
} from "../parser";
import { BuiltInFunction, KipperType, ScopeFunctionDeclaration } from "../logic";

/**
 * Every antlr4 expression ctx type
 */
export type antlrExpressionCtxType =
	| NumberPrimaryExpressionContext
	| CharacterPrimaryExpressionContext
	| ListPrimaryExpressionContext
	| IdentifierPrimaryExpressionContext
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
	| AssignmentExpressionContext;

/**
 * Fetches the handler for the specified {@link antlrExpressionCtxType}.
 * @param antlrContext The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 */
export function getExpressionInstance(antlrContext: antlrExpressionCtxType, parent: CompilableParseToken): Expression {
	if (antlrContext instanceof NumberPrimaryExpressionContext) {
		return new NumberPrimaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof CharacterPrimaryExpressionContext) {
		return new CharacterPrimaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof ListPrimaryExpressionContext) {
		return new ListPrimaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof IdentifierPrimaryExpressionContext) {
		return new IdentifierPrimaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof StringPrimaryExpressionContext) {
		return new StringPrimaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof FStringPrimaryExpressionContext) {
		return new FStringPrimaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof TangledPrimaryExpressionContext) {
		return new TangledPrimaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof ArraySpecifierPostfixExpressionContext) {
		return new ArraySpecifierExpression(antlrContext, parent);
	} else if (antlrContext instanceof IncrementOrDecrementPostfixExpressionContext) {
		return new IncrementOrDecrementExpression(antlrContext, parent);
	} else if (antlrContext instanceof FunctionCallPostfixExpressionContext) {
		return new FunctionCallPostfixExpression(antlrContext, parent);
	} else if (antlrContext instanceof IncrementOrDecrementUnaryExpressionContext) {
		return new IncrementOrDecrementUnaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof OperatorModifiedUnaryExpressionContext) {
		return new OperatorModifiedUnaryExpression(antlrContext, parent);
	} else if (antlrContext instanceof CastOrConvertExpressionContext) {
		return new CastOrConvertExpression(antlrContext, parent);
	} else if (antlrContext instanceof MultiplicativeExpressionContext) {
		return new MultiplicativeExpression(antlrContext, parent);
	} else if (antlrContext instanceof AdditiveExpressionContext) {
		return new AdditiveExpression(antlrContext, parent);
	} else if (antlrContext instanceof RelationalExpressionContext) {
		return new RelationalExpression(antlrContext, parent);
	} else if (antlrContext instanceof EqualityExpressionContext) {
		return new EqualityExpression(antlrContext, parent);
	} else if (antlrContext instanceof LogicalAndExpressionContext) {
		return new LogicalAndExpression(antlrContext, parent);
	} else if (antlrContext instanceof LogicalOrExpressionContext) {
		return new LogicalOrExpression(antlrContext, parent);
	} else if (antlrContext instanceof ConditionalExpressionContext) {
		return new ConditionalExpression(antlrContext, parent);
	} else {
		// Last remaining possible type {@link AssignmentExpression}
		return new AssignmentExpression(antlrContext, parent);
	}
}

/**
 * Expression class, which represents an expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Expression extends CompilableParseToken {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: antlrExpressionCtxType;

	protected constructor(antlrContext: antlrExpressionCtxType, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public abstract translateCtxAndChildren(): Array<string>;

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): antlrExpressionCtxType {
		return this._antlrContext;
	}
}

export abstract class ConstantExpression extends Expression {
	/**
	 * The type of the constant expression.
	 */
	public readonly type: KipperType;

	protected constructor(antlrContext: antlrExpressionCtxType, parent: CompilableParseToken, type: KipperType) {
		super(antlrContext, parent);
		this.type = type;
	}
}

/**
 * Integer constant expression class, which represents an integer constant in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class NumberPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: NumberPrimaryExpressionContext;

	public readonly value: number;

	constructor(antlrContext: NumberPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent, "num" as KipperType);
		this._antlrContext = antlrContext;

		// Setting the numeric value
		this.value = +this.sourceCode;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): NumberPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 *  Character constant expression class, which represents an integer constant in the Kipper language and is
 * compilable using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class CharacterPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: CharacterPrimaryExpressionContext;

	/**
	 * The value of this character expression
	 */
	public readonly value: string;

	constructor(antlrContext: CharacterPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent, "char" as KipperType);
		this._antlrContext = antlrContext;

		// Setting the character value
		this.value = this.sourceCode.slice(1, this.sourceCode.length - 1);

		// TODO! Add check for length, which forbids empty characters and multi-characters!
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): CharacterPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 *  List constant expression class, which represents a list constant in the Kipper language and is
 * compilable using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class ListPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: ListPrimaryExpressionContext;

	constructor(antlrContext: ListPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent, "list" as KipperType);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): ListPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * String class, which represents a string expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class StringPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: StringPrimaryExpressionContext;

	/**
	 * String content of this expression.
	 */
	public readonly stringContent: string;

	constructor(antlrContext: StringPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent, "str" as KipperType);
		this._antlrContext = antlrContext;

		// Get string content for the f-string. Removing start and end character
		this.stringContent = this.sourceCode.slice(1, this.sourceCode.length - 1);
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		return [`"${this.stringContent}"`];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): StringPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Expression class, which represents an expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class IdentifierPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: IdentifierPrimaryExpressionContext;

	/**
	 * The identifier of this expression.
	 */
	public readonly identifierValue: string;

	constructor(antlrContext: IdentifierPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;

		// Fetching the identifier
		this.identifierValue = this.sourceCode;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): IdentifierPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * F-String class, which represents an f-string expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class FStringPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: FStringPrimaryExpressionContext;

	// TODO! Implement proper f-string value referencing using children expressions

	constructor(antlrContext: FStringPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): FStringPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Tangled expression class, which represents a tangled expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 *
 * This class may only have children of type {@link CompilableParseToken}, as this expression itself does not
 * compile anything and simply change the order of evaluation.
 * @since 0.1.0
 */
export class TangledPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: TangledPrimaryExpressionContext;

	/**
	 * The private '_children' that actually stores the variable data,
	 * which is returned inside the {@link this.children}.
	 * @private
	 */
	protected override readonly _children: Array<CompilableParseToken>;

	constructor(antlrContext: TangledPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
		this._children = [];
	}

	/**
	 * The children of this parse token, which **must** be of type {@link CompilableParseToken}, as this expression
	 * itself does not compile anything and simply change the order of evaluation.
	 */
	public get children(): Array<CompilableParseToken> {
		return this._children;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO! Add tests for this
		let genCode: Array<string> = [];
		for (let child of this._children) {
			genCode = genCode.concat(child.translateCtxAndChildren());
		}
		return genCode;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): TangledPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Function call class, which represents a function call expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 */
export class IncrementOrDecrementExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: IncrementOrDecrementPostfixExpressionContext;

	constructor(antlrContext: IncrementOrDecrementPostfixExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): IncrementOrDecrementPostfixExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Function call class, which represents a function call expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 */
export class ArraySpecifierExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: ArraySpecifierPostfixExpressionContext;

	constructor(antlrContext: ArraySpecifierPostfixExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): ArraySpecifierPostfixExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Function call class, which represents a function call expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 */
export class FunctionCallPostfixExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: FunctionCallPostfixExpressionContext;

	private readonly function: BuiltInFunction | ScopeFunctionDeclaration | undefined;

	constructor(antlrContext: FunctionCallPostfixExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;

		const identifier: string = ""; // TODO! Implement meta-data fetching
		this.function = this.programCtx.getGlobalFunction(identifier);
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): FunctionCallPostfixExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Increment or decrement expression class, which represents an -- or ++ expression in the Kipper language and is
 * compilable using {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * ++4 // 5
 * --61 // 60
 */
export class IncrementOrDecrementUnaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: IncrementOrDecrementUnaryExpressionContext;

	constructor(antlrContext: IncrementOrDecrementUnaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): IncrementOrDecrementUnaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Operator modified unary expression class, which represents a signed (+/-) unary expression in the Kipper language
 * and is compilable using {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * -41 // -41
 * +59 // 59
 */
export class OperatorModifiedUnaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: OperatorModifiedUnaryExpressionContext;

	constructor(antlrContext: OperatorModifiedUnaryExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): OperatorModifiedUnaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Convert expression class, which represents a conversion expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * "4" as num // 4
 * 39 as str // "39"
 */
export class CastOrConvertExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: CastOrConvertExpressionContext;

	constructor(antlrContext: CastOrConvertExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): CastOrConvertExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Multiplicative expression class, which represents a multiplicative expression in the Kipper language and is
 * compilable using {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * 16 * 6 // 96
 * 12 / 5 // 2.4
 * 96 % 15 // 6
 * 2 ** 8 // 256
 */
export class MultiplicativeExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: MultiplicativeExpressionContext;

	constructor(antlrContext: MultiplicativeExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): MultiplicativeExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Additive expression class, which represents an additive expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * 4 + 4 // 8
 * 9 - 3 // 6
 */
export class AdditiveExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: AdditiveExpressionContext;

	constructor(antlrContext: AdditiveExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): AdditiveExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Relational expression class, which represents a relational expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
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
export class RelationalExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: RelationalExpressionContext;

	constructor(antlrContext: RelationalExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): RelationalExpressionContext {
		return this._antlrContext;
	}
}

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
export class EqualityExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: EqualityExpressionContext;

	constructor(antlrContext: EqualityExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): EqualityExpressionContext {
		return this._antlrContext;
	}
}

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
export class LogicalAndExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: LogicalAndExpressionContext;

	constructor(antlrContext: LogicalAndExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): LogicalAndExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Logical-Or expression class, which represents a logical-or expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * false || false // false
 * true || false // true
 * false || true // true
 * true || true // true
 */
export class LogicalOrExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: LogicalOrExpressionContext;

	constructor(antlrContext: LogicalOrExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): LogicalOrExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Conditional expression class, which represents a conditional expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * true ? 3 : 4; // 3
 * false ? 3 : 4; // 4
 */
export class ConditionalExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: ConditionalExpressionContext;

	constructor(antlrContext: ConditionalExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): ConditionalExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Assignment expression class, which represents an assignment expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}. This class only represents assigning a value, but not declaring it!
 * @since 0.1.0
 * @example
 * x = 4
 */
export class AssignmentExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrContext}.
	 * @private
	 */
	protected override readonly _antlrContext: AssignmentExpressionContext;

	constructor(antlrContext: AssignmentExpressionContext, parent: CompilableParseToken) {
		super(antlrContext, parent);
		this._antlrContext = antlrContext;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public semanticAnalysis(): void {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	public translateCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrContext(): AssignmentExpressionContext {
		return this._antlrContext;
	}
}
