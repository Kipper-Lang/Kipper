// Simple hello-command - originated as base command to include content for the pre-publish
import { Command } from "@oclif/command";
import { version } from "..";

export default class Hello extends Command {
  static description = "Returns a simple hello from Kipper";

  static examples = [
    `$ kipper hello
Hello from Kipper v0.0.2!
`,
  ]

  async run() {
    this.log(`Hello from Kipper v${version}!`);
  }
}
