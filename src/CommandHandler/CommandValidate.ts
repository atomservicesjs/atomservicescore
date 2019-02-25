import { IValidationResultType } from "../common/IValidationResultType";

export type CommandValidate<Payloads = any> = (payloads: Payloads) => IValidationResultType;
