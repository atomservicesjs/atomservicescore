import { StateQueryAction } from "./StateQueryAction";
import { StateQueryStatus } from "./StateQueryStatus";

export interface IStateQueryResult<State = any> {
  _ref: string;
  status: StateQueryStatus;
  origin: {
    action: StateQueryAction;
    scope: string;
    type: string;
    name: string;
  };
  state?: State;
  error?: Error;
}
