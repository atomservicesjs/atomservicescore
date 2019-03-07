import { IValidationResultType } from "./common/IValidationResultType";
import { IQuery } from "./IQuery";

export interface IQueryHandler<Query extends IQuery = IQuery, QueryResult = any> {
  name: string;
  validate: (query: Query) => IValidationResultType;
  query: (query: Query) => Promise<QueryResult>;
}
