import { Querying } from "./Queries/Querying";

export interface IQueryHandler<Payloads = any, QueryResult = any> {
  name: string;
  query: Querying<Payloads, QueryResult>;
}
