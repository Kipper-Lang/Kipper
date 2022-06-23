/**
 * The TypeScript target-specific code generator for translating Kipper into TypeScript.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */
import {
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
	IdentifierTypeSpecifierExpression,
	IfStatement,
	IncrementOrDecrementExpression,
	IncrementOrDecrementUnaryExpression,
	IterationStatement,
	JumpStatement,
	KipperTargetCodeGenerator,
	KipperType,
	ListPrimaryExpression,
	LogicalAndExpression,
	LogicalOrExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	ScopeFunctionDeclaration,
	StringPrimaryExpression,
	SwitchStatement,
	TangledPrimaryExpression,
	TranslatedCodeLine,
	TranslatedExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration
} from "../../compiler";
import { getTypeScriptBuiltInIdentifier, getTypeScriptType } from "./tools";
import { getConversionFunctionIdentifier, indentLines } from "../../utils";

function removeBrackets(lines: Array<TranslatedCodeLine>) {
	return lines.slice(1, lines.length - 1);
}

/**
 * The TypeScript target-specific code generator for translating Kipper into TypeScript.
 * @since 0.8.0
 */
export class TypeScriptTargetCodeGenerator extends KipperTargetCodeGenerator {
	/**
	 * Translates a {@link CompoundStatement} into the typescript language.
	 */
	compoundStatement = async (node: CompoundStatement): Promise<Array<TranslatedCodeLine>> => {
		let childCode: Array<TranslatedCodeLine> = [];
		for (let child of node.children) {
			childCode = [...childCode, ...(await child.translateCtxAndChildren())];
		}
		return [["{"], ...indentLines(childCode), ["}"]];
	};

	/**
	 * Translates a {@link IfStatement} into the typescript language.
	 *
	 * Implementation notes:
	 * - This algorithm is indirectly recursive, as else-if statements are handling like else statements with an immediate
	 *   if statement in them.
	 * - The formatting algorithm tries to start at the top and slowly go down each area of the abstract syntax tree.
	 *   First the starting 'if' will be formatted, and afterwards the alternative branches are processed if they exists.
	 *   If they do, it is also formatted like with a regular starting 'if', unless there is another nested if-statement
	 *   in which case it will pass that job down to the child if-statement.
	 * @since 0.9.0
	 */
	ifStatement = async (node: IfStatement): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		// Core items, which will be always present
		let condition = await semanticData.condition.translateCtxAndChildren();
		let statement = await semanticData.statementBody.translateCtxAndChildren();

		if (semanticData.statementBody instanceof CompoundStatement) {
			statement = removeBrackets(statement);
		} else {
			statement = indentLines(statement); // Apply indent to the single statement
		}

		let baseCode = [
			["if", " ", "(", ...condition, ")", " ", "{"],
			...statement, // Statement, which is executed if the first condition is true
			["}", " "],
		];

		// If there is no alternative branch, return with this code
		if (!semanticData.alternativeBranch) {
			return baseCode;
		}

		let secondBranchIsCompoundStatement = semanticData.alternativeBranch instanceof CompoundStatement;
		let secondBranchIsElseIf = semanticData.alternativeBranch instanceof IfStatement;
		let secondBranchIsElse = !secondBranchIsElseIf;
		let secondCondition: Array<string> | null = null;
		let secondBranch: Array<TranslatedCodeLine> | null = null;

		// Evaluate the alternative branch if it exists
		if (semanticData.alternativeBranch) {
			secondBranch = await semanticData.alternativeBranch.translateCtxAndChildren();

			if (secondBranchIsElseIf) {
				// Else if statement
				// Move 'if' condition into the else line -> 'else if (condition)'
				secondCondition = ["else", " ", ...secondBranch[0]];
				secondBranch = secondBranch.slice(1, secondBranch.length);
			} else {
				// Else statement
				secondCondition = ["else"];
			}

			// Format code and remove brackets from compound statements if they exist
			if (secondBranchIsCompoundStatement) {
				secondBranch = removeBrackets(secondBranch);
			} else if (secondBranchIsElse) {
				// If the second branch is else, then the end of this branch of the AST was reached
				secondBranch = indentLines(secondBranch);
			}
		}

