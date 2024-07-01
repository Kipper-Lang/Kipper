import { BitwiseExpression } from "../bitwise-expression";
import {
	BitwiseAndExpressionContext,
	BitwiseShiftExpressionContext,
	KindParseRuleMapping,
	ParseRuleKindMapping,
} from "../../../../../parser";
import { CompilableASTNode } from "../../../../compilable-ast-node";
import { Expression } from "../../expression";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { CheckedType } from "../../../../../analysis";
import { BitwiseZeroFillLeftShiftExpressionSemantics } from "./bitwise-zero-fill-left-shift-expression-semantics";
import { BitwiseZeroFillLeftShiftExpressionTypeSemantics } from "./bitwise-zero-fill-left-shift-expression-type-semantics";

export class BitwiseZeroFillLeftShiftExpression extends BitwiseExpression<
	BitwiseZeroFillLeftShiftExpressionSemantics,
	BitwiseZeroFillLeftShiftExpressionTypeSemantics
> {
	protected override readonly _antlrRuleCtx: BitwiseAndExpressionContext;

	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseXorExpression;

	public override get kind() {
		return BitwiseZeroFillLeftShiftExpression.kind;
	}

	public static readonly ruleName = KindParseRuleMapping[this.kind];

	public override get ruleName() {
		return BitwiseZeroFillLeftShiftExpression.ruleName;
	}

	constructor(antlrRuleCtx: BitwiseShiftExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	public async primarySemanticAnalysis(): Promise<void> {
		const leftOp: Expression = this.children[0];
		const rightOp: Expression = this.children[1];

		if (!leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: "<<",
		};
	}

	public async primarySemanticTypeChecking(): Promise<void> {
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("num"),
		};
	}

	public checkForWarnings = undefined;

	public override get antlrRuleCtx(): BitwiseShiftExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseZeroFillLeftShiftOperations;

	readonly targetCodeGenerator = this.codeGenerator.bitwiseZeroFillLeftShiftExpression;
}
