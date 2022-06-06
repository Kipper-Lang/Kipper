/**
 * The primary Kipper optimiser for optimising Kipper code and removing dead code.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.8.0
 */

import type { RootASTNode } from "../parser";
import type { KipperProgramContext } from "../program-ctx";

/**
 * The options available for an optimisation run in {@link KipperOptimiser.optimise}.
 * @since 0.8.0
 */
export interface OptimisationOptions {
	/**
	 * If true, this
	 * @since 0.8.0
	 */
	optimiseInternals?: boolean;
	optimiseBuiltIns?: boolean;
}

/**
 * The default configuration for {@link OptimisationOptions}.
 * @since 0.8.0
 */
export const defaultOptimisationOptions: OptimisationOptions = {
	optimiseInternals: true,
	optimiseBuiltIns: true,
};

/**
 * The primary Kipper optimiser for optimising Kipper code and removing dead code.
 *
 * This class takes in an abstract syntax tree that was semantically analysed and outputs a new optimised abstract
 * syntax tree that can be translated into a target language.
 * @since 0.8.0
 */
export class KipperOptimiser {
	constructor(public programCtx: KipperProgramContext) {}

	/**
	 * Optimises the {@link astTree} based on the {@link options} argument.
	 *
	 * This function takes in an abstract syntax tree that was semantically analysed and outputs a new optimised abstract
	 * syntax tree that can be translated into a target language.
	 * @param astTree
	 * @param options
	 * @since 0.8.0
	 */
	public async optimise(
		astTree: RootASTNode,
		options: OptimisationOptions = defaultOptimisationOptions,
	): Promise<RootASTNode> {
		return astTree;
	}
}
