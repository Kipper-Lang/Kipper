/**
 * The TypeScript target-specific semantic analyser.
 * @since 0.10.0
 */
import {
	FunctionDeclaration,
	ParameterDeclaration,
	VariableDeclaration,
	KipperTargetSemanticAnalyser,
	ReservedIdentifierOverwriteError,
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
	compoundStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link IfStatement} instances.
	 */
	ifStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link SwitchStatement} instances.
	 */
	switchStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ExpressionStatement} instances.
	 */
	expressionStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link DoWhileLoopStatement} instances.
	 */
	doWhileLoopStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link WhileLoopStatement} instances.
	 */
	whileLoopStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ForLoopStatement} instances.
	 */
	forLoopStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link JumpStatement} instances.
	 */
	jumpStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ReturnStatement} instances.
	 */
	returnStatement = undefined;

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
	numberPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ListPrimaryExpression} instances.
	 */
	listPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	identifierPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link IdentifierTypeSpecifierExpression} instances.
	 */
	identifierTypeSpecifierExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link GenericTypeSpecifierExpression} instances.
	 */
	genericTypeSpecifierExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link TypeofTypeSpecifierExpression} instances.
	 */
	typeofTypeSpecifierExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link StringPrimaryExpression} instances.
	 */
	stringPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link FStringPrimaryExpression} instances.
	 */
	fStringPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link BoolPrimaryExpression} instances.
	 */
	boolPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link TangledPrimaryExpression} instances.
	 */
	tangledPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ArraySpecifierExpression} instances.
	 */
	arraySpecifierExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link VoidOrNullOrUndefinedPrimaryExpression} instances.
	 */
	voidOrNullOrUndefinedPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link IncrementOrDecrementPostfixExpression} instances.
	 */
	incrementOrDecrementPostfixExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link FunctionCallPostfixExpression} instances.
	 */
	functionCallPostfixExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link IncrementOrDecrementUnaryExpression} instances.
	 */
	incrementOrDecrementUnaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link OperatorModifiedUnaryExpression} instances.
	 */
	operatorModifiedUnaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link CastOrConvertExpression} instances.
	 */
	castOrConvertExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link MultiplicativeExpression} instances.
	 */
	multiplicativeExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link AdditiveExpression} instances.
	 */
	additiveExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link RelationalExpression} instances.
	 */
	relationalExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link EqualityExpression} instances.
	 */
	equalityExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link LogicalAndExpression} instances.
	 */
	logicalAndExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link LogicalOrExpression} instances.
	 */
	logicalOrExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ConditionalExpression} instances.
	 */
	conditionalExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link AssignmentExpression} instances.
	 */
	assignmentExpression = undefined;
}
