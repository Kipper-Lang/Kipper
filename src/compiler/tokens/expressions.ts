/**
 * Expressions of the kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */
import { CompilableParseToken, ParseToken } from "./parse-token";
import {
	AdditiveExpressionContext,
	AssignmentExpressionContext,
	CastOrConvertExpressionContext,
	ConditionalExpressionContext,
	EqualityExpressionContext,
	LogicalAndExpressionContext,
	LogicalOrExpressionContext,
	MultiplicativeExpressionContext,
	RelationalExpressionContext,
	FStringPrimaryExpressionContext,
	FunctionCallPostfixExpressionContext,
	IdentifierPrimaryExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	StringPrimaryExpressionContext,
	TangledPrimaryExpressionContext,
	CharacterPrimaryExpressionContext,
	ListPrimaryExpressionContext,
	ArraySpecifierPostfixExpressionContext,
	IncrementOrDecrementPostfixExpressionContext,
	NumberPrimaryExpressionContext,
} from "../parser";
import { KipperProgramContext } from "../program-ctx";
import { KipperType } from "../types";

/**
 * Every antlr4 expression type
 */
export type antlrExpressionCtx =
	NumberPrimaryExpressionContext
	| CharacterPrimaryExpressionContext
	|	ListPrimaryExpressionContext
	| IdentifierPrimaryExpressionContext
	| StringPrimaryExpressionContext
	| FStringPrimaryExpressionContext
	| TangledPrimaryExpressionContext
	|	ArraySpecifierPostfixExpressionContext
	|	IncrementOrDecrementPostfixExpressionContext
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
 * Fetches the handler for the specified {@link antlrExpressionCtx}.
 * @param antlrContext The context instance that the handler class should be fetched for.
 * @param fileCtx The file context class that will be assigned to the instance.
 */
export function getExpressionInstance(antlrContext: antlrExpressionCtx, fileCtx: KipperProgramContext): Expression {
	if (antlrContext instanceof NumberPrimaryExpressionContext) {
		return new NumberPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof CharacterPrimaryExpressionContext) {
		return new CharacterPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof ListPrimaryExpressionContext) {
		return new ListPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof IdentifierPrimaryExpressionContext) {
		return new IdentifierPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof StringPrimaryExpressionContext) {
		return new StringPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof FStringPrimaryExpressionContext) {
		return new FStringPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof TangledPrimaryExpressionContext) {
		return new TangledPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof ArraySpecifierPostfixExpressionContext) {
		return new ArraySpecifierExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof IncrementOrDecrementPostfixExpressionContext) {
		return new IncrementOrDecrementExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof FunctionCallPostfixExpressionContext) {
		return new FunctionCallPostfixExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof IncrementOrDecrementUnaryExpressionContext) {
		return new IncrementOrDecrementUnaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof OperatorModifiedUnaryExpressionContext) {
		return new OperatorModifiedUnaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof CastOrConvertExpressionContext) {
		return new CastOrConvertExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof MultiplicativeExpressionContext) {
		return new MultiplicativeExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof AdditiveExpressionContext) {
		return new AdditiveExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof RelationalExpressionContext) {
		return new RelationalExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof EqualityExpressionContext) {
		return new EqualityExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof LogicalAndExpressionContext) {
		return new LogicalAndExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof LogicalOrExpressionContext) {
		return new LogicalOrExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof ConditionalExpressionContext) {
		return new ConditionalExpression(antlrContext, fileCtx);
	} else {
		// Last remaining possible type {@link AssignmentExpression}
		return new AssignmentExpression(antlrContext, fileCtx);
	}
}

/**
 * Expression class, which represents an expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export abstract class Expression extends CompilableParseToken {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: antlrExpressionCtx;

	protected constructor(antlrContext: antlrExpressionCtx, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	abstract compileCtxAndChildren(): Array<string>;

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
		return this._antlrContext;
	}
}

export abstract class ConstantExpression extends Expression {
	/**
	 * The type of the constant expression.
	 */
	public readonly type: KipperType;

	protected constructor(antlrContext: antlrExpressionCtx, fileCtx: KipperProgramContext, type: KipperType) {
		super(antlrContext, fileCtx);
		this.type = type;
	}
}

/**
 *  Integer constant expression class, which represents an integer constant in the kipper language and is compilable
 * using {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class NumberPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: NumberPrimaryExpressionContext;

	public readonly value: number;

	constructor(antlrContext: NumberPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx, "num" as KipperType);
		this._antlrContext = antlrContext;

		// Setting the numeric value
		this.value = +this.sourceCode;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): NumberPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 *  Character constant expression class, which represents an integer constant in the kipper language and is
 * compilable using {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class CharacterPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: CharacterPrimaryExpressionContext;

	/**
	 * The value of this character expression
	 */
	public readonly value: string;

	constructor(antlrContext: CharacterPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx, "char" as KipperType);
		this._antlrContext = antlrContext;

		// Setting the character value
		this.value = this.sourceCode.slice(1, this.sourceCode.length-1);

		// TODO! Add check for length, which forbids empty characters and multi-characters!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): CharacterPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 *  List constant expression class, which represents a list constant in the kipper language and is
 * compilable using {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class ListPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: ListPrimaryExpressionContext;

	constructor(antlrContext: ListPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx, "list" as KipperType);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): ListPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * String class, which represents a string expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class StringPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: StringPrimaryExpressionContext;

	/**
	 * String content of this expression.
	 */
	public readonly stringContent: string;

	constructor(antlrContext: StringPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx, "str" as KipperType);
		this._antlrContext = antlrContext;

		// Get string content for the f-string. Removing start and end character
		this.stringContent = this.sourceCode.slice(1, this.sourceCode.length-1);
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [
			`"${this.stringContent}"`
		];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): StringPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Expression class, which represents an expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class IdentifierPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: IdentifierPrimaryExpressionContext;

	/**
	 * The identifier of this expression.
	 */
	public readonly identifierValue: string;

	constructor(antlrContext: IdentifierPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;

		// Fetching the identifier
		this.identifierValue = this.sourceCode;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): IdentifierPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * F-String class, which represents an f-string expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class FStringPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: FStringPrimaryExpressionContext;

	// TODO! Implement proper f-string value referencing using children expressions

	constructor(antlrContext: FStringPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): FStringPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Tangled expression class, which represents a tangled expression in the kipper language and is compilable
 * using {@link compileCtxAndChildren}.
 *
 * This class may only have children of type {@link CompilableParseToken}, as this expression itself does not
 * compile anything and simply change the order of evaluation.
 * @since 0.0.6
 */
