/**
 * Main for the navigation bar for all pages on the website.
 */

const phoneHeaderMenu = <HTMLOListElement>document.querySelector("ul#phone-header-nav-bar-menu");
const phoneHeaderMenuToggle = <HTMLLIElement>document.querySelector(".phone-header-nav-bar-menu-toggle");
const phoneLocaleSelectorDropdown: HTMLUListElement = document.querySelector("#phone-header-nav-bar #locales-dropdown");

/**
 * Enables the visibility of the dropdown menu.
 *
 * Only works on phones.
 */
function togglePhoneHeaderMenu() {
	const isVisible = window.getComputedStyle(phoneHeaderMenu).visibility === "visible";
	if (isVisible) {
		phoneHeaderMenu.classList.add("invisible");
		phoneHeaderMenu.classList.remove("visible");
	} else {
		phoneHeaderMenu.classList.add("visible");
		phoneHeaderMenu.classList.remove("invisible");
	}

  // Make sure to close the locale menu when any other menu is opened
  phoneLocaleSelectorDropdown.classList.add("invisible");
  phoneLocaleSelectorDropdown.classList.remove("visible");
}
phoneHeaderMenuToggle.addEventListener("click", togglePhoneHeaderMenu);
