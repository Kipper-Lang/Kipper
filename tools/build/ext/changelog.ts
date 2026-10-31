import fetch from "node-fetch";

const CHANGELOG_URL = "https://raw.githubusercontent.com/Kipper-Lang/Kipper/next/CHANGELOG.md";

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
	const response = await fetch(CHANGELOG_URL);
	return await response.text();
}
