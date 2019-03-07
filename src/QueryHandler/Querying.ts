import { IQuery } from "../IQuery";

export type Querying<Query extends IQuery = IQuery, QueryResult = any> = (query: Query) => Promise<QueryResult>;
