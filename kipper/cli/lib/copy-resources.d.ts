import { EvaluatedKipperConfigFile } from "@kipper/config";
import { KipperLogger } from "@kipper/core";
export declare function copyConfigResources(resources: EvaluatedKipperConfigFile["resources"], logger?: KipperLogger): Promise<void>;
