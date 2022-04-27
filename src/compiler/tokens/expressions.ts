/**
 * Expressions of the Kipper language.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.1.0
 */
import { CompilableParseToken } from "./parse-token";
import {
	AdditiveExpressionContext,
	ArgumentExpressionListContext,
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
import { UnableToDetermineMetadataError } from "../../errors";

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
	| AssignmentExpressionContext
	| ArgumentExpressionListContext;

/**
 * Fetches the handler for the specified {@link antlrExpressionCtxType}.
 * @param antlrCtx The context instance that the handler class should be fetched for.
 * @param parent The file context class that will be assigned to the instance.
 */
export function getExpressionInstance(antlrCtx: antlrExpressionCtxType, parent: CompilableParseToken): Expression {
	if (antlrCtx instanceof NumberPrimaryExpressionContext) {
		return new NumberPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof CharacterPrimaryExpressionContext) {
		return new CharacterPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof ListPrimaryExpressionContext) {
		return new ListPrimaryExpression(antlrCtx, parent);
	} else if (antlrCtx instanceof IdentifierPrimaryExpressionContext) {
		return new IdentifierPrimaryExpression(antlrCtx, parent);
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
	} else if (antlrCtx instanceof ArgumentExpressionListContext) {
		return new ArgumentExpressionList(antlrCtx, parent);
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
	} else {
		// Last remaining possible type {@link AssignmentExpression}
		return new AssignmentExpression(antlrCtx, parent);
	}
}

/**
 * Expression class, which represents an expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export abstract class Expression extends CompilableParseToken {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: antlrExpressionCtxType;

	protected constructor(antlrCtx: antlrExpressionCtxType, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public abstract translateCtxAndChildren(): Promise<Array<any>>;

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): antlrExpressionCtxType {
		return this._antlrCtx;
	}
}

export abstract class ConstantExpression extends Expression {
	/**
	 * The type of the constant expression.
	 */
	public readonly type: KipperType;

	protected constructor(antlrCtx: antlrExpressionCtxType, parent: CompilableParseToken, type: KipperType) {
		super(antlrCtx, parent);
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: NumberPrimaryExpressionContext;

	public readonly value: number;

	constructor(antlrCtx: NumberPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent, "num" as KipperType);
		this._antlrCtx = antlrCtx;

		// Setting the numeric value
		this.value = +this.sourceCode;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): NumberPrimaryExpressionContext {
		return this._antlrCtx;
	}
}

/**
 *  Character constant expression class, which represents an integer constant in the Kipper language and is
 * compilable using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class CharacterPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: CharacterPrimaryExpressionContext;

	/**
	 * The value of this character expression
	 */
	public readonly value: string;

	constructor(antlrCtx: CharacterPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent, "char" as KipperType);
		this._antlrCtx = antlrCtx;

		// Setting the character value
		this.value = this.sourceCode.slice(1, this.sourceCode.length - 1);

		// TODO! Add check for length, which forbids empty characters and multi-characters!
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): CharacterPrimaryExpressionContext {
		return this._antlrCtx;
	}
}

/**
 *  List constant expression class, which represents a list constant in the Kipper language and is
 * compilable using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class ListPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ListPrimaryExpressionContext;

	constructor(antlrCtx: ListPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent, "list" as KipperType);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ListPrimaryExpressionContext {
		return this._antlrCtx;
	}
}

/**
 * String class, which represents a string expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class StringPrimaryExpression extends ConstantExpression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: StringPrimaryExpressionContext;

	/**
	 * String content of this expression.
	 */
	public readonly stringContent: string;

	constructor(antlrCtx: StringPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent, "str" as KipperType);
		this._antlrCtx = antlrCtx;

		// Get string content for the f-string. Removing start and end character
		this.stringContent = this.sourceCode.slice(1, this.sourceCode.length - 1);
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		return [`"${this.stringContent}"`];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): StringPrimaryExpressionContext {
		return this._antlrCtx;
	}
}

/**
 * Identifier expression class, which represents an identifier in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class IdentifierPrimaryExpression extends Expression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: IdentifierPrimaryExpressionContext;

	/**
	 * The identifier of this expression.
	 */
	public readonly identifierValue: string;

	constructor(antlrCtx: IdentifierPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;

		// Fetching the identifier
		this.identifierValue = this.sourceCode;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		return [this.identifierValue];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): IdentifierPrimaryExpressionContext {
		return this._antlrCtx;
	}
}

