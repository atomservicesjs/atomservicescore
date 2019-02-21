import { IValidationResultType } from "./IValidationResultType";

export type CommandValidate<Payloads> = (payloads: Payloads) => IValidationResultType;
