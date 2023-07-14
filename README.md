![](./src/img/logos/kipper-logo-with-head.png)

# Kipper Website
This is the branch containing the Kipper website and static documentation. It uses
TypeScript, SASS and Parcel to deploy and ship the website content.

# Build Process

The build process for the website is seperated into two different processes, where in one the primary website content
such as the homepage and playground are rendered from EJS files and in the other the docs content is generated from
Markdown and then inserted into a EJS template, which is then also rendered into HTML. (This also means the Markdown
may also contain EJS tags if you choose to do so. It will have the same accessible data as the EJS template.)

This build process is done using [build-webpages.ts](/tools/build/build-webpages.ts), which handles the entire process
of merging all EJS files and Markdown files into a finished build that can be then built and shipped with Parcel.

Here's also a simplified flowchart showing the entire process:

![](./src/img/other/docs-workflow.png)

# Development Guide

For the development guide for the Kipper Website and Docs, please refer to [DEVELOPMENT.md](./DEVELOPMENT.md) file and
read through the guide provided there.
