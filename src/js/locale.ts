const localeSelectorDropdown: HTMLUListElement = document.querySelector("#header-nav-bar .locales-dropdown");
const localeSelectorButton: HTMLButtonElement = document.querySelector("#header-nav-bar #locales-menu");
const phoneSelectorDropdown: HTMLUListElement = document.querySelector("#phone-header-nav-bar .locales-dropdown");
const phoneSelectorButton: HTMLButtonElement = document.querySelector("#phone-header-nav-bar #locales-menu");

/**
 * Toggles on or off the dropdown for the locale selector.
 */
function toggleLocaleMenuVisibility(dropdown: HTMLUListElement) {
  const isVisible = window.getComputedStyle(dropdown).visibility === "visible";
  setLocaleMenuVisibility(dropdown, isVisible);
}

/**
 * Sets the visibility of the locale menu.
 */
function setLocaleMenuVisibility(dropdown: HTMLUListElement, visible: boolean) {
  if (visible) {
    dropdown.classList.add("invisible");
    dropdown.classList.remove("visible");
  } else {
    dropdown.classList.add("visible");
    dropdown.classList.remove("invisible");
  }
}

localeSelectorButton.addEventListener("click", () => toggleLocaleMenuVisibility(localeSelectorDropdown));
phoneSelectorButton.addEventListener("click",  () => toggleLocaleMenuVisibility(phoneSelectorDropdown));

const localeSelectorItems = document.querySelectorAll(
  "#header-nav-bar .locales-dropdown li.locale-selector-button-wrapper," +
    " #phone-header-nav-bar .locales-dropdown li.locale-selector-button-wrapper"
);
localeSelectorItems.forEach((item) => {
  item.addEventListener("click", () => {
    const locale = item.getAttribute("data-locale");
    localStorage.setItem(window.localeKey, locale);

    const href = item.getAttribute("data-href");
    window.location.pathname = href;
  });
});
