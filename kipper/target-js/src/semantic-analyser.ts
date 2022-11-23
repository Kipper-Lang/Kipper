/**
 * The TypeScript target-specific semantic analyser.
 * @since 0.10.0
 */
import type {
	AdditiveExpression,
	ArraySpecifierExpression,
	AssignmentExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	CompoundStatement,
	ConditionalExpression,
	EqualityExpression,
	ExpressionStatement,
	FStringPrimaryExpression,
	FunctionCallPostfixExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IdentifierTypeSpecifierExpression,
	IncrementOrDecrementPostfixExpression,
	IncrementOrDecrementUnaryExpression,
	JumpStatement,
	ListPrimaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	StringPrimaryExpression,
	SwitchStatement,
	TangledPrimaryExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
} from "@kipper/core";
import {
	DoWhileLoopStatement,
	ForLoopStatement,
	IfStatement,
	KipperTargetSemanticAnalyser,
	ReservedIdentifierOverwriteError,
	ReturnStatement,
	VoidOrNullOrUndefinedPrimaryExpression,
	WhileLoopStatement,
} from "@kipper/core";
import { getJavaScriptBuiltInIdentifier } from "./tools";

/**
 * All reserved identifiers in JavaScript (and TypeScript for good measure) that may not be overwritten.
 * @since 0.10.0
 */
export const reservedIdentifiers: Array<string> = [
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

// Reserved Kipper identifiers (cached)
let reservedKipperIdentifiers: Array<string> = [];
let reservedIdentifiersCached: boolean = false;

/**
 * The TypeScript target-specific semantic analyser.
 * @since 0.10.0
 */
export class JavaScriptTargetSemanticAnalyser extends KipperTargetSemanticAnalyser {
	/**
	 * Checks whether the identifier of the {@link declaration} is viable for the TypeScript target
	 * and does not overwrite any built-in or reserved identifiers.
	 * @param declaration The variable, function or parameter declaration.
	 * @private
	 */
	protected checkViabilityOfIdentifier(declaration: ParameterDeclaration | FunctionDeclaration | VariableDeclaration) {
		const identifier = declaration.getSemanticData().identifier;

		if (!reservedIdentifiersCached) {
			reservedKipperIdentifiers = [
				...declaration.programCtx.internals.map((v) => getJavaScriptBuiltInIdentifier(v.identifier)),
				...declaration.programCtx.builtIns.map((v) => getJavaScriptBuiltInIdentifier(v.identifier)),
			];
		}

		// Throw an error in case the declaration identifier causes issues in TypeScript.
		//
		// Error cases:
		// 1. Identifiers starting with '__' are always reserved and may not be defined.
		// 2. Identifiers may not overwrite TypeScript specific keywords.
		if (reservedKipperIdentifiers.find((i) => i === identifier) || reservedIdentifiers.find((i) => i === identifier)) {
			this.setTracebackData({ ctx: declaration });
			throw this.error(new ReservedIdentifierOverwriteError(identifier));
		}
	}

	/**
	 * Performs typescript-specific semantic analysis for {@link CompoundStatement} instances.
	 */
	compoundStatement = async (node: CompoundStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IfStatement} instances.
	 */
	ifStatement = async (node: IfStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link SwitchStatement} instances.
	 */
	switchStatement = async (node: SwitchStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ExpressionStatement} instances.
	 */
	expressionStatement = async (node: ExpressionStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link DoWhileLoopStatement} instances.
	 */
	doWhileLoopStatement = async (node: DoWhileLoopStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link WhileLoopStatement} instances.
	 */
	whileLoopStatement = async (node: WhileLoopStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ForLoopStatement} instances.
	 */
	forLoopStatement = async (node: ForLoopStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link JumpStatement} instances.
	 */
	jumpStatement = async (node: JumpStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ReturnStatement} instances.
	 */
	returnStatement = async (node: ReturnStatement) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ParameterDeclaration} instances.
	 */
	parameterDeclaration = async (node: ParameterDeclaration) => {
		this.checkViabilityOfIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link FunctionDeclaration} instances.
	 */
	functionDeclaration = async (node: FunctionDeclaration) => {
		this.checkViabilityOfIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	variableDeclaration = async (node: VariableDeclaration) => {
		this.checkViabilityOfIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link NumberPrimaryExpression} instances.
	 */
	numberPrimaryExpression = async (node: NumberPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link ListPrimaryExpression} instances.
	 */
	listPrimaryExpression = async (node: ListPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	identifierPrimaryExpression = async (node: IdentifierPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IdentifierTypeSpecifierExpression} instances.
	 */
	identifierTypeSpecifierExpression = async (node: IdentifierTypeSpecifierExpression) => {};

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
	 * Performs typescript-specific semantic analysis for {@link VoidOrNullOrUndefinedPrimaryExpression} instances.
	 */
	voidOrNullOrUndefinedPrimaryExpression = async (node: VoidOrNullOrUndefinedPrimaryExpression) => {};

	/**
	 * Performs typescript-specific semantic analysis for {@link IncrementOrDecrementPostfixExpression} instances.
	 */
	incrementOrDecrementPostfixExpression = async (node: IncrementOrDecrementPostfixExpression) => {};

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
