/**
 * A basic implementation of an AST node that can be semantically analysed and has a pre-defined behaviour for
 * processing the AST. This class is intended to be extended by other AST nodes, more specifically
 * {@link CompilableASTNode}.
 * @since 0.10.0
 */
import type { KipperParserRuleContext } from "../parser";
import type { TargetASTNodeSemanticAnalyser } from "../target-presets";
import type { TargetAnalysableNode } from "./target-node";
import { ParserASTNode, SemanticData, TypeData } from "./ast-node";
import {KipperError, MissingRequiredSemanticDataError} from "../../errors";
import { KipperProgramContext } from "../program-ctx";
import { RootASTNode } from "./root-ast-node";
import { EvaluatedCompileConfig } from "../compiler";
import { ScopeDeclaration } from "../analysis";

/**
 * An eligible parent for an analysable AST node.
 */
export type AnalysableNodeParent = AnalysableASTNode<SemanticData, TypeData> | RootASTNode;

/**
 * An eligible parent for an analysable AST node.
 */
export type AnalysableNodeChild = AnalysableASTNode<SemanticData, TypeData>;

/**
 * A basic implementation of an AST node that can be semantically analysed and has a pre-defined behaviour for
 * processing the AST. This class is intended to be extended by other AST nodes, more specifically
 * {@link CompilableASTNode}.
 * @since 0.10.0
 */
