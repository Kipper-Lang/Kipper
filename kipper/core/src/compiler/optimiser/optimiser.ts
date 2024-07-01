/**
 * The primary Kipper optimiser for optimising Kipper code and removing dead code.
 * @since 0.8.0
 */
import type { RootASTNode } from "../ast";
import type { KipperProgramContext } from "../program-ctx";
import type { BuiltInFunction, BuiltInVariable, InternalFunction } from "../runtime-built-ins";

/**
 * The options available for an optimisation run in {@link KipperOptimiser.optimise}.
 * @since 0.8.0
 */
export interface OptimisationOptions {
	/**
	 * If set to true, the internal functions of the compiled code will be optimised using tree-shaking reducing the size
	 * of the output.
	 * @since 0.8.0
	 */
	optimiseInternals?: boolean;
	/**
	 * If set to true, the built-in functions of the compiled code will be optimised using tree-shaking reducing the size
	 * of the output.
	 * @since 0.8.0
	 */
	optimiseBuiltIns?: boolean;
}

/**
 * The default configuration for {@link OptimisationOptions}.
 * @since 0.8.0
 */
export const defaultOptimisationOptions: OptimisationOptions = {
	optimiseInternals: true,
	optimiseBuiltIns: false,
};

/**
 * The Optimiser class for optimising Kipper code and removing dead code.
 *
 * This class takes in an abstract syntax tree that was semantically analysed and outputs a new optimised abstract
 * syntax tree that can be translated into a target language.
 * @since 0.8.0
 */
export class KipperOptimiser {
	public readonly programCtx: KipperProgramContext;

	constructor(programCtx: KipperProgramContext) {
		this.programCtx = programCtx;
	}

	/**
	 * Optimises the built-in functions of Kipper by removing any unneeded built-in definition.
	 * @private
	 * @since 0.8.0
	 */
	private async optimiseBuiltIns(): Promise<void> {
		// Optimise the registered built-in variables by optimising them using the stored references.
		const newBuiltInVariables: Array<BuiltInVariable> = [];
		for (const ref of this.programCtx.builtInVariableReferences) {
			const alreadyIncluded: boolean = newBuiltInVariables.find((r) => r === ref.refTarget) !== undefined;
			if (!alreadyIncluded) {
				newBuiltInVariables.push(ref.refTarget);
			}
		}
		this.programCtx.clearBuiltInVariables();
		this.programCtx.registerBuiltInVariables(newBuiltInVariables);

		// Optimise the registered built-in functions by optimising them using the stored references.
		const newBuiltInFunctions: Array<BuiltInFunction> = [];
		for (const ref of this.programCtx.builtInFunctionReferences) {
			const alreadyIncluded: boolean = newBuiltInFunctions.find((r) => r === ref.refTarget) !== undefined;
			if (!alreadyIncluded) {
				newBuiltInFunctions.push(ref.refTarget);
			}
		}
		this.programCtx.clearBuiltInFunctions();
		this.programCtx.registerBuiltInFunctions(newBuiltInFunctions);
	}

	/**
	 * Optimises the internal functions of Kipper by removing any unneeded internal definition.
	 * @private
	 * @since 0.8.0
	 */
	private async optimiseInternals(): Promise<void> {
		const newInternals: Array<InternalFunction> = [];
		for (const ref of this.programCtx.internalReferences) {
			const alreadyIncluded: boolean = newInternals.find((r) => r === ref.refTarget) !== undefined;
			if (!alreadyIncluded) {
				newInternals.push(ref.refTarget);
			}
		}

		// Removing the old internals and replacing them with the new ones.
		this.programCtx.internals.splice(0);
		this.programCtx.internals.push(...newInternals);
	}

	/**
	 * Optimises the {@link astTree} and {@link programCtx} based on the {@link options} argument.
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
		if (options.optimiseInternals) {
			await this.optimiseInternals();
		}
		if (options.optimiseBuiltIns) {
			await this.optimiseBuiltIns();
		}

		return astTree;
	}
}
