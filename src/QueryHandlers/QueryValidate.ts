import { IValidationResultType } from "../common/IValidationResultType";

export type QueryValidate<Payloads> = (payloads: Payloads) => IValidationResultType;
