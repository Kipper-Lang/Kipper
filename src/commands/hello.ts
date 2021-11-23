// Simple hello-command - originated as base command to include content for the pre-publish
import { Command } from "@oclif/command";

export default class Hello extends Command {
  static description = "Returns a simple hello from Kipper";

  static examples = [
    `$ kipper hello
Hello from Kipper!
`,
  ];

  async run() {
    this.log(`Hello from Kipper!`);
  }
}
