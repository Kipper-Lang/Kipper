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
	KipperAdditiveOperator,
	kipperAdditiveOperators,
	KipperArithmeticOperator,
	KipperCharType,
	KipperListType,
	KipperMultiplicativeOperator,
	kipperMultiplicativeOperators,
	KipperNumType,
	KipperStrType,
	KipperType,
	ScopeFunctionDeclaration,
	TranslatedExpression,
} from "../logic";
import { UnableToDetermineMetadataError } from "../../errors";
import { TargetTokenCodeGenerator } from "../code-generator";
import { TargetTokenSemanticAnalyser } from "../semantic-analyser";
import { TerminalNode } from "antlr4ts/tree";

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
	protected override readonly _antlrRuleCtx: antlrExpressionCtxType;

	protected override _children: Array<Expression<any>>;

	protected constructor(antlrCtx: antlrExpressionCtxType, parent: CompilableParseToken<any>) {
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
 * Abstract core class constant expression representing a constant expression. This type only exists to narrow down the
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: NumberPrimaryExpressionContext;

	constructor(antlrCtx: NumberPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		this.semanticData = {
			value: this.sourceCode,
			type: "num",
		};
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
	protected override readonly _antlrRuleCtx: CharacterPrimaryExpressionContext;

	constructor(antlrCtx: CharacterPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: ListPrimaryExpressionContext;

	constructor(antlrCtx: ListPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: StringPrimaryExpressionContext;

	constructor(antlrCtx: StringPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: IdentifierPrimaryExpressionContext;

	constructor(antlrCtx: IdentifierPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: FStringPrimaryExpressionContext;

	// TODO! Implement proper f-string value referencing using children expressions

	constructor(antlrCtx: FStringPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: TangledPrimaryExpressionContext;

	constructor(antlrCtx: TangledPrimaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: IncrementOrDecrementPostfixExpressionContext;

	constructor(antlrCtx: IncrementOrDecrementPostfixExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: ArraySpecifierPostfixExpressionContext;

	constructor(antlrCtx: ArraySpecifierPostfixExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
export interface FunctionCallPostfixExpressionSemantics {
	/**
	 * The identifier of the function that is called.
	 * @since 0.5.0
	 */
	identifier: string;
	/**
	 * The function that is called.
	 * @since 0.5.0
	 */
	function: BuiltInFunction | ScopeFunctionDeclaration;
}

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
	protected override readonly _antlrRuleCtx: FunctionCallPostfixExpressionContext;

	constructor(antlrCtx: FunctionCallPostfixExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		// Get the identifier of the function that is called
		const identifierSemantics: IdentifierPrimaryExpressionSemantics = this.children[0].ensureSemanticDataExists();
		this.semanticData = {
			identifier: identifierSemantics.identifier,
			// Tries to fetch the function. If it fails throw a {@link UnknownFunctionIdentifier} error.
			function: this.programCtx.assert(this).getExistingFunction(identifierSemantics.identifier),
		};
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
	protected override readonly _antlrRuleCtx: ArgumentExpressionListContext;

	constructor(antlrCtx: ArgumentExpressionListContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	public override get antlrRuleCtx(): ArgumentExpressionListContext {
		return this._antlrRuleCtx;
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
	protected override readonly _antlrRuleCtx: IncrementOrDecrementUnaryExpressionContext;

	constructor(antlrCtx: IncrementOrDecrementUnaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: OperatorModifiedUnaryExpressionContext;

	constructor(antlrCtx: OperatorModifiedUnaryExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: CastOrConvertExpressionContext;

	constructor(antlrCtx: CastOrConvertExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
export interface ArithmeticExpressionSemantics {
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
	 * The private '_antlrCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: MultiplicativeExpressionContext;

	constructor(antlrCtx: MultiplicativeExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const children = this.ensureTokenChildrenExist();

		const operator = children.find((token) => {
			return (
				token instanceof TerminalNode && kipperMultiplicativeOperators.find((op) => op === token.text) !== undefined
			);
		})?.text;

		if (!operator) {
			throw new UnableToDetermineMetadataError();
		}

		this.semanticData = {
			exp1: this.children[0], // First expression
			exp2: this.children[1], // Second expression
			operator: <KipperMultiplicativeOperator>operator,
		};
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
	protected override readonly _antlrRuleCtx: AdditiveExpressionContext;

	constructor(antlrCtx: AdditiveExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
	}

	/**
	 * Semantic analysis for the code inside this parse token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const children = this.ensureTokenChildrenExist();

		const operator = children.find((token) => {
			return token instanceof TerminalNode && kipperAdditiveOperators.find((op) => op === token.text) !== undefined;
		})?.text;

		if (!operator) {
			throw new UnableToDetermineMetadataError();
		}

		this.semanticData = {
			exp1: this.children[0], // First expression
			exp2: this.children[1], // Second expression
			operator: <KipperAdditiveOperator>operator,
		};
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
	protected override readonly _antlrRuleCtx: RelationalExpressionContext;

	constructor(antlrCtx: RelationalExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: EqualityExpressionContext;

	constructor(antlrCtx: EqualityExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: LogicalAndExpressionContext;

	constructor(antlrCtx: LogicalAndExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: LogicalOrExpressionContext;

	constructor(antlrCtx: LogicalOrExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: ConditionalExpressionContext;

	constructor(antlrCtx: ConditionalExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	protected override readonly _antlrRuleCtx: AssignmentExpressionContext;

	constructor(antlrCtx: AssignmentExpressionContext, parent: CompilableParseToken<any>) {
		super(antlrCtx, parent);
		this._antlrRuleCtx = antlrCtx;
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
	public override get antlrRuleCtx(): AssignmentExpressionContext {
		return this._antlrRuleCtx;
	}

	targetSemanticAnalysis: TargetTokenSemanticAnalyser<AssignmentExpression> =
		this.semanticAnalyser.assignmentExpression;
	targetCodeGenerator: TargetTokenCodeGenerator<AssignmentExpression, TranslatedExpression> =
		this.codeGenerator.assignmentExpression;
}
