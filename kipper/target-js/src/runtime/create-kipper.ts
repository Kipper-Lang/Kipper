import type { TranslatedCodeLine } from "@kipper/core";

/**
 * The options for creating the Kipper runtime.
 * @property inlinedRequirements The inlined requirements for the Kipper runtime.
 * runtime.
 * @since 0.13.0
 */
export interface CreateKipperOptions {
	/**
	 * The inlined requirements for the Kipper runtime.
	 * @since 0.13.0
	 */
	inlinedRequirements?: Array<TranslatedCodeLine>;
}

/**
 * Returns the string (JavaScript) representation of the Kipper runtime.
 * @param args The options for creating the Kipper runtime.
 * runtime.
 * @since 0.13.0
 */
export const createKipper = (args: CreateKipperOptions = {}): string =>
	`var __createKipper = (forceNew = false) => {
 	if (!forceNew && typeof __globalScope !== "undefined" && (__kipper = __globalScope.__kipper || (typeof __kipper !== "undefined" && __kipper))) {
 		return __kipper;
 	}
 	const __tmpKip = {};
	class KipperError extends Error { constructor(msg) { super(msg); this.name='KipError'; }};
	class KipperNotImplementedError extends KipperError {
		constructor(msg) { super(msg); this.name = 'KipNotImplementedError'; }
	}
	class KipperType {
		constructor(name, fields, methods, baseType = null, customComparer = null) {
			this.name = name; this.fields = fields; this.methods = methods; this.baseType = baseType; this.customComparer = customComparer;
		}
		isInHierarchyOfType(type) {
			if (this === type) { return true; }
			if (type.baseType === null) { return false; }
			return this.isInHierarchyOfType(type.baseType);
		}
		accepts(objT) {
			if (this === objT) return true;
			return objT instanceof KipperType && (this.customComparer ? this.customComparer(this, objT) : true);
		}
		acceptsVal(obj) {
			return this.accepts(__tmpKip.typeOf(obj));
		}
	};
	class KipperGenericType extends KipperType {
		constructor(name, fields, methods, genericArgs, baseType = null, customComparer = null) {
			super(name, fields, methods, baseType, customComparer); this.genericArgs = genericArgs;
		}
		accepts(objT) {
			if (this === objT) return true;
			if (!(objT instanceof KipperGenericType) || this.genericArgs.length !== objT.genericArgs.length) return false;
			const foreignGenericArgs = Object.entries(objT.genericArgs);
			return this.name === objT.name &&
				(this.customComparer ? this.customComparer(this, objT) : true) &&
				Object.entries(this.genericArgs).every((arg, i) => {
					if (Array.isArray(arg)) {
						if (!Array.isArray(foreignGenericArgs[i]) || arg.length !== foreignGenericArgs[i].length) { return false; }
						return arg.every((subArg, j) => subArg.accepts(foreignGenericArgs[i][j]));
					}
					return arg.accepts(foreignGenericArgs[i])
				});
		}
		changeGenericTypeArguments(genericArgs) { return new KipperGenericType(this.name, this.fields, this.methods, genericArgs, this.baseType) }
	};
	class KipperInterfaceType extends KipperType {
		constructor(name, fields, methods, baseType = null, customComparer = null) {
			super(name, fields, methods, baseType, customComparer);
		}
		accepts(objT) {
			if (this === objT) return true;
			if (!(objT instanceof KipperInterfaceType)) return false;
			return this.isSubsetOfOrEqual(objT) &&
				(this.customComparer ? this.customComparer(this, objT) : true);
		}
		acceptsVal(obj) {
			const objT = __tmpKip.typeOf(obj);
			if (objT !== __tmpKip.builtIn.obj && !(obj instanceof Object)) return false;
			return __tmpKip.matches(obj, this);
		}
		isSubsetOfOrEqual(objT) {
			return this.fields.every((field) => {
				const fieldInObjT = objT.fields.find((f) => f.name === field.name);
				return fieldInObjT && field.type.accepts(fieldInObjT.type);
			}) && this.methods.every((method) => {
				const methodInObjT = objT.methods.find((m) => m.name === method.name);
				return methodInObjT && method.returnType.accepts(methodInObjT.returnType) && method.parameters.length === methodInObjT.parameters.length &&
					method.parameters.every((param, i) => param.type.accepts(methodInObjT.parameters[i].type));
			});
		}
	}
	const __type_any = new KipperType('any', undefined, undefined);
	const __type_null = new KipperType('null', undefined, undefined, undefined, (a, b) => a.name === b.name);
	const __type_undefined = new KipperType('undefined', undefined, undefined, undefined, (a, b) => a.name === b.name);
	const __type_str = new KipperType('str', undefined, undefined, undefined, (a, b) => a.name === b.name);
	const __type_num = new KipperType('num', undefined, undefined, undefined, (a, b) => a.name === b.name);
	const __type_bool = new KipperType('bool', undefined, undefined, undefined, (a, b) => a.name === b.name);
	const __type_obj = new KipperType('obj', [], [], undefined, (a, b) => a.isInHierarchyOfType(b) && Array.isArray(b.fields) && Array.isArray(b.methods));
	const __type_Array = new KipperGenericType('Array', undefined, undefined, {T: __type_any}, undefined, (a, b) => a.name === b.name);
	const __type_Func = new KipperGenericType('Func', undefined, undefined, {T: [], R: __type_any}, undefined, (a, b) => a.name === b.name);
	__tmpKip.builtIn = {
		any: __type_any,
		null: __type_null,
		undefined: __type_undefined,
		str: __type_str,
		num: __type_num,
		bool: __type_bool,
		obj: __type_obj,
		Array: __type_Array,
		Func: __type_Func,
	};
	__tmpKip.KipperError = KipperError;
	__tmpKip.TypeError = (class KipperTypeError extends KipperError { constructor(msg) { super(msg); this.name = 'KipTypeError'; } });
	__tmpKip.IndexError = (class KipperIndexError extends KipperError { constructor(msg) { super(msg); this.name = 'KipIndexError'; } });
	__tmpKip.NotImplementedError = KipperNotImplementedError;
	__tmpKip.Property = class KipperProperty { constructor(name, type) { this.name = name; this.type = type; } };
	__tmpKip.MethodParameter = class MethodParameter { constructor(name, type) { this.name = name; this.type = type; } };
	__tmpKip.Method = class KipperMethod { constructor(name, returnType, parameters) { this.name = name; this.returnType = returnType; this.parameters = parameters; } };
	__tmpKip.Type = KipperType;
	__tmpKip.assignTypeMeta = (value, typeMeta) => Object.assign(value, { __kipType: typeMeta });
	__tmpKip.getTypeMeta = (value) => value.__kipType;
	__tmpKip.newArrayT = (type) => __tmpKip.builtIn.Array.changeGenericTypeArguments({ T: type });
	__tmpKip.newFuncT = (params, returnType) => __tmpKip.builtIn.Func.changeGenericTypeArguments({ T: params, R: returnType });
	__tmpKip.newIntfT = (name, fields, methods, baseType = __tmpKip.builtIn.obj, customComparer = null) => new KipperInterfaceType(name, fields, methods, baseType, customComparer);
	__tmpKip.typeOf = (value) => {
		const prim = typeof value;
		switch (prim) {
			case 'undefined': return __tmpKip.builtIn.undefined;
			case 'string': return __tmpKip.builtIn.str;
			case 'number': return __tmpKip.builtIn.num;
			case 'boolean': return __tmpKip.builtIn.bool;
			case 'function': {
				return '__kipType' in value ? value.__kipType : __tmpKip.builtIn.Func;
			}
			case 'symbol':
			case 'bigint':
			case 'object': {
				if (value === null) return __tmpKip.builtIn.null;
				if (Array.isArray(value)) {
					return '__kipType' in value ? value.__kipType : __tmpKip.builtIn.Array;
				}
				const prot = Object.getPrototypeOf(value);
				if (prot && prot.constructor !== Object) {
					return prot.constructor;
				}
				return __tmpKip.builtIn.obj;
			}
		}
	};
	__tmpKip.matches = (value, pattern) => {
		const primTypes = [ 'str', 'num', 'bool', 'null', 'undefined' ];
		const genTypes = [ 'Array', 'Func' ];
		if (pattern.fields && Array.isArray(pattern.fields)) {
			for (const field of pattern.fields) {
				const fieldName = field.name;
				const fieldType = field.type;
				const nameIsInType = fieldName in value;
				if (!nameIsInType) {
					return false;
				}
				const fieldValue = value[fieldName];
				const isSameType = __tmpKip.typeOf(fieldValue) === field.type;
				if (primTypes.includes(field.type.name) && !isSameType) {
					return false;
				}
				if (genTypes.includes(fieldType.name)) {
					throw new KipperNotImplementedError("Matches does not yet support the 'Array' and 'Func' types");
				}
				if (!primTypes.includes(fieldType.name)) {
					if (!__tmpKip.matches(fieldValue, fieldType)) {
						return false;
					}
				}
			}
		}
		if (pattern.methods && Array.isArray(pattern.methods)) {
			for (const field of pattern.methods) {
				const fieldName = field.name;
				const fieldReturnType = field.returnType;
				const parameters = field.parameters;
				const nameIsInType = fieldName in value;
				if (!nameIsInType) {
					return false;
				}
				const fieldValue = value[fieldName];
				const isSameType = fieldReturnType === fieldValue.__kipType.genericArgs.R;
				if (!isSameType) {
					return false;
				}
				const methodParameters = fieldValue.__kipType.genericArgs.T;
				if (parameters.length !== methodParameters.length) {
					return false;
				}
				let count = 0;
				for (let param of parameters) {
					if (param.type.name !== methodParameters[count].name) {
						return false;
					}
					count++;
				}
			}
		}
		return true;
	};
  Object.assign(__tmpKip, {${args.inlinedRequirements?.map((req) => req.join("")).join(", ") ?? ""}});
  return __tmpKip;
};`.replace(/\n| {2}|	/g, "");
