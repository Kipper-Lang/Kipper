"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const command_1 = require("@oclif/command");
const decorators_1 = require("../decorators");
const prompt_module_1 = require("../prompt-module");
const __1 = require("..");
const path = tslib_1.__importStar(require("node:path"));
const fs = tslib_1.__importStar(require("node:fs/promises"));
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const templates = {
    kipConfig: path.resolve(`${__dirname}/../templates/kip-config.json.template`),
    mainFile: path.resolve(`${__dirname}/../templates/main.kip.template`),
    gitignore: path.resolve(`${__dirname}/../templates/.gitignore.template`),
    packageJson: path.resolve(`${__dirname}/../templates/package.json.template`),
};
class New extends command_1.Command {
    async getRunConfig() {
        const { args, flags } = this.parse(New);
        return {
            args,
            flags,
        };
    }
    async fileExists(filePath) {
        return !!(await fs.stat(filePath).catch(() => false));
    }
    async genKipConfig(rootDir, config) {
        const kipConfig = await fs.readFile(templates.kipConfig, { encoding: "utf8" });
        const kipConfigPath = path.join(rootDir, path.basename(templates.kipConfig).replace(".template", ""));
        await fs.writeFile(kipConfigPath, kipConfig.replace("<PROJECT_TARGET>", config.target).replace("<KIPPER_VERSION>", `^${__1.version}`));
    }
    async genMainFile(rootDir) {
        const mainFile = await fs.readFile(templates.mainFile, { encoding: "utf8" });
        const mainFilePath = path.join(rootDir, "src", path.basename(templates.mainFile).replace(".template", ""));
        await fs.writeFile(mainFilePath, mainFile);
    }
    async genGitignore(rootDir) {
        const gitignore = await fs.readFile(templates.gitignore, { encoding: "utf8" });
        const gitignorePath = path.join(rootDir, path.basename(templates.gitignore).replace(".template", ""));
        await fs.writeFile(gitignorePath, gitignore);
    }
    async genPackageJson(rootDir, config) {
        const packageJson = await fs.readFile(templates.packageJson, { encoding: "utf8" });
        const packageJsonPath = path.join(rootDir, path.basename(templates.packageJson).replace(".template", ""));
        await fs.writeFile(packageJsonPath, packageJson
            .replace("<PACKAGE_NAME>", config.name)
            .replace("<PACKAGE_DESCRIPTION>", config.description)
            .replace("<PACKAGE_VERSION>", config.version)
            .replace("<PACKAGE_AUTHOR>", config.author)
            .replace("<PACKAGE_LICENSE>", config.license)
            .replace("<PROJECT_REPO>", config.repo ? `  "repository": {\n    "type": "git",\n    "url": "${config.repo}"\n  },` : "")
            .replace("<KIPPER_VERSION>", `^${__1.version}`)
            .replace(',\n  "homepage": "<PACKAGE_GIT_REPOSITORY>"', config.repo ? `,\n  "homepage": "${config.repo}"` : ""));
    }
    async run() {
        const { args, flags } = await this.getRunConfig();
        const rootDir = args.location;
        const promptModule = await prompt_module_1.PromptModule.create();
        let projectName = "new-kipper-project";
        let projectDescription = "A new Kipper project";
        let projectVersion = "1.0.0";
        let projectLicense = "MIT";
        let projectAuthor = "Anonymous";
        let projectRepo = undefined;
        let projectTarget = "js";
        if (flags.default) {
            this.log(chalk_1.default.yellow("Using default settings. Skipping setup wizard."));
        }
        else {
            projectName = await promptModule.prompt("What is the name of your project?");
            projectDescription = await promptModule.prompt("Describe your project briefly:");
            projectVersion = await promptModule.prompt("Enter project version (default: 1.0.0):", projectVersion);
            projectLicense = await promptModule.prompt("Choose project license (default: MIT):", projectLicense);
            projectAuthor = await promptModule.prompt("Enter your name or organization:");
            projectRepo = (await promptModule.confirm("Would you like to link a project repository?"))
                ? await promptModule.prompt("Enter the repository URL:")
                : undefined;
            projectTarget = await promptModule.choice("Choose compilation target (default: js):", ["js", "ts"], "js");
        }
        if (!(await this.fileExists(rootDir))) {
            await fs.mkdir(rootDir, { recursive: true });
        }
        const srcDir = path.join(rootDir, "src");
        if (!(await this.fileExists(srcDir))) {
            await fs.mkdir(srcDir, { recursive: true });
        }
        await this.genKipConfig(rootDir, { target: projectTarget });
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
        this.log(chalk_1.default.green(`\nProject '${projectName}' created successfully!`));
    }
}
New.description = "Generate a new Kipper using a setup wizard. (Node-only for now)";
New.examples = [];
New.args = [
    {
        name: "location",
        required: false,
        default: process.cwd(),
        description: "The directory where the new project should be created. Defaults to the current directory.",
    },
];
New.flags = {
    default: command_1.flags.boolean({
        char: "d",
        default: false,
        description: "Use the default settings for the new project. Skips the setup wizard.",
    }),
};
exports.default = New;
tslib_1.__decorate([
    (0, decorators_1.prettifiedErrors)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], New.prototype, "run", null);
//# sourceMappingURL=new.js.map