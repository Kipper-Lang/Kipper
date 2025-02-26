/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.12.0
 */
import type { ScopeFunctionDeclaration } from "../../../../../../../semantics";
import { BuiltInTypeFunc } from "../../../../../../../semantics";
import { FunctionScope } from "../../../../../../../semantics";
import type { ClassMethodDeclarationContext } from "../../../../../../../lexer-parser";
import { DeclaratorContext, KindParseRuleMapping, ParseRuleKindMapping } from "../../../../../../../lexer-parser";
import type { CompilableNodeParent } from "../../../../../../compilable-ast-node";
import { UnableToDetermineSemanticDataError } from "../../../../../../../../errors";
import type { IdentifierTypeSpecifierExpression } from "../../../../../expressions";
import { ParameterDeclaration } from "../../../../parameter-declaration";
import { ClassMemberDeclaration } from "../class-member-declaration";
import type { ClassMethodDeclarationSemantics } from "./class-method-declaration-semantics";
import type { ClassMethodDeclarationTypeSemantics } from "./class-method-declaration-type-semantics";
import type { ScopeNode } from "../../../../../../scope-node";
import type { CompoundStatement } from "../../../../../statements";

/**
 * Represents a class declaration in the Kipper language, which may contain methods and fields.
 * @since 0.12.0
 */
export class ClassMethodDeclaration
	extends ClassMemberDeclaration<ClassMethodDeclarationSemantics, ClassMethodDeclarationTypeSemantics>
	implements ScopeNode<FunctionScope>
{
	/**parent
	 * The private field '_antlrRuleCtx' that actually stores the variable data,
	 * which is returned inside the {@link this.antlrRuleCtx}.
	 * @private
	 */
	protected override readonly _antlrRuleCtx: ClassMethodDeclarationContext;

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
	public static readonly kind = ParseRuleKindMapping.RULE_classMethodDeclaration;

	/**
	 * Returns the kind of this AST node. This represents the specific type of the {@link antlrRuleCtx} that this AST
	 * node wraps.
	 *
	 * This may be compared using the {@link ParseRuleKindMapping rule fields}, for example
	 * {@link ParseRuleKindMapping.RULE_declaration}.
	 * @since 0.12.0
	 */
	public override get kind() {
		return ClassMethodDeclaration.kind;
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
		return ClassMethodDeclaration.ruleName;
	}

	constructor(antlrRuleCtx: ClassMethodDeclarationContext, parent: CompilableNodeParent) {
		super(antlrRuleCtx, parent);
		this._antlrRuleCtx = antlrRuleCtx;
		this._innerScope = new FunctionScope(this);
	}

	/**
	 * The antlr context containing the antlr4 metadata for this expression.
	 */
	public override get antlrRuleCtx(): ClassMethodDeclarationContext {
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
		const functionBody = children.pop();

		this.semanticData = {
			identifier: identifier,
			returnTypeSpecifier: retTypeSpecifier,
			returnType: retTypeSpecifier.getSemanticData().rawType,
			params: params,
			functionBody: <CompoundStatement>functionBody,
		};
		this.scopeDeclaration = this.scope.addFunction(this);
	}

	/**
	 * Preliminary registers the class declaration type to allow for internal self-referential type checking.
	 *
	 * This is part of the "Ahead of time" type evaluation, which is done before the main type checking.
	 * @since 0.12.0
	 */
	public async primaryPreliminaryTypeChecking(): Promise<void> {
		const semanticData = this.getSemanticData();
		const paramTypes = semanticData.params.map((param) => param.getTypeSemanticData().valueType);
		const returnType = semanticData.returnTypeSpecifier.getTypeSemanticData().storedType;

		this.typeSemantics = {
			valueType: new BuiltInTypeFunc(paramTypes, returnType),
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

	readonly targetSemanticAnalysis = this.semanticAnalyser.classMethodDeclaration;
	readonly targetCodeGenerator = this.codeGenerator.classMethodDeclaration;
}
