import { Parser } from "antlr4ts/Parser";
import type { TokenStream } from "antlr4ts/TokenStream";

export default abstract class KipperParserBase extends Parser {
	private _insideExpression: boolean;
	private _insideLambda: boolean;

	protected constructor(input: TokenStream) {
		super(input);
		this._insideExpression = false;
		this._insideLambda = false;
	}

	protected insideExpressionStatement(): boolean {
		return this._insideExpression;
	}

	protected notInsideExpressionStatement(): boolean {
		return !this._insideExpression;
	}

	protected insideLambda(): boolean {
		return this._insideExpression && this._insideLambda;
	}

	protected enterExpressionStatement(): void {
		this._insideExpression = true;
	}

	protected exitExpressionStatement(): void {
		this._insideExpression = false;
	}

	protected enterLambda(): void {
		this._insideLambda = true;
	}

	protected exitLambda(): void {
		this._insideLambda = false;
	}
}
