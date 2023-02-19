import { ParserRuleContext } from "antlr4ts";
import { ASTKind } from "./parser-ast-mapping";

/**
 * A custom implementation of the Antlr4 {@link ParserRuleContext} class, representing a node in the parse tree.
 * @since 0.10.0
 */
export abstract class KipperParserRuleContext extends ParserRuleContext {
	protected constructor();
	protected constructor(parent: ParserRuleContext | undefined, invokingState: number);
	protected constructor(parent?: ParserRuleContext | undefined, invokingState?: number) {
		if (invokingState === undefined) {
			super();
		} else {
			super(parent, invokingState);
		}
	}

	public abstract get ruleIndex(): number;

	/**
	 * Returns the AST-specific label kind number of this rule ctx. This is defined if the rule ctx is a labelled
	 * alternative of a rule and the {@link ruleIndex} would only return the parent rule's kind number.
	 * @since 0.10.0
	 */
	public get labelASTKind(): ASTKind | undefined {
		// @ts-ignore
		return "_labelASTKind" in this ? this._labelASTKind : undefined;
	}

	/**
	 * Returns the specific unique kind number of this rule ctx. This is used to map the rule ctx to the correct AST node.
	 *
	 * For more info on this, see {@link ParserASTMapping} and the documentation provided.
	 * @since 0.10.0
	 */
	public get astSyntaxKind(): ASTKind {
		return this.labelASTKind ?? <ASTKind>this.ruleIndex;
	}
}
