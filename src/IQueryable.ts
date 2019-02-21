import { IQuery } from "./IQuery";
import { IQueryableResult } from "./IQueryableResult";

export interface IQueryable {
  query: <QueryResult = any, Payloads = any>(query: IQuery<Payloads>) => Promise<IQueryableResult<QueryResult>>;
}
