import { Parser } from "antlr4ts/Parser";
import { TokenStream } from "antlr4ts/TokenStream";

export default abstract class KipperParserBase extends Parser {
	private insideExpression: boolean;

	protected constructor(input: TokenStream) {
		super(input);
		this.insideExpression = false;
	}

	protected insideExpressionStatement(): boolean {
		return this.insideExpression;
	}

	protected notInsideExpressionStatement(): boolean {
		return !this.insideExpression;
	}

	protected enterExpressionStatement(): void {
		this.insideExpression = true;
	}

	protected exitExpressionStatement(): void {
		this.insideExpression = false;
	}
}
