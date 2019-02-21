import { IStateQueryResult } from "./IStateQueryResult";

export type StateQueryStreamListener = (result: IStateQueryResult) => Promise<void>;
