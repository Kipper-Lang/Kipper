/**
 * Main file for every docs page, which implements basic functionality for the interface of the various pages.
 */

// Version selection
const versionSelectorDropdown: HTMLUListElement = document.querySelector("#docs-versions-dropdown");
const versionSelectorButton: HTMLButtonElement = document.querySelector("#docs-version-selector-root-button-wrapper button");

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

// Version selector button
versionSelectorButton.addEventListener("click", toggleVersionDropdownVisibility);
