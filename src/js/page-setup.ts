/**
 * Setup for a standard Kipper page.
 */
import { UpdateTitle, DefineOpenGraphMetaTags, openGraphMetaTags, documentTitle } from "./main";

(() => {
	// Update title using the JS API
	document.title = UpdateTitle(documentTitle);

	// For safety measures, if the JS changes are not recognised, manually update the HTML element
	Array.from(document.getElementsByTagName("title")).forEach((elem: HTMLTitleElement) => {
		elem.innerHTML = document.title;
	});

	// Define OpenGraph Meta tags
	DefineOpenGraphMetaTags(openGraphMetaTags);
})();
