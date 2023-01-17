/**
 * The JavaScript target-specific code generator for translating Kipper code into JavaScript.
 * @since 0.10.0
 */
import type {
	ComparativeExpressionSemantics,
	ExpressionSemantics,
	ExpressionTypeSemantics,
	LogicalExpressionSemantics,
	TranslatedCodeLine,
	TranslatedExpression,
	AdditiveExpression,
	AssignmentExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	ComparativeExpression,
	ConditionalExpression,
	EqualityExpression,
	Expression,
	ExpressionStatement,
	FStringPrimaryExpression,
	FunctionCallExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IdentifierTypeSpecifierExpression,
	IncrementOrDecrementPostfixExpression,
	IncrementOrDecrementUnaryExpression,
	JumpStatement,
	KipperProgramContext,
	ArrayLiteralPrimaryExpression,
	LogicalAndExpression,
	LogicalExpression,
	LogicalOrExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	ReturnStatement,
	StringPrimaryExpression,
	SwitchStatement,
	TangledPrimaryExpression,
	TypeofTypeSpecifierExpression,
	VariableDeclaration,
} from "@kipper/core";
import {
	BracketNotationMemberAccessExpression,
	CompoundStatement,
	DotNotationMemberAccessExpression,
	DoWhileLoopStatement,
	ForLoopStatement,
	getConversionFunctionIdentifier,
	IfStatement,
	KipperTargetCodeGenerator,
	ScopeDeclaration,
	ScopeFunctionDeclaration,
	VoidOrNullOrUndefinedPrimaryExpression,
	WhileLoopStatement,
} from "@kipper/core";
import {
	createJSFunctionSignature,
	getJavaScriptBuiltInIdentifier,
	getJSFunctionSignature,
	indentLines,
	removeBraces,
} from "./tools";
import { version } from "./index";

function removeBrackets(lines: Array<TranslatedCodeLine>) {
	return lines.slice(1, lines.length - 1);
}

/**
 * The JavaScript target-specific code generator for translating Kipper code into JavaScript.
 * @since 0.10.0
 */
export class JavaScriptTargetCodeGenerator extends KipperTargetCodeGenerator {
	/**
	 * Code generation function, which is called at the start of a translation and generates
	 * the dependencies for a file in the target language.
	 *
	 * This should be only used to set up a Kipper file in the target language and not as a
	 * replacement to {@link KipperTargetBuiltInGenerator}.
	 * @since 0.10.0
	 */
	setUp = async (programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>> => {
		return [
			[`/* Generated from '${programCtx.fileName}' by the Kipper Compiler v${version} */`],
			// Always enable strict mode when using Kipper
			['"use strict"', ";"],
			// Determine the global scope in the JS execution environment
			["// @ts-ignore"],
			[
				'var __kipperGlobalScope = typeof __kipperGlobalScope !== "undefined" ? __kipperGlobalScope : typeof' +
					' globalThis !== "undefined" ?' +
					" globalThis : typeof" +
					' window !== "undefined" ?' +
					' window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {}',
				";",
			],
			// Create global kipper object - Always prefer the global '__kipper' instance
			["// @ts-ignore"],
			["var __kipper = __kipperGlobalScope.__kipper = __kipperGlobalScope.__kipper || __kipper || {}", ";"],
		];
	};

	/**
	 * Code generation function, which is called at the end of a translation and should wrap
	 * up a program in the target language.
	 *
	 * This should be only used to add additional items to finish a Kipper file in the target
	 * language and not as a replacement to {@link KipperTargetBuiltInGenerator}.
	 * @since 0.10.0
	 */
	wrapUp = async (programCtx: KipperProgramContext): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link CompoundStatement} into the JavaScript language.
	 */
	compoundStatement = async (node: CompoundStatement): Promise<Array<TranslatedCodeLine>> => {
		let blockItem: Array<TranslatedCodeLine> = [];
		for (let child of node.children) {
			const childCode = await child.translateCtxAndChildren();
			blockItem = blockItem.concat(childCode);
		}
		return [["{"], ...indentLines(blockItem), ["}"]];
	};

