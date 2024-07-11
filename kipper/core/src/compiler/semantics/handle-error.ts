/**
 * Functions for handling errors that occur during the semantic analysis of a node.
 * @since 0.10.0
 */
import type { AnalysableASTNode, RootASTNode } from "../ast";
import { KipperError, MissingRequiredSemanticDataError } from "../../errors";

/**
 * Checks whether the given error should be recovered from or not.
 * @param node The node that is currently being processed.
 * @param error The error to check.
 * @since 0.10.0
 */
export function shouldRecoverFromError(node: RootASTNode | AnalysableASTNode, error: Error | KipperError): boolean {
	// Note: Option 'abortOnFirstError' overwrites 'recover' per default
	return error instanceof KipperError && node.compileConfig.recover && !node.compileConfig.abortOnFirstError;
}

/**
 * Handles the specified error that occurred during the semantic analysis of a node in a standardised way.
 * @param node The node that is currently being processed.
 * @param error The error to handle.
 * @since 0.10.0
 */
export function handleSemanticError(node: RootASTNode | AnalysableASTNode, error: Error | KipperError): void {
	if (shouldRecoverFromError(node, <Error>error)) {
		node.programCtx.reportError(<KipperError>error);
	} else if (!(error instanceof MissingRequiredSemanticDataError)) {
		// If the error is not a MissingRequiredSemanticDataError, then re-throw it. This is due to the fact that
		// the error is an intended error and used as prevention for nodes to continue processing despite required data
		// not being available.
		//
		// -> The required node will already have reported the error, so we shouldn't try to access data that does
		// not exist or is not valid. Also see 'this.ensureSemanticallyValid()'/'this.ensureTypeSemanticallyValid()'.
		throw error;
	}
}
