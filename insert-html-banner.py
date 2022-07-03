""" Script to automatically insert a disclaimer html into each html page """
from html.parser import HTMLParser
from pathlib import Path
from typing import List
from glob import glob

BANNER_TO_INSERT: str = """
<div id="disclaimer-banner" style="display: flex; justify-content: center; background-color: white;">
    <p style="padding: 0.5rem; font-style: italic; margin: 0;">
      Educational, non-profit project created by students
    </p>
    <a href="https://www.htl-leonding.at/" style="padding: 0.5rem 0; font-style: italic;">
      @ HTL Leonding.
    </a>
</div>
"""


class InsertHTMLParser(HTMLParser):
    """
    The deployment html parser, which will update the files and generate
    a new file with the banner added
    """
    def __init__(self):
        self.content = ""
        super().__init__()

    def insert_banner(self, content: str) -> str:
        """ Inserts the banner into the passed html string """
        self.content = content
        self.feed(content)

        # The file should be updated now -> return new string
        _ = self.content
        self.content = ""
        return _

    def handle_starttag(self, tag, attrs):
        """ Handles a html starttag """
        if tag == "body":
            # Getting the line for the <body> tag
            line, col = self.getpos()

            # Getting the file content split up into its sections
            file_lines = self.content.split("\n")
            prev_lines = file_lines[:line-1]
            insert_section = file_lines[line-1]
            after_lines = file_lines[line:]

            for pos, c in enumerate(insert_section, col):
                if c == ">":
                    # Appending the banner in this exact location
                    insert_section = f"{insert_section[:pos+1]}" \
                                   f"\n{BANNER_TO_INSERT}\n" \
                                   f"{insert_section[pos+1:]}"

            # Merging the strings back together
            nl: str = '\n'
            self.content = f"{nl.join(prev_lines)}" \
                           f"{insert_section}{nl}" \
                           f"{nl.join(after_lines)}"


def discover_files() -> List[Path]:
    """ Discovers all html files and updates their content """
    return list(
        Path(i) for i in glob("src/**/*.html", recursive=True)
        if "404" not in i
    )


def update_files(to_update: List[Path]) -> None:
    """ Updates every file by appending the banner """
    for file in to_update:
        with open(file, 'r+', encoding="utf-8") as f:
            content = f.read()
            content = InsertHTMLParser().insert_banner(content)
            f.seek(0)
            f.write(content)


if __name__ == '__main__':
    files: List[Path] = discover_files()
    update_files(files)

