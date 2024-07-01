import { BitwiseExpression } from "../bitwise-expression";
import {
	BitwiseOrExpressionContext,
	BitwiseXorExpressionContext,
	KindParseRuleMapping,
	ParseRuleKindMapping,
} from "../../../../../parser";
import { CompilableASTNode } from "../../../../compilable-ast-node";
import { Expression } from "../../expression";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { CheckedType } from "../../../../../analysis";
import { BitwiseXorExpressionSemantics } from "./bitwise-xor-expression-semantics";
import { BitwiseXorExpressionTypeSemantics } from "./bitwise-xor-expression-type-semantics";

export class BitwiseXorExpression extends BitwiseExpression<
	BitwiseXorExpressionSemantics,
	BitwiseXorExpressionTypeSemantics
> {
	protected override readonly _antlrRuleCtx: BitwiseXorExpressionContext;

	public static readonly kind = ParseRuleKindMapping.RULE_bitwiseXorExpression;

	public override get kind() {
		return BitwiseXorExpression.kind;
	}

	public static readonly ruleName = KindParseRuleMapping[this.kind];

	public override get ruleName() {
		return BitwiseXorExpression.ruleName;
	}

	constructor(antlrRuleCtx: BitwiseXorExpressionContext, parent: CompilableASTNode) {
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
			operator: "^",
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

	readonly targetSemanticAnalysis = this.semanticAnalyser.bitwiseXorExpression;

	readonly targetCodeGenerator = this.codeGenerator.bitwiseXorExpression;
}
