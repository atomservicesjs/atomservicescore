import { IAtomQuery } from "./IAtomQuery";
import { IQueryableResult } from "./IQueryableResult";

export interface IQueryable {
  query: <QueryResult = any, Query extends IAtomQuery = IAtomQuery>(query: Query) =>
    Promise<IQueryableResult<QueryResult>>;
}
