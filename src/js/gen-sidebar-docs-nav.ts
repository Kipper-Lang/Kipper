/**
 * Generator for the sidebar navigation for the documentation.
 */

const docsFiles: Record<string, { file: string; title: string }> = {
	quickstart: {
		file: "quickstart.html",
		title: "Quickstart",
	},
	ourGoals: {
		file: "goals-and-roadmap.html",
		title: "Goals & Roadmap",
	},
	supportedPlatforms: {
		file: "supported-platforms.html",
		title: "Supported platforms",
	},
	usageExamples: {
		file: "usage-examples.html",
		title: "Usage Examples",
	},
	compiler: {
		file: "compiler.html",
		title: "Kipper Compiler",
	},
	variables: {
		file: "variables.html",
		title: "Variables",
	},
	datatypes: {
		file: "datatypes.html",
		title: "Variable Datatypes",
	},
	expression: {
		file: "expressions.html",
		title: "Expressions",
	},
	statements: {
		file: "statements.html",
		title: "Statements",
	},
	decisionMaking: {
		file: "if-statement.html",
		title: "If-Statement",
	},
	whileLoop: {
		file: "while-loop.html",
		title: "While-Loop",
	},
	doWhileLoop: {
		file: "do-while-loop.html",
		title: "Do-While-Loop",
	},
	forLoop: {
		file: "for-loop.html",
		title: "For-Loop",
	},
	functions: {
		file: "functions.html",
		title: "Functions",
	},
	comments: {
		file: "comments.html",
		title: "Comments",
	},
	builtinFunctions: {
		file: "built-in-functions.html",
		title: "Built-in Functions",
	},
};

function GenDocsSidebarNavigation(): string {
	let headers = "";
	for (const item of Object.values(docsFiles)) {
		const pathToInsert = `./${item.file}`;
		const isCurrentFile = item.file === window.location.pathname.split("/").pop();
		headers = headers.concat(`
      <li>
        <p class="sidebar-nav-header ${isCurrentFile ? "selected-page-sidebar-nav-header" : ""}">
          <a href=${pathToInsert}>
            ${item.title}
          </a>
        </p>
      </li>
    `);
	}

	return `<nav id="docs-sidebar-nav">
          <h6 id="nav-kipper-header">
            <a class="docs-page-nav-header" href="./index.html">Kipper Docs</a>
          </h6>
          <ul class="no-style-list flex-column">
            ${headers}
          </ul>
        </nav>`;
}

// writing the content to the innerHtml of the document docs page navigation list
document.getElementById("docs-sidebar-nav-wrapper").innerHTML = GenDocsSidebarNavigation();
