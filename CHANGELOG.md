# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Release notices to docs pages containing functionality that is not implemented yet.
- Implemented dynamic generation of header navigation bar in `gen-header.ts`.
- Version tag in navigation bar logo.
- New class docs-button for smaller buttons that can be used in documentation pages.
- New section in compiler.html for configuring the Kipper Optimiser.

### Changed

- Updated docs design, layout and formatting.
- Updated all docs pages and content to be up-to-date with the recent changes in Kipper.
- Updated button styling (reduced margin and increased border-radius).
- Fixed table overflow in compiler.html.

### Removed

- Title header banners in the Kipper docs to simplify the design.
- Docs index page from docs sidebar navigation menu, as the "Kipper Docs" header already acts as a better replacement.

## [v0.6.0] - 2022-06-18

### Added
- Key combination `Shift + Tab`, which deletes a tab or one or two spaces in the playground editor.
- New docs page `comments.html` containing info about Kipper comments.

### Changed
- Updated OpenGraph tags generation.
- Updated `compiler.html` and `quickstart.html`.

## [v0.5.0] - 2022-05-28

### Added
- Search bar overlay and search implementation for searching in the Kipper docs.
- Added index for all Kipper pages.

### Changed
- Updated descriptions of all Kipper pages to be more accurate.

## [v0.4.0] - 2022-05-17
### Added
- Included Showdown library (Markdown Converter).
- Renderer and Converter for the changelog.html page.
- Implemented translation of the [Kipper Changelog..md](https://github.com/Luna-Klatzer/Kipper/tree/main/CHANGELOG.md) to
  HTML on the changelog.html page.
- Implemented error handling for Kipper compilation errors.

### Changed
- Set default `flex-direction` of lists to `column` instead of previously `row`.
- Updated list format for the header.
- Updated Kipper package to `@kipper/core@latest`.

### Removed

## [v0.3.0] - 2022-04-25
### Added
- Implemented a proper search-bar icon across the site that moves with the flex container.
  Resizing on focus moves it with the rest of the input-bar.
- Properly implemented Kipper compiler and execution script using a WebWorker. The WebWorker will run in its own thread
  and sends compiler messages and stdout messages to the main window.
- Implemented console output and compiler output window.

### Changed

### Removed

## [v0.2.0] - 2022-02-06
### Added
- `1rem` top and bottom margins for the class `red-highlight-text`.
- Remaining docs pages that are required for the next release.
- Implemented basic online code-editor, which allows multi-line syntax-highlighting.
- Remaining docs pages content

### Changed
- Changed syntax highlighting library to `Prism` and added `./prism/prism.css` and `./prism/prism.js`.
- Updated `index.html` entry image, as it's previous content was outdated.
- Fixed missing border-margin for `<code></code>` items, that was caused due to an invalid selector, and
  updated its formatting based whether it has a `<pre></pre>` parent element.

## [v0.1.5] - 2022-02-02
### Added
- Properly working `Copy code` button in `playground.html`.
- Added minor box-shadows to buttons and the search bar.
- Added basic entry image and header.
- Added a new `inverted-button` class, which has a white background with red borders and red text (This should be used
  for less important buttons to highlight the default ones).
- Added transition animation for the homepage image.
- New animation class `underline-button` for buttons and applied it to the navigation bar.
- Changed background color of the footer.

### Changed
- Properly implemented the search-bar animation.
- Renamed generation files and changed the prefix to `gen-`.
- Updated footer bar and added HTL Leonding logo with additional links.
- Replaced search-bar animation with css transition.
- Changed text bottom margin, by defining new variables for `section`, `article` and `p` tags.
- Updated button formatting and added dynamic sizing.

### Removed

## [v0.1.4] - 2021-12-16
### Added
- `screen.css` for specific screen-based handling and arrangement

### Changed
- Updated Responsive Design handling for `text-content` html elements
- Minor responsive design handling, and formatting

### Removed
- Outdated placeholders and replacements

## [v0.1.3] - 2021-12-16

### Added
- Added quickstart.html and usage-example.html (also to nav)

### Changed
- Edited Design of 404.html
- Disabled Spellcheck in Searchbar and Playground Editor

## [v0.1.2] - 2021-12-11

### Added
- Spinner and Text Saving to restore the code of the last session (As long as cookies are not cleared!).
- `search-bar.ts` for Search-bar handling (In Work!).
- Dynamic Open Graph Meta Tag generation across all sites using `main.ts`.
- `main.ts` for general definitions of global variables.
- `gen-footer.ts` to generate the footer across all sites and avoid code-repetition.

### Changed
- Made the text inside buttons bold.
- Fixed overflow issues with inline `<code>` fields, by changing line-height to `1.5`.
- Updated and replaced info in `install.html` with more descriptive and detailed content.
- Changed `--default-border-radius` to `0.5em` from `0.5rem`.
- Link Behaviour, and removed text-decoration when the link is not visited.
- Fixed link bug in `docs/index.html` re-directing to itself when clicking on the logo for the homepage.

### Removed
- Linux Bash Tags and replaced them with simple `>`.
- Remaining site `docs.html`, which was replaced by `/docs`.

## [v0.1.1] - 2021-12-03

### Added
- `gen-header.ts` for auto-generating the header and description text.
- Docs Navigation Sidebar for the docs pages.
- The `/docs` folder for all documentation sites, with the default `index.html` being the entry-point.
- 'Inter' Fonts using the Google-Fonts API.
- `gen-docs-nav-specifier.ts` for generating documentation nav bars.
- `gen-header.ts` for generating the visual header and description on the site.

### Changed
- Updated fonts and added backups fonts.
- Changed button behaviour to not light as yellow, but change it's background color to a darker fuchsia red.
- Label Handling for proper usage of `<label>` with `<input>` and `<textarea>` elements.
- Fixed partially flex overflow caused by width specifiers.
- Text Boxes with specific handling for `<article>` and `<section>`.

### Removed
- Mocha tests that were unneeded.

## [v0.1.0] - 2021-11-29

### Added

- Interactive Console on the Site
- Proper dynamic footer positioning at the bottom of the page.
- Current page navbar highlighting.
- Search-Bar with simple Animation.
- The basic icons and logos that are used throughout the project.
- HTML5 Boilerplate base setup.
- General Default Formatting CSS for the Project.
- `download.html`, `docs.html`, `install.css` and `playground.html`.
- Template file for Nav-Bar.

### Changed
- Set the Links in the Navbar in all important files.

### Removed
- Removed unnecessary `start_local_Server.exe`

[unreleased]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/0.6.0...HEAD
[v0.6.0]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.5.0...v0.6.0
[v0.5.0]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.4.0...v0.5.0
[v0.4.0]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.3.0...v0.4.0
[v0.3.0]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.2.0...v0.3.0
[v0.2.0]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.1.5...v0.2.0
[v0.1.5]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.1.4...v0.1.5
[v0.1.4]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.1.3...v0.1.4
[v0.1.3]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.1.2...v0.1.3
[v0.1.2]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.1.1...v0.1.2
[v0.1.1]: https://github.com/WMC-AHIF-2021/Kipper-Web/compare/v0.1...v0.1.1
[v0.1.0]: https://github.com/WMC-AHIF-2021/Kipper-Web/tree/v0.1
