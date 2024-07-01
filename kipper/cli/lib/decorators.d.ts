import { Command } from "@oclif/command";
export declare function prettifiedErrors<TProto extends Command>(): (target: TProto, propertyKey: keyof TProto, descriptor: PropertyDescriptor) => TypedPropertyDescriptor<(...argArray: Array<any>) => Promise<void>>;
