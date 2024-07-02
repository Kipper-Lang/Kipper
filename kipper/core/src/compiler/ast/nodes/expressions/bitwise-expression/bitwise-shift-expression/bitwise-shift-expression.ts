import { BitwiseExpression } from "../bitwise-expression";
import {
	BitwiseOrExpressionContext,
	BitwiseShiftExpressionContext,
	BitwiseShiftOperatorsContext,
	KindParseRuleMapping,
	ParseRuleKindMapping,
} from "../../../../../parser";
import { CompilableASTNode } from "../../../../compilable-ast-node";
import { Expression } from "../../expression";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { CheckedType } from "../../../../../analysis";
import { BitwiseShiftExpressionSemantics } from "./bitwise-shift-expression-semantics";
import { BitwiseShiftExpressionTypeSemantics } from "./bitwise-shift-expression-type-semantics";
import {
	KipperBitwiseShiftOperator,
	kipperBitwiseShiftOperators,
	KipperMultiplicativeOperator,
	kipperMultiplicativeOperators,
} from "../../../../../const";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

export class BitwiseShiftExpression extends BitwiseExpression<
	BitwiseShiftExpressionSemantics,
	BitwiseShiftExpressionTypeSemantics
> {
	protected override readonly _antlrRuleCtx: BitwiseShiftExpressionContext;

	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseShiftExpression;

	public override get kind() {
		return BitwiseShiftExpression.kind;
	}

	public static readonly ruleName = KindParseRuleMapping[this.kind];

	public override get ruleName() {
		return BitwiseShiftExpression.ruleName;
	}

	constructor(antlrRuleCtx: BitwiseShiftExpressionContext, parent: CompilableASTNode) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	public async primarySemanticAnalysis(): Promise<void> {
		const antlrRuleChildren = this.getAntlrRuleChildren();
		const leftOp: Expression = this.children[0];
		const rightOp: Expression = this.children[1];

		const operator = <KipperBitwiseShiftOperator | undefined>antlrRuleChildren.find((token) => {
			return (
				token instanceof BitwiseShiftOperatorsContext &&
				kipperBitwiseShiftOperators.find((op) => op === token.text) !== undefined
			);
		})?.text;

		if (!operator || !leftOp || !rightOp) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			leftOp: leftOp,
			rightOp: rightOp,
			operator: operator,
		};
	}

	public async primarySemanticTypeChecking(): Promise<void> {
		this.typeSemantics = {
			evaluatedType: CheckedType.fromCompilableType("num"),
		};
	}

	public checkForWarnings = undefined;

	public override get antlrRuleCtx(): BitwiseOrExpressionContext {
		return this._antlrRuleCtx;
	}

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseOrExpression;

	readonly targetCodeGenerator = this.codeGenerator.bitwiseOrExpression;
}
