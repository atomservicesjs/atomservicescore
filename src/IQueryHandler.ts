import { IValidationResultType } from "./common/IValidationResultType";
import { IAtomQuery } from "./IAtomQuery";

export interface IQueryHandler<Query extends IAtomQuery = IAtomQuery, QueryResult = any> {
  name: string;
  validate: (query: Query) => IValidationResultType;
  query: (query: Query) => Promise<QueryResult>;
}
