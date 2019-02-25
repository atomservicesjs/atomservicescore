import { IValidationResultType } from "../common/IValidationResultType";

export type QueryValidate<Payloads = any> = (payloads: Payloads) => IValidationResultType;