	/**
	 * Translates a {@link IfStatement} into the JavaScript language.
	 *
	 * Implementation notes:
	 * - This algorithm is indirectly recursive, as else-if statements are handling like else statements with an immediate
	 *   if statement in them.
	 * - The formatting algorithm tries to start at the top and slowly go down each area of the abstract syntax tree.
	 *   First the starting 'if' will be formatted, and afterwards the alternative branches are processed if they exists.
	 *   If they do, it is also formatted like with a regular starting 'if', unless there is another nested if-statement
	 *   in which case it will pass that job down to the child if-statement.
	 * @since 0.10.0
	 */
	ifStatement = async (node: IfStatement): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		// Core items, which will be always present
		let condition = await semanticData.condition.translateCtxAndChildren();
		let statement = await semanticData.ifBranch.translateCtxAndChildren();

		if (semanticData.ifBranch instanceof CompoundStatement) {
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
		if (!semanticData.elseBranch) {
			return baseCode;
		}

		let secondBranchIsCompoundStatement = semanticData.elseBranch instanceof CompoundStatement;
		let secondBranchIsElseIf = semanticData.elseBranch instanceof IfStatement;
		let secondBranchIsElse = !secondBranchIsElseIf;
		let secondCondition: Array<string> | null = null;
		let secondBranch: Array<TranslatedCodeLine> | null = null;

		// Evaluate the alternative branch if it exists
		if (semanticData.elseBranch) {
			secondBranch = await semanticData.elseBranch.translateCtxAndChildren();

			if (secondBranchIsElseIf) {
				// Else if statement
				// Move 'if' condition into the else line -> 'else if (condition)'
				secondCondition = ["else", " ", ...secondBranch[0]];
				secondBranch = secondBranch.slice(1, secondBranch.length);
			} else {
				// Else statement
				secondCondition = ["else"];
			}

			if (secondBranchIsCompoundStatement) {
				// Format code and remove brackets from compound statements if they exist
				secondBranch = removeBrackets(secondBranch);
			} else if (secondBranchIsElse) {
				// If the second branch is else, then the end of this branch of the AST was reached
				secondBranch = indentLines(secondBranch);
			}
		}

		// Return with the second branch added. (Since the function calls itself indirectly recursively, there can be as
		// many else-ifs as the user wants.)
		return [
			...baseCode.slice(0, baseCode.length - 1), // Add all lines except the last one that ends the if-statement
			["}", " ", ...(secondCondition ?? []), ...(secondBranchIsCompoundStatement ? [" ", "{"] : [])],
			...(secondBranch ?? []), // Else-if/else statement, which is executed if the second condition is true
			...(secondBranchIsCompoundStatement ? [["}", " "]] : []),
		];
	};

	/**
	 * Translates a {@link SwitchStatement} into the JavaScript language.
	 *
	 * @since 0.10.0
	 */
	switchStatement = async (node: SwitchStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ExpressionStatement} into the JavaScript language.
	 */
	expressionStatement = async (node: ExpressionStatement): Promise<Array<TranslatedCodeLine>> => {
		let exprCode: Array<TranslatedCodeLine> = [];
		for (let child of node.children) {
			// Expression lists (expression statements) will be evaluated per each expression, meaning every expression
			// can be considered a single line of code.
			const childCode = await child.translateCtxAndChildren();
			exprCode.push(childCode.concat(";"));
		}
		return exprCode;
	};

	/**
	 * Translates a {@link DoWhileLoopStatement} into the JavaScript language.
	 * @since 0.10.0
	 */
	doWhileLoopStatement = async (node: DoWhileLoopStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link WhileLoopStatement} into the JavaScript language.
	 * @since 0.10.0
	 */
	whileLoopStatement = async (node: WhileLoopStatement): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const condition = await semanticData.loopCondition.translateCtxAndChildren();
		const statement = await semanticData.loopBody.translateCtxAndChildren();

