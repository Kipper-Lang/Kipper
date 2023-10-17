/**
 * Member access expression, which represents a member access expression that evaluates to a value of a member of an
 * object or array.
 * @since 0.10.0
 */
import type { MemberAccessExpressionSemantics } from "./member-access-expression-semantics";
import type { MemberAccessExpressionTypeSemantics } from "./member-access-expression-type-semantics";
import type { SliceNotationContext, SliceNotationMemberAccessExpressionContext } from "../../../../parser";
import {
	BracketNotationMemberAccessExpressionContext,
	DotNotationMemberAccessExpressionContext,
	KindParseRuleMapping,
	ParseRuleKindMapping,
} from "../../../../parser";
import type { CompilableASTNode } from "../../../compilable-ast-node";
import { Expression } from "../expression";
import { KipperNotImplementedError, UnableToDetermineSemanticDataError } from "../../../../../errors";
import { kipperInternalBuiltInFunctions } from "../../../../runtime-built-ins";

/**
 * A union of all possible {@link KipperParserRuleContext} rule contexts that {@link MemberAccessExpression} implements.
 * @since 0.10.0
 */
export type MemberAccessExpressionContext =
	| DotNotationMemberAccessExpressionContext
	| BracketNotationMemberAccessExpressionContext
	| SliceNotationMemberAccessExpressionContext;

/**
 * Member access expression, which represents a member access expression that evaluates to a value of a member of an
 * object or array.
 * @since 0.10.0
 */
export class MemberAccessExpression extends Expression<
	MemberAccessExpressionSemantics,
	MemberAccessExpressionTypeSemantics
> {
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: MemberAccessExpressionContext;

	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_memberAccessExpression;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return MemberAccessExpression.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return MemberAccessExpression.ruleName;
	}

	constructor(antlrRuleCtx: MemberAccessExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): MemberAccessExpressionContext {
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
		// Handle the different types of member access expressions
		if (this.antlrRuleCtx instanceof DotNotationMemberAccessExpressionContext) {
			throw this.programCtx
				.semanticCheck(this)
				.notImplementedError(
					new KipperNotImplementedError("Member access expressions using dot notation are not yet implemented"),
				);
		} else if (this.antlrRuleCtx instanceof BracketNotationMemberAccessExpressionContext) {
			const objExp = this.children[0];
			const keyExp = this.children[1];

			// Ensure both required objects are present
			if (!objExp || !keyExp) {
				throw new UnableToDetermineSemanticDataError();
			}

			this.semanticData = {
				objectLike: objExp,
				propertyIndexOrKeyOrSlice: keyExp,
				accessType: "bracket",
			};

			// Add internal reference to the program ctx for the index function, so it will be generated in the output code
			// Note: Once objects are implemented, an if statement will be required to check if the object is an array or
			// object-like, since for objects the 'get' function will be used instead of the 'index' function.
			this.programCtx.addInternalReference(this, kipperInternalBuiltInFunctions["index"]);
		} else {
			const sliceNotationAntlrCtx = this.getAntlrRuleChildren()[1] as SliceNotationContext;
			const hasStart = sliceNotationAntlrCtx.sliceStart;
			const hasEnd = sliceNotationAntlrCtx.sliceEnd;

			// Slice notation requires at least 1 child, which is the object expression
			// Note: Both the start and end expression are optional - if one is not present, then the slice is open-ended
			const objExp: Expression = this.children[0];
			const startExp: Expression | undefined = hasStart ? this.children[1] : undefined;
			const endExp: Expression | undefined = hasEnd ? (hasStart ? this.children[2] : this.children[1]) : undefined;

			// Ensure the object expression is present
			if (!objExp) {
				throw new UnableToDetermineSemanticDataError();
			}

			this.semanticData = {
				objectLike: objExp,
				propertyIndexOrKeyOrSlice: { start: startExp, end: endExp },
				accessType: "slice",
			};

			// Add internal reference to the program ctx for the slice function, so it will be generated in the output code
			this.programCtx.addInternalReference(this, kipperInternalBuiltInFunctions["slice"]);
		}
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
		// Ensure the objectLike expression is indexable/accessible
		// Note: This will throw an error if the objectLike expression is not indexable/accessible
		const type = this.programCtx.typeCheck(this).getTypeOfMemberAccessExpression(this);

		this.typeSemantics = {
			evaluatedType: type,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.9.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.memberAccessExpression;
	readonly targetCodeGenerator = this.codeGenerator.memberAccessExpression;
}
