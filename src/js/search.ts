/**
 * Search bar implementation across the whole website.
 */
import { PageIndex, searchIndex } from "./search-index";
import { isDocsFile } from "./main";

const searchOverlay = <HTMLDivElement>document.getElementById("search-result-overlay");
const searchResult = <HTMLDivElement>document.getElementById("search-result");

export function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function setSearchVisibility(visible: boolean): void {
	searchResult.style.visibility = visible ? "visible" : "hidden";
	searchOverlay.style.visibility = visible ? "visible" : "hidden";
}

export async function search(searchBar, searchBarInput): Promise<void> {
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
			searchResult.innerHTML = "<div><p>Sorry, we couldn't find anything for your search!</p></div>";
		}
	} else {
		searchResult.innerHTML = "<div><p>Type to search...</p></div>";
	}

	// Set position of the search result box
	const searchBarRect: DOMRect = searchBar.parentElement.getBoundingClientRect();
	searchOverlay.style.left = `${searchBarRect.left}px`;
	searchOverlay.style.top = `${searchBarRect.top + searchBarRect.height}px`;
	searchOverlay.style.width = `${searchBarRect.width}px`;
}

export async function loadSearch(): Promise<void> {
	// Verify that the index is complete
	if (searchIndex !== []) {
		console.log("Index initialised!");
	} else {
		console.error("Critical Error: Index for the search failed to load! Searching is disabled.");
		document.getElementById("search-bar").style.visibility = "hidden";
	}

	// Add event listener
	document.querySelectorAll(".search-bar").forEach((searchBar: HTMLLIElement) => {
		const searchBarInput = <HTMLInputElement>searchBar.children.item(1);

		searchBar.addEventListener("keyup", () => search(searchBar, searchBarInput));
		searchBar.addEventListener("focus", () => search(searchBar, searchBarInput));
	});
	console.log("Search loaded!");
}

// Load search when the DOM finished loading
window.addEventListener("DOMContentLoaded", loadSearch);

// If the user clicks outside the search, remove search
document.addEventListener("click", (e: MouseEvent) => {
	const selectedInOverlay = document.getElementById("search-result-overlay").contains(<Element>e.target);
	const selectedInSearchBar = Array.from(document.querySelectorAll(".search-bar")).find((el) =>
		el.contains(<Element>e.target),
	);

	// Disable visibility if the checks fail
	if (!selectedInOverlay && !selectedInSearchBar) {
		setSearchVisibility(false);
	}
});

document.addEventListener("scroll", () => {
	setSearchVisibility(false);
});
