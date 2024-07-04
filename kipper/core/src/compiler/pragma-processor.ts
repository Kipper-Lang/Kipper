import type { Token } from "antlr4ts";
import type { CompileConfig } from "./compile-config";

/**
 * Processes the pragmas which were lexed by the {@link KipperLexer}.
 * @since 0.11.0
 */
export class PragmaProcessor {
	public static pragmaStaticPrefix = "#pragma";
	public static pragmaProcessors = {
		"no-optimise": (ctx: CompileConfig) => {
			ctx.optimisationOptions = {
				optimiseInternals: false,
				optimiseBuiltIns: false,
			};
		},
	};

	public static get pragmaKeys() {
		return Object.keys(this.pragmaProcessors) as Array<keyof typeof this.pragmaProcessors>;
	}

	/**
	 * Processes the pragma tokens and calls up the handler for each provided key
	 * @param options The compile options which are already present.
	 * @param lines The pragma tokens to process.
	 * @return The new compile options which were modified according to the present pragmas.
	 * @since 0.11.0
	 */
	public static async process(options: CompileConfig, lines: Token[]): Promise<CompileConfig> {
		for (const line of lines) {
			this.processSingleLine(options, line);
		}
		return options;
	}

	private static processSingleLine(ctx: CompileConfig, line: Token): void {
		const instructions = line.text!!.replace(this.pragmaStaticPrefix, "").trim();
		for (const pKey of this.pragmaKeys) {
			if (instructions === pKey) {
				this.pragmaProcessors[pKey](ctx);
				return;
			}
		}
	}
}
