export class BuiltInRuntimeType {
	name: string;
	value: string;

	constructor(name: string, value: string) {
		this.name = name;
		this.value = value;
	}
}

export const builtInTypes: Array<BuiltInRuntimeType> = [
	new BuiltInRuntimeType("num", 'new Type("num", undefined, undefined)'),
	new BuiltInRuntimeType("str", 'new Type("str", undefined, undefined)'),
	new BuiltInRuntimeType("bool", 'new Type("bool", undefined, undefined)'),
	new BuiltInRuntimeType("void", 'new Type("void", undefined, undefined)'),
	new BuiltInRuntimeType("undefined", 'new Type("undefined", undefined, undefined)'),
	new BuiltInRuntimeType("null", 'new Type("null", undefined, undefined)'),
	new BuiltInRuntimeType("obj", 'new Type("obj", undefined, undefined)'),
	new BuiltInRuntimeType("array", 'new Type("array", undefined, undefined)'),
];
