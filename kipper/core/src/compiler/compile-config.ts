/**
 * Configuration for a Kipper program that can be passed to {@link KipperCompiler.compile}.
 * @since 0.10.0
 */
import type {BuiltInFunction, BuiltInVariable} from "./semantics/runtime-built-ins";
import type {KipperCompileTarget} from "./target-presets";
import type {OptimisationOptions} from "./optimiser";
import {defaultOptimisationOptions} from "./optimiser";

/**
 * Compilation Configuration for a Kipper program. This interface will be wrapped using {@link EvaluatedCompileConfig}
 * if it's passed to {@link KipperCompiler.compile}.
 * @since 0.1.0
 */
export interface CompileConfig {
	/**
	 * The translation languages for the compilation.
	 * @since 0.5.0
	 */
	target: KipperCompileTarget;

	/**
	 * The built-in functions that will be available in a Kipper program. This option overwrites the default built-ins,
	 * if you wish to only add new built-in functions write to {@link extendBuiltInFunctions}.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	builtInFunctions?: Array<BuiltInFunction>;

	/**
	 * Extends the {@link builtInFunctions} with the specified items. If {@link builtInFunctions} is undefined, then it
	 * will simply extend the default array.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	extendBuiltInFunctions?: Array<BuiltInFunction>;

	/**
	 * The built-in variables that will be available in a Kipper program. This option overwrites the default built-ins,
	 * if you wish to only add new built-in variables write to {@link extendBuiltInVariables}.
	 *
	 * All built-in variables defined here must be implemented by the {@link target.builtInGenerator}.
	 * @since 0.10.0
	 */
	builtInVariables?: Array<BuiltInVariable>;

	/**
	 * Extends the {@link builtInVariables} with the specified items. If {@link builtInVariables} is undefined, then it
	 * will simply extend the default array.
	 *
	 * All built-in variables defined here must be implemented by the {@link target.builtInGenerator}.
	 * @since 0.10.0
	 */
	extendBuiltInVariables?: Array<BuiltInVariable>;

	/**
	 * The filename that should be used to represent the program.
	 * @since 0.2.0
	 */
	fileName?: string;

	/**
	 * Options for the {@link KipperOptimiser}.
	 * @since 0.8.0
	 */
	optimisationOptions?: OptimisationOptions;

	/**
	 * If set to true, the compiler will check for warnings and add them to {@link KipperProgramContext.warnings} and
	 * {@link KipperCompileResult.warnings}.
	 * @since 0.9.0
	 */
	warnings?: boolean;

	/**
	 * If set to true, the compiler will attempt to recover from compilation errors if they are encountered. This will
	 * mean the compiler can process multiple errors, without aborting on the first one encountered. This though can
	 * result in invalid errors being generated, as a result of other errors. (Error recovery does not include syntax
	 * error recovery and if a syntax error is encountered, the compiler aborts immediately.)
	 *
	 * Generally though, it is good to use compiler error recovery, which is why it is enabled per default and should
	 * rarely be disabled.
	 *
	 * If set to false, the compiler will stop processing on the first error that is encountered. Unlike
	 * {@link abortOnFirstError} it will *not* throw the error, but instead simple store it in
	 * {@link KipperProgramContext.errors} and {@link KipperCompileResult.errors}.
	 * @since 0.10.0
	 */
	recover?: boolean;

	/**
	 * If set to true, the compiler will throw the first error that is encountered and cancel the compilation.
	 *
	 * This per default overwrites {@link recover}.
	 * @since 0.10.0
	 */
	abortOnFirstError?: boolean;
}

/**
 * Runtime Compile config class, which implements the {@link CompileConfig} interface and is able to be
 * passed onto the {@link KipperCompiler.compile} function as a valid config argument.
 *
 * This class will store both the {@link defaults default values} and actual values for the compilation. All actual
 * values will be processed and evaluated on construction, so that every option is not undefined.
 * @since 0.1.0
 */