		// Check whether the loop body is a compound statement
		const isCompound = semanticData.loopBody instanceof CompoundStatement;

		return [
			["while", " ", "(", ...condition, ")", " ", isCompound ? "{" : ""],
			...(isCompound ? removeBraces(statement) : indentLines(statement)),
			[isCompound ? "}" : ""],
		];
	};

	/**
	 * Translates a {@link ForLoopStatement} into the JavaScript language.
	 * @since 0.10.0
	 */
	forLoopStatement = async (node: ForLoopStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link JumpStatement} into the JavaScript language.
	 */
	jumpStatement = async (node: JumpStatement): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ReturnStatement} into the JavaScript language.
	 * @since 0.10.0
	 */
	returnStatement = async (node: ReturnStatement): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const returnValue = await semanticData.returnValue?.translateCtxAndChildren();

		return [["return", ...(returnValue ? [" ", ...returnValue] : []), ";"]];
	};

	/**
	 * Translates a {@link ParameterDeclaration} into the JavaScript language.
	 */
	parameterDeclaration = async (node: ParameterDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link FunctionDeclaration} into the JavaScript language.
	 */
	functionDeclaration = async (node: FunctionDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		// Function signature and body
		const signature = getJSFunctionSignature(node);
		const functionBody = await semanticData.functionBody.translateCtxAndChildren();

		// Define the function signature and its body. We will simply use 'console.log(msg)' for printing out IO.
		return [[createJSFunctionSignature(signature)], ...functionBody];
	};

	/**
	 * Translates a {@link VariableDeclaration} into the JavaScript language.
	 */
	variableDeclaration = async (node: VariableDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		const storage = semanticData.storageType === "const" ? "const" : "let";
		const assign = semanticData.value ? await semanticData.value.translateCtxAndChildren() : [];

		// Only add ' = EXP' if assignValue is defined
		return [[storage, " ", semanticData.identifier, ...(assign.length > 0 ? [" ", "=", " ", ...assign] : []), ";"]];
	};

	/**
	 * Translates a {@link NumberPrimaryExpression} into the JavaScript language.
	 */
	numberPrimaryExpression = async (node: NumberPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		return [
			semanticData.value, // Simply get the constant value
		];
	};

	/**
	 * Translates a {@link ArrayLiteralPrimaryExpression} into the JavaScript language.
	 */
	arrayLiteralExpression = async (node: ArrayLiteralPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the JavaScript language.
	 */
	identifierPrimaryExpression = async (node: IdentifierPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		let identifier: string = semanticData.identifier;

		// If the identifier is not declared by the user, assume it's a built-in function and format the identifier
		// accordingly.
		if (!(semanticData.ref.refTarget instanceof ScopeDeclaration)) {
			identifier = getJavaScriptBuiltInIdentifier(identifier);
		}
		return [identifier];
	};

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the JavaScript language.
	 * @since 0.10.0
	 */
	dotNotationMemberAccessExpression = async (
		node: DotNotationMemberAccessExpression,
	): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const object = await semanticData.object.translateCtxAndChildren();
		const member = await semanticData.member.translateCtxAndChildren();

		return [...object, ".", ...member];
	};

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the JavaScript language.
	 * @since 0.10.0
	 */
	bracketNotationMemberAccessExpression = async (
		node: BracketNotationMemberAccessExpression,
	): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const object = await semanticData.object.translateCtxAndChildren();
		const member = await semanticData.member.translateCtxAndChildren();

		return [...object, "[", ...member, "]"];
	};

	/**
	 * Translates a {@link IdentifierTypeSpecifierExpression} into the JavaScript language.
	 */
	identifierTypeSpecifierExpression = async (
		node: IdentifierTypeSpecifierExpression,
	): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link GenericTypeSpecifierExpression} into the JavaScript language.
	 */
	genericTypeSpecifierExpression = async (node: GenericTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link TypeofTypeSpecifierExpression} into the JavaScript language.
	 */
	typeofTypeSpecifierExpression = async (node: TypeofTypeSpecifierExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link StringPrimaryExpression} into the JavaScript language.
	 */
	stringPrimaryExpression = async (node: StringPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();

		return [`${semanticData.quotationMarks}${semanticData.value}${semanticData.quotationMarks}`];
	};

	/**
	 * Translates a {@link FStringPrimaryExpression} into the JavaScript language.
	 */
	fStringPrimaryExpression = async (node: FStringPrimaryExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link BoolPrimaryExpression} into the JavaScript language.
	 */
	boolPrimaryExpression = async (node: BoolPrimaryExpression): Promise<TranslatedExpression> => {
		return [node.getSemanticData().value];
	};

	/**
	 * Translates a {@link TangledPrimaryExpression} into the JavaScript language.
	 */
	tangledPrimaryExpression = async (node: TangledPrimaryExpression): Promise<TranslatedExpression> => {
		// Tangled expressions always contain only a single child (Enforced by Parser)
		return ["(", ...(await node.children[0].translateCtxAndChildren()), ")"];
	};

	/**
	 * Translates a {@link IncrementOrDecrementPostfixExpression} into the JavaScript language.
	 */
	voidOrNullOrUndefinedPrimaryExpression = async (
		node: VoidOrNullOrUndefinedPrimaryExpression,
	): Promise<TranslatedExpression> => {
		const constantIdentifier = node.getSemanticData().constantIdentifier;

		return [constantIdentifier === "void" ? "void(0)" : constantIdentifier];
	};

	/**
	 * Translates a {@link IncrementOrDecrementPostfixExpression} into the JavaScript language.
	 */
	incrementOrDecrementPostfixExpression = async (
		node: IncrementOrDecrementPostfixExpression,
	): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const operandCode = await semanticData.operand.translateCtxAndChildren();

		return [...operandCode, semanticData.operator];
	};

	/**
	 * Translates a {@link FunctionCallExpression} into the JavaScript language.
	 */
	functionCallExpression = async (node: FunctionCallExpression): Promise<TranslatedExpression> => {
		// Get the function and semantic data
		const semanticData = node.getSemanticData();
		const func = node.getTypeSemanticData().func;

		// Get the proper identifier for the function
		const identifier =
			func instanceof ScopeFunctionDeclaration ? func.identifier : getJavaScriptBuiltInIdentifier(func.identifier);

		// Generate the arguments
		let args: TranslatedExpression = [];
		for (const i of semanticData.args) {
			const arg = await i.translateCtxAndChildren();
			args = args.concat(arg.concat(", "));
		}
		args = args.slice(0, -1); // Removing last whitespace and comma before the closing parenthesis

		// Return the compiled function call
		return [identifier, "(", ...args, ")"];
	};

	/**
	 * Translates a {@link IncrementOrDecrementUnaryExpression} into the JavaScript language.
	 */
	incrementOrDecrementUnaryExpression = async (
		node: IncrementOrDecrementUnaryExpression,
	): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const operandCode = await semanticData.operand.translateCtxAndChildren();

		return [semanticData.operator, ...operandCode];
	};

	/**
	 * Translates a {@link OperatorModifiedUnaryExpression} into the JavaScript language.
	 */
	operatorModifiedUnaryExpression = async (node: OperatorModifiedUnaryExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		// Get the operator and the operand
		const operator: string = semanticData.operator;
		const operand: Expression<ExpressionSemantics, ExpressionTypeSemantics> = semanticData.operand;

		// Return the generated unary expression
		return [operator].concat(await operand.translateCtxAndChildren());
	};

	/**
	 * Translates a {@link CastOrConvertExpression} into the JavaScript language.
	 */
	castOrConvertExpression = async (node: CastOrConvertExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const typeData = node.getTypeSemanticData();

		const exp: TranslatedExpression = await semanticData.exp.translateCtxAndChildren();
		const originalType = semanticData.exp.getTypeSemanticData().evaluatedType.getCompilableType();
		const destType = typeData.castType.getCompilableType();

		if (originalType === destType) {
			// If both types are the same we will only return the translated expression to avoid useless conversions.
			return exp;
		} else {
			const func: string = getJavaScriptBuiltInIdentifier(getConversionFunctionIdentifier(originalType, destType));
			return [func, "(", ...exp, ")"];
		}
	};

	/**
	 * Translates a {@link MultiplicativeExpression} into the JavaScript language.
	 */
	multiplicativeExpression = async (node: MultiplicativeExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		const exp1: TranslatedExpression = await semanticData.leftOp.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.rightOp.translateCtxAndChildren();
		return [...exp1, " ", semanticData.operator, " ", ...exp2];
	};

	/**
	 * Translates a {@link AdditiveExpression} into the JavaScript language.
	 */
	additiveExpression = async (node: AdditiveExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();

		const exp1: TranslatedExpression = await semanticData.leftOp.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.rightOp.translateCtxAndChildren();
		return [...exp1, " ", semanticData.operator, " ", ...exp2];
	};

	/**
	 * Translates any form of operator-based expression with two operands into the JavaScript language.
	 * @param node The node to translate.
	 * @private
	 * @since 0.10.0
	 */
	protected translateOperatorExpressionWithOperands = async (
		node: ComparativeExpression<any, any> | LogicalExpression<any, any>,
	): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData: ComparativeExpressionSemantics | LogicalExpressionSemantics = node.getSemanticData();

		// Generate the code for the operands
		const exp1: TranslatedExpression = await semanticData.leftOp.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.rightOp.translateCtxAndChildren();

		let operator: string = semanticData.operator;

		// Make sure equality checks are done with ===/!== and not ==/!= to ensure strict equality
		if (operator === "==" || operator === "!=") {
			operator = semanticData.operator + "=";
		}

		return [...exp1, " ", operator, " ", ...exp2];
	};

	/**
	 * Translates a {@link RelationalExpression} into the JavaScript language.
	 */
	relationalExpression = async (node: RelationalExpression): Promise<TranslatedExpression> => {
		return await this.translateOperatorExpressionWithOperands(node);
	};

	/**
	 * Translates a {@link EqualityExpression} into the JavaScript language.
	 */
	equalityExpression = async (node: EqualityExpression): Promise<TranslatedExpression> => {
		return await this.translateOperatorExpressionWithOperands(node);
	};

	/**
	 * Translates a {@link LogicalAndExpression} into the JavaScript language.
	 */
	logicalAndExpression = async (node: LogicalAndExpression): Promise<TranslatedExpression> => {
		return await this.translateOperatorExpressionWithOperands(node);
	};

	/**
	 * Translates a {@link LogicalOrExpression} into the JavaScript language.
	 */
	logicalOrExpression = async (node: LogicalOrExpression): Promise<TranslatedExpression> => {
		return await this.translateOperatorExpressionWithOperands(node);
	};

	/**
	 * Translates a {@link ConditionalExpression} into the JavaScript language.
	 */
	conditionalExpression = async (node: ConditionalExpression): Promise<TranslatedExpression> => {
		return [];
	};

	/**
	 * Translates a {@link AssignmentExpression} into the JavaScript language.
	 */
	assignmentExpression = async (node: AssignmentExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		let identifier = semanticData.identifier;

		// If the identifier is not found in the global scope, assume it's a built-in function and format the identifier
		// accordingly.
		if (!(semanticData.assignTarget.refTarget instanceof ScopeDeclaration)) {
			identifier = getJavaScriptBuiltInIdentifier(identifier);
		}

		// The expression that is assigned to the reference
		const assignExp = await semanticData.value.translateCtxAndChildren();

		return [identifier, " ", semanticData.operator, " ", ...assignExp];
	};
}
