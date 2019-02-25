import { IValidationResultType } from "./common/IValidationResultType";
import { IQuery } from "./IQuery";

export interface IQueryHandler<Payloads = any, QueryResult = any> {
  name: string;
  validate: (payloads: Payloads) => IValidationResultType;
  query: (query: IQuery<Payloads>) => Promise<QueryResult>;
}
