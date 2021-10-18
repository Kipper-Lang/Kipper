// Syntax-analyse command for analysing the syntax of a file
import {Command} from '@oclif/command'

export default class Analyse extends Command {
    static description = 'Analyses a file and validates its syntax';

    static examples = [
      `$ kipper analyse
Validating syntax... - file.kip

0 Warnings, 0 Errors found!

Full log available at \`local/path/kipper-analyse_12-31-42_18-10-21.log\`
`,
    ];

    static args = [
      {
        name: 'file',
        required: true,
        description: 'The file that should be analysed and checked',
      },
    ]

    async run() {
      const {args} = this.parse(Analyse)

      this.log(`Not implemented - File: ${args.file}`)
    }
}
