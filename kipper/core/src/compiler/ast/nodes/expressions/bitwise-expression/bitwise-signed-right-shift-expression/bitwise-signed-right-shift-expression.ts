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
import { BitwiseSignedRightShiftExpressionSemantics } from "./bitwise-signed-right-shift-expression-semantics";
import { BitwiseSignedRightShiftExpressionTypeSemantics } from "./bitwise-signed-right-shift-expression-type-semantics";

export class BitwiseSignedRightShiftExpression extends BitwiseExpression<
	BitwiseSignedRightShiftExpressionSemantics,
	BitwiseSignedRightShiftExpressionTypeSemantics
> {
	protected override readonly _antlrRuleCtx: BitwiseAndExpressionContext;

	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseXorExpression;

	public override get kind() {
		return BitwiseSignedRightShiftExpression.kind;
	}

	public static readonly ruleName = KindParseRuleMapping[this.kind];

	public override get ruleName() {
		return BitwiseSignedRightShiftExpression.ruleName;
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
			operator: ">>",
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

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseSignedRightShiftExpression;

	readonly targetCodeGenerator = this.codeGenerator.bitwiseSignedRightShiftExpression;
}
