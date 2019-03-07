import { IValidationResultType } from "../common/IValidationResultType";
import { IQuery } from "../IQuery";

export type QueryValidate<Query extends IQuery = IQuery> = (query: Query) => IValidationResultType;
