/**
 * F-String class, which represents an f-string expression in the Kipper language.
 * @since 0.1.0
 */
import type { FStringPrimaryExpressionSemantics } from "./fstring-primary-expression-semantics";
import type { FStringPrimaryExpressionTypeSemantics } from "./fstring-primary-expression-type-semantics";
import { Expression } from "../../expression";
import type { FStringPrimaryExpressionContext } from "../../../../../lexer-parser";
import {
	ExpressionContext,
	FStringDoubleQuoteAtomContext,
	FStringSingleQuoteAtomContext,
	KindParseRuleMapping,
	ParseRuleKindMapping,
} from "../../../../../lexer-parser";
import type { CompilableASTNode } from "../../../../compilable-ast-node";
import { BuiltInTypes } from "../../../../../semantics";
import { getParseRuleSource } from "../../../../../../tools";

/**
 * F-String class, which represents an f-string expression in the Kipper language. F-Strings are a way to automatically
 * format strings and insert expressions into them using expression blocks that are stringified.
 * @since 0.1.0
 */
export class FStringPrimaryExpression extends Expression<
	FStringPrimaryExpressionSemantics,
	FStringPrimaryExpressionTypeSemantics,
	Expression
> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_fStringPrimaryExpression;

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
	protected override readonly _antlrRuleCtx: FStringPrimaryExpressionContext;

	constructor(antlrRuleCtx: FStringPrimaryExpressionContext, parent: CompilableASTNode) {
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
		return FStringPrimaryExpression.kind;
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
		return FStringPrimaryExpression.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): FStringPrimaryExpressionContext {
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
		const stringParts: Array<string | Expression> = [];
		const atoms = <Array<FStringDoubleQuoteAtomContext>>(
			this.getAntlrRuleChildren().filter(
				(atom) => atom instanceof FStringDoubleQuoteAtomContext || atom instanceof FStringSingleQuoteAtomContext,
			)
		);

		let index = 0; // 'index' for going through 'this.children' (the expressions inside the f-string)
		for (const atom of atoms) {
			const isExpressionAtom = atom.children && atom.children.find((child) => child instanceof ExpressionContext);
			if (isExpressionAtom) {
				stringParts.push(this.children[index]);
				index++;
			} else {
				stringParts.push(<string>getParseRuleSource(atom));
			}
		}

		this.semanticData = {
			atoms: stringParts,
		};
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.7.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		// This will always be of type 'str'
		this.typeSemantics = {
			evaluatedType: BuiltInTypes.str,
		};
	}

	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.fStringPrimaryExpression;
	readonly targetCodeGenerator = this.codeGenerator.fStringPrimaryExpression;
}
