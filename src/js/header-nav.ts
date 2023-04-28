/**
 * Main for the navigation bar for all pages on the website.
 */

const phoneHeaderMenu = <HTMLOListElement>document.querySelector("ul#phone-header-nav-bar-menu");
const phoneHeaderMenuToggle = <HTMLLIElement>document.querySelector(".phone-header-nav-bar-menu-toggle");

/**
 * Enables the visibility of the dropdown menu.
 *
 * Only works on phones.
 */
function togglePhoneHeaderMenu() {
	console.log(phoneHeaderMenu);
	const isVisible = window.getComputedStyle(phoneHeaderMenu).visibility === "visible";
	console.log(isVisible);
	if (isVisible) {
		phoneHeaderMenu.classList.add("invisible");
		phoneHeaderMenu.classList.remove("visible");
	} else {
		phoneHeaderMenu.classList.add("visible");
		phoneHeaderMenu.classList.remove("invisible");
	}
}

phoneHeaderMenuToggle.addEventListener("click", togglePhoneHeaderMenu);
console.log(phoneHeaderMenuToggle);
