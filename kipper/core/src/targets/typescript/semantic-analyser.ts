/**
 * The TypeScript target-specific semantic analyser.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import type {
	AdditiveExpression,
	ArraySpecifierExpression,
	AssignmentExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	CharacterPrimaryExpression,
	CompoundStatement,
	ConditionalExpression,
	EqualityExpression,
	ExpressionStatement,
	FStringPrimaryExpression,
	FunctionCallPostfixExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IncrementOrDecrementExpression,
	IncrementOrDecrementUnaryExpression,
	IterationStatement,
	JumpStatement,
	ListPrimaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	SelectionStatement,
	SingleTypeSpecifierExpression,
	StringPrimaryExpression,
	TangledPrimaryExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
} from "../../compiler";
import { KipperTargetSemanticAnalyser } from "../../compiler";
import { ReservedIdentifierOverwriteError } from "../../errors";

/**
 * All reserved identifiers in TypeScript that may not be overwritten.
 * @since 0.8.0
 */
export const tsReservedIdentifiers: Array<string> = [
	"break",
	"case",
	"catch",
	"class",
	"const",
	"continue",
	"debugger",
	"default",
	"delete",
	"do",
	"else",
	"enum",
	"export",
	"extends",
	"false",
	"finally",
	"for",
	"function",
	"if",
	"import",
	"in",
	"instanceof",
	"new",
	"null",
	"return",
	"super",
	"switch",
	"this",
	"throw",
	"true",
	"try",
	"typeof",
	"var",
	"void",
	"while",
	"with",
	"as",
	"implements",
	"interface",
	"let",
	"package",
	"private",
	"protected",
	"public",
	"static",
	"yield",
	"any",
	"boolean",
	"constructor",
	"declare",
	"get",
	"module",
	"require",
	"number",
	"set",
	"string",
	"symbol",
	"type",
	"from",
	"of",
];

/**
 * The TypeScript target-specific semantic analyser.
 * @since 0.8.0
 */
export class TypeScriptTargetSemanticAnalyser extends KipperTargetSemanticAnalyser {
	private checkIdentifier(declaration: ParameterDeclaration | FunctionDeclaration | VariableDeclaration) {
		const identifier = declaration.getSemanticData().identifier;

		// Throw an error in case the declaration identifier causes issues in TypeScript.
		//
		// Error cases:
		// 1. Identifiers starting with '__' are always reserved and may not be defined.
		// 2. Identifiers may not overwrite TypeScript specific keywords.
		if (identifier.startsWith("__") || tsReservedIdentifiers.find((r) => r === identifier)) {
			this.setTracebackData({ ctx: declaration });
			throw this.error(new ReservedIdentifierOverwriteError(identifier));
		}
	}

	/**
	 * Performs typescript-specific semantic analysis for {@link CompoundStatement} instances.
	 */
	compoundStatement = async (node: CompoundStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link SelectionStatement} instances.
	 */
	selectionStatement = async (node: SelectionStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ExpressionStatement} instances.
	 */
	expressionStatement = async (node: ExpressionStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IterationStatement} instances.
	 */
	iterationStatement = async (node: IterationStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link JumpStatement} instances.
	 */
	jumpStatement = async (node: JumpStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ParameterDeclaration} instances.
	 */
	parameterDeclaration = async (node: ParameterDeclaration) => {
		this.checkIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link FunctionDeclaration} instances.
	 */
	functionDeclaration = async (node: FunctionDeclaration) => {
		this.checkIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	variableDeclaration = async (node: VariableDeclaration) => {
		this.checkIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link NumberPrimaryExpression} instances.
	 */
	numberPrimaryExpression = async (node: NumberPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link CharacterPrimaryExpression} instances.
	 */
	characterPrimaryExpression = async (node: CharacterPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ListPrimaryExpression} instances.
	 */
	listPrimaryExpression = async (node: ListPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	identifierPrimaryExpression = async (node: IdentifierPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link SingleTypeSpecifierExpression} instances.
	 */
	singleTypeSpecifierExpression = async (node: SingleTypeSpecifierExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link GenericTypeSpecifierExpression} instances.
	 */
	genericTypeSpecifierExpression = async (node: GenericTypeSpecifierExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link TypeofTypeSpecifierExpression} instances.
	 */
	typeofTypeSpecifierExpression = async (node: TypeofTypeSpecifierExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link StringPrimaryExpression} instances.
	 */
	stringPrimaryExpression = async (node: StringPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link FStringPrimaryExpression} instances.
	 */
	fStringPrimaryExpression = async (node: FStringPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link BoolPrimaryExpression} instances.
	 */
	boolPrimaryExpression = async (node: BoolPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link TangledPrimaryExpression} instances.
	 */
	tangledPrimaryExpression = async (node: TangledPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ArraySpecifierExpression} instances.
	 */
	arraySpecifierExpression = async (node: ArraySpecifierExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IncrementOrDecrementExpression} instances.
	 */
	incrementOrDecrementExpression = async (node: IncrementOrDecrementExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link FunctionCallPostfixExpression} instances.
	 */
	functionCallPostfixExpression = async (node: FunctionCallPostfixExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IncrementOrDecrementUnaryExpression} instances.
	 */
	incrementOrDecrementUnaryExpression = async (node: IncrementOrDecrementUnaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link OperatorModifiedUnaryExpression} instances.
	 */
	operatorModifiedUnaryExpression = async (node: OperatorModifiedUnaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link CastOrConvertExpression} instances.
	 */
	castOrConvertExpression = async (node: CastOrConvertExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link MultiplicativeExpression} instances.
	 */
	multiplicativeExpression = async (node: MultiplicativeExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link AdditiveExpression} instances.
	 */
	additiveExpression = async (node: AdditiveExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link RelationalExpression} instances.
	 */
	relationalExpression = async (node: RelationalExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link EqualityExpression} instances.
	 */
	equalityExpression = async (node: EqualityExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link LogicalAndExpression} instances.
	 */
	logicalAndExpression = async (node: LogicalAndExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link LogicalOrExpression} instances.
	 */
	logicalOrExpression = async (node: LogicalOrExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ConditionalExpression} instances.
	 */
	conditionalExpression = async (node: ConditionalExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link AssignmentExpression} instances.
	 */
	assignmentExpression = async (node: AssignmentExpression) => {};
}
