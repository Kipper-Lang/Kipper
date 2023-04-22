/**
 * Main file for every docs page, which implements basic functionality for the interface of the various pages.
 */

// Version selection
const versionSelectorDropdown: HTMLUListElement = document.querySelector("#docs-versions-dropdown");
const versionSelectorButton: HTMLButtonElement = document.querySelector(
	"#docs-version-selector-root-button-wrapper button",
);
const navDirDropdownButtons = document.querySelectorAll("p.sidebar-nav-header-dir-item");

// Docs sidebar navigation
const docsSidebarNav: HTMLDivElement = document.querySelector("#docs-sidebar-nav-wrapper");

// Docs content wrapper
const docsContentWrapper: HTMLDivElement = document.querySelector("#docs-page-content-wrapper");

// Phone menu toggle
const phoneMenuToggle = <NodeList>document.querySelectorAll(".phone-docs-nav-bars-menu-toggle");

/**
 * Disables the visibility of the dropdown menu.
 */
function disableVersionDropdownVisibility(): void {
	versionSelectorDropdown.style.visibility = "hidden";
	versionSelectorDropdown.style.display = "none";
}

/**
 * Enables the visibility of the dropdown menu.
 */
function enableVersionDropdownVisibility(): void {
	versionSelectorDropdown.style.visibility = "visible";
	versionSelectorDropdown.style.display = "unset";
}

/**
 * Toggles on or off the dropdown for the version picker.
 */
function toggleVersionDropdownVisibility(): void {
	const isVisible =
		versionSelectorDropdown.style.visibility === "visible" && versionSelectorDropdown.style.display !== "none";
	if (isVisible) {
		disableVersionDropdownVisibility();
	} else {
		enableVersionDropdownVisibility();
	}
}

/**
 * Handles the click event for a dir dropdown button.
 *
 * This is a toggle function, which will either show or hide the content of the directory.
 * @param dirElement The dir dropdown button element, which has been clicked.
 */
function dropdownButtonHandler(dirElement: HTMLParagraphElement): void {
	const contentOfDir = <HTMLDivElement>dirElement.nextElementSibling;
	const caretDown = <HTMLElement>dirElement.children[0].children[0];

	// Only if the dir has content (i.e. is not empty) we want to toggle the visibility
	if (contentOfDir) {
		let style = window.getComputedStyle(contentOfDir);
		if (style.visibility === "visible") {
			/* Hide dropdown */
			contentOfDir.style.visibility = "hidden";
			contentOfDir.style.display = "none";
			caretDown.style.rotate = "-90deg";
			caretDown.style.top = "-1px";
		} else {
			/* Show dropdown */
			contentOfDir.style.visibility = "visible";
			contentOfDir.style.display = "block";
			caretDown.style.rotate = "0deg";
			caretDown.style.top = "0";
		}
	}
}

function toggleVisibilityOfSidebarNav(): void {
	const isVisible = window.getComputedStyle(docsSidebarNav).visibility === "visible";
	if (isVisible) {
		// Make the docs sidebar nav invisible
		docsSidebarNav.classList.remove("visible");
		docsSidebarNav.classList.add("invisible");

		// Make the docs content wrapper visible
		docsContentWrapper.classList.add("visible");
		docsContentWrapper.classList.remove("invisible");
	} else {
		// Make the docs sidebar nav visible
		docsSidebarNav.classList.add("visible");
		docsSidebarNav.classList.remove("invisible");

		// Make the docs content wrapper invisible
		docsContentWrapper.classList.add("invisible");
		docsContentWrapper.classList.remove("visible");
	}
}

// Version selector button
versionSelectorButton.addEventListener("click", toggleVersionDropdownVisibility);

// Phone menu toggle
phoneMenuToggle.forEach((e) => e.addEventListener("click", toggleVisibilityOfSidebarNav));

// Add button handler for each dir dropdown button
navDirDropdownButtons.forEach((button: HTMLParagraphElement) => {
	button.addEventListener("click", () => dropdownButtonHandler(button));
});
