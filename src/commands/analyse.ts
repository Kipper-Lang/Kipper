// Syntax-analyse command for analysing the syntax of a file
import { Command, flags } from "@oclif/command";
import { CLIKipperCompiler } from "../compiler";
import {handleCLICall} from "../errors";

export default class Analyse extends Command {
  static description = "Analyses a file and validates its syntax";

  static examples = [
    `$ kipper analyse
Validating syntax... - file.kip

0 Warnings, 0 Errors found!

Full log available at \`local/path/kipper-analyse_HH-MM-SS_dd-mm-yy.log\`
`,
  ];

  static args = [
    {
      name: "file",
      required: true,
      description: "The file that should be analysed and checked",
    },
  ];

  static flags = {
    encoding: flags.string({
      default: "utf-8",
      description: "The encoding that should be used to read the file",
    }),
    verbose: flags.boolean({
      description: "If the compiler should log verbose (Logs everything)",
    }),
    debug: flags.boolean({
      description: "Whether the compiler should log debug messages. If --verbose is set this ",
    }),
  };

  async run() {
    const { args, flags } = this.parse(Analyse);
    const compiler = new CLIKipperCompiler();

    await handleCLICall(
      compiler.logger, this, async () => {
        await compiler.syntaxAnalyse(args.file, flags.encoding as BufferEncoding);
      }
    );
  }
}
