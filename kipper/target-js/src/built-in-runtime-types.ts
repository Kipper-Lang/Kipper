import { TargetJS } from "./target";

export class BuiltInRuntimeType {
	name: string;
	value: string;

	constructor(name: string, value: string) {
		this.name = name;
		this.value = value;
	}
}

export const builtInRuntimeTypes: Array<BuiltInRuntimeType> = [
	new BuiltInRuntimeType("num", `new __kipper.Type("num", undefined, undefined)`),
	new BuiltInRuntimeType("str", `new __kipper.Type("str", undefined, undefined)`),
	new BuiltInRuntimeType("bool", `new __kipper.Type("bool", undefined, undefined)`),
	new BuiltInRuntimeType("void", `new __kipper.Type("void", undefined, undefined)`),
	new BuiltInRuntimeType("undefined", `new __kipper.Type("undefined", undefined, undefined)`),
	new BuiltInRuntimeType("null", `new __kipper.Type("null", undefined, undefined)`),
	new BuiltInRuntimeType("obj", `new __kipper.Type("obj", undefined, undefined)`),
	new BuiltInRuntimeType("array", `new __kipper.Type("array", undefined, undefined)`),
	new BuiltInRuntimeType("Func", `new __kipper.Type("Func", undefined, undefined)`),
];
