import type { PromptModule as InquirerPromptModule } from "inquirer";
import inquirer from "inquirer";
import chalk from "chalk";

/**
 * A wrapper around the inquirer prompt module to make it easier to use.
 *
 * This class is used to prompt the user for input.
 * @since 0.11.0
 */
export class PromptModule {
	private readonly promptModule: InquirerPromptModule;

	private constructor(promptModule: InquirerPromptModule) {
		this.promptModule = promptModule;
	}

	static async create() {
		const promptModule = inquirer.createPromptModule();
		return new PromptModule(promptModule);
	}

	public async prompt(question: string, defaultValue?: string): Promise<string> {
		const prefix = chalk.cyan("~ ");
		const answer = await this.promptModule([
			{
				type: "input",
				name: "answer",
				message: `${prefix}${question}`,
				default: defaultValue,
			},
		]);

		return answer.answer;
	}

	public async confirm(question: string): Promise<boolean> {
		const prefix = chalk.cyan("~ ");
		const answer = await this.promptModule([
			{
				type: "confirm",
				name: "answer",
				message: `${prefix}${question}`,
				default: false,
			},
		]);

		return answer.answer;
	}

	public async choice(question: string, possibilities: string[], defaultValue: string) {
		const prefix = chalk.cyan("~ ");
		const answer = await this.promptModule([
			{
				type: "list",
				name: "answer",
				message: `${prefix}${question}`,
				choices: possibilities,
				default: defaultValue,
			},
		]);

		return answer.answer;
	}
}
