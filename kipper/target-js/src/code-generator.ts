/**
 * The JavaScript target-specific code generator for translating Kipper code into JavaScript.
 * @since 0.10.0
 */
import type {
	AdditiveExpression,
	ArrayPrimaryExpression,
	AssignmentExpression,
	BitwiseAndExpression,
	BitwiseExpression,
	BitwiseExpressionSemantics,
	BitwiseOrExpression,
	BitwiseShiftExpression,
	BitwiseXorExpression,
	BoolPrimaryExpression,
	CastOrConvertExpression,
	ClassDeclaration,
	ClassMethodDeclaration,
	ClassPropertyDeclaration,
	ComparativeExpression,
	ComparativeExpressionSemantics,
	ConditionalExpression,
	DoWhileLoopIterationStatement,
	EqualityExpression,
	ExpressionStatement,
	ForLoopIterationStatement,
	FStringPrimaryExpression,
	FunctionCallExpression,
	FunctionDeclaration,
	GenericTypeSpecifierExpression,
	IdentifierPrimaryExpression,
	IdentifierTypeSpecifierExpression,
	IncrementOrDecrementPostfixExpression,
	IncrementOrDecrementUnaryExpression,
	InterfaceDeclaration,
	InterfaceMethodDeclaration,
	InterfacePropertyDeclaration,
	JumpStatement,
	KipperProgramContext,
	LambdaPrimaryExpression,
	LogicalAndExpression,
	LogicalExpression,
	LogicalExpressionSemantics,
	LogicalOrExpression,
	MemberAccessExpression,
	MultiplicativeExpression,
	NumberPrimaryExpression,
	ObjectPrimaryExpression,
	ObjectProperty,
	OperatorModifiedUnaryExpression,
	ParameterDeclaration,
	RelationalExpression,
	ReturnStatement,
	StringPrimaryExpression,
	SwitchStatement,
	TangledPrimaryExpression,
	TranslatedCodeLine,
	TranslatedCodeToken,
	TranslatedExpression,
	TypeofTypeSpecifierExpression,
	VoidOrNullOrUndefinedPrimaryExpression,
	WhileLoopIterationStatement,
} from "@kipper/core";
import {
	BuiltInTypes,
	CompoundStatement,
	Expression,
	getConversionFunctionIdentifier,
	IfStatement,
	KipperTargetCodeGenerator,
	VariableDeclaration,
} from "@kipper/core";
import { createJSFunctionSignature, getJSFunctionSignature, indentLines, removeBraces } from "./tools";
import { TargetJS, version } from "./index";
import type { ClassConstructorDeclaration } from "@kipper/core/lib/compiler/ast/nodes/declarations/type-declaration/class-declaration/class-member-declaration/class-constructor-declaration/class-constructor-declaration";

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
				'var __globalScope = typeof __globalScope !== "undefined" ? __globalScope : typeof' +
					' globalThis !== "undefined" ?' +
					" globalThis : typeof" +
					' window !== "undefined" ?' +
					' window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {}',
				";",
			],
			// Create global kipper object - Always prefer the global '__kipper' instance
			["// @ts-ignore"],
			["var __kipper = __globalScope.__kipper = __globalScope.__kipper || __kipper || {}", ";"],
			// The following error classes are simply used for errors thrown in internal Kipper functions and should be used
			// when the user code uses a Kipper-specific feature, syntax or function incorrectly.
			["// @ts-ignore"],
			[
				'__kipper.TypeError = __kipper.TypeError || (class KipperTypeError extends TypeError { constructor(msg) { super(msg); this.name="TypeError"; }})',
				";",
			],
			["// @ts-ignore"],
			[
				'__kipper.IndexError = __kipper.IndexError || (class KipperIndexError extends Error { constructor(msg) { super(msg); this.name="IndexError"; }})',
				";",
			],
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
			statement = removeBrackets(statement); // remove brackets -> will be added later
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
	 * Translates a {@link DoWhileLoopIterationStatement} into the JavaScript language.
	 * @since 0.10.0
	 */
	doWhileLoopIterationStatement = async (node: DoWhileLoopIterationStatement): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const condition = await semanticData.loopCondition.translateCtxAndChildren();
		const statement = await semanticData.loopBody.translateCtxAndChildren();

		// Check whether the loop body is a compound statement
		const isCompound = semanticData.loopBody instanceof CompoundStatement;

		return [
			["do", " ", isCompound ? "{" : ""],
			...(isCompound ? removeBraces(statement) : indentLines(statement)),
			[isCompound ? "} " : "", "while", " ", "(", ...condition, ")"],
		];
	};

	/**
	 * Translates a {@link WhileLoopIterationStatement} into the JavaScript language.
	 * @since 0.10.0
	 */
	whileLoopIterationStatement = async (node: WhileLoopIterationStatement): Promise<Array<TranslatedCodeLine>> => {
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
	 * Translates a {@link ForLoopIterationStatement} into the JavaScript language.
	 * @since 0.10.0
	 */
	forLoopIterationStatement = async (node: ForLoopIterationStatement): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();

		// Translate the parts of the for loop statement - Everything except the loop body is optional
		let forDeclaration: TranslatedExpression | Array<TranslatedCodeLine> = semanticData.forDeclaration
			? await semanticData.forDeclaration.translateCtxAndChildren()
			: [];
		const condition: TranslatedExpression = semanticData.loopCondition
			? await semanticData.loopCondition.translateCtxAndChildren()
			: [];
		const forIterationExp: TranslatedExpression = semanticData.forIterationExp
			? await semanticData.forIterationExp.translateCtxAndChildren()
			: [];

		// Apply formatting for the loop body (compound statements are formatted differently)
		let isCompound = semanticData.loopBody instanceof CompoundStatement;
		let loopBody = await semanticData.loopBody.translateCtxAndChildren();
		if (isCompound) {
			loopBody = removeBrackets(loopBody); // remove brackets -> will be added later
		} else {
			loopBody = indentLines(loopBody); // Indent the loop body
		}

		// Ensure the variable declaration in the for declaration is properly included in the output code
		forDeclaration = <TranslatedExpression>(
			// Variable declarations are already translated as a single line of code and have a semicolon at the end ->
			// We need to ensure that the semicolon is not added twice
			(semanticData.forDeclaration instanceof VariableDeclaration ? forDeclaration[0] : [...forDeclaration, ";"])
		);

		return [
			[
				"for",
				" ",
				"(",
				...forDeclaration,
				" ",
				...condition,
				";",
				" ",
				...forIterationExp,
				")",
				" ",
				...(isCompound ? ["{"] : []),
			],
			...loopBody,
			isCompound ? ["}"] : [],
		];
	};

	/**
	 * Translates a {@link JumpStatement} into the JavaScript language.
	 */
	jumpStatement = async (node: JumpStatement): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		return [semanticData.jmpType === "break" ? ["break", ";"] : ["continue", ";"]];
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
		const semanticData = node.getSemanticData();
		return [[`${semanticData.identifier}`]];
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
	 * Translates a {@link AssignmentExpression} into the JavaScript language.
	 */
	interfaceDeclaration = async (node: InterfaceDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link InterfacePropertyDeclaration} into the JavaScript language.
	 */
	interfacePropertyDeclaration = async (node: InterfacePropertyDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link InterfaceMethodDeclaration} into the JavaScript language.
	 * @param node
	 */
	interfaceMethodDeclaration = async (node: InterfaceMethodDeclaration): Promise<Array<TranslatedCodeLine>> => {
		return [];
	};

	/**
	 * Translates a {@link ClassDeclaration} into the JavaScript language.
	 */
	classDeclaration = async (node: ClassDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const identifier = semanticData.identifier;
		const classMembers = semanticData.classMembers;
		const constructor = semanticData.constructorDeclaration;

		// Translate the class members
		const translatedMembers = await Promise.all(
			classMembers.map(async (member) => {
				return await member.translateCtxAndChildren();
			}),
		);

		// Translate the constructor
		const translatedConstructor = constructor ? await constructor.translateCtxAndChildren() : [];

		// Return the translated class declaration
		return [
			["class", " ", identifier, " ", "{"],
			...indentLines(translatedMembers.flat()),
			...indentLines(translatedConstructor),
			["}"],
		];
	};

	classPropertyDeclaration = async (node: ClassPropertyDeclaration): Promise<TranslatedCodeLine> => {
		const semanticData = node.getSemanticData();
		const identifier = semanticData.identifier;

		return [`${identifier};`];
	};

	classMethodDeclaration = async (node: ClassMethodDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const identifier = semanticData.identifier;
		const params = semanticData.parameters;
		const body = semanticData.functionBody;

		const concatParams = async () => {
			const translatedParams = await Promise.all(
				params.map(async (param) => {
					return await param.translateCtxAndChildren();
				}),
			);
			return translatedParams.join(", ");
		};

		return [[`${identifier}(${await concatParams()}) {`], ...(await body.translateCtxAndChildren()), ["}"]];
	};

	/**
	 * Translates a {@link ClassConstructorDeclaration} into the JavaScript language.
	 */
	classConstructorDeclaration = async (node: ClassConstructorDeclaration): Promise<Array<TranslatedCodeLine>> => {
		const semanticData = node.getSemanticData();
		const params = semanticData.parameters;
		const body = semanticData.functionBody;

		let processedParams = (
			await Promise.all(
				params.map(async (param) => {
					return await param.translateCtxAndChildren();
				}),
			)
		)
			.map((param) => [...param.flat(), ", "])
			.flat();
		processedParams.pop();

		return [["constructor", "(", ...processedParams, ")", " "], ...(await body.translateCtxAndChildren())];
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
	 * Translates a {@link ArrayPrimaryExpression} into the JavaScript language.
	 */
	arrayPrimaryExpression = async (node: ArrayPrimaryExpression): Promise<TranslatedExpression> => {
		const values = node.getSemanticData().value;
		const translatedValues: Array<TranslatedExpression> = await Promise.all(
			values.map(async (value, i) => {
				const exp = await value.translateCtxAndChildren();
				return [...exp, i + 1 === values.length ? "" : ", "];
			}),
		);
		return ["[", ...translatedValues.flat(), "]"];
	};

	/**
	 * Translates a {@link ObjectPrimaryExpression} into the JavaScript language.
	 * @since 0.11.0
	 */
	objectPrimaryExpression = async (node: ObjectPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const keyValuePairs = semanticData.keyValuePairs;
		const translatedKeyValuePairs = await Promise.all(
			keyValuePairs.map(async (pair) => {
				return [...(await pair.translateCtxAndChildren()), ",", "\n"];
			}),
		);

		return ["{", "\n", ...indentLines(translatedKeyValuePairs).flat(), "}"];
	};

	/**
	 * Translates a {@link ObjectProperty} into the JavaScript language.
	 * @since 0.11.0
	 */
	objectProperty = async (node: ObjectProperty): Promise<TranslatedExpression> => {
		const expression = node.getSemanticData().expressoDepresso;
		const identifier = node.getSemanticData().identifier;

		// Await the translation and join the array into a string
		const translatedExpression = (await expression.translateCtxAndChildren()).join("");

		// Return the concatenated result
		return [identifier, ": ", translatedExpression];
	};

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the JavaScript language.
	 */
	identifierPrimaryExpression = async (node: IdentifierPrimaryExpression): Promise<TranslatedExpression> => {
		const refTarget = node.getSemanticData().ref.refTarget;
		let identifier: string = refTarget.isBuiltIn
			? TargetJS.getBuiltInIdentifier(refTarget.builtInStructure!!)
			: refTarget.identifier;

		return [identifier];
	};

	/**
	 * Translates a {@link IdentifierPrimaryExpression} into the JavaScript language.
	 * @since 0.10.0
	 */
	memberAccessExpression = async (node: MemberAccessExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const object = await semanticData.objectLike.translateCtxAndChildren();

		switch (<"dot" | "bracket" | "slice">semanticData.accessType) {
			case "dot":
				return []; // TODO: Not implemented
			case "bracket": {
				// -> The member access is done via brackets, meaning the member name is an expression
				// In this case, only indexes are allowed, not keys, but in the future, this will change with the implementation
				// of objects.
				const keyOrIndex = await (<Expression>semanticData.propertyIndexOrKeyOrSlice).translateCtxAndChildren();

				// Return the member access expression in form of a function call to the internal 'index' function
				const sliceIdentifier = TargetJS.getBuiltInIdentifier("index");
				return [sliceIdentifier, "(", ...object, ", ", ...keyOrIndex, ")"];
			}
			case "slice": {
				// -> The member access is done via a slice, meaning the member name is a slice expression
				const slice = <{ start?: Expression; end?: Expression }>semanticData.propertyIndexOrKeyOrSlice;

				// Translate the start and end expression, if they exist.
				// If they don't, simply undefined will be passed onto the underlying function
				const start = slice.start ? await slice.start.translateCtxAndChildren() : "undefined";
				const end = slice.end ? await slice.end.translateCtxAndChildren() : "undefined";

				// Return the slice expression in form of a function call to the internal 'slice' function
				const sliceIdentifier = TargetJS.getBuiltInIdentifier("slice");
				return [sliceIdentifier, "(", ...object, ", ", ...start, ", ", ...end, ")"];
			}
		}
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
		const atoms: Array<TranslatedCodeToken> = [];
		for (const atom of node.getSemanticData().atoms) {
			if (typeof atom === "string") {
				atoms.push(atom);
			} else {
				atoms.push("${", ...(await atom.translateCtxAndChildren()), "}");
			}
		}

		return ["`", ...atoms, "`"];
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
		const identifier = func.isBuiltIn ? TargetJS.getBuiltInIdentifier(func.builtInStructure!!) : func.identifier;

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
		const operand: Expression = semanticData.operand;

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
			const func: string = TargetJS.getBuiltInIdentifier(
				getConversionFunctionIdentifier(originalType.identifier, destType.identifier),
			);
			return [func, "(", ...exp, ")"];
		}
	};

	/**
	 * Translates a {@link MultiplicativeExpression} into the JavaScript language.
	 */
	multiplicativeExpression = async (node: MultiplicativeExpression): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData = node.getSemanticData();
		const stringRepeatFunction = TargetJS.getBuiltInIdentifier("repeatString");

		const exp1: TranslatedExpression = await semanticData.leftOp.translateCtxAndChildren();
		const exp2: TranslatedExpression = await semanticData.rightOp.translateCtxAndChildren();

		// In this case it should be a string multiplication
		if (semanticData.leftOp.getTypeSemanticData().evaluatedType === BuiltInTypes.str) {
			return [stringRepeatFunction, "(", ...exp1, ", ", ...exp2, ")"];
		}

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
	 * @since 0.10.0
	 * @private
	 */
	protected translateOperatorExpressionWithOperands = async (
		node: ComparativeExpression | LogicalExpression | BitwiseExpression,
	): Promise<TranslatedExpression> => {
		// Get the semantic data
		const semanticData: ComparativeExpressionSemantics | LogicalExpressionSemantics | BitwiseExpressionSemantics =
			node.getSemanticData();

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
	 * Translates a {@link BitwiseOrExpression} into the JavaScript language.
	 */
	bitwiseOrExpression = async (node: BitwiseOrExpression): Promise<TranslatedExpression> => {
		return await this.translateOperatorExpressionWithOperands(node);
	};

	/**
	 * Translates a {@link BitwiseAndExpression} into the JavaScript language.
	 */
	bitwiseAndExpression = async (node: BitwiseAndExpression): Promise<TranslatedExpression> => {
		return await this.translateOperatorExpressionWithOperands(node);
	};

	/**
	 * Translates a {@link BitwiseXorExpression} into the JavaScript language.
	 */
	bitwiseXorExpression = async (node: BitwiseXorExpression): Promise<TranslatedExpression> => {
		return await this.translateOperatorExpressionWithOperands(node);
	};

	/**
	 * Translates a {@link BitwiseShiftExpression} into the JavaScript language.
	 */
	bitwiseShiftExpression = async (node: BitwiseShiftExpression): Promise<TranslatedExpression> => {
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
		const semanticData = node.getSemanticData();
		const condition = await semanticData.condition.translateCtxAndChildren();
		const trueBranch = await semanticData.trueBranch.translateCtxAndChildren();
		const falseBranch = await semanticData.falseBranch.translateCtxAndChildren();

		return [...condition, " ? ", ...trueBranch, " : ", ...falseBranch];
	};

	/**
	 * Translates a {@link AssignmentExpression} into the JavaScript language.
	 */
	assignmentExpression = async (node: AssignmentExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const refTarget = semanticData.assignTarget.refTarget;
		const identifier = refTarget.isBuiltIn
			? TargetJS.getBuiltInIdentifier(refTarget.builtInStructure!!)
			: refTarget.identifier;
		const assignExp = await semanticData.value.translateCtxAndChildren();

		return [identifier, " ", semanticData.operator, " ", ...assignExp];
	};

	/**
	 * Translates a {@link LambdaPrimaryExpression} into the JavaScript language.
	 */
	lambdaPrimaryExpression = async (node: LambdaPrimaryExpression): Promise<TranslatedExpression> => {
		const semanticData = node.getSemanticData();
		const params = semanticData.params;
		const body = semanticData.functionBody;

		// Generate the function signature
		const translatedParams: TranslatedExpression = (
			await Promise.all(
				params.map(async (param) => {
					return await param.translateCtxAndChildren();
				}),
			)
		)
			.map((param) => <TranslatedExpression>[...param.flat(), ", "])
			.flat();
		translatedParams.pop(); // Remove the last comma

		const translatedBody =
			body instanceof Expression
				? await body.translateCtxAndChildren()
				: (await body.translateCtxAndChildren()).map((line) => <TranslatedExpression>[...line, "\n"]).flat();

		// Return the lambda function
		return ["(", ...translatedParams, ") => ", ...translatedBody];
	};
}