		// Return with the second branch added. (Since th	is function calls itself indirectly recursively, there can be as
		// many else-ifs as the user wants.)
		return [
			...baseCode.slice(0, baseCode.length - 1), // Add all lines except the last one that ends the if-statement
			["}", " ", ...(secondCondition ?? []), ...(secondBranchIsCompoundStatement ? [" ", "{"] : [])],
			...(secondBranch ?? []), // Else-if/else statement, which is executed if the second condition is true
			...(secondBranchIsCompoundStatement ? [["}", " "]] : []),
		];
	};

	/**
	 * Translates a {@link SwitchStatement} into the typescript language.
	 *
	 * @since 0.9.0
	 */
	switchStatement = async (node: SwitchStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ExpressionStatement} into the typescript language.
	 */
	expressionStatement = async (node: ExpressionStatement): Promise<Array<TranslatedCodeLine>> => {
		let childCode: Array<TranslatedCodeLine> = [];
		for (let child of node.children) {
			// Expression lists (expression statements) will be evaluated per each expression, meaning every expression
			// can be considered a single line of code.
			childCode = [...childCode, [...(await child.translateCtxAndChildren()), ";"]];
		}
		return childCode;
	};

	/**
	 * Translates a {@link IterationStatement} into the typescript language.
	 */
	iterationStatement = async (node: IterationStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link JumpStatement} into the typescript language.
	 */
	jumpStatement = async (node: JumpStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ParameterDeclaration} into the typescript language.
	 */
	parameterDeclaration = async (node: ParameterDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link FunctionDeclaration} into the typescript language.
	 */
	functionDeclaration = async (node: FunctionDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link VariableDeclaration} into the typescript language.
	 */
	variableDeclaration = async (node: VariableDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		const storage = semanticData.storageType === "const" ? "const" : "let";
		const tsType = getTypeScriptType(semanticData.valueType);
		const assign = semanticData.value ? await semanticData.value.translateCtxAndChildren() : [];

		// Only add ' = EXP' if assignValue is defined
		return [
			[
				storage,
				" ",
				semanticData.identifier,
				":",
				" ",
				tsType,
				...(assign.length > 0 ? [" ", "=", " ", ...assign] : []),
				";",
			],
		];
	};

	/**
	 * Translates a {@link NumberPrimaryExpression} into the typescript language.
	 */
	numberPrimaryExpression = async (node: NumberPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		return [
			semanticData.value, // Simply get the constant value
		];
	};

	/**
	 * Translates a {@link CharacterPrimaryExpression} into the typescript language.
	 */
	characterPrimaryExpression = async (node: CharacterPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link ListPrimaryExpression} into the typescript language.
	 */
	listPrimaryExpression = async (node: ListPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the typescript language.
	 */
	identifierPrimaryExpression = async (node: IdentifierPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		// Get the identifier of the reference
		let identifier = semanticData.identifier;

		// If the identifier is not found in the global scope, assume it's a built-in function and format the identifier
		// accordingly.
		if (!node.programCtx.globalScope.getDeclaration(identifier)) {
			identifier = getTypeScriptBuiltInIdentifier(identifier);
		}

		return [identifier];
	};

	/**
	 * Translates a {@link IdentifierTypeSpecifierExpression} into the typescript language.
	 */
	identifierTypeSpecifierExpression = async (
		node: IdentifierTypeSpecifierExpression,
	): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link GenericTypeSpecifierExpression} into the typescript language.
	 */
	genericTypeSpecifierExpression = async (node: GenericTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link TypeofTypeSpecifierExpression} into the typescript language.
	 */
	typeofTypeSpecifierExpression = async (node: TypeofTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link StringPrimaryExpression} into the typescript language.
	 */
	stringPrimaryExpression = async (node: StringPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		return [`"${semanticData.value}"`];
	};

	/**
	 * Translates a {@link FStringPrimaryExpression} into the typescript language.
	 */
	fStringPrimaryExpression = async (node: FStringPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link BoolPrimaryExpression} into the typescript language.
	 */
	boolPrimaryExpression = async (node: BoolPrimaryExpression): Promise<TranslatedExpression> => {
		return [node.getSemanticData().value];
	};

	/**
	 * Translates a {@link TangledPrimaryExpression} into the typescript language.
	 */
	tangledPrimaryExpression = async (node: TangledPrimaryExpression): Promise<TranslatedExpression> => {
		// Tangled expressions always contain only a single child (Enforced by Parser)
		return ["(", ...(await node.children[0].translateCtxAndChildren()), ")"];
	};

	/**
	 * Translates a {@link ArraySpecifierExpression} into the typescript language.
	 */
	arraySpecifierExpression = async (node: ArraySpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link IncrementOrDecrementExpression} into the typescript language.
	 */
	incrementOrDecrementExpression = async (node: IncrementOrDecrementExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link FunctionCallPostfixExpression} into the typescript language.
	 */
	functionCallPostfixExpression = async (node: FunctionCallPostfixExpression): Promise<TranslatedExpression> => {
		// Get the function and semantic data
		const semanticData = node.getSemanticData();
		const func = node.programCtx.semanticCheck(node).getExistingFunction(semanticData.identifier);

		// Get the proper identifier for the function
		const identifier =
			func instanceof ScopeFunctionDeclaration ? func.identifier : getTypeScriptBuiltInIdentifier(func.identifier);

		// Generate the arguments
		let args: TranslatedExpression = [];
		for (const i of semanticData.args) {
			// Generating the code for each expression and adding a whitespace for primitive formatting
			args = [...args, ...(await i.translateCtxAndChildren()), " "];
		}
		args = args.slice(0, args.length - 1); // Removing last whitespace before ')'

		// Return the compiled function call
		return [identifier, "(", ...args, ")"];
	};

	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into the typescript language.
	 */
	incrementOrDecrementUnaryExpression = async (
		node: IncrementOrDecrementUnaryExpression,
	): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into the typescript language.
	 */
	operatorModifiedUnaryExpression = async (node: OperatorModifiedUnaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link CastOrConvertExpression} into the typescript language.
	 */
	castOrConvertExpression = async (node: CastOrConvertExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		const exp: TranslatedExpression = await semanticData.exp.translateCtxAndChildren();
		const originalType: KipperType = semanticData.exp.getSemanticData().evaluatedType;
		const destType: KipperType = semanticData.type;

		if (originalType === destType) {
			// If both types are the same we will only return the translated expression to avoid useless conversions.
			return exp;
		} else {
			const func: string = getTypeScriptBuiltInIdentifier(getConversionFunctionIdentifier(originalType, destType));
			return [func, "(", ...exp, ")"];
		}
	};

	/**
	 * Translates a {@link MultiplicativeExpression} into the typescript language.
	 */
	multiplicativeExpression = async (node: MultiplicativeExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		const exp1: TranslatedExpression = await semanticData.exp1.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.exp2.translateCtxAndChildren();
		return [...exp1, " ", semanticData.operator, " ", ...exp2];
	};

	/**
	 * Translates a {@link AdditiveExpression} into the typescript language.
	 */
	additiveExpression = async (node: AdditiveExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		const exp1: TranslatedExpression = await semanticData.exp1.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.exp2.translateCtxAndChildren();
		return [...exp1, " ", semanticData.operator, " ", ...exp2];
	};

	/**
	 * Translates a {@link RelationalExpression} into the typescript language.
	 */
	relationalExpression = async (node: RelationalExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link EqualityExpression} into the typescript language.
	 */
	equalityExpression = async (node: EqualityExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link LogicalAndExpression} into the typescript language.
	 */
	logicalAndExpression = async (node: LogicalAndExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link LogicalOrExpression} into the typescript language.
	 */
	logicalOrExpression = async (node: LogicalOrExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link ConditionalExpression} into the typescript language.
	 */
	conditionalExpression = async (node: ConditionalExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link AssignmentExpression} into the typescript language.
	 */
	assignmentExpression = async (node: AssignmentExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		// Get the identifier of the reference
		let identifier = semanticData.identifier.getSemanticData().identifier;

		// If the identifier is not found in the global scope, assume it's a built-in function and format the identifier
		// accordingly.
		if (!node.programCtx.globalScope.getDeclaration(identifier)) {
			identifier = getTypeScriptBuiltInIdentifier(identifier);
		}

		// The expression that is assigned to the reference
		const assignExp = await semanticData.value.translateCtxAndChildren();

		// Only add ' = EXP' if assignExpression is defined
		return [identifier, " ", "=", " ", ...assignExp];
	};
}
