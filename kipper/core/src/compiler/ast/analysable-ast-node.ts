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
import { KipperError } from "../../errors";
import { KipperProgramContext } from "../program-ctx";
import { RootASTNode } from "./root-ast-node";
import { EvaluatedCompileConfig } from "../compiler";

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

	protected constructor(antlrCtx: KipperParserRuleContext, parent: AnalysableNodeParent) {
		super(antlrCtx, parent);
		this._children = [];
		this._parent = parent;
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
		let incompleteSemantics: boolean = false;
		for (const child of this.children) {
			try {
				await child.semanticAnalysis();
			} catch (e) {
				// Try recovering from the error if it is enabled
				// Option 'abortOnFirstError' overwrites 'recover' per default
				if (e instanceof KipperError && this.compileConfig.recover && !this.compileConfig.abortOnFirstError) {
					this.programCtx.addError(e);

					// If the semantic data wasn't evaluated, return as that means the logical evaluation of this item failed.
					// Otherwise, continue with the semantic data that is present.
					if (!child.semanticData) {
						incompleteSemantics = true;
					}
				} else {
					throw e;
				}
			}
		}

		// If an error was thrown, then the semantic analysis of this node failed and should be aborted.
		// For now, we will not try to perform more advanced error recovery, like for example using a symbol table
		// (Therefore we also still try to handle 'UndefinedSemanticsError' errors, as there can be cases, where semantic
		// data is missing and there is no proper way to recover from it or try to fix the issue
		if (incompleteSemantics) {
			return;
		}

		// If the semantic analysis function is defined, then call it
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
		let incompleteSemantics: boolean = false;
		for (const child of this.children) {
			try {
				// If no semantic data is present, abort processing this item, as there were already semantic errors
				// (For now will not bother performing any error recovery, like fixing types or auto-casting)
				if (!child.semanticData) {
					return;
				}

				await child.semanticTypeChecking();
			} catch (e) {
				// Try recovering from the error if it is enabled
				// Option 'abortOnFirstError' overwrites 'recover' per default
				if (e instanceof KipperError && this.compileConfig.recover && !this.compileConfig.abortOnFirstError) {
					this.programCtx.addError(e);

					// If the semantic data wasn't evaluated, return as that means the logical evaluation of this item failed.
					// Otherwise, continue with the semantic data that is present.
					if (!child.typeSemantics) {
						incompleteSemantics = true;
					}
				} else {
					throw e;
				}
			}
		}

		// If an error was thrown, then the semantic analysis of this node failed and should be aborted.
		// For now, we will not try to perform more advanced error recovery, like for example using a symbol table
		// (Therefore we also still try to handle 'UndefinedSemanticsError' errors, as there can be cases, where semantic
		// data is missing and there is no proper way to recover from it or try to fix the issue
		if (incompleteSemantics) {
			return;
		}

		// If the target type checking function is defined, then call it
		if (this.primarySemanticTypeChecking !== undefined) {
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
				// If no semantic data or type data is present, abort processing this item, as there were already semantic
				// or type errors.
				// (For now will not bother performing any error recovery, like fixing types or auto-casting)
				if (!child.semanticData || !child.typeSemantics) {
					return;
				}

				await child.wrapUpSemanticAnalysis();
			} catch (e) {
				// Try recovering from the error if it is enabled
				// Option 'abortOnFirstError' overwrites 'recover' per default
				if (e instanceof KipperError && this.compileConfig.recover && !this.compileConfig.abortOnFirstError) {
					this.programCtx.addError(e);
				} else {
					throw e;
				}
			}
		}

		// If the target semantic analysis function is defined, then call it
		if (this.targetSemanticAnalysis !== undefined) {
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
