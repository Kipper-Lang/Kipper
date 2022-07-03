export const rawSearchIndex: Array<string> = [
	"Quickstart;/docs/quickstart.html;Quickstart;The quickstart guide for Kipper.",
	"Goals & Roadmap;/docs/goals-and-roadmap.html;Goals & Roadmap;Goals & Roadmap for Kipper.",
	"Supported Platforms;/docs/supported-platforms.html;Supported Platforms;Supported platforms for Kipper.",
	"Usage Examples;/docs/usage-examples.html;Usage;Usage examples for the Kipper language.",
	"Variables;/docs/variables.html;Variables;Kipper variables for storing and reusing data.",
	"Variable Datatypes;/docs/datatypes.html;Variable Datatypes;Variable datatypes in the Kipper language.",
	"Expressions;/docs/expressions.html;Expressions;Expressions, which can perform various operations and evaluate to a new value.",
	"Statements;/docs/statements.html;Statements;Kipper Statements, which are standalone units of execution able to perform various tasks.",
	"If-Statement;/docs/if-statement.html;If-Statement;Decision making using if, else-if and else statements.",
	"While-Loop;/docs/while-loop.html;While-Loop;While-loop statements, which allow for the repeated execution of code.",
	"Do-While-Loop;/docs/do-while-loop.html;Do-While-Loop;Do-While-loop statements, which allow for the repeated execution of code.",
	"For-Loop;/docs/for-loop.html;For-Loop;For-loop statements, which allow for the repeated execution of code.",
	"Functions;/docs/functions.html;Functions;Kipper Functions, which allow for the repeated execution of code using arguments.",
	"Built-in Functions;/docs/built-in-functions.html;Built-In Functions;Built-in Kipper Functions, which are available" +
		" in every" +
		" program per default.",
	"Playground;/playground.html;Playground;Online Playground for using Kipper in your browser.",
	"Docs;/docs/index.html;Documentation;Kipper Documentation and API Reference.",
	"Changelog;/changelog.html;Changelog;Detailed Changelog documenting changes in Kipper.",
	"Downloads;/download.html;Downloads;Downloads.",
	"Comments;/docs/comments.html;Comments;Comments in the Kipper language.",
];

/**
 * The index for a single Kipper docs page.
 */
export interface PageIndex {
	keyword: string;
	uriPath: string;
	pageTitle: string;
	pageDescription: string;
}

export const searchIndex: Array<PageIndex> = rawSearchIndex.map((index) => {
	const lineContent = index.split(";");
	return {
		keyword: lineContent[0],
		uriPath: lineContent[1],
		pageTitle: lineContent[2],
		pageDescription: lineContent[3],
	};
});