export class TangledPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: TangledPrimaryExpressionContext;

	/**
	 * The private '_children' that actually stores the variable data,
	 * which is returned inside the getter 'children'.
	 * @private
	 */
	protected override readonly _children: Array<CompilableParseToken>;

	constructor(antlrContext: TangledPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
		this._children = [];
	}

	/**
	 * The children of this parse token, which **must** be of type {@link CompilableParseToken}, as this expression
	 * itself does not compile anything and simply change the order of evaluation.
	 */
	get children(): Array<CompilableParseToken> {
		return this._children;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO! Add tests for this
		let genCode: Array<string> = [];
		for (let child of this._children) {
			genCode = genCode.concat(child.compileCtxAndChildren());
		}
		return genCode;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): TangledPrimaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Function call class, which represents a function call expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * call print("Hello world!")
 */
export class IncrementOrDecrementExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: IncrementOrDecrementPostfixExpressionContext;

	constructor(antlrContext: IncrementOrDecrementPostfixExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): IncrementOrDecrementPostfixExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Function call class, which represents a function call expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * call print("Hello world!")
 */
export class ArraySpecifierExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: ArraySpecifierPostfixExpressionContext;

	constructor(antlrContext: ArraySpecifierPostfixExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): ArraySpecifierPostfixExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Function call class, which represents a function call expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * call print("Hello world!")
 */
export class FunctionCallPostfixExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: FunctionCallPostfixExpressionContext;

	constructor(antlrContext: FunctionCallPostfixExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): FunctionCallPostfixExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Increment or decrement expression class, which represents an -- or ++ expression in the kipper language and is
 * compilable using {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * ++4 // 5
 * --61 // 60
 */
export class IncrementOrDecrementUnaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: IncrementOrDecrementUnaryExpressionContext;

	constructor(antlrContext: IncrementOrDecrementUnaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): IncrementOrDecrementUnaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Operator modified unary expression class, which represents a signed (+/-) unary expression in the kipper language
 * and is compilable using {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * -41 // -41
 * +59 // 59
 */
export class OperatorModifiedUnaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: OperatorModifiedUnaryExpressionContext;

	constructor(antlrContext: OperatorModifiedUnaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): OperatorModifiedUnaryExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Convert expression class, which represents a conversion expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * "4" as num // 4
 * 39 as str // "39"
 */
export class CastOrConvertExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: CastOrConvertExpressionContext;

	constructor(antlrContext: CastOrConvertExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): CastOrConvertExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Multiplicative expression class, which represents a multiplicative expression in the kipper language and is
 * compilable using {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * 16 * 6 // 96
 * 12 / 5 // 2.4
 * 96 % 15 // 6
 * 2 ** 8 // 256
 */
export class MultiplicativeExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: MultiplicativeExpressionContext;

	constructor(antlrContext: MultiplicativeExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): MultiplicativeExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Additive expression class, which represents an additive expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * 4 + 4 // 8
 * 9 - 3 // 6
 */
export class AdditiveExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: AdditiveExpressionContext;

	constructor(antlrContext: AdditiveExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): AdditiveExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Relational expression class, which represents a relational expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
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
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: RelationalExpressionContext;

	constructor(antlrContext: RelationalExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): RelationalExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Equality expression class, which represents an equality check expression in the kipper language and is compilable
 * using {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * 4 == 4 // true
 * 9 == 3 // false
 * 32 != 9 // true
 * 59 != 59 // false
 */
export class EqualityExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: EqualityExpressionContext;

	constructor(antlrContext: EqualityExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): EqualityExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Logical-And expression class, which represents a logical-and expression in the kipper language and is compilable
 * using {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * false && false // false
 * true && false // false
 * false && true // false
 * true && true // true
 */
export class LogicalAndExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: LogicalAndExpressionContext;

	constructor(antlrContext: LogicalAndExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): LogicalAndExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Logical-Or expression class, which represents a logical-or expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * false || false // false
 * true || false // true
 * false || true // true
 * true || true // true
 */
export class LogicalOrExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: LogicalOrExpressionContext;

	constructor(antlrContext: LogicalOrExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): LogicalOrExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Conditional expression class, which represents a conditional expression in the kipper language and is compilable
 * using {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * true ? 3 : 4; // 3
 * false ? 3 : 4; // 4
 */
export class ConditionalExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: ConditionalExpressionContext;

	constructor(antlrContext: ConditionalExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): ConditionalExpressionContext {
		return this._antlrContext;
	}
}

/**
 * Assignment expression class, which represents an assignment expression in the kipper language and is compilable
 * using {@link compileCtxAndChildren}.
 * @since 0.0.6
 * @example
 * x = 4
 */
export class AssignmentExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: AssignmentExpressionContext;

	constructor(antlrContext: AssignmentExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): AssignmentExpressionContext {
		return this._antlrContext;
	}
}
