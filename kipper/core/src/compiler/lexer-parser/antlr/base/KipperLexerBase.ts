import { Lexer } from "antlr4ts/Lexer";
import type { CharStream } from "antlr4ts/CharStream";
import type { Vocabulary } from "antlr4ts/Vocabulary";

export default abstract class KipperLexerBase extends Lexer {
	abstract readonly channelNames: string[];
	abstract readonly grammarFileName: string;
	abstract readonly modeNames: string[];
	abstract readonly ruleNames: string[];
	abstract readonly vocabulary: Vocabulary;
	private fStringDepth: number;

	protected constructor(input: CharStream) {
		super(input);
		this.fStringDepth = 0;
	}

	protected insideFString(): boolean {
		return this.fStringDepth > 0;
	}

	protected incrementFStringDepth(): void {
		this.fStringDepth++;
	}

	protected decrementFStringDepth(): void {
		this.fStringDepth--;
	}
}
