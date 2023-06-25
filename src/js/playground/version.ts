/**
 * Script for managing the version selection inside the playground.
 */

// Version dropdown list
const versionSelectorDropdown: HTMLUListElement = document.querySelector("#versions-dropdown");

// Version selector button
const versionSelectorButton: HTMLButtonElement = document.querySelector("#version-selector-root-button-wrapper button");
const versionSelectorButtonVersionText: HTMLSpanElement = document.querySelector(
	"#version-selector-root-button-wrapper button span",
);

/**
 * Ensures that a version is set in the {@link localStorage} field 'kipperVersion'.
 */
export function ensureVersionIsSet(): void {
	if (!localStorage.getItem("kipperVersion")) {
		// Get the default version from the dropdown (EJS will have handled this and rendered the correct version)
		// Remove the 'v' prefix, as for NPM versions, the 'v' prefix is not used.
		const defaultVersion = versionSelectorButtonVersionText.innerText.replace("v", "");

		localStorage.setItem("kipperVersion", defaultVersion);
	}
}

/**
 * Get the current version set for the Kipper compiler.
 */
export function getKipperVersion(): string {
	ensureVersionIsSet();
	return getKipperVersionUnsafe()!;
}

/**
 * Unsafe version of {@link getKipperVersion}, which does not ensure that the version is set.
 *
 * This means it may return null if there hasn't been a version set before.
 */
export function getKipperVersionUnsafe(): string | null {
	return localStorage.getItem("kipperVersion");
}

/**
 * Sets the {@link localStorage} field 'kipperVersion' to the specified {@link version}.
 * @param version The version to set.
 */
export function setKipperVersion(version: string) {
	localStorage.setItem("kipperVersion", version);

	// Set the version in the dropdown button
	versionSelectorButtonVersionText.innerHTML = `v${version}`;
}

/**
 * Disables the visibility of the dropdown menu.
 */
export function disableVersionDropdownVisibility(): void {
	versionSelectorDropdown.style.visibility = "hidden";
	versionSelectorDropdown.style.display = "none";
}

/**
 * Enables the visibility of the dropdown menu.
 */
export function enableVersionDropdownVisibility(): void {
	versionSelectorDropdown.style.visibility = "visible";
	versionSelectorDropdown.style.display = "unset";
}

/**
 * Sets the version of the playground to the version that was selected.
 * @param versionListItem The list item that was clicked.
 */
export async function selectPlaygroundVersion(versionListItem: HTMLLIElement): Promise<void> {
	// Set the version based on the data field of the element
	const version = versionListItem.getAttribute("data-version");
	console.log(version);
	if (version !== null) {
		setKipperVersion(version);
		disableVersionDropdownVisibility(); // Hide the dropdown
	}
}

/**
 * Toggles on or off the dropdown for the version picker.
 */
export function toggleVersionDropdownVisibility(): void {
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

// Version selector dropdown handling (clicking on a version)
const versionSelectorDropdownItems = document.querySelectorAll("#versions-dropdown .version-selector-button-wrapper");
versionSelectorDropdownItems.forEach((item: HTMLLIElement) => {
	item.addEventListener("click", async () => await selectPlaygroundVersion(item));
});
