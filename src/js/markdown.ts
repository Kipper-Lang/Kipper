/**
 * Markdown handling module, which is intended to handle functionality inside markdown-generated HTML.
 */

// Ensure that the anchors of the headers are clickable.
document.querySelector("body").addEventListener("click", (e) => {
	// The markdown content body (parent of all markdown elements)
	const markdownContentBody = document.querySelectorAll(".markdown-content");

	markdownContentBody.forEach((element) => {
		// If the target is a heading and has a unique id set, then we can navigate to it.
		if (e.target instanceof HTMLHeadingElement && e.target.id.length > 0) {
			const mdHeading = document.getElementById(e.target.id);

			// Ensure that the element is a heading inside a markdown content body
			if (mdHeading === e.target && element.contains(mdHeading)) {
				// Add the anchor to the URL
				window.location.hash = e.target.id;

				// Scroll to the heading
				e.target.focus();
				e.target.scrollIntoView();
			}
		}
	});
});
