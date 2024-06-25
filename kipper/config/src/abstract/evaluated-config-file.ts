/**
 * A type that represents a processed configuration value.
 * @since 0.11.0
 */
export type EvaluatedConfigValue = any;

/**
 * A type that represents a processed configuration file.
 * @since 0.11.0
 */
export interface EvaluatedConfigFile {
	[key: string]: EvaluatedConfigValue;
}
