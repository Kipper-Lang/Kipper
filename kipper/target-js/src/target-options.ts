/**
 * Supported ECMAScript versions which Kipper can target.
 * @since 0.11.0
 */
export type ECMAVersion = "es5" | "es6" /* ... */; // TODO! Add remaining versions supported by the SWC

/**
 * Options for the JavaScript target.
 * @since 0.11.0
 */
export interface TargetOptions {
	/**
	 * The ECMAScript version to target.
	 */
	ecmaVersion?: ECMAVersion;
}
