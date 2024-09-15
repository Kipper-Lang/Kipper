/**
 * The root node of an abstract syntax tree, which contains all AST nodes of a file.
 * @since 0.8.0
 */
import type { NoSemantics, NoTypeSemantics } from "../ast-node";
import { ParserASTNode } from "../ast-node";
import type {
	KipperCompileTarget,
	KipperTargetCodeGenerator,
	KipperTargetSemanticAnalyser,
	TargetSetUpCodeGenerator,
	TargetWrapUpCodeGenerator,
} from "../../target-presets";
import type { EvaluatedCompileConfig } from "../../compile-config";
import type { KipperProgramContext } from "../../program-ctx";
import type { Declaration } from "./declarations";
import type { Statement } from "./index";
import type { TranslatedCodeLine } from "../../const";
import type { KipperError } from "../../../errors";
import type { CompilationUnitContext } from "../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../lexer-parser";
import { GlobalScope, handleSemanticError } from "../../semantics";
import type { ScopeNode } from "../scope-node";

/**
 * The root node of an abstract syntax tree, which contains all AST nodes of a file.
 * @since 0.8.0
 */
export class RootASTNode extends ParserASTNode<NoSemantics, NoTypeSemantics> implements ScopeNode<GlobalScope> {
	/**
	 * The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_compilationUnit;
	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];
	protected readonly _antlrRuleCtx: CompilationUnitContext;
	protected readonly _programCtx: KipperProgramContext;
	protected readonly _parent: undefined;
	protected readonly _children: Array<Declaration | Statement>;
	protected readonly _innerScope: GlobalScope;

	constructor(programCtx: KipperProgramContext, antlrCtx: CompilationUnitContext) {
		super(antlrCtx, undefined);
		this._antlrRuleCtx = antlrCtx;
		this._programCtx = programCtx;
		this._children = [];
		this._parent = undefined;
		this._innerScope = new GlobalScope(this, this.programCtx.universeScope);
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.10.0
	 */
	public override get kind() {
		return RootASTNode.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_expression}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return RootASTNode.ruleName;
	}

	/**
	 * Gets the inner scope of this function, where also the {@link semanticData.params arguments} should be registered.
	 * @since 0.10.0
	 */
	public get innerScope(): GlobalScope {
		return this._innerScope;
	}

	/**
	 * The parent of this root node. This will always return undefined, as there will never be a parent for a root AST
	 * node.
	 * @since 0.8.0
	 */
	public get parent(): undefined {
		return this._parent;
	}

	/**
	 * The program context of this root node, which stores the metadata for the Kipper program.
	 * @since 0.8.0
	 */
	public get programCtx(): KipperProgramContext {
		return this._programCtx;
	}

	/**
	 * The errors that were caused by this root node. Includes all errors from children.
	 * @since 0.10.0
	 */
	public get errors(): Array<KipperError> {
		const errors = [];
		for (const child of this._children) {
			errors.push(...child.errors);
		}
		return errors;
	}

	/**
	 * Returns true if the semantic analysis or type checking of {@link CompilableASTNode this node} or any
	 * {@link children children nodes} failed.
	 *
	 * This indicates that the root node is not valid and can not be translated.
	 * @since 0.10.0
	 */
	public get hasFailed(): boolean {
		return this.errors.length > 0;
	}

	/**
	 * The children of this AST root node.
	 * @since 0.8.0
	 */
	public get children(): Array<Declaration | Statement> {
		return this._children;
	}

	/**
	 * The compilation translation for this specific token.
	 * @since 0.10.0
	 */
	public get target(): KipperCompileTarget {
		return this.programCtx.target;
	}

	/**
	 * The compilation config for this program.
	 * @since 0.10.0
	 */
	public get compileConfig(): EvaluatedCompileConfig {
		return this.programCtx.compileConfig;
	}

	/**
	 * The code generator, which will generate the code for this specific token into the
	 * {@link this.target target language}.
	 * @since 0.10.0
	 */
	public get codeGenerator(): KipperTargetCodeGenerator {
		return this.target.codeGenerator;
	}

	/**
	 * The translation-specific semantic analyser, which will perform semantic analysis specific for the
	 * {@link this.target target language}.
	 * @since 0.10.0
	 */
	public get semanticAnalyser(): KipperTargetSemanticAnalyser {
		return this.target.semanticAnalyser;
	}

	/**
	 * Adds new child at the end of the tree.
	 * @since 0.8.0
	 */
	public addNewChild(newChild: Declaration | Statement): void {
		this._children.push(newChild);
	}

	/**
	 * Semantically analyses the children tokens of this
	 * {@link RootASTNode instance} and performs additional
	 * {@link CompilableASTNode.targetSemanticAnalysis translation specific analysis}.
	 * @since 0.8.0
	 */
	public async semanticAnalysis(): Promise<void> {
		// Core semantic analysis
		for (let child of this.children) {
			try {
				await child.semanticAnalysis();
			} catch (e) {
				await this.handleSemanticError(<Error>e);
			}
		}

		// Perform preliminary semantic analysis in case any specific type evaluation is required prematurely (ahead of
		// time type evaluation)
		for (let child of this.children) {
			try {
				await child.preliminaryTypeChecking();
			} catch (e) {
				await this.handleSemanticError(<Error>e);
			}
		}

		// Perform type-checking based on the existing AST nodes and evaluated semantics
		for (let child of this.children) {
			try {
				await child.semanticTypeChecking();
			} catch (e) {
				await this.handleSemanticError(<Error>e);
			}
		}

		// Perform wrap-up semantic analysis for the specified target
		for (let child of this.children) {
			try {
				await child.wrapUpSemanticAnalysis();
			} catch (e) {
				await this.handleSemanticError(<Error>e);
			}
		}

		// Check for warnings, if they are enabled
		if (this.compileConfig.warnings) {
			for (let child of this.children) {
				// If the child has failed to process, avoid checking for warnings
				if (!child.semanticData || !child.typeSemantics) {
					continue;
				}

				await child.recursivelyCheckForWarnings();
			}
		}
	}

	/**
	 * Translates the children tokens of this {@link RootASTNode instance} into the specific
	 * {@link this.programCtx.target target language}.
	 * @since 0.8.0
	 * @protected
	 */
	public async translate(): Promise<Array<TranslatedCodeLine>> {
		// SetUp and WrapUp functions
		const targetSetUp: TargetSetUpCodeGenerator = this.codeGenerator.setUp;
		const targetWrapUp: TargetWrapUpCodeGenerator = this.codeGenerator.wrapUp;

		// Add set up code, and then append all children
		const { global, local } = await this.programCtx.generateRequirements();
		let genCode: Array<TranslatedCodeLine> = [...(await targetSetUp(this.programCtx, global)), ...local];
		for (let child of this.children) {
			genCode.push(...(await child.translateCtxAndChildren()));
		}

		// Add wrap up code
		genCode.push(...(await targetWrapUp(this.programCtx)));

		// Finished code for this Kipper file
		return genCode;
	}

	/**
	 * Handles the specified error that occurred during the semantic analysis of this node in a standardised way.
	 * @param error The error to handle.
	 * @since 0.10.0
	 */
	protected handleSemanticError(error: Error | KipperError): void {
		handleSemanticError(this, error);
	}
}
