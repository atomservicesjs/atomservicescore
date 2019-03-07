import { IQuery } from "./IQuery";
import { IQueryableResult } from "./IQueryableResult";

export interface IQueryable {
  query: <QueryResult = any, Query extends IQuery = IQuery>(query: Query) => Promise<IQueryableResult<QueryResult>>;
}
