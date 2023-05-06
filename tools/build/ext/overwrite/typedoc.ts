import * as typedoc from "typedoc";
import * as fs from "fs";

// Overwrite 'renderDocument' to modify the markdown output
// @ts-ignore
const originalRenderDocument: (template, page) => boolean = typedoc.Renderer.prototype.renderDocument;
// @ts-ignore
typedoc.Renderer.prototype.renderDocument = function renderDocument(template, page) {
	// Skip 'README.md' build
	if (page.url === "README.md") {
		return true; // Skip
	}

	const success: boolean = originalRenderDocument.call(this, template, page);
	if (success !== false) {
		let fileContent = page.contents;
		let outPath = page.filename;

		// Ensure that the module folder files are written to the root folder
		if (outPath.includes("modules/")) {
			outPath = outPath.replace("modules/", "");

      // Properly adjust the links as the files were moved one level up
      fileContent = fileContent.replace(/(\[[^\]]*]\()(\.\.\/)([^)]*\))/g, "$1./$3");

			// Remove original file
			fs.rmSync(page.filename);
		}

		// Replace 'README.md' with 'index.html'
		fileContent = fileContent.replace(/(\[[^\]]*]\([^)]*)(README\.md)((#[^\\)]*)?\))/g, "$1index.html$3");

    // Replace 'modules.md' with 'index.html'
    fileContent = fileContent.replace(/(\[[^\]]*]\([^)]*)(modules\.md)((#[^\\)]*)?\))/g, "$1index.html$3");

		// Ensure that any references to 'modules/' are replaced
		fileContent = fileContent.replace(/(\[[^\]]*]\([^)]*)(modules\/)([^)]*\))/g, "$1$3");

		// Replace all Markdown links with '.html' links
		fileContent = fileContent.replace(/(\[[^\]]*]\([^)]*)(\.md)((#[^\\)]*)?\))/g, "$1.html$3");

		// Write the file
		this.application.logger.verbose(`Kipper Docs Build - Captured file and writing modified version to '${outPath}'`);
		fs.writeFileSync(outPath, fileContent, "utf-8");

		return success;
	}
	return success;
};

export { typedoc };
