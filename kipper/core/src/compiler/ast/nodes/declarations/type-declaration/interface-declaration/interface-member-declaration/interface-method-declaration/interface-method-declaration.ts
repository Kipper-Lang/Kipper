/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.12.0
 */
import type { ScopeTypeDeclaration } from "../../../../../../../semantics";
import { BuiltInTypes } from "../../../../../../../semantics";
import type { InterfaceMethodDeclarationContext } from "../../../../../../../lexer-parser";
import { DeclaratorContext, KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../../../lexer-parser";
import { InterfaceMemberDeclaration } from "../interface-member-declaration";
import type { CompilableNodeParent } from "../../../../../../compilable-ast-node";
import { UnableToDetermineSemanticDataError } from "../../../../../../../../errors";
import type { InterfaceMethodDeclarationSemantics } from "./interface-method-declaration-semantics";
import type { InterfaceMethodDeclarationTypeSemantics } from "./interface-method-declaration-type-semantics";
import type { IdentifierTypeSpecifierExpression } from "../../../../../expressions";
import { ParameterDeclaration } from "../../../../parameter-declaration";

/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.12.0
 */
export class InterfaceMethodDeclaration extends InterfaceMemberDeclaration<
	InterfaceMethodDeclarationSemantics,
	InterfaceMethodDeclarationTypeSemantics
> {
	/**parent
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: InterfaceMethodDeclarationContext;

	/**
	 * The private field '_scopeDeclaration' that actually stores the variable data,
	 * which is returned inside the {@link this.scopeDeclaration}.
	 * @private
	 */
	protected override _scopeDeclaration: ScopeTypeDeclaration | undefined;

	/**
	/**
	* The static kind for this AST Node.
	 * @since 0.12.0
	 */
	public static readonly kind = ParseRuleKindMapping.RULE_interfaceMethodDeclaration;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.12.0
	 */
	public override get kind() {
		return InterfaceMethodDeclaration.kind;
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
		return InterfaceMethodDeclaration.ruleName;
	}

	constructor(antlrRuleCtx: InterfaceMethodDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): InterfaceMethodDeclarationContext {
		return this._antlrRuleCtx;
	}
	/**
	 * The {@link ScopeDeclaration} context instance for this declaration, which is used to register the declaration
	 * in the {@link scope parent scope}.
	 * @since 0.12.0
	 */
	public get scopeDeclaration(): ScopeTypeDeclaration | undefined {
		return this._scopeDeclaration;
	}

	protected set scopeDeclaration(declaration: ScopeTypeDeclaration | undefined) {
		this._scopeDeclaration = declaration;
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
		const parseTreeChildren = this.getAntlrRuleChildren();
		let declaratorCtx = <DeclaratorContext | undefined>(
			parseTreeChildren.find((val) => val instanceof DeclaratorContext)
		);

		let retTypeSpecifier: IdentifierTypeSpecifierExpression | undefined;
		let params: Array<ParameterDeclaration> = [];

		// Create shallow copy of the children
		let children = [...this.children];

		// Evaluate the primary semantic data for the function
		while (children.length > 0) {
			let child = children.shift();

			if (child instanceof ParameterDeclaration) {
				params.push(child);
			} else {
				// Once the return type has been reached, stop, as the last two items should be the return type and func body
				retTypeSpecifier = <IdentifierTypeSpecifierExpression>child;
				break;
			}
		}

		// Ensure that the children are fully present and not undefined
		// Also make sure the scope has the required argument field for the function (is of type 'FunctionScope')
		if (!declaratorCtx || !retTypeSpecifier) {
			throw new UnableToDetermineSemanticDataError();
		}

		const identifier = this.tokenStream.getText(declaratorCtx.sourceInterval);

		this.semanticData = {
			identifier: identifier,
			returnType: retTypeSpecifier,
			parameters: params,
		};
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

		// Get the type that will be returned using the return type specifier
		const returnType = semanticData.returnType.getTypeSemanticData().storedType;
		this.typeSemantics = {
			returnType: returnType,
			valueType: BuiltInTypes.Func,
		};
	}

	/**
	 * Semantically analyses the code inside this AST node and checks for possible warnings or problematic code.
	 *
	 * This will log all warnings using {@link programCtx.logger} and store them in {@link KipperProgramContext.warnings}.
	 * @since 0.12.0
	 */
	public checkForWarnings = undefined; // TODO!

	readonly targetSemanticAnalysis = this.semanticAnalyser.interfaceMethodDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.interfaceMethodDeclaration;
}
