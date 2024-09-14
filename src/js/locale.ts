const localeSelectorDropdown: HTMLUListElement = document.querySelector("#header-nav-bar #locales-dropdown");
const localeSelectorButton: HTMLButtonElement = document.querySelector("#header-nav-bar #locales-menu");
const phoneSelectorDropdown: HTMLUListElement = document.querySelector("#phone-header-nav-bar #locales-dropdown");
const phoneSelectorButton: HTMLButtonElement = document.querySelector("#phone-header-nav-bar #locales-menu");

/**
 * Toggles on or off the dropdown for the locale selector.
 */
function toggleVisibility(dropdown: HTMLUListElement) {
  const isVisible = window.getComputedStyle(dropdown).visibility === "visible";
  if (isVisible) {
    dropdown.classList.add("invisible");
    dropdown.classList.remove("visible");
  } else {
    dropdown.classList.add("visible");
    dropdown.classList.remove("invisible");
  }
}

localeSelectorButton.addEventListener("click", () => toggleVisibility(localeSelectorDropdown));
phoneSelectorButton.addEventListener("click",  () => toggleVisibility(phoneSelectorDropdown));
console.log(localeSelectorDropdown, localeSelectorButton, phoneSelectorDropdown, phoneSelectorButton);
