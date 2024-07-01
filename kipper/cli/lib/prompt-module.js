"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptModule = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
class PromptModule {
    constructor(promptModule) {
        this.promptModule = promptModule;
    }
    static async create() {
        const promptModule = inquirer_1.default.createPromptModule();
        return new PromptModule(promptModule);
    }
    async prompt(question, defaultValue) {
        const prefix = chalk_1.default.cyan("~ ");
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
    async confirm(question) {
        const prefix = chalk_1.default.cyan("~ ");
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
    async choice(question, possibilities, defaultValue) {
        const prefix = chalk_1.default.cyan("~ ");
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
exports.PromptModule = PromptModule;
//# sourceMappingURL=prompt-module.js.map