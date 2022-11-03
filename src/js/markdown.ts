/**
 * Markdown handling module, which is intended to handle functionality inside markdown-generated HTML.
 */

// Ensure that the anchors of the headers are clickable.
document.querySelector("body").addEventListener("click", (e) => {
	// If the target is a heading and has a unique id set, then we can navigate to it.
	if (e.target instanceof HTMLHeadingElement && e.target.id.length > 0) {
		// Ensure that the element is a heading inside a Markdown section
		const mdHeading = document.querySelector(`#markdown-content #${e.target.id}`);
		if (mdHeading === e.target) {
			// Add the anchor to the URL
			window.location.hash = e.target.id;

			// Scroll to the heading
			e.target.focus();
			e.target.scrollIntoView();
		}
	}
});
