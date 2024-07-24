/**
 * The TypeScript target-specific semantic analyser.
 * @since 0.10.0
 */
import type {
	ClassDeclaration,
	ClassMethodDeclaration,
	Declaration,
	FunctionDeclaration,
	InterfaceDeclaration,
	InterfacePropertyDeclaration,
	ParameterDeclaration,
	TargetASTNodeSemanticAnalyser,
	VariableDeclaration,
	InterfaceMethodDeclaration,
} from "@kipper/core";
import { KipperTargetSemanticAnalyser, ReservedIdentifierOverwriteError } from "@kipper/core";
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
	protected checkViabilityOfIdentifier(declaration: Declaration): void {
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
	 * Performs typescript-specific semantic analysis for {@link DoWhileLoopIterationStatement} instances.
	 * @since 0.10.0
	 */
	doWhileLoopIterationStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link WhileLoopIterationStatement} instances.
	 * @since 0.10.0
	 */
	whileLoopIterationStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ForLoopIterationStatement} instances.
	 * @since 0.10.0
	 */
	forLoopIterationStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link JumpStatement} instances.
	 * @since 0.10.0
	 */
	jumpStatement = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ReturnStatement} instances.
	 * @since 0.10.0
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
	 * Performs typescript-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	interfaceDeclaration = async (node: InterfaceDeclaration) => {
		this.checkViabilityOfIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link InterfacePropertyDeclaration} instances.
	 */
	interfacePropertyDeclaration = async (node: InterfacePropertyDeclaration) => {
		this.checkViabilityOfIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link InterfaceMethodDeclaration} instances.
	 */
	interfaceMethodDeclaration = async (node: InterfaceMethodDeclaration) => {
		this.checkViabilityOfIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link VariableDeclaration} instances.
	 */
	classDeclaration = async (node: ClassDeclaration) => {
		this.checkViabilityOfIdentifier(node);
	};

	/**
	 * Performs typescript-specific semantic analysis for {@link classConstructorDeclaration} instances.
	 */
	classConstructorDeclaration = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ClassMethodDeclaration} instances.
	 */
	classMethodDeclaration?: TargetASTNodeSemanticAnalyser<ClassMethodDeclaration> | undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link NumberPrimaryExpression} instances.
	 */
	numberPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ArrayPrimaryExpression} instances.
	 */
	arrayPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ObjectPrimaryExpression} instances.
	 * @since 0.11.0
	 */
	objectPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link ObjectPropertyPrimaryExpression} instances.
	 * @since 0.11.0
	 */
	objectProperty = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link IdentifierPrimaryExpression} instances.
	 */
	identifierPrimaryExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link MemberAccessExpression} instances.
	 * @since 0.10.0
	 */
	memberAccessExpression = undefined;

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
	 * Performs typescript-specific semantic analysis for {@link BitwiseAndExpression} instances.
	 */
	bitwiseAndExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link BitwiseOrExpression} instances.
	 */
	bitwiseOrExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link BitwiseXorExpression} instances.
	 */
	bitwiseXorExpression = undefined;

	/**
	 * Performs typescript-specific semantic analysis for {@link BitwiseShiftExpression} instances.
	 */
	bitwiseShiftExpression = undefined;

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

	/**
	 * Performs typescript-specific semantic analysis for {@link LambdaExpression} instances.
	 */
	lambdaPrimaryExpression = undefined;
}