export class EvaluatedCompileConfig implements CompileConfig {
	/**
	 * Original user-defined {@link CompileConfig}, which may not be overwritten anymore, as the compile-arguments
	 * were already processed using the {@link constructor} of this class.
	 */
	public readonly userOptions: CompileConfig;

	/**
	 * The default configuration for this class.
	 * @since 0.2.0
	 */
	public static readonly defaults = {
		extendBuiltInFunctions: <Array<BuiltInFunction>>[], // Use no custom built-in functions per default
		extendBuiltInVariables: <Array<BuiltInVariable>>[], // Use no custom built-in variables per default
		fileName: "anonymous-script", // Default name if no name is specified
		optimisationOptions: defaultOptimisationOptions,
		warnings: true, // Always generate warnings by default
		recover: true, // Always try to recover from compilation errors
		abortOnFirstError: false, // This should never be enabled per default
	} satisfies { [k: string]: CompileConfig[keyof CompileConfig] };

	/**
	 * The translation languages for the compilation.
	 * @since 0.5.0
	 */
	public readonly target: KipperCompileTarget;

	/**
	 * Extensions to the global built-in functions that should not replace the primary {@link builtInFunctions}.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	public readonly extendBuiltInFunctions: Array<BuiltInFunction>;

	/**
	 * Extends the {@link builtInVariables} with the specified items. If {@link builtInVariables} is undefined, then it
	 * will simply extend the default array.
	 *
	 * All built-in variables defined here must be implemented by the {@link target.builtInGenerator}.
	 * @since 0.10.0
	 */
	public readonly extendBuiltInVariables: Array<BuiltInVariable>;

	/**
	 * The filename that should be used to represent the program.
	 * @since 0.2.0
	 */
	public readonly fileName: string;

	/**
	 * Options for the {@link KipperOptimiser}.
	 * @since 0.8.0
	 */
	public readonly optimisationOptions: OptimisationOptions;

	/**
	 * If set to true, the compiler will check for warnings and add them to {@link KipperProgramContext.warnings} and
	 * {@link KipperCompileResult.warnings}.
	 * @since 0.9.0
	 */
	public readonly warnings: boolean;

	/**
	 * If set to true, the compiler will attempt to recover from compilation errors if they are encountered. This will
	 * lead to more errors being reported and allowing for bigger more detailed compiler logs, but can in rare cases
	 * lead to misleading errors that are caused as a result of another compilation errors.
	 *
	 * Generally though, it is considered a good practise to use compiler error recovery, which is why it is enabled per
	 * default.
	 * @since 0.10.0
	 */
	public readonly recover: boolean;

	/**
	 * Throws an error and cancels the compilation on the first error that is encountered.
	 *
	 * This per default overwrites {@link recover}.
	 * @since 0.10.0
	 */
	public readonly abortOnFirstError: boolean;

	/**
	 * Gets a non-undefined config option from the specified config object. If the option is undefined, then the default
	 * value will be returned.
	 * @param option The option key to get the option for.
	 * @param rawConfig The raw config object to get the option from.
	 * @since 0.10.0
	 * @private
	 */
	private getConfigOption<T>(option: keyof (typeof EvaluatedCompileConfig)["defaults"], rawConfig: CompileConfig): T {
		if (rawConfig[option] !== undefined) {
			return rawConfig[option] as T;
		}
		return EvaluatedCompileConfig.defaults[option] as T;
	}

	constructor(rawConfig: CompileConfig) {
		this.userOptions = rawConfig;

		// Evaluate all config options
		this.target = rawConfig.target;
		this.extendBuiltInFunctions = this.getConfigOption("extendBuiltInFunctions", rawConfig);
		this.extendBuiltInVariables = this.getConfigOption("extendBuiltInVariables", rawConfig);
		this.fileName = this.getConfigOption("fileName", rawConfig);
		this.optimisationOptions = this.getConfigOption("optimisationOptions", rawConfig);
		this.warnings = this.getConfigOption("warnings", rawConfig);
		this.recover = this.getConfigOption("recover", rawConfig);
		this.abortOnFirstError = this.getConfigOption("abortOnFirstError", rawConfig);
	}
}
