import { StateQueryResultStatus } from "./StateQueryResultStatus";

export interface IStateQueryResult<State = any> {
  _ref: string;
  status: StateQueryResultStatus;
  origin: {
    action: "process" | "query";
    scope: string;
    type: string;
    name: string;
  };
  state?: State;
  error?: Error;
}