/**
 * F-String class, which represents an f-string expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class FStringPrimaryExpression extends Expression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: FStringPrimaryExpressionContext;

	// TODO! Implement proper f-string value referencing using children expressions

	constructor(antlrCtx: FStringPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): FStringPrimaryExpressionContext {
		return this._antlrCtx;
	}
}

/**
 * Tangled expression class, which represents a tangled expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class TangledPrimaryExpression extends Expression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: TangledPrimaryExpressionContext;

	constructor(antlrCtx: TangledPrimaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO! Add tests for this
		let genCode: Array<string> = [];
		for (let child of this._children) {
			genCode = genCode.concat(await child.translateCtxAndChildren());
		}
		return genCode;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): TangledPrimaryExpressionContext {
		return this._antlrCtx;
	}
}

/**
 * Increment or Decrement expression, which represents a singular expression of ++ or --
 * @since 0.1.0
 * @example
 * val++
 * val--
 */
export class IncrementOrDecrementExpression extends Expression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: IncrementOrDecrementPostfixExpressionContext;

	constructor(antlrCtx: IncrementOrDecrementPostfixExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): IncrementOrDecrementPostfixExpressionContext {
		return this._antlrCtx;
	}
}

/**
 * Array Specifier expression, which accesses a list/array based on its index.
 * @since 0.1.0
 * @example
 * array[0]
 */
export class ArraySpecifierExpression extends Expression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ArraySpecifierPostfixExpressionContext;

	constructor(antlrCtx: ArraySpecifierPostfixExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ArraySpecifierPostfixExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: FunctionCallPostfixExpressionContext;

	private readonly identifier: string;

	constructor(antlrCtx: FunctionCallPostfixExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;

		// Set identifier
		this.identifier = this.getMetadata().identifier;
	}

	/**
	 * Fetch the metadata for the function call.
	 * @private
	 */
	private getMetadata(): { identifier: string } {
		// Fetch context instances
		let identifierCtx = <IdentifierPrimaryExpressionContext | undefined>(
			this.antlrCtx.children?.find((val) => val instanceof IdentifierPrimaryExpressionContext)
		);

		// Throw an error if no children or not enough children are present - This should never happen
		if (!this.antlrCtx.children || !identifierCtx) {
			throw new UnableToDetermineMetadataError();
		}

		return {
			identifier: this.tokenStream.getText(identifierCtx.sourceInterval),
		};
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// Assert that the function exists
		this.programCtx.assert(this).functionIsDefined(this.identifier);
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// Get the function
		const func = <BuiltInFunction | ScopeFunctionDeclaration>this.programCtx.getGlobalFunction(this.identifier);

		// Get the arguments
		let argListCtx = <ArgumentExpressionList | undefined>(
			this.children.find((val) => val instanceof ArgumentExpressionList)
		);

		// Add builtin identifier prefix '_kipperGlobal_'
		const identifier = func instanceof ScopeFunctionDeclaration ? func.identifier : `_kipperGlobal_${func.identifier}`;

		// Compile the arguments
		const args: Array<string> = argListCtx ? await argListCtx.translateCtxAndChildren() : [];

		// Return the compiled function call
		return [identifier, "(", ...args, ")"];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): FunctionCallPostfixExpressionContext {
		return this._antlrCtx;
	}
}

/**
 * Argument expression list used inside a function call.
 * @since 0.2.0
 * @example
 * call func( "1", "2", "3" ); // "1", "2", "3" -> ArgumentExpressionList
 */
export class ArgumentExpressionList extends Expression {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ArgumentExpressionListContext;

	constructor(antlrCtx: ArgumentExpressionListContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		let genCode: Array<string> = [];
		for (let child of this.children) {
			genCode = [...genCode, ...(await child.translateCtxAndChildren())];
		}
		return genCode;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: IncrementOrDecrementUnaryExpressionContext;

	constructor(antlrCtx: IncrementOrDecrementUnaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): IncrementOrDecrementUnaryExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: OperatorModifiedUnaryExpressionContext;

	constructor(antlrCtx: OperatorModifiedUnaryExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): OperatorModifiedUnaryExpressionContext {
		return this._antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: CastOrConvertExpressionContext;

	constructor(antlrCtx: CastOrConvertExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): CastOrConvertExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: MultiplicativeExpressionContext;

	constructor(antlrCtx: MultiplicativeExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): MultiplicativeExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: AdditiveExpressionContext;

	constructor(antlrCtx: AdditiveExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): AdditiveExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: RelationalExpressionContext;

	constructor(antlrCtx: RelationalExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): RelationalExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: EqualityExpressionContext;

	constructor(antlrCtx: EqualityExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): EqualityExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: LogicalAndExpressionContext;

	constructor(antlrCtx: LogicalAndExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): LogicalAndExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: LogicalOrExpressionContext;

	constructor(antlrCtx: LogicalOrExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): LogicalOrExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ConditionalExpressionContext;

	constructor(antlrCtx: ConditionalExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ConditionalExpressionContext {
		return this._antlrCtx;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: AssignmentExpressionContext;

	constructor(antlrCtx: AssignmentExpressionContext, parent: CompilableParseToken) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async semanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		// TODO!
		return [];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): AssignmentExpressionContext {
		return this._antlrCtx;
	}
}
