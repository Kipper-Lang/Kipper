/**
 * Generic type specifier expression, which represents a generic type specifier.
 * @example
 * list<num> // List type with number as generic type
 * @since 0.8.0
 */
import type { GenericTypeSpecifierExpressionSemantics } from "./generic-type-specifier-expression-semantics";
import type { GenericTypeSpecifierExpressionTypeSemantics } from "./generic-type-specifier-expression-type-semantics";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import { TypeSpecifierExpression } from "../type-specifier-expression";
import type { GenericTypeSpecifierExpressionContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { KipperNotImplementedError, UnableToDetermineSemanticDataError } from "../../../../../../errors";
import type { GenericType, GenericTypeArguments, ProcessedType } from "../../../../../semantics";
import { BuiltInTypes, RawType } from "../../../../../semantics";

/**
 * Generic type specifier expression, which represents a generic type specifier.
 * @example
 * list<num> // List type with number as generic type
 * @since 0.8.0
 */
export class GenericTypeSpecifierExpression extends TypeSpecifierExpression<
	GenericTypeSpecifierExpressionSemantics,
	GenericTypeSpecifierExpressionTypeSemantics
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_genericTypeSpecifierExpression;

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: GenericTypeSpecifierExpressionContext;

	constructor(antlrRuleCtx: GenericTypeSpecifierExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return GenericTypeSpecifierExpression.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return GenericTypeSpecifierExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): GenericTypeSpecifierExpressionContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const antlrChildren = this.antlrRuleCtx.children;
		if (!antlrChildren?.length) {
			throw new UnableToDetermineSemanticDataError();
		}
		const identifier = antlrChildren[0].text;
		const genericArguments = <Array<TypeSpecifierExpression>>this.children.slice();

		this.semanticData = {
			rawType: new RawType(identifier),
			genericArguments: genericArguments,
		};
	}

	/**
	 * Preliminary registers the class declaration type to allow for internal self-referential type checking.
	 *
	 * This is part of the "Ahead of time" type evaluation, which is done before the main type checking.
	 * @since 0.12.0
	 */
	public async primaryPreliminaryTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const valueType = this.programCtx.typeCheck(this).getCheckedType(semanticData.rawType, this.scope);
		const providedArguments = semanticData.genericArguments.map((arg) => arg.getTypeSemanticData().storedType);

		// Ensure the type is even generic and that there are the correct number of generic arguments
		this.programCtx.typeCheck(this).ensureValidGenericType(valueType, providedArguments);

		// We need to duplicate the generic arguments required for the value type and then assign to them the provided
		// generic arguments. This is a bit more complex than it seems, as we need to handle spread operators.
		const newGenericArguments = (<GenericType<GenericTypeArguments>>valueType).genericTypeArguments.map(
			(v): GenericTypeArguments[number] => {
				return {
					identifier: v.identifier,
					type: Array.isArray(v.type) ? [] : v.type,
				};
			},
		);

		// This is an algorithm which based on the given generic arguments of the value type will determine how to
		// distribute the provided generic types to the required generic arguments of the value type.
		// This is challenging as we have a spread operator, i.e. certain generic arguments can have 0..N elements.
		// This can only occur once in the entire generic arguments list though
		//
		// The algorithm works like this:
		// 1. We assign every single generic argument to the corresponding generic argument of the value type
		// 2. If/Once we hit a spread operator, we assign all remaining generic arguments to the spread operator
		// 3. We go to the next generic argument and see if there are any arguments behind the spread operator, for each
		// 	of those we pop them from the spread operator and assign them to the current generic argument.
		// 4. We repeat this until we have assigned all generic arguments

		let currGenericArgIndex = 0;
		let foundSpread = false;
		while (currGenericArgIndex < newGenericArguments.length && !foundSpread) {
			const currGenericArg = newGenericArguments[currGenericArgIndex];
			if (Array.isArray(newGenericArguments[currGenericArgIndex].type)) {
				const spreadArg = newGenericArguments[currGenericArgIndex];
				spreadArg.type = providedArguments;
				foundSpread = true;
			} else {
				const providedArg = providedArguments.shift();

				// As we already check for enough generic arguments, we can safely assume that there is a provided argument
				currGenericArg.type = <ProcessedType>providedArg;
				currGenericArgIndex++;
			}
		}

		if (foundSpread) {
			const spreadArg = newGenericArguments[currGenericArgIndex] as {
				identifier: string;
				type: ProcessedType[];
			};
			currGenericArgIndex++;

			while (currGenericArgIndex < newGenericArguments.length) {
				const currGenericArg = newGenericArguments[currGenericArgIndex];

				// Now we simply need to take back all the extra arguments from the spread operator and assign them to the
				// current generic argument
				if (Array.isArray(currGenericArg.type)) {
					throw new KipperNotImplementedError("Multiple spread operators in generic arguments");
				}

				currGenericArg.type = spreadArg.type.pop()!!;
				currGenericArgIndex++;
			}
		}

		this.typeSemantics = {
			evaluatedType: BuiltInTypes.type,
			storedType: (<GenericType<GenericTypeArguments>>valueType).changeGenericTypeArguments(newGenericArguments),
		};
	}
	public readonly primarySemanticTypeChecking: undefined;

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.genericTypeSpecifierExpression;
	readonly targetCodeGenerator = this.codeGenerator.genericTypeSpecifierExpression;
}
