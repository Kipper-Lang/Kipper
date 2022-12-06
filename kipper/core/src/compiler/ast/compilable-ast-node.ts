/**
 * Compilable AST Node that can be semantically analysed and translated into a target language.
 * @since 0.8.0
 */
import type { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import type { TranslatedCodeLine } from "../const";
import type {
	KipperCompileTarget,
	KipperTargetCodeGenerator,
	KipperTargetSemanticAnalyser,
	TargetASTNodeCodeGenerator,
	TargetASTNodeSemanticAnalyser,
} from "../target-presets";
import type { KipperParser } from "../parser";
import type { TypeData } from "./ast-node";
import type { KipperProgramContext } from "../program-ctx";
import type { TokenStream } from "antlr4ts/TokenStream";
import type { RootASTNode, SemanticData } from "./index";
import { ParserASTNode } from "./index";
import type { EvaluatedCompileConfig } from "../compiler";
import type { FunctionScope, GlobalScope, LocalScope } from "../analysis";
import type { ScopeNode } from "./scope-node";
import { KipperError } from "../../errors";

/**
 * An eligible parent for a compilable node.
 * @since 0.8.0
 */
export type compilableNodeParent = CompilableASTNode<SemanticData, TypeData> | RootASTNode;

/**
 * An eligible child for a compilable node.
 * @since 0.8.0
 */
export type compilableNodeChild = CompilableASTNode<SemanticData, TypeData>;

/**
 * Compilable AST Node that can be semantically analysed and translated into a target language.
 * @since 0.8.0
 */
export abstract class CompilableASTNode<
	Semantics extends SemanticData,
	TypeSemantics extends TypeData,
> extends ParserASTNode<Semantics, TypeSemantics> {
	public _scopeCtx: ScopeNode<LocalScope | FunctionScope> | KipperProgramContext | undefined;
	protected _parent: compilableNodeParent;
	protected _children: Array<compilableNodeChild>;
	protected _errors: Array<KipperError>;

	protected constructor(antlrCtx: ParserRuleContext, parent: compilableNodeParent) {
		super(antlrCtx, parent);
		this._parent = parent;
		this._children = [];
		this._errors = [];
	}

	/**
	 * Returns the {@link CompilableASTNode parent} that has this node as a child.
	 * @since 0.8.0
	 */
	public get parent(): compilableNodeParent {
		return this._parent;
	}

	/**
	 * The children of this AST node.
	 * @since 0.8.0
	 */
	public get children(): Array<compilableNodeChild> {
		return this._children;
	}

	/**
	 * Adds new child ctx item to this AST node. The child item should be in the order that they appeared in the
	 * {@link this.antlrCtx} parse tree.
	 *
	 * This will also automatically set the parent of {@link newChild} to this instance.
	 * @since 0.8.0
	 */
	public addNewChild(newChild: compilableNodeChild): void {
		this._children.push(newChild);
	}

	/**
	 * The errors that were caused by this node. Includes all errors from children.
	 * @since 0.10.0
	 */
	public get errors(): Array<KipperError> {
		// TODO! Finish implementation of this
		let errors = this._errors;
		for (const child of this._children) {
			errors = errors.concat(child.errors);
		}
		return errors;
	}

	/**
	 * Adds the specified {@link error} to the list of errors caused by this node.
	 *
	 * This is not the same as {@link KipperProgramContext.addError}, since that function automatically logs the error
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
	 * Returns the semantic data of this token.
	 * @since 0.8.0
	 */
	public get semanticData(): Semantics | undefined {
		return this._semanticData;
	}

	/**
	 * Sets the semantic data of this item.
	 * @param value The semantic data that should be written onto this item.
	 * @since 0.8.0
	 */
	protected override set semanticData(value: Semantics | undefined) {
		super.semanticData = value;
	}

	/**
	 * The parser that generated the parse tree and {@link antlrRuleCtx antlr rule context}.
	 * @since 0.8.0
	 */
	public get parser(): KipperParser {
		return this.programCtx.parser;
	}

	/**
	 * The file context instance containing the metadata for the listener and this parse token.
	 * @since 0.8.0
	 */
	public get programCtx(): KipperProgramContext {
		return this.parent.programCtx;
	}

	/**
	 * Returns the token stream source for this token.
	 * @since 0.8.0
	 */
	public get tokenStream(): TokenStream {
		return this.programCtx.tokenStream;
	}

	/**
	 * The compilation translation for this specific token.
	 * @since 0.8.0
	 */
	public get target(): KipperCompileTarget {
		return this.programCtx.target;
	}

	/**
	 * The code generator, which will generate the code for this specific token into the
	 * {@link this.target target language}.
	 * @since 0.8.0
	 */
	public get codeGenerator(): KipperTargetCodeGenerator {
		return this.target.codeGenerator;
	}

	/**
	 * The compilation config for this program.
	 * @since 0.10.0
	 */
	public get compileConfig(): EvaluatedCompileConfig {
		return this.programCtx.compileConfig;
	}

	/**
	 * The {@link scope} of this AST node.
	 * @since 0.8.0
	 */
	public get scope(): LocalScope | GlobalScope {
		if ("innerScope" in this.scopeCtx) {
			return (<ScopeNode<LocalScope | FunctionScope>>this.scopeCtx).innerScope;
		} else {
			return (<KipperProgramContext>this.scopeCtx).globalScope;
		}
	}

	/**
	 * The context / AST node of the {@link scope}.
	 * @since 0.8.0
	 */
	public get scopeCtx(): ScopeNode<LocalScope | FunctionScope> | KipperProgramContext {
		if (this._scopeCtx) {
			return this._scopeCtx;
		}

		let parent: compilableNodeParent = this.parent;
		while (parent.parent !== undefined && !("innerScope" in parent)) {
			parent = parent.parent;
		}

		// If there is no parent -> root node, return the program context
		if (parent.parent === undefined) {
			return (<RootASTNode>parent).programCtx;
		}
		return <ScopeNode<LocalScope | FunctionScope>>parent;
	}

	/**
	 * The translation-specific semantic analyser, which will perform semantic analysis specific for the
	 * {@link this.target target language}.
	 * @since 0.8.0
	 */
	public get semanticAnalyser(): KipperTargetSemanticAnalyser {
		return this.target.semanticAnalyser;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 * @since 0.8.0
	 */
	public async translateCtxAndChildren(): Promise<TranslatedCodeLine | Array<TranslatedCodeLine>> {
		return await this.targetCodeGenerator(this);
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
	 * {@link this.semanticData semantic data} and {@link this.typeData type data} that was evaluated during the
	 * {@link this.semanticAnalysis semantic analysis} and {@link this.semanticTypeChecking type checking}.
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
	public abstract primarySemanticAnalysis?(): Promise<void>;

	/**
	 * Type checks the code inside this AST node.
	 *
	 * If this is {@link undefined} then it means there is no type checking that needs to be done. This will also
	 * automatically make {@link typeSemantics} be defined as an empty object.
	 * @throws TypeError When a type mismatch or invalid usage is encountered.
	 * @since 0.8.0
	 */
	public abstract primarySemanticTypeChecking?(): Promise<void>;

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code. This
	 * will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 *
	 * If this is {@link undefined} then it means there is no warning checks that needs to be done.
	 * @since 0.9.0
	 */
	public abstract checkForWarnings?(): Promise<void>;

	/**
	 * Semantic analyser function that is specific for the {@link KipperCompileTarget target}. This only should
	 * perform logical analysis and not interpret the code/modify the {@link semanticData} field.
	 *
	 * If this is {@link undefined} then it means there is no target specific semantic analysis that needs to be done.
	 * @since 0.8.0
	 */
	public abstract readonly targetSemanticAnalysis: TargetASTNodeSemanticAnalyser<any> | undefined;

	/**
	 * Code generator function that is specific for the {@link KipperCompileTarget target}.
	 * @since 0.8.0
	 */
	public abstract readonly targetCodeGenerator: TargetASTNodeCodeGenerator<
		any,
		TranslatedCodeLine | Array<TranslatedCodeLine>
	>;
}