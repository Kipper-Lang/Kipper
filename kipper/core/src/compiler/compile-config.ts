/**
 * Configuration for a Kipper program that can be passed to {@link KipperCompiler.compile}.
 * @since 0.10.0
 */
import {BuiltInFunction, kipperRuntimeBuiltInFunctions} from "./runtime-built-ins";
import {KipperCompileTarget} from "./target-presets";
import {defaultOptimisationOptions, OptimisationOptions} from "./optimiser";

/**
 * Compilation Configuration for a Kipper program. This interface will be wrapped using {@link EvaluatedCompileConfig}
 * if it's passed to {@link KipperCompiler.compile}.
 * @since 0.1.0
 */
export interface CompileConfig {
	/**
	 * The built-in functions that will be available in a Kipper program. This option overwrites the default built-ins,
	 * if you wish to only add new built-in functions write to {@link extendBuiltIns}.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	builtIns?: Array<BuiltInFunction>;

	/**
	 * Extends the {@link builtIns} with the specified items. If {@link builtIns} is undefined, then it will simply extend
	 * the default array.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	extendBuiltIns?: Array<BuiltInFunction>;

	/**
	 * The filename that should be used to represent the program.
	 * @since 0.2.0
	 */
	fileName?: string;

	/**
	 * The translation languages for the compilation.
	 * @since 0.5.0
	 */
	target: KipperCompileTarget;

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
		builtIns: kipperRuntimeBuiltInFunctions, // Default built-in globals
		extendGlobals: [], // Use no custom globals per default
		fileName: "anonymous-script", // Default name if no name is specified
		optimisationOptions: defaultOptimisationOptions,
		warnings: true, // Always generate warnings by default
		recover: true, // Always try to recover from compilation errors
		abortOnFirstError: false, // This should never be enabled per default
	};

	/**
	 * The built-in functions that will be available in a Kipper program.
	 *
	 * This will be extended by {@link extendBuiltIns}. All built-in functions defined here must be implemented by the
	 * {@link target.builtInGenerator}.
	 */
	public readonly builtIns: Array<BuiltInFunction>;

	/**
	 * Extensions to the global built-in functions that should not replace the primary {@link builtIns}.
	 *
	 * All built-in functions defined here must be implemented by the {@link target.builtInGenerator}.
	 */
	public readonly extendBuiltIns: Array<BuiltInFunction>;

	/**
	 * The filename that should be used to represent the program.
	 * @since 0.2.0
	 */
	public readonly fileName: string;

	/**
	 * The translation languages for the compilation.
	 * @since 0.5.0
	 */
	public readonly target: KipperCompileTarget;

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

	constructor(options: CompileConfig) {
		this.userOptions = options;

		// Evaluate all config options
		this.target = options.target;
		this.builtIns = options.builtIns ?? Object.values(EvaluatedCompileConfig.defaults.builtIns);
		this.extendBuiltIns = options.extendBuiltIns ?? EvaluatedCompileConfig.defaults.extendGlobals;
		this.fileName = options.fileName ?? EvaluatedCompileConfig.defaults.fileName;
		this.optimisationOptions = options.optimisationOptions ?? EvaluatedCompileConfig.defaults.optimisationOptions;
		this.warnings = options.warnings ?? EvaluatedCompileConfig.defaults.warnings;
		this.recover = options.recover ?? EvaluatedCompileConfig.defaults.recover;
		this.abortOnFirstError = options.abortOnFirstError ?? EvaluatedCompileConfig.defaults.abortOnFirstError;
	}
}
