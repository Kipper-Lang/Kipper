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
import {
	BuiltInFunction,
	KipperCharType,
	KipperListType,
	KipperNumType,
	KipperStrType,
	KipperType,
	ScopeFunctionDeclaration,
	TranslatedExpression,
} from "../logic";
import { UnableToDetermineMetadataError } from "../../errors";
import { TargetTokenCodeGenerator } from "../code-generator";
import { TargetTokenSemanticAnalyser } from "../semantic-analyser";

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
export function getExpressionInstance(
	antlrCtx: antlrExpressionCtxType,
	parent: CompilableParseToken<any>,
): Expression<any> {
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
		return new ArgumentExpressionListExpression(antlrCtx, parent);
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
export abstract class Expression<Semantics> extends CompilableParseToken<Semantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: antlrExpressionCtxType;

	protected override _children: Array<Expression<any>>;

	protected constructor(antlrCtx: antlrExpressionCtxType, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
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
	public override get antlrCtx(): antlrExpressionCtxType {
		return this._antlrCtx;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		return await this.targetCodeGenerator(this);
	}

	public abstract targetCodeGenerator: TargetTokenCodeGenerator<any, TranslatedExpression>;
}

/**
 * Semantics for {@link ConstantExpression}.
 * @since 0.5.0
 */
export interface ConstantExpressionSemantics {
	/**
	 * The type of the constant expression.
	 * @since 0.5.0
	 */
	type: KipperType;
	/**
	 * The value of the constant expression. This is usually either a {@link String} or {@link Number}.
	 * @since 0.5.0
	 */
	value: any;
}

/**
 * Abstract base class constant expression representing a constant expression. This type only exists to narrow down the
 * generic type.
 */
export abstract class ConstantExpression<Semantics extends ConstantExpressionSemantics> extends Expression<Semantics> {}

/**
 * Semantics for {@link NumberPrimaryExpression}.
 * @since 0.5.0
 */
export interface NumberPrimaryExpressionSemantics {
	/**
	 * The type of the constant expression.
	 * @since 0.5.0
	 */
	type: KipperNumType;
	/**
	 * The value of the constant number expression.
	 * @since 0.5.0
	 */
	value: number;
}

/**
 * Integer constant expression class, which represents an integer constant in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class NumberPrimaryExpression extends ConstantExpression<NumberPrimaryExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: NumberPrimaryExpressionContext;

	constructor(antlrCtx: NumberPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			value: +this.sourceCode,
			type: "num",
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): NumberPrimaryExpressionContext {
		return this._antlrCtx;
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
export interface CharacterPrimaryExpressionSemantics {
	/**
	 * The type of the constant character expression.
	 * @since 0.5.0
	 */
	type: KipperCharType;
	/**
	 * The value of the constant character expression.
	 * @since 0.5.0
	 */
	value: string;
}

/**
 * Character constant expression class, which represents an integer constant in the Kipper language.
 * @since 0.1.0
 */
