import fetch from "node-fetch";

// Fix bug where in the changelog the '<details>' and '<summary>' tags are wrapped using a '<p>' tag
export function registerChangelogFixExtension(showdown: {
	extension: (name: string, func: () => Array<object>) => void;
}): void {
	showdown.extension("fix-details-summary", () => {
		return [
			{
				type: "output",
				filter: (text: string) => {
					return text
						.replace(/<p><details>/g, "<details>")
						.replace(/<\/details><\/p>/g, "</details>")
						.replace(/<p><summary>/g, "<summary>")
						.replace(/<\/summary><\/p>/g, "</summary>");
				},
			},
		];
	});
}

/**
 * Downloads the latest CHANGELOG.md from the Kipper repository.
 */
export async function downloadLatestChangelog(): Promise<string> {
	const response = await fetch("https://raw.githubusercontent.com/Kipper-Lang/Kipper/main/CHANGELOG.md");
	return await response.text();
}
