const localeSelectorDropdown: HTMLUListElement = document.querySelector("#locales-dropdown");
const localeSelectorButton: HTMLButtonElement = document.querySelector("#locales-menu");

/**
 * Toggles on or off the dropdown for the locale selector.
 */
function toggleLocaleDropdownVisibility(): void {
  const isVisible =
    localeSelectorDropdown.style.visibility === "visible" && localeSelectorDropdown.style.display !== "none";
  localeSelectorDropdown.style.visibility = isVisible ? "hidden" : "visible";
  localeSelectorDropdown.style.display = isVisible ? "none" : "block";
}

localeSelectorButton.addEventListener("click", toggleLocaleDropdownVisibility);
console.log(localeSelectorButton);
console.log(localeSelectorDropdown);