export class CharacterPrimaryExpression extends ConstantExpression<CharacterPrimaryExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: CharacterPrimaryExpressionContext;

	constructor(antlrCtx: CharacterPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			value: this.sourceCode.slice(1, this.sourceCode.length - 1),
			type: "char",
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): CharacterPrimaryExpressionContext {
		return this._antlrCtx;
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
export interface ListPrimaryExpressionSemantics {
	/**
	 * The type of the constant list expression.
	 * @since 0.5.0
	 */
	type: KipperListType<KipperType>;
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ListPrimaryExpressionContext;

	constructor(antlrCtx: ListPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			type: "list",
			value: [], // TODO! Implement list data fetching.
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ListPrimaryExpressionContext {
		return this._antlrCtx;
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
export interface StringPrimaryExpressionSemantics {
	/**
	 * The type of the constant string expression.
	 * @since 0.5.0
	 */
	type: KipperStrType;
	/**
	 * The value of the constant string expression.
	 * @since 0.5.0
	 */
	value: string;
}

/**
 * String class, which represents a string expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class StringPrimaryExpression extends ConstantExpression<StringPrimaryExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: StringPrimaryExpressionContext;

	constructor(antlrCtx: StringPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			type: "str",
			value: this.sourceCode.slice(1, this.sourceCode.length - 1),
		};
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		this.semanticData = this.ensureSemanticDataExists();

		return [`"${this.semanticData.value}"`];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): StringPrimaryExpressionContext {
		return this._antlrCtx;
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
export interface IdentifierPrimaryExpressionSemantics {
	/**
	 * The constant identifier.
	 * @since 0.5.0
	 */
	identifier: string;
}

/**
 * Identifier expression class, which represents an identifier in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class IdentifierPrimaryExpression extends Expression<IdentifierPrimaryExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: IdentifierPrimaryExpressionContext;

	constructor(antlrCtx: IdentifierPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			identifier: this.sourceCode,
		};
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 *
	 * Every item in the array represents a token of the expression.
	 */
	public async translateCtxAndChildren(): Promise<Array<string>> {
		this.semanticData = this.ensureSemanticDataExists();

		return [this.semanticData.identifier];
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): IdentifierPrimaryExpressionContext {
		return this._antlrCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<IdentifierPrimaryExpression> =
		this.semanticAnalyser.identifierPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<IdentifierPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.identifierPrimaryExpression;
}

/**
 * Semantics for {@link FStringPrimaryExpression}.
 * @since 0.5.0
 */
export interface FStringPrimaryExpressionSemantics {
	/**
	 * Returns the items of the f-strings, where each item represents one section of a string. The section may either be
	 * a {@link String constant string} or {@link Expression evaluable runtime expression}.
	 * @since 0.5.0
	 */
	items: Array<string | Expression<any>>;
}

/**
 * F-String class, which represents an f-string expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class FStringPrimaryExpression extends Expression<FStringPrimaryExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: FStringPrimaryExpressionContext;

	// TODO! Implement proper f-string value referencing using children expressions

	constructor(antlrCtx: FStringPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			items: [], // TODO! Implement proper fetching of the string items and expressions contained in the f-string
		};
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): FStringPrimaryExpressionContext {
		return this._antlrCtx;
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
export interface TangledPrimaryExpressionSemantics {}

/**
 * Tangled expression class, which represents a tangled expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}.
 * @since 0.1.0
 */
export class TangledPrimaryExpression extends Expression<TangledPrimaryExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: TangledPrimaryExpressionContext;

	constructor(antlrCtx: TangledPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
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

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<TangledPrimaryExpression> =
		this.semanticAnalyser.tangledPrimaryExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<TangledPrimaryExpression, TranslatedExpression> =
		this.codeGenerator.tangledPrimaryExpression;
}

/**
 * Semantics for {@link IncrementOrDecrementExpression}.
 * @since 0.5.0
 */
export interface IncrementOrDecrementExpressionSemantics {}

/**
 * Increment or Decrement expression,  which represents a left-side -- or ++ expression in the Kipper language.
 * @since 0.1.0
 * @example
 * val++
 * val--
 */
export class IncrementOrDecrementExpression extends Expression<IncrementOrDecrementExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: IncrementOrDecrementPostfixExpressionContext;

	constructor(antlrCtx: IncrementOrDecrementPostfixExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): IncrementOrDecrementPostfixExpressionContext {
		return this._antlrCtx;
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
export interface ArraySpecifierExpressionSemantics {}

/**
 * Array Specifier expression, which accesses a list/array based on its index.
 * @since 0.1.0
 * @example
 * array[0]
 */
export class ArraySpecifierExpression extends Expression<ArraySpecifierExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ArraySpecifierPostfixExpressionContext;

	constructor(antlrCtx: ArraySpecifierPostfixExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ArraySpecifierPostfixExpressionContext {
		return this._antlrCtx;
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
export interface FunctionCallPostfixExpressionSemantics {}

/**
 * Function call class, which represents a function call expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * call print("Hello world!")
 */
export class FunctionCallPostfixExpression extends Expression<FunctionCallPostfixExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: FunctionCallPostfixExpressionContext;

	private readonly identifier: string;

	constructor(antlrCtx: FunctionCallPostfixExpressionContext, parent: CompilableParseToken<any>) {
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
	public async primarySemanticAnalysis(): Promise<void> {
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
		let argListCtx = <ArgumentExpressionListExpression | undefined>(
			this.children.find((val) => val instanceof ArgumentExpressionListExpression)
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

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<FunctionCallPostfixExpression> =
		this.semanticAnalyser.functionCallPostfixExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<FunctionCallPostfixExpression, TranslatedExpression> =
		this.codeGenerator.functionCallPostfixExpression;
}

/**
 * Semantics for {@link ArgumentExpressionListExpression}.
 * @since 0.5.0
 */
export interface ArgumentExpressionListExpressionSemantics {}

/**
 * Argument expression list used inside a function call.
 * @since 0.2.0
 * @example
 * call func( "1", "2", "3" ); // "1", "2", "3" -> ArgumentExpressionList
 */
export class ArgumentExpressionListExpression extends Expression<ArgumentExpressionListExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ArgumentExpressionListContext;

	constructor(antlrCtx: ArgumentExpressionListContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
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

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ArgumentExpressionListContext {
		return this._antlrCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<ArgumentExpressionListExpression> =
		this.semanticAnalyser.argumentExpressionList;
	targetCodeGenerator: TargetTokenCodeGenerator<ArgumentExpressionListExpression, TranslatedExpression> =
		this.codeGenerator.argumentExpressionList;
}

/**
 * Semantics for {@link IncrementOrDecrementUnaryExpression}.
 * @since 0.5.0
 */
export interface IncrementOrDecrementUnaryExpressionSemantics {}

/**
 * Increment or decrement expression class, which represents a left-side -- or ++ expression in the Kipper language.
 * @since 0.1.0
 * @example
 * ++4 // 5
 * --61 // 60
 */
export class IncrementOrDecrementUnaryExpression extends Expression<IncrementOrDecrementUnaryExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: IncrementOrDecrementUnaryExpressionContext;

	constructor(antlrCtx: IncrementOrDecrementUnaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): IncrementOrDecrementUnaryExpressionContext {
		return this._antlrCtx;
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
export interface OperatorModifiedUnaryExpressionSemantics {}

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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: OperatorModifiedUnaryExpressionContext;

	constructor(antlrCtx: OperatorModifiedUnaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): OperatorModifiedUnaryExpressionContext {
		return this._antlrCtx;
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
export interface CastOrConvertExpressionSemantics {}

/**
 * Convert expression class, which represents a conversion expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * "4" as num // 4
 * 39 as str // "39"
 */
export class CastOrConvertExpression extends Expression<CastOrConvertExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: CastOrConvertExpressionContext;

	constructor(antlrCtx: CastOrConvertExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): CastOrConvertExpressionContext {
		return this._antlrCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<CastOrConvertExpression> =
		this.semanticAnalyser.castOrConvertExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<CastOrConvertExpression, TranslatedExpression> =
		this.codeGenerator.castOrConvertExpression;
}

/**
 * Semantics for {@link MultiplicativeExpression}.
 * @since 0.5.0
 */
export interface MultiplicativeExpressionSemantics {}

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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: MultiplicativeExpressionContext;

	constructor(antlrCtx: MultiplicativeExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): MultiplicativeExpressionContext {
		return this._antlrCtx;
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
export interface AdditiveExpressionSemantics {}

/**
 * Additive expression class, which represents an additive expression in the Kipper language and is compilable using
 * {@link translateCtxAndChildren}.
 * @since 0.1.0
 * @example
 * 4 + 4 // 8
 * 9 - 3 // 6
 */
export class AdditiveExpression extends Expression<AdditiveExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: AdditiveExpressionContext;

	constructor(antlrCtx: AdditiveExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): AdditiveExpressionContext {
		return this._antlrCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<AdditiveExpression> = this.semanticAnalyser.additiveExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<AdditiveExpression, TranslatedExpression> =
		this.codeGenerator.additiveExpression;
}

/**
 * Semantics for {@link RelationalExpression}.
 * @since 0.5.0
 */
export interface RelationalExpressionSemantics {}

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
export class RelationalExpression extends Expression<RelationalExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: RelationalExpressionContext;

	constructor(antlrCtx: RelationalExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): RelationalExpressionContext {
		return this._antlrCtx;
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
export interface EqualityExpressionSemantics {}

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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: EqualityExpressionContext;

	constructor(antlrCtx: EqualityExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): EqualityExpressionContext {
		return this._antlrCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<EqualityExpression> = this.semanticAnalyser.equalityExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<EqualityExpression, TranslatedExpression> =
		this.codeGenerator.equalityExpression;
}

/**
 * Semantics for {@link LogicalAndExpression}.
 * @since 0.5.0
 */
export interface LogicalAndExpressionSemantics {}

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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: LogicalAndExpressionContext;

	constructor(antlrCtx: LogicalAndExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): LogicalAndExpressionContext {
		return this._antlrCtx;
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
export interface LogicalOrExpressionSemantics {}

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
export class LogicalOrExpression extends Expression<LogicalOrExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: LogicalOrExpressionContext;

	constructor(antlrCtx: LogicalOrExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): LogicalOrExpressionContext {
		return this._antlrCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<LogicalOrExpression> = this.semanticAnalyser.logicalOrExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<LogicalOrExpression, TranslatedExpression> =
		this.codeGenerator.logicalOrExpression;
}

/**
 * Semantics for {@link ConditionalExpression}.
 * @since 0.5.0
 */
export interface ConditionalExpressionSemantics {}

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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: ConditionalExpressionContext;

	constructor(antlrCtx: ConditionalExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): ConditionalExpressionContext {
		return this._antlrCtx;
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
export interface AssignmentExpressionSemantics {}

/**
 * Assignment expression class, which represents an assignment expression in the Kipper language and is compilable
 * using {@link translateCtxAndChildren}. This class only represents assigning a value, but not declaring it!
 * @since 0.1.0
 * @example
 * x = 4
 */
export class AssignmentExpression extends Expression<AssignmentExpressionSemantics> {
	/**
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrCtx: AssignmentExpressionContext;

	constructor(antlrCtx: AssignmentExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// TODO!
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrCtx(): AssignmentExpressionContext {
		return this._antlrCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<AssignmentExpression> =
		this.semanticAnalyser.assignmentExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<AssignmentExpression, TranslatedExpression> =
		this.codeGenerator.assignmentExpression;
}
