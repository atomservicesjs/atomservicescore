import { IAtomQuery } from "../IAtomQuery";

export type Querying<QueryResult = any> = (query: IAtomQuery) => Promise<QueryResult>;
