/**
 * 'new' command for generating a new Kipper project.
 * @since 0.11.0
 */
import type { args } from "@oclif/parser";
import { Command, flags } from "@oclif/command";
import { prettifiedErrors } from "../decorators";
import { PromptModule } from "../prompt-module";
import { version } from "..";
import * as path from "node:path";
import * as fs from "node:fs/promises";
import chalk from "chalk";

const templates = {
	kipConfig: path.resolve(`${__dirname}/../templates/kip-config.json.template`),
	mainFile: path.resolve(`${__dirname}/../templates/main.kip.template`),
	gitignore: path.resolve(`${__dirname}/../templates/.gitignore.template`),
	packageJson: path.resolve(`${__dirname}/../templates/package.json.template`),
};

export default class New extends Command {
	static override description: string = "Generate a new Kipper using a setup wizard. (Node-only for now)";

	// TODO! Add examples when the command moves out of development
	static override examples: Array<string> = [];

	static override args: args.Input = [
		{
			name: "location",
			required: false,
			default: process.cwd(),
			description: "The directory where the new project should be created. Defaults to the current directory.",
		},
	];

	static override flags: flags.Input<any> = {
		default: flags.boolean({
			char: "d",
			default: false,
			description: "Use the default settings for the new project. Skips the setup wizard.",
		}),
	};

	/**
	 * Gets the configuration for the invocation of this command.
	 * @private
	 */
	private async getRunConfig() {
		const { args, flags } = this.parse(New);

		return {
			args,
			flags,
		};
	}

	private async fileExists(filePath: string): Promise<boolean> {
		return !!(await fs.stat(filePath).catch(() => false));
	}

	private async genKipConfig(rootDir: string, config: {target: string}): Promise<void> {
		const kipConfig = await fs.readFile(templates.kipConfig, { encoding: "utf8" });
		const kipConfigPath = path.join(
			rootDir,
			path
				.basename(templates.kipConfig)
				.replace(".template", "")
		);
		await fs.writeFile(
			kipConfigPath,
			kipConfig
				.replace("<PROJECT_TARGET>", config.target)
				.replace("<KIPPER_VERSION>", `^${version}`)
		);
	}

	private async genMainFile(rootDir: string): Promise<void> {
		const mainFile = await fs.readFile(templates.mainFile, { encoding: "utf8" });
		const mainFilePath = path.join(
			rootDir,
			"src",
			path
				.basename(templates.mainFile)
				.replace(".template", "")
		);
		await fs.writeFile(mainFilePath, mainFile);
	}

	private async genGitignore(rootDir: string): Promise<void> {
		const gitignore = await fs.readFile(templates.gitignore, { encoding: "utf8" });
		const gitignorePath = path.join(
			rootDir,
			path
				.basename(templates.gitignore)
				.replace(".template", "")
		);
		await fs.writeFile(gitignorePath, gitignore);
	}

	private async genPackageJson(
		rootDir: string,
		config: {
			name: string,
			description: string,
			version: string,
			license: string,
			author: string,
			repo: string | undefined,
		}
	): Promise<void> {
		const packageJson = await fs.readFile(templates.packageJson, { encoding: "utf8" });
		const packageJsonPath = path.join(
			rootDir,
			path
				.basename(templates.packageJson)
				.replace(".template", "")
		);
		await fs.writeFile(
			packageJsonPath,
			packageJson
				.replace("<PACKAGE_NAME>", config.name)
				.replace("<PACKAGE_DESCRIPTION>", config.description)
				.replace("<PACKAGE_VERSION>", config.version)
				.replace("<PACKAGE_AUTHOR>", config.author)
				.replace("<PACKAGE_LICENSE>", config.license)
				.replace(
					"<PROJECT_REPO>",
					config.repo ? `  "repository": {\n    "type": "git",\n    "url": "${config.repo}"\n  },` : ""
				)
				.replace("<KIPPER_VERSION>", `^${version}`)
		);
	}
	@prettifiedErrors<New>()
	public async run() {
		const { args, flags } = await this.getRunConfig();
		const rootDir = args.location;
		const promptModule = await PromptModule.create();

		// For the setup wizard we will ask the following questions
		// - What is the name of the project?
		// - What is the description of the project?
		// - What is the version of the project? (defaults to 1.0.0)
		// - What is the license of the project? (defaults to MIT)
		// - What is the author of the project?
		// - What is the repo for the project? (Defaults to none)
		// - What is the compilation target? (Defaults to js)
		// Afterwards, we will generate a new Kipper main file in 'src/', generate a new kip-config.json file in the given
		// location, a new package.json and a new .gitignore.

		// Initialize variables for user input
		let projectName: string = "new-kipper-project";
		let projectDescription: string = "A new Kipper project";
		let projectVersion: string = "1.0.0";
		let projectLicense: string = "MIT";
		let projectAuthor: string = "Anonymous";
		let projectRepo: string | undefined = undefined;
		let projectTarget: string = "js";

		// Skip setup wizard if default settings are used
		if (flags.default) {
			this.log(chalk.yellow("Using default settings. Skipping setup wizard."));
		} else {
			projectName = await promptModule.prompt("What is the name of your project?");
			projectDescription = await promptModule.prompt("Describe your project briefly:");
			projectVersion = await promptModule.prompt("Enter project version (default: 1.0.0):", projectVersion);
			projectLicense = await promptModule.prompt("Choose project license (default: MIT):", projectLicense);
			projectAuthor = await promptModule.prompt("Enter your name or organization:");
			projectRepo = await promptModule.confirm("Would you like to link a project repository?")
				? await promptModule.prompt("Enter the repository URL:")
				: undefined;
			projectTarget = await promptModule.choice("Choose compilation target (default: js):", ["js", "ts"], "js");
		}

		// Create the project and source directories if they don't exist
		if (!(await this.fileExists(rootDir))) {
			await fs.mkdir(rootDir, { recursive: true });
		}
		const srcDir = path.join(rootDir, "src");
		if (!(await this.fileExists(srcDir))) {
			await fs.mkdir(srcDir, { recursive: true });
		}

		// Create the project files
		await this.genKipConfig(rootDir, {target: projectTarget});
		await this.genMainFile(rootDir);
		await this.genGitignore(rootDir);
		await this.genPackageJson(rootDir, {
			name: projectName,
			description: projectDescription,
			version: projectVersion,
			license: projectLicense,
			author: projectAuthor,
			repo: projectRepo,
		});

		this.log(chalk.green(`\nProject '${projectName}' created successfully!`));
	}
}