export abstract class AnalysableASTNode<Semantics extends SemanticData, TypeSemantics extends TypeData>
	extends ParserASTNode<Semantics, TypeSemantics>
	implements TargetAnalysableNode
{
	protected override _children: Array<AnalysableNodeChild>;
	protected override _parent: AnalysableNodeParent;
	protected _errors: Array<KipperError>;

	protected constructor(antlrCtx: KipperParserRuleContext, parent: AnalysableNodeParent) {
		super(antlrCtx, parent);
		this._children = [];
		this._parent = parent;
		this._errors = [];
	}

	/**
	 * Returns the {@link CompilableASTNode parent} that has this node as a child.
	 * @since 0.8.0
	 */
	public get parent(): AnalysableNodeParent {
		return this._parent;
	}

	/**
	 * The children of this AST node.
	 * @since 0.8.0
	 */
	public get children(): Array<AnalysableNodeChild> {
		return this._children;
	}

	/**
	 * The file context instance containing the metadata for the listener and this AST node.
	 * @since 0.8.0
	 */
	public get programCtx(): KipperProgramContext {
		return this.parent.programCtx;
	}

	/**
	 * The compilation config for the program of this AST node.
	 * @since 0.10.0
	 */
	public get compileConfig(): EvaluatedCompileConfig {
		return this.programCtx.compileConfig;
	}


	/**
	 * The errors that were caused by this node. Includes all errors from children.
	 * @since 0.10.0
	 */
	public get errors(): Array<KipperError> {
		return [...this._errors, ...this._children.flatMap((child) => child.errors)];
	}

	/**
	 * Adds the specified {@link error} to the list of errors caused by this node.
	 *
	 * This is not the same as {@link KipperProgramContext.reportError}, since that function automatically logs the error
	 * as well and this function does not! This is only intended to keep track if a node has failed.
	 * @param error The error to add.
	 */
	public addError(error: KipperError) {
		this._errors.push(error);
	}

	/**
	 * Returns true if the {@link this.primarySemanticAnalysis semantic analysis} or
	 * {@link this.primarySemanticTypeChecking type checking} of {@link CompilableASTNode this node} or any
	 * {@link children children nodes} failed.
	 *
	 * This indicates that the node is not valid and can not be translated.
	 * @since 0.10.0
	 */
	public get hasFailed(): boolean {
		return this.errors.length > 0;
	}

	/**
	 * Checks whether the given error should be recovered from or not.
	 * @param e The error to check.
	 * @since 0.10.0
	 * @private
	 */
	private shouldRecoverFromError(e: Error | KipperError): boolean {
		// Note: Option 'abortOnFirstError' overwrites 'recover' per default
		return e instanceof KipperError && this.compileConfig.recover && !this.compileConfig.abortOnFirstError;
	}

	/**
	 * Handles the specified error that occurred during the semantic analysis in a standardised way.
	 * @param e The error to handle.
	 * @since 0.10.0
	 * @private
	 */
	private handleSemanticAnalysisError(e: Error | KipperError): void {
		if (this.shouldRecoverFromError(<Error>e)) {
			this.programCtx.reportError(<KipperError>e);
		} else if (!(e instanceof MissingRequiredSemanticDataError)) {
			// If the error is not a MissingRequiredSemanticDataError, then re-throw it. This is due to the fact that
			// the error is an intended error and used as prevention for the parent node to continue processing.
			//
			// -> The children will already have reported the error, so the parent shouldn't try to access data that does
			// not exist or is not valid. Also see 'this.ensureChildSemanticallyValid()'.
			throw e;
		}
	}

	/**
	 * Ensures that the specified child node successfully passed the semantic analysis.
	 *
	 * This is done by checking if the {@link AnalysableASTNode.hasFailed hasFailed} property is set to true and if the
	 * {@link AnalysableASTNode.semanticData semanticData} property is undefined. If both of these conditions are met,
	 * then the child failed in an intended way and the parent should not continue processing, as it will cause errors.
	 *
	 * This is used to help the control flow and also to ensure that the parent node does not try to access the semantic
	 * data of a child node that has failed.
	 *
	 * Intentionally this will also likely cause an {@link UndefinedSemanticsError} in case the semantic data is missing,
	 * but {@link AnalysableASTNode.hasFailed hasFailed} is not returning true. Since that's an automatic contradiction,
	 * it's better to ignore it here and let the {@link UndefinedSemanticsError} be thrown later.
	 * @param child The child to check. Can be either a {@link AnalysableNodeChild} or a {@link ScopeDeclaration}. The
	 * reason why scope declarations are allowed is that they wrap a {@link AnalysableNodeChild} and for ease of use,
	 * should be allowed to be passed here.
	 * @throws {MissingRequiredSemanticDataError} If the child failed and the semantic data is undefined. Note that this
	 * is not like {@link UndefinedSemanticsError}, as that error is thrown when the semantic data is undefined in an
	 * unintended or unexpected way. This error on the other will be handled by the compiler and influence the control
	 * flow.
	 * @since 0.10.0
	 * @protected
	 */
	protected ensureChildSemanticallyValid(child: AnalysableNodeChild | ScopeDeclaration): void {
		if (child instanceof ScopeDeclaration) {
			child = child.node;
		}

		if (child.hasFailed && child.semanticData === undefined) {
			throw new MissingRequiredSemanticDataError();
		}
	}

	/**
	 * Ensures that the specified child node successfully passed the type checking step of semantic analysis.
	 *
	 * This is done by checking if the {@link AnalysableASTNode.hasFailed hasFailed} property is set to true and if the
	 * {@link AnalysableASTNode.typeSemantics typeSemantics} property is undefined. If both of these conditions are met,
	 * then the child failed in an intended way and the parent should not continue processing, as it will cause errors.
	 *
	 * This is used to help the control flow and also to ensure that the parent node does not try to access the type
	 * semantic data of a child node that has failed.
	 *
	 * Intentionally this will also likely cause an {@link UndefinedSemanticsError} in case the type semantic data is
	 * missing, but {@link AnalysableASTNode.hasFailed hasFailed} is not returning true. Since that's an automatic
	 * contradiction, it's better to ignore it here and let the {@link UndefinedSemanticsError} be thrown later.
	 * @param child The child to check. Can be either a {@link AnalysableNodeChild} or a {@link ScopeDeclaration}. The
	 * reason why scope declarations are allowed is that they wrap a {@link AnalysableNodeChild} and for ease of use,
	 * should be allowed to be passed here.
	 * @throws {MissingRequiredSemanticDataError} If the child failed and the semantic data is undefined. Note that this
	 * is not like {@link UndefinedSemanticsError}, as that error is thrown when the semantic data is undefined in an
	 * unintended or unexpected way. This error on the other will be handled by the compiler and influence the control
	 * flow.
	 * @since 0.10.0
	 * @protected
	 */
	protected ensureChildTypeSemanticallyValid(child: AnalysableNodeChild | ScopeDeclaration): void {
		if (child instanceof ScopeDeclaration) {
			child = child.node;
		}

		console.error(child.typeSemantics);
		if (child.hasFailed && child.typeSemantics === undefined) {
			throw new MissingRequiredSemanticDataError();
		}
	}

	/**
	 * Semantically analyses the code inside this AST node and all {@link this.children children nodes}.
	 *
	 * This function will recursively call itself on the {@link this.children} instances and analyse the deepest children
	 * nodes first, working up as the tokens get more complex. This way the parent tokens can access the semantics of
	 * the children and properly process itself.
	 *
	 * This function will set the {@link this.semanticData} property and allow the use of {@link this.getSemanticData},
	 * without getting any error.
	 * @since 0.8.0
	 */
	public async semanticAnalysis(): Promise<void> {
		// Start with the evaluation of the children
		for (const child of this.children) {
			try {
				await child.semanticAnalysis();
			} catch (e) {
				this.handleSemanticAnalysisError(<Error>e);
			}
		}

		// If the semantic analysis until now hasn't failed, do the semantic analysis of this node (if defined)
		// Note: The specific AST node will have to handle errors in their children and ensure for analysis all required
		// data is present.
		if (this.primarySemanticAnalysis !== undefined) {
			await this.primarySemanticAnalysis();
		}
	}

	/**
	 * Performs type checking on this AST node and all {@link this.children children nodes}. This uses the
	 * {@link this.semanticData semantic data} that was evaluated during {@link this.semanticAnalysis semantic analysis}.
	 * @since 0.10.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// Start with the evaluation of the children
		for (const child of this.children) {
			try {
				await child.semanticTypeChecking();
			} catch (e) {
				this.handleSemanticAnalysisError(<Error>e);
			}
		}

		// If the semantic analysis until now hasn't failed, do the semantic type checking of this node (if defined)
		if (!this.hasFailed && this.primarySemanticTypeChecking !== undefined) {
			await this.primarySemanticTypeChecking();
		}
	}

	/**
	 * Wrap-up semantic analysis, which analyses this AST node and all {@link this.children children nodes}, and
	 * checks whether they are semantically valid for the {@link this.target target language}. This uses the
	 * {@link this.semanticData semantic data} and {@link this.typeData type data} that was evaluated during the previous
	 * {@link this.semanticAnalysis semantic analysis} and {@link this.semanticTypeChecking type checking} steps.
	 * @since 0.10.0
	 */
	public async wrapUpSemanticAnalysis(): Promise<void> {
		// Start with the evaluation of the children
		for (const child of this.children) {
			try {
				await child.wrapUpSemanticAnalysis();
			} catch (e) {
				this.handleSemanticAnalysisError(<Error>e);
			}
		}

		// If the semantic analysis until now hasn't failed, do the target semantic analysis of this node (if defined)
		if (!this.hasFailed && this.targetSemanticAnalysis !== undefined) {
			await this.targetSemanticAnalysis(this);
		}
	}

	/**
	 * Recursively checks for warnings by calling this function on all {@link this.children children} and calling
	 * {@link checkForWarnings} on this class as well.
	 * @since 0.10.0
	 */
	public async recursivelyCheckForWarnings(): Promise<void> {
		for (const child of this.children) {
			await child.recursivelyCheckForWarnings();
		}

		// If the check for warnings function is defined, then call it
		if (this.checkForWarnings) {
			await this.checkForWarnings();
		}
	}

	/**
	 * Semantically analyses the code inside this AST node.
	 *
	 * If this is {@link undefined} then it means there is no semantic analysis that needs to be done. This will also
	 * automatically make {@link semanticData} be defined as an empty object.
	 * @throws KipperError if the code is not valid.
	 * @since 0.8.0
	 */
	protected abstract primarySemanticAnalysis?(): Promise<void>;

	/**
	 * Type checks the code inside this AST node.
	 *
	 * If this is {@link undefined} then it means there is no type checking that needs to be done. This will also
	 * automatically make {@link typeSemantics} be defined as an empty object.
	 * @throws TypeError When a type mismatch or invalid usage is encountered.
	 * @since 0.8.0
	 */
	protected abstract primarySemanticTypeChecking?(): Promise<void>;

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code. This
	 * will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 *
	 * If this is {@link undefined} then it means there is no warning checks that needs to be done.
	 * @since 0.9.0
	 */
	protected abstract checkForWarnings?(): Promise<void>;

	abstract readonly targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any> | undefined;
}
