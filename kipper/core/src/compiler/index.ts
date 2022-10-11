/**
 * The main module for the Kipper compiler.
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.1
 */

export * as parser from "./parser";
export * as semantics from "./semantics";
export * as optimiser from "./optimiser";
export * as targetPresets from "./target-presets";
export * from "./parser";
export * from "./semantics";
export * from "./optimiser";
export * from "./target-presets";
export * from "./runtime-built-ins";
export * from "./scope";
export * from "./local-scope";
export * from "./global-scope";
export * from "./function-scope";
export * from "./scope-declaration";
export * from "./antlr-error-listener";
export * from "./program-ctx";
export * from "./compiler";
export * from "./reference";
