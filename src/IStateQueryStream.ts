import { IStateQueryResult } from "./IStateQueryResult";
import { StateQueryStreamListener } from "./StateQueryStreamListener";

export interface IStateQueryStream<RefType = any> {
  toRef: (ref: RefType, result: IStateQueryResult) => Promise<any>;
  fromRef: (ref: RefType, listener: StateQueryStreamListener) => void;
}
