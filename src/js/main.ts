/* Defines general variables/properties of the site */

// The path to the current document
export const path = window.location.pathname;

// Signalises whether the current document is a docs file
export const isDocsFile: boolean = ((array: string[]) => {
	return array[array.length - 2] == "docs";
})(path.split("/"));

// Alias for 'isDocsFile' to signalise the local file is nested
export const isNestedDir: boolean = isDocsFile;

// The document title
export const documentTitle = document.title;

// The document description
export const documentDescription: string = document.querySelector('meta[name="description"]').getAttribute("content");
