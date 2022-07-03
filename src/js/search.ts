import { PageIndex, searchIndex } from "./search-index";
import { isDocsFile } from "./main";

export function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function setSearchVisibility(visible: boolean): void {
	document.getElementById("search-result").style.visibility = visible ? "visible" : "hidden";
	document.getElementById("search-result-overlay").style.visibility = visible ? "visible" : "hidden";
	document.getElementById("search-background-overlay").style.visibility = visible ? "visible" : "hidden";
}

export async function search(): Promise<void> {
	const overlaySearch = <HTMLDivElement>document.getElementById("search-result-overlay");
	const searchResult = <HTMLDivElement>document.getElementById("search-result");
	const searchBarInput = <HTMLInputElement>document.getElementById("search-bar-input");
	const searchBar = <HTMLLIElement>document.getElementById("search-bar");

	// Initialise basic interface
	setSearchVisibility(true);

	// Get the search text
	const searchInput = searchBarInput.value.toLowerCase();

	if (searchInput) {
		const pageResults: Array<PageIndex> = (() => {
			const results: Array<PageIndex> = [];
			for (const page of searchIndex) {
				const title = page.pageTitle.toLowerCase();
				const description = page.pageDescription.toLowerCase();

				// If the title or the description includes the string that was searched for, add it to the list
				if (title.includes(searchInput) || description.includes(searchInput)) {
					results.push(page);
				}
			}
			console.log(results);
			return results;
		})();

		if (pageResults.length > 0) {
			let resultsHTML = "";
			for (const result of pageResults) {
				// @ts-ignore
				const link = isDocsFile ? `..${result.uriPath}` : `.${result.uriPath}`;
				const pageDescription = result.pageDescription;
				const pageTitle = capitalizeFirstLetter(result.pageTitle);

				// Positive Result at Search
				console.log("The Search found: " + link + " for your request! (" + searchInput + ")");
				resultsHTML += `<div><p><a href="${link}">${pageTitle}</a></p><small>${pageDescription}</small></div>`;
			}
			searchResult.innerHTML = resultsHTML;
		} else {
			// Negative Result at Search
			searchResult.innerHTML = "Sorry, we couldn't find anything for your search!";
		}
	} else {
		searchResult.innerHTML = "Type to search...";
	}

	// Set position of the search result box
	const searchBarRect: DOMRect = searchBar.parentElement.getBoundingClientRect();
	overlaySearch.style.left = `${searchBarRect.left}px`;
	overlaySearch.style.top = `${searchBarRect.top + searchBarRect.height}px`;
	overlaySearch.style.width = `${searchBarRect.width}px`;
}

export async function loadSearch(): Promise<void> {
	// Verify that the index is complete
	if (searchIndex === []) {
		console.error("Critical Error: Index for the search failed to load! Searching is disabled.");
		document.getElementById("search-bar").style.visibility = "hidden";
	} else {
		console.log("Index initialised!");
	}

	// Add event listener
	document.getElementById("search-bar-input").addEventListener("keyup", search);
	document.getElementById("search-bar-input").addEventListener("focus", search);
	console.log("Search loaded!");
}

// Load search when the DOM finished loading
window.addEventListener("DOMContentLoaded", loadSearch);

// If the user clicks outside the search, remove search
document.addEventListener("click", (e: MouseEvent) => {
	if (
		!document.getElementById("search-result-overlay").contains(<Element>e.target) &&
		!document.getElementById("search-bar").contains(<Element>e.target)
	) {
		setSearchVisibility(false);
	}
});

document.addEventListener("scroll", () => {
	setSearchVisibility(false);
});
