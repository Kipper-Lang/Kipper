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
import { TargetJS } from "./target";

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
	protected checkViabilityOfIdentifier(
		declaration: ParameterDeclaration | FunctionDeclaration | VariableDeclaration,
	): void {
		const identifier = declaration.getSemanticData().identifier;

		// Throw an error in case the declaration identifier is reserved
		if (
			identifier === TargetJS.internalObjectIdentifier ||
			TargetJS.reservedIdentifiers.find((i) => i === identifier)
		) {
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
	 * Performs typescript-specific semantic analysis for {@link ArrayLiteralPrimaryExpression} instances.
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
	 * Performs typescript-specific semantic analysis for {@link FunctionCallExpression} instances.
	 */
	functionCallExpression = undefined;

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
