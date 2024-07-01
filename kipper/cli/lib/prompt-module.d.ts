export declare class PromptModule {
    private readonly promptModule;
    private constructor();
    static create(): Promise<PromptModule>;
    prompt(question: string, defaultValue?: string): Promise<string>;
    confirm(question: string): Promise<boolean>;
    choice(question: string, possibilities: string[], defaultValue: string): Promise<any>;
}
