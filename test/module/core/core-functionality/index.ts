import { KipperCompiler } from "@kipper/core";
import { KipperTypeScriptTarget } from "@kipper/target-ts";

export const compiler = new KipperCompiler();
export const defaultTarget = new KipperTypeScriptTarget();
