/**
 * 'run' command for running a compiled kipper-file (.js file) or compiling and running a file in one
 * @author Luna Klatzer
 * @copyright 2021-2022 Luna Klatzer
 * @since 0.0.3
 */
import { Command, flags } from "@oclif/command";
import { KipperCompiler } from "../compiler";

export default class Run extends Command {
  static description = "Runs a compiled file or compiles and afterwards runs the passed file";

  // TODO! Add examples when the command moves out of development
  static examples = [];

  static args = [
    {
      name: "file",
      required: true,
      description: "The file that should be either run (.js) or compiled and afterwards run"
    }
  ];

  static flags = {
    encoding: flags.string({
      default: "utf8",
      description: "The encoding that should be used to read the file"
    })
  };

  async run() {
    const { args, flags } = this.parse(Run);
    const compiler = new KipperCompiler();
    await compiler.compileFile(args.file, true, flags.encoding as BufferEncoding);
  }
}
