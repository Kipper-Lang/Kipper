import type { Token } from "antlr4ts";

export class PragmaProcessor {
	/**
	 * Whether the code should be optimized.
	 */
	private optimized: boolean = true;

	/**
	 * Processes the pragma tokens.
	 * @param pragmas The pragma tokens to process.
	 */
	public process(pragmas: Token[]): void {
		for (const pragma of pragmas) {
			let pragmaContent = pragma.text?.substring(7).trim();

			if(pragmaContent === undefined) {
				throw new Error("Pragma content is undefined");
			} else if (pragmaContent.startsWith("not-optimized")) {
				this.optimized = false;
			}
		}
	}

	/**
	 * Returns whether the code should be optimized.
	 */
	public isOptimized(): boolean {
		return this.optimized;
	}
}
