/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.12.0
 */
import type { ScopeFunctionDeclaration } from "../../../../../../../semantics";
import { BuiltInTypes, FunctionScope } from "../../../../../../../semantics";
import type { ClassConstructorDeclarationContext } from "../../../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../../../lexer-parser";
import type { CompilableNodeParent } from "../../../../../../compilable-ast-node";
import { UnableToDetermineSemanticDataError } from "../../../../../../../../errors";
import { ParameterDeclaration } from "../../../../parameter-declaration";
import { ClassMemberDeclaration } from "../class-member-declaration";
import type { ClassConstructorDeclarationSemantics } from "./class-constructor-declaration-semantics";
import type { ClassConstructorDeclarationTypeSemantics } from "./class-constructor-declaration-type-semantics";
import type { ScopeNode } from "../../../../../../scope-node";
import { CompoundStatement } from "../../../../../statements";
import { KipperConstructorInternalIdentifierLiteral } from "../../../../../../../const";

/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.12.0
 */
export class ClassConstructorDeclaration
	extends ClassMemberDeclaration<ClassConstructorDeclarationSemantics, ClassConstructorDeclarationTypeSemantics>
	implements ScopeNode<FunctionScope>
{
	/**parent
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ClassConstructorDeclarationContext;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected override _scopeDeclaration: ScopeFunctionDeclaration | undefined;

	/**
	/**
	* The static kind for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_classConstructorDeclaration;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.12.0
	 */
	public override get kind() {
		return ClassConstructorDeclaration.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * The private field '_innerScope' that actually stores the variable data,
	 * which is returned inside the {@link this.innerScope}.
	 * @private
	 */
	private readonly _innerScope: FunctionScope;

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.12.0
	 */
	public override get ruleName() {
		return ClassConstructorDeclaration.ruleName;
	}

	constructor(antlrRuleCtx: ClassConstructorDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._innerScope = new FunctionScope(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ClassConstructorDeclarationContext {
		return this._antlrRuleCtx;
	}
	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.12.0
	 */
	public get scopeDeclaration(): ScopeFunctionDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeFunctionDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	public getScopeDeclaration(): ScopeFunctionDeclaration {
		/* istanbul ignore next: super function already being run/tested */
		return <ScopeFunctionDeclaration>super.getScopeDeclaration();
	}

	/**
	 * Gets the inner scope of this method, where also the {@link semanticData.params arguments} should be registered.
	 * @since 0.12.0
	 */
	public get innerScope(): FunctionScope {
		return this._innerScope;
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		let params: Array<ParameterDeclaration> = [];
		let childrenCopy = [...this.children];
		let functionBody: CompoundStatement | undefined = undefined;

		childrenCopy.forEach((child) => {
			if (child instanceof CompoundStatement) {
				functionBody = <CompoundStatement>child;
			}

			if (child instanceof ParameterDeclaration) {
				params.push(child);
			}
		});
		if (!functionBody) {
			throw new UnableToDetermineSemanticDataError();
		}

		this.semanticData = {
			identifier: KipperConstructorInternalIdentifierLiteral,
			parameters: params,
			functionBody: <CompoundStatement>functionBody,
		};
		this.scopeDeclaration = this.scope.addConstructor(this);
	}

	/**
	 * Preliminary registers the class declaration type to allow for internal self-referential type checking.
	 *
	 * This is part of the "Ahead of time" type evaluation, which is done before the main type checking.
	 * @since 0.12.0
	 */
	public async primaryPreliminaryTypeChecking(): Promise<void> {
		this.typeSemantics = {
			valueType: BuiltInTypes.Func,
		};
	}
	public readonly primarySemanticTypeChecking: undefined;

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.12.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.classConstructorDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.classConstructorDeclaration;
}
