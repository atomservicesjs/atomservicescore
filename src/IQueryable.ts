import { IQuery } from "./IQuery";

export interface IQueryable {
  query: <QueryResult = any, Payloads = any>(query: IQuery<Payloads>) => Promise<QueryResult>;
}
