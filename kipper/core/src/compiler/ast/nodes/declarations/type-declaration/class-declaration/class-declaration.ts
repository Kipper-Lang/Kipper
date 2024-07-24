/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.11.0
 */
import type { ScopeNode } from "../../../../scope-node";
import type { ClassDeclarationSemantics } from "./class-declaration-semantics";
import type { ClassDeclarationTypeSemantics } from "./class-declaration-type-semantics";
import type { CompilableNodeParent } from "../../../../compilable-ast-node";
import type { ScopeTypeDeclaration } from "../../../../../semantics";
import { CustomType } from "../../../../../semantics";
import type { ClassDeclarationContext } from "../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../lexer-parser";
import { UnableToDetermineSemanticDataError } from "../../../../../../errors";
import { ClassScope } from "../../../../../semantics/symbol-table/class-scope";
import { TypeDeclaration } from "../type-declaration";
import type { ClassMemberDeclaration, ClassConstructorDeclaration } from "./class-member-declaration";

/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.11.0
 */
export class ClassDeclaration
	extends TypeDeclaration<ClassDeclarationSemantics, ClassDeclarationTypeSemantics>
	implements ScopeNode<ClassScope>
{
	/**
	/**
	* The static kind for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_classDeclaration;
	/**
	 * The static rule name for this AST Node.
	 * @since 0.11.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];
	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.11.0
	 */
	public checkForWarnings = undefined; // TODO!
	readonly targetSemanticAnalysis = this.semanticAnalyser.classDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.classDeclaration;
	/**
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ClassDeclarationContext;
	/**
	 * The private field '_innerScope' that actually stores the variable data,
	 * which is returned inside the {@link this.innerScope}.
	 * @private
	 */
	private readonly _innerScope: ClassScope;

	constructor(antlrRuleCtx: ClassDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._innerScope = new ClassScope(this);
	}

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected override _scopeDeclaration: ScopeTypeDeclaration | undefined;

	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.11.0
	 */
	public get scopeDeclaration(): ScopeTypeDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeTypeDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.11.0
	 */
	public override get kind() {
		return ClassDeclaration.kind;
	}

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.11.0
	 */
	public override get ruleName() {
		return ClassDeclaration.ruleName;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ClassDeclarationContext {
		return this._antlrRuleCtx;
	}

	/**
	 * Gets the inner scope of this class.
	 * @since 0.11.0
	 */
	public get innerScope(): ClassScope {
		return this._innerScope;
	}

	public getScopeDeclaration(): ScopeTypeDeclaration {
		/* istanbul ignore next: super function already being run/tested */
		return <ScopeTypeDeclaration>super.getScopeDeclaration();
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const antlrChildren = this.getAntlrRuleChildren();
		const children = this.children;

		if (!antlrChildren) {
			throw new UnableToDetermineSemanticDataError();
		}

		const identifier = antlrChildren[1].text;
		const classMembers = children.filter((child) => child.ruleName !== "RULE_classConstructorDeclaration");
		const constructorDeclaration = children.find((child) => child.ruleName == "RULE_classConstructorDeclaration");

		this.semanticData = {
			identifier: identifier,
			classMembers: <ClassMemberDeclaration[]>classMembers,
			constructorDeclaration: <ClassConstructorDeclaration | undefined>constructorDeclaration,
		};
		this.scopeDeclaration = this.scope.addType(this);
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.11.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		this.typeSemantics = {
			type: CustomType.fromClassDeclaration(this),
		};
	}
}
