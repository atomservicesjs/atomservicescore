import { IValidationResultType } from "../common/IValidationResultType";

export type CommandValidate<Payloads> = (payloads: Payloads) => IValidationResultType;
