import { BitwiseAndExpressionSemantics } from "./bitwise-and-expression-semantics";
import { BitwiseAndExpressionTypeSemantics } from "./bitwise-and-expression-type-semantics";
import { BitwiseExpression } from "../bitwise-expression";
import { BitwiseAndExpressionContext, KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../parser";
import { CompilableASTNode } from "../../../../compilable-ast-node";
import { Expression } from "../../expression";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { CheckedType } from "../../../../../analysis";

export class BitwiseAndExpression extends BitwiseExpression<
	BitwiseAndExpressionSemantics,
	BitwiseAndExpressionTypeSemantics
> {
	protected override readonly _antlrRuleCtx: BitwiseAndExpressionContext;

	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseAndExpression;

	public override get kind() {
		return BitwiseAndExpression.kind;
	}

	public static readonly ruleName = KindParseRuleMapping[this.kind];

	public override get ruleName() {
		return BitwiseAndExpression.ruleName;
	}

	constructor(antlrRuleCtx: BitwiseAndExpressionContext, parent: CompilableASTNode) {
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
			operator: "&",
		};
	}

	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		this.programCtx
			.typeCheck(this)
			.validBitwiseExpression(semanticData.leftOp, semanticData.rightOp, semanticData.operator);

		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("num"),
		};
	}

	public checkForWarnings = undefined;

	public override get antlrRuleCtx(): BitwiseAndExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseAndExpression;

	readonly targetCodeGenerator = this.codeGenerator.bitwiseAndExpression;
}
