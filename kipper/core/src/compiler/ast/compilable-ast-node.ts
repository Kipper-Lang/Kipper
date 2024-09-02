/**
 * Compilable AST Node that can be semantically analysed and translated into a target language.
 * @since 0.8.0
 */
import type { TranslatedCodeLine } from "../const";
import type {
	KipperCompileTarget,
	KipperTargetCodeGenerator,
	KipperTargetSemanticAnalyser,
	TargetASTNodeCodeGenerator,
} from "../target-presets";
import type { KipperParser, KipperParserRuleContext } from "../lexer-parser";
import type { TypeData } from "./ast-node";
import type { TokenStream } from "antlr4ts/TokenStream";
import type { RootASTNode, SemanticData } from "./index";
import type { ClassScope, GlobalScope, LocalScope } from "../semantics";
import type { ScopeNode } from "./scope-node";
import type { TargetCompilableNode } from "./target-node";
import { AnalysableASTNode } from "./analysable-ast-node";

/**
 * An eligible parent for a compilable AST node.
 * @since 0.8.0
 */
export type CompilableNodeParent = CompilableASTNode | RootASTNode;

/**
 * An eligible child for a compilable AST node.
 * @since 0.8.0
 */
export type CompilableNodeChild = CompilableASTNode;

/**
 * Compilable AST Node that can be semantically analysed and translated into a target language.
 * @since 0.8.0
 */
export abstract class CompilableASTNode<
		Semantics extends SemanticData = SemanticData,
		TypeSemantics extends TypeData = TypeData,
	>
	extends AnalysableASTNode<Semantics, TypeSemantics>
	implements TargetCompilableNode
{
	abstract readonly targetCodeGenerator: TargetASTNodeCodeGenerator<
		any,
		TranslatedCodeLine | Array<TranslatedCodeLine>
	>;

	protected constructor(antlrCtx: KipperParserRuleContext, parent: CompilableNodeParent) {
		super(antlrCtx, parent);
		this._parent = parent;
		this._children = [];
	}

	protected override _parent: CompilableNodeParent;

	/**
	 * Returns the {@link CompilableASTNode parent} that has this node as a child.
	 * @since 0.8.0
	 */
	public get parent(): CompilableNodeParent {
		return this._parent;
	}

	protected override _children: Array<CompilableNodeChild>;

	/**
	 * The children of this AST node.
	 * @since 0.8.0
	 */
	public get children(): Array<CompilableNodeChild> {
		return this._children;
	}

	/**
	 * The parser that generated the parse tree and {@link antlrRuleCtx antlr rule context}.
	 * @since 0.8.0
	 */
	public get parser(): KipperParser {
		return this.programCtx.parser;
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
	 * The {@link scope} of this AST node.
	 * @since 0.8.0
	 */
	public get scope(): LocalScope | ClassScope | GlobalScope {
		return this.scopeCtx.innerScope;
	}

	/**
	 * The context / AST node of the {@link scope}.
	 * @since 0.8.0
	 */
	public get scopeCtx(): ScopeNode<LocalScope | ClassScope | GlobalScope> {
		let parent: CompilableNodeParent = this.parent;
		while (parent.parent !== undefined && !("innerScope" in parent)) {
			parent = parent.parent;
		}

		// If there is no parent -> root node, return the program context
		if (parent.parent === undefined) {
			return <RootASTNode>parent;
		}
		return <ScopeNode<LocalScope>>parent;
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
	 * Adds new child ctx item to this AST node. The child item should be in the order that they appeared in the
	 * {@link this.antlrCtx} parse tree.
	 *
	 * This will also automatically set the parent of {@link newChild} to this instance.
	 * @since 0.8.0
	 */
	public addNewChild(newChild: CompilableNodeChild): void {
		this._children.push(newChild);
	}

	/**
	 * Returns whether this AST node has any side effects. This means that the node will change the state of the
	 * program in some way and not only return a value.
	 *
	 * This specifically can mean it assigns or modifies a variable, calls a function, or throws an error.
	 * @since 0.11.0
	 */
	public hasSideEffects(): boolean {
		return false;
	}

	/**
	 * Generates the typescript code for this item, and all children (if they exist).
	 * @since 0.8.0
	 */
	public async translateCtxAndChildren(): Promise<TranslatedCodeLine | Array<TranslatedCodeLine>> {
		return await this.targetCodeGenerator(this);
	}
}
