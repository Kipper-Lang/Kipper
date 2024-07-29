/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.12.0
 */
import type { ScopeVariableDeclaration } from "../../../../../../../semantics";
import type {
	ClassPropertyDeclarationContext,
	InterfacePropertyDeclarationContext,
} from "../../../../../../../lexer-parser";
import { KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../../../lexer-parser";
import type { CompilableNodeParent } from "../../../../../../compilable-ast-node";
import { UnableToDetermineSemanticDataError } from "../../../../../../../../errors";
import type { IdentifierTypeSpecifierExpression } from "../../../../../expressions";
import { ClassMemberDeclaration } from "../class-member-declaration";
import type { ClassPropertyDeclarationSemantics } from "./class-property-declaration-semantics";
import type { ClassPropertyDeclarationTypeSemantics } from "./class-property-declaration-type-semantics";

/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.12.0
 */
export class ClassPropertyDeclaration extends ClassMemberDeclaration<
	ClassPropertyDeclarationSemantics,
	ClassPropertyDeclarationTypeSemantics
> {
	/**parent
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ClassPropertyDeclarationContext;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected override _scopeDeclaration: ScopeVariableDeclaration | undefined;

	/**
	/**
	* The static kind for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_classPropertyDeclaration;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.12.0
	 */
	public override get kind() {
		return ClassPropertyDeclaration.kind;
	}

	/**
	 * The static rule name for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly ruleName = KindParseRuleMapping[this.kind];

	/**
	 * Returns the rule name of this AST Node. This represents the specific type of the {@link antlrRuleCtx} that this
	 * AST node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.12.0
	 */
	public override get ruleName() {
		return ClassPropertyDeclaration.ruleName;
	}

	constructor(antlrRuleCtx: InterfacePropertyDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ClassPropertyDeclarationContext {
		return this._antlrRuleCtx;
	}
	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.12.0
	 */
	public get scopeDeclaration(): ScopeVariableDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeVariableDeclaration | undefined) {
		this._scopeDeclaration = declaration;
	}

	public getScopeDeclaration(): ScopeVariableDeclaration {
		/* istanbul ignore next: super function already being run/tested */
		return <ScopeVariableDeclaration>super.getScopeDeclaration();
	}

	/**
	 * Performs the semantic analysis for this Kipper token. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the semantic analysis of
	 * the children has already failed and as such no parent node should run type checking.
	 */
	public async primarySemanticAnalysis(): Promise<void> {
		const antlrChildren = this.antlrRuleCtx.children;
		if (!antlrChildren?.length) {
			throw new UnableToDetermineSemanticDataError();
		}

		const identifier = antlrChildren[0].text;
		const typeSpecifier = <IdentifierTypeSpecifierExpression>this.children[0];

		this.semanticData = {
			identifier: identifier,
			typeSpecifier: typeSpecifier,
			type: typeSpecifier.getSemanticData().rawType,
		};
		this.scopeDeclaration = this.scope.addVariable(this);
	}

	/**
	 * Performs type checking for this AST Node. This will log all warnings using {@link programCtx.logger}
	 * and throw errors if encountered.
	 *
	 * This will not run in case that {@link this.hasFailed} is true, as that indicates that the type checking of
	 * the children has already failed and as such no parent node should run type checking.
	 * @since 0.12.0
	 */
	public async primarySemanticTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();

		// Get the type that will be returned using the value type specifier
		semanticData.typeSpecifier.ensureTypeSemanticallyValid(); // Ensure the type specifier didn't fail
		const valueType = semanticData.typeSpecifier.getTypeSemanticData().storedType;
		this.typeSemantics = {
			type: valueType,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.12.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.interfacePropertyDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.interfacePropertyDeclaration;
}
