import { Parser } from "antlr4ts/Parser";
import type { TokenStream } from "antlr4ts/TokenStream";

export default abstract class KipperParserBase extends Parser {
	private _insideExpression: boolean;
	private _insideLambda: boolean;
	private _typeExpressionDepth: number;

	protected constructor(input: TokenStream) {
		super(input);
		this._insideExpression = false;
		this._insideLambda = false;
		this._typeExpressionDepth = 0;
	}

	protected insideExpressionStatement(): boolean {
		return this._insideExpression;
	}

	protected notInsideExpressionStatement(): boolean {
		return !this._insideExpression;
	}

	protected enterExpressionStatement(): void {
		this._insideExpression = true;
	}

	protected exitExpressionStatement(): void {
		this._insideExpression = false;
	}

	protected insideLambda(): boolean {
		return this._insideExpression && this._insideLambda;
	}

	protected enterLambda(): void {
		this._insideLambda = true;
	}

	protected exitLambda(): void {
		this._insideLambda = false;
	}

	protected insideTypeExpression(): boolean {
		return this._typeExpressionDepth > 0;
	}

	protected notInsideTypeExpression(): boolean {
		return this._typeExpressionDepth === 0;
	}

	protected pushTypeExpressionDepth(): void {
		this._typeExpressionDepth++;
	}

	protected popTypeExpressionDepth(): void {
		this._typeExpressionDepth--;
	}
}
