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
import { KipperError, MissingRequiredSemanticDataError } from "../../errors";
import { KipperProgramContext } from "../program-ctx";
import { RootASTNode } from "./nodes/root-ast-node";
import { EvaluatedCompileConfig } from "../compile-config";
import { handleSemanticError } from "../analysis";

/**
 * An eligible parent for an analysable AST node.
 */
export type AnalysableNodeParent = AnalysableASTNode | RootASTNode;

/**
 * An eligible parent for an analysable AST node.
 */
export type AnalysableNodeChild = AnalysableASTNode;

/**
 * A basic implementation of an AST node that can be semantically analysed and has a pre-defined behaviour for
 * processing the AST. This class is intended to be extended by other AST nodes, more specifically
 * {@link CompilableASTNode}.
 * @since 0.10.0
 */
export abstract class AnalysableASTNode<
		Semantics extends SemanticData = SemanticData,
		TypeSemantics extends TypeData = TypeData,
	>
	extends ParserASTNode<Semantics, TypeSemantics>
	implements TargetAnalysableNode
{
	protected override _children: Array<AnalysableNodeChild>;
	protected override _parent: AnalysableNodeParent;
	protected _errors: Array<KipperError>;
	protected _skippedSemanticAnalysis: boolean;
	protected _skippedSemanticTypeChecking: boolean;
	protected _skippedTargetSemanticAnalysis: boolean;

	protected constructor(antlrCtx: KipperParserRuleContext, parent: AnalysableNodeParent) {
		super(antlrCtx, parent);
		this._children = [];
		this._parent = parent;
		this._errors = [];
		this._skippedSemanticAnalysis = false;
		this._skippedSemanticTypeChecking = false;
		this._skippedTargetSemanticAnalysis = false;
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
	 * Returns true if the {@link this.primarySemanticAnalysis semantic analysis} of {@link CompilableASTNode this node}
	 * was skipped, due to required semantic data being missing. This indicates that the node is impossible to analyse
	 * as the required semantic data from other nodes is missing.
	 */
	public get skippedSemanticAnalysis(): boolean {
		return this._skippedSemanticAnalysis;
	}

	/**
	 * Returns true if the {@link this.primarySemanticTypeChecking type checking} of {@link CompilableASTNode this node}
	 * was skipped, due to required semantic data being missing. This indicates that the node is impossible to type check
	 * as the required semantic data from other nodes is missing.
	 * @since 0.10.0
	 */
	public get skippedSemanticTypeChecking(): boolean {
		return this._skippedSemanticTypeChecking;
	}

	/**
	 * Handles the specified error that occurred during the semantic analysis of this node in a standardised way.
	 * @param error The error to handle.
	 * @since 0.10.0
	 */
	protected handleSemanticError(error: Error | KipperError): void {
		handleSemanticError(this, error);
	}

	/**
	 * Ensures that this node successfully passed the semantic analysis. This will be primarily used by statements and
	 * declarations, which depend on other nodes to be semantically valid.
	 *
	 * This is done by checking if the {@link AnalysableASTNode.hasFailed hasFailed} property is set to true and if the
	 * {@link AnalysableASTNode.semanticData semanticData} property is undefined. If both of these conditions are met,
	 * then the node failed in an intended way and the parent should not continue processing, as it will cause errors.
	 *
	 * This is used to help the control flow and also to ensure that other nodes do not try to access the semantic
	 * data of a node that failed, as that would cause an {@link UndefinedSemanticsError}.
	 *
	 * Intentionally this will also likely cause an {@link UndefinedSemanticsError} in case the semantic data is missing
	 * and {@link AnalysableASTNode.hasFailed hasFailed} is returning false. Since that's an automatic contradiction, it's
	 * better to ignore it here and let the {@link UndefinedSemanticsError} be thrown later.
	 * @throws {MissingRequiredSemanticDataError} If the child failed and the semantic data is undefined. Note that this
	 * is not like {@link UndefinedSemanticsError}, as that error is thrown when the semantic data is undefined in an
	 * unintended or unexpected way. This error on the other will be handled by the compiler and influence the control
	 * flow.
	 * @since 0.10.0
	 * @protected
	 */
	public ensureSemanticallyValid(): void {
		if (this.hasFailed && this.semanticData === undefined) {
			throw new MissingRequiredSemanticDataError();
		}
	}

	/**
	 * Ensures that this node successfully passed the type checking step of semantic analysis. This will be primarily used
	 * by statements and declarations, which depend on other nodes to be semantically valid.
	 *
	 * This is done by checking if the {@link AnalysableASTNode.hasFailed hasFailed} property is set to true and if the
	 * {@link AnalysableASTNode.typeSemantics typeSemantics} property is undefined. If both of these conditions are met,
	 * then the child failed in an intended way and the parent should not continue processing, as it will cause errors.
	 *
	 * This is used to help the control flow and also to ensure that the parent node does not try to access the type
	 * semantic data of a child node that has failed.
	 *
	 * Intentionally this will also likely cause an {@link UndefinedSemanticsError} in case the semantic data is missing
	 * and {@link AnalysableASTNode.hasFailed hasFailed} is returning false. Since that's an automatic contradiction, it's
	 * better to ignore it here and let the {@link UndefinedSemanticsError} be thrown later.
	 * @throws {MissingRequiredSemanticDataError} If the child failed and the semantic data is undefined. Note that this
	 * is not like {@link UndefinedSemanticsError}, as that error is thrown when the semantic data is undefined in an
	 * unintended or unexpected way. This error on the other will be handled by the compiler and influence the control
	 * flow.
	 * @since 0.10.0
	 * @protected
	 */
	public ensureTypeSemanticallyValid(): void {
		if (this.hasFailed && this.typeSemantics === undefined) {
			throw new MissingRequiredSemanticDataError();
		}
	}

	/**
	 * Runs {@link semanticAnalysis} of all children nodes.
	 * @since 0.10.0
	 * @protected
	 */
	protected async semanticallyAnalyseChildren(): Promise<void> {
		for (const child of this.children) {
			try {
				await child.semanticAnalysis();
			} catch (e) {
				this.handleSemanticError(<Error>e);
			}
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
		await this.semanticallyAnalyseChildren();

		// If the semantic analysis until now hasn't failed, do the semantic analysis of this node (if defined)
		// Per default, we will say the nodes themselves handle all errors, so we don't need to do anything here
		// Note! Expressions do this differently and abort immediately all processing if one of the children failed.
		if (this.primarySemanticAnalysis !== undefined) {
			try {
				await this.primarySemanticAnalysis();
			} catch (e) {
				if (e instanceof MissingRequiredSemanticDataError) {
					this._skippedSemanticAnalysis = true;
				}
				throw e; // Pass on the error to the parent
			}
		}
	}

	/**
	 * Runs {@link semanticTypeChecking} of all children nodes.
	 * @since 0.10.0
	 * @protected
	 */
	protected async semanticallyTypeCheckChildren(): Promise<void> {
		for (const child of this.children) {
			try {
				await child.semanticTypeChecking();
			} catch (e) {
				this.handleSemanticError(<Error>e);
			}
		}
	}

	/**
	 * Performs type checking on this AST node and all {@link this.children children nodes}. This uses the
	 * {@link this.semanticData semantic data} that was evaluated during {@link this.semanticAnalysis semantic analysis}.
	 * @since 0.10.0
	 */
	public async semanticTypeChecking(): Promise<void> {
		// Start with the evaluation of the children
		await this.semanticallyTypeCheckChildren();

		// If the semantic analysis until now has evaluated data, do the semantic type checking of this node (if defined)
		// Per default, we will say the nodes themselves handle all errors, so we don't need to do anything here
		// Note! Expressions do this differently and abort immediately all processing if one of the children failed.
		// Additionally, this will also not check for 'this.hasFailed', as we still want to run type checking if possible
		// even with a logic error in the code (so we only check for the semantic data)
		if (this.semanticData && this.primarySemanticTypeChecking !== undefined) {
			try {
				await this.primarySemanticTypeChecking();
			} catch (e) {
				if (e instanceof MissingRequiredSemanticDataError) {
					this._skippedSemanticAnalysis = true;
				}
				throw e; // Pass on the error to the parent
			}
		}
	}

	/**
	 * Runs {@link semanticTypeChecking} of all children nodes.
	 * @since 0.10.0
	 * @protected
	 */
	protected async targetSemanticallyAnalyseChildren(): Promise<void> {
		for (const child of this.children) {
			try {
				await child.wrapUpSemanticAnalysis();
			} catch (e) {
				this.handleSemanticError(<Error>e);
			}
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
		await this.targetSemanticallyAnalyseChildren();

		// If the semantic analysis until now has evaluated data, do the target semantic analysis of this node (if defined)
		// Per default, we will say the nodes themselves handle all errors, so we don't need to do anything here
		// Note! Expressions do this differently and abort immediately all processing if one of the children failed.
		// Additionally, this will also not check for 'this.hasFailed', as we still want to run the target semantic
		// analysis if possible even with a logic error in the code (so we only check for the semantic data)
		if (this.semanticData && this.typeSemantics && this.targetSemanticAnalysis !== undefined) {
			try {
				await this.targetSemanticAnalysis(this);
			} catch (e) {
				if (e instanceof MissingRequiredSemanticDataError) {
					this._skippedTargetSemanticAnalysis = true;
				}
				throw e; // Pass on the error to the parent
			}
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
		if (!this.hasFailed && this.checkForWarnings) {
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
