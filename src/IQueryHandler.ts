import { Querying } from "./Queries/Querying";
import { QueryValidate } from "./Queries/QueryValidate";

export interface IQueryHandler<Payloads = any, QueryResult = any> {
  name: string;
  validate: QueryValidate<Payloads>;
  query: Querying<Payloads, QueryResult>;
}
