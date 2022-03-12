/**
 * Expressions of the kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.6
 */
import { CompilableParseToken } from "./parse-token";
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
	ConstantPrimaryExpressionContext,
	FStringPrimaryExpressionContext,
	FunctionCallExpressionContext,
	IdentifierPrimaryExpressionContext,
	IncrementOrDecrementUnaryExpressionContext,
	OperatorModifiedUnaryExpressionContext,
	ReferenceExpressionContext,
	StringPrimaryExpressionContext,
	TangledPrimaryExpressionContext,
} from "../parser";
import { KipperProgramContext } from "../program-ctx";

/**
 * Every antlr4 expression type
 */
export type antlrExpressionCtx =
	IdentifierPrimaryExpressionContext
	| ConstantPrimaryExpressionContext
	| StringPrimaryExpressionContext
	| FStringPrimaryExpressionContext
	| TangledPrimaryExpressionContext
	| ReferenceExpressionContext
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
	| AssignmentExpressionContext;

/**
 * Fetches the handler for the specified {@link antlrExpressionCtx}.
 * @param antlrContext The context instance that the handler class should be fetched for.
 * @param fileCtx The file context class that will be assigned to the instance.
 */
export function getExpressionInstance(antlrContext: antlrExpressionCtx, fileCtx: KipperProgramContext): Expression {
	if (antlrContext instanceof IdentifierPrimaryExpressionContext) {
		return new IdentifierPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof ConstantPrimaryExpressionContext) {
		return new ConstantPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof StringPrimaryExpressionContext) {
		return new StringPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof FStringPrimaryExpressionContext) {
		return new FStringPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof TangledPrimaryExpressionContext) {
		return new TangledPrimaryExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof ReferenceExpressionContext) {
		return new ReferenceExpression(antlrContext, fileCtx);
	} else if (antlrContext instanceof FunctionCallExpressionContext) {
		return new FunctionCallExpression(antlrContext, fileCtx);
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
export class Expression extends CompilableParseToken {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: antlrExpressionCtx;

	constructor(antlrContext: antlrExpressionCtx, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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

	constructor(antlrContext: IdentifierPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
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
 * Constant expression class, which represents a constant expression in the kipper language and is compilable
 * using {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class ConstantPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: ConstantPrimaryExpressionContext;

	constructor(antlrContext: ConstantPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
		return this._antlrContext;
	}
}

/**
 * String class, which represents a string expression in the kipper language and is compilable using
 * {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class StringPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: StringPrimaryExpressionContext;

	constructor(antlrContext: StringPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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

	constructor(antlrContext: FStringPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
		return this._antlrContext;
	}
}

/**
 * Tangled expression class, which represents a tangled expression in the kipper language and is compilable
 * using {@link compileCtxAndChildren}.
 * @since 0.0.6
 */
export class TangledPrimaryExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: TangledPrimaryExpressionContext;

	constructor(antlrContext: TangledPrimaryExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
		return this._antlrContext;
	}
}

/**
 * Reference expression class, which represents an identifier reference expression in the kipper language and is
 * compilable using {@link compileCtxAndChildren}. This class is always going to be the context parent for the
 * following child classes:
 * - {@link IdentifierPrimaryExpression}
 * - {@link ConstantPrimaryExpression}
 * - {@link StringPrimaryExpression}
 * - {@link FStringPrimaryExpression}
 * - {@link TangledPrimaryExpression}
 * @since 0.0.6
 */
export class ReferenceExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: ReferenceExpressionContext;

	constructor(antlrContext: ReferenceExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
export class FunctionCallExpression extends Expression {
	/**
	 * The private '_antlrContext' that actually stores the variable data,
	 * which is returned inside the getter 'antlrContext'.
	 * @private
	 */
	protected override readonly _antlrContext: FunctionCallExpressionContext;

	constructor(antlrContext: FunctionCallExpressionContext, fileCtx: KipperProgramContext) {
		super(antlrContext, fileCtx);
		this._antlrContext = antlrContext;
	}

	/**
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
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
	 * Generates the typescript for this item, and all children (if they exist).
	 */
	compileCtxAndChildren(): Array<string> {
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	override get antlrContext(): antlrExpressionCtx {
		return this._antlrContext;
	}
}
