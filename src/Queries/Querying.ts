import { IQuery } from "../IQuery";

export type Querying<Payloads = any, QueryResult = any> = (query: IQuery<Payloads>, type: string) =>
  Promise<QueryResult>;
